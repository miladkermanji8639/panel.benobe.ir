@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/bime/bime.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', ' ارتقا حساب کربری ')

<div class="main-content">
 <div class="container-fluid bg-white p-2">
  <div class="user-panel-content">
   <div class="card">
    <div class="card-header font-weight-bold"><span>ارتقاء حساب کاربری</span></div>
    <div class="card-body">

     <div class="alert alert-info">
      <strong><i class="mdi mdi-information"></i> ارتقاء حساب کاربری!</strong>
      <p>پزشک محترم سلام<br>
       با ارتقا حساب کاربری خود میتوانید از خدمات ویژه سایت جهت ارائه خدمات بیشتر به کاربران به شرح زیر بهره مند
       گردید:
       <br>
      </p>
      <ul style="list-style: inside">
       <li>دریافت تیک آبی و نمایش در لیست پزشکان تایید شده</li>
       <li>نمایش در بالای نتایج جستجو</li>
       <li>نمایش در لیست پزشکان برتر در صفحه اصلی سایت</li>
       <li>نمایش در لیست پزشکان پیشنهادی در صفحات داخلی</li>
      </ul>
      <p></p>
     </div>

     <div class="tarifms"><i class="fa fa-calendar"></i> <strong>مدت زمان نمایش:</strong> 90 روز</div>
     <div class="tarifms"><i class="mdi mdi-phone"></i> <strong>هزینه</strong> 780,000 تومان</div>
     <div class="clrfix mb-3" style="float: right; width: 100%; margin-top: 20px">


      <button onclick="location.href='https://benobe.ir/index.php?mod=users&amp;action=upgrade_payment'"
       class="btn btn-primary text-white h-50"><i class="fa fa-credit-card"></i> پرداخت و ارتقاء حساب کاربری</button>
     </div>
    </div>
   </div>

   <div class="table-responsive w-100">

    <table class="table table-bordered table-striped">
     <thead>
      <tr>
       <th>ردیف</th>
       <th>تاریخ پرداخت</th>
       <th>کد پیگیری</th>
       <th>تاریخ انقضاء</th>
       <th>مبلغ</th>
       <th>تعداد روز</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td colspan="6">موردی ثبت نشده است.</td>
      </tr>
     </tbody>
    </table>
   </div>

  </div>
 </div>

</div>
@endsection
@section('scripts')
<script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/turn/scehedule/sheduleSetting/workhours/workhours.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/bime/bime.js') }}"></script>
<script>
 var appointmentsSearchUrl = "{{ route('search.appointments') }}";
 var updateStatusAppointmentUrl =
  "{{ route('updateStatusAppointment', ':id') }}";
 $(function() {
  $('.card').css({
   'width': '100%',
   'height': '500px'
  });
 });
</script>
@endsection
