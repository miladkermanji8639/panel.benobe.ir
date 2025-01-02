var m = (a, r) => () => (r || a((r = { exports: {} }).exports, r), r.exports);
var A = m((f, d) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-turnstile
  * @version 2.4.0
  */ (function (a, r) {
  typeof f == 'object' && typeof d < 'u'
   ? (d.exports = r(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], r)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.Turnstile = r(a.FormValidation)));
 })(void 0, function (a) {
  var r = function (s, i) {
    return (
     (r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (t, e) {
        t.__proto__ = e;
       }) ||
      function (t, e) {
       for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }),
     r(s, i)
    );
   },
   C = a.utils.fetch,
   v = a.utils.removeUndefined;
  return (function (s) {
   function i(t) {
    var e = s.call(this, t) || this;
    return (
     (e.widgetIds = new Map()),
     (e.captchaStatus = 'NotValidated'),
     (e.captchaContainer = ''),
     (e.opts = Object.assign({}, i.DEFAULT_OPTIONS, v(t))),
     (e.fieldResetHandler = e.onResetField.bind(e)),
     (e.preValidateFilter = e.preValidate.bind(e)),
     (e.iconPlacedHandler = e.onIconPlaced.bind(e)),
     (e.captchaContainer = e.opts.element.startsWith('#')
      ? e.opts.element
      : '#'.concat(e.opts.element)),
     e
    );
   }
   return (
    (function (t, e) {
     if (typeof e != 'function' && e !== null)
      throw new TypeError(
       'Class extends value ' + String(e) + ' is not a constructor or null',
      );
     function n() {
      this.constructor = t;
     }
     r(t, e),
      (t.prototype =
       e === null ? Object.create(e) : ((n.prototype = e.prototype), new n()));
    })(i, s),
    (i.prototype.install = function () {
     var t = this;
     this.core
      .on('core.field.reset', this.fieldResetHandler)
      .on('plugins.icon.placed', this.iconPlacedHandler)
      .registerFilter('validate-pre', this.preValidateFilter);
     var e =
      window[i.LOADED_CALLBACK] === void 0
       ? function () {}
       : window[i.LOADED_CALLBACK];
     window[i.LOADED_CALLBACK] = function () {
      e();
      var p = t
       .getTurnstileInstance()
       .render(t.captchaContainer, t.buildTurnstileRenderOptions());
      t.widgetIds.set(t.captchaContainer, p),
       t.core.addField(i.CAPTCHA_FIELD, {
        validators: {
         promise: {
          message: t.opts.message,
          promise: function (g) {
           var c,
            u = t.widgetIds.has(t.captchaContainer)
             ? t
                .getTurnstileInstance()
                .getResponse(t.widgetIds.get(t.captchaContainer))
             : g.value;
           return u === ''
            ? ((t.captchaStatus = 'Invalid'), Promise.resolve({ valid: !1 }))
            : t.opts.backendVerificationUrl === ''
              ? ((t.captchaStatus = 'Valid'), Promise.resolve({ valid: !0 }))
              : t.captchaStatus === 'Valid'
                ? Promise.resolve({ valid: !0 })
                : C(t.opts.backendVerificationUrl, {
                   method: 'POST',
                   params: ((c = {}), (c[i.CAPTCHA_FIELD] = u), c),
                  })
                   .then(function (l) {
                    var h = ''.concat(l.success) === 'true';
                    return (
                     (t.captchaStatus = h ? 'Valid' : 'Invalid'),
                     Promise.resolve({ meta: l, valid: h })
                    );
                   })
                   .catch(function (l) {
                    return (
                     (t.captchaStatus = 'NotValidated'),
                     Promise.reject({ valid: !1 })
                    );
                   });
          },
         },
        },
       });
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
    (i.prototype.uninstall = function () {
     var t = this;
     delete window[i.LOADED_CALLBACK],
      this.core
       .off('core.field.reset', this.fieldResetHandler)
       .off('plugins.icon.placed', this.iconPlacedHandler)
       .deregisterFilter('validate-pre', this.preValidateFilter),
      this.widgetIds.forEach(function (n, o, p) {
       t.getTurnstileInstance().remove(o);
      }),
      this.widgetIds.clear();
     var e = this.getScript();
     [].slice
      .call(document.body.querySelectorAll('script[src="'.concat(e, '"]')))
      .forEach(function (n) {
       return n.parentNode.removeChild(n);
      }),
      this.core.removeField(i.CAPTCHA_FIELD);
    }),
    (i.prototype.onEnabled = function () {
     this.core.enableValidator(i.CAPTCHA_FIELD, 'promise');
    }),
    (i.prototype.onDisabled = function () {
     this.core.disableValidator(i.CAPTCHA_FIELD, 'promise');
    }),
    (i.prototype.buildTurnstileRenderOptions = function () {
     var t = this;
     return {
      callback: function () {
       t.opts.backendVerificationUrl === '' &&
        ((t.captchaStatus = 'Valid'),
        t.core.updateFieldStatus(i.CAPTCHA_FIELD, 'Valid'));
      },
      'error-callback': function () {
       (t.captchaStatus = 'Invalid'),
        t.core.updateFieldStatus(i.CAPTCHA_FIELD, 'Invalid');
      },
      'expired-callback': function () {
       (t.captchaStatus = 'NotValidated'),
        t.core.updateFieldStatus(i.CAPTCHA_FIELD, 'NotValidated');
      },
      sitekey: this.opts.siteKey,
      action: this.opts.action,
      appearance: this.opts.appearance,
      cData: this.opts.cData,
      language: this.opts.language,
      size: this.opts.size,
      'refresh-expired': this.opts.refreshExpired,
      retry: this.opts.retry,
      'retry-interval': this.opts.retryInterval,
      tabindex: this.opts.tabIndex,
      theme: this.opts.theme,
     };
    }),
    (i.prototype.getTurnstileInstance = function () {
     return window.turnstile;
    }),
    (i.prototype.getScript = function () {
     return 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload='.concat(
      i.LOADED_CALLBACK,
      '&render=explicit',
     );
    }),
    (i.prototype.preValidate = function () {
     return (
      this.isEnabled &&
       this.opts.appearance === 'execute' &&
       this.widgetIds.has(this.captchaContainer) &&
       this.captchaStatus !== 'Valid' &&
       this.getTurnstileInstance().execute(
        this.captchaContainer,
        this.buildTurnstileRenderOptions(),
       ),
      Promise.resolve()
     );
    }),
    (i.prototype.onResetField = function (t) {
     if (
      t.field === i.CAPTCHA_FIELD &&
      this.widgetIds.has(this.captchaContainer)
     ) {
      var e = this.widgetIds.get(this.captchaContainer);
      this.getTurnstileInstance().reset(e);
     }
    }),
    (i.prototype.onIconPlaced = function (t) {
     if (t.field === i.CAPTCHA_FIELD)
      if (this.opts.appearance === 'execute')
       t.iconElement.style.display = 'none';
      else {
       var e = document.getElementById(this.captchaContainer);
       e && e.parentNode.insertBefore(t.iconElement, e.nextSibling);
      }
    }),
    (i.CAPTCHA_FIELD = 'cf-turnstile-response'),
    (i.DEFAULT_OPTIONS = {
     backendVerificationUrl: '',
     appearance: 'always',
     language: 'auto',
     refreshExpired: 'auto',
     retry: 'auto',
     size: 'normal',
     tabIndex: 0,
     theme: 'auto',
    }),
    (i.LOADED_CALLBACK = '___turnstileLoaded___'),
    i
   );
  })(a.Plugin);
 });
});
export default A();
