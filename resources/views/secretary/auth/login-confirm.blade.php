@extends('dr.layouts.master-login')
@section('head-tag')
 <link rel="stylesheet" href="{{ asset('dr-assets/css/auth/login.css') }}">
@endsection
@section('site-header')
 <title>پنل دکتر به نوبه</title>
@endsection

@section('content')
 <section class="login-dr-content  d-flex justify-content-center align-items-center">
  <section class="login-wrapper">
   <section class="login-logo cursor-pointer" onclick="location.href=''">
    <img src="{{ asset('app-assets/logos/benobe.svg') }}" alt="">


   </section>

   <section class="login-title  text-success">
    @if ($otp->type == 1)
     <section class="alert alert-success fw-bold " style="font-size: 13px !important">
      کد تایید برای شماره موبایل <span class="fw-bolder">{{ $otp->login_id }}</span> ارسال گردید
     </section>
    @endif
   </section>
   <section class="login-info fs-6 fw-bold">لطفا کد تایید ارسالی را وارد کنید.</section>
   <form action="{{ route('secretary.login-confirm-form', $token) }}" method="POST">
    @csrf
    <section class="login-input-text">
     <input type="text" name="otp_code" class="form-control" id="login-input-dr-otp" placeholder="1234">
     <section class="my-invalid-feedback-otp">
      @error('otp-code')
       <strong>
        {{ $message }}
       </strong>
      @enderror
     </section>
    </section>

    <section class="login-btn d-grid g-2"><button class="btn btn-secondary disabled btn-lg" type="submit"
      id="btn-login-dr-otp"> تایید
      <span class="loading-svg-container d-none">
       <svg x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
        <path class="loading-track" stroke-width="4" fill="none" pathLength="100"
         d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"></path>
        <path class="loading-car" stroke-width="4" fill="none" pathLength="100"
         d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"></path>
       </svg>
      </span>
     </button></section>

    <section id="resend-otp" class="d-none">
     <a href="{{ route('dr.auth.login-resend-otp', $token) }}" class="text-decoration-none text-primary fw-bold">دریافت
      مجدد کد تایید</a>
    </section>
    <section style="font-size: 13px" class="text-danger fw-bold" id="timer"></section>



   </form>
   <section class="login-btn d-grid g-2 mt-2">
    <button class="btn btn-outline-danger btn-lg" onclick="location.href='{{ route('login-with-mobile-form') }}'">
     <span class="fw-bold fs-6">
      بازگشت

     </span>
    </button>


   </section>
   <section class="login-terms-and-conditions fs-6"><a href="#" class="fs-6">شرایط و قوانین</a> را خوانده ام و
    پذیرفته ام</section>



  </section>
 </section>
@endsection

@section('scripts')
 <script src="{{ asset('dr-assets/js/login.js') }}"></script>
 @php
  $timer = ((new \Carbon\Carbon($otp->created_at))->addMinutes(2)->timestamp - \Carbon\Carbon::now()->timestamp) * 1000;
 @endphp

 <script>
  var countDownDate = new Date().getTime() + {{ $timer }};
  var timer = $('#timer');
  var resendOtp = $('#resend-otp');

  var x = setInterval(function() {

   var now = new Date().getTime();

   var distance = countDownDate - now;

   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   if (minutes == 0) {
    timer.html('ارسال مجدد کد تایید تا ' + seconds + 'ثانیه دیگر')
   } else {
    timer.html('ارسال مجدد کد تایید تا ' + minutes + 'دقیقه و ' + seconds + 'ثانیه دیگر');
   }
   if (distance < 0) {
    clearInterval(x);
    timer.addClass('d-none');
    resendOtp.removeClass('d-none');
   }

  }, 1000)
 </script>
 <script>
  document.querySelector('form').addEventListener('submit', function(event) {
   event.preventDefault(); // جلوگیری از ارسال پیش فرض فرم  

   const button = document.getElementById('btn-login-dr-otp');
   const loadingIndicator = button.querySelector('.loading-svg-container');

   // مخفی کردن متن دکمه و نمایش انیمیشن لودینگ  
   loadingIndicator.classList.remove('d-none'); // نمایش انیمیشن  
   button.childNodes[0].textContent = ''; // مخفی کردن متن  
   button.classList.add('disabled'); // غیرفعال کردن دکمه  

   // ارسال فرم به سرور  
   this.submit(); // ارسال فرم  

   // بعد از ارسال فرم، دکمه غیرفعال خواهد ماند تا صفحه بارگذاری شود  
   // بلافاصله نیازی به فعال کردن مجدد دکمه نیست چرا که صفحه بارگذاری خواهد شد  
  });
 </script>
 {{-- sweet alert --}}
 @include('admin.content.alerts.sweetalert.success')
 @include('admin.content.alerts.sweetalert.error')
 @include('admin.content.alerts.sweetalert.delete-confirm', ['className' => 'delete'])
 {{-- sweet alert --}}
@endsection
