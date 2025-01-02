var c = (a, i) => () => (i || a((i = { exports: {} }).exports, i), i.exports);
var m = c((d, s) => {
 (function (a, i) {
  typeof d == 'object' && typeof s < 'u'
   ? (s.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.step = i(a.FormValidation)));
 })(void 0, function (a) {
  var i = a.utils.format;
  function f() {
   var l = function (r, n) {
     var e = Math.pow(10, n),
      t = r * e,
      o;
     switch (!0) {
      case t === 0:
       o = 0;
       break;
      case t > 0:
       o = 1;
       break;
      case t < 0:
       o = -1;
       break;
     }
     var v = t % 1 === 0.5 * o;
     return v ? (Math.floor(t) + (o > 0 ? 1 : 0)) / e : Math.round(t) / e;
    },
    u = function (r, n) {
     if (n === 0) return 1;
     var e = ''.concat(r).split('.'),
      t = ''.concat(n).split('.'),
      o =
       (e.length === 1 ? 0 : e[1].length) + (t.length === 1 ? 0 : t[1].length);
     return l(r - n * Math.floor(r / n), o);
    };
   return {
    validate: function (r) {
     if (r.value === '') return { valid: !0 };
     var n = parseFloat(r.value);
     if (isNaN(n) || !isFinite(n)) return { valid: !1 };
     var e = Object.assign(
       {},
       { baseValue: 0, message: '', step: 1 },
       r.options,
      ),
      t = u(n - e.baseValue, e.step);
     return {
      message: i(
       r.l10n ? e.message || r.l10n.step.default : e.message,
       ''.concat(e.step),
      ),
      valid: t === 0 || t === e.step,
     };
    },
   };
  }
  return f;
 });
});
export default m();
