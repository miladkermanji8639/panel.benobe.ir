var l = (r, i) => () => (i || r((i = { exports: {} }).exports, i), i.exports);
var s = l((d, c) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-recaptcha3-token
  * @version 2.4.0
  */ (function (r, i) {
  typeof d == 'object' && typeof c < 'u'
   ? (c.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : (((r = typeof globalThis < 'u' ? globalThis : r || self).FormValidation =
        r.FormValidation || {}),
       (r.FormValidation.plugins = r.FormValidation.plugins || {}),
       (r.FormValidation.plugins.Recaptcha3Token = i(r.FormValidation)));
 })(void 0, function (r) {
  var i = function (a, o) {
   return (
    (i =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var n in t)
       Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
     }),
    i(a, o)
   );
  };
  return (function (a) {
   function o(e) {
    var t = a.call(this, e) || this;
    return (
     (t.opts = Object.assign(
      {},
      { action: 'submit', hiddenTokenName: '___hidden-token___' },
      e,
     )),
     (t.onValidHandler = t.onFormValid.bind(t)),
     t
    );
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function n() {
      this.constructor = e;
     }
     i(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    })(o, a),
    (o.prototype.install = function () {
     this.core.on('core.form.valid', this.onValidHandler),
      (this.hiddenTokenEle = document.createElement('input')),
      this.hiddenTokenEle.setAttribute('type', 'hidden'),
      this.core.getFormElement().appendChild(this.hiddenTokenEle);
     var e =
      window[o.LOADED_CALLBACK] === void 0
       ? function () {}
       : window[o.LOADED_CALLBACK];
     window[o.LOADED_CALLBACK] = function () {
      e();
     };
     var t = this.getScript();
     if (!document.body.querySelector('script[src="'.concat(t, '"]'))) {
      var n = document.createElement('script');
      (n.type = 'text/javascript'),
       (n.async = !0),
       (n.defer = !0),
       (n.src = t),
       document.body.appendChild(n);
     }
    }),
    (o.prototype.uninstall = function () {
     delete window[o.LOADED_CALLBACK],
      this.core.off('core.form.valid', this.onValidHandler);
     var e = this.getScript();
     [].slice
      .call(document.body.querySelectorAll('script[src="'.concat(e, '"]')))
      .forEach(function (t) {
       return t.parentNode.removeChild(t);
      }),
      this.core.getFormElement().removeChild(this.hiddenTokenEle);
    }),
    (o.prototype.onFormValid = function () {
     var e = this;
     this.isEnabled &&
      window.grecaptcha
       .execute(this.opts.siteKey, { action: this.opts.action })
       .then(function (t) {
        e.hiddenTokenEle.setAttribute('name', e.opts.hiddenTokenName),
         (e.hiddenTokenEle.value = t);
        var n = e.core.getFormElement();
        n instanceof HTMLFormElement && n.submit();
       });
    }),
    (o.prototype.getScript = function () {
     var e = this.opts.language ? '&hl='.concat(this.opts.language) : '';
     return (
      'https://www.google.com/recaptcha/api.js?' +
      'onload='
       .concat(o.LOADED_CALLBACK, '&render=')
       .concat(this.opts.siteKey)
       .concat(e)
     );
    }),
    (o.LOADED_CALLBACK = '___reCaptcha3TokenLoaded___'),
    o
   );
  })(r.Plugin);
 });
});
export default s();
