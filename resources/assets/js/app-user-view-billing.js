/**
 * App User View - Billing
 */

'use strict';

(function () {
 // Cancel Subscription alert
 const cancelSubscription = document.querySelector('.cancel-subscription');

 // Alert With Functional Confirm Button
 if (cancelSubscription) {
  cancelSubscription.onclick = function () {
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
 }

 // On edit address click, update text of add address modal
 const addressEdit = document.querySelector('.edit-address'),
  addressTitle = document.querySelector('.address-title'),
  addressSubTitle = document.querySelector('.address-subtitle');

 addressEdit.onclick = function () {
  addressTitle.innerHTML = 'ویرایش آدرس'; // reset text
  addressSubTitle.innerHTML = 'آدرس فعلی خود را تغییر دهید';
 };
})();
