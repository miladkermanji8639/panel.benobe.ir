@php
$currentRouteName = Route::currentRouteName();
$activeRoutes = ['front-pages-pricing', 'front-pages-payment', 'front-pages-checkout', 'front-pages-help-center'];
$activeClass = in_array($currentRouteName, $activeRoutes) ? 'active' : '';
@endphp
<!-- Navbar: Start -->
<nav class="layout-navbar shadow-none py-0">
  <div class="container">
    <div class="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
      <!-- Menu logo wrapper: Start -->
      <div class="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
        <!-- Mobile menu toggle: Start-->
        <button class="navbar-toggler border-0 px-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="ti ti-menu-2 ti-sm align-middle"></i>
        </button>
        <!-- Mobile menu toggle: End-->
        <a href="{{url('admin/front-pages/landing')}}" class="app-brand-link">
          <span class="app-brand-logo demo">@include('_partials.macros',['height'=>20,'withbg' => "fill: #fff;"])</span>
          <span  class="app-brand-text demo menu-text fw-bold ms-2 ps-1">{{ config('variables.templateName') }}</span>
        </a>
      </div>
      <!-- Menu logo wrapper: End -->
      <!-- Menu wrapper: Start -->
      <div class="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
        <button class="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="ti ti-x ti-sm"></i>
        </button>
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link fw-medium" aria-current="page" href="{{url('admin/front-pages/landing')}}#landingHero">صفحه اصلی</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium" href="{{url('admin/front-pages/landing')}}#landingFeatures">امکانات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium" href="{{url('admin/front-pages/landing')}}#landingTeam">تیم ما</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium" href="{{url('admin/front-pages/landing')}}#landingFAQ">سوالات متداول</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium" href="{{url('admin/front-pages/landing')}}#landingContact">ارتباط با ما</a>
          </li>
          <li class="nav-item mega-dropdown {{ $activeClass }}">
            <a href="javascript:void(0);" class="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium" aria-expanded="false" data-bs-toggle="mega-dropdown" data-trigger="hover">
              <span>صفحات</span>
            </a>
            <div class="dropdown-menu p-4">
              <div class="row gy-4">
                <div class="col-12 col-lg">
                  <div class="h6 d-flex align-items-center mb-2 mb-lg-3">
                    <div class="avatar avatar-sm flex-shrink-0 me-2">
                      <span class="avatar-initial rounded bg-label-primary"><i class='ti ti-layout-grid'></i></span>
                    </div>
                    <span class="ps-1">صفحات سایت</span>
                  </div>
                  <ul class="nav flex-column">
                    <li class="nav-item {{ $currentRouteName === 'front-pages-pricing' ? 'active' : '' }}">
                      <a class="nav-link mega-dropdown-link" href="{{ url('admin/front-pages/pricing') }}">
                        <i class='ti ti-circle me-1'></i>
                        <span>قیمت گذاری</span>
                      </a>
                    </li>
                    <li class="nav-item {{ $currentRouteName === 'front-pages-payment' ? 'active' : '' }}">
                      <a class="nav-link mega-dropdown-link" href="{{ url('admin/front-pages/payment') }}">
                        <i class='ti ti-circle me-1'></i>
                        <span>پرداخت</span>
                      </a>
                    </li>
                    <li class="nav-item {{ $currentRouteName === 'front-pages-checkout' ? 'active' : '' }}">
                      <a class="nav-link mega-dropdown-link" href="{{ url('admin/front-pages/checkout') }}">
                        <i class='ti ti-circle me-1'></i>
                        <span>ثبت سفارش</span>
                      </a>
                    </li>
                    <li class="nav-item {{ $currentRouteName === 'front-pages-help-center' ? 'active' : '' }}">
                      <a class="nav-link mega-dropdown-link" href="{{ url('admin/front-pages/help-center') }}">
                        <i class='ti ti-circle me-1'></i>
                        <span>مرکز پشتیبانی</span>
                      </a>
                    </li>
                    <li class="nav-item {{ $currentRouteName === 'front-pages-help-center-article' ? 'active' : '' }}">
                      <a class="nav-link mega-dropdown-link" href="{{ url('admin/front-pages/help-center-article') }}">
                        <i class='ti ti-circle me-1'></i>
                        <span>صفحه آموزش</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-lg">
                  <div class="h6 d-flex align-items-center mb-2 mb-lg-3">
                    <div class="avatar avatar-sm flex-shrink-0 me-2">
                      <span class="avatar-initial rounded bg-label-primary"><i class='ti ti-lock-open'></i></span>
                    </div>
                    <span class="ps-1">احراز هویت</span>
                  </div>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/login-basic')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        ورود به سیستم (پایه)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/login-cover')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        ورود به سیستم (کاور)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/register-basic')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        ثبت نام (پایه)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/register-cover')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        ثبت نام (کاور)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/register-multisteps')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        ثبت نام (چند مرحله‌ای)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/forgot-password-basic')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        فراموشی رمز ورود (اصلی)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/forgot-password-cover')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        فراموشی رمز ورود (کاور)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/reset-password-basic')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        ریست رمز ورود (اصلی)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/reset-password-cover')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        ریست رمز ورود (کاور)
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-lg">
                  <div class="h6 d-flex align-items-center mb-2 mb-lg-3">
                    <div class="avatar avatar-sm flex-shrink-0 me-2">
                      <span class="avatar-initial rounded bg-label-primary"><i class='ti ti-file-analytics'></i></span>
                    </div>
                    <span class="ps-1">دیگر صفحات</span>
                  </div>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//pages/misc-error')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        خطای 404
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//pages/misc-under-maintenance')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        دردست تعمیر
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//pages/misc-comingsoon')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        به زودی
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//pages/misc-not-authorized')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        عدم دسترسی
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/verify-email-basic')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        تأیید ایمیل (پایه)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/verify-email-cover')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        تأیید ایمیل (کاور)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/two-steps-basic')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        تأیید دومرحله (پایه)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mega-dropdown-link" href="{{url('admin//auth/two-steps-cover')}}" target="_blank">
                        <i class='ti ti-circle me-1'></i>
                        تأیید دومرحله (کاور)
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 d-none d-lg-block">
                  <div class="bg-body nav-img-col p-2">
                    <img src="{{asset('assets/img/front-pages/misc/nav-item-col-img.png')}}" alt="nav item col image" class="w-100">
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium" href="{{url('admin//')}}" target="_blank">ادمین</a>
          </li>
        </ul>
      </div>
      <div class="landing-menu-overlay d-lg-none"></div>
      <!-- Menu wrapper: End -->
      <!-- Toolbar: Start -->
      <ul class="navbar-nav flex-row align-items-center ms-auto">
        @if($configData['hasCustomizer'] == true)
        <!-- Style Switcher -->
        <li class="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
          <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
            <i class='ti ti-sm'></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-styles">
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="light">
                <span class="align-middle"><i class='ti ti-sun me-2'></i>روز</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="dark">
                <span class="align-middle"><i class="ti ti-moon me-2"></i>شب</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="system">
                <span class="align-middle"><i class="ti ti-device-desktop me-2"></i>سیستم</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- / Style Switcher-->
        @endif
        <!-- navbar button: Start -->
        <li>
          <a href="{{url('admin//auth/login-cover')}}" class="btn btn-primary" target="_blank"><span class="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span><span class="d-none d-md-block">ورود / ثبت نام</span></a>
        </li>
        <!-- navbar button: End -->
      </ul>
      <!-- Toolbar: End -->
    </div>
  </div>
</nav>
<!-- Navbar: End -->
