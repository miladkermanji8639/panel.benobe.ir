var r = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var f = r((t, a) => {
 (function (i, n) {
  typeof t == 'object' && typeof a < 'u'
   ? (a.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.callback = n(i.FormValidation)));
 })(void 0, function (i) {
  var n = i.utils.call;
  function d() {
   return {
    validate: function (o) {
     var e = n(o.options.callback, [o]);
     return typeof e == 'boolean' ? { valid: e } : e;
    },
   };
  }
  return d;
 });
});
export default f();
