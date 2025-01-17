﻿'use strict';
var KTUsersUpdateEmail = (function () {
 const t = document.getElementById('kt_modal_update_phone'),
  e = t.querySelector('#kt_modal_update_phone_form'),
  n = new bootstrap.Modal(t);
 return {
  init: function () {
   (() => {
    var o = FormValidation.formValidation(e, {
     fields: {
      profile_phone: {
       validators: { notEmpty: { message: 'شماره تلفن الزامی است' } },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap: new FormValidation.plugins.Bootstrap5({
       rowSelector: '.fv-row',
       eleInvalidClass: '',
       eleValidClass: '',
      }),
     },
    });
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
    const i = t.querySelector('[data-kt-users-modal-action="submit"]');
    i.addEventListener('click', function (t) {
     t.preventDefault(),
      o &&
       o.validate().then(function (t) {
        console.log('validated!'),
         'Valid' == t &&
          (i.setAttribute('data-kt-indicator', 'on'),
          (i.disabled = !0),
          setTimeout(function () {
           i.removeAttribute('data-kt-indicator'),
            (i.disabled = !1),
            Swal.fire({
             text: 'فرم با موفقیت ارسال شد!',
             icon: 'success',
             buttonsStyling: !1,
             confirmButtonText: 'باشه فهمیدم!',
             customClass: { confirmButton: 'btn btn-primary' },
            }).then(function (t) {
             t.isConfirmed && n.hide();
            });
          }, 2e3));
       });
    });
   })();
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTUsersUpdateEmail.init();
});
