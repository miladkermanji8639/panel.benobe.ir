var p = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var f = p((l, d) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-numeric
  * @version 2.4.0
  */ (function (e, t) {
  typeof l == 'object' && typeof d < 'u'
   ? (d.exports = t(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], t)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.numeric = t(e.FormValidation)));
 })(void 0, function (e) {
  var t = e.utils.removeUndefined;
  return function () {
   return {
    validate: function (o) {
     if (o.value === '') return { valid: !0 };
     var r = Object.assign(
       {},
       { decimalSeparator: '.', thousandsSeparator: '' },
       t(o.options),
      ),
      a = ''.concat(o.value);
     a.substr(0, 1) === r.decimalSeparator
      ? (a = '0'.concat(r.decimalSeparator).concat(a.substr(1)))
      : a.substr(0, 2) === '-'.concat(r.decimalSeparator) &&
        (a = '-0'.concat(r.decimalSeparator).concat(a.substr(2)));
     var i = r.decimalSeparator === '.' ? '\\.' : r.decimalSeparator,
      n = r.thousandsSeparator === '.' ? '\\.' : r.thousandsSeparator,
      s = new RegExp(
       '^-?[0-9]{1,3}('.concat(n, '[0-9]{3})*(').concat(i, '[0-9]+)?$'),
      ),
      u = new RegExp(n, 'g');
     if (!s.test(a)) return { valid: !1 };
     n && (a = a.replace(u, '')), i && (a = a.replace(i, '.'));
     var c = parseFloat(a);
     return { valid: !isNaN(c) && isFinite(c) };
    },
   };
  };
 });
});
export default f();
