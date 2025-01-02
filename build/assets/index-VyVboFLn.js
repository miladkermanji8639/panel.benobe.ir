var m = (t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports);
var h = m((f, u) => {
 (function (t, r) {
  typeof f == 'object' && typeof u < 'u'
   ? (u.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], r)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Bulma = r(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, r) {
  var c = function (o, n) {
   return (
    (c =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, i) {
       e.__proto__ = i;
      }) ||
     function (e, i) {
      for (var a in i)
       Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
     }),
    c(o, n)
   );
  };
  function p(o, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   c(o, n);
   function e() {
    this.constructor = o;
   }
   o.prototype =
    n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  }
  var s = t.utils.classSet,
   d = (function (o) {
    p(n, o);
    function n(e) {
     return (
      o.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-bulma',
         messageClass: 'help is-danger',
         rowInvalidClass: 'fv-has-error',
         rowPattern: /^.*field.*$/,
         rowSelector: '.field',
         rowValidClass: 'fv-has-success',
        },
        e,
       ),
      ) || this
     );
    }
    return (
     (n.prototype.onIconPlaced = function (e) {
      s(e.iconElement, { 'fv-plugins-icon': !1 });
      var i = document.createElement('span');
      i.setAttribute('class', 'icon is-small is-right'),
       e.iconElement.parentNode.insertBefore(i, e.iconElement),
       i.appendChild(e.iconElement);
      var a = e.element.getAttribute('type'),
       l = e.element.parentElement;
      a === 'checkbox' || a === 'radio'
       ? (s(l.parentElement, { 'has-icons-right': !0 }),
         s(i, { 'fv-plugins-icon-check': !0 }),
         l.parentElement.insertBefore(i, l.nextSibling))
       : s(l, { 'has-icons-right': !0 });
     }),
     n
    );
   })(r.Framework);
  return d;
 });
});
export default h();
