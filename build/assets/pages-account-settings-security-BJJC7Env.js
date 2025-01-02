document.addEventListener('DOMContentLoaded', function (n) {
 (function () {
  const e = document.querySelector('#formAccountSettings'),
   o = document.querySelector('#formAccountSettingsApiKey');
  e &&
   FormValidation.formValidation(e, {
    fields: {
     currentPassword: {
      validators: {
       notEmpty: { message: 'لطفا رمز فعلی خود را وارد کنید' },
       stringLength: { min: 8, message: 'رمز باید بیشتر از 8 کارکتر باشد' },
      },
     },
     newPassword: {
      validators: {
       notEmpty: { message: 'رمز جدید را وارد کنید' },
       stringLength: { min: 8, message: 'رمز باید بیشتر از 8 کارکتر باشد' },
      },
     },
     confirmPassword: {
      validators: {
       notEmpty: { message: 'لطفا تایید رمز را وارد کنید' },
       identical: {
        compare: function () {
         return e.querySelector('[name="newPassword"]').value;
        },
        message: 'رمز جدید و تاییدش باید یکسان باشند',
       },
       stringLength: { min: 8, message: 'رمز باید بیشتر از 8 کارکتر باشد' },
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
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
    init: (i) => {
     i.on('plugins.message.placed', function (t) {
      t.element.parentElement.classList.contains('input-group') &&
       t.element.parentElement.insertAdjacentElement(
        'afterend',
        t.messageElement,
       );
     });
    },
   }),
   o &&
    FormValidation.formValidation(o, {
     fields: {
      apiKey: {
       validators: { notEmpty: { message: 'نام کلید وبسرویس را وارد کنید' } },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: '' }),
      submitButton: new FormValidation.plugins.SubmitButton(),
      autoFocus: new FormValidation.plugins.AutoFocus(),
     },
     init: (i) => {
      i.on('plugins.message.placed', function (t) {
       t.element.parentElement.classList.contains('input-group') &&
        t.element.parentElement.insertAdjacentElement(
         'afterend',
         t.messageElement,
        );
      });
     },
    });
 })();
});
$(function () {
 var n = $('.select2');
 n.length &&
  n.each(function () {
   var e = $(this);
   e.wrap('<div class="position-relative"></div>'),
    e.select2({ dropdownParent: e.parent() });
  });
});
