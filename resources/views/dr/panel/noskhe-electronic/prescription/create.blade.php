@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/prescription/prescription.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/providers./providers.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/favorite/templates/index.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/favorite/templates/create.css') }}"
  rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', 'تجویز نسخه')
<div class="">
 <div class="patient-profile-details p-3 border">
  <div id="patient-profile-details-wrapper"  class="d-flex justify-content-between align-items-center">
   <div class="cursor-pointer" onclick="toggleDetails()">
    <span>
     <svg id="toggle-icon" width="7" height="11" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg)" class="chevron_bottom__M8fF9 ">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="#758599"></path>
     </svg>
    </span>
    <span>
     <span class="font-weight-bold">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
       <path
        d="M8.20094 13.3872L5.42786 12.0508C5.42786 12.0508 6.12948 11.1487 6.26312 6.1371L6.24085 6.73849C6.24085 3.47538 8.88029 0.835938 12.1434 0.835938C15.4065 0.835938 18.046 3.47538 18.046 6.73849L18.0125 6.12596C18.135 11.1376 18.8367 12.0396 18.8367 12.0396L16.0636 13.3761"
        stroke="#2b2f33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
       </path>
       <path
        d="M3.25 21C3.25 21.4142 3.58579 21.75 4 21.75C4.41421 21.75 4.75 21.4142 4.75 21L3.25 21ZM19.25 21C19.25 21.4142 19.5858 21.75 20 21.75C20.4142 21.75 20.75 21.4142 20.75 21L19.25 21ZM4.75 21C4.75 19.9966 4.95288 19.2731 5.27209 18.7402C5.58887 18.2113 6.05265 17.8157 6.66876 17.5188C7.94488 16.9038 9.78439 16.75 12 16.75L12 15.25C9.79733 15.25 7.63684 15.3871 6.01753 16.1675C5.18592 16.5683 4.47813 17.1466 3.98527 17.9694C3.49483 18.7882 3.25 19.7943 3.25 21L4.75 21ZM12 16.75C14.2156 16.75 16.0551 16.9038 17.3312 17.5188C17.9473 17.8157 18.4111 18.2113 18.7279 18.7402C19.0471 19.2731 19.25 19.9966 19.25 21L20.75 21C20.75 19.7943 20.5052 18.7882 20.0147 17.9694C19.5219 17.1466 18.8141 16.5683 17.9825 16.1675C16.3632 15.3871 14.2027 15.25 12 15.25L12 16.75Z"
        fill="#2b2f33"></path>
      </svg>
     </span>
     <span class="font-weight-bold">
      صبا کرمی
     </span>
    </span>
    <span class="mx-4 font-weight-bold">
     بیمه : <span class="font-weight-bold">تامین اجتماعی</span>
    </span>
   </div>
   <div class="d-flex gap-10 align-items-center">
    <div>
     <svg class="cursor-pointer" data-toggle="modal" data-target="#addToFavModalCenter" width="24" height="24"
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M14.9778 4.34385L14.9557 4.33581C14.956 5.22557 14.9604 5.83485 15.0222 6.29489C15.0843 6.75635 15.1915 6.95385 15.3218 7.08416C15.4521 7.21448 15.6496 7.3217 16.1111 7.38374C16.5941 7.44869 17.2417 7.45028 18.2057 7.45028H18.6294C18.4083 7.1258 18.0102 6.76942 17.1455 6.02484L16.5069 5.47491C15.6309 4.72057 15.3275 4.47365 14.9778 4.34385ZM13.0811 4.2032C13.216 4.2032 13.3405 4.20334 13.4557 4.20381L13.4557 4.25228C13.4557 5.15076 13.4556 5.89998 13.5356 6.49476C13.62 7.12255 13.8057 7.68935 14.2611 8.14482C14.7166 8.60029 15.2834 8.78596 15.9112 8.87037C16.506 8.95033 17.2552 8.95031 18.1537 8.95028L18.2057 8.95028H18.9611C18.9683 9.23159 18.9697 9.57455 18.9697 10.0031V14.5469C18.9697 15.9824 18.9682 16.9835 18.8666 17.7388C18.7679 18.4726 18.5875 18.8612 18.3107 19.1379C18.034 19.4147 17.6454 19.5951 16.9116 19.6938C16.1563 19.7954 15.1552 19.7969 13.7197 19.7969H10.2803C8.84486 19.7969 7.84374 19.7954 7.08839 19.6938C6.35462 19.5951 5.96605 19.4147 5.68928 19.1379C5.41252 18.8612 5.23208 18.4726 5.13342 17.7388C5.03187 16.9835 5.03027 15.9824 5.03027 14.5469V9.4532C5.03027 8.01778 5.03187 7.01667 5.13342 6.26132C5.23208 5.52754 5.41252 5.13897 5.68928 4.86221C5.96605 4.58544 6.35462 4.405 7.08839 4.30634C7.84375 4.20479 8.84486 4.2032 10.2803 4.2032H13.0811ZM13.2088 2.70316C14.1869 2.70274 14.8664 2.70244 15.4999 2.93762C16.1334 3.17279 16.648 3.61637 17.389 4.25493L17.4857 4.33826L18.1243 4.88818L18.2441 4.99128C19.1537 5.77369 19.7861 6.31768 20.1285 7.06439C20.4709 7.8111 20.4704 8.64527 20.4698 9.84506L20.4697 10.0031V14.5469V14.6018C20.4698 15.9694 20.4698 17.0717 20.3532 17.9387C20.2322 18.8388 19.9733 19.5967 19.3714 20.1986C18.7695 20.8005 18.0116 21.0594 17.1115 21.1804C16.2445 21.297 15.1422 21.297 13.7746 21.2969H13.7197H10.2803H10.2254C8.85781 21.297 7.75549 21.297 6.88852 21.1804C5.98841 21.0594 5.23054 20.8005 4.62862 20.1986C4.02671 19.5967 3.76781 18.8388 3.6468 17.9387C3.53024 17.0717 3.53025 15.9694 3.53027 14.6018L3.53027 14.5469V9.4532L3.53027 9.39832C3.53025 8.03073 3.53024 6.92841 3.6468 6.06145C3.76781 5.16134 4.02671 4.40346 4.62862 3.80155C5.23054 3.19963 5.98842 2.94074 6.88852 2.81972C7.75549 2.70316 8.85781 2.70318 10.2254 2.7032L10.2803 2.7032H13.0811L13.2088 2.70316ZM13.4403 12.4363C13.8128 12.1957 14.3043 12.2572 14.6061 12.5821C14.9751 12.9792 14.9194 13.6084 14.4865 13.9346L12.0001 15.808L9.51365 13.9346C9.0807 13.6084 9.02505 12.9792 9.39402 12.5821C9.69586 12.2572 10.1873 12.1957 10.5599 12.4363L11.5932 13.1037C11.8408 13.2636 12.1593 13.2636 12.407 13.1037L13.4403 12.4363ZM15.705 11.5611C14.908 10.7032 13.6102 10.5409 12.6265 11.1763L12.0001 11.5808L11.3737 11.1763C10.3899 10.5409 9.09213 10.7032 8.29508 11.5611C7.32078 12.6098 7.46773 14.2712 8.61099 15.1326L11.369 17.2106C11.7426 17.4922 12.2575 17.4922 12.6311 17.2106L15.3891 15.1326C16.5324 14.2712 16.6793 12.6098 15.705 11.5611Z"
       fill="#000"></path>
     </svg>

     <div class="modal  fade" id="addToFavModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="endVisitModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
       <div class="modal-content border-radius-6">
        <div class="modal-header">
         <h6 class="modal-title font-weight-bold" id="exampleModalCenterTitle"> نسخه پر استفاده</h6>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
         </button>
        </div>
        <div class="modal-body">
         <div class="mt-3">
          <form action="">
           <input type="text" placeholder="نام نسخه خود را وارد کنید" class="h-50 my-form-control-light w-100">
           <button class="h-50 w-100 btn btn-primary mt-3">ثبت</button>
          </form>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div>
     <button data-toggle="modal" data-target="#saveNoskheModalCenter" class="btn btn-primary h-50">نهایی سازی نسخه</button>
        <div class="modal  fade" id="saveNoskheModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="endVisitModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
       <div class="modal-content border-radius-6">
        <div class="modal-header">
         <h6 class="modal-title font-weight-bold" id="exampleModalCenterTitle">   ویزیت</h6>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
         </button>
        </div>
        <div class="modal-body">
         <p class="font-weight-bold">
          در نسخه آیتمی وجود ندارد، آیا می خواهید ویزیت ثبت کنید؟
         </p>
         <div class="mt-3">
          <form action="">
           <textarea name="" id="" cols="30" rows="30" class="form-control w-100" placeholder="توضیحات (اختیاری)"></textarea>
          <div class="mt-2 d-flex justify-content-center gap-10">
            <button class="h-50 w-50 btn btn-primary mt-3">ثبت ویزیت</button>
           <button class="h-50 w-50 btn btn-outline-danger mt-3"> انصراف</button>
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
  <div id="details" class="patient-profile-details p-3 bg-light mt-3 details-wrapper" style="display: none;">
   <div id="" class="w-100 d-flex justify-content-between">
    <div class="mx-3">
     <span>سن </span>
     <span>29</span>
    </div>
    <div class="mx-3">
     <span>اعتبار بیمه</span>
     <span>1403/011/01</span>
    </div>
    <div class="mx-3">
     <span>کد ملی</span>
     <span>3720574245</span>
    </div>
    <div class="mx-3">
     <span>شماره موبایل : </span>
     <span>09182718639</span>
    </div>
   </div>
  </div>
 </div>

