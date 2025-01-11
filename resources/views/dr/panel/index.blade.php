@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />

@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', 'لیست بیماران')
<div class="top-details-sicks-cards mt-2">
 <div class="d-flex  justify-content-center mb-3 gap-20 top-s-a-wrapper">
  <div class="rounded-lg d-flex justify-content-center align-items-center p-3 bg-light-blue">
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
     d="M8.75 1C8.75 0.585786 8.41421 0.25 8 0.25C7.58579 0.25 7.25 0.585786 7.25 1V2.27315C7.06292 2.28069 6.88649 2.29068 6.71986 2.30392C6.02597 2.35906 5.43809 2.47407 4.89913 2.73985C3.96133 3.20233 3.20233 3.96133 2.73985 4.89913C2.47407 5.43809 2.35906 6.02597 2.30392 6.71986C2.24999 7.39854 2.24999 8.23977 2.25 9.30128V9.33333V13V13.0564C2.24998 14.8942 2.24997 16.3498 2.40313 17.489C2.56076 18.6614 2.89288 19.6104 3.64124 20.3588C4.38961 21.1071 5.33856 21.4392 6.51098 21.5969C7.65018 21.75 9.1058 21.75 10.9435 21.75H10.9436H11H13H13.0564H13.0565C14.8942 21.75 16.3498 21.75 17.489 21.5969C18.6614 21.4392 19.6104 21.1071 20.3588 20.3588C21.1071 19.6104 21.4392 18.6614 21.5969 17.489C21.75 16.3498 21.75 14.8942 21.75 13.0565V13.0564V13V11V10.9436V10.9435C21.75 9.1058 21.75 7.65018 21.5969 6.51098C21.4392 5.33855 21.1071 4.38961 20.3588 3.64124C19.6104 2.89288 18.6614 2.56076 17.489 2.40313C17.2561 2.37182 17.0099 2.34691 16.75 2.32709V1C16.75 0.585786 16.4142 0.25 16 0.25C15.5858 0.25 15.25 0.585786 15.25 1V2.26272C14.588 2.24999 13.8586 2.24999 13.0564 2.25L13 2.25H9.33333L9.30128 2.25C9.11051 2.25 8.92687 2.25 8.75 2.25031V1ZM15.25 4V3.76309C14.5973 3.75032 13.854 3.75 13 3.75H9.33333C9.12812 3.75 8.934 3.75002 8.75 3.75037V4C8.75 4.41421 8.41421 4.75 8 4.75C7.58579 4.75 7.25 4.41421 7.25 4V3.7744C7.10443 3.78083 6.96779 3.78895 6.83868 3.79921C6.23478 3.84719 5.86008 3.93844 5.56256 4.08516C4.92091 4.40159 4.40159 4.92091 4.08516 5.56256C3.93844 5.86008 3.8472 6.23478 3.79921 6.83868C3.75055 7.45098 3.75 8.23265 3.75 9.33333V13C3.75 14.9068 3.75159 16.2615 3.88976 17.2892C4.02502 18.2952 4.27869 18.8749 4.7019 19.2981C5.12511 19.7213 5.70476 19.975 6.71085 20.1102C7.73851 20.2484 9.09318 20.25 11 20.25H13C14.9068 20.25 16.2615 20.2484 17.2892 20.1102C18.2952 19.975 18.8749 19.7213 19.2981 19.2981C19.7213 18.8749 19.975 18.2952 20.1102 17.2892C20.2484 16.2615 20.25 14.9068 20.25 13V11C20.25 9.09318 20.2484 7.73851 20.1102 6.71085C19.975 5.70476 19.7213 5.12511 19.2981 4.7019C18.8749 4.27869 18.2952 4.02502 17.2892 3.88976C17.1188 3.86685 16.9394 3.8477 16.75 3.83168V4C16.75 4.41421 16.4142 4.75 16 4.75C15.5858 4.75 15.25 4.41421 15.25 4ZM7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75H17C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25H7ZM6.25 12C6.25 11.5858 6.58579 11.25 7 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12ZM7 15.25C6.58579 15.25 6.25 15.5858 6.25 16C6.25 16.4142 6.58579 16.75 7 16.75H10C10.4142 16.75 10.75 16.4142 10.75 16C10.75 15.5858 10.4142 15.25 10 15.25H7Z"
     fill="#000"></path>
   </svg><span class="font-bold mr-2 ml-2">تعداد بیماران امروز</span><span class="font-medium">0 بیمار</span>
  </div>
  <div class="rounded-lg d-flex justify-content-center align-items-center p-3 bg-light-blue"><svg width="25"
    height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
     d="M3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12ZM12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM16.5303 9.53033C16.8232 9.23744 16.8232 8.76256 16.5303 8.46967C16.2374 8.17678 15.7626 8.17678 15.4697 8.46967L11 12.9393L9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L10.4697 14.5303C10.6103 14.671 10.8011 14.75 11 14.75C11.1989 14.75 11.3897 14.671 11.5303 14.5303L16.5303 9.53033Z"
     fill="#000"></path>
   </svg><span class="font-bold mr-2 ml-2">بیماران ویزیت شده</span><span class="font-medium">0 بیمار</span>
  </div>
  <div class="rounded-lg d-flex justify-content-center align-items-center p-3 bg-light-blue"><svg width="24"
    height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
     d="M15.9466 3.86296C15.0496 3.75142 13.7844 3.75 12.0003 3.75H9.36429C8.71829 3.75 8.261 3.75021 7.91998 3.76649C7.56474 3.78345 7.4243 3.81587 7.37132 3.83671C6.71239 4.09582 6.40002 4.84996 6.68273 5.49911C6.70546 5.55131 6.78184 5.67354 7.02104 5.93673C7.25066 6.18938 7.57387 6.51287 8.03066 6.96967L10.2807 9.21967C10.5736 9.51256 10.5736 9.98744 10.2807 10.2803C9.98777 10.5732 9.51289 10.5732 9.22 10.2803L6.97 8.03033L6.95532 8.01565C6.51646 7.57679 6.16765 7.22799 5.911 6.9456C5.66108 6.67061 5.43613 6.39341 5.30749 6.09804C4.68553 4.66992 5.37276 3.0108 6.82238 2.44076C7.1222 2.32286 7.47728 2.28592 7.84845 2.2682C8.22961 2.25 8.72291 2.25 9.34358 2.25H9.36429H12.0003L12.058 2.25C13.7717 2.24998 15.1309 2.24997 16.1317 2.37443C17.1139 2.49657 18.0242 2.76512 18.5121 3.55566C18.6667 3.80623 18.7801 4.08002 18.848 4.36655C19.0619 5.27056 18.6082 6.1041 18.0001 6.88497C17.3804 7.68066 16.4192 8.64178 15.2075 9.85352L15.1667 9.89429L9.89462 15.1664C8.63308 16.4279 7.73943 17.3236 7.18405 18.0367C6.61019 18.7736 6.56933 19.1061 6.61237 19.2879C6.6432 19.4182 6.69475 19.5426 6.76505 19.6565C6.8632 19.8155 7.12722 20.0218 8.05404 20.137C8.95102 20.2486 10.2162 20.25 12.0003 20.25H14.6364C15.2824 20.25 15.7397 20.2498 16.0807 20.2335C16.4359 20.2165 16.5764 20.1841 16.6293 20.1633C17.2883 19.9042 17.6006 19.15 17.3179 18.5009C17.2952 18.4487 17.2188 18.3265 16.9796 18.0633C16.75 17.8106 16.4268 17.4871 15.97 17.0303L13.72 14.7803C13.4271 14.4874 13.4271 14.0126 13.72 13.7197C14.0129 13.4268 14.4878 13.4268 14.7807 13.7197L17.0307 15.9697L17.0452 15.9843C17.4842 16.4232 17.833 16.772 18.0897 17.0544C18.3396 17.3294 18.5645 17.6066 18.6932 17.902C19.3151 19.3301 18.6279 20.9892 17.1783 21.5592C16.8785 21.6771 16.5234 21.7141 16.1522 21.7318C15.771 21.75 15.2777 21.75 14.6571 21.75H14.6364H12.0003H11.9427C10.229 21.75 8.86976 21.75 7.86894 21.6256C6.88676 21.5034 5.97651 21.2349 5.48859 20.4443C5.33394 20.1938 5.22053 19.92 5.15271 19.6334C4.93872 18.7294 5.39247 17.8959 6.00061 17.115C6.62029 16.3193 7.58142 15.3582 8.79319 14.1465L8.83396 14.1057L14.106 8.83363C15.3676 7.57209 16.2612 6.67644 16.8166 5.96331C17.3905 5.22645 17.4313 4.89392 17.3883 4.71207C17.3575 4.58183 17.3059 4.45738 17.2356 4.34348C17.1375 4.18445 16.8734 3.97822 15.9466 3.86296Z"
     fill="#000"></path>
   </svg><span class="font-bold mr-2 ml-2">بیماران باقی مانده</span><span class="font-medium">0 بیمار</span>
  </div>
 </div>
