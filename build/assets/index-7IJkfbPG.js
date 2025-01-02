var d = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var a = d((t, n) => {
 (function (i, e) {
  typeof t == 'object' && typeof n < 'u'
   ? (n.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.bic = e()));
 })(void 0, function () {
  function i() {
   return {
    validate: function (e) {
     return {
      valid:
       e.value === '' ||
       /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(e.value),
     };
    },
   };
  }
  return i;
 });
});
export default a();
