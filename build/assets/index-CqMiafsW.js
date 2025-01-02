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
       (i.FormValidation.validators.different = e()));
 })(void 0, function () {
  function i() {
   return {
    validate: function (e) {
     var o =
      typeof e.options.compare == 'function'
       ? e.options.compare.call(this)
       : e.options.compare;
     return { valid: o === '' || e.value !== o };
    },
   };
  }
  return i;
 });
});
export default a();
