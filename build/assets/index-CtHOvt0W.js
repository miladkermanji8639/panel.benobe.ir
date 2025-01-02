var d = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var o = d((t, n) => {
 (function (e, i) {
  typeof t == 'object' && typeof n < 'u'
   ? (n.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.hex = i()));
 })(void 0, function () {
  function e() {
   return {
    validate: function (i) {
     return { valid: i.value === '' || /^[0-9a-fA-F]+$/.test(i.value) };
    },
   };
  }
  return e;
 });
});
export default o();