</div>
<div class="d-flex justify-content-center">
 <div class="noskhe-option-content-layouts mt-2 position-relative col-11 p-3">
  <div class="header-chosser-option w-100">
   <div class="d-flex w-100">
    <ul class="d-flex">
     <li class="tab my-border-bottom-primary" data-target="#tajviz"><span>تجویز دارو</span></li>
     <li class="tab" data-target="#azmayeshgah"><span>آزمایشگاه</span></li>
     <li class="tab" data-target="#tasvir-bardary"><span>تصویربرداری</span></li>
     <li class="tab" data-target="#paraclinic"><span>پاراکلینیک</span></li>
    </ul>
   </div>
  </div>
  <div id="tajviz" class="">
   <div class="content-current-chooser w-100  position-relative">
    <div class="w-100">
     <form action="" method="post" class="w-100">
      <div class="w-100">
       <input type="text" placeholder="نام یا کد دارو . . ." class="my-form-control-light w-100">
      </div>
      <div class="d-flex w-100 position-relative mt-4 w-100 flex-wrap justify-content-around gap-4">
       <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12">
        <label for="" class="label-top-input-content-noskhe"> دوره تکرار</label>
        <input type="number" class="form-control h-50 position-relative" min="0">
       </div>
       <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 mt-xs-3">
        <label for="" class="label-top-input-content-noskhe">تعداد </label>
        <input type="number" class="form-control h-50 position-relative" min="0">
       </div>
       <div class="col-lg-3 col-md-2 col-sm-6 col-xs-12">
        <input type="text" class="form-control h-50 w-100" placeholder="زمان مصرف">
       </div>
       <div class="col-lg-3 col-md-3 col-sm-5 col-xs-12 ">
        <input type="text" class="form-control h-50 w-100" placeholder="طریقه مصرف">
       </div>
       <div class="col-lg-3 col-md-2 col-sm-5 col-xs-12 ">
        <input type="text" class="form-control h-50 w-100" placeholder="میزان مصرف">
       </div>
      </div>
      <div class="mt-3 position-relative">
       <label for="" class="label-top-input-content-noskhe"> توضیحات </label>
       <textarea name="" id="desc-textarea" class="form-control border-radius-6" cols="3" rows="1"
        placeholder="توضیحات"> 
        </textarea>
       <script>
        document.getElementById("desc-textarea").addEventListener("focus", function() {
         this.value = this.value.trim();
        });
       </script>
      </div>
      <div class="mt-3 d-flex justify-content-end">
       <button class="btn btn-primary h-50">افزودن</button>
      </div>
     </form>
    </div>
   </div>
   <div class="lists-of mt-4 w-100">
    <div class="table-responsive">
     <table class="table table-striped table-hover">
      <thead>
       <tr>
        <th>نام دارو</th>
        <th>تعداد</th>
        <th>دوره تکرار</th>
        <th>زمان مصرف</th>
        <th>طریقه مصرف</th>
        <th>میزان مصرف</th>
        <th>
         <button class="btn btn-light">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
           data-tip="true" data-for="deleteAll" currentItem="false">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.4062 2.25C10.418 2.25 10.4297 2.25001 10.4415 2.25001H13.5585L13.5938 2.25C13.9112 2.24996 14.2092 2.24993 14.459 2.27844C14.7371 2.3102 15.0296 2.38362 15.3025 2.58033C15.5754 2.77705 15.7375 3.03125 15.8556 3.28509C15.9617 3.51301 16.0559 3.79577 16.1562 4.09691L16.1674 4.13038L16.5406 5.25001H19H21C21.4142 5.25001 21.75 5.58579 21.75 6.00001C21.75 6.41422 21.4142 6.75001 21 6.75001H19.7017L19.1217 15.449L19.1182 15.5016C19.0327 16.7844 18.9637 17.8205 18.8017 18.6336C18.6333 19.4789 18.3469 20.185 17.7553 20.7384C17.1637 21.2919 16.4401 21.5307 15.5855 21.6425C14.7634 21.75 13.725 21.75 12.4394 21.75H12.3867H11.6133H11.5606C10.275 21.75 9.23655 21.75 8.41451 21.6425C7.55986 21.5307 6.83631 21.2919 6.24472 20.7384C5.65312 20.185 5.3667 19.4789 5.19831 18.6336C5.03633 17.8205 4.96727 16.7844 4.88178 15.5016L4.87827 15.449L4.29834 6.75001H3C2.58579 6.75001 2.25 6.41422 2.25 6.00001C2.25 5.58579 2.58579 5.25001 3 5.25001H5H7.45943L7.83264 4.13038C7.83637 4.11919 7.84009 4.10802 7.8438 4.09688C7.94414 3.79576 8.03835 3.513 8.14438 3.28509C8.26246 3.03125 8.42459 2.77705 8.69752 2.58033C8.97045 2.38362 9.26287 2.3102 9.54102 2.27844C9.79077 2.24993 10.0888 2.24996 10.4062 2.25ZM9.04057 5.25001H14.9594L14.7443 4.60472C14.6289 4.25832 14.5611 4.05863 14.4956 3.91778C14.466 3.85424 14.4457 3.82282 14.4348 3.80824C14.4298 3.8015 14.427 3.79862 14.4264 3.79802L14.4254 3.7972L14.4243 3.79655C14.4236 3.79616 14.42 3.79439 14.412 3.79175C14.3947 3.78604 14.3585 3.77671 14.2888 3.76876C14.1345 3.75114 13.9236 3.75001 13.5585 3.75001H10.4415C10.0764 3.75001 9.86551 3.75114 9.71117 3.76876C9.64154 3.77671 9.60531 3.78604 9.58804 3.79175C9.58005 3.79439 9.57643 3.79616 9.57566 3.79655L9.57458 3.7972L9.57363 3.79802C9.57302 3.79862 9.57019 3.8015 9.56516 3.80824C9.55428 3.82282 9.53397 3.85424 9.50441 3.91778C9.43889 4.05863 9.37113 4.25832 9.25566 4.60472L9.04057 5.25001ZM5.80166 6.75001L6.37495 15.3492C6.4648 16.6971 6.52883 17.6349 6.6694 18.3405C6.80575 19.025 6.99608 19.3873 7.2695 19.6431C7.54291 19.8989 7.91707 20.0647 8.60907 20.1552C9.32247 20.2485 10.2625 20.25 11.6133 20.25H12.3867C13.7375 20.25 14.6775 20.2485 15.3909 20.1552C16.0829 20.0647 16.4571 19.8989 16.7305 19.6431C17.0039 19.3873 17.1943 19.025 17.3306 18.3405C17.4712 17.6349 17.5352 16.6971 17.6251 15.3492L18.1983 6.75001H16H8H5.80166Z"
            fill="#EB5757"></path>
           <path d="M10.1934 11.4708L13.8061 15.0836" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
           <path d="M13.8066 11.4708L10.1939 15.0836" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
          </svg>
         </button>
        </th>
       </tr>
      </thead>
      <tbody>
      </tbody>
     </table>
     <div style="display: flex; gap: 1rem; justify-content: center; align-items: center;"><img
       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA7CAYAAADMzlLJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAtMSURBVHgB5Vt5bxvHFf/NLClKJMVDlmQdDqLAtWW7SdwkLewmRev0QPsx+hH7Zwu0QXoZPVDUcYo4jm3Z1U1REkWKN7mcvNlzZnd5SpYC+Mnk7s7O7szv3fOGZiASQvwWbx79jslvAi/w5tEaxxtMMVwyCfqrdts4btdx0m2h3esixjhSxhRm4wlkY9OYMeJgOH+6NPA9srS9ZhlPqkVUuk2Y0vIYg1RFTkfrj45TLIaFRApr0zlcSSSt9vOiS7H5cqeFR+Vt7LerUvQWSDkRefSBExPoT55z4ojBDKwmMriVmkecGzgHWrtwyRebNfz95CVapN4iANyVqXXtXDFmt0hN2WlV0KTnfpBZRpyd3V1dqMM76TTx8PiVD9yagK7GQRbo7QwleseXlYLlK85KFwZeSk4Cb4i2N21G0hNwpRvUAlv1GXz7Z07fktnERq2Ms1rr+OBFDyCbRb1GH7LZdpOQ9YY+9vT0wHJsEoQqNEe5I90YC0hf1YbNVpne18JZaDSblxw+OQb2t4CDPaBBwNsdmxGxKSCZBLJ5iLWbYPkrvigdavdMPKsfwkbtwg3AUqTuwbYkL8gJGl5/7y79e0XR4m58Gq8PfOkIePQv4OjAng1nPjjJFCn5ZgM4PAR7/tRiAt7/IbC06vXbaZRRo1jOuWLDjsOyATptih54pqDeZT7L5LfMC8r0ycYSmIQGqD0Be/Uc+MsfCHgBmq5GmRoT9o0Sacjnvwf++0/PJgutqsYvXTGCiq9KXb0Pv93VDibfXcOk1B/8ky+B/zwkybYjbkai129//Rjsb58R2B6OKHuTM3X9E4Oq4tGODkKXstdX8QTy7LjboOhhYhKKVvvtVwT+C3jxaBBQ91K49uyIVvrAV89gxgy0r+VAZutZPAuEMFeiUIDqXl5nkjp+l8Y96jSwkkhjXApL3uwCj/9NkzeBvrG0T3sEozr/Jz9gdpQ+gbjO3AedD1PGiEp8go6RDhL8JEEvDP6rR3YY60ciNHNleuHT6Y6JmGl6Ks9DUtQdnsoMV8pWyquovccA57pBSVNdZfCIpIPvkH3vbvXvrSYV8nxQkuGqsYyGjt9gIakHk5moo/s6JdFR2iTJRVGhPb7j08GXS8BpBcMAOTMPqbBHQu+8UD6FOtmw1H0V9tq1eM8ipuKHQ9mpRCGvN2bGp4Mv7AGDrGcSw6KJvV04ivSb4fDmMqGflw+6O28Ikj5FFcogxyEdfKsxwiMRHFC1IKgd1DBXriJzWusb3ryu7mMKMxgL5vb+td/XHuew3RhrwaODH5qjT7aQMMweru/sedch23e8vO7mok0q9CTzk59ar0OOb/SYzwe9emLyPLbPrLW9A3AZRp073JMetzNm+CrvytIvbPBorYHOJDlasVPHqKSDj8eHPxESvqqvTAGuHOkw1TaxdHgUkqjaUztXtIM571ajgDuc+rS8rlDIM0d0fDr4/BxGkr4IHKFPIkx22zvb++DkmDj8eO67CwZEmEOAjZqL9O4r7qYrTPL8ozm+APh5e9V2XhR41dLhCVL1hnczHPAU5+ZXOLweqqODInX3TUJw1OoxvChgJNLBp2aBxRWMRF7eL4auc5yVCtl8Dyt7Behpa8DrQ4/1DGHXpyc75N97DEfH03j+LINnX+fx9OUM6u3hqq+Dl2XS9ffs5r7PiuhAG1IYp5G5js/usLa5D6NrwnN0rvqHmKDH+hATSMrVehybmxk8fnwFmxtZ1CoJWlkza7SNEaQfXtXNLwJvrQFbG/2f8rGMSQzpah0LxQMUl1cVCapqj8h29/l220ClMoViIYVmbcrqa1ilbX1Kz6n2sr4sEI/1n2gYvOT8B/eAKqWkpSImwKdHORZQizjHbbOKEq15ezAA6OruyTiQBJ3W4gQ4ieNDKpmZhl3L53qAYcqn2mQ4qAiszmEM8JKmqCz08afAw8+IAYf6PUvqjujd0qsYsMTtCR8ZAccHa8jm0siJFjEg6fDHB2wfbODtLifAM5aUayRlggyD+EUlAth5gCNxZp9rCkknT/eBlTz6LkH61/BmaGKf/AL4M5WkKuXR1DxQmfXEIdviNNR7bwFzs1bh822T9uaMlCZhGQJ7PY4y2e72zgxOj1PodWMWYCllzgUdmQWUcx+UuiBy2611fo3htCmQmWFjgpc0PQP89NfRGhBGbldzg4yQHymqd68BVzJ2Ck1tC2YbCdFFm8WtZ9sdjr2dFHZ30miRlDlldTESq+HsTNlSZU42qKs4V4ZUj11KKL/ZF/hojUVKf3jdXmrAjx8Asxm/zbNnaNi9WakkVf3Oqg3ce4YhTqaySKlotTqFr57k8Pkfr+Hp/+ZRPyWTY4ZV6bXBCU+tOffBeTm9804W8ZHt2yWOVjfaLEfbtEhSfez+z4F0doj6M+1gHW8sAVfzgUabrlLt4K9/WsHmM6r5k327lVnuALRVmEUC83MB/VydibxuUYGncHIW8JKyOdsEcleG9xXOjL5Pqr4S7C88cS1MC6xnipCR2S1OuGBV23Wl7qo8Z/4nCNzTBvhB5/kBi/TJ421XJR0nmMlG33d1ME6Guk4SX8hGCJxpfe+v7FjOjJJ+MO4DtRjiqLzLAJUpqqq777OuuXOuACzVaYOzJs4IXpJ0gj/5VbQGCOfr+gKwPNc/xih0Z6GCfKJmLV95CCTTJK05OkR4e1X6ClNMmtJGMTyXyXZpXSeYDzAgxu1wtpQf8UUC03GBD+e3LYlZkrek70uccR0sU1Q/GN4coYfckrzeoo2kjqlLf/It6mliwL1PnSjAbOC3l4khaUQPH0GO/t5dPKLHu5SwMF9qjujsn6n42sARcGy6FUFNKNV+VEHHbkkffnLwkqZph/STX9J6gNT8Jtl4Lq3MJEj9GEAhL9XEjdkDb8KWtOGA5rptqyEuBHzwSHhZFNqe/tnAS5Ia8PHPyLktjvGQIh5hZ28fze9SQiOsLM4FpfoA1+lZTyvMUKOC5gADJDEf1WTM99vODl6SQRqQvUkjx/2RIqm/A1zPl5BgHS/PNxTvrzm9gBa4rw1KPYoJciXdUPZdzwe8JIMys/wtmxFsQD81K7EbrG+Z+t+d21LCm2//ah4fld56oQ+DSYqk2T5PtVcpRiaQcxgwKikzvpvfJcfX89Wch4GGHg/Yvdo2jM4XvCSpAZIB8RRCuX8/cma7lKxjKVEeGNd5UOJiuKNzrVAeDcPvdf7gJVk+4AZpQgrR+hg9TSnpD/Mb2pJVAwy9RsKg94t6s1poln1mppTx8LpIMiC3TgxQTGAETXgnTRVeo+E7OR6tAV4qG3zdAPRZWkskLwS8JMsJ3nY0YDRKxTq4nd5GaPUGKAkQQiu4QeSWFRYzsIohLr1e8JKkBuTXbR8QIhWB763ez2wixgKOz7/t+wNgaGx3j7LLrWX9/usHL8liwG3HBIbLKZ9o4d3kC6s+p+brauqKgGYAOhM84M71zSWB1LQ+9sWAlyRNYO4OaUAfHxBovJd/gdV4AcGlqydttzfTjyGStj4jrCpakC4OvCSZB1gmQMviIUE5ETPxIP8FsrFTPa8f4NmjKE28vn+dCtIR9fuLBS8pTtXb+btUGFkY7LVIYmmjhd9k/oFFoxgGzvpLXTg7aLmkwINbAnPpaDYxu/Pl/Acj0ToBK7+khJtK472uXdm1qrvCrgT3bD9tGrN4YvwI35SSlJszr5DJA+DdPCBBC6RbtOX4vau6dw/Q2qWCt4mGlj8oaJ7QLkWVVh8t+zeAPG77hyTtHMsfGLKYVYXdOgL2qGupZv/OUXZ16/o5sqqVHO3S5BkS8aFG8V0APxnRhi99BO3q2IsiWTbkoyb1Nq1d+v+umpSszUlS6akzILh4h/cdom8ByGkyQYb+pMQAAAAASUVORK5CYII="
       alt="" style="width: 3rem;"><span style="font-weight: 500; opacity: 0.7;" class="text-nothing">خدمتی
       در این دسته بندی وجود
       ندارد.</span></div>
    </div>
   </div>
  </div>
  <div id="azmayeshgah" class="d-none">
   <div class="content-current-chooser w-100  position-relative">
    <div class="w-100">
     <form action="" method="post" class="w-100">
      <div class="w-100">
       <input type="text" placeholder="نام یا کد آزمایش . . ." class="my-form-control-light w-100">
      </div>
      <div class="d-flex w-100 position-relative mt-4 w-100 flex-wrap justify-content-start gap-4">
       <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 mt-xs-3">
        <label for="" class="label-top-input-content-noskhe">تعداد </label>
        <input type="number" class="form-control h-50 position-relative" min="0">
       </div>
      </div>
      <div class="mt-3 position-relative">
       <label for="" class="label-top-input-content-noskhe"> توضیحات </label>
       <textarea name="" id="desc-textarea" class="form-control border-radius-6" cols="3" rows="1"
        placeholder="توضیحات"> 
        </textarea>
       <script>
        document.getElementById("desc-textarea").addEventListener("focus", function() {
         this.value = this.value.trim();
        });
       </script>
      </div>
      <div class="mt-3 d-flex justify-content-end">
       <button class="btn btn-primary h-50">افزودن</button>
      </div>
     </form>
    </div>
   </div>
   <div class="lists-of mt-4 w-100">
    <div class="table-responsive">
     <table class="table table-striped table-hover">
      <thead>
       <tr>
        <th>نام آزمایش</th>
        <th>تعداد</th>
        <th>
         <button class="btn btn-light">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
           data-tip="true" data-for="deleteAll" currentItem="false">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.4062 2.25C10.418 2.25 10.4297 2.25001 10.4415 2.25001H13.5585L13.5938 2.25C13.9112 2.24996 14.2092 2.24993 14.459 2.27844C14.7371 2.3102 15.0296 2.38362 15.3025 2.58033C15.5754 2.77705 15.7375 3.03125 15.8556 3.28509C15.9617 3.51301 16.0559 3.79577 16.1562 4.09691L16.1674 4.13038L16.5406 5.25001H19H21C21.4142 5.25001 21.75 5.58579 21.75 6.00001C21.75 6.41422 21.4142 6.75001 21 6.75001H19.7017L19.1217 15.449L19.1182 15.5016C19.0327 16.7844 18.9637 17.8205 18.8017 18.6336C18.6333 19.4789 18.3469 20.185 17.7553 20.7384C17.1637 21.2919 16.4401 21.5307 15.5855 21.6425C14.7634 21.75 13.725 21.75 12.4394 21.75H12.3867H11.6133H11.5606C10.275 21.75 9.23655 21.75 8.41451 21.6425C7.55986 21.5307 6.83631 21.2919 6.24472 20.7384C5.65312 20.185 5.3667 19.4789 5.19831 18.6336C5.03633 17.8205 4.96727 16.7844 4.88178 15.5016L4.87827 15.449L4.29834 6.75001H3C2.58579 6.75001 2.25 6.41422 2.25 6.00001C2.25 5.58579 2.58579 5.25001 3 5.25001H5H7.45943L7.83264 4.13038C7.83637 4.11919 7.84009 4.10802 7.8438 4.09688C7.94414 3.79576 8.03835 3.513 8.14438 3.28509C8.26246 3.03125 8.42459 2.77705 8.69752 2.58033C8.97045 2.38362 9.26287 2.3102 9.54102 2.27844C9.79077 2.24993 10.0888 2.24996 10.4062 2.25ZM9.04057 5.25001H14.9594L14.7443 4.60472C14.6289 4.25832 14.5611 4.05863 14.4956 3.91778C14.466 3.85424 14.4457 3.82282 14.4348 3.80824C14.4298 3.8015 14.427 3.79862 14.4264 3.79802L14.4254 3.7972L14.4243 3.79655C14.4236 3.79616 14.42 3.79439 14.412 3.79175C14.3947 3.78604 14.3585 3.77671 14.2888 3.76876C14.1345 3.75114 13.9236 3.75001 13.5585 3.75001H10.4415C10.0764 3.75001 9.86551 3.75114 9.71117 3.76876C9.64154 3.77671 9.60531 3.78604 9.58804 3.79175C9.58005 3.79439 9.57643 3.79616 9.57566 3.79655L9.57458 3.7972L9.57363 3.79802C9.57302 3.79862 9.57019 3.8015 9.56516 3.80824C9.55428 3.82282 9.53397 3.85424 9.50441 3.91778C9.43889 4.05863 9.37113 4.25832 9.25566 4.60472L9.04057 5.25001ZM5.80166 6.75001L6.37495 15.3492C6.4648 16.6971 6.52883 17.6349 6.6694 18.3405C6.80575 19.025 6.99608 19.3873 7.2695 19.6431C7.54291 19.8989 7.91707 20.0647 8.60907 20.1552C9.32247 20.2485 10.2625 20.25 11.6133 20.25H12.3867C13.7375 20.25 14.6775 20.2485 15.3909 20.1552C16.0829 20.0647 16.4571 19.8989 16.7305 19.6431C17.0039 19.3873 17.1943 19.025 17.3306 18.3405C17.4712 17.6349 17.5352 16.6971 17.6251 15.3492L18.1983 6.75001H16H8H5.80166Z"
            fill="#EB5757"></path>
           <path d="M10.1934 11.4708L13.8061 15.0836" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
           <path d="M13.8066 11.4708L10.1939 15.0836" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
          </svg>
         </button>
        </th>
       </tr>
      </thead>
      <tbody>
      </tbody>
     </table>
     <div style="display: flex; gap: 1rem; justify-content: center; align-items: center;"><img
       src="data:image/png;base64,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"
       alt="" style="width: 3rem;"><span style="font-weight: 500; opacity: 0.7;" class="text-nothing">خدمتی
       در این دسته بندی وجود
       ندارد.</span></div>
    </div>
   </div>
  </div>
  <div id="tasvir-bardary" class="d-none">
   <div class="content-current-chooser w-100  position-relative">
    <div class="w-100">
     <div class="mt-3 d-flex justify-content-start gap-8 flex-wrap">
      <button class="btn btn-outline-primary">رادیولوژي</button>
      <button class="btn btn-outline-primary">سونوگرافی</button>
      <button class="btn btn-outline-primary">سی تی اسکن</button>
      <button class="btn btn-outline-primary">ام آر آی</button>
     </div>
     <form action="" method="post" class="w-100">
      <div class="w-100 mt-3">
       <input type="text" placeholder="نام یا کد خدمت رادیولوژی . . ." class="my-form-control-light w-100">
      </div>
      <div class="d-flex w-100 position-relative mt-4 w-100 flex-wrap justify-content-start gap-4">
       <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 mt-xs-3">
        <label for="" class="label-top-input-content-noskhe">تعداد </label>
        <input type="number" class="form-control h-50 position-relative" min="0">
       </div>
      </div>
      <div class="mt-3 position-relative">
       <label for="" class="label-top-input-content-noskhe"> توضیحات </label>
       <textarea name="" id="desc-textarea" class="form-control border-radius-6" cols="3" rows="1"
        placeholder="توضیحات"> 
        </textarea>
       <script>
        document.getElementById("desc-textarea").addEventListener("focus", function() {
         this.value = this.value.trim();
        });
       </script>
      </div>
      <div class="mt-3 d-flex justify-content-end">
       <button class="btn btn-primary h-50">افزودن</button>
      </div>
     </form>
    </div>
   </div>
   <div class="lists-of mt-4 w-100">
    <div class="table-responsive">
     <table class="table table-striped table-hover">
      <thead>
       <tr>
        <th>نام خدمت تصویر برداری</th>
        <th>تعداد</th>
        <th>
         <button class="btn btn-light">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
           data-tip="true" data-for="deleteAll" currentItem="false">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.4062 2.25C10.418 2.25 10.4297 2.25001 10.4415 2.25001H13.5585L13.5938 2.25C13.9112 2.24996 14.2092 2.24993 14.459 2.27844C14.7371 2.3102 15.0296 2.38362 15.3025 2.58033C15.5754 2.77705 15.7375 3.03125 15.8556 3.28509C15.9617 3.51301 16.0559 3.79577 16.1562 4.09691L16.1674 4.13038L16.5406 5.25001H19H21C21.4142 5.25001 21.75 5.58579 21.75 6.00001C21.75 6.41422 21.4142 6.75001 21 6.75001H19.7017L19.1217 15.449L19.1182 15.5016C19.0327 16.7844 18.9637 17.8205 18.8017 18.6336C18.6333 19.4789 18.3469 20.185 17.7553 20.7384C17.1637 21.2919 16.4401 21.5307 15.5855 21.6425C14.7634 21.75 13.725 21.75 12.4394 21.75H12.3867H11.6133H11.5606C10.275 21.75 9.23655 21.75 8.41451 21.6425C7.55986 21.5307 6.83631 21.2919 6.24472 20.7384C5.65312 20.185 5.3667 19.4789 5.19831 18.6336C5.03633 17.8205 4.96727 16.7844 4.88178 15.5016L4.87827 15.449L4.29834 6.75001H3C2.58579 6.75001 2.25 6.41422 2.25 6.00001C2.25 5.58579 2.58579 5.25001 3 5.25001H5H7.45943L7.83264 4.13038C7.83637 4.11919 7.84009 4.10802 7.8438 4.09688C7.94414 3.79576 8.03835 3.513 8.14438 3.28509C8.26246 3.03125 8.42459 2.77705 8.69752 2.58033C8.97045 2.38362 9.26287 2.3102 9.54102 2.27844C9.79077 2.24993 10.0888 2.24996 10.4062 2.25ZM9.04057 5.25001H14.9594L14.7443 4.60472C14.6289 4.25832 14.5611 4.05863 14.4956 3.91778C14.466 3.85424 14.4457 3.82282 14.4348 3.80824C14.4298 3.8015 14.427 3.79862 14.4264 3.79802L14.4254 3.7972L14.4243 3.79655C14.4236 3.79616 14.42 3.79439 14.412 3.79175C14.3947 3.78604 14.3585 3.77671 14.2888 3.76876C14.1345 3.75114 13.9236 3.75001 13.5585 3.75001H10.4415C10.0764 3.75001 9.86551 3.75114 9.71117 3.76876C9.64154 3.77671 9.60531 3.78604 9.58804 3.79175C9.58005 3.79439 9.57643 3.79616 9.57566 3.79655L9.57458 3.7972L9.57363 3.79802C9.57302 3.79862 9.57019 3.8015 9.56516 3.80824C9.55428 3.82282 9.53397 3.85424 9.50441 3.91778C9.43889 4.05863 9.37113 4.25832 9.25566 4.60472L9.04057 5.25001ZM5.80166 6.75001L6.37495 15.3492C6.4648 16.6971 6.52883 17.6349 6.6694 18.3405C6.80575 19.025 6.99608 19.3873 7.2695 19.6431C7.54291 19.8989 7.91707 20.0647 8.60907 20.1552C9.32247 20.2485 10.2625 20.25 11.6133 20.25H12.3867C13.7375 20.25 14.6775 20.2485 15.3909 20.1552C16.0829 20.0647 16.4571 19.8989 16.7305 19.6431C17.0039 19.3873 17.1943 19.025 17.3306 18.3405C17.4712 17.6349 17.5352 16.6971 17.6251 15.3492L18.1983 6.75001H16H8H5.80166Z"
            fill="#EB5757"></path>
           <path d="M10.1934 11.4708L13.8061 15.0836" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
           <path d="M13.8066 11.4708L10.1939 15.0836" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
          </svg>
         </button>
        </th>
       </tr>
      </thead>
      <tbody>
      </tbody>
     </table>
     <div style="display: flex; gap: 1rem; justify-content: center; align-items: center;"><img
       src="data:image/png;base64,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"
       alt="" style="width: 3rem;"><span style="font-weight: 500; opacity: 0.7;" class="text-nothing">خدمتی
       در این دسته بندی وجود
       ندارد.</span></div>
    </div>
   </div>
  </div>
  <div id="paraclinic" class="d-none">
   <div class="content-current-chooser w-100  position-relative">
    <div class="w-100">
     <form action="" method="post" class="w-100">
      <div class="w-100">
       <input type="text" placeholder="نام یا کد خدمت فیزیوتراپی , خدمات پزشکی . . ."
        class="my-form-control-light w-100">
      </div>
      <div class="d-flex w-100 position-relative mt-4 w-100 flex-wrap justify-content-start gap-4">
       <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 mt-xs-3">
        <label for="" class="label-top-input-content-noskhe">تعداد </label>
        <input type="number" class="form-control h-50 position-relative" min="0">
       </div>
      </div>
      <div class="mt-3 position-relative">
       <label for="" class="label-top-input-content-noskhe"> توضیحات </label>
       <textarea name="" id="desc-textarea" class="form-control border-radius-6" cols="3" rows="1"
        placeholder="توضیحات"> 
        </textarea>
       <script>
        document.getElementById("desc-textarea").addEventListener("focus", function() {
         this.value = this.value.trim();
        });
       </script>
      </div>
      <div class="mt-3 d-flex justify-content-end">
       <button class="btn btn-primary h-50">افزودن</button>
      </div>
     </form>
    </div>
   </div>
   <div class="lists-of mt-4 w-100">
    <div class="table-responsive">
     <table class="table table-striped table-hover">
      <thead>
       <tr>
        <th>نام پاراکلینیک</th>
        <th>تعداد</th>
        <th>
         <button class="btn btn-light">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
           data-tip="true" data-for="deleteAll" currentItem="false">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.4062 2.25C10.418 2.25 10.4297 2.25001 10.4415 2.25001H13.5585L13.5938 2.25C13.9112 2.24996 14.2092 2.24993 14.459 2.27844C14.7371 2.3102 15.0296 2.38362 15.3025 2.58033C15.5754 2.77705 15.7375 3.03125 15.8556 3.28509C15.9617 3.51301 16.0559 3.79577 16.1562 4.09691L16.1674 4.13038L16.5406 5.25001H19H21C21.4142 5.25001 21.75 5.58579 21.75 6.00001C21.75 6.41422 21.4142 6.75001 21 6.75001H19.7017L19.1217 15.449L19.1182 15.5016C19.0327 16.7844 18.9637 17.8205 18.8017 18.6336C18.6333 19.4789 18.3469 20.185 17.7553 20.7384C17.1637 21.2919 16.4401 21.5307 15.5855 21.6425C14.7634 21.75 13.725 21.75 12.4394 21.75H12.3867H11.6133H11.5606C10.275 21.75 9.23655 21.75 8.41451 21.6425C7.55986 21.5307 6.83631 21.2919 6.24472 20.7384C5.65312 20.185 5.3667 19.4789 5.19831 18.6336C5.03633 17.8205 4.96727 16.7844 4.88178 15.5016L4.87827 15.449L4.29834 6.75001H3C2.58579 6.75001 2.25 6.41422 2.25 6.00001C2.25 5.58579 2.58579 5.25001 3 5.25001H5H7.45943L7.83264 4.13038C7.83637 4.11919 7.84009 4.10802 7.8438 4.09688C7.94414 3.79576 8.03835 3.513 8.14438 3.28509C8.26246 3.03125 8.42459 2.77705 8.69752 2.58033C8.97045 2.38362 9.26287 2.3102 9.54102 2.27844C9.79077 2.24993 10.0888 2.24996 10.4062 2.25ZM9.04057 5.25001H14.9594L14.7443 4.60472C14.6289 4.25832 14.5611 4.05863 14.4956 3.91778C14.466 3.85424 14.4457 3.82282 14.4348 3.80824C14.4298 3.8015 14.427 3.79862 14.4264 3.79802L14.4254 3.7972L14.4243 3.79655C14.4236 3.79616 14.42 3.79439 14.412 3.79175C14.3947 3.78604 14.3585 3.77671 14.2888 3.76876C14.1345 3.75114 13.9236 3.75001 13.5585 3.75001H10.4415C10.0764 3.75001 9.86551 3.75114 9.71117 3.76876C9.64154 3.77671 9.60531 3.78604 9.58804 3.79175C9.58005 3.79439 9.57643 3.79616 9.57566 3.79655L9.57458 3.7972L9.57363 3.79802C9.57302 3.79862 9.57019 3.8015 9.56516 3.80824C9.55428 3.82282 9.53397 3.85424 9.50441 3.91778C9.43889 4.05863 9.37113 4.25832 9.25566 4.60472L9.04057 5.25001ZM5.80166 6.75001L6.37495 15.3492C6.4648 16.6971 6.52883 17.6349 6.6694 18.3405C6.80575 19.025 6.99608 19.3873 7.2695 19.6431C7.54291 19.8989 7.91707 20.0647 8.60907 20.1552C9.32247 20.2485 10.2625 20.25 11.6133 20.25H12.3867C13.7375 20.25 14.6775 20.2485 15.3909 20.1552C16.0829 20.0647 16.4571 19.8989 16.7305 19.6431C17.0039 19.3873 17.1943 19.025 17.3306 18.3405C17.4712 17.6349 17.5352 16.6971 17.6251 15.3492L18.1983 6.75001H16H8H5.80166Z"
            fill="#EB5757"></path>
           <path d="M10.1934 11.4708L13.8061 15.0836" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
           <path d="M13.8066 11.4708L10.1939 15.0836" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
          </svg>
         </button>
        </th>
       </tr>
      </thead>
      <tbody>
      </tbody>
     </table>
     <div style="display: flex; gap: 1rem; justify-content: center; align-items: center;">
      <img
       src="data:image/png;base64,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"
       alt="" style="width: 3rem;"><span style="font-weight: 500; opacity: 0.7;" class="text-nothing">خدمتی
       در این دسته بندی وجود
       ندارد.</span>
     </div>
    </div>
   </div>
  </div>
  <div>
  </div>
 </div>
</div>
@endsection
@section('scripts')
<script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/noskhe-electronic/prescription/prescription.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/noskhe-electronic/providers/providers.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/noskhe-electronic/favorite/templates/index.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/noskhe-electronic/favorite/templates/create.js') }}"></script>
<script>
 var appointmentsSearchUrl = "{{ route('search.appointments') }}";
 var updateStatusAppointmentUrl =
  "{{ route('updateStatusAppointment', ':id') }}";
</script>
<script>
 function toggleDetails() {
  const details = document.getElementById('details');
  const icon = document.getElementById('toggle-icon');

  // Toggle display of details
  if (details.style.display === "none") {
   details.style.display = "block";
   icon.style.transform = "rotate(-90deg)"; // Rotate icon
  } else {
   details.style.display = "none";
   icon.style.transform = "rotate(90deg)"; // Reset icon rotation
  }
 }
</script>
@endsection
