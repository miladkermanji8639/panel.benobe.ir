<?php
namespace App\Http\Controllers\Dr\Auth;

use App\Http\Services\LoginAttemptsService\LoginAttemptsService;
use App\Models\Dr\Doctor;
use App\Models\Dr\LoginAttempt;
use App\Models\Dr\Otp;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Modules\SendOtp\App\Http\Services\SMS\SmsService;
use Modules\SendOtp\App\Http\Services\MessageService;

class LoginController
{
  public function loginRegisterForm()
  {
    return view('dr.auth.login');
  }

  public function loginUserPassForm()
  {
    return view('dr.auth.login', ['step' => 3]);
  }

  public function twoFactorForm()
  {
    return view('dr.auth.login', ['step' => 4]);
  }
  public function loginConfirmForm($token)
  {
    $otp = Otp::where('token', $token)->first();

    // Check if OTP exists before calculating remaining time
    if ($otp) {
      $remainingTime = max(0, (int) ($otp->created_at->addMinutes(2)->timestamp - now()->timestamp) * 1000);
    } else {
      $remainingTime = 0; // Or any default value you want to set
    }

    return view('dr.auth.login', [
      'step' => 2,
      'token' => $token,
      'otp' => $otp,
      'remainingTime' => $remainingTime
    ]);
  }


  public function loginRegister(Request $request)
  {
    $request->validate([
      'mobile' => [
        'required',
        'string',
        'regex:/^(?!09{1}(\d)\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\d{7}$/'
      ],
    ]);

    $mobile = preg_replace('/^(\+98|98|0)/', '', $request->mobile);
    $doctor = Doctor::where('mobile', "0" . $mobile)->first();
    $loginAttempts = new LoginAttemptsService();

    if (!$doctor) {
      $loginAttempts->incrementLoginAttempt($doctor->id ?? null, '0' . $mobile);
      return response()->json([
        'success' => false,
        'errors' => ['mobile' => ['کاربری با این شماره تلفن وجود ندارد.']]
      ], 422);
    }

    if ($doctor->status !== 1 || $doctor->user_type !== 'doctor') {
      $loginAttempts->incrementLoginAttempt($doctor->id ?? null, '0' . $mobile);


      return response()->json([
        'success' => false,
        'errors' => ['mobile' => ['حساب کاربری فعال نیست.']]
      ], 422);
    }
    if ($loginAttempts->isLocked('0' . $mobile)) {
      $remainingTime = $loginAttempts->getRemainingLockTime('0' . $mobile);
      return response()->json([
        'success' => false,
        'errors' => ['mobile' => ['شما بیش از حد تلاش کرده‌اید.']],
        'remaining_time' => $remainingTime // ارسال زمان باقی‌مانده به ویو
      ], 429);
    }
    $loginAttempts->incrementLoginAttempt($doctor->id ?? null, '0' . $mobile);

    return $this->sendOtp($doctor);
  }

  private function sendOtp($doctor)
  {
    $otpCode = rand(1000, 9999); // تولید کد ۴ رقمی عددی
    $token = Str::random(60);
    Otp::create([
      'token' => $token,
      'doctor_id' => $doctor->id,
      'otp_code' => $otpCode,
      'login_id' => $doctor->mobile,
      'type' => 0, // فقط موبایل
    ]);
    // ارسال SMS
    $smsService = new SmsService();
    $smsService->setSenderNumber(env('SMS_SENDER_NUMBER'));
    $smsService->setOtpId(env('SMS_OTP_ID'));
    $smsService->setParameters([$otpCode]);
    $smsService->setRecipientNumbers([$doctor->mobile]);
    $messagesService = new MessageService($smsService);
    $messagesService->send();
    return response()->json(['token' => $token, 'otp_code' => $otpCode]); // توکن و کد جدید را برمی‌گرداند // Return the new token and OTP
  }


  public function loginConfirm(Request $request, $token)
  {
    $request->validate([
      'otp' => 'required|array',
      'otp.*' => 'required|numeric|digits:1'
    ]);

    $otpCode = strrev(implode('', $request->otp));

    // بررسی وجود OTP با توکن جدید
    $otp = Otp::where('token', $token)
      ->where('used', 0)
      ->where('created_at', '>=', Carbon::now()->subMinutes(2))
      ->first();
    $doctorId = $otp->doctor_id;
    $currentDoctor = Doctor::where('id', $doctorId)->first();
    $mobile = $currentDoctor->mobile;

    $loginAttempts = new LoginAttemptsService();

    if (!$otp || $otp->otp_code !== $otpCode) {
      $loginAttempts->incrementLoginAttempt($doctorId ?? null, $mobile);

      return response()->json([
        'success' => false,
        'errors' => ['otp-code' => ['کد وارد شده صحیح نمی‌باشد']]
      ], 422);
    }

    $otp->update(['used' => 1]);
    $doctor = $otp->doctor;

    if (empty($doctor->mobile_verified_at)) {
      $doctor->update(['mobile_verified_at' => Carbon::now()]);
    }

    Auth::guard('doctor')->login($doctor);
    $loginAttempts->resetLoginAttempts($mobile);
    return response()->json([
      'success' => true,
      'redirect' => route('dr-panel')
    ]);
  }


