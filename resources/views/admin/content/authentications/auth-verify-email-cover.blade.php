@php
$customizerHidden = 'customizer-hide';
$configData = Helper::appClasses();
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات - تأیید ایمیل')

@section('page-style')
<!-- Page -->
@vite('resources/assets/vendor/scss/pages/page-auth.scss')
@endsection

@section('content')
<div class="authentication-wrapper authentication-cover authentication-bg ">
  <div class="authentication-inner row">

    <!-- /Left Text -->
    <div class="d-none d-lg-flex col-lg-7 p-0">
      <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
        <img src="{{ asset('assets/img/illustrations/auth-verify-email-illustration-'.$configData['style'].'.png') }}" alt="auth-verify-email-cover" class="img-fluid my-5 auth-illustration" data-app-light-img="illustrations/auth-verify-email-illustration-light.png" data-app-dark-img="illustrations/auth-verify-email-illustration-dark.png">

        <img src="{{ asset('assets/img/illustrations/bg-shape-image-'.$configData['style'].'.png') }}" alt="auth-verify-email-cover" class="platform-bg" data-app-light-img="illustrations/bg-shape-image-light.png" data-app-dark-img="illustrations/bg-shape-image-dark.png">
      </div>
    </div>
    <!-- /Left Text -->

    <!--  Verify email -->
    <div class="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
      <div class="w-px-400 mx-auto">
        <div class="app-brand mb-4">
          <a href="{{url('/')}}" class="app-brand-link gap-2">
            <span class="app-brand-logo demo">@include('_partials.macros',['height'=>20,'withbg' => "fill: #fff;"])</span>
          </a>
        </div>
        <h4 class="mb-1">تایید ایمیل ✉️</h4>
        <p class="text-start mb-4"> لینک فعال سازی حساب به ادرس ایمیل شما : hello@example.com ارسال می شود و باید روی لینک کلیک کنید تا تایید گردد.</p>
        <a class="btn btn-primary w-100 mb-3" href="{{url('/')}}">
          بعدا انجام میدم
        </a>
        <p class="text-center"> ایمیل ارسال نشد؟
          <a href="javascript:void(0);"> ارسال مجدد</a>
        </p>
      </div>
    </div>
    <!-- / Verify email -->
  </div>
</div>
@endsection