</div>
<div class="d-flex justify-content-center top-s-wrapper">
 <div class="calendar-and-add-sick-section p-3">
  <div class="d-flex justify-content-between gap-10 align-items-center c-a-wrapper">
   <div>
    <div class="turning_selectDate__MLRSb">
     <button
      class="selectDate_datepicker__xkZeS cursor-pointer text-center h-50 bg-light-blue d-flex justify-content-center align-items-center"
      data-toggle="modal" data-target="#calendarModal">
      <span class="mx-1"></span>
      {{-- <span type="text" class="observer-example bg-transparent text-center cursor-pointer"></span> --}}
      <svg style="margin-top: -4px" width="20" height="20" viewBox="0 0 20 20" fill="none"
       class="calendar-svg" xmlns="http://www.w3.org/2000/svg">
       <rect x="2.63989" y="3.49097" width="15" height="14" rx="4" fill="#000" fill-opacity="0">
       </rect>
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M7.41668 1.59094C7.41668 1.17673 7.08089 0.840942 6.66668 0.840942C6.25247 0.840942 5.91668 1.17673 5.91668 1.59094V2.54303C5.89207 2.54591 5.86779 2.54901 5.84377 2.55236C3.7414 2.84563 2.08883 4.49821 1.79556 6.60057C1.7499 6.92787 1.74994 7.30407 1.75 7.89547L1.75001 7.96269V10.7568L1.75001 10.8057C1.75 12.408 1.74999 13.6773 1.86869 14.6816C1.99055 15.7125 2.24639 16.5612 2.82821 17.2702C3.02559 17.5107 3.24613 17.7312 3.48664 17.9286C4.19559 18.5104 5.04429 18.7663 6.07526 18.8881C7.07948 19.0068 8.34883 19.0068 9.9511 19.0068H10H10.0489C11.6512 19.0068 12.9205 19.0068 13.9248 18.8881C14.9557 18.7663 15.8044 18.5104 16.5134 17.9286C16.7539 17.7312 16.9744 17.5107 17.1718 17.2702C17.7536 16.5612 18.0095 15.7125 18.1313 14.6816C18.25 13.6773 18.25 12.408 18.25 10.8057V10.7568V10.7079C18.25 9.10564 18.25 7.83628 18.1313 6.83206C18.0095 5.80109 17.7536 4.95239 17.1718 4.24344C16.9744 4.00293 16.7539 3.78239 16.5134 3.58501C15.8411 3.0333 15.0432 2.7747 14.0833 2.64551V1.59094C14.0833 1.17673 13.7475 0.840942 13.3333 0.840942C12.9191 0.840942 12.5833 1.17673 12.5833 1.59094V2.53227C11.8482 2.5068 11.0082 2.5068 10.0489 2.50681H10.0489L10 2.50681H7.41668V1.59094ZM12.5833 4.09175V4.03308C11.8742 4.00728 11.0294 4.00681 10 4.00681H7.41668V4.09175C7.41668 4.50596 7.08089 4.84175 6.66668 4.84175C6.25247 4.84175 5.91668 4.50596 5.91668 4.09175V4.05956C4.54258 4.30981 3.47554 5.41443 3.28118 6.8078C3.25182 7.01823 3.25001 7.28176 3.25001 7.96269V10.7568C3.25001 12.4189 3.25124 13.5996 3.35832 14.5055C3.46344 15.3948 3.66158 15.9212 3.98773 16.3186C4.12278 16.4832 4.27367 16.634 4.43823 16.7691C4.83563 17.0952 5.36198 17.2934 6.25134 17.3985C7.15725 17.5056 8.3379 17.5068 10 17.5068C11.6621 17.5068 12.8428 17.5056 13.7487 17.3985C14.638 17.2934 15.1644 17.0952 15.5618 16.7691C15.7263 16.634 15.8772 16.4832 16.0123 16.3186C16.3384 15.9212 16.5366 15.3948 16.6417 14.5055C16.7488 13.5996 16.75 12.4189 16.75 10.7568C16.75 9.0947 16.7488 7.91405 16.6417 7.00814C16.5366 6.11878 16.3384 5.59244 16.0123 5.19503C15.8772 5.03047 15.7263 4.87958 15.5618 4.74453C15.2165 4.46113 14.7738 4.27438 14.0801 4.16132C14.045 4.54292 13.7241 4.84175 13.3333 4.84175C12.9191 4.84175 12.5833 4.50596 12.5833 4.09175ZM5.83334 6.67429C5.41913 6.67429 5.08334 7.01007 5.08334 7.42429C5.08334 7.8385 5.41913 8.17429 5.83334 8.17429H14.1667C14.5809 8.17429 14.9167 7.8385 14.9167 7.42429C14.9167 7.01007 14.5809 6.67429 14.1667 6.67429H5.83334ZM7.50001 10.7576C7.50001 11.2179 7.12692 11.5909 6.66668 11.5909C6.20644 11.5909 5.83334 11.2179 5.83334 10.7576C5.83334 10.2974 6.20644 9.92428 6.66668 9.92428C7.12692 9.92428 7.50001 10.2974 7.50001 10.7576ZM6.66668 14.9243C7.12692 14.9243 7.50001 14.5512 7.50001 14.0909C7.50001 13.6307 7.12692 13.2576 6.66668 13.2576C6.20644 13.2576 5.83334 13.6307 5.83334 14.0909C5.83334 14.5512 6.20644 14.9243 6.66668 14.9243ZM10.8334 14.0909C10.8334 14.5512 10.4603 14.9243 10 14.9243C9.53978 14.9243 9.16669 14.5512 9.16669 14.0909C9.16669 13.6307 9.53978 13.2576 10 13.2576C10.4603 13.2576 10.8334 13.6307 10.8334 14.0909ZM13.3334 14.9243C13.7936 14.9243 14.1667 14.5512 14.1667 14.0909C14.1667 13.6307 13.7936 13.2576 13.3334 13.2576C12.8731 13.2576 12.5 13.6307 12.5 14.0909C12.5 14.5512 12.8731 14.9243 13.3334 14.9243ZM10.8334 10.7576C10.8334 11.2179 10.4603 11.5909 10 11.5909C9.53978 11.5909 9.16669 11.2179 9.16669 10.7576C9.16669 10.2974 9.53978 9.92428 10 9.92428C10.4603 9.92428 10.8334 10.2974 10.8334 10.7576ZM13.3334 11.5909C13.7936 11.5909 14.1667 11.2179 14.1667 10.7576C14.1667 10.2974 13.7936 9.92428 13.3334 9.92428C12.8731 9.92428 12.5 10.2974 12.5 10.7576C12.5 11.2179 12.8731 11.5909 13.3334 11.5909Z"
        fill="#000"></path>
      </svg>
     </button>

     <div class="modal fade " id="calendarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered " role="document">
       <div class="modal-content border-radius-8">
        <div class="my-modal-header p-3">
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
         </button>
        </div>
        <div class="modal-body">
         <x-jalali-calendar />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div>
    <div class="turning_filterWrapper__2cOOi">
     <div class="turning_search-wrapper__loGVc">
      <input type="text" class="my-form-control" placeholder="نام بیمار، شماره موبایل یا کد ملی ...">
     </div>
    </div>
   </div>
   <div class="btn-425-left">
    <button class="btn btn-primary h-50 fs-13" data-toggle="modal" data-target="#exampleModalCenterAddSick">افزودن
     بیمار</button>
    </button>
    <!-- Modal -->
    <div class="modal fade " id="exampleModalCenterAddSick" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered " role="document">
      <div class="modal-content border-radius-8">
       <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">افزودن بیمار </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
        </button>
       </div>
       <div class="modal-body">
        <div>
         <form action="" method="post">
          <input type="text" class="my-form-control-light w-100" placeholder="کدملی/کداتباع">
          <div class="mt-2">
           <a class="text-decoration-underline" href="#" data-toggle="modal"
            data-target="#exampleModalCenterPaziresh">پذیرش
            از مسیر ارجاع</a>
          </div>
          <div class="d-flex mt-2 gap-20">
           <button class="btn btn-primary w-50 h-50">تجویز نسخه</button>
           <button class="btn btn-outline-info w-50 h-50">ثبت ویزیت</button>
          </div>
         </form>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="modal fade " id="exampleModalCenterPaziresh" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered " role="document">
      <div class="modal-content border-radius-8">
       <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> ارجاع </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
        </button>
       </div>
       <div class="modal-body">
        <div>
         <form action="" method="post">
          <input type="text" class="my-form-control-light w-100" placeholder="کدملی/کداتباع بیمار">
          <input type="text" class="my-form-control-light w-100 mt-3" placeholder="کد پیگیری">
          <div class="mt-3">
           <button class="btn btn-primary w-100 h-50">ثبت</button>
          </div>
         </form>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</div>
{{-- here put calender --}}
<x-jalali-calendar-row />

