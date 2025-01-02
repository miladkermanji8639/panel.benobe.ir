(function () {
 const e = document.querySelector('.cancel-subscription');
 e &&
  (e.onclick = function () {
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
   }).then(function (t) {
    t.value
     ? Swal.fire({
        icon: 'success',
        title: 'اشتراک لغو شد!',
        text: 'اشتراک با موفقیت لغو شد.',
        customClass: {
         confirmButton: 'btn btn-success waves-effect waves-light',
        },
       })
     : (t.dismiss, Swal.DismissReason.cancel);
   });
  });
 const n = document.querySelector('.edit-address'),
  s = document.querySelector('.address-title'),
  c = document.querySelector('.address-subtitle');
 n.onclick = function () {
  (s.innerHTML = 'ویرایش آدرس'), (c.innerHTML = 'آدرس فعلی خود را تغییر دهید');
 };
})();
