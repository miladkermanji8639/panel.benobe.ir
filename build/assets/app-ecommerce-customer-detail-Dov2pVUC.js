(function () {
 const e = document.querySelector('.delete-customer');
 e &&
  (e.onclick = function () {
   Swal.fire({
    title: 'پیام تایید',
    text: 'این عملیات راه بازگشتی ندارد!',
    icon: 'warning',
    showCancelButton: !0,
    confirmButtonText: 'بله حذف کن!',
    cancelButtonText: 'بازگشت',
    customClass: {
     confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
     cancelButton: 'btn btn-label-secondary waves-effect waves-light',
    },
    buttonsStyling: !1,
   }).then(function (t) {
    t.value
     ? Swal.fire({
        icon: 'success',
        title: 'حذف شد!',
        text: 'کاربر با موفقیت حذف شد.',
        confirmButtonText: 'باشه',
        customClass: {
         confirmButton: 'btn btn-success waves-effect waves-light',
        },
       })
     : t.dismiss === Swal.DismissReason.cancel &&
       Swal.fire({
        title: 'لغو شد',
        text: 'حذف نشد :)',
        icon: 'error',
        confirmButtonText: 'باشه',
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
     cancelButtonText: 'خیر',
     customClass: {
      confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
      cancelButton: 'btn btn-label-secondary waves-effect waves-light',
     },
     buttonsStyling: !1,
    }).then(function (c) {
     c.value
      ? Swal.fire({
         icon: 'success',
         title: 'اشتراک لغو شد!',
         text: 'اشتراک با موفقیت لغو شد.',
         confirmButtonText: 'باشه',
         customClass: {
          confirmButton: 'btn btn-success waves-effect waves-light',
         },
        })
      : c.dismiss === Swal.DismissReason.cancel &&
        Swal.fire({
         title: 'لغو شد',
         text: 'اشتراک لغو نشد!',
         icon: 'error',
         confirmButtonText: 'باشه',
         customClass: {
          confirmButton: 'btn btn-success waves-effect waves-light',
         },
        });
    });
   };
  });
})();
