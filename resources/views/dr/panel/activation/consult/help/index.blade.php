@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/activation/consult/rules/index.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/activation/consult/help/help.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 <div class="top-dr-panel d-flex justify-content-between w-100">
  <div class="p-3 bg-white">
   <nav aria-label="breadcrumb">
    <ol class="breadcrumb bg-white">
     <li class="breadcrumb-item"><a href="#">پنل دکتر</a></li>
     <li class="breadcrumb-item active" aria-current="page">آموزش ویزیت آنلاین</li>
    </ol>
   </nav>
  </div>
 </div>
 <div class="workhours-content w-100 d-flex justify-content-center mt-4">
  <div class="workhours-wrapper-content consult-wrapper p-3">
   <div class="">
    <div
     class="MuiContainer-root MuiContainer-maxWidthSm flex flex-col h-full pt-4 space-y-5 bg-white rounded-md md:h-auto md:p-5 md:mt-8 md:shadow-2xl md:shadow-slate-300 muirtl-bbjvwn page-enter-done">
     <span class="d-block w-100  font-weight-bold text-center">ویدیو آموزشی پزشک ویزیت آنلاین به نوبه</span>
     <div class="overflow-scroll mt-3">
      <video src="" class="border-radius-6 w-100" controls></video>

     </div>
     <button onclick="location.href='{{ route('activation.consult.messengers') }}'" class="btn btn-primary h-50 w-100 mt-2"
      tabindex="0" type="button">ادامه
     </button>
    </div>
   </div>
  </div>
 </div>
@endsection
@section('scripts')
 <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/turn/scehedule/sheduleSetting/workhours/workhours.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  var updateStatusAppointmentUrl =
   "{{ route('updateStatusAppointment', ':id') }}";
 </script>
@endsection
