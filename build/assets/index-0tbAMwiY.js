var s = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var c = s((o, t) => {
 (function (n, e) {
  typeof o == 'object' && typeof t < 'u'
   ? (t.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.vin = e()));
 })(void 0, function () {
  function n() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(e.value))
      return { valid: !1 };
     for (
      var r = e.value.toUpperCase(),
       v = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        J: 1,
        K: 2,
        L: 3,
        M: 4,
        N: 5,
        P: 7,
        R: 9,
        S: 2,
        T: 3,
        U: 4,
        V: 5,
        W: 6,
        X: 7,
        Y: 8,
        Z: 9,
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
       },
       f = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
       u = r.length,
       d = 0,
       a = 0;
      a < u;
      a++
     )
      d += v[''.concat(r.charAt(a))] * f[a];
     var i = ''.concat(d % 11);
     return i === '10' && (i = 'X'), { valid: i === r.charAt(8) };
    },
   };
  }
  return n;
 });
});
export default c();
