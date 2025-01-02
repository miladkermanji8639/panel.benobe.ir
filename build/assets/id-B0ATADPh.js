var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var o = t((i, d) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof i == 'object' && typeof d < 'u'
   ? e(i)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.id = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    weekdays: {
     shorthand: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
     longhand: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Okt',
      'Nov',
      'Des',
     ],
     longhand: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
   };
  e.l10ns.id = a;
  var u = e.l10ns;
  (n.Indonesian = a),
   (n.default = u),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default o();
