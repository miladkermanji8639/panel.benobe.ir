var l = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var f = l((t, o) => {
 (function (e, a) {
  typeof t == 'object' && typeof o < 'u'
   ? (o.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.lessThan = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.utils.format,
   r = e.utils.removeUndefined;
  function d() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var s = Object.assign({}, { inclusive: !0, message: '' }, r(n.options)),
      i = parseFloat(''.concat(s.max).replace(',', '.'));
     return s.inclusive
      ? {
         message: a(
          n.l10n ? s.message || n.l10n.lessThan.default : s.message,
          ''.concat(i),
         ),
         valid: parseFloat(n.value) <= i,
        }
      : {
         message: a(
          n.l10n ? s.message || n.l10n.lessThan.notInclusive : s.message,
          ''.concat(i),
         ),
         valid: parseFloat(n.value) < i,
        };
    },
   };
  }
  return d;
 });
});
export default f();
