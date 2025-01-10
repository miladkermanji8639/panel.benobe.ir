<div class="sidebar__nav border-top border-left">
 <span class="bars d-none padding-0-18"></span>
 <a class="header__logo d-none" href="https://netcopy.ir"></a>
 <div class="profile__info border cursor-pointer text-center">
  <div class="avatar__img">
   <img src="{{ asset('dr-assets/panel/img/pro.jpg') }}" class="avatar___img">
   <input type="file" accept="image/*" class="hidden avatar-img__input">
   <div class="v-dialog__container" style="display: block;"></div>
   <div class="box__camera default__avatar"></div>
  </div>
  <span
   class="profile__name sidebar-full-name">{{ Auth::guard('doctor')->user()->first_name . ' ' . Auth::guard('doctor')->user()->last_name }}</span>
  <!-- نام کاربری فعلی -->
  <span class="fs-11 fw-bold" id="takhasos-txt"> {{ $specialtyName ?? 'نامشخص' }}</span>
 </div>
 <ul class="mt-65" id="mt-65">
  <li class="item-li i-dashboard {{ Request::routeIs('dr-panel') ? 'is-active' : '' }}">
   <a href="{{ route('dr-panel') }}">داشبورد</a>
  </li>
  <li
   class="item-li i-courses {{ Request::routeIs('dr-appointments') || Request::routeIs('dr-appointments_open') || Request::routeIs('dr-manual_nobat') || Request::routeIs('dr-scheduleSetting') || Request::routeIs('dr-manual_nobat_setting') ? 'is-active' : '' }}"
   id="nobat-dehi">
   <a href="#" class="d-flex justify-content-between w-100 align-items-center">
    نوبت اینترنتی
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>
   </a>
   <ul class="drop-toggle d-none">
    <li class="item-li  {{ Request::routeIs('dr-appointments') ? 'is-active' : '' }}">
     <a href="{{ route('dr-appointments') }}"> مراجعین من</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-workhours') ? 'is-active' : '' }}">
     <a href="{{ route('dr-workhours') }}"> ساعت کاری</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-mySpecialDays') ? 'is-active' : '' }}">
     <a href="{{ route('dr-mySpecialDays') }}">روزهای خاص من</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-manual_nobat_setting') ? 'is-active' : '' }}">
     <a href="{{ route('dr-manual_nobat_setting') }}">تنظیمات نوبت دستی</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-manual_nobat') ? 'is-active' : '' }}">
     <a href="{{ route('dr-manual_nobat') }}">ثبت نوبت دستی</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-scheduleSetting') ? 'is-active' : '' }}">
     <a href="{{ route('dr-scheduleSetting') }}">تنظیمات نوبت</a>
    </li>
   </ul>
  </li>
  <li
   class="item-li i-moshavere {{ Request::routeIs('dr-moshavere_setting') || Request::routeIs('dr-moshavere_waiting') || Request::routeIs('consult-term.index') ? 'is-active' : '' }}"
   id="moshavere">
   <a href="#" class="d-flex justify-content-between w-100 align-items-center">
    مشاوره
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>
   </a>
   <ul class="drop-toggle d-none">
    <li class="item-li i-courses {{ Request::routeIs('dr-moshavere_setting') ? 'is-active' : '' }}">
     <a href="{{ route('dr-moshavere_setting') }}">برنامه ریزی مشاوره</a>
    </li>
    <li class="item-li i-user__inforamtion {{ Request::routeIs('dr-moshavere_waiting') ? 'is-active' : '' }}">
     <a href="{{ route('dr-moshavere_waiting') }}">گزارش مشاوره</a>
    </li>
    <li class="item-li i-user__inforamtion {{ Request::routeIs('consult-term.index') ? 'is-active' : '' }}">
     <a href="{{ route('consult-term.index') }}">قوانین مشاوره</a>
    </li>
   </ul>
  </li>
  <li
   class="item-li i-banners {{ Request::routeIs('prescription.index') || Request::routeIs('providers.index') || Request::routeIs('favorite.templates.index') || Request::routeIs('templates.favorite.service.index') ? 'is-active' : '' }}">
   <a href="#">
    نسخه الکترونیک
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>

   </a>
   <ul class="drop-toggle d-none">
    <li class="item-li i-courses {{ Request::routeIs('prescription.index') ? 'is-active' : '' }}">
     <a href="{{ route('prescription.index') }}"> نسخه های ثبت شده</a>
    </li>
    <li class="item-li i-courses {{ Request::routeIs('providers.index') ? 'is-active' : '' }}">
     <a href="{{ route('providers.index') }}"> بیمه های من</a>
    </li>
    <li class="item-li i-courses {{ Request::routeIs('favorite.templates.index') ? 'is-active' : '' }}">
     <a href="{{ route('favorite.templates.index') }}">نسخه پر استفاده </a>
    </li>
    <li class="item-li i-courses {{ Request::routeIs('templates.favorite.service.index') ? 'is-active' : '' }}">
     <a href="{{ route('templates.favorite.service.index') }}">اقلام پر استفاده </a>
    </li>

   </ul>

  </li>
  <li
   class="item-li i-my__peyments {{ Request::routeIs('dr-wallet') || Request::routeIs('dr-payment-setting') ? 'is-active' : '' }} d-flex flex-column justify-content-center"
   id="gozaresh-mali">
   <a href="#" class="d-flex justify-content-between w-100 align-items-center">
    گزارش مالی
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>
   </a>
   <ul class="drop-toggle d-none">
    <li class="item-li i-user__inforamtion {{ Request::routeIs('dr-wallet') ? 'is-active' : '' }}">
     <a href="{{ route('dr-wallet') }}"> کیف پول</a>
    </li>
    <li class="item-li i-user__inforamtion {{ Request::routeIs('dr-payment-setting') ? 'is-active' : '' }}">
     <a href="{{ route('dr-payment-setting') }}"> پرداخت</a>
    </li>
   </ul>
  </li>
  <li
   class="item-li i-checkout__request {{ Request::routeIs('dr-patient-records') ? 'is-active' : '' }} d-flex flex-column justify-content-center"
   id="gozaresh-mali">
   <a href="#" class="d-flex justify-content-between w-100 align-items-center">
    پرونده الکترونیک
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>
   </a>
   <ul class="drop-toggle d-none">
    <li class="item-li i-user__inforamtion {{ Request::routeIs('dr-patient-records') ? 'is-active' : '' }}">
     <a href="{{ route('dr-patient-records') }}">پرونده الکترونیک</a>
    </li>

   </ul>
  </li>
  <li
   class="item-li i-user__secratary {{ Request::routeIs('dr-secretary-management') ? 'is-active' : '' }} d-flex flex-column justify-content-center"
   id="gozaresh-mali">
   <a href="#" class="d-flex justify-content-between w-100 align-items-center">
    منشی
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>
   </a>
   <ul class="drop-toggle d-none">
    <li class="item-li i-user__inforamtion {{ Request::routeIs('dr-secretary-management') ? 'is-active' : '' }}">
     <a href="{{ route('dr-secretary-management') }}"> مدیریت منشی ها</a>
    </li>

   </ul>
  </li>
  <li
   class="item-li i-clinic {{ Request::routeIs('management-doctor-clinic') ? 'is-active' : '' }} d-flex flex-column justify-content-center"
   id="gozaresh-mali">
   <a href="#" class="d-flex justify-content-between w-100 align-items-center">
    مطب
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>
   </a>
   <ul class="drop-toggle d-none">
    <li
     class="item-li i-user__inforamtion {{ Request::routeIs('management-doctor-clinic') || Request::routeIs('dr-office-gallery') || Request::routeIs('dr-office-medicalDoc') ? 'is-active' : '' }}">
     <a href="{{ route('management-doctor-clinic') }}"> مدیریت مطب</a>
    </li>
    <li class="item-li i-user__inforamtion {{ Request::routeIs('dr-office-gallery') ? 'is-active' : '' }}">
     <a href="{{ route('dr-office-gallery') }}"> گالری تصاویر </a>
    </li>
    <li class="item-li i-user__inforamtion {{ Request::routeIs('dr-office-medicalDoc') ? 'is-active' : '' }}">
     <a href="{{ route('dr-office-medicalDoc') }}"> مدارک من </a>
    </li>

   </ul>
  </li>
  <li class="item-li i-checkout__request {{ Request::routeIs('dr-bime') ? 'is-active' : '' }}">
   <a href="{{ route('dr-bime') }}">بیمه ها</a>
  </li>
  <li
   class="item-li i-users {{ Request::routeIs('dr-edit-profile') || Request::routeIs('dr-edit-profile-security') || Request::routeIs('dr-edit-profile-upgrade') || Request::routeIs('dr-my-performance') || Request::routeIs('dr-subuser') || Request::routeIs('my-dr-appointments') ? 'is-active' : '' }} d-flex flex-column justify-content-center"
   id="hesab-karbari">
   <a href="#" class="d-flex justify-content-between w-100 align-items-center">
    حساب کاربری
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>
   </a>
   <ul class="drop-toggle d-none">
    <li class="item-li  {{ Request::routeIs('dr-edit-profile') ? 'is-active' : '' }}">
     <a href="{{ route('dr-edit-profile') }}">حساب کاربری</a>
    </li>
        <li class="item-li  {{ Request::routeIs('my-dr-appointments') ? 'is-active' : '' }}">
     <a href="{{ route('my-dr-appointments') }}"> نوبت های من</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-edit-profile-security') ? 'is-active' : '' }}">
     <a href="{{ route('dr-edit-profile-security') }}"> امنیت</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-edit-profile-upgrade') ? 'is-active' : '' }}">
     <a href="{{ route('dr-edit-profile-upgrade') }}">ارتقا حساب</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-my-performance') ? 'is-active' : '' }}">
     <a href="{{ route('dr-my-performance') }}"> عملکرد و رتبه من</a>
    </li>
    <li class="item-li  {{ Request::routeIs('dr-subuser') ? 'is-active' : '' }}">
     <a href="{{ route('dr-subuser') }}">کاربران زیر مجموعه</a>
    </li>
   </ul>
  </li>
  <li
   class="item-li i-comments {{ Request::routeIs('dr-panel-tickets') ? 'is-active' : '' }} d-flex flex-column justify-content-center"
   id="gozaresh-mali">
   <a href="#" class="d-flex justify-content-between w-100 align-items-center">
    پیام
    <div class="d-flex justify-content-end w-100 align-items-center">
     <svg width="6" height="9"class="svg-caret-left" viewBox="0 0 7 11" fill="none"
      xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s; transform: rotate(180deg);">
      <path fill-rule="evenodd" clip-rule="evenodd"
       d="M0.658146 0.39655C0.95104 0.103657 1.42591 0.103657 1.71881 0.39655L6.21881 4.89655C6.5117 5.18944 6.5117 5.66432 6.21881 5.95721L1.71881 10.4572C1.42591 10.7501 0.95104 10.7501 0.658146 10.4572C0.365253 10.1643 0.365253 9.68944 0.658146 9.39655L4.62782 5.42688L0.658146 1.45721C0.365253 1.16432 0.365253 0.689443 0.658146 0.39655Z"
       fill="currentColor"></path>
     </svg>
    </div>
   </a>
   <ul class="drop-toggle d-none">
    <li class="item-li i-tickets {{ Request::routeIs('dr-panel-tickets') ? 'is-active' : '' }}">
     <a href="{{ route('dr-panel-tickets') }}">تیکت ها</a>
    </li>
    <li class="item-li i-comments ">
     <a href="">صفحه گفتگو</a>
    </li>
   </ul>
  </li>

  <li class="item-li i-transactions {{ Request::routeIs('dr-my-performance-chart') ? 'is-active' : '' }}">
   <a href="{{ route('dr-my-performance-chart') }}">آمار ونمودار</a>
  </li>
  <li class="item-li i-exit">
   <a href="{{ route('dr.auth.logout') }}" class="logout-sidebar"> خروج</a>

  </li>

  <script>
   document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.querySelector('.logout-sidebar');

    logoutLink.addEventListener('click', function(event) {
     event.preventDefault(); // جلوگیری از انجام عمل لینک

     // نمایش SweetAlert برای تأیید خروج
     Swal.fire({
      title: 'آیا مطمئن هستید؟',
      text: "می‌خواهید از حساب کاربری خود خارج شوید؟",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'بله، خروج!',
      cancelButtonText: 'خیر، بمانم'
     }).then((result) => {
      if (result.isConfirmed) {
       window.location.href = logoutLink.href; // به لینک خروج هدایت می‌کند
      }
     });
    });
   });
  </script>
 </ul>
</div>
