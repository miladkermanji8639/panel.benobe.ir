var d = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var a = d((t, n) => {
 (function (i, e) {
  typeof t == 'object' && typeof n < 'u'
   ? (n.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.promise = e(i.FormValidation)));
 })(void 0, function (i) {
  var e = i.utils.call;
  function r() {
   return {
    validate: function (o) {
     return e(o.options.promise, [o]);
    },
   };
  }
  return r;
 });
});
export default a();
