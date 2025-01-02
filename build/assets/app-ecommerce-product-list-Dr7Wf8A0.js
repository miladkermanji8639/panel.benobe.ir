$(function () {
 let d, u, p;
 isDarkStyle
  ? ((d = config.colors_dark.borderColor),
    (u = config.colors_dark.bodyBg),
    (p = config.colors_dark.headingColor))
  : ((d = config.colors.borderColor),
    (u = config.colors.bodyBg),
    (p = config.colors.headingColor));
 var m = $('.datatables-products'),
  h = baseUrl + 'app/ecommerce/product/add',
  i = {
   1: { title: 'درانتظار', class: 'bg-label-warning' },
   2: { title: 'منتظر شده', class: 'bg-label-success' },
   3: { title: 'غیرفعال', class: 'bg-label-danger' },
  },
  c = {
   0: { title: 'خانه', key: 'Household' },
   1: { title: 'اتاق', key: 'Office' },
   2: { title: 'الکتریکی', key: 'Electronics' },
   3: { title: 'کفش', key: 'Shoes' },
   4: { title: 'اکسسوری', key: 'Accessories' },
   5: { title: 'بازی', key: 'Game' },
  },
  f = { 0: { title: 'Out_of_Stock' }, 1: { title: 'In_Stock' } },
  g = { 0: { title: 'ناموجود' }, 1: { title: 'موجود' } };
 if (m.length) {
  var v = m.DataTable({
   ajax: assetsPath + 'json/ecommerce-product-list.json',
   columns: [
    { data: 'id' },
    { data: 'id' },
    { data: 'product_name' },
    { data: 'category' },
    { data: 'stock' },
    { data: 'sku' },
    { data: 'price' },
    { data: 'quantity' },
    { data: 'status' },
    { data: '' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (a, r, t, n) {
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
     render: function (a, r, t, n) {
      var e = t.product_name,
       o = t.id,
       s = t.product_brand,
       b = t.image;
      if (b)
       var x =
        '<img src="' +
        assetsPath +
        'img/ecommerce-images/' +
        b +
        '" alt="Product-' +
        o +
        '" class="rounded-2">';
      else {
       var y = Math.floor(Math.random() * 6),
        w = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        k = w[y],
        e = t.product_brand,
        l = e.match(/\b\w/g) || [];
       (l = ((l.shift() || '') + (l.pop() || '')).toUpperCase()),
        (x =
         '<span class="avatar-initial rounded-2 bg-label-' +
         k +
         '">' +
         l +
         '</span>');
      }
      var C =
       '<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper"><div class="avatar avatar me-2 rounded-2 bg-label-secondary">' +
       x +
       '</div></div><div class="d-flex flex-column"><h6 class="text-body text-nowrap mb-0">' +
       e +
       '</h6><small class="text-muted text-truncate d-none d-sm-block">' +
       s +
       '</small></div></div>';
      return C;
     },
    },
    {
     targets: 3,
     responsivePriority: 5,
     render: function (a, r, t, n) {
      var e = c[t.category].title,
       o = c[t.category].key,
       s = {
        Household:
         '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-warning me-2 p-3"><i class="ti ti-home-2 ti-xs"></i></span>',
        Office:
         '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-2 p-3"><i class="ti ti-briefcase ti-xs"></i></span>',
        Electronics:
         '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-danger me-2 p-3"><i class="ti ti-device-mobile ti-xs"></i></span>',
        Shoes:
         '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-success me-2"><i class="ti ti-shoe ti-xs"></i></span>',
        Accessories:
         '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-secondary me-2"><i class="ti ti-device-watch ti-xs"></i></span>',
        Game:
         '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-primary me-2"><i class="ti ti-device-gamepad-2 ti-xs"></i></span>',
       };
      return (
       "<span class='text-truncate d-flex align-items-center'>" +
       s[o] +
       e +
       '</span>'
      );
     },
    },
    {
     targets: 4,
     orderable: !1,
     responsivePriority: 3,
     render: function (a, r, t, n) {
      var e = t.stock,
       o = {
        Out_of_Stock:
         '<label class="switch switch-primary switch-sm"><input type="checkbox" class="switch-input" id="switch"><span class="switch-toggle-slider"><span class="switch-off"></span></span></label>',
        In_Stock:
         '<label class="switch switch-primary switch-sm"><input type="checkbox" class="switch-input" checked=""><span class="switch-toggle-slider"><span class="switch-on"></span></span></label>',
       };
      return (
       "<span class='text-truncate'>" +
       o[f[e].title] +
       '<span class="d-none">' +
       f[e].title +
       '</span></span>'
      );
     },
    },
    {
     targets: 5,
     render: function (a, r, t, n) {
      var e = t.sku;
      return '<span>' + e + '</span>';
     },
    },
    {
     targets: 6,
     render: function (a, r, t, n) {
      var e = t.price;
      return '<span>' + e + '</span>';
     },
    },
    {
     targets: 7,
     responsivePriority: 4,
     render: function (a, r, t, n) {
      var e = t.qty;
      return '<span>' + e + '</span>';
     },
    },
    {
     targets: -2,
     render: function (a, r, t, n) {
      var e = t.status;
      return (
       '<span class="badge ' +
       i[e].class +
       '" text-capitalized>' +
       i[e].title +
       '</span>'
      );
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (a, r, t, n) {
      return '<div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="ti ti-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="ti ti-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:0;" class="dropdown-item">مشاهده</a><a href="javascript:0;" class="dropdown-item">مسدود</a></div></div>';
     },
    },
   ],
   order: [2, 'asc'],
   dom: '<"card-header d-flex border-top rounded-0 flex-wrap py-2"<"me-5 ms-n2 pe-5"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex flex-column align-items-start align-items-md-center justify-content-sm-center mb-3 mb-md-0 pt-0 gap-4 gap-sm-0 flex-sm-row"lB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   lengthMenu: [7, 10, 20, 50, 70, 100],
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو محصول',
   },
   buttons: [
    {
     extend: 'collection',
     className:
      'btn btn-label-secondary dropdown-toggle me-3 waves-effect waves-light',
     text: '<i class="ti ti-download me-1 ti-xs"></i>گرفتن خروجی',
     buttons: [
      {
       extend: 'print',
       text: '<i class="ti ti-printer me-2" ></i>چاپ',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5, 6, 7],
        format: {
         body: function (a, r, t) {
          if (a.length <= 0) return a;
          var n = $.parseHTML(a),
           e = '';
          return (
           $.each(n, function (o, s) {
            s.classList !== void 0 && s.classList.contains('product-name')
             ? (e = e + s.lastChild.firstChild.textContent)
             : s.innerText === void 0
               ? (e = e + s.textContent)
               : (e = e + s.innerText);
           }),
           e
          );
         },
        },
       },
       customize: function (a) {
        $(a.document.body)
         .css('color', p)
         .css('border-color', d)
         .css('background-color', u),
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
        columns: [1, 2, 3, 4, 5, 6, 7],
        format: {
         body: function (a, r, t) {
          if (a.length <= 0) return a;
          var n = $.parseHTML(a),
           e = '';
          return (
           $.each(n, function (o, s) {
            s.classList !== void 0 && s.classList.contains('product-name')
             ? (e = e + s.lastChild.firstChild.textContent)
             : s.innerText === void 0
               ? (e = e + s.textContent)
               : (e = e + s.innerText);
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
        columns: [1, 2, 3, 4, 5, 6, 7],
        format: {
         body: function (a, r, t) {
          if (a.length <= 0) return a;
          var n = $.parseHTML(a),
           e = '';
          return (
           $.each(n, function (o, s) {
            s.classList !== void 0 && s.classList.contains('product-name')
             ? (e = e + s.lastChild.firstChild.textContent)
             : s.innerText === void 0
               ? (e = e + s.textContent)
               : (e = e + s.innerText);
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
        columns: [1, 2, 3, 4, 5, 6, 7],
        format: {
         body: function (a, r, t) {
          if (a.length <= 0) return a;
          var n = $.parseHTML(a),
           e = '';
          return (
           $.each(n, function (o, s) {
            s.classList !== void 0 && s.classList.contains('product-name')
             ? (e = e + s.lastChild.firstChild.textContent)
             : s.innerText === void 0
               ? (e = e + s.textContent)
               : (e = e + s.innerText);
           }),
           e
          );
         },
        },
       },
      },
      {
       extend: 'copy',
       text: '<i class="ti ti-copy me-2"></i>کپی',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5, 6, 7],
        format: {
         body: function (a, r, t) {
          if (a.length <= 0) return a;
          var n = $.parseHTML(a),
           e = '';
          return (
           $.each(n, function (o, s) {
            s.classList !== void 0 && s.classList.contains('product-name')
             ? (e = e + s.lastChild.firstChild.textContent)
             : s.innerText === void 0
               ? (e = e + s.textContent)
               : (e = e + s.innerText);
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
      '<i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span class="d-none d-sm-inline-block">افزودن محصول</span>',
     className: 'add-new btn btn-primary ms-2 ms-sm-0 waves-effect waves-light',
     action: function () {
      window.location.href = h;
     },
    },
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var r = a.data();
       return 'جزئیات ' + r.product_name;
      },
     }),
     type: 'column',
     renderer: function (a, r, t) {
      var n = $.map(t, function (e, o) {
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
      return n ? $('<table class="table"/><tbody />').append(n) : !1;
     },
    },
   },
   initComplete: function () {
    this.api()
     .columns(-2)
     .every(function () {
      var a = this,
       r = $(
        '<select id="ProductStatus" class="form-select text-capitalize"><option value="">وضعیت</option></select>',
       )
        .appendTo('.product_status')
        .on('change', function () {
         var t = $.fn.dataTable.util.escapeRegex($(this).val());
         a.search(t ? '^' + t : '', !0, !1).draw();
        });
      a.data()
       .unique()
       .sort()
       .each(function (t, n) {
        r.append(
         '<option value="' + i[t].title + '">' + i[t].title + '</option>',
        );
       });
     }),
     this.api()
      .columns(3)
      .every(function () {
       var a = this,
        r = $(
         '<select id="ProductCategory" class="form-select text-capitalize"><option value="">دسته بندی</option></select>',
        )
         .appendTo('.product_category')
         .on('change', function () {
          var t = $.fn.dataTable.util.escapeRegex($(this).val());
          a.search(t ? '^' + t + '$' : '', !0, !1).draw();
         });
       a.data()
        .unique()
        .sort()
        .each(function (t, n) {
         r.append(
          '<option value="' + c[t].title + '">' + c[t].title + '</option>',
         );
        });
      }),
     this.api()
      .columns(4)
      .every(function () {
       var a = this,
        r = $(
         '<select id="ProductStock" class="form-select text-capitalize"><option value=""> وضعیت انبار </option></select>',
        )
         .appendTo('.product_stock')
         .on('change', function () {
          var t = $.fn.dataTable.util.escapeRegex($(this).val());
          a.search(t ? '^' + t : '', !0, !1).draw();
         });
       a.data()
        .unique()
        .sort()
        .each(function (t, n) {
         r.append(
          '<option value="' + f[t].title + '">' + g[t].title + '</option>',
         );
        });
      });
   },
  });
  $('.dataTables_length').addClass('mt-2 mt-sm-0 mt-md-3 me-2'),
   $('.dt-buttons').addClass('d-flex flex-wrap');
 }
 $('.datatables-products tbody').on('click', '.delete-record', function () {
  v.row($(this).parents('tr')).remove().draw();
 }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
