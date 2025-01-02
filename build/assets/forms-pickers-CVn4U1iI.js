(function () {
 const e = document.querySelector('#flatpickr-date'),
  t = document.querySelector('#flatpickr-time'),
  a = document.querySelector('#flatpickr-datetime'),
  n = document.querySelector('#flatpickr-multi'),
  l = document.querySelector('#flatpickr-range'),
  o = document.querySelector('#flatpickr-inline'),
  c = document.querySelector('#flatpickr-human-friendly'),
  s = document.querySelector('#flatpickr-disabled-range');
 if (
  (e && e.flatpickr({ monthSelectorType: 'static' }),
  t && t.flatpickr({ enableTime: !0, noCalendar: !0 }),
  a && a.flatpickr({ enableTime: !0, dateFormat: 'Y-m-d H:i' }),
  n &&
   n.flatpickr({
    weekNumbers: !0,
    enableTime: !0,
    mode: 'multiple',
    minDate: 'today',
   }),
  typeof l != null && l.flatpickr({ mode: 'range' }),
  o && o.flatpickr({ inline: !0, allowInput: !1, monthSelectorType: 'static' }),
  c && c.flatpickr({ altInput: !0, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }),
  s)
 ) {
  const r = new Date(Date.now() - 1728e5),
   u = new Date(Date.now() + 3600 * 1e3 * 48);
  s.flatpickr({
   dateFormat: 'Y-m-d',
   disable: [
    { from: r.toISOString().split('T')[0], to: u.toISOString().split('T')[0] },
   ],
  });
 }
})();
$.fn.datepicker.dates.fa = {
 days: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
 daysShort: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه'],
 daysMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
 months: [
  'ژانویه',
  'فوریه',
  'مارس',
  'آوریل',
  'می',
  'ژوئن',
  'جولای',
  'اوت',
  'سپتامبر',
  'اکتبر',
  'نوامبر',
  'دسامبر',
 ],
 monthsShort: [
  'ژانویه',
  'فوریه',
  'مارس',
  'آوریل',
  'می',
  'ژوئن',
  'جولای',
  'اوت',
  'سپتامبر',
  'اکتبر',
  'نوامبر',
  'دسامبر',
 ],
 today: 'امروز',
 clear: 'پاک کردن',
 titleFormat: 'MM yyyy',
};
$(function () {
 var e = $('#bs-datepicker-basic'),
  t = $('#bs-datepicker-format'),
  a = $('#bs-datepicker-daterange'),
  n = $('#bs-datepicker-disabled-days'),
  l = $('#bs-datepicker-multidate'),
  o = $('#bs-datepicker-options'),
  c = $('#bs-datepicker-autoclose'),
  s = $('#bs-datepicker-inline');
 e.length &&
  e.datepicker({
   language: 'fa',
   todayHighlight: !0,
   orientation: isRtl ? 'auto right' : 'auto left',
  }),
  t.length &&
   t.datepicker({
    language: 'fa',
    todayHighlight: !0,
    format: 'dd/mm/yyyy',
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  a.length &&
   a.datepicker({
    language: 'fa',
    todayHighlight: !0,
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  n.length &&
   n.datepicker({
    language: 'fa',
    todayHighlight: !0,
    daysOfWeekDisabled: [0, 6],
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  l.length &&
   l.datepicker({
    language: 'fa',
    multidate: !0,
    todayHighlight: !0,
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  o.length &&
   o.datepicker({
    language: 'fa',
    calendarWeeks: !0,
    clearBtn: !0,
    todayHighlight: !0,
    orientation: isRtl ? 'auto left' : 'auto right',
   }),
  c.length &&
   c.datepicker({
    language: 'fa',
    todayHighlight: !0,
    autoclose: !0,
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  s.length && s.datepicker({ language: 'fa', todayHighlight: !0 });
 var r = {
   format: 'YYYY/MM/DD',
   separator: ' - ',
   customRangeLabel: 'انتخاب بازه',
   cancelLabel: 'پاک کردن',
   applyLabel: 'تایید',
   fromLabel: 'از',
   toLabel: 'تا',
   weekLabel: 'هفته',
   daysOfWeek: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
   monthNames: [
    'ژانویه',
    'فوریه',
    'مارس',
    'آوریل',
    'می',
    'ژوئن',
    'جولای',
    'اوت',
    'سپتامبر',
    'اکتبر',
    'نوامبر',
    'دسامبر',
   ],
   firstDay: 6,
  },
  u = {
   format: 'YYYY/MM/DD h:mm A',
   separator: ' - ',
   customRangeLabel: 'انتخاب بازه',
   cancelLabel: 'پاک کردن',
   applyLabel: 'تایید',
   fromLabel: 'از',
   toLabel: 'تا',
   weekLabel: 'هفته',
   daysOfWeek: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
   monthNames: [
    'ژانویه',
    'فوریه',
    'مارس',
    'آوریل',
    'می',
    'ژوئن',
    'جولای',
    'اوت',
    'سپتامبر',
    'اکتبر',
    'نوامبر',
    'دسامبر',
   ],
   firstDay: 6,
  },
  p = $('#bs-rangepicker-basic'),
  k = $('#bs-rangepicker-single'),
  f = $('#bs-rangepicker-time'),
  d = $('#bs-rangepicker-range'),
  h = $('#bs-rangepicker-week-num'),
  b = $('#bs-rangepicker-dropdown'),
  g = document.getElementsByClassName('cancelBtn');
 p.length && p.daterangepicker({ locale: r, opens: isRtl ? 'left' : 'right' }),
  k.length &&
   k.daterangepicker({
    locale: r,
    singleDatePicker: !0,
    opens: isRtl ? 'left' : 'right',
   }),
  f.length &&
   f.daterangepicker({
    timePicker: !0,
    timePickerIncrement: 30,
    locale: u,
    opens: isRtl ? 'left' : 'right',
   }),
  d.length &&
   d.daterangepicker({
    locale: r,
    ranges: {
     امروز: [moment(), moment()],
     دیروز: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
     '7 روز قبل': [moment().subtract(6, 'days'), moment()],
     '۳۰ روز قبل': [moment().subtract(29, 'days'), moment()],
     'این ماه': [moment().startOf('month'), moment().endOf('month')],
     'ماه قبلی': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
     ],
    },
    opens: isRtl ? 'left' : 'right',
   }),
  h.length &&
   h.daterangepicker({
    locale: r,
    showWeekNumbers: !0,
    opens: isRtl ? 'left' : 'right',
   }),
  b.length &&
   b.daterangepicker({
    locale: r,
    showDropdowns: !0,
    opens: isRtl ? 'left' : 'right',
   });
 for (var m = 0; m < g.length; m++)
  g[m].classList.remove('btn-default'), g[m].classList.add('btn-label-primary');
 var i = {
   am: 'ق.ظ',
   pm: 'ب.ظ',
   AM: 'ق.ظ',
   PM: 'ب.ظ',
   decimal: '.',
   mins: 'دقیقه',
   hr: 'ساعت',
   hrs: 'ساعت',
  },
  y = $('#timepicker-basic'),
  R = $('#timepicker-min-max'),
  D = $('#timepicker-disabled-times'),
  w = $('#timepicker-format'),
  S = $('#timepicker-step'),
  T = $('#timepicker-24hours');
 y.length && y.timepicker({ lang: i, orientation: isRtl ? 'r' : 'l' }),
  R.length &&
   R.timepicker({
    lang: i,
    minTime: '2:00pm',
    maxTime: '7:00am',
    showDuration: !0,
    orientation: isRtl ? 'r' : 'l',
   }),
  D.length &&
   D.timepicker({
    lang: i,
    disableTimeRanges: [
     ['12am', '3am'],
     ['4am', '4:30am'],
    ],
    orientation: isRtl ? 'r' : 'l',
   }),
  w.length &&
   w.timepicker({
    lang: i,
    timeFormat: 'H:i:s',
    orientation: isRtl ? 'r' : 'l',
   }),
  S.length &&
   S.timepicker({ lang: i, step: 15, orientation: isRtl ? 'r' : 'l' }),
  T.length &&
   T.timepicker({
    lang: i,
    show: '24:00',
    timeFormat: 'H:i:s',
    orientation: isRtl ? 'r' : 'l',
   });
});
(function () {
 const e = document.querySelector('#color-picker-classic'),
  t = document.querySelector('#color-picker-monolith'),
  a = document.querySelector('#color-picker-nano');
 e &&
  pickr.create({
   el: e,
   theme: 'classic',
   default: 'rgba(102, 108, 232, 1)',
   swatches: [
    'rgba(102, 108, 232, 1)',
    'rgba(40, 208, 148, 1)',
    'rgba(255, 73, 97, 1)',
    'rgba(255, 145, 73, 1)',
    'rgba(30, 159, 242, 1)',
   ],
   components: {
    preview: !0,
    opacity: !0,
    hue: !0,
    interaction: {
     hex: !0,
     rgba: !0,
     hsla: !0,
     hsva: !0,
     cmyk: !0,
     input: !0,
     clear: !0,
     save: !0,
    },
   },
  }),
  t &&
   pickr.create({
    el: t,
    theme: 'monolith',
    default: 'rgba(40, 208, 148, 1)',
    swatches: [
     'rgba(102, 108, 232, 1)',
     'rgba(40, 208, 148, 1)',
     'rgba(255, 73, 97, 1)',
     'rgba(255, 145, 73, 1)',
     'rgba(30, 159, 242, 1)',
    ],
    components: {
     preview: !0,
     opacity: !0,
     hue: !0,
     interaction: {
      hex: !0,
      rgba: !0,
      hsla: !0,
      hsva: !0,
      cmyk: !0,
      input: !0,
      clear: !0,
      save: !0,
     },
    },
   }),
  a &&
   pickr.create({
    el: a,
    theme: 'nano',
    default: 'rgba(255, 73, 97, 1)',
    swatches: [
     'rgba(102, 108, 232, 1)',
     'rgba(40, 208, 148, 1)',
     'rgba(255, 73, 97, 1)',
     'rgba(255, 145, 73, 1)',
     'rgba(30, 159, 242, 1)',
    ],
    components: {
     preview: !0,
     opacity: !0,
     hue: !0,
     interaction: {
      hex: !0,
      rgba: !0,
      hsla: !0,
      hsva: !0,
      cmyk: !0,
      input: !0,
      clear: !0,
      save: !0,
     },
    },
   });
})();
