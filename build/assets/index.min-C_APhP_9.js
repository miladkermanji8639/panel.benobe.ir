var c = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var p = c((f, l) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-integer
  * @version 2.4.0
  */ (function (e, a) {
  typeof f == 'object' && typeof l < 'u'
   ? (l.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.integer = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.utils.removeUndefined;
  return function () {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var o = Object.assign(
       {},
       { decimalSeparator: '.', thousandsSeparator: '' },
       a(n.options),
      ),
      r = o.decimalSeparator === '.' ? '\\.' : o.decimalSeparator,
      d = o.thousandsSeparator === '.' ? '\\.' : o.thousandsSeparator,
      s = new RegExp(
       '^-?[0-9]{1,3}('.concat(d, '[0-9]{3})*(').concat(r, '[0-9]+)?$'),
      ),
      u = new RegExp(d, 'g'),
      i = ''.concat(n.value);
     if (!s.test(i)) return { valid: !1 };
     d && (i = i.replace(u, '')), r && (i = i.replace(r, '.'));
     var t = parseFloat(i);
     return { valid: !isNaN(t) && isFinite(t) && Math.floor(t) === t };
    },
   };
  };
 });
});
export default p();
