﻿'use strict';
var KTModalNewCard = (function () {
 var t, e, n, r, o, i;
 return {
  init: function () {
   (i = document.querySelector('#kt_modal_new_card')) &&
    ((o = new bootstrap.Modal(i)),
    (r = document.querySelector('#kt_modal_new_card_form')),
    (t = document.getElementById('kt_modal_new_card_submit')),
    (e = document.getElementById('kt_modal_new_card_cancel')),
    $(r.querySelector('[name="card_expiry_month"]')).on('change', function () {
     n.revalidateField('card_expiry_month');
    }),
    $(r.querySelector('[name="card_expiry_year"]')).on('change', function () {
     n.revalidateField('card_expiry_year');
    }),
    (n = FormValidation.formValidation(r, {
     fields: {
      card_name: {
       validators: { notEmpty: { message: 'Name on card is required' } },
      },
      card_number: {
       validators: {
        notEmpty: { message: 'شماره کارت اجباری' },
        creditCard: { message: 'شماره کارت معتبر نیست' },
       },
      },
      card_expiry_month: {
       validators: { notEmpty: { message: 'ماه اجباری' } },
      },
      card_expiry_year: { validators: { notEmpty: { message: 'سال اجباری' } } },
      card_cvv: {
       validators: {
        notEmpty: { message: 'فیلد اجباری' },
        digits: { message: 'باید فقط عدد باشید' },
        stringLength: { min: 3, max: 4, message: 'عدد 3 یا 4 رقمی' },
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
    })),
    t.addEventListener('click', function (e) {
     e.preventDefault(),
      n &&
       n.validate().then(function (e) {
        console.log('validated!'),
         'Valid' == e
          ? (t.setAttribute('data-kt-indicator', 'on'),
            (t.disabled = !0),
            setTimeout(function () {
             t.removeAttribute('data-kt-indicator'),
              (t.disabled = !1),
              Swal.fire({
               text: 'فرم با موفقیت ارسال شد!',
               icon: 'success',
               buttonsStyling: !1,
               confirmButtonText: 'باشه فهمیدم!',
               customClass: { confirmButton: 'btn btn-primary' },
              }).then(function (t) {
               t.isConfirmed && o.hide();
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
    e.addEventListener('click', function (t) {
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
        ? (r.reset(), o.hide())
        : 'cancel' === t.dismiss &&
          Swal.fire({
           text: 'فرم شما لغو نشده است !.',
           icon: 'error',
           buttonsStyling: !1,
           confirmButtonText: 'باشه فهمیدم!',
           customClass: { confirmButton: 'btn btn-primary' },
          });
      });
    }));
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTModalNewCard.init();
});