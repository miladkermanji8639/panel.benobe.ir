﻿'use strict';
var KTUsersUpdateRole = (function () {
 const t = document.getElementById('kt_modal_update_role'),
  e = t.querySelector('#kt_modal_update_role_form'),
  n = new bootstrap.Modal(t);
 return {
  init: function () {
   (() => {
    t
     .querySelector('[data-kt-users-modal-action="close"]')
     .addEventListener('click', (t) => {
      t.preventDefault(),
       Swal.fire({
        text: 'آیا مطمئن هستید که می خواهید لغو کنید',
        icon: 'warning',
        showCancelButton: !0,
        buttonsStyling: !1,
        confirmButtonText: 'بله ، آن را لغو کنید!',
        cancelButtonText: 'خیر',
        customClass: {
         confirmButton: 'btn btn-primary',
         cancelButton: 'btn btn-active-light',
        },
       }).then(function (t) {
        t.value
         ? (e.reset(), n.hide())
         : 'cancel' === t.dismiss &&
           Swal.fire({
            text: 'فرم شما لغو نشده است !.',
            icon: 'error',
            buttonsStyling: !1,
            confirmButtonText: 'باشه فهمیدم!',
            customClass: { confirmButton: 'btn btn-primary' },
           });
       });
     }),
     t
      .querySelector('[data-kt-users-modal-action="cancel"]')
      .addEventListener('click', (t) => {
       t.preventDefault(),
        Swal.fire({
         text: 'آیا مطمئن هستید که می خواهید لغو کنید',
         icon: 'warning',
         showCancelButton: !0,
         buttonsStyling: !1,
         confirmButtonText: 'بله ، آن را لغو کنید!',
         cancelButtonText: 'خیر',
         customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-active-light',
         },
        }).then(function (t) {
         t.value
          ? (e.reset(), n.hide())
          : 'cancel' === t.dismiss &&
            Swal.fire({
             text: 'فرم شما لغو نشده است !.',
             icon: 'error',
             buttonsStyling: !1,
             confirmButtonText: 'باشه فهمیدم!',
             customClass: { confirmButton: 'btn btn-primary' },
            });
        });
      });
    const o = t.querySelector('[data-kt-users-modal-action="submit"]');
    o.addEventListener('click', function (t) {
     t.preventDefault(),
      o.setAttribute('data-kt-indicator', 'on'),
      (o.disabled = !0),
      setTimeout(function () {
       o.removeAttribute('data-kt-indicator'),
        (o.disabled = !1),
        Swal.fire({
         text: 'فرم با موفقیت ارسال شد!',
         icon: 'success',
         buttonsStyling: !1,
         confirmButtonText: 'باشه فهمیدم!',
         customClass: { confirmButton: 'btn btn-primary' },
        }).then(function (t) {
         t.isConfirmed && n.hide();
        });
      }, 2e3);
    });
   })();
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTUsersUpdateRole.init();
});
