var u = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var v = u((l, s) => {
 (function (e, a) {
  typeof l == 'object' && typeof s < 'u'
   ? (s.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.between = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.utils.format,
   m = e.utils.removeUndefined;
  function f() {
   var d = function (n) {
    return parseFloat(''.concat(n).replace(',', '.'));
   };
   return {
    validate: function (n) {
     var i = n.value;
     if (i === '') return { valid: !0 };
     var t = Object.assign({}, { inclusive: !0, message: '' }, m(n.options)),
      o = d(t.min),
      r = d(t.max);
     return t.inclusive
      ? {
         message: a(n.l10n ? t.message || n.l10n.between.default : t.message, [
          ''.concat(o),
          ''.concat(r),
         ]),
         valid: parseFloat(i) >= o && parseFloat(i) <= r,
        }
      : {
         message: a(
          n.l10n ? t.message || n.l10n.between.notInclusive : t.message,
          [''.concat(o), ''.concat(r)],
         ),
         valid: parseFloat(i) > o && parseFloat(i) < r,
        };
    },
   };
  }
  return f;
 });
});
export default v();
