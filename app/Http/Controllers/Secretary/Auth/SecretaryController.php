<?php

namespace App\Http\Controllers\Secretary\Auth;

use Carbon\Carbon;
use App\Models\Dr\Otp;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Dr\Secretary\Secretary;
use App\Http\Services\Message\MessageService;
use App\Http\Services\Message\SMS\SmsService;
use App\Http\Requests\Dr\Secretary\SecrataryRequest;

class SecretaryController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return view("secretary.auth.login");
    }
    public function loginWithMobileForm(){
        return view("secretary.auth.login-with-mobile");

    }
    public function register(SecrataryRequest $request)
    {

        $secretary = Secretary::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'mobile' => $request->mobile,
            'password' => $request->password == null ? '' : bcrypt($request->password),
            'user_type' => $request->user_type,
            'status' => "1",
        ]);


        return response()->json(['success' => 'منشی با موفقیت ثبت شد']);
    }

    public function getMonshis()
    {
        $monshis = Secretary::where('user_type', 1)->get();

        return response()->json($monshis);
    }

    public function destroy($id)
    {
        $monshi = Secretary::findOrFail($id);

        $monshi->delete();
        return response()->json(['success' => 'منشی با موفقیت حذف شد']);
    }
    public function loginWithMobilePass(Request $request)
    {
        $request->validate([
            'mobile' => 'required|string',
            'password' => 'required|string'
        ]);

        $secretary = Secretary::where('mobile', $request->mobile)->first();

        if ($secretary && password_verify($request->password, $secretary->password)) {
            Auth::guard('doctor')->login($secretary);
            return redirect()->route('secretary-two-factor');
            // به صفحه اصلی دایرکت کنید
        }

        return back()->withErrors([
            'mobile-pass-errors' => 'شماره موبایل یا کلمه عبور نادرست است.',
        ]);
    }
    public function twoFactorForm()
    {
        return view('secretary.auth.two-factor');
    }
    public function twoFactorFormCheck(Request $request)
    {
        $request->validate([
            'two_factor_password' => 'nullable|string',
        ]);

        $doctor = Auth::guard('doctor')->user();

        // اگر فیلد گذرواژه دو مرحله‌ای در دیتابیس خالی است
        if (empty($doctor->two_factor_password)) {

            // اگر کاربر چیزی وارد نکرده، اجازه ورود داده شود
            if (empty($request->two_factor_password)) {
                return redirect()->route('dr-panel')->with('swal-success', 'شما با موفقیت وارد شدید');
            } else {
                // اگر کاربر چیزی وارد کرده ولی فیلد در دیتابیس خالی است، پیام خطا نشان داده شود
                return back()->withErrors(['otp-code' => 'کد دو عاملی وارد شده صحیح نمی‌باشد']);
            }
        }

        // بررسی گذرواژه دو مرحله‌ای
        if ($request->two_factor_password === $doctor->two_factor_password) {
            return redirect()->route('dr-panel')->with('swal-success', 'شما با موفقیت وارد شدید');
        }

        return back()->withErrors(['otp-code' => 'کد دو عاملی وارد شده صحیح نمی‌باشد']);
    }

    public function loginWithMobile(Request $request)
    {
        $request->validate([
            'mobile' => 'required|string',
        ]);

        $inputs = $request->all();
        $secretary = null;

        if (preg_match('/^(\+98|98|0)9\d{9}$/', $inputs['mobile'])) {
            $inputs['mobile'] = preg_replace('/^(\+98|98|0)/', '', $inputs['mobile']);
            $secretary = Secretary::where('mobile', "0" . $inputs['mobile'])->first();
        } else {
            return redirect()->route('login-with-mobile-form')->withErrors(['id' => 'شناسه ورودی شما باید شماره موبایل باشد']);
        }

        if ($secretary) {
            if ($secretary->status === 1 and $secretary->user_type === 1) {
                return $this->sendOtp($secretary);
            } else {
                return redirect()->route('login-with-mobile-form')->withErrors(['id' => 'منشی با این شماره تلفن وجود ندارد یا حساب کاربری فعال نیست.']);
            }
        } else {
            return redirect()->route('login-with-mobile-form')->withErrors(['id' => 'کاربری با این شماره تلفن وجود ندارد.']);
        }
    }

    private function sendOtp($secretary)
    {
        $otpCode = rand(1000, 9999); // تولید کد ۴ رقمی عددی
        $token = Str::random(60);

        Otp::create([
            'token' => $token,
            'doctor_id' => $secretary->id, // در اینجا به جای doctor_id از secretary_id استفاده کنید
            'otp_code' => $otpCode,
            'login_id' => $secretary->mobile,
            'type' => 1, // نوع موبایل (1 برای منشی)
        ]);

        // ارسال SMS
        $smsService = new SmsService();
        $smsService->setSenderNumber(env('SMS_SENDER_NUMBER'));
        $smsService->setOtpId(env('SMS_OTP_ID'));
        $smsService->setParameters([$otpCode]);
        $smsService->setRecipientNumbers([$secretary->mobile]);

        $messagesService = new MessageService($smsService);
        $messagesService->send();

        return redirect()->route('secretary.login-confirm', $token);
    }

    public function loginConfirmForm($token)
    {
        $otp = Otp::where('token', $token)->first();
        if (empty($otp)) {
            return redirect()->route('login-with-mobile-form')->withErrors(['id' => 'آدرس وارد شده نامعتبر می‌باشد']);
        }
        return view('secretary.auth.login-confirm', compact('token', 'otp'));
    }

    public function loginConfirm($token, Request $request)
    {
        $request->validate(['otp_code' => 'required|string']);

        $otp = Otp::where('token', $token)
            ->where('used', 0)
            ->where('created_at', '>=', Carbon::now()->subMinutes(2)->toDateTimeString())
            ->first();

        if (empty($otp) || $otp->otp_code !== $request->otp_code) {
            return redirect()->route('secretary.login-confirm-form', $token)->withErrors(['otp-code' => 'کد وارد شده صحیح نمی‌باشد']);
        }

        $otp->update(['used' => 1]);
        $secretary = $otp->doctor()->first(); // تغییر نام به secretary

        Auth::guard('doctor')->login($secretary); // استفاده از guard مربوط به منشی
        return redirect()->route('dr-panel')->with('swal-success', 'شما با موفقیت به سایت وارد شدید');
    }

    public function loginResendOtp($token)
    {
        $otp = Otp::where('token', $token)->first();

        if (empty($otp) || $otp->used) {
            return redirect()->route('login-with-mobile-form')->withErrors(['id' => 'آدرس وارد شده نامعتبر است']);
        }

        $doctor = $otp->doctor()->first();
        return $this->sendOtp($doctor);
    }

    public function logout()
    {
        Auth::guard('doctor')->logout();
        return redirect()->route('login-secretary')->with('swal-success', 'شما با موفقیت از سایت خارج شدید');
    }
}
