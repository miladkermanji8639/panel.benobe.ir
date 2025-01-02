var u = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports);
var p = u((c, s) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-tachyons
  * @version 2.4.0
  */ (function (t, o) {
  typeof c == 'object' && typeof s < 'u'
   ? (s.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : (((t = typeof globalThis < 'u' ? globalThis : t || self).FormValidation =
        t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Tachyons = o(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, o) {
  var a = function (l, i) {
    return (
     (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, n) {
        e.__proto__ = n;
       }) ||
      function (e, n) {
       for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }),
     a(l, i)
    );
   },
   f = t.utils.classSet;
  return (function (l) {
   function i(e) {
    return (
     l.call(
      this,
      Object.assign(
       {},
       {
        formClass: 'fv-plugins-tachyons',
        messageClass: 'small',
        rowInvalidClass: 'red',
        rowPattern: /^(.*)fl(.*)$/,
        rowSelector: '.fl',
        rowValidClass: 'green',
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
     function r() {
      this.constructor = e;
     }
     a(e, n),
      (e.prototype =
       n === null ? Object.create(n) : ((r.prototype = n.prototype), new r()));
    })(i, l),
    (i.prototype.onIconPlaced = function (e) {
     var n = e.element.getAttribute('type'),
      r = e.element.parentElement;
     (n !== 'checkbox' && n !== 'radio') ||
      (r.parentElement.insertBefore(e.iconElement, r.nextSibling),
      f(e.iconElement, { 'fv-plugins-icon-check': !0 }));
    }),
    i
   );
  })(o.Framework);
 });
});
export default p();
