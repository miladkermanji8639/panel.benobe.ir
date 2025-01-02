@php
$configData = Helper::appClasses();
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات سایت - قیمت گذاری')

<!-- Page Styles -->
@section('page-style')
@vite(['resources/assets/vendor/scss/pages/front-page-pricing.scss'])
@endsection

<!-- Page Scripts -->
@section('page-script')
@vite(['resources/assets/js/front-page-pricing.js'])
@endsection


@section('content')
<!-- Pricing Plans -->
<section class="section-py first-section-pt">
  <div class="container">
    <h3 class="text-center mb-3 fw-medium">
      پلن‌هایءء همکاریءء
      <span class="section-title">با بهترین قیمت گذاریءء</span>
    </h3>
    <p class="text-center mb-4 pb-3"> همه پلن‌ها شامل بیش از 40 ابزار و ویژگی پیشرفته برای تقویت محصول شما هستند.
      <br/>
      بهترین پلن‌ را متناسب با نیاز خود انتخاب کنید.
    </p>
    <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 pb-5 pt-3 mb-0 mb-md-4">
      <label class="switch switch-primary ms-3 ms-sm-0 mt-2">
        <span class="switch-label">ماهانه</span>
        <input type="checkbox" class="switch-input price-duration-toggler" checked />
        <span class="switch-toggle-slider">
          <span class="switch-on"></span>
          <span class="switch-off"></span>
        </span>
        <span class="switch-label">سالانه</span>
      </label>
      <div class="mt-n5 ms-n5 d-none d-sm-block">
        <i class="ti ti-corner-left-down ti-sm text-muted me-1 scaleX-n1-rtl"></i>
        <span class="badge badge-sm bg-label-primary">تا 10% تخفیف بگیرید</span>
      </div>
    </div>

    <div class="row mx-0 gy-3 px-lg-5">
      <!-- Basic -->
      <div class="col-lg mb-md-0 mb-4">
        <div class="card border rounded shadow-none">
          <div class="card-body">
            <div class="my-3 pt-2 text-center">
              <img src="{{asset('assets/img/illustrations/page-pricing-basic.png')}}" alt="Basic Image" height="140">
            </div>
            <h3 class="card-title text-center text-capitalize mb-1">اقتصادیءء</h3>
            <p class="text-center">مناسب برای استارتاپ های نوپا</p>
            <div class="text-center">
              <div class="d-flex justify-content-center">
                <h1 class="display-4 mb-0 text-primary">
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
              </div>
              <small class="price-yearly price-yearly-toggle text-muted">100٬000٬000 ‍ءتء در سال</small>
            </div>

            <ul class="ps-0 my-4 pt-2 circle-bullets">
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                100 درخواست در ماه
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                طراحی هویت بصری
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                پک کامل گرافیکی
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                ابزارهای اولیه ایجاد فرم
              </li>
              <li class="mb-0 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                حداکثر 2 زیر دامنه
              </li>
            </ul>
            <a href="{{ url('front-pages/payment') }}" class="btn btn-label-success d-grid w-100">پلن فعلی شما</a>
          </div>
        </div>
      </div>

      <!-- Pro -->
      <div class="col-lg mb-md-0 mb-4">
        <div class="card border-primary border shadow-none">
          <div class="card-body position-relative">
            <div class="position-absolute end-0 me-4 top-0 mt-4">
              <span class="badge bg-label-primary">پیشنهادی</span>
            </div>
            <div class="my-3 pt-2 text-center">
              <img src="{{asset('assets/img/illustrations/page-pricing-standard.png')}}" alt="Standard Image" height="140">
            </div>
            <h3 class="card-title text-center text-capitalize mb-1">پیشرفته</h3>
            <p class="text-center">بسته کاملی از نیاز های اساسی یک استارتاپ</p>
            <div class="text-center">
              <div class="d-flex justify-content-center">
                <h1 class="price-toggle price-yearly display-4 text-primary mb-0">
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
                </h1>
                <h1 class="price-toggle price-monthly display-4 text-primary mb-0 d-none">
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
                </h1>
              </div>
              <small class="price-yearly price-yearly-toggle text-muted">200٬000٬000 ‍ءتء در سال</small>
            </div>
            <ul class="ps-0 my-4 pt-2 circle-bullets">
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                طراحی سایت اختصاصی
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                توسعه اپلیکیشن موبایل
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                پشتیبانی اولیه در گیتهاب
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                به روزرسانی ماهانه
              </li>
              <li class="mb-0 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                طراحی سایت اختصاصی
              </li>
            </ul>
            <a href="{{ url('front-pages/payment') }}" class="btn btn-primary d-grid w-100">خرید اشتراک</a>
          </div>
        </div>
      </div>

      <!-- Enterprise -->
      <div class="col-lg">
        <div class="card border rounded shadow-none">
          <div class="card-body">

            <div class="my-3 pt-2 text-center">
              <img src="{{asset('assets/img/illustrations/page-pricing-enterprise.png')}}" alt="Enterprise Image" height="140">
            </div>
            <h3 class="card-title text-center text-capitalize mb-1">تـجاریءء</h3>
            <p class="text-center">همه کار هارو به ما بسپارید</p>

            <div class="text-center">
              <div class="d-flex justify-content-center">
                <h1 class="price-toggle price-yearly display-4 text-primary mb-0">
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
                </h1>
                <h1 class="price-toggle price-monthly display-4 text-primary mb-0 d-none">
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
                </h1>
              </div>
              <small class="price-yearly price-yearly-toggle text-muted">
                1٬000٬000٬000 ‍ءتء در سال
              </small>
            </div>
            <ul class="ps-0 my-4 pt-2 circle-bullets">
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                توسعه اپلیکیشن موبایل
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                بیش از 150 ابزار
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                طراحی سایت اختصاصی
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                به روزرسانی ماهانه
              </li>
              <li class="mb-0 d-flex align-items-center">
                <i class="ti ti-point ti-lg"></i>
                ابزار ساخت سریع
              </li>
            </ul>

            <a href="{{ url('front-pages/payment') }}" class="btn btn-label-primary d-grid w-100">خرید اشتراک</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--/ Pricing Plans -->
