var l = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var f = l((o, t) => {
 (function (e, a) {
  typeof o == 'object' && typeof t < 'u'
   ? (t.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.greaterThan = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.utils.format,
   s = e.utils.removeUndefined;
  function d() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var i = Object.assign({}, { inclusive: !0, message: '' }, s(n.options)),
      r = parseFloat(''.concat(i.min).replace(',', '.'));
     return i.inclusive
      ? {
         message: a(
          n.l10n ? i.message || n.l10n.greaterThan.default : i.message,
          ''.concat(r),
         ),
         valid: parseFloat(n.value) >= r,
        }
      : {
         message: a(
          n.l10n ? i.message || n.l10n.greaterThan.notInclusive : i.message,
          ''.concat(r),
         ),
         valid: parseFloat(n.value) > r,
        };
    },
   };
  }
  return d;
 });
});
export default f();
