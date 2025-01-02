$(function () {
 var o = $('.invoice-list-table');
 if (o.length)
  var c = o.DataTable({
   ajax: assetsPath + 'json/invoice-list.json',
   columns: [
    { data: '' },
    { data: 'invoice_id' },
    { data: 'invoice_status' },
    { data: 'issued_date' },
    { data: 'client_name' },
    { data: 'total' },
    { data: 'balance' },
    { data: 'invoice_status' },
    { data: 'action' },
   ],
   columnDefs: [
    {
     className: 'control',
     responsivePriority: 2,
     searchable: !1,
     targets: 0,
     render: function (s, t, a, i) {
      return '';
     },
    },
    {
     targets: 1,
     render: function (s, t, a, i) {
      var e = a.invoice_id,
       n = '<a href="' + baseUrl + 'app/invoice/preview">#' + e + '</a>';
      return n;
     },
    },
    {
     targets: 2,
     render: function (s, t, a, i) {
      var e = a.invoice_status,
       n = a.due_date,
       l = a.balance,
       r = {
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
       `<span data-bs-toggle='tooltip' data-bs-html='true' title='<span>پرداخت شده<br> <span class="fw-medium">موجودی:</span> ` +
       l +
       '<br> <span class="fw-medium">تاریخ:</span> ' +
       n +
       "</span>'>" +
       r[e] +
       '</span>'
      );
     },
    },
    {
     targets: 3,
     responsivePriority: 4,
     render: function (s, t, a, i) {
      var e = a.client_name,
       n = a.service,
       l = a.image;
      if (l !== '')
       var r =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        l +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var p = Math.floor(Math.random() * 6),
        m = ['success', 'danger', 'warning', 'info', 'primary', 'secondary'],
        u = m[p],
        e = a.client_name;
       let d = e.split(' '),
        b = d[0].charAt(0) + '‌' + d[1].charAt(0);
       r =
        '<span class="avatar-initial rounded-circle bg-label-' +
        u +
        '">' +
        b +
        '</span>';
      }
      var v =
       '<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">' +
       r +
       '</div></div><div class="d-flex flex-column"><a href="' +
       baseUrl +
       'pages/profile-user" class="text-body text-truncate"><span class="fw-medium">' +
       e +
       '</span></a><small class="text-truncate text-muted">' +
       n +
       '</small></div></div>';
      return v;
     },
    },
    {
     targets: 4,
     render: function (s, t, a, i) {
      var e = a.total;
      return '<span class="d-none">' + e + '</span>' + e + ' ءتء';
     },
    },
    {
     targets: 5,
     render: function (s, t, a, i) {
      var e = new Date(a.due_date),
       n = e.toLocaleDateString('fa-IR', { month: 'short', day: 'numeric' });
      return n + ' ' + e.getFullYear();
     },
    },
    {
     targets: 6,
     orderable: !1,
     render: function (s, t, a, i) {
      var e = a.balance;
      if (e === 0) {
       var n = 'bg-label-success';
       return '<span class="badge ' + n + '" > پرداخت شد </span>';
      } else return '<span class="d-none">' + e + '</span><bdi>' + e + '</bdi>';
     },
    },
    { targets: 7, visible: !1 },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (s, t, a, i) {
      return (
       '<div class="d-flex align-items-center"><a href="javascript:;" data-bs-toggle="tooltip" class="text-body" data-bs-placement="top" title="ارسال ایمیل"><i class="ti ti-mail mx-2 ti-sm"></i></a><a href="' +
       baseUrl +
       'app/invoice/preview" data-bs-toggle="tooltip" class="text-body" data-bs-placement="top" title="نمایش فاکتور"><i class="ti ti-eye mx-2 ti-sm"></i></a><div class="dropdown"><a href="javascript:;" class="btn dropdown-toggle hide-arrow text-body p-0" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-sm"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">دانلود</a><a href="' +
       baseUrl +
       'app/invoice/edit" class="dropdown-item">ویرایش</a><a href="javascript:;" class="dropdown-item">پرینت</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item delete-record text-danger">حذف</a></div></div></div>'
      );
     },
    },
   ],
   order: [[1, 'desc']],
   dom: '<"row mx-1"<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3"B>><"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-3"f<"invoice_status mb-3 mb-md-0">>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو..',
   },
   buttons: [
    {
     text:
      '<i class="ti ti-plus me-md-1"></i><span class="d-md-inline-block d-none">ایجاد فاکتور</span>',
     className: 'btn btn-primary waves-effect waves-light',
     action: function (s, t, a, i) {
      window.location = baseUrl + 'app/invoice/add';
     },
    },
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (s) {
       var t = s.data();
       return 'جزئیات ' + t.client_name;
      },
     }),
     type: 'column',
     renderer: function (s, t, a) {
      var i = $.map(a, function (e, n) {
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
      return i ? $('<table class="table"/><tbody />').append(i) : !1;
     },
    },
   },
   initComplete: function () {
    this.api()
     .columns(7)
     .every(function () {
      var s = this,
       t = $(
        '<select id="UserRole" class="form-select"><option value=""> انتخاب وضعیت </option></select>',
       )
        .appendTo('.invoice_status')
        .on('change', function () {
         var a = $.fn.dataTable.util.escapeRegex($(this).val());
         s.search(a ? '^' + a : '', !0, !1).draw();
        });
      t.append(
       '<option value="Downloaded" class="text-capitalize">دانلود شده</option>',
      ),
       t.append(
        '<option value="Draft" class="text-capitalize">پیش نویس</option>',
       ),
       t.append(
        '<option value="Paid" class="text-capitalize">پرداخت شده</option>',
       ),
       t.append(
        '<option value="Partial Payment" class="text-capitalize">پرداخت قسطی</option>',
       ),
       t.append(
        '<option value="Past Due" class="text-capitalize">موکول شده</option>',
       ),
       t.append(
        '<option value="Sent" class="text-capitalize">ارسال شده</option>',
       );
     });
   },
  });
 o.on('draw.dt', function () {
  var s = [].slice.call(
   document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  s.map(function (t) {
   return new bootstrap.Tooltip(t, { boundary: document.body });
  });
 }),
  $('.invoice-list-table tbody').on('click', '.delete-record', function () {
   c.row($(this).parents('tr')).remove().draw();
  }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
