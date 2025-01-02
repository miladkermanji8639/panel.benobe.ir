@extends('admin.content.layouts/layoutMaster')

<blade section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D9%85%D8%B4%D8%AE%D8%B5%D8%A7%D8%AA%20%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%20-%20%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84%26%2339%3B) />

<!-- Vendor Styles -->
@section('vendor-style')
				<blade
								vite|(%5B%26%2339%3Bresources%2Fassets%2Fvendor%2Flibs%2Fdatatables-bs5%2Fdatatables.bootstrap5.scss%26%2339%3B%2C%20%26%2339%3Bresources%2Fassets%2Fvendor%2Flibs%2Fdatatables-responsive-bs5%2Fresponsive.bootstrap5.scss%26%2339%3B%2C%20%26%2339%3Bresources%2Fassets%2Fvendor%2Flibs%2Fdatatables-checkboxes-jquery%2Fdatatables.checkboxes.scss%26%2339%3B%5D)>
				@endsection

				<!-- Page Styles -->
				@section('page-style')
								@vite(['resources/assets/vendor/scss/pages/page-profile.scss'])
				@endsection

				<!-- Vendor Scripts -->
				@section('vendor-script')
								<blade vite|(%5B%26%2339%3Bresources%2Fassets%2Fvendor%2Flibs%2Fdatatables-bs5%2Fdatatables-bootstrap5.js%26%2339%3B%5D)>
								@endsection

								<!-- Page Scripts -->
								@section('page-script')
												@vite(['resources/assets/js/pages-profile.js'])
								@endsection

								@section('content')

												<h4 class="mb-4 py-3"><span class="text-muted fw-light">مشخصات کاربر/</span> پروفایل</h4>

												<!-- Header -->
												<div class="row">
																<div class="col-12">
																				<div class="card mb-4">
																								<div class="user-profile-header-banner">
																												<img src="{{ asset('assets/img/pages/profile-banner.png') }}" alt="Banner image" class="rounded-top">
																								</div>
																								<div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start mb-4 text-center">
																												<div class="mt-n2 mx-sm-0 mx-auto flex-shrink-0">
																																<img src="{{ asset('assets/img/avatars/14.png') }}" alt="user image" class="d-block ms-sm-4 user-profile-img ms-0 h-auto rounded">
																												</div>
																												<div class="flex-grow-1 mt-sm-5 mt-3">
																																<div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start flex-md-row flex-column mx-4 gap-4">
																																				<div class="user-profile-info">
																																								<h4>
																																												@if (Auth::check())
																																																{{ Auth::user()->first_name . ' ' . Auth::user()->last_name }}
																																												@endif
																																								</h4>
																																								<ul class="list-inline d-flex align-items-center justify-content-sm-start justify-content-center mb-0 flex-wrap gap-2">
																																												<li class="list-inline-item d-flex gap-1"> <i class="ti ti-color-swatch"></i>
																																																@if (Auth::check())
																																																				@if (Auth::user()->permission == 1)
																																																								{{ 'مدیر سایت' }}
																																																				@endif
																																																				@if (Auth::user()->permission == 2)
																																																								{{ ' ادمین' }}
																																																				@endif
																																																				@if (Auth::user()->permission == 3)
																																																								{{ ' منشی' }}
																																																				@endif
																																																@endif

																																												</li>
																																												<li class="list-inline-item d-flex gap-1"><i class="ti ti-map-pin"></i> کردستان</li>
																																												<li class="list-inline-item d-flex gap-1"> <i class="ti ti-calendar"></i>

																																																عضویت در
																																																{{ Auth::user()->created_at }}

																																												</li>
																																								</ul>
																																				</div>
																																				<a href="javascript:void(0)" class="btn btn-primary">
																																								<i class='ti ti-check me-1'></i>متصل
																																				</a>
																																</div>
																												</div>
																								</div>
																				</div>
																</div>
												</div>
												<!--/ Header -->

												<!-- Navbar pills -->
												<div class="row">
																<div class="col-md-12">
																				<ul class="nav nav-pills flex-column flex-sm-row mb-4">
																								<li class="nav-item"><a class="nav-link active" href="javascript:void(0);"><i class='ti-xs ti ti-user-check me-1'></i> مشخصات</a></li>
																								<li class="nav-item"><a class="nav-link" href="{{ url('pages/profile-teams') }}"><i class='ti-xs ti ti-users me-1'></i>
																																تیم ها</a></li>
																								<li class="nav-item"><a class="nav-link" href="{{ url('pages/profile-projects') }}"><i class='ti-xs ti ti-layout-grid me-1'></i> پروژه ها</a></li>
																								<li class="nav-item"><a class="nav-link" href="{{ url('pages/profile-connections') }}"><i class='ti-xs ti ti-link me-1'></i> دنبال کننده</a></li>
																				</ul>
																</div>
												</div>
												<!--/ Navbar pills -->

												<!-- User Profile Content -->
												<div class="row">
																<div class="col-xl-4 col-lg-5 col-md-5">
																				<!-- About User -->
																				<div class="card mb-4">
																								<div class="card-body"> <small class="card-text text-uppercase">درباره</small>
																												<ul class="list-unstyled mb-4 mt-3">
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-user text-heading"></i><span class="fw-medium text-heading mx-2">نام کامل:</span> <span>پیمان معادی</span> </li>
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-check text-heading"></i><span class="fw-medium text-heading mx-2">وضعیت:</span> <span>فعال</span> </li>
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-crown text-heading"></i><span class="fw-medium text-heading mx-2">نقش:</span> <span>توسعه دهنده</span> </li>
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-flag text-heading"></i><span class="fw-medium text-heading mx-2">کشور:</span> <span>ایران</span> </li>
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-file-description text-heading"></i><span class="fw-medium text-heading mx-2">زبان ها:</span> <span>فارسی</span> </li>
																												</ul> <small class="card-text text-uppercase">مخاطبین</small>
																												<ul class="list-unstyled mb-4 mt-3">
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-phone-call"></i><span class="fw-medium text-heading mx-2">تماس با ما:</span> <span><bdi>0913 000 0000</bdi></span>
																																</li>
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-brand-skype"></i><span class="fw-medium text-heading mx-2">اسکایپ: نـوید</span> <span>@TEST</span> </li>
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-mail"></i><span class="fw-medium text-heading mx-2">پست الکترونیکی:</span> <span>john.doe@example.com</span>
																																</li>
																												</ul> <small class="card-text text-uppercase">تیم ها</small>
																												<ul class="list-unstyled mb-0 mt-3">
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-brand-angular text-danger me-2"></i>
																																				<div class="d-flex flex-wrap"> <span class="fw-medium text-heading me-2">توسعه دهنده آنگولار</span>
																																								<span>(126 اعضا)</span>
																																				</div>
																																</li>
																																<li class="d-flex align-items-center"> <i class="ti ti-brand-react-native text-info me-2"></i>
																																				<div class="d-flex flex-wrap"> <span class="fw-medium text-heading me-2">توسعه دهنده ری‌اکت</span>
																																								<span>(98 اعضا)</span>
																																				</div>
																																</li>
																												</ul>
																								</div>
																				</div>
																				<!--/ About User -->
																				<!-- Profile Overview -->
																				<div class="card mb-4">
																								<div class="card-body">
																												<p class="card-text text-uppercase">دید کلی</p>
																												<ul class="list-unstyled mb-0">
																																<li class="d-flex align-items-center mb-3"> <i class="ti ti-check"></i><span class="fw-medium mx-2">تسک انجام شده:</span> <span>13.5k</span> </li>
																																<li class="d-flex align-items-center mb-3">
																																				<i class="ti ti-layout-grid"></i><span class="fw-medium mx-2">پروژه انجام شده:</span>
																																				<span>146</span>
																																</li>
																																<li class="d-flex align-items-center">
																																				<i class="ti ti-users"></i><span class="fw-medium mx-2">همکاران / دنبال کننده:</span>
																																				<span>897</span>
																																</li>
																												</ul>
																								</div>
																				</div>
																				<!--/ Profile Overview -->
																</div>
																<div class="col-xl-8 col-lg-7 col-md-7">
																				<!-- Activity Timeline -->
																				<div class="card card-action mb-4">
																								<div class="card-header align-items-center">
																												<h5 class="card-action-title mb-0">روند فعالیت‌ها</h5>
																												<div class="card-action-element">
																																<div class="dropdown">
																																				<button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"> <i class="ti ti-dots-vertical text-muted"></i> </button>
																																				<ul class="dropdown-menu dropdown-menu-end">
																																								<li><a class="dropdown-item" href="javascript:void(0);">جدول زمانی اشتراک گذاری</a></li>
																																								<li><a class="dropdown-item" href="javascript:void(0);">پیشنهادات ویرایش</a></li>
																																								<li>
																																												<hr class="dropdown-divider" />
																																								</li>
																																								<li><a class="dropdown-item" href="javascript:void(0);">گزارش اشکال</a></li>
																																				</ul>
																																</div>
																												</div>
																								</div>
																								<div class="card-body pb-0">
																												<ul class="timeline mb-0 ms-1">
																																<li class="timeline-item timeline-item-transparent"> <span class="timeline-point timeline-point-primary"></span>
																																				<div class="timeline-event">
																																								<div class="timeline-header">
																																												<h6 class="mb-0">جلسه مشتری</h6> <small class="text-muted">امروز</small>
																																								</div>
																																								<p class="mb-2">جلسه پروژه با نـوید در ساعت 10:15 صبح</p>
																																								<div class="d-flex flex-wrap">
																																												<div class="avatar me-2"> <img src="{{ asset('assets/img/avatars/3.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																												<div class="ms-1">
																																																<h6 class="mb-0">امیر آقایی (مشتری)</h6> <span>مدیر عامل شرکت اسنپ</span>
																																												</div>
																																								</div>
																																				</div>
																																</li>
																																<li class="timeline-item timeline-item-transparent"> <span class="timeline-point timeline-point-success"></span>
																																				<div class="timeline-event">
																																								<div class="timeline-header">
																																												<h6 class="mb-0"> پروژه فروشگاه اینترنتی برای مشتری</h6> <small class="text-muted">2 روز
																																																پیش</small>
																																								</div>
																																								<p class="mb-0">طراحی صفحه داشبورد مشتریان</p>
																																				</div>
																																</li>
																																<li class="timeline-item timeline-item-transparent"> <span class="timeline-point timeline-point-danger"></span>
																																				<div class="timeline-event">
																																								<div class="timeline-header">
																																												<h6 class="mb-0">2 فایل جهت طراحی مجدد فرستاده شد</h6> <small class="text-muted">6 روز
																																																پیش</small>
																																								</div>
																																								<p class="mb-2"> ارسال توسط زهرا نعمتیان <img src="{{ asset('assets/img/avatars/4.png') }}" class="rounded-circle me-3" alt="" height="24" width="24" /> </p>
																																								<div class="d-flex flex-wrap gap-2 pt-1">
																																												<a href="javascript:void(0)" class="me-3"><img src="{{ asset('assets/img/icons/misc/doc.png') }}" alt="دستورالعمل های برنامه تصویر" width="15" class="me-2" /> <span
																																																				class="fw-medium text-heading">فایل CSS</span></a>
																																												<a href="javascript:void(0)"><img src="{{ asset('assets/img/icons/misc/xls.png') }}" alt="د نتایج تست تصویر" width="15" class="me-2" /> <span class="fw-medium text-heading">فایل
																																																				Excel</span></a>
																																								</div>
																																				</div>
																																</li>
																																<li class="timeline-item timeline-item-transparent border-transparent"> <span class="timeline-point timeline-point-info"></span>
																																				<div class="timeline-event">
																																								<div class="timeline-header">
																																												<h6 class="mb-0">وضعیت پروژه به روز شد</h6> <small class="text-muted">10 روز پیش</small>
																																								</div>
																																								<p class="mb-0">برنامه ووکامرس iOS تکمیل شد</p>
																																				</div>
																																</li>
																												</ul>
																								</div>
																				</div>
																				<!--/ Activity Timeline -->
																				<div class="row">
																								<!-- Connections -->
																								<div class="col-lg-12 col-xl-6">
																												<div class="card card-action mb-4">
																																<div class="card-header align-items-center">
																																				<h5 class="card-action-title mb-0">دنبال کننده ها</h5>
																																				<div class="card-action-element">
																																								<div class="dropdown">
																																												<button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false">
																																																<i class="ti ti-dots-vertical text-muted"></i> </button>
																																												<ul class="dropdown-menu dropdown-menu-end">
																																																<li><a class="dropdown-item" href="javascript:void(0);">دنبال نکردن همه</a></li>
																																																<li><a class="dropdown-item" href="javascript:void(0);">دنبال کردن همه</a></li>
																																																<li>
																																																				<hr class="dropdown-divider" />
																																																</li>
																																																<li><a class="dropdown-item" href="javascript:void(0);">گزارش ایراد</a></li>
																																												</ul>
																																								</div>
																																				</div>
																																</div>
																																<div class="card-body">
																																				<ul class="list-unstyled mb-0">
																																								<li class="mb-3">
																																												<div class="d-flex align-items-start">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/avatars/2.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">مهناز افشار</h6> <small class="text-muted">45 دنبال کننده</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto">
																																																				<button class="btn btn-label-primary btn-icon btn-sm"> <i class="ti ti-user-check ti-xs"></i> </button>
																																																</div>
																																												</div>
																																								</li>
																																								<li class="mb-3">
																																												<div class="d-flex align-items-start">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/avatars/3.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">بهروز وثوقی</h6> <small class="text-muted">1.32k دنبال کننده</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto">
																																																				<button class="btn btn-primary btn-icon btn-sm"> <i class="ti ti-user-x ti-xs"></i>
																																																				</button>
																																																</div>
																																												</div>
																																								</li>
																																								<li class="mb-3">
																																												<div class="d-flex align-items-start">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/avatars/10.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">سارا بهرامی</h6> <small class="text-muted">125 دنبال کننده</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto">
																																																				<button class="btn btn-primary btn-icon btn-sm"> <i class="ti ti-user-x ti-xs"></i>
																																																				</button>
																																																</div>
																																												</div>
																																								</li>
																																								<li class="mb-3">
																																												<div class="d-flex align-items-start">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/avatars/7.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">رامبد جوان</h6> <small class="text-muted">456 دنبال کننده</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto">
																																																				<button class="btn btn-label-primary btn-icon btn-sm"> <i class="ti ti-user-check ti-xs"></i> </button>
																																																</div>
																																												</div>
																																								</li>
																																								<li class="mb-3">
																																												<div class="d-flex align-items-start">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/avatars/12.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">هانیه توسلی</h6> <small class="text-muted">دنبال کننده 1.2k</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto">
																																																				<button class="btn btn-label-primary btn-icon btn-sm"> <i class="ti ti-user-check ti-xs"></i> </button>
																																																</div>
																																												</div>
																																								</li>
																																								<li class="text-center"> <a href="javascript:;">مشاهده همه</a> </li>
																																				</ul>
																																</div>
																												</div>
																								</div>
																								<!--/ Connections -->
																								<!-- Teams -->
																								<div class="col-lg-12 col-xl-6">
																												<div class="card card-action mb-4">
																																<div class="card-header align-items-center">
																																				<h5 class="card-action-title mb-0">تیم ها</h5>
																																				<div class="card-action-element">
																																								<div class="dropdown">
																																												<button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false">
																																																<i class="ti ti-dots-vertical text-muted"></i> </button>
																																												<ul class="dropdown-menu dropdown-menu-end">
																																																<li><a class="dropdown-item" href="javascript:void(0);">اشتراک تیم ها</a></li>
																																																<li><a class="dropdown-item" href="javascript:void(0);">پیشنهادات ویرایش</a></li>
																																																<li>
																																																				<hr class="dropdown-divider" />
																																																</li>
																																																<li><a class="dropdown-item" href="javascript:void(0);">گزارش اشکال</a></li>
																																												</ul>
																																								</div>
																																				</div>
																																</div>
																																<div class="card-body">
																																				<ul class="list-unstyled mb-0">
																																								<li class="mb-3">
																																												<div class="d-flex align-items-center">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/icons/brands/react-label.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">توسعه دهندگان React</h6> <small class="text-muted">72 عضو</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto"> <a href="javascript:;"><span class="badge bg-label-danger">توسعه
																																																												دهنده</span></a> </div>
																																												</div>
																																								</li>
																																								<li class="mb-3">
																																												<div class="d-flex align-items-center">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/icons/brands/support-label.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">تیم پشتیبانی</h6> <small class="text-muted">122 عضو</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto"> <a href="javascript:;"><span class="badge bg-label-primary">پشتیبانی</span></a> </div>
																																												</div>
																																								</li>
																																								<li class="mb-3">
																																												<div class="d-flex align-items-center">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/icons/brands/figma-label.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">طراحان رابط کاربری</h6> <small class="text-muted">7 عضو</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto"> <a href="javascript:;"><span class="badge bg-label-info">طراح</span></a>
																																																</div>
																																												</div>
																																								</li>
																																								<li class="mb-3">
																																												<div class="d-flex align-items-center">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/icons/brands/vue-label.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">توسعه دهندگان Vue.js</h6> <small class="text-muted">289 عضو</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto"> <a href="javascript:;"><span class="badge bg-label-danger">توسعه
																																																												دهنده</span></a> </div>
																																												</div>
																																								</li>
																																								<li class="mb-3">
																																												<div class="d-flex align-items-center">
																																																<div class="d-flex align-items-start">
																																																				<div class="avatar me-2"> <img src="{{ asset('assets/img/icons/brands/twitter-label.png') }}" alt="آواتار" class="rounded-circle" /> </div>
																																																				<div class="me-2 ms-1">
																																																								<h6 class="mb-0">بازاریابی دیجیتال</h6> <small class="text-muted">24 عضو</small>
																																																				</div>
																																																</div>
																																																<div class="ms-auto"> <a href="javascript:;"><span class="badge bg-label-secondary">بازاریابی</span></a> </div>
																																												</div>
																																								</li>
																																								<li class="text-center"> <a href="javascript:;">مشاهده همه تیم ها</a> </li>
																																				</ul>
																																</div>
																												</div>
																								</div>
																								<!--/ Teams -->
																				</div>
																				<!-- Projects table -->
																				<div class="card mb-4">
																								<div class="card-datatable table-responsive">
																												<table class="datatables-projects border-top table">
																																<thead>
																																				<tr>
																																								<th></th>
																																								<th></th>
																																								<th>نام</th>
																																								<th>مدیر</th>
																																								<th>تیم</th>
																																								<th class="w-px-200">وضعیت</th>
																																								<th>عملیات</th>
																																				</tr>
																																</thead>
																												</table>
																								</div>
																				</div>
																				<!--/ Projects table -->
																</div>
												</div>
												<!--/ User Profile Content -->
								@endsection
