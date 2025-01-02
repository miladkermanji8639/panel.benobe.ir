var u = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
var p = u((d, c) => {
 (function (i, r) {
  typeof d == 'object' && typeof c < 'u'
   ? (c.exports = r(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], r)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Recaptcha3Token = r(i.FormValidation)));
 })(void 0, function (i) {
  var r = function (a, e) {
   return (
    (r =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, n) {
       t.__proto__ = n;
      }) ||
     function (t, n) {
      for (var o in n)
       Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
     }),
    r(a, e)
   );
  };
  function s(a, e) {
   if (typeof e != 'function' && e !== null)
    throw new TypeError(
     'Class extends value ' + String(e) + ' is not a constructor or null',
    );
   r(a, e);
   function t() {
    this.constructor = a;
   }
   a.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
  }
  var l = (function (a) {
   s(e, a);
   function e(t) {
    var n = a.call(this, t) || this;
    return (
     (n.opts = Object.assign(
      {},
      { action: 'submit', hiddenTokenName: '___hidden-token___' },
      t,
     )),
     (n.onValidHandler = n.onFormValid.bind(n)),
     n
    );
   }
   return (
    (e.prototype.install = function () {
     this.core.on('core.form.valid', this.onValidHandler),
      (this.hiddenTokenEle = document.createElement('input')),
      this.hiddenTokenEle.setAttribute('type', 'hidden'),
      this.core.getFormElement().appendChild(this.hiddenTokenEle);
     var t =
      typeof window[e.LOADED_CALLBACK] > 'u'
       ? function () {}
       : window[e.LOADED_CALLBACK];
     window[e.LOADED_CALLBACK] = function () {
      t();
     };
     var n = this.getScript();
     if (!document.body.querySelector('script[src="'.concat(n, '"]'))) {
      var o = document.createElement('script');
      (o.type = 'text/javascript'),
       (o.async = !0),
       (o.defer = !0),
       (o.src = n),
       document.body.appendChild(o);
     }
    }),
    (e.prototype.uninstall = function () {
     delete window[e.LOADED_CALLBACK],
      this.core.off('core.form.valid', this.onValidHandler);
     var t = this.getScript(),
      n = [].slice.call(
       document.body.querySelectorAll('script[src="'.concat(t, '"]')),
      );
     n.forEach(function (o) {
      return o.parentNode.removeChild(o);
     }),
      this.core.getFormElement().removeChild(this.hiddenTokenEle);
    }),
    (e.prototype.onFormValid = function () {
     var t = this;
     this.isEnabled &&
      window.grecaptcha
       .execute(this.opts.siteKey, { action: this.opts.action })
       .then(function (n) {
        t.hiddenTokenEle.setAttribute('name', t.opts.hiddenTokenName),
         (t.hiddenTokenEle.value = n);
        var o = t.core.getFormElement();
        o instanceof HTMLFormElement && o.submit();
       });
    }),
    (e.prototype.getScript = function () {
     var t = this.opts.language ? '&hl='.concat(this.opts.language) : '';
     return (
      'https://www.google.com/recaptcha/api.js?' +
      'onload='
       .concat(e.LOADED_CALLBACK, '&render=')
       .concat(this.opts.siteKey)
       .concat(t)
     );
    }),
    (e.LOADED_CALLBACK = '___reCaptcha3TokenLoaded___'),
    e
   );
  })(i.Plugin);
  return l;
 });
});
export default p();
