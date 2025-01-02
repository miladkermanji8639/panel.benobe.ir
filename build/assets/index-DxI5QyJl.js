var c = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var f = c((v, i) => {
 (function (a, e) {
  typeof v == 'object' && typeof i < 'u'
   ? (i.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.isbn = e()));
 })(void 0, function () {
  function a() {
   return {
    validate: function (e) {
     if (e.value === '') return { meta: { type: null }, valid: !0 };
     var n;
     switch (!0) {
      case /^\d{9}[\dX]$/.test(e.value):
      case e.value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value):
      case e.value.length === 13 &&
       /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value):
       n = 'ISBN10';
       break;
      case /^(978|979)\d{9}[\dX]$/.test(e.value):
      case e.value.length === 17 &&
       /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value):
      case e.value.length === 17 &&
       /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value):
       n = 'ISBN13';
       break;
      default:
       return { meta: { type: null }, valid: !1 };
     }
     var s = e.value.replace(/[^0-9X]/gi, '').split(''),
      l = s.length,
      r = 0,
      t,
      d;
     switch (n) {
      case 'ISBN10':
       for (r = 0, t = 0; t < l - 1; t++) r += parseInt(s[t], 10) * (10 - t);
       return (
        (d = 11 - (r % 11)),
        d === 11 ? (d = 0) : d === 10 && (d = 'X'),
        { meta: { type: n }, valid: ''.concat(d) === s[l - 1] }
       );
      case 'ISBN13':
       for (r = 0, t = 0; t < l - 1; t++)
        r += t % 2 === 0 ? parseInt(s[t], 10) : parseInt(s[t], 10) * 3;
       return (
        (d = 10 - (r % 10)),
        d === 10 && (d = '0'),
        { meta: { type: n }, valid: ''.concat(d) === s[l - 1] }
       );
     }
    },
   };
  }
  return a;
 });
});
export default f();
