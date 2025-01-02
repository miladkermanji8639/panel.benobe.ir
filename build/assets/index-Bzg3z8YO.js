var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var v = u((o, r) => {
 (function (e, t) {
  typeof o == 'object' && typeof r < 'u'
   ? (r.exports = t())
   : typeof define == 'function' && define.amd
     ? define(t)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.sedol = t()));
 })(void 0, function () {
  function e() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var n = t.value.toUpperCase();
     if (!/^[0-9A-Z]{7}$/.test(n)) return { valid: !1 };
     for (
      var f = [1, 3, 1, 7, 3, 9, 1], d = n.length, a = 0, i = 0;
      i < d - 1;
      i++
     )
      a += f[i] * parseInt(n.charAt(i), 36);
     return (
      (a = (10 - (a % 10)) % 10), { valid: ''.concat(a) === n.charAt(d - 1) }
     );
    },
   };
  }
  return e;
 });
});
export default v();
