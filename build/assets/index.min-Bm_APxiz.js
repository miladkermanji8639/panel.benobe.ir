var y = (o, i) => () => (i || o((i = { exports: {} }).exports, i), i.exports);
var g = y((u, p) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-recaptcha3
  * @version 2.4.0
  */ (function (o, i) {
  typeof u == 'object' && typeof p < 'u'
   ? (p.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : (((o = typeof globalThis < 'u' ? globalThis : o || self).FormValidation =
        o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Recaptcha3 = i(o.FormValidation)));
 })(void 0, function (o) {
  var i = function (s, t) {
    return (
     (i =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, n) {
        e.__proto__ = n;
       }) ||
      function (e, n) {
       for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c]);
      }),
     i(s, t)
    );
   },
   f = o.utils.fetch,
   m = o.utils.removeUndefined;
  return (function (s) {
   function t(e) {
    var n = s.call(this, e) || this;
    return (
     (n.opts = Object.assign({}, { minimumScore: 0 }, m(e))),
     (n.iconPlacedHandler = n.onIconPlaced.bind(n)),
     n
    );
   }
   return (
    (function (e, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function c() {
      this.constructor = e;
     }
     i(e, n),
      (e.prototype =
       n === null ? Object.create(n) : ((c.prototype = n.prototype), new c()));
    })(t, s),
    (t.prototype.install = function () {
     var e = this;
     this.core.on('plugins.icon.placed', this.iconPlacedHandler);
     var n =
      window[t.LOADED_CALLBACK] === void 0
       ? function () {}
       : window[t.LOADED_CALLBACK];
     window[t.LOADED_CALLBACK] = function () {
      n();
      var l = document.createElement('input');
      l.setAttribute('type', 'hidden'),
       l.setAttribute('name', t.CAPTCHA_FIELD),
       document.getElementById(e.opts.element).appendChild(l),
       e.core.addField(t.CAPTCHA_FIELD, {
        validators: {
         promise: {
          message: e.opts.message,
          promise: function (L) {
           return new Promise(function (A, h) {
            window.grecaptcha
             .execute(e.opts.siteKey, { action: e.opts.action })
             .then(function (_) {
              var d;
              f(e.opts.backendVerificationUrl, {
               method: 'POST',
               params: ((d = {}), (d[t.CAPTCHA_FIELD] = _), d),
              })
               .then(function (a) {
                var C =
                 ''.concat(a.success) === 'true' &&
                 a.score >= e.opts.minimumScore;
                A({ message: a.message || e.opts.message, meta: a, valid: C });
               })
               .catch(function (a) {
                h({ valid: !1 });
               });
             });
           });
          },
         },
        },
       });
     };
     var c = this.getScript();
     if (!document.body.querySelector('script[src="'.concat(c, '"]'))) {
      var r = document.createElement('script');
      (r.type = 'text/javascript'),
       (r.async = !0),
       (r.defer = !0),
       (r.src = c),
       document.body.appendChild(r);
     }
    }),
    (t.prototype.uninstall = function () {
     delete window[t.LOADED_CALLBACK],
      this.core.off('plugins.icon.placed', this.iconPlacedHandler);
     var e = this.getScript();
     [].slice
      .call(document.body.querySelectorAll('script[src="'.concat(e, '"]')))
      .forEach(function (n) {
       return n.parentNode.removeChild(n);
      }),
      this.core.removeField(t.CAPTCHA_FIELD);
    }),
    (t.prototype.onEnabled = function () {
     this.core.enableValidator(t.CAPTCHA_FIELD, 'promise');
    }),
    (t.prototype.onDisabled = function () {
     this.core.disableValidator(t.CAPTCHA_FIELD, 'promise');
    }),
    (t.prototype.getScript = function () {
     var e = this.opts.language ? '&hl='.concat(this.opts.language) : '';
     return (
      'https://www.google.com/recaptcha/api.js?' +
      'onload='
       .concat(t.LOADED_CALLBACK, '&render=')
       .concat(this.opts.siteKey)
       .concat(e)
     );
    }),
    (t.prototype.onIconPlaced = function (e) {
     e.field === t.CAPTCHA_FIELD && (e.iconElement.style.display = 'none');
    }),
    (t.CAPTCHA_FIELD = '___g-recaptcha-token___'),
    (t.LOADED_CALLBACK = '___reCaptcha3Loaded___'),
    t
   );
  })(o.Plugin);
 });
});
export default g();
