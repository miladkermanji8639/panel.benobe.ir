var C = (o, a) => () => (a || o((a = { exports: {} }).exports, a), a.exports);
var w = C((h, d) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-recaptcha
  * @version 2.4.0
  */ (function (o, a) {
  typeof h == 'object' && typeof d < 'u'
   ? (d.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : (((o = typeof globalThis < 'u' ? globalThis : o || self).FormValidation =
        o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Recaptcha = a(o.FormValidation)));
 })(void 0, function (o) {
  var a = function (s, i) {
    return (
     (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, t) {
        e.__proto__ = t;
       }) ||
      function (e, t) {
       for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }),
     a(s, i)
    );
   },
   f = o.utils.fetch,
   m = o.utils.removeUndefined;
  return (function (s) {
   function i(e) {
    var t = s.call(this, e) || this;
    return (
     (t.widgetIds = new Map()),
     (t.captchaStatus = 'NotValidated'),
     (t.opts = Object.assign({}, i.DEFAULT_OPTIONS, m(e))),
     (t.fieldResetHandler = t.onResetField.bind(t)),
     (t.preValidateFilter = t.preValidate.bind(t)),
     (t.iconPlacedHandler = t.onIconPlaced.bind(t)),
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
     a(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    })(i, s),
    (i.prototype.install = function () {
     var e = this;
     this.core
      .on('core.field.reset', this.fieldResetHandler)
      .on('plugins.icon.placed', this.iconPlacedHandler)
      .registerFilter('validate-pre', this.preValidateFilter);
     var t =
      window[i.LOADED_CALLBACK] === void 0
       ? function () {}
       : window[i.LOADED_CALLBACK];
     window[i.LOADED_CALLBACK] = function () {
      t();
      var g = {
        badge: e.opts.badge,
        callback: function () {
         e.opts.backendVerificationUrl === '' &&
          ((e.captchaStatus = 'Valid'),
          e.core.updateFieldStatus(i.CAPTCHA_FIELD, 'Valid'));
        },
        'error-callback': function () {
         (e.captchaStatus = 'Invalid'),
          e.core.updateFieldStatus(i.CAPTCHA_FIELD, 'Invalid');
        },
        'expired-callback': function () {
         (e.captchaStatus = 'NotValidated'),
          e.core.updateFieldStatus(i.CAPTCHA_FIELD, 'NotValidated');
        },
        sitekey: e.opts.siteKey,
        size: e.opts.size,
       },
       v = window.grecaptcha.render(e.opts.element, g);
      e.widgetIds.set(e.opts.element, v),
       e.core.addField(i.CAPTCHA_FIELD, {
        validators: {
         promise: {
          message: e.opts.message,
          promise: function (A) {
           var c,
            p = e.widgetIds.has(e.opts.element)
             ? window.grecaptcha.getResponse(e.widgetIds.get(e.opts.element))
             : A.value;
           return p === ''
            ? ((e.captchaStatus = 'Invalid'), Promise.resolve({ valid: !1 }))
            : e.opts.backendVerificationUrl === ''
              ? ((e.captchaStatus = 'Valid'), Promise.resolve({ valid: !0 }))
              : e.captchaStatus === 'Valid'
                ? Promise.resolve({ valid: !0 })
                : f(e.opts.backendVerificationUrl, {
                   method: 'POST',
                   params: ((c = {}), (c[i.CAPTCHA_FIELD] = p), c),
                  })
                   .then(function (l) {
                    var u = ''.concat(l.success) === 'true';
                    return (
                     (e.captchaStatus = u ? 'Valid' : 'Invalid'),
                     Promise.resolve({ meta: l, valid: u })
                    );
                   })
                   .catch(function (l) {
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
     var n = this.getScript();
     if (!document.body.querySelector('script[src="'.concat(n, '"]'))) {
      var r = document.createElement('script');
      (r.type = 'text/javascript'),
       (r.async = !0),
       (r.defer = !0),
       (r.src = n),
       document.body.appendChild(r);
     }
    }),
    (i.prototype.uninstall = function () {
     delete window[i.LOADED_CALLBACK],
      this.timer && clearTimeout(this.timer),
      this.core
       .off('core.field.reset', this.fieldResetHandler)
       .off('plugins.icon.placed', this.iconPlacedHandler)
       .deregisterFilter('validate-pre', this.preValidateFilter),
      this.widgetIds.clear();
     var e = this.getScript();
     [].slice
      .call(document.body.querySelectorAll('script[src="'.concat(e, '"]')))
      .forEach(function (t) {
       return t.parentNode.removeChild(t);
      }),
      this.core.removeField(i.CAPTCHA_FIELD);
    }),
    (i.prototype.onEnabled = function () {
     this.core.enableValidator(i.CAPTCHA_FIELD, 'promise');
    }),
    (i.prototype.onDisabled = function () {
     this.core.disableValidator(i.CAPTCHA_FIELD, 'promise');
    }),
    (i.prototype.getScript = function () {
     var e = this.opts.language ? '&hl='.concat(this.opts.language) : '';
     return 'https://www.google.com/recaptcha/api.js?onload='
      .concat(i.LOADED_CALLBACK, '&render=explicit')
      .concat(e);
    }),
    (i.prototype.preValidate = function () {
     var e = this;
     if (
      this.isEnabled &&
      this.opts.size === 'invisible' &&
      this.widgetIds.has(this.opts.element)
     ) {
      var t = this.widgetIds.get(this.opts.element);
      return this.captchaStatus === 'Valid'
       ? Promise.resolve()
       : new Promise(function (n, r) {
          window.grecaptcha.execute(t).then(function () {
           e.timer && clearTimeout(e.timer),
            (e.timer = window.setTimeout(n, 1e3));
          });
         });
     }
     return Promise.resolve();
    }),
    (i.prototype.onResetField = function (e) {
     if (e.field === i.CAPTCHA_FIELD && this.widgetIds.has(this.opts.element)) {
      var t = this.widgetIds.get(this.opts.element);
      window.grecaptcha.reset(t);
     }
    }),
    (i.prototype.onIconPlaced = function (e) {
     if (e.field === i.CAPTCHA_FIELD)
      if (this.opts.size === 'invisible') e.iconElement.style.display = 'none';
      else {
       var t = document.getElementById(this.opts.element);
       t && t.parentNode.insertBefore(e.iconElement, t.nextSibling);
      }
    }),
    (i.CAPTCHA_FIELD = 'g-recaptcha-response'),
    (i.DEFAULT_OPTIONS = {
     backendVerificationUrl: '',
     badge: 'bottomright',
     size: 'normal',
     theme: 'light',
    }),
    (i.LOADED_CALLBACK = '___reCaptchaLoaded___'),
    i
   );
  })(o.Plugin);
 });
});
export default w();
