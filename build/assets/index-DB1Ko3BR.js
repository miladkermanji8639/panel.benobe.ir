var a = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var d = a((t, n) => {
 (function (e, i) {
  typeof t == 'object' && typeof n < 'u'
   ? (n.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.identical = i()));
 })(void 0, function () {
  function e() {
   return {
    validate: function (i) {
     var o =
      typeof i.options.compare == 'function'
       ? i.options.compare.call(this)
       : i.options.compare;
     return { valid: o === '' || i.value === o };
    },
   };
  }
  return e;
 });
});
export default d();
