var m = (t, i) => () => (i || t((i = { exports: {} }).exports, i), i.exports);
var d = m((f, c) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-semantic
  * @version 2.4.0
  */ (function (t, i) {
  typeof f == 'object' && typeof c < 'u'
   ? (c.exports = i(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], i)
     : (((t = typeof globalThis < 'u' ? globalThis : t || self).FormValidation =
        t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Semantic = i(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, i) {
  var s = function (l, r) {
    return (
     (s =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (n, e) {
        n.__proto__ = e;
       }) ||
      function (n, e) {
       for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
      }),
     s(l, r)
    );
   },
   p = t.utils.classSet,
   u = t.utils.hasClass;
  return (function (l) {
   function r(n) {
    return (
     l.call(
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
       n,
      ),
     ) || this
    );
   }
   return (
    (function (n, e) {
     if (typeof e != 'function' && e !== null)
      throw new TypeError(
       'Class extends value ' + String(e) + ' is not a constructor or null',
      );
     function o() {
      this.constructor = n;
     }
     s(n, e),
      (n.prototype =
       e === null ? Object.create(e) : ((o.prototype = e.prototype), new o()));
    })(r, l),
    (r.prototype.onIconPlaced = function (n) {
     var e = n.element.getAttribute('type');
     if (e === 'checkbox' || e === 'radio') {
      var o = n.element.parentElement;
      p(n.iconElement, { 'fv-plugins-icon-check': !0 }),
       o.parentElement.insertBefore(n.iconElement, o.nextSibling);
     }
    }),
    (r.prototype.onMessagePlaced = function (n) {
     var e = n.element.getAttribute('type'),
      o = n.elements.length;
     if ((e === 'checkbox' || e === 'radio') && o > 1) {
      var a = n.elements[o - 1].parentElement;
      u(a, e) &&
       u(a, 'ui') &&
       a.parentElement.insertBefore(n.messageElement, a.nextSibling);
     }
    }),
    r
   );
  })(i.Framework);
 });
});
export default d();