<!-- Pricing Free Trial -->
<section class="pricing-free-trial bg-label-primary">
  <div class="container">
    <div class="position-relative">
      <div class="d-flex justify-content-between flex-column-reverse flex-lg-row align-items-center py-4 px-5">
        <div class="text-center text-lg-start mt-2 ms-3">
          <h3 class="text-primary mb-3">برای شروع آماده اید؟</h3>
          <p class="text-body mb-1">از دوره آزمایشی 14 روزه ما جهت کسب اطمینان استفاده کنید.</p>
          <a href="{{ url('front-pages/payment') }}" class="btn btn-primary mt-4 mb-2">شروع کنید</a>
        </div>
        <!-- image -->
        <div class="text-center">
          <img src="{{asset('assets/img/illustrations/girl-with-laptop.png')}}" class="img-fluid me-lg-5 pe-lg-1 mb-3 mb-lg-0" alt="Api Key Image" width="202">
        </div>
      </div>
    </div>
  </div>
</section>
<!--/ Pricing Free Trial -->
<!-- Plans Comparison -->
<section class="section-py pricing-plans-comparison">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mb-4">
        <h2 class="mb-3">تمام امکئئانات هر اشتراکءء</h2>
        <p class="mb-1">خونسرد باشید، ما 48 ساعت ضمانت بازگشت پول داریم!</p>
      </div>
    </div>
    <div class="row mx-4">
      <div class="col-12">
        <div class="table-responsive border rounded">
          <table class="table table-striped text-center mb-0">
            <thead>
            <tr>
              <th scope="col">
                <p class="mb-1">امکانات</p>
                <small class="text-muted fw-normal text-capitalize">ویژگی های منحصر به فرد</small>
              </th>
              <th scope="col">
                <p class="mb-1">اقتصادی</p>
                <small class="text-muted fw-normal text-capitalize">10٬000٬000 ‍ءتء در ماه</small>
              </th>
              <th scope="col">
                <p class="mb-1 position-relative"> پیشرفته
                  <span class="badge badge-center rounded-pill bg-primary position-absolute mt-n2 ms-1">
                    <i class="ti ti-star"></i>
                  </span>
                </p>
                <small class="text-muted fw-normal text-capitalize">12٬000٬000 ‍ءتء در ماه</small>
              </th>
              <th scope="col">
                <p class="mb-1">تجاری</p>
                <small class="text-muted fw-normal text-capitalize">20٬000٬000 ‍ءتء در ماه</small>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>14 روز آزمایشی رایگان</td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td> توسعه اپلیکیشن موبایل</td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>پشتیبانی محصول</td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td> طراحی سایت اختصاصی</td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge bg-label-primary badge-sm text-uppercase">1 سایت درسال</span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td> طراحی هویت بصری</td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td> طراحی سایت وردپرس</td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge bg-label-primary badge-sm text-uppercase">1 سایت درماه</span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>نگهداری و پشتیبانی فعال</td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>ذخیره سازی داده ها به مدت 365 روز</td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary">
                  <i class="ti ti-x"></i>
                </span>
              </td>
              <td>
                <span class="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary">
                  <i class="ti ti-check"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a class="btn text-nowrap btn-label-primary" href="{{ url('front-pages/payment') }}">انتخاب</a>
              </td>
              <td>
                <a class="btn text-nowrap btn-primary" href="{{ url('front-pages/payment') }}">انتخاب</a>
              </td>
              <td>
                <a class="btn text-nowrap btn-label-primary" href="{{ url('front-pages/payment') }}">انتخاب</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
<!--/ Plans Comparison -->
<!-- FAQS -->
<section class="section-py pricing-faqs rounded-bottom bg-body">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="mb-2">سوالات متداول</h2>
      <p>برای یافتن پاسخ سوالات خود، آیتم های زیر را بررسی کنید.</p>
    </div>
    <div class="accordion accordion-without-arrow" id="faq">
      <div class="card accordion-item">
        <h6 class="accordion-header">
          <button aria-controls="faq-2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#faq-2" data-bs-toggle="collapse"> آیا لورم ایپسوم یک متن ساختگی نامفهوم است ؟</button>
        </h6>
        <div class="accordion-collapse collapse" data-bs-parent="#faq" id="faq-2">
          <div class="accordion-body"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
        </div>
      </div>
      <div class="card accordion-item">
        <h6 class="accordion-header">
          <button aria-controls="faq-1" aria-expanded="true" class="accordion-button" data-bs-target="#faq-1" data-bs-toggle="collapse" type="button"> آیا لورم ایپسوم یک متن ساختگی نامفهوم است ؟</button>
        </h6>
        <div class="accordion-collapse collapse show" data-bs-parent="#faq" id="faq-1">
          <div class="accordion-body"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
        </div>
      </div>
      <div class="card accordion-item">
        <h6 class="accordion-header">
          <button aria-controls="faq-3" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#faq-3" data-bs-toggle="collapse"> آیا لورم ایپسوم یک متن ساختگی نامفهوم است ؟</button>
        </h6>
        <div class="accordion-collapse collapse" data-bs-parent="#faq" id="faq-3">
          <div class="accordion-body"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--/ FAQS -->

@endsection
