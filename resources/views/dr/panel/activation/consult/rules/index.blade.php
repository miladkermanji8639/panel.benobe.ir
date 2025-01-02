@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/activation/consult/rules/index.css') }}" rel="stylesheet" />
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
     <li class="breadcrumb-item active" aria-current="page"> قوانین و مقررات</li>
    </ol>
   </nav>
  </div>
 </div>
 <div class="workhours-content w-100 d-flex justify-content-center mt-4">
  <div class="workhours-wrapper-content consult-wrapper p-3">
   <div class="">
    <div class="!bg-white w-full min-h-100 d-flex flex-column align-items-center justify-between">
     <div class="overflow-auto w-full px-6">
      <div class="relative h-100">
       <div class="d-flex flex-column gap-4">
        <div class="d-flex flex-column justify-content-center align-items-center">
         <img
          src="data:image/png;base64,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"
          alt="" class="mx-auto mt-4"><span class="text-center text-dark w-100 font-weight-bold  p-3 leading-8">قوانین و
          مقررات
          ویزیت آنلاین با بیمار به نوبه</span>
        </div>
        <div class="h-100 overflow-auto">
         <div class="form-check d-flex align-items-start cursor-pointer mt-3">
          <input class="form-check-input" name="question_1" type="checkbox" id="checkbox1">
          <label class="form-check-label text-justify font-weight-bold" for="checkbox1">ویزیت آنلاین در پیام رسان اعلامی شما و
           انتخابی بیمار انجام می شود.</label>
         </div>
         <div class="form-check d-flex align-items-start cursor-pointer mt-3">
          <input class="form-check-input" name="question_2" type="checkbox" id="checkbox2">
          <label class="form-check-label text-justify font-weight-bold" for="checkbox2">ویزیت آنلاین می بایست از راس زمان نوبت
           بیمار شروع شود و پزشک به مدت ۳ روز پاسخگوی سوالات بعدی بیمار باشد.</label>
         </div>
         <div class="form-check d-flex align-items-start cursor-pointer mt-3">
          <input class="form-check-input" name="question_3" type="checkbox" id="checkbox3">
          <label class="form-check-label text-justify font-weight-bold" for="checkbox3">در زمان شروع ویزیت بیمار، دکمه پذیرش
           بیمار را در پنل انتخاب نمایید.در صورت عدم انتخاب، بیمار قادر به حذف نوبت خود می باشد.</label>
         </div>
         <div class="form-check d-flex align-items-start cursor-pointer mt-3">
          <input class="form-check-input" name="question_4" type="checkbox" id="checkbox4">
          <label class="form-check-label text-justify font-weight-bold" for="checkbox4">توضيحات درمان و در صورت نیاز ثبت نسخه
           الکترونیک می بايست تا حداکثر ۳۰ دقيقه بعد از زمان نوبت برای بیمار ارسال شود.</label>
         </div>
         <div class="form-check d-flex align-items-start cursor-pointer mt-3">
          <input class="form-check-input" name="question_5" type="checkbox" id="checkbox5">
          <label class="form-check-label text-justify font-weight-bold" for="checkbox5">هزینه هر ویزیت پس از اعلام مراجعه و
           ارسال توضيحات درمان و در صورت نیاز ثبت نسخه الکترونیک، برای پزشک محاسبه می شود.</label>
         </div>
         <div class="form-check d-flex align-items-start cursor-pointer mt-3">
          <input class="form-check-input" name="question_6" type="checkbox" id="checkbox6">
          <label class="form-check-label text-justify font-weight-bold" for="checkbox6">در صورت نارضایتی بیمار، ۱۰۰ درصد مبلغ
           پرداختی بیمار استرداد خواهد شد.</label>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div class="d-flex w-100 py-4 px-6 justify-content-between position-relative bottom-0 mt-4">
      <button class="btn btn-secondary h-50 col-6" tabindex="-1" type="button" id="agreeButton" disabled=""
       onclick="location.href='{{ route('activation.consult.help') }}'">موافقم</button>
      <button class="btn btn-outline-primary h-50 col-6" tabindex="0" type="button">انصراف<span class=""></span>
      </button>
        <script>
         const checkboxes = document.querySelectorAll('.form-check-input');
         const agreeButton = document.getElementById('agreeButton');

         checkboxes.forEach(checkbox => {
          checkbox.addEventListener('change', () => {
           const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
           if (allChecked) {
            agreeButton.disabled = false; // Enable the button  
            agreeButton.classList.remove('btn-secondary'); // Remove disabled class  
            agreeButton.classList.add('btn-primary'); // Add primary class  
           } else {
            agreeButton.disabled = true; // Disable the button  
            agreeButton.classList.remove('btn-primary'); // Remove primary class  
            agreeButton.classList.add('btn-secondary'); // Add disabled class  
           }
          });
         });
        </script>
     </div>
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
