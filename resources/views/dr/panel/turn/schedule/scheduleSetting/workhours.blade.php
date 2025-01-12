@extends('dr.panel.layouts.master')

@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}"
  rel="stylesheet" />
@endsection

@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection

@section('content')
@section('bread-crumb-title', ' ساعت کاری من')
<div class="w-100 d-flex justify-content-center" dir="ltr">
 <div class="auto-scheule-content-top">
  <x-my-toggle-appointment :isChecked="$appointmentConfig->auto_scheduling" id="appointment-toggle" day="نوبت دهی خودکار" class="mt-3" />
 </div>
</div>
<div class="workhours-content w-100 d-flex justify-content-center mt-4 ">
 <div class="workhours-wrapper-content p-3 {{ $appointmentConfig->auto_scheduling ? '' : 'd-none' }}">
  <div>
   <div>
    <div>
     <div>
      <div class="input-group position-relative mx-2">
       <label class="label-top-input-special-takhasos"> تعداد روز های باز تقویم </label>
       <input type="number" value="" class="form-control text-center h-50 border-radius-0"
        name="calendar_days" placeholder="تعداد روز مورد نظر خود را وارد کنید">
       <div class="input-group-append count-span-prepand-style"><span class="input-group-text px-2">روز</span></div>
      </div>
     </div>
     <div class="mt-2">
      <label class="text-dark font-weight-bold">روزهای کاری</label>
      <div class="d-flex flex-wrap justify-content-start mt-3 gap-40">
       <x-my-check :isChecked="false" id="saturday" day="شنبه" />
       <x-my-check :isChecked="false" id="sunday" day="یکشنبه" />
       <x-my-check :isChecked="false" id="monday" day="دوشنبه" />
       <x-my-check :isChecked="false" id="tuesday" day="سه‌شنبه" />
       <x-my-check :isChecked="false" id="wednesday" day="چهارشنبه" />
       <x-my-check :isChecked="false" id="thursday" day="پنج‌شنبه" />
       <x-my-check :isChecked="false" id="friday" day="جمعه" />
      </div>
      <div id="work-hours" class="mt-4">
      </div>
     </div>
    </div>
    <div class="mt-5">
     <x-my-check :isChecked="true" id="posible-appointments"
      day="امکان دریافت مشاوره آنلاین توسط کاربران وجود داشته باشد؟" />
    </div>
    <div class="mt-3">
     <x-my-check :isChecked="false" id="posible-appointments-inholiday" day="باز بودن مطب در تعطیلات رسمی" />
    </div>
   </div>
   <div class="d-flex w-100 justify-content-end mt-3">
    <button type="submit" class="btn btn-primary h-50 col-12 d-flex justify-content-center align-items-center"
     id="save-work-schedule">
     <span class="button_text">ذخیره تغیرات</span>
     <div class="loader"></div>
    </button>
   </div>
   <hr>
   @if (isset($_GET['activation-path']) && $_GET['activation-path'] == true)
    <div class="w-100">
     <button class="btn btn-outline-primary w-100 h-50" tabindex="0" type="button" id=":rs:" data-toggle="modal"
      data-target="#activation-modal">پایان فعالسازی<span></span></button>
    </div>
    <div class="modal fade" id="activation-modal" tabindex="-1" role="dialog" aria-labelledby="activation-modal-label"
     aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content border-radius-8">
       <div class="modal-header">
        <h5 class="modal-title" id="activation-modal-label">فعالسازی نوبت دهی</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
        </button>
       </div>
       <div class="modal-body">
        <div>
         <p>اطلاعات شما ثبت شد و ویزیت آنلاین شما تا ساعاتی دیگر فعال می‌شود. بیماران می‌توانند مستقیماً از طریق
          پروفایل شما ویزیت آنلاین رزرو کنند.</p>
         <p>به دلیل محدودیت ظرفیت فعلی، نمایه شما در ابتدا در لیست پزشکان موجود برای ویزیت آنلاین در رتبه پایین‌تری
          قرار می‌گیرد.</p>
         <p>برای هر گونه سوال یا توضیح بیشتر، لطفا با ما <a style="color: blue"
           href="https://newsupport.paziresh24.com/new-ticket/?department=4&amp;product=9">ارتباط</a> بگیرید. تیم ما
          اینجاست تا از شما در هر مرحله حمایت کند.</p>
        </div>
       </div>
       <div class="p-3">
        <a href="{{ route('dr-panel', ['showModal' => 'true']) }}"
         class="btn btn-primary w-100 h-50 d-flex align-items-center text-white justify-content-center">شروع نوبت
         دهی</a>
       </div>
      </div>
     </div>
    </div>
   @endif
  </div>
 </div>
</div>
</div>
@include('dr.panel.my-tools.workhours')
@endsection

@section('scripts')
<script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/turn/scehedule/sheduleSetting/workhours/workhours.js') }}"></script>
<script>
 var appointmentsSearchUrl = "{{ route('search.appointments') }}";
 var updateStatusAppointmentUrl = "{{ route('updateStatusAppointment', ':id') }}";
 jalaliDatepicker.startWatch();
 var svgUrl = "{{ asset('dr-assets/icons/copy.svg') }}";
 var trashSvg = "{{ asset('dr-assets/icons/trash.svg') }}";
</script>
@endsection
