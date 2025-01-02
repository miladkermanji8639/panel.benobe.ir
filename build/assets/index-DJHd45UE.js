var c = (o, e) => () => (e || o((e = { exports: {} }).exports, e), e.exports);
var d = c((f, a) => {
 (function (o, e) {
  typeof f == 'object' && typeof a < 'u'
   ? (a.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.DefaultSubmit = e(o.FormValidation)));
 })(void 0, function (o) {
  var e = function (i, n) {
   return (
    (e =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, r) {
       t.__proto__ = r;
      }) ||
     function (t, r) {
      for (var u in r)
       Object.prototype.hasOwnProperty.call(r, u) && (t[u] = r[u]);
     }),
    e(i, n)
   );
  };
  function l(i, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   e(i, n);
   function t() {
    this.constructor = i;
   }
   i.prototype =
    n === null ? Object.create(n) : ((t.prototype = n.prototype), new t());
  }
  var s = (function (i) {
   l(n, i);
   function n() {
    var t = i.call(this, {}) || this;
    return (t.onValidHandler = t.onFormValid.bind(t)), t;
   }
   return (
    (n.prototype.install = function () {
     var t = this.core.getFormElement();
     if (t.querySelectorAll('[type="submit"][name="submit"]').length)
      throw new Error(
       'Do not use `submit` for the name attribute of submit button',
      );
     this.core.on('core.form.valid', this.onValidHandler);
    }),
    (n.prototype.uninstall = function () {
     this.core.off('core.form.valid', this.onValidHandler);
    }),
    (n.prototype.onFormValid = function () {
     var t = this.core.getFormElement();
     this.isEnabled && t instanceof HTMLFormElement && t.submit();
    }),
    n
   );
  })(o.Plugin);
  return s;
 });
});
export default d();
