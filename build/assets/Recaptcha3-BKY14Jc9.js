var j = (i, c) => () => (c || i((c = { exports: {} }).exports, c), c.exports);
var S = j((_, y) => {
 (function (i, c) {
  typeof _ == 'object' && typeof y < 'u'
   ? (y.exports = c())
   : typeof define == 'function' && define.amd
     ? define(c)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Recaptcha3 = c()));
 })(void 0, function () {
  function i(e, t) {
   if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
  }
  function c(e, t) {
   for (var n = 0; n < t.length; n++) {
    var o = t[n];
    (o.enumerable = o.enumerable || !1),
     (o.configurable = !0),
     'value' in o && (o.writable = !0),
     Object.defineProperty(e, o.key, o);
   }
  }
  function v(e, t, n) {
   return (
    t && c(e.prototype, t),
    n && c(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function g(e, t, n) {
   return (
    t in e
     ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
       })
     : (e[t] = n),
    e
   );
  }
  function A(e, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && p(e, t);
  }
  function l(e) {
   return (
    (l = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
       }),
    l(e)
   );
  }
  function p(e, t) {
   return (
    (p = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (o, r) {
        return (o.__proto__ = r), o;
       }),
    p(e, t)
   );
  }
  function P() {
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
  function m(e) {
   if (e === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return e;
  }
  function b(e, t) {
   if (t && (typeof t == 'object' || typeof t == 'function')) return t;
   if (t !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return m(e);
  }
  function O(e) {
   var t = P();
   return function () {
    var o = l(e),
     r;
    if (t) {
     var a = l(this).constructor;
     r = Reflect.construct(o, arguments, a);
    } else r = o.apply(this, arguments);
    return b(this, r);
   };
  }
  var w = FormValidation.Plugin,
   C = FormValidation.utils.fetch,
   d = (function (e) {
    A(n, e);
    var t = O(n);
    function n(o) {
     var r;
     return (
      i(this, n),
      (r = t.call(this, o)),
      (r.opts = Object.assign({}, { minimumScore: 0 }, o)),
      (r.iconPlacedHandler = r.onIconPlaced.bind(m(r))),
      r
     );
    }
    return (
     v(n, [
      {
       key: 'install',
       value: function () {
        var r = this;
        this.core.on('plugins.icon.placed', this.iconPlacedHandler);
        var a =
         typeof window[n.LOADED_CALLBACK] > 'u'
          ? function () {}
          : window[n.LOADED_CALLBACK];
        window[n.LOADED_CALLBACK] = function () {
         a();
         var h = document.createElement('input');
         h.setAttribute('type', 'hidden'),
          h.setAttribute('name', n.CAPTCHA_FIELD),
          document.getElementById(r.opts.element).appendChild(h),
          r.core.addField(n.CAPTCHA_FIELD, {
           validators: {
            promise: {
             message: r.opts.message,
             promise: function (I) {
              return new Promise(function (L, E) {
               window.grecaptcha
                .execute(r.opts.siteKey, { action: r.opts.action })
                .then(function (D) {
                 C(r.opts.backendVerificationUrl, {
                  method: 'POST',
                  params: g({}, n.CAPTCHA_FIELD, D),
                 })
                  .then(function (s) {
                   var F =
                    ''.concat(s.success) === 'true' &&
                    s.score >= r.opts.minimumScore;
                   L({
                    message: s.message || r.opts.message,
                    meta: s,
                    valid: F,
                   });
                  })
                  .catch(function (s) {
                   E({ valid: !1 });
                  });
                });
              });
             },
            },
           },
          });
        };
        var u = this.getScript();
        if (!document.body.querySelector('script[src="'.concat(u, '"]'))) {
         var f = document.createElement('script');
         (f.type = 'text/javascript'),
          (f.async = !0),
          (f.defer = !0),
          (f.src = u),
          document.body.appendChild(f);
        }
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.core.off('plugins.icon.placed', this.iconPlacedHandler);
        var r = this.getScript(),
         a = [].slice.call(
          document.body.querySelectorAll('script[src="'.concat(r, '"]')),
         );
        a.forEach(function (u) {
         return u.parentNode.removeChild(u);
        }),
         this.core.removeField(n.CAPTCHA_FIELD);
       },
      },
      {
       key: 'getScript',
       value: function () {
        var r = this.opts.language ? '&hl='.concat(this.opts.language) : '';
        return (
         'https://www.google.com/recaptcha/api.js?' +
         'onload='
          .concat(n.LOADED_CALLBACK, '&render=')
          .concat(this.opts.siteKey)
          .concat(r)
        );
       },
      },
      {
       key: 'onIconPlaced',
       value: function (r) {
        r.field === n.CAPTCHA_FIELD && (r.iconElement.style.display = 'none');
       },
      },
     ]),
     n
    );
   })(w);
  return (
   (d.CAPTCHA_FIELD = '___g-recaptcha-token___'),
   (d.LOADED_CALLBACK = '___reCaptcha3Loaded___'),
   d
  );
 });
});
export default S();