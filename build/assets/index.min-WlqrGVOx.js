var e = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var r = e((a, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-regexp
  * @version 2.4.0
  */ (function (i, n) {
  typeof a == 'object' && typeof o < 'u'
   ? (o.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.regexp = n()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (i) {
     if (i.value === '') return { valid: !0 };
     var n = i.options.regexp;
     if (n instanceof RegExp) return { valid: n.test(i.value) };
     var t = n.toString();
     return {
      valid: (i.options.flags
       ? new RegExp(t, i.options.flags)
       : new RegExp(t)
      ).test(i.value),
     };
    },
   };
  };
 });
});
export default r();
