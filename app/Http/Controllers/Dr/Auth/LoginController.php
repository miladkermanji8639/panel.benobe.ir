<?php
namespace App\Http\Controllers\Dr\Auth;

use App\Models\Dr\Doctor;
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
      $remainingTime = max(0, ($otp->created_at->addMinutes(2)->timestamp - now()->timestamp) * 1000);
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

    if (!$doctor) {
      return response()->json([
        'success' => false,
        'errors' => ['mobile' => ['کاربری با این شماره تلفن وجود ندارد.']]
      ], 422);
    }

    if ($doctor->status !== 1 || $doctor->user_type !== 'doctor') {
      return response()->json([
        'success' => false,
        'errors' => ['mobile' => ['حساب کاربری فعال نیست.']]
      ], 422);
    }
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
    if (!$otp || $otp->otp_code !== $otpCode ) {
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

    if ($doctor && password_verify($request->password, $doctor->password)) {
      Auth::guard('doctor')->login($doctor);
      return response()->json([
        'success' => true,
        'redirect' => route('dr-two-factor')
      ]);
    }

    return response()->json([
      'success' => false,
      'errors' => ['mobile-pass-errors' => 'شماره موبایل یا کلمه عبور نادرست است']
    ], 422);
  }

  public function twoFactorFormCheck(Request $request)
  {
    $request->validate([
      'two_factor_password' => 'nullable|string'
    ]);

    $doctor = Auth::guard('doctor')->user();

    if (empty($doctor->two_factor_password)) {
      if (empty($request->two_factor_password)) {
        return response()->json([
          'success' => true,
          'redirect' => route('dr-panel')
        ]);
      }

      return response()->json([
        'success' => false,
        'errors' => ['two_factor_password' => 'کد دو عاملی وارد شده صحیح نمی‌باشد']
      ], 422);
    }

    if ($request->two_factor_password === $doctor->two_factor_password) {
      return response()->json([
        'success' => true,
        'redirect' => route('dr-panel')
      ]);
    }

    return response()->json([
      'success' => false,
      'errors' => ['two_factor_password' => 'کد دو عاملی وارد شده صحیح نمی‌باشد']
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