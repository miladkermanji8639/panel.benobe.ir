/**
 * App eCommerce Customer Detail - delete customer Script
 */
'use strict';

(function () {
 const deleteCustomer = document.querySelector('.delete-customer');

 // Suspend User javascript
 if (deleteCustomer) {
  deleteCustomer.onclick = function () {
   Swal.fire({
    title: 'پیام تایید',
    text: 'این عملیات راه بازگشتی ندارد!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'بله حذف کن!',
    cancelButtonText: 'بازگشت',
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
      text: 'کاربر با موفقیت حذف شد.',
      confirmButtonText: 'باشه',
      customClass: {
       confirmButton: 'btn btn-success waves-effect waves-light',
      },
     });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
     Swal.fire({
      title: 'لغو شد',
      text: 'حذف نشد :)',
      icon: 'error',
      confirmButtonText: 'باشه',
      customClass: {
       confirmButton: 'btn btn-success waves-effect waves-light',
      },
     });
    }
   });
  };
 }

 //? Billing page have multiple buttons
 // Cancel Subscription alert
 // Cancel Subscription alert
 const cancelSubscription = document.querySelectorAll('.cancel-subscription');

 // Alert With Functional Confirm Button
 if (cancelSubscription) {
  cancelSubscription.forEach((btnCancle) => {
   btnCancle.onclick = function () {
    Swal.fire({
     text: 'آیا می خواهید اشتراک را لغو کنید؟',
     icon: 'warning',
     showCancelButton: true,
     confirmButtonText: 'بله',
     cancelButtonText: 'خیر',
     customClass: {
      confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
      cancelButton: 'btn btn-label-secondary waves-effect waves-light',
     },
     buttonsStyling: false,
    }).then(function (result) {
     if (result.value) {
      Swal.fire({
       icon: 'success',
       title: 'اشتراک لغو شد!',
       text: 'اشتراک با موفقیت لغو شد.',
       confirmButtonText: 'باشه',
       customClass: {
        confirmButton: 'btn btn-success waves-effect waves-light',
       },
      });
     } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
       title: 'لغو شد',
       text: 'اشتراک لغو نشد!',
       icon: 'error',
       confirmButtonText: 'باشه',
       customClass: {
        confirmButton: 'btn btn-success waves-effect waves-light',
       },
      });
     }
    });
   };
  });
 }
})();
