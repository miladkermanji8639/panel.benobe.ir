var r = (a, i) => () => (i || a((i = { exports: {} }).exports, i), i.exports);
var l = r((d, t) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-ean
  * @version 2.4.0
  */ (function (a, i) {
  typeof d == 'object' && typeof t < 'u'
   ? (t.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.ean = i()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(a.value)) return { valid: !1 };
     for (
      var i = a.value.length, o = 0, e = i === 8 ? [3, 1] : [1, 3], n = 0;
      n < i - 1;
      n++
     )
      o += parseInt(a.value.charAt(n), 10) * e[n % 2];
     return {
      valid: ''.concat((o = (10 - (o % 10)) % 10)) === a.value.charAt(i - 1),
     };
    },
   };
  };
 });
});
export default l();
