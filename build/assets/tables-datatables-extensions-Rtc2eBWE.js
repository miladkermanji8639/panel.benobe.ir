$(function () {
 var d = $('.dt-scrollableTable'),
  n = $('.dt-fixedheader'),
  i = $('.dt-fixedcolumns'),
  o = $('.dt-select-table');
 if (
  (d.length &&
   d.DataTable({
    language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
    ajax: assetsPath + 'json/table-datatable.json',
    columns: [
     { data: 'full_name' },
     { data: 'post' },
     { data: 'email' },
     { data: 'city' },
     { data: 'start_date' },
     { data: 'salary' },
     { data: 'age' },
     { data: 'experience' },
     { data: '' },
     { data: '' },
    ],
    columnDefs: [
     {
      targets: -2,
      render: function (s, l, e, r) {
       var a = e.status,
        t = {
         1: { title: 'استعفاداده', class: 'bg-label-primary' },
         2: { title: 'حرفه‌ای', class: ' bg-label-success' },
         3: { title: 'ردشده', class: ' bg-label-danger' },
         4: { title: 'درحال بررسی', class: ' bg-label-warning' },
         5: { title: 'تایید شده', class: ' bg-label-info' },
        };
       return typeof t[a] > 'u'
        ? s
        : '<span class="badge ' + t[a].class + '">' + t[a].title + '</span>';
      },
     },
     {
      targets: -1,
      title: 'عملیات',
      searchable: !1,
      orderable: !1,
      render: function (s, l, e, r) {
       return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="text-primary ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></div></div><a href="javascript:;" class="item-edit text-body"><i class="text-primary ti ti-pencil"></i></a>';
      },
     },
    ],
    scrollY: '300px',
    scrollX: !0,
    dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   }),
  n.length)
 ) {
  var c = n.DataTable({
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   ajax: assetsPath + 'json/table-datatable.json',
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'id' },
    { data: 'full_name' },
    { data: 'email' },
    { data: 'start_date' },
    { data: 'salary' },
    { data: 'status' },
    { data: '' },
   ],
   columnDefs: [
    {
     className: 'control',
     orderable: !1,
     targets: 0,
     responsivePriority: 3,
     render: function (s, l, e, r) {
      return '';
     },
    },
    {
     targets: 1,
     orderable: !1,
     render: function () {
      return '<input type="checkbox" class="dt-checkboxes form-check-input">';
     },
     checkboxes: {
      selectAllRender: '<input type="checkbox" class="form-check-input">',
     },
     responsivePriority: 4,
    },
    { targets: 2, visible: !1 },
    {
     targets: 3,
     render: function (s, l, e, r) {
      var a = e.avatar,
       t = e.full_name,
       p = e.post;
      if (a)
       var m =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        a +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var f = Math.floor(Math.random() * 6),
        g = ['success', 'danger', 'warning', 'info', 'primary', 'secondary'],
        v = g[f],
        t = e.full_name;
       let u = t.split(' '),
        h = u[0].charAt(0) + '‌' + u[1].charAt(0);
       m =
        '<span class="avatar-initial rounded-circle bg-label-' +
        v +
        '">' +
        h +
        '</span>';
      }
      var y =
       '<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">' +
       m +
       '</div></div><div class="d-flex flex-column ms-2"><span class="emp_name text-truncate">' +
       t +
       '</span><small class="emp_post text-truncate text-muted">' +
       p +
       '</small></div></div>';
      return y;
     },
     responsivePriority: 5,
    },
    { responsivePriority: 1, targets: 4 },
    { responsivePriority: 2, targets: 6 },
    {
     targets: -2,
     render: function (s, l, e, r) {
      var a = e.status,
       t = {
        1: { title: 'استعفاداده', class: 'bg-label-primary' },
        2: { title: 'حرفه‌ای', class: ' bg-label-success' },
        3: { title: 'ردشده', class: ' bg-label-danger' },
        4: { title: 'درحال بررسی', class: ' bg-label-warning' },
        5: { title: 'تایید شده', class: ' bg-label-info' },
       };
      return typeof t[a] > 'u'
       ? s
       : '<span class="badge ' + t[a].class + '">' + t[a].title + '</span>';
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     orderable: !1,
     render: function (s, l, e, r) {
      return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="text-primary ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="text-primary ti ti-pencil"></i></a>';
     },
    },
   ],
   order: [[2, 'desc']],
   dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   displayLength: 7,
   lengthMenu: [7, 10, 25, 50, 75, 100],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (s) {
       var l = s.data();
       return 'جزئیات ' + l.full_name;
      },
     }),
     type: 'column',
     renderer: function (s, l, e) {
      var r = $.map(e, function (a, t) {
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
      return r ? $('<table class="table"/><tbody />').append(r) : !1;
     },
    },
   },
  });
  if (window.Helpers.isNavbarFixed()) {
   var b = $('#layout-navbar').outerHeight();
   new $.fn.dataTable.FixedHeader(c).headerOffset(b);
  } else new $.fn.dataTable.FixedHeader(c);
 }
 i.length &&
  i.DataTable({
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   ajax: assetsPath + 'json/table-datatable.json',
   columns: [
    { data: 'full_name' },
    { data: 'post' },
    { data: 'email' },
    { data: 'city' },
    { data: 'start_date' },
    { data: 'salary' },
    { data: 'age' },
    { data: 'experience' },
    { data: 'status' },
    { data: 'id' },
   ],
   columnDefs: [
    {
     targets: -2,
     render: function (s, l, e, r) {
      var a = e.status,
       t = {
        1: { title: 'استعفاداده', class: 'bg-label-primary' },
        2: { title: 'حرفه‌ای', class: ' bg-label-success' },
        3: { title: 'ردشده', class: ' bg-label-danger' },
        4: { title: 'درحال بررسی', class: ' bg-label-warning' },
        5: { title: 'تایید شده', class: ' bg-label-info' },
       };
      return typeof t[a] > 'u'
       ? s
       : '<span class="badge ' + t[a].class + '">' + t[a].title + '</span>';
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (s, l, e, r) {
      return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="text-primary ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record"></i>حذف</a></div></div><a href="javascript:;" class="item-edit text-body"><i class="text-primary ti ti-pencil"></i></a>';
     },
    },
   ],
   dom: '<"d-flex justify-content-between align-items-center row"<"col-sm-12 col-md-2 d-flex"f><"col-sm-12 col-md-10 d-none"i>>t',
   scrollY: 300,
   scrollX: !0,
   scrollCollapse: !0,
   paging: !1,
   info: !1,
   fixedColumns: !0,
  }),
  o.length &&
   o.DataTable({
    language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
    ajax: assetsPath + 'json/table-datatable.json',
    columns: [
     { data: 'id' },
     { data: 'full_name' },
     { data: 'post' },
     { data: 'email' },
     { data: 'city' },
     { data: 'start_date' },
     { data: 'salary' },
     { data: 'status' },
    ],
    columnDefs: [
     {
      targets: 0,
      searchable: !1,
      orderable: !1,
      render: function () {
       return '<input type="checkbox" class="dt-checkboxes form-check-input">';
      },
      checkboxes: {
       selectRow: !0,
       selectAllRender: '<input type="checkbox" class="form-check-input">',
      },
     },
     {
      targets: -1,
      render: function (s, l, e, r) {
       var a = e.status,
        t = {
         1: { title: 'استعفاداده', class: 'bg-label-primary' },
         2: { title: 'حرفه‌ای', class: ' bg-label-success' },
         3: { title: 'ردشده', class: ' bg-label-danger' },
         4: { title: 'درحال بررسی', class: ' bg-label-warning' },
         5: { title: 'تایید شده', class: ' bg-label-info' },
        };
       return typeof t[a] > 'u'
        ? s
        : '<span class="badge ' + t[a].class + '">' + t[a].title + '</span>';
      },
     },
    ],
    order: [[1, 'desc']],
    dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
    select: { style: 'multi' },
   }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 200);
});
