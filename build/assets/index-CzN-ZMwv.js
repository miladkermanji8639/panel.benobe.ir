var y = (n, a) => () => (a || n((a = { exports: {} }).exports, a), a.exports);
var I = y((v, p) => {
 (function (n, a) {
  typeof v == 'object' && typeof p < 'u'
   ? (p.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Turnstile = a(n.FormValidation)));
 })(void 0, function (n) {
  var a = function (o, t) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, i) {
       e.__proto__ = i;
      }) ||
     function (e, i) {
      for (var s in i)
       Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
     }),
    a(o, t)
   );
  };
  function m(o, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   a(o, t);
   function e() {
    this.constructor = o;
   }
   o.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
  }
  var C = n.utils.fetch,
   A = n.utils.removeUndefined,
   _ = (function (o) {
    m(t, o);
    function t(e) {
     var i = o.call(this, e) || this;
     return (
      (i.widgetIds = new Map()),
      (i.captchaStatus = 'NotValidated'),
      (i.captchaContainer = ''),
      (i.opts = Object.assign({}, t.DEFAULT_OPTIONS, A(e))),
      (i.fieldResetHandler = i.onResetField.bind(i)),
      (i.preValidateFilter = i.preValidate.bind(i)),
      (i.iconPlacedHandler = i.onIconPlaced.bind(i)),
      (i.captchaContainer = i.opts.element.startsWith('#')
       ? i.opts.element
       : '#'.concat(i.opts.element)),
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
       var c = e
        .getTurnstileInstance()
        .render(e.captchaContainer, e.buildTurnstileRenderOptions());
       e.widgetIds.set(e.captchaContainer, c),
        e.core.addField(t.CAPTCHA_FIELD, {
         validators: {
          promise: {
           message: e.opts.message,
           promise: function (u) {
            var d,
             h = e.widgetIds.has(e.captchaContainer)
              ? e
                 .getTurnstileInstance()
                 .getResponse(e.widgetIds.get(e.captchaContainer))
              : u.value;
            return h === ''
             ? ((e.captchaStatus = 'Invalid'), Promise.resolve({ valid: !1 }))
             : e.opts.backendVerificationUrl === ''
               ? ((e.captchaStatus = 'Valid'), Promise.resolve({ valid: !0 }))
               : e.captchaStatus === 'Valid'
                 ? Promise.resolve({ valid: !0 })
                 : C(e.opts.backendVerificationUrl, {
                    method: 'POST',
                    params: ((d = {}), (d[t.CAPTCHA_FIELD] = h), d),
                   })
                    .then(function (l) {
                     var f = ''.concat(l.success) === 'true';
                     return (
                      (e.captchaStatus = f ? 'Valid' : 'Invalid'),
                      Promise.resolve({ meta: l, valid: f })
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
      var s = this.getScript();
      if (!document.body.querySelector('script[src="'.concat(s, '"]'))) {
       var r = document.createElement('script');
       (r.type = 'text/javascript'),
        (r.async = !0),
        (r.defer = !0),
        (r.src = s),
        document.body.appendChild(r);
      }
     }),
     (t.prototype.uninstall = function () {
      var e = this;
      delete window[t.LOADED_CALLBACK],
       this.core
        .off('core.field.reset', this.fieldResetHandler)
        .off('plugins.icon.placed', this.iconPlacedHandler)
        .deregisterFilter('validate-pre', this.preValidateFilter),
       this.widgetIds.forEach(function (r, c, u) {
        e.getTurnstileInstance().remove(c);
       }),
       this.widgetIds.clear();
      var i = this.getScript(),
       s = [].slice.call(
        document.body.querySelectorAll('script[src="'.concat(i, '"]')),
       );
      s.forEach(function (r) {
       return r.parentNode.removeChild(r);
      }),
       this.core.removeField(t.CAPTCHA_FIELD);
     }),
     (t.prototype.onEnabled = function () {
      this.core.enableValidator(t.CAPTCHA_FIELD, 'promise');
     }),
     (t.prototype.onDisabled = function () {
      this.core.disableValidator(t.CAPTCHA_FIELD, 'promise');
     }),
     (t.prototype.buildTurnstileRenderOptions = function () {
      var e = this;
      return {
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
     (t.prototype.getTurnstileInstance = function () {
      return window.turnstile;
     }),
     (t.prototype.getScript = function () {
      return 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload='.concat(
       t.LOADED_CALLBACK,
       '&render=explicit',
      );
     }),
     (t.prototype.preValidate = function () {
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
     (t.prototype.onResetField = function (e) {
      if (
       e.field === t.CAPTCHA_FIELD &&
       this.widgetIds.has(this.captchaContainer)
      ) {
       var i = this.widgetIds.get(this.captchaContainer);
       this.getTurnstileInstance().reset(i);
      }
     }),
     (t.prototype.onIconPlaced = function (e) {
      if (e.field === t.CAPTCHA_FIELD)
       if (this.opts.appearance === 'execute')
        e.iconElement.style.display = 'none';
       else {
        var i = document.getElementById(this.captchaContainer);
        i && i.parentNode.insertBefore(e.iconElement, i.nextSibling);
       }
     }),
     (t.CAPTCHA_FIELD = 'cf-turnstile-response'),
     (t.DEFAULT_OPTIONS = {
      backendVerificationUrl: '',
      appearance: 'always',
      language: 'auto',
      refreshExpired: 'auto',
      retry: 'auto',
      size: 'normal',
      tabIndex: 0,
      theme: 'auto',
     }),
     (t.LOADED_CALLBACK = '___turnstileLoaded___'),
     t
    );
   })(n.Plugin);
  return _;
 });
});
export default I();
