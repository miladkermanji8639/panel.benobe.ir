var u = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports);
var p = u((s, f) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-mini
  * @version 2.4.0
  */ (function (t, o) {
  typeof s == 'object' && typeof f < 'u'
   ? (f.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : (((t = typeof globalThis < 'u' ? globalThis : t || self).FormValidation =
        t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Mini = o(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, o) {
  var a = function (l, r) {
    return (
     (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, n) {
        e.__proto__ = n;
       }) ||
      function (e, n) {
       for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }),
     a(l, r)
    );
   },
   c = t.utils.classSet;
  return (function (l) {
   function r(e) {
    return (
     l.call(
      this,
      Object.assign(
       {},
       {
        formClass: 'fv-plugins-mini',
        messageClass: 'fv-help-block',
        rowInvalidClass: 'fv-invalid-row',
        rowPattern: /^(.*)col-(sm|md|lg|xl)(-offset)*-[0-9]+(.*)$/,
        rowSelector: '.row',
        rowValidClass: 'fv-valid-row',
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
     a(e, n),
      (e.prototype =
       n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
    })(r, l),
    (r.prototype.onIconPlaced = function (e) {
     var n = e.element.getAttribute('type'),
      i = e.element.parentElement;
     (n !== 'checkbox' && n !== 'radio') ||
      (i.parentElement.insertBefore(e.iconElement, i.nextSibling),
      c(e.iconElement, { 'fv-plugins-icon-check': !0 }));
    }),
    r
   );
  })(o.Framework);
 });
});
export default p();
