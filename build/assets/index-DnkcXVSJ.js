var h = (t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports);
var y = h((p, f) => {
 (function (t, r) {
  typeof p == 'object' && typeof f < 'u'
   ? (f.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], r)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Bootstrap3 = r(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, r) {
  var a = function (i, o) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, n) {
       e.__proto__ = n;
      }) ||
     function (e, n) {
      for (var s in n)
       Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
     }),
    a(i, o)
   );
  };
  function u(i, o) {
   if (typeof o != 'function' && o !== null)
    throw new TypeError(
     'Class extends value ' + String(o) + ' is not a constructor or null',
    );
   a(i, o);
   function e() {
    this.constructor = i;
   }
   i.prototype =
    o === null ? Object.create(o) : ((e.prototype = o.prototype), new e());
  }
  var m = t.utils.classSet,
   l = t.utils.hasClass,
   d = (function (i) {
    u(o, i);
    function o(e) {
     return (
      i.call(
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
        e,
       ),
      ) || this
     );
    }
    return (
     (o.prototype.onIconPlaced = function (e) {
      m(e.iconElement, { 'form-control-feedback': !0 });
      var n = e.element.parentElement;
      l(n, 'input-group') &&
       n.parentElement.insertBefore(e.iconElement, n.nextSibling);
      var s = e.element.getAttribute('type');
      if (s === 'checkbox' || s === 'radio') {
       var c = n.parentElement;
       l(n, s)
        ? n.parentElement.insertBefore(e.iconElement, n.nextSibling)
        : l(n.parentElement, s) &&
          c.parentElement.insertBefore(e.iconElement, c.nextSibling);
      }
     }),
     o
    );
   })(r.Framework);
  return d;
 });
});
export default y();
