(function () {
 const c = '#836AF9',
  i = '#ffe800',
  d = '#28dac6',
  B = '#FF8132',
  R = '#FDAC34',
  v = '#299AFF',
  H = '#4F5D70',
  p = '#EDF1F4',
  C = '#2B9AFF',
  b = '#84D0FF';
 let r, l, t, o, e;
 isDarkStyle
  ? ((r = config.colors_dark.cardColor),
    (l = config.colors_dark.headingColor),
    (t = config.colors_dark.textMuted),
    (e = config.colors_dark.bodyColor),
    (o = config.colors_dark.borderColor))
  : ((r = config.colors.cardColor),
    (l = config.colors.headingColor),
    (t = config.colors.textMuted),
    (e = config.colors.bodyColor),
    (o = config.colors.borderColor)),
  document.querySelectorAll('.chartjs').forEach(function (a) {
   a.height = a.dataset.height;
  }),
  (Chart.defaults.font.family = 'font-primary');
 const y = document.getElementById('barChart');
 y &&
  new Chart(y, {
   type: 'bar',
   data: {
    labels: [
     '12/7',
     '12/8',
     '12/9',
     '12/10',
     '12/11',
     '12/12',
     '12/13',
     '12/14',
     '12/15',
     '12/16',
     '12/17',
     '12/18',
     '12/19',
    ],
    datasets: [
     {
      data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
      backgroundColor: d,
      borderColor: 'transparent',
      maxBarThickness: 15,
      borderRadius: { topRight: 15, topLeft: 15 },
     },
    ],
   },
   options: {
    responsive: !0,
    maintainAspectRatio: !1,
    animation: { duration: 500 },
    plugins: {
     tooltip: {
      rtl: isRtl,
      backgroundColor: r,
      titleColor: l,
      bodyColor: e,
      borderWidth: 1,
      borderColor: o,
     },
     legend: { display: !1 },
    },
    scales: {
     x: {
      grid: { color: o, drawBorder: !1, borderColor: o },
      ticks: { color: t },
     },
     y: {
      min: 0,
      max: 400,
      grid: { color: o, drawBorder: !1, borderColor: o },
      ticks: { stepSize: 100, color: t },
     },
    },
   },
  });
 const g = document.getElementById('horizontalBarChart');
 g &&
  new Chart(g, {
   type: 'bar',
   data: {
    labels: [
     'شنبه',
     'یکشنبه',
     'دوشنبه ',
     'سه‌سنبه',
     'چهارشنبه',
     'پنجشنبه',
     'جمعه',
    ],
    datasets: [
     {
      data: [710, 350, 470, 580, 230, 460, 120],
      backgroundColor: config.colors.info,
      borderColor: 'transparent',
      maxBarThickness: 15,
     },
    ],
   },
   options: {
    indexAxis: 'y',
    responsive: !0,
    maintainAspectRatio: !1,
    animation: { duration: 500 },
    elements: { bar: { borderRadius: { topRight: 15, bottomRight: 15 } } },
    plugins: {
     tooltip: {
      rtl: isRtl,
      backgroundColor: r,
      titleColor: l,
      bodyColor: e,
      borderWidth: 1,
      borderColor: o,
     },
     legend: { display: !1 },
    },
    scales: {
     x: { min: 0, grid: { color: o, borderColor: o }, ticks: { color: t } },
     y: {
      grid: { borderColor: o, display: !1, drawBorder: !1 },
      ticks: { color: t },
     },
    },
   },
  });
 const u = document.getElementById('lineChart');
 u &&
  new Chart(u, {
   type: 'line',
   data: {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
    datasets: [
     {
      data: [
       80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375,
      ],
      label: 'اروپا',
      borderColor: config.colors.danger,
      tension: 0.5,
      pointStyle: 'circle',
      backgroundColor: config.colors.danger,
      fill: !1,
      pointRadius: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBorderColor: r,
      pointHoverBackgroundColor: config.colors.danger,
     },
     {
      data: [
       80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280,
      ],
      label: 'آسیا',
      borderColor: config.colors.primary,
      tension: 0.5,
      pointStyle: 'circle',
      backgroundColor: config.colors.primary,
      fill: !1,
      pointRadius: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBorderColor: r,
      pointHoverBackgroundColor: config.colors.primary,
     },
     {
      data: [
       80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180,
      ],
      label: 'آفریقا',
      borderColor: i,
      tension: 0.5,
      pointStyle: 'circle',
      backgroundColor: i,
      fill: !1,
      pointRadius: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBorderColor: r,
      pointHoverBackgroundColor: i,
     },
    ],
   },
   options: {
    responsive: !0,
    maintainAspectRatio: !1,
    scales: {
     x: {
      grid: { color: o, drawBorder: !1, borderColor: o },
      ticks: { color: t },
     },
     y: {
      scaleLabel: { display: !0 },
      min: 0,
      max: 400,
      ticks: { color: t, stepSize: 100 },
      grid: { color: o, drawBorder: !1, borderColor: o },
     },
    },
    plugins: {
     tooltip: {
      rtl: isRtl,
      backgroundColor: r,
      titleColor: l,
      bodyColor: e,
      borderWidth: 1,
      borderColor: o,
     },
     legend: {
      position: 'top',
      align: 'start',
      rtl: isRtl,
      labels: {
       usePointStyle: !0,
       padding: 35,
       boxWidth: 6,
       boxHeight: 6,
       color: e,
      },
     },
    },
   },
  });
 const s = document.getElementById('radarChart');
 if (s) {
  const a = s.getContext('2d').createLinearGradient(0, 0, 0, 150);
  a.addColorStop(0, 'rgba(85, 85, 255, 0.9)'),
   a.addColorStop(1, 'rgba(151, 135, 255, 0.8)');
  const n = s.getContext('2d').createLinearGradient(0, 0, 0, 150);
  n.addColorStop(0, 'rgba(255, 85, 184, 0.9)'),
   n.addColorStop(1, 'rgba(255, 135, 135, 0.8)'),
   new Chart(s, {
    type: 'radar',
    data: {
     labels: ['فروش', 'هزینه', 'وام', 'چک', 'تخفیف', 'کش بک'],
     datasets: [
      {
       label: 'هزینه',
       data: [25, 59, 90, 81, 60, 82],
       fill: !0,
       pointStyle: 'dash',
       backgroundColor: n,
       borderColor: 'transparent',
       pointBorderColor: 'transparent',
      },
      {
       label: 'درآمد',
       data: [40, 100, 40, 90, 40, 90],
       fill: !0,
       pointStyle: 'dash',
       backgroundColor: a,
       borderColor: 'transparent',
       pointBorderColor: 'transparent',
      },
     ],
    },
    options: {
     responsive: !0,
     maintainAspectRatio: !1,
     animation: { duration: 500 },
     scales: {
      r: {
       ticks: { maxTicksLimit: 1, display: !1, color: t },
       grid: { color: o },
       angleLines: { color: o },
       pointLabels: { color: t },
      },
     },
     plugins: {
      legend: {
       rtl: isRtl,
       position: 'top',
       labels: { padding: 25, color: e },
      },
      tooltip: {
       rtl: isRtl,
       backgroundColor: r,
       titleColor: l,
       bodyColor: e,
       borderWidth: 1,
       borderColor: o,
      },
     },
    },
   });
 }
 const x = document.getElementById('polarChart');
 x &&
  new Chart(x, {
   type: 'polarArea',
   data: {
    labels: [
     'آفریقا',
     'آسیا',
     'اروپا',
     'آمریکای شمالی',
     'آمریکای جنوبی',
     'استرالیا',
    ],
    datasets: [
     {
      label: 'محبوبیت (میلیون)',
      backgroundColor: [c, i, B, v, H, d],
      data: [19, 17.5, 15, 13.5, 11, 9],
      borderWidth: 0,
     },
    ],
   },
   options: {
    responsive: !0,
    maintainAspectRatio: !1,
    animation: { duration: 500 },
    scales: { r: { ticks: { display: !1, color: t }, grid: { display: !1 } } },
    plugins: {
     tooltip: {
      rtl: isRtl,
      backgroundColor: r,
      titleColor: l,
      bodyColor: e,
      borderWidth: 1,
      borderColor: o,
     },
     legend: {
      rtl: isRtl,
      position: 'right',
      labels: {
       usePointStyle: !0,
       padding: 25,
       boxWidth: 8,
       boxHeight: 8,
       color: e,
      },
     },
    },
   },
  });
 const h = document.getElementById('bubbleChart');
 h &&
  new Chart(h, {
   type: 'bubble',
   data: {
    animation: { duration: 1e4 },
    datasets: [
     {
      label: 'آیتم 1',
      backgroundColor: c,
      borderColor: c,
      data: [
       { x: 20, y: 74, r: 10 },
       { x: 10, y: 110, r: 5 },
       { x: 30, y: 165, r: 7 },
       { x: 40, y: 200, r: 20 },
       { x: 90, y: 185, r: 7 },
       { x: 50, y: 240, r: 7 },
       { x: 60, y: 275, r: 10 },
       { x: 70, y: 305, r: 5 },
       { x: 80, y: 325, r: 4 },
       { x: 100, y: 310, r: 5 },
       { x: 110, y: 240, r: 5 },
       { x: 120, y: 270, r: 7 },
       { x: 130, y: 300, r: 6 },
      ],
     },
     {
      label: 'آیتم 2',
      backgroundColor: i,
      borderColor: i,
      data: [
       { x: 30, y: 72, r: 5 },
       { x: 40, y: 110, r: 7 },
       { x: 20, y: 135, r: 6 },
       { x: 10, y: 160, r: 12 },
       { x: 50, y: 285, r: 5 },
       { x: 60, y: 235, r: 5 },
       { x: 70, y: 275, r: 7 },
       { x: 80, y: 290, r: 4 },
       { x: 90, y: 250, r: 10 },
       { x: 100, y: 220, r: 7 },
       { x: 120, y: 230, r: 4 },
       { x: 110, y: 320, r: 15 },
       { x: 130, y: 330, r: 7 },
      ],
     },
    ],
   },
   options: {
    responsive: !0,
    maintainAspectRatio: !1,
    scales: {
     x: {
      min: 0,
      max: 140,
      grid: { color: o, drawBorder: !1, borderColor: o },
      ticks: { stepSize: 10, color: t },
     },
     y: {
      min: 0,
      max: 400,
      grid: { color: o, drawBorder: !1, borderColor: o },
      ticks: { stepSize: 100, color: t },
     },
    },
    plugins: {
     legend: { display: !1 },
     tooltip: {
      rtl: isRtl,
      backgroundColor: r,
      titleColor: l,
      bodyColor: e,
      borderWidth: 1,
      borderColor: o,
     },
    },
   },
  });
 const f = document.getElementById('lineAreaChart');
 f &&
  new Chart(f, {
   type: 'line',
   data: {
    labels: [
     '',
     '12/7',
     '12/8',
     '12/9',
     '12/10',
     '12/11',
     '12/12',
     '12/13',
     '12/14',
     '12/15',
     '12/16',
     '12/17',
     '12/18',
     '12/19',
     '12/20',
    ],
    datasets: [
     {
      label: 'آفریقا',
      data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
      tension: 0,
      fill: !0,
      backgroundColor: C,
      pointStyle: 'circle',
      borderColor: 'transparent',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: C,
      pointHoverBorderColor: r,
     },
     {
      label: 'آسیا',
      data: [
       70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275,
      ],
      tension: 0,
      fill: !0,
      backgroundColor: b,
      pointStyle: 'circle',
      borderColor: 'transparent',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: b,
      pointHoverBorderColor: r,
     },
     {
      label: 'اروپا',
      data: [
       240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300,
       315,
      ],
      tension: 0,
      fill: !0,
      backgroundColor: p,
      pointStyle: 'circle',
      borderColor: 'transparent',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: p,
      pointHoverBorderColor: r,
     },
    ],
   },
   options: {
    responsive: !0,
    maintainAspectRatio: !1,
    plugins: {
     legend: {
      position: 'top',
      rtl: isRtl,
      align: 'start',
      labels: {
       usePointStyle: !0,
       padding: 35,
       boxWidth: 6,
       boxHeight: 6,
       color: e,
      },
     },
     tooltip: {
      rtl: isRtl,
      backgroundColor: r,
      titleColor: l,
      bodyColor: e,
      borderWidth: 1,
      borderColor: o,
     },
    },
    scales: {
     x: { grid: { color: 'transparent', borderColor: o }, ticks: { color: t } },
     y: {
      min: 0,
      max: 400,
      grid: { color: 'transparent', borderColor: o },
      ticks: { stepSize: 100, color: t },
     },
    },
   },
  });
 const m = document.getElementById('doughnutChart');
 m &&
  new Chart(m, {
   type: 'doughnut',
   data: {
    labels: ['تبلت', 'موبایل', 'لپتاپ'],
    datasets: [
     {
      data: [10, 10, 80],
      backgroundColor: [d, R, config.colors.primary],
      borderWidth: 0,
      pointStyle: 'rectRounded',
     },
    ],
   },
   options: {
    responsive: !0,
    animation: { duration: 500 },
    cutout: '68%',
    plugins: {
     legend: { display: !1 },
     tooltip: {
      callbacks: {
       label: function (a) {
        const n = a.labels || '',
         S = a.parsed;
        return ' ' + n + ' : ' + S + ' %';
       },
      },
      rtl: isRtl,
      backgroundColor: r,
      titleColor: l,
      bodyColor: e,
      borderWidth: 1,
      borderColor: o,
     },
    },
   },
  });
 const k = document.getElementById('scatterChart');
 k &&
  new Chart(k, {
   type: 'scatter',
   data: {
    datasets: [
     {
      label: 'آیفون',
      data: [
       { x: 72, y: 225 },
       { x: 81, y: 270 },
       { x: 90, y: 230 },
       { x: 103, y: 305 },
       { x: 103, y: 245 },
       { x: 108, y: 275 },
       { x: 110, y: 290 },
       { x: 111, y: 315 },
       { x: 109, y: 350 },
       { x: 116, y: 340 },
       { x: 113, y: 260 },
       { x: 117, y: 275 },
       { x: 117, y: 295 },
       { x: 126, y: 280 },
       { x: 127, y: 340 },
       { x: 133, y: 330 },
      ],
      backgroundColor: config.colors.primary,
      borderColor: 'transparent',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 5,
     },
     {
      label: 'سامسونگ',
      data: [
       { x: 13, y: 95 },
       { x: 22, y: 105 },
       { x: 17, y: 115 },
       { x: 19, y: 130 },
       { x: 21, y: 125 },
       { x: 35, y: 125 },
       { x: 13, y: 155 },
       { x: 21, y: 165 },
       { x: 25, y: 155 },
       { x: 18, y: 190 },
       { x: 26, y: 180 },
       { x: 43, y: 180 },
       { x: 53, y: 202 },
       { x: 61, y: 165 },
       { x: 67, y: 225 },
      ],
      backgroundColor: i,
      borderColor: 'transparent',
      pointRadius: 5,
     },
     {
      label: 'وان پلاس',
      data: [
       { x: 70, y: 195 },
       { x: 72, y: 270 },
       { x: 98, y: 255 },
       { x: 100, y: 215 },
       { x: 87, y: 240 },
       { x: 94, y: 280 },
       { x: 99, y: 300 },
       { x: 102, y: 290 },
       { x: 110, y: 275 },
       { x: 111, y: 250 },
       { x: 94, y: 280 },
       { x: 92, y: 340 },
       { x: 100, y: 335 },
       { x: 108, y: 330 },
      ],
      backgroundColor: d,
      borderColor: 'transparent',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 5,
     },
    ],
   },
   options: {
    responsive: !0,
    maintainAspectRatio: !1,
    animation: { duration: 800 },
    plugins: {
     legend: {
      position: 'top',
      rtl: isRtl,
      align: 'start',
      labels: {
       usePointStyle: !0,
       padding: 25,
       boxWidth: 6,
       boxHeight: 6,
       color: e,
      },
     },
     tooltip: {
      rtl: isRtl,
      backgroundColor: r,
      titleColor: l,
      bodyColor: e,
      borderWidth: 1,
      borderColor: o,
     },
    },
    scales: {
     x: {
      min: 0,
      max: 140,
      grid: { color: o, drawTicks: !1, drawBorder: !1, borderColor: o },
      ticks: { stepSize: 10, color: t },
     },
     y: {
      min: 0,
      max: 400,
      grid: { color: o, drawTicks: !1, drawBorder: !1, borderColor: o },
      ticks: { stepSize: 100, color: t },
     },
    },
   },
  });
})();
