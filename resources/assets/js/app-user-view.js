/**
 * App User View - Suspend User Script
 */
'use strict';

(function () {
 const suspendUser = document.querySelector('.suspend-user');

 // Suspend User javascript
 if (suspendUser) {
  suspendUser.onclick = function () {
   Swal.fire({
    title: 'پیام تایید',
    text: 'شما نمی توانید مجدد کاربر را فعال کنید!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'بله مسدودش کن!',
    customClass: {
     confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
     cancelButton: 'btn btn-label-secondary waves-effect waves-light',
    },
    buttonsStyling: false,
   }).then(function (result) {
    if (result.value) {
     Swal.fire({
      icon: 'success',
      title: 'مسدود شد!',
      text: 'کاربر درحال حاضر مسدود است.',
      customClass: {
       confirmButton: 'btn btn-success waves-effect waves-light',
      },
     });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
     Swal.fire({
      title: 'لغو شده',
      text: 'این کاربر مسدود نشد :)',
      icon: 'error',
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
       customClass: {
        confirmButton: 'btn btn-success waves-effect waves-light',
       },
      });
     } else if (result.dismiss === Swal.DismissReason.cancel) {
     }
    });
   };
  });
 }
})();
