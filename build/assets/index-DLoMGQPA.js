var c = (n, r) => () => (r || n((r = { exports: {} }).exports, r), r.exports);
var h = c((l, m) => {
 (function (n, r) {
  typeof l == 'object' && typeof m < 'u'
   ? (m.exports = r(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], r)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.stringLength = r(n.FormValidation)));
 })(void 0, function (n) {
  var r = n.utils.format,
   g = n.utils.removeUndefined,
   v = function (a) {
    for (var e = a.length, s = a.length - 1; s >= 0; s--) {
     var t = a.charCodeAt(s);
     t > 127 && t <= 2047 ? e++ : t > 2047 && t <= 65535 && (e += 2),
      t >= 56320 && t <= 57343 && s--;
    }
    return e;
   };
  function u() {
   return {
    validate: function (a) {
     var e = Object.assign(
       {},
       { message: '', trim: !1, utf8Bytes: !1 },
       g(a.options),
      ),
      s =
       e.trim === !0 || ''.concat(e.trim) === 'true' ? a.value.trim() : a.value;
     if (s === '') return { valid: !0 };
     var t = e.min ? ''.concat(e.min) : '',
      i = e.max ? ''.concat(e.max) : '',
      o = e.utf8Bytes ? v(s) : s.length,
      d = !0,
      f = a.l10n ? e.message || a.l10n.stringLength.default : e.message;
     switch (
      (((t && o < parseInt(t, 10)) || (i && o > parseInt(i, 10))) && (d = !1),
      !0)
     ) {
      case !!t && !!i:
       f = r(a.l10n ? e.message || a.l10n.stringLength.between : e.message, [
        t,
        i,
       ]);
       break;
      case !!t:
       f = r(
        a.l10n ? e.message || a.l10n.stringLength.more : e.message,
        ''.concat(parseInt(t, 10)),
       );
       break;
      case !!i:
       f = r(
        a.l10n ? e.message || a.l10n.stringLength.less : e.message,
        ''.concat(parseInt(i, 10)),
       );
       break;
     }
     return { message: f, valid: d };
    },
   };
  }
  return u;
 });
});
export default h();
