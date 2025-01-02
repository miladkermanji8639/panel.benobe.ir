var B = (c, h) => () => (h || c((h = { exports: {} }).exports, h), h.exports);
var K = B((p, b) => {
 (function (c, h) {
  typeof p == 'object' && typeof b < 'u'
   ? h(p)
   : typeof define == 'function' && define.amd
     ? define(['exports'], h)
     : ((c = typeof globalThis < 'u' ? globalThis : c || self),
       h((c.FormValidation = {})));
 })(void 0, function (c) {
  function h(i) {
   for (
    var t = i.length,
     e = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
     ],
     r = 0,
     n = 0;
    t--;

   )
    (n += e[r][parseInt(i.charAt(t), 10)]), (r = 1 - r);
   return n % 10 === 0 && n > 0;
  }
  function V(i) {
   for (var t = i.length, e = 5, r = 0; r < t; r++)
    e = ((((e || 10) * 2) % 11) + parseInt(i.charAt(r), 10)) % 10;
   return e === 1;
  }
  function E(i, t) {
   t === void 0 && (t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
   for (
    var e = i.length, r = t.length, n = Math.floor(r / 2), s = 0;
    s < e;
    s++
   )
    n = ((((n || r) * 2) % (r + 1)) + t.indexOf(i.charAt(s))) % r;
   return n === 1;
  }
  function P(i) {
   return i
    .split('')
    .map(function (t) {
     var e = t.charCodeAt(0);
     return e >= 65 && e <= 90 ? e - 55 : t;
    })
    .join('')
    .split('')
    .map(function (t) {
     return parseInt(t, 10);
    });
  }
  function A(i) {
   for (var t = P(i), e = 0, r = t.length, n = 0; n < r - 1; ++n)
    e = ((e + t[n]) * 10) % 97;
   return (e += t[r - 1]), e % 97 === 1;
  }
  function O(i) {
   for (
    var t = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
      [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
      [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
      [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
      [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
      [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
      [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
      [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
     ],
     e = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
     ],
     r = i.reverse(),
     n = 0,
     s = 0;
    s < r.length;
    s++
   )
    n = t[n][e[s % 8][r[s]]];
   return n === 0;
  }
  var w = { luhn: h, mod11And10: V, mod37And36: E, mod97And10: A, verhoeff: O };
  function k(i, t, e) {
   if (e || arguments.length === 2)
    for (var r = 0, n = t.length, s; r < n; r++)
     (s || !(r in t)) &&
      (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
   return i.concat(s || Array.prototype.slice.call(t));
  }
  function I(i, t, e, r) {
   var n = (e.getAttribute('type') || '').toLowerCase(),
    s = e.tagName.toLowerCase();
   if (s === 'textarea') return e.value;
   if (s === 'select') {
    var a = e,
     o = a.selectedIndex;
    return o >= 0 ? a.options.item(o).value : '';
   }
   if (s === 'input')
    if (n === 'radio' || n === 'checkbox') {
     var u = r.filter(function (l) {
      return l.checked;
     }).length;
     return u === 0 ? '' : u + '';
    } else return e.value;
   return '';
  }
  function x() {
   return {
    fns: {},
    clear: function () {
     this.fns = {};
    },
    emit: function (i) {
     for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
     (this.fns[i] || []).map(function (r) {
      return r.apply(r, t);
     });
    },
    off: function (i, t) {
     if (this.fns[i]) {
      var e = this.fns[i].indexOf(t);
      e >= 0 && this.fns[i].splice(e, 1);
     }
    },
    on: function (i, t) {
     (this.fns[i] = this.fns[i] || []).push(t);
    },
   };
  }
  function F() {
   return {
    filters: {},
    add: function (i, t) {
     (this.filters[i] = this.filters[i] || []).push(t);
    },
    clear: function () {
     this.filters = {};
    },
    execute: function (i, t, e) {
     if (!this.filters[i] || !this.filters[i].length) return t;
     for (var r = t, n = this.filters[i], s = n.length, a = 0; a < s; a++)
      r = n[a].apply(r, e);
     return r;
    },
    remove: function (i, t) {
     this.filters[i] &&
      (this.filters[i] = this.filters[i].filter(function (e) {
       return e !== t;
      }));
    },
   };
  }
  var N = (function () {
   function i(t, e) {
    (this.fields = {}),
     (this.elements = {}),
     (this.ee = x()),
     (this.filter = F()),
     (this.plugins = {}),
     (this.results = new Map()),
     (this.validators = {}),
     (this.form = t),
     (this.fields = e);
   }
   return (
    (i.prototype.on = function (t, e) {
     return this.ee.on(t, e), this;
    }),
    (i.prototype.off = function (t, e) {
     return this.ee.off(t, e), this;
    }),
    (i.prototype.emit = function (t) {
     for (var e, r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
     return (e = this.ee).emit.apply(e, k([t], r, !1)), this;
    }),
    (i.prototype.registerPlugin = function (t, e) {
     if (this.plugins[t])
      throw new Error('The plguin '.concat(t, ' is registered'));
     return e.setCore(this), e.install(), (this.plugins[t] = e), this;
    }),
    (i.prototype.deregisterPlugin = function (t) {
     var e = this.plugins[t];
     return e && e.uninstall(), delete this.plugins[t], this;
    }),
    (i.prototype.enablePlugin = function (t) {
     var e = this.plugins[t];
     return e && e.enable(), this;
    }),
    (i.prototype.disablePlugin = function (t) {
     var e = this.plugins[t];
     return e && e.disable(), this;
    }),
    (i.prototype.isPluginEnabled = function (t) {
     var e = this.plugins[t];
     return e ? e.isPluginEnabled() : !1;
    }),
    (i.prototype.registerValidator = function (t, e) {
     if (this.validators[t])
      throw new Error('The validator '.concat(t, ' is registered'));
     return (this.validators[t] = e), this;
    }),
    (i.prototype.registerFilter = function (t, e) {
     return this.filter.add(t, e), this;
    }),
    (i.prototype.deregisterFilter = function (t, e) {
     return this.filter.remove(t, e), this;
    }),
    (i.prototype.executeFilter = function (t, e, r) {
     return this.filter.execute(t, e, r);
    }),
    (i.prototype.addField = function (t, e) {
     var r = Object.assign({}, { selector: '', validators: {} }, e);
     return (
      (this.fields[t] = this.fields[t]
       ? {
          selector: r.selector || this.fields[t].selector,
          validators: Object.assign(
           {},
           this.fields[t].validators,
           r.validators,
          ),
         }
       : r),
      (this.elements[t] = this.queryElements(t)),
      this.emit('core.field.added', {
       elements: this.elements[t],
       field: t,
       options: this.fields[t],
      }),
      this
     );
    }),
    (i.prototype.removeField = function (t) {
     if (!this.fields[t])
      throw new Error(
       'The field '.concat(
        t,
        ' validators are not defined. Please ensure the field is added first',
       ),
      );
     var e = this.elements[t],
      r = this.fields[t];
     return (
      delete this.elements[t],
      delete this.fields[t],
      this.emit('core.field.removed', { elements: e, field: t, options: r }),
      this
     );
    }),
    (i.prototype.validate = function () {
     var t = this;
     return (
      this.emit('core.form.validating', { formValidation: this }),
      this.filter
       .execute('validate-pre', Promise.resolve(), [])
       .then(function () {
        return Promise.all(
         Object.keys(t.fields).map(function (e) {
          return t.validateField(e);
         }),
        ).then(function (e) {
         switch (!0) {
          case e.indexOf('Invalid') !== -1:
           return (
            t.emit('core.form.invalid', { formValidation: t }),
            Promise.resolve('Invalid')
           );
          case e.indexOf('NotValidated') !== -1:
           return (
            t.emit('core.form.notvalidated', { formValidation: t }),
            Promise.resolve('NotValidated')
           );
          default:
           return (
            t.emit('core.form.valid', { formValidation: t }),
            Promise.resolve('Valid')
           );
         }
        });
       })
     );
    }),
    (i.prototype.validateField = function (t) {
     var e = this,
      r = this.results.get(t);
     if (r === 'Valid' || r === 'Invalid') return Promise.resolve(r);
     this.emit('core.field.validating', t);
     var n = this.elements[t];
     if (n.length === 0)
      return this.emit('core.field.valid', t), Promise.resolve('Valid');
     var s = n[0].getAttribute('type');
     return s === 'radio' || s === 'checkbox' || n.length === 1
      ? this.validateElement(t, n[0])
      : Promise.all(
         n.map(function (a) {
          return e.validateElement(t, a);
         }),
        ).then(function (a) {
         switch (!0) {
          case a.indexOf('Invalid') !== -1:
           return (
            e.emit('core.field.invalid', t),
            e.results.set(t, 'Invalid'),
            Promise.resolve('Invalid')
           );
          case a.indexOf('NotValidated') !== -1:
           return (
            e.emit('core.field.notvalidated', t),
            e.results.delete(t),
            Promise.resolve('NotValidated')
           );
          default:
           return (
            e.emit('core.field.valid', t),
            e.results.set(t, 'Valid'),
            Promise.resolve('Valid')
           );
         }
        });
    }),
    (i.prototype.validateElement = function (t, e) {
     var r = this;
     this.results.delete(t);
     var n = this.elements[t],
      s = this.filter.execute('element-ignored', !1, [t, e, n]);
     if (s)
      return (
       this.emit('core.element.ignored', { element: e, elements: n, field: t }),
       Promise.resolve('Ignored')
      );
     var a = this.fields[t].validators;
     this.emit('core.element.validating', {
      element: e,
      elements: n,
      field: t,
     });
     var o = Object.keys(a).map(function (u) {
      return function () {
       return r.executeValidator(t, e, u, a[u]);
      };
     });
     return this.waterfall(o)
      .then(function (u) {
       var l = u.indexOf('Invalid') === -1;
       r.emit('core.element.validated', {
        element: e,
        elements: n,
        field: t,
        valid: l,
       });
       var v = e.getAttribute('type');
       return (
        (v === 'radio' || v === 'checkbox' || n.length === 1) &&
         r.emit(l ? 'core.field.valid' : 'core.field.invalid', t),
        Promise.resolve(l ? 'Valid' : 'Invalid')
       );
      })
      .catch(function (u) {
       return (
        r.emit('core.element.notvalidated', {
         element: e,
         elements: n,
         field: t,
        }),
        Promise.resolve(u)
       );
      });
    }),
    (i.prototype.executeValidator = function (t, e, r, n) {
     var s = this,
      a = this.elements[t],
      o = this.filter.execute('validator-name', r, [r, t]);
     if (
      ((n.message = this.filter.execute('validator-message', n.message, [
       this.locale,
       t,
       o,
      ])),
      !this.validators[o] || n.enabled === !1)
     )
      return (
       this.emit('core.validator.validated', {
        element: e,
        elements: a,
        field: t,
        result: this.normalizeResult(t, o, { valid: !0 }),
        validator: o,
       }),
       Promise.resolve('Valid')
      );
     var u = this.validators[o],
      l = this.getElementValue(t, e, o),
      v = this.filter.execute('field-should-validate', !0, [t, e, l, r]);
     if (!v)
      return (
       this.emit('core.validator.notvalidated', {
        element: e,
        elements: a,
        field: t,
        validator: r,
       }),
       Promise.resolve('NotValidated')
      );
     this.emit('core.validator.validating', {
      element: e,
      elements: a,
      field: t,
      validator: r,
     });
     var d = u().validate({
       element: e,
       elements: a,
       field: t,
       l10n: this.localization,
       options: n,
       value: l,
      }),
      f = typeof d.then == 'function';
     if (f)
      return d.then(function ($) {
       var y = s.normalizeResult(t, r, $);
       return (
        s.emit('core.validator.validated', {
         element: e,
         elements: a,
         field: t,
         result: y,
         validator: r,
        }),
        y.valid ? 'Valid' : 'Invalid'
       );
      });
     var g = this.normalizeResult(t, r, d);
     return (
      this.emit('core.validator.validated', {
       element: e,
       elements: a,
       field: t,
       result: g,
       validator: r,
      }),
      Promise.resolve(g.valid ? 'Valid' : 'Invalid')
     );
    }),
    (i.prototype.getElementValue = function (t, e, r) {
     var n = I(this.form, t, e, this.elements[t]);
     return this.filter.execute('field-value', n, [n, t, e, r]);
    }),
    (i.prototype.getElements = function (t) {
     return this.elements[t];
    }),
    (i.prototype.getFields = function () {
     return this.fields;
    }),
    (i.prototype.getFormElement = function () {
     return this.form;
    }),
    (i.prototype.getLocale = function () {
     return this.locale;
    }),
    (i.prototype.getPlugin = function (t) {
     return this.plugins[t];
    }),
    (i.prototype.updateFieldStatus = function (t, e, r) {
     var n = this,
      s = this.elements[t],
      a = s[0].getAttribute('type'),
      o = a === 'radio' || a === 'checkbox' ? [s[0]] : s;
     if (
      (o.forEach(function (u) {
       return n.updateElementStatus(t, u, e, r);
      }),
      r)
     )
      e === 'Invalid' &&
       (this.emit('core.field.invalid', t), this.results.set(t, 'Invalid'));
     else
      switch (e) {
       case 'NotValidated':
        this.emit('core.field.notvalidated', t), this.results.delete(t);
        break;
       case 'Validating':
        this.emit('core.field.validating', t), this.results.delete(t);
        break;
       case 'Valid':
        this.emit('core.field.valid', t), this.results.set(t, 'Valid');
        break;
       case 'Invalid':
        this.emit('core.field.invalid', t), this.results.set(t, 'Invalid');
        break;
      }
     return this;
    }),
    (i.prototype.updateElementStatus = function (t, e, r, n) {
     var s = this,
      a = this.elements[t],
      o = this.fields[t].validators,
      u = n ? [n] : Object.keys(o);
     switch (r) {
      case 'NotValidated':
       u.forEach(function (l) {
        return s.emit('core.validator.notvalidated', {
         element: e,
         elements: a,
         field: t,
         validator: l,
        });
       }),
        this.emit('core.element.notvalidated', {
         element: e,
         elements: a,
         field: t,
        });
       break;
      case 'Validating':
       u.forEach(function (l) {
        return s.emit('core.validator.validating', {
         element: e,
         elements: a,
         field: t,
         validator: l,
        });
       }),
        this.emit('core.element.validating', {
         element: e,
         elements: a,
         field: t,
        });
       break;
      case 'Valid':
       u.forEach(function (l) {
        return s.emit('core.validator.validated', {
         element: e,
         elements: a,
         field: t,
         result: { message: o[l].message, valid: !0 },
         validator: l,
        });
       }),
        this.emit('core.element.validated', {
         element: e,
         elements: a,
         field: t,
         valid: !0,
        });
       break;
      case 'Invalid':
       u.forEach(function (l) {
        return s.emit('core.validator.validated', {
         element: e,
         elements: a,
         field: t,
         result: { message: o[l].message, valid: !1 },
         validator: l,
        });
       }),
        this.emit('core.element.validated', {
         element: e,
         elements: a,
         field: t,
         valid: !1,
        });
       break;
     }
     return this;
    }),
    (i.prototype.resetForm = function (t) {
     var e = this;
     return (
      Object.keys(this.fields).forEach(function (r) {
       return e.resetField(r, t);
      }),
      this.emit('core.form.reset', { formValidation: this, reset: t }),
      this
     );
    }),
    (i.prototype.resetField = function (t, e) {
     if (e) {
      var r = this.elements[t],
       n = r[0].getAttribute('type');
      r.forEach(function (s) {
       n === 'radio' || n === 'checkbox'
        ? (s.removeAttribute('selected'),
          s.removeAttribute('checked'),
          (s.checked = !1))
        : (s.setAttribute('value', ''),
          (s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) &&
           (s.value = ''));
      });
     }
     return (
      this.updateFieldStatus(t, 'NotValidated'),
      this.emit('core.field.reset', { field: t, reset: e }),
      this
     );
    }),
    (i.prototype.revalidateField = function (t) {
     return this.fields[t]
      ? (this.updateFieldStatus(t, 'NotValidated'), this.validateField(t))
      : Promise.resolve('Ignored');
    }),
    (i.prototype.disableValidator = function (t, e) {
     if (!this.fields[t]) return this;
     var r = this.elements[t];
     return (
      this.toggleValidator(!1, t, e),
      this.emit('core.validator.disabled', {
       elements: r,
       field: t,
       formValidation: this,
       validator: e,
      }),
      this
     );
    }),
    (i.prototype.enableValidator = function (t, e) {
     if (!this.fields[t]) return this;
     var r = this.elements[t];
     return (
      this.toggleValidator(!0, t, e),
      this.emit('core.validator.enabled', {
       elements: r,
       field: t,
       formValidation: this,
       validator: e,
      }),
      this
     );
    }),
    (i.prototype.updateValidatorOption = function (t, e, r, n) {
     return (
      this.fields[t] &&
       this.fields[t].validators &&
       this.fields[t].validators[e] &&
       (this.fields[t].validators[e][r] = n),
      this
     );
    }),
    (i.prototype.setFieldOptions = function (t, e) {
     return (this.fields[t] = e), this;
    }),
    (i.prototype.destroy = function () {
     var t = this;
     return (
      Object.keys(this.plugins).forEach(function (e) {
       return t.plugins[e].uninstall();
      }),
      this.ee.clear(),
      this.filter.clear(),
      this.results.clear(),
      (this.plugins = {}),
      this
     );
    }),
    (i.prototype.setLocale = function (t, e) {
     return (this.locale = t), (this.localization = e), this;
    }),
    (i.prototype.waterfall = function (t) {
     return t.reduce(function (e, r) {
      return e.then(function (n) {
       return r().then(function (s) {
        return n.push(s), n;
       });
      });
     }, Promise.resolve([]));
    }),
    (i.prototype.queryElements = function (t) {
     var e = this.fields[t].selector
      ? this.fields[t].selector.charAt(0) === '#'
        ? '[id="'.concat(this.fields[t].selector.substring(1), '"]')
        : this.fields[t].selector
      : '[name="'.concat(t.replace(/"/g, '\\"'), '"]');
     return [].slice.call(this.form.querySelectorAll(e));
    }),
    (i.prototype.normalizeResult = function (t, e, r) {
     var n = this.fields[t].validators[e];
     return Object.assign({}, r, {
      message:
       r.message ||
       (n ? n.message : '') ||
       (this.localization &&
       this.localization[e] &&
       this.localization[e].default
        ? this.localization[e].default
        : '') ||
       'The field '.concat(t, ' is not valid'),
     });
    }),
    (i.prototype.toggleValidator = function (t, e, r) {
     var n = this,
      s = this.fields[e].validators;
     return (
      r && s && s[r]
       ? (this.fields[e].validators[r].enabled = t)
       : r ||
         Object.keys(s).forEach(function (a) {
          return (n.fields[e].validators[a].enabled = t);
         }),
      this.updateFieldStatus(e, 'NotValidated', r)
     );
    }),
    i
   );
  })();
  function j(i, t) {
   var e = Object.assign(
     {},
     { fields: {}, locale: 'en_US', plugins: {}, init: function (n) {} },
     t,
    ),
    r = new N(i, e.fields);
   return (
    r.setLocale(e.locale, e.localization),
    Object.keys(e.plugins).forEach(function (n) {
     return r.registerPlugin(n, e.plugins[n]);
    }),
    e.init(r),
    Object.keys(e.fields).forEach(function (n) {
     return r.addField(n, e.fields[n]);
    }),
    r
   );
  }
  var L = (function () {
   function i(t) {
    (this.opts = t), (this.isEnabled = !0);
   }
   return (
    (i.prototype.setCore = function (t) {
     return (this.core = t), this;
    }),
    (i.prototype.enable = function () {
     return (this.isEnabled = !0), this.onEnabled(), this;
    }),
    (i.prototype.disable = function () {
     return (this.isEnabled = !1), this.onDisabled(), this;
    }),
    (i.prototype.isPluginEnabled = function () {
     return this.isEnabled;
    }),
    (i.prototype.onEnabled = function () {}),
    (i.prototype.onDisabled = function () {}),
    (i.prototype.install = function () {}),
    (i.prototype.uninstall = function () {}),
    i
   );
  })();
  function C(i, t) {
   if (typeof i == 'function') return i.apply(this, t);
   if (typeof i == 'string') {
    var e = i;
    e.substring(e.length - 2) === '()' && (e = e.substring(0, e.length - 2));
    for (
     var r = e.split('.'), n = r.pop(), s = window, a = 0, o = r;
     a < o.length;
     a++
    ) {
     var u = o[a];
     s = s[u];
    }
    return typeof s[n] > 'u' ? null : s[n].apply(this, t);
   }
  }
  var S = function (i, t) {
    t.split(' ').forEach(function (e) {
     i.classList
      ? i.classList.add(e)
      : ' '.concat(i.className, ' ').indexOf(' '.concat(e, ' ')) &&
        (i.className += ' '.concat(e));
    });
   },
   R = function (i, t) {
    t.split(' ').forEach(function (e) {
     i.classList
      ? i.classList.remove(e)
      : (i.className = i.className.replace(e, ''));
    });
   },
   T = function (i, t) {
    var e = [],
     r = [];
    Object.keys(t).forEach(function (n) {
     n && (t[n] ? e.push(n) : r.push(n));
    }),
     r.forEach(function (n) {
      return R(i, n);
     }),
     e.forEach(function (n) {
      return S(i, n);
     });
   },
   M = function (i, t) {
    var e =
     i.matches ||
     i.webkitMatchesSelector ||
     i.mozMatchesSelector ||
     i.msMatchesSelector;
    if (e) return e.call(i, t);
    var r = [].slice.call(i.parentElement.querySelectorAll(t));
    return r.indexOf(i) >= 0;
   },
   U = function (i, t) {
    for (var e = i; e && !M(e, t); ) e = e.parentElement;
    return e;
   },
   D = function (i) {
    return Array(i)
     .fill('')
     .map(function (t) {
      return Math.random().toString(36).charAt(2);
     })
     .join('');
   },
   H = function (i, t) {
    var e = function (r) {
     return Object.keys(r)
      .map(function (n) {
       return ''
        .concat(encodeURIComponent(n), '=')
        .concat(encodeURIComponent(r[n]));
      })
      .join('&');
    };
    return new Promise(function (r, n) {
     var s = Object.assign(
       {},
       { crossDomain: !1, headers: {}, method: 'GET', params: {} },
       t,
      ),
      a = Object.keys(s.params)
       .map(function (f) {
        return ''
         .concat(encodeURIComponent(f), '=')
         .concat(encodeURIComponent(s.params[f]));
       })
       .join('&'),
      o = i.indexOf('?') > -1,
      u =
       s.method === 'GET'
        ? ''
           .concat(i)
           .concat(o ? '&' : '?')
           .concat(a)
        : i;
     if (s.crossDomain) {
      var l = document.createElement('script'),
       v = '___FormValidationFetch_'.concat(D(12), '___');
      (window[v] = function (f) {
       delete window[v], r(f);
      }),
       (l.src = ''
        .concat(u)
        .concat(o ? '&' : '?', 'callback=')
        .concat(v)),
       (l.async = !0),
       l.addEventListener('load', function () {
        l.parentNode.removeChild(l);
       }),
       l.addEventListener('error', function () {
        return n;
       }),
       document.head.appendChild(l);
     } else {
      var d = new XMLHttpRequest();
      d.open(s.method, u),
       d.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
       s.method === 'POST' &&
        d.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
       Object.keys(s.headers).forEach(function (f) {
        return d.setRequestHeader(f, s.headers[f]);
       }),
       d.addEventListener('load', function () {
        r(JSON.parse(this.responseText));
       }),
       d.addEventListener('error', function () {
        return n;
       }),
       d.send(e(s.params));
     }
    });
   },
   q = function (i, t) {
    var e = Array.isArray(t) ? t : [t],
     r = i;
    return (
     e.forEach(function (n) {
      r = r.replace('%s', n);
     }),
     r
    );
   },
   X = function (i, t) {
    return i.classList
     ? i.classList.contains(t)
     : new RegExp('(^| )'.concat(t, '( |$)'), 'gi').test(i.className);
   },
   G = function (i, t, e, r) {
    if (
     isNaN(i) ||
     isNaN(t) ||
     isNaN(e) ||
     i < 1e3 ||
     i > 9999 ||
     t <= 0 ||
     t > 12
    )
     return !1;
    var n = [
     31,
     i % 400 === 0 || (i % 100 !== 0 && i % 4 === 0) ? 29 : 28,
     31,
     30,
     31,
     30,
     31,
     31,
     30,
     31,
     30,
     31,
    ];
    if (e <= 0 || e > n[t - 1]) return !1;
    if (r === !0) {
     var s = new Date(),
      a = s.getFullYear(),
      o = s.getMonth(),
      u = s.getDate();
     return (
      i < a || (i === a && t - 1 < o) || (i === a && t - 1 === o && e < u)
     );
    }
    return !0;
   },
   Q = function (i) {
    return i
     ? Object.entries(i).reduce(function (t, e) {
        var r = e[0],
         n = e[1];
        return n === void 0 || (t[r] = n), t;
       }, {})
     : {};
   },
   J = {
    call: C,
    classSet: T,
    closest: U,
    fetch: H,
    format: q,
    hasClass: X,
    isValidDate: G,
    removeUndefined: Q,
   },
   m = {},
   W = function (i, t) {
    var e = j(i, t);
    return (
     Object.keys(m).forEach(function (r) {
      return e.registerValidator(r, m[r]);
     }),
     e
    );
   };
  (c.Plugin = L),
   (c.algorithms = w),
   (c.formValidation = W),
   (c.utils = J),
   (c.validators = m);
 });
});
export default K();
