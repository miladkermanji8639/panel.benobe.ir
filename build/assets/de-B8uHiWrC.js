var o = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var d = o((a, t) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof a == 'object' && typeof t < 'u'
   ? e(a)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.de = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
     longhand: [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mär',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dez',
     ],
     longhand: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
     ],
    },
    firstDayOfWeek: 1,
    weekAbbreviation: 'KW',
    rangeSeparator: ' bis ',
    scrollTitle: 'Zum Ändern scrollen',
    toggleTitle: 'Zum Umschalten klicken',
   };
  e.l10ns.de = i;
  var r = e.l10ns;
  (n.German = i),
   (n.default = r),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default d();
