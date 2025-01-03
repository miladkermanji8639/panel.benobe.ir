(function () {
 const m = document.getElementById('slider-basic'),
  u = document.getElementById('slider-handles'),
  g = document.getElementById('slider-steps'),
  p = document.getElementById('slider-tap'),
  f = document.getElementById('slider-drag'),
  y = document.getElementById('slider-fixed-drag'),
  v = document.getElementById('slider-combined-options'),
  l = document.getElementById('slider-hover'),
  h = document.getElementById('slider-pips');
 m &&
  noUiSlider.create(m, {
   start: [50],
   connect: [!0, !1],
   direction: isRtl ? 'rtl' : 'ltr',
   range: { min: 0, max: 100 },
  }),
  u &&
   noUiSlider.create(u, {
    start: [0, 50],
    direction: isRtl ? 'rtl' : 'ltr',
    step: 5,
    connect: !0,
    range: { min: 0, max: 100 },
    pips: { mode: 'range', density: 5, stepped: !0 },
   }),
  g &&
   noUiSlider.create(g, {
    start: [0, 30],
    snap: !0,
    connect: !0,
    direction: isRtl ? 'rtl' : 'ltr',
    range: {
     min: 0,
     '10%': 10,
     '20%': 20,
     '30%': 30,
     '40%': 40,
     '50%': 50,
     max: 100,
    },
   }),
  p &&
   noUiSlider.create(p, {
    start: [10, 30],
    behaviour: 'tap',
    direction: isRtl ? 'rtl' : 'ltr',
    connect: !0,
    range: { min: 10, max: 100 },
   }),
  f &&
   noUiSlider.create(f, {
    start: [40, 60],
    limit: 20,
    behaviour: 'drag',
    direction: isRtl ? 'rtl' : 'ltr',
    connect: !0,
    range: { min: 20, max: 80 },
   }),
  y &&
   noUiSlider.create(y, {
    start: [40, 60],
    behaviour: 'drag-fixed',
    direction: isRtl ? 'rtl' : 'ltr',
    connect: !0,
    range: { min: 20, max: 80 },
   }),
  v &&
   noUiSlider.create(v, {
    start: [40, 60],
    behaviour: 'drag-tap',
    direction: isRtl ? 'rtl' : 'ltr',
    connect: !0,
    range: { min: 20, max: 80 },
   }),
  l &&
   (noUiSlider.create(l, {
    start: 20,
    behaviour: 'hover-snap-tap',
    direction: isRtl ? 'rtl' : 'ltr',
    range: { min: 0, max: 100 },
   }),
   l.noUiSlider.on('hover', function (e) {
    document.getElementById('slider-val').innerHTML = e;
   })),
  h &&
   noUiSlider.create(h, {
    start: [10],
    behaviour: 'tap-drag',
    step: 10,
    tooltips: !0,
    range: { min: 0, max: 100 },
    pips: { mode: 'steps', stepped: !0, density: 5 },
    direction: isRtl ? 'rtl' : 'ltr',
   });
 const S = document.getElementById('slider-primary'),
  E = document.getElementById('slider-success'),
  I = document.getElementById('slider-danger'),
  x = document.getElementById('slider-info'),
  B = document.getElementById('slider-warning'),
  i = {
   start: [30, 50],
   connect: !0,
   behaviour: 'tap-drag',
   step: 10,
   tooltips: !0,
   range: { min: 0, max: 100 },
   pips: { mode: 'steps', stepped: !0, density: 5 },
   direction: isRtl ? 'rtl' : 'ltr',
  };
 S && noUiSlider.create(S, i),
  E && noUiSlider.create(E, i),
  I && noUiSlider.create(I, i),
  x && noUiSlider.create(x, i),
  B && noUiSlider.create(B, i);
 const r = document.getElementById('slider-dynamic'),
  n = document.getElementById('slider-select'),
  d = document.getElementById('slider-input');
 if (
  (r &&
   (noUiSlider.create(r, {
    start: [10, 30],
    connect: !0,
    direction: isRtl ? 'rtl' : 'ltr',
    range: { min: -20, max: 40 },
   }),
   r.noUiSlider.on('update', function (e, t) {
    const U = e[t];
    t ? (d.value = U) : (n.value = Math.round(U));
   })),
  n)
 ) {
  for (let e = -20; e <= 40; e++) {
   let t = document.createElement('option');
   (t.text = e), (t.value = e), n.appendChild(t);
  }
  n.addEventListener('change', function () {
   r.noUiSlider.set([this.value, null]);
  });
 }
 d &&
  d.addEventListener('change', function () {
   r.noUiSlider.set([null, this.value]);
  });
 const a = document.getElementById('slider-vertical'),
  o = document.getElementById('slider-connect-upper'),
  s = document.getElementById('slider-vertical-tooltip'),
  c = document.getElementById('slider-vertical-limit');
 a &&
  ((a.style.height = '200px'),
  noUiSlider.create(a, {
   start: [40, 60],
   orientation: 'vertical',
   behaviour: 'drag',
   connect: !0,
   range: { min: 0, max: 100 },
  })),
  o &&
   ((o.style.height = '200px'),
   noUiSlider.create(o, {
    start: 40,
    orientation: 'vertical',
    behaviour: 'drag',
    connect: 'upper',
    range: { min: 0, max: 100 },
   })),
  s &&
   ((s.style.height = '200px'),
   noUiSlider.create(s, {
    start: 10,
    orientation: 'vertical',
    behaviour: 'drag',
    tooltips: !0,
    range: { min: 0, max: 100 },
   })),
  c &&
   ((c.style.height = '200px'),
   noUiSlider.create(c, {
    start: [0, 40],
    orientation: 'vertical',
    behaviour: 'drag',
    limit: 60,
    tooltips: !0,
    connect: !0,
    range: { min: 0, max: 100 },
   }));
})();
