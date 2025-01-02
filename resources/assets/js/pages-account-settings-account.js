/**
 * Account Settings - Account
 */

'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
 (function () {
  const formAccSettings = document.querySelector('#formAccountSettings'),
   deactivateAcc = document.querySelector('#formAccountDeactivation'),
   deactivateButton = deactivateAcc.querySelector('.deactivate-account');

  // Form validation for Add new record
  if (formAccSettings) {
   const fv = FormValidation.formValidation(formAccSettings, {
    fields: {
     firstName: {
      validators: {
       notEmpty: {
        message: 'لطفا اسم کوچک را وارد کنید',
       },
      },
     },
     lastName: {
      validators: {
       notEmpty: {
        message: 'لطفا نام خانوادگی را وارد کنید',
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

  if (deactivateAcc) {
   const fv = FormValidation.formValidation(deactivateAcc, {
    fields: {
     accountActivation: {
      validators: {
       notEmpty: {
        message: 'لطفا این تیک را بزنید',
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
     fieldStatus: new FormValidation.plugins.FieldStatus({
      onStatusChanged: function (areFieldsValid) {
       areFieldsValid
        ? // Enable the submit button
          // so user has a chance to submit the form again
          deactivateButton.removeAttribute('disabled')
        : // Disable the submit button
          deactivateButton.setAttribute('disabled', 'disabled');
      },
     }),
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

  // Deactivate account alert
  const accountActivation = document.querySelector('#accountActivation');

  // Alert With Functional Confirm Button
  if (deactivateButton) {
   deactivateButton.onclick = function () {
    if (accountActivation.checked == true) {
     Swal.fire({
      text: 'آیا می خواهید حساب خود را حذف کنید؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله',
      customClass: {
       confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
       cancelButton: 'btn btn-label-secondary waves-effect waves-light',
      },
      buttonsStyling: false,
     }).then(function (result) {
      if (result.value) {
       Swal.fire({
        icon: 'success',
        title: 'حذف شد!',
        text: 'حساب شما با موفقیت حذف شد.',
        customClass: {
         confirmButton: 'btn btn-success waves-effect waves-light',
        },
       });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
       Swal.fire({
        title: 'لغو شد',
        text: 'حساب کاربری شما حذف نشد!!',
        icon: 'error',
        customClass: {
         confirmButton: 'btn btn-success waves-effect waves-light',
        },
       });
      }
     });
    }
   };
  }

  // CleaveJS validation

  const phoneNumber = document.querySelector('#phoneNumber'),
   zipCode = document.querySelector('#zipCode');
  // Phone Mask
  if (phoneNumber) {
   new Cleave(phoneNumber, {
    phone: true,
    phoneRegionCode: 'US',
   });
  }

  // Pincode
  if (zipCode) {
   new Cleave(zipCode, {
    delimiter: '',
    numeral: true,
   });
  }

  // Update/reset user image of account page
  let accountUserImage = document.getElementById('uploadedAvatar');
  const fileInput = document.querySelector('.account-file-input'),
   resetFileInput = document.querySelector('.account-image-reset');

  if (accountUserImage) {
   const resetImage = accountUserImage.src;
   fileInput.onchange = () => {
    if (fileInput.files[0]) {
     accountUserImage.src = window.URL.createObjectURL(fileInput.files[0]);
    }
   };
   resetFileInput.onclick = () => {
    fileInput.value = '';
    accountUserImage.src = resetImage;
   };
  }
 })();
});

// Select2 (jquery)
$(function () {
 var select2 = $('.select2');
 // For all Select2
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
