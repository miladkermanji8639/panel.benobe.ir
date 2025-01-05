@extends('dr.layouts.master-login')
@section('head-tag')
 <link rel="stylesheet" href="{{ asset('dr-assets/login/bootstrap5/bootstrap.min.css') }}">
 <link rel="stylesheet" href="{{ asset('dr-assets/login/css/login.css') }}">
 <meta name="csrf-token" content="{{ csrf_token() }}">
 <link rel="stylesheet" href="{{ asset('dr-asset/login/toast/toastify.css') }}">
 <script src="{{ asset('dr-asset/login/toast/toastify.js') }}"></script>
@endsection
@section('site-header')
 <title>پنل دکتر به نوبه</title>
@endsection
@section('content')
 <div class="login-wrapper d-flex w-100 justify-content-center align-items-center h-100vh">
  <div class="">
   @php
    $step = $step ?? 1;
   @endphp
   {{-- استپ اول: ورود با موبایل --}}
   @if ($step == 1)
    <div class="justify-content-center align-items-center">
     <div class="col-md-6 login-container position-relative">
      <div class="login-card custom-rounded custom-shadow p-7">
       <div class="logo-wrapper w-100 d-flex justify-content-center">
        <img class="position-absolute mt-3 cursor-pointer" onclick="location.href='/'" width="85px"
         src="{{ asset('app-assets/logos/benobe.svg') }}" alt="">
       </div>
       <div class="d-flex justify-content-between align-items- mb-3 mt-4">
        <div class="d-flex align-items-center">
         <div class="rounded-circle bg-primary me-2" style="width: 16px; height: 16px;"></div>
         <span class="text-custom-gray px-1 fw-bold">ورود کاربر</span>
        </div>
        <a href="javascript:void(0);" class="back-link text-primary d-flex align-items-center go-back"
         data-step="{{ $step }}">
         <span class="ms-2">بازگشت</span>
         <img src="{{ asset('dr-assets/login/images/back.svg') }}" alt="Back Icon" class="img-fluid"
          style="max-width: 24px;">
        </a>
       </div>
       <form id="login-form-step1" method="POST">
        @csrf
        <div class="mb-3">
         <div class="d-flex align-items-center mb-2">
          <img src="{{ asset('dr-assets/login/images/phone.svg') }}" alt="Phone Icon" class="me-2">
          <label class="text-custom-gray">شماره موبایل</label>
         </div>
         <input dir="ltr" class="form-control custom-rounded custom-shadow h-50" type="text" name="mobile"
          value="{{ old('mobile') }}" placeholder="09181234567" maxlength="11">
         <div class="invalid-feedback mobile-error"></div>
        </div>
        <a href="{{ route('dr.auth.login-user-pass-form') }}" class="text-primary text-decoration-none mb-3 d-block">
         ورود با نام کاربری و کلمه عبور
        </a>
        <button type="submit"
         class="btn btn-primary w-100 custom-gradient custom-rounded py-2 d-flex justify-content-center">
         ادامه
        </button>
        <div class="d-flex align-items-center mt-3">
         <input type="checkbox" class="form-check-input me-2" name="terms_accepted"
          style="vertical-align: middle; margin-top: -2px;">
         <label class="p-0 d-flex align-items-center" style="vertical-align: middle;">
          <a href="#" class="text-primary text-decoration-none px-1">شرایط و قوانین</a>
          <span>را خوانده‌ام و پذیرفته‌ام</span>
         </label>
        </div>
       </form>
      </div>
     </div>
    </div>
   @endif
   {{-- استپ دوم: تایید کد OTP --}}
   @if ($step == 2)
    <div class="justify-content-center align-items-center">
     <div class="col-md-6 login-container position-relative">
      <div class="login-card custom-rounded custom-shadow p-7">
       <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex align-items-center">
         <div class="rounded-circle bg-primary me-2" style="width: 16px; height: 16px;"></div>
         <span class="text-custom-gray px-1">ورود کاربر</span>
        </div>
        <a href="javascript:void(0);" class="back-link text-primary d-flex align-items-center go-back"
         data-step="{{ $step }}">
         <span class="ms-2">بازگشت</span>
         <img src="{{ asset('dr-assets/login/images/back.svg') }}" alt="Back Icon" class="img-fluid"
          style="max-width: 24px;">
        </a>
       </div>
       <form id="otp-form" method="POST" action="{{ route('dr.auth.login-confirm', ['token' => $token]) }}">
        @csrf
        <div class="d-flex justify-content-between mb-3" dir="rtl">
         @for ($i = 0; $i < 4; $i++)
          <input type="text" name="otp[]" maxlength="1"
           class="form-control otp-input text-center custom-rounded border">
         @endfor
        </div>
        <div class="invalid-feedback otp-error" id="otp-error" style="display: none;"></div>
        <button type="submit"
         class="btn btn-primary w-100 custom-gradient custom-rounded py-2 d-flex justify-content-center">
         ادامه
        </button>
        <section id="resend-otp" class="d-none mt-2">
         <a href="{{ route('dr.auth.login-resend-otp', $token) }}"
          class="text-decoration-none text-primary fw-bold">دریافت
          مجدد کد تایید</a>
        </section>
        <section style="font-size: 13px" class="text-black fw-bold fs-6 mt-3" id="timer"></section>
       </form>
      </div>
     </div>
    </div>
   @endif
   {{-- استپ سوم: ورود با نام کاربری و کلمه عبور --}}
   @if ($step == 3)
    <div class="justify-content-center align-items-center">
     <div class="col-md-6 login-container position-relative">
      <div class="login-card custom-rounded custom-shadow p-7">
       <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex align-items-center">
         <div class="rounded-circle bg-primary me-2" style="width: 16px; height: 16px;"></div>
         <span class="text-custom-gray px-1">ورود کاربر</span>
        </div>
        <a href="javascript:void(0);" class="back-link text-primary d-flex align-items-center go-back"
         data-step="{{ $step }}">
         <span class="ms-2">بازگشت</span>
         <img src="{{ asset('dr-assets/login/images/back.svg') }}" alt="Back Icon" class="img-fluid"
          style="max-width: 24px;">
        </a>
       </div>
       <form id="login-with-pass-form" method="POST" action="{{ route('dr-login-with-mobile-pass') }}">
        @csrf
        <div class="mb-3">
         <div class="d-flex align-items-center mb-2">
          <img src="{{ asset('dr-assets/login/images/phone.svg') }}" alt="Phone Icon" class="me-2">
          <label class="text-custom-gray">شماره موبایل</label>
         </div>
         <input dir="ltr" class="form-control custom-rounded custom-shadow h-50" type="text" name="mobile"
          value="{{ old('mobile') }}" placeholder="09181234567" maxlength="11">
         <div class="invalid-feedback mobile-error"></div>
        </div>
        <div class="mb-3">
         <div class="d-flex align-items-center mb-2">
          <img src="{{ asset('dr-assets/login/images/password.svg') }}" alt="Password Icon" class="me-2">
          <label class="text-custom-gray">رمز عبور</label>
         </div>
         <div class="position-relative">
          <input class="form-control custom-rounded custom-shadow h-50 text-end" type="password" name="password"
           placeholder="رمز عبور خود را وارد کنید">
          <img src="{{ asset('dr-assets/login/images/visible.svg') }}" alt="Visible Icon" class="password-toggle"
           onclick="togglePasswordVisibility(this)">
         </div>
         <div class="invalid-feedback password-error"></div>
        </div>
        <button type="submit"
         class="btn btn-primary w-100 custom-gradient custom-rounded py-2 d-flex justify-content-center">
         ادامه
        </button>
       </form>
      </div>
     </div>
    </div>
   @endif
   {{-- استپ چهارم: ورود با رمز عبور دو مرحله‌ای --}}
   @if ($step == 4)
    <div class="justify-content-center align-items-center">
     <div class="col-md-6 login-container position-relative">
      <div class="login-card custom-rounded custom-shadow p-7">
       <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex align-items-center">
         <div class="rounded-circle bg-primary me-2" style="width: 16px; height: 16px;"></div>
         <span class="text-custom-gray px-1">ورود کاربر</span>
        </div>
        <a href="javascript:void(0);" class="back-link text-primary d-flex align-items-center go-back"
         data-step="{{ $step }}">
         <span class="ms-2">بازگشت</span>
         <img src="{{ asset('dr-assets/login/images/back.svg') }}" alt="Back Icon" class="img-fluid"
          style="max-width: 24px;">
        </a>
       </div>
       <form id="two-factor-check-form" method="POST" action="{{ route('dr-two-factor-store') }}">
        @csrf
        <div class="mb-3">
         <div class="d-flex align-items-center mb-2">
          <img src="{{ asset('dr-assets/login/images/password.svg') }}" alt="Password Icon" class="me-2">
          <label class="text-custom-gray">رمز دوعاملی</label>
         </div>
         <input dir="ltr" class="form-control custom-rounded custom-shadow h-50" type="password"
          name="two_factor_secret" placeholder="رمز عبور خود را وارد کنید">
         <div class="invalid-feedback two-factor-error"></div>
        </div>
        <button type="submit"
         class="btn btn-primary w-100 custom-gradient custom-rounded py-2 d-flex justify-content-center">
         ادامه
        </button>
       </form>
      </div>
     </div>
    </div>
   @endif
  </div>
 </div>
