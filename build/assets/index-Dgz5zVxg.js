var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var p = d((u, f) => {
 (function (e, t) {
  typeof u == 'object' && typeof f < 'u'
   ? (f.exports = t(require('@form-validation/plugin-framework')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/plugin-framework'], t)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Foundation = t(e.FormValidation.plugins)));
 })(void 0, function (e) {
  var t = function (r, n) {
   return (
    (t =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (o, a) {
       o.__proto__ = a;
      }) ||
     function (o, a) {
      for (var i in a)
       Object.prototype.hasOwnProperty.call(a, i) && (o[i] = a[i]);
     }),
    t(r, n)
   );
  };
  function c(r, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   t(r, n);
   function o() {
    this.constructor = r;
   }
   r.prototype =
    n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
  }
  var l = (function (r) {
   c(n, r);
   function n(o) {
    return (
     r.call(
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
       o,
      ),
     ) || this
    );
   }
   return (
    (n.prototype.onIconPlaced = function (o) {
     var a = o.element.getAttribute('type');
     if (a === 'checkbox' || a === 'radio') {
      var i = o.iconElement.nextSibling;
      if (i.nodeName === 'LABEL')
       i.parentNode.insertBefore(o.iconElement, i.nextSibling);
      else if (i.nodeName === '#text') {
       var s = i.nextSibling;
       s &&
        s.nodeName === 'LABEL' &&
        s.parentNode.insertBefore(o.iconElement, s.nextSibling);
      }
     }
    }),
    n
   );
  })(e.Framework);
  return l;
 });
});
export default p();
