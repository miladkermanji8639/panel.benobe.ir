@php
$configData = Helper::appClasses();
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات سایت - پرداخت')

<!-- Page Styles -->
@section('page-style')
@vite(['resources/assets/vendor/scss/pages/front-page-payment.scss'])
@endsection

<!-- Vendor Scripts -->
@section('vendor-script')
@vite(['resources/assets/vendor/libs/cleavejs/cleave.js'])
@endsection

<!-- Page Scripts -->
@section('page-script')
@vite([
  'resources/assets/js/pages-pricing.js',
  'resources/assets/js/front-page-payment.js'
])
@endsection


@section('content')
<section class="section-py bg-body first-section-pt">
  <div class="container mt-2">
    <div class="card px-3">
      <div class="row">
        <div class="col-lg-7 card-body border-end">
          <h4 class="mb-2">پرداخت صورتحساب</h4>
          <p class="mb-0"> همه اشتراک ها بیش از 40 ابزار مختلف دارند که در توسعه کسب و کارتان به شما کمک می کند.
            <br/>
            روش پرداخت موردنظرتان را انتخاب کنید.
          </p>
          <div class="row py-4 my-2">
            <div class="col-md mb-md-0 mb-2">
              <div class="form-check custom-option custom-option-basic checked">
                <label class="form-check-label custom-option-content form-check-input-payment d-flex gap-3 align-items-center" for="customRadioVisa">
                  <input name="customRadioTemp" class="form-check-input" type="radio" value="credit-card" id="customRadioVisa" checked />
                  <span class="custom-option-body">
                    <img src="{{asset('assets/img/icons/payments/visa-'.$configData['style'].'.png') }}" alt="visa-card" width="58" data-app-light-img="icons/payments/visa-light.png" data-app-dark-img="icons/payments/visa-dark.png">
                    <span class="ms-3">کردیت کارت</span>
                  </span>
                </label>
              </div>
            </div>
            <div class="col-md mb-md-0 mb-2">
              <div class="form-check custom-option custom-option-basic">
                <label class="form-check-label custom-option-content form-check-input-payment d-flex gap-3 align-items-center" for="customRadioPaypal">
                  <input name="customRadioTemp" class="form-check-input" type="radio" value="paypal" id="customRadioPaypal" />
                  <span class="custom-option-body">
                    <img src="{{asset('assets/img/icons/payments/paypal-'.$configData['style'].'.png') }}" alt="paypal" width="58" data-app-light-img="icons/payments/paypal-light.png" data-app-dark-img="icons/payments/paypal-dark.png">
                    <span class="ms-3">پی پال</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <h4 class="mt-2 mb-4">اطلاعات پرداخت</h4>
          <form>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label" for="billings-email">آدرس ایمیل</label>
                <input class="form-control" id="billings-email" placeholder="john.doe@gmail.com" type="text"/>
              </div>
              <div class="col-md-6">
                <label class="form-label" for="billings-password">رمز ورود</label>
                <input class="form-control" id="billings-password" placeholder="*******" type="password"/>
              </div>
              <div class="col-md-6">
                <label class="form-label" for="billings-country">کشور</label>
                <select class="form-select" data-allow-clear="true" id="billings-country">
                  <option value="">انتخاب کنید</option>
                  <option value="Australia">استرالیا</option>
                  <option value="Bangladesh">بنگلادش</option>
                  <option value="Belarus">بلاروس</option>
                  <option value="Brazil">برزیل</option>
                  <option value="Canada">کانادا</option>
                  <option value="China">چین</option>
                  <option value="France">فرانسه</option>
                  <option value="Germany">آلمان</option>
                  <option value="India">هندوستان</option>
                  <option value="Indonesia">اندونزی</option>
                  <option value="Israel">اسرائيل</option>
                  <option value="Italy">ایتالیا</option>
                  <option value="Japan">ژاپن</option>
                  <option value="Korea">جمهوری کره</option>
                  <option value="Mexico">مکزیک</option>
                  <option value="Philippines">فیلیپین</option>
                  <option value="Russia">فدراسیون روسیه</option>
                  <option value="South Africa">آفریقای جنوبی</option>
                  <option value="Thailand">تایلند</option>
                  <option value="Turkey">ترکیه</option>
                  <option value="Ukraine">اوکراین</option>
                  <option value="United Arab Emirates">امارات متحده عربی</option>
                  <option value="United Kingdom">انگلستان</option>
                  <option value="United States">ایالات متحده</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label" for="billings-zip">کد پستی</label>
                <input class="form-control billings-zip-code" id="billings-zip" placeholder="کد پستی 10 رقمی" type="text"/>
              </div>
            </div>
          </form>
          <div id="form-credit-card">
            <h4 class="mt-4 pt-2">اطلاعات کارت</h4>
            <form>
              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label" for="billings-card-num">شماره کارت</label>
                  <div class="input-group input-group-merge">
                    <input aria-describedby="paymentCard" class="form-control billing-card-mask bdi" id="billings-card-num" placeholder="7465 8374 5837 5067" type="text"/>
                    <span class="input-group-text cursor-pointer p-1" id="paymentCard">
                      <span class="card-type"></span>
                    </span>
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="billings-card-name">نام صاحب حساب</label>
                  <input class="form-control" id="billings-card-name" placeholder="نوید محمدزاده" type="text"/>
                </div>
                <div class="col-md-3">
                  <label class="form-label" for="billings-card-date">تاریخ انقضا</label>
                  <input class="form-control billing-expiry-date-mask" id="billings-card-date" placeholder="MM/YY" type="text"/>
                </div>
                <div class="col-md-3">
                  <label class="form-label" for="billings-card-cvv">CVV</label>
                  <input class="form-control billing-cvv-mask bdi" id="billings-card-cvv" maxlength="3" placeholder="965" type="text"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5 card-body">
          <h4 class="mb-2">جزئیات سفارش</h4>
          <p class="pb-2 mb-0"> لطفا قبل پرداخت همه موارد را بررسی کنید,
            <br/>
            بعد از پرداخت بازگشت وجه زمان بر می باشد.
          </p>
          <div class="bg-lighter p-4 rounded mt-4">
            <p class="mb-1">مناسب برای استارتاپ های نوپا</p>
            <div class="d-flex align-items-center">
              <h1 class="text-heading display-5 mb-1">
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
              </h1>
              <sub class="ms-2"> /درماه</sub>
            </div>
            <div class="d-grid">
              <button class="btn btn-label-primary" data-bs-target="#pricingModal" data-bs-toggle="modal" type="button"> تغییر پلن</button>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <p class="mb-0">جمع سفارش</p>
              <h6 class="mb-0">10٬000٬000 ‍ءتء</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <p class="mb-0">مالیات بر ارزش افزوده</p>
              <h6 class="mb-0">100٬000 ‍ءتء</h6>
            </div>
            <hr/>
            <div class="d-flex justify-content-between align-items-center mt-3 pb-1">
              <p class="mb-0">مبلغ قابل پرداخت</p>
              <h6 class="mb-0">10٬100٬000 ‍ءتء</h6>
            </div>
            <div class="d-grid mt-3">
              <button class="btn btn-success">
                <span class="me-2">پرداخت صورتحساب</span>
                <i class="ti ti-arrow-right scaleX-n1-rtl"></i>
              </button>
            </div>
            <p class="mt-4 pt-2"> با ادامه فرایند و پرداخت صورتحساب شما قوانین و مقررات تصویب شده در سیستم ما را می پذیرید.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Modal -->
@include('_partials/_modals/modal-pricing')
<!-- /Modal -->
@endsection
