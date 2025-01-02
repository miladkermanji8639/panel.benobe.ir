(function () {
 const e = document.querySelector('.suspend-user');
 e &&
  (e.onclick = function () {
   Swal.fire({
    title: 'پیام تایید',
    text: 'شما نمی توانید مجدد کاربر را فعال کنید!',
    icon: 'warning',
    showCancelButton: !0,
    confirmButtonText: 'بله مسدودش کن!',
    customClass: {
     confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
     cancelButton: 'btn btn-label-secondary waves-effect waves-light',
    },
    buttonsStyling: !1,
   }).then(function (t) {
    t.value
     ? Swal.fire({
        icon: 'success',
        title: 'مسدود شد!',
        text: 'کاربر درحال حاضر مسدود است.',
        customClass: {
         confirmButton: 'btn btn-success waves-effect waves-light',
        },
       })
     : t.dismiss === Swal.DismissReason.cancel &&
       Swal.fire({
        title: 'لغو شده',
        text: 'این کاربر مسدود نشد :)',
        icon: 'error',
        customClass: {
         confirmButton: 'btn btn-success waves-effect waves-light',
        },
       });
   });
  });
 const n = document.querySelectorAll('.cancel-subscription');
 n &&
  n.forEach((t) => {
   t.onclick = function () {
    Swal.fire({
     text: 'آیا می خواهید اشتراک را لغو کنید؟',
     icon: 'warning',
     showCancelButton: !0,
     confirmButtonText: 'بله',
     customClass: {
      confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
      cancelButton: 'btn btn-label-secondary waves-effect waves-light',
     },
     buttonsStyling: !1,
    }).then(function (s) {
     s.value
      ? Swal.fire({
         icon: 'success',
         title: 'اشتراک لغو شد!',
         text: 'اشتراک با موفقیت لغو شد.',
         customClass: {
          confirmButton: 'btn btn-success waves-effect waves-light',
         },
        })
      : (s.dismiss, Swal.DismissReason.cancel);
    });
   };
  });
})();
