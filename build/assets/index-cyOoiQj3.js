var d = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports);
var m = d((c, u) => {
 (function (e, o) {
  typeof c == 'object' && typeof u < 'u'
   ? (u.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Pure = o(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, o) {
  var s = function (r, t) {
   return (
    (s =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (n, i) {
       n.__proto__ = i;
      }) ||
     function (n, i) {
      for (var a in i)
       Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
     }),
    s(r, t)
   );
  };
  function f(r, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   s(r, t);
   function n() {
    this.constructor = r;
   }
   r.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var l = e.utils.classSet,
   p = (function (r) {
    f(t, r);
    function t(n) {
     return (
      r.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-pure',
         messageClass: 'fv-help-block',
         rowInvalidClass: 'fv-has-error',
         rowPattern: /^.*pure-control-group.*$/,
         rowSelector: '.pure-control-group',
         rowValidClass: 'fv-has-success',
        },
        n,
       ),
      ) || this
     );
    }
    return (
     (t.prototype.onIconPlaced = function (n) {
      var i = n.element.getAttribute('type');
      if (i === 'checkbox' || i === 'radio') {
       var a = n.element.parentElement;
       l(n.iconElement, { 'fv-plugins-icon-check': !0 }),
        a.tagName === 'LABEL' &&
         a.parentElement.insertBefore(n.iconElement, a.nextSibling);
      }
     }),
     t
    );
   })(o.Framework);
  return p;
 });
});
export default m();
