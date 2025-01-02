var p = (o, a) => () => (a || o((a = { exports: {} }).exports, a), a.exports);
var s = p((d, r) => {
 (function (o, a) {
  typeof d == 'object' && typeof r < 'u'
   ? (r.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.validators = o.FormValidation.validators || {}),
       (o.FormValidation.validators.uri = a(o.FormValidation)));
 })(void 0, function (o) {
  var a = o.utils.removeUndefined;
  function f() {
   var l = {
    allowEmptyProtocol: !1,
    allowLocal: !1,
    protocol: 'http, https, ftp',
   };
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     var t = Object.assign({}, l, a(e.options)),
      i = t.allowLocal === !0 || ''.concat(t.allowLocal) === 'true',
      n =
       t.allowEmptyProtocol === !0 ||
       ''.concat(t.allowEmptyProtocol) === 'true',
      u = t.protocol.split(',').join('|').replace(/\s/g, ''),
      c = new RegExp(
       '^(?:(?:' +
        u +
        ')://)' +
        (n ? '?' : '') +
        '(?:\\S+(?::\\S*)?@)?(?:' +
        (i
         ? ''
         : '(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
        (i ? '?' : '') +
        ')(?::\\d{2,5})?(?:/[^\\s]*)?$',
       'i',
      );
     return { valid: c.test(e.value) };
    },
   };
  }
  return f;
 });
});
export default s();
