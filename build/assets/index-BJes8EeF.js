var d = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var f = d((s, n) => {
 (function (e, a) {
  typeof s == 'object' && typeof n < 'u'
   ? (n.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.stringCase = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.utils.removeUndefined;
  function t() {
   return {
    validate: function (r) {
     if (r.value === '') return { valid: !0 };
     var i = Object.assign({}, { case: 'lower' }, a(r.options)),
      o = (i.case || 'lower').toLowerCase();
     return {
      message:
       i.message ||
       (r.l10n
        ? o === 'upper'
          ? r.l10n.stringCase.upper
          : r.l10n.stringCase.default
        : i.message),
      valid:
       o === 'upper'
        ? r.value === r.value.toUpperCase()
        : r.value === r.value.toLowerCase(),
     };
    },
   };
  }
  return t;
 });
});
export default f();
