@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', 'تنظیمات نوبت دهی')

<div class="schedule-setting-content d-flex justify-content-center w-100 mt-4">
 <div class="schedule-setting-wrapper col-xs-12 col-sm-12 col-md-8 col-lg-8">
  <ul class="py-3 px-3">
   <div class="d-flex align-items-center border-bottom-1 cursor-pointer my-card-hover" tabindex="0" role="button"
    onclick="location.href='{{ route('dr-workhours') }}'">
    <div class="d-flex align-items-center justify-content-center ">
     <div class="position-relative d-flex align-items-center justify-content-center my-svg-setting-nobat">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00005 0.25C8.41427 0.25 8.75005 0.585786 8.75005 1V2.25H13L13.0565 2.25C13.8586 2.24999 14.588 2.24999 15.2501 2.26272V1C15.2501 0.585786 15.5858 0.25 16.0001 0.25C16.4143 0.25 16.7501 0.585786 16.7501 1V2.32709C17.01 2.34691 17.2561 2.37182 17.4891 2.40313C18.6615 2.56076 19.6104 2.89288 20.3588 3.64124C21.1072 4.38961 21.4393 5.33856 21.5969 6.51098C21.7501 7.65018 21.7501 9.1058 21.75 10.9435V10.9436V11V13V13.0564V13.0565C21.7501 14.8942 21.7501 16.3498 21.5969 17.489C21.4393 18.6614 21.1072 19.6104 20.3588 20.3588C19.6104 21.1071 18.6615 21.4392 17.4891 21.5969C16.3499 21.75 14.8943 21.75 13.0566 21.75H13.0565H13H11H10.9436H10.9435C9.10582 21.75 7.65022 21.75 6.51103 21.5969C5.3386 21.4392 4.38966 21.1071 3.64129 20.3588C2.89293 19.6104 2.56081 18.6614 2.40318 17.489C2.25002 16.3498 2.25003 14.8942 2.25005 13.0565L2.25005 13.0565L2.25005 13.0564L2.25005 13V8.64706L2.25002 8.48999C2.24969 7.10812 2.24947 6.22688 2.49629 5.49049C2.96966 4.07812 4.07817 2.96962 5.49054 2.49624C5.97879 2.33259 6.53073 2.27754 7.25005 2.25912V1C7.25005 0.585786 7.58584 0.25 8.00005 0.25ZM15.2501 3.76309V4C15.2501 4.41421 15.5858 4.75 16.0001 4.75C16.4143 4.75 16.7501 4.41421 16.7501 4V3.83168C16.9394 3.8477 17.1188 3.86685 17.2892 3.88976C18.2953 4.02502 18.8749 4.27869 19.2981 4.7019C19.7214 5.12511 19.975 5.70476 20.1103 6.71085C20.2485 7.73851 20.25 9.09318 20.25 11V13C20.25 14.9068 20.2485 16.2615 20.1103 17.2892C19.975 18.2952 19.7214 18.8749 19.2981 19.2981C18.8749 19.7213 18.2953 19.975 17.2892 20.1102C16.2615 20.2484 14.9069 20.25 13 20.25H11C9.09323 20.25 7.73856 20.2484 6.7109 20.1102C5.70481 19.975 5.12516 19.7213 4.70195 19.2981C4.27874 18.8749 4.02507 18.2952 3.88981 17.2892C3.75164 16.2615 3.75005 14.9068 3.75005 13V8.64706C3.75005 7.05384 3.75985 6.44061 3.91853 5.96718C4.24242 5.00082 5.00087 4.24237 5.96723 3.91848C6.26733 3.81789 6.6236 3.77713 7.25005 3.76077V4C7.25005 4.41421 7.58584 4.75 8.00005 4.75C8.41427 4.75 8.75005 4.41421 8.75005 4V3.75H13C13.8541 3.75 14.5973 3.75032 15.2501 3.76309Z"
        fill="#22282F"></path>
      </svg>
      <span class="position-absolute font-size-13 top-21">6</span>
     </div>
    </div>
    <div class="mx-2 mt-4"><span class="font-weight-bold">ساعت
      کاری</span>
     <p class="">ساعت کاری خود را همیشه بروز نگه
      دارید</p>
    </div><span class=""></span>
   </div>
   <div class="d-flex align-items-center mt-3 border-bottom-1 cursor-pointer my-card-hover" tabindex="0" role="button"
    onclick="location.href='{{ route('dr-vacation') }}'">
    <div class="d-flex align-items-center justify-content-center bg-gray-500 my-svg-setting-nobat">
     <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
       d="M9.03023 21.69L11.3602 19.73C11.7102 19.43 12.2902 19.43 12.6402 19.73L14.9702 21.69C15.5102 21.96 16.1702 21.69 16.3702 21.11L16.8102 19.78C16.9202 19.46 16.8102 18.99 16.5702 18.75L14.3002 16.47C14.1302 16.31 14.0002 15.99 14.0002 15.76V12.91C14.0002 12.49 14.3102 12.29 14.7002 12.45L19.6102 14.57C20.3802 14.9 21.0102 14.49 21.0102 13.65V12.36C21.0102 11.69 20.5102 10.92 19.8902 10.66L14.3002 8.25001C14.1402 8.18001 14.0002 7.97001 14.0002 7.79001V4.79001C14.0002 3.85001 13.3102 2.74001 12.4702 2.31001C12.1702 2.16001 11.8202 2.16001 11.5202 2.31001C10.6802 2.74001 9.99023 3.86001 9.99023 4.80001V7.80001C9.99023 7.98001 9.85023 8.19001 9.69023 8.26001L4.11023 10.67C3.49023 10.92 2.99023 11.69 2.99023 12.36V13.65C2.99023 14.49 3.62023 14.9 4.39023 14.57L9.30023 12.45C9.68023 12.28 10.0002 12.49 10.0002 12.91V15.76C10.0002 15.99 9.87023 16.31 9.71023 16.47L7.44023 18.75C7.20023 18.99 7.09023 19.45 7.20023 19.78L7.64023 21.11C7.82023 21.69 8.48023 21.97 9.03023 21.69Z"
       stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
     </svg>
    </div>
    <div class="mx-2 mt-4">
     <span class="font-weight-bold">
      روزهای تعطیل
     </span>
     <p class="">اعلام روز تعطیل مشاوره آنلاین</p>
    </div><span class=""></span>
   </div>
   <div class="d-flex align-items-center mt-3 border-bottom-1 cursor-pointer my-card-hover" tabindex="0" role="button"
    onclick="location.href='{{ route('dr-vacation') }}'">
    <div class="d-flex align-items-center justify-content-center bg-gray-500 my-svg-setting-nobat">
     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
       d="M14.8086 19.7053L19.127 16.3467M4 21C4 17.134 7.13401 14 11 14M20 18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18C14 16.3431 15.3431 15 17 15C18.6569 15 20 16.3431 20 18ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
       stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>
    </div>
    <div class="mx-2 mt-4">
     <span class="font-weight-bold">
      مسدود کردن کاربر
     </span>
     <p class="">مدیریت کاربران مسدود </p>
    </div><span class=""></span>
   </div>
  </ul>
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
</script>
@endsection
