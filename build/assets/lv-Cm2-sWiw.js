var r = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var s = r((i, d) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof i == 'object' && typeof d < 'u'
   ? e(i)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.lv = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Sv', 'P', 'Ot', 'Tr', 'Ce', 'Pk', 'Se'],
     longhand: [
      'Svētdiena',
      'Pirmdiena',
      'Otrdiena',
      'Trešdiena',
      'Ceturtdiena',
      'Piektdiena',
      'Sestdiena',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Mai',
      'Apr',
      'Jūn',
      'Jūl',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     longhand: [
      'Janvāris',
      'Februāris',
      'Marts',
      'Aprīlis',
      'Maijs',
      'Jūnijs',
      'Jūlijs',
      'Augusts',
      'Septembris',
      'Oktobris',
      'Novembris',
      'Decembris',
     ],
    },
    rangeSeparator: ' līdz ',
   };
  e.l10ns.lv = a;
  var t = e.l10ns;
  (n.Latvian = a),
   (n.default = t),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default s();
