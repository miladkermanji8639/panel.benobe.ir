﻿'use strict';
var KTProjectSettings = {
 init: function () {
  !(function () {
   var t;
   $('#kt_datepicker_1').flatpickr();
   var e = document.getElementById('kt_project_settings_form'),
    i = e.querySelector('#kt_project_settings_submit');
   (t = FormValidation.formValidation(e, {
    fields: {
     name: { validators: { notEmpty: { message: 'نام پروژه الزامی است' } } },
     type: { validators: { notEmpty: { message: 'نوع پروژه مورد نیاز است' } } },
     description: {
      validators: { notEmpty: { message: 'Project توضیحات لازم است' } },
     },
     date: { validators: { notEmpty: { message: 'Due Date is required' } } },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     submitButton: new FormValidation.plugins.SubmitButton(),
     bootstrap: new FormValidation.plugins.Bootstrap5({
      rowSelector: '.fv-row',
     }),
    },
   })),
    i.addEventListener('click', function (e) {
     e.preventDefault(),
      t.validate().then(function (t) {
       'Valid' == t
        ? swal.fire({
           text: 'متشکرم! شما تنظیمات پروژه خود را به روز کرده اید',
           icon: 'success',
           buttonsStyling: !1,
           confirmButtonText: 'باشه فهمیدم!',
           customClass: { confirmButton: 'btn fw-bold btn-light-primary' },
          })
        : swal.fire({
           text:
            'متأسفیم ، به نظر می رسد برخی خطاها شناسایی شده است ، لطفاً دوباره امتحان کنید.',
           icon: 'error',
           buttonsStyling: !1,
           confirmButtonText: 'باشه فهمیدم!',
           customClass: { confirmButton: 'btn fw-bold btn-light-primary' },
          });
      });
    });
  })();
 },
};
KTUtil.onDOMContentLoaded(function () {
 KTProjectSettings.init();
});