@php
$customizerHidden = 'customizer-hide';
@endphp
@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات - فراموشی رمز')

@section('vendor-style')
@vite([
  'resources/assets/vendor/libs/@form-validation/form-validation.scss'
])
@endsection

@section('page-style')
@vite([
  'resources/assets/vendor/scss/pages/page-auth.scss'
])
@endsection

@section('vendor-script')
@vite([
  'resources/assets/vendor/libs/@form-validation/popular.js',
  'resources/assets/vendor/libs/@form-validation/bootstrap5.js',
  'resources/assets/vendor/libs/@form-validation/auto-focus.js'
])
@endsection

@section('page-script')
@vite([
  'resources/assets/js/pages-auth.js'
])
@endsection

@section('content')
<div class="container-xxl">
  <div class="authentication-wrapper authentication-basic container-p-y">
    <div class="authentication-inner py-4">
      <!-- Forgot Password -->
      <div class="card">
        <div class="card-body">
          <!-- Logo -->
          <div class="app-brand justify-content-center mb-4 mt-2">
            <a href="{{url('/')}}" class="app-brand-link gap-2">
              <span class="app-brand-logo demo">@include('_partials.macros',['height'=>20,'withbg' => "fill: #fff;"])</span>
              <span class="app-brand-text demo text-body fw-bold">{{ config('variables.templateName') }}</span>
            </a>
          </div>
          <!-- /Logo -->
          <h4 class="mb-1 pt-2">رمز عبور را فراموش کرده اید؟ 🔒</h4>
          <p class="mb-4">ایمیل خود را وارد کنید و ما لینکی را جهت ثبت رمز جدید برای شما ارسال می کنیم</p>
          <form id="formAuthentication" class="mb-3" action="{{url('auth/reset-password-basic')}}" method="GET">
            <div class="mb-3">
              <label class="form-label" for="email">ایمیل</label>
              <input autofocus class="form-control" id="email" name="email" placeholder="ایمیل خود را وارد کنید" type="text"/>
            </div>
            <button class="btn btn-primary d-grid w-100">ارسال لینک</button>
          </form>
          <div class="text-center">
            <a href="{{url('auth/login-basic')}}" class="d-flex align-items-center justify-content-center">
              <i class="ti ti-chevron-left scaleX-n1-rtl"></i>
              بازگشت به صفحه ورود
            </a>
          </div>
        </div>
      </div>
      <!-- /Forgot Password -->
    </div>
  </div>
</div>
@endsection
