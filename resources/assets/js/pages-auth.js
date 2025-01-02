/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
 (function () {
  // Form validation for Add new record
  if (formAuthentication) {
   const fv = FormValidation.formValidation(formAuthentication, {
    fields: {
     username: {
      validators: {
       notEmpty: {
        message: 'لطفا نام کاربری را وارد کنید',
       },
       stringLength: {
        min: 6,
        message: 'نام کاربری باید بیشتر از 6 کارکتر باشد',
       },
      },
     },
     email: {
      validators: {
       notEmpty: {
        message: 'ایمیل را وارد کنید',
       },
       emailAddress: {
        message: 'فرمت ایمیل صحیح نیست',
       },
      },
     },
     'email-username': {
      validators: {
       notEmpty: {
        message: 'ایمیل / نام کاربری را وارد کنید',
       },
       stringLength: {
        min: 6,
        message: 'نام کاربری باید بیشتر از 6 کارکتر باشد',
       },
      },
     },
     password: {
      validators: {
       notEmpty: {
        message: 'رمز ورود را وارد کنید',
       },
       stringLength: {
        min: 6,
        message: 'رمز ورود باید بیشتر از 6 کارکتر باشد',
       },
      },
     },
     'confirm-password': {
      validators: {
       notEmpty: {
        message: 'تایید رمز را وارد کنید',
       },
       identical: {
        compare: function () {
         return formAuthentication.querySelector('[name="password"]').value;
        },
        message: 'رمز و تاییدش یکسان نیستند',
       },
       stringLength: {
        min: 6,
        message: 'رمز ورود باید بیشتر از 6 کارکتر باشد',
       },
      },
     },
     terms: {
      validators: {
       notEmpty: {
        message: 'لطفا قوانین را بپذیرید',
       },
      },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.mb-3',
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),

     defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
    init: (instance) => {
     instance.on('plugins.message.placed', function (e) {
      if (e.element.parentElement.classList.contains('input-group')) {
       e.element.parentElement.insertAdjacentElement(
        'afterend',
        e.messageElement,
       );
      }
     });
    },
   });
  }

  //  Two Steps Verification
  const numeralMask = document.querySelectorAll('.numeral-mask');

  // Verification masking
  if (numeralMask.length) {
   numeralMask.forEach((e) => {
    new Cleave(e, {
     numeral: true,
    });
   });
  }
 })();
});
