var v = (t, i) => () => (i || t((i = { exports: {} }).exports, i), i.exports);
var h = v((u, c) => {
 (function (t, i) {
  typeof u == 'object' && typeof c < 'u'
   ? (c.exports = i(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], i)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Bootstrap = i(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, i) {
  var a = function (r, o) {
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
    a(r, o)
   );
  };
  function m(r, o) {
   if (typeof o != 'function' && o !== null)
    throw new TypeError(
     'Class extends value ' + String(o) + ' is not a constructor or null',
    );
   a(r, o);
   function e() {
    this.constructor = r;
   }
   r.prototype =
    o === null ? Object.create(o) : ((e.prototype = o.prototype), new e());
  }
  var f = t.utils.classSet,
   l = t.utils.hasClass,
   d = (function (r) {
    m(o, r);
    function o(e) {
     return (
      r.call(
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
     (o.prototype.onIconPlaced = function (e) {
      var n = e.element.parentElement;
      l(n, 'input-group') &&
       n.parentElement.insertBefore(e.iconElement, n.nextSibling);
      var s = e.element.getAttribute('type');
      if (s === 'checkbox' || s === 'radio') {
       var p = n.parentElement;
       l(n, 'form-check')
        ? (f(e.iconElement, { 'fv-plugins-icon-check': !0 }),
          n.parentElement.insertBefore(e.iconElement, n.nextSibling))
        : l(n.parentElement, 'form-check') &&
          (f(e.iconElement, { 'fv-plugins-icon-check': !0 }),
          p.parentElement.insertBefore(e.iconElement, p.nextSibling));
      }
     }),
     o
    );
   })(i.Framework);
  return d;
 });
});
export default h();
