var f = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var u = f((d, r) => {
 (function (i, e) {
  typeof d == 'object' && typeof r < 'u'
   ? (r.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.siret = e()));
 })(void 0, function () {
  function i() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     for (var o = e.value.length, a = 0, n, t = 0; t < o; t++)
      (n = parseInt(e.value.charAt(t), 10)),
       t % 2 === 0 && ((n = n * 2), n > 9 && (n -= 9)),
       (a += n);
     return { valid: a % 10 === 0 };
    },
   };
  }
  return i;
 });
});
export default u();
