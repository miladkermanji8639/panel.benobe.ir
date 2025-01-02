$(function () {
 const r = $('.select2'),
  d = $('.selectpicker');
 d.length && d.selectpicker(),
  r.length &&
   r.each(function () {
    var i = $(this);
    i.wrap('<div class="position-relative"></div>'),
     i.select2({ placeholder: 'انتخاب کنید', dropdownParent: i.parent() });
   });
});
(function () {
 const r = document.querySelector('.wizard-numbered'),
  d = [].slice.call(r.querySelectorAll('.btn-next')),
  i = [].slice.call(r.querySelectorAll('.btn-prev')),
  o = r.querySelector('.btn-submit');
 if (typeof r !== void 0 && r !== null) {
  const t = new Stepper(r, { linear: !1 });
  d &&
   d.forEach((e) => {
    e.addEventListener('click', (n) => {
     t.next();
    });
   }),
   i &&
    i.forEach((e) => {
     e.addEventListener('click', (n) => {
      t.previous();
     });
    }),
   o &&
    o.addEventListener('click', (e) => {
     alert('ثبت شد..!!');
    });
 }
 const l = document.querySelector('.wizard-vertical'),
  s = [].slice.call(l.querySelectorAll('.btn-next')),
  u = [].slice.call(l.querySelectorAll('.btn-prev')),
  v = l.querySelector('.btn-submit');
 if (typeof l !== void 0 && l !== null) {
  const t = new Stepper(l, { linear: !1 });
  s &&
   s.forEach((e) => {
    e.addEventListener('click', (n) => {
     t.next();
    });
   }),
   u &&
    u.forEach((e) => {
     e.addEventListener('click', (n) => {
      t.previous();
     });
    }),
   v &&
    v.addEventListener('click', (e) => {
     alert('ثبت شد..!!');
    });
 }
 const c = document.querySelector('.wizard-modern-example'),
  f = [].slice.call(c.querySelectorAll('.btn-next')),
  p = [].slice.call(c.querySelectorAll('.btn-prev')),
  S = c.querySelector('.btn-submit');
 if (typeof c !== void 0 && c !== null) {
  const t = new Stepper(c, { linear: !1 });
  f &&
   f.forEach((e) => {
    e.addEventListener('click', (n) => {
     t.next();
    });
   }),
   p &&
    p.forEach((e) => {
     e.addEventListener('click', (n) => {
      t.previous();
     });
    }),
   S &&
    S.addEventListener('click', (e) => {
     alert('ثبت شد..!!');
    });
 }
 const a = document.querySelector('.wizard-modern-vertical'),
  b = [].slice.call(a.querySelectorAll('.btn-next')),
  w = [].slice.call(a.querySelectorAll('.btn-prev')),
  m = a.querySelector('.btn-submit');
 if (typeof a !== void 0 && a !== null) {
  const t = new Stepper(a, { linear: !1 });
  b &&
   b.forEach((e) => {
    e.addEventListener('click', (n) => {
     t.next();
    });
   }),
   w &&
    w.forEach((e) => {
     e.addEventListener('click', (n) => {
      t.previous();
     });
    }),
   m &&
    m.addEventListener('click', (e) => {
     alert('ثبت شد..!!');
    });
 }
})();
