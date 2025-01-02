var l = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var f = l((r, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-sedol
  * @version 2.4.0
  */ (function (e, a) {
  typeof r == 'object' && typeof o < 'u'
   ? (o.exports = a())
   : typeof define == 'function' && define.amd
     ? define(a)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.sedol = a()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     var a = e.value.toUpperCase();
     if (!/^[0-9A-Z]{7}$/.test(a)) return { valid: !1 };
     for (
      var d = [1, 3, 1, 7, 3, 9, 1], t = a.length, n = 0, i = 0;
      i < t - 1;
      i++
     )
      n += d[i] * parseInt(a.charAt(i), 36);
     return {
      valid: ''.concat((n = (10 - (n % 10)) % 10)) === a.charAt(t - 1),
     };
    },
   };
  };
 });
});
export default f();
