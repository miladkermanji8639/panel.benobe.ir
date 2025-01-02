var o = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var f = o((d, n) => {
 (function (i, e) {
  typeof d == 'object' && typeof n < 'u'
   ? (n.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.grid = e(i.FormValidation)));
 })(void 0, function (i) {
  var e = i.algorithms.mod37And36;
  function a() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var r = t.value.toUpperCase();
     return /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(
      r,
     )
      ? ((r = r.replace(/\s/g, '').replace(/-/g, '')),
        r.substr(0, 5) === 'GRID:' && (r = r.substr(5)),
        { valid: e(r) })
      : { valid: !1 };
    },
   };
  }
  return a;
 });
});
export default f();
