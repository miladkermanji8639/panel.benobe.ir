@php
$customizerHidden = 'customizer-hide';
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات - ثبت نام')

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

      <!-- Register Card -->
      <div class="card">
        <div class="card-body">
          <!-- Logo -->
          <div class="app-brand justify-content-center mb-4 mt-2">
            <a href="{{url('/')}}" class="app-brand-link gap-2">
              <span class="app-brand-logo demo">@include('_partials.macros',["height"=>20,"withbg"=>'fill: #fff;'])</span>
              <span class="app-brand-text demo text-body fw-bold ms-1">{{config('variables.templateName')}}</span>
            </a>
          </div>
          <!-- /Logo -->
          <h4 class="mb-1 pt-2">شروع همه چی از اینجا 🚀</h4>
          <p class="mb-4">مدیریت برنامه خود را اسان و سرگرم کننده کنید!</p>

          <form id="formAuthentication" class="mb-3" action="{{url('/')}}" method="GET">
            <div class="mb-3">
              <label class="form-label" for="username">نام کاربری</label>
              <input autofocus class="form-control" id="username" name="username" placeholder="نام کاربری خود را وارد کنید" type="text"/>
            </div>
            <div class="mb-3">
              <label class="form-label" for="email">ایمیل</label>
              <input class="form-control" id="email" name="email" placeholder="ایمیل خود را وارد کنید" type="text"/>
            </div>
            <div class="mb-3 form-password-toggle">
              <label class="form-label" for="password">رمز عبور</label>
              <div class="input-group input-group-merge">
                <input type="password" id="password" class="form-control" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" />
                <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i></span>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="terms-conditions" name="terms">
                <label class="form-check-label" for="terms-conditions"> من با سیاست
                  <a href="javascript:void(0);">حفظ حریم خصوصی و شرایط</a>
                  موافقت می کنم
                </label>
              </div>
            </div>
            <button class="btn btn-primary d-grid w-100">ثبت نام</button>
          </form>

          <p class="text-center">
            <span>در حال حاضر یک حساب کاربری دارید؟</span>
            <a href="{{url('auth/login-basic')}}">
              <span>وارد شوید</span>
            </a>
          </p>

          <div class="divider my-4">
            <div class="divider-text">یا</div>
          </div>

          <div class="d-flex justify-content-center">
            <a href="javascript:;" class="btn btn-icon btn-label-facebook me-3">
              <i class="tf-icons fa-brands fa-facebook-f fs-5"></i>
            </a>

            <a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3">
              <i class="tf-icons fa-brands fa-google fs-5"></i>
            </a>

            <a href="javascript:;" class="btn btn-icon btn-label-twitter">
              <i class="tf-icons fa-brands fa-twitter fs-5"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Register Card -->
    </div>
  </div>
</div>
@endsection
