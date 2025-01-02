var u = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var d = u((n, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (i, e) {
  typeof n == 'object' && typeof a < 'u'
   ? e(n)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((i.ro = {}));
 })(void 0, function (i) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   r = {
    weekdays: {
     shorthand: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sam'],
     longhand: [
      'Duminică',
      'Luni',
      'Marți',
      'Miercuri',
      'Joi',
      'Vineri',
      'Sâmbătă',
     ],
    },
    months: {
     shorthand: [
      'Ian',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Iun',
      'Iul',
      'Aug',
      'Sep',
      'Oct',
      'Noi',
      'Dec',
     ],
     longhand: [
      'Ianuarie',
      'Februarie',
      'Martie',
      'Aprilie',
      'Mai',
      'Iunie',
      'Iulie',
      'August',
      'Septembrie',
      'Octombrie',
      'Noiembrie',
      'Decembrie',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
   };
  e.l10ns.ro = r;
  var o = e.l10ns;
  (i.Romanian = r),
   (i.default = o),
   Object.defineProperty(i, '__esModule', { value: !0 });
 });
});
export default d();
