﻿'use strict';
var KTCustomerViewPaymentTable = (function () {
 var t,
  e = document.querySelector('#kt_table_customers_payment');
 return {
  init: function () {
   e &&
    (e.querySelectorAll('tbody tr').forEach((t) => {
     const e = t.querySelectorAll('td'),
      n = moment(e[3].innerHTML, 'DD MMM YYYY, LT').format();
     e[3].setAttribute('data-order', n);
    }),
    (t = $(e).DataTable({
     info: !1,
     order: [],
     pageLength: 5,
     lengthChange: !1,
     columnDefs: [{ orderable: !1, targets: 4 }],
    })),
    e
     .querySelectorAll('[data-kt-customer-table-filter="delete_row"]')
     .forEach((e) => {
      e.addEventListener('click', function (e) {
       e.preventDefault();
       const n = e.target.closest('tr'),
        o = n.querySelectorAll('td')[0].innerText;
       Swal.fire({
        text: 'آیا مطمئنید که میخواهید حذف کنید ' + o + '?',
        icon: 'warning',
        showCancelButton: !0,
        buttonsStyling: !1,
        confirmButtonText: 'بله، حذف!',
        cancelButtonText: 'نه، لغو',
        customClass: {
         confirmButton: 'btn fw-bold btn-danger',
         cancelButton: 'btn fw-bold btn-active-light-primary',
        },
       }).then(function (e) {
        e.value
         ? Swal.fire({
            text: 'شما حذف کرده اید ' + o + '!.',
            icon: 'success',
            buttonsStyling: !1,
            confirmButtonText: 'باشه فهمیدم!',
            customClass: { confirmButton: 'btn fw-bold btn-primary' },
           })
            .then(function () {
             t.row($(n)).remove().draw();
            })
            .then(function () {
             toggleToolbars();
            })
         : 'cancel' === e.dismiss &&
           Swal.fire({
            text: customerName + 'حذف نشد.',
            icon: 'error',
            buttonsStyling: !1,
            confirmButtonText: 'باشه فهمیدم!',
            customClass: { confirmButton: 'btn fw-bold btn-primary' },
           });
       });
      });
     }));
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTCustomerViewPaymentTable.init();
});