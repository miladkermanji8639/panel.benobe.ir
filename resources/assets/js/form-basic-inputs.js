/**
 * Form Basic Inputs
 */

'use strict';

(function () {
 const flatpickrDate = document.querySelector('#html5-datetime-local-input'),
  flatpickrDate2 = document.querySelector('#html5-date-input'),
  flatpickrDate3 = document.querySelector('#html5-month-input');

 // Date
 if (flatpickrDate) {
  flatpickrDate.flatpickr({
   enableTime: true,
   locale: 'fa',
   dateFormat: 'Y/m/d H:i',
  });
 }

 if (flatpickrDate2) {
  flatpickrDate2.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   dateFormat: 'Y/m/d',
  });
 }

 if (flatpickrDate3) {
  flatpickrDate3.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   dateFormat: 'Y/m',
  });
 }

 // Indeterminate checkbox
 const checkbox = document.getElementById('defaultCheck2');
 checkbox.indeterminate = true;
})();
