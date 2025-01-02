var r = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var f = r((d, t) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof t < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.gr = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πέ', 'Πα', 'Σά'],
     longhand: [
      'Κυριακή',
      'Δευτέρα',
      'Τρίτη',
      'Τετάρτη',
      'Πέμπτη',
      'Παρασκευή',
      'Σάββατο',
     ],
    },
    months: {
     shorthand: [
      'Ιαν',
      'Φεβ',
      'Μάρ',
      'Απρ',
      'Μάι',
      'Ιού',
      'Ιού',
      'Αύγ',
      'Σεπ',
      'Οκτ',
      'Νοέ',
      'Δεκ',
     ],
     longhand: [
      'Ιανουάριος',
      'Φεβρουάριος',
      'Μάρτιος',
      'Απρίλιος',
      'Μάιος',
      'Ιούνιος',
      'Ιούλιος',
      'Αύγουστος',
      'Σεπτέμβριος',
      'Οκτώβριος',
      'Νοέμβριος',
      'Δεκέμβριος',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
    weekAbbreviation: 'Εβδ',
    rangeSeparator: ' έως ',
    scrollTitle: 'Μετακυλήστε για προσαύξηση',
    toggleTitle: 'Κάντε κλικ για αλλαγή',
    amPM: ['ΠΜ', 'ΜΜ'],
   };
  e.l10ns.gr = i;
  var o = e.l10ns;
  (n.Greek = i),
   (n.default = o),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default f();
