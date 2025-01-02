var m = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports);
var f = m((r, s) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-choice
  * @version 2.4.0
  */ (function (t, o) {
  typeof r == 'object' && typeof s < 'u'
   ? (s.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : (((t = typeof globalThis < 'u' ? globalThis : t || self).FormValidation =
        t.FormValidation || {}),
       (t.FormValidation.validators = t.FormValidation.validators || {}),
       (t.FormValidation.validators.choice = o(t.FormValidation)));
 })(void 0, function (t) {
  var o = t.utils.format;
  return function () {
   return {
    validate: function (n) {
     var l =
       n.element.tagName.toLowerCase() === 'select'
        ? n.element.querySelectorAll('option:checked').length
        : n.elements.filter(function (d) {
           return d.checked;
          }).length,
      e = n.options.min ? ''.concat(n.options.min) : '',
      i = n.options.max ? ''.concat(n.options.max) : '',
      a = n.l10n
       ? n.options.message || n.l10n.choice.default
       : n.options.message,
      c = !((e && l < parseInt(e, 10)) || (i && l > parseInt(i, 10)));
     switch (!0) {
      case !!e && !!i:
       a = o(n.l10n ? n.l10n.choice.between : n.options.message, [e, i]);
       break;
      case !!e:
       a = o(n.l10n ? n.l10n.choice.more : n.options.message, e);
       break;
      case !!i:
       a = o(n.l10n ? n.l10n.choice.less : n.options.message, i);
     }
     return { message: a, valid: c };
    },
   };
  };
 });
});
export default f();
