(function () {
 let n, s;
 isDarkStyle
  ? ((n = config.colors_dark.textMuted), (s = config.colors_dark.headingColor))
  : ((n = config.colors.textMuted), (s = config.colors.headingColor));
 const a = {
   donut: {
    series1: config.colors.success,
    series2: '#28c76fb3',
    series3: '#28c76f80',
    series4: config.colors_label.success,
   },
   line: {
    series1: config.colors.warning,
    series2: config.colors.primary,
    series3: '#7367f029',
   },
  },
  t = document.querySelector('#shipmentStatisticsChart'),
  i = {
   series: [
    {
     name: 'حمل و نقل',
     type: 'column',
     data: [38, 45, 33, 38, 32, 50, 48, 40, 42, 37],
    },
    {
     name: 'تحویل',
     type: 'line',
     data: [23, 28, 23, 32, 28, 44, 32, 38, 26, 34],
    },
   ],
   chart: {
    height: 270,
    type: 'line',
    stacked: !1,
    parentHeightOffset: 0,
    toolbar: { show: !1 },
    zoom: { enabled: !1 },
   },
   markers: {
    size: 4,
    colors: [config.colors.white],
    strokeColors: a.line.series2,
    hover: { size: 6 },
    borderRadius: 4,
   },
   stroke: { curve: 'smooth', width: [0, 3], lineCap: 'round' },
   legend: {
    show: !0,
    position: 'bottom',
    markers: { width: 8, height: 8, offsetX: -3 },
    height: 40,
    offsetY: 10,
    itemMargin: { horizontal: 10, vertical: 0 },
    fontSize: '15px',
    fontFamily: 'font-primary',
    fontWeight: 400,
    labels: { colors: s, useSeriesColors: !1 },
    offsetY: 10,
   },
   grid: { strokeDashArray: 8 },
   colors: [a.line.series1, a.line.series2],
   fill: { opacity: [1, 1] },
   plotOptions: {
    bar: {
     columnWidth: '30%',
     startingShape: 'rounded',
     endingShape: 'rounded',
     borderRadius: 4,
    },
   },
   dataLabels: { enabled: !1 },
   xaxis: {
    tickAmount: 10,
    categories: [
     '1 بهمن',
     '2 بهمن',
     '3 بهمن',
     '4 بهمن',
     '5 بهمن',
     '6 بهمن',
     '7 بهمن',
     '8 بهمن',
     '9 بهمن',
     '10 بهمن',
    ],
    labels: {
     style: {
      colors: n,
      fontSize: '13px',
      fontFamily: 'font-primary',
      fontWeight: 400,
     },
    },
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
   },
   yaxis: {
    tickAmount: 4,
    min: 10,
    max: 50,
    labels: {
     style: {
      colors: n,
      fontSize: '13px',
      fontFamily: 'font-primary',
      fontWeight: 400,
     },
     formatter: function (o) {
      return o + '%';
     },
    },
   },
   responsive: [
    {
     breakpoint: 1400,
     options: {
      chart: { height: 270 },
      xaxis: { labels: { style: { fontSize: '10px' } } },
      legend: {
       itemMargin: { vertical: 0, horizontal: 10 },
       fontSize: '13px',
       offsetY: 12,
      },
     },
    },
    {
     breakpoint: 1399,
     options: {
      chart: { height: 415 },
      plotOptions: { bar: { columnWidth: '50%' } },
     },
    },
    {
     breakpoint: 982,
     options: { plotOptions: { bar: { columnWidth: '30%' } } },
    },
    {
     breakpoint: 480,
     options: { chart: { height: 250 }, legend: { offsetY: 7 } },
    },
   ],
  };
 typeof t !== void 0 && t !== null && new ApexCharts(t, i).render();
 const e = document.querySelector('#deliveryExceptionsChart'),
  r = {
   chart: { height: 420, parentHeightOffset: 0, type: 'donut' },
   labels: ['آدرس اشتباه', 'هوا نامناسب', 'تعطیلات', 'تصادفات'],
   series: [13, 25, 22, 40],
   colors: [a.donut.series1, a.donut.series2, a.donut.series3, a.donut.series4],
   stroke: { width: 0 },
   dataLabels: {
    enabled: !1,
    formatter: function (o, l) {
     return parseInt(o) + '%';
    },
   },
   legend: {
    show: !0,
    position: 'bottom',
    offsetY: 10,
    markers: { width: 8, height: 8, offsetX: -3 },
    itemMargin: { horizontal: 15, vertical: 5 },
    fontSize: '13px',
    fontFamily: 'font-primary',
    fontWeight: 400,
    labels: { colors: s, useSeriesColors: !1 },
   },
   tooltip: { theme: !1 },
   grid: { padding: { top: 15 } },
   states: { hover: { filter: { type: 'none' } } },
   plotOptions: {
    pie: {
     donut: {
      size: '77%',
      labels: {
       show: !0,
       value: {
        fontSize: '26px',
        fontFamily: 'font-primary',
        color: s,
        fontWeight: 500,
        offsetY: -30,
        formatter: function (o) {
         return parseInt(o) + '%';
        },
       },
       name: { offsetY: 20, fontFamily: 'font-primary' },
       total: {
        show: !0,
        fontSize: '.75rem',
        label: 'میانگین',
        color: n,
        formatter: function (o) {
         return '30%';
        },
       },
      },
     },
    },
   },
   responsive: [{ breakpoint: 420, options: { chart: { height: 360 } } }],
  };
 typeof e !== void 0 && e !== null && new ApexCharts(e, r).render();
})();
$(function () {
 var n = $('.dt-route-vehicles');
 n.length &&
  (n.DataTable({
   ajax: assetsPath + 'json/logistics-dashboard.json',
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   columns: [
    { data: 'id' },
    { data: 'id' },
    { data: 'location' },
    { data: 'start_city' },
    { data: 'end_city' },
    { data: 'warnings' },
    { data: 'progress' },
   ],
   columnDefs: [
    {
     className: 'control',
     orderable: !1,
     searchable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (s, a, t, i) {
      return '';
     },
    },
    {
     targets: 1,
     orderable: !1,
     searchable: !1,
     checkboxes: !0,
     responsivePriority: 3,
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
     render: function (s, a, t, i) {
      var e = t.location,
       r =
        '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar me-2"><span class="avatar-initial rounded-circle bg-label-secondary text-body mt-auto mb-auto"><i class="ti ti-truck" style="display: contents"></i></span></div></div><div class="d-flex flex-column"><a class="text-body fw-medium" href="' +
        baseUrl +
        'app/logistics/fleet">VOL-' +
        e +
        '</a></div></div>';
      return r;
     },
    },
    {
     targets: 3,
     render: function (s, a, t, i) {
      var e = t.start_city,
       r = t.start_country,
       o = '<div class="text-body">' + r + ', ' + e + '</div >';
      return o;
     },
    },
    {
     targets: 4,
     render: function (s, a, t, i) {
      var e = t.end_city,
       r = t.end_country,
       o = '<div class="text-body">' + r + ', ' + e + '</div >';
      return o;
     },
    },
    {
     targets: -2,
     render: function (s, a, t, i) {
      var e = t.warnings,
       r = {
        1: { title: 'بدون ایراد', class: 'bg-label-success' },
        2: { title: 'مشکل آب و هوا', class: 'bg-label-warning' },
        3: { title: 'مشکل فنی', class: 'bg-label-danger' },
        4: { title: 'مشکل شخصی', class: 'bg-label-info' },
        5: { title: 'کمبود سوخت', class: 'bg-label-primary' },
       };
      return typeof r[e] > 'u'
       ? s
       : '<span class="badge rounded ' +
          r[e].class +
          '">' +
          r[e].title +
          '</span>';
     },
    },
    {
     targets: -1,
     render: function (s, a, t, i) {
      var e = t.progress,
       r =
        '<div class="d-flex align-items-center"><div div class="progress w-100" style="height: 8px;"><div class="progress-bar" role="progressbar" style="width:' +
        e +
        '%;" aria-valuenow="' +
        e +
        '" aria-valuemin="0" aria-valuemax="100"></div></div><div class="text-body ms-3">' +
        e +
        '%</div></div>';
      return r;
     },
    },
   ],
   order: [2, 'asc'],
   dom: '<"table-responsive"t><"row d-flex align-items-center"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   displayLength: 5,
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (s) {
       var a = s.data();
       return 'جزئیات ' + a.location;
      },
     }),
     type: 'column',
     renderer: function (s, a, t) {
      var i = $.map(t, function (e, r) {
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
  }),
  $('.dataTables_info').addClass('pt-0'));
});
