var l = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var p = l((d, n) => {
 (function (e, r) {
  typeof d == 'object' && typeof n < 'u'
   ? (n.exports = r())
   : typeof define == 'function' && define.amd
     ? define(r)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.cusip = r()));
 })(void 0, function () {
  function e() {
   return {
    validate: function (r) {
     if (r.value === '') return { valid: !0 };
     var i = r.value.toUpperCase();
     if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(i))
      return { valid: !1 };
     var o = i.split(''),
      c = o.pop(),
      f = o.map(function (t) {
       var a = t.charCodeAt(0);
       switch (!0) {
        case t === '*':
         return 36;
        case t === '@':
         return 37;
        case t === '#':
         return 38;
        case a >= 65 && a <= 90:
         return a - 65 + 10;
        default:
         return parseInt(t, 10);
       }
      }),
      s = f
       .map(function (t, a) {
        var u = a % 2 === 0 ? t : 2 * t;
        return Math.floor(u / 10) + (u % 10);
       })
       .reduce(function (t, a) {
        return t + a;
       }, 0),
      v = (10 - (s % 10)) % 10;
     return { valid: c === ''.concat(v) };
    },
   };
  }
  return e;
 });
});
export default p();
