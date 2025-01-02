var u = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports);
var p = u((s, c) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-shoelace
  * @version 2.4.0
  */ (function (e, o) {
  typeof s == 'object' && typeof c < 'u'
   ? (c.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Shoelace = o(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, o) {
  var a = function (l, r) {
    return (
     (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (t, n) {
        t.__proto__ = n;
       }) ||
      function (t, n) {
       for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }),
     a(l, r)
    );
   },
   f = e.utils.classSet;
  return (function (l) {
   function r(t) {
    return (
     l.call(
      this,
      Object.assign(
       {},
       {
        formClass: 'fv-plugins-shoelace',
        messageClass: 'fv-help-block',
        rowInvalidClass: 'input-invalid',
        rowPattern: /^(.*)(col|offset)-[0-9]+(.*)$/,
        rowSelector: '.input-field',
        rowValidClass: 'input-valid',
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
     function i() {
      this.constructor = t;
     }
     a(t, n),
      (t.prototype =
       n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
    })(r, l),
    (r.prototype.onIconPlaced = function (t) {
     var n = t.element.parentElement,
      i = t.element.getAttribute('type');
     (i !== 'checkbox' && i !== 'radio') ||
      (f(t.iconElement, { 'fv-plugins-icon-check': !0 }),
      n.tagName === 'LABEL' &&
       n.parentElement.insertBefore(t.iconElement, n.nextSibling));
    }),
    r
   );
  })(o.Framework);
 });
});
export default p();
