(function () {
 let d, c, i, p, f;
 isDarkStyle
  ? ((d = config.colors_dark.cardColor),
    (i = config.colors_dark.textMuted),
    (c = config.colors_dark.headingColor),
    (p = 'dark'),
    (f = '#5E6692'))
  : ((d = config.colors.cardColor),
    (i = config.colors.textMuted),
    (c = config.colors.headingColor),
    (p = ''),
    (f = '#817D8D'));
 const b = document.querySelector('#swiper-with-pagination-cards');
 b &&
  new Swiper(b, {
   loop: !0,
   autoplay: { delay: 2500, disableOnInteraction: !1 },
   pagination: { clickable: !0, el: '.swiper-pagination' },
  });
 const h = document.querySelector('#revenueGenerated'),
  w = {
   chart: {
    height: 130,
    type: 'area',
    parentHeightOffset: 0,
    toolbar: { show: !1 },
    sparkline: { enabled: !0 },
   },
   markers: { colors: 'transparent', strokeColors: 'transparent' },
   grid: { show: !1 },
   colors: [config.colors.success],
   fill: {
    type: 'gradient',
    gradient: {
     shade: p,
     shadeIntensity: 0.8,
     opacityFrom: 0.6,
     opacityTo: 0.1,
    },
   },
   dataLabels: { enabled: !1 },
   stroke: { width: 2, curve: 'smooth' },
   series: [{ data: [300, 350, 330, 380, 340, 400, 380] }],
   xaxis: {
    show: !0,
    lines: { show: !1 },
    labels: { show: !1 },
    stroke: { width: 0 },
    axisBorder: { show: !1 },
   },
   yaxis: { stroke: { width: 0 }, show: !1 },
   tooltip: { enabled: !1 },
  };
 typeof h !== void 0 && h !== null && new ApexCharts(h, w).render();
 const u = document.querySelector('#weeklyEarningReports'),
  k = {
   chart: {
    height: 202,
    parentHeightOffset: 0,
    type: 'bar',
    toolbar: { show: !1 },
   },
   plotOptions: {
    bar: {
     barHeight: '60%',
     columnWidth: '38%',
     startingShape: 'rounded',
     endingShape: 'rounded',
     borderRadius: 4,
     distributed: !0,
    },
   },
   grid: { show: !1, padding: { top: -30, bottom: 0, left: -10, right: -10 } },
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
   series: [{ name: 'فروش', data: [40, 65, 50, 45, 90, 55, 70] }],
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
    labels: {
     style: { colors: i, fontSize: '13px', fontFamily: 'font-primary' },
    },
   },
   yaxis: { labels: { show: !1 } },
   tooltip: { enabled: !1 },
   responsive: [{ breakpoint: 1025, options: { chart: { height: 199 } } }],
  };
 typeof u !== void 0 && u !== null && new ApexCharts(u, k).render();
 const m = document.querySelector('#supportTracker'),
  x = {
   series: [85],
   labels: ['تکمیل شده'],
   chart: { height: 360, type: 'radialBar' },
   plotOptions: {
    radialBar: {
     offsetY: 10,
     startAngle: -140,
     endAngle: 130,
     hollow: { size: '65%' },
     track: { background: d, strokeWidth: '100%' },
     dataLabels: {
      name: {
       offsetY: -20,
       color: i,
       fontSize: '13px',
       fontWeight: '400',
       fontFamily: 'font-primary',
      },
      value: {
       offsetY: 10,
       color: c,
       fontSize: '38px',
       fontWeight: '500',
       fontFamily: 'font-primary',
      },
     },
    },
   },
   colors: [config.colors.primary],
   fill: {
    type: 'gradient',
    gradient: {
     shade: 'dark',
     shadeIntensity: 0.5,
     gradientToColors: [config.colors.primary],
     inverseColors: !0,
     opacityFrom: 1,
     opacityTo: 0.6,
     stops: [30, 70, 100],
    },
   },
   stroke: { dashArray: 10 },
   grid: { padding: { top: -20, bottom: 5 } },
   states: {
    hover: { filter: { type: 'none' } },
    active: { filter: { type: 'none' } },
   },
   responsive: [
    { breakpoint: 1025, options: { chart: { height: 330 } } },
    { breakpoint: 769, options: { chart: { height: 280 } } },
   ],
  };
 typeof m !== void 0 && m !== null && new ApexCharts(m, x).render();
 const g = document.querySelector('#totalEarningChart'),
  C = {
   series: [
    { name: 'درآمد', data: [15, 10, 20, 8, 12, 18, 12, 5] },
    { name: 'هزینه‌ها', data: [-7, -10, -7, -12, -6, -9, -5, -8] },
   ],
   chart: {
    height: 230,
    parentHeightOffset: 0,
    stacked: !0,
    type: 'bar',
    toolbar: { show: !1 },
   },
   tooltip: { enabled: !1 },
   legend: { show: !1 },
   plotOptions: {
    bar: {
     horizontal: !1,
     columnWidth: '18%',
     borderRadius: 5,
     startingShape: 'rounded',
     endingShape: 'rounded',
    },
   },
   colors: [config.colors.primary, f],
   dataLabels: { enabled: !1 },
   grid: { show: !1, padding: { top: -40, bottom: -20, left: -10, right: -2 } },
   xaxis: {
    labels: { show: !1 },
    axisTicks: { show: !1 },
    axisBorder: { show: !1 },
   },
   yaxis: { labels: { show: !1 } },
   responsive: [
    {
     breakpoint: 1468,
     options: { plotOptions: { bar: { columnWidth: '22%' } } },
    },
    {
     breakpoint: 1197,
     options: {
      chart: { height: 228 },
      plotOptions: { bar: { borderRadius: 8, columnWidth: '26%' } },
     },
    },
    {
     breakpoint: 783,
     options: {
      chart: { height: 232 },
      plotOptions: { bar: { borderRadius: 6, columnWidth: '28%' } },
     },
    },
    {
     breakpoint: 589,
     options: { plotOptions: { bar: { columnWidth: '16%' } } },
    },
    {
     breakpoint: 520,
     options: { plotOptions: { bar: { borderRadius: 6, columnWidth: '18%' } } },
    },
    {
     breakpoint: 426,
     options: { plotOptions: { bar: { borderRadius: 5, columnWidth: '20%' } } },
    },
    {
     breakpoint: 381,
     options: { plotOptions: { bar: { columnWidth: '24%' } } },
    },
   ],
   states: {
    hover: { filter: { type: 'none' } },
    active: { filter: { type: 'none' } },
   },
  };
 typeof g !== void 0 && g !== null && new ApexCharts(g, C).render();
 var v = $('.datatables-projects');
 v.length &&
  (v.DataTable({
   ajax: assetsPath + 'json/user-profile.json',
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'project_name' },
    { data: 'project_leader' },
    { data: '' },
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
     render: function (t, o, a, s) {
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
     responsivePriority: 4,
     render: function (t, o, a, s) {
      var e = a.project_img,
       r = a.project_name,
       n = a.date;
      if (e)
       var y =
        '<img src="' +
        assetsPath +
        'img/icons/brands/' +
        e +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var _ = Math.floor(Math.random() * 6),
        j = ['success', 'danger', 'warning', 'info', 'primary', 'secondary'],
        O = j[_],
        r = a.project_name,
        l = r.match(/\b\w/g) || [];
       (l = ((l.shift() || '') + (l.pop() || '')).toUpperCase()),
        (y =
         '<span class="avatar-initial rounded-circle bg-label-' +
         O +
         '">' +
         l +
         '</span>');
      }
      var E =
       '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">' +
       y +
       '</div></div><div class="d-flex flex-column"><span class="text-truncate fw-medium">' +
       r +
       '</span><small class="text-truncate text-muted">' +
       n +
       '</small></div></div>';
      return E;
     },
    },
    {
     targets: 4,
     orderable: !1,
     searchable: !1,
     render: function (t, o, a, s) {
      var e = a.team,
       r;
      r = '<div class="d-flex align-items-center avatar-group">';
      for (var n = 0; n < e.length; n++)
       r +=
        '<div class="avatar avatar-sm"><img src="' +
        assetsPath +
        'img/avatars/' +
        e[n] +
        '" alt="Avatar" class="rounded-circle pull-up"></div>';
      return (r += '</div>'), r;
     },
    },
    {
     targets: -2,
     render: function (t, o, a, s) {
      var e = a.status;
      return (
       '<div class="d-flex align-items-center"><div class="progress w-100 me-3" style="height: 6px;"><div class="progress-bar" style="width: ' +
       e +
       '" aria-valuenow="' +
       e +
       '" aria-valuemin="0" aria-valuemax="100"></div></div><span>' +
       e +
       '</span></div>'
      );
     },
    },
    {
     targets: -1,
     searchable: !1,
     title: 'عملیات',
     orderable: !1,
     render: function (t, o, a, s) {
      return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></div></div>';
     },
    },
   ],
   order: [[2, 'desc']],
   dom: '<"card-header pb-0 pt-sm-0"<"head-label text-center"><"d-flex justify-content-center justify-content-md-end"f>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   displayLength: 5,
   lengthMenu: [5, 10, 25, 50, 75, 100],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (t) {
       var o = t.data();
       return 'جزئیات پروژه "' + o.project_name + '"';
      },
     }),
     type: 'column',
     renderer: function (t, o, a) {
      var s = $.map(a, function (e, r) {
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
  }),
  $('div.head-label').html('<h5 class="card-title mb-0">پروژه‌ها</h5>')),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
})();
