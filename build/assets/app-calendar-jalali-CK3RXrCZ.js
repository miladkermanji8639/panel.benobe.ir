let n = new Date(),
 J = new Date(new Date().getTime() + 24 * 60 * 60 * 1e3),
 q =
  n.getMonth() === 11
   ? new Date(n.getFullYear() + 1, 0, 1)
   : new Date(n.getFullYear(), n.getMonth() + 1, 1),
 C =
  n.getMonth() === 11
   ? new Date(n.getFullYear() - 1, 0, 1)
   : new Date(n.getFullYear(), n.getMonth() - 1, 1),
 K = [
  {
   id: 1,
   url: '',
   title: 'بررسی طرح‌ها',
   start: n,
   end: J,
   allDay: !1,
   extendedProps: { calendar: 'Business' },
  },
  {
   id: 2,
   url: '',
   title: 'ملاقات با مشتری',
   start: new Date(n.getFullYear(), n.getMonth() + 1, -11),
   end: new Date(n.getFullYear(), n.getMonth() + 1, -10),
   allDay: !0,
   extendedProps: { calendar: 'Business' },
  },
  {
   id: 3,
   url: '',
   title: 'گردش خانوادگی',
   allDay: !0,
   start: new Date(n.getFullYear(), n.getMonth() + 1, -9),
   end: new Date(n.getFullYear(), n.getMonth() + 1, -7),
   extendedProps: { calendar: 'Holiday' },
  },
  {
   id: 4,
   url: '',
   title: 'رفتن به فروشگاه',
   start: new Date(n.getFullYear(), n.getMonth() + 1, -11),
   end: new Date(n.getFullYear(), n.getMonth() + 1, -10),
   extendedProps: { calendar: 'Personal' },
  },
  {
   id: 5,
   url: '',
   title: 'بازی فوتبال',
   start: new Date(n.getFullYear(), n.getMonth() + 1, -13),
   end: new Date(n.getFullYear(), n.getMonth() + 1, -12),
   allDay: !0,
   extendedProps: { calendar: 'ETC' },
  },
  {
   id: 6,
   url: '',
   title: 'مدیتیشن',
   start: new Date(n.getFullYear(), n.getMonth() + 1, -13),
   end: new Date(n.getFullYear(), n.getMonth() + 1, -12),
   allDay: !0,
   extendedProps: { calendar: 'Personal' },
  },
  {
   id: 7,
   url: '',
   title: 'شام',
   start: new Date(n.getFullYear(), n.getMonth() + 1, -13),
   end: new Date(n.getFullYear(), n.getMonth() + 1, -12),
   extendedProps: { calendar: 'Family' },
  },
  {
   id: 8,
   url: '',
   title: 'بررسی محصول',
   start: new Date(n.getFullYear(), n.getMonth() + 1, -13),
   end: new Date(n.getFullYear(), n.getMonth() + 1, -12),
   allDay: !0,
   extendedProps: { calendar: 'Business' },
  },
  {
   id: 9,
   url: '',
   title: 'قرارهای ماهانه',
   start: q,
   end: q,
   allDay: !0,
   extendedProps: { calendar: 'Business' },
  },
  {
   id: 10,
   url: '',
   title: 'رفتن به تعمیرگاه',
   start: C,
   end: C,
   allDay: !0,
   extendedProps: { calendar: 'Personal' },
  },
 ],
 A = 'ltr';
