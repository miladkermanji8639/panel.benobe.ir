﻿'use strict';
var KTAccountSettingsProfileDetails = (function () {
 var e, t;
 return {
  init: function () {
   (e = document.getElementById('kt_account_profile_details_form')) &&
    (e.querySelector('#kt_account_profile_details_submit'),
    (t = FormValidation.formValidation(e, {
     fields: {
      fname: {
       validators: { notEmpty: { message: 'نام و نام خانوادگی الزامی است' } },
      },
      lname: {
       validators: { notEmpty: { message: 'نام خانوادگی الزامی است' } },
      },
      company: { validators: { notEmpty: { message: 'نام شرکت الزامی است' } } },
      phone: {
       validators: { notEmpty: { message: 'شماره تلفن تماس الزامی است' } },
      },
      country: {
       validators: { notEmpty: { message: 'لطفا یک کشور را انتخاب کنید' } },
      },
      timezone: {
       validators: {
        notEmpty: { message: 'لطفاً یک منطقه زمانی انتخاب کنید' },
       },
      },
      'communication[]': {
       validators: {
        notEmpty: { message: 'لطفاً حداقل یک روش ارتباطی را انتخاب کنید' },
       },
      },
      language: {
       validators: { notEmpty: { message: 'لطفا یک زبان را انتخاب کنید' } },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      submitButton: new FormValidation.plugins.SubmitButton(),
      bootstrap: new FormValidation.plugins.Bootstrap5({
       rowSelector: '.fv-row',
       eleInvalidClass: '',
       eleValidClass: '',
      }),
     },
    })),
    $(e.querySelector('[name="country"]')).on('change', function () {
     t.revalidateField('country');
    }),
    $(e.querySelector('[name="language"]')).on('change', function () {
     t.revalidateField('language');
    }),
    $(e.querySelector('[name="timezone"]')).on('change', function () {
     t.revalidateField('timezone');
    }));
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTAccountSettingsProfileDetails.init();
});