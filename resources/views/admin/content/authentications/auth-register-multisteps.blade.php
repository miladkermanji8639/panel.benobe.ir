@php
$customizerHidden = 'customizer-hide';
$configData = Helper::appClasses();
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات - ثبت نام')

@section('vendor-style')
@vite([
  'resources/assets/vendor/libs/bs-stepper/bs-stepper.scss',
  'resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss',
  'resources/assets/vendor/libs/select2/select2.scss',
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
  'resources/assets/vendor/libs/cleavejs/cleave.js',
  'resources/assets/vendor/libs/cleavejs/cleave-phone.js',
  'resources/assets/vendor/libs/bs-stepper/bs-stepper.js',
  'resources/assets/vendor/libs/select2/select2.js',
  'resources/assets/vendor/libs/@form-validation/popular.js',
  'resources/assets/vendor/libs/@form-validation/bootstrap5.js',
  'resources/assets/vendor/libs/@form-validation/auto-focus.js'
])
@endsection

@section('page-script')
@vite([
  'resources/assets/js/pages-auth-multisteps.js'
])
@endsection

@section('content')
<div class="authentication-wrapper authentication-cover authentication-bg">
  <div class="authentication-inner row">

    <!-- Left Text -->
    <div class="d-none d-lg-flex col-lg-4 align-items-center justify-content-center p-5 auth-cover-bg-color position-relative auth-multisteps-bg-height">
      <img src="{{ asset('assets/img/illustrations/auth-register-multisteps-illustration.png') }}" alt="auth-register-multisteps" class="img-fluid" width="280">

      <img src="{{ asset('assets/img/illustrations/bg-shape-image-'.$configData['style'].'.png') }}" alt="auth-register-multisteps" class="platform-bg" data-app-light-img="illustrations/bg-shape-image-light.png" data-app-dark-img="illustrations/bg-shape-image-dark.png">
    </div>
    <!-- /Left Text -->

    <!--  Multi Steps Registration -->
    <div class="d-flex col-lg-8 align-items-center justify-content-center p-sm-5 p-3">
      <div class="w-px-700">
        <div id="multiStepsValidation" class="bs-stepper shadow-none">
          <div class="bs-stepper-header border-bottom-0">
            <div class="step" data-target="#accountDetailsValidation">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle"><i class="ti ti-smart-home ti-sm"></i></span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title">حساب</span>
                  <span class="bs-stepper-subtitle">جزئیات حساب</span>
                </span>
              </button>
            </div>
            <div class="line">
              <i class="ti ti-chevron-right"></i>
            </div>
            <div class="step" data-target="#personalInfoValidation">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle"><i class="ti ti-users ti-sm"></i></span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title">شخصی</span>
                  <span class="bs-stepper-subtitle">اطلاعات شخصی</span>
                </span>
              </button>
            </div>
            <div class="line">
              <i class="ti ti-chevron-right"></i>
            </div>
            <div class="step" data-target="#billingLinksValidation">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle"><i class="ti ti-file-text ti-sm"></i></span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title">پرداخت</span>
                  <span class="bs-stepper-subtitle">اطلاعات پرداخت</span>
                </span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <form id="multiStepsForm" onSubmit="return false">
              <!-- Account Details -->
              <div id="accountDetailsValidation" class="content">
                <div class="content-header mb-4">
                  <h3 class="mb-1">اطلاعات حساب</h3>
                  <p>جزئیات حساب خود را وارد کنید</p>
                </div>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsUsername">نام کاربری</label>
                    <input class="form-control" id="multiStepsUsername" name="multiStepsUsername" placeholder="نـوید" type="text"/>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsEmail">ایمیل</label>
                    <input aria-label="soheil.n" class="form-control" id="multiStepsEmail" name="multiStepsEmail" placeholder="john.doe@email.com" type="email"/>
                  </div>
                  <div class="col-sm-6 form-password-toggle">
                    <label class="form-label" for="multiStepsPass">کلمه عبور</label>
                    <div class="input-group input-group-merge">
                      <input type="password" id="multiStepsPass" name="multiStepsPass" class="form-control" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="multiStepsPass2" />
                      <span class="input-group-text cursor-pointer" id="multiStepsPass2"><i class="ti ti-eye-off"></i></span>
                    </div>
                  </div>
                  <div class="col-sm-6 form-password-toggle">
                    <label class="form-label" for="multiStepsConfirmPass">تایید کلمه عبور</label>
                    <div class="input-group input-group-merge">
                      <input type="password" id="multiStepsConfirmPass" name="multiStepsConfirmPass" class="form-control" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="multiStepsConfirmPass2" />
                      <span class="input-group-text cursor-pointer" id="multiStepsConfirmPass2"><i class="ti ti-eye-off"></i></span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <label class="form-label" for="multiStepsURL">لینک پروفایل</label>
                    <input aria-label="johndoe" class="form-control ltr" id="multiStepsURL" name="multiStepsURL" placeholder="johndoe/profile" type="text"/>
                  </div>
                  <div class="col-12 d-flex justify-content-between mt-4">
                    <button class="btn btn-label-secondary btn-prev" disabled> <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">قبلی</span>
                    </button>
                    <button class="btn btn-primary btn-next"> <span class="align-middle d-sm-inline-block d-none me-sm-1 me-0">بعدی</span> <i class="ti ti-arrow-right ti-xs"></i></button>
                  </div>
                </div>
              </div>
              <!-- Personal Info -->
              <div id="personalInfoValidation" class="content">
                <div class="content-header mb-4">
                  <h3 class="mb-1">اطلاعات شخصی</h3>
                  <p>اطلاعات شخصی خود را وارد کنید</p>
                </div>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsFirstName">نام کوچک</label>
                    <input class="form-control" id="multiStepsFirstName" name="multiStepsFirstName" placeholder="امیر" type="text"/>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsLastName">نام خانوادگی</label>
                    <input class="form-control" id="multiStepsLastName" name="multiStepsLastName" placeholder="مقصودلو" type="text"/>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsMobile">شماره موبایل</label>
                    <div class="input-group">
                      <input class="form-control multi-steps-mobile ltr" id="multiStepsMobile" name="multiStepsMobile" placeholder="0900 000 0000" type="text"/>
                      <span class="input-group-text">IR (+98)</span>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsPincode">کد پستی</label>
                    <input class="form-control multi-steps-pincode" id="multiStepsPincode" maxlength="6" name="multiStepsPincode" placeholder="کد پستی" type="text"/>
                  </div>
                  <div class="col-md-12">
                    <label class="form-label" for="multiStepsAddress">آدرس</label>
                    <input class="form-control" id="multiStepsAddress" name="multiStepsAddress" placeholder="ایران ، اصفهان ، ..." type="text"/>
                  </div>
                  <div class="col-md-12">
                    <label class="form-label" for="multiStepsArea">راهنما</label>
                    <input class="form-control" id="multiStepsArea" name="multiStepsArea" placeholder="نزدیک بانک" type="text"/>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsCity">شهر</label>
                    <input class="form-control" id="multiStepsCity" placeholder="کاشان" type="text"/>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsState">استان</label>
                    <select class="select2 form-select" data-allow-clear="true" id="multiStepsState">
                      <option value="">انتخاب کنید</option>
                      <option label="اذربایجان شرقی" value="2">اذربایجان شرقی</option>
                      <option label="اذربایجان غربی" value="3">اذربایجان غربی</option>
                      <option label="زنجان" value="4">زنجان</option>
                      <option label="خراسان" value="5">خراسان</option>
                      <option label="اردبیل" value="6">اردبیل</option>
                      <option label="اصفهان" value="7">اصفهان</option>
                      <option label="بوشهر" value="8">بوشهر</option>
                      <option label="تهران" value="9">تهران</option>
                      <option label="قزوین" value="10">قزوین</option>
                      <option label="قم" value="11">قم</option>
                      <option label="چهارمحال وبختیاری" value="12">چهارمحال وبختیاری</option>
                      <option label="کهگیلویه وبویراحمد" value="13">کهگیلویه وبویراحمد</option>
                      <option label="خوزستان" value="15">خوزستان</option>
                      <option label="سمنان" value="16">سمنان</option>
                      <option label="سیستان وبلوچستان" value="17">سیستان وبلوچستان</option>
                      <option label="فارس" value="18">فارس</option>
                      <option label="کردستان" value="19">کردستان</option>
                      <option label="کرمان" value="20">کرمان</option>
                      <option label="کرمانشاه" value="21">کرمانشاه</option>
                      <option label="هرمزگان" value="22">هرمزگان</option>
                      <option label="گیلان" value="23">گیلان</option>
                      <option label="لرستان" value="24">لرستان</option>
                      <option label="مازندران" value="25">مازندران</option>
                      <option label="گلستان" value="26">گلستان</option>
                      <option label="مرکزی" value="27">مرکزی</option>
                      <option label="همدان" value="28">همدان</option>
                      <option label="یزد" value="29">یزد</option>
                      <option label="ایلام" value="30">ایلام</option>
                    </select>
                  </div>
                  <div class="col-12 d-flex justify-content-between mt-4">
                    <button class="btn btn-label-secondary btn-prev">
                      <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">قبلی</span>
                    </button>
                    <button class="btn btn-primary btn-next">
                      <span class="align-middle d-sm-inline-block d-none me-sm-1 me-0">بعدی</span>
                      <i class="ti ti-arrow-right ti-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Billing Links -->
              <div id="billingLinksValidation" class="content">
                <div class="content-header">
                  <h3 class="mb-1">انتخاب اشتراک</h3>
                  <p>بر اساس نیاز خود اشتراک را انتخاب کنید</p>
                </div>
                <!-- Custom plan options -->
                <div class="row gap-md-0 gap-3 my-4">
                  <div class="col-md">
                    <div class="form-check custom-option custom-option-icon">
                      <label class="form-check-label custom-option-content" for="basicOption">
                        <span class="custom-option-body">
                          <span class="custom-option-title fs-4 mb-1">پایه</span>
                          <small class="fs-6 mb-2">یک انتخاب مناسب برای استارتاپ‌ها و دانشجویان</small>
                          <span class="d-flex justify-content-center mt-3">
                            <span class="fw-medium fs-2 text-primary">10000</span>
                            <sub class="lh-1 fs-6 mt-auto mb-3 ms-1 text-primary">ءتء</sub>
                            <sub class="lh-1 fs-6 mt-auto mb-3 ms-1 text-muted">درماه</sub>
                          </span>
                        </span>
                        <input class="form-check-input" id="basicOption" name="customRadioIcon" type="radio" value=""/>
                      </label>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-check custom-option custom-option-icon">
                      <label class="form-check-label custom-option-content" for="basicOption2">
                        <span class="custom-option-body">
                          <span class="custom-option-title fs-4 mb-1">استاندارد</span>
                          <small class="fs-6 mb-2">یک انتخاب مناسب برای استارتاپ‌ها و دانشجویان</small>
                          <span class="d-flex justify-content-center mt-3">
                            <span class="fw-medium fs-2 text-primary">20000</span>
                            <sub class="lh-1 fs-6 mt-auto mb-3 ms-1 text-primary">ءتء</sub>
                            <sub class="lh-1 fs-6 mt-auto mb-3 ms-1 text-muted">درماه</sub>
                          </span>
                        </span>
                        <input class="form-check-input" id="basicOption2" name="customRadioIcon" type="radio" value=""/>
                      </label>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-check custom-option custom-option-icon">
                      <label class="form-check-label custom-option-content" for="basicOption3">
                        <span class="custom-option-body">
                          <span class="custom-option-title fs-4 mb-1">تجاری</span>
                          <small class="fs-6 mb-2">یک انتخاب مناسب برای استارتاپ‌ها و دانشجویان</small>
                          <span class="d-flex justify-content-center mt-3">
                            <span class="fw-medium fs-2 text-primary">30000</span>
                            <sub class="lh-1 fs-6 mt-auto mb-3 ms-1 text-primary">ءتء</sub>
                            <sub class="lh-1 fs-6 mt-auto mb-3 ms-1 text-muted">درماه</sub>
                          </span>
                        </span>
                        <input class="form-check-input" id="basicOption3" name="customRadioIcon" type="radio" value=""/>
                      </label>
                    </div>
                  </div>
                </div>
                <!--/ Custom plan options -->
                <div class="content-header mb-4">
                  <h3 class="mb-1">اطلاعات پرداخت</h3>
                  <p>اطلاعات کارت خود را وارد کنید</p>
                </div>
                <!-- Credit Card Details -->
                <div class="row g-3">
                  <div class="col-md-12">
                    <label class="form-label w-100" for="multiStepsCard">شماره کارت</label>
                    <div class="input-group input-group-merge">
                      <input aria-describedby="multiStepsCardImg" class="form-control multi-steps-card" id="multiStepsCard" name="multiStepsCard" placeholder="1356 3215 6548 7898" type="text"/>
                      <span class="input-group-text cursor-pointer" id="multiStepsCardImg">
                        <span class="card-type"></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <label class="form-label" for="multiStepsName">نام روی کارت</label>
                    <input class="form-control" id="multiStepsName" name="multiStepsName" placeholder="نـوید" type="text"/>
                  </div>
                  <div class="col-6 col-md-4">
                    <label class="form-label" for="multiStepsExDate">تاریخ انقضا</label>
                    <input class="form-control multi-steps-exp-date" id="multiStepsExDate" name="multiStepsExDate" placeholder="MM/YY" type="text"/>
                  </div>
                  <div class="col-6 col-md-3">
                    <label class="form-label" for="multiStepsCvv">رمز دوم کارت اعتباری</label>
                    <div class="input-group input-group-merge">
                      <input class="form-control multi-steps-cvv" id="multiStepsCvv" maxlength="3" name="multiStepsCvv" placeholder="" type="text"/>
                      <span class="input-group-text cursor-pointer" id="multiStepsCvvHelp">
                        <i class="ti ti-help text-muted" data-bs-placement="top" data-bs-toggle="tooltip" title="ارزش تأیید کارت"></i>
                      </span>
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-between mt-4">
                    <button class="btn btn-label-secondary btn-prev">
                      <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">قبلی</span>
                    </button>
                    <button class="btn btn-success btn-next btn-submit" type="submit">ثبت نام</button>
                  </div>
                </div>
                <!--/ Credit Card Details -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- / Multi Steps Registration -->
  </div>
</div>

<script type="module">
  // Check selected custom option
  window.Helpers.initCustomOptionCheck();
</script>
@endsection
