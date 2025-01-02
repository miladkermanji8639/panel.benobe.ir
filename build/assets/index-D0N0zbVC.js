var C = (a, n) => () => (n || a((n = { exports: {} }).exports, n), n.exports);
var y = C((f, l) => {
 (function (a, n) {
  typeof f == 'object' && typeof l < 'u'
   ? (l.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.Recaptcha = n(a.FormValidation)));
 })(void 0, function (a) {
  var n = function (r, t) {
   return (
    (n =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, i) {
       e.__proto__ = i;
      }) ||
     function (e, i) {
      for (var o in i)
       Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
     }),
    n(r, t)
   );
  };
  function h(r, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   n(r, t);
   function e() {
    this.constructor = r;
   }
   r.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
  }
  var m = a.utils.fetch,
   v = a.utils.removeUndefined,
   A = (function (r) {
    h(t, r);
    function t(e) {
     var i = r.call(this, e) || this;
     return (
      (i.widgetIds = new Map()),
      (i.captchaStatus = 'NotValidated'),
      (i.opts = Object.assign({}, t.DEFAULT_OPTIONS, v(e))),
      (i.fieldResetHandler = i.onResetField.bind(i)),
      (i.preValidateFilter = i.preValidate.bind(i)),
      (i.iconPlacedHandler = i.onIconPlaced.bind(i)),
      i
     );
    }
    return (
     (t.prototype.install = function () {
      var e = this;
      this.core
       .on('core.field.reset', this.fieldResetHandler)
       .on('plugins.icon.placed', this.iconPlacedHandler)
       .registerFilter('validate-pre', this.preValidateFilter);
      var i =
       typeof window[t.LOADED_CALLBACK] > 'u'
        ? function () {}
        : window[t.LOADED_CALLBACK];
      window[t.LOADED_CALLBACK] = function () {
       i();
       var g = {
         badge: e.opts.badge,
         callback: function () {
          e.opts.backendVerificationUrl === '' &&
           ((e.captchaStatus = 'Valid'),
           e.core.updateFieldStatus(t.CAPTCHA_FIELD, 'Valid'));
         },
         'error-callback': function () {
          (e.captchaStatus = 'Invalid'),
           e.core.updateFieldStatus(t.CAPTCHA_FIELD, 'Invalid');
         },
         'expired-callback': function () {
          (e.captchaStatus = 'NotValidated'),
           e.core.updateFieldStatus(t.CAPTCHA_FIELD, 'NotValidated');
         },
         sitekey: e.opts.siteKey,
         size: e.opts.size,
        },
        _ = window.grecaptcha.render(e.opts.element, g);
       e.widgetIds.set(e.opts.element, _),
        e.core.addField(t.CAPTCHA_FIELD, {
         validators: {
          promise: {
           message: e.opts.message,
           promise: function (w) {
            var c,
             p = e.widgetIds.has(e.opts.element)
              ? window.grecaptcha.getResponse(e.widgetIds.get(e.opts.element))
              : w.value;
            return p === ''
             ? ((e.captchaStatus = 'Invalid'), Promise.resolve({ valid: !1 }))
             : e.opts.backendVerificationUrl === ''
               ? ((e.captchaStatus = 'Valid'), Promise.resolve({ valid: !0 }))
               : e.captchaStatus === 'Valid'
                 ? Promise.resolve({ valid: !0 })
                 : m(e.opts.backendVerificationUrl, {
                    method: 'POST',
                    params: ((c = {}), (c[t.CAPTCHA_FIELD] = p), c),
                   })
                    .then(function (d) {
                     var u = ''.concat(d.success) === 'true';
                     return (
                      (e.captchaStatus = u ? 'Valid' : 'Invalid'),
                      Promise.resolve({ meta: d, valid: u })
                     );
                    })
                    .catch(function (d) {
                     return (
                      (e.captchaStatus = 'NotValidated'),
                      Promise.reject({ valid: !1 })
                     );
                    });
           },
          },
         },
        });
      };
      var o = this.getScript();
      if (!document.body.querySelector('script[src="'.concat(o, '"]'))) {
       var s = document.createElement('script');
       (s.type = 'text/javascript'),
        (s.async = !0),
        (s.defer = !0),
        (s.src = o),
        document.body.appendChild(s);
      }
     }),
     (t.prototype.uninstall = function () {
      delete window[t.LOADED_CALLBACK],
       this.timer && clearTimeout(this.timer),
       this.core
        .off('core.field.reset', this.fieldResetHandler)
        .off('plugins.icon.placed', this.iconPlacedHandler)
        .deregisterFilter('validate-pre', this.preValidateFilter),
       this.widgetIds.clear();
      var e = this.getScript(),
       i = [].slice.call(
        document.body.querySelectorAll('script[src="'.concat(e, '"]')),
       );
      i.forEach(function (o) {
       return o.parentNode.removeChild(o);
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
      return 'https://www.google.com/recaptcha/api.js?onload='
       .concat(t.LOADED_CALLBACK, '&render=explicit')
       .concat(e);
     }),
     (t.prototype.preValidate = function () {
      var e = this;
      if (
       this.isEnabled &&
       this.opts.size === 'invisible' &&
       this.widgetIds.has(this.opts.element)
      ) {
       var i = this.widgetIds.get(this.opts.element);
       return this.captchaStatus === 'Valid'
        ? Promise.resolve()
        : new Promise(function (o, s) {
           window.grecaptcha.execute(i).then(function () {
            e.timer && clearTimeout(e.timer),
             (e.timer = window.setTimeout(o, 1 * 1e3));
           });
          });
      } else return Promise.resolve();
     }),
     (t.prototype.onResetField = function (e) {
      if (
       e.field === t.CAPTCHA_FIELD &&
       this.widgetIds.has(this.opts.element)
      ) {
       var i = this.widgetIds.get(this.opts.element);
       window.grecaptcha.reset(i);
      }
     }),
     (t.prototype.onIconPlaced = function (e) {
      if (e.field === t.CAPTCHA_FIELD)
       if (this.opts.size === 'invisible') e.iconElement.style.display = 'none';
       else {
        var i = document.getElementById(this.opts.element);
        i && i.parentNode.insertBefore(e.iconElement, i.nextSibling);
       }
     }),
     (t.CAPTCHA_FIELD = 'g-recaptcha-response'),
     (t.DEFAULT_OPTIONS = {
      backendVerificationUrl: '',
      badge: 'bottomright',
      size: 'normal',
      theme: 'light',
     }),
     (t.LOADED_CALLBACK = '___reCaptchaLoaded___'),
     t
    );
   })(a.Plugin);
  return A;
 });
});
export default y();
