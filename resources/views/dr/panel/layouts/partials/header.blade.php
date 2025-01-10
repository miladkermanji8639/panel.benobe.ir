<div class="header  d-flex  item-center bg-white width-100 custom-border-bottom padding-12-30">
 <div class="header__right d-flex flex-grow-1 item-center">
  <span class="bars"></span>

 </div>
 {{-- <div>
        <a class="" href="">
  <img src="{{ asset('app-assets/logos/benobe.svg') }}"
       width="80px"
       height="80px"
       alt=""
       srcset="">
  </a>
</div> --}}
 <div class="header__left d-flex flex-end item-center margin-top-2">


  <div class="d-flex notif-option">
    <div>
     <span class="bell-red-badge">
     </span>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" role="img">
      <path
       d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6z"
       stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
      <path d="M13.87 3.2a6.754 6.754 0 00-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26z"
       stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
      </path>
      <path d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 01-.88-2.12" stroke="currentColor"
       stroke-width="1.5" stroke-miterlimit="10"></path>
     </svg>
    </div>
    <div class="mx-4">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24px" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      class="plasmic-default__svg plasmic_all__FLoMj PlasmicQuickAccessWallet_svg__4uUbY lucide lucide-wallet"
      viewBox="0 0 24 24" role="img">
      <path d="M19 7V4a1 1 0 00-1-1H5a2 2 0 000 4h15a1 1 0 011 1v4h-3a2 2 0 000 4h3a1 1 0 001-1v-2a1 1 0 00-1-1"></path>
      <path d="M3 5v14a2 2 0 002 2h15a1 1 0 001-1v-4"></path>
     </svg>
     <span>
      0تومان

     </span>
    </div>
   </div>
  <a href="{{ route('dr.auth.logout') }}" class="logout" title="خروج"></a>

  <script>
   document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.querySelector('.logout');

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
 </div>
</div>
{{-- sweet alert --}}
@include('admin.content.alerts.sweetalert.success')
@include('admin.content.alerts.sweetalert.error')
@include('admin.content.alerts.sweetalert.delete-confirm', ['className' => 'delete'])
{{-- sweet alert --}}
