var m = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var c = m((u, I) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-file
  * @version 2.4.0
  */ (function (i, e) {
  typeof u == 'object' && typeof I < 'u'
   ? (I.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.file = e()));
 })(void 0, function () {
  var i = function (e) {
   return e.indexOf('.') === -1 ? e : e.split('.').slice(0, -1).join('.');
  };
  return function () {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     var o,
      l,
      s = e.options.extension
       ? e.options.extension
          .toLowerCase()
          .split(',')
          .map(function (p) {
           return p.trim();
          })
       : [],
      d = e.options.type
       ? e.options.type
          .toLowerCase()
          .split(',')
          .map(function (p) {
           return p.trim();
          })
       : [];
     if (window.File && window.FileList && window.FileReader) {
      var n = e.element.files,
       f = n.length,
       r = 0;
      if (e.options.maxFiles && f > parseInt(''.concat(e.options.maxFiles), 10))
       return { meta: { error: 'INVALID_MAX_FILES' }, valid: !1 };
      if (e.options.minFiles && f < parseInt(''.concat(e.options.minFiles), 10))
       return { meta: { error: 'INVALID_MIN_FILES' }, valid: !1 };
      for (var a = {}, t = 0; t < f; t++) {
       if (
        ((r += n[t].size),
        (a = {
         ext: (o = n[t].name.substr(n[t].name.lastIndexOf('.') + 1)),
         file: n[t],
         size: n[t].size,
         type: n[t].type,
        }),
        e.options.minSize &&
         n[t].size < parseInt(''.concat(e.options.minSize), 10))
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, a),
         valid: !1,
        };
       if (
        e.options.maxSize &&
        n[t].size > parseInt(''.concat(e.options.maxSize), 10)
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, a),
         valid: !1,
        };
       if (s.length > 0 && s.indexOf(o.toLowerCase()) === -1)
        return {
         meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, a),
         valid: !1,
        };
       if (
        d.length > 0 &&
        n[t].type &&
        d.indexOf(n[t].type.toLowerCase()) === -1
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_TYPE' }, a),
         valid: !1,
        };
       if (
        e.options.validateFileName &&
        !e.options.validateFileName(i(n[t].name))
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_NAME' }, a),
         valid: !1,
        };
      }
      if (
       e.options.maxTotalSize &&
       r > parseInt(''.concat(e.options.maxTotalSize), 10)
      )
       return {
        meta: Object.assign(
         {},
         { error: 'INVALID_MAX_TOTAL_SIZE', totalSize: r },
         a,
        ),
        valid: !1,
       };
      if (
       e.options.minTotalSize &&
       r < parseInt(''.concat(e.options.minTotalSize), 10)
      )
       return {
        meta: Object.assign(
         {},
         { error: 'INVALID_MIN_TOTAL_SIZE', totalSize: r },
         a,
        ),
        valid: !1,
       };
     } else {
      if (
       ((o = e.value.substr(e.value.lastIndexOf('.') + 1)),
       s.length > 0 && s.indexOf(o.toLowerCase()) === -1)
      )
       return { meta: { error: 'INVALID_EXTENSION', ext: o }, valid: !1 };
      if (
       ((l = i(e.value)),
       e.options.validateFileName && !e.options.validateFileName(l))
      )
       return { meta: { error: 'INVALID_NAME', name: l }, valid: !1 };
     }
     return { valid: !0 };
    },
   };
  };
 });
});
export default c();
