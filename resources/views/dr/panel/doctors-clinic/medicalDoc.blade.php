@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', 'مدارک من')

<div class="main-content">
 <div class="container-fluid bg-white p-2">
  <div class="max-width-800 mx-auto">
   <div class="col-12">
    <div class="row">
     <div class="col-12"><span class="d-flex align-items-center justify-content-start"><i aria-label="icon: picture"
        class="anticon anticon-picture ml-1"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="picture"
         width="1em" height="1em" fill="currentColor" aria-hidden="true">
         <path
          d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z">
         </path>
        </svg></i>بارگذاری مدارک</span></div>
     <div class="col-12 col-sm-4 py-2 mb-2">
      <div class="col-12 bg-white border rounded p-2"><img
        src="https://id.mystatic.ir/v1/doctor/documents/313106/76300?signature=396f247d79092ea36624c2b8d57d79c54fb2cafbf9c8843df1e005ef256ddd7f"
        class="img-fluid w-100">
       <div class="row mt-3">
        <div class="col-9">
         <ul class="p-0 m-0 list-style-none">
          <li> <small> تصویر کارت ملی </small> </li>
          <li> <small> ۲۱:۴۵ ۱۴۰۱/۱۰/۲۴ </small> </li>
         </ul>
        </div>
        <div class="text-right w-100 mt-2"><i aria-label="icon: delete" tabindex="-1"
          class="anticon anticon-delete text-danger cursor-pointer font-20 btn btn-light rounded-circle"><svg viewBox="64 64 896 896" focusable="false"
           class="" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
           <path
            d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z">
           </path>
          </svg></i></div>
       </div>
      </div>
     </div>
     <div class="col-12 col-sm-4 py-2 mb-2">
      <div class="col-12 bg-white border rounded p-2"><img
        src="https://id.mystatic.ir/v1/doctor/documents/313106/76438?signature=52fdbd943ddda869b6cc7aa7b2a6170c4ef0cc4f154f4e61e39fafa99b024857"
        class="img-fluid w-100">
       <div class="row mt-3">
        <div class="col-9">
         <ul class="p-0 m-0 list-style-none">
          <li> <small> تصویر پروانه مطب </small> </li>
          <li> <small> ۲۱:۴۹ ۱۴۰۱/۱۰/۲۸ </small> </li>
         </ul>
        </div>
        <div class="text-right mt-2 w-100"><i aria-label="icon: delete" tabindex="-1"
          class="anticon anticon-delete text-danger cursor-pointer font-20 btn btn-light rounded-circle"><svg viewBox="64 64 896 896" focusable="false"
           class="" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
           <path
            d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z">
           </path>
          </svg></i></div>
       </div>
      </div>
     </div>
     <div class="col-12 false"><button type="button" data-toggle="modal" data-target="#uploadModal"
       class="btn bg-nobat mx-2 btn-primary ant-btn-lg h-50"><span>بارگذاری مدرک
        جدید</span></button>
     </div>
     <!-- Modal -->
     <div class="modal fade" id="uploadModal" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
      <div class="modal-dialog">
       <div class="modal-content">
        <div class="modal-header">
         <h5 class="modal-title text-dark" id="exampleModalLabel"> بارگذاری مدارک </h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
         </button>
        </div>
        <div class="modal-body">
         <div class="col-12" dir="rtl">

          <div class="row w-100">
           <form action="" class="w-100">
            <select name="" id="" class="form-control w-100">
             <option value="#">تصویر پروانه مطب</option>
             <option value="#">آخرین مدرک علمی</option>
             <option value="#">تصویر کارت نظام پزشکی</option>
             <option value="#" selected>کارت ملی</option>
            </select>
            <input type="file" name="" id="" class="form-control mt-2">
            <div class="mt-2 text-right">
             <input type="submit" class="btn btn-info" value="آپلود" name="" id=""
              class="form-control mt-2">

            </div>
           </form>
          </div>
         </div>
        </div>
        <div class="modal-footer">

        </div>
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
<script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
<script>
 var appointmentsSearchUrl = "{{ route('search.appointments') }}";
 var updateStatusAppointmentUrl =
  "{{ route('updateStatusAppointment', ':id') }}";
</script>
@endsection
