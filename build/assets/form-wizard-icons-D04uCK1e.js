$(function () {
 const l = $('.select2'),
  o = $('.selectpicker');
 o.length && o.selectpicker(),
  l.length &&
   l.each(function () {
    var i = $(this);
    i.wrap('<div class="position-relative"></div>'),
     i.select2({ placeholder: 'انتخاب کنید', dropdownParent: i.parent() });
   });
});
(function () {
 const l = document.querySelector('.wizard-icons-example');
 if (typeof l !== void 0 && l !== null) {
  const t = [].slice.call(l.querySelectorAll('.btn-next')),
   n = [].slice.call(l.querySelectorAll('.btn-prev')),
   r = l.querySelector('.btn-submit'),
   c = new Stepper(l, { linear: !1 });
  t &&
   t.forEach((e) => {
    e.addEventListener('click', (s) => {
     c.next();
    });
   }),
   n &&
    n.forEach((e) => {
     e.addEventListener('click', (s) => {
      c.previous();
     });
    }),
   r &&
    r.addEventListener('click', (e) => {
     alert('ثبت شد..!!');
    });
 }
 const o = document.querySelector('.wizard-vertical-icons-example');
 if (typeof o !== void 0 && o !== null) {
  const t = [].slice.call(o.querySelectorAll('.btn-next')),
   n = [].slice.call(o.querySelectorAll('.btn-prev')),
   r = o.querySelector('.btn-submit'),
   c = new Stepper(o, { linear: !1 });
  t &&
   t.forEach((e) => {
    e.addEventListener('click', (s) => {
     c.next();
    });
   }),
   n &&
    n.forEach((e) => {
     e.addEventListener('click', (s) => {
      c.previous();
     });
    }),
   r &&
    r.addEventListener('click', (e) => {
     alert('ثبت شد..!!');
    });
 }
 const i = document.querySelector('.wizard-modern-icons-example');
 if (typeof i !== void 0 && i !== null) {
  const t = [].slice.call(i.querySelectorAll('.btn-next')),
   n = [].slice.call(i.querySelectorAll('.btn-prev')),
   r = i.querySelector('.btn-submit'),
   c = new Stepper(i, { linear: !1 });
  t &&
   t.forEach((e) => {
    e.addEventListener('click', (s) => {
     c.next();
    });
   }),
   n &&
    n.forEach((e) => {
     e.addEventListener('click', (s) => {
      c.previous();
     });
    }),
   r &&
    r.addEventListener('click', (e) => {
     alert('ثبت شد..!!');
    });
 }
 const a = document.querySelector('.wizard-modern-vertical-icons-example');
 if (typeof a !== void 0 && a !== null) {
  const t = [].slice.call(a.querySelectorAll('.btn-next')),
   n = [].slice.call(a.querySelectorAll('.btn-prev')),
   r = a.querySelector('.btn-submit'),
   c = new Stepper(a, { linear: !1 });
  t &&
   t.forEach((e) => {
    e.addEventListener('click', (s) => {
     c.next();
    });
   }),
   n &&
    n.forEach((e) => {
     e.addEventListener('click', (s) => {
      c.previous();
     });
    }),
   r &&
    r.addEventListener('click', (e) => {
     alert('ثبت شد..!!');
    });
 }
})();
