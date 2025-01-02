var o = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var t = o((d, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof a < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.sv = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    firstDayOfWeek: 1,
    weekAbbreviation: 'v',
    weekdays: {
     shorthand: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'],
     longhand: [
      'Söndag',
      'Måndag',
      'Tisdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lördag',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     longhand: [
      'Januari',
      'Februari',
      'Mars',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'Augusti',
      'September',
      'Oktober',
      'November',
      'December',
     ],
    },
    ordinal: function () {
     return '.';
    },
   };
  e.l10ns.sv = i;
  var r = e.l10ns;
  (n.Swedish = i),
   (n.default = r),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default t();
