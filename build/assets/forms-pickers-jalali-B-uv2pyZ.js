window.Date = window.JDate;
(function () {
 const a = document.querySelector('#flatpickr-date'),
  i = document.querySelector('#flatpickr-time'),
  r = document.querySelector('#flatpickr-datetime'),
  l = document.querySelector('#flatpickr-multi'),
  n = document.querySelector('#flatpickr-range'),
  o = document.querySelector('#flatpickr-inline'),
  m = document.querySelector('#flatpickr-human-friendly'),
  c = document.querySelector('#flatpickr-disabled-range');
 if (
  (a &&
   a.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altFormat: 'Y/m/d',
   }),
  i &&
   i.flatpickr({
    enableTime: !0,
    noCalendar: !0,
    locale: 'fa',
    altInput: !0,
    altFormat: 'H:i',
   }),
  r && r.flatpickr({ enableTime: !0, dateFormat: 'Y/m/d H:i', locale: 'fa' }),
  l &&
   l.flatpickr({
    weekNumbers: !0,
    enableTime: !0,
    locale: 'fa',
    mode: 'multiple',
    dateFormat: 'Y/m/d H:i',
    minDate: 'today',
   }),
  typeof n != null &&
   n.flatpickr({ mode: 'range', locale: 'fa', dateFormat: 'Y/m/d' }),
  o &&
   o.flatpickr({
    inline: !0,
    allowInput: !1,
    dateFormat: 'Y/m/d',
    monthSelectorType: 'static',
    locale: 'fa',
   }),
  m &&
   m.flatpickr({
    altInput: !0,
    altFormat: 'j F Y',
    dateFormat: 'Y/m/d',
    locale: 'fa',
   }),
  c)
 ) {
  const e = new JDate(Date.now() - 1728e5),
   d = new JDate(Date.now() + 3600 * 1e3 * 48);
  c.flatpickr({
   dateFormat: 'Y/m/d',
   locale: 'fa',
   disable: [
    { from: e.toISOString().split('T')[0], to: d.toISOString().split('T')[0] },
   ],
  });
 }
})();
$.fn.datepicker.dates.fa = {
 days: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
 daysShort: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه'],
 daysMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
 months: [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
 ],
 monthsShort: [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
 ],
 today: 'امروز',
 clear: 'پاک کردن',
 titleFormat: 'MM yyyy',
 weekStart: 6,
};
$(function () {
 var a = $('#bs-datepicker-basic'),
  i = $('#bs-datepicker-format'),
  r = $('#bs-datepicker-daterange'),
  l = $('#bs-datepicker-disabled-days'),
  n = $('#bs-datepicker-multidate'),
  o = $('#bs-datepicker-options'),
  m = $('#bs-datepicker-autoclose'),
  c = $('#bs-datepicker-inline');
 a.length &&
  a.datepicker({
   language: 'fa',
   format: 'yyyy/mm/dd',
   todayHighlight: !0,
   orientation: isRtl ? 'auto right' : 'auto left',
  }),
  i.length &&
   i.datepicker({
    language: 'fa',
    todayHighlight: !0,
    format: 'yyyy/mm/dd',
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  r.length &&
   r.datepicker({
    language: 'fa',
    format: 'yyyy/mm/dd',
    todayHighlight: !0,
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  l.length &&
   l.datepicker({
    language: 'fa',
    format: 'yyyy/mm/dd',
    todayHighlight: !0,
    daysOfWeekDisabled: [0, 6],
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  n.length &&
   n.datepicker({
    language: 'fa',
    format: 'yyyy/mm/dd',
    multidate: !0,
    todayHighlight: !0,
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  o.length &&
   o.datepicker({
    language: 'fa',
    format: 'yyyy/mm/dd',
    calendarWeeks: !0,
    clearBtn: !0,
    todayHighlight: !0,
    orientation: isRtl ? 'auto left' : 'auto right',
   }),
  m.length &&
   m.datepicker({
    format: 'yyyy/mm/dd',
    language: 'fa',
    todayHighlight: !0,
    autoclose: !0,
    orientation: isRtl ? 'auto right' : 'auto left',
   }),
  c.length &&
   c.datepicker({ format: 'yyyy/mm/dd', language: 'fa', todayHighlight: !0 });
 var e = {
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
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
   ],
   firstDay: 6,
  },
  d = {
   format: 'YYYY/MM/DD h:mm A',
   separator: ' - ',
   cancelLabel: 'پاک کردن',
   applyLabel: 'تایید',
   fromLabel: 'از',
   toLabel: 'تا',
   weekLabel: 'هفته',
   customRangeLabel: 'انتخاب بازه',
   daysOfWeek: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
   monthNames: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
   ],
   firstDay: 6,
  },
  g = $('#bs-rangepicker-basic'),
  p = $('#bs-rangepicker-single'),
  k = $('#bs-rangepicker-time'),
  u = $('#bs-rangepicker-range'),
  y = $('#bs-rangepicker-week-num'),
  h = $('#bs-rangepicker-dropdown'),
  f = document.getElementsByClassName('cancelBtn');
 g.length && g.daterangepicker({ locale: e, opens: isRtl ? 'left' : 'right' }),
  p.length &&
   p.daterangepicker({
    locale: e,
    singleDatePicker: !0,
    opens: isRtl ? 'left' : 'right',
   }),
  k.length &&
   k.daterangepicker({
    timePicker: !0,
    timePickerIncrement: 30,
    locale: d,
    opens: isRtl ? 'left' : 'right',
   }),
  u.length &&
   u.daterangepicker({
    locale: e,
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
  y.length &&
   y.daterangepicker({
    locale: e,
    showWeekNumbers: !0,
    opens: isRtl ? 'left' : 'right',
   }),
  h.length &&
   h.daterangepicker({
    locale: e,
    showDropdowns: !0,
    opens: isRtl ? 'left' : 'right',
   });
 for (var s = 0; s < f.length; s++)
  f[s].classList.remove('btn-default'), f[s].classList.add('btn-label-primary');
 var t = {
   am: 'ق.ظ',
   pm: 'ب.ظ',
   AM: 'ق.ظ',
   PM: 'ب.ظ',
   decimal: '.',
   mins: 'دقیقه',
   hr: 'ساعت',
   hrs: 'ساعت',
  },
  b = $('#timepicker-basic'),
  R = $('#timepicker-min-max'),
  D = $('#timepicker-disabled-times'),
  w = $('#timepicker-format'),
  T = $('#timepicker-step'),
  F = $('#timepicker-24hours');
 b.length && b.timepicker({ lang: t, orientation: isRtl ? 'r' : 'l' }),
  R.length &&
   R.timepicker({
    lang: t,
    minTime: '2:00pm',
    maxTime: '7:00am',
    showDuration: !0,
    orientation: isRtl ? 'r' : 'l',
   }),
  D.length &&
   D.timepicker({
    lang: t,
    disableTimeRanges: [
     ['12am', '3am'],
     ['4am', '4:30am'],
    ],
    orientation: isRtl ? 'r' : 'l',
   }),
  w.length &&
   w.timepicker({
    lang: t,
    timeFormat: 'H:i:s',
    orientation: isRtl ? 'r' : 'l',
   }),
  T.length &&
   T.timepicker({ lang: t, step: 15, orientation: isRtl ? 'r' : 'l' }),
  F.length &&
   F.timepicker({
    lang: t,
    show: '24:00',
    timeFormat: 'H:i:s',
    orientation: isRtl ? 'r' : 'l',
   });
});
