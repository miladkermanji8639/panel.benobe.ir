var E = (o, c) => () => (c || o((c = { exports: {} }).exports, c), c.exports);
var T = E((b, v) => {
 (function (o, c) {
  typeof b == 'object' && typeof v < 'u'
   ? (v.exports = c())
   : typeof define == 'function' && define.amd
     ? define(c)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Recaptcha = c()));
 })(void 0, function () {
  function o(i, n) {
   if (!(i instanceof n))
    throw new TypeError('Cannot call a class as a function');
  }
  function c(i, n) {
   for (var t = 0; t < n.length; t++) {
    var r = n[t];
    (r.enumerable = r.enumerable || !1),
     (r.configurable = !0),
     'value' in r && (r.writable = !0),
     Object.defineProperty(i, r.key, r);
   }
  }
  function w(i, n, t) {
   return (
    n && c(i.prototype, n),
    t && c(i, t),
    Object.defineProperty(i, 'prototype', { writable: !1 }),
    i
   );
  }
  function _(i, n, t) {
   return (
    n in i
     ? Object.defineProperty(i, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0,
       })
     : (i[n] = t),
    i
   );
  }
  function P(i, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError('Super expression must either be null or a function');
   (i.prototype = Object.create(n && n.prototype, {
    constructor: { value: i, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(i, 'prototype', { writable: !1 }),
    n && p(i, n);
  }
  function u(i) {
   return (
    (u = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
       }),
    u(i)
   );
  }
  function p(i, n) {
   return (
    (p = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (r, e) {
        return (r.__proto__ = e), r;
       }),
    p(i, n)
   );
  }
  function A() {
   if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
   if (typeof Proxy == 'function') return !0;
   try {
    return (
     Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
     ),
     !0
    );
   } catch {
    return !1;
   }
  }
  function d(i) {
   if (i === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return i;
  }
  function F(i, n) {
   if (n && (typeof n == 'object' || typeof n == 'function')) return n;
   if (n !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return d(i);
  }
  function O(i) {
   var n = A();
   return function () {
    var r = u(i),
     e;
    if (n) {
     var a = u(this).constructor;
     e = Reflect.construct(r, arguments, a);
    } else e = r.apply(this, arguments);
    return F(this, e);
   };
  }
  var I = FormValidation.Plugin,
   C = FormValidation.utils.fetch,
   f = (function (i) {
    P(t, i);
    var n = O(t);
    function t(r) {
     var e;
     return (
      o(this, t),
      (e = n.call(this, r)),
      (e.widgetIds = new Map()),
      (e.captchaStatus = 'NotValidated'),
      (e.opts = Object.assign({}, t.DEFAULT_OPTIONS, r)),
      (e.fieldResetHandler = e.onResetField.bind(d(e))),
      (e.preValidateFilter = e.preValidate.bind(d(e))),
      (e.iconPlacedHandler = e.onIconPlaced.bind(d(e))),
      e
     );
    }
    return (
     w(t, [
      {
       key: 'install',
       value: function () {
        var e = this;
        this.core
         .on('core.field.reset', this.fieldResetHandler)
         .on('plugins.icon.placed', this.iconPlacedHandler)
         .registerFilter('validate-pre', this.preValidateFilter);
        var a =
         typeof window[t.LOADED_CALLBACK] > 'u'
          ? function () {}
          : window[t.LOADED_CALLBACK];
        window[t.LOADED_CALLBACK] = function () {
         a();
         var L = {
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
          S = window.grecaptcha.render(e.opts.element, L);
         e.widgetIds.set(e.opts.element, S),
          e.core.addField(t.CAPTCHA_FIELD, {
           validators: {
            promise: {
             message: e.opts.message,
             promise: function (V) {
              var y = e.widgetIds.has(e.opts.element)
               ? window.grecaptcha.getResponse(e.widgetIds.get(e.opts.element))
               : V.value;
              return y === ''
               ? ((e.captchaStatus = 'Invalid'), Promise.resolve({ valid: !1 }))
               : e.opts.backendVerificationUrl === ''
                 ? ((e.captchaStatus = 'Valid'), Promise.resolve({ valid: !0 }))
                 : e.captchaStatus === 'Valid'
                   ? Promise.resolve({ valid: !0 })
                   : C(e.opts.backendVerificationUrl, {
                      method: 'POST',
                      params: _({}, t.CAPTCHA_FIELD, y),
                     })
                      .then(function (m) {
                       var g = ''.concat(m.success) === 'true';
                       return (
                        (e.captchaStatus = g ? 'Valid' : 'Invalid'),
                        Promise.resolve({ meta: m, valid: g })
                       );
                      })
                      .catch(function (m) {
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
         var l = document.createElement('script');
         (l.type = 'text/javascript'),
          (l.async = !0),
          (l.defer = !0),
          (l.src = s),
          document.body.appendChild(l);
        }
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.timer && clearTimeout(this.timer),
         this.core
          .off('core.field.reset', this.fieldResetHandler)
          .off('plugins.icon.placed', this.iconPlacedHandler)
          .deregisterFilter('validate-pre', this.preValidateFilter),
         this.widgetIds.clear();
        var e = this.getScript(),
         a = [].slice.call(
          document.body.querySelectorAll('script[src="'.concat(e, '"]')),
         );
        a.forEach(function (s) {
         return s.parentNode.removeChild(s);
        }),
         this.core.removeField(t.CAPTCHA_FIELD);
       },
      },
      {
       key: 'getScript',
       value: function () {
        var e = this.opts.language ? '&hl='.concat(this.opts.language) : '';
        return 'https://www.google.com/recaptcha/api.js?onload='
         .concat(t.LOADED_CALLBACK, '&render=explicit')
         .concat(e);
       },
      },
      {
       key: 'preValidate',
       value: function () {
        var e = this;
        if (
         this.opts.size === 'invisible' &&
         this.widgetIds.has(this.opts.element)
        ) {
         var a = this.widgetIds.get(this.opts.element);
         return this.captchaStatus === 'Valid'
          ? Promise.resolve()
          : new Promise(function (s, l) {
             window.grecaptcha.execute(a).then(function () {
              e.timer && clearTimeout(e.timer),
               (e.timer = window.setTimeout(s, 1 * 1e3));
             });
            });
        } else return Promise.resolve();
       },
      },
      {
       key: 'onResetField',
       value: function (e) {
        if (
         e.field === t.CAPTCHA_FIELD &&
         this.widgetIds.has(this.opts.element)
        ) {
         var a = this.widgetIds.get(this.opts.element);
         window.grecaptcha.reset(a);
        }
       },
      },
      {
       key: 'onIconPlaced',
       value: function (e) {
        if (e.field === t.CAPTCHA_FIELD)
         if (this.opts.size === 'invisible')
          e.iconElement.style.display = 'none';
         else {
          var a = document.getElementById(this.opts.element);
          a && a.parentNode.insertBefore(e.iconElement, a.nextSibling);
         }
       },
      },
     ]),
     t
    );
   })(I);
  return (
   (f.CAPTCHA_FIELD = 'g-recaptcha-response'),
   (f.DEFAULT_OPTIONS = {
    backendVerificationUrl: '',
    badge: 'bottomright',
    size: 'normal',
    theme: 'light',
   }),
   (f.LOADED_CALLBACK = '___reCaptchaLoaded___'),
   f
  );
 });
});
export default T();