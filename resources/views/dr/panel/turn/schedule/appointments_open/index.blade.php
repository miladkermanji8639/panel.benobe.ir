@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/profile/subuser.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/appointments_open/appointments_open.css') }}"
  rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 @section('bread-crumb-title','باز شدن نوبت ها ')

 <div class="appointments-open-content w-100 d-flex justify-content-center mt-3">
  <div class="appointments-open-content-wrapper p-3">
   <div class="main-content">

    <div class="user-panel-content">
     <div class="alert alert-info">
      <strong><i class="fa fa-info-circle"></i> راهنما</strong>
      <div> برنامه خود را با توجه به آزاد بودن تایم خود تعیین کنید</div>

     </div>

     <form method="post" action="" id="savebarname">
      <input class="form-control h-50" type="hidden" name="doctor_id" value="12103">
      <div class="card-barname active" id="BarnameOne">
       <label for="barname_one" class="radio">
        <input type="radio" class="form-check-input" id="barname_one" name="barname_setting" value="1" checked="">
       </label>
       <div class="body">
        <div class="head">برنامه شماره یک</div>
        <div class="data d-flex gap-4 align-items-center mt-3">
         <div class="form-group-barname position-relative">
          <label class="label-top-input-special-takhasos font-size-10">ساعت شروع</label>
          <input class="form-control h-50 " type="time" name="barname[1][start_time]" value="00:00" class="input-barname">
         </div>
         <div class="form-group-barname position-relative">
          <label class="label-top-input-special-takhasos">ساعت پایان</label>
          <input class="form-control h-50" type="time" name="barname[1][end_time]" value="23:59" class="input-barname">
         </div>
        </div>
       </div>
      </div>

      <div class="card-barname" id="BarnameTwo">
       <label for="barname_two" class="radio">
        <input type="radio" class="form-check-input" id="barname_two" name="barname_setting" value="2">
       </label>
       <div class="body">
        <div class="head">برنامه شماره دو</div>
        <div class="data mt-3">
         <div class="form-group-barname position-relative">
          <label class="label-top-input-special-takhasos">ساعت پایان</label>
          <input class="form-control h-50" type="time" name="barname[2][end_time]" value="12:00" class="input-barname">
         </div>
        </div>
       </div>
      </div>

      <div class="card-barname" id="BarnameThree">
       <label for="barname_three" class="radio">
        <input type="radio" class="form-check-input" id="barname_three" name="barname_setting" value="3">
       </label>
       <div class="body">
        <div class="head">برنامه شماره سه</div>
        <div class="data">
         <div class="form-group">
          <label>انتخاب روز هفته</label>
          <div class="mt-2 d-flex flex-wrap gap-10 justify-content-center my-768px-styles-day-and-times">
           <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">شنبه</span><span
             class=""></span>
           </div>
           <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">یکشنبه</span><span
             class=""></span>
           </div>
           <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">دوشنبه</span><span
             class=""></span>
           </div>
           <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">سه‌شنبه</span><span
             class=""></span>
           </div>
           <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">چهارشنبه</span><span
             class=""></span></div>
           <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">پنج‌شنبه</span><span
             class=""></span></div>
           <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">جمعه</span><span
             class=""></span></div>
          </div>
         </div>
         <div class="data d-flex gap-4 align-items-center mt-3">
         <div class="form-group-barname position-relative">
          <label class="label-top-input-special-takhasos font-size-10">ساعت شروع</label>
          <input class="form-control h-50 " type="time" name="barname[1][start_time]" value="00:00" class="input-barname">
         </div>
         <div class="form-group-barname position-relative">
          <label class="label-top-input-special-takhasos">ساعت پایان</label>
          <input class="form-control h-50" type="time" name="barname[1][end_time]" value="23:59" class="input-barname">
         </div>
        </div>
        </div>
       </div>
      </div>
      <div class="w-100 d-flex justify-content-end">
       <button type="submit" class="btn btn-primary h-50"><i class="fa fa-save"></i> ثبت و ذخیره</button>
      </div>
     </form>


    </div>
   </div>
  </div>
 </div>
@endsection
@section('scripts')
 <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/turn/scehedule/sheduleSetting/workhours/workhours.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  var updateStatusAppointmentUrl =
   "{{ route('updateStatusAppointment', ':id') }}";
 </script>
@endsection
