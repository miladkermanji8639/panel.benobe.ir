var L = (o, t) => () => (t || o((t = { exports: {} }).exports, t), t.exports);
var p = L((c, m) => {
 (function (o, t) {
  typeof c == 'object' && typeof m < 'u'
   ? (m.exports = t())
   : typeof define == 'function' && define.amd
     ? define(t)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.validators = o.FormValidation.validators || {}),
       (o.FormValidation.validators.file = t()));
 })(void 0, function () {
  var o = function (e) {
   return e.indexOf('.') === -1 ? e : e.split('.').slice(0, -1).join('.');
  };
  function t() {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     var i,
      l,
      d = e.options.extension
       ? e.options.extension
          .toLowerCase()
          .split(',')
          .map(function (f) {
           return f.trim();
          })
       : [],
      v = e.options.type
       ? e.options.type
          .toLowerCase()
          .split(',')
          .map(function (f) {
           return f.trim();
          })
       : [],
      N = window.File && window.FileList && window.FileReader;
     if (N) {
      var n = e.element.files,
       I = n.length,
       s = 0;
      if (e.options.maxFiles && I > parseInt(''.concat(e.options.maxFiles), 10))
       return { meta: { error: 'INVALID_MAX_FILES' }, valid: !1 };
      if (e.options.minFiles && I < parseInt(''.concat(e.options.minFiles), 10))
       return { meta: { error: 'INVALID_MIN_FILES' }, valid: !1 };
      for (var a = {}, r = 0; r < I; r++) {
       if (
        ((s += n[r].size),
        (i = n[r].name.substr(n[r].name.lastIndexOf('.') + 1)),
        (a = { ext: i, file: n[r], size: n[r].size, type: n[r].type }),
        e.options.minSize &&
         n[r].size < parseInt(''.concat(e.options.minSize), 10))
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, a),
         valid: !1,
        };
       if (
        e.options.maxSize &&
        n[r].size > parseInt(''.concat(e.options.maxSize), 10)
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, a),
         valid: !1,
        };
       if (d.length > 0 && d.indexOf(i.toLowerCase()) === -1)
        return {
         meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, a),
         valid: !1,
        };
       if (
        v.length > 0 &&
        n[r].type &&
        v.indexOf(n[r].type.toLowerCase()) === -1
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_TYPE' }, a),
         valid: !1,
        };
       if (
        e.options.validateFileName &&
        !e.options.validateFileName(o(n[r].name))
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_NAME' }, a),
         valid: !1,
        };
      }
      if (
       e.options.maxTotalSize &&
       s > parseInt(''.concat(e.options.maxTotalSize), 10)
      )
       return {
        meta: Object.assign(
         {},
         { error: 'INVALID_MAX_TOTAL_SIZE', totalSize: s },
         a,
        ),
        valid: !1,
       };
      if (
       e.options.minTotalSize &&
       s < parseInt(''.concat(e.options.minTotalSize), 10)
      )
       return {
        meta: Object.assign(
         {},
         { error: 'INVALID_MIN_TOTAL_SIZE', totalSize: s },
         a,
        ),
        valid: !1,
       };
     } else {
      if (
       ((i = e.value.substr(e.value.lastIndexOf('.') + 1)),
       d.length > 0 && d.indexOf(i.toLowerCase()) === -1)
      )
       return { meta: { error: 'INVALID_EXTENSION', ext: i }, valid: !1 };
      if (
       ((l = o(e.value)),
       e.options.validateFileName && !e.options.validateFileName(l))
      )
       return { meta: { error: 'INVALID_NAME', name: l }, valid: !1 };
     }
     return { valid: !0 };
    },
   };
  }
  return t;
 });
});
export default p();
