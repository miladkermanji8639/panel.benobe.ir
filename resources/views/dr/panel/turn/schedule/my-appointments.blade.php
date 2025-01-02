@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/appointments.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/my-appointments.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title',' نوبت های من')

 <div class="appointments-content w-100 d-flex align-items-center flex-column">
  <div class="appointments-content-wrapper">
   <div class="top-appointment d-flex justify-content-start p-4 align-items-center">
    <div>
     <span class="text-dark font-weight-bold">نوبت های من</span>
    </div>

   </div>
  </div>
  <div class="appointments-content-wrapper mt-3">
   <div class="top-appointment d-flex justify-content-start p-4">
    <div class="d-flex w-100 justify-content-between align-items-center">
     <div>
      <div class="d-flex align-items-center">
       <div>
        <img width="70" height="70" alt="avatar" class="prof-img rounded-circle bg-light"
         src="{{ asset('dr-assets/panel/img/pro.jpg') }}" >
       </div>
       <div class="mx-2">
        <h6 class="d-block font-weight-bold">یاسر محمدی</h6>
        <span class="font-size-13">کارشناسی فیزیوترابی</span>
       </div>

      </div>
     </div>
     <div>
      <span class="font-size-13 my-sm-badge">ویزیت شده</span>
      <span class="mx-2 btn-details">
       <svg class="btn-show-details" width="5" height="18" viewBox="0 0 5 18" fill="none" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" color="#000">
        <path
         d="M2.45711 17.2674C3.06068 17.2674 3.54997 16.7753 3.54997 16.1682C3.54997 15.5612 3.06068 15.0691 2.45711 15.0691C1.85355 15.0691 1.36426 15.5612 1.36426 16.1682C1.36426 16.7753 1.85355 17.2674 2.45711 17.2674Z"
         fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
         d="M2.45711 10.3792C3.06068 10.3792 3.54997 9.88708 3.54997 9.28005C3.54997 8.67301 3.06068 8.18091 2.45711 8.18091C1.85355 8.18091 1.36426 8.67301 1.36426 9.28005C1.36426 9.88708 1.85355 10.3792 2.45711 10.3792Z"
         fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
         d="M2.45711 3.49149C3.06068 3.49149 3.54997 2.99939 3.54997 2.39235C3.54997 1.78531 3.06068 1.29321 2.45711 1.29321C1.85355 1.29321 1.36426 1.78531 1.36426 2.39235C1.36426 2.99939 1.85355 3.49149 2.45711 3.49149Z"
         fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
       </svg>
      </span>
      <div class="drop-side-details-content d-none">
       <div class="d-flex flex-column p-2">
        <div class="d-flex align-items-center p-2 cursor-pointer space-s-2 position-relative">
         <svg class="position-relative" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M2.62356 2.35132C2.85479 2.21713 3.13998 2.21617 3.3721 2.34882L6.5 4.13619L9.6279 2.34882C9.85847 2.21706 10.1415 2.21706 10.3721 2.34882L13.5 4.13619L16.6279 2.34882C16.86 2.21617 17.1452 2.21713 17.3764 2.35132C17.6077 2.48551 17.75 2.73265 17.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12V19C21.75 20.5188 20.5188 21.75 19 21.75H9H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549V15V3C2.25 2.73265 2.39232 2.48551 2.62356 2.35132ZM19 20.25C19.6904 20.25 20.25 19.6904 20.25 19V12.75H17.75V19C17.75 19.6904 18.3096 20.25 19 20.25ZM16.5499 20.25H9C7.56458 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15V4.29238L6.1279 5.65118C6.35847 5.78294 6.64153 5.78294 6.8721 5.65118L10 3.86381L13.1279 5.65118C13.3585 5.78294 13.6415 5.78294 13.8721 5.65118L16.25 4.29239V12V19C16.25 19.4501 16.3581 19.875 16.5499 20.25ZM6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9ZM7 12.25C6.58579 12.25 6.25 12.5858 6.25 13C6.25 13.4142 6.58579 13.75 7 13.75H13C13.4142 13.75 13.75 13.4142 13.75 13C13.75 12.5858 13.4142 12.25 13 12.25H7ZM6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H13C13.4142 16.25 13.75 16.5858 13.75 17C13.75 17.4142 13.4142 17.75 13 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17Z"
           fill="currentColor"></path>
         </svg><span class="text-sm font-medium">قبض نوبت</span>
        </div>
        <div class="d-flex align-items-center p-2 cursor-pointer space-s-2">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M17.1644 4.14172C16.1523 4.14172 15.3319 4.96215 15.3319 5.9742C15.3319 6.29333 15.4135 6.59341 15.5569 6.85472C15.566 6.86815 15.5746 6.88195 15.5829 6.89612C15.5911 6.91016 15.5988 6.92434 15.606 6.93867C15.9291 7.45969 16.5062 7.80667 17.1644 7.80667C18.1764 7.80667 18.9969 6.98625 18.9969 5.9742C18.9969 4.96215 18.1764 4.14172 17.1644 4.14172ZM14.7374 8.2579C15.3452 8.90355 16.2077 9.30667 17.1644 9.30667C19.0049 9.30667 20.4969 7.81467 20.4969 5.9742C20.4969 4.13372 19.0049 2.64172 17.1644 2.64172C15.3239 2.64172 13.8319 4.13372 13.8319 5.9742C13.8319 6.31835 13.8841 6.65032 13.9809 6.96263L9.26175 9.71664C8.65396 9.07078 7.79129 8.66749 6.83443 8.66749C4.99395 8.66749 3.50195 10.1595 3.50195 12C3.50195 13.8404 4.99395 15.3324 6.83443 15.3324C7.79142 15.3324 8.65419 14.9291 9.26199 14.283L13.9821 17.0336C13.8845 17.347 13.8319 17.6803 13.8319 18.0259C13.8319 19.8663 15.3239 21.3583 17.1644 21.3583C19.0049 21.3583 20.4969 19.8663 20.4969 18.0259C20.4969 16.1854 19.0049 14.6934 17.1644 14.6934C16.2092 14.6934 15.3478 15.0953 14.7402 15.7392L10.0181 12.9876C10.1148 12.6755 10.1669 12.3438 10.1669 12C10.1669 11.656 10.1148 11.3242 10.018 11.012L14.7374 8.2579ZM8.39587 11.0404C8.40236 11.0531 8.40926 11.0657 8.41656 11.0782C8.42389 11.0908 8.43153 11.1031 8.43947 11.1151C8.58441 11.3774 8.6669 11.679 8.6669 12C8.6669 12.3211 8.58429 12.623 8.43916 12.8854C8.43125 12.8974 8.42363 12.9096 8.41632 12.9222C8.40921 12.9344 8.40249 12.9467 8.39615 12.9591C8.07366 13.4831 7.49484 13.8324 6.83443 13.8324C5.82238 13.8324 5.00195 13.012 5.00195 12C5.00195 10.9879 5.82238 10.1675 6.83443 10.1675C7.49465 10.1675 8.07332 10.5166 8.39587 11.0404ZM15.5336 17.1893C15.5546 17.1624 15.5741 17.1338 15.5918 17.1035C15.6087 17.0744 15.6235 17.0446 15.6362 17.0143C15.9643 16.5196 16.5263 16.1934 17.1644 16.1934C18.1764 16.1934 18.9969 17.0138 18.9969 18.0259C18.9969 19.0379 18.1764 19.8583 17.1644 19.8583C16.1523 19.8583 15.3319 19.0379 15.3319 18.0259C15.3319 17.7245 15.4047 17.4401 15.5336 17.1893Z"
           fill="currentColor"></path>
         </svg><span class="text-sm font-medium">اشتراک گذاری</span>
        </div>
       </div>
      </div>
     </div>
    </div>

   </div>
   <div class="p-3">
    <div class="bg-light w-100 border-radius-6">
     <div class="d-flex flex-column w-100 bg-light p-3 px-4  cursor-pointer">
      <div class="d-flex align-items-center justify-content-between"><span class="font-size-13 mt-2 font-weight-bold">زمان
        نوبت:</span><span class="text-sm font-weight-bold font-size-13 mt-2">1403/08/26 12:10</span></div>
      <div class="d-flex align-items-center justify-content-between"><span class="font-size-13 mt-2 font-weight-bold">مراجعه
        کننده:</span><span class="text-sm font-weight-bold font-size-13 mt-2">صبا کرمی</span></div>
      <div class="d-flex align-items-center justify-content-between"><span class="font-size-13 mt-2 font-weight-bold">کد
        پیگیری:</span><span class="text-sm font-weight-bold font-size-13 mt-2">2432927888</span></div>
      <div class="d-flex align-items-center justify-content-between"><span class="font-size-13 mt-2 font-weight-bold">میانگین
        زمان انتظار در مطب:</span><span class="text-sm font-weight-bold font-size-13 mt-2"></span></div>
     </div>
    </div>
   </div>
   <div class="d-flex">
    <a href="https://maps.google.com/maps?daddr=35.700690036108,51.359184980392&amp;amp;ll=" target="_blank" rel="noreferrer"
     class="d-flex align-items-center w-100 p-3 px-0" data-testid="location__link">
     <div class="d-flex align-items-center justify-content-center w-12 "><svg width="26" height="26" viewBox="0 0 24 24"
       fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M16.646 3.09014C17.9316 4.33162 18.75 6.16288 18.75 8.51853C18.75 11.0174 17.6374 13.1812 16.3893 14.827L16.3414 14.8903C15.7807 15.6299 15.2699 16.3039 14.6289 16.7669C13.9199 17.279 13.1065 17.504 12.0002 17.504C10.8939 17.504 10.0804 17.2791 9.37139 16.767C8.73044 16.304 8.21953 15.63 7.65887 14.8905L7.6109 14.8272C6.36272 13.1813 5.25 11.0175 5.25 8.51853C5.25 6.16287 6.06844 4.3316 7.354 3.09012C8.63051 1.85739 10.3225 1.25 12 1.25C13.6775 1.25 15.3695 1.85741 16.646 3.09014ZM5.68787 15.5475C5.85294 15.9274 5.67879 16.3692 5.29889 16.5342C4.72123 16.7852 4.31008 17.0499 4.0546 17.2991C3.80118 17.5462 3.75 17.7261 3.75 17.8355C3.75 17.9612 3.8206 18.1862 4.18671 18.4905C4.54835 18.7912 5.11663 19.0955 5.88481 19.3656C7.41435 19.9034 9.57636 20.25 12 20.25C14.4236 20.25 16.5856 19.9034 18.1152 19.3656C18.8834 19.0955 19.4516 18.7912 19.8133 18.4905C20.1794 18.1862 20.25 17.9612 20.25 17.8355C20.25 17.7261 20.1988 17.5462 19.9454 17.2991C19.6899 17.0499 19.2788 16.7852 18.7011 16.5342C18.3212 16.3692 18.1471 15.9274 18.3121 15.5475C18.4772 15.1676 18.919 14.9934 19.2989 15.1585C19.972 15.451 20.5609 15.8041 20.9927 16.2252C21.4266 16.6484 21.75 17.1914 21.75 17.8355C21.75 18.5837 21.3169 19.1912 20.7722 19.644C20.223 20.1006 19.4732 20.4781 18.6127 20.7807C16.8849 21.3882 14.5469 21.75 12 21.75C9.45308 21.75 7.11508 21.3882 5.38726 20.7807C4.52677 20.4781 3.77703 20.1006 3.22782 19.644C2.68308 19.1912 2.25 18.5837 2.25 17.8355C2.25 17.1914 2.57342 16.6484 3.0073 16.2252C3.43912 15.8041 4.02797 15.451 4.70111 15.1585C5.08101 14.9934 5.5228 15.1676 5.68787 15.5475ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z"
        fill="#3F3F79"></path>
      </svg></div><span class="text-sm line-clamp-2" data-testid="location__address">تهران، آزادی</span>
    </a>
   </div>
   <div class="p-3">
    <div class="d-flex align-items-center justify-content-between w-100 bg-light p-3 px-4 border-radius-6"><span
      class="text-sm">هنوز به این
      پزشک
      امتیازی نداده اید.</span><a
      href="https://formafzar.com/form/qh0ym?user_id=16317798&amp;book_id=5207b3af-a375-11ef-b694-005056ad823b&amp;doctor_id=9ced67cb-6f1f-4199-acd9-feeeab3d855c&amp;server_id=1&amp;center_id=9ced67da-c8ac-4d30-b593-b06cceae55a7"
      target="_blank" rel="noreferrer" class="d-flex align-items-center text-info">
      <span class="text-sm font-weight-bold ml-2 text-info">ثبت
       نظر</span>
      <svg class="mx-1" width="10" height="12" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
       style="transition: transform 0.3s; transform: rotate(180deg);">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
        fill="currentColor">
       </path>
      </svg>
     </a>
    </div>
   </div>
   <div class="p-3 w-100 border-radius-6">
    <button class="w-100 btn btn-outline-primary h-50 border-radius-4">دریافت نوبت مجدد</button>
   </div>
  </div>
 </div>
@endsection
@section('scripts')
 <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  var updateStatusAppointmentUrl =
   "{{ route('updateStatusAppointment', ':id') }}";
  $(document).ready(function() {
   $('.btn-show-details').addClass('cursor-pointer');

   // Toggle details on button click  
   $(document).on('click', '.btn-show-details', function(event) {
    event.stopPropagation(); // Prevent the click from bubbling up to the document  
    $('.drop-side-details-content').toggleClass('d-none');
   });

   // Hide details when clicking outside of the details content  
   $(document).on('click', function(event) {
    if (!$('.drop-side-details-content').has(event.target).length) {
     $('.drop-side-details-content').addClass('d-none'); // Hide details if the click is outside  
    }
   });
  });
 </script>
@endsection
