var v = (d, i) => () => (i || d((i = { exports: {} }).exports, i), i.exports);
var o = v((t, f) => {
 (function (d, i) {
  typeof t == 'object' && typeof f < 'u'
   ? (f.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : ((d = typeof globalThis < 'u' ? globalThis : d || self),
       (d.FormValidation = d.FormValidation || {}),
       (d.FormValidation.validators = d.FormValidation.validators || {}),
       (d.FormValidation.validators.ip = i(d.FormValidation)));
 })(void 0, function (d) {
  var i = d.utils.removeUndefined;
  function n() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     var a = Object.assign({}, { ipv4: !0, ipv6: !0 }, i(e.options)),
      s =
       /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
      r =
       /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
     switch (!0) {
      case a.ipv4 && !a.ipv6:
       return {
        message: e.l10n ? a.message || e.l10n.ip.ipv4 : a.message,
        valid: s.test(e.value),
       };
      case !a.ipv4 && a.ipv6:
       return {
        message: e.l10n ? a.message || e.l10n.ip.ipv6 : a.message,
        valid: r.test(e.value),
       };
      case a.ipv4 && a.ipv6:
      default:
       return {
        message: e.l10n ? a.message || e.l10n.ip.default : a.message,
        valid: s.test(e.value) || r.test(e.value),
       };
     }
    },
   };
  }
  return n;
 });
});
export default o();
