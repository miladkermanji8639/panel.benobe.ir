var m = (n, o) => () => (o || n((o = { exports: {} }).exports, o), o.exports);
var d = m((u, c) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-bootstrap
  * @version 2.4.0
  */ (function (n, o) {
  typeof u == 'object' && typeof c < 'u'
   ? (c.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Bootstrap = o(
        n.FormValidation,
        n.FormValidation.plugins,
       )));
 })(void 0, function (n, o) {
  var a = function (l, r) {
    return (
     (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, t) {
        e.__proto__ = t;
       }) ||
      function (e, t) {
       for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }),
     a(l, r)
    );
   },
   f = n.utils.classSet,
   s = n.utils.hasClass;
  return (function (l) {
   function r(e) {
    return (
     l.call(
      this,
      Object.assign(
       {},
       {
        eleInvalidClass: 'is-invalid',
        eleValidClass: 'is-valid',
        formClass: 'fv-plugins-bootstrap',
        messageClass: 'fv-help-block',
        rowInvalidClass: 'has-danger',
        rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
        rowSelector: '.form-group',
        rowValidClass: 'has-success',
       },
       e,
      ),
     ) || this
    );
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = e;
     }
     a(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((i.prototype = t.prototype), new i()));
    })(r, l),
    (r.prototype.onIconPlaced = function (e) {
     var t = e.element.parentElement;
     s(t, 'input-group') &&
      t.parentElement.insertBefore(e.iconElement, t.nextSibling);
     var i = e.element.getAttribute('type');
     if (i === 'checkbox' || i === 'radio') {
      var p = t.parentElement;
      s(t, 'form-check')
       ? (f(e.iconElement, { 'fv-plugins-icon-check': !0 }),
         t.parentElement.insertBefore(e.iconElement, t.nextSibling))
       : s(t.parentElement, 'form-check') &&
         (f(e.iconElement, { 'fv-plugins-icon-check': !0 }),
         p.parentElement.insertBefore(e.iconElement, p.nextSibling));
     }
    }),
    r
   );
  })(o.Framework);
 });
});
export default d();
