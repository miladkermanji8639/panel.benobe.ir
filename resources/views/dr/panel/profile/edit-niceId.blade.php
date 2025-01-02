@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/persian-calendar/inline-calendar/css/persian-datepicker.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection

@section('content')
 <div class="breadcrumb">
  <ul class="w-100">
   <li><a href="{{ route('dr-panel') }}" title="پیشخوان">پنل دکتر به نوبه</a></li>

  </ul>
 </div>
 <div class="main-content">
  <div class="container-fluid">
   <div class="max-width-800 mx-auto w-100">
    <div class="col-12">
     <div class="row">
      <div class="col-12 mx-auto"><span class="d-flex align-items-center justify-content-start"><i aria-label="icon: idcard"
         class="anticon anticon-idcard ml-1 px-1"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="idcard"
          width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path
           d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z">
          </path>
         </svg></i> ویرایش آی دی</span></div>
      <div class="col-12 col-sm-8 mx-auto mt-2">
       <div class="col-12 bg-white py-3 rounded">
        <ul>
         <li><small> آی دی ، عدد یا واژه ایست که با تایپ مستقیم پس از / benobe.ir صفحه اینترنتی شما را نشان میدهد
          </small></li>
         <li><small> میتوانید برای انتخاب آی‌دی مورد علاقه‌ی خود از حروف انگلیسی نیز استفاده نمایید </small></li>
         <li><small> لطفاً توجه نمایید ، آی دی هر مطب باید به نام مطب و یا نام پزشک اشاره کند و نمی ‌توان از نام
           های کلی همانند tehrandoctor و یا pezeshk 1 استفاده کرد. </small></li>
        </ul>
        <div class="row">
         <div class="col-12">
          <h4 class="text-left"><span class="color-999">benobe.ir/ </span><span class="color-nobat"> 21309
           </span></h4><small class="color-999"> آی دی خود را وارد نمایید : </small><input perfix="[object Object]"
           class="form-control mt-2" type="text" value="21309">
         </div>
        </div>
        <div class="row mt-3">
         <div class="col-12"><button type="button"
           class="btn w-100 text-center d-flex align-items-center justify-content-center btn-primary ant-btn-lg"><i
            aria-label="icon: idcard" class="anticon anticon-idcard ml-2 px-1"><svg viewBox="64 64 896 896" focusable="false"
             class="" data-icon="idcard" width="1em" height="1em" fill="currentColor" aria-hidden="true">
             <path
              d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z">
             </path>
            </svg></i><span> ویرایش آی دی </span></button></div>
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
 <script type="text/javascript" src="{{ asset('dr-assets/panel/persian-calendar/js/dr-panel.js') }}"></script>
 <script type="text/javascript" src="{{ asset('dr-assets/panel/persian-calendar/inline-calendar/js/persian-datepicker.js') }}">
 </script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
@endsection
