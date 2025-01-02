var o = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var f = o((d, t) => {
 (function (i, e) {
  typeof d == 'object' && typeof t < 'u'
   ? (t.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.imo = e()));
 })(void 0, function () {
  function i() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     if (!/^IMO \d{7}$/i.test(e.value)) return { valid: !1 };
     for (
      var a = e.value.replace(/^.*(\d{7})$/, '$1'), r = 0, n = 6;
      n >= 1;
      n--
     )
      r += parseInt(a.slice(6 - n, -n), 10) * (n + 1);
     return { valid: r % 10 === parseInt(a.charAt(6), 10) };
    },
   };
  }
  return i;
 });
});
export default f();
