var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var u = t((o, r) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof o == 'object' && typeof r < 'u'
   ? e(o)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.pt = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    weekdays: {
     shorthand: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
     longhand: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
     ],
     longhand: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
     ],
    },
    rangeSeparator: ' até ',
   };
  e.l10ns.pt = a;
  var i = e.l10ns;
  (n.Portuguese = a),
   (n.default = i),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default u();
