$(function () {
 const t = $('.select2');
 t.length &&
  t.each(function () {
   var e = $(this);
   e.wrap('<div class="position-relative"></div>').select2({
    placeholder: 'انتخاب کنید',
    dropdownParent: e.parent(),
   });
  });
});
document.addEventListener('DOMContentLoaded', function (t) {
 (function () {
  const e = document.querySelector('.modal-edit-tax-id'),
   o = document.querySelector('.phone-number-mask');
  e && new Cleave(e, { prefix: 'TIN', blocks: [3, 3, 3, 4], uppercase: !0 }),
   o && new Cleave(o, { phone: !0, phoneRegionCode: 'US' }),
   FormValidation.formValidation(document.getElementById('editUserForm'), {
    fields: {
     modalEditUserFirstName: {
      validators: {
       notEmpty: { message: 'لطفا نام خود را وارد کنید' },
       regexp: {
        regexp: /^[a-zA-Zs]+$/,
        message: 'نام باید فقط شامل حروف انگلیسی و فاصله باشد',
       },
      },
     },
     modalEditUserLastName: {
      validators: {
       notEmpty: { message: 'لطفا نام خانوادگی خود را وارد کنید' },
       regexp: {
        regexp: /^[a-zA-Zs]+$/,
        message: 'نام خانوادگی باید فقط شامل حروف انگلیسی و فاصله باشد',
       },
      },
     },
     modalEditUserName: {
      validators: {
       notEmpty: { message: 'لطفا نام کاربری خود را وارد کنید' },
       stringLength: {
        min: 6,
        max: 30,
        message: 'نام کاربری باید بین 6 تا 30 کارکتر باشد',
       },
       regexp: {
        regexp: /^[a-zA-Z0-9 ]+$/,
        message: 'نام کاربری باید فقط شامل حروف انگلیسی و اعداد باشد',
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
