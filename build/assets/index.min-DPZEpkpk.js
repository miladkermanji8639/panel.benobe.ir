var c = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var p = c((s, f) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-turret
  * @version 2.4.0
  */ (function (e, r) {
  typeof s == 'object' && typeof f < 'u'
   ? (f.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], r)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Turret = r(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, r) {
  var a = function (l, i) {
    return (
     (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (t, n) {
        t.__proto__ = n;
       }) ||
      function (t, n) {
       for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }),
     a(l, i)
    );
   },
   u = e.utils.classSet;
  return (function (l) {
   function i(t) {
    return (
     l.call(
      this,
      Object.assign(
       {},
       {
        formClass: 'fv-plugins-turret',
        messageClass: 'form-message',
        rowInvalidClass: 'fv-invalid-row',
        rowPattern: /^field$/,
        rowSelector: '.field',
        rowValidClass: 'fv-valid-row',
       },
       t,
      ),
     ) || this
    );
   }
   return (
    (function (t, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function o() {
      this.constructor = t;
     }
     a(t, n),
      (t.prototype =
       n === null ? Object.create(n) : ((o.prototype = n.prototype), new o()));
    })(i, l),
    (i.prototype.onIconPlaced = function (t) {
     var n = t.element.getAttribute('type'),
      o = t.element.parentElement;
     (n !== 'checkbox' && n !== 'radio') ||
      (o.parentElement.insertBefore(t.iconElement, o.nextSibling),
      u(t.iconElement, { 'fv-plugins-icon-check': !0 }));
    }),
    i
   );
  })(r.Framework);
 });
});
export default p();
