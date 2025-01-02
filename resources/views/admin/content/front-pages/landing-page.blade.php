@php
$configData = Helper::appClasses();
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات سایت - لندینگ')

<!-- Vendor Styles -->
@section('vendor-style')
@vite([
  'resources/assets/vendor/libs/nouislider/nouislider.scss',
  'resources/assets/vendor/libs/swiper/swiper.scss'
])
@endsection

<!-- Page Styles -->
@section('page-style')
@vite(['resources/assets/vendor/scss/pages/front-page-landing.scss'])
@endsection

<!-- Vendor Scripts -->
@section('vendor-script')
@vite([
  'resources/assets/vendor/libs/nouislider/nouislider.js',
  'resources/assets/vendor/libs/swiper/swiper.js'
])
@endsection

<!-- Page Scripts -->
@section('page-script')
@vite(['resources/assets/js/front-page-landing.js'])
@endsection


@section('content')
<div data-bs-spy="scroll" class="scrollspy-example">
  <!-- Hero: Start -->
  <section id="hero-animation">
    <div id="landingHero" class="section-py landing-hero position-relative">
      <img src="{{asset('assets/img/front-pages/backgrounds/hero-bg.png')}}" alt="hero background" class="position-absolute top-0 start-50 translate-middle-x object-fit-contain w-100 h-100" data-speed="1"/>
      <div class="container">
        <div class="hero-text-box text-center">
          <h1 class="text-primary hero-title display-6 fw-bold ">
            داشـبورد مناسـب برایءء هرصنفـ
          </h1>
          <h2 class="hero-sub-title h6 mb-4 mt-2 pb-1 lh-2">
            قالب مدیریت آماده‌ی استفاده ، مناسب هر شغلی
            <br class="d-none d-lg-block"/>
            همراه با گارانتی ، پشتیبانی و شخصی سازی آسان
          </h2>
          <div class="landing-hero-btn d-inline-block position-relative">
            <span class="hero-btn-item position-absolute d-none d-md-flex text-heading">
              فرصت استثناییءء
              <img alt="پیکان انجمن" class="scaleX-n1-rtl" src="{{asset('assets/img/front-pages/icons/Join-community-arrow.png')}}"/>
            </span>
            <a class="btn btn-primary btn-lg" href="#landingPricing">خـرید از مارکئئت راسـتچین</a>
          </div>
        </div>
        <div id="heroDashboardAnimation" class="hero-animation-img">
          <a href="{{url('/app/ecommerce/dashboard')}}" target="_blank">
            <div id="heroAnimationImg" class="position-relative hero-dashboard-img">
              <img src="{{asset('assets/img/front-pages/landing-page/hero-dashboard-'.$configData['style'].'.png')}}" alt="hero dashboard" class="animation-img" data-app-light-img="front-pages/landing-page/hero-dashboard-light.png" data-app-dark-img="front-pages/landing-page/hero-dashboard-dark.png" />
              <img src="{{asset('assets/img/front-pages/landing-page/hero-elements-'.$configData['style'].'.png')}}" alt="hero elements" class="position-absolute hero-elements-img animation-img top-0 start-0" data-app-light-img="front-pages/landing-page/hero-elements-light.png" data-app-dark-img="front-pages/landing-page/hero-elements-dark.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="landing-hero-blank"></div>
  </section>
  <!-- Hero: End -->

  <!-- Useful features: Start -->
  <section id="landingFeatures" class="section-py landing-features">
    <div class="container">
      <div class="text-center mb-3 pb-1">
        <span class="badge bg-label-primary">ویژگی‌هایءء قالب</span>
      </div>
      <h3 class="text-center mb-1 fw-medium">
        <span class="position-relative fw-bold z-1">ابـزارهایءء مـورد نـیاز
          <img src="{{asset('assets/img/front-pages/icons/section-title-icon.png')}}" alt="laptop charging" class="section-title-img position-absolute object-fit-contain bottom-0 z-n1">
        </span>
        برایءء مـدیریت هـر سـیستمیءء
      </h3>
      <p class="text-center mb-3 mb-md-5 pb-3"> نه تنها ابزارهایءء آماده بلکه پکیج‌ها، اپلیکیشن‌ها و هرچیزیءء که برای یک پنل مدیریت لازم داریءء.</p>
      <div class="features-icon-wrapper row gx-0 gy-4 g-sm-5">
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="text-center mb-3">
            <img src="{{asset('assets/img/front-pages/icons/laptop.png')}}" alt="laptop charging" />
          </div>
          <h5 class="mb-2">کد حرفه‌ایءء</h5>
          <p class="features-icon-description"> کدهای تمیز حرفه‌ای که همه توسعه دهندگان به راحتی آن را درک می کنند و عاشق آن می شوند.</p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="text-center mb-3">
            <img src="{{asset('assets/img/front-pages/icons/rocket.png')}}" alt="transition up" />
          </div>
          <h5 class="mb-2">بروز بودن</h5>
          <p class="features-icon-description"> به روزرسانی رایگان و متعدد، از جمله رفع ایرادات ، دموهای متنوع و ویژگی های جدید.</p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="text-center mb-3">
            <img src="{{asset('assets/img/front-pages/icons/paper.png')}}" alt="edit" />
          </div>
          <h5 class="mb-2">کیت استارتر</h5>
          <p class="features-icon-description"> پروژه خود را به سرعت بدون نیاز به حذف ویژگی های غیر ضروری شروع کنید.</p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="text-center mb-3">
            <img src="{{asset('assets/img/front-pages/icons/check.png')}}" alt="3d select solid" />
          </div>
          <h5 class="mb-2">API آماده</h5>
          <p class="features-icon-description"> فقط پایگاه داده را متصل و داده های خود را در عرض چند ثانیه دریافت کنید.</p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="text-center mb-3">
            <img src="{{asset('assets/img/front-pages/icons/user.png')}}" alt="lifebelt" />
          </div>
          <h5 class="mb-2">پشتیبانی عالی</h5>
          <p class="features-icon-description">پشتیبانی رایگان از طریق تیکت و قابل تمدید در سایت راستچین.</p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="text-center mb-3">
            <img src="{{asset('assets/img/front-pages/icons/keyboard.png')}}" alt="google docs" />
          </div>
          <h5 class="mb-2">مستندات</h5>
          <p class="features-icon-description">یک داکیومنت کامل برای آشنایی با مواردی که نیاز است بدانید.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Useful features: End -->

  <!-- Real customers reviews: Start -->
  <section id="landingReviews" class="section-py bg-body landing-reviews pb-0">
    <!-- What people say slider: Start -->
    <div class="container">
      <div class="row align-items-center gx-0 gy-4 g-lg-5">
        <div class="col-md-6 col-lg-5 col-xl-3">
          <div class="mb-3 pb-1">
            <span class="badge bg-label-primary">نظرات مشتریان</span>
          </div>
          <h3 class="mb-2">
            <span class="position-relative fw-bold z-1">آنچه کاربران می‌گویند!
              <img src="{{asset('assets/img/front-pages/icons/section-title-icon.png')}}" alt="laptop charging" class="section-title-img position-absolute object-fit-contain bottom-0 z-n1">
            </span>
          </h3>
          <p class="mb-3 mb-md-5"> معروف ترین سازمان ها در مورد
            <br class="d-none d-xl-block"/>
            ما چه نظری دارند؟
          </p>
          <div class="landing-reviews-btns">
            <button id="reviews-previous-btn" class="btn btn-label-primary reviews-btn me-3 scaleX-n1-rtl" type="button">
              <i class="ti ti-chevron-left ti-sm"></i>
            </button>
            <button id="reviews-next-btn" class="btn btn-label-primary reviews-btn scaleX-n1-rtl" type="button">
              <i class="ti ti-chevron-right ti-sm"></i>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-lg-7 col-xl-9">
          <div class="swiper-reviews-carousel overflow-hidden mb-5 pb-md-2 pb-md-3">
            <div class="swiper" id="swiper-reviews">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="card h-100">
                    <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                      <div class="mb-3">
                        <img src="{{asset('assets/img/front-pages/branding/logo-1.png')}}" alt="client logo" class="client-logo img-fluid" />
                      </div>
                      <p class="justify-text"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                      <div class="text-warning mb-3">
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar me-2 avatar-sm">
                          <img src="{{asset('assets/img/avatars/1.png')}}" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div>
                          <h6 class="mb-0">حمیدرضا زمانی</h6>
                          <p class="small text-muted mb-0">مدیرعامل Airbnb</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card h-100">
                    <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                      <div class="mb-3">
                        <img src="{{asset('assets/img/front-pages/branding/logo-2.png')}}" alt="client logo" class="client-logo img-fluid" />
                      </div>
                      <p class="justify-text"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                      <div class="text-warning mb-3">
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar me-2 avatar-sm">
                          <img src="{{asset('assets/img/avatars/2.png')}}" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div>
                          <h6 class="mb-0">ترلان پروانه</h6>
                          <p class="small text-muted mb-0">بنیانگذار Hubspot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card h-100">
                    <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                      <div class="mb-3">
                        <img src="{{asset('assets/img/front-pages/branding/logo-3.png')}}" alt="client logo" class="client-logo img-fluid" />
                      </div>
                      <p class="justify-text"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                      <div class="text-warning mb-3">
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar me-2 avatar-sm">
                          <img src="{{asset('assets/img/avatars/3.png')}}" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div>
                          <h6 class="mb-0">بهروز وثوقی</h6>
                          <p class="small text-muted mb-0">رهبر طراحی در Dribbble</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card h-100">
                    <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                      <div class="mb-3">
                        <img src="{{asset('assets/img/front-pages/branding/logo-4.png')}}" alt="client logo" class="client-logo img-fluid" />
                      </div>
                      <p class="justify-text"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                      <div class="text-warning mb-3">
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star ti-sm"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar me-2 avatar-sm">
                          <img src="{{asset('assets/img/avatars/4.png')}}" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div>
                          <h6 class="mb-0">بهاره کیان‌افشار</h6>
                          <p class="small text-muted mb-0">بنیانگذار همراه‌اول</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card h-100">
                    <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                      <div class="mb-3">
                        <img src="{{asset('assets/img/front-pages/branding/logo-5.png')}}" alt="client logo" class="client-logo img-fluid" />
                      </div>
                      <p class="justify-text"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                      <div class="text-warning mb-3">
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar me-2 avatar-sm">
                          <img src="{{asset('assets/img/avatars/5.png')}}" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div>
                          <h6 class="mb-0">حمید فرخ نژاد</h6>
                          <p class="small text-muted mb-0">بنیانگذار Hubspot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card h-100">
                    <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                      <div class="mb-3">
                        <img src="{{asset('assets/img/front-pages/branding/logo-6.png')}}" alt="client logo" class="client-logo img-fluid" />
                      </div>
                      <p class="justify-text"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                      <div class="text-warning mb-3">
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star-filled ti-sm"></i>
                        <i class="ti ti-star ti-sm"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar me-2 avatar-sm">
                          <img src="{{asset('assets/img/avatars/1.png')}}" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div>
                          <h6 class="mb-0">مهدی پاکدل</h6>
                          <p class="small text-muted mb-0">بنیانگذار ایرانسل</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- What people say slider: End -->
    <hr class="m-0" />
    <!-- Logo slider: Start -->
    <div class="container">
      <div class="swiper-logo-carousel py-4 my-lg-2">
        <div class="swiper" id="swiper-clients-logos">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="{{asset('assets/img/front-pages/branding/logo_1-'.$configData['style'].'.png')}}" alt="client logo" class="client-logo" data-app-light-img="front-pages/branding/logo_1-light.png" data-app-dark-img="front-pages/branding/logo_1-dark.png" />
            </div>
            <div class="swiper-slide">
              <img src="{{asset('assets/img/front-pages/branding/logo_2-'.$configData['style'].'.png')}}" alt="client logo" class="client-logo" data-app-light-img="front-pages/branding/logo_2-light.png" data-app-dark-img="front-pages/branding/logo_2-dark.png" />
            </div>
            <div class="swiper-slide">
              <img src="{{asset('assets/img/front-pages/branding/logo_3-'.$configData['style'].'.png')}}" alt="client logo" class="client-logo" data-app-light-img="front-pages/branding/logo_3-light.png" data-app-dark-img="front-pages/branding/logo_3-dark.png" />
            </div>
            <div class="swiper-slide">
              <img src="{{asset('assets/img/front-pages/branding/logo_4-'.$configData['style'].'.png')}}" alt="client logo" class="client-logo" data-app-light-img="front-pages/branding/logo_4-light.png" data-app-dark-img="front-pages/branding/logo_4-dark.png" />
            </div>
            <div class="swiper-slide">
              <img src="{{asset('assets/img/front-pages/branding/logo_5-'.$configData['style'].'.png')}}" alt="client logo" class="client-logo" data-app-light-img="front-pages/branding/logo_5-light.png" data-app-dark-img="front-pages/branding/logo_5-dark.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Logo slider: End -->
  </section>
  <!-- Real customers reviews: End -->

  <!-- Our great team: Start -->
  <section id="landingTeam" class="section-py landing-team">
    <div class="container">
      <div class="text-center mb-3 pb-1">
        <span class="badge bg-label-primary">تیم بزرگ ما</span>
      </div>
      <h3 class="text-center mb-1">
        <span class="position-relative fw-bold z-1">پشتیبانی توسط
          <img src="{{asset('assets/img/front-pages/icons/section-title-icon.png')}}" alt="laptop charging" class="section-title-img position-absolute object-fit-contain bottom-0 z-n1">
        </span>
        تیمیءء متخصص و باتجربه</h3>
      <p class="text-center mb-md-5 pb-3 mt-2">چه کسانی خالق این قالب عالی هستن؟</p>
      <div class="row gy-5 mt-2">
        <div class="col-lg-3 col-sm-6">
          <div class="card mt-3 mt-lg-0 shadow-none">
            <div class="bg-label-primary position-relative team-image-box">
              <img src="{{asset('assets/img/front-pages/landing-page/team-member-1.png')}}" class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl" alt="human image" />
            </div>
            <div class="card-body border border-top-0 border-label-primary text-center">
              <h5 class="card-title mb-0">ملیحه رستمی</h5>
              <p class="text-muted mb-0">مدیر پروژه</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="card mt-3 mt-lg-0 shadow-none">
            <div class="bg-label-info position-relative team-image-box">
              <img src="{{asset('assets/img/front-pages/landing-page/team-member-2.png')}}" class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl" alt="human image" />
            </div>
            <div class="card-body border border-top-0 border-label-info text-center">
              <h5 class="card-title mb-0">امیر جدیدی</h5>
              <p class="text-muted mb-0">طراح رابط کاربری</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="card mt-3 mt-lg-0 shadow-none">
            <div class="bg-label-danger position-relative team-image-box">
              <img src="{{asset('assets/img/front-pages/landing-page/team-member-3.png')}}" class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl" alt="human image" />
            </div>
            <div class="card-body border border-top-0 border-label-danger text-center">
              <h5 class="card-title mb-0">لیندا کیانی</h5>
              <p class="text-muted mb-0">برنامه نویس ارشد</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="card mt-3 mt-lg-0 shadow-none">
            <div class="bg-label-success position-relative team-image-box">
              <img src="{{asset('assets/img/front-pages/landing-page/team-member-4.png')}}" class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl" alt="human image" />
            </div>
            <div class="card-body border border-top-0 border-label-success text-center">
              <h5 class="card-title mb-0">پارسا جلالی</h5>
              <p class="text-muted mb-0">مدیر بازاریابی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our great team: End -->

  <!-- Pricing plans: Start -->
  <section id="landingPricing" class="section-py bg-body landing-pricing">
    <div class="container">
      <div class="text-center mb-3 pb-1">
        <span class="badge bg-label-primary">طرح های قیمت گذاری</span>
      </div>
      <h3 class="text-center mb-1">
        <span class="position-relative fw-bold z-1">پلن‌هایءء همکاریءء
          <img src="{{asset('assets/img/front-pages/icons/section-title-icon.png')}}" alt="laptop charging" class="section-title-img position-absolute object-fit-contain bottom-0 z-n1">
        </span>
        با بهترین قیمت گذاریءء
      </h3>
      <p class="text-center mb-4 pb-3"> همه پلن‌ها شامل بیش از 40 ابزار و ویژگی پیشرفته برای تقویت محصول شما هستند.
        <br/>
        بهترین پلن‌ را متناسب با نیاز خود انتخاب کنید.
      </p>
      <div class="text-center mb-5">
        <div class="position-relative d-inline-block pt-3 pt-md-0">
          <label class="switch switch-primary me-0">
            <span class="switch-label">پرداخت ماهانه</span>
            <input type="checkbox" class="switch-input price-duration-toggler" checked />
            <span class="switch-toggle-slider">
              <span class="switch-on"></span>
              <span class="switch-off"></span>
            </span>
            <span class="switch-label">پرداخت سالانه</span>
          </label>
          <div class="pricing-plans-item position-absolute d-flex">
            <img src="{{asset('assets/img/front-pages/icons/pricing-plans-arrow.png')}}" alt="pricing plans arrow" class="scaleX-n1-rtl" />
            <span class="fw-medium mt-2 ms-1"> 25% تخفیف استثنایی</span>
          </div>
        </div>
      </div>
      <div class="row gy-4 pt-lg-3">
        <!-- Basic Plan: Start -->
        <div class="col-xl-4 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="text-center">
                <img src="{{asset('assets/img/front-pages/icons/paper-airplane.png')}}" alt="paper airplane icon" class="mb-4 pb-2" />
                <h4 class="mb-2">اقتصادیءء</h4>
                <div class="d-flex align-items-center justify-content-center">
                  <span class="price-monthly h1 text-primary fw-bold mb-0">
                    <bdi>
                      <svg class="toman" width="1rem" height="1rem">
                        <use xlink:href="#toman">
                          <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                          </symbol>
                        </use>
                      </svg>
                      10٬000٬000
                    </bdi>
                  </span>
                  <span class="price-yearly h1 text-primary fw-bold mb-0 d-none">
                    <bdi>
                      <svg class="toman" width="1rem" height="1rem">
                        <use xlink:href="#toman">
                          <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                          </symbol>
                        </use>
                      </svg>
                      8٬000٬000
                    </bdi>
                  </span>
                </div>
                <div class="position-relative pt-2">
                  <div class="price-yearly text-muted price-yearly-toggle d-none">100٬000٬000 ‍ءتء در سال</div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled">
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    اپلیکیشن pwa
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    پک کامل گرافیکی
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    دیجیتال مارکتینگ
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی هویت بصری
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی سایت وردپرس
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی سایت اختصاصی
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    توسعه اپلیکیشن موبایل
                  </h5>
                </li>
              </ul>
              <div class="d-grid mt-4 pt-3">
                <a href="{{url('/front-pages/payment')}}" class="btn btn-label-primary">شروع کنید</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Basic Plan: End -->

        <!-- Favourite Plan: Start -->
        <div class="col-xl-4 col-lg-6">
          <div class="card border border-primary shadow-lg">
            <div class="card-header">
              <div class="text-center">
                <img src="{{asset('assets/img/front-pages/icons/plane.png')}}" alt="plane icon" class="mb-4 pb-2" />
                <h4 class="mb-2">پیشرفته</h4>
                <div class="d-flex align-items-center justify-content-center">
                  <span class="price-monthly h1 text-primary fw-bold mb-0">
                    <bdi>
                      <svg class="toman" width="1rem" height="1rem">
                        <use xlink:href="#toman">
                          <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                          </symbol>
                        </use>
                      </svg>
                      15٬000٬000
                    </bdi>
                  </span>
                  <span class="price-yearly h1 text-primary fw-bold mb-0 d-none">
                    <bdi>
                      <svg class="toman" width="1rem" height="1rem">
                        <use xlink:href="#toman">
                          <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                          </symbol>
                        </use>
                      </svg>
                      12٬000٬000
                    </bdi>
                  </span>
                </div>
                <div class="position-relative pt-2">
                  <div class="price-yearly text-muted price-yearly-toggle d-none">200٬000٬000 ‍ءتء در سال</div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled">
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    توسعه اپلیکیشن موبایل
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی سایت اختصاصی
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی سایت وردپرس
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی هویت بصری
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    دیجیتال مارکتینگ
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    پک کامل گرافیکی
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    اپلیکیشن pwa
                  </h5>
                </li>
              </ul>
              <div class="d-grid mt-4 pt-3">
                <a href="{{url('/front-pages/payment')}}" class="btn btn-primary">شروع کنید</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Favourite Plan: End -->

        <!-- Standard Plan: Start -->
        <div class="col-xl-4 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="text-center">
                <img src="{{asset('assets/img/front-pages/icons/shuttle-rocket.png')}}" alt="shuttle rocket icon" class="mb-4 pb-2" />
                <h4 class="mb-2">تـجاریءء</h4>
                <div class="d-flex align-items-center justify-content-center">
                  <span class="price-monthly h1 text-primary fw-bold mb-0">
                    <bdi>
                      <svg class="toman" width="1rem" height="1rem">
                        <use xlink:href="#toman">
                          <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                          </symbol>
                        </use>
                      </svg>
                      25٬000٬000
                    </bdi>
                  </span>
                  <span class="price-yearly h1 text-primary fw-bold mb-0 d-none">
                    <bdi>
                      <svg class="toman" width="1rem" height="1rem">
                        <use xlink:href="#toman">
                          <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                          </symbol>
                        </use>
                      </svg>
                      20٬000٬000
                    </bdi>
                  </span>
                </div>
                <div class="position-relative pt-2">
                  <div class="price-yearly text-muted price-yearly-toggle d-none">1٬000٬000٬000 ‍ءتء در سال</div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled">
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    اپلیکیشن pwa
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    پک کامل گرافیکی
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    دیجیتال مارکتینگ
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی هویت بصری
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی سایت وردپرس
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    طراحی سایت اختصاصی
                  </h5>
                </li>
                <li>
                  <h5 class="fw-medium">
                    <span class="badge badge-center rounded-pill bg-label-primary p-0 me-2">
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                    توسعه اپلیکیشن موبایل
                  </h5>
                </li>
              </ul>
              <div class="d-grid mt-4 pt-3">
                <a href="{{url('/front-pages/payment')}}" class="btn btn-label-primary">شروع کنید</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Standard Plan: End -->
      </div>
    </div>
  </section>
  <!-- Pricing plans: End -->

  <!-- Fun facts: Start -->
  <section id="landingFunFacts" class="section-py landing-fun-facts">
    <div class="container">
      <div class="row gy-3">
        <div class="col-sm-6 col-lg-3">
          <div class="card border border-label-primary shadow-none">
            <div class="card-body text-center">
              <img src="{{asset('assets/img/front-pages/icons/laptop.png')}}" alt="laptop" class="mb-2" />
              <h5 class="h2 mb-1">7.1k+</h5>
              <p class="fw-medium mb-0"> تیکت‌های پشتیبانی
                <br/>
                رفع مشکل شده
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card border border-label-success shadow-none">
            <div class="card-body text-center">
              <img src="{{asset('assets/img/front-pages/icons/user-success.png')}}" alt="laptop" class="mb-2" />
              <h5 class="h2 mb-1">50k+</h5>
              <p class="fw-medium mb-0"> مشتری با ما
                <br/>
                همکاری کردند
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card border border-label-info shadow-none">
            <div class="card-body text-center">
              <img src="{{asset('assets/img/front-pages/icons/diamond-info.png')}}" alt="laptop" class="mb-2" />
              <h5 class="h2 mb-1">4.8/5</h5>
              <p class="fw-medium mb-0"> دارای امتیاز بالا
                <br/>
                و رضایت کاربران
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card border border-label-warning shadow-none">
            <div class="card-body text-center">
              <img src="{{asset('assets/img/front-pages/icons/check-warning.png')}}" alt="laptop" class="mb-2" />
              <h5 class="h2 mb-1">100%</h5>
              <p class="fw-medium mb-0"> ضمانت برگشت وجه
                <br/>
                درصورت عدم رضایت
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Fun facts: End -->

  <!-- FAQ: Start -->
  <section id="landingFAQ" class="section-py bg-body landing-faq">
    <div class="container">
      <div class="text-center mb-3 pb-1">
        <span class="badge bg-label-primary">سوالات</span>
      </div>
      <h3 class="text-center mb-1">سوالات پرتکرار
        <span class="position-relative fw-bold z-1">کاربران ما
          <img src="{{asset('assets/img/front-pages/icons/section-title-icon.png')}}" alt="laptop charging" class="section-title-img position-absolute object-fit-contain bottom-0 z-n1">
        </span>
      </h3>
      <p class="text-center mb-5 pb-3">برای یافتن پاسخ سوالات خود، آیتم های زیر را بررسی کنید.</p>
      <div class="row gy-5">
        <div class="col-lg-5">
          <div class="text-center">
            <img src="{{asset('assets/img/front-pages/landing-page/faq-boy-with-logos.png')}}" alt="faq boy with logos" class="faq-image" />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="accordion" id="accordionExample">
            <div class="card accordion-item active">
              <h2 class="accordion-header" id="headingOne">
                <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#accordionOne" aria-expanded="true" aria-controls="accordionOne">
                  آیا لورم ایپسوم یک متن ساختگی نامفهوم است ؟
                </button>
              </h2>

              <div id="accordionOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
              </div>
            </div>
            <div class="card accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionTwo" aria-expanded="false" aria-controls="accordionTwo">
                  آیا لورم ایپسوم یک متن ساختگی نامفهوم است ؟
                </button>
              </h2>
              <div id="accordionTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
              </div>
            </div>
            <div class="card accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionThree" aria-expanded="false" aria-controls="accordionThree">
                  آیا لورم ایپسوم یک متن ساختگی نامفهوم است ؟
                </button>
              </h2>
              <div id="accordionThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
              </div>
            </div>
            <div class="card accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionFour" aria-expanded="false" aria-controls="accordionFour">
                  آیا لورم ایپسوم یک متن ساختگی نامفهوم است ؟
                </button>
              </h2>
              <div id="accordionFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
              </div>
            </div>
            <div class="card accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionFive" aria-expanded="false" aria-controls="accordionFive">
                  آیا لورم ایپسوم یک متن ساختگی نامفهوم است ؟
                </button>
              </h2>
              <div id="accordionFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- FAQ: End -->

  <!-- CTA: Start -->
  <section id="landingCTA" class="section-py landing-cta position-relative p-lg-0 pb-0">
    <img src="{{asset('assets/img/front-pages/backgrounds/cta-bg-'.$configData['style'].'.png')}}" class="position-absolute bottom-0 end-0 scaleX-n1-rtl h-100 w-100 z-n1" alt="cta image" data-app-light-img="front-pages/backgrounds/cta-bg-light.png" data-app-dark-img="front-pages/backgrounds/cta-bg-dark.png" />
    <div class="container">
      <div class="row align-items-center gy-5 gy-lg-0">
        <div class="col-lg-6 text-center text-lg-start">
          <h6 class="h2 text-primary fw-bold mb-3">برای شروع آماده اید؟</h6>
          <p class="fw-medium mb-4">از دوره آزمایشی 14 روزه ما جهت کسب اطمینان استفاده کنید.</p>
          <a href="{{url('/front-pages/payment')}}" class="btn btn-lg btn-primary">شروع کنید</a>
        </div>
        <div class="col-lg-6 pt-lg-5 text-center text-lg-end">
          <img src="{{asset('assets/img/front-pages/landing-page/cta-dashboard.png')}}" alt="cta dashboard" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <!-- CTA: End -->

  <!-- Contact Us: Start -->
  <section id="landingContact" class="section-py bg-body landing-contact">
    <div class="container">
      <div class="text-center mb-3 pb-1">
        <span class="badge bg-label-primary">ارتباط با ما</span>
      </div>
      <h3 class="text-center mb-3 fw-medium">
        <span class="position-relative fw-bold z-1">ارتباط مستقیم
          <img src="{{asset('assets/img/front-pages/icons/section-title-icon.png')}}" alt="laptop charging" class="section-title-img position-absolute object-fit-contain bottom-0 z-n1">
        </span>
        با تیم ما
      </h3>
      <p class="text-center mb-4 mb-lg-5 pb-md-3">هر سوال یا نکته ای؟ فقط برای ما این پایین بنویس</p>
      <div class="row gy-4">
        <div class="col-lg-5">
          <div class="contact-img-box position-relative border p-2 h-100">
            <img src="{{asset('assets/img/front-pages/icons/contact-border.png')}}" alt="contact border" class="contact-border-img position-absolute d-none d-md-block scaleX-n1-rtl" />
            <img src="{{asset('assets/img/front-pages/landing-page/contact-customer-service.png')}}" alt="contact customer service" class="contact-img w-100 scaleX-n1-rtl" />
            <div class="pt-3 px-4 pb-1">
              <div class="row gy-3 gx-md-4">
                <div class="col-md-6 col-lg-12 col-xl-6">
                  <div class="d-flex align-items-center">
                    <div class="badge bg-label-primary rounded p-2 me-2"><i class="ti ti-mail ti-sm"></i></div>
                    <div>
                      <p class="mb-1">ایمیل</p>
                      <h5 class="mb-0">
                        <a href="mailto:example@gmail.com" class="text-heading">example@gmail.com</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-12 col-xl-6">
                  <div class="d-flex align-items-center">
                    <div class="badge bg-label-success rounded p-2 me-2">
                      <i class="ti ti-phone-call ti-sm"></i>
                    </div>
                    <div>
                      <p class="mb-1">تلفن</p>
                      <h5 class="mb-0"><a href="tel:+1234-568-963" class="text-heading">+1234 568 963</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="card">
            <div class="card-body">
              <h4 class="mb-2">ارتباط با ما</h4>
              <p class="mb-4"> اگر صحبتی با ما دارید لطفا در باکس زیر بنویسید مثل انتقادات و پیشنهادات ، همکاری،
                <br class="d-none d-lg-block"/>
                شراکت، و ... ما در خدمت شما هستیم.
              </p>
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label" for="contact-form-fullname">نام و نام خانوادگی</label>
                    <input class="form-control" id="contact-form-fullname" placeholder="امیر" type="text"/>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="contact-form-email">ایمیل</label>
                    <input class="form-control" id="contact-form-email" placeholder="johndoe@gmail.com" type="text"/>
                  </div>
                  <div class="col-12">
                    <label class="form-label" for="contact-form-message">پیام</label>
                    <textarea class="form-control" id="contact-form-message" placeholder="پیام خود را بنویسید" rows="8"></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary" type="submit">ارسال پیام</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Us: End -->
</div>
@endsection
