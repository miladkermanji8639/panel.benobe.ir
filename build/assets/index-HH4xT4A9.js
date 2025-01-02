var t = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var d = t((a, n) => {
 (function (i, e) {
  typeof a == 'object' && typeof n < 'u'
   ? (n.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.mac = e()));
 })(void 0, function () {
  function i() {
   return {
    validate: function (e) {
     return {
      valid:
       e.value === '' ||
       /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(e.value) ||
       /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(e.value),
     };
    },
   };
  }
  return i;
 });
});
export default d();
