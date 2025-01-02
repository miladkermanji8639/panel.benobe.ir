@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/profile/subuser.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/profile/security.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', 'امنیت')
<div class="subuser-content  d-flex w-100 justify-content-center">
 <div class="subuser-content-wrapper">
  <div class="card">
   <div class="card-header">
    تاریخچه ورود منشی
   </div>
   <div class="card-body">
    <div class="table-responsive">
     <table class="table table-striped">
      <thead>
       <tr>
        <th>تاریخ</th>
        <th>ساعت ورود</th>
        <th>ساعت خروج</th>
        <th>وضعیت</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1401/01/01</td>
        <td>08:00</td>
        <td>17:00</td>
        <td class="text-success">آنلاین</td>
       </tr>
       <tr>
        <td>1401/01/02</td>
        <td>08:00</td>
        <td>17:00</td>
        <td class="text-success">آنلاین</td>
       </tr>
       <tr>
        <td>1401/01/03</td>
        <td>08:00</td>
        <td>17:00</td>
        <td class="text-danger">آفلاین</td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>

  <div class="card">
   <div class="card-header">
    تاریخچه ورود دکتر
   </div>
   <div class="card-body">
    <div class="table-responsive">
     <table class="table table-striped">
      <thead>
       <tr>
        <th>تاریخ</th>
        <th>ساعت ورود</th>
        <th>ساعت خروج</th>
        <th>وضعیت</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1401/01/01</td>
        <td>08:00</td>
        <td>17:00</td>
        <td class="text-success">آنلاین</td>
       </tr>
       <tr>
        <td>1401/01/02</td>
        <td>08:00</td>
        <td>17:00</td>
        <td class="text-success">آنلاین</td>
       </tr>
       <tr>
        <td>1401/01/03</td>
        <td>08:00</td>
        <td>17:00</td>
        <td class="text-danger">آفلاین</td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>

</div>

@endsection
@section('scripts')
<script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
<script>
 var appointmentsSearchUrl = "{{ route('search.appointments') }}";
 var updateStatusAppointmentUrl =
  "{{ route('updateStatusAppointment', ':id') }}";
</script>
@endsection
