$(function () {
 var c = $('.datatable-project'),
  d = $('.datatable-invoice');
 c.length &&
  c.DataTable({
   ajax: assetsPath + 'json/projects-list.json',
   columns: [
    { data: 'hours' },
    { data: 'project_name' },
    { data: 'total_task' },
    { data: 'progress' },
    { data: 'hours' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (a, s, e, r) {
      return '';
     },
    },
    {
     targets: 1,
     responsivePriority: 1,
     render: function (a, s, e, r) {
      var t = e.project_name,
       n = e.framework,
       i = e.project_image;
      if (i)
       var l =
        '<img src="' +
        assetsPath +
        'img/icons/brands/' +
        i +
        '" alt="Project Image" class="rounded-circle">';
      else {
       var p = Math.floor(Math.random() * 6) + 1,
        m = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        u = m[p],
        t = e.full_name,
        o = t.match(/\b\w/g) || [];
       (o = ((o.shift() || '') + (o.pop() || '')).toUpperCase()),
        (l =
         '<span class="avatar-initial rounded-circle bg-label-' +
         u +
         '">' +
         o +
         '</span>');
      }
      var b =
       '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
       l +
       '</div></div><div class="d-flex flex-column"><span class="text-truncate fw-medium">' +
       t +
       '</span><small class="text-muted">' +
       n +
       '</small></div></div>';
      return b;
     },
    },
    { targets: 2, orderable: !1 },
    {
     targets: 3,
     responsivePriority: 3,
     render: function (a, s, e, r) {
      var t = e.progress + '%',
       n;
      switch (!0) {
       case e.progress < 25:
        n = 'bg-danger';
        break;
       case e.progress < 50:
        n = 'bg-warning';
        break;
       case e.progress < 75:
        n = 'bg-info';
        break;
       case e.progress <= 100:
        n = 'bg-success';
        break;
      }
      return (
       '<div class="d-flex flex-column"><small class="mb-1">' +
       t +
       '</small><div class="progress w-100 me-3" style="height: 6px;"><div class="progress-bar ' +
       n +
       '" style="width: ' +
       t +
       '" aria-valuenow="' +
       t +
       '" aria-valuemin="0" aria-valuemax="100"></div></div></div>'
      );
     },
    },
    { targets: 4, orderable: !1 },
   ],
   order: [[1, 'desc']],
   dom: '<"d-flex justify-content-between align-items-center flex-column flex-sm-row mx-4 row"<"col-sm-4 col-12 d-flex align-items-center justify-content-sm-start justify-content-center"l><"col-sm-8 col-12 d-flex align-items-center justify-content-sm-end justify-content-center"f>>t<"d-flex justify-content-between mx-4 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   displayLength: 7,
   lengthMenu: [7, 10, 25, 50, 75, 100],
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: 'نمایش _MENU_',
    searchPlaceholder: 'جستجوی پروژه',
   },
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var s = a.data();
       return 'جزئیات ' + s.full_name;
      },
     }),
     type: 'column',
     renderer: function (a, s, e) {
      var r = $.map(e, function (t, n) {
       return t.title !== ''
        ? '<tr data-dt-row="' +
           t.rowIndex +
           '" data-dt-column="' +
           t.columnIndex +
           '"><td>' +
           t.title +
           ':</td> <td>' +
           t.data +
           '</td></tr>'
        : '';
      }).join('');
      return r ? $('<table class="table"/><tbody />').append(r) : !1;
     },
    },
   },
  }),
  d.length &&
   d.DataTable({
    ajax: assetsPath + 'json/invoice-list.json',
    columns: [
     { data: '' },
     { data: 'invoice_id' },
     { data: 'invoice_status' },
     { data: 'total' },
     { data: 'issued_date' },
     { data: 'action' },
    ],
    columnDefs: [
     {
      className: 'control',
      responsivePriority: 2,
      targets: 0,
      render: function (a, s, e, r) {
       return '';
      },
     },
     {
      targets: 1,
      render: function (a, s, e, r) {
       var t = e.invoice_id,
        n =
         '<a href="' +
         baseUrl +
         'app/invoice/preview"><span>#' +
         t +
         '</span></a>';
       return n;
      },
     },
     {
      targets: 2,
      render: function (a, s, e, r) {
       var t = e.invoice_status,
        n = e.due_date,
        i = e.balance,
        l = {
         Sent:
          '<span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30"><i class="ti ti-circle-check ti-sm"></i></span>',
         Draft:
          '<span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30"><i class="ti ti-device-floppy ti-sm"></i></span>',
         'Past Due':
          '<span class="badge badge-center rounded-pill bg-label-danger w-px-30 h-px-30"><i class="ti ti-info-circle ti-sm"></i></span>',
         'Partial Payment':
          '<span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30"><i class="ti ti-circle-half-2 ti-sm"></i></span>',
         Paid:
          '<span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30"><i class="ti ti-chart-pie ti-sm"></i></span>',
         Downloaded:
          '<span class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30"><i class="ti ti-arrow-down-circle ti-sm"></i></span>',
        };
       return (
        `<span data-bs-toggle='tooltip' data-bs-html='true' title='<span>پرداخت شد<br> <span class="fw-medium">موجودی:</span> ` +
        i +
        '<br> <span class="fw-medium">تاریخ:</span> ' +
        n +
        "</span>'>" +
        l[t] +
        '</span>'
       );
      },
     },
     {
      targets: 3,
      render: function (a, s, e, r) {
       var t = e.total;
       return t + 'ءتء';
      },
     },
     {
      targets: -1,
      title: 'عملیات',
      orderable: !1,
      render: function (a, s, e, r) {
       return (
        '<div class="d-flex align-items-center"><a href="javascript:;" class="text-body" data-bs-toggle="tooltip" title="ارسال ایمیل"><i class="ti ti-mail me-2 ti-sm"></i></a><a href="' +
        baseUrl +
        'app/invoice/preview" class="text-body" data-bs-toggle="tooltip" title="نمایش"><i class="ti ti-eye mx-2 ti-sm"></i></a><div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow text-body" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a><ul class="dropdown-menu dropdown-menu-end m-0"><li><a href="javascript:;" class="dropdown-item">جزئیات</a></li><li><a href="javascript:;" class="dropdown-item">بایگانی</a></li><div class="dropdown-divider"></div><li><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></li></ul></div></div>'
       );
      },
     },
    ],
    order: [[1, 'desc']],
    dom: '<"row mx-4"<"col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-sm-start mb-3 mb-md-0"l><"col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-sm-end"B>>t<"row mx-4"<"col-md-12 col-lg-6 text-center text-lg-start pb-md-2 pb-lg-0"i><"col-md-12 col-lg-6 d-flex justify-content-center justify-content-lg-end"p>>',
    language: {
     url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
     sLengthMenu: 'نمایش _MENU_',
     search: '',
     searchPlaceholder: 'جستجوی پروژه',
    },
    buttons: [
     {
      extend: 'collection',
      className:
       'btn btn-label-secondary dropdown-toggle float-sm-end mb-3 mb-sm-0 waves-effect waves-light',
      text: '<i class="ti ti-screen-share ti-xs me-2"></i>خروجی گرفتن',
      buttons: [
       {
        extend: 'print',
        text: '<i class="ti ti-printer me-2" ></i>چاپ',
        className: 'dropdown-item',
        exportOptions: { columns: [1, 2, 3, 4] },
       },
       {
        extend: 'csv',
        text: '<i class="ti ti-file-text me-2" ></i>Csv',
        className: 'dropdown-item',
        exportOptions: { columns: [1, 2, 3, 4] },
       },
       {
        extend: 'excel',
        text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
        className: 'dropdown-item',
        exportOptions: { columns: [1, 2, 3, 4] },
       },
       {
        extend: 'pdf',
        text: '<i class="ti ti-file-description me-2"></i>Pdf',
        className: 'dropdown-item',
        exportOptions: { columns: [1, 2, 3, 4] },
       },
       {
        extend: 'copy',
        text: '<i class="ti ti-copy me-2" ></i>کپی',
        className: 'dropdown-item',
        exportOptions: { columns: [1, 2, 3, 4] },
       },
      ],
     },
    ],
    responsive: {
     details: {
      display: $.fn.dataTable.Responsive.display.modal({
       header: function (a) {
        var s = a.data();
        return 'جزئیات ' + s.full_name;
       },
      }),
      type: 'column',
      renderer: function (a, s, e) {
       var r = $.map(e, function (t, n) {
        return t.title !== ''
         ? '<tr data-dt-row="' +
            t.rowIndex +
            '" data-dt-column="' +
            t.columnIndex +
            '"><td>' +
            t.title +
            ':</td> <td>' +
            t.data +
            '</td></tr>'
         : '';
       }).join('');
       return r ? $('<table class="table"/><tbody />').append(r) : !1;
      },
     },
    },
   }),
  d.on('draw.dt', function () {
   var a = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
   );
   a.map(function (s) {
    return new bootstrap.Tooltip(s, { boundary: document.body });
   });
  }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
