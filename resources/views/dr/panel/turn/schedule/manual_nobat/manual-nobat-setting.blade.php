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
@section('bread-crumb-title', ' تنظیمات نوبت دستی')
<div class="manual-nobat-content w-100 d-flex justify-content-center mt-3">
 <div class="manual-nobat-content-wrapper p-3">
  <div class="main-content">
   <div class="row no-gutters font-size-13 margin-bottom-10">
    <div class="user-panel-content w-100">
     <div class="p-3 w-100 d-flex justify-content-center">
      <div class="card clrfix">
       <div class="card-header"> تنظیمات تایید دو مرحله ای نوبت‌های دستی</div>
       <div class="card-body">
        <div class="alert alert-info">
         <i class="fa fa-info-circle"></i>
         <strong>راهنما!</strong>
         <div>
          در فیلد اول میتوانید مشخص کنید که چند ساعت قبل از زمان نوبت پیامک تایید نهایی نوبت ارسال شود و در فیلد
          دوم، می‌توانید مشخص کنید بیمار چند ساعت مهلت دارد نوبت خود را تایید کند، در غیر اینصورت نوبت لغو خواهد
          شد.<br>
          در زیر با استفاده از گزینه بلی یا خیر میتوانید این امکان را فعال یا غیرفعال نمایید.
         </div>
        </div>
        <form method="post" action="" autocomplete="off" id="save_verify_nobat">
         <div class="row">
          <div class="col-md-6 col-sm-12 col-12">
           <div class="mt-3 position-relative">
            <label>آیا تایید دو مرحله‌ای نوبت‌های دستی فعال باشد؟</label>
            <select class="form-control h-50" name="status" onchange="change_status_verifynobat(this)">
             <option value="0">خیر</option>
             <option value="1" selected="">بلی</option>
            </select>
           </div>
          </div>
          <div class="col-12 col-md-12 col-sm-12"></div>
          <div class="col-md-6 col-sm-12 col-12 stmvd" style="display: block">
           <div class="mt-3 position-relative">
            <label class="label-top-input-special-takhasos">زمان ارسال لینک تایید:</label>
            <div class="input-group">
             <input class="form-control ltr center h-50 border-radius-0" type="tel" value="3" name="duration_send_link"
              placeholder="مثلا: 72">
             <div class="input-group-append"><span class="input-group-text">ساعت قبل</span></div>
            </div>
           </div>
          </div>
          <div class="col-12"></div>
          <div class="col-md-6 col-sm-12 col-12 stmvd" style="display: block">
           <div class="mt-3 position-relative">
            <label class="label-top-input-special-takhasos">مدت زمان اعتبار لینک:</label>
            <div class="input-group">
             <input class="form-control ltr center h-50 border-radius-0" type="tel" value="1" name="duration_confirm_link"
              placeholder="مثلا: 48">
             <div class="input-group-append"><span class="input-group-text">ساعت</span></div>
            </div>
           </div>
          </div>
         </div>
         <div class="mt-3 position-relative p-3"><button type="submit" class="btn btn-primary h-50"><i
            class="fa fa-save"></i> ذخیره
           تغییرات
          </button> </div>
        </form>
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
