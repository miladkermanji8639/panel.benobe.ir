$(function () {
 var o = $('.datatables-order-details');
 o.length &&
  o.DataTable({
   ajax: assetsPath + 'json/ecommerce-order-details.json',
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   columns: [
    { data: 'id' },
    { data: 'id' },
    { data: 'product_name' },
    { data: 'price' },
    { data: 'qty' },
    { data: '' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (t, r, e, n) {
      return '';
     },
    },
    {
     targets: 1,
     orderable: !1,
     checkboxes: {
      selectAllRender: '<input type="checkbox" class="form-check-input">',
     },
     render: function () {
      return '<input type="checkbox" class="dt-checkboxes form-check-input" >';
     },
     searchable: !1,
    },
    {
     targets: 2,
     responsivePriority: 1,
     searchable: !1,
     orderable: !1,
     render: function (t, r, e, n) {
      var a = e.product_name,
       s = e.product_info,
       c = e.image;
      if (c)
       var d =
        '<img src="' +
        assetsPath +
        'img/products/' +
        c +
        '" alt="product-' +
        a +
        '" class="rounded-2">';
      else {
       var i = Math.floor(Math.random() * 6),
        u = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        f = u[i],
        a = e.product_name,
        l = a.match(/\b\w/g) || [];
       (l = ((l.shift() || '') + (l.pop() || '')).toUpperCase()),
        (d =
         '<span class="avatar-initial rounded-2 bg-label-' +
         f +
         '">' +
         l +
         '</span>');
      }
      var m =
       '<div class="d-flex justify-content-start align-items-center text-nowrap"><div class="avatar-wrapper"><div class="avatar me-2">' +
       d +
       '</div></div><div class="d-flex flex-column"><h6 class="text-body mb-0">' +
       a +
       '</h6><small class="text-muted">' +
       s +
       '</small></div></div>';
      return m;
     },
    },
    {
     targets: 3,
     searchable: !1,
     orderable: !1,
     render: function (t, r, e, n) {
      var a = e.price,
       s = '<span>' + a + 'ءتء</span>';
      return s;
     },
    },
    {
     targets: 4,
     searchable: !1,
     orderable: !1,
     render: function (t, r, e, n) {
      var a = e.qty,
       s = '<span class="text-body">' + a + '</span>';
      return s;
     },
    },
    {
     targets: 5,
     searchable: !1,
     orderable: !1,
     render: function (t, r, e, n) {
      var a = e.qty * e.price,
       s = '<h6 class="mb-0">' + a + 'ءتء</h6>';
      return s;
     },
    },
   ],
   order: [2, ''],
   dom: 't',
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (t) {
       var r = t.data();
       return 'جزئیات ' + r.full_name;
      },
     }),
     type: 'column',
     renderer: function (t, r, e) {
      var n = $.map(e, function (a, s) {
       return a.title !== ''
        ? '<tr data-dt-row="' +
           a.rowIndex +
           '" data-dt-column="' +
           a.columnIndex +
           '"><td>' +
           a.title +
           ':</td> <td>' +
           a.data +
           '</td></tr>'
        : '';
      }).join('');
      return n ? $('<table class="table"/><tbody />').append(n) : !1;
     },
    },
   },
  }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
(function () {
 const o = document.querySelector('.delete-order');
 o &&
  (o.onclick = function () {
   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert order!",
    icon: 'warning',
    showCancelButton: !0,
    confirmButtonText: 'Yes, Delete order!',
    customClass: {
     confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
     cancelButton: 'btn btn-label-secondary waves-effect waves-light',
    },
    buttonsStyling: !1,
   }).then(function (e) {
    e.value
     ? Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Order has been removed.',
        customClass: {
         confirmButton: 'btn btn-success waves-effect waves-light',
        },
       })
     : e.dismiss === Swal.DismissReason.cancel &&
       Swal.fire({
        title: 'Cancelled',
        text: 'Cancelled Delete :)',
        icon: 'error',
        customClass: {
         confirmButton: 'btn btn-success waves-effect waves-light',
        },
       });
   });
  });
 function t() {
  var e = new Date().getFullYear();
  return e;
 }
 var r = t();
 document.getElementById('orderYear').innerHTML = r;
})();
