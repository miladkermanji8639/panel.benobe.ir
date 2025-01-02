var i = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var d = i((t, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-siren
  * @version 2.4.0
  */ (function (a, e) {
  typeof t == 'object' && typeof o < 'u'
   ? (o.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.siren = e(a.FormValidation)));
 })(void 0, function (a) {
  var e = a.algorithms.luhn;
  return function () {
   return {
    validate: function (n) {
     return {
      valid: n.value === '' || (/^\d{9}$/.test(n.value) && e(n.value)),
     };
    },
   };
  };
 });
});
export default d();
