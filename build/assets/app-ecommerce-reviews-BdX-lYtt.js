(function () {
 let l;
 isDarkStyle
  ? (config.colors_dark.cardColor,
    (l = config.colors_dark.textMuted),
    config.colors_dark.headingColor)
  : (config.colors.cardColor,
    (l = config.colors.textMuted),
    config.colors.headingColor);
 const d = document.querySelector('#reviewsChart'),
  u = {
   chart: { height: 160, width: 190, type: 'bar', toolbar: { show: !1 } },
   plotOptions: {
    bar: {
     barHeight: '75%',
     columnWidth: '40%',
     startingShape: 'rounded',
     endingShape: 'rounded',
     borderRadius: 5,
     distributed: !0,
    },
   },
   grid: { show: !1, padding: { top: -25, bottom: -12 } },
   colors: [
    config.colors_label.success,
    config.colors_label.success,
    config.colors_label.success,
    config.colors_label.success,
    config.colors.success,
    config.colors_label.success,
    config.colors_label.success,
   ],
   dataLabels: { enabled: !1 },
   series: [{ data: [20, 40, 60, 80, 100, 80, 60] }],
   legend: { show: !1 },
   xaxis: {
    categories: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    labels: { style: { colors: l, fontSize: '13px' } },
   },
   yaxis: { labels: { show: !1 } },
   responsive: [
    {
     breakpoint: 0,
     options: {
      chart: { width: '100%' },
      plotOptions: { bar: { columnWidth: '40%' } },
     },
    },
    {
     breakpoint: 1440,
     options: {
      chart: { height: 150, width: 190, toolbar: { show: !1 } },
      plotOptions: { bar: { borderRadius: 6, columnWidth: '40%' } },
     },
    },
    {
     breakpoint: 1400,
     options: { plotOptions: { bar: { borderRadius: 6, columnWidth: '40%' } } },
    },
    {
     breakpoint: 1200,
     options: {
      chart: { height: 130, width: 190, toolbar: { show: !1 } },
      plotOptions: { bar: { borderRadius: 6, columnWidth: '40%' } },
     },
    },
    {
     breakpoint: 992,
     chart: { height: 150, width: 190, toolbar: { show: !1 } },
     options: { plotOptions: { bar: { borderRadius: 5, columnWidth: '40%' } } },
    },
    {
     breakpoint: 883,
     options: { plotOptions: { bar: { borderRadius: 5, columnWidth: '40%' } } },
    },
    {
     breakpoint: 768,
     options: {
      chart: { height: 150, width: 190, toolbar: { show: !1 } },
      plotOptions: { bar: { borderRadius: 4, columnWidth: '40%' } },
     },
    },
    {
     breakpoint: 576,
     options: {
      chart: { width: '100%', height: '200', type: 'bar' },
      plotOptions: { bar: { borderRadius: 6, columnWidth: '30% ' } },
     },
    },
    {
     breakpoint: 420,
     options: {
      plotOptions: {
       chart: { width: '100%', height: '200', type: 'bar' },
       bar: { borderRadius: 3, columnWidth: '30%' },
      },
     },
    },
   ],
  };
 typeof d !== void 0 && d !== null && new ApexCharts(d, u).render();
})();
$(function () {
 let l, d, u;
 isDarkStyle
  ? ((l = config.colors_dark.borderColor),
    (d = config.colors_dark.bodyBg),
    (u = config.colors_dark.headingColor))
  : ((l = config.colors.borderColor),
    (d = config.colors.bodyBg),
    (u = config.colors.headingColor));
 var m = $('.datatables-review'),
  x = baseUrl + 'app/ecommerce/customer/details/overview',
  g = {
   Pending: { title: 'درانتظار تایید', class: 'bg-label-warning' },
   Published: { title: 'منتشر شده', class: 'bg-label-success' },
  };
 if (m.length) {
  var w = m.DataTable({
   ajax: assetsPath + 'json/app-ecommerce-reviews.json',
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'product' },
    { data: 'reviewer' },
    { data: 'review' },
    { data: 'date' },
    { data: 'status' },
    { data: ' ' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (a, o, r, s) {
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
     render: function (a, o, r, s) {
      var e = r.product,
       n = r.company_name,
       t = r.id,
       c = r.product_image;
      if (c)
       var p =
        '<img src="' +
        assetsPath +
        'img/ecommerce-images/' +
        c +
        '" alt="Product-' +
        t +
        '" class="rounded-2">';
      else {
       var i = Math.floor(Math.random() * 6),
        v = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        f = v[i];
       let h = e.split(' '),
        y = h[0].charAt(0) + '‌' + h[1].charAt(0);
       p =
        '<span class="avatar-initial rounded bg-label-' +
        f +
        '">' +
        y +
        '</span>';
      }
      var b =
       '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2 rounded-2 bg-label-secondary">' +
       p +
       '</div></div><div class="d-flex flex-column"><span class="fw-medium text-nowrap lh-80p">' +
       e +
       '</span></a><small class="text-muted mt-1">' +
       n +
       '</small></div></div>';
      return b;
     },
    },
    {
     targets: 3,
     responsivePriority: 1,
     render: function (a, o, r, s) {
      var e = r.reviewer,
       n = r.email,
       t = r.avatar;
      if (t)
       var c =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        t +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var p = Math.floor(Math.random() * 6),
        i = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        v = i[p],
        f = e.split(' ');
       let h = f[0].charAt(0) + '‌' + f[1].charAt(0);
       c =
        '<span class="avatar-initial rounded-circle bg-label-' +
        v +
        '">' +
        h +
        '</span>';
      }
      var b =
       '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2">' +
       c +
       '</div></div><div class="d-flex flex-column"><a href="' +
       x +
       '"><span class="fw-medium">' +
       e +
       '</span></a><small class="text-muted text-nowrap">' +
       n +
       '</small></div></div>';
      return b;
     },
    },
    {
     targets: 4,
     responsivePriority: 2,
     sortable: !1,
     render: function (a, o, r, s) {
      var e = r.review,
       n = r.head;
      r.para;
      var t = $('<div class="read-only-ratings ps-0 mb-2"></div>');
      function c(i) {
       return typeof i != 'string' || i.length === 0
        ? i
        : i.charAt(0).toUpperCase() + i.slice(1);
      }
      c(n),
       t.rateYo({
        rating: e,
        rtl: isRtl,
        readOnly: !0,
        starWidth: '20px',
        spacing: '3px',
        starSvg:
         '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" /></svg>',
       });
      var p =
       '<div>' +
       t.prop('outerHTML') +
       '<p class="h6 mb-0 text-truncate">عنوان نظر کاربر نسبت به ما</p><small class="text-break pe-3 lh-80p">در اینجا توضیحات و شرح نظر کاربر قرار داده می شود تا نسبت به بازخورد ایشان مطلع شوید</small></div>';
      return p;
     },
    },
    {
     targets: 5,
     render: function (a, o, r, s) {
      var e = new Date(r.date),
       n = e.toLocaleDateString('fa-IR', { month: 'short', day: 'numeric' });
      return (
       '<span class="text-nowrap">' + n + ' ' + e.getFullYear() + '</span>'
      );
     },
    },
    {
     targets: 6,
     render: function (a, o, r, s) {
      var e = r.status;
      return (
       '<span class="badge ' +
       g[e].class +
       '" text-capitalize>' +
       g[e].title +
       '</span>'
      );
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (a, o, r, s) {
      return '<div class="text-xxl-center"><div class="dropdown"><a href="javascript:;" class="btn dropdown-toggle hide-arrow text-body p-0" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">دانلود</a><a href="javascript:;" class="dropdown-item">ویرایش</a><a href="javascript:;" class="dropdown-item">کپی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item delete-record text-danger">حذف</a></div></div></div>';
     },
    },
   ],
   order: [[2, 'asc']],
   dom: '<"card-header d-flex align-items-md-center pb-md-2 flex-wrap"<"me-5 ms-n2"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-end align-items-md-center justify-content-md-end pt-0 gap-2 flex-wrap"l<"review_filter"> <"mx-0 me-md-n3 mt-sm-0"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو..',
   },
   buttons: [
    {
     extend: 'collection',
     className:
      'btn btn-label-secondary dropdown-toggle ms-2 me-3 mt-2 mt-sm-0 waves-effect waves-light',
     text: '<i class="ti ti-download me-1"></i>گرفتن خروجی',
     buttons: [
      {
       extend: 'print',
       text: '<i class="ti ti-printer me-2" ></i>چاپ',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5, 6],
        format: {
         body: function (a, o, r) {
          if (a.length <= 0) return a;
          var s = $.parseHTML(a),
           e = '';
          return (
           $.each(s, function (n, t) {
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
         .css('color', u)
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
         body: function (a, o, r) {
          if (a.length <= 0) return a;
          var s = $.parseHTML(a),
           e = '';
          return (
           $.each(s, function (n, t) {
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
         body: function (a, o, r) {
          if (a.length <= 0) return a;
          var s = $.parseHTML(a),
           e = '';
          return (
           $.each(s, function (n, t) {
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
         body: function (a, o, r) {
          if (a.length <= 0) return a;
          var s = $.parseHTML(a),
           e = '';
          return (
           $.each(s, function (n, t) {
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
       text: '<i class="ti ti-copy me-2"></i>کپی',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5, 6],
        format: {
         body: function (a, o, r) {
          if (a.length <= 0) return a;
          var s = $.parseHTML(a),
           e = '';
          return (
           $.each(s, function (n, t) {
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
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var o = a.data();
       return 'جزئیات ' + o.customer;
      },
     }),
     type: 'column',
     renderer: function (a, o, r) {
      var s = $.map(r, function (e, n) {
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
   initComplete: function () {
    this.api()
     .columns(6)
     .every(function () {
      var a = this,
       o = $(
        '<select id="Review" class="form-select"><option value=""> همه </option></select>',
       )
        .appendTo('.review_filter')
        .on('change', function () {
         var r = $.fn.dataTable.util.escapeRegex($(this).val());
         a.search(r ? '^' + r : '', !0, !1).draw();
        });
      a.data()
       .unique()
       .sort()
       .each(function (r, s) {
        o.append(
         '<option value="' + r + '" class="text-capitalize">' + r + '</option>',
        );
       });
     });
   },
  });
  $('.dataTables_length').addClass('mt-0 mt-md-3');
 }
 $('.datatables-review tbody').on('click', '.delete-record', function () {
  w.row($(this).parents('tr')).remove().draw();
 }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
