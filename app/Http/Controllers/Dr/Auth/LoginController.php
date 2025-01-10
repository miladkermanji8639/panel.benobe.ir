<?php
namespace App\Http\Controllers\Dr\Auth;
use App\Http\Requests\MobilePassRequest;
use App\Http\Requests\OtpDoctorsRequest;
use App\Http\Requests\TwoFactorRequest;
use Carbon\Carbon;
use App\Models\Dr\Otp;
use App\Models\Dr\Doctor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Dr\LoginAttempt;
use App\Http\Requests\MobileRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Modules\SendOtp\App\Http\Services\MessageService;
use Modules\SendOtp\App\Http\Services\SMS\SmsService;
use App\Http\Services\LoginAttemptsService\LoginAttemptsService;
class LoginController
{
  public function loginRegisterForm()
  {
    return view('dr.auth.login');
  }
  private function handleRateLimitError($mobile)
  {
    $loginAttempts = new LoginAttemptsService();
    $remainingTime = $loginAttempts->getRemainingLockTime($mobile);
    return response()->json([
      'success' => false,
      'message' => 'شما بیش از حد تلاش کرده‌اید',
      'remaining_time' => $remainingTime
    ], 429);
  }
  public function loginUserPassForm()
  {
    return view('dr.auth.login', ['step' => 3]);
  }
  public function twoFactorForm()
  {
    // بررسی اینکه آیا کاربر از استپ 3 آمده است یا خیر
    if (!session()->has('step3_completed')) {
      return redirect()->route('dr.auth.login-user-pass-form');
    }
    return view('dr.auth.login', ['step' => 4]);
  }
  public function loginConfirmForm($token)
  {
    // بررسی اینکه آیا کاربر از استپ 1 آمده است یا خیر
    if (!session()->has('step1_completed')) {
      return redirect()->route('dr.auth.login-register-form');
    }
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
  public function loginRegister(MobileRequest $request)
  {
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
    if ($loginAttempts->isLocked($mobile)) {
      return $this->handleRateLimitError($mobile);
    }
    $loginAttempts->incrementLoginAttempt($doctor->id ?? null, '0' . $mobile);
    // تنظیم session برای استپ 1
    session(['step1_completed' => true]);
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
    $messagesService = new MessageService(
      SmsService::create($otpCode, $doctor->mobile)
    );
    $messagesService->send();
    return response()->json(['token' => $token, 'otp_code' => $otpCode]); // توکن و کد جدید را برمی‌گرداند // Return the new token and OTP
  }
  public function loginConfirm(OtpDoctorsRequest $request, $token)
  {
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
    if ($loginAttempts->isLocked($mobile)) {
      return $this->handleRateLimitError($mobile);
    }
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
    session()->forget('step1_completed');
    return response()->json([
      'success' => true,
      'redirect' => route('dr-panel')
    ]);
  }
  public function loginWithMobilePass(MobilePassRequest $request)
  {

    $doctor = Doctor::where('mobile', $request->mobile)->first();

    $loginAttempts = new LoginAttemptsService();
    if ($doctor) {
      if ($loginAttempts->isLocked($doctor->mobile)) {
        return $this->handleRateLimitError($doctor->mobile);
      }
    } else {
      if ($loginAttempts->isLocked($request->mobile)) {
        return $this->handleRateLimitError($request->mobile);
      }
    }
    if (!$doctor || $doctor->mobile === null) {
      return response()->json([
        'success' => false,
        'errors' => ['mobile-pass-errors' => 'کاربری با این شماره موبایل وجود  ندارد']
      ], 422);
    }
    if ($doctor && $doctor->static_password_enabled) {
      if ($doctor && Hash::check($request->password, $doctor->password) && $doctor->status === 1 && $doctor->user_type === 'doctor') {
        // ذخیره اطلاعات کاربر در session به جای لاگین کامل
        session(['doctor_temp_login' => $doctor->id]);
        session(['step3_completed' => true]);
        if ($doctor->two_factor_secret_enabled) {
          $loginAttempts->incrementLoginAttempt($doctor->id ?? null, $doctor->mobile);
          return response()->json([
            'success' => true,
            'redirect' => route('dr-two-factor')
          ]);
        } else {
          Auth::guard('doctor')->login($doctor); // لاگین کامل اگر دو عاملی فعال نباشد
          $loginAttempts->resetLoginAttempts($doctor->mobile);
          return response()->json([
            'success' => true,
            'redirect' => route('dr-panel')
          ]);
        }
      } else {
        return response()->json([
          'success' => false,
          'errors' => ['mobile-pass-errors' => 'شماره موبایل یا کلمه عبور نادرست است']
        ], 422);
      }
    } else {
      $loginAttempts->incrementLoginAttempt($doctor->id ?? null, $doctor->mobile ?? $request->mobile);
      return response()->json([
        'success' => false,
        'errors' => ['mobile-pass-errors' => 'شما این قابلیت را هنوز فعال نکرده اید   و به این بخش دسترسی ندارید']
      ], 422);
    }


  }
  public function twoFactorFormCheck(TwoFactorRequest $request)
  {
    $doctorId = session('doctor_temp_login');
    if (!$doctorId) {
      return response()->json([
        'success' => false,
        'errors' => ['two_factor_secret' => 'دسترسی غیرمجاز'],
        'redirect' => route('dr.auth.login-register-form')
      ], 422);
    }
    $doctor = Doctor::findOrFail($doctorId)->first();
    $loginAttemptMobileCheckLogin = LoginAttempt::where('doctor_id', $doctor->id)
      ->where('mobile', $doctor->mobile)
      ->first();
    $loginAttempts = new LoginAttemptsService();
    if ($loginAttempts->isLocked($doctor->mobile)) {
      return $this->handleRateLimitError($doctor->mobile);
    }
    if ($loginAttemptMobileCheckLogin && $loginAttemptMobileCheckLogin->lockout_until > now()) {
      return response()->json([
        'success' => false,
        'errors' => ['two_factor_secret' => 'به علت تلاش‌های بیش از حد، شما فعلاً نمی‌توانید وارد شوید. لطفاً پس از اتمام زمان مورد نظر مجدداً تلاش کنید.']
      ], 422);
    }
    if (empty($doctor->two_factor_secret)) {
      if (empty($request->two_factor_secret)) {
        $loginAttempts->resetLoginAttempts($doctor->mobile);
        $doctor->two_factor_confirmed_at = now();
        $doctor->save();
        // لاگین کامل کاربر
        Auth::guard('doctor')->login($doctor);
        session()->forget('doctor_temp_login');
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
    if (Hash::check($request->two_factor_secret, $doctor->two_factor_secret)) {
      $loginAttempts->resetLoginAttempts($doctor->mobile);
      $doctor->two_factor_confirmed_at = now();
      $doctor->save();
      // لاگین کامل کاربر
      Auth::guard('doctor')->login($doctor);
      session()->forget('doctor_temp_login');
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
  public function loginResendOtp($token)
  {
    $loginAttempts = new LoginAttemptsService();
    $otp = Otp::where('token', $token)->first();
    $ccurrentDoctor = Doctor::where('id', $otp->doctor_id)->first();
    if (empty($otp) || $otp->used) {
      $loginAttempts->incrementLoginAttempt($ccurrentDoctor->id, $ccurrentDoctor->mobile);
      return response()->json(['error' => 'آدرس وارد شده نامعتبر است'], 422);
    }
    $doctor = $otp->doctor()->first();
    $loginAttempts->resetLoginAttempts($ccurrentDoctor->mobile);
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