@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title',' برنامه ریزی مشاوره')

 <div class="workhours-moshavere-content w-100 d-flex justify-content-center mt-4">
  <div class="workhours-moshavere-wrapper-content p-3 mb-4">
   <div class="">
    <div class="pb-32 space-y-5 md:pb-0 muirtl-j7qwjs">
     <div class="pt-3">
      <label class="font-weight-bold text-dark">مدت زمان‌ ایده‌آل شما برای ارائه یک مشاوره جامع و پیوسته
       به یک بیمار چقدر است؟</label>
      <div class="d-flex flex-wrap mt-2 gap-10 justify-content-end my-768px-styles-day-and-times">
       <div class="" tabindex="0" role="button">
        <span class="badge-time-styles-plus">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"
          class="plasmic-default__svg plasmic_all__FLoMj PlasmicDuration_svg__l9OeP__cvsVD lucide lucide-plus" viewBox="0 0 24 24"
          height="20px" width="20px" role="img" type="button" aria-haspopup="dialog" aria-expanded="false"
          aria-controls="radix-:r7:" data-state="closed">
          <path d="M5 12h14m-7-7v14"></path>
         </svg>
        </span>
        <span class=""></span>
       </div>
       <div class="" tabindex="0" role="button"><span class="badge-time-styles">5 دقیقه</span>
        <span class=""></span>
       </div>
       <div class="" tabindex="0" role="button">
        <span class="badge-time-styles active-hours">
         10 دقیقه
         <svg class="" width="16" height="16" viewBox="0 0 16 16" fill="#7c82fc" xmlns="http://www.w3.org/2000/svg"
          class="">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M13.8405 3.44714C14.1458 3.72703 14.1664 4.20146 13.8865 4.5068L6.55319 12.5068C6.41496 12.6576 6.22113 12.7454 6.01662 12.7498C5.8121 12.7543 5.61464 12.675 5.47 12.5303L2.13666 9.197C1.84377 8.90411 1.84377 8.42923 2.13666 8.13634C2.42956 7.84345 2.90443 7.84345 3.19732 8.13634L5.97677 10.9158L12.7808 3.49321C13.0607 3.18787 13.5351 3.16724 13.8405 3.44714Z">
          </path>
         </svg>
        </span>
        <span class=""></span>
       </div>
       <div class="" tabindex="0" role="button">
        <span class="badge-time-styles">15 دقیقه</span>
        <span class="">
        </span>
       </div>
       <div class="" tabindex="0" role="button">
        <span class="badge-time-styles">20 دقیقه</span>
        <span class="">
        </span>
       </div>
       <div class="" tabindex="0" role="button">
        <span class="badge-time-styles">30 دقیقه</span>
        <span class="">
        </span>
       </div>
       <div class="" tabindex="0" role="button">
        <span class="badge-time-styles">60 دقیقه</span>
        <span class="">
        </span>
       </div>
      </div>
     </div>
     <div class="alert alert-info mt-4"><i class="fa fa-info-circle"></i> توجه! مبلغ هر دقیقه مکالمه در بسته های زیر
      پورسانت سایت میباشد
      1,000 تومان <br>
      <ul>
       <li>به طور مثال ۱۰ دقیقه مکامله با نرخ ۵۰۰ تومان میشود پنج هزارتومان که از هر مشاوره شما کسر و دریافت
        میگردد
       </li>
       <li>چنانچه از ۱۰ دقیقه مشاوره 6 دقیقه مکالمه انجام شود مبلغ پورسانت سایت بصورت کامل برداشت میشود</li>
      </ul>
     </div>
     <div class="">
      <label class="font-weight-bold text-dark">روزهای کاری</label>
      <div class="mt-2 d-flex flex-wrap gap-10 justify-content-end my-768px-styles-day-and-times">
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
     <form>
      <div class="mt-3">
       <label class="text-dark font-weight-bold">ساعت کاری</label>
       <div class="d-flex gap-10 w-100 justify-content-center mt-3 my-425-styles-input">
        <div class="w-100 position-relative">
         <label class="label-top-input-special-takhasos" data-shrink="true" for=":rq:" id=":rq:-label">ساعت شروع</label>
         <div class="">
          <input aria-invalid="false" id=":rq:" type="time" class="my-form-control w-100 " value="09:00">
         </div>
        </div>
        <div class="w-100 position-relative">
         <label class="label-top-input-special-takhasos" data-shrink="true" for=":rr:" id=":rr:-label">ساعت پایان</label>
         <div class="mt-xs-3">
          <input aria-invalid="false" id=":rr:" type="time" class="my-form-control w-100 " value="21:00">
         </div>
        </div>
       </div>
       <div class="form-group w-100 mt-3">
        <label class="text-dark font-weight-bold">تعرفه مشاوره</label>

        <div class="row mt-3 w-100">
         <div class="col-md-6">
          <div class="input-group position-relative">
           <label class="label-top-input-special-takhasos">15 دقیقه</label>
           <input type="tel" value="" class="form-control numberkey ltr text-center h-50 border-radius-0"
            name="call_15min_1">
           <div class="input-group-append"><span class="input-group-text">تومان</span></div>
          </div>
         </div>
         <div class="col-md-6">
          <div class="input-group position-relative">
           <label class="label-top-input-special-takhasos">30 دقیقه</label>
           <input type="tel" value="" class="form-control numberkey ltr text-center h-50 border-radius-0"
            name="call_15min_2">
           <div class="input-group-append"><span class="input-group-text">تومان</span></div>
          </div>
         </div>
        </div>

        <div class="row mt-3">
         <div class="col-md-6">
          <div class="input-group position-relative">
           <label class="label-top-input-special-takhasos">45 دقیقه</label>
           <input type="tel" value="" class="form-control numberkey ltr text-center h-50 border-radius-0"
            name="call_15min_3">
           <div class="input-group-append"><span class="input-group-text">تومان</span></div>
          </div>
         </div>
         <div class="col-md-6">
          <div class="input-group position-relative">
           <label class="label-top-input-special-takhasos">60 دقیقه</label>
           <input type="tel" value="" class="form-control numberkey ltr text-center h-50 border-radius-0"
            name="call_15min_4">
           <div class="input-group-append"><span class="input-group-text">تومان</span></div>
          </div>
         </div>
        </div>
       </div>
      </div>

      <div class="form-check">
       <input type="checkbox" checked="" class="form-check-input">

       <label class="form-check-label"> امکان دریافت مشاوره آنلاین توسط کاربران وجود داشته باشد؟</label>
      </div>
      <div class="form-check mt-3">

       <input type="checkbox" checked="" class="form-check-input">
       <label class="form-check-label">آیا تعطیلات رسمی برای برنامه
        نوبت دهی لحاظ شود؟

       </label>
      </div>

      <div style="float: right; width: 100%">
       <hr>
      </div>
      <div class="d-flex w-100 justify-content-end mt-3">
       <button class="btn btn-primary h-50 w-100" tabindex="0" type="button" id=":rs:">ذخیره<span
         class=""></span>
       </button>
      </div>
     </form>
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
