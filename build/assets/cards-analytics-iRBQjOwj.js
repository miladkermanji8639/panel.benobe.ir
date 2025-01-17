(function () {
 let p, n, l, o, t;
 isDarkStyle
  ? ((p = config.colors_dark.cardColor),
    (o = config.colors_dark.textMuted),
    (l = config.colors_dark.bodyColor),
    (n = config.colors_dark.headingColor),
    (t = config.colors_dark.borderColor))
  : ((p = config.colors.cardColor),
    (o = config.colors.textMuted),
    (l = config.colors.bodyColor),
    (n = config.colors.headingColor),
    (t = config.colors.borderColor));
 const a = {
   donut: {
    series1: config.colors.success,
    series2: '#4fddaa',
    series3: '#8ae8c7',
    series4: '#c4f4e3',
   },
   bar: {
    series1: config.colors.primary,
    series2: '#7367F0CC',
    series3: '#7367f099',
   },
  },
  d = document.querySelector('#weeklyEarningReports'),
  W = {
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
     style: { colors: o, fontSize: '13px', fontFamily: 'font-primary' },
    },
   },
   yaxis: { labels: { show: !1 } },
   tooltip: { enabled: !1 },
   responsive: [{ breakpoint: 1025, options: { chart: { height: 199 } } }],
  };
 typeof d !== void 0 && d !== null && new ApexCharts(d, W).render();
 const c = document.querySelector('#supportTracker'),
  A = {
   series: [85],
   labels: ['تکمیل شده'],
   chart: { height: 360, type: 'radialBar' },
   plotOptions: {
    radialBar: {
     offsetY: 10,
     startAngle: -140,
     endAngle: 130,
     hollow: { size: '65%' },
     track: { background: p, strokeWidth: '100%' },
     dataLabels: {
      name: {
       offsetY: -20,
       color: o,
       fontSize: '13px',
       fontWeight: '400',
       fontFamily: 'font-primary',
      },
      value: {
       offsetY: 10,
       color: n,
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
 typeof c !== void 0 && c !== null && new ApexCharts(c, A).render();
 const h = document.querySelector('#salesLastMonth'),
  E = {
   series: [
    { name: 'فروش', data: [32, 27, 27, 30, 25, 25] },
    { name: 'بازدید', data: [25, 35, 20, 20, 20, 20] },
   ],
   chart: { height: 300, type: 'radar', toolbar: { show: !1 } },
   plotOptions: {
    radar: { polygons: { strokeColors: t, connectorColors: t } },
   },
   stroke: { show: !1, width: 0 },
   legend: {
    show: !0,
    fontSize: '13px',
    position: 'bottom',
    labels: { colors: l, useSeriesColors: !1 },
    markers: { height: 10, width: 10, offsetX: -3 },
    itemMargin: { horizontal: 10 },
    onItemHover: { highlightDataSeries: !1 },
   },
   colors: [config.colors.primary, config.colors.info],
   fill: { opacity: [1, 0.85] },
   markers: { size: 0 },
   grid: { show: !1, padding: { top: 0, bottom: -5 } },
   xaxis: {
    categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    labels: {
     show: !0,
     style: {
      colors: [o, o, o, o, o, o],
      fontSize: '13px',
      fontFamily: 'font-primary',
     },
    },
   },
   yaxis: { show: !1, min: 0, max: 40, tickAmount: 4 },
   responsive: [
    { breakpoint: 1025, options: { chart: { height: 290 } } },
    { breakpoint: 769, options: { chart: { height: 390 } } },
   ],
  };
 typeof h !== void 0 && h !== null && new ApexCharts(h, E).render();
 const g = document.querySelector('#totalRevenueChart'),
  F = {
   series: [
    { name: 'درآمد', data: [270, 210, 180, 200, 250, 280, 250, 270, 150] },
    {
     name: 'هزینه‌ها',
     data: [-140, -160, -180, -150, -100, -60, -80, -100, -180],
    },
   ],
   chart: {
    height: 390,
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
   stroke: { curve: 'smooth', width: 6, lineCap: 'round', colors: [p] },
   legend: {
    show: !0,
    horizontalAlign: 'right',
    position: 'top',
    fontFamily: 'font-primary',
    markers: { height: 12, width: 12, radius: 12, offsetX: -3, offsetY: 2 },
    labels: { colors: l },
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
     style: { fontSize: '13px', colors: o, fontFamily: 'font-primary' },
    },
    axisTicks: { show: !1 },
    axisBorder: { show: !1 },
   },
   yaxis: {
    labels: {
     offsetX: -16,
     style: { fontSize: '13px', colors: o, fontFamily: 'font-primary' },
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
     options: { plotOptions: { bar: { columnWidth: '50%' } } },
    },
    {
     breakpoint: 1300,
     options: { plotOptions: { bar: { columnWidth: '62%' } } },
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
 typeof g !== void 0 && g !== null && new ApexCharts(g, F).render();
 const u = document.querySelector('#budgetChart'),
  _ = {
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
   colors: [t, config.colors.primary],
   grid: {
    show: !1,
    borderColor: t,
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
 typeof u !== void 0 && u !== null && new ApexCharts(u, _).render();
 const b = document.querySelector('#projectStatusChart'),
  B = {
   chart: { height: 252, type: 'area', toolbar: !1 },
   markers: { strokeColor: 'transparent' },
   series: [
    {
     data: [
      2e3, 2e3, 4e3, 4e3, 3050, 3050, 2e3, 2e3, 3050, 3050, 4700, 4700, 2750,
      2750, 5700, 5700,
     ],
    },
   ],
   dataLabels: { enabled: !1 },
   grid: { show: !1, padding: { left: -10, right: -5 } },
   stroke: { width: 3, curve: 'straight' },
   colors: [config.colors.primary],
   fill: {
    type: 'gradient',
    gradient: { opacityFrom: 0.6, opacityTo: 0.15, stops: [0, 95, 100] },
   },
   xaxis: {
    labels: { show: !1 },
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    lines: { show: !1 },
   },
   yaxis: { labels: { show: !1 }, min: 1e3, max: 6e3, tickAmount: 5 },
   tooltip: { enabled: !1 },
  };
 typeof b !== void 0 && b !== null && new ApexCharts(b, B).render();
 function f(e, i) {
  const z = config.colors_label.primary,
   T = config.colors.primary;
  var R = [];
  for (let s = 0; s < e.length; s++) s === i ? R.push(T) : R.push(z);
  return {
   chart: {
    height: 258,
    parentHeightOffset: 0,
    type: 'bar',
    toolbar: { show: !1 },
   },
   plotOptions: {
    bar: {
     columnWidth: '32%',
     startingShape: 'rounded',
     borderRadius: 4,
     distributed: !0,
     dataLabels: { position: 'top' },
    },
   },
   grid: { show: !1, padding: { top: 0, bottom: 0, left: -10, right: -10 } },
   colors: R,
   dataLabels: {
    enabled: !0,
    formatter: function (s) {
     return s + 'k';
    },
    offsetY: -20,
    style: {
     fontSize: '15px',
     colors: [l],
     fontWeight: '500',
     fontFamily: 'font-primary',
    },
   },
   series: [{ data: e }],
   legend: { show: !1 },
   tooltip: { enabled: !1 },
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
    axisBorder: { show: !0, color: t },
    axisTicks: { show: !1 },
    labels: {
     style: { colors: o, fontSize: '13px', fontFamily: 'font-primary' },
    },
   },
   yaxis: {
    labels: {
     offsetX: -15,
     formatter: function (s) {
      return parseInt(s / 1) + 'k';
     },
     style: { fontSize: '13px', colors: o, fontFamily: 'font-primary' },
     min: 0,
     max: 6e4,
     tickAmount: 6,
    },
   },
   responsive: [
    {
     breakpoint: 1441,
     options: { plotOptions: { bar: { columnWidth: '41%' } } },
    },
    {
     breakpoint: 590,
     options: {
      plotOptions: { bar: { columnWidth: '61%', borderRadius: 5 } },
      yaxis: { labels: { show: !1 } },
      grid: { padding: { right: 0, left: -20 } },
      dataLabels: { style: { fontSize: '12px', fontWeight: '400' } },
     },
    },
   ],
  };
 }
 var L = 'earning-reports-charts.json',
  r = $.ajax({
   url: assetsPath + 'json/' + L,
   dataType: 'json',
   async: !1,
  }).responseJSON;
 const m = document.querySelector('#earningReportsTabsOrders'),
  q = f(r.data[0].chart_data, r.data[0].active_option);
 typeof m !== void 0 && m !== null && new ApexCharts(m, q).render();
 const y = document.querySelector('#earningReportsTabsSales'),
  M = f(r.data[1].chart_data, r.data[1].active_option);
 typeof y !== void 0 && y !== null && new ApexCharts(y, M).render();
 const x = document.querySelector('#earningReportsTabsProfit'),
  Y = f(r.data[2].chart_data, r.data[2].active_option);
 typeof x !== void 0 && x !== null && new ApexCharts(x, Y).render();
 const w = document.querySelector('#earningReportsTabsIncome'),
  I = f(r.data[3].chart_data, r.data[3].active_option);
 typeof w !== void 0 && w !== null && new ApexCharts(w, I).render();
 const C = document.querySelector('#totalEarningChart'),
  P = {
   series: [
    { name: 'درآمد', data: [15, 10, 20, 8, 12, 18, 12, 5] },
    { name: 'هزینه‌ها', data: [-7, -10, -7, -12, -6, -9, -5, -8] },
   ],
   chart: {
    height: 215,
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
     columnWidth: '15%',
     borderRadius: 4,
     startingShape: 'rounded',
     endingShape: 'rounded',
    },
   },
   colors: [config.colors.danger, config.colors.primary],
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
      chart: { height: 212 },
      plotOptions: { bar: { borderRadius: 8, columnWidth: '26%' } },
     },
    },
    {
     breakpoint: 783,
     options: {
      chart: { height: 210 },
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
 typeof C !== void 0 && C !== null && new ApexCharts(C, P).render();
 const k = document.querySelector('#horizontalBarChart'),
  O = {
   chart: { height: 360, type: 'bar', toolbar: { show: !1 } },
   plotOptions: {
    bar: {
     horizontal: !0,
     barHeight: '60%',
     distributed: !0,
     startingShape: 'rounded',
     borderRadius: 7,
    },
   },
   grid: {
    strokeDashArray: 10,
    borderColor: t,
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
    formatter: function (e, i) {
     return O.labels[i.dataPointIndex];
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
     style: { colors: o, fontSize: '13px' },
     formatter: function (e) {
      return `${e}%`;
     },
    },
   },
   yaxis: {
    max: 35,
    labels: {
     style: { colors: [o], fontFamily: 'font-primary', fontSize: '13px' },
    },
   },
   tooltip: {
    enabled: !0,
    style: { fontSize: '12px' },
    onDatasetHover: { highlightDataSeries: !1 },
    custom: function ({ series: e, seriesIndex: i, dataPointIndex: z, w: T }) {
     return '<div class="px-3 py-2"><span>' + e[i][z] + '%</span></div>';
    },
   },
   legend: { show: !1 },
  };
 typeof k !== void 0 && k !== null && new ApexCharts(k, O).render();
 const S = document.querySelector('#carrierPerformance'),
  H = {
   chart: {
    height: 275,
    type: 'bar',
    parentHeightOffset: 0,
    stacked: !1,
    toolbar: { show: !1 },
    zoom: { enabled: !1 },
   },
   plotOptions: {
    bar: {
     horizontal: !1,
     columnWidth: '50%',
     startingShape: 'rounded',
     endingShape: 'flat',
     borderRadius: 4,
    },
   },
   dataLabels: { enabled: !1 },
   series: [
    { name: 'نرخ تحویل', type: 'column', data: [5, 4.5, 4, 3] },
    { name: 'زمان تحویل', type: 'column', data: [4, 3.5, 3, 2.5] },
    { name: 'عدم تحویل', type: 'column', data: [3.5, 3, 2.5, 2] },
   ],
   xaxis: {
    tickAmount: 10,
    categories: ['سری A', 'سری B', 'سری C', 'سری D'],
    labels: {
     style: {
      colors: o,
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
    min: 1,
    max: 5,
    labels: {
     style: {
      colors: o,
      fontSize: '13px',
      fontFamily: 'font-primary',
      fontWeight: 400,
     },
     formatter: function (e) {
      return e;
     },
    },
   },
   legend: {
    show: !0,
    position: 'bottom',
    markers: { width: 8, height: 8, offsetX: -3, radius: 12 },
    height: 40,
    offsetY: 0,
    itemMargin: { horizontal: 10, vertical: 0 },
    fontSize: '13px',
    fontFamily: 'font-primary',
    fontWeight: 400,
    labels: { colors: n, useSeriesColors: !1 },
    offsetY: 10,
   },
   grid: { strokeDashArray: 6, padding: { bottom: 5 } },
   colors: [a.bar.series1, a.bar.series2, a.bar.series3],
   fill: { opacity: 1 },
   responsive: [
    {
     breakpoint: 1400,
     options: {
      chart: { height: 275 },
      legend: { fontSize: '13px', offsetY: 10 },
     },
    },
    {
     breakpoint: 576,
     options: {
      chart: { height: 300 },
      legend: { itemMargin: { vertical: 5, horizontal: 10 }, offsetY: 7 },
     },
    },
   ],
  };
 typeof S !== void 0 && S !== null && new ApexCharts(S, H).render();
 const v = document.querySelector('#deliveryExceptionsChart'),
  j = {
   chart: { height: 400, parentHeightOffset: 0, type: 'donut' },
   labels: ['آدرس اشتباه', 'هوا نامناسب', 'تعطیلات', 'تصادفات'],
   series: [13, 25, 22, 40],
   colors: [a.donut.series1, a.donut.series2, a.donut.series3, a.donut.series4],
   stroke: { width: 0 },
   dataLabels: {
    enabled: !1,
    formatter: function (e, i) {
     return parseInt(e) + '%';
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
    labels: { colors: n, useSeriesColors: !1 },
   },
   tooltip: { theme: !1 },
   grid: { padding: { top: 15 } },
   plotOptions: {
    pie: {
     donut: {
      size: '75%',
      labels: {
       show: !0,
       value: {
        fontSize: '26px',
        fontFamily: 'font-primary',
        color: n,
        fontWeight: 500,
        offsetY: -30,
        formatter: function (e) {
         return parseInt(e) + '%';
        },
       },
       name: { offsetY: 20, fontFamily: 'font-primary' },
       total: {
        show: !0,
        fontSize: '0.9rem',
        label: 'میانگین',
        color: o,
        formatter: function (e) {
         return '30%';
        },
       },
      },
     },
    },
   },
   responsive: [
    { breakpoint: 1025, options: { chart: { height: 380 } } },
    { breakpoint: 420, options: { chart: { height: 300 } } },
   ],
  };
 typeof v !== void 0 && v !== null && new ApexCharts(v, j).render();
})();
