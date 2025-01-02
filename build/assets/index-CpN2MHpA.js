var a = (n, i) => () => (i || n((i = { exports: {} }).exports, i), i.exports);
var r = a((d, e) => {
 (function (n, i) {
  typeof d == 'object' && typeof e < 'u'
   ? (e.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.notEmpty = i()));
 })(void 0, function () {
  function n() {
   return {
    validate: function (i) {
     var o = !!i.options && !!i.options.trim,
      t = i.value;
     return { valid: (!o && t !== '') || (o && t !== '' && t.trim() !== '') };
    },
   };
  }
  return n;
 });
});
export default r();
