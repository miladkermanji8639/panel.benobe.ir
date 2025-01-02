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


  <div class="notification margin-15">
   <sup class="badge badge-danger m-0">2</sup>

   <a class="notification__icon">

   </a>
   <div class="dropdown__notification">
    <div class="content__notification">
     <span class="font-size-13">موردی برای نمایش وجود ندارد</span>
    </div>
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
