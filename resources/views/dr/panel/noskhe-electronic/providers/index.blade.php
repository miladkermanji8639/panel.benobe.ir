@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/prescription/prescription.css') }}"
  rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/noskhe-electronic/providers/providers.css') }}"
  rel="stylesheet" />

@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 @section('bread-crumb-title','بیمه های من')


 <div class="container">
 
  <div class="providers-content-option mt-4 d-flex justify-content-center align-content-center flex-column">
     <div class="top-providers-content d-flex justify-content-center mt-4 w-100">
   <div class="alert bg-light-blue w-100">
    <p>برای احراز هویت نسخه نویسی، کافیست یکبار برای همیشه اطلاعات مربوط به احراز هویت بیمه سلامت و تامین اجتماعی خود را
     وارد کنید.</p>
    <p>- اطلاعات کاربری تامین اجتماعی برای مرکز درمانی و مطب شخصی یکسان می باشد و با ورود کد نظام، کد ملی و شماره موبایل
     ثبت شده در سامانه تامین اجتماعی، احراز هویت کنید.</p>
    <p>- نام کاربری و رمز عبور شما در مطب و هر مرکز درمانی برای بیمه سلامت متفاوت است که آن را می توانید از سازمان بیمه
     سلامت دریافت کنید.</p>
    <p>- ممکن است برای احراز هویت بیمه سلامت رمز عبور دو مرحله ای داشته باشید که هر 24 ساعت یکبار، می بایست موقع نسخه
     نویسی، کد 5 رقمی پیامک شده را وارد کنید.</p>
   </div>
  </div>
   <div class="providers-cards d-flex gap-20 flex-xs-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap justify-content-center">
    <div class="provider-card provider-bime-details-card col-xs-12 col-sm-12 col-md-6 col-lg-6">
     <div class="providerItem_header p-3">
      <div class="providerItem_provider-name__mnYrO" id="taminPorviderItem">
       <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
         d="M9.92219 0.0539429C10.7247 -0.0880245 11.5821 0.0489741 12.2672 0.479845C13.7361 1.48498 15.1649 2.53837 16.6272 3.5577C17.7573 4.31368 18.8325 5.13993 19.9418 5.92359C20.505 6.32819 20.9077 6.95498 20.9664 7.63146C21.0028 8.03535 20.9902 8.44067 20.9961 8.84528C20.9828 10.5489 21.0095 12.2525 20.9961 13.9561C20.9895 14.678 20.5964 15.3637 20.0198 15.8173C19.4113 16.3071 18.7567 16.7401 18.1244 17.2022C16.9014 18.1165 15.6501 18.996 14.4457 19.9322C13.8186 20.3986 13.1736 20.8422 12.5569 21.3214C12.1854 21.6209 11.7277 21.7956 11.2663 21.9212C10.7993 22.0248 10.3138 22.0263 9.84614 21.9255C9.37846 21.8247 8.94066 21.6242 8.56544 21.3391C7.0051 20.2268 5.42173 19.1386 3.88442 18.0029C3.0136 17.3924 2.14947 16.7742 1.27123 16.1729C0.885598 15.889 0.498485 15.5674 0.285982 15.1373C0.0177519 14.6468 -0.0112257 14.0761 0.00289167 13.5338C0.00883582 11.7592 0.00289167 9.98457 0.00289167 8.20998C0.0333554 7.80324 0.0578727 7.37946 0.265175 7.01319C0.460573 6.61294 0.76204 6.26842 1.13971 6.01374C2.81819 4.79921 4.49072 3.57687 6.19224 2.39357C6.93526 1.85054 7.69016 1.31816 8.43095 0.770878C8.8578 0.41682 9.37205 0.17252 9.92516 0.0610407L9.92219 0.0539429ZM10.2967 2.28354C10.0039 2.33607 9.7513 2.49649 9.51353 2.66401C7.20126 4.30327 4.89592 5.95387 2.59751 7.61584C1.74081 8.24192 1.06466 9.1356 0.866279 10.162C0.701329 11.072 0.770428 12.0495 1.22664 12.8779C1.59815 13.6189 2.23715 14.1925 2.9289 14.6596C3.8012 15.2665 4.66311 15.8869 5.52947 16.5016C6.90851 17.4471 8.24297 18.4508 9.61012 19.4119C9.88875 19.6078 10.2112 19.7888 10.5716 19.7541C10.978 19.7633 11.3146 19.5106 11.6118 19.2834C12.4938 18.6339 13.3861 17.9972 14.2666 17.3449C15.1865 16.6301 16.1472 15.9642 17.0998 15.2906C17.9765 14.6297 18.9803 14.0491 19.5606 13.1064C20.1062 12.2601 20.3145 11.2545 20.1476 10.2735C19.9604 9.08378 19.1884 8.01335 18.1496 7.34823C17.2498 6.69021 16.3062 6.08756 15.4168 5.41605C14.0794 4.42228 12.7093 3.45832 11.3406 2.50004C11.1915 2.39858 11.0227 2.32643 10.8441 2.2878C10.6656 2.24918 10.4807 2.24483 10.3004 2.27502L10.2967 2.28354ZM4.95065 7.38017C6.15508 5.70141 8.20136 4.57277 10.3442 4.52663C11.8463 4.47095 13.3225 4.9114 14.5244 5.77381C15.7031 6.62899 16.5627 7.8235 16.9764 9.18103C17.3739 10.5737 17.3004 12.1027 16.6903 13.4301C16.0996 14.7845 15.0356 15.9571 13.67 16.6421C13.158 16.887 12.6297 17.1184 12.0606 17.21C12.0606 15.8201 12.0985 14.4253 12.0948 13.0333C12.0903 12.7167 12.1089 12.354 12.3623 12.1198C12.6595 11.8649 13.0882 11.8309 13.4627 11.9025C13.7911 11.9629 14.0764 12.2227 14.1069 12.5485C14.1388 13.1228 14.0905 13.6984 14.1195 14.2727C14.9748 13.4059 15.4684 12.27 15.5073 11.0794C15.5461 9.88874 15.1276 8.72569 14.3305 7.80963C13.8604 7.27893 13.2716 6.85574 12.6075 6.57122C11.9435 6.28671 11.2211 6.14811 10.4936 6.16564C8.86711 6.12944 7.2867 6.9777 6.38616 8.25611C5.78148 9.09711 5.47354 10.1005 5.50717 11.1203C5.54102 12.3202 6.05254 13.4625 6.93748 14.3146C6.97017 13.7744 6.93748 13.2328 6.962 12.6926C6.99767 12.4044 7.18491 12.1091 7.48212 12.0097C7.69567 11.9202 7.93088 11.8885 8.16203 11.918C8.39319 11.9475 8.6114 12.0372 8.7928 12.1773C8.98004 12.3355 8.97781 12.5961 8.98227 12.8161C8.97558 14.2862 8.95998 15.7555 8.95181 17.2249C7.48831 16.9039 6.18248 16.1172 5.2486 14.9939C3.47279 12.8644 3.3279 9.63107 4.95139 7.3823L4.95065 7.38017ZM10.157 8.11769C10.7603 7.91681 11.4944 8.22985 11.7262 8.8034C11.9581 9.30028 11.7671 9.93914 11.3064 10.26C10.9104 10.5517 10.3331 10.5688 9.8999 10.3416C9.67297 10.212 9.49297 10.0192 9.38406 9.789C9.27515 9.55884 9.24255 9.30235 9.29063 9.05397C9.32886 8.8361 9.43033 8.63284 9.58348 8.46733C9.73664 8.30181 9.93534 8.18068 10.157 8.11769ZM7.77412 9.52601C8.30018 9.40534 8.90426 9.70915 9.06846 10.2082C9.25719 10.7476 8.95552 11.4099 8.37448 11.5853C7.73623 11.8309 6.97166 11.334 6.91817 10.6923C6.82678 10.1656 7.24361 9.64455 7.77412 9.52601ZM12.7523 9.50756C13.3921 9.28964 14.1819 9.74038 14.1901 10.4098C14.2852 11.0294 13.6967 11.6527 13.0369 11.5831C12.3467 11.5682 11.834 10.8491 12.0279 10.2245C12.081 10.0589 12.1743 9.90771 12.3002 9.78312C12.4261 9.65854 12.581 9.56412 12.7523 9.50756ZM9.43328 11.7535C9.37384 11.1743 10.0136 10.7491 10.5716 10.7895C10.7426 10.7889 10.912 10.821 11.0699 10.8839C11.2277 10.9469 11.3708 11.0393 11.4907 11.1558C11.6393 11.2914 11.6512 11.4994 11.6534 11.6839C11.6497 13.5636 11.6326 15.4461 11.6215 17.3229C10.8876 17.433 10.1405 17.4356 9.40579 17.3307C9.41966 15.4718 9.42883 13.6128 9.43328 11.7535Z"
         fill="#3F3F79"></path>
       </svg><span class="mx-1 font-weight-bold text-dark">بیمه تامین اجتماعی</span>
      </div>
     </div>
     <div aria-hidden="true" class="d-flex align-items-center justify-content-between  w-100 p-3">
      <div>
       <div>
        <span class="font-weight-bold">یاسر محمدی</span>
        <svg class="providerItem_center"data-toggle="modal" data-target="#exampleModalCenterAddSick" width="16"
         height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.5308 4.02608C11.7901 3.76669 12.2107 3.7667 12.4701 4.02609C12.7294 4.28547 12.7294 4.706 12.4701 4.96538L12.0076 5.42782C11.5077 5.39169 11.1044 4.98848 11.0683 4.48855L11.5308 4.02608ZM9.89609 5.66072L5.43088 10.1259C4.62411 10.9326 4.32353 11.2421 4.11738 11.6061C3.9618 11.8809 3.8606 12.1858 3.70134 12.7947C4.31025 12.6355 4.61515 12.5343 4.88995 12.3787C5.25403 12.1726 5.56344 11.872 6.3702 11.0652L10.8354 6.60002C10.4453 6.37627 10.1199 6.05086 9.89609 5.66072ZM13.5307 2.96545C12.6856 2.12026 11.3153 2.12024 10.4701 2.96541L4.37023 9.06522L4.29668 9.13874C3.58832 9.84682 3.13084 10.3041 2.81208 10.8671C2.49333 11.4301 2.33657 12.0576 2.09384 13.0294L2.06863 13.1302L1.9394 13.6472C1.87551 13.9028 1.95039 14.1731 2.13668 14.3594C2.32296 14.5457 2.59333 14.6206 2.84891 14.5567L3.36586 14.4275L3.46675 14.4022C4.43846 14.1595 5.06602 14.0028 5.629 13.684C6.19197 13.3653 6.64926 12.9078 7.35733 12.1994L7.35734 12.1994L7.43086 12.1259L13.5307 6.02604C14.3759 5.18088 14.3759 3.81062 13.5307 2.96545Z"
          fill="#27BDA0"></path>
        </svg>
       </div>
       <span class="mt-2 font-size-13">احراز هویت تامین اجتماعی</span>
      </div>
      <div class=""><span class="chips_text-success">احراز هویت شده</span></div>
     </div>

    </div>
    <div class="modal fade " id="exampleModalCenterAddSick" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered " role="document">
      <div class="modal-content border-radius-8">
       <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> ویرایش </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
        </button>
       </div>
       <div class="modal-body">
        <div class="drop-bime">
         <form>
          <div>
           <div class="position-relative">
            <label class="label-top-input-special">
             کد نظام پزشکی
            </label>
            <input class="form-control h-50 w-100 position-relative" label="کد نظام پزشکی" name="docId" value="ف-5795">
           </div>
           <div class="d-flex mt-3 gap-4">
            <div class="w-100 position-relative">
             <label class="label-top-input-special">
              کدملی</label>
             <input class="form-control h-50 w-100 position-relative" label="کدملی" name="nationalCode"
              value="3720574245">
            </div>
            <div class="w-100 position-relative">
             <label class="label-top-input-special">
              شماره موبایل</label>
             <input class="form-control h-50 w-100 position-relative" label="شماره موبایل" name="mobileNo"
              value="09180607211">
            </div>
           </div>
          </div>
          <div class="d-flex w-100 justify-content-center mt-3">
           <div class="w-100">
            <button class="btn btn-primary h-50 w-100" type="submit">
             <span class="button_text__51wVM">ثبت</span>
            </button>
           </div>
          </div>
         </form>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="provider-card provider-benobe-details-card col-xs-12 col-sm-12 col-md-6 col-lg-6">
     <div class="providerItem_header p-3">
      <div class="providerItem_provider-name__mnYrO" id="taminPorviderItem">
       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
         d="M3.26139 9.40498L2.07484 8.20548V2.12617H8.19563L12.8316 6.82877H15.2242V9.26867L16.7738 10.7953L18.2327 9.40498L17.286 8.44401L17.3055 4.81143H13.6615L9.07743 0.0883789H0V9.00287L1.86736 10.7817L3.26139 9.40498Z"
         fill="#3F3F79"></path>
        <path fill-rule="evenodd" clip-rule="evenodd"
         d="M18.7193 12.6629L19.8734 13.8011V19.8804H13.7591L9.12313 15.171H6.73058V12.7379L5.20686 11.2385L3.77393 12.6561L4.66222 13.5557L4.64925 17.1952H8.28671L12.8773 21.9182H21.9547V13.0037L20.1328 11.2726L18.7193 12.6629Z"
         fill="#3F3F79"></path>
        <path fill-rule="evenodd" clip-rule="evenodd"
         d="M9.37699 18.7762L8.24879 19.9076L2.08262 19.9144L2.06965 13.7601L6.82234 9.25515L6.7964 6.76754L9.30566 6.7948L10.7451 5.26135L9.31863 3.84375L8.43682 4.76382L4.76046 4.72975V8.41004L0.0791016 12.9695V21.9999L9.11115 21.9522L10.7386 20.187L9.37699 18.7762Z"
         fill="#3F3F79"></path>
        <path fill-rule="evenodd" clip-rule="evenodd"
         d="M12.6957 3.21685L13.8239 2.0855L19.9901 2.07869L20.0095 8.23978L15.2568 12.7379L15.2763 15.2255L12.7735 15.1983L11.3341 16.7317L12.767 18.1425L13.6423 17.2292L17.3122 17.2633V13.5898L21.9936 9.03036L22.0001 0L12.9615 0.0477076L11.2952 1.84696L12.6957 3.21685Z"
         fill="#3F3F79"></path>
        <path fill-rule="evenodd" clip-rule="evenodd"
         d="M11.7104 9.03724C12.0994 8.81234 12.6311 9.07132 12.8775 9.39846C13.4156 10.1209 13.4027 11.4703 12.5727 12.4313C12.2745 12.7652 11.9438 12.9561 11.4575 12.7925C11.2111 12.7107 11.0555 12.7107 10.8545 12.7789C10.4655 12.922 10.1413 12.9356 9.75224 12.6153C8.91581 11.8384 8.70833 10.6797 9.05198 9.76649C9.18165 9.43253 9.40859 9.20081 9.63553 9.09176C10.4136 8.71692 10.861 9.52113 11.7104 9.03724Z"
         fill="#3F3F79"></path>
        <path fill-rule="evenodd" clip-rule="evenodd"
         d="M11.0626 9.037C10.9394 8.34865 11.3738 7.64667 12.0417 7.62622C12.1065 8.34865 11.8601 8.90069 11.0626 9.037Z"
         fill="#3F3F79"></path>
        <path fill-rule="evenodd" clip-rule="evenodd"
         d="M11.1532 13.7533C11.4644 13.358 11.4385 13.2831 11.8794 13.1059C12.3073 12.9491 12.4694 13.2149 12.9168 12.6697C13.053 12.5061 13.1567 12.3766 13.2864 12.2335C13.5717 11.995 13.7662 12.1858 13.5522 12.4789C13.2929 12.806 13.0335 13.1331 12.7742 13.4535C12.6445 13.6307 12.7612 13.6647 12.8779 13.5284C13.2151 13.1604 13.5198 12.806 13.8116 12.3834C13.9024 12.1313 13.8246 11.9882 13.4809 11.9813C13.5133 11.6678 13.5522 11.3202 13.5846 10.9999C13.5911 10.8432 13.8051 10.8159 13.8246 11.0681C13.8699 11.0476 13.9218 11.0476 13.9866 11.0749C13.9866 11.3884 14.0061 11.6883 14.0126 12.0018C14.0126 12.288 13.9931 12.4925 13.9024 12.6765C13.7208 13.0377 13.4939 13.2967 13.2345 13.5557C12.5861 14.2781 10.7966 14.7688 9.57761 14.0191C9.00055 13.6715 8.46887 13.174 8.20951 12.5606C8.11225 12.179 8.20951 11.586 8.19006 11.0953C8.24193 11.034 8.31325 11.0476 8.37809 11.0613C8.42348 10.7818 8.60503 10.8364 8.61151 11.0476C8.63745 11.4088 8.66987 11.6678 8.6958 12.0359C8.46238 11.9813 8.26138 11.9882 8.39755 12.3834C8.63096 12.7651 8.90977 13.0991 9.24693 13.4671C9.55168 13.7601 9.60355 13.6579 9.35716 13.3444C9.11077 13.0445 8.88384 12.7447 8.63096 12.4516C8.417 12.1585 8.6958 12.0359 8.89032 12.2676C8.99406 12.3766 9.10429 12.4925 9.20803 12.6015C9.65542 13.0582 9.68784 13.0105 10.2455 13.0922C10.7577 13.2013 10.8744 13.5284 11.1532 13.7533Z"
         fill="#3F3F79"></path>
       </svg>
       <span class="mx-1 font-weight-bold text-dark">بیمه سلامت</span>
      </div>
     </div>
     <div aria-hidden="true" class="d-flex align-items-center justify-content-between  w-100 p-3 ">
      <div>
       <div>
        <span class="font-weight-bold"> ویزیت آنلاین به نوبه</span>
        <svg class="providerItem_centerInfo" data-toggle="modal" data-target="#exampleModalCenterEdit" width="16"
         height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.5308 4.02608C11.7901 3.76669 12.2107 3.7667 12.4701 4.02609C12.7294 4.28547 12.7294 4.706 12.4701 4.96538L12.0076 5.42782C11.5077 5.39169 11.1044 4.98848 11.0683 4.48855L11.5308 4.02608ZM9.89609 5.66072L5.43088 10.1259C4.62411 10.9326 4.32353 11.2421 4.11738 11.6061C3.9618 11.8809 3.8606 12.1858 3.70134 12.7947C4.31025 12.6355 4.61515 12.5343 4.88995 12.3787C5.25403 12.1726 5.56344 11.872 6.3702 11.0652L10.8354 6.60002C10.4453 6.37627 10.1199 6.05086 9.89609 5.66072ZM13.5307 2.96545C12.6856 2.12026 11.3153 2.12024 10.4701 2.96541L4.37023 9.06522L4.29668 9.13874C3.58832 9.84682 3.13084 10.3041 2.81208 10.8671C2.49333 11.4301 2.33657 12.0576 2.09384 13.0294L2.06863 13.1302L1.9394 13.6472C1.87551 13.9028 1.95039 14.1731 2.13668 14.3594C2.32296 14.5457 2.59333 14.6206 2.84891 14.5567L3.36586 14.4275L3.46675 14.4022C4.43846 14.1595 5.06602 14.0028 5.629 13.684C6.19197 13.3653 6.64926 12.9078 7.35733 12.1994L7.35734 12.1994L7.43086 12.1259L13.5307 6.02604C14.3759 5.18088 14.3759 3.81062 13.5307 2.96545Z"
          fill="#27BDA0"></path>
        </svg>
       </div>
       <span class="mt-2 font-size-13"> مرکز ویزیت آنلاین به نوبه</span>
      </div>
      <div class=""><span class="chips_text-danger">احراز هویت نشده</span></div>
     </div>

    </div>
    <div class="modal fade " id="exampleModalCenterEdit" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered " role="document">
      <div class="modal-content border-radius-8">
       <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> ویرایش </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
        </button>
       </div>
       <div class="modal-body">
        <div class="drop-benobe">
         <form>
          <div>
           <div class="position-relative">
            <label class="label-top-input-special">
             کد نظام پزشکی
            </label>
            <input class="form-control h-50 w-100 position-relative" label="کد نظام پزشکی" name="docId"
             value="ف-5795">
           </div>
           <div class="d-flex mt-3 gap-4">
            <div class="w-100 position-relative">
             <label class="label-top-input-special">
              نام کاربری</label>
             <input class="form-control h-50 w-100 position-relative" label="کدملی" name="nationalCode"
              value="3720574245">
            </div>
            <div class="w-100 position-relative">
             <label class="label-top-input-special">
              رمز عبور</label>
             <input class="form-control h-50 w-100 position-relative" label="شماره موبایل" name="mobileNo"
              value="09180607211">
            </div>
           </div>
          </div>
          <div class="d-flex w-100 justify-content-center mt-3">
           <div class="w-100">
            <button class="btn btn-primary h-50 w-100" type="submit">
             <span class="button_text__51wVM">ثبت</span>
            </button>
           </div>
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
@endsection
@section('scripts')
 <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/noskhe-electronic/prescription/prescription.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/noskhe-electronic/providers/providers.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  var updateStatusAppointmentUrl =
   "{{ route('updateStatusAppointment', ':id') }}";
 </script>
@endsection
