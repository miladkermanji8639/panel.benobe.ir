$(function () {
 var n = $('.datatables-customer-order'),
  o = baseUrl + 'app/ecommerce/order/details',
  d = {
   1: { title: 'آماده بارگیری', class: 'bg-label-info' },
   2: { title: 'ناموفق', class: 'bg-label-warning' },
   3: { title: 'تحویل داده', class: 'bg-label-success' },
   4: { title: 'تحویل دیرهنگام', class: 'bg-label-primary' },
  };
 if (n.length) {
  var c = n.DataTable({
   ajax: assetsPath + 'json/ecommerce-customer-order.json',
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'order' },
    { data: 'date' },
    { data: 'status' },
    { data: 'spent' },
    { data: ' ' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (a, r, t, s) {
      return '';
     },
    },
    {
     targets: 1,
     orderable: !1,
     searchable: !1,
     responsivePriority: 3,
     checkboxes: !0,
     render: function () {
      return '<input type="checkbox" class="dt-checkboxes form-check-input">';
     },
     checkboxes: {
      selectAllRender: '<input type="checkbox" class="form-check-input">',
     },
    },
    {
     targets: 2,
     responsivePriority: 4,
     render: function (a, r, t, s) {
      var e = t.order;
      return (
       "<a href='" + o + "' class='fw-medium'><span>#" + e + '</span></a>'
      );
     },
    },
    {
     targets: 3,
     render: function (a, r, t, s) {
      var e = new Date(t.date),
       l = e.toLocaleDateString('fa-IR', { month: 'short', day: 'numeric' });
      return (
       '<span class="text-nowrap">' + l + ' ' + e.getFullYear() + '</span > '
      );
     },
    },
    {
     targets: 4,
     render: function (a, r, t, s) {
      var e = t.status;
      return (
       '<span class="badge ' +
       d[e].class +
       '" text-capitalized>' +
       d[e].title +
       '</span>'
      );
     },
    },
    {
     targets: 5,
     render: function (a, r, t, s) {
      var e = t.spent;
      return '<span >' + e + '</span>';
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (a, r, t, s) {
      return '<div class="text-xxl-center"><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">مشاهده</a><a href="javascript:;" class="dropdown-item  delete-record">حذف</a></div></div>';
     },
    },
   ],
   order: [[2, 'desc']],
   dom: '<"card-header flex-column flex-md-row py-2"<"head-label text-center pt-2 pt-md-0">f>t<"row mx-4"<"col-md-12 col-xl-6 text-center text-xl-start pb-2 pb-lg-0 pe-0"i><"col-md-12 col-xl-6 d-flex justify-content-center justify-content-xl-end"p>>',
   lengthMenu: [6, 30, 50, 70, 100],
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو سفارش',
   },
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var r = a.data();
       return 'جزئیات ' + r.order;
      },
     }),
     type: 'column',
     renderer: function (a, r, t) {
      var s = $.map(t, function (e, l) {
       return e.title !== ''
        ? '<tr data-dt-row="' +
           e.rowIndex +
           '" data-dt-column="' +
           e.columnIndex +
           '"><td>' +
           e.title +
           ':</td> <td>' +
           e.data +
           '</td></tr>'
        : '';
      }).join('');
      return s ? $('<table class="table"/><tbody />').append(s) : !1;
     },
    },
   },
  });
  $('div.head-label').html(
   '<h5 class="card-title mb-0 text-nowrap">سفارشات</h5>',
  );
 }
 $('.datatables-orders tbody').on('click', '.delete-record', function () {
  c.row($(this).parents('tr')).remove().draw();
 }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
