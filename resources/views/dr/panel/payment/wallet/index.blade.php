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
@section('bread-crumb-title', ' کیف پول ')

<div class="main-content">
 <div class="container-fluid bg-white p-2">
  <div class="user-panel-content mt-3">
   <div class="alert alert-warning">

    <p><i class="fa fa-info-circle fa-2x"></i> صرفاً مبالغ هزینه های نوبت حضوری که تاریخ آنها رسیده است و مشاوره های
     آنلاینی که پاسخ داده شده اند، قابل برداشت می باشند و مابقی در حالت انتظار می باشند.</p>
   </div>
   <div class="wallet_totalprice"><i class="mdi mdi-wallet"></i> جمع مبلغ قابل برداشت: 42,500 تومان <br><button
     href="#" onclick="request_wallet();" class="btn reqazadsazi btn-success h-50 mt-3"> درخواست آزاد
     سازی</button></div>
   <div class="card mt-3">
    <div class="card-header"><span>کیف پول</span></div>
    <div class="card-body">
     <div class="table-responsive">
      <table class="table table-bordered table-striped table_middle">
       <thead>
        <tr>
         <th>ردیف</th>
         <th>مبلغ</th>
         <th>وضعیت</th>
         <th>نوع</th>
         <th>تاریخ ثبت</th>
         <th>شرح</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>1</td>
         <td>0 تومان</td>
         <td><label class="badge badge-primary">در انتظار ارائه خدمت</label></td>
         <td>مشاوره آنلاین</td>
         <td>1401/08/15 15:26</td>
         <td>مشاوره آنلاین با در تاریخ 1403-07-07 11:06 کد پیگیری </td>
        </tr>
        <tr>
         <td>2</td>
         <td>42,500 تومان</td>
         <td><label class="badge badge-primary">در انتظار ارائه خدمت</label></td>
         <td>مشاوره آنلاین</td>
         <td>1401/08/15 15:15</td>
         <td>مشاوره آنلاین با در تاریخ 1403-07-07 11:06 کد پیگیری </td>
        </tr>
        <tr>
         <td>3</td>
         <td>42,500 تومان</td>
         <td><label class="badge badge-outline-green">قابل برداشت</label></td>
         <td>مشاوره آنلاین</td>
         <td>1401/08/15 13:46</td>
         <td>مشاوره آنلاین با حمید داستانی در تاریخ 1401-08-15 13:46 کد پیگیری 894496</td>
        </tr>
        <tr>
         <td>4</td>
         <td>42,500 تومان</td>
         <td><label class="badge badge-primary">در انتظار ارائه خدمت</label></td>
         <td>مشاوره آنلاین</td>
         <td>1401/08/15 13:45</td>
         <td>مشاوره آنلاین با حمید داستانی در تاریخ 1401-08-15 13:45 کد پیگیری 518194</td>
        </tr>
       </tbody>
      </table>
     </div>
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
 $(function() {  
    $('.card').css({   
        'width': '100%',   
        'height': '258px'   
    });  
});
</script>
@endsection
