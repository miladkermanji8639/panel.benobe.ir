@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/profile/subuser.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/appointments_open/appointments_open.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/turn/schedule/manual_nobat/manual_nobat.css') }}"
  rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', ' ثبت نوبت دستی')
<div class="calendar-and-add-sick-section p-3">
 <div class="d-flex justify-content-center gap-10 align-items-center c-a-wrapper">
  <div>
   <div class="turning_search-wrapper__loGVc">
    <input type="text" id="search-input" class="my-form-control" placeholder="نام بیمار، شماره موبایل یا کد ملی ...">
    <div id="search-results" class="table-responsive border mb-0">
     <table class="table table-light table-hover">
      <thead>
       <tr>
        <th>نام</th>
        <th>نام خانوادگی</th>
        <th>شماره موبایل</th>
        <th>کد ملی</th>
       </tr>
      </thead>
      <tbody id="search-results-body">
      </tbody>
     </table>
    </div>
   </div>


  </div>
  <div class="btn-425-left">
   <button class="btn btn-primary h-50 fs-13" data-toggle="modal" data-target="#exampleModalCenterAddSick">افزودن
    بیمار</button>
  </div>
 </div>
</div>
<div class="patient-information-content w-100 d-flex justify-content-center">
 <div class="my-patient-content d-none">
  <div class="card gray clrfix" style="padding-bottom: 0;">
   <div class="card-header">ثبت نوبت</div>
   <div class="card-body">
    <form method="post" action="" id="addvisitform" autocomplete="off">
     <div class="mt-3 position-relative">
      <label class="label-top-input-special-takhasos"> نام بیمار:</label>
      <input type="text" name="fristname" class="form-control h-50" placeholder="نام بیمار را وارد کنید"
       required="">
     </div>
     <div class="mt-3 position-relative">
      <label class="label-top-input-special-takhasos"> نام خانوادگی بیمار:</label>
      <input type="text" name="lastname" class="form-control h-50"
       placeholder="نام و نام خانوادگی بیمار را وارد کنید" required="">
     </div>
     <div class="mt-3 position-relative">
      <label class="label-top-input-special-takhasos"> شماره موبایل بیمار:</label>
      <input type="text" name="mobile" class="form-control h-50" placeholder="شماره موبایل بیمار را وارد کنید"
       required="">
     </div>
     <div class="mt-3 position-relative">
      <label class="label-top-input-special-takhasos"> کد ملی بیمار:</label>
      <input type="text" name="codemeli" class="form-control h-50" placeholder="کدملی بیمار را وارد کنید">
     </div>
     <div class="mt-3 position-relative">
      <label class="label-top-input-special-takhasos"> تاریخ مراجعه: </label>
      <input data-jdp="" type="text" name="start_date" value="" class="form-control h-50" autocomplete="off"
       placeholder="انتخاب تاریخ. .." readonly>
     </div>
     <div class="mt-3 position-relative timepicker-ui w-100">
      <label class="label-top-input-special-takhasos"> ساعت مراجعه:</label>
      <input name="start_date" type="text"
       class="form-control w-100  h-50 timepicker-ui-input text-end font-weight-bold font-size-13" id="schedule-start"
       value="00:00" style="width: 100% !important">
     </div>
     <div class="mt-3 position-relative">
      <label class="label-top-input-special-takhasos"> توضیحات : </label>
      <textarea name="" class="form-control h-50" id="" cols="30" rows="10"></textarea>
     </div>
     <div class="mt-3 position-relative mb-3 w-100">
      <button type="submit" class="btn btn-primary h-50 w-100"><i class="fa fa-save"></i> ثبت اطلاعات</button>
     </div>
    </form>
   </div>
  </div>
 </div>
</div>

<div class="manual-nobat-content w-100 d-flex justify-content-center mt-3">
 <div class="manual-nobat-content-wrapper p-3">
  <div class="main-content">
   <div class="row no-gutters font-size-13 margin-bottom-10">
    <div class="user-panel-content w-100">
     <div class="row w-100">
      <div class="w-100 d-flex justify-content-center">
       <div class="table-responsive">
        <table class="table table-bordered table-striped">
         <thead>
          <tr>
           <th>ردیف</th>
           <th>نام</th>
           <th>موبایل</th>
           <th>کدملی</th>
           <th>تاریخ</th>
           <th>ساعت</th>
           <th>توضیحات</th>
          </tr>
         </thead>
         <tbody id="result_nobat">
          <tr>
           <td>1</td>
           <td>علی رجبی</td>
           <td>09182718639</td>
           <td>3850203256</td>
           <td>1403/05/08</td>
           <td>20:30</td>
           <td>تخفیف لحاظ شود</td>
          </tr>
         </tbody>
        </table>
       </div>
      </div>
     </div>
    </div>
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
 $(document).ready(function() {
  $('.card').css({
   'width': '850px',
   'height': '100%'
  })
 });
 var appointmentsSearchUrl = "{{ route('search.appointments') }}";
 var updateStatusAppointmentUrl =
  "{{ route('updateStatusAppointment', ':id') }}";
</script>
<script>
 $(document).ready(function() {
  // AJAX search functionality
  $('#search-input').on('input', function() {
   const query = $(this).val();
   $('.my-patient-content').addClass('d-none');

   if (query.length > 2) { // شروع جستجو اگر حداقل 3 کاراکتر وارد شده باشد
    $.ajax({
     url: '{{ route('dr-panel-search.users') }}',
     method: 'GET',
     data: {
      query: query
     },
     success: function(response) {
      let resultsHtml = '';
      if (response.length > 0) {
       response.forEach(function(user) {
        resultsHtml += `<tr class="search-result-item" data-user='${JSON.stringify(user)}'>
                                                <td>${user.first_name}</td>
                                                <td>${user.last_name}</td>
                                                <td>${user.mobile}</td>
                                                <td>${user.national_code}</td>
                                            </tr>`;
       });
      } else {
       resultsHtml = '<tr><td colspan="4" class="text-center">نتیجه‌ای یافت نشد</td></tr>';
      }
      $('#search-results-body').html(resultsHtml);
      $('#search-results').show();
     }
    });
   } else {
    $('#search-results').hide();
   }
  });

  // Insert selected user data into the form fields and search input
  $(document).on('click', '.search-result-item', function(e) {
   e.preventDefault();
   const user = $(this).data('user');
   $('input[name="fristname"]').val(user.first_name);
   $('input[name="lastname"]').val(user.last_name);
   $('input[name="mobile"]').val(user.mobile);
   $('input[name="codemeli"]').val(user.national_code);
   $('#search-input').val(user.national_code); // وارد کردن کد ملی به اینپوت جستجو
   $('#search-results').hide();
   $('.my-patient-content').removeClass('d-none'); // نمایش بخش اطلاعات بیمار
  });

  // Hide patient information section initially
  $('.my-patient-content').addClass('d-none');
 });
</script>

@endsection
