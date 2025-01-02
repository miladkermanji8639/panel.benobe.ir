var y = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports);
var h = y((f, c) => {
 (function (t, o) {
  typeof f == 'object' && typeof c < 'u'
   ? (c.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Semantic = o(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, o) {
  var l = function (s, n) {
   return (
    (l =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, i) {
       e.__proto__ = i;
      }) ||
     function (e, i) {
      for (var r in i)
       Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
     }),
    l(s, n)
   );
  };
  function m(s, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   l(s, n);
   function e() {
    this.constructor = s;
   }
   s.prototype =
    n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  }
  var p = t.utils.classSet,
   u = t.utils.hasClass,
   d = (function (s) {
    m(n, s);
    function n(e) {
     return (
      s.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-semantic',
         messageClass: 'ui pointing red label',
         rowInvalidClass: 'error',
         rowPattern: /^.*(field|column).*$/,
         rowSelector: '.fields',
         rowValidClass: 'fv-has-success',
        },
        e,
       ),
      ) || this
     );
    }
    return (
     (n.prototype.onIconPlaced = function (e) {
      var i = e.element.getAttribute('type');
      if (i === 'checkbox' || i === 'radio') {
       var r = e.element.parentElement;
       p(e.iconElement, { 'fv-plugins-icon-check': !0 }),
        r.parentElement.insertBefore(e.iconElement, r.nextSibling);
      }
     }),
     (n.prototype.onMessagePlaced = function (e) {
      var i = e.element.getAttribute('type'),
       r = e.elements.length;
      if ((i === 'checkbox' || i === 'radio') && r > 1) {
       var v = e.elements[r - 1],
        a = v.parentElement;
       u(a, i) &&
        u(a, 'ui') &&
        a.parentElement.insertBefore(e.messageElement, a.nextSibling);
      }
     }),
     n
    );
   })(o.Framework);
  return d;
 });
});
export default h();
