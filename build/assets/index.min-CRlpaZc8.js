var l = (a, d) => () => (d || a((d = { exports: {} }).exports, d), d.exports);
var n = l((i, e) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-imei
  * @version 2.4.0
  */ (function (a, d) {
  typeof i == 'object' && typeof e < 'u'
   ? (e.exports = d(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], d)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.imei = d(a.FormValidation)));
 })(void 0, function (a) {
  var d = a.algorithms.luhn;
  return function () {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     switch (!0) {
      case /^\d{15}$/.test(t.value):
      case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(t.value):
      case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(t.value):
       return { valid: d(t.value.replace(/[^0-9]/g, '')) };
      case /^\d{14}$/.test(t.value):
      case /^\d{16}$/.test(t.value):
      case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(t.value):
      case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(t.value):
       return { valid: !0 };
      default:
       return { valid: !1 };
     }
    },
   };
  };
 });
});
export default n();
