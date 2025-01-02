var i = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var o = i((r, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof r == 'object' && typeof a < 'u'
   ? n(r)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.sq = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   t = {
    weekdays: {
     shorthand: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
     longhand: [
      'E Diel',
      'E Hënë',
      'E Martë',
      'E Mërkurë',
      'E Enjte',
      'E Premte',
      'E Shtunë',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Shk',
      'Mar',
      'Pri',
      'Maj',
      'Qer',
      'Kor',
      'Gus',
      'Sht',
      'Tet',
      'Nën',
      'Dhj',
     ],
     longhand: [
      'Janar',
      'Shkurt',
      'Mars',
      'Prill',
      'Maj',
      'Qershor',
      'Korrik',
      'Gusht',
      'Shtator',
      'Tetor',
      'Nëntor',
      'Dhjetor',
     ],
    },
   };
  n.l10ns.sq = t;
  var d = n.l10ns;
  (e.Albanian = t),
   (e.default = d),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default o();
