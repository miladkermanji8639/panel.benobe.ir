/**
 * Account Settings - Security
 */

'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
 (function () {
  const formChangePass = document.querySelector('#formAccountSettings'),
   formApiKey = document.querySelector('#formAccountSettingsApiKey');

  // Form validation for Change password
  if (formChangePass) {
   const fv = FormValidation.formValidation(formChangePass, {
    fields: {
     currentPassword: {
      validators: {
       notEmpty: {
        message: 'لطفا رمز فعلی خود را وارد کنید',
       },
       stringLength: {
        min: 8,
        message: 'رمز باید بیشتر از 8 کارکتر باشد',
       },
      },
     },
     newPassword: {
      validators: {
       notEmpty: {
        message: 'رمز جدید را وارد کنید',
       },
       stringLength: {
        min: 8,
        message: 'رمز باید بیشتر از 8 کارکتر باشد',
       },
      },
     },
     confirmPassword: {
      validators: {
       notEmpty: {
        message: 'لطفا تایید رمز را وارد کنید',
       },
       identical: {
        compare: function () {
         return formChangePass.querySelector('[name="newPassword"]').value;
        },
        message: 'رمز جدید و تاییدش باید یکسان باشند',
       },
       stringLength: {
        min: 8,
        message: 'رمز باید بیشتر از 8 کارکتر باشد',
       },
      },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-md-6',
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     // Submit the form when all fields are valid
     // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
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

  // Form validation for API key
  if (formApiKey) {
   const fvApi = FormValidation.formValidation(formApiKey, {
    fields: {
     apiKey: {
      validators: {
       notEmpty: {
        message: 'نام کلید وبسرویس را وارد کنید',
       },
      },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     // Submit the form when all fields are valid
     // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
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
 })();
});

// Select2 (jquery)
$(function () {
 var select2 = $('.select2');

 // Select2 API Key
 if (select2.length) {
  select2.each(function () {
   var $this = $(this);
   $this.wrap('<div class="position-relative"></div>');
   $this.select2({
    dropdownParent: $this.parent(),
   });
  });
 }
});
