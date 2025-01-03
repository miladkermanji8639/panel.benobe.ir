(function () {
 let p, e, d, n, r;
 isDarkStyle
  ? ((p = config.colors_dark.cardColor),
    (e = config.colors_dark.textMuted),
    (n = config.colors_dark.bodyColor),
    (r = config.colors_dark.borderColor),
    (d = 'dark'))
  : ((p = config.colors.cardColor),
    (e = config.colors.textMuted),
    (n = config.colors.bodyColor),
    (r = config.colors.borderColor),
    (d = ''));
 const h = document.querySelector('#salesLastYear'),
  O = {
   chart: {
    height: 78,
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
     shade: d,
     shadeIntensity: 0.8,
     opacityFrom: 0.6,
     opacityTo: 0.25,
    },
   },
   dataLabels: { enabled: !1 },
   stroke: { width: 2, curve: 'smooth' },
   series: [{ data: [200, 55, 400, 250] }],
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
 typeof h !== void 0 && h !== null && new ApexCharts(h, O).render();
 const f = document.querySelector('#sessionsLastMonth'),
  S = {
   chart: {
    type: 'bar',
    height: 78,
    parentHeightOffset: 0,
    stacked: !0,
    toolbar: { show: !1 },
   },
   series: [
    { name: 'محصول 1', data: [4, 3, 6, 4, 3] },
    { name: 'محصول 2', data: [-3, -4, -3, -2, -3] },
   ],
   plotOptions: {
    bar: {
     horizontal: !1,
     columnWidth: '30%',
     barHeight: '100%',
     borderRadius: 5,
     startingShape: 'rounded',
     endingShape: 'rounded',
    },
   },
   dataLabels: { enabled: !1 },
   tooltip: { enabled: !1 },
   stroke: { curve: 'smooth', width: 1, lineCap: 'round', colors: [p] },
   legend: { show: !1 },
   colors: [config.colors.primary, config.colors.success],
   grid: { show: !1, padding: { top: -41, right: -10, left: -8, bottom: -22 } },
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
    labels: { show: !1 },
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
   },
   yaxis: { show: !1 },
   responsive: [
    {
     breakpoint: 1441,
     options: { plotOptions: { bar: { columnWidth: '40%' } } },
    },
    {
     breakpoint: 1300,
     options: { plotOptions: { bar: { columnWidth: '50%' } } },
    },
    {
     breakpoint: 1200,
     options: { plotOptions: { bar: { borderRadius: 6, columnWidth: '20%' } } },
    },
    {
     breakpoint: 1025,
     options: {
      plotOptions: { bar: { borderRadius: 6, columnWidth: '20%' } },
      chart: { height: 80 },
     },
    },
    { breakpoint: 900, options: { plotOptions: { bar: { borderRadius: 6 } } } },
    {
     breakpoint: 782,
     options: { plotOptions: { bar: { columnWidth: '30%' } } },
    },
    {
     breakpoint: 426,
     options: {
      plotOptions: { bar: { borderRadius: 5, columnWidth: '35%' } },
      chart: { height: 78 },
     },
    },
    { breakpoint: 376, options: { plotOptions: { bar: { borderRadius: 6 } } } },
   ],
   states: {
    hover: { filter: { type: 'none' } },
    active: { filter: { type: 'none' } },
   },
  };
 typeof f !== void 0 && f !== null && new ApexCharts(f, S).render();
 const b = document.querySelector('#revenueGrowth'),
  R = {
   chart: {
    height: 170,
    type: 'bar',
    parentHeightOffset: 0,
    toolbar: { show: !1 },
   },
   plotOptions: {
    bar: {
     barHeight: '80%',
     columnWidth: '30%',
     startingShape: 'rounded',
     endingShape: 'rounded',
     borderRadius: 6,
     distributed: !0,
    },
   },
   tooltip: { enabled: !1 },
   grid: { show: !1, padding: { top: -20, bottom: -12, left: -10, right: 0 } },
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
   series: [{ data: [25, 40, 55, 70, 85, 70, 55] }],
   legend: { show: !1 },
   xaxis: {
    categories: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    labels: {
     style: { colors: e, fontSize: '13px', fontFamily: 'font-primary' },
    },
   },
   yaxis: { labels: { show: !1 } },
   states: { hover: { filter: { type: 'none' } } },
   responsive: [
    {
     breakpoint: 1471,
     options: { plotOptions: { bar: { columnWidth: '50%' } } },
    },
    {
     breakpoint: 1350,
     options: { plotOptions: { bar: { columnWidth: '57%' } } },
    },
    {
     breakpoint: 1032,
     options: { plotOptions: { bar: { columnWidth: '60%' } } },
    },
    {
     breakpoint: 992,
     options: { plotOptions: { bar: { columnWidth: '40%', borderRadius: 8 } } },
    },
    {
     breakpoint: 855,
     options: { plotOptions: { bar: { columnWidth: '50%', borderRadius: 6 } } },
    },
    {
     breakpoint: 440,
     options: { plotOptions: { bar: { columnWidth: '40%' } } },
    },
    {
     breakpoint: 381,
     options: { plotOptions: { bar: { columnWidth: '45%' } } },
    },
   ],
  };
 typeof b !== void 0 && b !== null && new ApexCharts(b, R).render();
 function i(o, a) {
  const l = config.colors_label.primary,
   x = config.colors.primary;
  var c = [];
  for (let s = 0; s < o.length; s++) s === a ? c.push(x) : c.push(l);
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
     borderRadius: 7,
     distributed: !0,
     dataLabels: { position: 'top' },
    },
   },
   grid: { show: !1, padding: { top: 0, bottom: 0, left: -10, right: -10 } },
   colors: c,
   dataLabels: {
    enabled: !0,
    formatter: function (s) {
     return s + 'k';
    },
    offsetY: -20,
    style: {
     fontSize: '15px',
     colors: [n],
     fontWeight: '500',
     fontFamily: 'font-primary',
    },
   },
   series: [{ data: o }],
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
    axisBorder: { show: !0, color: r },
    axisTicks: { show: !1 },
    labels: {
     style: { colors: e, fontSize: '13px', fontFamily: 'font-primary' },
    },
   },
   yaxis: {
    labels: {
     offsetX: -15,
     formatter: function (s) {
      return parseInt(s / 1) + 'k';
     },
     style: { fontSize: '13px', colors: e, fontFamily: 'font-primary' },
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
 var T = 'earning-reports-charts.json',
  t = $.ajax({
   url: assetsPath + 'json/' + T,
   dataType: 'json',
   async: !1,
  }).responseJSON;
 const g = document.querySelector('#earningReportsTabsOrders'),
  L = i(t.data[0].chart_data, t.data[0].active_option);
 typeof g !== void 0 && g !== null && new ApexCharts(g, L).render();
 const u = document.querySelector('#earningReportsTabsSales'),
  v = i(t.data[1].chart_data, t.data[1].active_option);
 typeof u !== void 0 && u !== null && new ApexCharts(u, v).render();
 const m = document.querySelector('#earningReportsTabsProfit'),
  W = i(t.data[2].chart_data, t.data[2].active_option);
 typeof m !== void 0 && m !== null && new ApexCharts(m, W).render();
 const y = document.querySelector('#earningReportsTabsIncome'),
  _ = i(t.data[3].chart_data, t.data[3].active_option);
 typeof y !== void 0 && y !== null && new ApexCharts(y, _).render();
 const w = document.querySelector('#salesLastMonth'),
  A = {
   series: [
    { name: 'فروش', data: [32, 27, 27, 30, 25, 25] },
    { name: 'بازدید', data: [25, 35, 20, 20, 20, 20] },
   ],
   chart: { height: 340, type: 'radar', toolbar: { show: !1 } },
   plotOptions: {
    radar: { polygons: { strokeColors: r, connectorColors: r } },
   },
   stroke: { show: !1, width: 0 },
   legend: {
    show: !0,
    fontSize: '13px',
    position: 'bottom',
    labels: { colors: n, useSeriesColors: !1 },
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
      colors: [e, e, e, e, e, e],
      fontSize: '13px',
      fontFamily: 'font-primary',
     },
    },
   },
   yaxis: { show: !1, min: 0, max: 40, tickAmount: 4 },
   responsive: [{ breakpoint: 769, options: { chart: { height: 400 } } }],
  };
 typeof w !== void 0 && w !== null && new ApexCharts(w, A).render();
 function B(o, a) {
  return {
   chart: { height: 53, width: 43, type: 'radialBar' },
   plotOptions: {
    radialBar: {
     hollow: { size: '33%' },
     dataLabels: { show: !1 },
     track: { background: config.colors_label.secondary },
    },
   },
   stroke: { lineCap: 'round' },
   colors: [o],
   grid: { padding: { top: -15, bottom: -15, left: -5, right: -15 } },
   series: [a],
   labels: ['Progress'],
  };
 }
 const C = document.querySelectorAll('.chart-progress');
 C &&
  C.forEach(function (o) {
   const a = config.colors[o.dataset.color],
    l = o.dataset.series,
    x = B(a, l);
   new ApexCharts(o, x).render();
  });
 const k = document.querySelector('#projectStatusChart'),
  M = {
   chart: { height: 240, type: 'area', toolbar: !1 },
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
   colors: [config.colors.warning],
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
 typeof k !== void 0 && k !== null && new ApexCharts(k, M).render();
})();
