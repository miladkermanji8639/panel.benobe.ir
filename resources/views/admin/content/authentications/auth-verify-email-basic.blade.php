@php
$customizerHidden = 'customizer-hide';
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات - تایید ایمیل')

@section('page-style')
<!-- Page -->
@vite('resources/assets/vendor/scss/pages/page-auth.scss')
@endsection

@section('content')
<div class="authentication-wrapper authentication-basic px-4">
  <div class="authentication-inner py-4">
    <!-- Verify Email -->
    <div class="card">
      <div class="card-body">
        <!-- Logo -->
        <div class="app-brand justify-content-center mb-4 mt-2">
          <a href="{{url('/')}}" class="app-brand-link gap-2">
            <span class="app-brand-logo demo">@include('_partials.macros',['height'=>20,'withbg' => "fill: #fff;"])</span>
            <span class="app-brand-text demo text-body fw-bold ms-1">{{ config('variables.templateName') }}</span>
          </a>
        </div>
        <!-- /Logo -->
        <h4 class="mb-1 pt-2">تایید ایمیل ✉️</h4>
        <p class="text-start mb-4"> لینک فعال سازی حساب به ادرس ایمیل شما : hello@example.com ارسال می شود و باید روی لینک کلیک کنید تا تایید گردد.</p>
        <a class="btn btn-primary w-100 mb-3" href="{{url('/')}}">
          بعدا انجام میدم
        </a>
        <p class="text-center mb-0"> ایمیل ارسال نشد؟
          <a href="javascript:void(0);"> ارسال مجدد</a>
        </p>
      </div>
    </div>
    <!-- /Verify Email -->
  </div>
</div>
@endsection
