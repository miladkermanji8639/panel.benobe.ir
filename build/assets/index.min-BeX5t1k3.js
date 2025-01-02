var o = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var d = o((n, i) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-mac
  * @version 2.4.0
  */ (function (a, e) {
  typeof n == 'object' && typeof i < 'u'
   ? (i.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.mac = e()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (a) {
     return {
      valid:
       a.value === '' ||
       /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(a.value) ||
       /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(a.value),
     };
    },
   };
  };
 });
});
export default d();
