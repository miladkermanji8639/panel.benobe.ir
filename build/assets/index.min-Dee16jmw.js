var u = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
var c = u((s, f) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-foundation
  * @version 2.4.0
  */ (function (r, t) {
  typeof s == 'object' && typeof f < 'u'
   ? (f.exports = t(require('@form-validation/plugin-framework')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/plugin-framework'], t)
     : (((r = typeof globalThis < 'u' ? globalThis : r || self).FormValidation =
        r.FormValidation || {}),
       (r.FormValidation.plugins = r.FormValidation.plugins || {}),
       (r.FormValidation.plugins.Foundation = t(r.FormValidation.plugins)));
 })(void 0, function (r) {
  var t = function (a, i) {
   return (
    (t =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, o) {
       e.__proto__ = o;
      }) ||
     function (e, o) {
      for (var n in o)
       Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
     }),
    t(a, i)
   );
  };
  return (function (a) {
   function i(e) {
    return (
     a.call(
      this,
      Object.assign(
       {},
       {
        formClass: 'fv-plugins-foundation',
        messageClass: 'form-error',
        rowInvalidClass: 'fv-row__error',
        rowPattern: /^.*((small|medium|large)-[0-9]+)\s.*(cell).*$/,
        rowSelector: '.grid-x',
        rowValidClass: 'fv-row__success',
       },
       e,
      ),
     ) || this
    );
   }
   return (
    (function (e, o) {
     if (typeof o != 'function' && o !== null)
      throw new TypeError(
       'Class extends value ' + String(o) + ' is not a constructor or null',
      );
     function n() {
      this.constructor = e;
     }
     t(e, o),
      (e.prototype =
       o === null ? Object.create(o) : ((n.prototype = o.prototype), new n()));
    })(i, a),
    (i.prototype.onIconPlaced = function (e) {
     var o = e.element.getAttribute('type');
     if (o === 'checkbox' || o === 'radio') {
      var n = e.iconElement.nextSibling;
      if (n.nodeName === 'LABEL')
       n.parentNode.insertBefore(e.iconElement, n.nextSibling);
      else if (n.nodeName === '#text') {
       var l = n.nextSibling;
       l &&
        l.nodeName === 'LABEL' &&
        l.parentNode.insertBefore(e.iconElement, l.nextSibling);
      }
     }
    }),
    i
   );
  })(r.Framework);
 });
});
export default c();
