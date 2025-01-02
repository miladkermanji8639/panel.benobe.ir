@php
$customizerHidden = 'customizer-hide';
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'ورود به پنل ادمین')

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
@vite(['resources/assets/js/pages-auth.js'])
@endsection

@section('content')
<div class="container-xxl">
  <div class="authentication-wrapper authentication-basic container-p-y">
    <div class="authentication-inner py-4">
      <!-- Login -->
      <div class="card">
        <div class="card-body">
          <!-- Logo -->
          <div class="app-brand justify-content-center mb-4 mt-2">
            <a href="{{ url('/') }}"
               class="app-brand-link gap-2">
              <span class="app-brand-logo demo">@include('_partials.macros', ['height' => 20, 'withbg' => 'fill:
                #fff;'])</span>
              <span class="app-brand-text demo text-body fw-bold ms-1">{{ config('variables.templateName') }}</span>
            </a>
          </div>
          <!-- /Logo -->
          <h4 class="mb-1 pt-2">خوش آمدید به {{ config('variables.templateName') }}! 👋</h4>
          <p class="mb-4">لطفا به حساب کاربری خود وارد شوید تا از امکانات سامانه استفاده کنید.</p>
          @if(session()->has('error'))
          <div class="alert alert-danger mt-3">{{ session('error') }}</div>
          @endif

          <form id="formAuthentication"
                class="mb-3"
                action="{{ route('auth-login-basic-signin') }}"
                method="POST">
            @csrf
            <div class="mb-3">
              <label class="form-label"
                     for="email">ایمیل</label>
              <input autofocus
                     class="form-control"
                     id="email"
                     name="email"
                     value="{{ old('email') }}"
                     placeholder="ایمیل خود را وارد کنید"
                     type="text" />


            </div>
            @error('username')
            <div class="text-danger">
              {{ $message }}
            </div>
            @enderror
            <div class="form-password-toggle mb-3">
              <div class="d-flex justify-content-between">
                <label class="form-label"
                       for="password">رمز عبور</label>
                <a href="{{ url('auth/forgot-password-basic') }}">
                  <small>فراموش کرده‌اید؟</small>
                </a>
              </div>
              <div class="input-group input-group-merge">
                <input type="password"
                       id="password"
                       value="{{ old('password') }}"
                       class="form-control"
                       name="password"
                       placeholder="کلمه عبور"
                       aria-describedby="password" />

                <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i></span>


              </div>
              @error('password')
              <div class="text-danger mt-1">
                {{ $message }}
              </div>
              @enderror
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input"
                       type="checkbox"
                       id="remember-me">
                <label class="form-check-label"
                       for="remember-me"> مرا به خاطر بسپار</label>
              </div>

            </div>
            <div class="mb-3">
              <button class="btn btn-primary d-grid w-100"
                      type="submit">ورود به سیستم
              </button>
            </div>

          </form>
        </div>
      </div>
      <!-- /Register -->
    </div>
  </div>
</div>
@endsection