document.addEventListener('DOMContentLoaded', function (i) {
 (function () {
  const n = document.querySelector('.price-duration-toggler'),
   c = [].slice.call(document.querySelectorAll('.price-monthly')),
   t = [].slice.call(document.querySelectorAll('.price-yearly'));
  function o() {
   n.checked
    ? (t.map(function (e) {
       e.classList.remove('d-none');
      }),
      c.map(function (e) {
       e.classList.add('d-none');
      }))
    : (t.map(function (e) {
       e.classList.add('d-none');
      }),
      c.map(function (e) {
       e.classList.remove('d-none');
      }));
  }
  o(),
   (n.onchange = function () {
    o();
   });
 })();
});