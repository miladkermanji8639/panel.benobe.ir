@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/payment/setting.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 @section('bread-crumb-title','  پرداخت ')

 <div class="payment-setting-content w-100 d-flex justify-content-center mt-4">
  <div class="payment-setting-content-wrapper p-3">
   <div class="top-peayment-setting-card w-100 d-flex justify-content-between border-bottom-ddd">
    <div class="d-flex justify-content-center w-50 border-bottom-primary pb-2 cursor-pointer tab" data-tab="gozaresh-mali">
        <span class="font-size-13">گزارش مالی</span>
    </div>
    <div class="d-flex justify-content-center w-50 pb-2 cursor-pointer tab" data-tab="setting">
        <span class="font-size-13">تنظیمات</span>
    </div>
</div>
   <div class="gozaresh-mali-content mt-3">
    <div class="gozaresh-mali-card-bg w-100 d-flex mt-3 p-3 justify-content-around">
     <div class="d-flex flex-column justify-content-center">
      <span class="text-center text-white font-weight-bold font-size-13">کل در آمد</span>
      <span class="text-center text-white font-weight-bold mt-2 font-size-13">0</span>
      <span class="text-center text-white font-weight-bold mt-2 font-size-13">تومان</span>
     </div>
     <div class="d-flex flex-column justify-content-center">
      <span class="text-center text-white font-weight-bold font-size-13">پرداخت شده</span>
      <span class="text-center text-white font-weight-bold mt-2 font-size-13">0</span>
      <span class="text-center text-white font-weight-bold mt-2 font-size-13">تومان</span>
     </div>
     <div class="d-flex flex-column justify-content-center">
      <span class="text-center text-white font-weight-bold font-size-13">موجودی</span>
      <span class="text-center text-white font-weight-bold mt-2 font-size-13">0</span>
      <span class="text-center text-white font-weight-bold mt-2 font-size-13">تومان</span>
     </div>
    </div>
    <div class="w-100 mt-3">
     <button class="btn btn-primary h-50 w-100">درخواست تسویه حساب</button>
    </div>
   </div>
   <div class="setting-content mt-4 d-none">
    <form action="" method="post">
     <div>
      <div class="w-100 position-relative">
       <label for="" class="label-top-input-special-takhasos">مبلغ ویزیت (تومان)</label>
       <input type="text" class="form-control h-50 border-radius-4 w-100 text-right" value="200,000">
      </div>
      <div class="w-100 position-relative mt-4">
       <label for="" class="label-top-input-special-takhasos">شماره کارت</label>
       <input type="text" class="form-control h-50 border-radius-4 w-100 text-right" placeholder="1234-1234-1234-1234">

      </div>
     </div>
    </form>
   </div>
  </div>
 </div>
@endsection
@section('scripts')
 <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/payment/setting.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  var updateStatusAppointmentUrl =
   "{{ route('updateStatusAppointment', ':id') }}";
 </script>
@endsection