isRtl && (A = 'rtl');
document.addEventListener('DOMContentLoaded', function () {
 (function () {
  const I = document.getElementById('calendar'),
   L = document.querySelector('.app-calendar-sidebar'),
   M = document.getElementById('addEventSidebar'),
   x = document.querySelector('.app-overlay'),
   B = {
    Business: 'primary',
    Holiday: 'success',
    Personal: 'danger',
    Family: 'warning',
    ETC: 'info',
   },
   c = document.querySelector('.offcanvas-title'),
   E = document.querySelector('.btn-toggle-sidebar'),
   r = document.querySelector('button[type="submit"]'),
   g = document.querySelector('.btn-delete-event'),
   H = document.querySelector('.btn-cancel'),
   p = document.querySelector('#eventTitle'),
   d = document.querySelector('#eventStartDate'),
   s = document.querySelector('#eventEndDate'),
   h = document.querySelector('#eventURL'),
   u = $('#eventLabel'),
   o = $('#eventGuests'),
   b = document.querySelector('#eventLocation'),
   y = document.querySelector('#eventDescription'),
   f = document.querySelector('.allDay-switch'),
   D = document.querySelector('.select-all'),
   k = [].slice.call(document.querySelectorAll('.input-filter')),
   F = document.querySelector('.inline-calendar');
  let a,
   v = K,
   w = !1,
   P;
  const m = new bootstrap.Offcanvas(M); //! TODO: Update Event label and guest code to JS once select removes jQuery dependency
  if (u.length) {
   let e = function (t) {
    if (!t.id) return t.text;
    var l =
     "<span class='badge badge-dot bg-" +
     $(t.element).data('label') +
     " me-2'> </span>" +
     t.text;
    return l;
   };
   var Q = e;
   u.wrap('<div class="position-relative"></div>').select2({
    placeholder: 'انتخاب کنید',
    dropdownParent: u.parent(),
    templateResult: e,
    templateSelection: e,
    minimumResultsForSearch: -1,
    escapeMarkup: function (t) {
     return t;
    },
   });
  }
  if (o.length) {
   let e = function (t) {
    if (!t.id) return t.text;
    var l =
     "<div class='d-flex flex-wrap align-items-center'><div class='avatar avatar-xs me-2'><img src='" +
     assetsPath +
     'img/avatars/' +
     $(t.element).data('avatar') +
     "' alt='avatar' class='rounded-circle' /></div>" +
     t.text +
     '</div>';
    return l;
   };
   var X = e;
   o.wrap('<div class="position-relative"></div>').select2({
    placeholder: 'انتخاب کنید',
    dropdownParent: o.parent(),
    closeOnSelect: !1,
    templateResult: e,
    templateSelection: e,
    escapeMarkup: function (t) {
     return t;
    },
   });
  }
  if (d)
   var V = d.flatpickr({
    enableTime: !0,
    altInput: !0,
    locale: 'fa',
    altFormat: 'Y/m/d - H:i',
    onReady: function (e, t, l) {
     l.isMobile && l.mobileInput.setAttribute('step', null);
    },
   });
  if (s)
   var T = s.flatpickr({
    enableTime: !0,
    altInput: !0,
    locale: 'fa',
    altFormat: 'Y/m/d - H:i',
    onReady: function (e, t, l) {
     l.isMobile && l.mobileInput.setAttribute('step', null);
    },
   });
  F &&
   (P = F.flatpickr({ monthSelectorType: 'static', locale: 'fa', inline: !0 }));
  function R(e) {
   (a = e.event),
    a.url && (e.jsEvent.preventDefault(), window.open(a.url, '_blank')),
    m.show(),
    c && (c.innerHTML = 'ویرایش رویداد'),
    (r.innerHTML = 'ویرایش'),
    r.classList.add('btn-update-event'),
    r.classList.remove('btn-add-event'),
    g.classList.remove('d-none'),
    (p.value = a.title),
    V.setDate(a.start, !0, 'Y-m-d'),
    a.allDay === !0 ? (f.checked = !0) : (f.checked = !1),
    a.end !== null
     ? T.setDate(a.end, !0, 'Y-m-d')
     : T.setDate(a.start, !0, 'Y-m-d'),
    u.val(a.extendedProps.calendar).trigger('change'),
    a.extendedProps.location !== void 0 && (b.value = a.extendedProps.location),
    a.extendedProps.guests !== void 0 &&
     o.val(a.extendedProps.guests).trigger('change'),
    a.extendedProps.description !== void 0 &&
     (y.value = a.extendedProps.description);
  }
  function S() {
   const e = document.querySelector('.fc-sidebarToggle-button');
   for (
    e.classList.remove('fc-button-primary'),
     e.classList.add('d-lg-none', 'd-inline-block', 'ps-0');
    e.firstChild;

   )
    e.firstChild.remove();
   e.setAttribute('data-bs-toggle', 'sidebar'),
    e.setAttribute('data-overlay', ''),
    e.setAttribute('data-target', '#app-calendar-sidebar'),
    e.insertAdjacentHTML(
     'beforeend',
     '<i class="ti ti-menu-2 ti-sm text-heading"></i>',
    );
  }
  function G() {
   let e = [];
   return (
    [].slice
     .call(document.querySelectorAll('.input-filter:checked'))
     .forEach((l) => {
      e.push(l.getAttribute('data-value'));
     }),
    e
   );
  }
  function O(e, t) {
   let l = G(),
    z = v.filter(function (W) {
     return l.includes(W.extendedProps.calendar.toLowerCase());
    });
   t(z);
  }
  let i = new Calendar(I, {
   initialView: 'dayGridMonth',
   events: O,
   plugins: [dayGridPlugin, interactionPlugin, listPlugin, timegridPlugin],
   editable: !0,
   dragScroll: !0,
   dayMaxEvents: 2,
   eventResizableFromStart: !0,
   customButtons: { sidebarToggle: { text: 'Sidebar' } },
   headerToolbar: {
    start: 'sidebarToggle, prev,next, title',
    end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
   },
   direction: A,
   initialDate: new Date(),
   navLinks: !0,
   eventClassNames: function ({ event: e }) {
    return ['fc-event-' + B[e._def.extendedProps.calendar]];
   },
   dateClick: function (e) {
    let t = moment(e.date).format('YYYY-MM-DD');
    Y(),
     m.show(),
     c && (c.innerHTML = 'افزودن رویداد'),
     (r.innerHTML = 'افزودن'),
     r.classList.remove('btn-update-event'),
     r.classList.add('btn-add-event'),
     g.classList.add('d-none'),
     (d.value = t),
     (s.value = t);
   },
   eventClick: function (e) {
    R(e);
   },
   datesSet: function () {
    S();
   },
   viewDidMount: function () {
    S();
   },
   locale: 'fa',
   firstDay: 6,
   buttonText: {
    today: 'امروز',
    month: 'ماه',
    week: 'هفته',
    day: 'روز',
    list: 'لیست',
   },
   weekText: 'هفته',
   allDayText: 'کل روز',
   moreLinkText: function (e) {
    return '+' + e + ' آیتم دیگر';
   },
   noEventsText: 'رویدادی برای نمایش وجود ندارد',
  });
  i.render(), S();
  const N = document.getElementById('eventForm');
  FormValidation.formValidation(N, {
   fields: {
    eventTitle: {
     validators: { notEmpty: { message: 'لطفا عنوان را وارد کنید ' } },
    },
    eventStartDate: {
     validators: { notEmpty: { message: 'لطفا تاریخ شروع را وارد کنید ' } },
    },
    eventEndDate: {
     validators: { notEmpty: { message: 'لطفا تاریخ اتمام را وارد کنید' } },
    },
   },
   plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap5: new FormValidation.plugins.Bootstrap5({
     eleValidClass: '',
     rowSelector: function (e, t) {
      return '.mb-3';
     },
    }),
    submitButton: new FormValidation.plugins.SubmitButton(),
    autoFocus: new FormValidation.plugins.AutoFocus(),
   },
  })
   .on('core.form.valid', function () {
    w = !0;
   })
   .on('core.form.invalid', function () {
    w = !1;
   }),
   E &&
    E.addEventListener('click', (e) => {
     H.classList.remove('d-none');
    });
  function U(e) {
   v.push(e), i.refetchEvents();
  }
  function j(e) {
   (e.id = parseInt(e.id)),
    (v[v.findIndex((t) => t.id === e.id)] = e),
    i.refetchEvents();
  }
  function _(e) {
   (v = v.filter(function (t) {
    return t.id != e;
   })),
    i.refetchEvents();
  }
  r.addEventListener('click', (e) => {
   if (r.classList.contains('btn-add-event')) {
    if (w) {
     let t = {
      id: i.getEvents().length + 1,
      title: p.value,
      start: d.value,
      end: s.value,
      startStr: d.value,
      endStr: s.value,
      display: 'block',
      extendedProps: {
       location: b.value,
       guests: o.val(),
       calendar: u.val(),
       description: y.value,
      },
     };
     h.value && (t.url = h.value), f.checked && (t.allDay = !0), U(t), m.hide();
    }
   } else if (w) {
    let t = {
     id: a.id,
     title: p.value,
     start: d.value,
     end: s.value,
     url: h.value,
     extendedProps: {
      location: b.value,
      guests: o.val(),
      calendar: u.val(),
      description: y.value,
     },
     display: 'block',
     allDay: !!f.checked,
    };
    j(t), m.hide();
   }
  }),
   g.addEventListener('click', (e) => {
    _(parseInt(a.id)), m.hide();
   });
  function Y() {
   (s.value = ''),
    (h.value = ''),
    (d.value = ''),
    (p.value = ''),
    (b.value = ''),
    (f.checked = !1),
    o.val('').trigger('change'),
    (y.value = '');
  }
  M.addEventListener('hidden.bs.offcanvas', function () {
   Y();
  }),
   E.addEventListener('click', (e) => {
    c && (c.innerHTML = 'افزودن رویداد'),
     (r.innerHTML = 'افزودن'),
     r.classList.remove('btn-update-event'),
     r.classList.add('btn-add-event'),
     g.classList.add('d-none'),
     L.classList.remove('show'),
     x.classList.remove('show');
   }),
   D &&
    D.addEventListener('click', (e) => {
     e.currentTarget.checked
      ? document
         .querySelectorAll('.input-filter')
         .forEach((t) => (t.checked = 1))
      : document
         .querySelectorAll('.input-filter')
         .forEach((t) => (t.checked = 0)),
      i.refetchEvents();
    }),
   k &&
    k.forEach((e) => {
     e.addEventListener('click', () => {
      document.querySelectorAll('.input-filter:checked').length <
      document.querySelectorAll('.input-filter').length
       ? (D.checked = !1)
       : (D.checked = !0),
       i.refetchEvents();
     });
    }),
   P.config.onChange.push(function (e) {
    i.changeView(i.view.type, moment(e[0]).format('YYYY-MM-DD')),
     S(),
     L.classList.remove('show'),
     x.classList.remove('show');
   });
 })();
});
