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
@section('bread-crumb-title', '  تیکت ها ')


 <div class="container-fluid mt-4">
  <div class="row">
   <div class="col-md-12">
    <div class="card">
     <div class="card-header">
      <h4 class="card-title text-dark">مدیریت تیکت ها</h5>
       <button type="button" class="btn btn-primary h-50 float-right" data-toggle="modal" data-target="#add-ticket-modal">
        افزودن تیکت جدید
       </button>
     </div>
     <div class="card-body">
      <div class="table-responsive">
       <table class="table table-striped">
        <thead>
         <tr>
          <th>شناسه</th>
          <th>عنوان تیکت</th>
          <th>وضعیت</th>
          <th>عملیات</th>
         </tr>
        </thead>
        <tbody>
         @foreach ($tickets as $ticket)
          <tr>
           <td>{{ $ticket->id }}</td>
           <td>{{ $ticket->title }}</td>
           <td>
            @if ($ticket->status == 1)
             <span class="badge badge-success">فعال</span>
            @else
             <span class="badge badge-danger">غیرفعال</span>
            @endif
           </td>
           <td>
            <button type="button" class="btn btn-sm btn-primary" data-toggle="modal"
             data-target="#edit-ticket-modal-{{ $ticket->id }}">
             ویرایش
            </button>
            <button type="button" class="btn btn-sm btn-danger" data-toggle="modal"
             data-target="#delete-ticket-modal-{{ $ticket->id }}">
             حذف
            </button>
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

 <!-- Modal برای افزودن تیکت -->
 <div class="modal fade" id="add-ticket-modal" tabindex="-1" role="dialog" aria-labelledby="add-ticket-modal-label"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
   <div class="modal-content border-radius-8">
    <div class="modal-header">
     <h5 class="modal-title" id="add-ticket-modal-label">افزودن تیکت جدید</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
     </button>
    </div>
    <div class="modal-body">
     <form>
      <div class="form-group position-relative">
       <label class="label-top-input-special-takhasos" for="title">عنوان تیکت</label>
       <input type="text" class="form-control h-50" id="title" placeholder="عنوان تیکت را وارد کنید">
      </div>
      <div class="form-group position-relative">

       <textarea class="form-control" id="description" placeholder="توضیحات تیکت را وارد کنید"></textarea>
      </div>
      <div class="form-group position-relative">
       <label class="label-top-input-special-takhasos" for="status">وضعیت تیکت</label>
       <select class="form-control h-50" id="status">
        <option value="1">فعال</option>
        <option value="0">غیرفعال</option>
       </select>
      </div>
      <div class="w-100 d-flex justify-content-end">
       <button type="button" class="btn btn-primary h-50 w-100">افزودن تیکت</button>
      </div>
     </form>
    </div>

   </div>
  </div>
 </div>

 <!-- Modal برای ویرایش تیکت -->
 @foreach ($tickets as $ticket)
  <div class="modal fade" id="edit-ticket-modal-{{ $ticket->id }}" tabindex="-1" role="dialog"
   aria-labelledby="edit-ticket-modal-label-{{ $ticket->id }}" aria-hidden="true">
   <div class="modal-dialog" role="document">
    <div class="modal-content border-radius-8">
     <div class="modal-header">
      <h5 class="modal-title" id="edit-ticket-modal-label-{{ $ticket->id }}">ویرایش تیکت</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
      </button>
     </div>
     <div class="modal-body">
      <form>
       <div class="form-group position-relative">
        <label class="label-top-input-special-takhasos" for="title">عنوان تیکت</label>
        <input type="text" class="form-control h-50" id="title" placeholder="عنوان تیکت را وارد کنید">
       </div>
       <div class="form-group position-relative">

        <textarea class="form-control" id="description" placeholder="توضیحات تیکت را وارد کنید"></textarea>
       </div>
       <div class="form-group position-relative">
        <label class="label-top-input-special-takhasos" for="status">وضعیت تیکت</label>
        <select class="form-control h-50" id="status">
         <option value="1">فعال</option>
         <option value="0">غیرفعال</option>
        </select>
       </div>
       <div class="w-100 d-flex justify-content-end">
        <button type="button" class="btn btn-primary h-50 w-100">ویرایش تیکت</button>
       </div>

     </div>
    </div>
   </div>
 @endforeach

 <!-- Modal برای حذف تیکت -->
 @foreach ($tickets as $ticket)
  <div class="modal fade" id="delete-ticket-modal-{{ $ticket->id }}" tabindex="-1" role="dialog"
   aria-labelledby="delete-ticket-modal-label-{{ $ticket->id }}" aria-hidden="true">
   <div class="modal-dialog" role="document">
    <div class="modal-content border-radius-8">
     <div class="modal-header">
      <h5 class="modal-title" id="delete-ticket-modal-label-{{ $ticket->id }}">حذف تیکت</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
      </button>
     </div>
     <div class="modal-body">
      آیا می‌خواهید تیکت را حذف کنید؟
     </div>
     <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">بستن</button>
      <button type="button" class="btn btn-danger">حذف تیکت</button>
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
