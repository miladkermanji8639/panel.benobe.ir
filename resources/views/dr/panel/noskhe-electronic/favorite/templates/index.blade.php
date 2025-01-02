@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/prescription/prescription.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/providers./providers.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/favorite/templates/index.css') }}"
  rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title','  نسخه های  پراستفاده من')

 <div class="favorite-content mt-4">
  <div class="container">
   <div class="d-flex justify-content-between position-relative favorite-wrapper">
    <div>
     <h6 class="font-weight-bold">نسخه های پر استفاده من</h6>
     <p>با نسخه پراستفاده، سرعت نسخه نویسی چند برابر می شود.</p>
    </div>
    <div >

     <div class="btn-favorite-wrapper">
      <button id="drop-btn-toggler" class="btn btn-warning h-50 position-relative">
       <svg width="27" height="25" viewBox="0 0 25 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path
         d="M12.0704 14.3705C11.8963 14.3705 11.7221 14.3063 11.5846 14.1688L9.23795 11.8222C8.97212 11.5563 8.97212 11.1163 9.23795 10.8505C9.50378 10.5847 9.94378 10.5847 10.2096 10.8505L12.0704 12.7113L13.9313 10.8505C14.1971 10.5847 14.6371 10.5847 14.9029 10.8505C15.1688 11.1163 15.1688 11.5563 14.9029 11.8222L12.5563 14.1688C12.4188 14.3063 12.2446 14.3705 12.0704 14.3705Z"
         fill="#fff"></path>
        <path
         d="M12.0708 14.3064C11.695 14.3064 11.3833 13.9947 11.3833 13.6189V4.29639C11.3833 3.92055 11.695 3.60889 12.0708 3.60889C12.4466 3.60889 12.7583 3.92055 12.7583 4.29639V13.6189C12.7583 13.9947 12.4466 14.3064 12.0708 14.3064Z"
         fill="#fff"></path>
        <path
         d="M12.1805 19.8155C7.45967 19.8155 4.15967 16.5155 4.15967 11.7947C4.15967 11.4188 4.47133 11.1072 4.84717 11.1072C5.223 11.1072 5.53467 11.4188 5.53467 11.7947C5.53467 15.7088 8.26633 18.4405 12.1805 18.4405C16.0947 18.4405 18.8263 15.7088 18.8263 11.7947C18.8263 11.4188 19.138 11.1072 19.5138 11.1072C19.8897 11.1072 20.2013 11.4188 20.2013 11.7947C20.2013 16.5155 16.9013 19.8155 12.1805 19.8155Z"
         fill="#fff"></path>
       </svg>
      </button>
      <div class="my-dropdown d-none">
       <ul>
        <li>
         <a href="">انتقال از پنل تامین اجتماعی</a>
        </li>
        <li class="mt-2">
         <a href="">انتقال از پنل سلامت</a>
        </li>
       </ul>
      </div>
      <button class="btn btn-primary h-50" onclick="location.href='{{ route('favorite.templates.create') }}'">افزودن نسخه پر استفاده</button>
     </div>
    </div>
   </div>
  </div>
  <div>

  </div>
 @endsection
 @section('scripts')
  <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
  <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
  <script src="{{ asset('dr-assets/panel/js/noskhe-electronic/prescription/prescription.js') }}"></script>
  <script src="{{ asset('dr-assets/panel/js/noskhe-electronic/providers/providers.js') }}"></script>
  <script src="{{ asset('dr-assets/panel/js/noskhe-electronic/favorite/templates/index.js') }}"></script>
  <script>
   var appointmentsSearchUrl = "{{ route('search.appointments') }}";
   var updateStatusAppointmentUrl =
    "{{ route('updateStatusAppointment', ':id') }}";
  </script>
 @endsection
