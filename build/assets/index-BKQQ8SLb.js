var f = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var u = f((r, i) => {
 (function (a, e) {
  typeof r == 'object' && typeof i < 'u'
   ? (i.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.ean = e()));
 })(void 0, function () {
  function a() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(e.value)) return { valid: !1 };
     for (
      var d = e.value.length, n = 0, o = d === 8 ? [3, 1] : [1, 3], t = 0;
      t < d - 1;
      t++
     )
      n += parseInt(e.value.charAt(t), 10) * o[t % 2];
     return (
      (n = (10 - (n % 10)) % 10),
      { valid: ''.concat(n) === e.value.charAt(d - 1) }
     );
    },
   };
  }
  return a;
 });
});
export default u();
