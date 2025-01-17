﻿'use strict';
var KTModalUpdateAddress = (function () {
 var t, e, n, o, r, i, a;
 return {
  init: function () {
   (t = document.querySelector('#kt_modal_update_address')),
    (i = new bootstrap.Modal(t)),
    (r = t.querySelector('#kt_modal_update_address_form')),
    (e = r.querySelector('#kt_modal_update_address_submit')),
    (n = r.querySelector('#kt_modal_update_address_cancel')),
    (o = t.querySelector('#kt_modal_update_address_close')),
    (a = FormValidation.formValidation(r, {
     fields: {
      name: { validators: { notEmpty: { message: 'نام آدرس الزامی است' } } },
      country: { validators: { notEmpty: { message: 'کشور مورد نیاز است' } } },
      address1: { validators: { notEmpty: { message: 'آدرس 1 الزامی است' } } },
      city: { validators: { notEmpty: { message: 'شهر مورد نیاز است' } } },
      state: { validators: { notEmpty: { message: 'ایالت مورد نیاز است' } } },
      postcode: { validators: { notEmpty: { message: 'کدپستی الزامی است' } } },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap: new FormValidation.plugins.Bootstrap5({
       rowSelector: '.fv-row',
       eleInvalidClass: '',
       eleValidClass: '',
      }),
     },
    })),
    $(r.querySelector('[name="country"]')).on('change', function () {
     a.revalidateField('country');
    }),
    e.addEventListener('click', function (t) {
     t.preventDefault(),
      a &&
       a.validate().then(function (t) {
        console.log('validated!'),
         'Valid' == t
          ? (e.setAttribute('data-kt-indicator', 'on'),
            (e.disabled = !0),
            setTimeout(function () {
             e.removeAttribute('data-kt-indicator'),
              Swal.fire({
               text: 'فرم با موفقیت ارسال شد!',
               icon: 'success',
               buttonsStyling: !1,
               confirmButtonText: 'باشه فهمیدم!',
               customClass: { confirmButton: 'btn btn-primary' },
              }).then(function (t) {
               t.isConfirmed && (i.hide(), (e.disabled = !1));
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
    n.addEventListener('click', function (t) {
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
        ? (r.reset(), i.hide())
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
    o.addEventListener('click', function (t) {
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
        ? (r.reset(), i.hide())
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
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTModalUpdateAddress.init();
});
