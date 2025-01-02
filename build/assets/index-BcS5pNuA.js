var d = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports);
var m = d((s, c) => {
 (function (e, o) {
  typeof s == 'object' && typeof c < 'u'
   ? (c.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Shoelace = o(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, o) {
  var l = function (r, t) {
   return (
    (l =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (n, i) {
       n.__proto__ = i;
      }) ||
     function (n, i) {
      for (var a in i)
       Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
     }),
    l(r, t)
   );
  };
  function f(r, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   l(r, t);
   function n() {
    this.constructor = r;
   }
   r.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var u = e.utils.classSet,
   p = (function (r) {
    f(t, r);
    function t(n) {
     return (
      r.call(
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
        n,
       ),
      ) || this
     );
    }
    return (
     (t.prototype.onIconPlaced = function (n) {
      var i = n.element.parentElement,
       a = n.element.getAttribute('type');
      (a === 'checkbox' || a === 'radio') &&
       (u(n.iconElement, { 'fv-plugins-icon-check': !0 }),
       i.tagName === 'LABEL' &&
        i.parentElement.insertBefore(n.iconElement, i.nextSibling));
     }),
     t
    );
   })(o.Framework);
  return p;
 });
});
export default m();
