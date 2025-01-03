﻿'use strict';
var KTUsersUpdatePassword = (function () {
 const t = document.getElementById('kt_modal_update_password'),
  e = t.querySelector('#kt_modal_update_password_form'),
  n = new bootstrap.Modal(t);
 return {
  init: function () {
   (() => {
    var o = FormValidation.formValidation(e, {
     fields: {
      current_password: {
       validators: { notEmpty: { message: 'رمز عبور فعلی مورد نیاز است' } },
      },
      new_password: {
       validators: {
        notEmpty: { message: 'رمز عبور لازم است' },
        callback: {
         message: 'لطفا رمز عبور معتبر وارد کنید',
         callback: function (t) {
          if (t.value.length > 0) return validatePassword();
         },
        },
       },
      },
      confirm_password: {
       validators: {
        notEmpty: { message: 'تایید رمز عبور لازم است' },
        identical: {
         compare: function () {
          return e.querySelector('[name="new_password"]').value;
         },
         message: 'رمز عبور و تایید آن یکسان نیست',
        },
       },
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
    const a = t.querySelector('[data-kt-users-modal-action="submit"]');
    a.addEventListener('click', function (t) {
     t.preventDefault(),
      o &&
       o.validate().then(function (t) {
        console.log('validated!'),
         'Valid' == t &&
          (a.setAttribute('data-kt-indicator', 'on'),
          (a.disabled = !0),
          setTimeout(function () {
           a.removeAttribute('data-kt-indicator'),
            (a.disabled = !1),
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
 KTUsersUpdatePassword.init();
});