<div class="sicks-content h-100 mt-4 w-100  position-relative">
 <div class="" style="">
  <div class="table-responsive position-absolute top-table">
   <table class="table w-full text-sm text-center">
    <thead class="text-xs text-gray-700 uppercase border-b border-solid bg-gray-50 border-b-gray-100">
     <tr>
      <th scope="col" class="px-6 py-3">نام بیمار</th>
      <th scope="col" class="px-6 py-3">شماره‌موبایل</th>
      <th scope="col" class="px-6 py-3">وضعیت نسخه</th>
      <th scope="col" class="px-6 py-3">بیمه</th>
      <th scope="col" class="px-6 py-3">تاریخ نوبت</th>
      <th scope="col" class="px-6 py-3">عملیات</th>
     </tr>
    </thead>
    <tbody></tbody>
   </table>
  </div>
 </div>
 <div class="d-flex justify-content-start gap-10 nobat-option">
  <div class="d-flex align-items-center m-2 gap-4">
   <div class="turning_filterWrapper__2cOOi">
    <div class="dropdown">
     <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true"
      aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
       <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" fill="#000" />
      </svg>
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
     </button>
     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <ul class="dropdown-list" style="list-style-type: none; padding: 0; margin: 0;">
       <li>
        <a href="#" id="all-users" class="dropdown-item">همه</a>
       </li>
       <li>
        <a href="#" id="visited-users" class="dropdown-item">ویزیت شده</a>
       </li>
       <li>
        <a href="#" id="unvisited-users" class="dropdown-item">ویزیت نشده</a>
       </li>
       <li>
        <a href="#" id="blocked-users" class="dropdown-item">کاربران مسدود</a>
       </li>
       <li>
        <a href="#" id="blocked-users" class="dropdown-item"> لغو شده</a>
       </li>
      </ul>
     </div>
    </div>
   </div>
   <script>
    const dropdownButton = document.getElementById('dropdownMenuButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownButton.addEventListener('click', function() {
     dropdownMenu.classList.toggle('show');
    });
    dropdownItems.forEach(item => {
     item.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdownMenu.classList.remove('show');
     });
    });
    document.addEventListener('click', function(event) {
     if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
     }
    });
   </script>
   <button class="btn btn-light h-50 fs-13 d-flex align-items-center justify-content-center">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="20"
     width="20" version="1.1" id="Capa_1" viewBox="0 0 58 58" xml:space="preserve">
     <g>
      <path
       d="M51,31.979V13.5v-1v-11H35h-2H19h-2H0v11v1v34c0,0.553,0.448,1,1,1h32.003c1.963,4.693,6.6,8,11.997,8   c7.168,0,13-5.832,13-13C58,38.497,55.154,34.151,51,31.979z M35,3.5h14v8H35V3.5z M19,3.5h14v8H19V3.5z M2,3.5h15v8H2V3.5z    M32.359,46.5H2v-33h15h2h14h2h14v17.636c-0.195-0.063-0.396-0.114-0.595-0.168c-0.186-0.051-0.372-0.102-0.559-0.144   c-0.169-0.038-0.339-0.071-0.51-0.102c-0.244-0.045-0.489-0.082-0.736-0.113c-0.137-0.017-0.273-0.036-0.411-0.049   c-0.394-0.036-0.791-0.06-1.19-0.06c-3.502,0-6.679,1.398-9.018,3.658c0.035-0.323,0.076-0.644,0.076-0.974v-7.345   c0-2.042-0.712-3.773-2.134-5.196c-1.423-1.423-3.149-2.134-5.18-2.134s-3.757,0.711-5.179,2.134   c-1.423,1.423-2.134,3.148-2.134,5.179s0.711,3.757,2.134,5.18c1.422,1.423,3.183,2.134,5.282,2.134s3.871-0.78,5.316-2.341v2.148   c0,2.157-0.631,3.791-1.893,4.904c-1.262,1.112-2.753,1.669-4.474,1.669h-0.74v1.893h0.603c1.537,0,2.879-0.27,4.026-0.809   c0.268-0.126,0.518-0.262,0.755-0.405C32.163,41.253,32,42.356,32,43.5c0,0.493,0.033,0.977,0.087,1.456   c0.009,0.075,0.024,0.149,0.034,0.224c0.056,0.428,0.131,0.849,0.227,1.262C32.353,46.461,32.354,46.481,32.359,46.5z    M34.164,25.788c0,1.549-0.521,2.845-1.565,3.889s-2.323,1.565-3.837,1.565c-1.515,0-2.8-0.521-3.854-1.565   c-1.056-1.044-1.583-2.323-1.583-3.837c0-1.515,0.527-2.799,1.583-3.854c1.055-1.055,2.334-1.583,3.837-1.583   s2.782,0.511,3.837,1.531C33.637,22.955,34.164,24.239,34.164,25.788z M45,54.5c-4.787,0-8.859-3.08-10.367-7.358   c-0.094-0.267-0.176-0.536-0.249-0.806c-0.015-0.058-0.03-0.115-0.045-0.173c-0.06-0.238-0.112-0.476-0.156-0.716   c-0.024-0.133-0.042-0.267-0.061-0.401c-0.026-0.18-0.054-0.36-0.071-0.541C34.021,44.174,34,43.839,34,43.5   c0-6.065,4.935-11,11-11c0.389,0,0.776,0.021,1.16,0.063c0.062,0.007,0.121,0.021,0.183,0.028c0.326,0.041,0.652,0.089,0.973,0.159   c0.042,0.009,0.082,0.022,0.123,0.032c0.342,0.079,0.681,0.17,1.016,0.282c0.025,0.008,0.048,0.018,0.073,0.027   c0.343,0.118,0.683,0.252,1.018,0.404C53.347,35.229,56,39.057,56,43.5C56,49.565,51.065,54.5,45,54.5z" />
      <path d="M51,42.5H39c-0.552,0-1,0.447-1,1s0.448,1,1,1h12c0.552,0,1-0.447,1-1S51.552,42.5,51,42.5z" />
      <polygon points="11,21.5 11,23.5 16.058,20.5 16.058,41.578 18.058,41.578 18.058,18.5 16.058,18.5  " />
     </g>
    </svg>
    <span class="d-none d-md-block mx-1">لغو نوبت</span>
   </button>
   <button class="btn btn-light h-50 fs-13 d-flex align-items-center justify-content-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
     <path
      d="M7.37756 11.6296H6.62756H7.37756ZM7.37756 12.5556L6.81609 13.0528C6.95137 13.2056 7.14306 13.2966 7.34695 13.3049C7.55084 13.3133 7.74932 13.2382 7.89662 13.0969L7.37756 12.5556ZM9.51905 11.5414C9.81805 11.2547 9.82804 10.7799 9.54137 10.4809C9.2547 10.182 8.77994 10.172 8.48095 10.4586L9.51905 11.5414ZM6.56148 10.5028C6.28686 10.1927 5.81286 10.1639 5.50277 10.4385C5.19267 10.7131 5.16391 11.1871 5.43852 11.4972L6.56148 10.5028ZM14.9317 9.0093C15.213 9.31337 15.6875 9.33184 15.9915 9.05055C16.2956 8.76927 16.3141 8.29476 16.0328 7.9907L14.9317 9.0093ZM12.0437 6.25C9.05802 6.25 6.62756 8.653 6.62756 11.6296H8.12756C8.12756 9.49251 9.87531 7.75 12.0437 7.75V6.25ZM6.62756 11.6296L6.62756 12.5556H8.12756L8.12756 11.6296H6.62756ZM7.89662 13.0969L9.51905 11.5414L8.48095 10.4586L6.85851 12.0142L7.89662 13.0969ZM7.93904 12.0583L6.56148 10.5028L5.43852 11.4972L6.81609 13.0528L7.93904 12.0583ZM16.0328 7.9907C15.0431 6.9209 13.6212 6.25 12.0437 6.25V7.75C13.1879 7.75 14.2154 8.23504 14.9317 9.0093L16.0328 7.9907Z"
      fill="#1C274C" />
     <path
      d="M16.6188 11.4443L17.1795 10.9462C17.044 10.7937 16.8523 10.703 16.6485 10.6949C16.4447 10.6868 16.2464 10.7621 16.0993 10.9034L16.6188 11.4443ZM14.4805 12.4581C14.1817 12.745 14.1722 13.2198 14.4591 13.5185C14.746 13.8173 15.2208 13.8269 15.5195 13.54L14.4805 12.4581ZM17.4393 13.4972C17.7144 13.8068 18.1885 13.8348 18.4981 13.5597C18.8078 13.2846 18.8358 12.8106 18.5607 12.5009L17.4393 13.4972ZM9.04688 15.0047C8.76342 14.7027 8.28879 14.6876 7.98675 14.9711C7.68472 15.2545 7.66966 15.7292 7.95312 16.0312L9.04688 15.0047ZM11.9348 17.7499C14.9276 17.7499 17.3688 15.3496 17.3688 12.3703H15.8688C15.8688 14.5047 14.1158 16.2499 11.9348 16.2499V17.7499ZM17.3688 12.3703V11.4443H15.8688V12.3703H17.3688ZM16.0993 10.9034L14.4805 12.4581L15.5195 13.54L17.1383 11.9853L16.0993 10.9034ZM16.0581 11.9425L17.4393 13.4972L18.5607 12.5009L17.1795 10.9462L16.0581 11.9425ZM7.95312 16.0312C8.94543 17.0885 10.3635 17.7499 11.9348 17.7499V16.2499C10.792 16.2499 9.76546 15.7704 9.04688 15.0047L7.95312 16.0312Z"
      fill="#1C274C" />
     <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
    </svg>
    <span class="d-none d-md-block mx-1">جابجایی نوبت</span>
   </button>
   <button class="btn btn-light h-50 fs-13 d-flex align-items-center justify-content-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
     <path
      d="M14.8086 19.7053L19.127 16.3467M11 15C10.1183 15 9.28093 14.8098 8.52682 14.4682C8.00429 14.2315 7.74302 14.1131 7.59797 14.0722C7.4472 14.0297 7.35983 14.0143 7.20361 14.0026C7.05331 13.9914 6.94079 14 6.71575 14.0172C6.6237 14.0242 6.5425 14.0341 6.46558 14.048C5.23442 14.2709 4.27087 15.2344 4.04798 16.4656C4 16.7306 4 17.0485 4 17.6841V19.4C4 19.9601 4 20.2401 4.10899 20.454C4.20487 20.6422 4.35785 20.7951 4.54601 20.891C4.75992 21 5.03995 21 5.6 21H11M20 18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18C14 16.3431 15.3431 15 17 15C18.6569 15 20 16.3431 20 18ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
      stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span class="d-none d-md-block mx-1">مسدود کردن کاربر</span>
   </button>
  </div>
 </div>
