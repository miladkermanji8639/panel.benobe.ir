var P = (h, m) => () => (m || h((m = { exports: {} }).exports, m), m.exports);
var w = P((g, y) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/core
  * @version 2.4.0
  */ (function (h, m) {
  typeof g == 'object' && typeof y < 'u'
   ? m(g)
   : typeof define == 'function' && define.amd
     ? define(['exports'], m)
     : m(
        ((h = typeof globalThis < 'u' ? globalThis : h || self).FormValidation =
         {}),
       );
 })(void 0, function (h) {
  var m = {
    luhn: function (n) {
     for (
      var e = n.length,
       t = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
       ],
       i = 0,
       r = 0;
      e--;

     )
      (r += t[i][parseInt(n.charAt(e), 10)]), (i = 1 - i);
     return r % 10 == 0 && r > 0;
    },
    mod11And10: function (n) {
     for (var e = n.length, t = 5, i = 0; i < e; i++)
      t = (((2 * (t || 10)) % 11) + parseInt(n.charAt(i), 10)) % 10;
     return t === 1;
    },
    mod37And36: function (n, e) {
     e === void 0 && (e = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
     for (
      var t = n.length, i = e.length, r = Math.floor(i / 2), s = 0;
      s < t;
      s++
     )
      r = (((2 * (r || i)) % (i + 1)) + e.indexOf(n.charAt(s))) % i;
     return r === 1;
    },
    mod97And10: function (n) {
     for (
      var e = (function (s) {
        return s
         .split('')
         .map(function (a) {
          var o = a.charCodeAt(0);
          return o >= 65 && o <= 90 ? o - 55 : a;
         })
         .join('')
         .split('')
         .map(function (a) {
          return parseInt(a, 10);
         });
       })(n),
       t = 0,
       i = e.length,
       r = 0;
      r < i - 1;
      ++r
     )
      t = (10 * (t + e[r])) % 97;
     return (t += e[i - 1]) % 97 == 1;
    },
    verhoeff: function (n) {
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
       i = n.reverse(),
       r = 0,
       s = 0;
      s < i.length;
      s++
     )
      r = e[r][t[s % 8][i[s]]];
     return r === 0;
    },
   },
   b = (function () {
    function n(e, t) {
     (this.fields = {}),
      (this.elements = {}),
      (this.ee = {
       fns: {},
       clear: function () {
        this.fns = {};
       },
       emit: function (i) {
        for (var r = [], s = 1; s < arguments.length; s++)
         r[s - 1] = arguments[s];
        (this.fns[i] || []).map(function (a) {
         return a.apply(a, r);
        });
       },
       off: function (i, r) {
        if (this.fns[i]) {
         var s = this.fns[i].indexOf(r);
         s >= 0 && this.fns[i].splice(s, 1);
        }
       },
       on: function (i, r) {
        (this.fns[i] = this.fns[i] || []).push(r);
       },
      }),
      (this.filter = {
       filters: {},
       add: function (i, r) {
        (this.filters[i] = this.filters[i] || []).push(r);
       },
       clear: function () {
        this.filters = {};
       },
       execute: function (i, r, s) {
        if (!this.filters[i] || !this.filters[i].length) return r;
        for (var a = r, o = this.filters[i], d = o.length, l = 0; l < d; l++)
         a = o[l].apply(a, s);
        return a;
       },
       remove: function (i, r) {
        this.filters[i] &&
         (this.filters[i] = this.filters[i].filter(function (s) {
          return s !== r;
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
     (n.prototype.on = function (e, t) {
      return this.ee.on(e, t), this;
     }),
     (n.prototype.off = function (e, t) {
      return this.ee.off(e, t), this;
     }),
     (n.prototype.emit = function (e) {
      for (var t, i = [], r = 1; r < arguments.length; r++)
       i[r - 1] = arguments[r];
      return (
       (t = this.ee).emit.apply(
        t,
        (function (s, a, o) {
         if (o || arguments.length === 2)
          for (var d, l = 0, u = a.length; l < u; l++)
           (!d && l in a) ||
            (d || (d = Array.prototype.slice.call(a, 0, l)), (d[l] = a[l]));
         return s.concat(d || Array.prototype.slice.call(a));
        })([e], i, !1),
       ),
       this
      );
     }),
     (n.prototype.registerPlugin = function (e, t) {
      if (this.plugins[e])
       throw new Error('The plguin '.concat(e, ' is registered'));
      return t.setCore(this), t.install(), (this.plugins[e] = t), this;
     }),
     (n.prototype.deregisterPlugin = function (e) {
      var t = this.plugins[e];
      return t && t.uninstall(), delete this.plugins[e], this;
     }),
     (n.prototype.enablePlugin = function (e) {
      var t = this.plugins[e];
      return t && t.enable(), this;
     }),
     (n.prototype.disablePlugin = function (e) {
      var t = this.plugins[e];
      return t && t.disable(), this;
     }),
     (n.prototype.isPluginEnabled = function (e) {
      var t = this.plugins[e];
      return !!t && t.isPluginEnabled();
     }),
     (n.prototype.registerValidator = function (e, t) {
      if (this.validators[e])
       throw new Error('The validator '.concat(e, ' is registered'));
      return (this.validators[e] = t), this;
     }),
     (n.prototype.registerFilter = function (e, t) {
      return this.filter.add(e, t), this;
     }),
     (n.prototype.deregisterFilter = function (e, t) {
      return this.filter.remove(e, t), this;
     }),
     (n.prototype.executeFilter = function (e, t, i) {
      return this.filter.execute(e, t, i);
     }),
     (n.prototype.addField = function (e, t) {
      var i = Object.assign({}, { selector: '', validators: {} }, t);
      return (
       (this.fields[e] = this.fields[e]
        ? {
           selector: i.selector || this.fields[e].selector,
           validators: Object.assign(
            {},
            this.fields[e].validators,
            i.validators,
           ),
          }
        : i),
       (this.elements[e] = this.queryElements(e)),
       this.emit('core.field.added', {
        elements: this.elements[e],
        field: e,
        options: this.fields[e],
       }),
       this
      );
     }),
     (n.prototype.removeField = function (e) {
      if (!this.fields[e])
       throw new Error(
        'The field '.concat(
         e,
         ' validators are not defined. Please ensure the field is added first',
        ),
       );
      var t = this.elements[e],
       i = this.fields[e];
      return (
       delete this.elements[e],
       delete this.fields[e],
       this.emit('core.field.removed', { elements: t, field: e, options: i }),
       this
      );
     }),
     (n.prototype.validate = function () {
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
     (n.prototype.validateField = function (e) {
      var t = this,
       i = this.results.get(e);
      if (i === 'Valid' || i === 'Invalid') return Promise.resolve(i);
      this.emit('core.field.validating', e);
      var r = this.elements[e];
      if (r.length === 0)
       return this.emit('core.field.valid', e), Promise.resolve('Valid');
      var s = r[0].getAttribute('type');
      return s === 'radio' || s === 'checkbox' || r.length === 1
       ? this.validateElement(e, r[0])
       : Promise.all(
          r.map(function (a) {
           return t.validateElement(e, a);
          }),
         ).then(function (a) {
          switch (!0) {
           case a.indexOf('Invalid') !== -1:
            return (
             t.emit('core.field.invalid', e),
             t.results.set(e, 'Invalid'),
             Promise.resolve('Invalid')
            );
           case a.indexOf('NotValidated') !== -1:
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
     (n.prototype.validateElement = function (e, t) {
      var i = this;
      this.results.delete(e);
      var r = this.elements[e];
      if (this.filter.execute('element-ignored', !1, [e, t, r]))
       return (
        this.emit('core.element.ignored', {
         element: t,
         elements: r,
         field: e,
        }),
        Promise.resolve('Ignored')
       );
      var s = this.fields[e].validators;
      this.emit('core.element.validating', {
       element: t,
       elements: r,
       field: e,
      });
      var a = Object.keys(s).map(function (o) {
       return function () {
        return i.executeValidator(e, t, o, s[o]);
       };
      });
      return this.waterfall(a)
       .then(function (o) {
        var d = o.indexOf('Invalid') === -1;
        i.emit('core.element.validated', {
         element: t,
         elements: r,
         field: e,
         valid: d,
        });
        var l = t.getAttribute('type');
        return (
         (l !== 'radio' && l !== 'checkbox' && r.length !== 1) ||
          i.emit(d ? 'core.field.valid' : 'core.field.invalid', e),
         Promise.resolve(d ? 'Valid' : 'Invalid')
        );
       })
       .catch(function (o) {
        return (
         i.emit('core.element.notvalidated', {
          element: t,
          elements: r,
          field: e,
         }),
         Promise.resolve(o)
        );
       });
     }),
     (n.prototype.executeValidator = function (e, t, i, r) {
      var s = this,
       a = this.elements[e],
       o = this.filter.execute('validator-name', i, [i, e]);
      if (
       ((r.message = this.filter.execute('validator-message', r.message, [
        this.locale,
        e,
        o,
       ])),
       !this.validators[o] || r.enabled === !1)
      )
       return (
        this.emit('core.validator.validated', {
         element: t,
         elements: a,
         field: e,
         result: this.normalizeResult(e, o, { valid: !0 }),
         validator: o,
        }),
        Promise.resolve('Valid')
       );
      var d = this.validators[o],
       l = this.getElementValue(e, t, o);
      if (!this.filter.execute('field-should-validate', !0, [e, t, l, i]))
       return (
        this.emit('core.validator.notvalidated', {
         element: t,
         elements: a,
         field: e,
         validator: i,
        }),
        Promise.resolve('NotValidated')
       );
      this.emit('core.validator.validating', {
       element: t,
       elements: a,
       field: e,
       validator: i,
      });
      var u = d().validate({
       element: t,
       elements: a,
       field: e,
       l10n: this.localization,
       options: r,
       value: l,
      });
      if (typeof u.then == 'function')
       return u.then(function (c) {
        var v = s.normalizeResult(e, i, c);
        return (
         s.emit('core.validator.validated', {
          element: t,
          elements: a,
          field: e,
          result: v,
          validator: i,
         }),
         v.valid ? 'Valid' : 'Invalid'
        );
       });
      var f = this.normalizeResult(e, i, u);
      return (
       this.emit('core.validator.validated', {
        element: t,
        elements: a,
        field: e,
        result: f,
        validator: i,
       }),
       Promise.resolve(f.valid ? 'Valid' : 'Invalid')
      );
     }),
     (n.prototype.getElementValue = function (e, t, i) {
      var r = (function (s, a, o, d) {
       var l = (o.getAttribute('type') || '').toLowerCase(),
        u = o.tagName.toLowerCase();
       if (u === 'textarea') return o.value;
       if (u === 'select') {
        var f = o,
         c = f.selectedIndex;
        return c >= 0 ? f.options.item(c).value : '';
       }
       if (u === 'input') {
        if (l === 'radio' || l === 'checkbox') {
         var v = d.filter(function (x) {
          return x.checked;
         }).length;
         return v === 0 ? '' : v + '';
        }
        return o.value;
       }
       return '';
      })(this.form, 0, t, this.elements[e]);
      return this.filter.execute('field-value', r, [r, e, t, i]);
     }),
     (n.prototype.getElements = function (e) {
      return this.elements[e];
     }),
     (n.prototype.getFields = function () {
      return this.fields;
     }),
     (n.prototype.getFormElement = function () {
      return this.form;
     }),
     (n.prototype.getLocale = function () {
      return this.locale;
     }),
     (n.prototype.getPlugin = function (e) {
      return this.plugins[e];
     }),
     (n.prototype.updateFieldStatus = function (e, t, i) {
      var r = this,
       s = this.elements[e],
       a = s[0].getAttribute('type');
      if (
       ((a === 'radio' || a === 'checkbox' ? [s[0]] : s).forEach(function (o) {
        return r.updateElementStatus(e, o, t, i);
       }),
       i)
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
     (n.prototype.updateElementStatus = function (e, t, i, r) {
      var s = this,
       a = this.elements[e],
       o = this.fields[e].validators,
       d = r ? [r] : Object.keys(o);
      switch (i) {
       case 'NotValidated':
        d.forEach(function (l) {
         return s.emit('core.validator.notvalidated', {
          element: t,
          elements: a,
          field: e,
          validator: l,
         });
        }),
         this.emit('core.element.notvalidated', {
          element: t,
          elements: a,
          field: e,
         });
        break;
       case 'Validating':
        d.forEach(function (l) {
         return s.emit('core.validator.validating', {
          element: t,
          elements: a,
          field: e,
          validator: l,
         });
        }),
         this.emit('core.element.validating', {
          element: t,
          elements: a,
          field: e,
         });
        break;
       case 'Valid':
        d.forEach(function (l) {
         return s.emit('core.validator.validated', {
          element: t,
          elements: a,
          field: e,
          result: { message: o[l].message, valid: !0 },
          validator: l,
         });
        }),
         this.emit('core.element.validated', {
          element: t,
          elements: a,
          field: e,
          valid: !0,
         });
        break;
       case 'Invalid':
        d.forEach(function (l) {
         return s.emit('core.validator.validated', {
          element: t,
          elements: a,
          field: e,
          result: { message: o[l].message, valid: !1 },
          validator: l,
         });
        }),
         this.emit('core.element.validated', {
          element: t,
          elements: a,
          field: e,
          valid: !1,
         });
      }
      return this;
     }),
     (n.prototype.resetForm = function (e) {
      var t = this;
      return (
       Object.keys(this.fields).forEach(function (i) {
        return t.resetField(i, e);
       }),
       this.emit('core.form.reset', { formValidation: this, reset: e }),
       this
      );
     }),
     (n.prototype.resetField = function (e, t) {
      if (t) {
       var i = this.elements[e],
        r = i[0].getAttribute('type');
       i.forEach(function (s) {
        r === 'radio' || r === 'checkbox'
         ? (s.removeAttribute('selected'),
           s.removeAttribute('checked'),
           (s.checked = !1))
         : (s.setAttribute('value', ''),
           (s instanceof HTMLInputElement ||
            s instanceof HTMLTextAreaElement) &&
            (s.value = ''));
       });
      }
      return (
       this.updateFieldStatus(e, 'NotValidated'),
       this.emit('core.field.reset', { field: e, reset: t }),
       this
      );
     }),
     (n.prototype.revalidateField = function (e) {
      return this.fields[e]
       ? (this.updateFieldStatus(e, 'NotValidated'), this.validateField(e))
       : Promise.resolve('Ignored');
     }),
     (n.prototype.disableValidator = function (e, t) {
      if (!this.fields[e]) return this;
      var i = this.elements[e];
      return (
       this.toggleValidator(!1, e, t),
       this.emit('core.validator.disabled', {
        elements: i,
        field: e,
        formValidation: this,
        validator: t,
       }),
       this
      );
     }),
     (n.prototype.enableValidator = function (e, t) {
      if (!this.fields[e]) return this;
      var i = this.elements[e];
      return (
       this.toggleValidator(!0, e, t),
       this.emit('core.validator.enabled', {
        elements: i,
        field: e,
        formValidation: this,
        validator: t,
       }),
       this
      );
     }),
     (n.prototype.updateValidatorOption = function (e, t, i, r) {
      return (
       this.fields[e] &&
        this.fields[e].validators &&
        this.fields[e].validators[t] &&
        (this.fields[e].validators[t][i] = r),
       this
      );
     }),
     (n.prototype.setFieldOptions = function (e, t) {
      return (this.fields[e] = t), this;
     }),
     (n.prototype.destroy = function () {
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
     (n.prototype.setLocale = function (e, t) {
      return (this.locale = e), (this.localization = t), this;
     }),
     (n.prototype.waterfall = function (e) {
      return e.reduce(function (t, i) {
       return t.then(function (r) {
        return i().then(function (s) {
         return r.push(s), r;
        });
       });
      }, Promise.resolve([]));
     }),
     (n.prototype.queryElements = function (e) {
      var t = this.fields[e].selector
       ? this.fields[e].selector.charAt(0) === '#'
         ? '[id="'.concat(this.fields[e].selector.substring(1), '"]')
         : this.fields[e].selector
       : '[name="'.concat(e.replace(/"/g, '\\"'), '"]');
      return [].slice.call(this.form.querySelectorAll(t));
     }),
     (n.prototype.normalizeResult = function (e, t, i) {
      var r = this.fields[e].validators[t];
      return Object.assign({}, i, {
       message:
        i.message ||
        (r ? r.message : '') ||
        (this.localization &&
        this.localization[t] &&
        this.localization[t].default
         ? this.localization[t].default
         : '') ||
        'The field '.concat(e, ' is not valid'),
      });
     }),
     (n.prototype.toggleValidator = function (e, t, i) {
      var r = this,
       s = this.fields[t].validators;
      return (
       i && s && s[i]
        ? (this.fields[t].validators[i].enabled = e)
        : i ||
          Object.keys(s).forEach(function (a) {
           return (r.fields[t].validators[a].enabled = e);
          }),
       this.updateFieldStatus(t, 'NotValidated', i)
      );
     }),
     n
    );
   })(),
   E = (function () {
    function n(e) {
     (this.opts = e), (this.isEnabled = !0);
    }
    return (
     (n.prototype.setCore = function (e) {
      return (this.core = e), this;
     }),
     (n.prototype.enable = function () {
      return (this.isEnabled = !0), this.onEnabled(), this;
     }),
     (n.prototype.disable = function () {
      return (this.isEnabled = !1), this.onDisabled(), this;
     }),
     (n.prototype.isPluginEnabled = function () {
      return this.isEnabled;
     }),
     (n.prototype.onEnabled = function () {}),
     (n.prototype.onDisabled = function () {}),
     (n.prototype.install = function () {}),
     (n.prototype.uninstall = function () {}),
     n
    );
   })(),
   V = function (n, e) {
    var t =
     n.matches ||
     n.webkitMatchesSelector ||
     n.mozMatchesSelector ||
     n.msMatchesSelector;
    return t
     ? t.call(n, e)
     : [].slice.call(n.parentElement.querySelectorAll(e)).indexOf(n) >= 0;
   },
   O = {
    call: function (n, e) {
     if (typeof n == 'function') return n.apply(this, e);
     if (typeof n == 'string') {
      var t = n;
      t.substring(t.length - 2) === '()' && (t = t.substring(0, t.length - 2));
      for (
       var i = t.split('.'), r = i.pop(), s = window, a = 0, o = i;
       a < o.length;
       a++
      )
       s = s[o[a]];
      return s[r] === void 0 ? null : s[r].apply(this, e);
     }
    },
    classSet: function (n, e) {
     var t = [],
      i = [];
     Object.keys(e).forEach(function (r) {
      r && (e[r] ? t.push(r) : i.push(r));
     }),
      i.forEach(function (r) {
       return (function (s, a) {
        a.split(' ').forEach(function (o) {
         s.classList
          ? s.classList.remove(o)
          : (s.className = s.className.replace(o, ''));
        });
       })(n, r);
      }),
      t.forEach(function (r) {
       return (function (s, a) {
        a.split(' ').forEach(function (o) {
         s.classList
          ? s.classList.add(o)
          : ' '.concat(s.className, ' ').indexOf(' '.concat(o, ' ')) &&
            (s.className += ' '.concat(o));
        });
       })(n, r);
      });
    },
    closest: function (n, e) {
     for (var t = n; t && !V(t, e); ) t = t.parentElement;
     return t;
    },
    fetch: function (n, e) {
     return new Promise(function (t, i) {
      var r,
       s = Object.assign(
        {},
        { crossDomain: !1, headers: {}, method: 'GET', params: {} },
        e,
       ),
       a = Object.keys(s.params)
        .map(function (c) {
         return ''
          .concat(encodeURIComponent(c), '=')
          .concat(encodeURIComponent(s.params[c]));
        })
        .join('&'),
       o = n.indexOf('?') > -1,
       d =
        s.method === 'GET'
         ? ''
            .concat(n)
            .concat(o ? '&' : '?')
            .concat(a)
         : n;
      if (s.crossDomain) {
       var l = document.createElement('script'),
        u = '___FormValidationFetch_'.concat(
         Array(12)
          .fill('')
          .map(function (c) {
           return Math.random().toString(36).charAt(2);
          })
          .join(''),
         '___',
        );
       (window[u] = function (c) {
        delete window[u], t(c);
       }),
        (l.src = ''
         .concat(d)
         .concat(o ? '&' : '?', 'callback=')
         .concat(u)),
        (l.async = !0),
        l.addEventListener('load', function () {
         l.parentNode.removeChild(l);
        }),
        l.addEventListener('error', function () {
         return i;
        }),
        document.head.appendChild(l);
      } else {
       var f = new XMLHttpRequest();
       f.open(s.method, d),
        f.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
        s.method === 'POST' &&
         f.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded',
         ),
        Object.keys(s.headers).forEach(function (c) {
         return f.setRequestHeader(c, s.headers[c]);
        }),
        f.addEventListener('load', function () {
         t(JSON.parse(this.responseText));
        }),
        f.addEventListener('error', function () {
         return i;
        }),
        f.send(
         ((r = s.params),
         Object.keys(r)
          .map(function (c) {
           return ''
            .concat(encodeURIComponent(c), '=')
            .concat(encodeURIComponent(r[c]));
          })
          .join('&')),
        );
      }
     });
    },
    format: function (n, e) {
     var t = Array.isArray(e) ? e : [e],
      i = n;
     return (
      t.forEach(function (r) {
       i = i.replace('%s', r);
      }),
      i
     );
    },
    hasClass: function (n, e) {
     return n.classList
      ? n.classList.contains(e)
      : new RegExp('(^| )'.concat(e, '( |$)'), 'gi').test(n.className);
    },
    isValidDate: function (n, e, t, i) {
     if (
      isNaN(n) ||
      isNaN(e) ||
      isNaN(t) ||
      n < 1e3 ||
      n > 9999 ||
      e <= 0 ||
      e > 12 ||
      t <= 0 ||
      t >
       [
        31,
        n % 400 == 0 || (n % 100 != 0 && n % 4 == 0) ? 29 : 28,
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
     if (i === !0) {
      var r = new Date(),
       s = r.getFullYear(),
       a = r.getMonth(),
       o = r.getDate();
      return (
       n < s || (n === s && e - 1 < a) || (n === s && e - 1 === a && t < o)
      );
     }
     return !0;
    },
    removeUndefined: function (n) {
     return n
      ? Object.entries(n).reduce(function (e, t) {
         var i = t[0],
          r = t[1];
         return r === void 0 || (e[i] = r), e;
        }, {})
      : {};
    },
   },
   p = {};
  (h.Plugin = E),
   (h.algorithms = m),
   (h.formValidation = function (n, e) {
    var t = (function (i, r) {
     var s = Object.assign(
       {},
       { fields: {}, locale: 'en_US', plugins: {}, init: function (o) {} },
       r,
      ),
      a = new b(i, s.fields);
     return (
      a.setLocale(s.locale, s.localization),
      Object.keys(s.plugins).forEach(function (o) {
       return a.registerPlugin(o, s.plugins[o]);
      }),
      s.init(a),
      Object.keys(s.fields).forEach(function (o) {
       return a.addField(o, s.fields[o]);
      }),
      a
     );
    })(n, e);
    return (
     Object.keys(p).forEach(function (i) {
      return t.registerValidator(i, p[i]);
     }),
     t
    );
   }),
   (h.utils = O),
   (h.validators = p);
 });
});
export default w();
