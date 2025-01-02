var a = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var r = a((d, t) => {
 (function (i, e) {
  typeof d == 'object' && typeof t < 'u'
   ? (t.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.siren = e(i.FormValidation)));
 })(void 0, function (i) {
  var e = i.algorithms.luhn;
  function o() {
   return {
    validate: function (n) {
     return {
      valid: n.value === '' || (/^\d{9}$/.test(n.value) && e(n.value)),
     };
    },
   };
  }
  return o;
 });
});
export default r();
