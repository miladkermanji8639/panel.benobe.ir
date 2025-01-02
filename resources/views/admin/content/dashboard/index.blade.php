@extends('admin.content.layouts.layoutMaster')

@section('title', 'داشبورد   ')

@section('vendor-style')
@vite(['resources/assets/vendor/libs/apex-charts/apex-charts.scss'])
@endsection

@section('vendor-script')
@vite(['resources/assets/vendor/libs/apex-charts/apexcharts.js'])
@endsection

@section('page-script')
@vite(['resources/assets/js/dashboards-crm.js'])
@endsection

@section('content')

<div class="row">
  <!-- Sales last year -->
  <div class="col-xl-2 col-md-4 col-6 mb-4">
    <div class="card">
      <div class="card-header pb-0">
        <h5 class="card-title mb-0">فروش</h5>
        <small class="text-muted">سال گذشته</small>
      </div>
      <div id="salesLastYear"></div>
      <div class="card-body pt-0">
        <div class="d-flex justify-content-between align-items-center mt-3 gap-3">
          <h4 class="mb-1-">175K</h4>
          <small class="text-danger">
            <bdi>-16.2%</bdi>
          </small>
        </div>
      </div>
    </div>
  </div>
  <!-- Sessions Last month -->
  <div class="col-xl-2 col-md-4 col-6 mb-4">
    <div class="card">
      <div class="card-header pb-0">
        <h5 class="card-title mb-0">سرمایه‌گذاری</h5>
        <small class="text-muted">ماه گذشته</small>
      </div>
      <div class="card-body">
        <div id="sessionsLastMonth"></div>
        <div class="d-flex justify-content-between align-items-center mt-3 gap-3">
          <h4 class="mb-1-">45.1k</h4>
          <small class="text-success">
            <bdi>+12.6%</bdi>
          </small>
        </div>
      </div>
    </div>
  </div>
  <!-- Total Profit -->
  <div class="col-xl-2 col-md-4 col-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="badge p-2 bg-label-danger mb-2 rounded">
          <i class="ti ti-currency-dollar ti-md"></i>
        </div>
        <h5 class="card-title mb-1 pt-2">سود کل</h5>
        <small class="text-muted">هفته گذشته</small>
        <p class="mb-2 mt-1">1.28k</p>
        <div class="pt-1">
          <span class="badge bg-label-secondary">
            <bdi>-12.2%</bdi>
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- Total Sales -->
  <div class="col-xl-2 col-md-4 col-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="badge p-2 bg-label-info mb-2 rounded">
          <i class="ti ti-chart-bar ti-md"></i>
        </div>
        <h5 class="card-title mb-1 pt-2">مجموع فروش</h5>
        <small class="text-muted">هفته گذشته</small>
        <p class="mb-2 mt-1">
          <bdi><svg class="toman" width="1rem" height="1rem">
              <use xlink:href="#toman">
                <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                </symbol>
              </use>
            </svg>42k</bdi>
        </p>
        <div class="pt-1">
          <span class="badge bg-label-secondary">
            <bdi>+25.2%</bdi>
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- Revenue Growth -->
  <div class="col-xl-4 col-md-8 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column">
            <div class="card-title mb-auto">
              <h5 class="mb-1 text-nowrap">رشد درآمد</h5>
              <small>گزارش هفتگی</small>
            </div>
            <div class="chart-statistics">
              <h3 class="card-title mb-3">
                <bdi><svg class="toman" width="1rem" height="1rem">
                    <use xlink:href="#toman">
                      <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                      </symbol>
                    </use>
                  </svg>42k</bdi>
              </h3>
              <span class="badge bg-label-success">
                <bdi>+15.2%</bdi>
              </span>
            </div>
          </div>
          <div class="my-2" id="revenueGrowth"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Earning Reports Tabs-->
  <div class="col-12 col-xl-8 mb-4">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <div class="card-title mb-0">
          <h5 class="mb-0">گزارشات سود</h5>
          <small class="text-muted">بررسی مختصر درآمد سالانه</small>
        </div>
        <div class="dropdown">
          <button aria-expanded="false" aria-haspopup="true" class="btn p-0" data-bs-toggle="dropdown" id="earningReportsTabsId" type="button">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div aria-labelledby="earningReportsTabsId" class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0);">موارد بیشتر</a>
            <a class="dropdown-item" href="javascript:void(0);">حذف</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <ul class="nav nav-tabs widget-nav-tabs pb-3 gap-4 mx-1 d-flex flex-nowrap" role="tablist">
          <li class="nav-item">
            <a aria-controls="navs-orders-id" aria-selected="true" class="nav-link btn active d-flex flex-column align-items-center justify-content-center" data-bs-target="#navs-orders-id" data-bs-toggle="tab" href="javascript:void(0);" role="tab">
              <div class="badge bg-label-secondary rounded p-2">
                <i class="ti ti-shopping-cart ti-sm"></i>
              </div>
              <h6 class="tab-widget-title mb-0 mt-2">سفارشات</h6>
            </a>
          </li>
          <li class="nav-item">
            <a aria-controls="navs-sales-id" aria-selected="false" class="nav-link btn d-flex flex-column align-items-center justify-content-center" data-bs-target="#navs-sales-id" data-bs-toggle="tab" href="javascript:void(0);" role="tab">
              <div class="badge bg-label-secondary rounded p-2">
                <i class="ti ti-chart-bar ti-sm"></i>
              </div>
              <h6 class="tab-widget-title mb-0 mt-2">فروش</h6>
            </a>
          </li>
          <li class="nav-item">
            <a aria-controls="navs-profit-id" aria-selected="false" class="nav-link btn d-flex flex-column align-items-center justify-content-center" data-bs-target="#navs-profit-id" data-bs-toggle="tab" href="javascript:void(0);" role="tab">
              <div class="badge bg-label-secondary rounded p-2">
                <i class="ti ti-currency-dollar ti-sm"></i>
              </div>
              <h6 class="tab-widget-title mb-0 mt-2">سود</h6>
            </a>
          </li>
          <li class="nav-item">
            <a aria-controls="navs-income-id" aria-selected="false" class="nav-link btn d-flex flex-column align-items-center justify-content-center" data-bs-target="#navs-income-id" data-bs-toggle="tab" href="javascript:void(0);" role="tab">
              <div class="badge bg-label-secondary rounded p-2">
                <i class="ti ti-chart-pie-2 ti-sm"></i>
              </div>
              <h6 class="tab-widget-title mb-0 mt-2">درآمد</h6>
            </a>
          </li>
          <li class="nav-item">
            <a aria-selected="false" class="nav-link btn d-flex align-items-center justify-content-center disabled" data-bs-toggle="tab" href="javascript:void(0);" role="tab">
              <div class="badge bg-label-secondary rounded p-2">
                <i class="ti ti-plus ti-sm"></i>
              </div>
            </a>
          </li>
        </ul>
        <div class="tab-content p-0 ms-0 ms-sm-2">
          <div class="tab-pane fade show active" id="navs-orders-id" role="tabpanel">
            <div id="earningReportsTabsOrders"></div>
          </div>
          <div class="tab-pane fade" id="navs-sales-id" role="tabpanel">
            <div id="earningReportsTabsSales"></div>
          </div>
          <div class="tab-pane fade" id="navs-profit-id" role="tabpanel">
            <div id="earningReportsTabsProfit"></div>
          </div>
          <div class="tab-pane fade" id="navs-income-id" role="tabpanel">
            <div id="earningReportsTabsIncome"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Sales last 6 months -->
  <div class="col-md-6 col-xl-4 mb-4">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between">
        <div class="card-title mb-0">
          <h5 class="mb-0">فروش</h5>
          <small class="text-muted">6 ماه گذشته</small>
        </div>
        <div class="dropdown">
          <button aria-expanded="false" aria-haspopup="true" class="btn p-0" data-bs-toggle="dropdown" id="salesLastMonthMenu" type="button">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div aria-labelledby="salesLastMonthMenu" class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0);">موارد بیشتر</a>
            <a class="dropdown-item" href="javascript:void(0);">حذف</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div id="salesLastMonth"></div>
      </div>
    </div>
  </div>
  <!-- Browser States -->
  <div class="col-xl-4 col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between">
        <div class="card-title m-0 me-2">
          <h5 class="m-0 me-2">مرورگر کاربران</h5>
          <small class="text-muted">آمار بهمن 1401</small>
        </div>
        <div class="dropdown">
          <button aria-expanded="false" aria-haspopup="true" class="btn p-0" data-bs-toggle="dropdown" id="employeeList" type="button">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div aria-labelledby="employeeList" class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0);">دانلود</a>
            <a class="dropdown-item" href="javascript:void(0);">تازه سازی</a>
            <a class="dropdown-item" href="javascript:void(0);">اشتراک گذاری</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <ul class="p-0 m-0">
          <li class="d-flex mb-4 pb-2 align-items-center">
            <img alt="کروم" class="me-3 rounded" height="28" src="{{ asset('assets/img/icons/brands/chrome.png') }}"/>
            <div class="d-flex w-100 align-items-center gap-2">
              <div class="d-flex justify-content-between flex-grow-1 flex-wrap">
                <div>
                  <h6 class="mb-0">گوگل کروم</h6>
                </div>
                <div class="user-progress d-flex align-items-center gap-2">
                  <h6 class="mb-0">90.4%</h6>
                </div>
              </div>
              <div class="chart-progress" data-color="secondary" data-series="85"></div>
            </div>
          </li>
          <li class="d-flex mb-4 pb-2 align-items-center">
            <img alt="سياحت اکتشافی" class="me-3 rounded" height="28" src="{{ asset('assets/img/icons/brands/safari.png') }}"/>
            <div class="d-flex w-100 align-items-center gap-2">
              <div class="d-flex justify-content-between flex-grow-1 flex-wrap">
                <div>
                  <h6 class="mb-0">اپل سافاری</h6>
                </div>
                <div class="user-progress d-flex align-items-center gap-2">
                  <h6 class="mb-0">70.6%</h6>
                </div>
              </div>
              <div class="chart-progress" data-color="success" data-series="70"></div>
            </div>
          </li>
          <li class="d-flex mb-4 pb-2 align-items-center">
            <img alt="فایرفاکس" class="me-3 rounded" height="28" src="{{ asset('assets/img/icons/brands/firefox.png') }}"/>
            <div class="d-flex w-100 align-items-center gap-2">
              <div class="d-flex justify-content-between flex-grow-1 flex-wrap">
                <div>
                  <h6 class="mb-0">موزیلا فایرفاکس</h6>
                </div>
                <div class="user-progress d-flex align-items-center gap-2">
                  <h6 class="mb-0">35.5%</h6>
                </div>
              </div>
              <div class="chart-progress" data-color="primary" data-series="25"></div>
            </div>
          </li>
          <li class="d-flex mb-4 pb-2 align-items-center">
            <img alt="اپرا" class="me-3 rounded" height="28" src="{{ asset('assets/img/icons/brands/opera.png') }}"/>
            <div class="d-flex w-100 align-items-center gap-2">
              <div class="d-flex justify-content-between flex-grow-1 flex-wrap">
                <div>
                  <h6 class="mb-0">اپرا مینی</h6>
                </div>
                <div class="user-progress d-flex align-items-center gap-2">
                  <h6 class="mb-0">80.0%</h6>
                </div>
              </div>
              <div class="chart-progress" data-color="danger" data-series="75"></div>
            </div>
          </li>
          <li class="d-flex mb-4 pb-2 align-items-center">
            <img alt="لبه" class="me-3 rounded" height="28" src="{{ asset('assets/img/icons/brands/edge.png') }}"/>
            <div class="d-flex w-100 align-items-center gap-2">
              <div class="d-flex justify-content-between flex-grow-1 flex-wrap">
                <div>
                  <h6 class="mb-0">اینترنت اکسپلورر</h6>
                </div>
                <div class="user-progress d-flex align-items-center gap-2">
                  <h6 class="mb-0">62.2%</h6>
                </div>
              </div>
              <div class="chart-progress" data-color="info" data-series="60"></div>
            </div>
          </li>
          <li class="d-flex align-items-center">
            <img alt="شجاع" class="me-3 rounded" height="28" src="{{ asset('assets/img/icons/brands/brave.png') }}"/>
            <div class="d-flex w-100 align-items-center gap-2">
              <div class="d-flex justify-content-between flex-grow-1 flex-wrap">
                <div>
                  <h6 class="mb-0">بِرِیو</h6>
                </div>
                <div class="user-progress d-flex align-items-center gap-2">
                  <h6 class="mb-0">46.3%</h6>
                </div>
              </div>
              <div class="chart-progress" data-color="warning" data-series="45"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Project Status -->
  <div class="col-12 col-xl-4 mb-4 col-md-6">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h5 class="mb-0 card-title">وضعیت پروژه</h5>
        <div class="dropdown">
          <button aria-expanded="false" aria-haspopup="true" class="btn p-0" data-bs-toggle="dropdown" id="projectStatusId" type="button">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div aria-labelledby="projectStatusId" class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0);">موارد بیشتر</a>
            <a class="dropdown-item" href="javascript:void(0);">حذف</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex align-items-start">
          <div class="badge rounded bg-label-warning p-2 me-3 rounded">
            <i class="ti ti-currency-dollar ti-sm"></i>
          </div>
          <div class="d-flex justify-content-between w-100 gap-2 align-items-center">
            <div class="me-2">
              <h6 class="mb-0">
                <bdi><svg class="toman" width="1rem" height="1rem">
                    <use xlink:href="#toman">
                      <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                      </symbol>
                    </use>
                  </svg>4,3742</bdi>
              </h6>
              <small class="text-muted">درآمد شما</small>
            </div>
            <p class="mb-0 text-success">
              <bdi>+10.2%</bdi>
            </p>
          </div>
        </div>
        <div class="my-2" id="projectStatusChart"></div>
        <div class="d-flex justify-content-between mb-3">
          <h6 class="mb-0">حمایت ها</h6>
          <div class="d-flex">
            <p class="mb-0 me-3">
              <bdi><svg class="toman" width="1rem" height="1rem">
                  <use xlink:href="#toman">
                    <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                    </symbol>
                  </use>
                </svg>756.26</bdi>
            </p>
            <p class="mb-0 text-danger">
              <bdi>-139.34</bdi>
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-between mb-3 pb-1">
          <h6 class="mb-0">پادکست ها</h6>
          <div class="d-flex">
            <p class="mb-0 me-3">
              <bdi><svg class="toman" width="1rem" height="1rem">
                  <use xlink:href="#toman">
                    <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                    </symbol>
                  </use>
                </svg>2,207.03</bdi>
            </p>
            <p class="mb-0 text-success">
              <bdi>+576.24</bdi>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Active Projects -->
  <div class="col-xl-4 col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between">
        <div class="card-title mb-0">
          <h5 class="mb-0">پروژه فعال</h5>
          <small class="text-muted">میانگین 72% تکمیل شده</small>
        </div>
        <div class="dropdown">
          <button aria-expanded="false" aria-haspopup="true" class="btn p-0" data-bs-toggle="dropdown" id="activeProjects" type="button">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div aria-labelledby="activeProjects" class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0);">تازه سازی</a>
            <a class="dropdown-item" href="javascript:void(0);">دانلود</a>
            <a class="dropdown-item" href="javascript:void(0);">مشاهده همه</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <ul class="p-0 m-0">
          <li class="mb-3 pb-1 d-flex">
            <div class="d-flex w-50 align-items-center me-3">
              <img alt="آرم لاراول" class="me-3" src="{{ asset('assets/img/icons/brands/laravel-logo.png') }}" width="35"/>
              <div>
                <h6 class="mb-0">لاراول</h6>
                <small class="text-muted m-0">تجارت الکترونیک</small>
              </div>
            </div>
            <div class="d-flex flex-grow-1 align-items-center">
              <div class="progress w-100 me-3" style="height: 8px">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="54" class="progress-bar bg-danger" role="progressbar" style="width: 54%"></div>
              </div>
              <span class="text-muted">54%</span>
            </div>
          </li>
          <li class="mb-3 pb-1 d-flex">
            <div class="d-flex w-50 align-items-center me-3">
              <img alt="لوگوی فیگما" class="me-3" src="{{ asset('assets/img/icons/brands/figma-logo.png') }}" width="35"/>
              <div>
                <h6 class="mb-0">فیگما</h6>
                <small class="text-muted m-0">کیت رابط کاربری برنامه</small>
              </div>
            </div>
            <div class="d-flex flex-grow-1 align-items-center">
              <div class="progress w-100 me-3" style="height: 8px">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="86" class="progress-bar bg-primary" role="progressbar" style="width: 86%"></div>
              </div>
              <span class="text-muted">86%</span>
            </div>
          </li>
          <li class="mb-3 pb-1 d-flex">
            <div class="d-flex w-50 align-items-center me-3">
              <img alt="لوگوی وو" class="me-3" src="{{ asset('assets/img/icons/brands/vue-logo.png') }}" width="35"/>
              <div>
                <h6 class="mb-0">VueJs</h6>
                <small class="text-muted m-0">برنامه تقویم</small>
              </div>
            </div>
            <div class="d-flex flex-grow-1 align-items-center">
              <div class="progress w-100 me-3" style="height: 8px">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" class="progress-bar bg-success" role="progressbar" style="width: 90%"></div>
              </div>
              <span class="text-muted">90%</span>
            </div>
          </li>
          <li class="mb-3 pb-1 d-flex">
            <div class="d-flex w-50 align-items-center me-3">
              <img alt="آرم راکت" class="me-3" src="{{ asset('assets/img/icons/brands/react-logo.png') }}" width="35"/>
              <div>
                <h6 class="mb-0">ری‌اکت نیتیو</h6>
                <small class="text-muted m-0">داشبورد</small>
              </div>
            </div>
            <div class="d-flex flex-grow-1 align-items-center">
              <div class="progress w-100 me-3" style="height: 8px">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="37" class="progress-bar bg-info" role="progressbar" style="width: 37%"></div>
              </div>
              <span class="text-muted">37%</span>
            </div>
          </li>
          <li class="mb-3 pb-1 d-flex">
            <div class="d-flex w-50 align-items-center me-3">
              <img alt="آرم بوت استرپ" class="me-3" src="{{ asset('assets/img/icons/brands/bootstrap-logo.png') }}" width="35"/>
              <div>
                <h6 class="mb-0">بوت استرپ</h6>
                <small class="text-muted m-0">وبسایت</small>
              </div>
            </div>
            <div class="d-flex flex-grow-1 align-items-center">
              <div class="progress w-100 me-3" style="height: 8px">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="22" class="progress-bar bg-primary" role="progressbar" style="width: 22%"></div>
              </div>
              <span class="text-muted">22%</span>
            </div>
          </li>
          <li class="d-flex">
            <div class="d-flex w-50 align-items-center me-3">
              <img alt="لوگوی طرح" class="me-3" src="{{ asset('assets/img/icons/brands/sketch-logo.png') }}" width="35"/>
              <div>
                <h6 class="mb-0">Sketch</h6>
                <small class="text-muted m-0">طراحی سایت</small>
              </div>
            </div>
            <div class="d-flex flex-grow-1 align-items-center">
              <div class="progress w-100 me-3" style="height: 8px">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="29" class="progress-bar bg-warning" role="progressbar" style="width: 29%"></div>
              </div>
              <span class="text-muted">29%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Last Transaction -->
  <div class="col-lg-6 mb-4 mb-lg-0">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between">
        <h5 class="card-title m-0 me-2">آخرین پرداخت‌ها</h5>
        <div class="dropdown">
          <button aria-expanded="false" aria-haspopup="true" class="btn p-0" data-bs-toggle="dropdown" id="teamMemberList" type="button">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div aria-labelledby="teamMemberList" class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0);">دانلود</a>
            <a class="dropdown-item" href="javascript:void(0);">تازه سازی</a>
            <a class="dropdown-item" href="javascript:void(0);">اشتراک گذاری</a>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-borderless border-top">
          <thead class="border-bottom">
          <tr>
            <th>کارت</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>مبلغ</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div class="d-flex justify-content-start align-items-center">
                <div class="me-3">
                  <img alt="ویزا" height="30" src="{{ asset('assets/img/icons/payments/visa-img.png') }}"/>
                </div>
                <div class="d-flex flex-column">
                  <p class="mb-0 fw-medium">
                    <bdi>*4230</bdi>
                  </p>
                  <small class="text-muted">اعتبار</small>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-0 fw-medium">پرداخت شده</p>
                <small class="text-muted text-nowrap">۱۷ خرداد ۲۰۲۲</small>
              </div>
            </td>
            <td>
              <span class="badge bg-label-success">تایید شده</span>
            </td>
            <td>
              <p class="mb-0 fw-medium">
                <bdi>+<svg class="toman" width="1rem" height="1rem">
                    <use xlink:href="#toman">
                      <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                      </symbol>
                    </use>
                  </svg>1,678</bdi>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex justify-content-start align-items-center">
                <div class="me-3">
                  <img alt="ویزا" height="30" src="{{ asset('assets/img/icons/payments/master-card-img.png') }}"/>
                </div>
                <div class="d-flex flex-column">
                  <p class="mb-0 fw-medium">
                    <bdi>*5578</bdi>
                  </p>
                  <small class="text-muted">اعتبار</small>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-0 fw-medium">پرداخت شده</p>
                <small class="text-muted text-nowrap">۱۲ اردیبهشت ۲۰۲۲</small>
              </div>
            </td>
            <td>
              <span class="badge bg-label-danger">رد شده</span>
            </td>
            <td>
              <p class="mb-0 fw-medium">
                <bdi>-<svg class="toman" width="1rem" height="1rem">
                    <use xlink:href="#toman">
                      <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                      </symbol>
                    </use>
                  </svg>839</bdi>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex justify-content-start align-items-center">
                <div class="me-3">
                  <img alt="ویزا" height="30" src="{{ asset('assets/img/icons/payments/american-express-img.png') }}"/>
                </div>
                <div class="d-flex flex-column">
                  <p class="mb-0 fw-medium">
                    <bdi>*4567</bdi>
                  </p>
                  <small class="text-muted">اعتبار</small>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-0 fw-medium">پرداخت شده</p>
                <small class="text-muted text-nowrap">۲۸ اردیبهشت ۲۰۲۲</small>
              </div>
            </td>
            <td>
              <span class="badge bg-label-success">تایید شده</span>
            </td>
            <td>
              <p class="mb-0 fw-medium">
                <bdi>+<svg class="toman" width="1rem" height="1rem">
                    <use xlink:href="#toman">
                      <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                      </symbol>
                    </use>
                  </svg>435</bdi>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex justify-content-start align-items-center">
                <div class="me-3">
                  <img alt="ویزا" height="30" src="{{ asset('assets/img/icons/payments/visa-img.png') }}"/>
                </div>
                <div class="d-flex flex-column">
                  <p class="mb-0 fw-medium">
                    <bdi>*5699</bdi>
                  </p>
                  <small class="text-muted">اعتبار</small>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-0 fw-medium">پرداخت شده</p>
                <small class="text-muted text-nowrap">۸ فروردین ۲۰۲۲</small>
              </div>
            </td>
            <td>
              <span class="badge bg-label-secondary">در انتظار</span>
            </td>
            <td>
              <p class="mb-0 fw-medium">
                <bdi>+<svg class="toman" width="1rem" height="1rem">
                    <use xlink:href="#toman">
                      <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                      </symbol>
                    </use>
                  </svg>2,345</bdi>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex justify-content-start align-items-center">
                <div class="me-3">
                  <img alt="ویزا" height="30" src="{{ asset('assets/img/icons/payments/visa-img.png') }}"/>
                </div>
                <div class="d-flex flex-column">
                  <p class="mb-0 fw-medium">
                    <bdi>*5699</bdi>
                  </p>
                  <small class="text-muted">اعتبار</small>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex flex-column">
                <p class="mb-0 fw-medium">پرداخت شده</p>
                <small class="text-muted text-nowrap">۸ فروردین ۲۰۲۲</small>
              </div>
            </td>
            <td>
              <span class="badge bg-label-danger">رد شده</span>
            </td>
            <td>
              <p class="mb-0 fw-medium">
                <bdi>-<svg class="toman" width="1rem" height="1rem">
                    <use xlink:href="#toman">
                      <symbol id="toman" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" fill-rule="evenodd"></path>
                      </symbol>
                    </use>
                  </svg>234</bdi>
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Activity Timeline -->
  <div class="col-lg-6 col-md-12">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h5 class="card-title m-0 me-2 pt-1 mb-2 d-flex align-items-center">
          <i class="ti ti-list-details ms-n1 me-2"></i>
          روند فعالیت‌ها
        </h5>
        <div class="dropdown">
          <button aria-expanded="false" aria-haspopup="true" class="btn p-0" data-bs-toggle="dropdown" id="timelineWapper" type="button">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div aria-labelledby="timelineWapper" class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0);">دانلود</a>
            <a class="dropdown-item" href="javascript:void(0);">تازه سازی</a>
            <a class="dropdown-item" href="javascript:void(0);">اشتراک گذاری</a>
          </div>
        </div>
      </div>
      <div class="card-body pb-0">
        <ul class="timeline ms-1 mb-0">
          <li class="timeline-item timeline-item-transparent ps-4">
            <span class="timeline-point timeline-point-warning"></span>
            <div class="timeline-event">
              <div class="timeline-header">
                <h6 class="mb-0">جلسه مشتری</h6>
                <small class="text-muted">امروز</small>
              </div>
              <p class="mb-2">جلسه پروژه با نـوید در ساعت 10:15 صبح</p>
              <div class="d-flex flex-wrap">
                <div class="avatar me-2">
                  <img alt="آواتار" class="rounded-circle" src="{{ asset('assets/img/avatars/3.png') }}"/>
                </div>
                <div class="ms-1">
                  <h6 class="mb-0">امیر آقایی (مشتری)</h6>
                  <span>مدیر عامل شرکت اسنپ</span>
                </div>
              </div>
            </div>
          </li>
          <li class="timeline-item timeline-item-transparent ps-4">
            <span class="timeline-point timeline-point-primary"></span>
            <div class="timeline-event">
              <div class="timeline-header">
                <h6 class="mb-0">ایجاد یک پروژه جدید برای مشتری</h6>
                <small class="text-muted">2 روز پیش</small>
              </div>
              <p class="mb-0">اضافه کردن فایل ها به پوشه طراحی جدید</p>
            </div>
          </li>
          <li class="timeline-item timeline-item-transparent ps-4">
            <span class="timeline-point timeline-point-info"></span>
            <div class="timeline-event">
              <div class="timeline-header">
                <h6 class="mb-0">2 فایل پروژه جدید به اشتراک گذاشته شده</h6>
                <small class="text-muted">6 روز پیش</small>
              </div>
              <p class="mb-2">فرستاده شده توسط بهرام افشاری</p>
              <div class="d-flex flex-wrap gap-2 pt-1">
                <a class="me-3 d-flex align-items-center" dideo-checked="true" href="javascript:void(0)">
                  <i class="ti ti-file-text text-warning me-2 ti-xs"></i>
                  <span class="fw-medium text-heading">راهنمای اپلیکیشن</span>
                </a>
                <a class="d-flex align-items-center" dideo-checked="true" href="javascript:void(0)">
                  <i class="ti ti-table text-success me-2 ti-xs"></i>
                  <span class="fw-medium text-heading">نتایج بررسی</span>
                </a>
              </div>
            </div>
          </li>
          <li class="timeline-item timeline-item-transparent ps-4 border-transparent">
            <span class="timeline-point timeline-point-secondary"></span>
            <div class="timeline-event pb-0">
              <div class="timeline-header">
                <h6 class="mb-0">وضعیت پروژه به روز شده</h6>
                <small class="text-muted">10 روز پیش</small>
              </div>
              <p class="mb-0">برنامه ووکامرس iOS تکمیل شد</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
@endsection
