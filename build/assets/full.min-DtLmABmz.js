var zn = (U, j) => () => (j || U((j = { exports: {} }).exports, j), j.exports);
var Yn = zn((Ze, Ma) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/bundle
  * @version 2.4.0
  */ (function (U, j) {
  typeof Ze == 'object' && typeof Ma < 'u'
   ? j(Ze)
   : typeof define == 'function' && define.amd
     ? define(['exports'], j)
     : j(
        ((U = typeof globalThis < 'u' ? globalThis : U || self).FormValidation =
         {}),
       );
 })(void 0, function (U) {
  var j,
   _e = { exports: {} },
   Y = {};
  _e.exports = (function () {
   if (j) return Y;
   j = 1;
   var d = {
     luhn: function (r) {
      for (
       var e = r.length,
        t = [
         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
         [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
        ],
        n = 0,
        s = 0;
       e--;

      )
       (s += t[n][parseInt(r.charAt(e), 10)]), (n = 1 - n);
      return s % 10 == 0 && s > 0;
     },
     mod11And10: function (r) {
      for (var e = r.length, t = 5, n = 0; n < e; n++)
       t = (((2 * (t || 10)) % 11) + parseInt(r.charAt(n), 10)) % 10;
      return t === 1;
     },
     mod37And36: function (r, e) {
      e === void 0 && (e = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      for (
       var t = r.length, n = e.length, s = Math.floor(n / 2), c = 0;
       c < t;
       c++
      )
       s = (((2 * (s || n)) % (n + 1)) + e.indexOf(r.charAt(c))) % n;
      return s === 1;
     },
     mod97And10: function (r) {
      for (
       var e = (function (c) {
         return c
          .split('')
          .map(function (p) {
           var h = p.charCodeAt(0);
           return h >= 65 && h <= 90 ? h - 55 : p;
          })
          .join('')
          .split('')
          .map(function (p) {
           return parseInt(p, 10);
          });
        })(r),
        t = 0,
        n = e.length,
        s = 0;
       s < n - 1;
       ++s
      )
       t = (10 * (t + e[s])) % 97;
      return (t += e[n - 1]) % 97 == 1;
     },
     verhoeff: function (r) {
      for (
       var e = [
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
        t = [
         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
         [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
         [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
         [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
         [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
         [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
         [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
        ],
        n = r.reverse(),
        s = 0,
        c = 0;
       c < n.length;
       c++
      )
       s = e[s][t[c % 8][n[c]]];
      return s === 0;
     },
    },
    l = (function () {
     function r(e, t) {
      (this.fields = {}),
       (this.elements = {}),
       (this.ee = {
        fns: {},
        clear: function () {
         this.fns = {};
        },
        emit: function (n) {
         for (var s = [], c = 1; c < arguments.length; c++)
          s[c - 1] = arguments[c];
         (this.fns[n] || []).map(function (p) {
          return p.apply(p, s);
         });
        },
        off: function (n, s) {
         if (this.fns[n]) {
          var c = this.fns[n].indexOf(s);
          c >= 0 && this.fns[n].splice(c, 1);
         }
        },
        on: function (n, s) {
         (this.fns[n] = this.fns[n] || []).push(s);
        },
       }),
       (this.filter = {
        filters: {},
        add: function (n, s) {
         (this.filters[n] = this.filters[n] || []).push(s);
        },
        clear: function () {
         this.filters = {};
        },
        execute: function (n, s, c) {
         if (!this.filters[n] || !this.filters[n].length) return s;
         for (var p = s, h = this.filters[n], y = h.length, E = 0; E < y; E++)
          p = h[E].apply(p, c);
         return p;
        },
        remove: function (n, s) {
         this.filters[n] &&
          (this.filters[n] = this.filters[n].filter(function (c) {
           return c !== s;
          }));
        },
       }),
       (this.plugins = {}),
       (this.results = new Map()),
       (this.validators = {}),
       (this.form = e),
       (this.fields = t);
     }
     return (
      (r.prototype.on = function (e, t) {
       return this.ee.on(e, t), this;
      }),
      (r.prototype.off = function (e, t) {
       return this.ee.off(e, t), this;
      }),
      (r.prototype.emit = function (e) {
       for (var t, n = [], s = 1; s < arguments.length; s++)
        n[s - 1] = arguments[s];
       return (
        (t = this.ee).emit.apply(
         t,
         (function (c, p, h) {
          if (h || arguments.length === 2)
           for (var y, E = 0, S = p.length; E < S; E++)
            (!y && E in p) ||
             (y || (y = Array.prototype.slice.call(p, 0, E)), (y[E] = p[E]));
          return c.concat(y || Array.prototype.slice.call(p));
         })([e], n, !1),
        ),
        this
       );
      }),
      (r.prototype.registerPlugin = function (e, t) {
       if (this.plugins[e])
        throw new Error('The plguin '.concat(e, ' is registered'));
       return t.setCore(this), t.install(), (this.plugins[e] = t), this;
      }),
      (r.prototype.deregisterPlugin = function (e) {
       var t = this.plugins[e];
       return t && t.uninstall(), delete this.plugins[e], this;
      }),
      (r.prototype.enablePlugin = function (e) {
       var t = this.plugins[e];
       return t && t.enable(), this;
      }),
      (r.prototype.disablePlugin = function (e) {
       var t = this.plugins[e];
       return t && t.disable(), this;
      }),
      (r.prototype.isPluginEnabled = function (e) {
       var t = this.plugins[e];
       return !!t && t.isPluginEnabled();
      }),
      (r.prototype.registerValidator = function (e, t) {
       if (this.validators[e])
        throw new Error('The validator '.concat(e, ' is registered'));
       return (this.validators[e] = t), this;
      }),
      (r.prototype.registerFilter = function (e, t) {
       return this.filter.add(e, t), this;
      }),
      (r.prototype.deregisterFilter = function (e, t) {
       return this.filter.remove(e, t), this;
      }),
      (r.prototype.executeFilter = function (e, t, n) {
       return this.filter.execute(e, t, n);
      }),
      (r.prototype.addField = function (e, t) {
       var n = Object.assign({}, { selector: '', validators: {} }, t);
       return (
        (this.fields[e] = this.fields[e]
         ? {
            selector: n.selector || this.fields[e].selector,
            validators: Object.assign(
             {},
             this.fields[e].validators,
             n.validators,
            ),
           }
         : n),
        (this.elements[e] = this.queryElements(e)),
        this.emit('core.field.added', {
         elements: this.elements[e],
         field: e,
         options: this.fields[e],
        }),
        this
       );
      }),
      (r.prototype.removeField = function (e) {
       if (!this.fields[e])
        throw new Error(
         'The field '.concat(
          e,
          ' validators are not defined. Please ensure the field is added first',
         ),
        );
       var t = this.elements[e],
        n = this.fields[e];
       return (
        delete this.elements[e],
        delete this.fields[e],
        this.emit('core.field.removed', { elements: t, field: e, options: n }),
        this
       );
      }),
      (r.prototype.validate = function () {
       var e = this;
       return (
        this.emit('core.form.validating', { formValidation: this }),
        this.filter
         .execute('validate-pre', Promise.resolve(), [])
         .then(function () {
          return Promise.all(
           Object.keys(e.fields).map(function (t) {
            return e.validateField(t);
           }),
          ).then(function (t) {
           switch (!0) {
            case t.indexOf('Invalid') !== -1:
             return (
              e.emit('core.form.invalid', { formValidation: e }),
              Promise.resolve('Invalid')
             );
            case t.indexOf('NotValidated') !== -1:
             return (
              e.emit('core.form.notvalidated', { formValidation: e }),
              Promise.resolve('NotValidated')
             );
            default:
             return (
              e.emit('core.form.valid', { formValidation: e }),
              Promise.resolve('Valid')
             );
           }
          });
         })
       );
      }),
      (r.prototype.validateField = function (e) {
       var t = this,
        n = this.results.get(e);
       if (n === 'Valid' || n === 'Invalid') return Promise.resolve(n);
       this.emit('core.field.validating', e);
       var s = this.elements[e];
       if (s.length === 0)
        return this.emit('core.field.valid', e), Promise.resolve('Valid');
       var c = s[0].getAttribute('type');
       return c === 'radio' || c === 'checkbox' || s.length === 1
        ? this.validateElement(e, s[0])
        : Promise.all(
           s.map(function (p) {
            return t.validateElement(e, p);
           }),
          ).then(function (p) {
           switch (!0) {
            case p.indexOf('Invalid') !== -1:
             return (
              t.emit('core.field.invalid', e),
              t.results.set(e, 'Invalid'),
              Promise.resolve('Invalid')
             );
            case p.indexOf('NotValidated') !== -1:
             return (
              t.emit('core.field.notvalidated', e),
              t.results.delete(e),
              Promise.resolve('NotValidated')
             );
            default:
             return (
              t.emit('core.field.valid', e),
              t.results.set(e, 'Valid'),
              Promise.resolve('Valid')
             );
           }
          });
      }),
      (r.prototype.validateElement = function (e, t) {
       var n = this;
       this.results.delete(e);
       var s = this.elements[e];
       if (this.filter.execute('element-ignored', !1, [e, t, s]))
        return (
         this.emit('core.element.ignored', {
          element: t,
          elements: s,
          field: e,
         }),
         Promise.resolve('Ignored')
        );
       var c = this.fields[e].validators;
       this.emit('core.element.validating', {
        element: t,
        elements: s,
        field: e,
       });
       var p = Object.keys(c).map(function (h) {
        return function () {
         return n.executeValidator(e, t, h, c[h]);
        };
       });
       return this.waterfall(p)
        .then(function (h) {
         var y = h.indexOf('Invalid') === -1;
         n.emit('core.element.validated', {
          element: t,
          elements: s,
          field: e,
          valid: y,
         });
         var E = t.getAttribute('type');
         return (
          (E !== 'radio' && E !== 'checkbox' && s.length !== 1) ||
           n.emit(y ? 'core.field.valid' : 'core.field.invalid', e),
          Promise.resolve(y ? 'Valid' : 'Invalid')
         );
        })
        .catch(function (h) {
         return (
          n.emit('core.element.notvalidated', {
           element: t,
           elements: s,
           field: e,
          }),
          Promise.resolve(h)
         );
        });
      }),
      (r.prototype.executeValidator = function (e, t, n, s) {
       var c = this,
        p = this.elements[e],
        h = this.filter.execute('validator-name', n, [n, e]);
       if (
        ((s.message = this.filter.execute('validator-message', s.message, [
         this.locale,
         e,
         h,
        ])),
        !this.validators[h] || s.enabled === !1)
       )
        return (
         this.emit('core.validator.validated', {
          element: t,
          elements: p,
          field: e,
          result: this.normalizeResult(e, h, { valid: !0 }),
          validator: h,
         }),
         Promise.resolve('Valid')
        );
       var y = this.validators[h],
        E = this.getElementValue(e, t, h);
       if (!this.filter.execute('field-should-validate', !0, [e, t, E, n]))
        return (
         this.emit('core.validator.notvalidated', {
          element: t,
          elements: p,
          field: e,
          validator: n,
         }),
         Promise.resolve('NotValidated')
        );
       this.emit('core.validator.validating', {
        element: t,
        elements: p,
        field: e,
        validator: n,
       });
       var S = y().validate({
        element: t,
        elements: p,
        field: e,
        l10n: this.localization,
        options: s,
        value: E,
       });
       if (typeof S.then == 'function')
        return S.then(function ($) {
         var w = c.normalizeResult(e, n, $);
         return (
          c.emit('core.validator.validated', {
           element: t,
           elements: p,
           field: e,
           result: w,
           validator: n,
          }),
          w.valid ? 'Valid' : 'Invalid'
         );
        });
       var N = this.normalizeResult(e, n, S);
       return (
        this.emit('core.validator.validated', {
         element: t,
         elements: p,
         field: e,
         result: N,
         validator: n,
        }),
        Promise.resolve(N.valid ? 'Valid' : 'Invalid')
       );
      }),
      (r.prototype.getElementValue = function (e, t, n) {
       var s = (function (c, p, h, y) {
        var E = (h.getAttribute('type') || '').toLowerCase(),
         S = h.tagName.toLowerCase();
        if (S === 'textarea') return h.value;
        if (S === 'select') {
         var N = h,
          $ = N.selectedIndex;
         return $ >= 0 ? N.options.item($).value : '';
        }
        if (S === 'input') {
         if (E === 'radio' || E === 'checkbox') {
          var w = y.filter(function (_) {
           return _.checked;
          }).length;
          return w === 0 ? '' : w + '';
         }
         return h.value;
        }
        return '';
       })(this.form, 0, t, this.elements[e]);
       return this.filter.execute('field-value', s, [s, e, t, n]);
      }),
      (r.prototype.getElements = function (e) {
       return this.elements[e];
      }),
      (r.prototype.getFields = function () {
       return this.fields;
      }),
      (r.prototype.getFormElement = function () {
       return this.form;
      }),
      (r.prototype.getLocale = function () {
       return this.locale;
      }),
      (r.prototype.getPlugin = function (e) {
       return this.plugins[e];
      }),
      (r.prototype.updateFieldStatus = function (e, t, n) {
       var s = this,
        c = this.elements[e],
        p = c[0].getAttribute('type');
       if (
        ((p === 'radio' || p === 'checkbox' ? [c[0]] : c).forEach(function (h) {
         return s.updateElementStatus(e, h, t, n);
        }),
        n)
       )
        t === 'Invalid' &&
         (this.emit('core.field.invalid', e), this.results.set(e, 'Invalid'));
       else
        switch (t) {
         case 'NotValidated':
          this.emit('core.field.notvalidated', e), this.results.delete(e);
          break;
         case 'Validating':
          this.emit('core.field.validating', e), this.results.delete(e);
          break;
         case 'Valid':
          this.emit('core.field.valid', e), this.results.set(e, 'Valid');
          break;
         case 'Invalid':
          this.emit('core.field.invalid', e), this.results.set(e, 'Invalid');
        }
       return this;
      }),
      (r.prototype.updateElementStatus = function (e, t, n, s) {
       var c = this,
        p = this.elements[e],
        h = this.fields[e].validators,
        y = s ? [s] : Object.keys(h);
       switch (n) {
        case 'NotValidated':
         y.forEach(function (E) {
          return c.emit('core.validator.notvalidated', {
           element: t,
           elements: p,
           field: e,
           validator: E,
          });
         }),
          this.emit('core.element.notvalidated', {
           element: t,
           elements: p,
           field: e,
          });
         break;
        case 'Validating':
         y.forEach(function (E) {
          return c.emit('core.validator.validating', {
           element: t,
           elements: p,
           field: e,
           validator: E,
          });
         }),
          this.emit('core.element.validating', {
           element: t,
           elements: p,
           field: e,
          });
         break;
        case 'Valid':
         y.forEach(function (E) {
          return c.emit('core.validator.validated', {
           element: t,
           elements: p,
           field: e,
           result: { message: h[E].message, valid: !0 },
           validator: E,
          });
         }),
          this.emit('core.element.validated', {
           element: t,
           elements: p,
           field: e,
           valid: !0,
          });
         break;
        case 'Invalid':
         y.forEach(function (E) {
          return c.emit('core.validator.validated', {
           element: t,
           elements: p,
           field: e,
           result: { message: h[E].message, valid: !1 },
           validator: E,
          });
         }),
          this.emit('core.element.validated', {
           element: t,
           elements: p,
           field: e,
           valid: !1,
          });
       }
       return this;
      }),
      (r.prototype.resetForm = function (e) {
       var t = this;
       return (
        Object.keys(this.fields).forEach(function (n) {
         return t.resetField(n, e);
        }),
        this.emit('core.form.reset', { formValidation: this, reset: e }),
        this
       );
      }),
      (r.prototype.resetField = function (e, t) {
       if (t) {
        var n = this.elements[e],
         s = n[0].getAttribute('type');
        n.forEach(function (c) {
         s === 'radio' || s === 'checkbox'
          ? (c.removeAttribute('selected'),
            c.removeAttribute('checked'),
            (c.checked = !1))
          : (c.setAttribute('value', ''),
            (c instanceof HTMLInputElement ||
             c instanceof HTMLTextAreaElement) &&
             (c.value = ''));
        });
       }
       return (
        this.updateFieldStatus(e, 'NotValidated'),
        this.emit('core.field.reset', { field: e, reset: t }),
        this
       );
      }),
      (r.prototype.revalidateField = function (e) {
       return this.fields[e]
        ? (this.updateFieldStatus(e, 'NotValidated'), this.validateField(e))
        : Promise.resolve('Ignored');
      }),
      (r.prototype.disableValidator = function (e, t) {
       if (!this.fields[e]) return this;
       var n = this.elements[e];
       return (
        this.toggleValidator(!1, e, t),
        this.emit('core.validator.disabled', {
         elements: n,
         field: e,
         formValidation: this,
         validator: t,
        }),
        this
       );
      }),
      (r.prototype.enableValidator = function (e, t) {
       if (!this.fields[e]) return this;
       var n = this.elements[e];
       return (
        this.toggleValidator(!0, e, t),
        this.emit('core.validator.enabled', {
         elements: n,
         field: e,
         formValidation: this,
         validator: t,
        }),
        this
       );
      }),
      (r.prototype.updateValidatorOption = function (e, t, n, s) {
       return (
        this.fields[e] &&
         this.fields[e].validators &&
         this.fields[e].validators[t] &&
         (this.fields[e].validators[t][n] = s),
        this
       );
      }),
      (r.prototype.setFieldOptions = function (e, t) {
       return (this.fields[e] = t), this;
      }),
      (r.prototype.destroy = function () {
       var e = this;
       return (
        Object.keys(this.plugins).forEach(function (t) {
         return e.plugins[t].uninstall();
        }),
        this.ee.clear(),
        this.filter.clear(),
        this.results.clear(),
        (this.plugins = {}),
        this
       );
      }),
      (r.prototype.setLocale = function (e, t) {
       return (this.locale = e), (this.localization = t), this;
      }),
      (r.prototype.waterfall = function (e) {
       return e.reduce(function (t, n) {
        return t.then(function (s) {
         return n().then(function (c) {
          return s.push(c), s;
         });
        });
       }, Promise.resolve([]));
      }),
      (r.prototype.queryElements = function (e) {
       var t = this.fields[e].selector
        ? this.fields[e].selector.charAt(0) === '#'
          ? '[id="'.concat(this.fields[e].selector.substring(1), '"]')
          : this.fields[e].selector
        : '[name="'.concat(e.replace(/"/g, '\\"'), '"]');
       return [].slice.call(this.form.querySelectorAll(t));
      }),
      (r.prototype.normalizeResult = function (e, t, n) {
       var s = this.fields[e].validators[t];
       return Object.assign({}, n, {
        message:
         n.message ||
         (s ? s.message : '') ||
         (this.localization &&
         this.localization[t] &&
         this.localization[t].default
          ? this.localization[t].default
          : '') ||
         'The field '.concat(e, ' is not valid'),
       });
      }),
      (r.prototype.toggleValidator = function (e, t, n) {
       var s = this,
        c = this.fields[t].validators;
       return (
        n && c && c[n]
         ? (this.fields[t].validators[n].enabled = e)
         : n ||
           Object.keys(c).forEach(function (p) {
            return (s.fields[t].validators[p].enabled = e);
           }),
        this.updateFieldStatus(t, 'NotValidated', n)
       );
      }),
      r
     );
    })(),
    u = (function () {
     function r(e) {
      (this.opts = e), (this.isEnabled = !0);
     }
     return (
      (r.prototype.setCore = function (e) {
       return (this.core = e), this;
      }),
      (r.prototype.enable = function () {
       return (this.isEnabled = !0), this.onEnabled(), this;
      }),
      (r.prototype.disable = function () {
       return (this.isEnabled = !1), this.onDisabled(), this;
      }),
      (r.prototype.isPluginEnabled = function () {
       return this.isEnabled;
      }),
      (r.prototype.onEnabled = function () {}),
      (r.prototype.onDisabled = function () {}),
      (r.prototype.install = function () {}),
      (r.prototype.uninstall = function () {}),
      r
     );
    })(),
    o = function (r, e) {
     var t =
      r.matches ||
      r.webkitMatchesSelector ||
      r.mozMatchesSelector ||
      r.msMatchesSelector;
     return t
      ? t.call(r, e)
      : [].slice.call(r.parentElement.querySelectorAll(e)).indexOf(r) >= 0;
    },
    a = {
     call: function (r, e) {
      if (typeof r == 'function') return r.apply(this, e);
      if (typeof r == 'string') {
       var t = r;
       t.substring(t.length - 2) === '()' && (t = t.substring(0, t.length - 2));
       for (
        var n = t.split('.'), s = n.pop(), c = window, p = 0, h = n;
        p < h.length;
        p++
       )
        c = c[h[p]];
       return c[s] === void 0 ? null : c[s].apply(this, e);
      }
     },
     classSet: function (r, e) {
      var t = [],
       n = [];
      Object.keys(e).forEach(function (s) {
       s && (e[s] ? t.push(s) : n.push(s));
      }),
       n.forEach(function (s) {
        return (function (c, p) {
         p.split(' ').forEach(function (h) {
          c.classList
           ? c.classList.remove(h)
           : (c.className = c.className.replace(h, ''));
         });
        })(r, s);
       }),
       t.forEach(function (s) {
        return (function (c, p) {
         p.split(' ').forEach(function (h) {
          c.classList
           ? c.classList.add(h)
           : ' '.concat(c.className, ' ').indexOf(' '.concat(h, ' ')) &&
             (c.className += ' '.concat(h));
         });
        })(r, s);
       });
     },
     closest: function (r, e) {
      for (var t = r; t && !o(t, e); ) t = t.parentElement;
      return t;
     },
     fetch: function (r, e) {
      return new Promise(function (t, n) {
       var s,
        c = Object.assign(
         {},
         { crossDomain: !1, headers: {}, method: 'GET', params: {} },
         e,
        ),
        p = Object.keys(c.params)
         .map(function ($) {
          return ''
           .concat(encodeURIComponent($), '=')
           .concat(encodeURIComponent(c.params[$]));
         })
         .join('&'),
        h = r.indexOf('?') > -1,
        y =
         c.method === 'GET'
          ? ''
             .concat(r)
             .concat(h ? '&' : '?')
             .concat(p)
          : r;
       if (c.crossDomain) {
        var E = document.createElement('script'),
         S = '___FormValidationFetch_'.concat(
          Array(12)
           .fill('')
           .map(function ($) {
            return Math.random().toString(36).charAt(2);
           })
           .join(''),
          '___',
         );
        (window[S] = function ($) {
         delete window[S], t($);
        }),
         (E.src = ''
          .concat(y)
          .concat(h ? '&' : '?', 'callback=')
          .concat(S)),
         (E.async = !0),
         E.addEventListener('load', function () {
          E.parentNode.removeChild(E);
         }),
         E.addEventListener('error', function () {
          return n;
         }),
         document.head.appendChild(E);
       } else {
        var N = new XMLHttpRequest();
        N.open(c.method, y),
         N.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
         c.method === 'POST' &&
          N.setRequestHeader(
           'Content-Type',
           'application/x-www-form-urlencoded',
          ),
         Object.keys(c.headers).forEach(function ($) {
          return N.setRequestHeader($, c.headers[$]);
         }),
         N.addEventListener('load', function () {
          t(JSON.parse(this.responseText));
         }),
         N.addEventListener('error', function () {
          return n;
         }),
         N.send(
          ((s = c.params),
          Object.keys(s)
           .map(function ($) {
            return ''
             .concat(encodeURIComponent($), '=')
             .concat(encodeURIComponent(s[$]));
           })
           .join('&')),
         );
       }
      });
     },
     format: function (r, e) {
      var t = Array.isArray(e) ? e : [e],
       n = r;
      return (
       t.forEach(function (s) {
        n = n.replace('%s', s);
       }),
       n
      );
     },
     hasClass: function (r, e) {
      return r.classList
       ? r.classList.contains(e)
       : new RegExp('(^| )'.concat(e, '( |$)'), 'gi').test(r.className);
     },
     isValidDate: function (r, e, t, n) {
      if (
       isNaN(r) ||
       isNaN(e) ||
       isNaN(t) ||
       r < 1e3 ||
       r > 9999 ||
       e <= 0 ||
       e > 12 ||
       t <= 0 ||
       t >
        [
         31,
         r % 400 == 0 || (r % 100 != 0 && r % 4 == 0) ? 29 : 28,
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
        ][e - 1]
      )
       return !1;
      if (n === !0) {
       var s = new Date(),
        c = s.getFullYear(),
        p = s.getMonth(),
        h = s.getDate();
       return (
        r < c || (r === c && e - 1 < p) || (r === c && e - 1 === p && t < h)
       );
      }
      return !0;
     },
     removeUndefined: function (r) {
      return r
       ? Object.entries(r).reduce(function (e, t) {
          var n = t[0],
           s = t[1];
          return s === void 0 || (e[n] = s), e;
         }, {})
       : {};
     },
    };
   return (
    (Y.Plugin = u),
    (Y.algorithms = d),
    (Y.formValidation = function (r, e) {
     var t = Object.assign(
       {},
       { fields: {}, locale: 'en_US', plugins: {}, init: function (s) {} },
       e,
      ),
      n = new l(r, t.fields);
     return (
      n.setLocale(t.locale, t.localization),
      Object.keys(t.plugins).forEach(function (s) {
       return n.registerPlugin(s, t.plugins[s]);
      }),
      t.init(n),
      Object.keys(t.fields).forEach(function (s) {
       return n.addField(s, t.fields[s]);
      }),
      n
     );
    }),
    (Y.utils = a),
    Y
   );
  })();
  var Be,
   T = _e.exports,
   Ge = { exports: {} },
   q = {};
  Ge.exports = (function () {
   if (Be) return q;
   Be = 1;
   var d = function (u, o) {
     return (
      (d =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (a, r) {
         a.__proto__ = r;
        }) ||
       function (a, r) {
        for (var e in r)
         Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
       }),
      d(u, o)
     );
    },
    l = (function (u) {
     function o(a) {
      var r = u.call(this, a) || this;
      return (
       (r.opts = a || {}),
       (r.validatorNameFilter = r.getValidatorName.bind(r)),
       r
      );
     }
     return (
      (function (a, r) {
       if (typeof r != 'function' && r !== null)
        throw new TypeError(
         'Class extends value ' + String(r) + ' is not a constructor or null',
        );
       function e() {
        this.constructor = a;
       }
       d(a, r),
        (a.prototype =
         r === null
          ? Object.create(r)
          : ((e.prototype = r.prototype), new e()));
      })(o, u),
      (o.prototype.install = function () {
       this.core.registerFilter('validator-name', this.validatorNameFilter);
      }),
      (o.prototype.uninstall = function () {
       this.core.deregisterFilter('validator-name', this.validatorNameFilter);
      }),
      (o.prototype.getValidatorName = function (a, r) {
       return (this.isEnabled && this.opts[a]) || a;
      }),
      o
     );
    })(T.Plugin);
   return (q.Alias = l), q;
  })();
  var Ue,
   Ta = Ge.exports,
   je = { exports: {} },
   Q = {};
  je.exports = (function () {
   if (Ue) return Q;
   Ue = 1;
   var d = function (u, o) {
     return (
      (d =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (a, r) {
         a.__proto__ = r;
        }) ||
       function (a, r) {
        for (var e in r)
         Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
       }),
      d(u, o)
     );
    },
    l = (function (u) {
     function o() {
      var a = u.call(this, {}) || this;
      return (
       (a.elementValidatedHandler = a.onElementValidated.bind(a)),
       (a.fieldValidHandler = a.onFieldValid.bind(a)),
       (a.fieldInvalidHandler = a.onFieldInvalid.bind(a)),
       (a.messageDisplayedHandler = a.onMessageDisplayed.bind(a)),
       a
      );
     }
     return (
      (function (a, r) {
       if (typeof r != 'function' && r !== null)
        throw new TypeError(
         'Class extends value ' + String(r) + ' is not a constructor or null',
        );
       function e() {
        this.constructor = a;
       }
       d(a, r),
        (a.prototype =
         r === null
          ? Object.create(r)
          : ((e.prototype = r.prototype), new e()));
      })(o, u),
      (o.prototype.install = function () {
       this.core
        .on('core.field.valid', this.fieldValidHandler)
        .on('core.field.invalid', this.fieldInvalidHandler)
        .on('core.element.validated', this.elementValidatedHandler)
        .on('plugins.message.displayed', this.messageDisplayedHandler);
      }),
      (o.prototype.uninstall = function () {
       this.core
        .off('core.field.valid', this.fieldValidHandler)
        .off('core.field.invalid', this.fieldInvalidHandler)
        .off('core.element.validated', this.elementValidatedHandler)
        .off('plugins.message.displayed', this.messageDisplayedHandler);
      }),
      (o.prototype.onElementValidated = function (a) {
       a.valid &&
        (a.element.setAttribute('aria-invalid', 'false'),
        a.element.removeAttribute('aria-describedby'));
      }),
      (o.prototype.onFieldValid = function (a) {
       var r = this.core.getElements(a);
       r &&
        r.forEach(function (e) {
         e.setAttribute('aria-invalid', 'false'),
          e.removeAttribute('aria-describedby');
        });
      }),
      (o.prototype.onFieldInvalid = function (a) {
       var r = this.core.getElements(a);
       r &&
        r.forEach(function (e) {
         return e.setAttribute('aria-invalid', 'true');
        });
      }),
      (o.prototype.onMessageDisplayed = function (a) {
       a.messageElement.setAttribute('role', 'alert'),
        a.messageElement.setAttribute('aria-hidden', 'false');
       var r = this.core.getElements(a.field),
        e = r.indexOf(a.element),
        t = 'js-fv-'
         .concat(a.field, '-')
         .concat(e, '-')
         .concat(Date.now(), '-message');
       a.messageElement.setAttribute('id', t),
        a.element.setAttribute('aria-describedby', t);
       var n = a.element.getAttribute('type');
       (n !== 'radio' && n !== 'checkbox') ||
        r.forEach(function (s) {
         return s.setAttribute('aria-describedby', t);
        });
      }),
      o
     );
    })(T.Plugin);
   return (Q.Aria = l), Q;
  })();
  var Ke,
   La = je.exports,
   ze = { exports: {} },
   ee = {};
  ze.exports = (function () {
   if (Ke) return ee;
   Ke = 1;
   var d = function (u, o) {
     return (
      (d =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (a, r) {
         a.__proto__ = r;
        }) ||
       function (a, r) {
        for (var e in r)
         Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
       }),
      d(u, o)
     );
    },
    l = (function (u) {
     function o(a) {
      var r = u.call(this, a) || this;
      return (
       (r.addedFields = new Map()),
       (r.opts = Object.assign(
        {},
        { html5Input: !1, pluginPrefix: 'data-fvp-', prefix: 'data-fv-' },
        a,
       )),
       (r.fieldAddedHandler = r.onFieldAdded.bind(r)),
       (r.fieldRemovedHandler = r.onFieldRemoved.bind(r)),
       r
      );
     }
     return (
      (function (a, r) {
       if (typeof r != 'function' && r !== null)
        throw new TypeError(
         'Class extends value ' + String(r) + ' is not a constructor or null',
        );
       function e() {
        this.constructor = a;
       }
       d(a, r),
        (a.prototype =
         r === null
          ? Object.create(r)
          : ((e.prototype = r.prototype), new e()));
      })(o, u),
      (o.prototype.install = function () {
       var a = this;
       this.parsePlugins();
       var r = this.parseOptions();
       Object.keys(r).forEach(function (e) {
        a.addedFields.has(e) || a.addedFields.set(e, !0),
         a.core.addField(e, r[e]);
       }),
        this.core
         .on('core.field.added', this.fieldAddedHandler)
         .on('core.field.removed', this.fieldRemovedHandler);
      }),
      (o.prototype.uninstall = function () {
       this.addedFields.clear(),
        this.core
         .off('core.field.added', this.fieldAddedHandler)
         .off('core.field.removed', this.fieldRemovedHandler);
      }),
      (o.prototype.onFieldAdded = function (a) {
       var r = this,
        e = a.elements;
       e &&
        e.length !== 0 &&
        !this.addedFields.has(a.field) &&
        (this.addedFields.set(a.field, !0),
        e.forEach(function (t) {
         var n = r.parseElement(t);
         if (!r.isEmptyOption(n)) {
          var s = {
           selector: a.options.selector,
           validators: Object.assign(
            {},
            a.options.validators || {},
            n.validators,
           ),
          };
          r.core.setFieldOptions(a.field, s);
         }
        }));
      }),
      (o.prototype.onFieldRemoved = function (a) {
       a.field &&
        this.addedFields.has(a.field) &&
        this.addedFields.delete(a.field);
      }),
      (o.prototype.parseOptions = function () {
       var a = this,
        r = this.opts.prefix,
        e = {},
        t = this.core.getFields(),
        n = this.core.getFormElement();
       return (
        [].slice
         .call(n.querySelectorAll('[name], ['.concat(r, 'field]')))
         .forEach(function (s) {
          var c = a.parseElement(s);
          if (!a.isEmptyOption(c)) {
           var p =
            s.getAttribute('name') || s.getAttribute(''.concat(r, 'field'));
           e[p] = Object.assign({}, e[p], c);
          }
         }),
        Object.keys(e).forEach(function (s) {
         Object.keys(e[s].validators).forEach(function (c) {
          (e[s].validators[c].enabled = e[s].validators[c].enabled || !1),
           t[s] &&
            t[s].validators &&
            t[s].validators[c] &&
            Object.assign(e[s].validators[c], t[s].validators[c]);
         });
        }),
        Object.assign({}, t, e)
       );
      }),
      (o.prototype.createPluginInstance = function (a, r) {
       for (
        var e = a.split('.'), t = window || this, n = 0, s = e.length;
        n < s;
        n++
       )
        t = t[e[n]];
       if (typeof t != 'function')
        throw new Error('the plugin '.concat(a, " doesn't exist"));
       return new t(r);
      }),
      (o.prototype.parsePlugins = function () {
       for (
        var a,
         r = this,
         e = this.core.getFormElement(),
         t = new RegExp(
          '^'.concat(
           this.opts.pluginPrefix,
           '([a-z0-9-]+)(___)*([a-z0-9-]+)*$',
          ),
         ),
         n = e.attributes.length,
         s = {},
         c = 0;
        c < n;
        c++
       ) {
        var p = e.attributes[c].name,
         h = e.attributes[c].value,
         y = t.exec(p);
        if (y && y.length === 4) {
         var E = this.toCamelCase(y[1]);
         s[E] = Object.assign(
          {},
          y[3]
           ? (((a = {})[this.toCamelCase(y[3])] = h), a)
           : { enabled: h === '' || h === 'true' },
          s[E],
         );
        }
       }
       Object.keys(s).forEach(function (S) {
        var N = s[S],
         $ = N.enabled,
         w = N.class;
        if ($ && w) {
         delete N.enabled, delete N.clazz;
         var _ = r.createPluginInstance(w, N);
         r.core.registerPlugin(S, _);
        }
       });
      }),
      (o.prototype.isEmptyOption = function (a) {
       var r = a.validators;
       return Object.keys(r).length === 0 && r.constructor === Object;
      }),
      (o.prototype.parseElement = function (a) {
       for (
        var r = new RegExp(
          '^'.concat(this.opts.prefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
         ),
         e = a.attributes.length,
         t = {},
         n = a.getAttribute('type'),
         s = 0;
        s < e;
        s++
       ) {
        var c = a.attributes[s].name,
         p = a.attributes[s].value;
        if (this.opts.html5Input)
         switch (!0) {
          case c === 'minlength':
           t.stringLength = Object.assign(
            {},
            { enabled: !0, min: parseInt(p, 10) },
            t.stringLength,
           );
           break;
          case c === 'maxlength':
           t.stringLength = Object.assign(
            {},
            { enabled: !0, max: parseInt(p, 10) },
            t.stringLength,
           );
           break;
          case c === 'pattern':
           t.regexp = Object.assign({}, { enabled: !0, regexp: p }, t.regexp);
           break;
          case c === 'required':
           t.notEmpty = Object.assign({}, { enabled: !0 }, t.notEmpty);
           break;
          case c === 'type' && p === 'color':
           t.color = Object.assign({}, { enabled: !0, type: 'hex' }, t.color);
           break;
          case c === 'type' && p === 'email':
           t.emailAddress = Object.assign({}, { enabled: !0 }, t.emailAddress);
           break;
          case c === 'type' && p === 'url':
           t.uri = Object.assign({}, { enabled: !0 }, t.uri);
           break;
          case c === 'type' && p === 'range':
           t.between = Object.assign(
            {},
            {
             enabled: !0,
             max: parseFloat(a.getAttribute('max')),
             min: parseFloat(a.getAttribute('min')),
            },
            t.between,
           );
           break;
          case c === 'min' && n !== 'date' && n !== 'range':
           t.greaterThan = Object.assign(
            {},
            { enabled: !0, min: parseFloat(p) },
            t.greaterThan,
           );
           break;
          case c === 'max' && n !== 'date' && n !== 'range':
           t.lessThan = Object.assign(
            {},
            { enabled: !0, max: parseFloat(p) },
            t.lessThan,
           );
         }
        var h = r.exec(c);
        if (h && h.length === 4) {
         var y = this.toCamelCase(h[1]);
         t[y] || (t[y] = {}),
          h[3]
           ? (t[y][this.toCamelCase(h[3])] = this.normalizeValue(p))
           : (t[y].enabled === !0 && t[y].enabled === !1) ||
             (t[y].enabled = p === '' || p === 'true');
        }
       }
       return { validators: t };
      }),
      (o.prototype.normalizeValue = function (a) {
       return a === 'true' || a === '' || (a !== 'false' && a);
      }),
      (o.prototype.toUpperCase = function (a) {
       return a.charAt(1).toUpperCase();
      }),
      (o.prototype.toCamelCase = function (a) {
       return a.replace(/-./g, this.toUpperCase);
      }),
      o
     );
    })(T.Plugin);
   return (ee.Declarative = l), ee;
  })();
  var Ye,
   Pa = ze.exports,
   Je = { exports: {} },
   te = {};
  Je.exports = (function () {
   if (Ye) return te;
   Ye = 1;
   var d = function (u, o) {
     return (
      (d =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (a, r) {
         a.__proto__ = r;
        }) ||
       function (a, r) {
        for (var e in r)
         Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
       }),
      d(u, o)
     );
    },
    l = (function (u) {
     function o() {
      var a = u.call(this, {}) || this;
      return (a.onValidHandler = a.onFormValid.bind(a)), a;
     }
     return (
      (function (a, r) {
       if (typeof r != 'function' && r !== null)
        throw new TypeError(
         'Class extends value ' + String(r) + ' is not a constructor or null',
        );
       function e() {
        this.constructor = a;
       }
       d(a, r),
        (a.prototype =
         r === null
          ? Object.create(r)
          : ((e.prototype = r.prototype), new e()));
      })(o, u),
      (o.prototype.install = function () {
       if (
        this.core
         .getFormElement()
         .querySelectorAll('[type="submit"][name="submit"]').length
       )
        throw new Error(
         'Do not use `submit` for the name attribute of submit button',
        );
       this.core.on('core.form.valid', this.onValidHandler);
      }),
      (o.prototype.uninstall = function () {
       this.core.off('core.form.valid', this.onValidHandler);
      }),
      (o.prototype.onFormValid = function () {
       var a = this.core.getFormElement();
       this.isEnabled && a instanceof HTMLFormElement && a.submit();
      }),
      o
     );
    })(T.Plugin);
   return (te.DefaultSubmit = l), te;
  })();
  var Xe,
   Ra = Je.exports,
   We = { exports: {} },
   re = {};
  We.exports = (function () {
   if (Xe) return re;
   Xe = 1;
   var d = function (u, o) {
     return (
      (d =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (a, r) {
         a.__proto__ = r;
        }) ||
       function (a, r) {
        for (var e in r)
         Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
       }),
      d(u, o)
     );
    },
    l = (function (u) {
     function o(a) {
      var r = u.call(this, a) || this;
      return (
       (r.opts = a || {}),
       (r.triggerExecutedHandler = r.onTriggerExecuted.bind(r)),
       r
      );
     }
     return (
      (function (a, r) {
       if (typeof r != 'function' && r !== null)
        throw new TypeError(
         'Class extends value ' + String(r) + ' is not a constructor or null',
        );
       function e() {
        this.constructor = a;
       }
       d(a, r),
        (a.prototype =
         r === null
          ? Object.create(r)
          : ((e.prototype = r.prototype), new e()));
      })(o, u),
      (o.prototype.install = function () {
       this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
      }),
      (o.prototype.uninstall = function () {
       this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
      }),
      (o.prototype.onTriggerExecuted = function (a) {
       if (this.isEnabled && this.opts[a.field])
        for (var r = 0, e = this.opts[a.field].split(' '); r < e.length; r++) {
         var t = e[r].trim();
         this.opts[t] && this.core.revalidateField(t);
        }
      }),
      o
     );
    })(T.Plugin);
   return (re.Dependency = l), re;
  })();
  var qe,
   Da = We.exports,
   Qe = { exports: {} },
   ae = {};
  Qe.exports = (function () {
   if (qe) return ae;
   qe = 1;
   var d = T,
    l = function (a, r) {
     return (
      (l =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, t) {
         e.__proto__ = t;
        }) ||
       function (e, t) {
        for (var n in t)
         Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
       }),
      l(a, r)
     );
    },
    u = d.utils.removeUndefined,
    o = (function (a) {
     function r(e) {
      var t = a.call(this, e) || this;
      return (
       (t.opts = Object.assign({}, { excluded: r.defaultIgnore }, u(e))),
       (t.ignoreValidationFilter = t.ignoreValidation.bind(t)),
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
       l(e, t),
        (e.prototype =
         t === null
          ? Object.create(t)
          : ((n.prototype = t.prototype), new n()));
      })(r, a),
      (r.defaultIgnore = function (e, t, n) {
       var s = !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length),
        c = t.getAttribute('disabled');
       return (
        c === '' ||
        c === 'disabled' ||
        t.getAttribute('type') === 'hidden' ||
        !s
       );
      }),
      (r.prototype.install = function () {
       this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
      }),
      (r.prototype.uninstall = function () {
       this.core.deregisterFilter(
        'element-ignored',
        this.ignoreValidationFilter,
       );
      }),
      (r.prototype.ignoreValidation = function (e, t, n) {
       return !!this.isEnabled && this.opts.excluded.apply(this, [e, t, n]);
      }),
      r
     );
    })(d.Plugin);
   return (ae.Excluded = o), ae;
  })();
  var et,
   Za = Qe.exports,
   tt = { exports: {} },
   ne = {};
  tt.exports = (function () {
   if (et) return ne;
   et = 1;
   var d = function (u, o) {
     return (
      (d =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (a, r) {
         a.__proto__ = r;
        }) ||
       function (a, r) {
        for (var e in r)
         Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
       }),
      d(u, o)
     );
    },
    l = (function (u) {
     function o(a) {
      var r = u.call(this, a) || this;
      return (
       (r.statuses = new Map()),
       (r.opts = Object.assign({}, { onStatusChanged: function () {} }, a)),
       (r.elementValidatingHandler = r.onElementValidating.bind(r)),
       (r.elementValidatedHandler = r.onElementValidated.bind(r)),
       (r.elementNotValidatedHandler = r.onElementNotValidated.bind(r)),
       (r.elementIgnoredHandler = r.onElementIgnored.bind(r)),
       (r.fieldAddedHandler = r.onFieldAdded.bind(r)),
       (r.fieldRemovedHandler = r.onFieldRemoved.bind(r)),
       r
      );
     }
     return (
      (function (a, r) {
       if (typeof r != 'function' && r !== null)
        throw new TypeError(
         'Class extends value ' + String(r) + ' is not a constructor or null',
        );
       function e() {
        this.constructor = a;
       }
       d(a, r),
        (a.prototype =
         r === null
          ? Object.create(r)
          : ((e.prototype = r.prototype), new e()));
      })(o, u),
      (o.prototype.install = function () {
       this.core
        .on('core.element.validating', this.elementValidatingHandler)
        .on('core.element.validated', this.elementValidatedHandler)
        .on('core.element.notvalidated', this.elementNotValidatedHandler)
        .on('core.element.ignored', this.elementIgnoredHandler)
        .on('core.field.added', this.fieldAddedHandler)
        .on('core.field.removed', this.fieldRemovedHandler);
      }),
      (o.prototype.uninstall = function () {
       this.statuses.clear(),
        this.core
         .off('core.element.validating', this.elementValidatingHandler)
         .off('core.element.validated', this.elementValidatedHandler)
         .off('core.element.notvalidated', this.elementNotValidatedHandler)
         .off('core.element.ignored', this.elementIgnoredHandler)
         .off('core.field.added', this.fieldAddedHandler)
         .off('core.field.removed', this.fieldRemovedHandler);
      }),
      (o.prototype.areFieldsValid = function () {
       return Array.from(this.statuses.values()).every(function (a) {
        return a === 'Valid' || a === 'NotValidated' || a === 'Ignored';
       });
      }),
      (o.prototype.getStatuses = function () {
       return this.isEnabled ? this.statuses : new Map();
      }),
      (o.prototype.onFieldAdded = function (a) {
       this.statuses.set(a.field, 'NotValidated');
      }),
      (o.prototype.onFieldRemoved = function (a) {
       this.statuses.has(a.field) && this.statuses.delete(a.field),
        this.handleStatusChanged(this.areFieldsValid());
      }),
      (o.prototype.onElementValidating = function (a) {
       this.statuses.set(a.field, 'Validating'), this.handleStatusChanged(!1);
      }),
      (o.prototype.onElementValidated = function (a) {
       this.statuses.set(a.field, a.valid ? 'Valid' : 'Invalid'),
        a.valid
         ? this.handleStatusChanged(this.areFieldsValid())
         : this.handleStatusChanged(!1);
      }),
      (o.prototype.onElementNotValidated = function (a) {
       this.statuses.set(a.field, 'NotValidated'), this.handleStatusChanged(!1);
      }),
      (o.prototype.onElementIgnored = function (a) {
       this.statuses.set(a.field, 'Ignored'),
        this.handleStatusChanged(this.areFieldsValid());
      }),
      (o.prototype.handleStatusChanged = function (a) {
       this.isEnabled && this.opts.onStatusChanged(a);
      }),
      o
     );
    })(T.Plugin);
   return (ne.FieldStatus = l), ne;
  })();
  var rt,
   _a = tt.exports,
   at = { exports: {} },
   ie = {},
   nt = { exports: {} },
   se = {};
  nt.exports = (function () {
   if (rt) return se;
   rt = 1;
   var d = T,
    l = function (a, r) {
     return (
      (l =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, t) {
         e.__proto__ = t;
        }) ||
       function (e, t) {
        for (var n in t)
         Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
       }),
      l(a, r)
     );
    },
    u = d.utils.classSet,
    o = (function (a) {
     function r(e) {
      var t = a.call(this, e) || this;
      return (
       (t.useDefaultContainer = !1),
       (t.messages = new Map()),
       (t.defaultContainer = document.createElement('div')),
       (t.useDefaultContainer = !e || !e.container),
       (t.opts = Object.assign(
        {},
        {
         container: function (n, s) {
          return t.defaultContainer;
         },
        },
        e,
       )),
       (t.elementIgnoredHandler = t.onElementIgnored.bind(t)),
       (t.fieldAddedHandler = t.onFieldAdded.bind(t)),
       (t.fieldRemovedHandler = t.onFieldRemoved.bind(t)),
       (t.validatorValidatedHandler = t.onValidatorValidated.bind(t)),
       (t.validatorNotValidatedHandler = t.onValidatorNotValidated.bind(t)),
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
       l(e, t),
        (e.prototype =
         t === null
          ? Object.create(t)
          : ((n.prototype = t.prototype), new n()));
      })(r, a),
      (r.getClosestContainer = function (e, t, n) {
       for (
        var s = e;
        s && s !== t && ((s = s.parentElement), !n.test(s.className));

       );
       return s;
      }),
      (r.prototype.install = function () {
       this.useDefaultContainer &&
        this.core.getFormElement().appendChild(this.defaultContainer),
        this.core
         .on('core.element.ignored', this.elementIgnoredHandler)
         .on('core.field.added', this.fieldAddedHandler)
         .on('core.field.removed', this.fieldRemovedHandler)
         .on('core.validator.validated', this.validatorValidatedHandler)
         .on('core.validator.notvalidated', this.validatorNotValidatedHandler);
      }),
      (r.prototype.uninstall = function () {
       this.useDefaultContainer &&
        this.core.getFormElement().removeChild(this.defaultContainer),
        this.messages.forEach(function (e) {
         return e.parentNode.removeChild(e);
        }),
        this.messages.clear(),
        this.core
         .off('core.element.ignored', this.elementIgnoredHandler)
         .off('core.field.added', this.fieldAddedHandler)
         .off('core.field.removed', this.fieldRemovedHandler)
         .off('core.validator.validated', this.validatorValidatedHandler)
         .off('core.validator.notvalidated', this.validatorNotValidatedHandler);
      }),
      (r.prototype.onEnabled = function () {
       this.messages.forEach(function (e, t, n) {
        u(t, {
         'fv-plugins-message-container--enabled': !0,
         'fv-plugins-message-container--disabled': !1,
        });
       });
      }),
      (r.prototype.onDisabled = function () {
       this.messages.forEach(function (e, t, n) {
        u(t, {
         'fv-plugins-message-container--enabled': !1,
         'fv-plugins-message-container--disabled': !0,
        });
       });
      }),
      (r.prototype.onFieldAdded = function (e) {
       var t = this,
        n = e.elements;
       n &&
        (n.forEach(function (s) {
         var c = t.messages.get(s);
         c && (c.parentNode.removeChild(c), t.messages.delete(s));
        }),
        this.prepareFieldContainer(e.field, n));
      }),
      (r.prototype.onFieldRemoved = function (e) {
       var t = this;
       if (e.elements.length && e.field) {
        var n = e.elements[0].getAttribute('type');
        (n === 'radio' || n === 'checkbox'
         ? [e.elements[0]]
         : e.elements
        ).forEach(function (s) {
         if (t.messages.has(s)) {
          var c = t.messages.get(s);
          c.parentNode.removeChild(c), t.messages.delete(s);
         }
        });
       }
      }),
      (r.prototype.prepareFieldContainer = function (e, t) {
       var n = this;
       if (t.length) {
        var s = t[0].getAttribute('type');
        s === 'radio' || s === 'checkbox'
         ? this.prepareElementContainer(e, t[0], t)
         : t.forEach(function (c) {
            return n.prepareElementContainer(e, c, t);
           });
       }
      }),
      (r.prototype.prepareElementContainer = function (e, t, n) {
       var s;
       if (typeof this.opts.container == 'string') {
        var c =
         this.opts.container.charAt(0) === '#'
          ? '[id="'.concat(this.opts.container.substring(1), '"]')
          : this.opts.container;
        s = this.core.getFormElement().querySelector(c);
       } else s = this.opts.container(e, t);
       var p = document.createElement('div');
       s.appendChild(p),
        u(p, {
         'fv-plugins-message-container': !0,
         'fv-plugins-message-container--enabled': this.isEnabled,
         'fv-plugins-message-container--disabled': !this.isEnabled,
        }),
        this.core.emit('plugins.message.placed', {
         element: t,
         elements: n,
         field: e,
         messageElement: p,
        }),
        this.messages.set(t, p);
      }),
      (r.prototype.getMessage = function (e) {
       return typeof e.message == 'string'
        ? e.message
        : e.message[this.core.getLocale()];
      }),
      (r.prototype.onValidatorValidated = function (e) {
       var t,
        n = e.elements,
        s = e.element.getAttribute('type'),
        c =
         (s === 'radio' || s === 'checkbox') && n.length > 0 ? n[0] : e.element;
       if (this.messages.has(c)) {
        var p = this.messages.get(c),
         h = p.querySelector(
          '[data-field="'
           .concat(e.field.replace(/"/g, '\\"'), '"][data-validator="')
           .concat(e.validator.replace(/"/g, '\\"'), '"]'),
         );
        if (h || e.result.valid)
         h && !e.result.valid
          ? ((h.innerHTML = this.getMessage(e.result)),
            this.core.emit('plugins.message.displayed', {
             element: e.element,
             field: e.field,
             message: e.result.message,
             messageElement: h,
             meta: e.result.meta,
             validator: e.validator,
            }))
          : h && e.result.valid && p.removeChild(h);
        else {
         var y = document.createElement('div');
         (y.innerHTML = this.getMessage(e.result)),
          y.setAttribute('data-field', e.field),
          y.setAttribute('data-validator', e.validator),
          this.opts.clazz && u(y, (((t = {})[this.opts.clazz] = !0), t)),
          p.appendChild(y),
          this.core.emit('plugins.message.displayed', {
           element: e.element,
           field: e.field,
           message: e.result.message,
           messageElement: y,
           meta: e.result.meta,
           validator: e.validator,
          });
        }
       }
      }),
      (r.prototype.onValidatorNotValidated = function (e) {
       var t = e.elements,
        n = e.element.getAttribute('type'),
        s = n === 'radio' || n === 'checkbox' ? t[0] : e.element;
       if (this.messages.has(s)) {
        var c = this.messages.get(s),
         p = c.querySelector(
          '[data-field="'
           .concat(e.field.replace(/"/g, '\\"'), '"][data-validator="')
           .concat(e.validator.replace(/"/g, '\\"'), '"]'),
         );
        p && c.removeChild(p);
       }
      }),
      (r.prototype.onElementIgnored = function (e) {
       var t = e.elements,
        n = e.element.getAttribute('type'),
        s = n === 'radio' || n === 'checkbox' ? t[0] : e.element;
       if (this.messages.has(s)) {
        var c = this.messages.get(s);
        [].slice
         .call(
          c.querySelectorAll(
           '[data-field="'.concat(e.field.replace(/"/g, '\\"'), '"]'),
          ),
         )
         .forEach(function (p) {
          c.removeChild(p);
         });
       }
      }),
      r
     );
    })(d.Plugin);
   return (se.Message = o), se;
  })();
  var it,
   st = nt.exports;
  /**
   * FormValidation (https://formvalidation.io)
   * The best validation library for JavaScript
   * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
   *
   * @license https://formvalidation.io/license
   * @package @form-validation/plugin-framework
   * @version 2.4.0
   */ at.exports = (function () {
   if (it) return ie;
   it = 1;
   var d = T,
    l = st,
    u = function (e, t) {
     return (
      (u =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (n, s) {
         n.__proto__ = s;
        }) ||
       function (n, s) {
        for (var c in s)
         Object.prototype.hasOwnProperty.call(s, c) && (n[c] = s[c]);
       }),
      u(e, t)
     );
    },
    o = d.utils.classSet,
    a = d.utils.closest,
    r = (function (e) {
     function t(n) {
      var s = e.call(this, n) || this;
      return (
       (s.results = new Map()),
       (s.containers = new Map()),
       (s.opts = Object.assign(
        {},
        {
         defaultMessageContainer: !0,
         eleInvalidClass: '',
         eleValidClass: '',
         rowClasses: '',
         rowValidatingClass: '',
        },
        n,
       )),
       (s.elementIgnoredHandler = s.onElementIgnored.bind(s)),
       (s.elementValidatingHandler = s.onElementValidating.bind(s)),
       (s.elementValidatedHandler = s.onElementValidated.bind(s)),
       (s.elementNotValidatedHandler = s.onElementNotValidated.bind(s)),
       (s.iconPlacedHandler = s.onIconPlaced.bind(s)),
       (s.fieldAddedHandler = s.onFieldAdded.bind(s)),
       (s.fieldRemovedHandler = s.onFieldRemoved.bind(s)),
       (s.messagePlacedHandler = s.onMessagePlaced.bind(s)),
       s
      );
     }
     return (
      (function (n, s) {
       if (typeof s != 'function' && s !== null)
        throw new TypeError(
         'Class extends value ' + String(s) + ' is not a constructor or null',
        );
       function c() {
        this.constructor = n;
       }
       u(n, s),
        (n.prototype =
         s === null
          ? Object.create(s)
          : ((c.prototype = s.prototype), new c()));
      })(t, e),
      (t.prototype.install = function () {
       var n,
        s = this;
       o(
        this.core.getFormElement(),
        (((n = {})[this.opts.formClass] = !0),
        (n['fv-plugins-framework'] = !0),
        n),
       ),
        this.core
         .on('core.element.ignored', this.elementIgnoredHandler)
         .on('core.element.validating', this.elementValidatingHandler)
         .on('core.element.validated', this.elementValidatedHandler)
         .on('core.element.notvalidated', this.elementNotValidatedHandler)
         .on('plugins.icon.placed', this.iconPlacedHandler)
         .on('core.field.added', this.fieldAddedHandler)
         .on('core.field.removed', this.fieldRemovedHandler),
        this.opts.defaultMessageContainer &&
         (this.core.registerPlugin(
          t.MESSAGE_PLUGIN,
          new l.Message({
           clazz: this.opts.messageClass,
           container: function (c, p) {
            var h =
              typeof s.opts.rowSelector == 'string'
               ? s.opts.rowSelector
               : s.opts.rowSelector(c, p),
             y = a(p, h);
            return l.Message.getClosestContainer(p, y, s.opts.rowPattern);
           },
          }),
         ),
         this.core.on('plugins.message.placed', this.messagePlacedHandler));
      }),
      (t.prototype.uninstall = function () {
       var n;
       this.results.clear(),
        this.containers.clear(),
        o(
         this.core.getFormElement(),
         (((n = {})[this.opts.formClass] = !1),
         (n['fv-plugins-framework'] = !1),
         n),
        ),
        this.core
         .off('core.element.ignored', this.elementIgnoredHandler)
         .off('core.element.validating', this.elementValidatingHandler)
         .off('core.element.validated', this.elementValidatedHandler)
         .off('core.element.notvalidated', this.elementNotValidatedHandler)
         .off('plugins.icon.placed', this.iconPlacedHandler)
         .off('core.field.added', this.fieldAddedHandler)
         .off('core.field.removed', this.fieldRemovedHandler),
        this.opts.defaultMessageContainer &&
         (this.core.deregisterPlugin(t.MESSAGE_PLUGIN),
         this.core.off('plugins.message.placed', this.messagePlacedHandler));
      }),
      (t.prototype.onEnabled = function () {
       var n;
       o(this.core.getFormElement(), (((n = {})[this.opts.formClass] = !0), n)),
        this.opts.defaultMessageContainer &&
         this.core.enablePlugin(t.MESSAGE_PLUGIN);
      }),
      (t.prototype.onDisabled = function () {
       var n;
       o(this.core.getFormElement(), (((n = {})[this.opts.formClass] = !1), n)),
        this.opts.defaultMessageContainer &&
         this.core.disablePlugin(t.MESSAGE_PLUGIN);
      }),
      (t.prototype.onIconPlaced = function (n) {}),
      (t.prototype.onMessagePlaced = function (n) {}),
      (t.prototype.onFieldAdded = function (n) {
       var s = this,
        c = n.elements;
       c &&
        (c.forEach(function (p) {
         var h,
          y = s.containers.get(p);
         y &&
          (o(
           y,
           (((h = {})[s.opts.rowInvalidClass] = !1),
           (h[s.opts.rowValidatingClass] = !1),
           (h[s.opts.rowValidClass] = !1),
           (h['fv-plugins-icon-container'] = !1),
           h),
          ),
          s.containers.delete(p));
        }),
        this.prepareFieldContainer(n.field, c));
      }),
      (t.prototype.onFieldRemoved = function (n) {
       var s = this;
       n.elements.forEach(function (c) {
        var p,
         h = s.containers.get(c);
        h &&
         o(
          h,
          (((p = {})[s.opts.rowInvalidClass] = !1),
          (p[s.opts.rowValidatingClass] = !1),
          (p[s.opts.rowValidClass] = !1),
          p),
         );
       });
      }),
      (t.prototype.prepareFieldContainer = function (n, s) {
       var c = this;
       if (s.length) {
        var p = s[0].getAttribute('type');
        p === 'radio' || p === 'checkbox'
         ? this.prepareElementContainer(n, s[0])
         : s.forEach(function (h) {
            return c.prepareElementContainer(n, h);
           });
       }
      }),
      (t.prototype.prepareElementContainer = function (n, s) {
       var c,
        p =
         typeof this.opts.rowSelector == 'string'
          ? this.opts.rowSelector
          : this.opts.rowSelector(n, s),
        h = a(s, p);
       h !== s &&
        (o(
         h,
         (((c = {})[this.opts.rowClasses] = !0),
         (c['fv-plugins-icon-container'] = !0),
         c),
        ),
        this.containers.set(s, h));
      }),
      (t.prototype.onElementValidating = function (n) {
       this.removeClasses(n.element, n.elements);
      }),
      (t.prototype.onElementNotValidated = function (n) {
       this.removeClasses(n.element, n.elements);
      }),
      (t.prototype.onElementIgnored = function (n) {
       this.removeClasses(n.element, n.elements);
      }),
      (t.prototype.removeClasses = function (n, s) {
       var c,
        p = this,
        h = n.getAttribute('type'),
        y = h === 'radio' || h === 'checkbox' ? s[0] : n;
       s.forEach(function (S) {
        var N;
        o(
         S,
         (((N = {})[p.opts.eleValidClass] = !1),
         (N[p.opts.eleInvalidClass] = !1),
         N),
        );
       });
       var E = this.containers.get(y);
       E &&
        o(
         E,
         (((c = {})[this.opts.rowInvalidClass] = !1),
         (c[this.opts.rowValidatingClass] = !1),
         (c[this.opts.rowValidClass] = !1),
         c),
        );
      }),
      (t.prototype.onElementValidated = function (n) {
       var s,
        c,
        p = this,
        h = n.elements,
        y = n.element.getAttribute('type'),
        E = y === 'radio' || y === 'checkbox' ? h[0] : n.element;
       h.forEach(function ($) {
        var w;
        o(
         $,
         (((w = {})[p.opts.eleValidClass] = n.valid),
         (w[p.opts.eleInvalidClass] = !n.valid),
         w),
        );
       });
       var S = this.containers.get(E);
       if (S)
        if (n.valid) {
         this.results.delete(E);
         var N = !0;
         this.containers.forEach(function ($, w) {
          $ === S && p.results.get(w) === !1 && (N = !1);
         }),
          N &&
           o(
            S,
            (((c = {})[this.opts.rowInvalidClass] = !1),
            (c[this.opts.rowValidatingClass] = !1),
            (c[this.opts.rowValidClass] = !0),
            c),
           );
        } else
         this.results.set(E, !1),
          o(
           S,
           (((s = {})[this.opts.rowInvalidClass] = !0),
           (s[this.opts.rowValidatingClass] = !1),
           (s[this.opts.rowValidClass] = !1),
           s),
          );
      }),
      (t.MESSAGE_PLUGIN = '___frameworkMessage'),
      t
     );
    })(d.Plugin);
   return (ie.Framework = r), ie;
  })();
  var ot,
   Ba = at.exports,
   lt = { exports: {} },
   oe = {};
  lt.exports = (function () {
   if (ot) return oe;
   ot = 1;
   var d = T,
    l = function (a, r) {
     return (
      (l =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, t) {
         e.__proto__ = t;
        }) ||
       function (e, t) {
        for (var n in t)
         Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
       }),
      l(a, r)
     );
    },
    u = d.utils.classSet,
    o = (function (a) {
     function r(e) {
      var t = a.call(this, e) || this;
      return (
       (t.icons = new Map()),
       (t.opts = Object.assign(
        {},
        {
         invalid: 'fv-plugins-icon--invalid',
         onPlaced: function () {},
         onSet: function () {},
         valid: 'fv-plugins-icon--valid',
         validating: 'fv-plugins-icon--validating',
        },
        e,
       )),
       (t.elementValidatingHandler = t.onElementValidating.bind(t)),
       (t.elementValidatedHandler = t.onElementValidated.bind(t)),
       (t.elementNotValidatedHandler = t.onElementNotValidated.bind(t)),
       (t.elementIgnoredHandler = t.onElementIgnored.bind(t)),
       (t.fieldAddedHandler = t.onFieldAdded.bind(t)),
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
       l(e, t),
        (e.prototype =
         t === null
          ? Object.create(t)
          : ((n.prototype = t.prototype), new n()));
      })(r, a),
      (r.prototype.install = function () {
       this.core
        .on('core.element.validating', this.elementValidatingHandler)
        .on('core.element.validated', this.elementValidatedHandler)
        .on('core.element.notvalidated', this.elementNotValidatedHandler)
        .on('core.element.ignored', this.elementIgnoredHandler)
        .on('core.field.added', this.fieldAddedHandler);
      }),
      (r.prototype.uninstall = function () {
       this.icons.forEach(function (e) {
        return e.parentNode.removeChild(e);
       }),
        this.icons.clear(),
        this.core
         .off('core.element.validating', this.elementValidatingHandler)
         .off('core.element.validated', this.elementValidatedHandler)
         .off('core.element.notvalidated', this.elementNotValidatedHandler)
         .off('core.element.ignored', this.elementIgnoredHandler)
         .off('core.field.added', this.fieldAddedHandler);
      }),
      (r.prototype.onEnabled = function () {
       this.icons.forEach(function (e, t, n) {
        u(t, {
         'fv-plugins-icon--enabled': !0,
         'fv-plugins-icon--disabled': !1,
        });
       });
      }),
      (r.prototype.onDisabled = function () {
       this.icons.forEach(function (e, t, n) {
        u(t, {
         'fv-plugins-icon--enabled': !1,
         'fv-plugins-icon--disabled': !0,
        });
       });
      }),
      (r.prototype.onFieldAdded = function (e) {
       var t = this,
        n = e.elements;
       n &&
        (n.forEach(function (s) {
         var c = t.icons.get(s);
         c && (c.parentNode.removeChild(c), t.icons.delete(s));
        }),
        this.prepareFieldIcon(e.field, n));
      }),
      (r.prototype.prepareFieldIcon = function (e, t) {
       var n = this;
       if (t.length) {
        var s = t[0].getAttribute('type');
        s === 'radio' || s === 'checkbox'
         ? this.prepareElementIcon(e, t[0])
         : t.forEach(function (c) {
            return n.prepareElementIcon(e, c);
           });
       }
      }),
      (r.prototype.prepareElementIcon = function (e, t) {
       var n = document.createElement('i');
       n.setAttribute('data-field', e),
        t.parentNode.insertBefore(n, t.nextSibling),
        u(n, {
         'fv-plugins-icon': !0,
         'fv-plugins-icon--enabled': this.isEnabled,
         'fv-plugins-icon--disabled': !this.isEnabled,
        });
       var s = {
        classes: {
         invalid: this.opts.invalid,
         valid: this.opts.valid,
         validating: this.opts.validating,
        },
        element: t,
        field: e,
        iconElement: n,
       };
       this.core.emit('plugins.icon.placed', s),
        this.opts.onPlaced(s),
        this.icons.set(t, n);
      }),
      (r.prototype.onElementValidating = function (e) {
       var t,
        n = this.setClasses(
         e.field,
         e.element,
         e.elements,
         (((t = {})[this.opts.invalid] = !1),
         (t[this.opts.valid] = !1),
         (t[this.opts.validating] = !0),
         t),
        ),
        s = {
         element: e.element,
         field: e.field,
         iconElement: n,
         status: 'Validating',
        };
       this.core.emit('plugins.icon.set', s), this.opts.onSet(s);
      }),
      (r.prototype.onElementValidated = function (e) {
       var t,
        n = this.setClasses(
         e.field,
         e.element,
         e.elements,
         (((t = {})[this.opts.invalid] = !e.valid),
         (t[this.opts.valid] = e.valid),
         (t[this.opts.validating] = !1),
         t),
        ),
        s = {
         element: e.element,
         field: e.field,
         iconElement: n,
         status: e.valid ? 'Valid' : 'Invalid',
        };
       this.core.emit('plugins.icon.set', s), this.opts.onSet(s);
      }),
      (r.prototype.onElementNotValidated = function (e) {
       var t,
        n = this.setClasses(
         e.field,
         e.element,
         e.elements,
         (((t = {})[this.opts.invalid] = !1),
         (t[this.opts.valid] = !1),
         (t[this.opts.validating] = !1),
         t),
        ),
        s = {
         element: e.element,
         field: e.field,
         iconElement: n,
         status: 'NotValidated',
        };
       this.core.emit('plugins.icon.set', s), this.opts.onSet(s);
      }),
      (r.prototype.onElementIgnored = function (e) {
       var t,
        n = this.setClasses(
         e.field,
         e.element,
         e.elements,
         (((t = {})[this.opts.invalid] = !1),
         (t[this.opts.valid] = !1),
         (t[this.opts.validating] = !1),
         t),
        ),
        s = {
         element: e.element,
         field: e.field,
         iconElement: n,
         status: 'Ignored',
        };
       this.core.emit('plugins.icon.set', s), this.opts.onSet(s);
      }),
      (r.prototype.setClasses = function (e, t, n, s) {
       var c = t.getAttribute('type'),
        p = c === 'radio' || c === 'checkbox' ? n[0] : t;
       if (this.icons.has(p)) {
        var h = this.icons.get(p);
        return u(h, s), h;
       }
       return null;
      }),
      r
     );
    })(d.Plugin);
   return (oe.Icon = o), oe;
  })();
  var dt,
   Ga = lt.exports,
   ut = { exports: {} },
   le = {};
  ut.exports = (function () {
   if (dt) return le;
   dt = 1;
   var d = T,
    l = function (a, r) {
     return (
      (l =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, t) {
         e.__proto__ = t;
        }) ||
       function (e, t) {
        for (var n in t)
         Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
       }),
      l(a, r)
     );
    },
    u = d.utils.removeUndefined,
    o = (function (a) {
     function r(e) {
      var t = a.call(this, e) || this;
      return (
       (t.invalidFields = new Map()),
       (t.opts = Object.assign({}, { enabled: !0 }, u(e))),
       (t.validatorHandler = t.onValidatorValidated.bind(t)),
       (t.shouldValidateFilter = t.shouldValidate.bind(t)),
       (t.fieldAddedHandler = t.onFieldAdded.bind(t)),
       (t.elementNotValidatedHandler = t.onElementNotValidated.bind(t)),
       (t.elementValidatingHandler = t.onElementValidating.bind(t)),
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
       l(e, t),
        (e.prototype =
         t === null
          ? Object.create(t)
          : ((n.prototype = t.prototype), new n()));
      })(r, a),
      (r.prototype.install = function () {
       this.core
        .on('core.validator.validated', this.validatorHandler)
        .on('core.field.added', this.fieldAddedHandler)
        .on('core.element.notvalidated', this.elementNotValidatedHandler)
        .on('core.element.validating', this.elementValidatingHandler)
        .registerFilter('field-should-validate', this.shouldValidateFilter);
      }),
      (r.prototype.uninstall = function () {
       this.invalidFields.clear(),
        this.core
         .off('core.validator.validated', this.validatorHandler)
         .off('core.field.added', this.fieldAddedHandler)
         .off('core.element.notvalidated', this.elementNotValidatedHandler)
         .off('core.element.validating', this.elementValidatingHandler)
         .deregisterFilter('field-should-validate', this.shouldValidateFilter);
      }),
      (r.prototype.shouldValidate = function (e, t, n, s) {
       return (
        !this.isEnabled ||
        !(
         (this.opts.enabled === !0 || this.opts.enabled[e] === !0) &&
         this.invalidFields.has(t) &&
         this.invalidFields.get(t).length &&
         this.invalidFields.get(t).indexOf(s) === -1
        )
       );
      }),
      (r.prototype.onValidatorValidated = function (e) {
       var t = this.invalidFields.has(e.element)
         ? this.invalidFields.get(e.element)
         : [],
        n = t.indexOf(e.validator);
       e.result.valid && n >= 0
        ? t.splice(n, 1)
        : e.result.valid || n !== -1 || t.push(e.validator),
        this.invalidFields.set(e.element, t);
      }),
      (r.prototype.onFieldAdded = function (e) {
       e.elements && this.clearInvalidFields(e.elements);
      }),
      (r.prototype.onElementNotValidated = function (e) {
       this.clearInvalidFields(e.elements);
      }),
      (r.prototype.onElementValidating = function (e) {
       this.clearInvalidFields(e.elements);
      }),
      (r.prototype.clearInvalidFields = function (e) {
       var t = this;
       e.forEach(function (n) {
        return t.invalidFields.delete(n);
       });
      }),
      r
     );
    })(d.Plugin);
   return (le.Sequence = o), le;
  })();
  var ct,
   Ua = ut.exports,
   ft = { exports: {} },
   de = {};
  ft.exports = (function () {
   if (ct) return de;
   ct = 1;
   var d = function (u, o) {
     return (
      (d =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (a, r) {
         a.__proto__ = r;
        }) ||
       function (a, r) {
        for (var e in r)
         Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
       }),
      d(u, o)
     );
    },
    l = (function (u) {
     function o(a) {
      var r = u.call(this, a) || this;
      return (
       (r.isFormValid = !1),
       (r.isButtonClicked = !1),
       (r.opts = Object.assign(
        {},
        {
         aspNetButton: !1,
         buttons: function (e) {
          return [].slice.call(
           e.querySelectorAll('[type="submit"]:not([formnovalidate])'),
          );
         },
         liveMode: !0,
        },
        a,
       )),
       (r.submitHandler = r.handleSubmitEvent.bind(r)),
       (r.buttonClickHandler = r.handleClickEvent.bind(r)),
       (r.ignoreValidationFilter = r.ignoreValidation.bind(r)),
       r
      );
     }
     return (
      (function (a, r) {
       if (typeof r != 'function' && r !== null)
        throw new TypeError(
         'Class extends value ' + String(r) + ' is not a constructor or null',
        );
       function e() {
        this.constructor = a;
       }
       d(a, r),
        (a.prototype =
         r === null
          ? Object.create(r)
          : ((e.prototype = r.prototype), new e()));
      })(o, u),
      (o.prototype.install = function () {
       var a = this;
       if (this.core.getFormElement() instanceof HTMLFormElement) {
        var r = this.core.getFormElement();
        (this.submitButtons = this.opts.buttons(r)),
         r.setAttribute('novalidate', 'novalidate'),
         r.addEventListener('submit', this.submitHandler),
         (this.hiddenClickedEle = document.createElement('input')),
         this.hiddenClickedEle.setAttribute('type', 'hidden'),
         r.appendChild(this.hiddenClickedEle),
         this.submitButtons.forEach(function (e) {
          e.addEventListener('click', a.buttonClickHandler);
         }),
         this.core.registerFilter(
          'element-ignored',
          this.ignoreValidationFilter,
         );
       }
      }),
      (o.prototype.uninstall = function () {
       var a = this,
        r = this.core.getFormElement();
       r instanceof HTMLFormElement &&
        r.removeEventListener('submit', this.submitHandler),
        this.submitButtons.forEach(function (e) {
         e.removeEventListener('click', a.buttonClickHandler);
        }),
        this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle),
        this.core.deregisterFilter(
         'element-ignored',
         this.ignoreValidationFilter,
        );
      }),
      (o.prototype.handleSubmitEvent = function (a) {
       this.validateForm(a);
      }),
      (o.prototype.handleClickEvent = function (a) {
       var r = a.currentTarget;
       if (
        ((this.isButtonClicked = !0),
        r instanceof HTMLElement &&
         !(this.opts.aspNetButton && this.isFormValid === !0))
       ) {
        this.core
         .getFormElement()
         .removeEventListener('submit', this.submitHandler),
         (this.clickedButton = a.target);
        var e = this.clickedButton.getAttribute('name'),
         t = this.clickedButton.getAttribute('value');
        e &&
         t &&
         (this.hiddenClickedEle.setAttribute('name', e),
         this.hiddenClickedEle.setAttribute('value', t)),
         this.validateForm(a);
       }
      }),
      (o.prototype.validateForm = function (a) {
       var r = this;
       this.isEnabled &&
        (a.preventDefault(),
        this.core.validate().then(function (e) {
         e === 'Valid' &&
          r.opts.aspNetButton &&
          !r.isFormValid &&
          r.clickedButton &&
          ((r.isFormValid = !0),
          r.clickedButton.removeEventListener('click', r.buttonClickHandler),
          r.clickedButton.click());
        }));
      }),
      (o.prototype.ignoreValidation = function (a, r, e) {
       return !!this.isEnabled && !this.opts.liveMode && !this.isButtonClicked;
      }),
      o
     );
    })(T.Plugin);
   return (de.SubmitButton = l), de;
  })();
  var pt,
   ja = ft.exports,
   vt = { exports: {} },
   ue = {};
  vt.exports = (function () {
   if (pt) return ue;
   pt = 1;
   var d = T,
    l = function (a, r) {
     return (
      (l =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, t) {
         e.__proto__ = t;
        }) ||
       function (e, t) {
        for (var n in t)
         Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
       }),
      l(a, r)
     );
    },
    u = d.utils.classSet,
    o = (function (a) {
     function r(e) {
      var t = a.call(this, e) || this;
      return (
       (t.messages = new Map()),
       (t.opts = Object.assign({}, { placement: 'top', trigger: 'click' }, e)),
       (t.iconPlacedHandler = t.onIconPlaced.bind(t)),
       (t.validatorValidatedHandler = t.onValidatorValidated.bind(t)),
       (t.elementValidatedHandler = t.onElementValidated.bind(t)),
       (t.documentClickHandler = t.onDocumentClicked.bind(t)),
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
       l(e, t),
        (e.prototype =
         t === null
          ? Object.create(t)
          : ((n.prototype = t.prototype), new n()));
      })(r, a),
      (r.prototype.install = function () {
       var e;
       (this.tip = document.createElement('div')),
        u(
         this.tip,
         (((e = { 'fv-plugins-tooltip': !0 })[
          'fv-plugins-tooltip--'.concat(this.opts.placement)
         ] = !0),
         e),
        ),
        document.body.appendChild(this.tip),
        this.core
         .on('plugins.icon.placed', this.iconPlacedHandler)
         .on('core.validator.validated', this.validatorValidatedHandler)
         .on('core.element.validated', this.elementValidatedHandler),
        this.opts.trigger === 'click' &&
         document.addEventListener('click', this.documentClickHandler);
      }),
      (r.prototype.uninstall = function () {
       this.messages.clear(),
        document.body.removeChild(this.tip),
        this.core
         .off('plugins.icon.placed', this.iconPlacedHandler)
         .off('core.validator.validated', this.validatorValidatedHandler)
         .off('core.element.validated', this.elementValidatedHandler),
        this.opts.trigger === 'click' &&
         document.removeEventListener('click', this.documentClickHandler);
      }),
      (r.prototype.onIconPlaced = function (e) {
       var t = this;
       u(e.iconElement, { 'fv-plugins-tooltip-icon': !0 }),
        this.opts.trigger === 'hover'
         ? (e.iconElement.addEventListener('mouseenter', function (n) {
            return t.show(e.element, n);
           }),
           e.iconElement.addEventListener('mouseleave', function (n) {
            return t.hide();
           }))
         : e.iconElement.addEventListener('click', function (n) {
            return t.show(e.element, n);
           });
      }),
      (r.prototype.onValidatorValidated = function (e) {
       if (!e.result.valid) {
        var t = e.elements,
         n = e.element.getAttribute('type'),
         s = n === 'radio' || n === 'checkbox' ? t[0] : e.element,
         c =
          typeof e.result.message == 'string'
           ? e.result.message
           : e.result.message[this.core.getLocale()];
        this.messages.set(s, c);
       }
      }),
      (r.prototype.onElementValidated = function (e) {
       if (e.valid) {
        var t = e.elements,
         n = e.element.getAttribute('type'),
         s = n === 'radio' || n === 'checkbox' ? t[0] : e.element;
        this.messages.delete(s);
       }
      }),
      (r.prototype.onDocumentClicked = function (e) {
       this.hide();
      }),
      (r.prototype.show = function (e, t) {
       if (
        this.isEnabled &&
        (t.preventDefault(), t.stopPropagation(), this.messages.has(e))
       ) {
        u(this.tip, { 'fv-plugins-tooltip--hide': !1 }),
         (this.tip.innerHTML =
          '<div class="fv-plugins-tooltip__content">'.concat(
           this.messages.get(e),
           '</div>',
          ));
        var n = t.target.getBoundingClientRect(),
         s = this.tip.getBoundingClientRect(),
         c = s.height,
         p = s.width,
         h = 0,
         y = 0;
        switch (this.opts.placement) {
         case 'bottom':
          (h = n.top + n.height), (y = n.left + n.width / 2 - p / 2);
          break;
         case 'bottom-left':
          (h = n.top + n.height), (y = n.left);
          break;
         case 'bottom-right':
          (h = n.top + n.height), (y = n.left + n.width - p);
          break;
         case 'left':
          (h = n.top + n.height / 2 - c / 2), (y = n.left - p);
          break;
         case 'right':
          (h = n.top + n.height / 2 - c / 2), (y = n.left + n.width);
          break;
         case 'top-left':
          (h = n.top - c), (y = n.left);
          break;
         case 'top-right':
          (h = n.top - c), (y = n.left + n.width - p);
          break;
         default:
          (h = n.top - c), (y = n.left + n.width / 2 - p / 2);
        }
        (h +=
         window.scrollY ||
         document.documentElement.scrollTop ||
         document.body.scrollTop ||
         0),
         (y +=
          window.scrollX ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          0),
         this.tip.setAttribute(
          'style',
          'top: '.concat(h, 'px; left: ').concat(y, 'px'),
         );
       }
      }),
      (r.prototype.hide = function () {
       this.isEnabled && u(this.tip, { 'fv-plugins-tooltip--hide': !0 });
      }),
      r
     );
    })(d.Plugin);
   return (ue.Tooltip = o), ue;
  })();
  var ht,
   Ka = vt.exports,
   mt = { exports: {} },
   ce = {};
  mt.exports = (function () {
   if (ht) return ce;
   ht = 1;
   var d = function (u, o) {
     return (
      (d =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (a, r) {
         a.__proto__ = r;
        }) ||
       function (a, r) {
        for (var e in r)
         Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
       }),
      d(u, o)
     );
    },
    l = (function (u) {
     function o(a) {
      var r = u.call(this, a) || this;
      (r.handlers = []), (r.timers = new Map());
      var e = document.createElement('div');
      return (
       (r.defaultEvent = 'oninput' in e ? 'input' : 'keyup'),
       (r.opts = Object.assign(
        {},
        { delay: 0, event: r.defaultEvent, threshold: 0 },
        a,
       )),
       (r.fieldAddedHandler = r.onFieldAdded.bind(r)),
       (r.fieldRemovedHandler = r.onFieldRemoved.bind(r)),
       r
      );
     }
     return (
      (function (a, r) {
       if (typeof r != 'function' && r !== null)
        throw new TypeError(
         'Class extends value ' + String(r) + ' is not a constructor or null',
        );
       function e() {
        this.constructor = a;
       }
       d(a, r),
        (a.prototype =
         r === null
          ? Object.create(r)
          : ((e.prototype = r.prototype), new e()));
      })(o, u),
      (o.prototype.install = function () {
       this.core
        .on('core.field.added', this.fieldAddedHandler)
        .on('core.field.removed', this.fieldRemovedHandler);
      }),
      (o.prototype.uninstall = function () {
       this.handlers.forEach(function (a) {
        return a.element.removeEventListener(a.event, a.handler);
       }),
        (this.handlers = []),
        this.timers.forEach(function (a) {
         return window.clearTimeout(a);
        }),
        this.timers.clear(),
        this.core
         .off('core.field.added', this.fieldAddedHandler)
         .off('core.field.removed', this.fieldRemovedHandler);
      }),
      (o.prototype.prepareHandler = function (a, r) {
       var e = this;
       r.forEach(function (t) {
        var n = [];
        if (e.opts.event && e.opts.event[a] === !1) n = [];
        else if (
         e.opts.event &&
         e.opts.event[a] &&
         typeof e.opts.event[a] != 'function'
        )
         n = e.opts.event[a].split(' ');
        else if (
         typeof e.opts.event == 'string' &&
         e.opts.event !== e.defaultEvent
        )
         n = e.opts.event.split(' ');
        else {
         var s = t.getAttribute('type'),
          c = t.tagName.toLowerCase();
         n = [
          s === 'radio' || s === 'checkbox' || s === 'file' || c === 'select'
           ? 'change'
           : e.ieVersion >= 10 && t.getAttribute('placeholder')
             ? 'keyup'
             : e.defaultEvent,
         ];
        }
        n.forEach(function (p) {
         var h = function (y) {
          return e.handleEvent(y, a, t);
         };
         e.handlers.push({ element: t, event: p, field: a, handler: h }),
          t.addEventListener(p, h);
        });
       });
      }),
      (o.prototype.handleEvent = function (a, r, e) {
       var t = this;
       if (
        this.isEnabled &&
        this.exceedThreshold(r, e) &&
        this.core.executeFilter('plugins-trigger-should-validate', !0, [r, e])
       ) {
        var n = function () {
          return t.core.validateElement(r, e).then(function (p) {
           t.core.emit('plugins.trigger.executed', {
            element: e,
            event: a,
            field: r,
           });
          });
         },
         s = this.opts.delay[r] || this.opts.delay;
        if (s === 0) n();
        else {
         var c = this.timers.get(e);
         c && window.clearTimeout(c),
          this.timers.set(e, window.setTimeout(n, 1e3 * s));
        }
       }
      }),
      (o.prototype.onFieldAdded = function (a) {
       this.handlers
        .filter(function (r) {
         return r.field === a.field;
        })
        .forEach(function (r) {
         return r.element.removeEventListener(r.event, r.handler);
        }),
        this.prepareHandler(a.field, a.elements);
      }),
      (o.prototype.onFieldRemoved = function (a) {
       this.handlers
        .filter(function (r) {
         return r.field === a.field && a.elements.indexOf(r.element) >= 0;
        })
        .forEach(function (r) {
         return r.element.removeEventListener(r.event, r.handler);
        });
      }),
      (o.prototype.exceedThreshold = function (a, r) {
       var e =
        this.opts.threshold[a] !== 0 &&
        this.opts.threshold !== 0 &&
        (this.opts.threshold[a] || this.opts.threshold);
       if (!e) return !0;
       var t = r.getAttribute('type');
       return (
        [
         'button',
         'checkbox',
         'file',
         'hidden',
         'image',
         'radio',
         'reset',
         'submit',
        ].indexOf(t) !== -1 || this.core.getElementValue(a, r).length >= e
       );
      }),
      o
     );
    })(T.Plugin);
   return (ce.Trigger = l), ce;
  })();
  var gt,
   za = mt.exports,
   bt = { exports: {} },
   fe = {};
  bt.exports = (function () {
   if (gt) return fe;
   gt = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.removeUndefined;
   return (
    (fe.between = function () {
     var o = function (a) {
      return parseFloat(''.concat(a).replace(',', '.'));
     };
     return {
      validate: function (a) {
       var r = a.value;
       if (r === '') return { valid: !0 };
       var e = Object.assign({}, { inclusive: !0, message: '' }, u(a.options)),
        t = o(e.min),
        n = o(e.max);
       return e.inclusive
        ? {
           message: l(
            a.l10n ? e.message || a.l10n.between.default : e.message,
            [''.concat(t), ''.concat(n)],
           ),
           valid: parseFloat(r) >= t && parseFloat(r) <= n,
          }
        : {
           message: l(
            a.l10n ? e.message || a.l10n.between.notInclusive : e.message,
            [''.concat(t), ''.concat(n)],
           ),
           valid: parseFloat(r) > t && parseFloat(r) < n,
          };
      },
     };
    }),
    fe
   );
  })();
  var At,
   Ya = bt.exports,
   yt = { exports: {} },
   Et = {};
  yt.exports =
   (At ||
    ((At = 1),
    (Et.blank = function () {
     return {
      validate: function (d) {
       return { valid: !0 };
      },
     };
    })),
   Et);
  var It,
   Ja = yt.exports,
   xt = { exports: {} },
   pe = {};
  xt.exports = (function () {
   if (It) return pe;
   It = 1;
   var d = T.utils.call;
   return (
    (pe.callback = function () {
     return {
      validate: function (l) {
       var u = d(l.options.callback, [l]);
       return typeof u == 'boolean' ? { valid: u } : u;
      },
     };
    }),
    pe
   );
  })();
  var Ct,
   Xa = xt.exports,
   Ot = { exports: {} },
   ve = {};
  Ot.exports = (function () {
   if (Ct) return ve;
   Ct = 1;
   var d = T.utils.format;
   return (
    (ve.choice = function () {
     return {
      validate: function (l) {
       var u =
         l.element.tagName.toLowerCase() === 'select'
          ? l.element.querySelectorAll('option:checked').length
          : l.elements.filter(function (t) {
             return t.checked;
            }).length,
        o = l.options.min ? ''.concat(l.options.min) : '',
        a = l.options.max ? ''.concat(l.options.max) : '',
        r = l.l10n
         ? l.options.message || l.l10n.choice.default
         : l.options.message,
        e = !((o && u < parseInt(o, 10)) || (a && u > parseInt(a, 10)));
       switch (!0) {
        case !!o && !!a:
         r = d(l.l10n ? l.l10n.choice.between : l.options.message, [o, a]);
         break;
        case !!o:
         r = d(l.l10n ? l.l10n.choice.more : l.options.message, o);
         break;
        case !!a:
         r = d(l.l10n ? l.l10n.choice.less : l.options.message, a);
       }
       return { message: r, valid: e };
      },
     };
    }),
    ve
   );
  })();
  var St,
   Wa = Ot.exports,
   Vt = { exports: {} },
   X = {};
  Vt.exports = (function () {
   if (St) return X;
   St = 1;
   var d = T.algorithms.luhn,
    l = {
     AMERICAN_EXPRESS: { length: [15], prefix: ['34', '37'] },
     DANKORT: { length: [16], prefix: ['5019'] },
     DINERS_CLUB: {
      length: [14],
      prefix: ['300', '301', '302', '303', '304', '305', '36'],
     },
     DINERS_CLUB_US: { length: [16], prefix: ['54', '55'] },
     DISCOVER: {
      length: [16],
      prefix: [
       '6011',
       '622126',
       '622127',
       '622128',
       '622129',
       '62213',
       '62214',
       '62215',
       '62216',
       '62217',
       '62218',
       '62219',
       '6222',
       '6223',
       '6224',
       '6225',
       '6226',
       '6227',
       '6228',
       '62290',
       '62291',
       '622920',
       '622921',
       '622922',
       '622923',
       '622924',
       '622925',
       '644',
       '645',
       '646',
       '647',
       '648',
       '649',
       '65',
      ],
     },
     ELO: {
      length: [16],
      prefix: [
       '4011',
       '4312',
       '4389',
       '4514',
       '4573',
       '4576',
       '5041',
       '5066',
       '5067',
       '509',
       '6277',
       '6362',
       '6363',
       '650',
       '6516',
       '6550',
      ],
     },
     FORBRUGSFORENINGEN: { length: [16], prefix: ['600722'] },
     JCB: {
      length: [16],
      prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
     },
     LASER: {
      length: [16, 17, 18, 19],
      prefix: ['6304', '6706', '6771', '6709'],
     },
     MAESTRO: {
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      prefix: [
       '5018',
       '5020',
       '5038',
       '5868',
       '6304',
       '6759',
       '6761',
       '6762',
       '6763',
       '6764',
       '6765',
       '6766',
      ],
     },
     MASTERCARD: { length: [16], prefix: ['51', '52', '53', '54', '55'] },
     SOLO: { length: [16, 18, 19], prefix: ['6334', '6767'] },
     UNIONPAY: {
      length: [16, 17, 18, 19],
      prefix: [
       '622126',
       '622127',
       '622128',
       '622129',
       '62213',
       '62214',
       '62215',
       '62216',
       '62217',
       '62218',
       '62219',
       '6222',
       '6223',
       '6224',
       '6225',
       '6226',
       '6227',
       '6228',
       '62290',
       '62291',
       '622920',
       '622921',
       '622922',
       '622923',
       '622924',
       '622925',
      ],
     },
     VISA: { length: [16], prefix: ['4'] },
     VISA_ELECTRON: {
      length: [16],
      prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
     },
    };
   return (
    (X.CREDIT_CARD_TYPES = l),
    (X.creditCard = function () {
     return {
      validate: function (u) {
       if (u.value === '') return { meta: { type: null }, valid: !0 };
       if (/[^0-9-\s]+/.test(u.value))
        return { meta: { type: null }, valid: !1 };
       var o = u.value.replace(/\D/g, '');
       if (!d(o)) return { meta: { type: null }, valid: !1 };
       for (var a = 0, r = Object.keys(l); a < r.length; a++) {
        var e = r[a];
        for (var t in l[e].prefix)
         if (
          u.value.substr(0, l[e].prefix[t].length) === l[e].prefix[t] &&
          l[e].length.indexOf(o.length) !== -1
         )
          return { meta: { type: e }, valid: !0 };
       }
       return { meta: { type: null }, valid: !1 };
      },
     };
    }),
    X
   );
  })();
  var Ft,
   qa = Vt.exports,
   kt = { exports: {} },
   he = {};
  kt.exports = (function () {
   if (Ft) return he;
   Ft = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.isValidDate,
    o = d.utils.removeUndefined,
    a = function (e, t, n) {
     var s = t.indexOf('YYYY'),
      c = t.indexOf('MM'),
      p = t.indexOf('DD');
     if (s === -1 || c === -1 || p === -1) return null;
     var h = e.split(' '),
      y = h[0].split(n);
     if (y.length < 3) return null;
     var E = new Date(
       parseInt(y[s], 10),
       parseInt(y[c], 10) - 1,
       parseInt(y[p], 10),
      ),
      S = h.length > 2 ? h[2] : null;
     if (h.length > 1) {
      var N = h[1].split(':'),
       $ = N.length > 0 ? parseInt(N[0], 10) : 0;
      E.setHours(S && S.toUpperCase() === 'PM' && $ < 12 ? $ + 12 : $),
       E.setMinutes(N.length > 1 ? parseInt(N[1], 10) : 0),
       E.setSeconds(N.length > 2 ? parseInt(N[2], 10) : 0);
     }
     return E;
    },
    r = function (e, t) {
     var n = t
       .replace(/Y/g, 'y')
       .replace(/M/g, 'm')
       .replace(/D/g, 'd')
       .replace(/:m/g, ':M')
       .replace(/:mm/g, ':MM')
       .replace(/:S/, ':s')
       .replace(/:SS/, ':ss'),
      s = e.getDate(),
      c = s < 10 ? '0'.concat(s) : s,
      p = e.getMonth() + 1,
      h = p < 10 ? '0'.concat(p) : p,
      y = ''.concat(e.getFullYear()).substr(2),
      E = e.getFullYear(),
      S = e.getHours() % 12 || 12,
      N = S < 10 ? '0'.concat(S) : S,
      $ = e.getHours(),
      w = $ < 10 ? '0'.concat($) : $,
      _ = e.getMinutes(),
      V = _ < 10 ? '0'.concat(_) : _,
      i = e.getSeconds(),
      g = i < 10 ? '0'.concat(i) : i,
      b = {
       H: ''.concat($),
       HH: ''.concat(w),
       M: ''.concat(_),
       MM: ''.concat(V),
       d: ''.concat(s),
       dd: ''.concat(c),
       h: ''.concat(S),
       hh: ''.concat(N),
       m: ''.concat(p),
       mm: ''.concat(h),
       s: ''.concat(i),
       ss: ''.concat(g),
       yy: ''.concat(y),
       yyyy: ''.concat(E),
      };
     return n.replace(
      /d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,
      function (m) {
       return b[m] ? b[m] : m.slice(1, m.length - 1);
      },
     );
    };
   return (
    (he.date = function () {
     return {
      validate: function (e) {
       if (e.value === '') return { meta: { date: null }, valid: !0 };
       var t = Object.assign(
         {},
         {
          format:
           e.element && e.element.getAttribute('type') === 'date'
            ? 'YYYY-MM-DD'
            : 'MM/DD/YYYY',
          message: '',
         },
         o(e.options),
        ),
        n = e.l10n ? e.l10n.date.default : t.message,
        s = { message: ''.concat(n), meta: { date: null }, valid: !1 },
        c = t.format.split(' '),
        p = c.length > 1 ? c[1] : null,
        h = c.length > 2 ? c[2] : null,
        y = e.value.split(' '),
        E = y[0],
        S = y.length > 1 ? y[1] : null,
        N = y.length > 2 ? y[2] : null;
       if (c.length !== y.length) return s;
       var $ =
        t.separator ||
        (E.indexOf('/') !== -1
         ? '/'
         : E.indexOf('-') !== -1
           ? '-'
           : E.indexOf('.') !== -1
             ? '.'
             : '/');
       if ($ === null || E.indexOf($) === -1) return s;
       var w = E.split($),
        _ = c[0].split($);
       if (w.length !== _.length) return s;
       var V = w[_.indexOf('YYYY')],
        i = w[_.indexOf('MM')],
        g = w[_.indexOf('DD')];
       if (
        !/^\d+$/.test(V) ||
        !/^\d+$/.test(i) ||
        !/^\d+$/.test(g) ||
        V.length > 4 ||
        i.length > 2 ||
        g.length > 2
       )
        return s;
       var b = parseInt(V, 10),
        m = parseInt(i, 10),
        O = parseInt(g, 10);
       if (!u(b, m, O)) return s;
       var A = new Date(b, m - 1, O);
       if (p) {
        var F = S.split(':');
        if (p.split(':').length !== F.length) return s;
        var P =
          F.length > 0
           ? F[0].length <= 2 && /^\d+$/.test(F[0])
             ? parseInt(F[0], 10)
             : -1
           : 0,
         L =
          F.length > 1
           ? F[1].length <= 2 && /^\d+$/.test(F[1])
             ? parseInt(F[1], 10)
             : -1
           : 0,
         k =
          F.length > 2
           ? F[2].length <= 2 && /^\d+$/.test(F[2])
             ? parseInt(F[2], 10)
             : -1
           : 0;
        if (
         P === -1 ||
         L === -1 ||
         k === -1 ||
         k < 0 ||
         k > 60 ||
         P < 0 ||
         P >= 24 ||
         (h && P > 12) ||
         L < 0 ||
         L > 59
        )
         return s;
        A.setHours(N && N.toUpperCase() === 'PM' && P < 12 ? P + 12 : P),
         A.setMinutes(L),
         A.setSeconds(k);
       }
       var Z = typeof t.min == 'function' ? t.min() : t.min,
        v = Z instanceof Date ? Z : Z ? a(Z, _, $) : A,
        f = typeof t.max == 'function' ? t.max() : t.max,
        I = f instanceof Date ? f : f ? a(f, _, $) : A,
        x = Z instanceof Date ? r(v, t.format) : Z,
        C = f instanceof Date ? r(I, t.format) : f;
       switch (!0) {
        case !!x && !C:
         return {
          message: l(e.l10n ? e.l10n.date.min : n, x),
          meta: { date: A },
          valid: A.getTime() >= v.getTime(),
         };
        case !!C && !x:
         return {
          message: l(e.l10n ? e.l10n.date.max : n, C),
          meta: { date: A },
          valid: A.getTime() <= I.getTime(),
         };
        case !!C && !!x:
         return {
          message: l(e.l10n ? e.l10n.date.range : n, [x, C]),
          meta: { date: A },
          valid: A.getTime() <= I.getTime() && A.getTime() >= v.getTime(),
         };
        default:
         return { message: ''.concat(n), meta: { date: A }, valid: !0 };
       }
      },
     };
    }),
    he
   );
  })();
  var wt,
   Qa = kt.exports,
   Ht = { exports: {} },
   $t = {};
  Ht.exports =
   (wt ||
    ((wt = 1),
    ($t.different = function () {
     return {
      validate: function (d) {
       var l =
        typeof d.options.compare == 'function'
         ? d.options.compare.call(this)
         : d.options.compare;
       return { valid: l === '' || d.value !== l };
      },
     };
    })),
   $t);
  var Nt,
   en = Ht.exports,
   Mt = { exports: {} },
   Tt = {};
  Mt.exports =
   (Nt ||
    ((Nt = 1),
    (Tt.digits = function () {
     return {
      validate: function (d) {
       return { valid: d.value === '' || /^\d+$/.test(d.value) };
      },
     };
    })),
   Tt);
  var Lt,
   tn = Mt.exports,
   Pt = { exports: {} },
   me = {};
  Pt.exports = (function () {
   if (Lt) return me;
   Lt = 1;
   var d = T.utils.removeUndefined,
    l =
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    u =
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
   return (
    (me.emailAddress = function () {
     return {
      validate: function (o) {
       if (o.value === '') return { valid: !0 };
       var a = Object.assign(
         {},
         { multiple: !1, requireGlobalDomain: !1, separator: /[,;]/ },
         d(o.options),
        ),
        r = a.requireGlobalDomain ? u : l;
       if (a.multiple === !0 || ''.concat(a.multiple) === 'true') {
        for (
         var e = a.separator || /[,;]/,
          t = (function (c, p) {
           for (
            var h = c.split(/"/), y = h.length, E = [], S = '', N = 0;
            N < y;
            N++
           )
            if (N % 2 == 0) {
             var $ = h[N].split(p),
              w = $.length;
             if (w === 1) S += $[0];
             else {
              E.push(S + $[0]);
              for (var _ = 1; _ < w - 1; _++) E.push($[_]);
              S = $[w - 1];
             }
            } else (S += '"' + h[N]), N < y - 1 && (S += '"');
           return E.push(S), E;
          })(o.value, e),
          n = t.length,
          s = 0;
         s < n;
         s++
        )
         if (!r.test(t[s])) return { valid: !1 };
        return { valid: !0 };
       }
       return { valid: r.test(o.value) };
      },
     };
    }),
    me
   );
  })();
  var Rt,
   rn = Pt.exports,
   Dt = { exports: {} },
   ge = {};
  Dt.exports = (function () {
   if (Rt) return ge;
   Rt = 1;
   var d = function (l) {
    return l.indexOf('.') === -1 ? l : l.split('.').slice(0, -1).join('.');
   };
   return (
    (ge.file = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       var u,
        o,
        a = l.options.extension
         ? l.options.extension
            .toLowerCase()
            .split(',')
            .map(function (p) {
             return p.trim();
            })
         : [],
        r = l.options.type
         ? l.options.type
            .toLowerCase()
            .split(',')
            .map(function (p) {
             return p.trim();
            })
         : [];
       if (window.File && window.FileList && window.FileReader) {
        var e = l.element.files,
         t = e.length,
         n = 0;
        if (
         l.options.maxFiles &&
         t > parseInt(''.concat(l.options.maxFiles), 10)
        )
         return { meta: { error: 'INVALID_MAX_FILES' }, valid: !1 };
        if (
         l.options.minFiles &&
         t < parseInt(''.concat(l.options.minFiles), 10)
        )
         return { meta: { error: 'INVALID_MIN_FILES' }, valid: !1 };
        for (var s = {}, c = 0; c < t; c++) {
         if (
          ((n += e[c].size),
          (s = {
           ext: (u = e[c].name.substr(e[c].name.lastIndexOf('.') + 1)),
           file: e[c],
           size: e[c].size,
           type: e[c].type,
          }),
          l.options.minSize &&
           e[c].size < parseInt(''.concat(l.options.minSize), 10))
         )
          return {
           meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, s),
           valid: !1,
          };
         if (
          l.options.maxSize &&
          e[c].size > parseInt(''.concat(l.options.maxSize), 10)
         )
          return {
           meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, s),
           valid: !1,
          };
         if (a.length > 0 && a.indexOf(u.toLowerCase()) === -1)
          return {
           meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, s),
           valid: !1,
          };
         if (
          r.length > 0 &&
          e[c].type &&
          r.indexOf(e[c].type.toLowerCase()) === -1
         )
          return {
           meta: Object.assign({}, { error: 'INVALID_TYPE' }, s),
           valid: !1,
          };
         if (
          l.options.validateFileName &&
          !l.options.validateFileName(d(e[c].name))
         )
          return {
           meta: Object.assign({}, { error: 'INVALID_NAME' }, s),
           valid: !1,
          };
        }
        if (
         l.options.maxTotalSize &&
         n > parseInt(''.concat(l.options.maxTotalSize), 10)
        )
         return {
          meta: Object.assign(
           {},
           { error: 'INVALID_MAX_TOTAL_SIZE', totalSize: n },
           s,
          ),
          valid: !1,
         };
        if (
         l.options.minTotalSize &&
         n < parseInt(''.concat(l.options.minTotalSize), 10)
        )
         return {
          meta: Object.assign(
           {},
           { error: 'INVALID_MIN_TOTAL_SIZE', totalSize: n },
           s,
          ),
          valid: !1,
         };
       } else {
        if (
         ((u = l.value.substr(l.value.lastIndexOf('.') + 1)),
         a.length > 0 && a.indexOf(u.toLowerCase()) === -1)
        )
         return { meta: { error: 'INVALID_EXTENSION', ext: u }, valid: !1 };
        if (
         ((o = d(l.value)),
         l.options.validateFileName && !l.options.validateFileName(o))
        )
         return { meta: { error: 'INVALID_NAME', name: o }, valid: !1 };
       }
       return { valid: !0 };
      },
     };
    }),
    ge
   );
  })();
  var Zt,
   an = Dt.exports,
   _t = { exports: {} },
   be = {};
  _t.exports = (function () {
   if (Zt) return be;
   Zt = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.removeUndefined;
   return (
    (be.greaterThan = function () {
     return {
      validate: function (o) {
       if (o.value === '') return { valid: !0 };
       var a = Object.assign({}, { inclusive: !0, message: '' }, u(o.options)),
        r = parseFloat(''.concat(a.min).replace(',', '.'));
       return a.inclusive
        ? {
           message: l(
            o.l10n ? a.message || o.l10n.greaterThan.default : a.message,
            ''.concat(r),
           ),
           valid: parseFloat(o.value) >= r,
          }
        : {
           message: l(
            o.l10n ? a.message || o.l10n.greaterThan.notInclusive : a.message,
            ''.concat(r),
           ),
           valid: parseFloat(o.value) > r,
          };
      },
     };
    }),
    be
   );
  })();
  var Bt,
   nn = _t.exports,
   Gt = { exports: {} },
   Ut = {};
  Gt.exports =
   (Bt ||
    ((Bt = 1),
    (Ut.identical = function () {
     return {
      validate: function (d) {
       var l =
        typeof d.options.compare == 'function'
         ? d.options.compare.call(this)
         : d.options.compare;
       return { valid: l === '' || d.value === l };
      },
     };
    })),
   Ut);
  var jt,
   sn = Gt.exports,
   Kt = { exports: {} },
   Ae = {};
  Kt.exports = (function () {
   if (jt) return Ae;
   jt = 1;
   var d = T.utils.removeUndefined;
   return (
    (Ae.integer = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       var u = Object.assign(
         {},
         { decimalSeparator: '.', thousandsSeparator: '' },
         d(l.options),
        ),
        o = u.decimalSeparator === '.' ? '\\.' : u.decimalSeparator,
        a = u.thousandsSeparator === '.' ? '\\.' : u.thousandsSeparator,
        r = new RegExp(
         '^-?[0-9]{1,3}('.concat(a, '[0-9]{3})*(').concat(o, '[0-9]+)?$'),
        ),
        e = new RegExp(a, 'g'),
        t = ''.concat(l.value);
       if (!r.test(t)) return { valid: !1 };
       a && (t = t.replace(e, '')), o && (t = t.replace(o, '.'));
       var n = parseFloat(t);
       return { valid: !isNaN(n) && isFinite(n) && Math.floor(n) === n };
      },
     };
    }),
    Ae
   );
  })();
  var zt,
   on = Kt.exports,
   Yt = { exports: {} },
   ye = {};
  Yt.exports = (function () {
   if (zt) return ye;
   zt = 1;
   var d = T.utils.removeUndefined;
   return (
    (ye.ip = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       var u = Object.assign({}, { ipv4: !0, ipv6: !0 }, d(l.options)),
        o =
         /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
        a =
         /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
       switch (!0) {
        case u.ipv4 && !u.ipv6:
         return {
          message: l.l10n ? u.message || l.l10n.ip.ipv4 : u.message,
          valid: o.test(l.value),
         };
        case !u.ipv4 && u.ipv6:
         return {
          message: l.l10n ? u.message || l.l10n.ip.ipv6 : u.message,
          valid: a.test(l.value),
         };
        case u.ipv4 && u.ipv6:
        default:
         return {
          message: l.l10n ? u.message || l.l10n.ip.default : u.message,
          valid: o.test(l.value) || a.test(l.value),
         };
       }
      },
     };
    }),
    ye
   );
  })();
  var Jt,
   ln = Yt.exports,
   Xt = { exports: {} },
   Ee = {};
  Xt.exports = (function () {
   if (Jt) return Ee;
   Jt = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.removeUndefined;
   return (
    (Ee.lessThan = function () {
     return {
      validate: function (o) {
       if (o.value === '') return { valid: !0 };
       var a = Object.assign({}, { inclusive: !0, message: '' }, u(o.options)),
        r = parseFloat(''.concat(a.max).replace(',', '.'));
       return a.inclusive
        ? {
           message: l(
            o.l10n ? a.message || o.l10n.lessThan.default : a.message,
            ''.concat(r),
           ),
           valid: parseFloat(o.value) <= r,
          }
        : {
           message: l(
            o.l10n ? a.message || o.l10n.lessThan.notInclusive : a.message,
            ''.concat(r),
           ),
           valid: parseFloat(o.value) < r,
          };
      },
     };
    }),
    Ee
   );
  })();
  var Wt,
   dn = Xt.exports,
   qt = { exports: {} },
   Qt = {};
  qt.exports =
   (Wt ||
    ((Wt = 1),
    (Qt.notEmpty = function () {
     return {
      validate: function (d) {
       var l = !!d.options && !!d.options.trim,
        u = d.value;
       return { valid: (!l && u !== '') || (l && u !== '' && u.trim() !== '') };
      },
     };
    })),
   Qt);
  var er,
   un = qt.exports,
   tr = { exports: {} },
   Ie = {};
  tr.exports = (function () {
   if (er) return Ie;
   er = 1;
   var d = T.utils.removeUndefined;
   return (
    (Ie.numeric = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       var u = Object.assign(
         {},
         { decimalSeparator: '.', thousandsSeparator: '' },
         d(l.options),
        ),
        o = ''.concat(l.value);
       o.substr(0, 1) === u.decimalSeparator
        ? (o = '0'.concat(u.decimalSeparator).concat(o.substr(1)))
        : o.substr(0, 2) === '-'.concat(u.decimalSeparator) &&
          (o = '-0'.concat(u.decimalSeparator).concat(o.substr(2)));
       var a = u.decimalSeparator === '.' ? '\\.' : u.decimalSeparator,
        r = u.thousandsSeparator === '.' ? '\\.' : u.thousandsSeparator,
        e = new RegExp(
         '^-?[0-9]{1,3}('.concat(r, '[0-9]{3})*(').concat(a, '[0-9]+)?$'),
        ),
        t = new RegExp(r, 'g');
       if (!e.test(o)) return { valid: !1 };
       r && (o = o.replace(t, '')), a && (o = o.replace(a, '.'));
       var n = parseFloat(o);
       return { valid: !isNaN(n) && isFinite(n) };
      },
     };
    }),
    Ie
   );
  })();
  var rr,
   cn = tr.exports,
   ar = { exports: {} },
   xe = {};
  ar.exports = (function () {
   if (rr) return xe;
   rr = 1;
   var d = T.utils.call;
   return (
    (xe.promise = function () {
     return {
      validate: function (l) {
       return d(l.options.promise, [l]);
      },
     };
    }),
    xe
   );
  })();
  var nr,
   fn = ar.exports,
   ir = { exports: {} },
   sr = {};
  ir.exports =
   (nr ||
    ((nr = 1),
    (sr.regexp = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       var l = d.options.regexp;
       if (l instanceof RegExp) return { valid: l.test(d.value) };
       var u = l.toString();
       return {
        valid: (d.options.flags
         ? new RegExp(u, d.options.flags)
         : new RegExp(u)
        ).test(d.value),
       };
      },
     };
    })),
   sr);
  var or,
   pn = ir.exports,
   lr = { exports: {} },
   Ce = {};
  lr.exports = (function () {
   if (or) return Ce;
   or = 1;
   var d = T,
    l = d.utils.fetch,
    u = d.utils.removeUndefined;
   return (
    (Ce.remote = function () {
     var o = {
      crossDomain: !1,
      data: {},
      headers: {},
      method: 'GET',
      validKey: 'valid',
     };
     return {
      validate: function (a) {
       if (a.value === '') return Promise.resolve({ valid: !0 });
       var r = Object.assign({}, o, u(a.options)),
        e = r.data;
       typeof r.data == 'function' && (e = r.data.call(this, a)),
        typeof e == 'string' && (e = JSON.parse(e)),
        (e[r.name || a.field] = a.value);
       var t = typeof r.url == 'function' ? r.url.call(this, a) : r.url;
       return l(t, {
        crossDomain: r.crossDomain,
        headers: r.headers,
        method: r.method,
        params: e,
       })
        .then(function (n) {
         return Promise.resolve({
          message: n.message,
          meta: n,
          valid: ''.concat(n[r.validKey]) === 'true',
         });
        })
        .catch(function (n) {
         return Promise.reject({ valid: !1 });
        });
      },
     };
    }),
    Ce
   );
  })();
  var dr,
   vn = lr.exports,
   ur = { exports: {} },
   Oe = {};
  ur.exports = (function () {
   if (dr) return Oe;
   dr = 1;
   var d = T.utils.removeUndefined;
   return (
    (Oe.stringCase = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       var u = Object.assign({}, { case: 'lower' }, d(l.options)),
        o = (u.case || 'lower').toLowerCase();
       return {
        message:
         u.message ||
         (l.l10n
          ? o === 'upper'
            ? l.l10n.stringCase.upper
            : l.l10n.stringCase.default
          : u.message),
        valid:
         o === 'upper'
          ? l.value === l.value.toUpperCase()
          : l.value === l.value.toLowerCase(),
       };
      },
     };
    }),
    Oe
   );
  })();
  var cr,
   hn = ur.exports,
   fr = { exports: {} },
   Se = {};
  fr.exports = (function () {
   if (cr) return Se;
   cr = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.removeUndefined;
   return (
    (Se.stringLength = function () {
     return {
      validate: function (o) {
       var a = Object.assign(
         {},
         { message: '', trim: !1, utf8Bytes: !1 },
         u(o.options),
        ),
        r =
         a.trim === !0 || ''.concat(a.trim) === 'true'
          ? o.value.trim()
          : o.value;
       if (r === '') return { valid: !0 };
       var e = a.min ? ''.concat(a.min) : '',
        t = a.max ? ''.concat(a.max) : '',
        n = a.utf8Bytes
         ? (function (p) {
            for (var h = p.length, y = p.length - 1; y >= 0; y--) {
             var E = p.charCodeAt(y);
             E > 127 && E <= 2047 ? h++ : E > 2047 && E <= 65535 && (h += 2),
              E >= 56320 && E <= 57343 && y--;
            }
            return h;
           })(r)
         : r.length,
        s = !0,
        c = o.l10n ? a.message || o.l10n.stringLength.default : a.message;
       switch (
        (((e && n < parseInt(e, 10)) || (t && n > parseInt(t, 10))) && (s = !1),
        !0)
       ) {
        case !!e && !!t:
         c = l(o.l10n ? a.message || o.l10n.stringLength.between : a.message, [
          e,
          t,
         ]);
         break;
        case !!e:
         c = l(
          o.l10n ? a.message || o.l10n.stringLength.more : a.message,
          ''.concat(parseInt(e, 10)),
         );
         break;
        case !!t:
         c = l(
          o.l10n ? a.message || o.l10n.stringLength.less : a.message,
          ''.concat(parseInt(t, 10)),
         );
       }
       return { message: c, valid: s };
      },
     };
    }),
    Se
   );
  })();
  var pr,
   mn = fr.exports,
   vr = { exports: {} },
   Ve = {};
  vr.exports = (function () {
   if (pr) return Ve;
   pr = 1;
   var d = T.utils.removeUndefined;
   return (
    (Ve.uri = function () {
     var l = {
      allowEmptyProtocol: !1,
      allowLocal: !1,
      protocol: 'http, https, ftp',
     };
     return {
      validate: function (u) {
       if (u.value === '') return { valid: !0 };
       var o = Object.assign({}, l, d(u.options)),
        a = o.allowLocal === !0 || ''.concat(o.allowLocal) === 'true',
        r =
         o.allowEmptyProtocol === !0 ||
         ''.concat(o.allowEmptyProtocol) === 'true',
        e = o.protocol.split(',').join('|').replace(/\s/g, '');
       return {
        valid: new RegExp(
         '^(?:(?:' +
          e +
          ')://)' +
          (r ? '?' : '') +
          '(?:\\S+(?::\\S*)?@)?(?:' +
          (a
           ? ''
           : '(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
          '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
          (a ? '?' : '') +
          ')(?::\\d{2,5})?(?:/[^\\s]*)?$',
         'i',
        ).test(u.value),
       };
      },
     };
    }),
    Ve
   );
  })();
  var hr,
   gn = vr.exports,
   mr = { exports: {} },
   gr = {};
  mr.exports =
   (hr ||
    ((hr = 1),
    (gr.base64 = function () {
     return {
      validate: function (d) {
       return {
        valid:
         d.value === '' ||
         /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
          d.value,
         ),
       };
      },
     };
    })),
   gr);
  var br,
   bn = mr.exports,
   Ar = { exports: {} },
   yr = {};
  Ar.exports =
   (br ||
    ((br = 1),
    (yr.bic = function () {
     return {
      validate: function (d) {
       return {
        valid:
         d.value === '' ||
         /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(d.value),
       };
      },
     };
    })),
   yr);
  var Er,
   An = Ar.exports,
   Ir = { exports: {} },
   xr = {};
  Ir.exports =
   (Er ||
    ((Er = 1),
    (xr.color = function () {
     var d = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'],
      l = [
       'aliceblue',
       'antiquewhite',
       'aqua',
       'aquamarine',
       'azure',
       'beige',
       'bisque',
       'black',
       'blanchedalmond',
       'blue',
       'blueviolet',
       'brown',
       'burlywood',
       'cadetblue',
       'chartreuse',
       'chocolate',
       'coral',
       'cornflowerblue',
       'cornsilk',
       'crimson',
       'cyan',
       'darkblue',
       'darkcyan',
       'darkgoldenrod',
       'darkgray',
       'darkgreen',
       'darkgrey',
       'darkkhaki',
       'darkmagenta',
       'darkolivegreen',
       'darkorange',
       'darkorchid',
       'darkred',
       'darksalmon',
       'darkseagreen',
       'darkslateblue',
       'darkslategray',
       'darkslategrey',
       'darkturquoise',
       'darkviolet',
       'deeppink',
       'deepskyblue',
       'dimgray',
       'dimgrey',
       'dodgerblue',
       'firebrick',
       'floralwhite',
       'forestgreen',
       'fuchsia',
       'gainsboro',
       'ghostwhite',
       'gold',
       'goldenrod',
       'gray',
       'green',
       'greenyellow',
       'grey',
       'honeydew',
       'hotpink',
       'indianred',
       'indigo',
       'ivory',
       'khaki',
       'lavender',
       'lavenderblush',
       'lawngreen',
       'lemonchiffon',
       'lightblue',
       'lightcoral',
       'lightcyan',
       'lightgoldenrodyellow',
       'lightgray',
       'lightgreen',
       'lightgrey',
       'lightpink',
       'lightsalmon',
       'lightseagreen',
       'lightskyblue',
       'lightslategray',
       'lightslategrey',
       'lightsteelblue',
       'lightyellow',
       'lime',
       'limegreen',
       'linen',
       'magenta',
       'maroon',
       'mediumaquamarine',
       'mediumblue',
       'mediumorchid',
       'mediumpurple',
       'mediumseagreen',
       'mediumslateblue',
       'mediumspringgreen',
       'mediumturquoise',
       'mediumvioletred',
       'midnightblue',
       'mintcream',
       'mistyrose',
       'moccasin',
       'navajowhite',
       'navy',
       'oldlace',
       'olive',
       'olivedrab',
       'orange',
       'orangered',
       'orchid',
       'palegoldenrod',
       'palegreen',
       'paleturquoise',
       'palevioletred',
       'papayawhip',
       'peachpuff',
       'peru',
       'pink',
       'plum',
       'powderblue',
       'purple',
       'red',
       'rosybrown',
       'royalblue',
       'saddlebrown',
       'salmon',
       'sandybrown',
       'seagreen',
       'seashell',
       'sienna',
       'silver',
       'skyblue',
       'slateblue',
       'slategray',
       'slategrey',
       'snow',
       'springgreen',
       'steelblue',
       'tan',
       'teal',
       'thistle',
       'tomato',
       'transparent',
       'turquoise',
       'violet',
       'wheat',
       'white',
       'whitesmoke',
       'yellow',
       'yellowgreen',
      ],
      u = function (t) {
       return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
        t,
       );
      },
      o = function (t) {
       return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
        t,
       );
      },
      a = function (t) {
       return l.indexOf(t) >= 0;
      },
      r = function (t) {
       return (
        /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(
         t,
        ) ||
        /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
         t,
        )
       );
      },
      e = function (t) {
       return (
        /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
         t,
        ) ||
        /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
         t,
        )
       );
      };
     return {
      validate: function (t) {
       if (t.value === '') return { valid: !0 };
       for (
        var n,
         s = 0,
         c =
          typeof t.options.type == 'string'
           ? t.options.type.toString().replace(/s/g, '').split(',')
           : t.options.type || d;
        s < c.length;
        s++
       ) {
        var p = c[s].toLowerCase();
        if (d.indexOf(p) !== -1) {
         var h = !0;
         switch (p) {
          case 'hex':
           (n = t.value), (h = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n));
           break;
          case 'hsl':
           h = u(t.value);
           break;
          case 'hsla':
           h = o(t.value);
           break;
          case 'keyword':
           h = a(t.value);
           break;
          case 'rgb':
           h = r(t.value);
           break;
          case 'rgba':
           h = e(t.value);
         }
         if (h) return { valid: !0 };
        }
       }
       return { valid: !1 };
      },
     };
    })),
   xr);
  var Cr,
   yn = Ir.exports,
   Or = { exports: {} },
   Sr = {};
  Or.exports =
   (Cr ||
    ((Cr = 1),
    (Sr.cusip = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       var l = d.value.toUpperCase();
       if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(l))
        return { valid: !1 };
       var u = l.split(''),
        o = u.pop(),
        a = u
         .map(function (r) {
          var e = r.charCodeAt(0);
          switch (!0) {
           case r === '*':
            return 36;
           case r === '@':
            return 37;
           case r === '#':
            return 38;
           case e >= 65 && e <= 90:
            return e - 65 + 10;
           default:
            return parseInt(r, 10);
          }
         })
         .map(function (r, e) {
          var t = e % 2 == 0 ? r : 2 * r;
          return Math.floor(t / 10) + (t % 10);
         })
         .reduce(function (r, e) {
          return r + e;
         }, 0);
       return { valid: o === ''.concat((10 - (a % 10)) % 10) };
      },
     };
    })),
   Sr);
  var Vr,
   En = Or.exports,
   Fr = { exports: {} },
   kr = {};
  Fr.exports =
   (Vr ||
    ((Vr = 1),
    (kr.ean = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(d.value))
        return { valid: !1 };
       for (
        var l = d.value.length, u = 0, o = l === 8 ? [3, 1] : [1, 3], a = 0;
        a < l - 1;
        a++
       )
        u += parseInt(d.value.charAt(a), 10) * o[a % 2];
       return {
        valid: ''.concat((u = (10 - (u % 10)) % 10)) === d.value.charAt(l - 1),
       };
      },
     };
    })),
   kr);
  var wr,
   In = Fr.exports,
   Hr = { exports: {} },
   $r = {};
  Hr.exports =
   (wr ||
    ((wr = 1),
    ($r.ein = function () {
     var d = {
      ANDOVER: ['10', '12'],
      ATLANTA: ['60', '67'],
      AUSTIN: ['50', '53'],
      BROOKHAVEN: [
       '01',
       '02',
       '03',
       '04',
       '05',
       '06',
       '11',
       '13',
       '14',
       '16',
       '21',
       '22',
       '23',
       '25',
       '34',
       '51',
       '52',
       '54',
       '55',
       '56',
       '57',
       '58',
       '59',
       '65',
      ],
      CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
      FRESNO: ['15', '24'],
      INTERNET: ['20', '26', '27', '45', '46', '47'],
      KANSAS_CITY: ['40', '44'],
      MEMPHIS: ['94', '95'],
      OGDEN: ['80', '90'],
      PHILADELPHIA: [
       '33',
       '39',
       '41',
       '42',
       '43',
       '48',
       '62',
       '63',
       '64',
       '66',
       '68',
       '71',
       '72',
       '73',
       '74',
       '75',
       '76',
       '77',
       '81',
       '82',
       '83',
       '84',
       '85',
       '86',
       '87',
       '88',
       '91',
       '92',
       '93',
       '98',
       '99',
      ],
      SMALL_BUSINESS_ADMINISTRATION: ['31'],
     };
     return {
      validate: function (l) {
       if (l.value === '') return { meta: null, valid: !0 };
       if (!/^[0-9]{2}-?[0-9]{7}$/.test(l.value))
        return { meta: null, valid: !1 };
       var u = ''.concat(l.value.substr(0, 2));
       for (var o in d)
        if (d[o].indexOf(u) !== -1) return { meta: { campus: o }, valid: !0 };
       return { meta: null, valid: !1 };
      },
     };
    })),
   $r);
  var Nr,
   xn = Hr.exports,
   Mr = { exports: {} },
   Fe = {};
  Mr.exports = (function () {
   if (Nr) return Fe;
   Nr = 1;
   var d = T.algorithms.mod37And36;
   return (
    (Fe.grid = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       var u = l.value.toUpperCase();
       return /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(
        u,
       )
        ? ((u = u.replace(/\s/g, '').replace(/-/g, '')).substr(0, 5) ===
           'GRID:' && (u = u.substr(5)),
          { valid: d(u) })
        : { valid: !1 };
      },
     };
    }),
    Fe
   );
  })();
  var Tr,
   Cn = Mr.exports,
   Lr = { exports: {} },
   Pr = {};
  Lr.exports =
   (Tr ||
    ((Tr = 1),
    (Pr.hex = function () {
     return {
      validate: function (d) {
       return { valid: d.value === '' || /^[0-9a-fA-F]+$/.test(d.value) };
      },
     };
    })),
   Pr);
  var Rr,
   On = Lr.exports,
   Dr = { exports: {} },
   ke = {};
  Dr.exports = (function () {
   if (Rr) return ke;
   Rr = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.removeUndefined;
   return (
    (ke.iban = function () {
     var o = {
       AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',
       AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',
       AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',
       AO: 'AO[0-9]{2}[0-9]{21}',
       AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',
       AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',
       BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',
       BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',
       BF: 'BF[0-9]{2}[0-9]{23}',
       BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',
       BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',
       BI: 'BI[0-9]{2}[0-9]{12}',
       BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',
       BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',
       CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
       CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',
       CM: 'CM[0-9]{2}[0-9]{23}',
       CR: 'CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}',
       CV: 'CV[0-9]{2}[0-9]{21}',
       CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',
       CZ: 'CZ[0-9]{2}[0-9]{20}',
       DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',
       DK: 'DK[0-9]{2}[0-9]{14}',
       DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',
       DZ: 'DZ[0-9]{2}[0-9]{20}',
       EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',
       ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',
       FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',
       FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
       FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
       GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
       GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',
       GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',
       GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
       GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',
       GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',
       HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',
       HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',
       IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
       IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',
       IR: 'IR[0-9]{2}[0-9]{22}',
       IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',
       IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
       JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',
       KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',
       KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
       LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',
       LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
       LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',
       LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
       LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',
       MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
       MD: 'MD[0-9]{2}[A-Z0-9]{20}',
       ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
       MG: 'MG[0-9]{2}[0-9]{23}',
       MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',
       ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',
       MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',
       MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',
       MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',
       MZ: 'MZ[0-9]{2}[0-9]{21}',
       NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',
       NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',
       PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
       PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',
       PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
       PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',
       QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
       RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
       RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
       SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',
       SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',
       SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',
       SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',
       SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
       SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',
       TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}',
       TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
       TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',
       VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',
       XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}',
      },
      a = [
       'AT',
       'BE',
       'BG',
       'CH',
       'CY',
       'CZ',
       'DE',
       'DK',
       'EE',
       'ES',
       'FI',
       'FR',
       'GB',
       'GI',
       'GR',
       'HR',
       'HU',
       'IE',
       'IS',
       'IT',
       'LI',
       'LT',
       'LU',
       'LV',
       'MC',
       'MT',
       'NL',
       'NO',
       'PL',
       'PT',
       'RO',
       'SE',
       'SI',
       'SK',
       'SM',
      ];
     return {
      validate: function (r) {
       if (r.value === '') return { valid: !0 };
       var e = Object.assign({}, { message: '' }, u(r.options)),
        t = r.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
        n = e.country || t.substr(0, 2);
       if (!o[n]) return { message: e.message, valid: !1 };
       if (e.sepa !== void 0) {
        var s = a.indexOf(n) !== -1;
        if (
         ((e.sepa === 'true' || e.sepa === !0) && !s) ||
         ((e.sepa === 'false' || e.sepa === !1) && s)
        )
         return { message: e.message, valid: !1 };
       }
       var c = l(
        r.l10n ? e.message || r.l10n.iban.country : e.message,
        r.l10n ? r.l10n.iban.countries[n] : n,
       );
       if (!new RegExp('^'.concat(o[n], '$')).test(r.value))
        return { message: c, valid: !1 };
       t = (t = ''.concat(t.substr(4)).concat(t.substr(0, 4)))
        .split('')
        .map(function (E) {
         var S = E.charCodeAt(0);
         return S >= 65 && S <= 90 ? S - 65 + 10 : E;
        })
        .join('');
       for (
        var p = parseInt(t.substr(0, 1), 10), h = t.length, y = 1;
        y < h;
        ++y
       )
        p = (10 * p + parseInt(t.substr(y, 1), 10)) % 97;
       return { message: c, valid: p === 1 };
      },
     };
    }),
    ke
   );
  })();
  var Zr,
   Sn = Dr.exports,
   _r = { exports: {} },
   we = {};
  _r.exports = (function () {
   if (Zr) return we;
   Zr = 1;
   var d = T;
   function l(O, A) {
    if (!/^\d{13}$/.test(O)) return !1;
    var F = parseInt(O.substr(0, 2), 10),
     P = parseInt(O.substr(2, 2), 10),
     L = parseInt(O.substr(7, 2), 10),
     k = parseInt(O.substr(12, 1), 10);
    if (F > 31 || P > 12) return !1;
    for (var Z = 0, v = 0; v < 6; v++)
     Z += (7 - v) * (parseInt(O.charAt(v), 10) + parseInt(O.charAt(v + 6), 10));
    if ((((Z = 11 - (Z % 11)) != 10 && Z !== 11) || (Z = 0), Z !== k))
     return !1;
    switch (A.toUpperCase()) {
     case 'BA':
      return 10 <= L && L <= 19;
     case 'MK':
      return 41 <= L && L <= 49;
     case 'ME':
      return 20 <= L && L <= 29;
     case 'RS':
      return 70 <= L && L <= 99;
     case 'SI':
      return 50 <= L && L <= 59;
     default:
      return !0;
    }
   }
   var u = d.utils.isValidDate,
    o = d.utils.isValidDate,
    a = d.utils.isValidDate;
   function r(O) {
    if (!/^\d{9,10}$/.test(O)) return { meta: {}, valid: !1 };
    var A = 1900 + parseInt(O.substr(0, 2), 10),
     F = (parseInt(O.substr(2, 2), 10) % 50) % 20,
     P = parseInt(O.substr(4, 2), 10);
    if (O.length === 9) {
     if ((A >= 1980 && (A -= 100), A > 1953)) return { meta: {}, valid: !1 };
    } else A < 1954 && (A += 100);
    if (!a(A, F, P)) return { meta: {}, valid: !1 };
    if (O.length === 10) {
     var L = parseInt(O.substr(0, 9), 10) % 11;
     return (
      A < 1985 && (L %= 10),
      { meta: {}, valid: ''.concat(L) === O.substr(9, 1) }
     );
    }
    return { meta: {}, valid: !0 };
   }
   var e = d.utils.isValidDate,
    t = d.utils.isValidDate,
    n = d.algorithms.mod11And10,
    s = d.algorithms.verhoeff,
    c = d.algorithms.luhn,
    p = d.utils.isValidDate,
    h = d.utils.isValidDate,
    y = d.utils.isValidDate;
   function E(O) {
    if (!/^[0-9]{11}$/.test(O)) return { meta: {}, valid: !1 };
    var A = parseInt(O.charAt(0), 10),
     F = parseInt(O.substr(1, 2), 10),
     P = parseInt(O.substr(3, 2), 10),
     L = parseInt(O.substr(5, 2), 10);
    if (
     !y((F = 100 * (A % 2 == 0 ? 17 + A / 2 : 17 + (A + 1) / 2) + F), P, L, !0)
    )
     return { meta: {}, valid: !1 };
    var k,
     Z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
     v = 0;
    for (k = 0; k < 10; k++) v += parseInt(O.charAt(k), 10) * Z[k];
    if ((v %= 11) != 10)
     return { meta: {}, valid: ''.concat(v) === O.charAt(10) };
    for (v = 0, Z = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], k = 0; k < 10; k++)
     v += parseInt(O.charAt(k), 10) * Z[k];
    return (
     (v %= 11) == 10 && (v = 0),
     { meta: {}, valid: ''.concat(v) === O.charAt(10) }
    );
   }
   var S = d.utils.isValidDate,
    N = d.utils.isValidDate,
    $ = d.utils.isValidDate,
    w = d.utils.isValidDate,
    _ = d.algorithms.luhn,
    V = d.utils.isValidDate,
    i = d.algorithms.luhn,
    g = d.utils.isValidDate,
    b = d.utils.format,
    m = d.utils.removeUndefined;
   return (
    (we.id = function () {
     var O = [
      'AR',
      'BA',
      'BG',
      'BR',
      'CH',
      'CL',
      'CN',
      'CO',
      'CZ',
      'DK',
      'EE',
      'ES',
      'FI',
      'FR',
      'HK',
      'HR',
      'ID',
      'IE',
      'IL',
      'IS',
      'KR',
      'LT',
      'LV',
      'ME',
      'MK',
      'MX',
      'MY',
      'NL',
      'NO',
      'PE',
      'PL',
      'RO',
      'RS',
      'SE',
      'SI',
      'SK',
      'SM',
      'TH',
      'TR',
      'TW',
      'UY',
      'ZA',
     ];
     return {
      validate: function (A) {
       if (A.value === '') return { valid: !0 };
       var F = Object.assign({}, { message: '' }, m(A.options)),
        P = A.value.substr(0, 2);
       if (
        ((P =
         typeof F.country == 'function' ? F.country.call(this) : F.country),
        O.indexOf(P) === -1)
       )
        return { valid: !0 };
       var L,
        k = { meta: {}, valid: !0 };
       switch (P.toLowerCase()) {
        case 'ar':
         (L = A.value.replace(/\./g, '')),
          (k = { meta: {}, valid: /^\d{7,8}$/.test(L) });
         break;
        case 'ba':
         k = (function (v) {
          return { meta: {}, valid: l(v, 'BA') };
         })(A.value);
         break;
        case 'bg':
         k = (function (v) {
          if (!/^\d{10}$/.test(v) && !/^\d{6}\s\d{3}\s\d{1}$/.test(v))
           return { meta: {}, valid: !1 };
          var f = v.replace(/\s/g, ''),
           I = parseInt(f.substr(0, 2), 10) + 1900,
           x = parseInt(f.substr(2, 2), 10),
           C = parseInt(f.substr(4, 2), 10);
          if (
           (x > 40
            ? ((I += 100), (x -= 40))
            : x > 20 && ((I -= 100), (x -= 20)),
           !u(I, x, C))
          )
           return { meta: {}, valid: !1 };
          for (var H = 0, M = [2, 4, 8, 5, 10, 9, 7, 3, 6], R = 0; R < 9; R++)
           H += parseInt(f.charAt(R), 10) * M[R];
          return {
           meta: {},
           valid: ''.concat((H = (H % 11) % 10)) === f.substr(9, 1),
          };
         })(A.value);
         break;
        case 'br':
         k = (function (v) {
          var f = v.replace(/\D/g, '');
          if (
           !/^\d{11}$/.test(f) ||
           /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(
            f,
           )
          )
           return { meta: {}, valid: !1 };
          var I,
           x = 0;
          for (I = 0; I < 9; I++) x += (10 - I) * parseInt(f.charAt(I), 10);
          if (
           (((x = 11 - (x % 11)) != 10 && x !== 11) || (x = 0),
           ''.concat(x) !== f.charAt(9))
          )
           return { meta: {}, valid: !1 };
          var C = 0;
          for (I = 0; I < 10; I++) C += (11 - I) * parseInt(f.charAt(I), 10);
          return (
           ((C = 11 - (C % 11)) != 10 && C !== 11) || (C = 0),
           { meta: {}, valid: ''.concat(C) === f.charAt(10) }
          );
         })(A.value);
         break;
        case 'ch':
         k = (function (v) {
          if (!/^756[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{2}$/.test(v))
           return { meta: {}, valid: !1 };
          for (
           var f = v.replace(/\D/g, '').substr(3),
            I = f.length,
            x = I === 8 ? [3, 1] : [1, 3],
            C = 0,
            H = 0;
           H < I - 1;
           H++
          )
           C += parseInt(f.charAt(H), 10) * x[H % 2];
          return {
           meta: {},
           valid: ''.concat((C = 10 - (C % 10))) === f.charAt(I - 1),
          };
         })(A.value);
         break;
        case 'cl':
         k = (function (v) {
          if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(v))
           return { meta: {}, valid: !1 };
          for (var f = v.replace(/-/g, ''); f.length < 9; ) f = '0'.concat(f);
          for (var I = [3, 2, 7, 6, 5, 4, 3, 2], x = 0, C = 0; C < 8; C++)
           x += parseInt(f.charAt(C), 10) * I[C];
          var H = ''.concat((x = 11 - (x % 11)));
          return (
           x === 11 ? (H = '0') : x === 10 && (H = 'K'),
           { meta: {}, valid: H === f.charAt(8).toUpperCase() }
          );
         })(A.value);
         break;
        case 'cn':
         k = (function (v) {
          var f = v.trim();
          if (!/^\d{15}$/.test(f) && !/^\d{17}[\dXx]{1}$/.test(f))
           return { meta: {}, valid: !1 };
          var I = {
            11: {
             0: [0],
             1: [
              [0, 9],
              [11, 17],
             ],
             2: [0, 28, 29],
            },
            12: { 0: [0], 1: [[0, 16]], 2: [0, 21, 23, 25] },
            13: {
             0: [0],
             1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
             2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
             3: [
              [0, 4],
              [21, 24],
             ],
             4: [[0, 4], 6, 21, [23, 35], 81],
             5: [[0, 3], [21, 35], 81, 82],
             6: [
              [0, 4],
              [21, 38],
              [81, 84],
             ],
             7: [[0, 3], 5, 6, [21, 33]],
             8: [
              [0, 4],
              [21, 28],
             ],
             9: [
              [0, 3],
              [21, 30],
              [81, 84],
             ],
             10: [[0, 3], [22, 26], 28, 81, 82],
             11: [[0, 2], [21, 28], 81, 82],
            },
            14: {
             0: [0],
             1: [0, 1, [5, 10], [21, 23], 81],
             2: [[0, 3], 11, 12, [21, 27]],
             3: [[0, 3], 11, 21, 22],
             4: [[0, 2], 11, 21, [23, 31], 81],
             5: [[0, 2], 21, 22, 24, 25, 81],
             6: [
              [0, 3],
              [21, 24],
             ],
             7: [[0, 2], [21, 29], 81],
             8: [[0, 2], [21, 30], 81, 82],
             9: [[0, 2], [21, 32], 81],
             10: [[0, 2], [21, 34], 81, 82],
             11: [[0, 2], [21, 30], 81, 82],
             23: [[0, 3], 22, 23, [25, 30], 32, 33],
            },
            15: {
             0: [0],
             1: [
              [0, 5],
              [21, 25],
             ],
             2: [
              [0, 7],
              [21, 23],
             ],
             3: [[0, 4]],
             4: [
              [0, 4],
              [21, 26],
              [28, 30],
             ],
             5: [[0, 2], [21, 26], 81],
             6: [
              [0, 2],
              [21, 27],
             ],
             7: [
              [0, 3],
              [21, 27],
              [81, 85],
             ],
             8: [
              [0, 2],
              [21, 26],
             ],
             9: [[0, 2], [21, 29], 81],
             22: [
              [0, 2],
              [21, 24],
             ],
             25: [
              [0, 2],
              [22, 31],
             ],
             26: [[0, 2], [24, 27], [29, 32], 34],
             28: [0, 1, [22, 27]],
             29: [0, [21, 23]],
            },
            21: {
             0: [0],
             1: [[0, 6], [11, 14], [22, 24], 81],
             2: [[0, 4], [11, 13], 24, [81, 83]],
             3: [[0, 4], 11, 21, 23, 81],
             4: [[0, 4], 11, [21, 23]],
             5: [[0, 5], 21, 22],
             6: [[0, 4], 24, 81, 82],
             7: [[0, 3], 11, 26, 27, 81, 82],
             8: [[0, 4], 11, 81, 82],
             9: [[0, 5], 11, 21, 22],
             10: [[0, 5], 11, 21, 81],
             11: [[0, 3], 21, 22],
             12: [[0, 2], 4, 21, 23, 24, 81, 82],
             13: [[0, 3], 21, 22, 24, 81, 82],
             14: [[0, 4], 21, 22, 81],
            },
            22: {
             0: [0],
             1: [[0, 6], 12, 22, [81, 83]],
             2: [[0, 4], 11, 21, [81, 84]],
             3: [[0, 3], 22, 23, 81, 82],
             4: [[0, 3], 21, 22],
             5: [[0, 3], 21, 23, 24, 81, 82],
             6: [[0, 2], 4, 5, [21, 23], 25, 81],
             7: [[0, 2], [21, 24], 81],
             8: [[0, 2], 21, 22, 81, 82],
             24: [[0, 6], 24, 26],
            },
            23: {
             0: [0],
             1: [[0, 12], 21, [23, 29], [81, 84]],
             2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
             3: [[0, 7], 21, 81, 82],
             4: [[0, 7], 21, 22],
             5: [[0, 3], 5, 6, [21, 24]],
             6: [
              [0, 6],
              [21, 24],
             ],
             7: [[0, 16], 22, 81],
             8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
             9: [[0, 4], 21],
             10: [[0, 5], 24, 25, 81, [83, 85]],
             11: [[0, 2], 21, 23, 24, 81, 82],
             12: [
              [0, 2],
              [21, 26],
              [81, 83],
             ],
             27: [
              [0, 4],
              [21, 23],
             ],
            },
            31: { 0: [0], 1: [0, 1, [3, 10], [12, 20]], 2: [0, 30] },
            32: {
             0: [0],
             1: [[0, 7], 11, [13, 18], 24, 25],
             2: [[0, 6], 11, 81, 82],
             3: [[0, 5], 11, 12, [21, 24], 81, 82],
             4: [[0, 2], 4, 5, 11, 12, 81, 82],
             5: [
              [0, 9],
              [81, 85],
             ],
             6: [[0, 2], 11, 12, 21, 23, [81, 84]],
             7: [0, 1, 3, 5, 6, [21, 24]],
             8: [[0, 4], 11, 26, [29, 31]],
             9: [[0, 3], [21, 25], 28, 81, 82],
             10: [[0, 3], 11, 12, 23, 81, 84, 88],
             11: [[0, 2], 11, 12, [81, 83]],
             12: [
              [0, 4],
              [81, 84],
             ],
             13: [[0, 2], 11, [21, 24]],
            },
            33: {
             0: [0],
             1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
             2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
             3: [[0, 4], 22, 24, [26, 29], 81, 82],
             4: [[0, 2], 11, 21, 24, [81, 83]],
             5: [
              [0, 3],
              [21, 23],
             ],
             6: [[0, 2], 21, 24, [81, 83]],
             7: [[0, 3], 23, 26, 27, [81, 84]],
             8: [[0, 3], 22, 24, 25, 81],
             9: [[0, 3], 21, 22],
             10: [[0, 4], [21, 24], 81, 82],
             11: [[0, 2], [21, 27], 81],
            },
            34: {
             0: [0],
             1: [[0, 4], 11, [21, 24], 81],
             2: [[0, 4], 7, 8, [21, 23], 25],
             3: [[0, 4], 11, [21, 23]],
             4: [[0, 6], 21],
             5: [[0, 4], 6, [21, 23]],
             6: [[0, 4], 21],
             7: [[0, 3], 11, 21],
             8: [[0, 3], 11, [22, 28], 81],
             10: [
              [0, 4],
              [21, 24],
             ],
             11: [[0, 3], 22, [24, 26], 81, 82],
             12: [[0, 4], 21, 22, 25, 26, 82],
             13: [
              [0, 2],
              [21, 24],
             ],
             14: [
              [0, 2],
              [21, 24],
             ],
             15: [
              [0, 3],
              [21, 25],
             ],
             16: [
              [0, 2],
              [21, 23],
             ],
             17: [
              [0, 2],
              [21, 23],
             ],
             18: [[0, 2], [21, 25], 81],
            },
            35: {
             0: [0],
             1: [[0, 5], 11, [21, 25], 28, 81, 82],
             2: [
              [0, 6],
              [11, 13],
             ],
             3: [[0, 5], 22],
             4: [[0, 3], 21, [23, 30], 81],
             5: [[0, 5], 21, [24, 27], [81, 83]],
             6: [[0, 3], [22, 29], 81],
             7: [
              [0, 2],
              [21, 25],
              [81, 84],
             ],
             8: [[0, 2], [21, 25], 81],
             9: [[0, 2], [21, 26], 81, 82],
            },
            36: {
             0: [0],
             1: [[0, 5], 11, [21, 24]],
             2: [[0, 3], 22, 81],
             3: [[0, 2], 13, [21, 23]],
             4: [[0, 3], 21, [23, 30], 81, 82],
             5: [[0, 2], 21],
             6: [[0, 2], 22, 81],
             7: [[0, 2], [21, 35], 81, 82],
             8: [[0, 3], [21, 30], 81],
             9: [
              [0, 2],
              [21, 26],
              [81, 83],
             ],
             10: [
              [0, 2],
              [21, 30],
             ],
             11: [[0, 2], [21, 30], 81],
            },
            37: {
             0: [0],
             1: [[0, 5], 12, 13, [24, 26], 81],
             2: [[0, 3], 5, [11, 14], [81, 85]],
             3: [
              [0, 6],
              [21, 23],
             ],
             4: [[0, 6], 81],
             5: [
              [0, 3],
              [21, 23],
             ],
             6: [[0, 2], [11, 13], 34, [81, 87]],
             7: [[0, 5], 24, 25, [81, 86]],
             8: [[0, 2], 11, [26, 32], [81, 83]],
             9: [[0, 3], 11, 21, 23, 82, 83],
             10: [
              [0, 2],
              [81, 83],
             ],
             11: [[0, 3], 21, 22],
             12: [[0, 3]],
             13: [[0, 2], 11, 12, [21, 29]],
             14: [[0, 2], [21, 28], 81, 82],
             15: [[0, 2], [21, 26], 81],
             16: [
              [0, 2],
              [21, 26],
             ],
             17: [
              [0, 2],
              [21, 28],
             ],
            },
            41: {
             0: [0],
             1: [[0, 6], 8, 22, [81, 85]],
             2: [[0, 5], 11, [21, 25]],
             3: [[0, 7], 11, [22, 29], 81],
             4: [[0, 4], 11, [21, 23], 25, 81, 82],
             5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
             6: [[0, 3], 11, 21, 22],
             7: [[0, 4], 11, 21, [24, 28], 81, 82],
             8: [[0, 4], 11, [21, 23], 25, [81, 83]],
             9: [[0, 2], 22, 23, [26, 28]],
             10: [[0, 2], [23, 25], 81, 82],
             11: [
              [0, 4],
              [21, 23],
             ],
             12: [[0, 2], 21, 22, 24, 81, 82],
             13: [[0, 3], [21, 30], 81],
             14: [[0, 3], [21, 26], 81],
             15: [
              [0, 3],
              [21, 28],
             ],
             16: [[0, 2], [21, 28], 81],
             17: [
              [0, 2],
              [21, 29],
             ],
             90: [0, 1],
            },
            42: {
             0: [0],
             1: [
              [0, 7],
              [11, 17],
             ],
             2: [[0, 5], 22, 81],
             3: [[0, 3], [21, 25], 81],
             5: [
              [0, 6],
              [25, 29],
              [81, 83],
             ],
             6: [[0, 2], 6, 7, [24, 26], [82, 84]],
             7: [[0, 4]],
             8: [[0, 2], 4, 21, 22, 81],
             9: [[0, 2], [21, 23], 81, 82, 84],
             10: [[0, 3], [22, 24], 81, 83, 87],
             11: [[0, 2], [21, 27], 81, 82],
             12: [[0, 2], [21, 24], 81],
             13: [[0, 3], 21, 81],
             28: [[0, 2], 22, 23, [25, 28]],
             90: [0, [4, 6], 21],
            },
            43: {
             0: [0],
             1: [[0, 5], 11, 12, 21, 22, 24, 81],
             2: [[0, 4], 11, 21, [23, 25], 81],
             3: [[0, 2], 4, 21, 81, 82],
             4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
             5: [[0, 3], 11, [21, 25], [27, 29], 81],
             6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
             7: [[0, 3], [21, 26], 81],
             8: [[0, 2], 11, 21, 22],
             9: [[0, 3], [21, 23], 81],
             10: [[0, 3], [21, 28], 81],
             11: [
              [0, 3],
              [21, 29],
             ],
             12: [[0, 2], [21, 30], 81],
             13: [[0, 2], 21, 22, 81, 82],
             31: [0, 1, [22, 27], 30],
            },
            44: {
             0: [0],
             1: [[0, 7], [11, 16], 83, 84],
             2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
             3: [0, 1, [3, 8]],
             4: [[0, 4]],
             5: [0, 1, [6, 15], 23, 82, 83],
             6: [0, 1, [4, 8]],
             7: [0, 1, [3, 5], 81, [83, 85]],
             8: [[0, 4], 11, 23, 25, [81, 83]],
             9: [[0, 3], 23, [81, 83]],
             12: [[0, 3], [23, 26], 83, 84],
             13: [[0, 3], [22, 24], 81],
             14: [[0, 2], [21, 24], 26, 27, 81],
             15: [[0, 2], 21, 23, 81],
             16: [
              [0, 2],
              [21, 25],
             ],
             17: [[0, 2], 21, 23, 81],
             18: [[0, 3], 21, 23, [25, 27], 81, 82],
             19: [0],
             20: [0],
             51: [[0, 3], 21, 22],
             52: [[0, 3], 21, 22, 24, 81],
             53: [[0, 2], [21, 23], 81],
            },
            45: {
             0: [0],
             1: [
              [0, 9],
              [21, 27],
             ],
             2: [
              [0, 5],
              [21, 26],
             ],
             3: [[0, 5], 11, 12, [21, 32]],
             4: [0, 1, [3, 6], 11, [21, 23], 81],
             5: [[0, 3], 12, 21],
             6: [[0, 3], 21, 81],
             7: [[0, 3], 21, 22],
             8: [[0, 4], 21, 81],
             9: [[0, 3], [21, 24], 81],
             10: [
              [0, 2],
              [21, 31],
             ],
             11: [
              [0, 2],
              [21, 23],
             ],
             12: [[0, 2], [21, 29], 81],
             13: [[0, 2], [21, 24], 81],
             14: [[0, 2], [21, 25], 81],
            },
            46: {
             0: [0],
             1: [0, 1, [5, 8]],
             2: [0, 1],
             3: [0, [21, 23]],
             90: [
              [0, 3],
              [5, 7],
              [21, 39],
             ],
            },
            50: {
             0: [0],
             1: [[0, 19]],
             2: [0, [22, 38], [40, 43]],
             3: [0, [81, 84]],
            },
            51: {
             0: [0],
             1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
             3: [[0, 4], 11, 21, 22],
             4: [[0, 3], 11, 21, 22],
             5: [[0, 4], 21, 22, 24, 25],
             6: [0, 1, 3, 23, 26, [81, 83]],
             7: [0, 1, 3, 4, [22, 27], 81],
             8: [[0, 2], 11, 12, [21, 24]],
             9: [
              [0, 4],
              [21, 23],
             ],
             10: [[0, 2], 11, 24, 25, 28],
             11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
             13: [[0, 4], [21, 25], 81],
             14: [
              [0, 2],
              [21, 25],
             ],
             15: [
              [0, 3],
              [21, 29],
             ],
             16: [[0, 3], [21, 23], 81],
             17: [[0, 3], [21, 25], 81],
             18: [
              [0, 3],
              [21, 27],
             ],
             19: [
              [0, 3],
              [21, 23],
             ],
             20: [[0, 2], 21, 22, 81],
             32: [0, [21, 33]],
             33: [0, [21, 38]],
             34: [0, 1, [22, 37]],
            },
            52: {
             0: [0],
             1: [[0, 3], [11, 15], [21, 23], 81],
             2: [0, 1, 3, 21, 22],
             3: [[0, 3], [21, 30], 81, 82],
             4: [
              [0, 2],
              [21, 25],
             ],
             5: [
              [0, 2],
              [21, 27],
             ],
             6: [
              [0, 3],
              [21, 28],
             ],
             22: [0, 1, [22, 30]],
             23: [0, 1, [22, 28]],
             24: [0, 1, [22, 28]],
             26: [0, 1, [22, 36]],
             27: [[0, 2], 22, 23, [25, 32]],
            },
            53: {
             0: [0],
             1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
             3: [[0, 2], [21, 26], 28, 81],
             4: [
              [0, 2],
              [21, 28],
             ],
             5: [
              [0, 2],
              [21, 24],
             ],
             6: [
              [0, 2],
              [21, 30],
             ],
             7: [
              [0, 2],
              [21, 24],
             ],
             8: [
              [0, 2],
              [21, 29],
             ],
             9: [
              [0, 2],
              [21, 27],
             ],
             23: [0, 1, [22, 29], 31],
             25: [
              [0, 4],
              [22, 32],
             ],
             26: [0, 1, [21, 28]],
             27: [0, 1, [22, 30]],
             28: [0, 1, 22, 23],
             29: [0, 1, [22, 32]],
             31: [0, 2, 3, [22, 24]],
             34: [0, [21, 23]],
             33: [0, 21, [23, 25]],
             35: [0, [21, 28]],
            },
            54: {
             0: [0],
             1: [
              [0, 2],
              [21, 27],
             ],
             21: [0, [21, 29], 32, 33],
             22: [0, [21, 29], [31, 33]],
             23: [0, 1, [22, 38]],
             24: [0, [21, 31]],
             25: [0, [21, 27]],
             26: [0, [21, 27]],
            },
            61: {
             0: [0],
             1: [[0, 4], [11, 16], 22, [24, 26]],
             2: [[0, 4], 22],
             3: [
              [0, 4],
              [21, 24],
              [26, 31],
             ],
             4: [[0, 4], [22, 31], 81],
             5: [[0, 2], [21, 28], 81, 82],
             6: [
              [0, 2],
              [21, 32],
             ],
             7: [
              [0, 2],
              [21, 30],
             ],
             8: [
              [0, 2],
              [21, 31],
             ],
             9: [
              [0, 2],
              [21, 29],
             ],
             10: [
              [0, 2],
              [21, 26],
             ],
            },
            62: {
             0: [0],
             1: [[0, 5], 11, [21, 23]],
             2: [0, 1],
             3: [[0, 2], 21],
             4: [
              [0, 3],
              [21, 23],
             ],
             5: [
              [0, 3],
              [21, 25],
             ],
             6: [
              [0, 2],
              [21, 23],
             ],
             7: [
              [0, 2],
              [21, 25],
             ],
             8: [
              [0, 2],
              [21, 26],
             ],
             9: [[0, 2], [21, 24], 81, 82],
             10: [
              [0, 2],
              [21, 27],
             ],
             11: [
              [0, 2],
              [21, 26],
             ],
             12: [
              [0, 2],
              [21, 28],
             ],
             24: [0, 21, [24, 29]],
             26: [0, 21, [23, 30]],
             29: [0, 1, [21, 27]],
             30: [0, 1, [21, 27]],
            },
            63: {
             0: [0],
             1: [
              [0, 5],
              [21, 23],
             ],
             2: [0, 2, [21, 25]],
             21: [0, [21, 23], [26, 28]],
             22: [0, [21, 24]],
             23: [0, [21, 24]],
             25: [0, [21, 25]],
             26: [0, [21, 26]],
             27: [0, 1, [21, 26]],
             28: [
              [0, 2],
              [21, 23],
             ],
            },
            64: {
             0: [0],
             1: [0, 1, [4, 6], 21, 22, 81],
             2: [[0, 3], 5, [21, 23]],
             3: [[0, 3], [21, 24], 81],
             4: [
              [0, 2],
              [21, 25],
             ],
             5: [[0, 2], 21, 22],
            },
            65: {
             0: [0],
             1: [[0, 9], 21],
             2: [[0, 5]],
             21: [0, 1, 22, 23],
             22: [0, 1, 22, 23],
             23: [[0, 3], [23, 25], 27, 28],
             28: [0, 1, [22, 29]],
             29: [0, 1, [22, 29]],
             30: [0, 1, [22, 24]],
             31: [0, 1, [21, 31]],
             32: [0, 1, [21, 27]],
             40: [0, 2, 3, [21, 28]],
             42: [[0, 2], 21, [23, 26]],
             43: [0, 1, [21, 26]],
             90: [[0, 4]],
             27: [[0, 2], 22, 23],
            },
            71: { 0: [0] },
            81: { 0: [0] },
            82: { 0: [0] },
           },
           x = parseInt(f.substr(0, 2), 10),
           C = parseInt(f.substr(2, 2), 10),
           H = parseInt(f.substr(4, 2), 10);
          if (!I[x] || !I[x][C]) return { meta: {}, valid: !1 };
          var M,
           R,
           D = !1,
           B = I[x][C];
          for (M = 0; M < B.length; M++)
           if (
            (Array.isArray(B[M]) && B[M][0] <= H && H <= B[M][1]) ||
            (!Array.isArray(B[M]) && H === B[M])
           ) {
            D = !0;
            break;
           }
          if (!D) return { meta: {}, valid: !1 };
          R = f.length === 18 ? f.substr(6, 8) : '19'.concat(f.substr(6, 6));
          var G = parseInt(R.substr(0, 4), 10),
           z = parseInt(R.substr(4, 2), 10),
           J = parseInt(R.substr(6, 2), 10);
          if (!o(G, z, J)) return { meta: {}, valid: !1 };
          if (f.length === 18) {
           var K = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
            W = 0;
           for (M = 0; M < 17; M++) W += parseInt(f.charAt(M), 10) * K[M];
           return (
            (W = (12 - (W % 11)) % 11),
            {
             meta: {},
             valid:
              (f.charAt(17).toUpperCase() !== 'X'
               ? parseInt(f.charAt(17), 10)
               : 10) === W,
            }
           );
          }
          return { meta: {}, valid: !0 };
         })(A.value);
         break;
        case 'co':
         k = (function (v) {
          var f = v.replace(/\./g, '').replace('-', '');
          if (!/^\d{8,16}$/.test(f)) return { meta: {}, valid: !1 };
          for (
           var I = f.length,
            x = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71],
            C = 0,
            H = I - 2;
           H >= 0;
           H--
          )
           C += parseInt(f.charAt(H), 10) * x[H];
          return (
           (C %= 11) >= 2 && (C = 11 - C),
           { meta: {}, valid: ''.concat(C) === f.substr(I - 1) }
          );
         })(A.value);
         break;
        case 'cz':
        case 'sk':
         k = r(A.value);
         break;
        case 'dk':
         k = (function (v) {
          if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(v))
           return { meta: {}, valid: !1 };
          var f = v.replace(/-/g, ''),
           I = parseInt(f.substr(0, 2), 10),
           x = parseInt(f.substr(2, 2), 10),
           C = parseInt(f.substr(4, 2), 10);
          switch (!0) {
           case '5678'.indexOf(f.charAt(6)) !== -1 && C >= 58:
            C += 1800;
            break;
           case '0123'.indexOf(f.charAt(6)) !== -1:
           case '49'.indexOf(f.charAt(6)) !== -1 && C >= 37:
            C += 1900;
            break;
           default:
            C += 2e3;
          }
          return { meta: {}, valid: e(C, x, I) };
         })(A.value);
         break;
        case 'ee':
        case 'lt':
         k = E(A.value);
         break;
        case 'es':
         k = (function (v) {
          var f = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(v),
           I = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(v),
           x = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(v);
          if (!f && !I && !x) return { meta: {}, valid: !1 };
          var C,
           H,
           M = v.replace(/-/g, '');
          if (f || I) {
           H = 'DNI';
           var R = 'XYZ'.indexOf(M.charAt(0));
           return (
            R !== -1 && ((M = R + M.substr(1) + ''), (H = 'NIE')),
            {
             meta: { type: H },
             valid:
              (C = 'TRWAGMYFPDXBNJZSQVHLCKE'[
               (C = parseInt(M.substr(0, 8), 10)) % 23
              ]) === M.substr(8, 1),
            }
           );
          }
          (C = M.substr(1, 7)), (H = 'CIF');
          for (var D = M[0], B = M.substr(-1), G = 0, z = 0; z < C.length; z++)
           if (z % 2 != 0) G += parseInt(C[z], 10);
           else {
            var J = '' + 2 * parseInt(C[z], 10);
            (G += parseInt(J[0], 10)),
             J.length === 2 && (G += parseInt(J[1], 10));
           }
          var K = G - 10 * Math.floor(G / 10);
          return (
           K !== 0 && (K = 10 - K),
           {
            meta: { type: H },
            valid:
             'KQS'.indexOf(D) !== -1
              ? B === 'JABCDEFGHI'[K]
              : 'ABEH'.indexOf(D) !== -1
                ? B === '' + K
                : B === '' + K || B === 'JABCDEFGHI'[K],
           }
          );
         })(A.value);
         break;
        case 'fi':
         k = (function (v) {
          if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(v))
           return { meta: {}, valid: !1 };
          var f = parseInt(v.substr(0, 2), 10),
           I = parseInt(v.substr(2, 2), 10),
           x = parseInt(v.substr(4, 2), 10);
          if (
           ((x = { '+': 1800, '-': 1900, A: 2e3 }[v.charAt(6)] + x),
           !t(x, I, f))
          )
           return { meta: {}, valid: !1 };
          if (parseInt(v.substr(7, 3), 10) < 2) return { meta: {}, valid: !1 };
          var C = parseInt(v.substr(0, 6) + v.substr(7, 3) + '', 10);
          return {
           meta: {},
           valid:
            '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(C % 31) === v.charAt(10),
          };
         })(A.value);
         break;
        case 'fr':
         k = (function (v) {
          var f = v.toUpperCase();
          if (
           !/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(f)
          )
           return { meta: {}, valid: !1 };
          var I = f.substr(5, 2);
          switch (!0) {
           case /^\d{2}$/.test(I):
            f = v;
            break;
           case I === '2A':
            f = ''.concat(v.substr(0, 5), '19').concat(v.substr(7));
            break;
           case I === '2B':
            f = ''.concat(v.substr(0, 5), '18').concat(v.substr(7));
            break;
           default:
            return { meta: {}, valid: !1 };
          }
          var x = 97 - (parseInt(f.substr(0, 13), 10) % 97);
          return {
           meta: {},
           valid: (x < 10 ? '0'.concat(x) : ''.concat(x)) === f.substr(13),
          };
         })(A.value);
         break;
        case 'hk':
         k = (function (v) {
          var f = v.toUpperCase();
          if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(f))
           return { meta: {}, valid: !1 };
          var I = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
           x = f.charAt(0),
           C = f.charAt(1),
           H = 0,
           M = f;
          /^[A-Z]$/.test(C)
           ? ((H += 9 * (10 + I.indexOf(x))),
             (H += 8 * (10 + I.indexOf(C))),
             (M = f.substr(2)))
           : ((H += 324), (H += 8 * (10 + I.indexOf(x))), (M = f.substr(1)));
          for (var R = M.length, D = 0; D < R - 1; D++)
           H += (7 - D) * parseInt(M.charAt(D), 10);
          var B = H % 11;
          return {
           meta: {},
           valid:
            (B === 0 ? '0' : 11 - B == 10 ? 'A' : ''.concat(11 - B)) ===
            M.charAt(R - 1),
          };
         })(A.value);
         break;
        case 'hr':
         k = (function (v) {
          return { meta: {}, valid: /^[0-9]{11}$/.test(v) && n(v) };
         })(A.value);
         break;
        case 'id':
         k = (function (v) {
          if (!/^[2-9]\d{11}$/.test(v)) return { meta: {}, valid: !1 };
          var f = v.split('').map(function (I) {
           return parseInt(I, 10);
          });
          return { meta: {}, valid: s(f) };
         })(A.value);
         break;
        case 'ie':
         k = (function (v) {
          if (!/^\d{7}[A-W][AHWTX]?$/.test(v)) return { meta: {}, valid: !1 };
          var f = function (I) {
           for (var x = I; x.length < 7; ) x = '0'.concat(x);
           for (var C = 'WABCDEFGHIJKLMNOPQRSTUV', H = 0, M = 0; M < 7; M++)
            H += parseInt(x.charAt(M), 10) * (8 - M);
           return (H += 9 * C.indexOf(x.substr(7))), C[H % 23];
          };
          return {
           meta: {},
           valid:
            v.length !== 9 || (v.charAt(8) !== 'A' && v.charAt(8) !== 'H')
             ? v.charAt(7) === f(v.substr(0, 7))
             : v.charAt(7) === f(v.substr(0, 7) + v.substr(8) + ''),
          };
         })(A.value);
         break;
        case 'il':
         k = (function (v) {
          return /^\d{1,9}$/.test(v)
           ? { meta: {}, valid: c(v) }
           : { meta: {}, valid: !1 };
         })(A.value);
         break;
        case 'is':
         k = (function (v) {
          if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(v))
           return { meta: {}, valid: !1 };
          var f = v.replace(/-/g, ''),
           I = parseInt(f.substr(0, 2), 10),
           x = parseInt(f.substr(2, 2), 10),
           C = parseInt(f.substr(4, 2), 10),
           H = parseInt(f.charAt(9), 10);
          if (!p((C = H === 9 ? 1900 + C : 100 * (20 + H) + C), x, I, !0))
           return { meta: {}, valid: !1 };
          for (var M = [3, 2, 7, 6, 5, 4, 3, 2], R = 0, D = 0; D < 8; D++)
           R += parseInt(f.charAt(D), 10) * M[D];
          return {
           meta: {},
           valid: ''.concat((R = 11 - (R % 11))) === f.charAt(8),
          };
         })(A.value);
         break;
        case 'kr':
         k = (function (v) {
          var f = v.replace('-', '');
          if (!/^\d{13}$/.test(f)) return { meta: {}, valid: !1 };
          var I = f.charAt(6),
           x = parseInt(f.substr(0, 2), 10),
           C = parseInt(f.substr(2, 2), 10),
           H = parseInt(f.substr(4, 2), 10);
          switch (I) {
           case '1':
           case '2':
           case '5':
           case '6':
            x += 1900;
            break;
           case '3':
           case '4':
           case '7':
           case '8':
            x += 2e3;
            break;
           default:
            x += 1800;
          }
          if (!h(x, C, H)) return { meta: {}, valid: !1 };
          for (
           var M = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5],
            R = f.length,
            D = 0,
            B = 0;
           B < R - 1;
           B++
          )
           D += M[B] * parseInt(f.charAt(B), 10);
          return {
           meta: {},
           valid: ''.concat((11 - (D % 11)) % 10) === f.charAt(R - 1),
          };
         })(A.value);
         break;
        case 'lv':
         k = (function (v) {
          if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(v))
           return { meta: {}, valid: !1 };
          var f = v.replace(/\D/g, ''),
           I = parseInt(f.substr(0, 2), 10),
           x = parseInt(f.substr(2, 2), 10),
           C = parseInt(f.substr(4, 2), 10);
          if (
           ((C = C + 1800 + 100 * parseInt(f.charAt(6), 10)), !S(C, x, I, !0))
          )
           return { meta: {}, valid: !1 };
          for (
           var H = 0, M = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], R = 0;
           R < 10;
           R++
          )
           H += parseInt(f.charAt(R), 10) * M[R];
          return {
           meta: {},
           valid: ''.concat((H = ((H + 1) % 11) % 10)) === f.charAt(10),
          };
         })(A.value);
         break;
        case 'me':
         k = (function (v) {
          return { meta: {}, valid: l(v, 'ME') };
         })(A.value);
         break;
        case 'mk':
         k = (function (v) {
          return { meta: {}, valid: l(v, 'MK') };
         })(A.value);
         break;
        case 'mx':
         k = (function (v) {
          var f = v.toUpperCase();
          if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(f))
           return { meta: {}, valid: !1 };
          var I = f.substr(0, 4);
          if (
           [
            'BACA',
            'BAKA',
            'BUEI',
            'BUEY',
            'CACA',
            'CACO',
            'CAGA',
            'CAGO',
            'CAKA',
            'CAKO',
            'COGE',
            'COGI',
            'COJA',
            'COJE',
            'COJI',
            'COJO',
            'COLA',
            'CULO',
            'FALO',
            'FETO',
            'GETA',
            'GUEI',
            'GUEY',
            'JETA',
            'JOTO',
            'KACA',
            'KACO',
            'KAGA',
            'KAGO',
            'KAKA',
            'KAKO',
            'KOGE',
            'KOGI',
            'KOJA',
            'KOJE',
            'KOJI',
            'KOJO',
            'KOLA',
            'KULO',
            'LILO',
            'LOCA',
            'LOCO',
            'LOKA',
            'LOKO',
            'MAME',
            'MAMO',
            'MEAR',
            'MEAS',
            'MEON',
            'MIAR',
            'MION',
            'MOCO',
            'MOKO',
            'MULA',
            'MULO',
            'NACA',
            'NACO',
            'PEDA',
            'PEDO',
            'PENE',
            'PIPI',
            'PITO',
            'POPO',
            'PUTA',
            'PUTO',
            'QULO',
            'RATA',
            'ROBA',
            'ROBE',
            'ROBO',
            'RUIN',
            'SENO',
            'TETA',
            'VACA',
            'VAGA',
            'VAGO',
            'VAKA',
            'VUEI',
            'VUEY',
            'WUEI',
            'WUEY',
           ].indexOf(I) >= 0
          )
           return { meta: {}, valid: !1 };
          var x = parseInt(f.substr(4, 2), 10),
           C = parseInt(f.substr(6, 2), 10),
           H = parseInt(f.substr(6, 2), 10);
          if (
           (/^[0-9]$/.test(f.charAt(16)) ? (x += 1900) : (x += 2e3),
           !N(x, C, H))
          )
           return { meta: {}, valid: !1 };
          var M = f.charAt(10);
          if (M !== 'H' && M !== 'M') return { meta: {}, valid: !1 };
          var R = f.substr(11, 2);
          if (
           [
            'AS',
            'BC',
            'BS',
            'CC',
            'CH',
            'CL',
            'CM',
            'CS',
            'DF',
            'DG',
            'GR',
            'GT',
            'HG',
            'JC',
            'MC',
            'MN',
            'MS',
            'NE',
            'NL',
            'NT',
            'OC',
            'PL',
            'QR',
            'QT',
            'SL',
            'SP',
            'SR',
            'TC',
            'TL',
            'TS',
            'VZ',
            'YN',
            'ZS',
           ].indexOf(R) === -1
          )
           return { meta: {}, valid: !1 };
          for (var D = 0, B = f.length, G = 0; G < B - 1; G++)
           D +=
            (18 - G) *
            '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ'.indexOf(f.charAt(G));
          return {
           meta: {},
           valid: ''.concat((D = (10 - (D % 10)) % 10)) === f.charAt(B - 1),
          };
         })(A.value);
         break;
        case 'my':
         k = (function (v) {
          if (!/^\d{12}$/.test(v)) return { meta: {}, valid: !1 };
          var f = parseInt(v.substr(0, 2), 10),
           I = parseInt(v.substr(2, 2), 10),
           x = parseInt(v.substr(4, 2), 10);
          if (!$(f + 1900, I, x) && !$(f + 2e3, I, x))
           return { meta: {}, valid: !1 };
          var C = v.substr(6, 2);
          return {
           meta: {},
           valid:
            [
             '17',
             '18',
             '19',
             '20',
             '69',
             '70',
             '73',
             '80',
             '81',
             '94',
             '95',
             '96',
             '97',
            ].indexOf(C) === -1,
          };
         })(A.value);
         break;
        case 'nl':
         k = (function (v) {
          if (v.length < 8) return { meta: {}, valid: !1 };
          var f = v;
          if (
           (f.length === 8 && (f = '0'.concat(f)),
           !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(f))
          )
           return { meta: {}, valid: !1 };
          if (((f = f.replace(/\./g, '')), parseInt(f, 10) === 0))
           return { meta: {}, valid: !1 };
          for (var I = 0, x = f.length, C = 0; C < x - 1; C++)
           I += (9 - C) * parseInt(f.charAt(C), 10);
          return (
           (I %= 11) == 10 && (I = 0),
           { meta: {}, valid: ''.concat(I) === f.charAt(x - 1) }
          );
         })(A.value);
         break;
        case 'no':
         k = (function (v) {
          return /^\d{11}$/.test(v)
           ? {
              meta: {},
              valid:
               ''.concat(
                (function (f) {
                 for (
                  var I = [3, 7, 6, 1, 8, 9, 4, 5, 2], x = 0, C = 0;
                  C < 9;
                  C++
                 )
                  x += I[C] * parseInt(f.charAt(C), 10);
                 return 11 - (x % 11);
                })(v),
               ) === v.substr(-2, 1) &&
               ''.concat(
                (function (f) {
                 for (
                  var I = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], x = 0, C = 0;
                  C < 10;
                  C++
                 )
                  x += I[C] * parseInt(f.charAt(C), 10);
                 return 11 - (x % 11);
                })(v),
               ) === v.substr(-1),
             }
           : { meta: {}, valid: !1 };
         })(A.value);
         break;
        case 'pe':
         k = (function (v) {
          if (!/^\d{8}[0-9A-Z]*$/.test(v)) return { meta: {}, valid: !1 };
          if (v.length === 8) return { meta: {}, valid: !0 };
          for (var f = [3, 2, 7, 6, 5, 4, 3, 2], I = 0, x = 0; x < 8; x++)
           I += f[x] * parseInt(v.charAt(x), 10);
          var C = I % 11,
           H = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][C],
           M = 'KJIHGFEDCBA'.charAt(C);
          return {
           meta: {},
           valid: v.charAt(8) === ''.concat(H) || v.charAt(8) === M,
          };
         })(A.value);
         break;
        case 'pl':
         k = (function (v) {
          if (!/^[0-9]{11}$/.test(v)) return { meta: {}, valid: !1 };
          for (
           var f = 0,
            I = v.length,
            x = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7],
            C = 0;
           C < I - 1;
           C++
          )
           f += x[C] * parseInt(v.charAt(C), 10);
          return (
           (f %= 10) == 0 && (f = 10),
           { meta: {}, valid: ''.concat((f = 10 - f)) === v.charAt(I - 1) }
          );
         })(A.value);
         break;
        case 'ro':
         k = (function (v) {
          if (!/^[0-9]{13}$/.test(v)) return { meta: {}, valid: !1 };
          var f = parseInt(v.charAt(0), 10);
          if (f === 0 || f === 7 || f === 8) return { meta: {}, valid: !1 };
          var I = parseInt(v.substr(1, 2), 10),
           x = parseInt(v.substr(3, 2), 10),
           C = parseInt(v.substr(5, 2), 10);
          if (C > 31 && x > 12) return { meta: {}, valid: !1 };
          if (
           f !== 9 &&
           !w(
            (I =
             { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 }[f + ''] +
             I),
            x,
            C,
           )
          )
           return { meta: {}, valid: !1 };
          for (
           var H = 0,
            M = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
            R = v.length,
            D = 0;
           D < R - 1;
           D++
          )
           H += parseInt(v.charAt(D), 10) * M[D];
          return (
           (H %= 11) == 10 && (H = 1),
           { meta: {}, valid: ''.concat(H) === v.charAt(R - 1) }
          );
         })(A.value);
         break;
        case 'rs':
         k = (function (v) {
          return { meta: {}, valid: l(v, 'RS') };
         })(A.value);
         break;
        case 'se':
         k = (function (v) {
          if (!/^[0-9]{10}$/.test(v) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(v))
           return { meta: {}, valid: !1 };
          var f = v.replace(/[^0-9]/g, ''),
           I = parseInt(f.substr(0, 2), 10) + 1900,
           x = parseInt(f.substr(2, 2), 10),
           C = parseInt(f.substr(4, 2), 10);
          return V(I, x, C)
           ? { meta: {}, valid: _(f) }
           : { meta: {}, valid: !1 };
         })(A.value);
         break;
        case 'si':
         k = (function (v) {
          return { meta: {}, valid: l(v, 'SI') };
         })(A.value);
         break;
        case 'sm':
         k = (function (v) {
          return { meta: {}, valid: /^\d{5}$/.test(v) };
         })(A.value);
         break;
        case 'th':
         k = (function (v) {
          if (v.length !== 13) return { meta: {}, valid: !1 };
          for (var f = 0, I = 0; I < 12; I++)
           f += parseInt(v.charAt(I), 10) * (13 - I);
          return {
           meta: {},
           valid: (11 - (f % 11)) % 10 === parseInt(v.charAt(12), 10),
          };
         })(A.value);
         break;
        case 'tr':
         k = (function (v) {
          if (v.length !== 11) return { meta: {}, valid: !1 };
          for (var f = 0, I = 0; I < 10; I++) f += parseInt(v.charAt(I), 10);
          return { meta: {}, valid: f % 10 === parseInt(v.charAt(10), 10) };
         })(A.value);
         break;
        case 'tw':
         k = (function (v) {
          var f = v.toUpperCase();
          if (!/^[A-Z][12][0-9]{8}$/.test(f)) return { meta: {}, valid: !1 };
          for (
           var I = f.length,
            x = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'.indexOf(f.charAt(0)) + 10,
            C = Math.floor(x / 10) + (x % 10) * (I - 1),
            H = 0,
            M = 1;
           M < I - 1;
           M++
          )
           H += parseInt(f.charAt(M), 10) * (I - 1 - M);
          return {
           meta: {},
           valid: (C + H + parseInt(f.charAt(I - 1), 10)) % 10 == 0,
          };
         })(A.value);
         break;
        case 'uy':
         k = (function (v) {
          if (!/^\d{8}$/.test(v)) return { meta: {}, valid: !1 };
          for (var f = [2, 9, 8, 7, 6, 3, 4], I = 0, x = 0; x < 7; x++)
           I += parseInt(v.charAt(x), 10) * f[x];
          return (
           (I %= 10) > 0 && (I = 10 - I),
           { meta: {}, valid: ''.concat(I) === v.charAt(7) }
          );
         })(A.value);
         break;
        case 'za':
         k = (function (v) {
          if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(v))
           return { meta: {}, valid: !1 };
          var f = parseInt(v.substr(0, 2), 10),
           I = new Date().getFullYear() % 100,
           x = parseInt(v.substr(2, 2), 10),
           C = parseInt(v.substr(4, 2), 10);
          return g((f = f >= I ? f + 1900 : f + 2e3), x, C)
           ? { meta: {}, valid: i(v) }
           : { meta: {}, valid: !1 };
         })(A.value);
       }
       var Z = b(
        A.l10n && A.l10n.id ? F.message || A.l10n.id.country : F.message,
        A.l10n && A.l10n.id && A.l10n.id.countries
         ? A.l10n.id.countries[P.toUpperCase()]
         : P.toUpperCase(),
       );
       return Object.assign({}, { message: Z }, k);
      },
     };
    }),
    we
   );
  })();
  var Br,
   Vn = _r.exports,
   Gr = { exports: {} },
   He = {};
  Gr.exports = (function () {
   if (Br) return He;
   Br = 1;
   var d = T.algorithms.luhn;
   return (
    (He.imei = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       switch (!0) {
        case /^\d{15}$/.test(l.value):
        case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(l.value):
        case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(l.value):
         return { valid: d(l.value.replace(/[^0-9]/g, '')) };
        case /^\d{14}$/.test(l.value):
        case /^\d{16}$/.test(l.value):
        case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(l.value):
        case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(l.value):
         return { valid: !0 };
        default:
         return { valid: !1 };
       }
      },
     };
    }),
    He
   );
  })();
  var Ur,
   Fn = Gr.exports,
   jr = { exports: {} },
   Kr = {};
  jr.exports =
   (Ur ||
    ((Ur = 1),
    (Kr.imo = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       if (!/^IMO \d{7}$/i.test(d.value)) return { valid: !1 };
       for (
        var l = d.value.replace(/^.*(\d{7})$/, '$1'), u = 0, o = 6;
        o >= 1;
        o--
       )
        u += parseInt(l.slice(6 - o, -o), 10) * (o + 1);
       return { valid: u % 10 === parseInt(l.charAt(6), 10) };
      },
     };
    })),
   Kr);
  var zr,
   kn = jr.exports,
   Yr = { exports: {} },
   Jr = {};
  Yr.exports =
   (zr ||
    ((zr = 1),
    (Jr.isbn = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { meta: { type: null }, valid: !0 };
       var l;
       switch (!0) {
        case /^\d{9}[\dX]$/.test(d.value):
        case d.value.length === 13 &&
         /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(d.value):
        case d.value.length === 13 &&
         /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(d.value):
         l = 'ISBN10';
         break;
        case /^(978|979)\d{9}[\dX]$/.test(d.value):
        case d.value.length === 17 &&
         /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(d.value):
        case d.value.length === 17 &&
         /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(d.value):
         l = 'ISBN13';
         break;
        default:
         return { meta: { type: null }, valid: !1 };
       }
       var u,
        o,
        a = d.value.replace(/[^0-9X]/gi, '').split(''),
        r = a.length,
        e = 0;
       switch (l) {
        case 'ISBN10':
         for (e = 0, u = 0; u < r - 1; u++) e += parseInt(a[u], 10) * (10 - u);
         return (
          (o = 11 - (e % 11)) == 11 ? (o = 0) : o === 10 && (o = 'X'),
          { meta: { type: l }, valid: ''.concat(o) === a[r - 1] }
         );
        case 'ISBN13':
         for (e = 0, u = 0; u < r - 1; u++)
          e += u % 2 == 0 ? parseInt(a[u], 10) : 3 * parseInt(a[u], 10);
         return (
          (o = 10 - (e % 10)) == 10 && (o = '0'),
          { meta: { type: l }, valid: ''.concat(o) === a[r - 1] }
         );
       }
      },
     };
    })),
   Jr);
  var Xr,
   wn = Yr.exports,
   Wr = { exports: {} },
   qr = {};
  Wr.exports =
   (Xr ||
    ((Xr = 1),
    (qr.isin = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       var l = d.value.toUpperCase();
       if (
        !new RegExp(
         '^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)[0-9A-Z]{10}$',
        ).test(d.value)
       )
        return { valid: !1 };
       var u,
        o = l.length,
        a = '';
       for (u = 0; u < o - 1; u++) {
        var r = l.charCodeAt(u);
        a += r > 57 ? (r - 55).toString() : l.charAt(u);
       }
       var e = '',
        t = a.length,
        n = t % 2 != 0 ? 0 : 1;
       for (u = 0; u < t; u++)
        e += parseInt(a[u], 10) * (u % 2 === n ? 2 : 1) + '';
       var s = 0;
       for (u = 0; u < e.length; u++) s += parseInt(e.charAt(u), 10);
       return {
        valid: ''.concat((s = (10 - (s % 10)) % 10)) === l.charAt(o - 1),
       };
      },
     };
    })),
   qr);
  var Qr,
   Hn = Wr.exports,
   ea = { exports: {} },
   ta = {};
  ea.exports =
   (Qr ||
    ((Qr = 1),
    (ta.ismn = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { meta: null, valid: !0 };
       var l;
       switch (!0) {
        case /^M\d{9}$/.test(d.value):
        case /^M-\d{4}-\d{4}-\d{1}$/.test(d.value):
        case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(d.value):
         l = 'ISMN10';
         break;
        case /^9790\d{9}$/.test(d.value):
        case /^979-0-\d{4}-\d{4}-\d{1}$/.test(d.value):
        case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(d.value):
         l = 'ISMN13';
         break;
        default:
         return { meta: null, valid: !1 };
       }
       var u = d.value;
       l === 'ISMN10' && (u = '9790'.concat(u.substr(1)));
       for (
        var o = 0,
         a = (u = u.replace(/[^0-9]/gi, '')).length,
         r = [1, 3],
         e = 0;
        e < a - 1;
        e++
       )
        o += parseInt(u.charAt(e), 10) * r[e % 2];
       return {
        meta: { type: l },
        valid: ''.concat((o = (10 - (o % 10)) % 10)) === u.charAt(a - 1),
       };
      },
     };
    })),
   ta);
  var ra,
   $n = ea.exports,
   aa = { exports: {} },
   na = {};
  aa.exports =
   (ra ||
    ((ra = 1),
    (na.issn = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       if (!/^\d{4}-\d{3}[\dX]$/.test(d.value)) return { valid: !1 };
       var l = d.value.replace(/[^0-9X]/gi, '').split(''),
        u = l.length,
        o = 0;
       l[7] === 'X' && (l[7] = '10');
       for (var a = 0; a < u; a++) o += parseInt(l[a], 10) * (8 - a);
       return { valid: o % 11 == 0 };
      },
     };
    })),
   na);
  var ia,
   Nn = aa.exports,
   sa = { exports: {} },
   oa = {};
  sa.exports =
   (ia ||
    ((ia = 1),
    (oa.mac = function () {
     return {
      validate: function (d) {
       return {
        valid:
         d.value === '' ||
         /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(d.value) ||
         /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(d.value),
       };
      },
     };
    })),
   oa);
  var la,
   Mn = sa.exports,
   da = { exports: {} },
   $e = {};
  da.exports = (function () {
   if (la) return $e;
   la = 1;
   var d = T.algorithms.luhn;
   return (
    ($e.meid = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       var u = l.value;
       if (
        /^[0-9A-F]{15}$/i.test(u) ||
        /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(u) ||
        /^\d{19}$/.test(u) ||
        /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(u)
       ) {
        var o = u.charAt(u.length - 1).toUpperCase();
        if ((u = u.replace(/[- ]/g, '')).match(/^\d*$/i))
         return { valid: d(u) };
        u = u.slice(0, -1);
        var a = '',
         r = void 0;
        for (r = 1; r <= 13; r += 2)
         a += (2 * parseInt(u.charAt(r), 16)).toString(16);
        var e = 0;
        for (r = 0; r < a.length; r++) e += parseInt(a.charAt(r), 16);
        return {
         valid:
          e % 10 == 0
           ? o === '0'
           : o ===
             (2 * (10 * Math.floor((e + 10) / 10) - e))
              .toString(16)
              .toUpperCase(),
        };
       }
       return /^[0-9A-F]{14}$/i.test(u) ||
        /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(u) ||
        /^\d{18}$/.test(u) ||
        /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(u)
        ? { valid: !0 }
        : { valid: !1 };
      },
     };
    }),
    $e
   );
  })();
  var ua,
   Tn = da.exports,
   ca = { exports: {} },
   Ne = {};
  ca.exports = (function () {
   if (ua) return Ne;
   ua = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.removeUndefined;
   return (
    (Ne.phone = function () {
     var o = [
      'AE',
      'BG',
      'BR',
      'CN',
      'CZ',
      'DE',
      'DK',
      'ES',
      'FR',
      'GB',
      'IN',
      'MA',
      'NL',
      'PK',
      'RO',
      'RU',
      'SK',
      'TH',
      'US',
      'VE',
     ];
     return {
      validate: function (a) {
       if (a.value === '') return { valid: !0 };
       var r = Object.assign({}, { message: '' }, u(a.options)),
        e = a.value.trim(),
        t = e.substr(0, 2);
       if (
        !(t =
         typeof r.country == 'function' ? r.country.call(this) : r.country) ||
        o.indexOf(t.toUpperCase()) === -1
       )
        return { valid: !0 };
       var n = !0;
       switch (t.toUpperCase()) {
        case 'AE':
         n =
          /^(((\+|00)?971[\s.-]?(\(0\)[\s.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s.-]?[0-9]){7}$/.test(
           e,
          );
         break;
        case 'BG':
         n =
          /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(
           e.replace(/\+|\s|-|\/|\(|\)/gi, ''),
          );
         break;
        case 'BR':
         n =
          /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(
           e,
          );
         break;
        case 'CN':
         n =
          /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(
           e,
          );
         break;
        case 'CZ':
         n = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(
          e,
         );
         break;
        case 'DE':
         n =
          /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(
           e,
          );
         break;
        case 'DK':
         n = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(e);
         break;
        case 'ES':
         n = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(e);
         break;
        case 'FR':
         n =
          /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(
           e,
          );
         break;
        case 'GB':
         n =
          /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|#)\d+)?)$/.test(
           e,
          );
         break;
        case 'IN':
         n = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(
          e,
         );
         break;
        case 'MA':
         n =
          /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(
           e,
          );
         break;
        case 'NL':
         n =
          /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(
           e,
          );
         break;
        case 'PK':
         n = /^0?3[0-9]{2}[0-9]{7}$/.test(e);
         break;
        case 'RO':
         n =
          /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/g.test(
           e,
          );
         break;
        case 'RU':
         n =
          /^((8|\+7|007)[-./ ]?)?([(/.]?\d{3}[)/.]?[-./ ]?)?[\d\-./ ]{7,10}$/g.test(
           e,
          );
         break;
        case 'SK':
         n = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(
          e,
         );
         break;
        case 'TH':
         n = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(e);
         break;
        case 'VE':
         n =
          /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(
           e,
          );
         break;
        default:
         n = /^(?:(1-?)|(\+1 ?))?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(e);
       }
       return {
        message: l(
         a.l10n && a.l10n.phone ? r.message || a.l10n.phone.country : r.message,
         a.l10n && a.l10n.phone && a.l10n.phone.countries
          ? a.l10n.phone.countries[t]
          : t,
        ),
        valid: n,
       };
      },
     };
    }),
    Ne
   );
  })();
  var fa,
   Ln = ca.exports,
   pa = { exports: {} },
   va = {};
  pa.exports =
   (fa ||
    ((fa = 1),
    (va.rtn = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       if (!/^\d{9}$/.test(d.value)) return { valid: !1 };
       for (var l = 0, u = 0; u < d.value.length; u += 3)
        l +=
         3 * parseInt(d.value.charAt(u), 10) +
         7 * parseInt(d.value.charAt(u + 1), 10) +
         parseInt(d.value.charAt(u + 2), 10);
       return { valid: l !== 0 && l % 10 == 0 };
      },
     };
    })),
   va);
  var ha,
   Pn = pa.exports,
   ma = { exports: {} },
   ga = {};
  ma.exports =
   (ha ||
    ((ha = 1),
    (ga.sedol = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       var l = d.value.toUpperCase();
       if (!/^[0-9A-Z]{7}$/.test(l)) return { valid: !1 };
       for (
        var u = [1, 3, 1, 7, 3, 9, 1], o = l.length, a = 0, r = 0;
        r < o - 1;
        r++
       )
        a += u[r] * parseInt(l.charAt(r), 36);
       return {
        valid: ''.concat((a = (10 - (a % 10)) % 10)) === l.charAt(o - 1),
       };
      },
     };
    })),
   ga);
  var ba,
   Rn = ma.exports,
   Aa = { exports: {} },
   Me = {};
  Aa.exports = (function () {
   if (ba) return Me;
   ba = 1;
   var d = T.algorithms.luhn;
   return (
    (Me.siren = function () {
     return {
      validate: function (l) {
       return {
        valid: l.value === '' || (/^\d{9}$/.test(l.value) && d(l.value)),
       };
      },
     };
    }),
    Me
   );
  })();
  var ya,
   Dn = Aa.exports,
   Ea = { exports: {} },
   Ia = {};
  Ea.exports =
   (ya ||
    ((ya = 1),
    (Ia.siret = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       for (var l, u = d.value.length, o = 0, a = 0; a < u; a++)
        (l = parseInt(d.value.charAt(a), 10)),
         a % 2 == 0 && (l *= 2) > 9 && (l -= 9),
         (o += l);
       return { valid: o % 10 == 0 };
      },
     };
    })),
   Ia);
  var xa,
   Zn = Ea.exports,
   Ca = { exports: {} },
   Te = {};
  Ca.exports = (function () {
   if (xa) return Te;
   xa = 1;
   var d = T.utils.format;
   return (
    (Te.step = function () {
     return {
      validate: function (l) {
       if (l.value === '') return { valid: !0 };
       var u = parseFloat(l.value);
       if (isNaN(u) || !isFinite(u)) return { valid: !1 };
       var o = Object.assign(
         {},
         { baseValue: 0, message: '', step: 1 },
         l.options,
        ),
        a = (function (r, e) {
         if (e === 0) return 1;
         var t = ''.concat(r).split('.'),
          n = ''.concat(e).split('.'),
          s =
           (t.length === 1 ? 0 : t[1].length) +
           (n.length === 1 ? 0 : n[1].length);
         return (function (c, p) {
          var h,
           y = Math.pow(10, p),
           E = c * y;
          switch (!0) {
           case E === 0:
            h = 0;
            break;
           case E > 0:
            h = 1;
            break;
           case E < 0:
            h = -1;
          }
          return E % 1 == 0.5 * h
           ? (Math.floor(E) + (h > 0 ? 1 : 0)) / y
           : Math.round(E) / y;
         })(r - e * Math.floor(r / e), s);
        })(u - o.baseValue, o.step);
       return {
        message: d(
         l.l10n ? o.message || l.l10n.step.default : o.message,
         ''.concat(o.step),
        ),
        valid: a === 0 || a === o.step,
       };
      },
     };
    }),
    Te
   );
  })();
  var Oa,
   _n = Ca.exports,
   Sa = { exports: {} },
   Le = {};
  Sa.exports = (function () {
   if (Oa) return Le;
   Oa = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.removeUndefined;
   return (
    (Le.uuid = function () {
     return {
      validate: function (o) {
       if (o.value === '') return { valid: !0 };
       var a = Object.assign({}, { message: '' }, u(o.options)),
        r = {
         3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
         4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
         5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
         all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        },
        e = a.version ? ''.concat(a.version) : 'all';
       return {
        message: a.version
         ? l(o.l10n ? a.message || o.l10n.uuid.version : a.message, a.version)
         : o.l10n
           ? o.l10n.uuid.default
           : a.message,
        valid: r[e] === null || r[e].test(o.value),
       };
      },
     };
    }),
    Le
   );
  })();
  var Va,
   Bn = Sa.exports,
   Fa = { exports: {} },
   Pe = {};
  Fa.exports = (function () {
   if (Va) return Pe;
   Va = 1;
   var d = T,
    l = d.utils.isValidDate,
    u = d.utils.isValidDate,
    o = d.algorithms.mod11And10,
    a = d.algorithms.luhn,
    r = d.algorithms.mod11And10,
    e = d.algorithms.luhn,
    t = d.utils.isValidDate,
    n = d.algorithms.mod97And10;
   function s(y) {
    if (y.length < 8) return { meta: {}, valid: !1 };
    var E = y;
    if (
     (E.length === 8 && (E = '0'.concat(E)),
     !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(E))
    )
     return { meta: {}, valid: !1 };
    if (((E = E.replace(/\./g, '')), parseInt(E, 10) === 0))
     return { meta: {}, valid: !1 };
    for (var S = 0, N = E.length, $ = 0; $ < N - 1; $++)
     S += (9 - $) * parseInt(E.charAt($), 10);
    return (
     (S %= 11) == 10 && (S = 0),
     { meta: {}, valid: ''.concat(S) === E.charAt(N - 1) }
    );
   }
   var c = d.algorithms.luhn,
    p = d.utils.format,
    h = d.utils.removeUndefined;
   return (
    (Pe.vat = function () {
     var y = [
      'AR',
      'AT',
      'BE',
      'BG',
      'BR',
      'CH',
      'CY',
      'CZ',
      'DE',
      'DK',
      'EE',
      'EL',
      'ES',
      'FI',
      'FR',
      'GB',
      'GR',
      'HR',
      'HU',
      'IE',
      'IS',
      'IT',
      'LT',
      'LU',
      'LV',
      'MT',
      'NL',
      'NO',
      'PL',
      'PT',
      'RO',
      'RU',
      'RS',
      'SE',
      'SK',
      'SI',
      'VE',
      'ZA',
     ];
     return {
      validate: function (E) {
       var S = E.value;
       if (S === '') return { valid: !0 };
       var N = Object.assign({}, { message: '' }, h(E.options)),
        $ = S.substr(0, 2);
       if (
        (($ =
         typeof N.country == 'function' ? N.country.call(this) : N.country),
        y.indexOf($) === -1)
       )
        return { valid: !0 };
       var w = { meta: {}, valid: !0 };
       switch ($.toLowerCase()) {
        case 'ar':
         w = (function (V) {
          var i = V.replace('-', '');
          if (
           (/^AR[0-9]{11}$/.test(i) && (i = i.substr(2)),
           !/^[0-9]{11}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (
           var g = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], b = 0, m = 0;
           m < 10;
           m++
          )
           b += parseInt(i.charAt(m), 10) * g[m];
          return (
           (b = 11 - (b % 11)) == 11 && (b = 0),
           { meta: {}, valid: ''.concat(b) === i.substr(10) }
          );
         })(S);
         break;
        case 'at':
         w = (function (V) {
          var i = V;
          if (
           (/^ATU[0-9]{8}$/.test(i) && (i = i.substr(2)),
           !/^U[0-9]{8}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          i = i.substr(1);
          for (var g = [1, 2, 1, 2, 1, 2, 1], b = 0, m = 0, O = 0; O < 7; O++)
           (m = parseInt(i.charAt(O), 10) * g[O]) > 9 &&
            (m = Math.floor(m / 10) + (m % 10)),
            (b += m);
          return (
           (b = 10 - ((b + 4) % 10)) == 10 && (b = 0),
           { meta: {}, valid: ''.concat(b) === i.substr(7, 1) }
          );
         })(S);
         break;
        case 'be':
         w = (function (V) {
          var i = V;
          return (
           /^BE[0]?[0-9]{9}$/.test(i) && (i = i.substr(2)),
           /^[0]?[0-9]{9}$/.test(i)
            ? (i.length === 9 && (i = '0'.concat(i)),
              i.substr(1, 1) === '0'
               ? { meta: {}, valid: !1 }
               : {
                  meta: {},
                  valid:
                   (parseInt(i.substr(0, 8), 10) +
                    parseInt(i.substr(8, 2), 10)) %
                    97 ==
                   0,
                 })
            : { meta: {}, valid: !1 }
          );
         })(S);
         break;
        case 'bg':
         w = (function (V) {
          var i = V;
          if (
           (/^BG[0-9]{9,10}$/.test(i) && (i = i.substr(2)),
           !/^[0-9]{9,10}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          var g = 0,
           b = 0;
          if (i.length === 9) {
           for (b = 0; b < 8; b++) g += parseInt(i.charAt(b), 10) * (b + 1);
           if ((g %= 11) == 10) {
            for (g = 0, b = 0; b < 8; b++)
             g += parseInt(i.charAt(b), 10) * (b + 3);
            g %= 11;
           }
           return { meta: {}, valid: ''.concat((g %= 10)) === i.substr(8) };
          }
          return {
           meta: {},
           valid:
            (function (m) {
             var O = parseInt(m.substr(0, 2), 10) + 1900,
              A = parseInt(m.substr(2, 2), 10),
              F = parseInt(m.substr(4, 2), 10);
             if (
              (A > 40
               ? ((O += 100), (A -= 40))
               : A > 20 && ((O -= 100), (A -= 20)),
              !l(O, A, F))
             )
              return !1;
             for (
              var P = [2, 4, 8, 5, 10, 9, 7, 3, 6], L = 0, k = 0;
              k < 9;
              k++
             )
              L += parseInt(m.charAt(k), 10) * P[k];
             return ''.concat((L = (L % 11) % 10)) === m.substr(9, 1);
            })(i) ||
            (function (m) {
             for (
              var O = [21, 19, 17, 13, 11, 9, 7, 3, 1], A = 0, F = 0;
              F < 9;
              F++
             )
              A += parseInt(m.charAt(F), 10) * O[F];
             return ''.concat((A %= 10)) === m.substr(9, 1);
            })(i) ||
            (function (m) {
             for (var O = [4, 3, 2, 7, 6, 5, 4, 3, 2], A = 0, F = 0; F < 9; F++)
              A += parseInt(m.charAt(F), 10) * O[F];
             return (
              (A = 11 - (A % 11)) != 10 &&
              (A === 11 && (A = 0), ''.concat(A) === m.substr(9, 1))
             );
            })(i),
          };
         })(S);
         break;
        case 'br':
         w = (function (V) {
          if (V === '') return { meta: {}, valid: !0 };
          var i = V.replace(/[^\d]+/g, '');
          if (i === '' || i.length !== 14) return { meta: {}, valid: !1 };
          if (
           i === '00000000000000' ||
           i === '11111111111111' ||
           i === '22222222222222' ||
           i === '33333333333333' ||
           i === '44444444444444' ||
           i === '55555555555555' ||
           i === '66666666666666' ||
           i === '77777777777777' ||
           i === '88888888888888' ||
           i === '99999999999999'
          )
           return { meta: {}, valid: !1 };
          var g,
           b = i.length - 2,
           m = i.substring(0, b),
           O = i.substring(b),
           A = 0,
           F = b - 7;
          for (g = b; g >= 1; g--)
           (A += parseInt(m.charAt(b - g), 10) * F--), F < 2 && (F = 9);
          var P = A % 11 < 2 ? 0 : 11 - (A % 11);
          if (P !== parseInt(O.charAt(0), 10)) return { meta: {}, valid: !1 };
          for (
           b += 1, m = i.substring(0, b), A = 0, F = b - 7, g = b;
           g >= 1;
           g--
          )
           (A += parseInt(m.charAt(b - g), 10) * F--), F < 2 && (F = 9);
          return {
           meta: {},
           valid:
            (P = A % 11 < 2 ? 0 : 11 - (A % 11)) === parseInt(O.charAt(1), 10),
          };
         })(S);
         break;
        case 'ch':
         w = (function (V) {
          var i = V;
          if (
           (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(i) && (i = i.substr(2)),
           !/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(i))
          )
           return { meta: {}, valid: !1 };
          i = i.substr(1);
          for (var g = [5, 4, 3, 2, 7, 6, 5, 4], b = 0, m = 0; m < 8; m++)
           b += parseInt(i.charAt(m), 10) * g[m];
          return (b = 11 - (b % 11)) == 10
           ? { meta: {}, valid: !1 }
           : (b === 11 && (b = 0),
             { meta: {}, valid: ''.concat(b) === i.substr(8, 1) });
         })(S);
         break;
        case 'cy':
         w = (function (V) {
          var i = V;
          if (
           (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(i) && (i = i.substr(2)),
           !/^[0-5|9][0-9]{7}[A-Z]$/.test(i))
          )
           return { meta: {}, valid: !1 };
          if (i.substr(0, 2) === '12') return { meta: {}, valid: !1 };
          for (
           var g = 0,
            b = {
             0: 1,
             1: 0,
             2: 5,
             3: 7,
             4: 9,
             5: 13,
             6: 15,
             7: 17,
             8: 19,
             9: 21,
            },
            m = 0;
           m < 8;
           m++
          ) {
           var O = parseInt(i.charAt(m), 10);
           m % 2 == 0 && (O = b[''.concat(O)]), (g += O);
          }
          return {
           meta: {},
           valid:
            ''.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[g % 26]) === i.substr(8, 1),
          };
         })(S);
         break;
        case 'cz':
         w = (function (V) {
          var i = V;
          if (
           (/^CZ[0-9]{8,10}$/.test(i) && (i = i.substr(2)),
           !/^[0-9]{8,10}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          var g = 0,
           b = 0;
          if (i.length === 8) {
           if (''.concat(i.charAt(0)) === '9') return { meta: {}, valid: !1 };
           for (g = 0, b = 0; b < 7; b++)
            g += parseInt(i.charAt(b), 10) * (8 - b);
           return (
            (g = 11 - (g % 11)) == 10 && (g = 0),
            g === 11 && (g = 1),
            { meta: {}, valid: ''.concat(g) === i.substr(7, 1) }
           );
          }
          if (i.length === 9 && ''.concat(i.charAt(0)) === '6') {
           for (g = 0, b = 0; b < 7; b++)
            g += parseInt(i.charAt(b + 1), 10) * (8 - b);
           return (
            (g = 11 - (g % 11)) == 10 && (g = 0),
            g === 11 && (g = 1),
            {
             meta: {},
             valid:
              ''.concat((g = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][g - 1])) ===
              i.substr(8, 1),
            }
           );
          }
          if (i.length === 9 || i.length === 10) {
           var m = 1900 + parseInt(i.substr(0, 2), 10),
            O = (parseInt(i.substr(2, 2), 10) % 50) % 20,
            A = parseInt(i.substr(4, 2), 10);
           if (i.length === 9) {
            if ((m >= 1980 && (m -= 100), m > 1953))
             return { meta: {}, valid: !1 };
           } else m < 1954 && (m += 100);
           if (!u(m, O, A)) return { meta: {}, valid: !1 };
           if (i.length === 10) {
            var F = parseInt(i.substr(0, 9), 10) % 11;
            return (
             m < 1985 && (F %= 10),
             { meta: {}, valid: ''.concat(F) === i.substr(9, 1) }
            );
           }
           return { meta: {}, valid: !0 };
          }
          return { meta: {}, valid: !1 };
         })(S);
         break;
        case 'de':
         w = (function (V) {
          var i = V;
          return (
           /^DE[0-9]{9}$/.test(i) && (i = i.substr(2)),
           /^[1-9][0-9]{8}$/.test(i)
            ? { meta: {}, valid: o(i) }
            : { meta: {}, valid: !1 }
          );
         })(S);
         break;
        case 'dk':
         w = (function (V) {
          var i = V;
          if (
           (/^DK[0-9]{8}$/.test(i) && (i = i.substr(2)), !/^[0-9]{8}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (var g = 0, b = [2, 7, 6, 5, 4, 3, 2, 1], m = 0; m < 8; m++)
           g += parseInt(i.charAt(m), 10) * b[m];
          return { meta: {}, valid: g % 11 == 0 };
         })(S);
         break;
        case 'ee':
         w = (function (V) {
          var i = V;
          if (
           (/^EE[0-9]{9}$/.test(i) && (i = i.substr(2)), !/^[0-9]{9}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (var g = 0, b = [3, 7, 1, 3, 7, 1, 3, 7, 1], m = 0; m < 9; m++)
           g += parseInt(i.charAt(m), 10) * b[m];
          return { meta: {}, valid: g % 10 == 0 };
         })(S);
         break;
        case 'el':
        case 'gr':
         w = (function (V) {
          var i = V;
          if (
           (/^(GR|EL)[0-9]{9}$/.test(i) && (i = i.substr(2)),
           !/^[0-9]{9}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          i.length === 8 && (i = '0'.concat(i));
          for (
           var g = [256, 128, 64, 32, 16, 8, 4, 2], b = 0, m = 0;
           m < 8;
           m++
          )
           b += parseInt(i.charAt(m), 10) * g[m];
          return {
           meta: {},
           valid: ''.concat((b = (b % 11) % 10)) === i.substr(8, 1),
          };
         })(S);
         break;
        case 'es':
         w = (function (V) {
          var i = V;
          if (
           (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(i) && (i = i.substr(2)),
           !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(i))
          )
           return { meta: {}, valid: !1 };
          var g,
           b,
           m = i.charAt(0);
          return /^[0-9]$/.test(m)
           ? {
              meta: { type: 'DNI' },
              valid:
               ((g = i),
               (b = parseInt(g.substr(0, 8), 10)),
               ''.concat('TRWAGMYFPDXBNJZSQVHLCKE'[b % 23]) === g.substr(8, 1)),
             }
           : /^[XYZ]$/.test(m)
             ? {
                meta: { type: 'NIE' },
                valid: (function (O) {
                 var A = ['XYZ'.indexOf(O.charAt(0)), O.substr(1)].join(''),
                  F = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(A, 10) % 23];
                 return ''.concat(F) === O.substr(8, 1);
                })(i),
               }
             : {
                meta: { type: 'CIF' },
                valid: (function (O) {
                 var A,
                  F = O.charAt(0);
                 if ('KLM'.indexOf(F) !== -1)
                  return (
                   (A = parseInt(O.substr(1, 8), 10)),
                   ''.concat((A = 'TRWAGMYFPDXBNJZSQVHLCKE'[A % 23])) ===
                    O.substr(8, 1)
                  );
                 if ('ABCDEFGHJNPQRSUVW'.indexOf(F) !== -1) {
                  for (
                   var P = [2, 1, 2, 1, 2, 1, 2], L = 0, k = 0, Z = 0;
                   Z < 7;
                   Z++
                  )
                   (k = parseInt(O.charAt(Z + 1), 10) * P[Z]) > 9 &&
                    (k = Math.floor(k / 10) + (k % 10)),
                    (L += k);
                  return (
                   (L = 10 - (L % 10)) == 10 && (L = 0),
                   ''.concat(L) === O.substr(8, 1) ||
                    'JABCDEFGHI'[L] === O.substr(8, 1)
                  );
                 }
                 return !1;
                })(i),
               };
         })(S);
         break;
        case 'fi':
         w = (function (V) {
          var i = V;
          if (
           (/^FI[0-9]{8}$/.test(i) && (i = i.substr(2)), !/^[0-9]{8}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (var g = [7, 9, 10, 5, 8, 4, 2, 1], b = 0, m = 0; m < 8; m++)
           b += parseInt(i.charAt(m), 10) * g[m];
          return { meta: {}, valid: b % 11 == 0 };
         })(S);
         break;
        case 'fr':
         w = (function (V) {
          var i = V;
          if (
           (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(i) && (i = i.substr(2)),
           !/^[0-9A-Z]{2}[0-9]{9}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          if (i.substr(2, 4) !== '000')
           return { meta: {}, valid: a(i.substr(2)) };
          if (/^[0-9]{2}$/.test(i.substr(0, 2)))
           return {
            meta: {},
            valid:
             i.substr(0, 2) ===
             ''.concat(parseInt(i.substr(2) + '12', 10) % 97),
           };
          var g,
           b = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
          return (
           (g = /^[0-9]$/.test(i.charAt(0))
            ? 24 * b.indexOf(i.charAt(0)) + b.indexOf(i.charAt(1)) - 10
            : 34 * b.indexOf(i.charAt(0)) + b.indexOf(i.charAt(1)) - 100),
           {
            meta: {},
            valid:
             (parseInt(i.substr(2), 10) + 1 + Math.floor(g / 11)) % 11 ==
             g % 11,
           }
          );
         })(S);
         break;
        case 'gb':
         w = (function (V) {
          var i = V;
          if (
           ((/^GB[0-9]{9}$/.test(i) ||
            /^GB[0-9]{12}$/.test(i) ||
            /^GBGD[0-9]{3}$/.test(i) ||
            /^GBHA[0-9]{3}$/.test(i) ||
            /^GB(GD|HA)8888[0-9]{5}$/.test(i)) &&
            (i = i.substr(2)),
           !(
            /^[0-9]{9}$/.test(i) ||
            /^[0-9]{12}$/.test(i) ||
            /^GD[0-9]{3}$/.test(i) ||
            /^HA[0-9]{3}$/.test(i) ||
            /^(GD|HA)8888[0-9]{5}$/.test(i)
           ))
          )
           return { meta: {}, valid: !1 };
          var g = i.length;
          if (g === 5) {
           var b = i.substr(0, 2),
            m = parseInt(i.substr(2), 10);
           return {
            meta: {},
            valid: (b === 'GD' && m < 500) || (b === 'HA' && m >= 500),
           };
          }
          if (
           g === 11 &&
           (i.substr(0, 6) === 'GD8888' || i.substr(0, 6) === 'HA8888')
          )
           return (i.substr(0, 2) === 'GD' &&
            parseInt(i.substr(6, 3), 10) >= 500) ||
            (i.substr(0, 2) === 'HA' && parseInt(i.substr(6, 3), 10) < 500)
            ? { meta: {}, valid: !1 }
            : {
               meta: {},
               valid:
                parseInt(i.substr(6, 3), 10) % 97 ===
                parseInt(i.substr(9, 2), 10),
              };
          if (g === 9 || g === 12) {
           for (var O = [8, 7, 6, 5, 4, 3, 2, 10, 1], A = 0, F = 0; F < 9; F++)
            A += parseInt(i.charAt(F), 10) * O[F];
           return (
            (A %= 97),
            {
             meta: {},
             valid:
              parseInt(i.substr(0, 3), 10) >= 100
               ? A === 0 || A === 42 || A === 55
               : A === 0,
            }
           );
          }
          return { meta: {}, valid: !0 };
         })(S);
         break;
        case 'hr':
         w = (function (V) {
          var i = V;
          return (
           /^HR[0-9]{11}$/.test(i) && (i = i.substr(2)),
           /^[0-9]{11}$/.test(i)
            ? { meta: {}, valid: r(i) }
            : { meta: {}, valid: !1 }
          );
         })(S);
         break;
        case 'hu':
         w = (function (V) {
          var i = V;
          if (
           (/^HU[0-9]{8}$/.test(i) && (i = i.substr(2)), !/^[0-9]{8}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (var g = [9, 7, 3, 1, 9, 7, 3, 1], b = 0, m = 0; m < 8; m++)
           b += parseInt(i.charAt(m), 10) * g[m];
          return { meta: {}, valid: b % 10 == 0 };
         })(S);
         break;
        case 'ie':
         w = (function (V) {
          var i = V;
          if (
           (/^IE[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(i) &&
            (i = i.substr(2)),
           !/^[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          var g = function (b) {
           for (var m = b; m.length < 7; ) m = '0'.concat(m);
           for (var O = 'WABCDEFGHIJKLMNOPQRSTUV', A = 0, F = 0; F < 7; F++)
            A += parseInt(m.charAt(F), 10) * (8 - F);
           return (A += 9 * O.indexOf(m.substr(7))), O[A % 23];
          };
          return /^[0-9]+$/.test(i.substr(0, 7))
           ? {
              meta: {},
              valid:
               i.charAt(7) === g(''.concat(i.substr(0, 7)).concat(i.substr(8))),
             }
           : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(i.charAt(1)) !== -1
             ? {
                meta: {},
                valid:
                 i.charAt(7) ===
                 g(''.concat(i.substr(2, 5)).concat(i.substr(0, 1))),
               }
             : { meta: {}, valid: !0 };
         })(S);
         break;
        case 'is':
         w = (function (V) {
          var i = V;
          return (
           /^IS[0-9]{5,6}$/.test(i) && (i = i.substr(2)),
           { meta: {}, valid: /^[0-9]{5,6}$/.test(i) }
          );
         })(S);
         break;
        case 'it':
         w = (function (V) {
          var i = V;
          if (
           (/^IT[0-9]{11}$/.test(i) && (i = i.substr(2)),
           !/^[0-9]{11}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          if (parseInt(i.substr(0, 7), 10) === 0)
           return { meta: {}, valid: !1 };
          var g = parseInt(i.substr(7, 3), 10);
          return g < 1 || (g > 201 && g !== 999 && g !== 888)
           ? { meta: {}, valid: !1 }
           : { meta: {}, valid: e(i) };
         })(S);
         break;
        case 'lt':
         w = (function (V) {
          var i = V;
          if (
           (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(i) && (i = i.substr(2)),
           !/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(i))
          )
           return { meta: {}, valid: !1 };
          var g,
           b = i.length,
           m = 0;
          for (g = 0; g < b - 1; g++)
           m += parseInt(i.charAt(g), 10) * (1 + (g % 9));
          var O = m % 11;
          if (O === 10)
           for (m = 0, g = 0; g < b - 1; g++)
            m += parseInt(i.charAt(g), 10) * (1 + ((g + 2) % 9));
          return {
           meta: {},
           valid: ''.concat((O = (O % 11) % 10)) === i.charAt(b - 1),
          };
         })(S);
         break;
        case 'lu':
         w = (function (V) {
          var i = V;
          return (
           /^LU[0-9]{8}$/.test(i) && (i = i.substring(2)),
           /^[0-9]{8}$/.test(i)
            ? {
               meta: {},
               valid:
                parseInt(i.substring(0, 6), 10) % 89 ===
                parseInt(i.substring(6, 8), 10),
              }
            : { meta: {}, valid: !1 }
          );
         })(S);
         break;
        case 'lv':
         w = (function (V) {
          var i = V;
          if (
           (/^LV[0-9]{11}$/.test(i) && (i = i.substr(2)),
           !/^[0-9]{11}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          var g,
           b = parseInt(i.charAt(0), 10),
           m = i.length,
           O = 0,
           A = [];
          if (b > 3) {
           for (
            O = 0, A = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], g = 0;
            g < m;
            g++
           )
            O += parseInt(i.charAt(g), 10) * A[g];
           return { meta: {}, valid: (O %= 11) == 3 };
          }
          var F = parseInt(i.substr(0, 2), 10),
           P = parseInt(i.substr(2, 2), 10),
           L = parseInt(i.substr(4, 2), 10);
          if (((L = L + 1800 + 100 * parseInt(i.charAt(6), 10)), !t(L, P, F)))
           return { meta: {}, valid: !1 };
          for (
           O = 0, A = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], g = 0;
           g < m - 1;
           g++
          )
           O += parseInt(i.charAt(g), 10) * A[g];
          return {
           meta: {},
           valid: ''.concat((O = ((O + 1) % 11) % 10)) === i.charAt(m - 1),
          };
         })(S);
         break;
        case 'mt':
         w = (function (V) {
          var i = V;
          if (
           (/^MT[0-9]{8}$/.test(i) && (i = i.substr(2)), !/^[0-9]{8}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (var g = [3, 4, 6, 7, 8, 9, 10, 1], b = 0, m = 0; m < 8; m++)
           b += parseInt(i.charAt(m), 10) * g[m];
          return { meta: {}, valid: b % 37 == 0 };
         })(S);
         break;
        case 'nl':
         w = (function (V) {
          var i = V;
          return (
           /^NL[0-9]{9}B[0-9]{2}$/.test(i) && (i = i.substr(2)),
           /^[0-9]{9}B[0-9]{2}$/.test(i)
            ? { meta: {}, valid: s(i.substr(0, 9)).valid || n('NL'.concat(i)) }
            : { meta: {}, valid: !1 }
          );
         })(S);
         break;
        case 'no':
         w = (function (V) {
          var i = V;
          if (
           (/^NO[0-9]{9}$/.test(i) && (i = i.substr(2)), !/^[0-9]{9}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (var g = [3, 2, 7, 6, 5, 4, 3, 2], b = 0, m = 0; m < 8; m++)
           b += parseInt(i.charAt(m), 10) * g[m];
          return (
           (b = 11 - (b % 11)) == 11 && (b = 0),
           { meta: {}, valid: ''.concat(b) === i.substr(8, 1) }
          );
         })(S);
         break;
        case 'pl':
         w = (function (V) {
          var i = V;
          if (
           (/^PL[0-9]{10}$/.test(i) && (i = i.substr(2)),
           !/^[0-9]{10}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (
           var g = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], b = 0, m = 0;
           m < 10;
           m++
          )
           b += parseInt(i.charAt(m), 10) * g[m];
          return { meta: {}, valid: b % 11 == 0 };
         })(S);
         break;
        case 'pt':
         w = (function (V) {
          var i = V;
          if (
           (/^PT[0-9]{9}$/.test(i) && (i = i.substr(2)), !/^[0-9]{9}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (var g = [9, 8, 7, 6, 5, 4, 3, 2], b = 0, m = 0; m < 8; m++)
           b += parseInt(i.charAt(m), 10) * g[m];
          return (
           (b = 11 - (b % 11)) > 9 && (b = 0),
           { meta: {}, valid: ''.concat(b) === i.substr(8, 1) }
          );
         })(S);
         break;
        case 'ro':
         w = (function (V) {
          var i = V;
          if (
           (/^RO[1-9][0-9]{1,9}$/.test(i) && (i = i.substr(2)),
           !/^[1-9][0-9]{1,9}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (
           var g = i.length,
            b = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - g),
            m = 0,
            O = 0;
           O < g - 1;
           O++
          )
           m += parseInt(i.charAt(O), 10) * b[O];
          return {
           meta: {},
           valid: ''.concat((m = ((10 * m) % 11) % 10)) === i.substr(g - 1, 1),
          };
         })(S);
         break;
        case 'rs':
         w = (function (V) {
          var i = V;
          if (
           (/^RS[0-9]{9}$/.test(i) && (i = i.substr(2)), !/^[0-9]{9}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (var g = 10, b = 0, m = 0; m < 8; m++)
           (b = (parseInt(i.charAt(m), 10) + g) % 10) == 0 && (b = 10),
            (g = (2 * b) % 11);
          return {
           meta: {},
           valid: (g + parseInt(i.substr(8, 1), 10)) % 10 == 1,
          };
         })(S);
         break;
        case 'ru':
         w = (function (V) {
          var i = V;
          if (
           (/^RU([0-9]{10}|[0-9]{12})$/.test(i) && (i = i.substr(2)),
           !/^([0-9]{10}|[0-9]{12})$/.test(i))
          )
           return { meta: {}, valid: !1 };
          var g = 0;
          if (i.length === 10) {
           var b = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
            m = 0;
           for (g = 0; g < 10; g++) m += parseInt(i.charAt(g), 10) * b[g];
           return (
            (m %= 11) > 9 && (m %= 10),
            { meta: {}, valid: ''.concat(m) === i.substr(9, 1) }
           );
          }
          if (i.length === 12) {
           var O = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
            A = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
            F = 0,
            P = 0;
           for (g = 0; g < 11; g++)
            (F += parseInt(i.charAt(g), 10) * O[g]),
             (P += parseInt(i.charAt(g), 10) * A[g]);
           return (
            (F %= 11) > 9 && (F %= 10),
            (P %= 11) > 9 && (P %= 10),
            {
             meta: {},
             valid:
              ''.concat(F) === i.substr(10, 1) &&
              ''.concat(P) === i.substr(11, 1),
            }
           );
          }
          return { meta: {}, valid: !0 };
         })(S);
         break;
        case 'se':
         w = (function (V) {
          var i = V;
          return (
           /^SE[0-9]{10}01$/.test(i) && (i = i.substr(2)),
           /^[0-9]{10}01$/.test(i)
            ? ((i = i.substr(0, 10)), { meta: {}, valid: c(i) })
            : { meta: {}, valid: !1 }
          );
         })(S);
         break;
        case 'si':
         w = (function (V) {
          var i = V.match(/^(SI)?([1-9][0-9]{7})$/);
          if (!i) return { meta: {}, valid: !1 };
          for (
           var g = i[1] ? V.substr(2) : V,
            b = [8, 7, 6, 5, 4, 3, 2],
            m = 0,
            O = 0;
           O < 7;
           O++
          )
           m += parseInt(g.charAt(O), 10) * b[O];
          return (
           (m = 11 - (m % 11)) == 10 && (m = 0),
           { meta: {}, valid: ''.concat(m) === g.substr(7, 1) }
          );
         })(S);
         break;
        case 'sk':
         w = (function (V) {
          var i = V;
          return (
           /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(i) && (i = i.substr(2)),
           /^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(i)
            ? { meta: {}, valid: parseInt(i, 10) % 11 == 0 }
            : { meta: {}, valid: !1 }
          );
         })(S);
         break;
        case 've':
         w = (function (V) {
          var i = V;
          if (
           (/^VE[VEJPG][0-9]{9}$/.test(i) && (i = i.substr(2)),
           !/^[VEJPG][0-9]{9}$/.test(i))
          )
           return { meta: {}, valid: !1 };
          for (
           var g = [3, 2, 7, 6, 5, 4, 3, 2],
            b = { E: 8, G: 20, J: 12, P: 16, V: 4 }[i.charAt(0)],
            m = 0;
           m < 8;
           m++
          )
           b += parseInt(i.charAt(m + 1), 10) * g[m];
          return (
           ((b = 11 - (b % 11)) != 11 && b !== 10) || (b = 0),
           { meta: {}, valid: ''.concat(b) === i.substr(9, 1) }
          );
         })(S);
         break;
        case 'za':
         w = (function (V) {
          var i = V;
          return (
           /^ZA4[0-9]{9}$/.test(i) && (i = i.substr(2)),
           { meta: {}, valid: /^4[0-9]{9}$/.test(i) }
          );
         })(S);
       }
       var _ = p(
        E.l10n && E.l10n.vat ? N.message || E.l10n.vat.country : N.message,
        E.l10n && E.l10n.vat && E.l10n.vat.countries
         ? E.l10n.vat.countries[$.toUpperCase()]
         : $.toUpperCase(),
       );
       return Object.assign({}, { message: _ }, w);
      },
     };
    }),
    Pe
   );
  })();
  var ka,
   Gn = Fa.exports,
   wa = { exports: {} },
   Ha = {};
  wa.exports =
   (ka ||
    ((ka = 1),
    (Ha.vin = function () {
     return {
      validate: function (d) {
       if (d.value === '') return { valid: !0 };
       if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(d.value))
        return { valid: !1 };
       for (
        var l = d.value.toUpperCase(),
         u = {
          A: 1,
          B: 2,
          C: 3,
          D: 4,
          E: 5,
          F: 6,
          G: 7,
          H: 8,
          J: 1,
          K: 2,
          L: 3,
          M: 4,
          N: 5,
          P: 7,
          R: 9,
          S: 2,
          T: 3,
          U: 4,
          V: 5,
          W: 6,
          X: 7,
          Y: 8,
          Z: 9,
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
         },
         o = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
         a = l.length,
         r = 0,
         e = 0;
        e < a;
        e++
       )
        r += u[''.concat(l.charAt(e))] * o[e];
       var t = ''.concat(r % 11);
       return t === '10' && (t = 'X'), { valid: t === l.charAt(8) };
      },
     };
    })),
   Ha);
  var $a,
   Un = wa.exports,
   Na = { exports: {} },
   Re = {};
  Na.exports = (function () {
   if ($a) return Re;
   $a = 1;
   var d = T,
    l = d.utils.format,
    u = d.utils.removeUndefined;
   return (
    (Re.zipCode = function () {
     var o = [
      'AT',
      'BG',
      'BR',
      'CA',
      'CH',
      'CZ',
      'DE',
      'DK',
      'ES',
      'FR',
      'GB',
      'IE',
      'IN',
      'IT',
      'MA',
      'NL',
      'PL',
      'PT',
      'RO',
      'RU',
      'SE',
      'SG',
      'SK',
      'US',
     ];
     return {
      validate: function (a) {
       var r = Object.assign({}, { message: '' }, u(a.options));
       if (a.value === '' || !r.country) return { valid: !0 };
       var e = a.value.substr(0, 2);
       if (
        !(e =
         typeof r.country == 'function' ? r.country.call(this) : r.country) ||
        o.indexOf(e.toUpperCase()) === -1
       )
        return { valid: !0 };
       var t = !1;
       switch ((e = e.toUpperCase())) {
        case 'AT':
        case 'CH':
         t = /^([1-9]{1})(\d{3})$/.test(a.value);
         break;
        case 'BG':
         t = /^([1-9]{1}[0-9]{3})$/.test(a.value);
         break;
        case 'BR':
         t = /^(\d{2})([.]?)(\d{3})([-]?)(\d{3})$/.test(a.value);
         break;
        case 'CA':
         t =
          /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(
           a.value,
          );
         break;
        case 'CZ':
        case 'SK':
         t = /^(\d{3})([ ]?)(\d{2})$/.test(a.value);
         break;
        case 'DE':
         t = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(a.value);
         break;
        case 'DK':
         t = /^(DK(-|\s)?)?\d{4}$/i.test(a.value);
         break;
        case 'ES':
         t = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(a.value);
         break;
        case 'FR':
         t = /^[0-9]{5}$/i.test(a.value);
         break;
        case 'GB':
         t = (function (n) {
          for (
           var s = '[ABCDEFGHIJKLMNOPRSTUWYZ]',
            c = '[ABCDEFGHKLMNOPQRSTUVWXY]',
            p = '[ABDEFGHJLNPQRSTUWXYZ]',
            h = 0,
            y = [
             new RegExp(
              '^('
               .concat(s, '{1}')
               .concat(c, '?[0-9]{1,2})(\\s*)([0-9]{1}')
               .concat(p, '{2})$'),
              'i',
             ),
             new RegExp(
              '^('
               .concat(s, '{1}[0-9]{1}')
               .concat('[ABCDEFGHJKPMNRSTUVWXY]', '{1})(\\s*)([0-9]{1}')
               .concat(p, '{2})$'),
              'i',
             ),
             new RegExp(
              '^('
               .concat(s, '{1}')
               .concat(c, '{1}?[0-9]{1}')
               .concat('[ABEHMNPRVWXY]', '{1})(\\s*)([0-9]{1}')
               .concat(p, '{2})$'),
              'i',
             ),
             new RegExp(
              '^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$',
              'i',
             ),
             /^(GIR)(\s*)(0AA)$/i,
             /^(BFPO)(\s*)([0-9]{1,4})$/i,
             /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,
             /^([A-Z]{4})(\s*)(1ZZ)$/i,
             /^(AI-2640)$/i,
            ];
           h < y.length;
           h++
          )
           if (y[h].test(n)) return !0;
          return !1;
         })(a.value);
         break;
        case 'IN':
         t = /^\d{3}\s?\d{3}$/.test(a.value);
         break;
        case 'IE':
         t = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(
          a.value,
         );
         break;
        case 'IT':
         t = /^(I-|IT-)?\d{5}$/i.test(a.value);
         break;
        case 'MA':
         t = /^[1-9][0-9]{4}$/i.test(a.value);
         break;
        case 'NL':
         t = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(a.value);
         break;
        case 'PL':
         t = /^[0-9]{2}-[0-9]{3}$/.test(a.value);
         break;
        case 'PT':
         t = /^[1-9]\d{3}-\d{3}$/.test(a.value);
         break;
        case 'RO':
         t = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(a.value);
         break;
        case 'RU':
         t = /^[0-9]{6}$/i.test(a.value);
         break;
        case 'SE':
         t = /^(S-)?\d{3}\s?\d{2}$/i.test(a.value);
         break;
        case 'SG':
         t = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(
          a.value,
         );
         break;
        default:
         t = /^\d{4,5}([-]?\d{4})?$/.test(a.value);
       }
       return {
        message: l(
         a.l10n && a.l10n.zipCode
          ? r.message || a.l10n.zipCode.country
          : r.message,
         a.l10n && a.l10n.zipCode && a.l10n.zipCode.countries
          ? a.l10n.zipCode.countries[e]
          : e,
        ),
        valid: t,
       };
      },
     };
    }),
    Re
   );
  })();
  var jn = Na.exports,
   Kn = {
    Alias: Ta.Alias,
    Aria: La.Aria,
    Declarative: Pa.Declarative,
    DefaultSubmit: Ra.DefaultSubmit,
    Dependency: Da.Dependency,
    Excluded: Za.Excluded,
    FieldStatus: _a.FieldStatus,
    Framework: Ba.Framework,
    Icon: Ga.Icon,
    Message: st.Message,
    Sequence: Ua.Sequence,
    SubmitButton: ja.SubmitButton,
    Tooltip: Ka.Tooltip,
    Trigger: za.Trigger,
   },
   De = {
    between: Ya.between,
    blank: Ja.blank,
    callback: Xa.callback,
    choice: Wa.choice,
    creditCard: qa.creditCard,
    date: Qa.date,
    different: en.different,
    digits: tn.digits,
    emailAddress: rn.emailAddress,
    file: an.file,
    greaterThan: nn.greaterThan,
    identical: sn.identical,
    integer: on.integer,
    ip: ln.ip,
    lessThan: dn.lessThan,
    notEmpty: un.notEmpty,
    numeric: cn.numeric,
    promise: fn.promise,
    regexp: pn.regexp,
    remote: vn.remote,
    stringCase: hn.stringCase,
    stringLength: mn.stringLength,
    uri: gn.uri,
    base64: bn.base64,
    bic: An.bic,
    color: yn.color,
    cusip: En.cusip,
    ean: In.ean,
    ein: xn.ein,
    grid: Cn.grid,
    hex: On.hex,
    iban: Sn.iban,
    id: Vn.id,
    imei: Fn.imei,
    imo: kn.imo,
    isbn: wn.isbn,
    isin: Hn.isin,
    ismn: $n.ismn,
    issn: Nn.issn,
    mac: Mn.mac,
    meid: Tn.meid,
    phone: Ln.phone,
    rtn: Pn.rtn,
    sedol: Rn.sedol,
    siren: Dn.siren,
    siret: Zn.siret,
    step: _n.step,
    uuid: Bn.uuid,
    vat: Gn.vat,
    vin: Un.vin,
    zipCode: jn.zipCode,
   };
  (U.Plugin = T.Plugin),
   (U.algorithms = T.algorithms),
   (U.formValidation = function (d, l) {
    var u = T.formValidation(d, l);
    return (
     Object.keys(De).forEach(function (o) {
      return u.registerValidator(o, De[o]);
     }),
     u
    );
   }),
   (U.plugins = Kn),
   (U.utils = T.utils),
   (U.validators = De);
 });
});
export default Yn();
