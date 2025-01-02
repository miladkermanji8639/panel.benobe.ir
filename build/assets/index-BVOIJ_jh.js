var p = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var m = p((c, s) => {
 (function (e, i) {
  typeof c == 'object' && typeof s < 'u'
   ? (s.exports = i(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], i)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Materialize = i(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, i) {
  var l = function (o, t) {
   return (
    (l =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (n, r) {
       n.__proto__ = r;
      }) ||
     function (n, r) {
      for (var a in r)
       Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
     }),
    l(o, t)
   );
  };
  function f(o, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   l(o, t);
   function n() {
    this.constructor = o;
   }
   o.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var u = e.utils.classSet,
   d = (function (o) {
    f(t, o);
    function t(n) {
     return (
      o.call(
       this,
       Object.assign(
        {},
        {
         eleInvalidClass: 'validate invalid',
         eleValidClass: 'validate valid',
         formClass: 'fv-plugins-materialize',
         messageClass: 'helper-text',
         rowInvalidClass: 'fv-invalid-row',
         rowPattern: /^(.*)col(\s+)s[0-9]+(.*)$/,
         rowSelector: '.row',
         rowValidClass: 'fv-valid-row',
        },
        n,
       ),
      ) || this
     );
    }
    return (
     (t.prototype.onIconPlaced = function (n) {
      var r = n.element.getAttribute('type'),
       a = n.element.parentElement;
      (r === 'checkbox' || r === 'radio') &&
       (a.parentElement.insertBefore(n.iconElement, a.nextSibling),
       u(n.iconElement, { 'fv-plugins-icon-check': !0 }));
     }),
     t
    );
   })(i.Framework);
  return d;
 });
});
export default m();
