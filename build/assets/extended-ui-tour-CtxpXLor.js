(function () {
 const n = document.querySelector('#shepherd-example');
 function c(t) {
  const e =
    'btn btn-sm btn-label-secondary md-btn-flat waves-effect waves-light',
   a = 'btn btn-sm btn-primary btn-next waves-effect waves-light';
  return (
   t.addStep({
    title: 'نوار ابزار',
    text: 'این یک نوار ناوربری است',
    attachTo: { element: '.navbar', on: 'bottom' },
    buttons: [
     { action: t.cancel, classes: e, text: 'ردشدن' },
     { text: 'بعدی', classes: a, action: t.next },
    ],
   }),
   t.addStep({
    title: 'کارت',
    text: 'این یک کارت است',
    attachTo: { element: '.tour-card', on: 'top' },
    buttons: [
     { text: 'ردشدن', classes: e, action: t.cancel },
     { text: 'قبلی', classes: e, action: t.back },
     { text: 'بعدی', classes: a, action: t.next },
    ],
   }),
   t.addStep({
    title: 'فــوتر',
    text: 'این یک فــوتر است',
    attachTo: { element: '.footer', on: 'top' },
    buttons: [
     { text: 'ردشدن', classes: e, action: t.cancel },
     { text: 'قبلی', classes: e, action: t.back },
     { text: 'بعدی', classes: a, action: t.next },
    ],
   }),
   t.addStep({
    title: 'لایسنس',
    text: 'اینجا کلیک کنید',
    attachTo: { element: '.footer-link', on: 'top' },
    buttons: [
     { text: 'قبلی', classes: e, action: t.back },
     { text: 'اتمام', classes: a, action: t.cancel },
    ],
   }),
   t
  );
 }
 n &&
  (n.onclick = function () {
   const t = new Shepherd.Tour({
    defaultStepOptions: { scrollTo: !1, cancelIcon: { enabled: !0 } },
    useModalOverlay: !0,
   });
   c(t).start();
  });
 const s = document.querySelector('#shepherd-docs-example');
 function l(t) {
  const e =
    'btn btn-sm btn-label-secondary md-btn-flat waves-effect waves-light',
   a = 'btn btn-sm btn-primary btn-next waves-effect waves-light';
  return (
   t.addStep({
    title: 'نوار ابزار',
    text: 'این یک نوار ابزار است',
    attachTo: { element: '.navbar', on: 'bottom' },
    buttons: [
     { action: t.cancel, classes: e, text: 'ردشدن' },
     { text: 'بعدی', classes: a, action: t.next },
    ],
   }),
   t.addStep({
    title: 'فــوتر',
    text: 'این یک فــوتر است',
    attachTo: { element: '.footer', on: 'top' },
    buttons: [
     { text: 'ردشدن', classes: e, action: t.cancel },
     { text: 'قبلی', classes: e, action: t.back },
     { text: 'بعدی', classes: a, action: t.next },
    ],
   }),
   t.addStep({
    title: 'لینک‌های سوشال مدیا',
    text: 'برای به اشتراک گذاری در سوشال مدیا کلیک کنید',
    attachTo: { element: '.footer-link', on: 'top' },
    buttons: [
     { text: 'قبلی', classes: e, action: t.back },
     { text: 'اتمام', classes: a, action: t.cancel },
    ],
   }),
   t
  );
 }
 s &&
  (s.onclick = function () {
   const t = new Shepherd.Tour({
    defaultStepOptions: { scrollTo: !1, cancelIcon: { enabled: !0 } },
    useModalOverlay: !0,
   });
   l(t).start();
  });
})();