  public function loginWithMobilePass(Request $request)
  {
    $request->validate([
      'mobile' => [
        'required',
        'string',
        'regex:/^(?!09{1}(\d)\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\d{7}$/'
      ],
      'password' => 'required|string'
    ]);

    $doctor = Doctor::where('mobile', $request->mobile)->first();
    $loginAttempts = new LoginAttemptsService();

    if ($doctor && password_verify($request->password, $doctor->password)) {
      $loginAttempts->incrementLoginAttempt($doctor->id ?? null, $doctor->mobile);

      Auth::guard('doctor')->login($doctor);
      return response()->json([
        'success' => true,
        'redirect' => route('dr-two-factor')
      ]);
    }
    $loginAttempts->incrementLoginAttempt($doctor->id ?? null, $doctor->mobile);

    return response()->json([
      'success' => false,
      'errors' => ['mobile-pass-errors' => 'شماره موبایل یا کلمه عبور نادرست است']
    ], 422);
  }

  public function twoFactorFormCheck(Request $request)
  {
    $request->validate([
      'two_factor_secret' => 'nullable|string'
    ]);

    $doctor = Doctor::findOrFail(Auth::guard('doctor')->id());
    $loginAttemptMobileCheckLogin = LoginAttempt::where('doctor_id', $doctor->id)
      ->where('mobile', $doctor->mobile)
      ->first();

    $loginAttempts = new LoginAttemptsService();

    // بررسی زمان قفل (lockout_until)
    if ($loginAttemptMobileCheckLogin && $loginAttemptMobileCheckLogin->lockout_until > now()) {
      return response()->json([
        'success' => false,
        'errors' => ['two_factor_secret' => 'به علت تلاش‌های بیش از حد، شما فعلاً نمی‌توانید وارد شوید. لطفاً پس از اتمام زمان مورد نظر مجدداً تلاش کنید.']
      ], 422);
    }

    // اگر کد دو مرحله‌ای تنظیم نشده باشد
    if (empty($doctor->two_factor_secret)) {
      if (empty($request->two_factor_secret)) {
        $loginAttempts->resetLoginAttempts($doctor->mobile);
        $doctor->two_factor_confirmed_at = now();
        $doctor->save();

        return response()->json([
          'success' => true,
          'redirect' => route('dr-panel')
        ]);
      }

      $loginAttempts->incrementLoginAttempt($doctor->id, $doctor->mobile);
      return response()->json([
        'success' => false,
        'errors' => ['two_factor_secret' => 'کد دو عاملی وارد شده صحیح نمی‌باشد']
      ], 422);
    }

    // اگر کد دو مرحله‌ای تنظیم شده باشد
    if ($request->two_factor_secret === $doctor->two_factor_secret) {
      $loginAttempts->resetLoginAttempts($doctor->mobile);
      $doctor->two_factor_confirmed_at = now();
      $doctor->save();

      return response()->json([
        'success' => true,
        'redirect' => route('dr-panel')
      ]);
    }

    // اگر کد دو مرحله‌ای اشتباه باشد
    $loginAttempts->incrementLoginAttempt($doctor->id, $doctor->mobile);
    return response()->json([
      'success' => false,
      'errors' => ['two_factor_secret' => 'کد دو عاملی وارد شده صحیح نمی‌باشد']
    ], 422);
  }

  public function loginResendOtp($token)
  {
    $otp = Otp::where('token', $token)->first();
    if (empty($otp) || $otp->used) {
      return response()->json(['error' => 'آدرس وارد شده نامعتبر است'], 422);
    }
    $doctor = $otp->doctor()->first();

    // ایجاد توکن جدید و ارسال OTP با آن
    return $this->sendOtp($doctor); // این تابع کد جدید و توکن جدید را برمی‌گرداند
  }





  public function logout()
  {
    Auth::guard('doctor')->logout();
    return redirect()->route('dr.auth.login-register-form')
      ->with('swal-success', 'شما با موفقیت از سایت خارج شدید');
  }
}