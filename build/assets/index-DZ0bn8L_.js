var f = (o, a) => () => (a || o((a = { exports: {} }).exports, a), a.exports);
var h = f((c, r) => {
 (function (o, a) {
  typeof c == 'object' && typeof r < 'u'
   ? (r.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.validators = o.FormValidation.validators || {}),
       (o.FormValidation.validators.choice = a(o.FormValidation)));
 })(void 0, function (o) {
  var a = o.utils.format;
  function m() {
   return {
    validate: function (e) {
     var t =
       e.element.tagName.toLowerCase() === 'select'
        ? e.element.querySelectorAll('option:checked').length
        : e.elements.filter(function (l) {
           return l.checked;
          }).length,
      n = e.options.min ? ''.concat(e.options.min) : '',
      s = e.options.max ? ''.concat(e.options.max) : '',
      i = e.l10n
       ? e.options.message || e.l10n.choice.default
       : e.options.message,
      d = !((n && t < parseInt(n, 10)) || (s && t > parseInt(s, 10)));
     switch (!0) {
      case !!n && !!s:
       i = a(e.l10n ? e.l10n.choice.between : e.options.message, [n, s]);
       break;
      case !!n:
       i = a(e.l10n ? e.l10n.choice.more : e.options.message, n);
       break;
      case !!s:
       i = a(e.l10n ? e.l10n.choice.less : e.options.message, s);
       break;
     }
     return { message: i, valid: d };
    },
   };
  }
  return m;
 });
});
export default h();
