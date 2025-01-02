$(function () {
 const e = $('.select2');
 e.length &&
  e.each(function () {
   var t = $(this);
   t.wrap('<div class="position-relative"></div>').select2({
    placeholder: 'انتخاب کنید',
    dropdownParent: t.parent(),
   });
  });
});
document.addEventListener('DOMContentLoaded', function () {
 (function () {
  document
   .getElementById('addNewAddress')
   .addEventListener('show.bs.modal', function (t) {
    window.Helpers.initCustomOptionCheck();
   }),
   FormValidation.formValidation(document.getElementById('addNewAddressForm'), {
    fields: {
     modalAddressFirstName: {
      validators: {
       notEmpty: { message: 'نام خود را وارد کنید' },
       regexp: {
        regexp: /^[a-zA-Zs]+$/,
        message: 'نام باید فقط شامل حروف الفبا انگلیسی و فاصله باشد',
       },
      },
     },
     modalAddressLastName: {
      validators: {
       notEmpty: { message: 'نام خانوادگی خود را وارد کنید' },
       regexp: {
        regexp: /^[a-zA-Zs]+$/,
        message: 'نام خانوادگی باید فقط شامل حروف الفبا انگلیسی و فاصله باشد',
       },
      },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-12',
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
   });
 })();
});