</div>
</div>
<div class="modal fade" id="activation-modal" tabindex="-1" role="dialog"
 aria-labelledby="activation-modal-label" aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content border-radius-8">
   <div class="modal-header">
    <h5 class="modal-title" id="activation-modal-label">فعالسازی نوبت دهی</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body">
    <div class="flex flex-col"><span>پزشک گرامی</span>
     <span>
      با فعال سازی امکان برقراری تماس امن، علاوه بر فراهم آوردن یک ویزیت
      پیوسته و با کیفیت، زمان انتظار پاسخگویی به بیماران را نیز کاهش دهید.
     </span>
     <span>
      پاسخ‌دهی به موقع برای برآورده کردن انتظارات بیماران بسیار مهم است.
     </span>
    </div>
   </div>
   <div class="p-3">
    <a href="" data-toggle="modal" data-target="#contact-modal"
     class="btn btn-primary w-100 h-50 d-flex align-items-center text-white justify-content-center">
     فعالسازی تماس امن </a>
    <a href="" class="btn btn-light mt-3 w-100 h-50 d-flex align-items-center  justify-content-center"
     onclick="$('#activation-modal').modal('hide'); window.history.pushState({}, '', 'panel');"> فعلا نه
     بعدا فعال میکنم </a>
   </div>
  </div>
 </div>
