(function () {
 let a, e;
 isDarkStyle
  ? (config.colors_dark.cardColor,
    (e = config.colors_dark.textMuted),
    config.colors_dark.bodyColor,
    (a = config.colors_dark.headingColor))
  : (config.colors.cardColor,
    (e = config.colors.textMuted),
    config.colors.bodyColor,
    (a = config.colors.headingColor));
 function c(o, i, r) {
  return {
   chart: {
    height: r == 'true' ? 58 : 53,
    width: r == 'true' ? 58 : 43,
    type: 'radialBar',
   },
   plotOptions: {
    radialBar: {
     hollow: { size: r == 'true' ? '50%' : '33%' },
     dataLabels: {
      show: r == 'true',
      value: {
       offsetY: -10,
       fontSize: '15px',
       fontWeight: 500,
       fontFamily: 'font-primary',
       color: a,
      },
     },
     track: { background: config.colors_label.secondary },
    },
   },
   stroke: { lineCap: 'round' },
   colors: [o],
   grid: {
    padding: {
     top: r == 'true' ? -12 : -15,
     bottom: r == 'true' ? -17 : -15,
     left: r == 'true' ? -17 : -5,
     right: -15,
    },
   },
   series: [i],
   labels: r == 'true' ? [''] : ['Progress'],
  };
 }
 const l = document.querySelectorAll('.chart-progress');
 l &&
  l.forEach(function (o) {
   const i = config.colors[o.dataset.color],
    r = o.dataset.series,
    n = o.dataset.progress_variant ? o.dataset.progress_variant : 'false',
    f = c(i, r, n);
   new ApexCharts(o, f).render();
  });
 const t = document.querySelector('#reportBarChart'),
  d = {
   chart: { height: 200, type: 'bar', toolbar: { show: !1 } },
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
    labels: { style: { colors: e, fontSize: '13px' } },
   },
   yaxis: { labels: { show: !1 } },
  };
 typeof t !== void 0 && t !== null && new ApexCharts(t, d).render();
 const s = document.querySelector('#swiper-with-pagination-cards');
 s &&
  new Swiper(s, {
   loop: !0,
   autoplay: { delay: 2500, disableOnInteraction: !1 },
   pagination: { clickable: !0, el: '.swiper-pagination' },
  });
})();
