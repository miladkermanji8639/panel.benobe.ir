var p = (o, t) => () => (t || o((t = { exports: {} }).exports, t), t.exports);
var d = p((f, u) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-bulma
  * @version 2.4.0
  */ (function (o, t) {
  typeof f == 'object' && typeof u < 'u'
   ? (u.exports = t(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], t)
     : (((o = typeof globalThis < 'u' ? globalThis : o || self).FormValidation =
        o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Bulma = t(
        o.FormValidation,
        o.FormValidation.plugins,
       )));
 })(void 0, function (o, t) {
  var c = function (l, r) {
    return (
     (c =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, n) {
        e.__proto__ = n;
       }) ||
      function (e, n) {
       for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }),
     c(l, r)
    );
   },
   a = o.utils.classSet;
  return (function (l) {
   function r(e) {
    return (
     l.call(
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
    (function (e, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = e;
     }
     c(e, n),
      (e.prototype =
       n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
    })(r, l),
    (r.prototype.onIconPlaced = function (e) {
     a(e.iconElement, { 'fv-plugins-icon': !1 });
     var n = document.createElement('span');
     n.setAttribute('class', 'icon is-small is-right'),
      e.iconElement.parentNode.insertBefore(n, e.iconElement),
      n.appendChild(e.iconElement);
     var i = e.element.getAttribute('type'),
      s = e.element.parentElement;
     i === 'checkbox' || i === 'radio'
      ? (a(s.parentElement, { 'has-icons-right': !0 }),
        a(n, { 'fv-plugins-icon-check': !0 }),
        s.parentElement.insertBefore(n, s.nextSibling))
      : a(s, { 'has-icons-right': !0 });
    }),
    r
   );
  })(t.Framework);
 });
});
export default d();
