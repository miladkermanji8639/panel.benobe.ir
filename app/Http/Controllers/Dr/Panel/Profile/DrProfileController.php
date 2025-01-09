<?php

namespace App\Http\Controllers\Dr\Panel\Profile;

use Carbon\Carbon;
use App\Models\Dr\Otp;
use App\Models\Dr\Doctor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Dr\SubSpecialty;
use App\Models\Dr\AcademicDegree;
use App\Models\Dr\DoctorSpecialty;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\RateLimiter;
use Modules\SendOtp\App\Http\Services\MessageService;
use Modules\SendOtp\App\Http\Services\SMS\SmsService;

class DrProfileController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }
    public function subuser()
    {
        return view('dr.panel.profile.subuser');
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
    public function edit()
    {
        $doctor = Auth::guard('doctor')->user();
        $currentSpecialty = DoctorSpecialty::where('doctor_id', $doctor->id)->first();
        $specialtyName = $currentSpecialty->specialty_title ?? 'نامشخص';
        $specialties = DoctorSpecialty::where('doctor_id', $doctor->id)->get();
        $doctorSpecialties = DoctorSpecialty::where('doctor_id', $doctor->id)->get();
        /*  dd($doctorSpecialties); */
        $existingSpecialtiesCount = DoctorSpecialty::where('doctor_id', $doctor->id)->count();
        $doctorSpecialtyId = DoctorSpecialty::where('doctor_id', $doctor->id)->first();
        $academic_degrees = AcademicDegree::active()
            ->orderBy('sort_order')
            ->get();
        $messengers = $doctor->messengers;

        $sub_specialties = SubSpecialty::getOptimizedList();

        return view("dr.panel.profile.edit-profile", compact(['specialtyName', 'academic_degrees', 'sub_specialties', 'currentSpecialty', 'specialties', 'doctorSpecialtyId', 'existingSpecialtiesCount', 'messengers']));
    }
    public function DrSpecialtyUpdate(Request $request)
    {
        // Rate Limiting
        $key = 'DrSpecialtyUpdate_' . $request->ip();
        $maxAttempts = 5;
        $decayMinutes = 2;

        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
            $seconds = RateLimiter::availableIn($key);
            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'error_type' => 'rate_limit'
            ], 429);
        }

        RateLimiter::hit($key, $decayMinutes * 60);
        $doctor = Auth::guard('doctor')->user();

        // بررسی تعداد تخصص‌ها
        $validator = Validator::make($request->all(), [
            'academic_degree_id' => 'required|exists:academic_degrees,id',
            'specialty_id' => 'required|exists:sub_specialties,id',
            'specialty_title' => 'required|string',
            'degrees.*' => 'sometimes|exists:academic_degrees,id',
            'specialties.*' => 'sometimes|exists:sub_specialties,id',
            'titles.*' => 'sometimes|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            DB::beginTransaction();

            // به‌روزرسانی یا ایجاد تخصص اصلی
            $mainSpecialty = DoctorSpecialty::updateOrCreate(
                ['doctor_id' => $doctor->id, 'is_main' => true],
                [
                    'academic_degree_id' => $request->academic_degree_id,
                    'specialty_id' => $request->specialty_id,
                    'specialty_title' => $request->specialty_title
                ]
            );

            // اضافه کردن تخصص‌های جدید
            if ($request->has('degrees') && $request->has('specialties')) {
                $additionalSpecialtiesCount = 0;
                foreach ($request->degrees as $index => $degreeId) {
                    if (!empty($degreeId) && !empty($request->specialties[$index])) {
                        // بررسی تکراری نبودن
                        $duplicateSpecialty = DoctorSpecialty::where('doctor_id', $doctor->id)
                            ->where('specialty_id', $request->specialties[$index])
                            ->exists();

                        if ($duplicateSpecialty) {
                            continue; // از اضافه کردن تکراری جلوگیری می‌کند
                        }

                        $additionalSpecialtiesCount++;
                        if ($additionalSpecialtiesCount > 2) {
                            break; // محدود کردن به 2 تخصص اضافی
                        }

                        DoctorSpecialty::create([
                            'doctor_id' => $doctor->id,
                            'academic_degree_id' => $degreeId,
                            'specialty_id' => $request->specialties[$index],
                            'specialty_title' => $request->titles[$index] ?? null,
                            'is_main' => false
                        ]);
                    }
                }
            }

            DB::commit();

            // دریافت تخصص‌های جدید از دیتابیس
            $updatedSpecialties = DoctorSpecialty::where('doctor_id', $doctor->id)->where('is_main', 0)->get();

            return response()->json([
                'success' => true,
                'message' => 'اطلاعات تخصص با موفقیت به‌روزرسانی شد.',
                'specialties' => $updatedSpecialties // ارسال تخصص‌های جدید به صفحه
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Specialty Update Error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'خطایی در به‌روزرسانی اطلاعات تخصص رخ داد.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function DrUUIDUpdate(Request $request)
    {
        // Rate Limiting
        $key = 'DrSpecialtyUpdate_' . $request->ip();
        $maxAttempts = 5;
        $decayMinutes = 2;

        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
            $seconds = RateLimiter::availableIn($key);
            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'error_type' => 'rate_limit'
            ], 429);
        }

        RateLimiter::hit($key, $decayMinutes * 60);
        $doctor = Auth::guard('doctor')->user();

        // اعتبارسنجی UUID
        $validator = Validator::make($request->all(), [
            'uuid' => [
                'string',
                'nullable',
                'unique:doctors,uuid,' . $doctor->id,
                'regex:/^[a-zA-Z0-9_-]+$/', // فقط حروف انگلیسی، اعداد، خط تیره و زیرخط
                function ($attribute, $value, $fail) {
                    // بررسی تکراری نبودن UUID
                    $existingDoctor = Doctor::where('uuid', $value)
                        ->where('id', '!=', Auth::guard('doctor')->id())
                        ->first();

                    if ($existingDoctor) {
                        $fail('این UUID قبلاً توسط پزشک دیگری ثبت شده است');
                    }
                }
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // به‌روزرسانی UUID
        $doctor->uuid = $request->uuid;
        if ($doctor->save()) {
            return response()->json([
                'success' => true,
                'message' => 'آیدی شما با موفقیت تغییر کرد'
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'خطایی رخ داده'
            ]);
        }
    }
    public function deleteSpecialty($id)
    {
        try {
            // پیدا کردن تخصص بر اساس ID
            $specialty = DoctorSpecialty::findOrFail($id);

            // حذف تخصص
            $specialty->delete();

            return response()->json([
                'success' => true,
                'message' => 'تخصص با موفقیت حذف شد.'
            ]);
        } catch (\Exception $e) {
            Log::error('Delete Specialty Error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'خطا در حذف تخصص.'
            ], 500);
        }
    }
    public function updateMessengers(Request $request)
    {
        $doctor = Auth::guard('doctor')->user();

        // اعتبارسنجی داده‌ها
        $request->validate([
            'ita_phone' => [
                'nullable',
                'string',
                'max:20',
                'regex:/^(?!09{1}(\\d)\\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\\d{7}$/i'
            ],
            'ita_username' => 'nullable|string|max:100',
            'whatsapp_phone' => [
                'nullable',
                'string',
                'max:20',
                'regex:/^(?!09{1}(\\d)\\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\\d{7}$/i'
            ],
            'secure_call' => 'nullable|boolean',
        ], [
            'ita_phone.regex' => 'شماره موبایل ایتا را به درستی وارد کنید.',
            'whatsapp_phone.regex' => 'شماره موبایل واتس‌اپ را به درستی وارد کنید.',
        ]);

        // ذخیره یا به‌روزرسانی اطلاعات ایتا
        $doctor->messengers()->updateOrCreate(
            ['messenger_type' => 'ita'],
            [
                'phone_number' => $request->ita_phone,
                'username' => $request->ita_username,
                'is_secure_call' => $request->secure_call,
            ]
        );

        // ذخیره یا به‌روزرسانی اطلاعات واتساپ
        $doctor->messengers()->updateOrCreate(
            ['messenger_type' => 'whatsapp'],
            [
                'phone_number' => $request->whatsapp_phone,
                'is_secure_call' => $request->secure_call,
            ]
        );



        // پاسخ JSON برای Ajax
        return response()->json([
            'success' => true,
            'message' => 'اطلاعات پیام‌رسان‌ها با موفقیت به‌روزرسانی شد.',
        ]);
    }
    public function updateStaticPassword(Request $request)
    {
        // Rate Limiting
        $key = 'update_static_password_' . $request->ip();
        $maxAttempts = 5;
        $decayMinutes = 2;

        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
            $seconds = RateLimiter::availableIn($key);
            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'error_type' => 'rate_limit'
            ], 429);
        }

        RateLimiter::hit($key, $decayMinutes * 60);

        // Validate the request
        $validator = Validator::make($request->all(), [
            'static_password_enabled' => 'required|boolean',
            'password' => 'required_if:static_password_enabled,true|string|min:6|confirmed',
        ], [
            'password.required_if' => 'رمز عبور الزامی است.',
            'password.confirmed' => 'تکرار رمز عبور با رمز عبور اصلی مطابقت ندارد.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $doctor = Auth::guard('doctor')->user();

            // Update the static password enabled field
            $doctor->static_password_enabled = $request->static_password_enabled;

            // If enabled, set the password
            if ($request->static_password_enabled) {

                $hashedPass = Hash::make($request->password); // استفاده از Hash::make برای هش ک
                $doctor->password = $hashedPass;
            } else {
                // If disabled, clear the password
                $doctor->password = null;
            }

            $doctor->save();

            return response()->json([
                'success' => true,
                'message' => 'تنظیمات رمز عبور ثابت با موفقیت به‌روزرسانی شد.'
            ]);
        } catch (\Exception $e) {
            Log::error('Static Password Update Error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'خطای سرور در به‌روزرسانی رمز عبور ثابت',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    // در کنترلر DrProfileController

    public function updateTwoFactorAuth(Request $request)
    {
        // Rate Limiting
        $key = 'update_two_factor_auth_' . $request->ip();
        $maxAttempts = 5;
        $decayMinutes = 2;

        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
            $seconds = RateLimiter::availableIn($key);
            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'error_type' => 'rate_limit'
            ], 429);
        }

        RateLimiter::hit($key, $decayMinutes * 60);

        $request->validate([
            'two_factor_enabled' => 'required|boolean',
            'two_factor_secret' => $request->two_factor_enabled ? 'required|string|min:6' : 'nullable', // شرطی کردن اعتبارسنجی
        ]);

        $doctor = Auth::guard('doctor')->user();
        $doctor->two_factor_secret_enabled = $request->two_factor_enabled;
        $doctor->two_factor_secret = $request->two_factor_enabled ? Hash::make($request->two_factor_secret) : null; // استفاده از Hash::make برای هش کردن رمز عبور دو مرحله‌ای
        $doctor->save();

        return response()->json([
            'success' => true,
            'message' => 'تنظیمات گذرواژه دو مرحله‌ای با موفقیت به‌روزرسانی شد.',
        ]);
    }
    public function niceId()
    {
        return view("dr.panel.profile.edit-niceId");
    }
    public function security()
    {
        return view("dr.panel.profile.security");
    }
    public function upgrade()
    {
        return view("dr.panel.profile.upgrade");
    }


    /**
     * Update the specified resource in storage.
     */
    public function update_profile(Request $request)
    {
        // Rate Limiting
        // Rate Limiting
        $key = 'update_profile_' . $request->ip();
        $maxAttempts = 5;
        $decayMinutes = 2;

        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
            $seconds = RateLimiter::availableIn($key);
            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'error_type' => 'rate_limit'
            ], 429);
        }

        RateLimiter::hit($key, $decayMinutes * 60);

        try {
            // اعتبارسنجی داده‌ها
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'national_code' => 'nullable|string|max:10',
                'license_number' => 'nullable|string|max:20',
                'description' => 'nullable|string',
            ]);
            // اگر اعتبارسنجی شکست خورد
            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors()
                ], 422);
            }

            // دریافت کاربر احراز هویت شده
            $doctor = Auth::guard('doctor')->user();

            // به‌روزرسانی اطلاعات
            $doctor->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'national_code' => $request->national_code,
                'license_number' => $request->license_number,
                'bio' => $request->description,
            ]);

            // بازگرداندن پاسخ موفقیت
            return response()->json([
                'success' => true,
                'message' => 'پروفایل با موفقیت به‌روزرسانی شد.'
            ]);

        } catch (\Exception $e) {
            // ثبت خطا در لاگ
            Log::error('Profile Update Error: ' . $e->getMessage());

            // بازگرداندن خطای سرور
            return response()->json([
                'success' => false,
                'message' => 'خطای سرور در به‌روزرسانی پروفایل',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function sendMobileOtp(Request $request)
    {
        $request->validate([
            'mobile' => [
                'required',
                'regex:/^(?!09{1}(\d)\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\d{7}$/',
                function ($attribute, $value, $fail) {
                    // بررسی تکراری نبودن موبایل
                    $existingDoctor = Doctor::where('mobile', $value)->first();
                    if ($existingDoctor) {
                        $fail('این شماره موبایل قبلاً ثبت شده است');
                    }
                }
            ]
        ], [
            'mobile.required' => 'شماره موبایل الزامی است',
            'mobile.regex' => 'شماره موبایل نامعتبر است'
        ]);

        $doctor = Auth::guard('doctor')->user();
        return $this->sendOtp($doctor, $request->mobile);
    }

    private function sendOtp($doctor, $newMobile)
    {
        $otpCode = rand(1000, 9999); // تولید کد ۴ رقمی عددی
        $token = Str::random(60);
        Otp::create([
            'token' => $token,
            'doctor_id' => $doctor->id,
            'otp_code' => $otpCode,
            'login_id' => $newMobile,
            'type' => 0, // فقط موبایل
        ]);

        // ارسال SMS
        $smsService = new SmsService();
        $smsService->setSenderNumber(env('SMS_SENDER_NUMBER'));
        $smsService->setOtpId(env('SMS_OTP_ID'));
        $smsService->setParameters([$otpCode]);
        $smsService->setRecipientNumbers([$newMobile]);
        $messagesService = new MessageService($smsService);
        $messagesService->send();

        return response()->json(['token' => $token, 'otp_code' => $otpCode]); // توکن و کد جدید را برمی‌گرداند
    }

    // متد تایید کد OTP
    public function mobileConfirm(Request $request, $token)
    {
        // اعتبارسنجی درخواست
        $validator = Validator::make($request->all(), [
            'otp' => 'required|array',
            'otp.*' => 'required|numeric|digits:1',
            'mobile' => [
                'required',
                'regex:/^(?!09{1}(\d)\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\d{7}$/',
                function ($attribute, $value, $fail) {
                    // بررسی تکراری نبودن موبایل
                    $existingDoctor = Doctor::where('mobile', $value)
                        ->where('id', '!=', Auth::guard('doctor')->id())
                        ->first();

                    if ($existingDoctor) {
                        $fail('این شماره موبایل قبلاً توسط پزشک دیگری ثبت شده است');
                    }
                }
            ]
        ]);

        // بررسی خطاهای اعتبارسنجی
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()
            ], 422);
        }

        // بررسی وجود OTP با توکن جدید
        $otp = Otp::where('token', $token)
            ->where('used', 0)
            ->where('created_at', '>=', Carbon::now()->subMinutes(2))
            ->first();

        // بررسی اعتبار OTP
        if (!$otp) {
            return response()->json([
                'success' => false,
                'message' => 'کد تایید منقضی شده است'
            ], 422);
        }

        // بررسی کد OTP
        $otpCode = implode('', $request->otp);

        if ($otp->otp_code !== $otpCode) {
            return response()->json([
                'success' => false,
                'message' => 'کد تایید صحیح نمی‌باشد'
            ], 422);
        }

        // دریافت کاربر جاری
        $currentDoctor = Auth::guard('doctor')->user();

        // به‌روزرسانی شماره موبایل
        $updateResult = $currentDoctor->update([
            'mobile' => $request->mobile
        ]);

        // بررسی نتیجه به‌روزرسانی
        if (!$updateResult) {
            return response()->json([
                'success' => false,
                'message' => 'خطا در به‌روزرسانی شماره موبایل'
            ], 500);
        }

        // مارک کردن OTP به عنوان استفاده شده
        $otp->update(['used' => 1]);

        // لاگ برای بررسی
        Log::info('Mobile updated for doctor', [
            'doctor_id' => $currentDoctor->id,
            'old_mobile' => $currentDoctor->getOriginal('mobile'),
            'new_mobile' => $request->mobile
        ]);

        return response()->json([
            'success' => true,
            'message' => 'شماره موبایل با موفقیت تغییر یافت',
            'mobile' => $request->mobile
        ]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
