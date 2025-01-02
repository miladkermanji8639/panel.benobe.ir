@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/bime/bime.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 @section('bread-crumb-title','بیمه')

 <div class="main-content">
  <div class="row no-gutters font-size-13 margin-bottom-10">
   <div class="user-panel-content w-100">
    <div class="card mt-3">
     <div class="card-header font-weight-bold">اضافه کردن تعرفه بر اساس شرکت بیمه</div>
     <div class="col-12 mt-2 p-4">
      <h5>روش محاسبه : </h5>
      <div class="ant-radio-group ant-radio-group-outline mt-3">
       <label class="mb-2 ant-radio-wrapper ">
        <span class="ant-radio ant-radio-checked">
         <input type="radio" class="ant-radio-input" value="0" name="calculation_method" checked>
         <span class="ant-radio-inner"></span>
        </span>
        <span class="px-1 font-weight-bold">در صورتی که مبلغ نهایی را وارد نمایید و درصد را 0 قرار دهید، دقیقاً آن مبلغ برای بیمار
         محاسبه میشود</span>
       </label>
       <label class="d-block mb-2 ant-radio-wrapper">
        <span class="ant-radio">
         <input type="radio" class="ant-radio-input" value="1" name="calculation_method">
         <span class="ant-radio-inner"></span>
        </span>
        <span class="px-1 font-weight-bold">درصدی را از مبلغ باقی‌مانده از سهم بیمه ی اصلی، کسر میکند</span>
       </label>
       <label class="mb-2 ant-radio-wrapper">
        <span class="ant-radio">
         <input type="radio" class="ant-radio-input" value="2" name="calculation_method">
         <span class="ant-radio-inner"></span>
        </span>
        <span class="px-1 font-weight-bold">هیچ اثری بر مبلغ قابل پرداخت ندارد و فقط برای گرفتن آمار و ارائه به شرکت بیمه نیاز
         است</span>
       </label>
      </div>
     </div>
     <form method="post" action="" id="added_bime_tariff" role="form" class="mt-5">
      <div class="card-body d-none" id="selected-number-one">
       <div id="error"></div>
       <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
         <div class="form-group has-feedback position-relative">
          <label class="label-top-input-special-takhasos">نام بیمه: </label>
          <input type="text" class="form-control h-50" name="bime_name" placeholder="نام شرکت بیمه" required="">
         </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
         <div class="form-group has-feedback position-relative">
          <label class="label-top-input-special-takhasos">مبلغ نوبت (تومان):</label>
          <input type="text" class="form-control h-50 numberkey" name="bime_price" placeholder="فقط عدد وارد کنید به تومان"
           required="">
         </div>
        </div>
       </div>
      </div>
      <div class="card-body d-none" id="selected-number-two">
       <div id="error"></div>
       <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
         <div class="form-group has-feedback position-relative">
          <label class="label-top-input-special-takhasos">نام بیمه:</label>
          <input type="text" class="form-control h-50" name="bime_name" placeholder="نام شرکت بیمه" required="">
         </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
         <div class="form-group has-feedback position-relative">
          <label class="label-top-input-special-takhasos"> درصد سهم بیمه: </label>
          <input type="text" class="form-control h-50 numberkey" name="bime_price" placeholder="فقط عدد وارد کنید "
           required="">
         </div>
        </div>
       </div>
      </div>
      <div class="card-body d-none" id="selected-number-three">
       <div id="error"></div>
       <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
         <div class="form-group has-feedback position-relative">
          <label class="label-top-input-special-takhasos">نام بیمه:</label>
          <input type="text" class="form-control h-50" name="bime_name" placeholder="نام شرکت بیمه" required="">
         </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
         <div class="form-group has-feedback position-relative">
          <label class="label-top-input-special-takhasos">مبلغ تمام شده (تومان):</label>
          <input type="text" class="form-control h-50 numberkey" name="bime_price" placeholder="فقط عدد وارد کنید به تومان"
           required="">
         </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
         <div class="form-group has-feedback position-relative">
          <label class="label-top-input-special-takhasos"> درصد سهم بیمه: </label>
          <input type="text" class="form-control h-50 numberkey" name="bime_price" placeholder="فقط عدد وارد کنید "
           required="">
         </div>
        </div>
       </div>
      </div>
      <div class="w-100 d-flex justify-content-end mb-3 p-3">
       <button type="submit" class="btn btn-sm btn-primary h-50"><i class="mdi mdi-check"></i> ثبت و ذخیره</button>
      </div>
     </form>
    </div>


    <div class="table-responsive">
     <table class="table table-bordered table-hover">
      <thead>
       <tr>
        <th>شرکت بیمه</th>
        <th>مبلغ</th>
        <th>عملیات</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td colspan="3">موردی ثبت نشده است</td>
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
    $('.card').css('width', '100%');  
});
 </script>
@endsection
