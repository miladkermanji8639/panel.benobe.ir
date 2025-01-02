(function () {
 const t = [].slice.call(document.querySelectorAll('.card-collapsible')),
  a = [].slice.call(document.querySelectorAll('.card-expand')),
  s = [].slice.call(document.querySelectorAll('.card-close'));
 let c = document.getElementById('sortable-4');
 t &&
  t.map(function (e) {
   e.addEventListener('click', (l) => {
    l.preventDefault(),
     new bootstrap.Collapse(e.closest('.card').querySelector('.collapse')),
     e.closest('.card-header').classList.toggle('collapsed'),
     Helpers._toggleClass(
      e.firstElementChild,
      'ti-chevron-down',
      'ti-chevron-right',
     );
   });
  }),
  a &&
   a.map(function (e) {
    e.addEventListener('click', (l) => {
     l.preventDefault(),
      Helpers._toggleClass(
       e.firstElementChild,
       'ti-arrows-maximize',
       'ti-arrows-minimize',
      ),
      e.closest('.card').classList.toggle('card-fullscreen');
    });
   }),
  document.addEventListener('keyup', (e) => {
   if ((e.preventDefault(), e.key === 'Escape')) {
    const l = document.querySelector('.card-fullscreen');
    l &&
     (Helpers._toggleClass(
      l.querySelector('.card-expand').firstChild,
      'ti-arrows-maximize',
      'ti-arrows-minimize',
     ),
     l.classList.toggle('card-fullscreen'));
   }
  }),
  s &&
   s.map(function (e) {
    e.addEventListener('click', (l) => {
     l.preventDefault(), e.closest('.card').classList.add('d-none');
    });
   }),
  typeof c !== void 0 &&
   c !== null &&
   Sortable.create(c, { animation: 500, handle: '.card' });
})();
$(function () {
 const t = $('.card-reload');
 t.length &&
  t.on('click', function (a) {
   a.preventDefault();
   var s = $(this);
   s
    .closest('.card')
    .block({
     message:
      '<div class="sk-fold sk-primary"><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div></div><h5>درحال بروزرسانی...</h5>',
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: {
      backgroundColor: $('html').hasClass('dark-style') ? '#000' : '#fff',
      opacity: 0.55,
     },
    }),
    setTimeout(function () {
     s.closest('.card').unblock(),
      s.closest('.card').find('.card-alert').length &&
       s
        .closest('.card')
        .find('.card-alert')
        .html(
         '<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><span class="fw-medium">یک پیام!</span> متن دلخواه شما در اینجا نمایش داده می شود.</div>',
        );
    }, 2500);
  });
});
