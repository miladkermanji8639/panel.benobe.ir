var d = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var o = d((t, n) => {
 (function (i, e) {
  typeof t == 'object' && typeof n < 'u'
   ? (n.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.digits = e()));
 })(void 0, function () {
  function i() {
   return {
    validate: function (e) {
     return { valid: e.value === '' || /^\d+$/.test(e.value) };
    },
   };
  }
  return i;
 });
});
export default o();