</div>
<div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label"
 aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content border-radius-8">
   <div class="modal-header">
    <h5 class="modal-title" id="activation-modal-label">تماس امن</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body my-modal-body">
    <div class="d-flex flex-column align-items-center w-100">
     <ul class="mx-4text-sm font-medium list-disc d-flex flex-column">
      <li>در پنل پزشک، در مقابل اسم هر بیمار، دکمه تماس وجود دارد.</li>
      <li>پزشک قادر است در هر زمان با بیمار تماس برقرار کند.</li>
      <li>بیمار در قبض نوبت و در نوبت‌های من، دکمه برقراری تماس را دارد.</li>
      <li>بیمار تنها در ساعت کاری پزشک، قادر به تماس با پزشک است.</li>
      <li>بیمار از زمان نوبت تا ۳ روز بعد از زمان نوبت، دکمه تماس را در اختیار دارد.</li>
      <li>تماس امن همراه با پیام‌رسان است و در صورت نیاز، شما و یا بیمار می‌توانید از هر یک از دو
       سرویس استفاده کنید.</li>
     </ul>
    </div>
   </div>
   <div class="p-3">
    <a href="#" class="btn btn-primary w-100 h-50 d-flex align-items-center text-white justify-content-center"
     onclick="$('#activation-modal').modal('hide'); $('#contact-modal').modal('hide'); window.history.pushState({}, '', 'panel'); toastr.success('تماس امن با موفقیت فعال شد');">
     شرایط برقراری تماس امن را
     مطالعه کردم. </a>
   </div>
  </div>
 </div>
</div>
@endsection
@section('scripts')
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
<script src="{{ asset('dr-assets/panel/js/calendar/custm-calendar.js') }}"></script>

@endsection
