document.addEventListener('DOMContentLoaded', function () {
 (function () {
  const u = document.querySelector('.app-chat-contacts .sidebar-body'),
   h = [].slice.call(
    document.querySelectorAll(
     '.chat-contact-list-item:not(.chat-contact-list-item-title)',
    ),
   ),
   l = document.querySelector('.chat-history-body'),
   f = document.querySelector('.app-chat-sidebar-left .sidebar-body'),
   m = document.querySelector('.app-chat-sidebar-right .sidebar-body'),
   w = [].slice.call(
    document.querySelectorAll(".form-check-input[name='chat-user-status']"),
   ),
   p = $('.chat-sidebar-left-user-about'),
   C = document.querySelector('.form-send-message'),
   i = document.querySelector('.message-input'),
   v = document.querySelector('.chat-search-input'),
   b = $('.speech-to-text'),
   y = {
    active: 'avatar-online',
    offline: 'avatar-offline',
    away: 'avatar-away',
    busy: 'avatar-busy',
   };
  u && new PerfectScrollbar(u, { wheelPropagation: !1, suppressScrollX: !0 }),
   l && new PerfectScrollbar(l, { wheelPropagation: !1, suppressScrollX: !0 }),
   f && new PerfectScrollbar(f, { wheelPropagation: !1, suppressScrollX: !0 }),
   m && new PerfectScrollbar(m, { wheelPropagation: !1, suppressScrollX: !0 });
  function S() {
   l.scrollTo(0, l.scrollHeight);
  }
  S(),
   p.length &&
    p.maxlength({
     alwaysShow: !0,
     warningClass: 'label label-success bg-success text-white',
     limitReachedClass: 'label label-danger',
     separator: '/',
     validate: !0,
     threshold: 120,
    }),
   w.forEach((t) => {
    t.addEventListener('click', (e) => {
     let s = document.querySelector('.chat-sidebar-left-user .avatar'),
      r = e.currentTarget.value;
     s.removeAttribute('class'),
      Helpers._addClass('avatar avatar-xl ' + y[r], s);
     let a = document.querySelector('.app-chat-contacts .avatar');
     a.removeAttribute('class'),
      Helpers._addClass('flex-shrink-0 avatar ' + y[r] + ' me-3', a);
    });
   }),
   h.forEach((t) => {
    t.addEventListener('click', (e) => {
     h.forEach((s) => {
      s.classList.remove('active');
     }),
      e.currentTarget.classList.add('active');
    });
   }),
   v &&
    v.addEventListener('keyup', (t) => {
     let e = t.currentTarget.value.toLowerCase(),
      s = 0,
      r = 0,
      a = document.querySelector('.chat-list-item-0'),
      d = document.querySelector('.contact-list-item-0'),
      x = [].slice.call(
       document.querySelectorAll(
        '#chat-list li:not(.chat-contact-list-item-title)',
       ),
      ),
      E = [].slice.call(
       document.querySelectorAll(
        '#contact-list li:not(.chat-contact-list-item-title)',
       ),
      );
     L(x, s, e, a), L(E, r, e, d);
    });
  function L(t, e, s, r) {
   t.forEach((a) => {
    let d = a.textContent.toLowerCase();
    s
     ? -1 < d.indexOf(s)
       ? (a.classList.add('d-flex'), a.classList.remove('d-none'), e++)
       : a.classList.add('d-none')
     : (a.classList.add('d-flex'), a.classList.remove('d-none'), e++);
   }),
    e == 0 ? r.classList.remove('d-none') : r.classList.add('d-none');
  }
  C.addEventListener('submit', (t) => {
   if ((t.preventDefault(), i.value)) {
    let e = document.createElement('div');
    (e.className = 'chat-message-text mt-2'),
     (e.innerHTML = '<p class="mb-0 text-break">' + i.value + '</p>'),
     document
      .querySelector('li:last-child .chat-message-wrapper')
      .appendChild(e),
     (i.value = ''),
     S();
   }
  });
  let q = document.querySelector(
    ".chat-history-header [data-target='#app-chat-contacts']",
   ),
   g = document.querySelector('.app-chat-sidebar-left .close-sidebar');
  if (
   (q.addEventListener('click', (t) => {
    g.removeAttribute('data-overlay');
   }),
   b.length)
  ) {
   var o = o || webkitSpeechRecognition;
   if (o != null) {
    var c = new o(),
     n = !1;
    b.on('click', function () {
     const t = $(this);
     (c.onspeechstart = function () {
      n = !0;
     }),
      n === !1 && c.start(),
      (c.onerror = function (e) {
       n = !1;
      }),
      (c.onresult = function (e) {
       t.closest('.form-send-message')
        .find('.message-input')
        .val(e.results[0][0].transcript);
      }),
      (c.onspeechend = function (e) {
       (n = !1), c.stop();
      });
    });
   }
  }
 })();
});