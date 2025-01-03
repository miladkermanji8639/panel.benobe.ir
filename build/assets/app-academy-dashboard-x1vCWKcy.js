(function () {
 let i, d, f;
 isDarkStyle
  ? ((i = config.colors_dark.textMuted),
    (d = config.colors_dark.headingColor),
    (f = config.colors_dark.borderColor))
  : ((i = config.colors.textMuted),
    (d = config.colors.headingColor),
    (f = config.colors.borderColor));
 const n = {
   donut: {
    series1: '#22A95E',
    series2: '#24B364',
    series3: config.colors.success,
    series4: '#53D28C',
    series5: '#7EDDA9',
    series6: '#A9E9C5',
   },
  },
  u = document.querySelector('#leadsReportChart'),
  x = {
   chart: { height: 157, width: 130, parentHeightOffset: 0, type: 'donut' },
   labels: ['36h', '56h', '16h', '32h', '56h', '16h'],
   series: [23, 35, 10, 20, 35, 23],
   colors: [
    n.donut.series1,
    n.donut.series2,
    n.donut.series3,
    n.donut.series4,
    n.donut.series5,
    n.donut.series6,
   ],
   stroke: { width: 0 },
   dataLabels: {
    enabled: !1,
    formatter: function (a, r) {
     return parseInt(a) + '%';
    },
   },
   legend: { show: !1 },
   tooltip: { theme: !1 },
   grid: { padding: { top: 0 } },
   plotOptions: {
    pie: {
     donut: {
      size: '75%',
      labels: {
       show: !0,
       value: {
        fontSize: '1.5rem',
        fontFamily: 'font-primary',
        color: d,
        fontWeight: 500,
        offsetY: -15,
        formatter: function (a) {
         return parseInt(a) + '%';
        },
       },
       name: { offsetY: 20, fontFamily: 'font-primary' },
       total: {
        show: !0,
        fontSize: '.7rem',
        label: 'همه',
        color: i,
        formatter: function (a) {
         return '231سـ';
        },
       },
      },
     },
    },
   },
  };
 typeof u !== void 0 && u !== null && new ApexCharts(u, x).render();
 const m = document.querySelector('#horizontalBarChart'),
  h = {
   chart: { height: 270, type: 'bar', toolbar: { show: !1 } },
   plotOptions: {
    bar: {
     horizontal: !0,
     barHeight: '70%',
     distributed: !0,
     startingShape: 'rounded',
     borderRadius: 7,
    },
   },
   grid: {
    strokeDashArray: 10,
    borderColor: f,
    xaxis: { lines: { show: !0 } },
    yaxis: { lines: { show: !1 } },
    padding: { top: -35, bottom: -12 },
   },
   colors: [
    config.colors.primary,
    config.colors.info,
    config.colors.success,
    config.colors.secondary,
    config.colors.danger,
    config.colors.warning,
   ],
   dataLabels: {
    enabled: !0,
    style: {
     colors: ['#fff'],
     fontWeight: 200,
     fontSize: '13px',
     fontFamily: 'font-primary',
    },
    formatter: function (a, r) {
     return h.labels[r.dataPointIndex];
    },
    offsetX: 0,
    dropShadow: { enabled: !1 },
   },
   labels: ['طراحی UI', 'طراحی UX', 'موسیقی', 'انیمیشن', 'ری‌اکت', 'سئو'],
   series: [{ data: [35, 20, 14, 12, 10, 9] }],
   xaxis: {
    categories: ['6', '5', '4', '3', '2', '1'],
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    labels: {
     style: { colors: i, fontSize: '13px' },
     formatter: function (a) {
      return `${a}%`;
     },
    },
   },
   yaxis: {
    max: 35,
    labels: {
     style: { colors: [i], fontFamily: 'font-primary', fontSize: '13px' },
    },
   },
   tooltip: {
    enabled: !0,
    style: { fontSize: '12px' },
    onDatasetHover: { highlightDataSeries: !1 },
    custom: function ({ series: a, seriesIndex: r, dataPointIndex: e, w: s }) {
     return '<div class="px-3 py-2"><span>' + a[r][e] + '%</span></div>';
    },
   },
   legend: { show: !1 },
  };
 typeof m !== void 0 && m !== null && new ApexCharts(m, h).render();
 function y(a, r, e) {
  return {
   chart: {
    height: e == 'true' ? 58 : 53,
    width: e == 'true' ? 58 : 43,
    type: 'radialBar',
   },
   plotOptions: {
    radialBar: {
     hollow: { size: e == 'true' ? '45%' : '33%' },
     dataLabels: {
      show: e == 'true',
      value: {
       offsetY: -10,
       fontSize: '15px',
       fontWeight: 500,
       fontFamily: 'font-primary',
       color: d,
      },
     },
     track: { background: config.colors_label.secondary },
    },
   },
   stroke: { lineCap: 'round' },
   colors: [a],
   grid: {
    padding: {
     top: e == 'true' ? -12 : -15,
     bottom: e == 'true' ? -17 : -15,
     left: e == 'true' ? -17 : -5,
     right: -15,
    },
   },
   series: [r],
   labels: e == 'true' ? [''] : ['Progress'],
  };
 }
 const g = document.querySelectorAll('.chart-progress');
 g &&
  g.forEach(function (a) {
   const r = config.colors[a.dataset.color],
    e = a.dataset.series,
    s = a.dataset.progress_variant,
    t = y(r, e, s);
   new ApexCharts(a, t).render();
  });
 var b = $('.datatables-academy-course'),
  w = {
   angular:
    '<span class="badge bg-label-danger p-2"><i class="ti ti-brand-angular ti-md"></i></span>',
   figma:
    '<span class="badge bg-label-warning p-2"><i class="ti ti-brand-figma ti-md"></i></span>',
   react:
    '<span class="badge bg-label-info p-2"><i class="ti ti-brand-react-native ti-md"></i></span>',
   art: '<span class="badge bg-label-success p-2"><i class="ti ti-color-swatch ti-md"></i></span>',
   fundamentals:
    '<span class="badge bg-label-primary p-2"><i class="ti ti-diamond ti-md"></i></span>',
  };
 if (b.length) {
  var C = b.DataTable({
   ajax: assetsPath + 'json/app-academy-dashboard.json',
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'course name' },
    { data: 'time' },
    { data: 'progress' },
    { data: 'status' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (a, r, e, s) {
      return '';
     },
    },
    {
     targets: 1,
     orderable: !1,
     searchable: !1,
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
     responsivePriority: 2,
     render: function (a, r, e, s) {
      var t = e.logo,
       o = e.course,
       l = e.user,
       c = e.image;
      if (c)
       var v =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        c +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var k = Math.floor(Math.random() * 6),
        _ = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        z = _[k],
        S = e.user,
        p = S.match(/\b\w/g) || [];
       (p = ((p.shift() || '') + (p.pop() || '')).toUpperCase()),
        (v =
         '<span class="avatar-initial rounded-circle bg-label-' +
         z +
         '">' +
         p +
         '</span>');
      }
      var B =
       '<div class="d-flex align-items-center"><span class="me-3">' +
       w[t] +
       '</span><div><a class="text-body text-truncate fw-semibold mb-1 text-wrap" href="' +
       baseUrl +
       'app/academy/course-details">' +
       o +
       '</a><div class="d-flex align-items-center"><div class="avatar-wrapper me-2"><div class="avatar avatar-xs">' +
       v +
       '</div></div><span class="text-nowrap fw-normal">' +
       l +
       '</span></div></div></div>';
      return B;
     },
    },
    {
     targets: 3,
     responsivePriority: 3,
     render: function (a, r, e, s) {
      var t = moment.duration(a),
       o = Math.floor(t.asHours()),
       l = Math.floor(t.asMinutes()) - o * 60,
       c = o + 'h ' + l + 'm';
      return '<span class="h6 mb-0 text-nowrap">' + c + '</span>';
     },
    },
    {
     targets: 4,
     render: function (a, r, e, s) {
      var t = e.status,
       o = e.number;
      return (
       '<div class="d-flex align-items-center gap-3"><p class="h6 mb-0">' +
       t +
       '</p><div class="progress w-100" style="height: 8px;"><div class="progress-bar" style="width: ' +
       t +
       '" aria-valuenow="' +
       t +
       '" aria-valuemin="0" aria-valuemax="100"></div></div><small class="text-muted">' +
       o +
       '</small></div>'
      );
     },
    },
    {
     targets: 5,
     render: function (a, r, e, s) {
      var t = e.user_number,
       o = e.note,
       l = e.view;
      return (
       '<div class="d-flex align-items-center justify-content-between"><div class="w-px-50 d-flex align-items-center"><i class="ti ti-users ti-sm me-2 text-primary"></i>' +
       t +
       '</div><div class="w-px-50 d-flex align-items-center"><i class="ti ti-book ti-sm me-2 text-info"></i>' +
       o +
       '</div><div class="w-px-50 d-flex align-items-center"><i class="ti ti-video ti-sm me-2 text-danger" ></i>' +
       l +
       '</div></div>'
      );
     },
    },
   ],
   order: [[2, 'desc']],
   dom: '<"card-header py-sm-0"<"head-label text-center">f>t<"row mx-4"<"col-sm-6 col-12 text-center text-xl-start pb-2 pb-xl-0 px-0"i><"col-sm-6 col-12 d-flex justify-content-center justify-content-xl-end px-0"p>>',
   lengthMenu: [5],
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'نام دوره',
   },
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var r = a.data();
       return 'جزئیات ' + r.course;
      },
     }),
     type: 'column',
     renderer: function (a, r, e) {
      var s = $.map(e, function (t, o) {
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
      return s ? $('<table class="table"/><tbody />').append(s) : !1;
     },
    },
   },
  });
  $('div.head-label').html(
   '<h5 class="card-title mb-0 text-nowrap">دوره‌های شما</h5>',
  );
 }
 $('.datatables-orders tbody').on('click', '.delete-record', function () {
  C.row($(this).parents('tr')).remove().draw();
 }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
})();
