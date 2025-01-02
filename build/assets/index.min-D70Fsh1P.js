var m = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var g = m((f, d) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-step
  * @version 2.4.0
  */ (function (a, e) {
  typeof f == 'object' && typeof d < 'u'
   ? (d.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.step = e(a.FormValidation)));
 })(void 0, function (a) {
  var e = a.utils.format;
  return function () {
   var u = function (t, n) {
    if (n === 0) return 1;
    var i = ''.concat(t).split('.'),
     r = ''.concat(n).split('.'),
     c =
      (i.length === 1 ? 0 : i[1].length) + (r.length === 1 ? 0 : r[1].length);
    return (function (p, v) {
     var l,
      s = Math.pow(10, v),
      o = p * s;
     switch (!0) {
      case o === 0:
       l = 0;
       break;
      case o > 0:
       l = 1;
       break;
      case o < 0:
       l = -1;
     }
     return o % 1 == 0.5 * l
      ? (Math.floor(o) + (l > 0 ? 1 : 0)) / s
      : Math.round(o) / s;
    })(t - n * Math.floor(t / n), c);
   };
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var n = parseFloat(t.value);
     if (isNaN(n) || !isFinite(n)) return { valid: !1 };
     var i = Object.assign(
       {},
       { baseValue: 0, message: '', step: 1 },
       t.options,
      ),
      r = u(n - i.baseValue, i.step);
     return {
      message: e(
       t.l10n ? i.message || t.l10n.step.default : i.message,
       ''.concat(i.step),
      ),
      valid: r === 0 || r === i.step,
     };
    },
   };
  };
 });
});
export default g();
