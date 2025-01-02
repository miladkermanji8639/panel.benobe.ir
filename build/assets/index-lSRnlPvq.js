var u = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var A = u((d, r) => {
 (function (e, i) {
  typeof d == 'object' && typeof r < 'u'
   ? (r.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.uuid = i(e.FormValidation)));
 })(void 0, function (e) {
  var i = e.utils.format,
   s = e.utils.removeUndefined;
  function F() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var a = Object.assign({}, { message: '' }, s(n.options)),
      o = {
       3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
       4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
       5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
       all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      },
      t = a.version ? ''.concat(a.version) : 'all';
     return {
      message: a.version
       ? i(n.l10n ? a.message || n.l10n.uuid.version : a.message, a.version)
       : n.l10n
         ? n.l10n.uuid.default
         : a.message,
      valid: o[t] === null ? !0 : o[t].test(n.value),
     };
    },
   };
  }
  return F;
 });
});
export default A();
