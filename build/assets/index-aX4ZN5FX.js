var v = (o, i) => () => (i || o((i = { exports: {} }).exports, i), i.exports);
var g = v((u, p) => {
 (function (o, i) {
  typeof u == 'object' && typeof p < 'u'
   ? (p.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Recaptcha3 = i(o.FormValidation)));
 })(void 0, function (o) {
  var i = function (a, t) {
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
    i(a, t)
   );
  };
  function f(a, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   i(a, t);
   function e() {
    this.constructor = a;
   }
   a.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
  }
  var m = o.utils.fetch,
   h = o.utils.removeUndefined,
   _ = (function (a) {
    f(t, a);
    function t(e) {
     var n = a.call(this, e) || this;
     return (
      (n.opts = Object.assign({}, { minimumScore: 0 }, h(e))),
      (n.iconPlacedHandler = n.onIconPlaced.bind(n)),
      n
     );
    }
    return (
     (t.prototype.install = function () {
      var e = this;
      this.core.on('plugins.icon.placed', this.iconPlacedHandler);
      var n =
       typeof window[t.LOADED_CALLBACK] > 'u'
        ? function () {}
        : window[t.LOADED_CALLBACK];
      window[t.LOADED_CALLBACK] = function () {
       n();
       var d = document.createElement('input');
       d.setAttribute('type', 'hidden'),
        d.setAttribute('name', t.CAPTCHA_FIELD),
        document.getElementById(e.opts.element).appendChild(d),
        e.core.addField(t.CAPTCHA_FIELD, {
         validators: {
          promise: {
           message: e.opts.message,
           promise: function (D) {
            return new Promise(function (A, C) {
             window.grecaptcha
              .execute(e.opts.siteKey, { action: e.opts.action })
              .then(function (y) {
               var l;
               m(e.opts.backendVerificationUrl, {
                method: 'POST',
                params: ((l = {}), (l[t.CAPTCHA_FIELD] = y), l),
               })
                .then(function (s) {
                 var L =
                  ''.concat(s.success) === 'true' &&
                  s.score >= e.opts.minimumScore;
                 A({ message: s.message || e.opts.message, meta: s, valid: L });
                })
                .catch(function (s) {
                 C({ valid: !1 });
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
      var e = this.getScript(),
       n = [].slice.call(
        document.body.querySelectorAll('script[src="'.concat(e, '"]')),
       );
      n.forEach(function (c) {
       return c.parentNode.removeChild(c);
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
  return _;
 });
});
export default g();
