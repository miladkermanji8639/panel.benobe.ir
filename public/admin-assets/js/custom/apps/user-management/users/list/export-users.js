﻿'use strict';
var KTModalExportUsers = (function () {
 const t = document.getElementById('kt_modal_export_users'),
  e = t.querySelector('#kt_modal_export_users_form'),
  n = new bootstrap.Modal(t);
 return {
  init: function () {
   !(function () {
    var o = FormValidation.formValidation(e, {
     fields: {
      format: {
       validators: { notEmpty: { message: 'فرمت فایل مورد نیاز است' } },
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
    const i = t.querySelector('[data-kt-users-modal-action="submit"]');
    i.addEventListener('click', function (t) {
     t.preventDefault(),
      o &&
       o.validate().then(function (t) {
        console.log('validated!'),
         'Valid' == t
          ? (i.setAttribute('data-kt-indicator', 'on'),
            (i.disabled = !0),
            setTimeout(function () {
             i.removeAttribute('data-kt-indicator'),
              Swal.fire({
               text: 'لیست کاربر با موفقیت صادر شد!',
               icon: 'success',
               buttonsStyling: !1,
               confirmButtonText: 'باشه فهمیدم!',
               customClass: { confirmButton: 'btn btn-primary' },
              }).then(function (t) {
               t.isConfirmed && (n.hide(), (i.disabled = !1));
              });
            }, 2e3))
          : Swal.fire({
             text:
              'متأسفیم ، به نظر می رسد برخی خطاها شناسایی شده است ، لطفاً دوباره امتحان کنید.',
             icon: 'error',
             buttonsStyling: !1,
             confirmButtonText: 'باشه فهمیدم!',
             customClass: { confirmButton: 'btn btn-primary' },
            });
       });
    }),
     t
      .querySelector('[data-kt-users-modal-action="cancel"]')
      .addEventListener('click', function (t) {
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
      .querySelector('[data-kt-users-modal-action="close"]')
      .addEventListener('click', function (t) {
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
   })();
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTModalExportUsers.init();
});
