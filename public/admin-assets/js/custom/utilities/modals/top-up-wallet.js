﻿'use strict';
var KTModalTopUpWallet = (function () {
 var t,
  e,
  o,
  n,
  a,
  r,
  l,
  i = [];
 return {
  init: function () {
   (e = document.querySelector('#kt_modal_top_up_wallet')) &&
    ((t = new bootstrap.Modal(e)),
    (o = document.querySelector('#kt_modal_top_up_wallet_stepper')),
    (n = document.querySelector('#kt_modal_top_up_wallet_stepper_form')),
    (a = o.querySelector('[data-kt-stepper-action="submit"]')),
    (r = o.querySelector('[data-kt-stepper-action="next"]')),
    (l = new KTStepper(o)).on('kt.stepper.changed', function (t) {
     4 === l.getCurrentStepIndex()
      ? (a.classList.remove('d-none'),
        a.classList.add('d-inline-block'),
        r.classList.add('d-none'))
      : 5 === l.getCurrentStepIndex()
        ? (a.classList.add('d-none'), r.classList.add('d-none'))
        : (a.classList.remove('d-inline-block'),
          a.classList.remove('d-none'),
          r.classList.remove('d-none'));
    }),
    l.on('kt.stepper.next', function (t) {
     console.log('stepper.next');
     var e = i[t.getCurrentStepIndex() - 1];
     e
      ? e.validate().then(function (e) {
         console.log('validated!'),
          'Valid' == e
           ? t.goNext()
           : Swal.fire({
              text:
               'متأسفیم ، به نظر می رسد برخی خطاها شناسایی شده است ، لطفاً دوباره امتحان کنید.',
              icon: 'error',
              buttonsStyling: !1,
              confirmButtonText: 'باشه فهمیدم!',
              customClass: { confirmButton: 'btn btn-light' },
             }).then(function () {});
        })
      : (t.goNext(), KTUtil.scrollTop());
    }),
    l.on('kt.stepper.previous', function (t) {
     console.log('stepper.previous'), t.goPrevious(), KTUtil.scrollTop();
    }),
    a.addEventListener('click', function (t) {
     t.preventDefault(),
      (a.disabled = !0),
      a.setAttribute('data-kt-indicator', 'on'),
      setTimeout(function () {
       a.removeAttribute('data-kt-indicator'), (a.disabled = !1), l.goNext();
      }, 2e3);
    }),
    (function () {
     const t = n.querySelectorAll('[name="currency_type"]'),
      e = n.querySelectorAll('[data-kt-modal-top-up-wallet-option]');
     let o = 'dollar';
     t.forEach((t) => {
      t.addEventListener('change', (t) => {
       (o = t.target.value),
        e.forEach((t) => {
         t.classList.add('d-none'),
          t.getAttribute('data-kt-modal-top-up-wallet-option') === o &&
           t.classList.remove('d-none');
        });
      });
     }),
      document
       .querySelector('#kt_modal_top_up_wallet_create_new')
       .addEventListener('click', function () {
        n.reset(), l.goTo(1);
       });
    })(),
    i.push(
     FormValidation.formValidation(n, {
      fields: {
       top_up_amount: {
        validators: { notEmpty: { message: 'Top up amount is required' } },
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
     }),
    ),
    i.push(
     FormValidation.formValidation(n, {
      fields: {
       payment_methods: {
        validators: { notEmpty: { message: 'روش پرداخت الزامی است' } },
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
     }),
    ),
    i.push(
     FormValidation.formValidation(n, {
      fields: {
       top_up_password: {
        validators: { notEmpty: { message: 'رمز عبور مورد نیاز است' } },
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
     }),
    ),
    (() => {
     e.querySelector('[data-kt-modal-action-type="close"]').addEventListener(
      'click',
      (t) => {
       o(t);
      },
     );
     const o = (e) => {
      e.preventDefault(),
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
       }).then(function (e) {
        e.value
         ? (n.reset(), t.hide())
         : 'cancel' === e.dismiss &&
           Swal.fire({
            text: 'فرم شما لغو نشده است !.',
            icon: 'error',
            buttonsStyling: !1,
            confirmButtonText: 'باشه فهمیدم!',
            customClass: { confirmButton: 'btn btn-primary' },
           });
       });
     };
    })());
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTModalTopUpWallet.init();
});
