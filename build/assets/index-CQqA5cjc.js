var o = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var s = o((d, a) => {
 (function (i, e) {
  typeof d == 'object' && typeof a < 'u'
   ? (a.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.issn = e()));
 })(void 0, function () {
  function i() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     if (!/^\d{4}-\d{3}[\dX]$/.test(e.value)) return { valid: !1 };
     var n = e.value.replace(/[^0-9X]/gi, '').split(''),
      f = n.length,
      r = 0;
     n[7] === 'X' && (n[7] = '10');
     for (var t = 0; t < f; t++) r += parseInt(n[t], 10) * (8 - t);
     return { valid: r % 11 === 0 };
    },
   };
  }
  return i;
 });
});
export default s();