@endsection
@section('scripts')
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
 <script src="{{ asset('dr-assets/js/login.js') }}"></script>
 @php
  // محاسبه زمان باقی‌مانده برای تایمر
  $remainingTime = 0;
  if (isset($otp) && $otp instanceof \App\Models\Dr\Otp) {
      $remainingTime = max(0, ($otp->created_at->addMinutes(2)->timestamp - now()->timestamp) * 1000);
  } elseif (isset($token)) {
      // اگر توکن موجود است، تلاش برای بازیابی OTP
      $otp = \App\Models\Dr\Otp::where('token', $token)->first();
      if ($otp) {
          $remainingTime = max(0, ($otp->created_at->addMinutes(2)->timestamp - now()->timestamp) * 1000);
      }
  }
 @endphp

 <script>
  // استفاده از زمان باقی‌مانده از سمت سرور  
  var countDownDate = new Date().getTime() + {{ $remainingTime }};
  var timer = $('#timer');
  var resendOtp = $('#resend-otp');
  var x = setInterval(function() {
   var now = new Date().getTime();
   var distance = countDownDate - now;
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   // بروزرسانی نمایش تایمر  
   if (minutes === 0 && seconds === 0) {
    timer.html('کد تایید منقضی شده است.');
   } else if (minutes === 0) {
    timer.html('ارسال مجدد کد تایید تا ' + seconds + ' ثانیه دیگر');
   } else {
    timer.html('ارسال مجدد کد تایید تا ' + minutes + ' دقیقه و ' + seconds + ' ثانیه دیگر');
   }
   // اگر زمان به پایان برسد  
   if (distance < 0) {
    clearInterval(x);
    timer.addClass('d-none');
    resendOtp.removeClass('d-none');
   }
  }, 1000);
 </script>

 <script>
  /* set timer */
  /* set timer */
  function showToast(message, type) {
   Toastify({
    text: message,
    duration: 5000,
    close: true,
    gravity: "top",
    position: 'right',
    style: {
     background: type === 'success' ? 'green' : 'red'
    }
   }).showToast();
  }
  $(document).ready(function() {
   // Check if we have a token for the AJAX request
   const token = "{{ $token ?? '' }}"; // Use an empty string as a fallback
   let countDownDate;

   function startTimer(remainingTime = 120000) {
    clearInterval(window.timerInterval); // پاک کردن تایمر قبلی

    countDownDate = new Date().getTime() + remainingTime;

    window.timerInterval = setInterval(function() {
     let now = new Date().getTime();
     let distance = countDownDate - now;

     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

     let timerText = minutes === 0 ?
      `ارسال مجدد کد تایید تا ${seconds} ثانیه دیگر` :
      `ارسال مجدد کد تایید تا ${minutes} دقیقه و ${seconds} ثانیه دیگر`;

     $('#timer').text(timerText);

     if (distance < 0) {
      clearInterval(window.timerInterval);
      $('#timer').addClass('d-none');
      $('#resend-otp').removeClass('d-none');
     }
    }, 1000);
   }

   function showRateLimitAlert(remainingTime) {
    const swalWithProgress = Swal.mixin({
     customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger'
     },
     buttonsStyling: false
    });

    let timerInterval;
    swalWithProgress.fire({
     icon: 'error',
     title: 'تلاش بیش از حد برای ورود به سایت',
     html: `لطفاً <b id="remaining-time">${formatTime(remainingTime)}</b> دیگر صبر کنید.`,
     timer: remainingTime * 1000,
     timerProgressBar: true,
     didOpen: () => {
      const remainingTimeElement = document.getElementById('remaining-time');
      timerInterval = setInterval(() => {
       remainingTime--;
       remainingTimeElement.innerHTML = formatTime(remainingTime);
      }, 1000);
     },
     willClose: () => {
      clearInterval(timerInterval);
     }
    });
   }
   // ارسال مجدد OTP
   // ارسال مجدد OTP
   $('#resend-otp').on('click', function(e) {
    e.preventDefault();

    if (!token) {
     showToast('توکن نامعتبر است', 'error');
     return;
    }
    $.ajax({
     url: "{{ route('dr.auth.login-resend-otp', ['token' => ':token']) }}".replace(':token', token),
     method: 'GET',
     success: function(response) {
      if (response.token) {
       // به‌روزرسانی توکن جدید

       $('#otp-form').attr('action', "{{ route('dr.auth.login-confirm', ['token' => ':token']) }}".replace(
        ':token', response.token));
       startTimer(120000); // زمان جدید برای تایمر
      }
      // مخفی کردن دکمه ارسال مجدد
      $('#resend-otp').addClass('d-none');
      $('#timer').removeClass('d-none');

      // نمایش پیام موفقیت
      showToast("کد تأیید جدید با موفقیت ارسال شد", 'success');
     },
     error: function(xhr) {

      if (xhr.status === 429) {
       let remainingTime = xhr.responseJSON.remaining_time || 0;
       showRateLimitAlert(remainingTime);
      } else if (xhr.status === 422) {
       const errorMessage = xhr.responseJSON?.message || 'خطا در ارسال مجدد کد';
       showToast(errorMessage, 'error');
      }
     }
    });
   });
   // شروع تایمر اولیه
   startTimer({{ $remainingTime }});
   $('.go-back').on('click', function() {
    const currentStep = parseInt($(this).data('step'));
    if (currentStep > 1) { // ریست کردن تایمر
     window.location.href = "{{ route('dr.auth.login-register-form') }}?step=" + (currentStep - 1);
    }
   });
   // متغیرهای عمومی
   // تابع نمایش لودینگ در دکمه
   function showButtonLoading(button) {
    button.prop('disabled', true);
    button.html('<div class="loader"></div>');
   }
   // تابع بازگرداندن دکمه به حالت اولیه
   function resetButton(button, text) {
    button.prop('disabled', false);
    button.html(text);
   }
   $('#login-form-step1').on('submit', function(e) {
    e.preventDefault();
    const form = $(this);
    const submitButton = form.find('button[type="submit"]');
    const termsCheckbox = form.find('input[name="terms_accepted"]');

    if (!termsCheckbox.is(':checked')) {
     Swal.fire({
      icon: 'warning',
      text: 'لطفا قوانین و شرایط را مطالعه و تایید کنید',
      confirmButtonText: 'تایید'
     });
     return;
    }

    showButtonLoading(submitButton);
    $('.error-message').remove();

    $.ajax({
     url: "{{ route('dr.auth.login-register') }}",
     method: 'POST',
     data: form.serialize(),
     success: function(response) {
      showToast("کد تایید با موفقیت ارسال شد", 'success');
      window.location.href = "{{ route('dr.auth.login-confirm-form', ['token' => ':token']) }}".replace(
       ':token', response.token);
     },
     error: function(xhr) {
      resetButton(submitButton, 'ادامه');
      if (xhr.status === 429) {
       let remainingTime = xhr.responseJSON.remaining_time || 0;
       showRateLimitAlert(remainingTime);
      } else if (xhr.status === 422) {
       const errors = xhr.responseJSON.errors;
       Object.keys(errors).forEach(function(key) {
        $(`[name="${key}"]`).addClass('is-invalid');
        $(`[name="${key}"]`).after(`<div class="error-message">${errors[key][0]}</div>`);
       });
      }
     }
    });
   });

   // تابع برای تبدیل ثانیه به فرمت دقیقه و ثانیه
   function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
     return '0 دقیقه و 0 ثانیه'; // مقدار پیش‌فرض برای مقادیر نامعتبر
    }
    const minutes = Math.floor(seconds / 60); // دقیقه‌ها
    const remainingSeconds = Math.floor(seconds % 60); // ثانیه‌ها (بدون اعشار)
    return `${minutes} دقیقه و ${remainingSeconds} ثانیه`;
   }

   $('.otp-input').eq(3).focus();
   $('.otp-input').on('input', function() {
    const currentInput = $(this);
    const value = currentInput.val();
    // فقط اعداد مجاز باشند
    currentInput.val(value.replace(/[^0-9]/g, ''));
    if (value.length === 1) {
     const inputs = $('.otp-input');
     const currentIndex = inputs.index(currentInput);
     // اگر اولین اینپوت نیست، به قبلی فوکوس کن (از راست به چپ)
     if (currentIndex > 0) {
      inputs.eq(currentIndex - 1).focus();
     }
    }
   });
   // کی‌داون برای حرکت به عقب
   $('.otp-input').on('keydown', function(e) {
    const inputs = $('.otp-input');
    const currentIndex = inputs.index($(this));
    if (e.key === 'Backspace' && $(this).val().length === 0) {
     // اگر آخرین اینپوت نیست، به بعدی فوکوس کن (از راست به چپ)
     if (currentIndex < inputs.length - 1) {
      inputs.eq(currentIndex + 1).focus().select();
     }
    }
   });
   $('#otp-form').on('submit', function(e) {
    e.preventDefault();
    const form = $(this);
    const submitButton = form.find('button[type="submit"]');
    $('#otp-error').hide(); // پنهان کردن ارور قبلی
    showButtonLoading(submitButton);
    // بررسی ورودی‌های OTP
    const otpInputs = $('.otp-input');
    const otpValues = otpInputs.map(function() {
     return $(this).val();
    }).get().reverse().join('');
    if (otpValues.length < 4) {
     $('#otp-error').text('لطفا تمام کد را وارد کنید.').show();
     resetButton(submitButton, 'ادامه');
     return;
    }
    $('.error-message').remove();
    $.ajax({
     url: form.attr('action'),
     method: 'POST',
     data: form.serialize(),
     success: function(response) {
      showToast(" با موفقیت وارد شدید ", 'success');
      window.location.href = response.redirect;
     },
     error: function(xhr) {
      resetButton(submitButton, 'ادامه');
      $('#otp-error').text('کد وارد شده نادرست است.').show();
      if (xhr.status === 429) {
       let remainingTime = xhr.responseJSON.remaining_time || 0;
       showRateLimitAlert(remainingTime);
      } else {
       // سایر خطاها
      }
     }
    });
   });

   $('#login-with-pass-form').on('submit', function(e) {
    e.preventDefault();
    const form = $(this);
    const submitButton = form.find('button[type="submit"]');
    showButtonLoading(submitButton); // اضافه کردن لودینگ
    $('.error-message').remove();
    $.ajax({
     url: form.attr('action'),
     method: 'POST',
     data: form.serialize(),
     success: function(response) {
      showToast("  لطفا کد دو عاملی را در صورت فعالسازی وارد کنید ", 'success');
      window.location.href = response.redirect; // انتقال به استپ 4
     },
     error: function(xhr) {
      resetButton(submitButton, 'ادامه');
      if (xhr.status === 422) {
       const errors = xhr.responseJSON.errors;


       $('.password-error').text(errors['mobile-pass-errors'] || 'لطفا اطلاعات خواسته شده را به درستی وارد کنید')
        .show();
      }

      if (xhr.status === 429) {
       let remainingTime = xhr.responseJSON.remaining_time || 0;
       showRateLimitAlert(remainingTime);
      }
     }
    });
   });
   $('#two-factor-check-form').on('submit', function(e) {
    e.preventDefault();
    const form = $(this);
    const submitButton = form.find('button[type="submit"]');
    showButtonLoading(submitButton);
    $('.error-message').remove();
    $.ajax({
     url: form.attr('action'),
     method: 'POST',
     data: form.serialize(),
     success: function(response) {
      showToast("  با موفقیت وارد شدید", 'success');
      window.location.href = response.redirect;
     },
     error: function(xhr) {
      resetButton(submitButton, 'ادامه');
      if (xhr.status === 422) {
       const errors = xhr.responseJSON.errors;
       $('.two-factor-error').text(errors['two_factor_secret'] || 'خطا در ورود').show();
      }
      if (xhr.status === 429) {
       let remainingTime = xhr.responseJSON.remaining_time || 0;
       showRateLimitAlert(remainingTime);
      }
     }
    });
   });
  });
 </script>
@endsection
