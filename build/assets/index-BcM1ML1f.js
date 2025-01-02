var o = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var u = o((l, n) => {
 (function (a, e) {
  typeof l == 'object' && typeof n < 'u'
   ? (n.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.ismn = e()));
 })(void 0, function () {
  function a() {
   return {
    validate: function (e) {
     if (e.value === '') return { meta: null, valid: !0 };
     var d;
     switch (!0) {
      case /^M\d{9}$/.test(e.value):
      case /^M-\d{4}-\d{4}-\d{1}$/.test(e.value):
      case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):
       d = 'ISMN10';
       break;
      case /^9790\d{9}$/.test(e.value):
      case /^979-0-\d{4}-\d{4}-\d{1}$/.test(e.value):
      case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):
       d = 'ISMN13';
       break;
      default:
       return { meta: null, valid: !1 };
     }
     var t = e.value;
     d === 'ISMN10' && (t = '9790'.concat(t.substr(1))),
      (t = t.replace(/[^0-9]/gi, ''));
     for (var s = 0, i = t.length, v = [1, 3], r = 0; r < i - 1; r++)
      s += parseInt(t.charAt(r), 10) * v[r % 2];
     return (
      (s = (10 - (s % 10)) % 10),
      { meta: { type: d }, valid: ''.concat(s) === t.charAt(i - 1) }
     );
    },
   };
  }
  return a;
 });
});
export default u();
