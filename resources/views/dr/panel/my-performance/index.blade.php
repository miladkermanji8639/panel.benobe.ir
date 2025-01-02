@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/my-performance/my-performance.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', '  عملکرد من ')

 <div class="main-content mb-5">
  <div class="d-flex justify-content-center align-items-center flex-column col-12">
   <div class="top-profile-info p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8 d-flex">
    <div class="w-100 d-flex justify-content-start">
     <h5 class="font-weight-bold text-dark">شاخص‌های عملکرد <b>یاسر محمدی</b> 👋
      <div class="mt-4">🚀 <strong style="font-size: 24px;">امتیاز عملکرد شما: <span
         style="font-size: 32px; font-weight: bold; color: #FF0000;">46</span> از 100</strong><br>برای رشد رتبه و افزایش تعداد
       مراجعین خود نکات زیر را مد نظر قرار دهید.</div>

     </h5>

    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 60 60">
       <defs>
        <style>
         .cls-1 {
          fill: #699f4c;
          fill-rule: evenodd;
         }
        </style>
       </defs>
       <path class="cls-1"
        d="M800,510a30,30,0,1,1,30-30A30,30,0,0,1,800,510Zm-16.986-23.235a3.484,3.484,0,0,1,0-4.9l1.766-1.756a3.185,3.185,0,0,1,4.574.051l3.12,3.237a1.592,1.592,0,0,0,2.311,0l15.9-16.39a3.187,3.187,0,0,1,4.6-.027L817,468.714a3.482,3.482,0,0,1,0,4.846l-21.109,21.451a3.185,3.185,0,0,1-4.552.03Z"
        id="check" transform="translate(-770 -450)" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       شهر محل طبابت شما تهران تشخیص داده شده است.
      </span>
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
     <div class="p-3 w-100">
      تنظیم صحیح شهر و استان محل طبابت، منجر به افزایش اولویت نمایش شما به بیماران آن
      شهر می‌شود.
      <br>
      <a href="{{ route('dr-edit-profile') }}" class="mt-2 text-primary font-weight-bold">
       برای مشاهده و اصلاح شهر محل طبابت خود کلیک کنید.
      </a>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       version="1.1" id="Capa_1" viewBox="0 0 50 50" xml:space="preserve">
       <circle style="fill:#D75A4A;" cx="25" cy="25" r="25" />
       <polyline style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;"
        points="16,34 25,25 34,16   " />
       <polyline style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;"
        points="16,16 25,25 34,34   " />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       ویزیت آنلاین خود را فعال کنید
      </span>
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
     <div class="p-3 w-100">
      <div class="">
       <div class="">
        <div class="">📈 یکی از <b>مهم‌ترین شاخص های رشد رتبه در به نوبه</b> فعال بودن ویزیت
         آنلاین درمانگران است.<br></div>
       </div>
       <div class="">
        <div class="">با ارائه یک راه ارتباطی گفتگوی آنلاین، به بیماران فرصت مشورت و ویزیت غیر
         حضوری را بدهید. <br><br>بسیاری از مشاوره های پزشکی برای شروع یا پیگیری روند درمان نیازی به مراجعه حضوری ندارند.<br> 👈 <a
          class="mt-2 text-primary" href="{{ route('activation.consult.rules') }}" target="_blank"
          style="font-weight: bold; text-decoration: underline; font-size: 1.2em;">برای فعالسازی ویزیت آنلاین خود
          کلیک کنید.</a><br><br> امکان غیر فعال کردن ویزیت آنلاین هرزمان که تمایل داشتید از طریق همین پنل میسر هست.
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       version="1.1" id="Capa_1" viewBox="0 0 50 50" xml:space="preserve">
       <circle style="fill:#D75A4A;" cx="25" cy="25" r="25" />
       <polyline style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;"
        points="16,34 25,25 34,16   " />
       <polyline style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;"
        points="16,16 25,25 34,34   " />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       تعداد نظرات دریافتی شما کم است.
      </span>
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
     <div class="p-3 w-100">
      <div class="">
       <p>
        تعداد نظر دریافتی شما برای جلب اعتماد بیماران بسیار اهمیت دارد.
        <br>
        برای مثال میانگین فعلی تعداد نظر در گروه زنان بالای 150 نظر است. روند دریافت این نظرات باید طبیعی باشد. در صورت مشاهده یا
        گزارش هر رفتار مشکوک، احتمال ثبت جریمه روی صفحه شما وجود دارد.
        <br>
        از جمله روش‌های صحیح برای افزایش تعداد نظرات دریافتی، ثبت نوبت مراجعین حضوری در پذیرش۲۴ است. پذیرش۲۴ از این بیماران نظرسنجی
        کرده و نظر آنها در صفحه شما ثبت خواهد شد.
        <br>
        <a href="https://formafzar.com/form/w01s9" class="mt-2 text-primary font-weight-bold">
         برای ثبت درخواست فعال‌سازی ثبت نوبت مراجعین حضوری، کلیک کنید.
        </a>
       </p>
      </div>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       version="1.1" id="Capa_1" viewBox="0 0 50 50" xml:space="preserve">
       <circle style="fill:#D75A4A;" cx="25" cy="25" r="25" />
       <polyline style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;"
        points="16,34 25,25 34,16   " />
       <polyline style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;"
        points="16,16 25,25 34,34   " />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       شما آنلاین نیستید!
      </span>
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
     <div class="p-3 w-100">
      <div class="">
       <p>
        ساعاتی که برای ویزیت آنلاین خود انتخاب می‌کنید فوق‌العاده در شانس شما برای دیده شدن اهمیت دارند.
        <br>
        در این مورد، معیار موتور جستجوی پذیرش۲۴ آنلاین بودن شما در همان لحظه جستجوی بیمار است.
        <br>
        نکته: اگر به‌تازگی حساب خود در پذیرش۲۴ را باز کرده‌اید، پیشنهاد می‌کنیم علاوه بر ساعات شلوغ، در ساعات کم‌ترافیک که معمولاً
        پزشکان آنلاین کمتری هستند هم آنلاین باشید (مثل نیمه‌شب، صبح زود و روزهای تعطیل). این ساعات کم رقابت فرصت رشد شما را در
        پذیرش۲۴ فراهم خواهند کرد.
        <br>
        <a href="{{ route('dr-workhours') }}" class="mt-3 font-weight-bold text-primary">
         برای تنظیم ساعات کاری ویزیت (حضوری و آنلاین) خود کلیک کنید.
        </a>
       </p>
      </div>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 60 60">
       <defs>
        <style>
         .cls-1 {
          fill: #699f4c;
          fill-rule: evenodd;
         }
        </style>
       </defs>
       <path class="cls-1"
        d="M800,510a30,30,0,1,1,30-30A30,30,0,0,1,800,510Zm-16.986-23.235a3.484,3.484,0,0,1,0-4.9l1.766-1.756a3.185,3.185,0,0,1,4.574.051l3.12,3.237a1.592,1.592,0,0,0,2.311,0l15.9-16.39a3.187,3.187,0,0,1,4.6-.027L817,468.714a3.482,3.482,0,0,1,0,4.846l-21.109,21.451a3.185,3.185,0,0,1-4.552.03Z"
        id="check" transform="translate(-770 -450)" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       نوبت‌دهی حضوری شما برای امروز در دسترس بیماران هست.
      </span>
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
     <div class="p-3 w-100">
      <p>
       نوبت‌های حضوری شما برای امروز تعریف شده‌اند. این امر برای جذب بیماران بسیار مؤثر است.
       <br>
       تعریف نوبت‌های حضوری نزدیک‌تر می‌تواند تأثیر قابل‌توجهی در جذب بیماران داشته باشد.
       <br>
       مثلاً اگر نوبت دهی عصر شنبه شما در سایت فعال بوده و زمان نوبت خالی در آن دارید، برای بیماری که عصر شنبه به دنبال دکتر می
       گردد، شما اولویت بالاتری نسبت به سایر پزشکانی که نوبتشان در این روز فعال نیست دارید.
       <br>
       <a href="{{ route('dr-workhours') }}" class="mt-3 font-weight-bold text-primary">
        برای تنظیم ساعات کاری ویزیت حضوری خود کلیک کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       ثبت آدرس واضح
      </span>
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
     <div class="p-3 w-100">
      <p>
       آدرس واضح و کاملی که بیمار بدون پرس و جو بتواند به مرکز درمانی شما هدایت شود ثبت کنید.
       <br>
       آدرس کامل و دقیق بدون شماره تلفن ثبت کنید.
       <br>
       <a href="{{ route('dr-edit-profile') }}" class="text-primary font-weight-bold mt-2">
        برای مشاهده و اصلاح پروفایل خود کلیک کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       عدم ثبت شماره تلفن در بخش آدرس
      </span>
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
     <div class="p-3 w-100">
      <p>
       در قسمت آدرس به هیچ وجه تلفن ثبت نکنید.
       <br>
       در قسمت آدرس فقط اطلاعات مربوط به موقعیت مکانی را وارد کنید.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       اطمینان از صحت تلفن مطب
      </span>
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
     <div class="p-3 w-100">
      <p>
       بخش تلفن مطب در صفحه خود را بازبینی کنید و مطمئن شوید که فرمت صحیحی نوشته شده و بیمار با کلیک روی آن، می تواند با مطب تماس
       بگیرد.
       <br>
       <a href="{{ route('dr-edit-profile') }}" class="font-weight-bold text-primary mt-3">
        از شماره‌های صحیح استفاده کنید. برای مشاهده و اصلاح پروفایل خود کلیک کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       تنظیم موقعیت مطب
      </span>
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
     <div class="p-3 w-100">
      <p>
       موقعیت جغرافیایی مطب را از طریق ابزار نقشه، بصورت صحیح تنظیم کنید.
       <br>
       توجه کنید که در جستجوی بیماران، بر اساس موقعیت جغرافیایی بیمار اولویت مشاهده دارید.
       <br>
       <a href="{{ route('activation-doctor-clinic') }}" class="font-weight-bold text-primary mt-3">
        برای تنظیم موقعیت دقیق مطب خود روی نقشه کلیک کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       درجه علمی و تخصص‌ها
      </span>
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
     <div class="p-3 w-100">
      <p>
       درجه علمی و تخصص‌هایی که برای خود تنظیم کرده‌اید چیست؟
       <br>
       دسته بندی شما در نتایج جستجو، بر اساس درجه علمی و تخصص انتخابی شماست.
       <br>
       دقت کنید که در اینجا منظور عنوان مستعار تخصص نیست.
       <br>
       <a href="{{ route('dr-edit-profile') }}" class="text-primary font-weight-bold mt-3">
        برای اصلاح پروفایل خود کلیک کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       عدم استفاده از عنوان بی‌ربط در بخش تخصص
      </span>
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
     <div class="p-3 w-100">
      <p>
       در بخش عنوان تخصص، عبارت بی‌ربط مثل تلفن تماس ثبت نکنید.
       <br>
       از عبارات مرتبط با تخصص خود استفاده کنید. ثبت اطلاعات اشتباه، تاثیر منفی در رتبه شما دارد.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       فرصت درجه‌های علمی پایین‌تر
      </span>
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
     <div class="p-3 w-100">
      <p>
       معمولاً درمانگران، آخرین مدرک تحصیلی خود را ثبت میکنند. ولی این فرصت را دارید تا درجه علمی و تخصص‌های پایین‌تر را هم ثبت
       کنید.
       <br>
       مثلاً کاردانی، کارشناسی، پزشک عمومی و تخصص به همراه عنوان مستعار مرتبط با آن‌ها. این موضوع به بیمارانی که آن تخصص ها را
       جستجو می‌کنند کمک می‌کند تا شما راحت تر پیدا کنند. علاوه بر آن بخش عنوان مستعار تخصص آن فرصت ثبت کلمات کلیدی بیشتری به شما
       می دهد.
       <br>
       <a href="{{ route('dr-edit-profile') }}" class="font-weight-bold text-primary mt-3">
        برای اصلاح تخصص خود در بخش پروفایل کلیک کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       در بخش تخصص از عنوان مناسب استفاده کنید
      </span>
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
     <div class="p-3 w-100">
      <p>
       برای عنوان مستعار تخصص، ابتدا بالاترین درجه علمی را بگذارید.
       <br>
       از کلمات پرتکرار مرتبط با رشته خودتان هم می‌توانید استفاده کنید.
       <a href="{{ route('dr-edit-profile') }}" class="font-weight-bold text-primary mt-3">
        برای اصلاح تخصص خود در بخش پروفایل کلیک کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       عناوین غیر واقعی استفاده نکنید
      </span>
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
     <div class="p-3 w-100">
      <p>
       دقت کنید که عنوان مستعار تخصص انتخابی شما، غیر واقعی و فریب دهنده بیماران نباشد.
       <br>
       استفاده از درجه علمی و تخصص‌هایی که معادل مدرک درمانی ندارید، مصداق فریب بیمار است. در صورت مشاهده و یا گزارش کاربران، حتی
       ممکن است منجر به جریمه برای شما شود.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       برای بهبود نرخ رضایت بیماران تلاش کنید.
      </span>
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
     <div class="p-3 w-100">
      <p>
       نرخ رضایت بیماران فوق العاده دربه نوبه اهمیت دارد.
       <br>
       برای افزایش رضایت بیماران، صرفا درمان عالی اهمیت ندارد و حسی که بیمار از شرح حال گیری، صبوری، تجویز ،درمان، فالوآپ و پیگیری
       درمان شما دریافت می‌کند اهمیت دارد.
       <br>
       نرخ رضایت باید بصورت طبیعی رشد کند و هرگونه دستکاری در نرخ و تعداد نظر بیماران خلاف قوانین است.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       عدم دستکاری نظرات
      </span>
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
     <div class="p-3 w-100">
      <p>
       هرگونه رفتاری که مصداق دستکاری در نرخ و تعداد نظر بیماران باشد، خلاف قوانین است.
       <br>
       این موضوع به شدت روی رتبه شما اثر منفی می‌گذارد.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       تصویر پروفایل
      </span>
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
     <div class="p-3 w-100">
      <p>
       تصویر مناسبی برای پروفایل خود انتخاب کنید.
       <br>
       این تصویر اولین مواجهه بیمار با صفحه شماست و در جلب اعتماد وی تاثیر دارد. توصیه میکنیم عکس واضح با رزولیشن مناسب و تمام رخ
       انتخاب کنید. نیازی نیست این تصویر از نوع پرسنلی باشد ولی کادر صورت را پوشش دهد.
       <a href="{{ route('dr-edit-profile') }}" class="font-weight-bold text-primary mt-3">
        برای اصلاح تصویر در بخش پروفایل خود کلیک
        کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       گالری تصاویر مطب
      </span>
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
     <div class="p-3 w-100">
      <p>
       گالری تصاویر مطب روی جلب اعتماد بیمار نسبت به مواجهه حضوری یا آنلاین وی اهمیت زیادی دارد.
       <br>
       توصیه می کنیم تصاویری از محیط معاینه، سالن انتظار و سایر تصاویری که به افزایش اعتماد بیماران کمک می کند با حفظ حریم خصوصی
       بیماران برای صفحه خود درج کنید.
       اگر در مجتمع های پزشکان یا درمانگاه ها هستید، تصاویر ورودی، طبقات و کروکی (برای راهیابی بهتر بیماران) فوق العاده اهمیت دارد.
       تصویر گواهی دوره های درمانی، مدارک و جوایز هم می توانند در گالری قرار بگیرند.
       <br>
       تصاویر باید با کیفیت و رزولوشن مناسب باشند. برای تغییر تصاویر گالری باید در زمانی که با حساب خود وارد شده اید، به صفحه عمومی
       پروفایل خود مراجعه کنید.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       تصاویر امکانات مطب
      </span>
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
     <div class="p-3 w-100">
      <p>
       اگر در مطب خود، امکانات رفاهی دارید تصاویر مرتبط با آن را ثبت کنید.
       <br>
       مثلاً آب سرد کن، نمازخانه، مبلمان انتظار، اسباب بازی برای کودکان.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       متن بیوگرافی
      </span>
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
     <div class="p-3 w-100">
      <p>
       راهگشا بودن متن بیوگرافی برای بیماران، اهمیت دارد.
       <br>
       پیشنهاد می کنیم پاسخ ابهام های کلی و سوالات پرتکرار بیماران بازدیدکننده از صفحه خود را ثبت کنید.
       <br>
       لیست و هزینه خدمات درمانی حضوری خود را ثبت کنید. لیست هزینه پروسیجرها درمانی که جدای از هزینه ویزیت در مطب شما ارایه
       می‌شوند، به تصمیم گیری و جلب اعتماد بیمار کمک می کند.
       <br>
       <a href="{{ route('dr-edit-profile') }}" class="font-weight-bold text-primary mt-3">
        برای مشاهده و اصلاح بیوگرافی خود در پروفایل کلیک کنید.
       </a>
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       کلمات کلیدی مناسبی در بیوگرافی استفاده کنید
      </span>
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
     <div class="p-3 w-100">
      <p>
       در بیوگرافی از مهارت و تجربه درمان بیماری های مختلفی که داشته اید صحبت کنید.
       <br>
       از عبارات مشخص کننده خدمات درمانی که ارائه می‌کنید استفاده کنید. این کلمات می
       <br>تواند علل مراجعه بیمارانتان، علائم، بیماری ها،
       پروسیجر ها و ... باشد. شرح حال هایی
       <br> که بیمار در آغاز گفتگو ارایه می کند، سرنخ خوبی برای شروع هستند.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       تنوع در پیام رسان
      </span>
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
     <div class="p-3 w-100">
      <p>
       هرچه مسیرهای دسترسی به شما بیشتر باشد امکان انتخاب شما توسط بیماران بیشتر خواهد بود.
       <br>
       برای مثال در قسمت تنظیمات پیام رسان ویزیت آنلاین واتساپ و ایتا را همزمان فعال کرده و در هر دو پاسخگو باشید.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       تماس امن
      </span>
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
     <div class="p-3 w-100">
      <p>
       در قسمت تنظیمات پیام رسان ویزیت آنلاین، تماس امن را هم فعال کنید.
       <br>
       بیماران بتوانند با شما گفتگو کنند.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       گزارش عدم مراجعه
      </span>
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
     <div class="p-3 w-100">
      <p>
       مراقب گزارش عدم مراجعه و کنسلی نوبت‌ها و یا ثبت شکایت عدم مراجعه باشید.
       <br>
       این موارد می‌تواند روی رتبه شما تاثیر منفی بگذارد.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       دعوت از پزشکان
      </span>
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
     <div class="p-3 w-100">
      <p>
       برای افزایش مراجعه بیماران، از سایر پزشکان در شهر خود دعوت کنید تا بهبه نوبه بپیوندند.
       <br>
       با افزایش کاربرانبه نوبه ، مراجعه مجدد بیماران به پلتفرم، موجب افزایش بازدید صفحه شما خواهد شد.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       رقابت نکنید، متمایز باشید
      </span>
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
     <div class="p-3 w-100">
      <p>
       به نوبه روزانه محل مراجعه میلیون ها بیمار هست. این مراجعات مملو از فرصت های کشف نشده اند و حل مشکلات این بیماران کلید گسترش
       دامنه مراجعین وفادار شماست.
       با تمرکز روی حل مشکلات گروهی از بیماران، از آن‌ها جامعه‌ای از کاربران بسازید که مجدداً به شما مراجعه کنند.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       تعامل با بیماران
      </span>
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
     <div class="p-3 w-100">
      <p>
       با بیمارانتان در صفحه تعامل کنید.
       <br>
       با حساب کاربری رسمی خود دربه نوبه به نظرات بیماران پاسخ دهید.
      </p>
     </div>
    </div>
   </div>
   <div class="option-card-box-shodow p-3 col-xs-12 col-sm-12  col-md-12 col-lg-8" id="personal-data">
    <div class="d-flex justify-content-between align-items-center personal-data-clicked">
     <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       id="meteor-icon-kit__solid-question-circle" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16ZM10.5 9.5C10.5 8.32843 10.8284 8 12 8C13.0641 8 13.3215 8.19307 13.4337 8.64158C13.4859 8.85034 13.5 9.06237 13.5 9.5C13.5 9.82337 13.4246 9.93939 12.938 10.3287C12.9624 10.3091 12.4319 10.7246 12.2619 10.8662C11.5638 11.4479 11.055 12.036 10.6584 12.8292C10.2879 13.5701 10.5882 14.4712 11.3292 14.8416C12.0701 15.2121 12.9712 14.9118 13.3416 14.1708C13.5298 13.7944 13.7772 13.5086 14.1825 13.1709C14.3108 13.0639 14.8049 12.677 14.812 12.6713C15.94 11.7689 16.5 10.9074 16.5 9.5C16.5 8.82652 16.4737 8.43249 16.3441 7.91397C15.8921 6.10608 14.4174 5 12 5C9.17157 5 7.5 6.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11C9.82843 11 10.5 10.3284 10.5 9.5Z"
        fill="#758CA3" />
      </svg>
      <span class="txt-card-span mx-1 font-weight-bold text-dark">
       اشتراک‌گذاری لینک صفحه
      </span>
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
     <div class="p-3 w-100">
      <p>
       با به اشتراک گذاری لینک صفحه به نوبه خود در حساب کاربری سایر شبکه‌های اجتماعی‌تان، بازدید صفحه خود را افزایش دهید.
       <br>
       این موضوع به تقویت ثبت نظرات در صفحه شما هم کمک می‌کند. برای مثال در بیو اینستاگرام خود لینک صفحه خود را قرار بدهید.
      </p>
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
 <script src="{{ asset('dr-assets/panel/js/my-performance/my-performance.js') }}"></script>
 <script src="{{ asset('dr-assets/js/select2/select2.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  $(document).ready(function() {
   $('.select2').select2({
    placeholder: "انتخاب کنید",
    allowClear: true
   });
  });
 </script>
 <script></script>
@endsection
