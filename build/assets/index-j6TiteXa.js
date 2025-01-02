var i = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var o = i((d, r) => {
 (function (a, e) {
  typeof d == 'object' && typeof r < 'u'
   ? (r.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.rtn = e()));
 })(void 0, function () {
  function a() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     if (!/^\d{9}$/.test(e.value)) return { valid: !1 };
     for (var t = 0, n = 0; n < e.value.length; n += 3)
      t +=
       parseInt(e.value.charAt(n), 10) * 3 +
       parseInt(e.value.charAt(n + 1), 10) * 7 +
       parseInt(e.value.charAt(n + 2), 10);
     return { valid: t !== 0 && t % 10 === 0 };
    },
   };
  }
  return a;
 });
});
export default o();
