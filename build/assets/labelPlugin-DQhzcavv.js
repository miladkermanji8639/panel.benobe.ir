var d = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var o = d((u, t) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof u == 'object' && typeof t < 'u'
   ? (t.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (e.labelPlugin = n());
 })(void 0, function () {
  function e() {
   return function (n) {
    return {
     onReady: function () {
      var i = n.input.id;
      i &&
       (n.mobileInput
        ? (n.input.removeAttribute('id'), (n.mobileInput.id = i))
        : n.altInput && (n.input.removeAttribute('id'), (n.altInput.id = i)));
     },
    };
   };
  }
  return e;
 });
});
export default o();
