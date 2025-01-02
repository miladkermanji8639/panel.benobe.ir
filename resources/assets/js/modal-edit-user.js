/**
 * Edit User
 */

'use strict';

// Select2 (jquery)
$(function () {
 const select2 = $('.select2');

 // Select2 Country
 if (select2.length) {
  select2.each(function () {
   var $this = $(this);
   $this.wrap('<div class="position-relative"></div>').select2({
    placeholder: 'انتخاب کنید',
    dropdownParent: $this.parent(),
   });
  });
 }
});

document.addEventListener('DOMContentLoaded', function (e) {
 (function () {
  // variables
  const modalEditUserTaxID = document.querySelector('.modal-edit-tax-id');
  const modalEditUserPhone = document.querySelector('.phone-number-mask');

  // Prefix
  if (modalEditUserTaxID) {
   new Cleave(modalEditUserTaxID, {
    prefix: 'TIN',
    blocks: [3, 3, 3, 4],
    uppercase: true,
   });
  }

  // Phone Number Input Mask
  if (modalEditUserPhone) {
   new Cleave(modalEditUserPhone, {
    phone: true,
    phoneRegionCode: 'US',
   });
  }

  // Edit user form validation
  FormValidation.formValidation(document.getElementById('editUserForm'), {
   fields: {
    modalEditUserFirstName: {
     validators: {
      notEmpty: {
       message: 'لطفا نام خود را وارد کنید',
      },
      regexp: {
       regexp: /^[a-zA-Zs]+$/,
       message: 'نام باید فقط شامل حروف انگلیسی و فاصله باشد',
      },
     },
    },
    modalEditUserLastName: {
     validators: {
      notEmpty: {
       message: 'لطفا نام خانوادگی خود را وارد کنید',
      },
      regexp: {
       regexp: /^[a-zA-Zs]+$/,
       message: 'نام خانوادگی باید فقط شامل حروف انگلیسی و فاصله باشد',
      },
     },
    },
    modalEditUserName: {
     validators: {
      notEmpty: {
       message: 'لطفا نام کاربری خود را وارد کنید',
      },
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
     // Use this for enabling/changing valid/invalid class
     // eleInvalidClass: '',
     eleValidClass: '',
     rowSelector: '.col-12',
    }),
    submitButton: new FormValidation.plugins.SubmitButton(),
    // Submit the form when all fields are valid
    // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
    autoFocus: new FormValidation.plugins.AutoFocus(),
   },
  });
 })();
});
