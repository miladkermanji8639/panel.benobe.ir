$(function () {
 let l, d, i;
 isDarkStyle
  ? ((l = config.colors_dark.borderColor),
    (d = config.colors_dark.bodyBg),
    (i = config.colors_dark.headingColor))
  : ((l = config.colors.borderColor),
    (d = config.colors.bodyBg),
    (i = config.colors.headingColor));
 var u = $('.datatables-customers'),
  m = $('.select2'),
  x = baseUrl + 'app/ecommerce/customer/details/overview';
 if (m.length) {
  var f = m;
  f.wrap('<div class="position-relative"></div>').select2({
   placeholder: 'ایران',
   dropdownParent: f.parent(),
  });
 }
 if (u.length) {
  var v = u.DataTable({
   ajax: assetsPath + 'json/ecommerce-customer-all.json',
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'customer' },
    { data: 'customer_id' },
    { data: 'country' },
    { data: 'order' },
    { data: 'total_spent' },
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
      var e = s.customer,
       o = s.email,
       t = s.image;
      if (t)
       var c =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        t +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var g = Math.floor(Math.random() * 6),
        b = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        h = b[g];
       e = s.customer;
       let p = e.split(' '),
        C = p[0].charAt(0) + '‌' + p[1].charAt(0);
       c =
        '<span class="avatar-initial rounded-circle bg-label-' +
        h +
        '">' +
        C +
        '</span>';
      }
      var y =
       '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2">' +
       c +
       '</div></div><div class="d-flex flex-column ms-1"><a href="' +
       x +
       '" ><span class="fw-medium">' +
       e +
       '</span></a><small class="text-muted">' +
       o +
       '</small></div></div>';
      return y;
     },
    },
    {
     targets: 3,
     render: function (a, n, s, r) {
      var e = s.customer_id;
      return "<span class='h6 mb-0'>#" + e + '</span>';
     },
    },
    {
     targets: 4,
     render: function (a, n, s, r) {
      var e = s.country,
       o = s.country_code;
      if (o) var t = `<i class ="fis fi fi-${o} rounded-circle me-2 fs-3"></i>`;
      else var t = '<i class ="fis fi fi-xx rounded-circle me-2 fs-3"></i>';
      var c =
       '<div class="d-flex justify-content-start align-items-center customer-country"><div>' +
       t +
       '</div><div><span>' +
       e +
       '</span></div></div>';
      return c;
     },
    },
    {
     targets: 5,
     render: function (a, n, s, r) {
      var e = s.order;
      return '<span>' + e + '</span>';
     },
    },
    {
     targets: 6,
     render: function (a, n, s, r) {
      var e = s.total_spent;
      return '<span class="h6 mb-0">' + e + '</span>';
     },
    },
   ],
   order: [[2, 'desc']],
   dom: '<"card-header d-flex flex-wrap pb-md-2"<"d-flex align-items-center me-5"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end gap-3 gap-sm-0 flex-wrap flex-sm-nowrap"lB>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو سفارش',
   },
   buttons: [
    {
     extend: 'collection',
     className:
      'btn btn-label-secondary dropdown-toggle me-3 waves-effect waves-light',
     text: '<i class="ti ti-download me-1"></i>گرفتن خروجی',
     buttons: [
      {
       extend: 'print',
       text: '<i class="ti ti-printer me-2" ></i>چاپ',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5, 6],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (o, t) {
            t.classList !== void 0 && t.classList.contains('customer-name')
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
         .css('border-color', l)
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
        columns: [1, 2, 3, 4, 5, 6],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (o, t) {
            t.classList !== void 0 && t.classList.contains('customer-name')
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
        columns: [1, 2, 3, 4, 5, 6],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (o, t) {
            t.classList !== void 0 && t.classList.contains('customer-name')
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
        columns: [1, 2, 3, 4, 5, 6],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (o, t) {
            t.classList !== void 0 && t.classList.contains('customer-name')
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
        columns: [1, 2, 3, 4, 5, 6],
        format: {
         body: function (a, n, s) {
          if (a.length <= 0) return a;
          var r = $.parseHTML(a),
           e = '';
          return (
           $.each(r, function (o, t) {
            t.classList !== void 0 && t.classList.contains('customer-name')
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
    {
     text:
      '<i class="ti ti-plus me-0 me-sm-1 mb-1 ti-xs"></i><span class="d-none d-sm-inline-block">افزودن مشتری</span>',
     className: 'add-new btn btn-primary py-2 waves-effect waves-light',
     attr: {
      'data-bs-toggle': 'offcanvas',
      'data-bs-target': '#offcanvasEcommerceCustomerAdd',
     },
    },
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var n = a.data();
       return 'جزئیات ' + n.customer;
      },
     }),
     type: 'column',
     renderer: function (a, n, s) {
      var r = $.map(s, function (e, o) {
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
  });
  $('.dataTables_length').addClass('ms-n2 mt-0 mt-md-3 me-2'),
   $('.dt-action-buttons').addClass('pt-0'),
   $('.dataTables_filter').addClass('ms-n3'),
   $('.dt-buttons').addClass('d-flex flex-wrap');
 }
 $('.datatables-customers tbody').on('click', '.delete-record', function () {
  v.row($(this).parents('tr')).remove().draw();
 }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
(function () {
 const l = document.querySelectorAll('.phone-mask'),
  d = document.getElementById('eCommerceCustomerAddForm');
 l &&
  l.forEach(function (i) {
   new Cleave(i, { phone: !0, phoneRegionCode: 'US' });
  }),
  FormValidation.formValidation(d, {
   fields: {
    customerName: {
     validators: { notEmpty: { message: 'لطفا اسم خود را وارد کنید ' } },
    },
    customerEmail: {
     validators: {
      notEmpty: { message: 'لطفا ایمیل را وارد کنید' },
      emailAddress: { message: 'فرمت ایمیل صحیح نیست' },
     },
    },
   },
   plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap5: new FormValidation.plugins.Bootstrap5({
     eleValidClass: '',
     rowSelector: function (i, u) {
      return '.mb-3';
     },
    }),
    submitButton: new FormValidation.plugins.SubmitButton(),
    autoFocus: new FormValidation.plugins.AutoFocus(),
   },
  });
})();
