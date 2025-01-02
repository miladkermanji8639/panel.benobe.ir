@php
$containerNav = (isset($configData['contentLayout']) && $configData['contentLayout'] === 'compact') ? 'container-xxl' :
'container-fluid';
$navbarDetached = ($navbarDetached ?? '');
@endphp

<!-- Navbar -->

@if(isset($navbarDetached) && $navbarDetached == 'navbar-detached')
<nav class="layout-navbar {{$containerNav}} navbar navbar-expand-xl {{$navbarDetached}} align-items-center bg-navbar-theme"
     id="layout-navbar">
  @endif
  @if(isset($navbarDetached) && $navbarDetached == '')
  <nav class="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
       id="layout-navbar">
    <div class="{{$containerNav}}">
      @endif

      <!--  Brand demo (display only for navbar-full and hide on below xl) -->
      @if(isset($navbarFull))
      <div class="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4">
        <a href="{{url('admin/')}}"
           class="app-brand-link gap-2">
          <span class="app-brand-logo demo">
            @include('_partials.macros',["height"=>20])
          </span>
          <span class="app-brand-text demo menu-text fw-bold">{{config('variables.templateName')}}</span>
        </a>
        <a href="javascript:void(0);"
           class="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
          <i class="ti ti-x ti-sm align-middle"></i>
        </a>
      </div>
      @endif

      <!-- ! Not required for layout-without-menu -->
      @if(!isset($navbarHideToggle))
      <div
           class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0{{ isset($menuHorizontal) ? ' d-xl-none ' : '' }} {{ isset($contentNavbar) ?' d-xl-none ' : '' }}">
        <a class="nav-item nav-link px-0 me-xl-4"
           href="javascript:void(0)">
          <i class="ti ti-menu-2 ti-sm"></i>
        </a>
      </div>
      @endif

      <div class="navbar-nav-right d-flex align-items-center"
           id="navbar-collapse">

        @if(!isset($menuHorizontal))
        <!-- Search -->
        <div class="navbar-nav align-items-center">
          <div class="nav-item navbar-search-wrapper mb-0">
            <a class="nav-item nav-link search-toggler d-flex align-items-center px-0"
               href="javascript:void(0);">
              <i class="ti ti-search ti-md me-2 h-mirror"></i>
              <span class="d-none d-md-inline-block text-muted">جستجو (/+Ctrl)</span>
            </a>
          </div>
        </div>
        <!-- /Search -->
        @endif
        <ul class="navbar-nav flex-row align-items-center ms-auto">
          <!-- Language -->

          <!--/ Language -->

          @if(isset($menuHorizontal))
          <!-- Search -->
          <li class="nav-item navbar-search-wrapper me-2 me-xl-0">
            <a class="nav-link search-toggler"
               href="javascript:void(0);">
              <i class="ti ti-search ti-md"></i>
            </a>
          </li>
          <!-- /Search -->
          @endif
          @if($configData['hasCustomizer'] == true)
          <!-- Style Switcher -->
          <li class="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
            <a class="nav-link dropdown-toggle hide-arrow"
               href="javascript:void(0);"
               data-bs-toggle="dropdown">
              <i class='ti ti-md'></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-styles">
              <li>
                <a class="dropdown-item"
                   href="javascript:void(0);"
                   data-theme="light">
                  <span class="align-middle"><i class='ti ti-sun me-2'></i>روز</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item"
                   href="javascript:void(0);"
                   data-theme="dark">
                  <span class="align-middle"><i class="ti ti-moon me-2"></i>شب</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item"
                   href="javascript:void(0);"
                   data-theme="system">
                  <span class="align-middle"><i class="ti ti-device-desktop me-2"></i>سیستم</span>
                </a>
              </li>
            </ul>
          </li>
          <!--/ Style Switcher -->
          @endif

          <!-- Quick links  -->
          <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
            <a aria-expanded="false"
               class="nav-link dropdown-toggle hide-arrow"
               data-bs-auto-close="outside"
               data-bs-toggle="dropdown"
               href="javascript:void(0);">
              <i class="ti ti-layout-grid-add ti-md"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end py-0">
              <div class="dropdown-menu-header border-bottom">
                <div class="dropdown-header d-flex align-items-center py-3">
                  <h5 class="text-body mb-0 me-auto">میانبرها</h5>
                  <a class="dropdown-shortcuts-add text-body"
                     data-bs-placement="top"
                     data-bs-toggle="tooltip"
                     href="javascript:void(0)"
                     title="افزودن میانبر">
                    <i class="ti ti-sm ti-apps"></i>
                  </a>
                </div>
              </div>
              <div class="dropdown-shortcuts-list scrollable-container">
                <div class="row row-bordered overflow-visible g-0">
                  <div class="dropdown-shortcuts-item col">
                    <span class="dropdown-shortcuts-icon rounded-circle mb-2 mt-1">
                      <i class="ti ti-calendar fs-4"></i>
                    </span>
                    <a class="stretched-link mb-0"
                       href="{{route('admin.Dashboard.holiday.index')}}">روز های تعطیل سال</a>
                    <small class="text-muted mb-0"> مدیریت روزهای تعظیل</small>
                  </div>
                  <div class="dropdown-shortcuts-item col">
                    <span class="dropdown-shortcuts-icon rounded-circle mb-2 mt-1">
                      <i class="ti ti-file-invoice fs-4"></i>
                    </span>
                    <a class="stretched-link mb-0"
                       href="{{route('admin.content-management.comments.index')}}">نظرات کاربران</a>
                    <small class="text-muted mb-0">مدیریت نظرات</small>
                  </div>
                </div>
                <div class="row row-bordered overflow-visible g-0">
                  <div class="dropdown-shortcuts-item col">
                    <span class="dropdown-shortcuts-icon rounded-circle mb-2 mt-1">
                      <i class="ti ti-users fs-4"></i>
                    </span>
                    <a class="stretched-link mb-0"
                       href="{{route('admin.content.users-management.users.index')}}">کاربران</a>
                    <small class="text-muted mb-0">مدیریت کاربران</small>
                  </div>
                  <div class="dropdown-shortcuts-item col">
                    <span class="dropdown-shortcuts-icon rounded-circle mb-2 mt-1">
                      <i class="ti ti-lock fs-4"></i>
                    </span>
                    <a class="stretched-link mb-0"
                       href="{{route('admin.content.hospitals.hospitals-management.index')}}"> بیمارستان</a>
                    <small class="text-muted mb-0"> مدیریت بیمارستان</small>
                  </div>
                </div>
                <div class="row row-bordered overflow-visible g-0">
                  <div class="dropdown-shortcuts-item col">
                    <span class="dropdown-shortcuts-icon rounded-circle mb-2 mt-1">
                      <i class="ti ti-chart-bar fs-4"></i>
                    </span>
                    <a class="stretched-link mb-0"
                       href="{{route('admin.index')}}">داشبورد</a>
                    <small class="text-muted mb-0">گزارش آماری</small>
                  </div>
                  <div class="dropdown-shortcuts-item col">
                    <span class="dropdown-shortcuts-icon rounded-circle mb-2 mt-1">
                      <i class="ti ti-settings fs-4"></i>
                    </span>
                    <a class="stretched-link mb-0"
                       href="{{route('admin.Dashboard.setting.index')}}">تنظیمات</a>
                    <small class="text-muted mb-0">مدیریت سیستم</small>
                  </div>
                </div>
                <div class="row row-bordered overflow-visible g-0">
                  <div class="dropdown-shortcuts-item col">
                    <span class="dropdown-shortcuts-icon rounded-circle mb-2 mt-1">
                      <i class="ti ti-help fs-4"></i>
                    </span>
                    <a class="stretched-link mb-0"
                       href="{{url('admin/pages/faq')}}">مرکز پشتیبانی</a>
                    <small class="text-muted mb-0">سوالات متداول و راهنما</small>
                  </div>
                  <div class="dropdown-shortcuts-item col">
                    <span class="dropdown-shortcuts-icon rounded-circle mb-2 mt-1">
                      <i class="ti ti-square fs-4"></i>
                    </span>
                    <a class="stretched-link mb-0"
                       href="{{url('admin/modal-examples')}}">مُـدال‌ها</a>
                    <small class="text-muted mb-0">پاپ‌آپ‌های کاربردی</small>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- Quick links -->

          <!-- Notification -->
          <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
            <a class="nav-link dropdown-toggle hide-arrow"
               href="javascript:void(0);"
               data-bs-toggle="dropdown"
               data-bs-auto-close="outside"
               aria-expanded="false">
              <i class="ti ti-bell ti-md"></i>
              <span class="badge bg-danger rounded-pill badge-notifications">5</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end py-0">
              <li class="dropdown-menu-header border-bottom">
                <div class="dropdown-header d-flex align-items-center py-3">
                  <h5 class="text-body mb-0 me-auto">اعلانات</h5>
                  <a href="javascript:void(0)"
                     class="dropdown-notifications-all text-body"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     title="Mark all as read"><i class="ti ti-mail-opened fs-4"></i></a>
                </div>
              </li>
              <li class="dropdown-notifications-list scrollable-container">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item list-group-item-action dropdown-notifications-item">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <img alt
                               class="h-auto rounded-circle"
                               src="{{asset('assets/img/avatars/1.png')}}" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">تبریک به شما 🎉</h6>
                        <p class="mb-1">نشان برترین فروشنده ماه رو گرفتید</p>
                        <small class="text-muted">الان</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action dropdown-notifications-item">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <span class="avatar-initial rounded-circle bg-label-danger">ن‌م</span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">نوید محمدزاده</h6>
                        <p class="mb-1">درخواست شمارا پذیرفت.</p>
                        <small class="text-muted">1 ساعت قبل</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <img alt
                               class="h-auto rounded-circle"
                               src="{{asset('assets/img/avatars/2.png')}}" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">پیام جدید از بهاره ✉️</h6>
                        <p class="mb-1">شما یک پیام جدید از بهاره افشاری دارید</p>
                        <small class="text-muted">12 ساعت قبل</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action dropdown-notifications-item">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <span class="avatar-initial rounded-circle bg-label-success">
                            <i class="ti ti-shopping-cart"></i>
                          </span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">ایول! سفارش جدید داری 🛒</h6>
                        <p class="mb-1">شرکت یلدا سفارشی جدید ثبت کرد</p>
                        <small class="text-muted">امروز</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <img alt
                               class="h-auto rounded-circle"
                               src="{{asset('assets/img/avatars/9.png')}}" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">اپلیکیشن بروزرسانی شد 🚀</h6>
                        <p class="mb-1">پروژه شما باموفقیت آپدیت شد.</p>
                        <small class="text-muted">دیروز</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <span class="avatar-initial rounded-circle bg-label-success">
                            <i class="ti ti-chart-pie"></i>
                          </span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">گزارش ماهانه دردسترس است</h6>
                        <p class="mb-1">گزارش درآمد ماه شهریور آماده است</p>
                        <small class="text-muted">2 روز قبل</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <img alt
                               class="h-auto rounded-circle"
                               src="{{asset('assets/img/avatars/5.png')}}" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">ارسال درخواست همکاری</h6>
                        <p class="mb-1">حسام درخواست همکاری فرستاد</p>
                        <small class="text-muted">1 هفته قبل</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action dropdown-notifications-item">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <img alt
                               class="h-auto rounded-circle"
                               src="{{ asset('assets/img/avatars/6.png') }} " />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">پیام جدید از ترانه</h6>
                        <p class="mb-1">شما یک پیام جدید دارید</p>
                        <small class="text-muted">1 ماه قبل</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar">
                          <span class="avatar-initial rounded-circle bg-label-warning">
                            <i class="ti ti-alert-triangle"></i>
                          </span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-2">میزان مصرف CPU بالاست</h6>
                        <p class="mb-1">درصد استفاده از CPU درحال حاضر 90%</p>
                        <small class="text-muted">1 ماه قبل</small>
                      </div>
                      <div class="flex-shrink-0 dropdown-notifications-actions">
                        <a class="dropdown-notifications-read"
                           href="javascript:void(0)">
                          <span class="badge badge-dot"></span>
                        </a>
                        <a class="dropdown-notifications-archive"
                           href="javascript:void(0)">
                          <span class="ti ti-x"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="dropdown-menu-footer border-top">
                <a href="javascript:void(0);"
                   class="dropdown-item d-flex justify-content-center text-primary p-2 h-px-40 mb-1 align-items-center">
                  نمایش همه اعلانات
                </a>
              </li>
            </ul>
          </li>
          <!--/ Notification -->

          <!-- User -->
          <li class="nav-item navbar-dropdown dropdown-user dropdown">
            <a class="nav-link dropdown-toggle hide-arrow"
               href="javascript:void(0);"
               data-bs-toggle="dropdown">
              <div class="avatar avatar-online">
                <img src="{{ Auth::guard('manager')->user() ? asset('assets/img/avatars/' . Auth::guard('manager')->user()->avatar)  : asset('assets/img/avatars/1.png') }}"


                     alt
                     class="h-auto rounded-circle">
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item"
                   href="{{ route('admin.content.users-management.users.profile.index') }}">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar avatar-online">
                        <img src="{{ Auth::guard('manager')->user() ? asset('assets/img/avatars/' . Auth::guard('manager')->user()->avatar)  : asset('assets/img/avatars/1.png') }}"


                             alt
                             class="h-auto rounded-circle">
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <span class="fw-medium d-block">
                        @if (Auth::guard('manager')->check())

                        {{ Auth::guard('manager')->user()->first_name . " " . Auth::guard('manager')->user()->last_name }}


                        @else
                        نوید محمدزاده
                        @endif
                      </span>
                      <small class="text-muted">
                        @if (Auth::guard('manager')->user()->permission==1)
                        {{ 'مدیر' }}
                        @endif
                        @if (Auth::guard('manager')->user()->permission==2)
                        {{ 'ادمین' }}
                        @endif
                        @if (Auth::guard('manager')->user()->permission==3)
                        {{ 'منشی سایت' }}
                        @endif
                      </small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item"
                   href="{{ route('admin.content.users-management.users.profile.index') }}">
                  <i class="ti ti-user-check me-2 ti-sm"></i>
                  <span class="align-middle">پروفایل من</span>
                </a>
              </li>
              @if (Auth::guard('manager')->check() && Laravel\Jetstream\Jetstream::hasApiFeatures())

              <li>
                <a class="dropdown-item"
                   href="{{ route('api-tokens.index') }}">
                  <i class='ti ti-key me-2 ti-sm'></i>
                  <span class="align-middle">توکن های API</span>
                </a>
              </li>
              @endif
              <li>
                <a class="dropdown-item"
                   href="{{route('admin.Dashboard.setting.index')}}">
                  <span class="d-flex align-items-center align-middle">
                    <i class="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i>
                    <span class="flex-grow-1 align-middle">تنظیمات سایت</span>

                  </span> </a>
              </li>
              @if (Auth::guard('manager')->User() && Laravel\Jetstream\Jetstream::hasTeamFeatures())

              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <h6 class="dropdown-header">مدیریت تیم</h6>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item"
                   href="{{ Auth::guard('manager')->user() ? route('teams.show', Auth::guard('manager')->user()->currentTeam->id) : 'javascript:void(0)' }}">


                  <i class='ti ti-settings me-2'></i>
                  <span class="align-middle">تنظیمات تیم</span>
                </a>
              </li>
              @can('create', Laravel\Jetstream\Jetstream::newTeamModel())
              <li>
                <a class="dropdown-item"
                   href="{{ route('teams.create') }}">
                  <i class='ti ti-user me-2'></i>
                  <span class="align-middle">تیم جدید</span>
                </a>
              </li>
              @endcan
              @if (Auth::guard('manager')->user()->allTeams()->count() > 1)

              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <h6 class="dropdown-header">تغییر تیم</h6>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              @endif
              @if (Auth::guard('manager')->user())
              @foreach (Auth::guard('manager')->user()->allTeams() as $team)
              {{-- Below commented code read by artisan command while installing jetstream. !! Do not remove if you want
              to use jetstream. --}}

              {{--
              <x-switchable-team :team="$team" /> --}}
              @endforeach
              @endif
              @endif
              <li>
                <div class="dropdown-divider"></div>
              </li>
              @if (Auth::guard('manager')->check())

              <li>
                <a class="dropdown-item logout"
                   href="{{ route('auth-logout-basic') }}">
                  <i class='ti ti-logout me-2'></i>
                  <span class="align-middle">خروج از حساب</span>
                </a>
              </li>
              
              <script>
                document.addEventListener('DOMContentLoaded', function () {
                  const logoutLink = document.querySelector('.logout');
            
                  logoutLink.addEventListener('click', function (event) {
                    event.preventDefault(); // جلوگیری از انجام عمل لینک
            
                    // نمایش SweetAlert برای تأیید خروج
                    Swal.fire({
                      title: 'آیا مطمئن هستید؟',
                      text: "می‌خواهید از حساب کاربری خود خارج شوید؟",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'بله، خروج!',
                      cancelButtonText: 'خیر، بمانم'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        window.location.href = logoutLink.href; // به لینک خروج هدایت می‌کند
                      }
                    });
                  });
                });
            
              </script>
              @else
              <li>
                <a class="dropdown-item"
                   href="{{ Route::has('auth-login-basic') ? route('auth-login-basic') : url('admin/auth/login-basic') }}">
                  <i class='ti ti-login me-2'></i>
                  <span class="align-middle">ورود</span>
                </a>
              </li>
              @endif
            </ul>
          </li>
          <!--/ User -->
        </ul>
      </div>

      <!-- Search Small Screens -->
      <div class="navbar-search-wrapper search-input-wrapper {{ isset($menuHorizontal) ? $containerNav : '' }} d-none">
        <input type="text"
               class="form-control search-input {{ isset($menuHorizontal) ? '' : $containerNav }} border-0"
               placeholder="جستجو..."
               aria-label="جستجو...">
        <i class="ti ti-x ti-sm search-toggler cursor-pointer"></i>
      </div>
      @if(isset($navbarDetached) && $navbarDetached == '')
    </div>
    @endif
  </nav>
  <!-- / Navbar -->