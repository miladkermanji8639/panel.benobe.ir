var t = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var d = t((a, n) => {
 (function (e, i) {
  typeof a == 'object' && typeof n < 'u'
   ? (n.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.base64 = i()));
 })(void 0, function () {
  function e() {
   return {
    validate: function (i) {
     return {
      valid:
       i.value === '' ||
       /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
        i.value,
       ),
     };
    },
   };
  }
  return e;
 });
});
export default d();
