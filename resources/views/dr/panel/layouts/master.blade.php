<!DOCTYPE html>
<html lang="en">

<head>
 @include('dr.panel.layouts.partials.head-tags')
 @yield('styles')
 <title>
  @if (Auth::guard('doctor')->check())
   پنل {{ Auth::guard('doctor')->user()->user_type === 'doctor' ? 'دکتر' : 'منشی' }} | به نوبه
  @endif
 </title>
 @include('dr.panel.my-tools.loader-btn')
</head>

<body>
 @include('dr.panel.layouts.partials.sidebar')
 <div class="content">
  @include('dr.panel.layouts.partials.header')

  <div class="top-dr-panel d-flex justify-content-between w-100 align-items-start">
   <div class="p-3 bg-white">
    <nav aria-label="breadcrumb">
     <ol class="breadcrumb bg-white">
      <li class="breadcrumb-item"><a href="#">پنل دکتر</a></li>
      <li class="breadcrumb-item active" aria-current="page"> @yield('bread-crumb-title')</li>
     </ol>
    </nav>
   </div>
   <div class="myPanelOption p-3">
    <div class="d-flex align-items-center">
     <div class="my-tooltip mx-2">
      <svg data-toggle="tooltip" data-placement="bottom"
       title="از این قسمت، مرکزی که در آن مشغول تجویز و طبابت هستید را انتخاب کنید" width="16" height="17"
       viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="hidden lg:block svg-help"
       color="#3f4079" data-tip="true" data-for="centerSelect" currentItem="false">
       <path
        d="M8.00006 9.9198V9.70984C8.00006 9.02984 8.42009 8.66982 8.84009 8.37982C9.25009 8.09982 9.66003 7.73983 9.66003 7.07983C9.66003 6.15983 8.92006 5.4198 8.00006 5.4198C7.08006 5.4198 6.34009 6.15983 6.34009 7.07983"
        stroke="#3f4079" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
       <path d="M7.9955 12.0692H8.0045" stroke="#3f4079" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"></path>
       <circle cx="8" cy="8.99445" r="7.25" stroke="#3f4079" stroke-width="1.5"></circle>
      </svg>
     </div>
     <div class="">
      <div class="dropdown">
       <div
        class="dropdown-trigger btn  h-40 w-300 bg-light-blue text-left d-flex justify-content-between align-items-center"
        aria-haspopup="true" aria-expanded="false">
        <div>
         <span class="dropdown-label ">ویزیت آنلاین به نوبه</span>
        </div>
        <div>
         <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
          style="transform: rotate(90deg)" class="chevron_bottom__M8fF9 ">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
           fill="#758599"></path>
         </svg>
        </div>
       </div>
       <div class="my-dropdown-menu d-none">
        <div class="" aria-hidden="true">
         <div class="" aria-hidden="true">
          <div class="d-flex align-items-center p-3 option-card card-active">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
             d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z"
             fill="#3F3F79"></path>
            <path
             d="M21.23 10.75C20.8 10.75 20.46 10.4 20.46 9.98C20.46 6.43 17.57 3.55 14.03 3.55C13.6 3.55 13.26 3.2 13.26 2.78C13.26 2.36 13.6 2 14.02 2C18.42 2 22 5.58 22 9.98C22 10.4 21.65 10.75 21.23 10.75Z"
             fill="#3F3F79"></path>
            <path
             d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
             fill="#3F3F79"></path>
            <path
             d="M21.97 18.33C21.97 18.61 21.92 18.9 21.82 19.18C21.79 19.26 21.76 19.34 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C19.39 21.62 19.38 21.63 19.37 21.63C18.78 21.87 18.14 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C7.4811 16.91 6.87003 15.81 6.50003 15.5L11 13.5C11.28 13.71 13.4 15.5 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
             fill="#3F3F79"></path>
           </svg>
           <div class="d-flex flex-column mx-3">
            <span class="font-weight-bold d-block fs-15">ویزیت آنلاین به
             نوبه</span>
            <span class="font-weight-bold fs-13">مرکز ویزیت آنلاین به نوبه</span>
           </div>
          </div>
         </div>
         <div class="d-flex justify-content-between align-items-center option-card" aria-hidden="true">
          <div class="d-flex align-items-center p-3 ">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
             d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.73002 2.76002L3.18002 8.01002C2.24002 8.76002 1.67002 10.26 1.87002 11.44L3.13002 18.98C3.42002 20.67 4.99002 22 6.70002 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
             fill="#3F3F79"></path>
           </svg>
           <div class="d-flex flex-column mx-3">
            <span class="font-weight-bold d-block fs-15">مطب یاسر محمدی</span>
            <span class="font-weight-bold d-block fs-13">تهران، آزادی</span>
           </div>
          </div>
          <div class="mx-2">
           <button class="btn btn-primary fs-13 btn-sm h-35" tabindex="0" type="button"
            onclick="window.location.href='{{ route('activation-doctor-clinic') }}'">فعال
            سازی<span class="MuiTouchRipple-root muirtl-w0pj6f"></span>
           </button>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  @yield('content')
  {{-- @include("dr.panel.layouts.partials.preloader") --}}
</body>
@include('dr.panel.layouts.partials.scripts')
@yield('scripts')

</html>
