var i = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var t = i((a, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-digits
  * @version 2.4.0
  */ (function (n, e) {
  typeof a == 'object' && typeof o < 'u'
   ? (o.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.digits = e()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (n) {
     return { valid: n.value === '' || /^\d+$/.test(n.value) };
    },
   };
  };
 });
});
export default t();
