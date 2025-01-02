var o = (n, a) => () => (a || n((a = { exports: {} }).exports, a), a.exports);
var t = o((r, i) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-rtn
  * @version 2.4.0
  */ (function (n, a) {
  typeof r == 'object' && typeof i < 'u'
   ? (i.exports = a())
   : typeof define == 'function' && define.amd
     ? define(a)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.rtn = a()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     if (!/^\d{9}$/.test(n.value)) return { valid: !1 };
     for (var a = 0, e = 0; e < n.value.length; e += 3)
      a +=
       3 * parseInt(n.value.charAt(e), 10) +
       7 * parseInt(n.value.charAt(e + 1), 10) +
       parseInt(n.value.charAt(e + 2), 10);
     return { valid: a !== 0 && a % 10 == 0 };
    },
   };
  };
 });
});
export default t();
