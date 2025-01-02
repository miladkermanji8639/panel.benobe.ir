var s = (e, d) => () => (d || e((d = { exports: {} }).exports, d), d.exports);
var n = s((i, t) => {
 (function (e, d) {
  typeof i == 'object' && typeof t < 'u'
   ? (t.exports = d(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], d)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.imei = d(e.FormValidation)));
 })(void 0, function (e) {
  var d = e.algorithms.luhn;
  function r() {
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     switch (!0) {
      case /^\d{15}$/.test(a.value):
      case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(a.value):
      case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(a.value):
       return { valid: d(a.value.replace(/[^0-9]/g, '')) };
      case /^\d{14}$/.test(a.value):
      case /^\d{16}$/.test(a.value):
      case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(a.value):
      case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(a.value):
       return { valid: !0 };
      default:
       return { valid: !1 };
     }
    },
   };
  }
  return r;
 });
});
export default n();
