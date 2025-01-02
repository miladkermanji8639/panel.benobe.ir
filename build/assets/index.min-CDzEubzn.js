var p = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var b = p((v, f) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-string-length
  * @version 2.4.0
  */ (function (t, e) {
  typeof v == 'object' && typeof f < 'u'
   ? (f.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : (((t = typeof globalThis < 'u' ? globalThis : t || self).FormValidation =
        t.FormValidation || {}),
       (t.FormValidation.validators = t.FormValidation.validators || {}),
       (t.FormValidation.validators.stringLength = e(t.FormValidation)));
 })(void 0, function (t) {
  var e = t.utils.format,
   h = t.utils.removeUndefined;
  return function () {
   return {
    validate: function (a) {
     var n = Object.assign(
       {},
       { message: '', trim: !1, utf8Bytes: !1 },
       h(a.options),
      ),
      m =
       n.trim === !0 || ''.concat(n.trim) === 'true' ? a.value.trim() : a.value;
     if (m === '') return { valid: !0 };
     var i = n.min ? ''.concat(n.min) : '',
      r = n.max ? ''.concat(n.max) : '',
      c = n.utf8Bytes
       ? (function (d) {
          for (var g = d.length, l = d.length - 1; l >= 0; l--) {
           var s = d.charCodeAt(l);
           s > 127 && s <= 2047 ? g++ : s > 2047 && s <= 65535 && (g += 2),
            s >= 56320 && s <= 57343 && l--;
          }
          return g;
         })(m)
       : m.length,
      u = !0,
      o = a.l10n ? n.message || a.l10n.stringLength.default : n.message;
     switch (
      (((i && c < parseInt(i, 10)) || (r && c > parseInt(r, 10))) && (u = !1),
      !0)
     ) {
      case !!i && !!r:
       o = e(a.l10n ? n.message || a.l10n.stringLength.between : n.message, [
        i,
        r,
       ]);
       break;
      case !!i:
       o = e(
        a.l10n ? n.message || a.l10n.stringLength.more : n.message,
        ''.concat(parseInt(i, 10)),
       );
       break;
      case !!r:
       o = e(
        a.l10n ? n.message || a.l10n.stringLength.less : n.message,
        ''.concat(parseInt(r, 10)),
       );
     }
     return { message: o, valid: u };
    },
   };
  };
 });
});
export default b();
