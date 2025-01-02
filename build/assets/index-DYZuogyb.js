var d = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var f = d((r, t) => {
 (function (i, e) {
  typeof r == 'object' && typeof t < 'u'
   ? (t.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.regexp = e()));
 })(void 0, function () {
  function i() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     var n = e.options.regexp;
     if (n instanceof RegExp) return { valid: n.test(e.value) };
     var o = n.toString(),
      a = e.options.flags ? new RegExp(o, e.options.flags) : new RegExp(o);
     return { valid: a.test(e.value) };
    },
   };
  }
  return i;
 });
});
export default f();
