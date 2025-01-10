@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', ' ویرایش پروفایل ')
<div class="main-content mb-5">
 @if (!$doctor->profile_completed && count($incompleteSections) > 0)
  <div class="alert alert-warning text-center">
   <span class="font-weight-bold">
    پروفایل شما کامل نیست. لطفا بخش‌های زیر را تکمیل کنید:
    <ul class="w-100 d-flex gap-4">
     @foreach ($doctor->getIncompleteProfileSections() as $section)
      <li class="badge badge-danger p-2">{{ $section }}</li>
     @endforeach
    </ul>
   </span>
  </div>
 @endif
 <div class="d-flex justify-content-center align-items-center flex-column col-12">
  <div class="top-profile-info p-2 col-xs-12 col-sm-12  col-md-12 col-lg-8 d-flex">
   <div class="d-flex justify-content-between w-100 font-size-13">
    <div class="d-flex align-items-start">
     <div>
      <img src="{{ asset('dr-assets/panel/img/pro.jpg') }}" class="avatar___img-main">
     </div>
     <div class="mx-2 mt-3">
      <span class="d-block font-weight-bold font-size-15 profile-header-name">
       {{ Auth::guard('doctor')->user()->first_name . ' ' . Auth::guard('doctor')->user()->last_name }}</span>
      <span class="badge badge-light p-2 border-radius-8 mt-3 mx-3 font-size-13 cursor-pointer">
       {{ $specialtyName }}
      </span>
     </div>
    </div>
    <div class="show-profile-badge">
     <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
        fill="#1C274C" />
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z"
        fill="#1C274C" />
      </svg>
      <span>مشاهده پروفایل</span>
     </a>
    </div>
   </div>
  </div>
  <div
   class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8"
   id="personal-data">
   <div class="d-flex justify-content-between align-items-center personal-data-clicked">
    <div>
     <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M4.75 5C4.75 3.20507 6.20507 1.75 8 1.75C9.79493 1.75 11.25 3.20507 11.25 5C11.25 6.79493 9.79493 8.25 8 8.25C6.20507 8.25 4.75 6.79493 4.75 5ZM8 0.25C5.37665 0.25 3.25 2.37665 3.25 5C3.25 7.62335 5.37665 9.75 8 9.75C10.6234 9.75 12.75 7.62335 12.75 5C12.75 2.37665 10.6234 0.25 8 0.25ZM1.75 17C1.75 15.2051 3.20507 13.75 5 13.75H11C12.7949 13.75 14.25 15.2051 14.25 17C14.25 17.6904 13.6904 18.25 13 18.25H3C2.30964 18.25 1.75 17.6904 1.75 17ZM5 12.25C2.37665 12.25 0.25 14.3766 0.25 17C0.25 18.5188 1.48122 19.75 3 19.75H13C14.5188 19.75 15.75 18.5188 15.75 17C15.75 14.3766 13.6234 12.25 11 12.25H5Z"
       fill="#3F3F79"></path>
     </svg>
     <span class="txt-card-span mx-1">اطلاعات فردی</span>
    </div>
    <div>
     <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
      style="transform: rotate(90deg)" class="chevron_bottom__M8fF9 ">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="#000"></path>
     </svg>
    </div>
   </div>
   <div class="drop-toggle-styles personal-data-drop-toggle">
    <div class="loading-spinner d-none"></div>
    <div class="">
     <form action="{{ route('dr-update-profile') }}" method="POST" id="profileEdit">
      @csrf
      <div class="mt-2">
       <label for="name" class="label-top-input">نام</label>
       <input type="text" class="my-form-control w-100 border-radius-6 mt-3"
        value="{{ Auth::guard('doctor')->user()->first_name }}" name="first_name" readonly>
       @error('first_name')
        <span class="text-danger font-weight-bold mt-2">{{ $message }}</span>
       @enderror
      </div>
      <div class="mt-2">
       <label for="name" class="label-top-input">نام خانوادگی</label>
       <input type="text" class="my-form-control w-100 border-radius-6 mt-3"
        value="{{ Auth::guard('doctor')->user()->last_name }}" name="last_name" readonly>
      </div>
      <div class="mt-2">
       <label for="name" class="label-top-input">کدملی</label>
       <input type="text" value="{{ Auth::guard('doctor')->user()->national_code ?? '' }}"
        class="my-form-control-light h-50 w-100 border-radius-6 mt-3 text-right" name="national_code">
      </div>
      <div class="mt-2">
       <label for="name" class="label-top-input">شماره نظام پزشکی</label>
       <input type="text" value="{{ Auth::guard('doctor')->user()->license_number ?? '' }}"
        class="my-form-control-light h-50 w-100 border-radius-6 mt-3 text-right" name="license_number">
      </div>
      <div class="d-flex justify-content-between mt-4 gap-4 position-relative">
       <label for="name" class="label-top-input-special-takhasos">شماره موبایل</label>
       <input class="my-form-control h-50 col-lg-11 col-xs-10 col-md-11 col-sm-11 text-right disabled "
        placeholder="شماره موبایل" name="mobile" value="{{ Auth::guard('doctor')->user()->mobile ?? '' }}" disabled>
       <button
        class="btn btn-dark h-50 col-lg-1 col-xs-2 col-md-1 col-sm-1 d-flex justify-content-center align-items-center fs-6 add-form-item"
        type="button" id="editButton" data-toggle="modal" data-target="#mobileEditModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff">
         <path d="M4 22H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
         <path
          d="M13.8881 3.66293L14.6296 2.92142C15.8581 1.69286 17.85 1.69286 19.0786 2.92142C20.3071 4.14999 20.3071 6.14188 19.0786 7.37044L18.3371 8.11195M13.8881 3.66293C13.8881 3.66293 13.9807 5.23862 15.3711 6.62894C16.7614 8.01926 18.3371 8.11195 18.3371 8.11195M13.8881 3.66293L7.07106 10.4799C6.60933 10.9416 6.37846 11.1725 6.17992 11.4271C5.94571 11.7273 5.74491 12.0522 5.58107 12.396C5.44219 12.6874 5.33894 12.9972 5.13245 13.6167L4.25745 16.2417M18.3371 8.11195L11.5201 14.9289C11.0584 15.3907 10.8275 15.6215 10.5729 15.8201C10.2727 16.0543 9.94775 16.2551 9.60398 16.4189C9.31256 16.5578 9.00282 16.6611 8.38334 16.8675L5.75834 17.7426M5.75834 17.7426L5.11667 17.9564C4.81182 18.0581 4.47573 17.9787 4.2485 17.7515C4.02128 17.5243 3.94194 17.1882 4.04356 16.8833L4.25745 16.2417M5.75834 17.7426L4.25745 16.2417"
          stroke="#fff" stroke-width="1.5" />
        </svg>
       </button>
      </div>
      <div class="mt-3">
       <label for="name" class="font-weight-bold font-size-13"> بیوگرافی و توضیحات</label>
       <textarea class="ckeditor form-control" name="description" class="form-control" id="description">
            {{ trim(Auth::guard('doctor')->user()->bio ?? '') }}
        </textarea>
      </div>
      <div class="w-100">
       <button type="submit"
        class="w-100 btn btn-primary h-50 border-radius-4 d-flex justify-content-center align-items-center">
        <span class="button_text">ذخیره تغیرات</span>
        <div class="loader"></div>
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
  {{-- mobileedit modal --}}
  <div class="modal fade" id="mobileEditModal" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content border-radius-8">
     <div class="modal-header">
      <h5 class="modal-title">ویرایش شماره موبایل</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
      </button>
     </div>
     <div class="modal-body position-relative">
      <div id="mobileInputStep1">
       <label class="label-top-input">شماره موبایل جدید</label>
       <input type="text" id="newMobileNumber" maxlength="11" class="form-control w-100 h-50 text-right"
        name="mobile">
       <div class="d-flex mt-2">
        <button onclick="sendOtpCode()"
         class="btn btn-primary w-100 h-50 d-flex justify-content-center align-items-center">
         <span class="button_text">ارسال کد تایید</span>
         <div class="loader"></div>
        </button>
       </div>
      </div>
      <div id="otpInputStep" style="display:none;">
       <label class="label-top font-weight-bold">کد تایید 4 رقمی را وارد کنید</label>
       <div class="d-flex justify-content-center gap-10 mt-2" dir="ltr">
        <input type="text" maxlength="1" class="form-control otp-input text-center"
         style="width:70px;height:60px">
        <input type="text" maxlength="1" class="form-control otp-input text-center"
         style="width:70px;height:60px">
        <input type="text" maxlength="1" class="form-control otp-input text-center"
         style="width:70px;height:60px">
        <input type="text" maxlength="1" class="form-control otp-input text-center"
         style="width:70px;height:60px">
       </div>
       <div class="d-flex mt-3">
        <button onclick="verifyOtpCode()"
         class="btn btn-primary w-100 h-50 d-flex justify-content-center align-items-center">
         <span class="button_text">تایید کد</span>
         <div class="loader"></div>
        </button>
       </div>
       <div class="text-center mt-2">
        <small id="resendOtpTimer"></small>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  {{-- mobileedit modal --}}
  <div
   class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="specialty-section">
   <div class="d-flex justify-content-between align-items-center">
    <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 11.4799 5.41481 13.6878 7.22718 15.1064L6.25754 21.8939C6.21967 22.159 6.32601 22.4242 6.53656 22.5897C6.74711 22.7552 7.02991 22.7958 7.27854 22.6964L12 20.8078L16.7215 22.6964C16.9701 22.7958 17.2529 22.7552 17.4634 22.5897C17.674 22.4242 17.7803 22.159 17.7425 21.8939L16.7728 15.1064C18.5852 13.6878 19.75 11.4799 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3817 15.9752C14.3598 16.4716 13.2124 16.75 12 16.75C10.7876 16.75 9.64021 16.4716 8.61829 15.9752L7.92592 20.8219L11.7215 19.3036C11.9003 19.2321 12.0997 19.2321 12.2785 19.3036L16.0741 20.8219L15.3817 15.9752ZM5.75 9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9C18.25 12.4518 15.4518 15.25 12 15.25C8.54822 15.25 5.75 12.4518 5.75 9Z"
       fill="#3F3F79"></path>
     </svg>
     <span class="txt-card-span mx-1"> تخصص</span>
    </div>
    <div>
     <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
      style="transform: rotate(90deg)" class="chevron_bottom__M8fF9 ">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="#000"></path>
     </svg>
    </div>
   </div>
   <div class="drop-toggle-styles takasos-data-drop-toggle">
    <div class="loading-spinner d-none"></div>
    <div>
     <div class="text-left mt-3 remove-form-item">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L10 8.93934L14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033L11.0607 10L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L10 11.0607L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L8.93934 10L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z"
        fill="#000"></path>
      </svg>
     </div>
     <div class="mt-2">
      <form action="{{ route('dr-specialty-update') }}" method="POST" id="specialtyEdit">
       @csrf
       <div class="d-flex justify-content-between gap-4 flex-xs-wrap flex-xs-column">
        <div class="mt-2 w-100">
         <label for="name" class="label-top-input">درجه علمی</label>
         <select name="academic_degree_id" id="academic_degree_id"
          class="form-control h-50  border-radius-6 mt-3 col-12 position-relative daraje">
          @foreach ($academic_degrees as $academic_degree)
           <option value="{{ $academic_degree->id }}"
            {{ (Auth::guard('doctor')->user()->academic_degree_id ?? '') == ($academic_degree->id ?? '') ? 'selected' : '' }}>
            {{ $academic_degree->title ?? '' }}
           </option>
          @endforeach
         </select>
        </div>
        <div class="mt-2 w-100">
         <label for="name" class="label-top-input">تخصص</label>
         <select name="specialty_id" id="specialties_list"
          class="form-control h-50 border-radius-6 mt-3 col-12 position-relative takhasos-input">
          @foreach ($sub_specialties as $specialtyOption)
           <option value="{{ $specialtyOption->id }}"
            {{ $specialtyOption->id == ($currentSpecialty->specialty_id ?? '') ? 'selected' : '' }}>
            {{ $specialtyOption->name }}
           </option>
          @endforeach
         </select>
        </div>
       </div>
       <div class="position-relative">
        <label for="name" class="label-top-input-special-takhasos">عنوان تخصص</label>
        <input type="text" value="{{ $specialtyName }}" name="specialty_title"
         class="form-control h-50 w-100 border-radius-6 mt-3  ">
       </div>
       <div id="additionalInputs">
        <h6 class="font-weight-bold mt-3">تخصص های اضافی</h6>
        <div class="alert alert-warning mt-2">
         تخصص های اضافه شده شما قابل ویرایش نیستند اگه قصد تغییر یا ویرایش تخصص را دارید ابتدا آن را پاک کنید و مجدد
         تخصص جدید بسازید
        </div>
        <!-- تخصص‌های اضافه شده از دیتابیس -->
        @foreach ($specialties as $index => $specialty)
         @if ($index > 0)
          <div class="w-100 mt-3 specialty-item" data-specialty-id="{{ $specialty->id }}">
           <div class="text-left mt-3 remove-form-item" onclick="removeInput(this)">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd"
              d="M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L10 8.93934L14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033L11.0607 10L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L10 11.0607L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L8.93934 10L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z"
              fill="#000"></path>
            </svg>
           </div>
           <div>
            <div class="mt-2">
             <div class="d-flex justify-content-between gap-4">
              <div class="w-100">
               <label for="degree{{ $index + 1 }}" class="label-top-input">درجه علمی</label>
               <select name="degrees[{{ $index }}]" id="degree{{ $index + 1 }}"
                class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative daraje" disabled>
                @foreach ($academic_degrees as $academic_degree)
                 <option value="{{ $academic_degree->id }}"
                  {{ $specialty->academic_degree_id == $academic_degree->id ? 'selected' : '' }}>
                  {{ $academic_degree->title }}
                 </option>
                @endforeach
               </select>
              </div>
              <div class="w-100">
               <label for="specialty{{ $index + 1 }}" class="label-top-input">تخصص</label>
               <select name="specialties[{{ $index }}]" id="specialty{{ $index + 1 }}"
                class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative takhasos-input" disabled>
                @foreach ($sub_specialties as $specialtyOption)
                 <option value="{{ $specialtyOption->id }}"
                  {{ $specialty->specialty_id == $specialtyOption->id ? 'selected' : '' }}>
                  {{ $specialtyOption->name }}
                 </option>
                @endforeach
               </select>
              </div>
             </div>
             <div>
              <label for="title{{ $index + 1 }}" class="label-top-input-special-takhasos-elem-create">عنوان
               تخصص</label>
              <input type="text" name="titles[{{ $index }}]" id="title{{ $index + 1 }}"
               class="form-control h-50 w-100 border-radius-6 mt-3" value="{{ $specialty->specialty_title }}"
               disabled>
             </div>
            </div>
           </div>
          </div>
         @endif
        @endforeach
       </div>
       <div class="d-flex justify-content-between mt-2 gap-4">
        <button type="submit" id="saveChangesButton"
         class="btn btn-primary h-50 col-lg-11 col-xs-10 col-md-11 col-sm-11 d-flex justify-content-center align-items-center">
         <span class="button_text">ذخیره تغیرات</span>
         <div class="loader"></div>
        </button>
        <button
         class="btn btn-dark h-50 col-lg-1 col-xs-2 col-md-1 col-sm-1 d-flex justify-content-center align-items-center fs-6 add-form-item "
         type="button" id="addButton"
         {{ $existingSpecialtiesCount >= 3 || $existingSpecialtiesCount < 1 ? 'disabled' : '' }}>
         <svg class="svg-plus" xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 8 8"
          id="meteor-icon-kit__regular-plus-xxs" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M3 3V0.83333C3 0.3731 3.4477 0 4 0C4.5523 0 5 0.3731 5 0.83333V3H7.1667C7.6269 3 8 3.4477 8 4C8 4.5523 7.6269 5 7.1667 5H5V7.1667C5 7.6269 4.5523 8 4 8C3.4477 8 3 7.6269 3 7.1667V5H0.83333C0.3731 5 0 4.5523 0 4C0 3.4477 0.3731 3 0.83333 3H3z"
           fill="#fff" />
         </svg>
        </button>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
  <div
   class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="uuid-section">
   <div class="d-flex justify-content-between align-items-center">
    <div>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H9M15 5H17C18.1046 5 19 5.89543 19 7V9"
       stroke="#3f3f79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
       d="M14.902 20.3343L12.7153 20.7716L13.1526 18.585C13.1914 18.3914 13.2865 18.2136 13.4261 18.074L17.5 14L19.5 12L21.4869 13.9869L19.4869 15.9869L15.413 20.0608C15.2734 20.2004 15.0956 20.2956 14.902 20.3343Z"
       stroke="#3f3f79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#3f3f79" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" />
     </svg>
     <span class="txt-card-span mx-1">ویرایش آی دی </span>
    </div>
    <div>
     <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
      style="transform: rotate(90deg)" class="chevron_bottom__M8fF9 ">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="#000"></path>
     </svg>
    </div>
   </div>
   <div class="drop-toggle-styles takasos-data-drop-toggle">
    <div class="loading-spinner d-none"></div>
    <div>
     <div class="mx-auto mt-2">
      <div class="bg-white py-3 rounded">
       <ul>
        <li><small> آی دی ، عدد یا واژه ایست که با تایپ مستقیم پس از / benobe.ir صفحه اینترنتی شما را نشان میدهد
         </small></li>
        <li><small> میتوانید برای انتخاب آی‌دی مورد علاقه‌ی خود از حروف انگلیسی نیز استفاده نمایید </small></li>
        <li><small> لطفاً توجه نمایید ، آی دی هر مطب باید به نام مطب و یا نام پزشک اشاره کند و نمی ‌توان از نام
          های کلی همانند tehrandoctor و یا pezeshk 1 استفاده کرد. </small></li>
       </ul>
       <form action="{{ route('dr-uuid-update') }}" method="POST" id="uuid-form">
        @csrf
        <div class="row">
         <div class="col-12 position-relative">
          <h4 class="text-left"><span class="color-999">benobe.ir/ </span><span class="color-nobat"> 
            {{  Auth::guard('doctor')->user()->uuid  ?? '1997' }}
           </span></h4>
          <div class="mt-3 w-100">
           <label class="label-top-input-special-takhasos"> آی دی خود را وارد نمایید : </label>
           <input class="form-control mt-2 h-50" type="text" value="{{ Auth::guard('doctor')->user()->uuid }}"
            name="uuid">
          </div>
         </div>
        </div>
        <div class="row mt-3">
         <div class="w-100">
          <button type="submit" id="uuid-btn"
           class="w-100 btn btn-primary h-50 col-lg-12 col-xs-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
           <span class="button_text">ذخیره تغیرات</span>
           <div class="loader"></div>
          </button>
         </div>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8 " id="messengers-section">
   <div class="d-flex justify-content-between align-items-center">
    <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
       d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.42 13 15.23C13 12.39 10.54 10.09 7.49997 10.09C6.33997 10.09 5.26997 10.42 4.37997 11C4.34997 10.75 4.33997 10.5 4.33997 10.24C4.33997 5.68999 8.28997 2 13.17 2C18.05 2 22 5.68999 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z"
       stroke="#3F3F79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path
       d="M13 15.23C13 16.42 12.56 17.5201 11.82 18.3901C10.83 19.5901 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.3301C2.86 18.4001 2 16.91 2 15.23C2 13.47 2.94 11.9201 4.38 11.0001C5.27 10.4201 6.34 10.0901 7.5 10.0901C10.54 10.0901 13 12.39 13 15.23Z"
       stroke="#3F3F79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
     </svg>
     <span class="txt-card-span mx-1"> پیام رسان ها</span>
    </div>
    <div>
     <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
      style="transform: rotate(90deg)" class="chevron_bottom__M8fF9 ">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="#000"></path>
     </svg>
    </div>
   </div>
   <div class="drop-toggle-styles messangers-data-drop-toggle">
    <div class="loading-spinner d-none"></div>
    <div>
     <div class="alert alert-warning mt-2 text-center">
      <span class="text-sm font-weight-bold d-block font-size-15">لطفا شماره و نام کاربری پیام رسان ایتا یا شماره
       واتساپ خود را وارد.</span>
      <span class="font-size-15 mt-1">شماره موبایل این پیام رسان ها در دسترس بیمار قرار میگیرد.</span>
     </div>
     <form id="messengersForm">
      @csrf
      @method('PUT')
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
         <input type="text" name="ita_phone" class="form-control h-50 border-radius-4" placeholder="شماره موبایل"
          maxlength="11" value="{{ $messengers->where('messenger_type', 'ita')->first()->phone_number ?? '' }}">
        </div>
        <div class="mt-2 w-100">
         <input type="text" name="ita_username" class="form-control h-50 border-radius-4 mt-2"
          placeholder="نام کاربری ایتا"
          value="{{ $messengers->where('messenger_type', 'ita')->first()->username ?? '' }}">
        </div>
       </div>
      </div>
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
         <input type="text" name="whatsapp_phone" class="form-control h-50 border-radius-4 col-12"
          placeholder="شماره موبایل" maxlength="11"
          value="{{ $messengers->where('messenger_type', 'whatsapp')->first()->phone_number ?? '' }}">
        </div>
       </div>
      </div>
      <div class="mt-2">
       <h6 class="text-left font-weight-bold d-block font-size-13"> تماس امن</h6>
      </div>
      <div
       class="d-flex gap-4 justify-content-between align-items-center p-3 border border-solid rounded-lg border-slate-200 mt-2">
       <div>
        <span class="text-responsive font-size-13 font-weight-bold">تماس امن به عنوان راه ارتباط جانبی در کنار هر یک از
         پیام‌رسان‌ها قرار می‌گیرد.</span>
        <svg class="help-svg" width="16" height="17" viewBox="0 0 16 17" fill="none"
         xmlns="http://www.w3.org/2000/svg" color="#3f4079">
         <path
          d="M8.00006 9.9198V9.70984C8.00006 9.02984 8.42009 8.66982 8.84009 8.37982C9.25009 8.09982 9.66003 7.73983 9.66003 7.07983C9.66003 6.15983 8.92006 5.4198 8.00006 5.4198C7.08006 5.4198 6.34009 6.15983 6.34009 7.07983"
          stroke="#3f4079" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
         <path d="M7.9955 12.0692H8.0045" stroke="#3f4079" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round">
         </path>
         <circle cx="8" cy="8.99445" r="7.25" stroke="#3f4079" stroke-width="1.5"></circle>
        </svg>
       </div>
       <div class="flex flex-col gap-2">
        <div class="flex items-center rounded-lg elative MuiBox-root muirtl-0">
         <div class="password_toggle__AXK9v">
          <input type="checkbox" id="secure_call" name="secure_call" value="1"
           {{ ($messengers->where('messenger_type', 'ita')->first()->is_secure_call ?? false) ||
           ($messengers->where('messenger_type', 'whatsapp')->first()->is_secure_call ?? false)
               ? 'checked'
               : '' }}>
          <label for="secure_call">Toggle</label>
         </div>
        </div>
       </div>
      </div>
      <div class="mt-3">
       <button type="submit"
        class="btn btn-primary w-100 h-50 border-radius-4 d-flex justify-content-center align-items-center">
        <span class="button_text">ثبت تغییرات</span>
        <div class="loader"></div>
       </button>
      </div>
     </form>
     <div>
     </div>
    </div>
   </div>
  </div>
  <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8">
   <div class="d-flex justify-content-between align-items-center">
    <div>
     <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
       d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z"
       fill="#3F3F79"></path>
      <path
       d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z"
       fill="#3F3F79"></path>
      <path
       d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z"
       fill="#3F3F79"></path>
     </svg>
     <span class="txt-card-span mx-1">رمز عبور ثابت</span>
    </div>
    <div>
     <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
      style="transform: rotate(90deg)" class="chevron_bottom__M8fF9 ">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="#000"></path>
     </svg>
    </div>
   </div>
   <div class="drop-toggle-styles password-data-drop-toggle">
    <div class="loading-spinner d-none"></div>
    <div>
     <div class="accordion_content__bS0xm">
      <form class="w-100" action="{{ route('dr-static-password-update') }}" method="POST"
       id="staticPasswordForm">
       @csrf
       <div class="d-flex align-items-center mt-2">
        <div class="password_toggle__AXK9v d-flex align-items-center">
         <input type="checkbox" id="static_password_enabled" name="static_password_enabled" value="1"
          {{ Auth::guard('doctor')->user()->static_password_enabled ? 'checked' : '' }}>
         <label for="static_password_enabled">Toggle</label>
         <span class="mx-1">رمزعبور ثابت فعال است</span>
        </div>
       </div>
       <div class="w-100 d-flex justify-content-between gap-4 flex-xs-wrap flex-xs-column">
        <div class="w-100">
         <label for="password" class="label-top-input"> کلمه عبور</label>
         <input type="password" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative daraje"
          id="password" name="password" placeholder="رمز عبور"
          {{ Auth::guard('doctor')->user()->static_password_enabled ? '' : 'disabled' }}>
         <svg class="show-pass-1" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
           fill="#1C274C" />
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z"
           fill="#1C274C" />
         </svg>
        </div>
        <div class="w-100">
         <label for="password_confirmation" class="label-top-input">تکرار کلمه عبور</label>
         <input type="password" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative"
          id="password_confirmation" name="password_confirmation" placeholder="تکرار رمز عبور"
          {{ Auth::guard('doctor')->user()->static_password_enabled ? '' : 'disabled' }}>
         <svg class="show-pass-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M3.53023 2.4697C3.23734 2.17681 2.76247 2.17681 2.46957 2.4697C2.17668 2.76259 2.17668 3.23747 2.46957 3.53036L5.13723 6.19801C3.91106 7.01861 2.99173 8.00411 2.35714 8.96369C1.64412 10.0419 1.25 11.1513 1.25 12C1.25 12.6616 1.48923 13.4704 1.91294 14.284C2.34365 15.1109 2.99041 15.9926 3.86629 16.8011C5.62703 18.4264 8.30768 19.75 12 19.75C14.1796 19.75 16.0109 19.2887 17.5107 18.5715L20.4696 21.5304C20.7625 21.8233 21.2373 21.8233 21.5302 21.5304C21.8231 21.2375 21.8231 20.7626 21.5302 20.4697L3.53023 2.4697ZM16.3748 17.4356L14.0679 15.1287C13.4751 15.5211 12.7637 15.75 11.9999 15.75C9.92883 15.75 8.2499 14.0711 8.2499 12C8.2499 11.2363 8.47885 10.5248 8.87127 9.93206L6.22202 7.2828C5.0408 8.01882 4.17938 8.92754 3.60829 9.7911C2.98821 10.7287 2.75 11.5502 2.75 12C2.75 12.3384 2.88577 12.9046 3.24331 13.5911C3.59385 14.2641 4.13459 15.0074 4.88371 15.6989C6.37297 17.0736 8.69232 18.25 12 18.25C13.7211 18.25 15.1715 17.9315 16.3748 17.4356ZM9.96904 11.0298C9.82845 11.3235 9.7499 11.6522 9.7499 12C9.7499 13.2427 10.7573 14.25 11.9999 14.25C12.3477 14.25 12.6765 14.1715 12.9701 14.0309L9.96904 11.0298ZM12 5.75001C10.9594 5.75001 10.0189 5.86643 9.17331 6.06728C8.7703 6.16299 8.36601 5.91388 8.2703 5.51088C8.17458 5.10788 8.42369 4.70359 8.82669 4.60787C9.78973 4.37915 10.8467 4.25001 12 4.25001C15.6923 4.25001 18.373 5.5736 20.1337 7.1989C21.0096 8.00741 21.6564 8.88909 22.0871 9.71606C22.5108 10.5296 22.75 11.3384 22.75 12C22.75 13.2108 21.9456 15.0051 20.4152 16.5311C20.1218 16.8236 19.647 16.8229 19.3545 16.5296C19.062 16.2362 19.0627 15.7614 19.3561 15.4689C20.7151 14.1139 21.25 12.6791 21.25 12C21.25 11.6616 21.1142 11.0954 20.7567 10.409C20.4061 9.73592 19.8654 8.9926 19.1163 8.30111C17.627 6.92641 15.3077 5.75001 12 5.75001Z"
           fill="#22282F"></path>
         </svg>
        </div>
       </div>
       <div class="w-100 mt-3">
        <button type="submit" class="btn btn-primary h-50 col-12 d-flex justify-content-center align-items-center"
         id="btn-save-pass" {{ Auth::guard('doctor')->user()->static_password_enabled ? '' : 'disabled' }}>
         <span class="button_text">ذخیره تغیرات</span>
         <div class="loader"></div>
        </button>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
  <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12 col-md-12 col-lg-8">
   <div class="d-flex justify-content-between align-items-center">
    <div>
     <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
       d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z"
       fill="#3F3F79"></path>
      <path
       d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z"
       fill="#3F3F79"></path>
      <path
       d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z"
       fill="#3F3F79"></path>
     </svg>
     <span class="txt-card-span mx-1">فعال‌سازی گذرواژه دو مرحله‌ای</span>
    </div>
    <div>
     <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
      style="transform: rotate(90deg)" class="chevron_bottom__M8fF9">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="#000"></path>
     </svg>
    </div>
   </div>
   <div class="drop-toggle-styles two-factor-data-drop-toggle">
    <div class="loading-spinner d-none"></div>
    <div>
     <div class="accordion_content__bS0xm">
      <div class="d-flex align-items-center mt-3">
       <div class="password_toggle__AXK9v d-flex align-items-center">
        <input type="checkbox" id="two_factor_enabled" name="two_factor_enabled" value="1"
         {{ Auth::guard('doctor')->user()->two_factor_secret_enabled ? 'checked' : '' }}>
        <label for="two_factor_enabled">Toggle</label>
       </div>
       <span class="mx-1"> گذرواژه دو مرحله ای فعال است</span>
      </div>
      <form class="w-100" action="{{ route('dr-two-factor-update') }}" method="POST" id="twoFactorForm">
       @csrf
       <div class="w-100 d-flex justify-content-between gap-4 flex-xs-wrap flex-xs-column">
        <div class="w-100">
         <label for="two_factor_secret" class="label-top-input"> کلید مخفی</label>
         <input type="text" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative daraje"
          id="two_factor_secret" name="two_factor_secret" placeholder="کلید مخفی"
          {{ Auth::guard('doctor')->user()->two_factor_secret_enabled ? '' : 'disabled' }}>
        </div>
       </div>
       <div class="w-100 mt-3">
        <button type="submit" class="btn btn-primary h-50 col-12 d-flex justify-content-center align-items-center"
         id="btn-save-two-factor" {{ Auth::guard('doctor')->user()->two_factor_secret_enabled ? '' : 'disabled' }}>
         <span class="button_text">ذخیره تغیرات</span>
         <div class="loader"></div>
        </button>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
  <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8">
   <div class="d-flex justify-content-between align-items-center">
    <div>
     <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M10.75 0C9.23123 0 8.00002 1.23122 8.00002 2.75V3.50228C7.85444 3.55755 7.71097 3.61706 7.56976 3.68068L7.03769 3.1486C5.96375 2.07466 4.22254 2.07466 3.1486 3.1486C2.07466 4.22254 2.07466 5.96375 3.1486 7.03769L3.68068 7.56976C3.61706 7.71097 3.55755 7.85443 3.50229 8H2.75C1.23122 8 0 9.23122 0 10.75C0 12.2688 1.23122 13.5 2.75 13.5H3.50229C3.55755 13.6456 3.61706 13.789 3.68068 13.9302L3.1486 14.4623C2.07466 15.5363 2.07466 17.2775 3.1486 18.3514L3.67893 17.8211L3.1486 18.3514C4.22254 19.4253 5.96375 19.4253 7.03769 18.3514L7.56976 17.8193C7.71097 17.8829 7.85444 17.9425 8.00002 17.9977V18.75C8.00002 20.2688 9.23123 21.5 10.75 21.5C12.2688 21.5 13.5 20.2688 13.5 18.75V17.9977C13.6456 17.9424 13.789 17.8829 13.9302 17.8193L14.4623 18.3514C15.5363 19.4253 17.2775 19.4253 18.3514 18.3514C19.4253 17.2775 19.4253 15.5363 18.3514 14.4623L17.8193 13.9302C17.8829 13.789 17.9425 13.6456 17.9977 13.5H18.75C20.2688 13.5 21.5 12.2688 21.5 10.75C21.5 9.23122 20.2688 8 18.75 8H17.9977C17.9425 7.85443 17.8829 7.71096 17.8193 7.56976L18.3514 7.03769C19.4253 5.96375 19.4253 4.22254 18.3514 3.1486L17.8211 3.67893L18.3514 3.1486C17.2775 2.07466 15.5363 2.07466 14.4623 3.1486L13.9302 3.68067C13.789 3.61706 13.6456 3.55755 13.5 3.50229V2.75C13.5 1.23122 12.2688 0 10.75 0ZM9.50002 2.75C9.50002 2.05964 10.0597 1.5 10.75 1.5C11.4404 1.5 12 2.05964 12 2.75V4.03988C12 4.3717 12.218 4.66407 12.5361 4.75872C12.9513 4.8823 13.3485 5.04794 13.7229 5.25079C14.0147 5.40893 14.3758 5.35642 14.6105 5.12171L15.523 4.20926C16.0111 3.72111 16.8026 3.72111 17.2907 4.20926C17.7789 4.69742 17.7789 5.48887 17.2907 5.97703L16.3783 6.88947C16.1436 7.12419 16.0911 7.48528 16.2492 7.77713C16.4521 8.15148 16.6177 8.54872 16.7413 8.96394C16.8359 9.28197 17.1283 9.5 17.4601 9.5H18.75C19.4404 9.5 20 10.0596 20 10.75C20 11.4404 19.4404 12 18.75 12H17.4601C17.1283 12 16.8359 12.218 16.7413 12.5361C16.6177 12.9513 16.4521 13.3485 16.2492 13.7229C16.0911 14.0147 16.1436 14.3758 16.3783 14.6105L17.2907 15.523C17.7789 16.0111 17.7789 16.8026 17.2907 17.2907C16.8026 17.7789 16.0111 17.7789 15.523 17.2907L14.6105 16.3783C14.3758 16.1436 14.0147 16.0911 13.7229 16.2492C13.3485 16.4521 12.9513 16.6177 12.5361 16.7413C12.2181 16.8359 12 17.1283 12 17.4601V18.75C12 19.4404 11.4404 20 10.75 20C10.0597 20 9.50002 19.4404 9.50002 18.75V17.4601C9.50002 17.1283 9.28198 16.8359 8.96395 16.7413C8.54873 16.6177 8.15148 16.4521 7.77713 16.2492C7.48528 16.0911 7.12419 16.1436 6.88948 16.3783L5.97703 17.2907C5.48887 17.7789 4.69742 17.7789 4.20926 17.2907C3.72111 16.8026 3.72111 16.0111 4.20926 15.523L5.12171 14.6105C5.35643 14.3758 5.40894 14.0147 5.25079 13.7229C5.04794 13.3485 4.8823 12.9513 4.75872 12.5361C4.66407 12.218 4.3717 12 4.03988 12H2.75C2.05964 12 1.5 11.4404 1.5 10.75C1.5 10.0596 2.05964 9.5 2.75 9.5H4.03988C4.37169 9.5 4.66407 9.28197 4.75872 8.96394C4.8823 8.54872 5.04794 8.15148 5.25079 7.77713C5.40894 7.48528 5.35643 7.12419 5.12171 6.88948L4.20926 5.97703C3.72111 5.48887 3.72111 4.69742 4.20926 4.20926C4.69742 3.72111 5.48887 3.72111 5.97703 4.20926L6.88948 5.12171C7.12419 5.35643 7.48528 5.40894 7.77713 5.25079C8.15149 5.04793 8.54873 4.88229 8.96395 4.75872C9.28198 4.66407 9.50002 4.37169 9.50002 4.03988V2.75ZM8.5 10.75C8.5 9.50736 9.50736 8.5 10.75 8.5C11.9926 8.5 13 9.50736 13 10.75C13 11.9926 11.9926 13 10.75 13C9.50736 13 8.5 11.9926 8.5 10.75ZM10.75 7C8.67893 7 7 8.67893 7 10.75C7 12.8211 8.67893 14.5 10.75 14.5C12.8211 14.5 14.5 12.8211 14.5 10.75C14.5 8.67893 12.8211 7 10.75 7Z"
       fill="#3F3F79"></path>
     </svg>
     <span class="txt-card-span mx-1"> تنظیمات نسخه نویسی</span>
    </div>
    <div>
     <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
      style="transform: rotate(90deg)" class="chevron_bottom__M8fF9 ">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="#000"></path>
     </svg>
    </div>
   </div>
   <div class="drop-toggle-styles noskheh-data-drop-toggle">
    <div class="loading-spinner d-none"></div>
    <div>
     <div class="mt-3">
      <div class="d-flex align-items-center space-s-3">
       <div class="settings_toggle__NBCHl">
        <div class="password_toggle__AXK9v d-flex align-items-center">
         <label for="switch">Toggle</label>
        </div>
       </div><span class="mx-2">غیرفعال کردن SMS نهایی سازی نسخه</span>
      </div>
      <div class="d-flex align-items-center mt-3">
       <div class="settings_toggle__NBCHl">
        <div class="password_toggle__AXK9v d-flex align-items-center">
         <label for="switch">Toggle</label>
        </div>
       </div><span class="mx-2"> ویرایش اطلاعات احراز هویت</span>
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
<script src="{{ asset('dr-assets/panel/js/sweetalert2/sweetalert2.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/profile/edit-profile.js') }}"></script>
<script>
 var appointmentsSearchUrl = "{{ route('search.appointments') }}";
</script>
@include('dr.panel.profile.option.profile-option')

@endsection
