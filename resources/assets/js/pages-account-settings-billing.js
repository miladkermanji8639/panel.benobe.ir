/**
 * Account Settings - Billing & Plans
 */

'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
 (function () {
  const creditCardMask = document.querySelector('.credit-card-mask'),
   expiryDateMask = document.querySelector('.expiry-date-mask'),
   CVVMask = document.querySelector('.cvv-code-mask');

  // Credit Card
  if (creditCardMask) {
   new Cleave(creditCardMask, {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
     if (type != '' && type != 'unknown') {
      document.querySelector('.card-type').innerHTML =
       '<img src="' +
       assetsPath +
       'img/icons/payments/' +
       type +
       '-cc.png" height="28"/>';
     } else {
      document.querySelector('.card-type').innerHTML = '';
     }
    },
   });
  }

  // Expiry Date Mask
  if (expiryDateMask) {
   new Cleave(expiryDateMask, {
    date: true,
    delimiter: '/',
    datePattern: ['m', 'y'],
   });
  }

  // CVV Mask
  if (CVVMask) {
   new Cleave(CVVMask, {
    numeral: true,
    numeralPositiveOnly: true,
   });
  }

  const formAccSettings = document.getElementById('formAccountSettings'),
   mobileNumber = document.querySelector('.mobile-number'),
   zipCode = document.querySelector('.zip-code'),
   creditCardForm = document.getElementById('creditCardForm');

  // Form validation
  if (formAccSettings) {
   const fv = FormValidation.formValidation(formAccSettings, {
    fields: {
     companyName: {
      validators: {
       notEmpty: {
        message: 'لطفا اسم شرکت را وارد کنید',
       },
      },
     },
     billingEmail: {
      validators: {
       notEmpty: {
        message: 'لطفا آدرس را وارد کنید',
       },
       emailAddress: {
        message: 'لطفا آدرس صحیح وارد کنید',
       },
      },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-sm-6',
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     // Submit the form when all fields are valid
     // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
   });
  }

  // Credit card form validation
  if (creditCardForm) {
   FormValidation.formValidation(creditCardForm, {
    fields: {
     paymentCard: {
      validators: {
       notEmpty: {
        message: 'لطفا شماره کارت وارد کنید',
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
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     // Submit the form when all fields are valid
     // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
    init: (instance) => {
     instance.on('plugins.message.placed', function (e) {
      //* Move the error message out of the `input-group` element
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

  // Cancel Subscription alert
  const cancelSubscription = document.querySelector('.cancel-subscription');

  // Alert With Functional Confirm Button
  if (cancelSubscription) {
   cancelSubscription.onclick = function () {
    Swal.fire({
     text: 'آیا شما می خواهید اشتراک خود را لغو کنید؟',
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
       title: 'لغو شد!',
       text: 'اشتراک شما با موفقیت لغو شد.',
       customClass: {
        confirmButton: 'btn btn-success waves-effect waves-light',
       },
      });
     } else if (result.dismiss === Swal.DismissReason.cancel) {
     }
    });
   };
  }
  // CleaveJS validation

  // Phone Mask
  if (mobileNumber) {
   new Cleave(mobileNumber, {
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
 })();
});

// Select2 (jquery)
$(function () {
 var select2 = $('.select2');

 // Select2
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
