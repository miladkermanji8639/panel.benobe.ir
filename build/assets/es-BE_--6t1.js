var a = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var t = a((i, r) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof i == 'object' && typeof r < 'u'
   ? e(i)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.es = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   o = {
    weekdays: {
     shorthand: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
     longhand: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
     ],
    },
    months: {
     shorthand: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
     ],
     longhand: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
     ],
    },
    ordinal: function () {
     return 'º';
    },
    firstDayOfWeek: 1,
   };
  e.l10ns.es = o;
  var d = e.l10ns;
  (n.Spanish = o),
   (n.default = d),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default t();
