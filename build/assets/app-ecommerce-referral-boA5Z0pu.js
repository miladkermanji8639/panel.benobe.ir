$(function () {
 let o, d, i;
 isDarkStyle
  ? ((o = config.colors_dark.borderColor),
    (d = config.colors_dark.bodyBg),
    (i = config.colors_dark.headingColor))
  : ((o = config.colors.borderColor),
    (d = config.colors.bodyBg),
    (i = config.colors.headingColor));
 var c = $('.datatables-referral'),
  p = baseUrl + 'app/ecommerce/customer/details/overview',
  u = {
   1: { title: 'پرداخت شده', class: 'bg-label-success' },
   2: { title: 'پرداخت نشده', class: 'bg-label-warning' },
   3: { title: 'ردشده', class: 'bg-label-danger' },
  };
 c.length &&
  (c.DataTable({
   ajax: assetsPath + 'json/ecommerce-referral.json',
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'user' },
    { data: 'referred_id' },
    { data: 'status' },
    { data: 'value' },
    { data: 'earning' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (a, n, s, r) {
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
     responsivePriority: 1,
     render: function (a, n, s, r) {
      var e = s.user,
       l = s.email,
       t = s.avatar;
      if (t)
       var f =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        t +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var x = Math.floor(Math.random() * 6),
        b = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        h = b[x];
       e = s.user;
       let m = e.split(' '),
        v = m[0].charAt(0) + '‌' + m[1].charAt(0);
       f =
        '<span class="avatar-initial rounded-circle bg-label-' +
        h +
        '">' +
        v +
        '</span>';
      }
      var g =
       '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2">' +
       f +
       '</div></div><div class="d-flex flex-column ms-2"><a href="' +
       p +
       '"><span class="fw-medium">' +
       e +
       '</span></a><small class="text-muted text-nowrap">' +
       l +
       '</small></div></div>';
      return g;
     },
    },
    {
     targets: 3,
     render: function (a, n, s, r) {
      var e = s.referred_id;
      return '<span>' + e + '</span>';
     },
    },
    {
     targets: 4,
     render: function (a, n, s, r) {
      var e = s.status;
      return (
       '<span class="badge ' +
       u[e].class +
       '" text-capitalized>' +
       u[e].title +
       '</span>'
      );
     },
    },
    {
     targets: 5,
     render: function (a, n, s, r) {
      var e = s.value;
      return '<span>' + e + '</span>';
     },
    },
    {
     targets: 6,
     render: function (a, n, s, r) {
      var e = s.earning;
      return '<span class="h6 mb-0">' + e + '</span > ';
     },
    },
   ],
   order: [[2, 'asc']],
   dom: '<"card-header d-flex flex-column flex-sm-row pb-md-0 align-items-start align-items-sm-center pt-4 pt-md-2"<"head-label"><"d-flex align-items-sm-center justify-content-end mt-2 mt-sm-0"l<"dt-action-buttons"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
   },
   buttons: [
    {
     extend: 'collection',
     className:
      'btn btn-label-secondary dropdown-toggle waves-effect waves-light',
     text: '<i class="ti ti-download me-1"></i>گرفتن خروجی',
     buttons: [
      {
       extend: 'print',
       text: '<i class="ti ti-printer me-2"></i>چاپ',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (l, t) {
            t.classList !== void 0 && t.classList.contains('user-name')
             ? (e = e + t.lastChild.firstChild.textContent)
             : t.innerText === void 0
               ? (e = e + t.textContent)
               : (e = e + t.innerText);
           }),
           e
          );
         },
        },
       },
       customize: function (a) {
        $(a.document.body)
         .css('color', i)
         .css('border-color', o)
         .css('background-color', d),
         $(a.document.body)
          .find('table')
          .addClass('compact')
          .css('color', 'inherit')
          .css('border-color', 'inherit')
          .css('background-color', 'inherit');
       },
      },
      {
       extend: 'csv',
       text: '<i class="ti ti-file me-2" ></i>Csv',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (l, t) {
            t.classList !== void 0 && t.classList.contains('user-name')
             ? (e = e + t.lastChild.firstChild.textContent)
             : t.innerText === void 0
               ? (e = e + t.textContent)
               : (e = e + t.innerText);
           }),
           e
          );
         },
        },
       },
      },
      {
       extend: 'excel',
       text: '<i class="ti ti-file-export me-2"></i>Excel',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (l, t) {
            t.classList !== void 0 && t.classList.contains('user-name')
             ? (e = e + t.lastChild.firstChild.textContent)
             : t.innerText === void 0
               ? (e = e + t.textContent)
               : (e = e + t.innerText);
           }),
           e
          );
         },
        },
       },
      },
      {
       extend: 'pdf',
       text: '<i class="ti ti-file-text me-2"></i>Pdf',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (l, t) {
            t.classList !== void 0 && t.classList.contains('user-name')
             ? (e = e + t.lastChild.firstChild.textContent)
             : t.innerText === void 0
               ? (e = e + t.textContent)
               : (e = e + t.innerText);
           }),
           e
          );
         },
        },
       },
      },
      {
       extend: 'copy',
       text: '<i class="ti ti-copy me-2" ></i>کپی',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (l, t) {
            t.classList !== void 0 && t.classList.contains('user-name')
             ? (e = e + t.lastChild.firstChild.textContent)
             : t.innerText === void 0
               ? (e = e + t.textContent)
               : (e = e + t.innerText);
           }),
           e
          );
         },
        },
       },
      },
     ],
    },
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var n = a.data();
       return 'جزئیات ' + n.user;
      },
     }),
     type: 'column',
     renderer: function (a, n, s) {
      var r = $.map(s, function (e, l) {
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
      return r ? $('<table class="table"/><tbody />').append(r) : !1;
     },
    },
   },
  }),
  $('div.head-label').html(
   '<h5 class="card-title text-nowrap mb-2 mb-sm-0">کاربران دعوت شده</h5>',
  ),
  $('.dataTables_length').addClass('mt-0 mt-md-3 me-2 ms-n2 ms-sm-0'),
  $('.dt-action-buttons').addClass('pt-0')),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
