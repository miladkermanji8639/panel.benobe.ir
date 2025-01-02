var m = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var d = m((p, c) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-bootstrap3
  * @version 2.4.0
  */ (function (e, r) {
  typeof p == 'object' && typeof c < 'u'
   ? (c.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], r)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Bootstrap3 = r(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, r) {
  var l = function (a, i) {
    return (
     (l =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (o, n) {
        o.__proto__ = n;
       }) ||
      function (o, n) {
       for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (o[t] = n[t]);
      }),
     l(a, i)
    );
   },
   u = e.utils.classSet,
   s = e.utils.hasClass;
  return (function (a) {
   function i(o) {
    return (
     a.call(
      this,
      Object.assign(
       {},
       {
        formClass: 'fv-plugins-bootstrap3',
        messageClass: 'help-block',
        rowClasses: 'has-feedback',
        rowInvalidClass: 'has-error',
        rowPattern: /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/,
        rowSelector: '.form-group',
        rowValidClass: 'has-success',
       },
       o,
      ),
     ) || this
    );
   }
   return (
    (function (o, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function t() {
      this.constructor = o;
     }
     l(o, n),
      (o.prototype =
       n === null ? Object.create(n) : ((t.prototype = n.prototype), new t()));
    })(i, a),
    (i.prototype.onIconPlaced = function (o) {
     u(o.iconElement, { 'form-control-feedback': !0 });
     var n = o.element.parentElement;
     s(n, 'input-group') &&
      n.parentElement.insertBefore(o.iconElement, n.nextSibling);
     var t = o.element.getAttribute('type');
     if (t === 'checkbox' || t === 'radio') {
      var f = n.parentElement;
      s(n, t)
       ? n.parentElement.insertBefore(o.iconElement, n.nextSibling)
       : s(n.parentElement, t) &&
         f.parentElement.insertBefore(o.iconElement, f.nextSibling);
     }
    }),
    i
   );
  })(r.Framework);
 });
});
export default d();
