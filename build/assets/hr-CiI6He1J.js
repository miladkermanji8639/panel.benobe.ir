var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var r = t((a, d) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof a == 'object' && typeof d < 'u'
   ? e(a)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.hr = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
     longhand: [
      'Nedjelja',
      'Ponedjeljak',
      'Utorak',
      'Srijeda',
      'Četvrtak',
      'Petak',
      'Subota',
     ],
    },
    months: {
     shorthand: [
      'Sij',
      'Velj',
      'Ožu',
      'Tra',
      'Svi',
      'Lip',
      'Srp',
      'Kol',
      'Ruj',
      'Lis',
      'Stu',
      'Pro',
     ],
     longhand: [
      'Siječanj',
      'Veljača',
      'Ožujak',
      'Travanj',
      'Svibanj',
      'Lipanj',
      'Srpanj',
      'Kolovoz',
      'Rujan',
      'Listopad',
      'Studeni',
      'Prosinac',
     ],
    },
   };
  e.l10ns.hr = i;
  var o = e.l10ns;
  (n.Croatian = i),
   (n.default = o),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default r();
