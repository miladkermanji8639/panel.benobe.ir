@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/workhours.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/activation/consult/rules/index.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 <div class="top-dr-panel d-flex justify-content-between w-100">
  <div class="p-3 bg-white">
   <nav aria-label="breadcrumb">
    <ol class="breadcrumb bg-white">
     <li class="breadcrumb-item"><a href="#">پنل دکتر</a></li>
     <li class="breadcrumb-item active" aria-current="page">پیام رسان</li>
    </ol>
   </nav>
  </div>
 </div>
 <div class="workhours-content w-100 d-flex justify-content-center mt-4">
  <div class="workhours-wrapper-content consult-wrapper p-3">
   <div class="">
    <div class="drop-toggle-styles messangers-data-drop-toggle" style="">
     <div>
      <div class="alert alert-warning mt-2 text-center">
       <span class="text-sm font-weight-bold d-block font-size-15">لطفا شماره و نام کاربری پیام رسان ایتا یا شماره
        واتساپ خود را وارد.</span>
       <span class="font-size-15 mt-1">شماره موبایل این پیام رسان ها در دسترس بیمار قرار میگیرد.</span>
      </div>
      <form action="" method="post">
       <div>
        <h6 class="text-left font-weight-bold d-block font-size-13">پیام رسان های داخلی</h6>
       </div>
       <div class="d-flex align-items-center justify-content-start gap-20">
        <div class="d-flex justify-content-start gap-1 align-items-center  border border-solid py-2 px-4 rounded-lg">
         <img
          src="data:image/png;base64,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"
          alt=""><span class="text-sm mx-1">ایتا</span>
        </div>
        <div class="w-100">

         <div class="w-100">
          <input type="text" class="form-control h-50 border-radius-4" placeholder="شماره موبایل">
         </div>
         <div class="mt-2 w-100">
          <input type="text" class="form-control h-50 border-radius-4" placeholder="نام کاربری ایتا">
         </div>

        </div>
       </div>
      </form>
      <div class="mt-2">
       <h6 class="text-left font-weight-bold d-block font-size-13">پیام رسان های خارجی</h6>
      </div>
      <div class="d-flex align-items-center justify-content-start gap-20 mt-2">
       <div class="d-flex justify-content-center gap-1 align-items-center border border-solid py-2 px-3 rounded-lg">
        <img
         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUkSURBVHgBhVVrTFxFGD1zdxe2gLAt0AalsG1aU62m0KSx8VXalKa2KJDGik1UamPjDyvVxMSYJgWtJiYmBRONCbXF2KLVKPCjUtNgaXwFURbsQ4EAi9DyKMWlu8tj994Zv5m7dxdasDe5O3e+mTnnzJlvv2H4n6fIc9CVHDddxhjyqOsWYNmgH/r2CYZ2cKPB0Bx1tfd/1L8QBpsvWOIpddsd8ScILM+aJScKQS+Tv5HFkozYKVBjhGcqvsyt8d6RYM/Fl8rARTktdMm+UOsRQRIQ8ywWcoBpPsZFRe266qoFCXZ3vHiYZpczK2zJZnN1iMgm2OytQSqRc1H+1brjFbcR7PI8X6bBVhlTKKLDibYE5C15BOlxaap/PTSG33xtuB6+YeLH0IQk14DXvs6tqYoSFHlK3IzHeUiRS26XMdPYRHsCXsnahw2u9RgjsL8C3US2CKmOVGQ7M9E8/hNOD9eL0ZkxZhFArqYkAAvnfLu+tt+utBqOwxw8hSkJcudcLItPZ0fufUupfaf3A1wJdMKyTlohd/NyZineXvUmO9T1HkZDNyC4qY1mpEBoNfSxmW3/tcRtt2l9KkEitiZqiaha+y4uB/7GxwPHY35b/s/ypfSeEmxIycWrVw6JSSMIlcbmcbCAY3KxxgQrMjgndk66BTgXKFi6TQF9OnASS2yL8caKA8iMvxthQ4fODei62Ya5jmMDpxDUJ/Fkej4zDM4MYRCUoJbDGXKWaQRbyKmjU24atEi+W1MfQ+3Vb+AL+7EzPR8PpazHJjpkCWiRqNYw2/rhRhQuewIGYUhwOc6VaJGnUSeH2CLgHGl0gNLf7mCfAuARL+SCsASkeSHDJApHCH4cb0GCtggrnFlMYnCJJ1SbrdFCl2mRYBIkPT5VIXb6exAmK74balIE/nCQCHXzlTYRuM7N74mQX81xMiekWC7tJiwSvUJTTBTQZYC+r02OMHNyvAKQRB/2HMMLWbtRnLFDKU5zLMGDyffNsUuemVBnyNUuJJZs7UJwL6dCZv1XhqZHlFr3oix4fJdU7It/6pUFB1buw7rktVidtBIZzqU4PdiAyu5q5KSsVfO6gj3qHGSNooShrGQTdlLupaoVqZJmKjaONqF0+TNoHW+HVdo+6fkcg1PDKMjIV+B+PajGpfrtS7fQmh9wMxQwi4VVvsDa7QbXm6lQbWIqxlW8K9BLizarQ5xdMuoHz6JuoBHJcUmK2B8OYM/yYuxYtgVP/76fEoXHipb8MniDFtKcVdwwZP6qA5KttKF1vANOLR4rE9yRjIml6Pj0BHwzEyjJLMTrq/ejqqcag8EhxpXvEsdMgpDG6hRj7rn889HaL5VuPIEke6I6tGRHEq5NjSg7Wv/tUONrklfhqYxt6vtI51FcGGsxRbNYYaWS8Vnb1u/3mrVIt+0VtrCHwi7yV1ydGmZtvj/xh++i6A70sE1pD+Px1I14LnsX7iLCTn8vqr2ncGb4HG5SQrDYxWC6LzChcaMiWk3l88DZvDLqHpXcUR2RmhIz1SpDArePzbqKmHbw0vYmVa5tVmz0pLcl7Vm39DFPqDtKXo4y41R2Q6gEEKpeqZxXl6eIXj5WnAYqLu84//7ss57zrD7zaJkmtHKa6Yokm8prccsCEY1HrzwfA6/oLPi5cjbevJf+mrqNbsNho+uTlUpVUdNgXfqR4m1ZxFizofHSvp2/9N+KNS+B9biJSNNYIaktIqk51KYoUAEv3YteZrALHHGV3uJm30IY/wHQyRqM6Hi8vgAAAABJRU5ErkJggg=="
         alt="">
        <span class="text-sm mx-1 font-size-13">واتساپ</span>
       </div>
       <div class="w-100">

        <div class="w-100">
         <input type="text" class="form-control h-50  border-radius-4 col-12" placeholder="شماره موبایل">
        </div>



       </div>

      </div>
      <div class="mt-2">
       <h6 class="text-left font-weight-bold d-block font-size-13"> تماس امن</h6>
      </div>
      <div class="d-flex gap-4 justify-content-between align-items-center p-3 border border-solid rounded-lg border-slate-200 ">
       <div>
        <span class="text-responsive font-size-13 font-weight-bold">تماس امن به عنوان راه ارتباط جانبی در کنار هر یک از
         پیام‌رسان‌ها قرار می‌گیرد.</span>
        <svg class="help-svg" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
         color="#3f4079">
         <path
          d="M8.00006 9.9198V9.70984C8.00006 9.02984 8.42009 8.66982 8.84009 8.37982C9.25009 8.09982 9.66003 7.73983 9.66003 7.07983C9.66003 6.15983 8.92006 5.4198 8.00006 5.4198C7.08006 5.4198 6.34009 6.15983 6.34009 7.07983"
          stroke="#3f4079" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
         <path d="M7.9955 12.0692H8.0045" stroke="#3f4079" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
         </path>
         <circle cx="8" cy="8.99445" r="7.25" stroke="#3f4079" stroke-width="1.5"></circle>
        </svg>
       </div>
       <div class="flex flex-col gap-2">
        <div class="flex items-center rounded-lg elative MuiBox-root muirtl-0">
         <div class="password_toggle__AXK9v"><input type="checkbox" id="switch" name="secureCall" checked=""><label
           for="switch">Toggle</label></div>
        </div>
       </div>
      </div>
      <div class="mt-3">
       <button onclick="location.href='{{ route('dr-workhours','activation-path=true') }}'" class="btn btn-primary w-100 h-50 border-radius-4">
        ادامه</button>
      </div>


      <div>

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
 </script>
@endsection
