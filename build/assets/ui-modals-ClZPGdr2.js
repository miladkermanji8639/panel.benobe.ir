(function () {
 const o = document.querySelector('#flatpickr-date-1'),
  c = document.querySelector('#flatpickr-date-2'),
  l = document.querySelector('#flatpickr-date-3'),
  r = document.querySelector('#flatpickr-date-4'),
  i = document.querySelector('#flatpickr-date-5'),
  n = document.querySelector('#flatpickr-date-6'),
  d = document.querySelector('#flatpickr-date-7'),
  u = document.querySelector('#flatpickr-date-8');
 o &&
  o.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  }),
  c &&
   c.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altFormat: 'Y/m/d',
   }),
  l &&
   l.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altFormat: 'Y/m/d',
   }),
  r &&
   r.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altFormat: 'Y/m/d',
   }),
  i &&
   i.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altFormat: 'Y/m/d',
   }),
  n &&
   n.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altFormat: 'Y/m/d',
   }),
  d &&
   d.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altFormat: 'Y/m/d',
   }),
  u &&
   u.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altFormat: 'Y/m/d',
   });
 const m = document.querySelector('#animation-dropdown'),
  f = document.querySelector('#animationModal');
 m &&
  (m.onchange = function () {
   (f.classList = ''),
    f.classList.add('modal', 'animate__animated', this.value);
  });
 const s = document.querySelector('#youTubeModal'),
  y = s.querySelector('iframe');
 s.addEventListener('hidden.bs.modal', function () {
  y.setAttribute('src', '');
 }),
  (function () {
   [].slice
    .call(document.querySelectorAll('[data-bs-toggle="modal"]'))
    .map(function (e) {
     e.onclick = function () {
      const a = this.getAttribute('data-bs-target'),
       k = this.getAttribute('data-theVideo'),
       S = `${k}?autoplay=1`,
       p = document.querySelector(`${a} iframe`);
      p && p.setAttribute('src', S);
     };
    });
  })(),
  document.querySelectorAll('.carousel').forEach((t) => {
   t.addEventListener('slide.bs.carousel', (e) => {
    var a = $(e.relatedTarget).height();
    $(t).find('.active.carousel-item').parent().animate({ height: a }, 500);
   });
  });
})();
