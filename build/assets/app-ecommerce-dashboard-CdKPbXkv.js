(function () {
 let n, r, l, i, p;
 isDarkStyle
  ? ((n = config.colors_dark.cardColor),
    (r = config.colors_dark.textMuted),
    (p = config.colors_dark.bodyColor),
    (l = config.colors_dark.headingColor),
    (i = config.colors_dark.borderColor))
  : ((n = config.colors.cardColor),
    (r = config.colors.textMuted),
    (p = config.colors.bodyColor),
    (l = config.colors.headingColor),
    (i = config.colors.borderColor));
 const d = {
   donut: {
    series1: config.colors.success,
    series2: '#28c76fb3',
    series3: '#28c76f80',
    series4: config.colors_label.success,
   },
  },
  h = document.querySelector('#expensesChart'),
  x = {
   chart: {
    height: 145,
    sparkline: { enabled: !0 },
    parentHeightOffset: 0,
    type: 'radialBar',
   },
   colors: [config.colors.warning],
   series: [78],
   plotOptions: {
    radialBar: {
     offsetY: 0,
     startAngle: -90,
     endAngle: 90,
     hollow: { size: '65%' },
     track: { strokeWidth: '45%', background: i },
     dataLabels: {
      name: { show: !1 },
      value: { fontSize: '22px', color: l, fontWeight: 500, offsetY: -5 },
     },
    },
   },
   grid: { show: !1, padding: { bottom: 5 } },
   stroke: { lineCap: 'round' },
   labels: ['Progress'],
   responsive: [
    {
     breakpoint: 1442,
     options: {
      chart: { height: 120 },
      plotOptions: {
       radialBar: {
        dataLabels: { value: { fontSize: '18px' } },
        hollow: { size: '60%' },
       },
      },
     },
    },
    {
     breakpoint: 1025,
     options: {
      chart: { height: 136 },
      plotOptions: {
       radialBar: {
        hollow: { size: '65%' },
        dataLabels: { value: { fontSize: '18px' } },
       },
      },
     },
    },
    {
     breakpoint: 769,
     options: {
      chart: { height: 120 },
      plotOptions: { radialBar: { hollow: { size: '55%' } } },
     },
    },
    {
     breakpoint: 426,
     options: {
      chart: { height: 145 },
      plotOptions: { radialBar: { hollow: { size: '65%' } } },
      dataLabels: { value: { offsetY: 0 } },
     },
    },
    {
     breakpoint: 376,
     options: {
      chart: { height: 105 },
      plotOptions: { radialBar: { hollow: { size: '60%' } } },
     },
    },
   ],
  };
 typeof h !== void 0 && h !== null && new ApexCharts(h, x).render();
 const f = document.querySelector('#profitLastMonth'),
  v = {
   chart: {
    height: 90,
    type: 'line',
    parentHeightOffset: 0,
    toolbar: { show: !1 },
   },
   grid: {
    borderColor: i,
    strokeDashArray: 6,
    xaxis: { lines: { show: !0, colors: '#000' } },
    yaxis: { lines: { show: !1 } },
    padding: { top: -18, left: -4, right: 7, bottom: -10 },
   },
   colors: [config.colors.info],
   stroke: { width: 2 },
   series: [{ data: [0, 25, 10, 40, 25, 55] }],
   tooltip: { shared: !1, intersect: !0, x: { show: !1 } },
   xaxis: {
    labels: { show: !1 },
    axisTicks: { show: !1 },
    axisBorder: { show: !1 },
   },
   yaxis: { labels: { show: !1 } },
   tooltip: { enabled: !1 },
   markers: {
    size: 3.5,
    fillColor: config.colors.info,
    strokeColors: 'transparent',
    strokeWidth: 3.2,
    discrete: [
     {
      seriesIndex: 0,
      dataPointIndex: 5,
      fillColor: n,
      strokeColor: config.colors.info,
      size: 5,
      shape: 'circle',
     },
    ],
    hover: { size: 5.5 },
   },
   responsive: [
    { breakpoint: 1442, options: { chart: { height: 100 } } },
    { breakpoint: 1025, options: { chart: { height: 86 } } },
    { breakpoint: 769, options: { chart: { height: 93 } } },
   ],
  };
 typeof f !== void 0 && f !== null && new ApexCharts(f, v).render();
 const g = document.querySelector('#generatedLeadsChart'),
  y = {
   chart: { height: 147, width: 130, parentHeightOffset: 0, type: 'donut' },
   labels: ['برقی', 'ورزشی', 'دکوراسیون', 'استایل'],
   series: [45, 58, 30, 50],
   colors: [d.donut.series1, d.donut.series2, d.donut.series3, d.donut.series4],
   stroke: { width: 0 },
   dataLabels: {
    enabled: !1,
    formatter: function (e, t) {
     return parseInt(e) + '%';
    },
   },
   legend: { show: !1 },
   tooltip: { theme: !1 },
   grid: { padding: { top: 15, right: -20, left: -20 } },
   states: { hover: { filter: { type: 'none' } } },
   plotOptions: {
    pie: {
     donut: {
      size: '70%',
      labels: {
       show: !0,
       value: {
        fontSize: '1.375rem',
        fontFamily: 'font-primary',
        color: l,
        fontWeight: 500,
        offsetY: -15,
        formatter: function (e) {
         return parseInt(e) + '%';
        },
       },
       name: { offsetY: 20, fontFamily: 'font-primary' },
       total: {
        show: !0,
        showAlways: !0,
        color: config.colors.success,
        fontSize: '.8125rem',
        label: 'جمع کل',
        fontFamily: 'font-primary',
        formatter: function (e) {
         return '184';
        },
       },
      },
     },
    },
   },
   responsive: [
    { breakpoint: 1025, options: { chart: { height: 172, width: 160 } } },
    { breakpoint: 769, options: { chart: { height: 178 } } },
    { breakpoint: 426, options: { chart: { height: 147 } } },
   ],
  };
 typeof g !== void 0 && g !== null && new ApexCharts(g, y).render();
 const u = document.querySelector('#totalRevenueChart'),
  C = {
   series: [
    { name: 'درآمد', data: [270, 210, 180, 200, 250, 280, 250, 270, 150] },
    {
     name: 'هزینه‌ها',
     data: [-140, -160, -180, -150, -100, -60, -80, -100, -180],
    },
   ],
   chart: {
    height: 413,
    parentHeightOffset: 0,
    stacked: !0,
    type: 'bar',
    toolbar: { show: !1 },
   },
   tooltip: { enabled: !1 },
   plotOptions: {
    bar: {
     horizontal: !1,
     columnWidth: '40%',
     borderRadius: 9,
     startingShape: 'rounded',
     endingShape: 'rounded',
    },
   },
   colors: [config.colors.primary, config.colors.warning],
   dataLabels: { enabled: !1 },
   stroke: { curve: 'smooth', width: 6, lineCap: 'round', colors: [n] },
   legend: {
    show: !0,
    horizontalAlign: 'right',
    position: 'top',
    fontFamily: 'font-primary',
    markers: { height: 12, width: 12, radius: 12, offsetX: -3, offsetY: 2 },
    labels: { colors: p },
    itemMargin: { horizontal: 10, vertical: 2 },
   },
   grid: { show: !1, padding: { bottom: -8, top: 20 } },
   xaxis: {
    categories: [
     'فروردین',
     'اردیبهشت',
     'خرداد',
     'تیر',
     'مرداد',
     'شهریور',
     'مهر',
     'آبان',
     'آذر',
    ],
    labels: {
     style: { fontSize: '13px', colors: r, fontFamily: 'font-primary' },
    },
    axisTicks: { show: !1 },
    axisBorder: { show: !1 },
   },
   yaxis: {
    labels: {
     offsetX: -16,
     style: { fontSize: '13px', colors: r, fontFamily: 'font-primary' },
    },
    min: -200,
    max: 300,
    tickAmount: 5,
   },
   responsive: [
    {
     breakpoint: 1700,
     options: { plotOptions: { bar: { columnWidth: '43%' } } },
    },
    {
     breakpoint: 1441,
     options: {
      plotOptions: { bar: { columnWidth: '50%' } },
      chart: { height: 422 },
     },
    },
    {
     breakpoint: 1300,
     options: { plotOptions: { bar: { columnWidth: '50%' } } },
    },
    {
     breakpoint: 1025,
     options: {
      plotOptions: { bar: { columnWidth: '50%' } },
      chart: { height: 390 },
     },
    },
    {
     breakpoint: 991,
     options: { plotOptions: { bar: { columnWidth: '38%' } } },
    },
    {
     breakpoint: 850,
     options: { plotOptions: { bar: { columnWidth: '50%' } } },
    },
    {
     breakpoint: 449,
     options: {
      plotOptions: { bar: { columnWidth: '73%' } },
      chart: { height: 360 },
      xaxis: { labels: { offsetY: -5 } },
      legend: {
       show: !0,
       horizontalAlign: 'right',
       position: 'top',
       itemMargin: { horizontal: 10, vertical: 0 },
      },
     },
    },
    {
     breakpoint: 394,
     options: {
      plotOptions: { bar: { columnWidth: '88%' } },
      legend: {
       show: !0,
       horizontalAlign: 'center',
       position: 'bottom',
       markers: { offsetX: -3, offsetY: 0 },
       itemMargin: { horizontal: 10, vertical: 5 },
      },
     },
    },
   ],
   states: {
    hover: { filter: { type: 'none' } },
    active: { filter: { type: 'none' } },
   },
  };
 typeof u !== void 0 && u !== null && new ApexCharts(u, C).render();
 const b = document.querySelector('#budgetChart'),
  k = {
   chart: {
    height: 100,
    toolbar: { show: !1 },
    zoom: { enabled: !1 },
    type: 'line',
   },
   series: [
    { name: 'ماه قبلی', data: [20, 10, 30, 16, 24, 5, 40, 23, 28, 5, 30] },
    { name: 'ماه جاری', data: [50, 40, 60, 46, 54, 35, 70, 53, 58, 35, 60] },
   ],
   stroke: { curve: 'smooth', dashArray: [5, 0], width: [1, 2] },
   legend: { show: !1 },
   colors: [i, config.colors.primary],
   grid: {
    show: !1,
    borderColor: i,
    padding: { top: -30, bottom: -15, left: 25 },
   },
   markers: { size: 0 },
   xaxis: {
    labels: { show: !1 },
    axisTicks: { show: !1 },
    axisBorder: { show: !1 },
   },
   yaxis: { show: !1 },
   tooltip: { enabled: !1 },
  };
 typeof b !== void 0 && b !== null && new ApexCharts(b, k).render();
 const m = document.querySelector('#reportBarChart'),
  z = {
   chart: { height: 230, type: 'bar', toolbar: { show: !1 } },
   plotOptions: {
    bar: {
     barHeight: '60%',
     columnWidth: '60%',
     startingShape: 'rounded',
     endingShape: 'rounded',
     borderRadius: 4,
     distributed: !0,
    },
   },
   grid: { show: !1, padding: { top: -20, bottom: 0, left: -10, right: -10 } },
   colors: [
    config.colors_label.primary,
    config.colors_label.primary,
    config.colors_label.primary,
    config.colors_label.primary,
    config.colors.primary,
    config.colors_label.primary,
    config.colors_label.primary,
   ],
   dataLabels: { enabled: !1 },
   series: [{ name: 'فروش', data: [40, 95, 60, 45, 90, 50, 75] }],
   legend: { show: !1 },
   xaxis: {
    categories: [
     'شنبه',
     'یکشنبه',
     'دوشنبه',
     'سه‌شنبه',
     'چهارشنبه',
     'پنجشنبه',
     'جمعه',
    ],
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    labels: { style: { colors: r, fontSize: '13px' } },
   },
   yaxis: { labels: { show: !1 } },
   responsive: [
    { breakpoint: 1025, options: { chart: { height: 190 } } },
    { breakpoint: 769, options: { chart: { height: 250 } } },
   ],
  };
 typeof m !== void 0 && m !== null && new ApexCharts(m, z).render();
 var w = $('.datatable-invoice');
 w.length &&
  w.DataTable({
   ajax: assetsPath + 'json/invoice-list.json',
   columns: [
    { data: '' },
    { data: 'invoice_id' },
    { data: 'invoice_status' },
    { data: 'total' },
    { data: 'issued_date' },
    { data: 'invoice_status' },
    { data: 'action' },
   ],
   columnDefs: [
    {
     className: 'control',
     responsivePriority: 2,
     targets: 0,
     render: function (e, t, o, s) {
      return '';
     },
    },
    {
     targets: 1,
     render: function (e, t, o, s) {
      var a = o.invoice_id,
       c =
        '<a href="' +
        baseUrl +
        'app/invoice/preview"><span>#' +
        a +
        '</span></a>';
      return c;
     },
    },
    {
     targets: 2,
     render: function (e, t, o, s) {
      var a = o.invoice_status,
       c = o.due_date,
       _ = o.balance,
       O = {
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
       _ +
       '<br> <span class="fw-medium">تاریخ:</span> ' +
       c +
       "</span>'>" +
       O[a] +
       '</span>'
      );
     },
    },
    {
     targets: 3,
     render: function (e, t, o, s) {
      var a = o.total;
      return a + ' ءتء ';
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     orderable: !1,
     render: function (e, t, o, s) {
      return (
       '<div class="d-flex align-items-center"><a href="javascript:;" class="text-body" data-bs-toggle="tooltip" title="ارسال ایمیل"><i class="ti ti-mail me-2 ti-sm"></i></a><a href="' +
       baseUrl +
       'app/invoice/preview" class="text-body" data-bs-toggle="tooltip" title="نمایش"><i class="ti ti-eye mx-2 ti-sm"></i></a><div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-sm lh-1"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></div></div></div>'
      );
     },
    },
    { targets: -2, visible: !1 },
   ],
   order: [[1, 'asc']],
   dom: '<"row ms-2 me-3"<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3"B>><"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-2"f<"invoice_status mb-3 mb-md-0">>>t<"row d-flex align-items-center mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6 mt-1"p>>',
   displayLength: 7,
   lengthMenu: [7, 10, 25, 50, 75, 100],
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو فاکتور',
   },
   buttons: [
    {
     text:
      '<i class="ti ti-plus me-md-2"></i><span class="d-md-inline-block d-none">ثبت فاکتور</span>',
     className: 'btn btn-primary waves-effect waves-light',
     action: function (e, t, o, s) {
      window.location = baseUrl + 'app/invoice/add';
     },
    },
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (e) {
       var t = e.data();
       return 'جزئیات ' + t.full_name;
      },
     }),
     type: 'column',
     renderer: function (e, t, o) {
      var s = $.map(o, function (a, c) {
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
      return s ? $('<table class="table"/><tbody />').append(s) : !1;
     },
    },
   },
   initComplete: function () {
    this.api()
     .columns(5)
     .every(function () {
      var e = this,
       t = $(
        '<select id="UserRole" class="form-select"><option value=""> انتخاب وضعیت </option></select>',
       )
        .appendTo('.invoice_status')
        .on('change', function () {
         var o = $.fn.dataTable.util.escapeRegex($(this).val());
         e.search(o ? '^' + o : '', !0, !1).draw();
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
  }),
  w.on('draw.dt', function () {
   var e = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
   );
   e.map(function (t) {
    return new bootstrap.Tooltip(t, { boundary: document.body });
   });
  }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
})();
