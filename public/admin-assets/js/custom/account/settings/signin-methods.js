﻿'use strict';
var KTAccountSettingsSigninMethods = (function () {
 var t,
  e,
  n,
  o,
  i,
  s,
  r,
  a,
  l,
  d = function () {
   e.classList.toggle('d-none'),
    s.classList.toggle('d-none'),
    n.classList.toggle('d-none');
  },
  c = function () {
   o.classList.toggle('d-none'),
    a.classList.toggle('d-none'),
    i.classList.toggle('d-none');
  };
 return {
  init: function () {
   var m;
   (t = document.getElementById('kt_signin_change_email')),
    (e = document.getElementById('kt_signin_email')),
    (n = document.getElementById('kt_signin_email_edit')),
    (o = document.getElementById('kt_signin_password')),
    (i = document.getElementById('kt_signin_password_edit')),
    (s = document.getElementById('kt_signin_email_button')),
    (r = document.getElementById('kt_signin_cancel')),
    (a = document.getElementById('kt_signin_password_button')),
    (l = document.getElementById('kt_password_cancel')),
    e &&
     (s.querySelector('button').addEventListener('click', function () {
      d();
     }),
     r.addEventListener('click', function () {
      d();
     }),
     a.querySelector('button').addEventListener('click', function () {
      c();
     }),
     l.addEventListener('click', function () {
      c();
     })),
    t &&
     ((m = FormValidation.formValidation(t, {
      fields: {
       emailaddress: {
        validators: {
         notEmpty: { message: 'ایمیل مورد نیاز است' },
         emailAddress: { message: 'مقدار یک آدرس ایمیل معتبر نیست' },
        },
       },
       confirmemailpassword: {
        validators: { notEmpty: { message: 'رمز عبور مورد نیاز است' } },
       },
      },
      plugins: {
       trigger: new FormValidation.plugins.Trigger(),
       bootstrap: new FormValidation.plugins.Bootstrap5({
        rowSelector: '.fv-row',
       }),
      },
     })),
     t
      .querySelector('#kt_signin_submit')
      .addEventListener('click', function (e) {
       e.preventDefault(),
        console.log('click'),
        m.validate().then(function (e) {
         'Valid' == e
          ? swal
             .fire({
              text: 'بازنشانی رمز عبور ارسال شد. لطفا ایمیل خود را چک کنید',
              icon: 'success',
              buttonsStyling: !1,
              confirmButtonText: 'باشه فهمیدم!',
              customClass: {
               confirmButton: 'btn font-weight-bold btn-light-primary',
              },
             })
             .then(function () {
              t.reset(), m.resetForm(), d();
             })
          : swal.fire({
             text:
              'متأسفیم ، به نظر می رسد برخی خطاها شناسایی شده است ، لطفاً دوباره امتحان کنید.',
             icon: 'error',
             buttonsStyling: !1,
             confirmButtonText: 'باشه فهمیدم!',
             customClass: {
              confirmButton: 'btn font-weight-bold btn-light-primary',
             },
            });
        });
      })),
    (function (t) {
     var e,
      n = document.getElementById('kt_signin_change_password');
     n &&
      ((e = FormValidation.formValidation(n, {
       fields: {
        currentpassword: {
         validators: {
          notEmpty: { message: 'Current رمز عبور مورد نیاز است' },
         },
        },
        newpassword: {
         validators: { notEmpty: { message: 'New رمز عبور مورد نیاز است' } },
        },
        confirmpassword: {
         validators: {
          notEmpty: { message: 'Confirm رمز عبور مورد نیاز است' },
          identical: {
           compare: function () {
            return n.querySelector('[name="newpassword"]').value;
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
        }),
       },
      })),
      n
       .querySelector('#kt_password_submit')
       .addEventListener('click', function (t) {
        t.preventDefault(),
         console.log('click'),
         e.validate().then(function (t) {
          'Valid' == t
           ? swal
              .fire({
               text: 'بازنشانی رمز عبور ارسال شد. لطفا ایمیل خود را چک کنید',
               icon: 'success',
               buttonsStyling: !1,
               confirmButtonText: 'باشه فهمیدم!',
               customClass: {
                confirmButton: 'btn font-weight-bold btn-light-primary',
               },
              })
              .then(function () {
               n.reset(), e.resetForm(), c();
              })
           : swal.fire({
              text:
               'متأسفیم ، به نظر می رسد برخی خطاها شناسایی شده است ، لطفاً دوباره امتحان کنید.',
              icon: 'error',
              buttonsStyling: !1,
              confirmButtonText: 'باشه فهمیدم!',
              customClass: {
               confirmButton: 'btn font-weight-bold btn-light-primary',
              },
             });
         });
       }));
    })();
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTAccountSettingsSigninMethods.init();
});
