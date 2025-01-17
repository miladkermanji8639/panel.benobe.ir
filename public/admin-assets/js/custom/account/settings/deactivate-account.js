﻿'use strict';
var KTAccountSettingsDeactivateAccount = (function () {
 var t, n, e;
 return {
  init: function () {
   (t = document.querySelector('#kt_account_deactivate_form')) &&
    ((e = document.querySelector('#kt_account_deactivate_account_submit')),
    (n = FormValidation.formValidation(t, {
     fields: {
      deactivate: {
       validators: {
        notEmpty: {
         message: 'لطفاً کادر را علامت بزنید تا حساب خود را غیرفعال کنید',
        },
       },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      submitButton: new FormValidation.plugins.SubmitButton(),
      bootstrap: new FormValidation.plugins.Bootstrap5({
       rowSelector: '.fv-row',
       eleInvalidClass: '',
       eleValidClass: '',
      }),
     },
    })),
    e.addEventListener('click', function (t) {
     t.preventDefault(),
      n.validate().then(function (t) {
       'Valid' == t
        ? swal
           .fire({
            text: 'آیا مطمئن هستید که می خواهید حساب خود را غیرفعال کنید؟',
            icon: 'warning',
            buttonsStyling: !1,
            showDenyButton: !0,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
             confirmButton: 'btn btn-light-primary',
             denyButton: 'btn btn-danger',
            },
           })
           .then((t) => {
            t.isConfirmed
             ? Swal.fire({
                text: 'حساب شما غیرفعال شده است.',
                icon: 'success',
                confirmButtonText: 'Ok',
                buttonsStyling: !1,
                customClass: { confirmButton: 'btn btn-light-primary' },
               })
             : t.isDenied &&
               Swal.fire({
                text: 'اکانت غیرفعال نشد',
                icon: 'info',
                confirmButtonText: 'Ok',
                buttonsStyling: !1,
                customClass: { confirmButton: 'btn btn-light-primary' },
               });
           })
        : swal.fire({
           text:
            'متأسفیم ، به نظر می رسد برخی خطاها شناسایی شده است ، لطفاً دوباره امتحان کنید.',
           icon: 'error',
           buttonsStyling: !1,
           confirmButtonText: 'باشه فهمیدم!',
           customClass: { confirmButton: 'btn btn-light-primary' },
          });
      });
    }));
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTAccountSettingsDeactivateAccount.init();
});
