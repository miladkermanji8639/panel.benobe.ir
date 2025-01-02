var u = (o, a) => () => (a || o((a = { exports: {} }).exports, a), a.exports);
var c = u((d, l) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-uri
  * @version 2.4.0
  */ (function (o, a) {
  typeof d == 'object' && typeof l < 'u'
   ? (l.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : (((o = typeof globalThis < 'u' ? globalThis : o || self).FormValidation =
        o.FormValidation || {}),
       (o.FormValidation.validators = o.FormValidation.validators || {}),
       (o.FormValidation.validators.uri = a(o.FormValidation)));
 })(void 0, function (o) {
  var a = o.utils.removeUndefined;
  return function () {
   var f = {
    allowEmptyProtocol: !1,
    allowLocal: !1,
    protocol: 'http, https, ftp',
   };
   return {
    validate: function (i) {
     if (i.value === '') return { valid: !0 };
     var t = Object.assign({}, f, a(i.options)),
      e = t.allowLocal === !0 || ''.concat(t.allowLocal) === 'true',
      n =
       t.allowEmptyProtocol === !0 ||
       ''.concat(t.allowEmptyProtocol) === 'true',
      r = t.protocol.split(',').join('|').replace(/\s/g, '');
     return {
      valid: new RegExp(
       '^(?:(?:' +
        r +
        ')://)' +
        (n ? '?' : '') +
        '(?:\\S+(?::\\S*)?@)?(?:' +
        (e
         ? ''
         : '(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
        (e ? '?' : '') +
        ')(?::\\d{2,5})?(?:/[^\\s]*)?$',
       'i',
      ).test(i.value),
     };
    },
   };
  };
 });
});
export default c();
