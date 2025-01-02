$(function () {
 var s = $('#section-block'),
  o = $('.btn-section-block'),
  t = $('.btn-section-block-overlay'),
  r = $('.btn-section-block-spinner'),
  a = $('.btn-section-block-custom'),
  i = $('.btn-section-block-multiple'),
  e = $('#card-block'),
  l = $('.btn-card-block'),
  n = $('.btn-card-block-overlay'),
  v = $('.btn-card-block-spinner'),
  d = $('.btn-card-block-custom'),
  k = $('.btn-card-block-multiple'),
  b = $('.btn-page-block'),
  f = $('.btn-page-block-overlay'),
  u = $('.btn-page-block-spinner'),
  p = $('.btn-page-block-custom'),
  g = $('.btn-page-block-multiple'),
  c = $('.form-block'),
  m = $('.btn-form-block'),
  w = $('.btn-form-block-overlay'),
  y = $('.btn-form-block-spinner'),
  C = $('.btn-form-block-custom'),
  S = $('.btn-form-block-multiple');
 o.length &&
  s.length &&
  o.on('click', function () {
   $('#section-block').block({
    message: '<div class="spinner-border text-white" role="status"></div>',
    timeout: 1e3,
    css: { backgroundColor: 'transparent', border: '0' },
    overlayCSS: { opacity: 0.5 },
   });
  }),
  t.length &&
   s.length &&
   t.on('click', function () {
    $('#section-block').block({
     message: '<div class="spinner-border text-primary" role="status"></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: { backgroundColor: '#fff', opacity: 0.8 },
    });
   }),
  r.length &&
   s.length &&
   r.on('click', function () {
    $('#section-block').block({
     message:
      '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  a.length &&
   s.length &&
   a.on('click', function () {
    $('#section-block').block({
     message:
      '<div class="d-flex justify-content-center"><p class="mb-0">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  i.length &&
   s.length &&
   i.on('click', function () {
    $('#section-block').block({
     message:
      '<div class="d-flex justify-content-center"><p class="mb-0">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
     timeout: 1e3,
     onUnblock: function () {
      $('#section-block').block({
       message: '<p class="mb-0">عملیات موفق...</p>',
       timeout: 1e3,
       css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
       overlayCSS: { opacity: 0.25 },
       onUnblock: function () {
        $('#section-block').block({
         message: '<div class="p-3 bg-success">اتمام فرایند</div>',
         timeout: 500,
         css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
         overlayCSS: { opacity: 0.25 },
        });
       },
      });
     },
    });
   }),
  l.length &&
   e.length &&
   l.on('click', function () {
    $('#card-block').block({
     message: '<div class="spinner-border text-white" role="status"></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  n.length &&
   e.length &&
   n.on('click', function () {
    $('#card-block').block({
     message: '<div class="spinner-border text-primary" role="status"></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: { backgroundColor: '#fff', opacity: 0.8 },
    });
   }),
  v.length &&
   e.length &&
   v.on('click', function () {
    $('#card-block').block({
     message:
      '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  d.length &&
   e.length &&
   d.on('click', function () {
    $('#card-block').block({
     message:
      '<div class="d-flex justify-content-center"><p class="mb-0">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  k.length &&
   e.length &&
   k.on('click', function () {
    $('#card-block').block({
     message:
      '<div class="d-flex justify-content-center"><p class="mb-0">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
     timeout: 1e3,
     onUnblock: function () {
      $('#card-block').block({
       message: '<p class="mb-0">عملیات موفق</p>',
       timeout: 1e3,
       css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
       overlayCSS: { opacity: 0.25 },
       onUnblock: function () {
        $('#card-block').block({
         message: '<div class="p-3 bg-success">اتمام فرایند</div>',
         timeout: 500,
         css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
         overlayCSS: { opacity: 0.25 },
        });
       },
      });
     },
    });
   }),
  b.length &&
   b.on('click', function () {
    $.blockUI({
     message: '<div class="spinner-border text-white" role="status"></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  f.length &&
   f.on('click', function () {
    $.blockUI({
     message: '<div class="spinner-border text-primary" role="status"></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: { backgroundColor: '#fff', opacity: 0.8 },
    });
   }),
  u.length &&
   u.on('click', function () {
    $.blockUI({
     message:
      '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  p.length &&
   p.on('click', function () {
    $.blockUI({
     message:
      '<div class="d-flex justify-content-center"><p class="mb-0">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  g.length &&
   g.on('click', function () {
    $.blockUI({
     message:
      '<div class="d-flex justify-content-center"><p class="mb-0">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
     timeout: 1e3,
     onUnblock: function () {
      $.blockUI({
       message: '<p class="mb-0">عملیات موفق</p>',
       timeout: 1e3,
       css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
       overlayCSS: { opacity: 0.5 },
       onUnblock: function () {
        $.blockUI({
         message: '<div class="p-3 bg-success">اتمام فرایند</div>',
         timeout: 500,
         css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
         overlayCSS: { opacity: 0.5 },
        });
       },
      });
     },
    });
   }),
  m.length &&
   c.length &&
   m.on('click', function () {
    c.block({
     message: '<div class="spinner-border text-white" role="status"></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  w.length &&
   c.length &&
   w.on('click', function () {
    c.block({
     message: '<div class="spinner-border text-primary" role="status"></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', border: '0' },
     overlayCSS: { backgroundColor: '#fff', opacity: 0.8 },
    });
   }),
  y.length &&
   c.length &&
   y.on('click', function () {
    c.block({
     message:
      '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  C.length &&
   c.length &&
   C.on('click', function () {
    c.block({
     message:
      '<div class="d-flex justify-content-center"><p class="mb-0">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
     timeout: 1e3,
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
    });
   }),
  S.length &&
   c.length &&
   S.on('click', function () {
    c.block({
     message:
      '<div class="d-flex justify-content-center"><p class="mb-0">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
     css: { backgroundColor: 'transparent', color: '#fff', border: '0' },
     overlayCSS: { opacity: 0.5 },
     timeout: 1e3,
     onUnblock: function () {
      c.block({
       message: '<p class="mb-0">عملیات موفق</p>',
       timeout: 1e3,
       css: { backgroundColor: 'transparent', border: '0' },
       overlayCSS: { opacity: 0.25 },
       onUnblock: function () {
        c.block({
         message: '<div class="p-3 bg-success">اتمام فرایند</div>',
         timeout: 500,
         css: { backgroundColor: 'transparent', border: '0' },
         overlayCSS: { opacity: 0.25 },
        });
       },
      });
     },
    });
   });
});
