@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/scheduleSetting/scheduleSetting.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', '  گالری تصویر')

<div class="main-content">
  <div class="container-fluid bg-light p-2">
    <div class="max-width-800 mx-auto">
      <div class="row">
        <div class="col-12"><span class="d-flex align-items-center justify-content-start"><i aria-label="icon: picture"
               class="anticon anticon-picture ml-1 px-1"><svg viewBox="64 64 896 896"
                   focusable="false"
                   class=""
                   data-icon="picture"
                   width="1em"
                   height="1em"
                   fill="currentColor"
                   aria-hidden="true">
                <path
                      d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z">
                </path>
              </svg></i>گالری تصاویر</span></div>
      </div>
      <div class="row w-100 ">
        <div class="col-12 mt-5  d-flex justify-content-center w-100">
          <div class="ant-empty ant-empty-normal  d-flex justify-content-center align-items-center flex-column w-100">
            <div class="ant-empty-image"><svg width="64"
                   height="41"
                   viewBox="0 0 64 41"
                   xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0 1)"
                   fill="none"
                   fill-rule="evenodd">
                  <ellipse fill="#F5F5F5"
                           cx="32"
                           cy="33"
                           rx="32"
                           ry="7"></ellipse>
                  <g fill-rule="nonzero"
                     stroke="#D9D9D9">
                    <path
                          d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z">
                    </path>
                    <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                          fill="#FAFAFA"></path>
                  </g>
                </g>
              </svg></div>
            <p class="ant-empty-description text-center"><span> تصویری بارگذاری نشده است</span></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 w-100 d-flex justify-content-end">
          <div class="gallery_buttonsContainer__1mHVD gallery_contentCenter__36TQo d-flex justify-content-end mt-4"><button type="button"
                    class="btn bg-nobat ml-2 btn-info ant-btn-lg h-50"><span>بارگذاری تصویر جدید</span></button>
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
