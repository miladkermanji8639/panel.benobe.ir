var o = (a, n) => () => (n || a((n = { exports: {} }).exports, n), n.exports);
var i = o((t, e) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-bic
  * @version 2.4.0
  */ (function (a, n) {
  typeof t == 'object' && typeof e < 'u'
   ? (e.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.bic = n()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (a) {
     return {
      valid:
       a.value === '' ||
       /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(a.value),
     };
    },
   };
  };
 });
});
export default i();
