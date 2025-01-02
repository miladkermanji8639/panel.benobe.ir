@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/tickets/tickets.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 @section('bread-crumb-title','  پرونده الکترونیک')


 <div class="container-fluid mt-4">
  <div class="row">
   <div class="col-md-12">
    <div class="card">
     <div class="card-header">
      <h5 class="card-title text-dark">پرونده الکترونیک بیمار</h5>
      <div class="float-right">
       <button class="btn btn-primary h-50 w-100" data-toggle="modal" data-target="#add-patient-modal">افزودن بیمار جدید</button>
      </div>
     </div>
     <div class="card-body">
      <div class="row">
       <div class="col-md-12">
        <div class="input-group">
         <input type="text" class="form-control h-50 h-50 my-border-0" id="search-patient" placeholder="جستجو...">
         <div class="input-group-append">
          <button class="btn btn-primary h-50 w-100" type="button">جستجو</button>
         </div>
        </div>
       </div>
      </div>
      <div class="row mt-3">
       <div class="col-md-12">
        <div class="table-responsive w-100 overflow-y-scroll">
         <table class="table table-striped">
          <thead>
           <tr>
            <th>نام بیمار</th>
            <th>نام خانوادگی</th>
            <th>شماره تلفن</th>
            <th>آدرس</th>
            <th>عملیات</th>
           </tr>
          </thead>
          <tbody id="patient-list">
           @foreach ($patients as $patient)
            <tr>
             <td>{{ $patient->name }}</td>
             <td>{{ $patient->family }}</td>
             <td>{{ $patient->phone }}</td>
             <td>{{ $patient->address }}</td>
             <td>
              <button class="btn btn-primary h-50 w-100" data-toggle="modal"
               data-target="#edit-patient-modal-{{ $patient->id }}">ویرایش</button>
              <button class="btn btn-danger" data-toggle="modal"
               data-target="#delete-patient-modal-{{ $patient->id }}">حذف</button>
             </td>
            </tr>
           @endforeach
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

 <!-- Add Patient Modal -->
 <div class="modal fade" id="add-patient-modal" tabindex="-1" role="dialog" aria-labelledby="add-patient-modal-label"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
   <div class="modal-content border-radius-8">
    <div class="modal-header">
     <h5 class="modal-title" id="add-patient-modal-label">افزودن بیمار جدید</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
     </button>
    </div>
    <div class="modal-body">
     <form>
      <div class="form-group position-relative">
       <label class="label-top-input-special-takhasos" for="name">نام بیمار</label>
       <input type="text" class="form-control h-50" id="name" placeholder="نام بیمار">
      </div>
      <div class="form-group position-relative">
       <label class="label-top-input-special-takhasos"for="family">نام خانوادگی</label>
       <input type="text" class="form-control h-50" id="family" placeholder="نام خانوادگی">
      </div>
      <div class="form-group position-relative">
       <label class="label-top-input-special-takhasos"for="phone">شماره تلفن</label>
       <input type="text" class="form-control h-50" id="phone" placeholder="شماره تلفن">
      </div>
      <div class="form-group position-relative">
       <label class="label-top-input-special-takhasos"for="address">آدرس</label>
       <input type="text" class="form-control h-50" id="address" placeholder="آدرس">
      </div>
      <div class="w-100">
     <button type="button" class="btn btn-primary h-50 w-100">افزودن</button>
    </div>
     </form>
    </div>
    
   </div>
  </div>
 </div>

 <!-- Edit Patient Modal -->
 @foreach ($patients as $patient)
  <div class="modal fade" id="edit-patient-modal-{{ $patient->id }}" tabindex="-1" role="dialog"
   aria-labelledby="edit-patient-modal-label-{{ $patient->id }}" aria-hidden="true">
   <div class="modal-dialog" role="document">
    <div class="modal-content border-radius-8">
     <div class="modal-header">
      <h5 class="modal-title" id="edit-patient-modal-label-{{ $patient->id }}">ویرایش بیمار</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
      </button>
     </div>
     <div class="modal-body">
      <form>
       <div class="form-group position-relative">
        <label class="label-top-input-special-takhasos"for="name-{{ $patient->id }}">نام بیمار</label>
        <input type="text" class="form-control h-50" id="name-{{ $patient->id }}" value="{{ $patient->name }}"
         placeholder="نام بیمار">
       </div>
       <div class="form-group position-relative">
        <label class="label-top-input-special-takhasos"for="family-{{ $patient->id }}">نام خانوادگی</label>
        <input type="text" class="form-control h-50" id="family-{{ $patient->id }}" value="{{ $patient->family }}"
         placeholder="نام خانوادگی">
       </div>
       <div class="form-group position-relative">
        <label class="label-top-input-special-takhasos"for="phone-{{ $patient->id }}">شماره تلفن</label>
        <input type="text" class="form-control h-50" id="phone-{{ $patient->id }}" value="{{ $patient->phone }}"
         placeholder="شماره تلفن">
       </div>
       <div class="form-group position-relative">
        <label class="label-top-input-special-takhasos"for="address-{{ $patient->id }}">آدرس</label>
        <input type="text" class="form-control h-50" id="address-{{ $patient->id }}" value="{{ $patient->address }}"
         placeholder="آدرس">
       </div>
       <div class="w-100">
       <button type="button" class="btn btn-primary h-50 w-100">ویرایش</button>
     </div>
      </form>
     </div>
     
    </div>
   </div>
  </div>
 @endforeach

 <!-- Delete Patient Modal -->
 @foreach ($patients as $patient)
  <div class="modal fade" id="delete-patient-modal-{{ $patient->id }}" tabindex="-1" role="dialog"
   aria-labelledby="delete-patient-modal-label-{{ $patient->id }}" aria-hidden="true">
   <div class="modal-dialog" role="document">
    <div class="modal-content border-radius-8">
     <div class="modal-header">
      <h5 class="modal-title" id="delete-patient-modal-label-{{ $patient->id }}">حذف بیمار</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
      </button>
     </div>
     <div class="modal-body">
      آیا می‌خواهید بیمار {{ $patient->name }} {{ $patient->family }} را حذف کنید؟
     </div>
     <div class="w-100">
       <button type="button" class="btn btn-danger">حذف</button>
     </div>
    </div>
   </div>
  </div>
 @endforeach
@endsection
@section('scripts')
 <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  var updateStatusAppointmentUrl =
   "{{ route('updateStatusAppointment', ':id') }}";
 </script>
 <script>
  document.addEventListener('DOMContentLoaded', function() {
   const urlParams = new URLSearchParams(window.location.search);
   if (urlParams.has('showModal')) {
    // فرض کنید ID مودال شما "activation-modal" است  
    $('#activation-modal').modal('show');
   }
  });
 </script>
@endsection
