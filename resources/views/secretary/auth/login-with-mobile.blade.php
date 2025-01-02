@extends('dr.layouts.master-login')
@section('head-tag')
 <link rel="stylesheet" href="{{ asset('dr-assets/css/auth/login.css') }}">
@endsection
@section('site-header')
 <title>پنل منشی به نوبه</title>
@endsection

@section('content')
 @error('id')
  <div class="d-flex justify-content-center mt-4">
   <span class="alert alert-danger" role="alert">
    <strong>
     {{ $message }}
    </strong>
   </span>
  </div>
 @enderror
 <section class="login-dr-content d-flex justify-content-center align-items-center">
  <section class="login-wrapper">
   <section class="login-logo cursor-pointer" onclick="location.href=''">
    <img src="{{ asset('app-assets/logos/benobe.svg') }}" alt="">

   </section>
   <section class="login-title fs-5">ورود به پنل منشی</section>
   <section class="login-info fs-6">برای ورود شماره موبایل خود را وارد کنید.</section>
   <form action="{{ route('login-with-mobile') }}" method="POST">
    @csrf
    <section class="login-input-text">
     <input type="text" name="mobile" class="form-control" id="login-input-dr" placeholder="09123456789">
     <section class="my-invalid-feedback"></section>
    </section>

    <section class="login-btn d-grid g-2"><button class="btn btn-secondary disabled btn-lg" type="submit"
      id="btn-login-dr"> ارسال کد تایید
      <span class="loading-svg-container d-none">
       <svg x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
        <path class="loading-track" stroke-width="4" fill="none" pathLength="100"
         d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"></path>
        <path class="loading-car" stroke-width="4" fill="none" pathLength="100"
         d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"></path>
       </svg>
      </span>

     </button>
     <button type="button" onclick="location.href='{{ route('login-secretary') }}'"
      class="btn btn-outline-danger w-100 mt-3" id="login-user-pass-btn">ورود با نام کاربری و کلمه عبور </button>
    </section>


   </form>

   <section class="login-terms-and-conditions fs-6"><a href="#" class="fs-6">شرایط و قوانین</a> را خوانده ام و
    پذیرفته ام</section>

  </section>
 </section>
@endsection

@section('scripts')
 <script src="{{ asset('dr-assets/js/login.js') }}"></script>
 {{-- sweet alert --}}
 @include('admin.content.alerts.sweetalert.success')
 @include('admin.content.alerts.sweetalert.error')
 @include('admin.content.alerts.sweetalert.delete-confirm', ['className' => 'delete'])
 {{-- sweet alert --}}
 <script>
  document.querySelector('form').addEventListener('submit', function(event) {
   event.preventDefault(); // جلوگیری از ارسال پیش فرض فرم  

   const button = document.getElementById('btn-login-dr');
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
@endsection
