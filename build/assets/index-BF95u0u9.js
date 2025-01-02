var d = (n, i) => () => (i || n((i = { exports: {} }).exports, i), i.exports);
var o = d((t, e) => {
 (function (n, i) {
  typeof t == 'object' && typeof e < 'u'
   ? (e.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.blank = i()));
 })(void 0, function () {
  function n() {
   return {
    validate: function (i) {
     return { valid: !0 };
    },
   };
  }
  return n;
 });
});
export default o();
