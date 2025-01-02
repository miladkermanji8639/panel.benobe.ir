var Pi = (ne, de) => () => (
 de || ne((de = { exports: {} }).exports, de), de.exports
);
var Li = Pi((Dt, vs) => {
 (function (ne, de) {
  typeof Dt == 'object' && typeof vs < 'u'
   ? de(Dt)
   : typeof define == 'function' && define.amd
     ? define(['exports'], de)
     : ((ne = typeof globalThis < 'u' ? globalThis : ne || self),
       de((ne.FormValidation = {})));
 })(void 0, function (ne) {
  var de = { exports: {} },
   be = {},
   Zt;
  function fs() {
   if (Zt) return be;
   Zt = 1;
   function h(b) {
    for (
     var i = b.length,
      v = [
       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
       [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
      ],
      y = 0,
      C = 0;
     i--;

    )
     (C += v[y][parseInt(b.charAt(i), 10)]), (y = 1 - y);
    return C % 10 === 0 && C > 0;
   }
   function c(b) {
    for (var i = b.length, v = 5, y = 0; y < i; y++)
     v = ((((v || 10) * 2) % 11) + parseInt(b.charAt(y), 10)) % 10;
    return v === 1;
   }
   function f(b, i) {
    i === void 0 && (i = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    for (
     var v = b.length, y = i.length, C = Math.floor(y / 2), j = 0;
     j < v;
     j++
    )
     C = ((((C || y) * 2) % (y + 1)) + i.indexOf(b.charAt(j))) % y;
    return C === 1;
   }
   function u(b) {
    return b
     .split('')
     .map(function (i) {
      var v = i.charCodeAt(0);
      return v >= 65 && v <= 90 ? v - 55 : i;
     })
     .join('')
     .split('')
     .map(function (i) {
      return parseInt(i, 10);
     });
   }
   function o(b) {
    for (var i = u(b), v = 0, y = i.length, C = 0; C < y - 1; ++C)
     v = ((v + i[C]) * 10) % 97;
    return (v += i[y - 1]), v % 97 === 1;
   }
   function a(b) {
    for (
     var i = [
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
      v = [
       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
       [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
       [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
       [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
       [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
       [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
       [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
       [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
      ],
      y = b.reverse(),
      C = 0,
      j = 0;
     j < y.length;
     j++
    )
     C = i[C][v[j % 8][y[j]]];
    return C === 0;
   }
   var t = {
    luhn: h,
    mod11And10: c,
    mod37And36: f,
    mod97And10: o,
    verhoeff: a,
   };
   function e(b, i, v) {
    if (v || arguments.length === 2)
     for (var y = 0, C = i.length, j; y < C; y++)
      (j || !(y in i)) &&
       (j || (j = Array.prototype.slice.call(i, 0, y)), (j[y] = i[y]));
    return b.concat(j || Array.prototype.slice.call(i));
   }
   function r(b, i, v, y) {
    var C = (v.getAttribute('type') || '').toLowerCase(),
     j = v.tagName.toLowerCase();
    if (j === 'textarea') return v.value;
    if (j === 'select') {
     var T = v,
      D = T.selectedIndex;
     return D >= 0 ? T.options.item(D).value : '';
    }
    if (j === 'input')
     if (C === 'radio' || C === 'checkbox') {
      var B = y.filter(function (Z) {
       return Z.checked;
      }).length;
      return B === 0 ? '' : B + '';
     } else return v.value;
    return '';
   }
   function s() {
    return {
     fns: {},
     clear: function () {
      this.fns = {};
     },
     emit: function (b) {
      for (var i = [], v = 1; v < arguments.length; v++)
       i[v - 1] = arguments[v];
      (this.fns[b] || []).map(function (y) {
       return y.apply(y, i);
      });
     },
     off: function (b, i) {
      if (this.fns[b]) {
       var v = this.fns[b].indexOf(i);
       v >= 0 && this.fns[b].splice(v, 1);
      }
     },
     on: function (b, i) {
      (this.fns[b] = this.fns[b] || []).push(i);
     },
    };
   }
   function l() {
    return {
     filters: {},
     add: function (b, i) {
      (this.filters[b] = this.filters[b] || []).push(i);
     },
     clear: function () {
      this.filters = {};
     },
     execute: function (b, i, v) {
      if (!this.filters[b] || !this.filters[b].length) return i;
      for (var y = i, C = this.filters[b], j = C.length, T = 0; T < j; T++)
       y = C[T].apply(y, v);
      return y;
     },
     remove: function (b, i) {
      this.filters[b] &&
       (this.filters[b] = this.filters[b].filter(function (v) {
        return v !== i;
       }));
     },
    };
   }
   var $ = (function () {
    function b(i, v) {
     (this.fields = {}),
      (this.elements = {}),
      (this.ee = s()),
      (this.filter = l()),
      (this.plugins = {}),
      (this.results = new Map()),
      (this.validators = {}),
      (this.form = i),
      (this.fields = v);
    }
    return (
     (b.prototype.on = function (i, v) {
      return this.ee.on(i, v), this;
     }),
     (b.prototype.off = function (i, v) {
      return this.ee.off(i, v), this;
     }),
     (b.prototype.emit = function (i) {
      for (var v, y = [], C = 1; C < arguments.length; C++)
       y[C - 1] = arguments[C];
      return (v = this.ee).emit.apply(v, e([i], y, !1)), this;
     }),
     (b.prototype.registerPlugin = function (i, v) {
      if (this.plugins[i])
       throw new Error('The plguin '.concat(i, ' is registered'));
      return v.setCore(this), v.install(), (this.plugins[i] = v), this;
     }),
     (b.prototype.deregisterPlugin = function (i) {
      var v = this.plugins[i];
      return v && v.uninstall(), delete this.plugins[i], this;
     }),
     (b.prototype.enablePlugin = function (i) {
      var v = this.plugins[i];
      return v && v.enable(), this;
     }),
     (b.prototype.disablePlugin = function (i) {
      var v = this.plugins[i];
      return v && v.disable(), this;
     }),
     (b.prototype.isPluginEnabled = function (i) {
      var v = this.plugins[i];
      return v ? v.isPluginEnabled() : !1;
     }),
     (b.prototype.registerValidator = function (i, v) {
      if (this.validators[i])
       throw new Error('The validator '.concat(i, ' is registered'));
      return (this.validators[i] = v), this;
     }),
     (b.prototype.registerFilter = function (i, v) {
      return this.filter.add(i, v), this;
     }),
     (b.prototype.deregisterFilter = function (i, v) {
      return this.filter.remove(i, v), this;
     }),
     (b.prototype.executeFilter = function (i, v, y) {
      return this.filter.execute(i, v, y);
     }),
     (b.prototype.addField = function (i, v) {
      var y = Object.assign({}, { selector: '', validators: {} }, v);
      return (
       (this.fields[i] = this.fields[i]
        ? {
           selector: y.selector || this.fields[i].selector,
           validators: Object.assign(
            {},
            this.fields[i].validators,
            y.validators,
           ),
          }
        : y),
       (this.elements[i] = this.queryElements(i)),
       this.emit('core.field.added', {
        elements: this.elements[i],
        field: i,
        options: this.fields[i],
       }),
       this
      );
     }),
     (b.prototype.removeField = function (i) {
      if (!this.fields[i])
       throw new Error(
        'The field '.concat(
         i,
         ' validators are not defined. Please ensure the field is added first',
        ),
       );
      var v = this.elements[i],
       y = this.fields[i];
      return (
       delete this.elements[i],
       delete this.fields[i],
       this.emit('core.field.removed', { elements: v, field: i, options: y }),
       this
      );
     }),
     (b.prototype.validate = function () {
      var i = this;
      return (
       this.emit('core.form.validating', { formValidation: this }),
       this.filter
        .execute('validate-pre', Promise.resolve(), [])
        .then(function () {
         return Promise.all(
          Object.keys(i.fields).map(function (v) {
           return i.validateField(v);
          }),
         ).then(function (v) {
          switch (!0) {
           case v.indexOf('Invalid') !== -1:
            return (
             i.emit('core.form.invalid', { formValidation: i }),
             Promise.resolve('Invalid')
            );
           case v.indexOf('NotValidated') !== -1:
            return (
             i.emit('core.form.notvalidated', { formValidation: i }),
             Promise.resolve('NotValidated')
            );
           default:
            return (
             i.emit('core.form.valid', { formValidation: i }),
             Promise.resolve('Valid')
            );
          }
         });
        })
      );
     }),
     (b.prototype.validateField = function (i) {
      var v = this,
       y = this.results.get(i);
      if (y === 'Valid' || y === 'Invalid') return Promise.resolve(y);
      this.emit('core.field.validating', i);
      var C = this.elements[i];
      if (C.length === 0)
       return this.emit('core.field.valid', i), Promise.resolve('Valid');
      var j = C[0].getAttribute('type');
      return j === 'radio' || j === 'checkbox' || C.length === 1
       ? this.validateElement(i, C[0])
       : Promise.all(
          C.map(function (T) {
           return v.validateElement(i, T);
          }),
         ).then(function (T) {
          switch (!0) {
           case T.indexOf('Invalid') !== -1:
            return (
             v.emit('core.field.invalid', i),
             v.results.set(i, 'Invalid'),
             Promise.resolve('Invalid')
            );
           case T.indexOf('NotValidated') !== -1:
            return (
             v.emit('core.field.notvalidated', i),
             v.results.delete(i),
             Promise.resolve('NotValidated')
            );
           default:
            return (
             v.emit('core.field.valid', i),
             v.results.set(i, 'Valid'),
             Promise.resolve('Valid')
            );
          }
         });
     }),
     (b.prototype.validateElement = function (i, v) {
      var y = this;
      this.results.delete(i);
      var C = this.elements[i],
       j = this.filter.execute('element-ignored', !1, [i, v, C]);
      if (j)
       return (
        this.emit('core.element.ignored', {
         element: v,
         elements: C,
         field: i,
        }),
        Promise.resolve('Ignored')
       );
      var T = this.fields[i].validators;
      this.emit('core.element.validating', {
       element: v,
       elements: C,
       field: i,
      });
      var D = Object.keys(T).map(function (B) {
       return function () {
        return y.executeValidator(i, v, B, T[B]);
       };
      });
      return this.waterfall(D)
       .then(function (B) {
        var Z = B.indexOf('Invalid') === -1;
        y.emit('core.element.validated', {
         element: v,
         elements: C,
         field: i,
         valid: Z,
        });
        var Q = v.getAttribute('type');
        return (
         (Q === 'radio' || Q === 'checkbox' || C.length === 1) &&
          y.emit(Z ? 'core.field.valid' : 'core.field.invalid', i),
         Promise.resolve(Z ? 'Valid' : 'Invalid')
        );
       })
       .catch(function (B) {
        return (
         y.emit('core.element.notvalidated', {
          element: v,
          elements: C,
          field: i,
         }),
         Promise.resolve(B)
        );
       });
     }),
     (b.prototype.executeValidator = function (i, v, y, C) {
      var j = this,
       T = this.elements[i],
       D = this.filter.execute('validator-name', y, [y, i]);
      if (
       ((C.message = this.filter.execute('validator-message', C.message, [
        this.locale,
        i,
        D,
       ])),
       !this.validators[D] || C.enabled === !1)
      )
       return (
        this.emit('core.validator.validated', {
         element: v,
         elements: T,
         field: i,
         result: this.normalizeResult(i, D, { valid: !0 }),
         validator: D,
        }),
        Promise.resolve('Valid')
       );
      var B = this.validators[D],
       Z = this.getElementValue(i, v, D),
       Q = this.filter.execute('field-should-validate', !0, [i, v, Z, y]);
      if (!Q)
       return (
        this.emit('core.validator.notvalidated', {
         element: v,
         elements: T,
         field: i,
         validator: y,
        }),
        Promise.resolve('NotValidated')
       );
      this.emit('core.validator.validating', {
       element: v,
       elements: T,
       field: i,
       validator: y,
      });
      var ee = B().validate({
        element: v,
        elements: T,
        field: i,
        l10n: this.localization,
        options: C,
        value: Z,
       }),
       se = typeof ee.then == 'function';
      if (se)
       return ee.then(function ($e) {
        var Ae = j.normalizeResult(i, y, $e);
        return (
         j.emit('core.validator.validated', {
          element: v,
          elements: T,
          field: i,
          result: Ae,
          validator: y,
         }),
         Ae.valid ? 'Valid' : 'Invalid'
        );
       });
      var ge = this.normalizeResult(i, y, ee);
      return (
       this.emit('core.validator.validated', {
        element: v,
        elements: T,
        field: i,
        result: ge,
        validator: y,
       }),
       Promise.resolve(ge.valid ? 'Valid' : 'Invalid')
      );
     }),
     (b.prototype.getElementValue = function (i, v, y) {
      var C = r(this.form, i, v, this.elements[i]);
      return this.filter.execute('field-value', C, [C, i, v, y]);
     }),
     (b.prototype.getElements = function (i) {
      return this.elements[i];
     }),
     (b.prototype.getFields = function () {
      return this.fields;
     }),
     (b.prototype.getFormElement = function () {
      return this.form;
     }),
     (b.prototype.getLocale = function () {
      return this.locale;
     }),
     (b.prototype.getPlugin = function (i) {
      return this.plugins[i];
     }),
     (b.prototype.updateFieldStatus = function (i, v, y) {
      var C = this,
       j = this.elements[i],
       T = j[0].getAttribute('type'),
       D = T === 'radio' || T === 'checkbox' ? [j[0]] : j;
      if (
       (D.forEach(function (B) {
        return C.updateElementStatus(i, B, v, y);
       }),
       y)
      )
       v === 'Invalid' &&
        (this.emit('core.field.invalid', i), this.results.set(i, 'Invalid'));
      else
       switch (v) {
        case 'NotValidated':
         this.emit('core.field.notvalidated', i), this.results.delete(i);
         break;
        case 'Validating':
         this.emit('core.field.validating', i), this.results.delete(i);
         break;
        case 'Valid':
         this.emit('core.field.valid', i), this.results.set(i, 'Valid');
         break;
        case 'Invalid':
         this.emit('core.field.invalid', i), this.results.set(i, 'Invalid');
         break;
       }
      return this;
     }),
     (b.prototype.updateElementStatus = function (i, v, y, C) {
      var j = this,
       T = this.elements[i],
       D = this.fields[i].validators,
       B = C ? [C] : Object.keys(D);
      switch (y) {
       case 'NotValidated':
        B.forEach(function (Z) {
         return j.emit('core.validator.notvalidated', {
          element: v,
          elements: T,
          field: i,
          validator: Z,
         });
        }),
         this.emit('core.element.notvalidated', {
          element: v,
          elements: T,
          field: i,
         });
        break;
       case 'Validating':
        B.forEach(function (Z) {
         return j.emit('core.validator.validating', {
          element: v,
          elements: T,
          field: i,
          validator: Z,
         });
        }),
         this.emit('core.element.validating', {
          element: v,
          elements: T,
          field: i,
         });
        break;
       case 'Valid':
        B.forEach(function (Z) {
         return j.emit('core.validator.validated', {
          element: v,
          elements: T,
          field: i,
          result: { message: D[Z].message, valid: !0 },
          validator: Z,
         });
        }),
         this.emit('core.element.validated', {
          element: v,
          elements: T,
          field: i,
          valid: !0,
         });
        break;
       case 'Invalid':
        B.forEach(function (Z) {
         return j.emit('core.validator.validated', {
          element: v,
          elements: T,
          field: i,
          result: { message: D[Z].message, valid: !1 },
          validator: Z,
         });
        }),
         this.emit('core.element.validated', {
          element: v,
          elements: T,
          field: i,
          valid: !1,
         });
        break;
      }
      return this;
     }),
     (b.prototype.resetForm = function (i) {
      var v = this;
      return (
       Object.keys(this.fields).forEach(function (y) {
        return v.resetField(y, i);
       }),
       this.emit('core.form.reset', { formValidation: this, reset: i }),
       this
      );
     }),
     (b.prototype.resetField = function (i, v) {
      if (v) {
       var y = this.elements[i],
        C = y[0].getAttribute('type');
       y.forEach(function (j) {
        C === 'radio' || C === 'checkbox'
         ? (j.removeAttribute('selected'),
           j.removeAttribute('checked'),
           (j.checked = !1))
         : (j.setAttribute('value', ''),
           (j instanceof HTMLInputElement ||
            j instanceof HTMLTextAreaElement) &&
            (j.value = ''));
       });
      }
      return (
       this.updateFieldStatus(i, 'NotValidated'),
       this.emit('core.field.reset', { field: i, reset: v }),
       this
      );
     }),
     (b.prototype.revalidateField = function (i) {
      return this.fields[i]
       ? (this.updateFieldStatus(i, 'NotValidated'), this.validateField(i))
       : Promise.resolve('Ignored');
     }),
     (b.prototype.disableValidator = function (i, v) {
      if (!this.fields[i]) return this;
      var y = this.elements[i];
      return (
       this.toggleValidator(!1, i, v),
       this.emit('core.validator.disabled', {
        elements: y,
        field: i,
        formValidation: this,
        validator: v,
       }),
       this
      );
     }),
     (b.prototype.enableValidator = function (i, v) {
      if (!this.fields[i]) return this;
      var y = this.elements[i];
      return (
       this.toggleValidator(!0, i, v),
       this.emit('core.validator.enabled', {
        elements: y,
        field: i,
        formValidation: this,
        validator: v,
       }),
       this
      );
     }),
     (b.prototype.updateValidatorOption = function (i, v, y, C) {
      return (
       this.fields[i] &&
        this.fields[i].validators &&
        this.fields[i].validators[v] &&
        (this.fields[i].validators[v][y] = C),
       this
      );
     }),
     (b.prototype.setFieldOptions = function (i, v) {
      return (this.fields[i] = v), this;
     }),
     (b.prototype.destroy = function () {
      var i = this;
      return (
       Object.keys(this.plugins).forEach(function (v) {
        return i.plugins[v].uninstall();
       }),
       this.ee.clear(),
       this.filter.clear(),
       this.results.clear(),
       (this.plugins = {}),
       this
      );
     }),
     (b.prototype.setLocale = function (i, v) {
      return (this.locale = i), (this.localization = v), this;
     }),
     (b.prototype.waterfall = function (i) {
      return i.reduce(function (v, y) {
       return v.then(function (C) {
        return y().then(function (j) {
         return C.push(j), C;
        });
       });
      }, Promise.resolve([]));
     }),
     (b.prototype.queryElements = function (i) {
      var v = this.fields[i].selector
       ? this.fields[i].selector.charAt(0) === '#'
         ? '[id="'.concat(this.fields[i].selector.substring(1), '"]')
         : this.fields[i].selector
       : '[name="'.concat(i.replace(/"/g, '\\"'), '"]');
      return [].slice.call(this.form.querySelectorAll(v));
     }),
     (b.prototype.normalizeResult = function (i, v, y) {
      var C = this.fields[i].validators[v];
      return Object.assign({}, y, {
       message:
        y.message ||
        (C ? C.message : '') ||
        (this.localization &&
        this.localization[v] &&
        this.localization[v].default
         ? this.localization[v].default
         : '') ||
        'The field '.concat(i, ' is not valid'),
      });
     }),
     (b.prototype.toggleValidator = function (i, v, y) {
      var C = this,
       j = this.fields[v].validators;
      return (
       y && j && j[y]
        ? (this.fields[v].validators[y].enabled = i)
        : y ||
          Object.keys(j).forEach(function (T) {
           return (C.fields[v].validators[T].enabled = i);
          }),
       this.updateFieldStatus(v, 'NotValidated', y)
      );
     }),
     b
    );
   })();
   function E(b, i) {
    var v = Object.assign(
      {},
      { fields: {}, locale: 'en_US', plugins: {}, init: function (C) {} },
      i,
     ),
     y = new $(b, v.fields);
    return (
     y.setLocale(v.locale, v.localization),
     Object.keys(v.plugins).forEach(function (C) {
      return y.registerPlugin(C, v.plugins[C]);
     }),
     v.init(y),
     Object.keys(v.fields).forEach(function (C) {
      return y.addField(C, v.fields[C]);
     }),
     y
    );
   }
   var O = (function () {
    function b(i) {
     (this.opts = i), (this.isEnabled = !0);
    }
    return (
     (b.prototype.setCore = function (i) {
      return (this.core = i), this;
     }),
     (b.prototype.enable = function () {
      return (this.isEnabled = !0), this.onEnabled(), this;
     }),
     (b.prototype.disable = function () {
      return (this.isEnabled = !1), this.onDisabled(), this;
     }),
     (b.prototype.isPluginEnabled = function () {
      return this.isEnabled;
     }),
     (b.prototype.onEnabled = function () {}),
     (b.prototype.onDisabled = function () {}),
     (b.prototype.install = function () {}),
     (b.prototype.uninstall = function () {}),
     b
    );
   })();
   function F(b, i) {
    if (typeof b == 'function') return b.apply(this, i);
    if (typeof b == 'string') {
     var v = b;
     v.substring(v.length - 2) === '()' && (v = v.substring(0, v.length - 2));
     for (
      var y = v.split('.'), C = y.pop(), j = window, T = 0, D = y;
      T < D.length;
      T++
     ) {
      var B = D[T];
      j = j[B];
     }
     return typeof j[C] > 'u' ? null : j[C].apply(this, i);
    }
   }
   var R = function (b, i) {
     i.split(' ').forEach(function (v) {
      b.classList
       ? b.classList.add(v)
       : ' '.concat(b.className, ' ').indexOf(' '.concat(v, ' ')) &&
         (b.className += ' '.concat(v));
     });
    },
    U = function (b, i) {
     i.split(' ').forEach(function (v) {
      b.classList
       ? b.classList.remove(v)
       : (b.className = b.className.replace(v, ''));
     });
    },
    K = function (b, i) {
     var v = [],
      y = [];
     Object.keys(i).forEach(function (C) {
      C && (i[C] ? v.push(C) : y.push(C));
     }),
      y.forEach(function (C) {
       return U(b, C);
      }),
      v.forEach(function (C) {
       return R(b, C);
      });
    },
    G = function (b, i) {
     var v =
      b.matches ||
      b.webkitMatchesSelector ||
      b.mozMatchesSelector ||
      b.msMatchesSelector;
     if (v) return v.call(b, i);
     var y = [].slice.call(b.parentElement.querySelectorAll(i));
     return y.indexOf(b) >= 0;
    },
    J = function (b, i) {
     for (var v = b; v && !G(v, i); ) v = v.parentElement;
     return v;
    },
    X = function (b) {
     return Array(b)
      .fill('')
      .map(function (i) {
       return Math.random().toString(36).charAt(2);
      })
      .join('');
    },
    re = function (b, i) {
     var v = function (y) {
      return Object.keys(y)
       .map(function (C) {
        return ''
         .concat(encodeURIComponent(C), '=')
         .concat(encodeURIComponent(y[C]));
       })
       .join('&');
     };
     return new Promise(function (y, C) {
      var j = Object.assign(
        {},
        { crossDomain: !1, headers: {}, method: 'GET', params: {} },
        i,
       ),
       T = Object.keys(j.params)
        .map(function (se) {
         return ''
          .concat(encodeURIComponent(se), '=')
          .concat(encodeURIComponent(j.params[se]));
        })
        .join('&'),
       D = b.indexOf('?') > -1,
       B =
        j.method === 'GET'
         ? ''
            .concat(b)
            .concat(D ? '&' : '?')
            .concat(T)
         : b;
      if (j.crossDomain) {
       var Z = document.createElement('script'),
        Q = '___FormValidationFetch_'.concat(X(12), '___');
       (window[Q] = function (se) {
        delete window[Q], y(se);
       }),
        (Z.src = ''
         .concat(B)
         .concat(D ? '&' : '?', 'callback=')
         .concat(Q)),
        (Z.async = !0),
        Z.addEventListener('load', function () {
         Z.parentNode.removeChild(Z);
        }),
        Z.addEventListener('error', function () {
         return C;
        }),
        document.head.appendChild(Z);
      } else {
       var ee = new XMLHttpRequest();
       ee.open(j.method, B),
        ee.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
        j.method === 'POST' &&
         ee.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded',
         ),
        Object.keys(j.headers).forEach(function (se) {
         return ee.setRequestHeader(se, j.headers[se]);
        }),
        ee.addEventListener('load', function () {
         y(JSON.parse(this.responseText));
        }),
        ee.addEventListener('error', function () {
         return C;
        }),
        ee.send(v(j.params));
      }
     });
    },
    te = function (b, i) {
     var v = Array.isArray(i) ? i : [i],
      y = b;
     return (
      v.forEach(function (C) {
       y = y.replace('%s', C);
      }),
      y
     );
    },
    ce = function (b, i) {
     return b.classList
      ? b.classList.contains(i)
      : new RegExp('(^| )'.concat(i, '( |$)'), 'gi').test(b.className);
    },
    ue = function (b, i, v, y) {
     if (
      isNaN(b) ||
      isNaN(i) ||
      isNaN(v) ||
      b < 1e3 ||
      b > 9999 ||
      i <= 0 ||
      i > 12
     )
      return !1;
     var C = [
      31,
      b % 400 === 0 || (b % 100 !== 0 && b % 4 === 0) ? 29 : 28,
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
     if (v <= 0 || v > C[i - 1]) return !1;
     if (y === !0) {
      var j = new Date(),
       T = j.getFullYear(),
       D = j.getMonth(),
       B = j.getDate();
      return (
       b < T || (b === T && i - 1 < D) || (b === T && i - 1 === D && v < B)
      );
     }
     return !0;
    },
    ae = function (b) {
     return b
      ? Object.entries(b).reduce(function (i, v) {
         var y = v[0],
          C = v[1];
         return C === void 0 || (i[y] = C), i;
        }, {})
      : {};
    },
    me = {
     call: F,
     classSet: K,
     closest: J,
     fetch: re,
     format: te,
     hasClass: ce,
     isValidDate: ue,
     removeUndefined: ae,
    };
   return (
    (be.Plugin = O),
    (be.algorithms = t),
    (be.formValidation = E),
    (be.utils = me),
    be
   );
  }
  de.exports = fs();
  var P = de.exports,
   Ut = { exports: {} },
   ye = {},
   Bt;
  function hs() {
   if (Bt) return ye;
   Bt = 1;
   var h = P,
    c = function (o, a) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (t, e) {
         t.__proto__ = e;
        }) ||
       function (t, e) {
        for (var r in e)
         Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
       }),
      c(o, a)
     );
    };
   function f(o, a) {
    if (typeof a != 'function' && a !== null)
     throw new TypeError(
      'Class extends value ' + String(a) + ' is not a constructor or null',
     );
    c(o, a);
    function t() {
     this.constructor = o;
    }
    o.prototype =
     a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
   }
   var u = (function (o) {
    f(a, o);
    function a(t) {
     var e = o.call(this, t) || this;
     return (
      (e.opts = t || {}),
      (e.validatorNameFilter = e.getValidatorName.bind(e)),
      e
     );
    }
    return (
     (a.prototype.install = function () {
      this.core.registerFilter('validator-name', this.validatorNameFilter);
     }),
     (a.prototype.uninstall = function () {
      this.core.deregisterFilter('validator-name', this.validatorNameFilter);
     }),
     (a.prototype.getValidatorName = function (t, e) {
      return (this.isEnabled && this.opts[t]) || t;
     }),
     a
    );
   })(h.Plugin);
   return (ye.Alias = u), ye;
  }
  Ut.exports = hs();
  var ps = Ut.exports,
   qt = { exports: {} },
   Ie = {},
   Gt;
  function ms() {
   if (Gt) return Ie;
   Gt = 1;
   var h = P,
    c = function (o, a) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (t, e) {
         t.__proto__ = e;
        }) ||
       function (t, e) {
        for (var r in e)
         Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
       }),
      c(o, a)
     );
    };
   function f(o, a) {
    if (typeof a != 'function' && a !== null)
     throw new TypeError(
      'Class extends value ' + String(a) + ' is not a constructor or null',
     );
    c(o, a);
    function t() {
     this.constructor = o;
    }
    o.prototype =
     a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
   }
   var u = (function (o) {
    f(a, o);
    function a() {
     var t = o.call(this, {}) || this;
     return (
      (t.elementValidatedHandler = t.onElementValidated.bind(t)),
      (t.fieldValidHandler = t.onFieldValid.bind(t)),
      (t.fieldInvalidHandler = t.onFieldInvalid.bind(t)),
      (t.messageDisplayedHandler = t.onMessageDisplayed.bind(t)),
      t
     );
    }
    return (
     (a.prototype.install = function () {
      this.core
       .on('core.field.valid', this.fieldValidHandler)
       .on('core.field.invalid', this.fieldInvalidHandler)
       .on('core.element.validated', this.elementValidatedHandler)
       .on('plugins.message.displayed', this.messageDisplayedHandler);
     }),
     (a.prototype.uninstall = function () {
      this.core
       .off('core.field.valid', this.fieldValidHandler)
       .off('core.field.invalid', this.fieldInvalidHandler)
       .off('core.element.validated', this.elementValidatedHandler)
       .off('plugins.message.displayed', this.messageDisplayedHandler);
     }),
     (a.prototype.onElementValidated = function (t) {
      t.valid &&
       (t.element.setAttribute('aria-invalid', 'false'),
       t.element.removeAttribute('aria-describedby'));
     }),
     (a.prototype.onFieldValid = function (t) {
      var e = this.core.getElements(t);
      e &&
       e.forEach(function (r) {
        r.setAttribute('aria-invalid', 'false'),
         r.removeAttribute('aria-describedby');
       });
     }),
     (a.prototype.onFieldInvalid = function (t) {
      var e = this.core.getElements(t);
      e &&
       e.forEach(function (r) {
        return r.setAttribute('aria-invalid', 'true');
       });
     }),
     (a.prototype.onMessageDisplayed = function (t) {
      t.messageElement.setAttribute('role', 'alert'),
       t.messageElement.setAttribute('aria-hidden', 'false');
      var e = this.core.getElements(t.field),
       r = e.indexOf(t.element),
       s = 'js-fv-'
        .concat(t.field, '-')
        .concat(r, '-')
        .concat(Date.now(), '-message');
      t.messageElement.setAttribute('id', s),
       t.element.setAttribute('aria-describedby', s);
      var l = t.element.getAttribute('type');
      (l === 'radio' || l === 'checkbox') &&
       e.forEach(function ($) {
        return $.setAttribute('aria-describedby', s);
       });
     }),
     a
    );
   })(h.Plugin);
   return (Ie.Aria = u), Ie;
  }
  qt.exports = ms();
  var gs = qt.exports,
   Kt = { exports: {} },
   xe = {},
   Yt;
  function bs() {
   if (Yt) return xe;
   Yt = 1;
   var h = P,
    c = function (o, a) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (t, e) {
         t.__proto__ = e;
        }) ||
       function (t, e) {
        for (var r in e)
         Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
       }),
      c(o, a)
     );
    };
   function f(o, a) {
    if (typeof a != 'function' && a !== null)
     throw new TypeError(
      'Class extends value ' + String(a) + ' is not a constructor or null',
     );
    c(o, a);
    function t() {
     this.constructor = o;
    }
    o.prototype =
     a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
   }
   var u = (function (o) {
    f(a, o);
    function a(t) {
     var e = o.call(this, t) || this;
     return (
      (e.addedFields = new Map()),
      (e.opts = Object.assign(
       {},
       { html5Input: !1, pluginPrefix: 'data-fvp-', prefix: 'data-fv-' },
       t,
      )),
      (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(e)),
      e
     );
    }
    return (
     (a.prototype.install = function () {
      var t = this;
      this.parsePlugins();
      var e = this.parseOptions();
      Object.keys(e).forEach(function (r) {
       t.addedFields.has(r) || t.addedFields.set(r, !0),
        t.core.addField(r, e[r]);
      }),
       this.core
        .on('core.field.added', this.fieldAddedHandler)
        .on('core.field.removed', this.fieldRemovedHandler);
     }),
     (a.prototype.uninstall = function () {
      this.addedFields.clear(),
       this.core
        .off('core.field.added', this.fieldAddedHandler)
        .off('core.field.removed', this.fieldRemovedHandler);
     }),
     (a.prototype.onFieldAdded = function (t) {
      var e = this,
       r = t.elements;
      !r ||
       r.length === 0 ||
       this.addedFields.has(t.field) ||
       (this.addedFields.set(t.field, !0),
       r.forEach(function (s) {
        var l = e.parseElement(s);
        if (!e.isEmptyOption(l)) {
         var $ = {
          selector: t.options.selector,
          validators: Object.assign(
           {},
           t.options.validators || {},
           l.validators,
          ),
         };
         e.core.setFieldOptions(t.field, $);
        }
       }));
     }),
     (a.prototype.onFieldRemoved = function (t) {
      t.field &&
       this.addedFields.has(t.field) &&
       this.addedFields.delete(t.field);
     }),
     (a.prototype.parseOptions = function () {
      var t = this,
       e = this.opts.prefix,
       r = {},
       s = this.core.getFields(),
       l = this.core.getFormElement(),
       $ = [].slice.call(l.querySelectorAll('[name], ['.concat(e, 'field]')));
      return (
       $.forEach(function (E) {
        var O = t.parseElement(E);
        if (!t.isEmptyOption(O)) {
         var F =
          E.getAttribute('name') || E.getAttribute(''.concat(e, 'field'));
         r[F] = Object.assign({}, r[F], O);
        }
       }),
       Object.keys(r).forEach(function (E) {
        Object.keys(r[E].validators).forEach(function (O) {
         (r[E].validators[O].enabled = r[E].validators[O].enabled || !1),
          s[E] &&
           s[E].validators &&
           s[E].validators[O] &&
           Object.assign(r[E].validators[O], s[E].validators[O]);
        });
       }),
       Object.assign({}, s, r)
      );
     }),
     (a.prototype.createPluginInstance = function (t, e) {
      for (
       var r = t.split('.'), s = window || this, l = 0, $ = r.length;
       l < $;
       l++
      )
       s = s[r[l]];
      if (typeof s != 'function')
       throw new Error('the plugin '.concat(t, " doesn't exist"));
      return new s(e);
     }),
     (a.prototype.parsePlugins = function () {
      for (
       var t,
        e = this,
        r = this.core.getFormElement(),
        s = new RegExp(
         '^'.concat(this.opts.pluginPrefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
        ),
        l = r.attributes.length,
        $ = {},
        E = 0;
       E < l;
       E++
      ) {
       var O = r.attributes[E].name,
        F = r.attributes[E].value,
        R = s.exec(O);
       if (R && R.length === 4) {
        var U = this.toCamelCase(R[1]);
        $[U] = Object.assign(
         {},
         R[3]
          ? ((t = {}), (t[this.toCamelCase(R[3])] = F), t)
          : { enabled: F === '' || F === 'true' },
         $[U],
        );
       }
      }
      Object.keys($).forEach(function (K) {
       var G = $[K],
        J = G.enabled,
        X = G.class;
       if (J && X) {
        delete G.enabled, delete G.clazz;
        var re = e.createPluginInstance(X, G);
        e.core.registerPlugin(K, re);
       }
      });
     }),
     (a.prototype.isEmptyOption = function (t) {
      var e = t.validators;
      return Object.keys(e).length === 0 && e.constructor === Object;
     }),
     (a.prototype.parseElement = function (t) {
      for (
       var e = new RegExp(
         '^'.concat(this.opts.prefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
        ),
        r = t.attributes.length,
        s = {},
        l = t.getAttribute('type'),
        $ = 0;
       $ < r;
       $++
      ) {
       var E = t.attributes[$].name,
        O = t.attributes[$].value;
       if (this.opts.html5Input)
        switch (!0) {
         case E === 'minlength':
          s.stringLength = Object.assign(
           {},
           { enabled: !0, min: parseInt(O, 10) },
           s.stringLength,
          );
          break;
         case E === 'maxlength':
          s.stringLength = Object.assign(
           {},
           { enabled: !0, max: parseInt(O, 10) },
           s.stringLength,
          );
          break;
         case E === 'pattern':
          s.regexp = Object.assign({}, { enabled: !0, regexp: O }, s.regexp);
          break;
         case E === 'required':
          s.notEmpty = Object.assign({}, { enabled: !0 }, s.notEmpty);
          break;
         case E === 'type' && O === 'color':
          s.color = Object.assign({}, { enabled: !0, type: 'hex' }, s.color);
          break;
         case E === 'type' && O === 'email':
          s.emailAddress = Object.assign({}, { enabled: !0 }, s.emailAddress);
          break;
         case E === 'type' && O === 'url':
          s.uri = Object.assign({}, { enabled: !0 }, s.uri);
          break;
         case E === 'type' && O === 'range':
          s.between = Object.assign(
           {},
           {
            enabled: !0,
            max: parseFloat(t.getAttribute('max')),
            min: parseFloat(t.getAttribute('min')),
           },
           s.between,
          );
          break;
         case E === 'min' && l !== 'date' && l !== 'range':
          s.greaterThan = Object.assign(
           {},
           { enabled: !0, min: parseFloat(O) },
           s.greaterThan,
          );
          break;
         case E === 'max' && l !== 'date' && l !== 'range':
          s.lessThan = Object.assign(
           {},
           { enabled: !0, max: parseFloat(O) },
           s.lessThan,
          );
          break;
        }
       var F = e.exec(E);
       if (F && F.length === 4) {
        var R = this.toCamelCase(F[1]);
        s[R] || (s[R] = {}),
         F[3]
          ? (s[R][this.toCamelCase(F[3])] = this.normalizeValue(O))
          : (s[R].enabled !== !0 || s[R].enabled !== !1) &&
            (s[R].enabled = O === '' || O === 'true');
       }
      }
      return { validators: s };
     }),
     (a.prototype.normalizeValue = function (t) {
      return t === 'true' || t === '' ? !0 : t === 'false' ? !1 : t;
     }),
     (a.prototype.toUpperCase = function (t) {
      return t.charAt(1).toUpperCase();
     }),
     (a.prototype.toCamelCase = function (t) {
      return t.replace(/-./g, this.toUpperCase);
     }),
     a
    );
   })(h.Plugin);
   return (xe.Declarative = u), xe;
  }
  Kt.exports = bs();
  var As = Kt.exports,
   zt = { exports: {} },
   Ce = {},
   Jt;
  function $s() {
   if (Jt) return Ce;
   Jt = 1;
   var h = P,
    c = function (o, a) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (t, e) {
         t.__proto__ = e;
        }) ||
       function (t, e) {
        for (var r in e)
         Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
       }),
      c(o, a)
     );
    };
   function f(o, a) {
    if (typeof a != 'function' && a !== null)
     throw new TypeError(
      'Class extends value ' + String(a) + ' is not a constructor or null',
     );
    c(o, a);
    function t() {
     this.constructor = o;
    }
    o.prototype =
     a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
   }
   var u = (function (o) {
    f(a, o);
    function a() {
     var t = o.call(this, {}) || this;
     return (t.onValidHandler = t.onFormValid.bind(t)), t;
    }
    return (
     (a.prototype.install = function () {
      var t = this.core.getFormElement();
      if (t.querySelectorAll('[type="submit"][name="submit"]').length)
       throw new Error(
        'Do not use `submit` for the name attribute of submit button',
       );
      this.core.on('core.form.valid', this.onValidHandler);
     }),
     (a.prototype.uninstall = function () {
      this.core.off('core.form.valid', this.onValidHandler);
     }),
     (a.prototype.onFormValid = function () {
      var t = this.core.getFormElement();
      this.isEnabled && t instanceof HTMLFormElement && t.submit();
     }),
     a
    );
   })(h.Plugin);
   return (Ce.DefaultSubmit = u), Ce;
  }
  zt.exports = $s();
  var Es = zt.exports,
   Xt = { exports: {} },
   Oe = {},
   Wt;
  function ys() {
   if (Wt) return Oe;
   Wt = 1;
   var h = P,
    c = function (o, a) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (t, e) {
         t.__proto__ = e;
        }) ||
       function (t, e) {
        for (var r in e)
         Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
       }),
      c(o, a)
     );
    };
   function f(o, a) {
    if (typeof a != 'function' && a !== null)
     throw new TypeError(
      'Class extends value ' + String(a) + ' is not a constructor or null',
     );
    c(o, a);
    function t() {
     this.constructor = o;
    }
    o.prototype =
     a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
   }
   var u = (function (o) {
    f(a, o);
    function a(t) {
     var e = o.call(this, t) || this;
     return (
      (e.opts = t || {}),
      (e.triggerExecutedHandler = e.onTriggerExecuted.bind(e)),
      e
     );
    }
    return (
     (a.prototype.install = function () {
      this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
     }),
     (a.prototype.uninstall = function () {
      this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
     }),
     (a.prototype.onTriggerExecuted = function (t) {
      if (this.isEnabled && this.opts[t.field])
       for (
        var e = this.opts[t.field].split(' '), r = 0, s = e;
        r < s.length;
        r++
       ) {
        var l = s[r],
         $ = l.trim();
        this.opts[$] && this.core.revalidateField($);
       }
     }),
     a
    );
   })(h.Plugin);
   return (Oe.Dependency = u), Oe;
  }
  Xt.exports = ys();
  var Is = Xt.exports,
   Qt = { exports: {} },
   Ve = {},
   er;
  function xs() {
   if (er) return Ve;
   er = 1;
   var h = P,
    c = function (a, t) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, r) {
         e.__proto__ = r;
        }) ||
       function (e, r) {
        for (var s in r)
         Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
       }),
      c(a, t)
     );
    };
   function f(a, t) {
    if (typeof t != 'function' && t !== null)
     throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null',
     );
    c(a, t);
    function e() {
     this.constructor = a;
    }
    a.prototype =
     t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
   }
   var u = h.utils.removeUndefined,
    o = (function (a) {
     f(t, a);
     function t(e) {
      var r = a.call(this, e) || this;
      return (
       (r.opts = Object.assign({}, { excluded: t.defaultIgnore }, u(e))),
       (r.ignoreValidationFilter = r.ignoreValidation.bind(r)),
       r
      );
     }
     return (
      (t.defaultIgnore = function (e, r, s) {
       var l = !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length),
        $ = r.getAttribute('disabled');
       return (
        $ === '' ||
        $ === 'disabled' ||
        r.getAttribute('type') === 'hidden' ||
        !l
       );
      }),
      (t.prototype.install = function () {
       this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
      }),
      (t.prototype.uninstall = function () {
       this.core.deregisterFilter(
        'element-ignored',
        this.ignoreValidationFilter,
       );
      }),
      (t.prototype.ignoreValidation = function (e, r, s) {
       return this.isEnabled ? this.opts.excluded.apply(this, [e, r, s]) : !1;
      }),
      t
     );
    })(h.Plugin);
   return (Ve.Excluded = o), Ve;
  }
  Qt.exports = xs();
  var Cs = Qt.exports,
   tr = { exports: {} },
   Se = {},
   rr;
  function Os() {
   if (rr) return Se;
   rr = 1;
   var h = P,
    c = function (o, a) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (t, e) {
         t.__proto__ = e;
        }) ||
       function (t, e) {
        for (var r in e)
         Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
       }),
      c(o, a)
     );
    };
   function f(o, a) {
    if (typeof a != 'function' && a !== null)
     throw new TypeError(
      'Class extends value ' + String(a) + ' is not a constructor or null',
     );
    c(o, a);
    function t() {
     this.constructor = o;
    }
    o.prototype =
     a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
   }
   var u = (function (o) {
    f(a, o);
    function a(t) {
     var e = o.call(this, t) || this;
     return (
      (e.statuses = new Map()),
      (e.opts = Object.assign({}, { onStatusChanged: function () {} }, t)),
      (e.elementValidatingHandler = e.onElementValidating.bind(e)),
      (e.elementValidatedHandler = e.onElementValidated.bind(e)),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(e)),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(e)),
      (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(e)),
      e
     );
    }
    return (
     (a.prototype.install = function () {
      this.core
       .on('core.element.validating', this.elementValidatingHandler)
       .on('core.element.validated', this.elementValidatedHandler)
       .on('core.element.notvalidated', this.elementNotValidatedHandler)
       .on('core.element.ignored', this.elementIgnoredHandler)
       .on('core.field.added', this.fieldAddedHandler)
       .on('core.field.removed', this.fieldRemovedHandler);
     }),
     (a.prototype.uninstall = function () {
      this.statuses.clear(),
       this.core
        .off('core.element.validating', this.elementValidatingHandler)
        .off('core.element.validated', this.elementValidatedHandler)
        .off('core.element.notvalidated', this.elementNotValidatedHandler)
        .off('core.element.ignored', this.elementIgnoredHandler)
        .off('core.field.added', this.fieldAddedHandler)
        .off('core.field.removed', this.fieldRemovedHandler);
     }),
     (a.prototype.areFieldsValid = function () {
      return Array.from(this.statuses.values()).every(function (t) {
       return t === 'Valid' || t === 'NotValidated' || t === 'Ignored';
      });
     }),
     (a.prototype.getStatuses = function () {
      return this.isEnabled ? this.statuses : new Map();
     }),
     (a.prototype.onFieldAdded = function (t) {
      this.statuses.set(t.field, 'NotValidated');
     }),
     (a.prototype.onFieldRemoved = function (t) {
      this.statuses.has(t.field) && this.statuses.delete(t.field),
       this.handleStatusChanged(this.areFieldsValid());
     }),
     (a.prototype.onElementValidating = function (t) {
      this.statuses.set(t.field, 'Validating'), this.handleStatusChanged(!1);
     }),
     (a.prototype.onElementValidated = function (t) {
      this.statuses.set(t.field, t.valid ? 'Valid' : 'Invalid'),
       t.valid
        ? this.handleStatusChanged(this.areFieldsValid())
        : this.handleStatusChanged(!1);
     }),
     (a.prototype.onElementNotValidated = function (t) {
      this.statuses.set(t.field, 'NotValidated'), this.handleStatusChanged(!1);
     }),
     (a.prototype.onElementIgnored = function (t) {
      this.statuses.set(t.field, 'Ignored'),
       this.handleStatusChanged(this.areFieldsValid());
     }),
     (a.prototype.handleStatusChanged = function (t) {
      this.isEnabled && this.opts.onStatusChanged(t);
     }),
     a
    );
   })(h.Plugin);
   return (Se.FieldStatus = u), Se;
  }
  tr.exports = Os();
  var Vs = tr.exports,
   ar = { exports: {} },
   sr = { exports: {} },
   ke = {},
   nr;
  function Ss() {
   if (nr) return ke;
   nr = 1;
   var h = P,
    c = function (a, t) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, r) {
         e.__proto__ = r;
        }) ||
       function (e, r) {
        for (var s in r)
         Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
       }),
      c(a, t)
     );
    };
   function f(a, t) {
    if (typeof t != 'function' && t !== null)
     throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null',
     );
    c(a, t);
    function e() {
     this.constructor = a;
    }
    a.prototype =
     t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
   }
   var u = h.utils.classSet,
    o = (function (a) {
     f(t, a);
     function t(e) {
      var r = a.call(this, e) || this;
      return (
       (r.useDefaultContainer = !1),
       (r.messages = new Map()),
       (r.defaultContainer = document.createElement('div')),
       (r.useDefaultContainer = !e || !e.container),
       (r.opts = Object.assign(
        {},
        {
         container: function (s, l) {
          return r.defaultContainer;
         },
        },
        e,
       )),
       (r.elementIgnoredHandler = r.onElementIgnored.bind(r)),
       (r.fieldAddedHandler = r.onFieldAdded.bind(r)),
       (r.fieldRemovedHandler = r.onFieldRemoved.bind(r)),
       (r.validatorValidatedHandler = r.onValidatorValidated.bind(r)),
       (r.validatorNotValidatedHandler = r.onValidatorNotValidated.bind(r)),
       r
      );
     }
     return (
      (t.getClosestContainer = function (e, r, s) {
       for (
        var l = e;
        l && !(l === r || ((l = l.parentElement), s.test(l.className)));

       );
       return l;
      }),
      (t.prototype.install = function () {
       this.useDefaultContainer &&
        this.core.getFormElement().appendChild(this.defaultContainer),
        this.core
         .on('core.element.ignored', this.elementIgnoredHandler)
         .on('core.field.added', this.fieldAddedHandler)
         .on('core.field.removed', this.fieldRemovedHandler)
         .on('core.validator.validated', this.validatorValidatedHandler)
         .on('core.validator.notvalidated', this.validatorNotValidatedHandler);
      }),
      (t.prototype.uninstall = function () {
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
      (t.prototype.onEnabled = function () {
       this.messages.forEach(function (e, r, s) {
        u(r, {
         'fv-plugins-message-container--enabled': !0,
         'fv-plugins-message-container--disabled': !1,
        });
       });
      }),
      (t.prototype.onDisabled = function () {
       this.messages.forEach(function (e, r, s) {
        u(r, {
         'fv-plugins-message-container--enabled': !1,
         'fv-plugins-message-container--disabled': !0,
        });
       });
      }),
      (t.prototype.onFieldAdded = function (e) {
       var r = this,
        s = e.elements;
       s &&
        (s.forEach(function (l) {
         var $ = r.messages.get(l);
         $ && ($.parentNode.removeChild($), r.messages.delete(l));
        }),
        this.prepareFieldContainer(e.field, s));
      }),
      (t.prototype.onFieldRemoved = function (e) {
       var r = this;
       if (!(!e.elements.length || !e.field)) {
        var s = e.elements[0].getAttribute('type'),
         l = s === 'radio' || s === 'checkbox' ? [e.elements[0]] : e.elements;
        l.forEach(function ($) {
         if (r.messages.has($)) {
          var E = r.messages.get($);
          E.parentNode.removeChild(E), r.messages.delete($);
         }
        });
       }
      }),
      (t.prototype.prepareFieldContainer = function (e, r) {
       var s = this;
       if (r.length) {
        var l = r[0].getAttribute('type');
        l === 'radio' || l === 'checkbox'
         ? this.prepareElementContainer(e, r[0], r)
         : r.forEach(function ($) {
            return s.prepareElementContainer(e, $, r);
           });
       }
      }),
      (t.prototype.prepareElementContainer = function (e, r, s) {
       var l;
       if (typeof this.opts.container == 'string') {
        var $ =
         this.opts.container.charAt(0) === '#'
          ? '[id="'.concat(this.opts.container.substring(1), '"]')
          : this.opts.container;
        l = this.core.getFormElement().querySelector($);
       } else l = this.opts.container(e, r);
       var E = document.createElement('div');
       l.appendChild(E),
        u(E, {
         'fv-plugins-message-container': !0,
         'fv-plugins-message-container--enabled': this.isEnabled,
         'fv-plugins-message-container--disabled': !this.isEnabled,
        }),
        this.core.emit('plugins.message.placed', {
         element: r,
         elements: s,
         field: e,
         messageElement: E,
        }),
        this.messages.set(r, E);
      }),
      (t.prototype.getMessage = function (e) {
       return typeof e.message == 'string'
        ? e.message
        : e.message[this.core.getLocale()];
      }),
      (t.prototype.onValidatorValidated = function (e) {
       var r,
        s = e.elements,
        l = e.element.getAttribute('type'),
        $ =
         (l === 'radio' || l === 'checkbox') && s.length > 0 ? s[0] : e.element;
       if (this.messages.has($)) {
        var E = this.messages.get($),
         O = E.querySelector(
          '[data-field="'
           .concat(e.field.replace(/"/g, '\\"'), '"][data-validator="')
           .concat(e.validator.replace(/"/g, '\\"'), '"]'),
         );
        if (!O && !e.result.valid) {
         var F = document.createElement('div');
         (F.innerHTML = this.getMessage(e.result)),
          F.setAttribute('data-field', e.field),
          F.setAttribute('data-validator', e.validator),
          this.opts.clazz && u(F, ((r = {}), (r[this.opts.clazz] = !0), r)),
          E.appendChild(F),
          this.core.emit('plugins.message.displayed', {
           element: e.element,
           field: e.field,
           message: e.result.message,
           messageElement: F,
           meta: e.result.meta,
           validator: e.validator,
          });
        } else
         O && !e.result.valid
          ? ((O.innerHTML = this.getMessage(e.result)),
            this.core.emit('plugins.message.displayed', {
             element: e.element,
             field: e.field,
             message: e.result.message,
             messageElement: O,
             meta: e.result.meta,
             validator: e.validator,
            }))
          : O && e.result.valid && E.removeChild(O);
       }
      }),
      (t.prototype.onValidatorNotValidated = function (e) {
       var r = e.elements,
        s = e.element.getAttribute('type'),
        l = s === 'radio' || s === 'checkbox' ? r[0] : e.element;
       if (this.messages.has(l)) {
        var $ = this.messages.get(l),
         E = $.querySelector(
          '[data-field="'
           .concat(e.field.replace(/"/g, '\\"'), '"][data-validator="')
           .concat(e.validator.replace(/"/g, '\\"'), '"]'),
         );
        E && $.removeChild(E);
       }
      }),
      (t.prototype.onElementIgnored = function (e) {
       var r = e.elements,
        s = e.element.getAttribute('type'),
        l = s === 'radio' || s === 'checkbox' ? r[0] : e.element;
       if (this.messages.has(l)) {
        var $ = this.messages.get(l),
         E = [].slice.call(
          $.querySelectorAll(
           '[data-field="'.concat(e.field.replace(/"/g, '\\"'), '"]'),
          ),
         );
        E.forEach(function (O) {
         $.removeChild(O);
        });
       }
      }),
      t
     );
    })(h.Plugin);
   return (ke.Message = o), ke;
  }
  sr.exports = Ss();
  var ir = sr.exports,
   je = {},
   or;
  function ks() {
   if (or) return je;
   or = 1;
   var h = P,
    c = ir,
    f = function (e, r) {
     return (
      (f =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (s, l) {
         s.__proto__ = l;
        }) ||
       function (s, l) {
        for (var $ in l)
         Object.prototype.hasOwnProperty.call(l, $) && (s[$] = l[$]);
       }),
      f(e, r)
     );
    };
   function u(e, r) {
    if (typeof r != 'function' && r !== null)
     throw new TypeError(
      'Class extends value ' + String(r) + ' is not a constructor or null',
     );
    f(e, r);
    function s() {
     this.constructor = e;
    }
    e.prototype =
     r === null ? Object.create(r) : ((s.prototype = r.prototype), new s());
   }
   var o = h.utils.classSet,
    a = h.utils.closest,
    t = (function (e) {
     u(r, e);
     function r(s) {
      var l = e.call(this, s) || this;
      return (
       (l.results = new Map()),
       (l.containers = new Map()),
       (l.opts = Object.assign(
        {},
        {
         defaultMessageContainer: !0,
         eleInvalidClass: '',
         eleValidClass: '',
         rowClasses: '',
         rowValidatingClass: '',
        },
        s,
       )),
       (l.elementIgnoredHandler = l.onElementIgnored.bind(l)),
       (l.elementValidatingHandler = l.onElementValidating.bind(l)),
       (l.elementValidatedHandler = l.onElementValidated.bind(l)),
       (l.elementNotValidatedHandler = l.onElementNotValidated.bind(l)),
       (l.iconPlacedHandler = l.onIconPlaced.bind(l)),
       (l.fieldAddedHandler = l.onFieldAdded.bind(l)),
       (l.fieldRemovedHandler = l.onFieldRemoved.bind(l)),
       (l.messagePlacedHandler = l.onMessagePlaced.bind(l)),
       l
      );
     }
     return (
      (r.prototype.install = function () {
       var s,
        l = this;
       o(
        this.core.getFormElement(),
        ((s = {}),
        (s[this.opts.formClass] = !0),
        (s['fv-plugins-framework'] = !0),
        s),
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
          r.MESSAGE_PLUGIN,
          new c.Message({
           clazz: this.opts.messageClass,
           container: function ($, E) {
            var O =
              typeof l.opts.rowSelector == 'string'
               ? l.opts.rowSelector
               : l.opts.rowSelector($, E),
             F = a(E, O);
            return c.Message.getClosestContainer(E, F, l.opts.rowPattern);
           },
          }),
         ),
         this.core.on('plugins.message.placed', this.messagePlacedHandler));
      }),
      (r.prototype.uninstall = function () {
       var s;
       this.results.clear(),
        this.containers.clear(),
        o(
         this.core.getFormElement(),
         ((s = {}),
         (s[this.opts.formClass] = !1),
         (s['fv-plugins-framework'] = !1),
         s),
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
         (this.core.deregisterPlugin(r.MESSAGE_PLUGIN),
         this.core.off('plugins.message.placed', this.messagePlacedHandler));
      }),
      (r.prototype.onEnabled = function () {
       var s;
       o(
        this.core.getFormElement(),
        ((s = {}), (s[this.opts.formClass] = !0), s),
       ),
        this.opts.defaultMessageContainer &&
         this.core.enablePlugin(r.MESSAGE_PLUGIN);
      }),
      (r.prototype.onDisabled = function () {
       var s;
       o(
        this.core.getFormElement(),
        ((s = {}), (s[this.opts.formClass] = !1), s),
       ),
        this.opts.defaultMessageContainer &&
         this.core.disablePlugin(r.MESSAGE_PLUGIN);
      }),
      (r.prototype.onIconPlaced = function (s) {}),
      (r.prototype.onMessagePlaced = function (s) {}),
      (r.prototype.onFieldAdded = function (s) {
       var l = this,
        $ = s.elements;
       $ &&
        ($.forEach(function (E) {
         var O,
          F = l.containers.get(E);
         F &&
          (o(
           F,
           ((O = {}),
           (O[l.opts.rowInvalidClass] = !1),
           (O[l.opts.rowValidatingClass] = !1),
           (O[l.opts.rowValidClass] = !1),
           (O['fv-plugins-icon-container'] = !1),
           O),
          ),
          l.containers.delete(E));
        }),
        this.prepareFieldContainer(s.field, $));
      }),
      (r.prototype.onFieldRemoved = function (s) {
       var l = this;
       s.elements.forEach(function ($) {
        var E,
         O = l.containers.get($);
        O &&
         o(
          O,
          ((E = {}),
          (E[l.opts.rowInvalidClass] = !1),
          (E[l.opts.rowValidatingClass] = !1),
          (E[l.opts.rowValidClass] = !1),
          E),
         );
       });
      }),
      (r.prototype.prepareFieldContainer = function (s, l) {
       var $ = this;
       if (l.length) {
        var E = l[0].getAttribute('type');
        E === 'radio' || E === 'checkbox'
         ? this.prepareElementContainer(s, l[0])
         : l.forEach(function (O) {
            return $.prepareElementContainer(s, O);
           });
       }
      }),
      (r.prototype.prepareElementContainer = function (s, l) {
       var $,
        E =
         typeof this.opts.rowSelector == 'string'
          ? this.opts.rowSelector
          : this.opts.rowSelector(s, l),
        O = a(l, E);
       O !== l &&
        (o(
         O,
         (($ = {}),
         ($[this.opts.rowClasses] = !0),
         ($['fv-plugins-icon-container'] = !0),
         $),
        ),
        this.containers.set(l, O));
      }),
      (r.prototype.onElementValidating = function (s) {
       this.removeClasses(s.element, s.elements);
      }),
      (r.prototype.onElementNotValidated = function (s) {
       this.removeClasses(s.element, s.elements);
      }),
      (r.prototype.onElementIgnored = function (s) {
       this.removeClasses(s.element, s.elements);
      }),
      (r.prototype.removeClasses = function (s, l) {
       var $,
        E = this,
        O = s.getAttribute('type'),
        F = O === 'radio' || O === 'checkbox' ? l[0] : s;
       l.forEach(function (U) {
        var K;
        o(
         U,
         ((K = {}),
         (K[E.opts.eleValidClass] = !1),
         (K[E.opts.eleInvalidClass] = !1),
         K),
        );
       });
       var R = this.containers.get(F);
       R &&
        o(
         R,
         (($ = {}),
         ($[this.opts.rowInvalidClass] = !1),
         ($[this.opts.rowValidatingClass] = !1),
         ($[this.opts.rowValidClass] = !1),
         $),
        );
      }),
      (r.prototype.onElementValidated = function (s) {
       var l,
        $,
        E = this,
        O = s.elements,
        F = s.element.getAttribute('type'),
        R = F === 'radio' || F === 'checkbox' ? O[0] : s.element;
       O.forEach(function (G) {
        var J;
        o(
         G,
         ((J = {}),
         (J[E.opts.eleValidClass] = s.valid),
         (J[E.opts.eleInvalidClass] = !s.valid),
         J),
        );
       });
       var U = this.containers.get(R);
       if (U)
        if (!s.valid)
         this.results.set(R, !1),
          o(
           U,
           ((l = {}),
           (l[this.opts.rowInvalidClass] = !0),
           (l[this.opts.rowValidatingClass] = !1),
           (l[this.opts.rowValidClass] = !1),
           l),
          );
        else {
         this.results.delete(R);
         var K = !0;
         this.containers.forEach(function (G, J) {
          G === U && E.results.get(J) === !1 && (K = !1);
         }),
          K &&
           o(
            U,
            (($ = {}),
            ($[this.opts.rowInvalidClass] = !1),
            ($[this.opts.rowValidatingClass] = !1),
            ($[this.opts.rowValidClass] = !0),
            $),
           );
        }
      }),
      (r.MESSAGE_PLUGIN = '___frameworkMessage'),
      r
     );
    })(h.Plugin);
   return (je.Framework = t), je;
  }
  ar.exports = ks();
  var js = ar.exports,
   lr = { exports: {} },
   Fe = {},
   dr;
  function Fs() {
   if (dr) return Fe;
   dr = 1;
   var h = P,
    c = function (a, t) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, r) {
         e.__proto__ = r;
        }) ||
       function (e, r) {
        for (var s in r)
         Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
       }),
      c(a, t)
     );
    };
   function f(a, t) {
    if (typeof t != 'function' && t !== null)
     throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null',
     );
    c(a, t);
    function e() {
     this.constructor = a;
    }
    a.prototype =
     t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
   }
   var u = h.utils.classSet,
    o = (function (a) {
     f(t, a);
     function t(e) {
      var r = a.call(this, e) || this;
      return (
       (r.icons = new Map()),
       (r.opts = Object.assign(
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
       (r.elementValidatingHandler = r.onElementValidating.bind(r)),
       (r.elementValidatedHandler = r.onElementValidated.bind(r)),
       (r.elementNotValidatedHandler = r.onElementNotValidated.bind(r)),
       (r.elementIgnoredHandler = r.onElementIgnored.bind(r)),
       (r.fieldAddedHandler = r.onFieldAdded.bind(r)),
       r
      );
     }
     return (
      (t.prototype.install = function () {
       this.core
        .on('core.element.validating', this.elementValidatingHandler)
        .on('core.element.validated', this.elementValidatedHandler)
        .on('core.element.notvalidated', this.elementNotValidatedHandler)
        .on('core.element.ignored', this.elementIgnoredHandler)
        .on('core.field.added', this.fieldAddedHandler);
      }),
      (t.prototype.uninstall = function () {
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
      (t.prototype.onEnabled = function () {
       this.icons.forEach(function (e, r, s) {
        u(r, {
         'fv-plugins-icon--enabled': !0,
         'fv-plugins-icon--disabled': !1,
        });
       });
      }),
      (t.prototype.onDisabled = function () {
       this.icons.forEach(function (e, r, s) {
        u(r, {
         'fv-plugins-icon--enabled': !1,
         'fv-plugins-icon--disabled': !0,
        });
       });
      }),
      (t.prototype.onFieldAdded = function (e) {
       var r = this,
        s = e.elements;
       s &&
        (s.forEach(function (l) {
         var $ = r.icons.get(l);
         $ && ($.parentNode.removeChild($), r.icons.delete(l));
        }),
        this.prepareFieldIcon(e.field, s));
      }),
      (t.prototype.prepareFieldIcon = function (e, r) {
       var s = this;
       if (r.length) {
        var l = r[0].getAttribute('type');
        l === 'radio' || l === 'checkbox'
         ? this.prepareElementIcon(e, r[0])
         : r.forEach(function ($) {
            return s.prepareElementIcon(e, $);
           });
       }
      }),
      (t.prototype.prepareElementIcon = function (e, r) {
       var s = document.createElement('i');
       s.setAttribute('data-field', e),
        r.parentNode.insertBefore(s, r.nextSibling),
        u(s, {
         'fv-plugins-icon': !0,
         'fv-plugins-icon--enabled': this.isEnabled,
         'fv-plugins-icon--disabled': !this.isEnabled,
        });
       var l = {
        classes: {
         invalid: this.opts.invalid,
         valid: this.opts.valid,
         validating: this.opts.validating,
        },
        element: r,
        field: e,
        iconElement: s,
       };
       this.core.emit('plugins.icon.placed', l),
        this.opts.onPlaced(l),
        this.icons.set(r, s);
      }),
      (t.prototype.onElementValidating = function (e) {
       var r,
        s = this.setClasses(
         e.field,
         e.element,
         e.elements,
         ((r = {}),
         (r[this.opts.invalid] = !1),
         (r[this.opts.valid] = !1),
         (r[this.opts.validating] = !0),
         r),
        ),
        l = {
         element: e.element,
         field: e.field,
         iconElement: s,
         status: 'Validating',
        };
       this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
      }),
      (t.prototype.onElementValidated = function (e) {
       var r,
        s = this.setClasses(
         e.field,
         e.element,
         e.elements,
         ((r = {}),
         (r[this.opts.invalid] = !e.valid),
         (r[this.opts.valid] = e.valid),
         (r[this.opts.validating] = !1),
         r),
        ),
        l = {
         element: e.element,
         field: e.field,
         iconElement: s,
         status: e.valid ? 'Valid' : 'Invalid',
        };
       this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
      }),
      (t.prototype.onElementNotValidated = function (e) {
       var r,
        s = this.setClasses(
         e.field,
         e.element,
         e.elements,
         ((r = {}),
         (r[this.opts.invalid] = !1),
         (r[this.opts.valid] = !1),
         (r[this.opts.validating] = !1),
         r),
        ),
        l = {
         element: e.element,
         field: e.field,
         iconElement: s,
         status: 'NotValidated',
        };
       this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
      }),
      (t.prototype.onElementIgnored = function (e) {
       var r,
        s = this.setClasses(
         e.field,
         e.element,
         e.elements,
         ((r = {}),
         (r[this.opts.invalid] = !1),
         (r[this.opts.valid] = !1),
         (r[this.opts.validating] = !1),
         r),
        ),
        l = {
         element: e.element,
         field: e.field,
         iconElement: s,
         status: 'Ignored',
        };
       this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
      }),
      (t.prototype.setClasses = function (e, r, s, l) {
       var $ = r.getAttribute('type'),
        E = $ === 'radio' || $ === 'checkbox' ? s[0] : r;
       if (this.icons.has(E)) {
        var O = this.icons.get(E);
        return u(O, l), O;
       } else return null;
      }),
      t
     );
    })(h.Plugin);
   return (Fe.Icon = o), Fe;
  }
  lr.exports = Fs();
  var ws = lr.exports,
   cr = { exports: {} },
   we = {},
   ur;
  function Rs() {
   if (ur) return we;
   ur = 1;
   var h = P,
    c = function (a, t) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, r) {
         e.__proto__ = r;
        }) ||
       function (e, r) {
        for (var s in r)
         Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
       }),
      c(a, t)
     );
    };
   function f(a, t) {
    if (typeof t != 'function' && t !== null)
     throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null',
     );
    c(a, t);
    function e() {
     this.constructor = a;
    }
    a.prototype =
     t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
   }
   var u = h.utils.removeUndefined,
    o = (function (a) {
     f(t, a);
     function t(e) {
      var r = a.call(this, e) || this;
      return (
       (r.invalidFields = new Map()),
       (r.opts = Object.assign({}, { enabled: !0 }, u(e))),
       (r.validatorHandler = r.onValidatorValidated.bind(r)),
       (r.shouldValidateFilter = r.shouldValidate.bind(r)),
       (r.fieldAddedHandler = r.onFieldAdded.bind(r)),
       (r.elementNotValidatedHandler = r.onElementNotValidated.bind(r)),
       (r.elementValidatingHandler = r.onElementValidating.bind(r)),
       r
      );
     }
     return (
      (t.prototype.install = function () {
       this.core
        .on('core.validator.validated', this.validatorHandler)
        .on('core.field.added', this.fieldAddedHandler)
        .on('core.element.notvalidated', this.elementNotValidatedHandler)
        .on('core.element.validating', this.elementValidatingHandler)
        .registerFilter('field-should-validate', this.shouldValidateFilter);
      }),
      (t.prototype.uninstall = function () {
       this.invalidFields.clear(),
        this.core
         .off('core.validator.validated', this.validatorHandler)
         .off('core.field.added', this.fieldAddedHandler)
         .off('core.element.notvalidated', this.elementNotValidatedHandler)
         .off('core.element.validating', this.elementValidatingHandler)
         .deregisterFilter('field-should-validate', this.shouldValidateFilter);
      }),
      (t.prototype.shouldValidate = function (e, r, s, l) {
       if (!this.isEnabled) return !0;
       var $ =
        (this.opts.enabled === !0 || this.opts.enabled[e] === !0) &&
        this.invalidFields.has(r) &&
        !!this.invalidFields.get(r).length &&
        this.invalidFields.get(r).indexOf(l) === -1;
       return !$;
      }),
      (t.prototype.onValidatorValidated = function (e) {
       var r = this.invalidFields.has(e.element)
         ? this.invalidFields.get(e.element)
         : [],
        s = r.indexOf(e.validator);
       e.result.valid && s >= 0
        ? r.splice(s, 1)
        : !e.result.valid && s === -1 && r.push(e.validator),
        this.invalidFields.set(e.element, r);
      }),
      (t.prototype.onFieldAdded = function (e) {
       e.elements && this.clearInvalidFields(e.elements);
      }),
      (t.prototype.onElementNotValidated = function (e) {
       this.clearInvalidFields(e.elements);
      }),
      (t.prototype.onElementValidating = function (e) {
       this.clearInvalidFields(e.elements);
      }),
      (t.prototype.clearInvalidFields = function (e) {
       var r = this;
       e.forEach(function (s) {
        return r.invalidFields.delete(s);
       });
      }),
      t
     );
    })(h.Plugin);
   return (we.Sequence = o), we;
  }
  cr.exports = Rs();
  var _s = cr.exports,
   vr = { exports: {} },
   Re = {},
   fr;
  function Hs() {
   if (fr) return Re;
   fr = 1;
   var h = P,
    c = function (o, a) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (t, e) {
         t.__proto__ = e;
        }) ||
       function (t, e) {
        for (var r in e)
         Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
       }),
      c(o, a)
     );
    };
   function f(o, a) {
    if (typeof a != 'function' && a !== null)
     throw new TypeError(
      'Class extends value ' + String(a) + ' is not a constructor or null',
     );
    c(o, a);
    function t() {
     this.constructor = o;
    }
    o.prototype =
     a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
   }
   var u = (function (o) {
    f(a, o);
    function a(t) {
     var e = o.call(this, t) || this;
     return (
      (e.isFormValid = !1),
      (e.isButtonClicked = !1),
      (e.opts = Object.assign(
       {},
       {
        aspNetButton: !1,
        buttons: function (r) {
         return [].slice.call(
          r.querySelectorAll('[type="submit"]:not([formnovalidate])'),
         );
        },
        liveMode: !0,
       },
       t,
      )),
      (e.submitHandler = e.handleSubmitEvent.bind(e)),
      (e.buttonClickHandler = e.handleClickEvent.bind(e)),
      (e.ignoreValidationFilter = e.ignoreValidation.bind(e)),
      e
     );
    }
    return (
     (a.prototype.install = function () {
      var t = this;
      if (this.core.getFormElement() instanceof HTMLFormElement) {
       var e = this.core.getFormElement();
       (this.submitButtons = this.opts.buttons(e)),
        e.setAttribute('novalidate', 'novalidate'),
        e.addEventListener('submit', this.submitHandler),
        (this.hiddenClickedEle = document.createElement('input')),
        this.hiddenClickedEle.setAttribute('type', 'hidden'),
        e.appendChild(this.hiddenClickedEle),
        this.submitButtons.forEach(function (r) {
         r.addEventListener('click', t.buttonClickHandler);
        }),
        this.core.registerFilter(
         'element-ignored',
         this.ignoreValidationFilter,
        );
      }
     }),
     (a.prototype.uninstall = function () {
      var t = this,
       e = this.core.getFormElement();
      e instanceof HTMLFormElement &&
       e.removeEventListener('submit', this.submitHandler),
       this.submitButtons.forEach(function (r) {
        r.removeEventListener('click', t.buttonClickHandler);
       }),
       this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle),
       this.core.deregisterFilter(
        'element-ignored',
        this.ignoreValidationFilter,
       );
     }),
     (a.prototype.handleSubmitEvent = function (t) {
      this.validateForm(t);
     }),
     (a.prototype.handleClickEvent = function (t) {
      var e = t.currentTarget;
      if (
       ((this.isButtonClicked = !0),
       e instanceof HTMLElement &&
        !(this.opts.aspNetButton && this.isFormValid === !0))
      ) {
       var r = this.core.getFormElement();
       r.removeEventListener('submit', this.submitHandler),
        (this.clickedButton = t.target);
       var s = this.clickedButton.getAttribute('name'),
        l = this.clickedButton.getAttribute('value');
       s &&
        l &&
        (this.hiddenClickedEle.setAttribute('name', s),
        this.hiddenClickedEle.setAttribute('value', l)),
        this.validateForm(t);
      }
     }),
     (a.prototype.validateForm = function (t) {
      var e = this;
      this.isEnabled &&
       (t.preventDefault(),
       this.core.validate().then(function (r) {
        r === 'Valid' &&
         e.opts.aspNetButton &&
         !e.isFormValid &&
         e.clickedButton &&
         ((e.isFormValid = !0),
         e.clickedButton.removeEventListener('click', e.buttonClickHandler),
         e.clickedButton.click());
       }));
     }),
     (a.prototype.ignoreValidation = function (t, e, r) {
      return this.isEnabled
       ? this.opts.liveMode
         ? !1
         : !this.isButtonClicked
       : !1;
     }),
     a
    );
   })(h.Plugin);
   return (Re.SubmitButton = u), Re;
  }
  vr.exports = Hs();
  var Ts = vr.exports,
   hr = { exports: {} },
   _e = {},
   pr;
  function Ms() {
   if (pr) return _e;
   pr = 1;
   var h = P,
    c = function (a, t) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (e, r) {
         e.__proto__ = r;
        }) ||
       function (e, r) {
        for (var s in r)
         Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
       }),
      c(a, t)
     );
    };
   function f(a, t) {
    if (typeof t != 'function' && t !== null)
     throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null',
     );
    c(a, t);
    function e() {
     this.constructor = a;
    }
    a.prototype =
     t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
   }
   var u = h.utils.classSet,
    o = (function (a) {
     f(t, a);
     function t(e) {
      var r = a.call(this, e) || this;
      return (
       (r.messages = new Map()),
       (r.opts = Object.assign({}, { placement: 'top', trigger: 'click' }, e)),
       (r.iconPlacedHandler = r.onIconPlaced.bind(r)),
       (r.validatorValidatedHandler = r.onValidatorValidated.bind(r)),
       (r.elementValidatedHandler = r.onElementValidated.bind(r)),
       (r.documentClickHandler = r.onDocumentClicked.bind(r)),
       r
      );
     }
     return (
      (t.prototype.install = function () {
       var e;
       (this.tip = document.createElement('div')),
        u(
         this.tip,
         ((e = { 'fv-plugins-tooltip': !0 }),
         (e['fv-plugins-tooltip--'.concat(this.opts.placement)] = !0),
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
      (t.prototype.uninstall = function () {
       this.messages.clear(),
        document.body.removeChild(this.tip),
        this.core
         .off('plugins.icon.placed', this.iconPlacedHandler)
         .off('core.validator.validated', this.validatorValidatedHandler)
         .off('core.element.validated', this.elementValidatedHandler),
        this.opts.trigger === 'click' &&
         document.removeEventListener('click', this.documentClickHandler);
      }),
      (t.prototype.onIconPlaced = function (e) {
       var r = this;
       switch (
        (u(e.iconElement, { 'fv-plugins-tooltip-icon': !0 }), this.opts.trigger)
       ) {
        case 'hover':
         e.iconElement.addEventListener('mouseenter', function (s) {
          return r.show(e.element, s);
         }),
          e.iconElement.addEventListener('mouseleave', function (s) {
           return r.hide();
          });
         break;
        case 'click':
        default:
         e.iconElement.addEventListener('click', function (s) {
          return r.show(e.element, s);
         });
         break;
       }
      }),
      (t.prototype.onValidatorValidated = function (e) {
       if (!e.result.valid) {
        var r = e.elements,
         s = e.element.getAttribute('type'),
         l = s === 'radio' || s === 'checkbox' ? r[0] : e.element,
         $ =
          typeof e.result.message == 'string'
           ? e.result.message
           : e.result.message[this.core.getLocale()];
        this.messages.set(l, $);
       }
      }),
      (t.prototype.onElementValidated = function (e) {
       if (e.valid) {
        var r = e.elements,
         s = e.element.getAttribute('type'),
         l = s === 'radio' || s === 'checkbox' ? r[0] : e.element;
        this.messages.delete(l);
       }
      }),
      (t.prototype.onDocumentClicked = function (e) {
       this.hide();
      }),
      (t.prototype.show = function (e, r) {
       if (
        this.isEnabled &&
        (r.preventDefault(), r.stopPropagation(), !!this.messages.has(e))
       ) {
        u(this.tip, { 'fv-plugins-tooltip--hide': !1 }),
         (this.tip.innerHTML =
          '<div class="fv-plugins-tooltip__content">'.concat(
           this.messages.get(e),
           '</div>',
          ));
        var s = r.target,
         l = s.getBoundingClientRect(),
         $ = this.tip.getBoundingClientRect(),
         E = $.height,
         O = $.width,
         F = 0,
         R = 0;
        switch (this.opts.placement) {
         case 'bottom':
          (F = l.top + l.height), (R = l.left + l.width / 2 - O / 2);
          break;
         case 'bottom-left':
          (F = l.top + l.height), (R = l.left);
          break;
         case 'bottom-right':
          (F = l.top + l.height), (R = l.left + l.width - O);
          break;
         case 'left':
          (F = l.top + l.height / 2 - E / 2), (R = l.left - O);
          break;
         case 'right':
          (F = l.top + l.height / 2 - E / 2), (R = l.left + l.width);
          break;
         case 'top-left':
          (F = l.top - E), (R = l.left);
          break;
         case 'top-right':
          (F = l.top - E), (R = l.left + l.width - O);
          break;
         case 'top':
         default:
          (F = l.top - E), (R = l.left + l.width / 2 - O / 2);
          break;
        }
        var U =
          window.scrollY ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0,
         K =
          window.scrollX ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          0;
        (F = F + U),
         (R = R + K),
         this.tip.setAttribute(
          'style',
          'top: '.concat(F, 'px; left: ').concat(R, 'px'),
         );
       }
      }),
      (t.prototype.hide = function () {
       this.isEnabled && u(this.tip, { 'fv-plugins-tooltip--hide': !0 });
      }),
      t
     );
    })(h.Plugin);
   return (_e.Tooltip = o), _e;
  }
  hr.exports = Ms();
  var Ns = hr.exports,
   mr = { exports: {} },
   He = {},
   gr;
  function Ps() {
   if (gr) return He;
   gr = 1;
   var h = P,
    c = function (o, a) {
     return (
      (c =
       Object.setPrototypeOf ||
       ({ __proto__: [] } instanceof Array &&
        function (t, e) {
         t.__proto__ = e;
        }) ||
       function (t, e) {
        for (var r in e)
         Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
       }),
      c(o, a)
     );
    };
   function f(o, a) {
    if (typeof a != 'function' && a !== null)
     throw new TypeError(
      'Class extends value ' + String(a) + ' is not a constructor or null',
     );
    c(o, a);
    function t() {
     this.constructor = o;
    }
    o.prototype =
     a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
   }
   var u = (function (o) {
    f(a, o);
    function a(t) {
     var e = o.call(this, t) || this;
     (e.handlers = []), (e.timers = new Map());
     var r = document.createElement('div');
     return (
      (e.defaultEvent = 'oninput' in r ? 'input' : 'keyup'),
      (e.opts = Object.assign(
       {},
       { delay: 0, event: e.defaultEvent, threshold: 0 },
       t,
      )),
      (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(e)),
      e
     );
    }
    return (
     (a.prototype.install = function () {
      this.core
       .on('core.field.added', this.fieldAddedHandler)
       .on('core.field.removed', this.fieldRemovedHandler);
     }),
     (a.prototype.uninstall = function () {
      this.handlers.forEach(function (t) {
       return t.element.removeEventListener(t.event, t.handler);
      }),
       (this.handlers = []),
       this.timers.forEach(function (t) {
        return window.clearTimeout(t);
       }),
       this.timers.clear(),
       this.core
        .off('core.field.added', this.fieldAddedHandler)
        .off('core.field.removed', this.fieldRemovedHandler);
     }),
     (a.prototype.prepareHandler = function (t, e) {
      var r = this;
      e.forEach(function (s) {
       var l = [];
       if (r.opts.event && r.opts.event[t] === !1) l = [];
       else if (
        r.opts.event &&
        r.opts.event[t] &&
        typeof r.opts.event[t] != 'function'
       )
        l = r.opts.event[t].split(' ');
       else if (
        typeof r.opts.event == 'string' &&
        r.opts.event !== r.defaultEvent
       )
        l = r.opts.event.split(' ');
       else {
        var $ = s.getAttribute('type'),
         E = s.tagName.toLowerCase(),
         O =
          $ === 'radio' || $ === 'checkbox' || $ === 'file' || E === 'select'
           ? 'change'
           : r.ieVersion >= 10 && s.getAttribute('placeholder')
             ? 'keyup'
             : r.defaultEvent;
        l = [O];
       }
       l.forEach(function (F) {
        var R = function (U) {
         return r.handleEvent(U, t, s);
        };
        r.handlers.push({ element: s, event: F, field: t, handler: R }),
         s.addEventListener(F, R);
       });
      });
     }),
     (a.prototype.handleEvent = function (t, e, r) {
      var s = this;
      if (
       this.isEnabled &&
       this.exceedThreshold(e, r) &&
       this.core.executeFilter('plugins-trigger-should-validate', !0, [e, r])
      ) {
       var l = function () {
         return s.core.validateElement(e, r).then(function (O) {
          s.core.emit('plugins.trigger.executed', {
           element: r,
           event: t,
           field: e,
          });
         });
        },
        $ = this.opts.delay[e] || this.opts.delay;
       if ($ === 0) l();
       else {
        var E = this.timers.get(r);
        E && window.clearTimeout(E),
         this.timers.set(r, window.setTimeout(l, $ * 1e3));
       }
      }
     }),
     (a.prototype.onFieldAdded = function (t) {
      this.handlers
       .filter(function (e) {
        return e.field === t.field;
       })
       .forEach(function (e) {
        return e.element.removeEventListener(e.event, e.handler);
       }),
       this.prepareHandler(t.field, t.elements);
     }),
     (a.prototype.onFieldRemoved = function (t) {
      this.handlers
       .filter(function (e) {
        return e.field === t.field && t.elements.indexOf(e.element) >= 0;
       })
       .forEach(function (e) {
        return e.element.removeEventListener(e.event, e.handler);
       });
     }),
     (a.prototype.exceedThreshold = function (t, e) {
      var r =
       this.opts.threshold[t] === 0 || this.opts.threshold === 0
        ? !1
        : this.opts.threshold[t] || this.opts.threshold;
      if (!r) return !0;
      var s = e.getAttribute('type');
      if (
       [
        'button',
        'checkbox',
        'file',
        'hidden',
        'image',
        'radio',
        'reset',
        'submit',
       ].indexOf(s) !== -1
      )
       return !0;
      var l = this.core.getElementValue(t, e);
      return l.length >= r;
     }),
     a
    );
   })(h.Plugin);
   return (He.Trigger = u), He;
  }
  mr.exports = Ps();
  var Ls = mr.exports,
   br = { exports: {} },
   Te = {},
   Ar;
  function Ds() {
   if (Ar) return Te;
   Ar = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.removeUndefined;
   function u() {
    var o = function (a) {
     return parseFloat(''.concat(a).replace(',', '.'));
    };
    return {
     validate: function (a) {
      var t = a.value;
      if (t === '') return { valid: !0 };
      var e = Object.assign({}, { inclusive: !0, message: '' }, f(a.options)),
       r = o(e.min),
       s = o(e.max);
      return e.inclusive
       ? {
          message: c(a.l10n ? e.message || a.l10n.between.default : e.message, [
           ''.concat(r),
           ''.concat(s),
          ]),
          valid: parseFloat(t) >= r && parseFloat(t) <= s,
         }
       : {
          message: c(
           a.l10n ? e.message || a.l10n.between.notInclusive : e.message,
           [''.concat(r), ''.concat(s)],
          ),
          valid: parseFloat(t) > r && parseFloat(t) < s,
         };
     },
    };
   }
   return (Te.between = u), Te;
  }
  br.exports = Ds();
  var Zs = br.exports,
   $r = { exports: {} },
   Me = {},
   Er;
  function Us() {
   if (Er) return Me;
   Er = 1;
   function h() {
    return {
     validate: function (c) {
      return { valid: !0 };
     },
    };
   }
   return (Me.blank = h), Me;
  }
  $r.exports = Us();
  var Bs = $r.exports,
   yr = { exports: {} },
   Ne = {},
   Ir;
  function qs() {
   if (Ir) return Ne;
   Ir = 1;
   var h = P,
    c = h.utils.call;
   function f() {
    return {
     validate: function (u) {
      var o = c(u.options.callback, [u]);
      return typeof o == 'boolean' ? { valid: o } : o;
     },
    };
   }
   return (Ne.callback = f), Ne;
  }
  yr.exports = qs();
  var Gs = yr.exports,
   xr = { exports: {} },
   Pe = {},
   Cr;
  function Ks() {
   if (Cr) return Pe;
   Cr = 1;
   var h = P,
    c = h.utils.format;
   function f() {
    return {
     validate: function (u) {
      var o =
        u.element.tagName.toLowerCase() === 'select'
         ? u.element.querySelectorAll('option:checked').length
         : u.elements.filter(function (s) {
            return s.checked;
           }).length,
       a = u.options.min ? ''.concat(u.options.min) : '',
       t = u.options.max ? ''.concat(u.options.max) : '',
       e = u.l10n
        ? u.options.message || u.l10n.choice.default
        : u.options.message,
       r = !((a && o < parseInt(a, 10)) || (t && o > parseInt(t, 10)));
      switch (!0) {
       case !!a && !!t:
        e = c(u.l10n ? u.l10n.choice.between : u.options.message, [a, t]);
        break;
       case !!a:
        e = c(u.l10n ? u.l10n.choice.more : u.options.message, a);
        break;
       case !!t:
        e = c(u.l10n ? u.l10n.choice.less : u.options.message, t);
        break;
      }
      return { message: e, valid: r };
     },
    };
   }
   return (Pe.choice = f), Pe;
  }
  xr.exports = Ks();
  var Ys = xr.exports,
   Or = { exports: {} },
   Ee = {},
   Vr;
  function zs() {
   if (Vr) return Ee;
   Vr = 1;
   var h = P,
    c = h.algorithms.luhn,
    f = {
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
   function u() {
    return {
     validate: function (o) {
      if (o.value === '') return { meta: { type: null }, valid: !0 };
      if (/[^0-9-\s]+/.test(o.value))
       return { meta: { type: null }, valid: !1 };
      var a = o.value.replace(/\D/g, '');
      if (!c(a)) return { meta: { type: null }, valid: !1 };
      for (var t = 0, e = Object.keys(f); t < e.length; t++) {
       var r = e[t];
       for (var s in f[r].prefix)
        if (
         o.value.substr(0, f[r].prefix[s].length) === f[r].prefix[s] &&
         f[r].length.indexOf(a.length) !== -1
        )
         return { meta: { type: r }, valid: !0 };
      }
      return { meta: { type: null }, valid: !1 };
     },
    };
   }
   return (Ee.CREDIT_CARD_TYPES = f), (Ee.creditCard = u), Ee;
  }
  Or.exports = zs();
  var Js = Or.exports,
   Sr = { exports: {} },
   Le = {},
   kr;
  function Xs() {
   if (kr) return Le;
   kr = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.isValidDate,
    u = h.utils.removeUndefined,
    o = function (e, r, s) {
     var l = r.indexOf('YYYY'),
      $ = r.indexOf('MM'),
      E = r.indexOf('DD');
     if (l === -1 || $ === -1 || E === -1) return null;
     var O = e.split(' '),
      F = O[0].split(s);
     if (F.length < 3) return null;
     var R = new Date(
       parseInt(F[l], 10),
       parseInt(F[$], 10) - 1,
       parseInt(F[E], 10),
      ),
      U = O.length > 2 ? O[2] : null;
     if (O.length > 1) {
      var K = O[1].split(':'),
       G = K.length > 0 ? parseInt(K[0], 10) : 0;
      R.setHours(U && U.toUpperCase() === 'PM' && G < 12 ? G + 12 : G),
       R.setMinutes(K.length > 1 ? parseInt(K[1], 10) : 0),
       R.setSeconds(K.length > 2 ? parseInt(K[2], 10) : 0);
     }
     return R;
    },
    a = function (e, r) {
     var s = r
       .replace(/Y/g, 'y')
       .replace(/M/g, 'm')
       .replace(/D/g, 'd')
       .replace(/:m/g, ':M')
       .replace(/:mm/g, ':MM')
       .replace(/:S/, ':s')
       .replace(/:SS/, ':ss'),
      l = e.getDate(),
      $ = l < 10 ? '0'.concat(l) : l,
      E = e.getMonth() + 1,
      O = E < 10 ? '0'.concat(E) : E,
      F = ''.concat(e.getFullYear()).substr(2),
      R = e.getFullYear(),
      U = e.getHours() % 12 || 12,
      K = U < 10 ? '0'.concat(U) : U,
      G = e.getHours(),
      J = G < 10 ? '0'.concat(G) : G,
      X = e.getMinutes(),
      re = X < 10 ? '0'.concat(X) : X,
      te = e.getSeconds(),
      ce = te < 10 ? '0'.concat(te) : te,
      ue = {
       H: ''.concat(G),
       HH: ''.concat(J),
       M: ''.concat(X),
       MM: ''.concat(re),
       d: ''.concat(l),
       dd: ''.concat($),
       h: ''.concat(U),
       hh: ''.concat(K),
       m: ''.concat(E),
       mm: ''.concat(O),
       s: ''.concat(te),
       ss: ''.concat(ce),
       yy: ''.concat(F),
       yyyy: ''.concat(R),
      };
     return s.replace(
      /d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,
      function (ae) {
       return ue[ae] ? ue[ae] : ae.slice(1, ae.length - 1);
      },
     );
    },
    t = function () {
     return {
      validate: function (e) {
       if (e.value === '') return { meta: { date: null }, valid: !0 };
       var r = Object.assign(
         {},
         {
          format:
           e.element && e.element.getAttribute('type') === 'date'
            ? 'YYYY-MM-DD'
            : 'MM/DD/YYYY',
          message: '',
         },
         u(e.options),
        ),
        s = e.l10n ? e.l10n.date.default : r.message,
        l = { message: ''.concat(s), meta: { date: null }, valid: !1 },
        $ = r.format.split(' '),
        E = $.length > 1 ? $[1] : null,
        O = $.length > 2 ? $[2] : null,
        F = e.value.split(' '),
        R = F[0],
        U = F.length > 1 ? F[1] : null,
        K = F.length > 2 ? F[2] : null;
       if ($.length !== F.length) return l;
       var G =
        r.separator ||
        (R.indexOf('/') !== -1
         ? '/'
         : R.indexOf('-') !== -1
           ? '-'
           : R.indexOf('.') !== -1
             ? '.'
             : '/');
       if (G === null || R.indexOf(G) === -1) return l;
       var J = R.split(G),
        X = $[0].split(G);
       if (J.length !== X.length) return l;
       var re = J[X.indexOf('YYYY')],
        te = J[X.indexOf('MM')],
        ce = J[X.indexOf('DD')];
       if (
        !/^\d+$/.test(re) ||
        !/^\d+$/.test(te) ||
        !/^\d+$/.test(ce) ||
        re.length > 4 ||
        te.length > 2 ||
        ce.length > 2
       )
        return l;
       var ue = parseInt(re, 10),
        ae = parseInt(te, 10),
        me = parseInt(ce, 10);
       if (!f(ue, ae, me)) return l;
       var b = new Date(ue, ae - 1, me);
       if (E) {
        var i = U.split(':');
        if (E.split(':').length !== i.length) return l;
        var v =
          i.length > 0
           ? i[0].length <= 2 && /^\d+$/.test(i[0])
             ? parseInt(i[0], 10)
             : -1
           : 0,
         y =
          i.length > 1
           ? i[1].length <= 2 && /^\d+$/.test(i[1])
             ? parseInt(i[1], 10)
             : -1
           : 0,
         C =
          i.length > 2
           ? i[2].length <= 2 && /^\d+$/.test(i[2])
             ? parseInt(i[2], 10)
             : -1
           : 0;
        if (
         v === -1 ||
         y === -1 ||
         C === -1 ||
         C < 0 ||
         C > 60 ||
         v < 0 ||
         v >= 24 ||
         (O && v > 12) ||
         y < 0 ||
         y > 59
        )
         return l;
        b.setHours(K && K.toUpperCase() === 'PM' && v < 12 ? v + 12 : v),
         b.setMinutes(y),
         b.setSeconds(C);
       }
       var j = typeof r.min == 'function' ? r.min() : r.min,
        T = j instanceof Date ? j : j ? o(j, X, G) : b,
        D = typeof r.max == 'function' ? r.max() : r.max,
        B = D instanceof Date ? D : D ? o(D, X, G) : b,
        Z = j instanceof Date ? a(T, r.format) : j,
        Q = D instanceof Date ? a(B, r.format) : D;
       switch (!0) {
        case !!Z && !Q:
         return {
          message: c(e.l10n ? e.l10n.date.min : s, Z),
          meta: { date: b },
          valid: b.getTime() >= T.getTime(),
         };
        case !!Q && !Z:
         return {
          message: c(e.l10n ? e.l10n.date.max : s, Q),
          meta: { date: b },
          valid: b.getTime() <= B.getTime(),
         };
        case !!Q && !!Z:
         return {
          message: c(e.l10n ? e.l10n.date.range : s, [Z, Q]),
          meta: { date: b },
          valid: b.getTime() <= B.getTime() && b.getTime() >= T.getTime(),
         };
        default:
         return { message: ''.concat(s), meta: { date: b }, valid: !0 };
       }
      },
     };
    };
   return (Le.date = t), Le;
  }
  Sr.exports = Xs();
  var Ws = Sr.exports,
   jr = { exports: {} },
   De = {},
   Fr;
  function Qs() {
   if (Fr) return De;
   Fr = 1;
   function h() {
    return {
     validate: function (c) {
      var f =
       typeof c.options.compare == 'function'
        ? c.options.compare.call(this)
        : c.options.compare;
      return { valid: f === '' || c.value !== f };
     },
    };
   }
   return (De.different = h), De;
  }
  jr.exports = Qs();
  var en = jr.exports,
   wr = { exports: {} },
   Ze = {},
   Rr;
  function tn() {
   if (Rr) return Ze;
   Rr = 1;
   function h() {
    return {
     validate: function (c) {
      return { valid: c.value === '' || /^\d+$/.test(c.value) };
     },
    };
   }
   return (Ze.digits = h), Ze;
  }
  wr.exports = tn();
  var rn = wr.exports,
   _r = { exports: {} },
   Ue = {},
   Hr;
  function an() {
   if (Hr) return Ue;
   Hr = 1;
   var h = P,
    c = h.utils.removeUndefined,
    f =
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    u =
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
   function o() {
    var a = function (t, e) {
     for (var r = t.split(/"/), s = r.length, l = [], $ = '', E = 0; E < s; E++)
      if (E % 2 === 0) {
       var O = r[E].split(e),
        F = O.length;
       if (F === 1) $ += O[0];
       else {
        l.push($ + O[0]);
        for (var R = 1; R < F - 1; R++) l.push(O[R]);
        $ = O[F - 1];
       }
      } else ($ += '"' + r[E]), E < s - 1 && ($ += '"');
     return l.push($), l;
    };
    return {
     validate: function (t) {
      if (t.value === '') return { valid: !0 };
      var e = Object.assign(
        {},
        { multiple: !1, requireGlobalDomain: !1, separator: /[,;]/ },
        c(t.options),
       ),
       r = e.requireGlobalDomain ? u : f,
       s = e.multiple === !0 || ''.concat(e.multiple) === 'true';
      if (s) {
       for (
        var l = e.separator || /[,;]/, $ = a(t.value, l), E = $.length, O = 0;
        O < E;
        O++
       )
        if (!r.test($[O])) return { valid: !1 };
       return { valid: !0 };
      } else return { valid: r.test(t.value) };
     },
    };
   }
   return (Ue.emailAddress = o), Ue;
  }
  _r.exports = an();
  var sn = _r.exports,
   Tr = { exports: {} },
   Be = {},
   Mr;
  function nn() {
   if (Mr) return Be;
   Mr = 1;
   var h = function (f) {
    return f.indexOf('.') === -1 ? f : f.split('.').slice(0, -1).join('.');
   };
   function c() {
    return {
     validate: function (f) {
      if (f.value === '') return { valid: !0 };
      var u,
       o,
       a = f.options.extension
        ? f.options.extension
           .toLowerCase()
           .split(',')
           .map(function (O) {
            return O.trim();
           })
        : [],
       t = f.options.type
        ? f.options.type
           .toLowerCase()
           .split(',')
           .map(function (O) {
            return O.trim();
           })
        : [],
       e = window.File && window.FileList && window.FileReader;
      if (e) {
       var r = f.element.files,
        s = r.length,
        l = 0;
       if (
        f.options.maxFiles &&
        s > parseInt(''.concat(f.options.maxFiles), 10)
       )
        return { meta: { error: 'INVALID_MAX_FILES' }, valid: !1 };
       if (
        f.options.minFiles &&
        s < parseInt(''.concat(f.options.minFiles), 10)
       )
        return { meta: { error: 'INVALID_MIN_FILES' }, valid: !1 };
       for (var $ = {}, E = 0; E < s; E++) {
        if (
         ((l += r[E].size),
         (u = r[E].name.substr(r[E].name.lastIndexOf('.') + 1)),
         ($ = { ext: u, file: r[E], size: r[E].size, type: r[E].type }),
         f.options.minSize &&
          r[E].size < parseInt(''.concat(f.options.minSize), 10))
        )
         return {
          meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, $),
          valid: !1,
         };
        if (
         f.options.maxSize &&
         r[E].size > parseInt(''.concat(f.options.maxSize), 10)
        )
         return {
          meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, $),
          valid: !1,
         };
        if (a.length > 0 && a.indexOf(u.toLowerCase()) === -1)
         return {
          meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, $),
          valid: !1,
         };
        if (
         t.length > 0 &&
         r[E].type &&
         t.indexOf(r[E].type.toLowerCase()) === -1
        )
         return {
          meta: Object.assign({}, { error: 'INVALID_TYPE' }, $),
          valid: !1,
         };
        if (
         f.options.validateFileName &&
         !f.options.validateFileName(h(r[E].name))
        )
         return {
          meta: Object.assign({}, { error: 'INVALID_NAME' }, $),
          valid: !1,
         };
       }
       if (
        f.options.maxTotalSize &&
        l > parseInt(''.concat(f.options.maxTotalSize), 10)
       )
        return {
         meta: Object.assign(
          {},
          { error: 'INVALID_MAX_TOTAL_SIZE', totalSize: l },
          $,
         ),
         valid: !1,
        };
       if (
        f.options.minTotalSize &&
        l < parseInt(''.concat(f.options.minTotalSize), 10)
       )
        return {
         meta: Object.assign(
          {},
          { error: 'INVALID_MIN_TOTAL_SIZE', totalSize: l },
          $,
         ),
         valid: !1,
        };
      } else {
       if (
        ((u = f.value.substr(f.value.lastIndexOf('.') + 1)),
        a.length > 0 && a.indexOf(u.toLowerCase()) === -1)
       )
        return { meta: { error: 'INVALID_EXTENSION', ext: u }, valid: !1 };
       if (
        ((o = h(f.value)),
        f.options.validateFileName && !f.options.validateFileName(o))
       )
        return { meta: { error: 'INVALID_NAME', name: o }, valid: !1 };
      }
      return { valid: !0 };
     },
    };
   }
   return (Be.file = c), Be;
  }
  Tr.exports = nn();
  var on = Tr.exports,
   Nr = { exports: {} },
   qe = {},
   Pr;
  function ln() {
   if (Pr) return qe;
   Pr = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.removeUndefined;
   function u() {
    return {
     validate: function (o) {
      if (o.value === '') return { valid: !0 };
      var a = Object.assign({}, { inclusive: !0, message: '' }, f(o.options)),
       t = parseFloat(''.concat(a.min).replace(',', '.'));
      return a.inclusive
       ? {
          message: c(
           o.l10n ? a.message || o.l10n.greaterThan.default : a.message,
           ''.concat(t),
          ),
          valid: parseFloat(o.value) >= t,
         }
       : {
          message: c(
           o.l10n ? a.message || o.l10n.greaterThan.notInclusive : a.message,
           ''.concat(t),
          ),
          valid: parseFloat(o.value) > t,
         };
     },
    };
   }
   return (qe.greaterThan = u), qe;
  }
  Nr.exports = ln();
  var dn = Nr.exports,
   Lr = { exports: {} },
   Ge = {},
   Dr;
  function cn() {
   if (Dr) return Ge;
   Dr = 1;
   function h() {
    return {
     validate: function (c) {
      var f =
       typeof c.options.compare == 'function'
        ? c.options.compare.call(this)
        : c.options.compare;
      return { valid: f === '' || c.value === f };
     },
    };
   }
   return (Ge.identical = h), Ge;
  }
  Lr.exports = cn();
  var un = Lr.exports,
   Zr = { exports: {} },
   Ke = {},
   Ur;
  function vn() {
   if (Ur) return Ke;
   Ur = 1;
   var h = P,
    c = h.utils.removeUndefined;
   function f() {
    return {
     validate: function (u) {
      if (u.value === '') return { valid: !0 };
      var o = Object.assign(
        {},
        { decimalSeparator: '.', thousandsSeparator: '' },
        c(u.options),
       ),
       a = o.decimalSeparator === '.' ? '\\.' : o.decimalSeparator,
       t = o.thousandsSeparator === '.' ? '\\.' : o.thousandsSeparator,
       e = new RegExp(
        '^-?[0-9]{1,3}('.concat(t, '[0-9]{3})*(').concat(a, '[0-9]+)?$'),
       ),
       r = new RegExp(t, 'g'),
       s = ''.concat(u.value);
      if (!e.test(s)) return { valid: !1 };
      t && (s = s.replace(r, '')), a && (s = s.replace(a, '.'));
      var l = parseFloat(s);
      return { valid: !isNaN(l) && isFinite(l) && Math.floor(l) === l };
     },
    };
   }
   return (Ke.integer = f), Ke;
  }
  Zr.exports = vn();
  var fn = Zr.exports,
   Br = { exports: {} },
   Ye = {},
   qr;
  function hn() {
   if (qr) return Ye;
   qr = 1;
   var h = P,
    c = h.utils.removeUndefined;
   function f() {
    return {
     validate: function (u) {
      if (u.value === '') return { valid: !0 };
      var o = Object.assign({}, { ipv4: !0, ipv6: !0 }, c(u.options)),
       a =
        /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
       t =
        /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
      switch (!0) {
       case o.ipv4 && !o.ipv6:
        return {
         message: u.l10n ? o.message || u.l10n.ip.ipv4 : o.message,
         valid: a.test(u.value),
        };
       case !o.ipv4 && o.ipv6:
        return {
         message: u.l10n ? o.message || u.l10n.ip.ipv6 : o.message,
         valid: t.test(u.value),
        };
       case o.ipv4 && o.ipv6:
       default:
        return {
         message: u.l10n ? o.message || u.l10n.ip.default : o.message,
         valid: a.test(u.value) || t.test(u.value),
        };
      }
     },
    };
   }
   return (Ye.ip = f), Ye;
  }
  Br.exports = hn();
  var pn = Br.exports,
   Gr = { exports: {} },
   ze = {},
   Kr;
  function mn() {
   if (Kr) return ze;
   Kr = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.removeUndefined;
   function u() {
    return {
     validate: function (o) {
      if (o.value === '') return { valid: !0 };
      var a = Object.assign({}, { inclusive: !0, message: '' }, f(o.options)),
       t = parseFloat(''.concat(a.max).replace(',', '.'));
      return a.inclusive
       ? {
          message: c(
           o.l10n ? a.message || o.l10n.lessThan.default : a.message,
           ''.concat(t),
          ),
          valid: parseFloat(o.value) <= t,
         }
       : {
          message: c(
           o.l10n ? a.message || o.l10n.lessThan.notInclusive : a.message,
           ''.concat(t),
          ),
          valid: parseFloat(o.value) < t,
         };
     },
    };
   }
   return (ze.lessThan = u), ze;
  }
  Gr.exports = mn();
  var gn = Gr.exports,
   Yr = { exports: {} },
   Je = {},
   zr;
  function bn() {
   if (zr) return Je;
   zr = 1;
   function h() {
    return {
     validate: function (c) {
      var f = !!c.options && !!c.options.trim,
       u = c.value;
      return { valid: (!f && u !== '') || (f && u !== '' && u.trim() !== '') };
     },
    };
   }
   return (Je.notEmpty = h), Je;
  }
  Yr.exports = bn();
  var An = Yr.exports,
   Jr = { exports: {} },
   Xe = {},
   Xr;
  function $n() {
   if (Xr) return Xe;
   Xr = 1;
   var h = P,
    c = h.utils.removeUndefined;
   function f() {
    return {
     validate: function (u) {
      if (u.value === '') return { valid: !0 };
      var o = Object.assign(
        {},
        { decimalSeparator: '.', thousandsSeparator: '' },
        c(u.options),
       ),
       a = ''.concat(u.value);
      a.substr(0, 1) === o.decimalSeparator
       ? (a = '0'.concat(o.decimalSeparator).concat(a.substr(1)))
       : a.substr(0, 2) === '-'.concat(o.decimalSeparator) &&
         (a = '-0'.concat(o.decimalSeparator).concat(a.substr(2)));
      var t = o.decimalSeparator === '.' ? '\\.' : o.decimalSeparator,
       e = o.thousandsSeparator === '.' ? '\\.' : o.thousandsSeparator,
       r = new RegExp(
        '^-?[0-9]{1,3}('.concat(e, '[0-9]{3})*(').concat(t, '[0-9]+)?$'),
       ),
       s = new RegExp(e, 'g');
      if (!r.test(a)) return { valid: !1 };
      e && (a = a.replace(s, '')), t && (a = a.replace(t, '.'));
      var l = parseFloat(a);
      return { valid: !isNaN(l) && isFinite(l) };
     },
    };
   }
   return (Xe.numeric = f), Xe;
  }
  Jr.exports = $n();
  var En = Jr.exports,
   Wr = { exports: {} },
   We = {},
   Qr;
  function yn() {
   if (Qr) return We;
   Qr = 1;
   var h = P,
    c = h.utils.call;
   function f() {
    return {
     validate: function (u) {
      return c(u.options.promise, [u]);
     },
    };
   }
   return (We.promise = f), We;
  }
  Wr.exports = yn();
  var In = Wr.exports,
   ea = { exports: {} },
   Qe = {},
   ta;
  function xn() {
   if (ta) return Qe;
   ta = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      var f = c.options.regexp;
      if (f instanceof RegExp) return { valid: f.test(c.value) };
      var u = f.toString(),
       o = c.options.flags ? new RegExp(u, c.options.flags) : new RegExp(u);
      return { valid: o.test(c.value) };
     },
    };
   }
   return (Qe.regexp = h), Qe;
  }
  ea.exports = xn();
  var Cn = ea.exports,
   ra = { exports: {} },
   et = {},
   aa;
  function On() {
   if (aa) return et;
   aa = 1;
   var h = P,
    c = h.utils.fetch,
    f = h.utils.removeUndefined;
   function u() {
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
      var t = Object.assign({}, o, f(a.options)),
       e = t.data;
      typeof t.data == 'function' && (e = t.data.call(this, a)),
       typeof e == 'string' && (e = JSON.parse(e)),
       (e[t.name || a.field] = a.value);
      var r = typeof t.url == 'function' ? t.url.call(this, a) : t.url;
      return c(r, {
       crossDomain: t.crossDomain,
       headers: t.headers,
       method: t.method,
       params: e,
      })
       .then(function (s) {
        return Promise.resolve({
         message: s.message,
         meta: s,
         valid: ''.concat(s[t.validKey]) === 'true',
        });
       })
       .catch(function (s) {
        return Promise.reject({ valid: !1 });
       });
     },
    };
   }
   return (et.remote = u), et;
  }
  ra.exports = On();
  var Vn = ra.exports,
   sa = { exports: {} },
   tt = {},
   na;
  function Sn() {
   if (na) return tt;
   na = 1;
   var h = P,
    c = h.utils.removeUndefined;
   function f() {
    return {
     validate: function (u) {
      if (u.value === '') return { valid: !0 };
      var o = Object.assign({}, { case: 'lower' }, c(u.options)),
       a = (o.case || 'lower').toLowerCase();
      return {
       message:
        o.message ||
        (u.l10n
         ? a === 'upper'
           ? u.l10n.stringCase.upper
           : u.l10n.stringCase.default
         : o.message),
       valid:
        a === 'upper'
         ? u.value === u.value.toUpperCase()
         : u.value === u.value.toLowerCase(),
      };
     },
    };
   }
   return (tt.stringCase = f), tt;
  }
  sa.exports = Sn();
  var kn = sa.exports,
   ia = { exports: {} },
   rt = {},
   oa;
  function jn() {
   if (oa) return rt;
   oa = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.removeUndefined,
    u = function (a) {
     for (var t = a.length, e = a.length - 1; e >= 0; e--) {
      var r = a.charCodeAt(e);
      r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2),
       r >= 56320 && r <= 57343 && e--;
     }
     return t;
    };
   function o() {
    return {
     validate: function (a) {
      var t = Object.assign(
        {},
        { message: '', trim: !1, utf8Bytes: !1 },
        f(a.options),
       ),
       e =
        t.trim === !0 || ''.concat(t.trim) === 'true'
         ? a.value.trim()
         : a.value;
      if (e === '') return { valid: !0 };
      var r = t.min ? ''.concat(t.min) : '',
       s = t.max ? ''.concat(t.max) : '',
       l = t.utf8Bytes ? u(e) : e.length,
       $ = !0,
       E = a.l10n ? t.message || a.l10n.stringLength.default : t.message;
      switch (
       (((r && l < parseInt(r, 10)) || (s && l > parseInt(s, 10))) && ($ = !1),
       !0)
      ) {
       case !!r && !!s:
        E = c(a.l10n ? t.message || a.l10n.stringLength.between : t.message, [
         r,
         s,
        ]);
        break;
       case !!r:
        E = c(
         a.l10n ? t.message || a.l10n.stringLength.more : t.message,
         ''.concat(parseInt(r, 10)),
        );
        break;
       case !!s:
        E = c(
         a.l10n ? t.message || a.l10n.stringLength.less : t.message,
         ''.concat(parseInt(s, 10)),
        );
        break;
      }
      return { message: E, valid: $ };
     },
    };
   }
   return (rt.stringLength = o), rt;
  }
  ia.exports = jn();
  var Fn = ia.exports,
   la = { exports: {} },
   at = {},
   da;
  function wn() {
   if (da) return at;
   da = 1;
   var h = P,
    c = h.utils.removeUndefined;
   function f() {
    var u = {
     allowEmptyProtocol: !1,
     allowLocal: !1,
     protocol: 'http, https, ftp',
    };
    return {
     validate: function (o) {
      if (o.value === '') return { valid: !0 };
      var a = Object.assign({}, u, c(o.options)),
       t = a.allowLocal === !0 || ''.concat(a.allowLocal) === 'true',
       e =
        a.allowEmptyProtocol === !0 ||
        ''.concat(a.allowEmptyProtocol) === 'true',
       r = a.protocol.split(',').join('|').replace(/\s/g, ''),
       s = new RegExp(
        '^(?:(?:' +
         r +
         ')://)' +
         (e ? '?' : '') +
         '(?:\\S+(?::\\S*)?@)?(?:' +
         (t
          ? ''
          : '(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
         '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
         (t ? '?' : '') +
         ')(?::\\d{2,5})?(?:/[^\\s]*)?$',
        'i',
       );
      return { valid: s.test(o.value) };
     },
    };
   }
   return (at.uri = f), at;
  }
  la.exports = wn();
  var Rn = la.exports,
   ca = { exports: {} },
   st = {},
   ua;
  function _n() {
   if (ua) return st;
   ua = 1;
   function h() {
    return {
     validate: function (c) {
      return {
       valid:
        c.value === '' ||
        /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
         c.value,
        ),
      };
     },
    };
   }
   return (st.base64 = h), st;
  }
  ca.exports = _n();
  var Hn = ca.exports,
   va = { exports: {} },
   nt = {},
   fa;
  function Tn() {
   if (fa) return nt;
   fa = 1;
   function h() {
    return {
     validate: function (c) {
      return {
       valid:
        c.value === '' ||
        /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(c.value),
      };
     },
    };
   }
   return (nt.bic = h), nt;
  }
  va.exports = Tn();
  var Mn = va.exports,
   ha = { exports: {} },
   it = {},
   pa;
  function Nn() {
   if (pa) return it;
   pa = 1;
   function h() {
    var c = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'],
     f = [
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
     u = function (s) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(s);
     },
     o = function (s) {
      return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
       s,
      );
     },
     a = function (s) {
      return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
       s,
      );
     },
     t = function (s) {
      return f.indexOf(s) >= 0;
     },
     e = function (s) {
      return (
       /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(
        s,
       ) ||
       /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
        s,
       )
      );
     },
     r = function (s) {
      return (
       /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
        s,
       ) ||
       /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
        s,
       )
      );
     };
    return {
     validate: function (s) {
      if (s.value === '') return { valid: !0 };
      for (
       var l =
         typeof s.options.type == 'string'
          ? s.options.type.toString().replace(/s/g, '').split(',')
          : s.options.type || c,
        $ = 0,
        E = l;
       $ < E.length;
       $++
      ) {
       var O = E[$],
        F = O.toLowerCase();
       if (c.indexOf(F) !== -1) {
        var R = !0;
        switch (F) {
         case 'hex':
          R = u(s.value);
          break;
         case 'hsl':
          R = o(s.value);
          break;
         case 'hsla':
          R = a(s.value);
          break;
         case 'keyword':
          R = t(s.value);
          break;
         case 'rgb':
          R = e(s.value);
          break;
         case 'rgba':
          R = r(s.value);
          break;
        }
        if (R) return { valid: !0 };
       }
      }
      return { valid: !1 };
     },
    };
   }
   return (it.color = h), it;
  }
  ha.exports = Nn();
  var Pn = ha.exports,
   ma = { exports: {} },
   ot = {},
   ga;
  function Ln() {
   if (ga) return ot;
   ga = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      var f = c.value.toUpperCase();
      if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(f))
       return { valid: !1 };
      var u = f.split(''),
       o = u.pop(),
       a = u.map(function (r) {
        var s = r.charCodeAt(0);
        switch (!0) {
         case r === '*':
          return 36;
         case r === '@':
          return 37;
         case r === '#':
          return 38;
         case s >= 65 && s <= 90:
          return s - 65 + 10;
         default:
          return parseInt(r, 10);
        }
       }),
       t = a
        .map(function (r, s) {
         var l = s % 2 === 0 ? r : 2 * r;
         return Math.floor(l / 10) + (l % 10);
        })
        .reduce(function (r, s) {
         return r + s;
        }, 0),
       e = (10 - (t % 10)) % 10;
      return { valid: o === ''.concat(e) };
     },
    };
   }
   return (ot.cusip = h), ot;
  }
  ma.exports = Ln();
  var Dn = ma.exports,
   ba = { exports: {} },
   lt = {},
   Aa;
  function Zn() {
   if (Aa) return lt;
   Aa = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(c.value)) return { valid: !1 };
      for (
       var f = c.value.length, u = 0, o = f === 8 ? [3, 1] : [1, 3], a = 0;
       a < f - 1;
       a++
      )
       u += parseInt(c.value.charAt(a), 10) * o[a % 2];
      return (
       (u = (10 - (u % 10)) % 10),
       { valid: ''.concat(u) === c.value.charAt(f - 1) }
      );
     },
    };
   }
   return (lt.ean = h), lt;
  }
  ba.exports = Zn();
  var Un = ba.exports,
   $a = { exports: {} },
   dt = {},
   Ea;
  function Bn() {
   if (Ea) return dt;
   Ea = 1;
   function h() {
    var c = {
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
     validate: function (f) {
      if (f.value === '') return { meta: null, valid: !0 };
      if (!/^[0-9]{2}-?[0-9]{7}$/.test(f.value))
       return { meta: null, valid: !1 };
      var u = ''.concat(f.value.substr(0, 2));
      for (var o in c)
       if (c[o].indexOf(u) !== -1) return { meta: { campus: o }, valid: !0 };
      return { meta: null, valid: !1 };
     },
    };
   }
   return (dt.ein = h), dt;
  }
  $a.exports = Bn();
  var qn = $a.exports,
   ya = { exports: {} },
   ct = {},
   Ia;
  function Gn() {
   if (Ia) return ct;
   Ia = 1;
   var h = P,
    c = h.algorithms.mod37And36;
   function f() {
    return {
     validate: function (u) {
      if (u.value === '') return { valid: !0 };
      var o = u.value.toUpperCase();
      return /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(
       o,
      )
       ? ((o = o.replace(/\s/g, '').replace(/-/g, '')),
         o.substr(0, 5) === 'GRID:' && (o = o.substr(5)),
         { valid: c(o) })
       : { valid: !1 };
     },
    };
   }
   return (ct.grid = f), ct;
  }
  ya.exports = Gn();
  var Kn = ya.exports,
   xa = { exports: {} },
   ut = {},
   Ca;
  function Yn() {
   if (Ca) return ut;
   Ca = 1;
   function h() {
    return {
     validate: function (c) {
      return { valid: c.value === '' || /^[0-9a-fA-F]+$/.test(c.value) };
     },
    };
   }
   return (ut.hex = h), ut;
  }
  xa.exports = Yn();
  var zn = xa.exports,
   Oa = { exports: {} },
   vt = {},
   Va;
  function Jn() {
   if (Va) return vt;
   Va = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.removeUndefined;
   function u() {
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
     validate: function (t) {
      if (t.value === '') return { valid: !0 };
      var e = Object.assign({}, { message: '' }, f(t.options)),
       r = t.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
       s = e.country || r.substr(0, 2);
      if (!o[s]) return { message: e.message, valid: !1 };
      if (e.sepa !== void 0) {
       var l = a.indexOf(s) !== -1;
       if (
        ((e.sepa === 'true' || e.sepa === !0) && !l) ||
        ((e.sepa === 'false' || e.sepa === !1) && l)
       )
        return { message: e.message, valid: !1 };
      }
      var $ = c(
       t.l10n ? e.message || t.l10n.iban.country : e.message,
       t.l10n ? t.l10n.iban.countries[s] : s,
      );
      if (!new RegExp('^'.concat(o[s], '$')).test(t.value))
       return { message: $, valid: !1 };
      (r = ''.concat(r.substr(4)).concat(r.substr(0, 4))),
       (r = r
        .split('')
        .map(function (R) {
         var U = R.charCodeAt(0);
         return U >= 65 && U <= 90 ? U - 65 + 10 : R;
        })
        .join(''));
      for (
       var E = parseInt(r.substr(0, 1), 10), O = r.length, F = 1;
       F < O;
       ++F
      )
       E = (E * 10 + parseInt(r.substr(F, 1), 10)) % 97;
      return { message: $, valid: E === 1 };
     },
    };
   }
   return (vt.iban = u), vt;
  }
  Oa.exports = Jn();
  var Xn = Oa.exports,
   Sa = { exports: {} },
   ft = {},
   ka;
  function Wn() {
   if (ka) return ft;
   ka = 1;
   var h = P;
   function c(m) {
    var d = m.replace(/\./g, '');
    return { meta: {}, valid: /^\d{7,8}$/.test(d) };
   }
   function f(m, d) {
    if (!/^\d{13}$/.test(m)) return !1;
    var x = parseInt(m.substr(0, 2), 10),
     V = parseInt(m.substr(2, 2), 10),
     g = parseInt(m.substr(7, 2), 10),
     w = parseInt(m.substr(12, 1), 10);
    if (x > 31 || V > 12) return !1;
    for (var H = 0, _ = 0; _ < 6; _++)
     H += (7 - _) * (parseInt(m.charAt(_), 10) + parseInt(m.charAt(_ + 6), 10));
    if (((H = 11 - (H % 11)), (H === 10 || H === 11) && (H = 0), H !== w))
     return !1;
    switch (d.toUpperCase()) {
     case 'BA':
      return 10 <= g && g <= 19;
     case 'MK':
      return 41 <= g && g <= 49;
     case 'ME':
      return 20 <= g && g <= 29;
     case 'RS':
      return 70 <= g && g <= 99;
     case 'SI':
      return 50 <= g && g <= 59;
     default:
      return !0;
    }
   }
   function u(m) {
    return { meta: {}, valid: f(m, 'BA') };
   }
   var o = h.utils.isValidDate;
   function a(m) {
    if (!/^\d{10}$/.test(m) && !/^\d{6}\s\d{3}\s\d{1}$/.test(m))
     return { meta: {}, valid: !1 };
    var d = m.replace(/\s/g, ''),
     x = parseInt(d.substr(0, 2), 10) + 1900,
     V = parseInt(d.substr(2, 2), 10),
     g = parseInt(d.substr(4, 2), 10);
    if (
     (V > 40 ? ((x += 100), (V -= 40)) : V > 20 && ((x -= 100), (V -= 20)),
     !o(x, V, g))
    )
     return { meta: {}, valid: !1 };
    for (var w = 0, H = [2, 4, 8, 5, 10, 9, 7, 3, 6], _ = 0; _ < 9; _++)
     w += parseInt(d.charAt(_), 10) * H[_];
    return (
     (w = (w % 11) % 10), { meta: {}, valid: ''.concat(w) === d.substr(9, 1) }
    );
   }
   function t(m) {
    var d = m.replace(/\D/g, '');
    if (
     !/^\d{11}$/.test(d) ||
     /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(d)
    )
     return { meta: {}, valid: !1 };
    var x = 0,
     V;
    for (V = 0; V < 9; V++) x += (10 - V) * parseInt(d.charAt(V), 10);
    if (
     ((x = 11 - (x % 11)),
     (x === 10 || x === 11) && (x = 0),
     ''.concat(x) !== d.charAt(9))
    )
     return { meta: {}, valid: !1 };
    var g = 0;
    for (V = 0; V < 10; V++) g += (11 - V) * parseInt(d.charAt(V), 10);
    return (
     (g = 11 - (g % 11)),
     (g === 10 || g === 11) && (g = 0),
     { meta: {}, valid: ''.concat(g) === d.charAt(10) }
    );
   }
   function e(m) {
    if (!/^756[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{2}$/.test(m))
     return { meta: {}, valid: !1 };
    for (
     var d = m.replace(/\D/g, '').substr(3),
      x = d.length,
      V = x === 8 ? [3, 1] : [1, 3],
      g = 0,
      w = 0;
     w < x - 1;
     w++
    )
     g += parseInt(d.charAt(w), 10) * V[w % 2];
    return (
     (g = 10 - (g % 10)), { meta: {}, valid: ''.concat(g) === d.charAt(x - 1) }
    );
   }
   function r(m) {
    if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(m)) return { meta: {}, valid: !1 };
    for (var d = m.replace(/-/g, ''); d.length < 9; ) d = '0'.concat(d);
    for (var x = [3, 2, 7, 6, 5, 4, 3, 2], V = 0, g = 0; g < 8; g++)
     V += parseInt(d.charAt(g), 10) * x[g];
    V = 11 - (V % 11);
    var w = ''.concat(V);
    return (
     V === 11 ? (w = '0') : V === 10 && (w = 'K'),
     { meta: {}, valid: w === d.charAt(8).toUpperCase() }
    );
   }
   var s = h.utils.isValidDate;
   function l(m) {
    var d = m.trim();
    if (!/^\d{15}$/.test(d) && !/^\d{17}[\dXx]{1}$/.test(d))
     return { meta: {}, valid: !1 };
    var x = {
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
     V = parseInt(d.substr(0, 2), 10),
     g = parseInt(d.substr(2, 2), 10),
     w = parseInt(d.substr(4, 2), 10);
    if (!x[V] || !x[V][g]) return { meta: {}, valid: !1 };
    var H = !1,
     _ = x[V][g],
     L;
    for (L = 0; L < _.length; L++)
     if (
      (Array.isArray(_[L]) && _[L][0] <= w && w <= _[L][1]) ||
      (!Array.isArray(_[L]) && w === _[L])
     ) {
      H = !0;
      break;
     }
    if (!H) return { meta: {}, valid: !1 };
    var z;
    d.length === 18 ? (z = d.substr(6, 8)) : (z = '19'.concat(d.substr(6, 6)));
    var ie = parseInt(z.substr(0, 4), 10),
     oe = parseInt(z.substr(4, 2), 10),
     he = parseInt(z.substr(6, 2), 10);
    if (!s(ie, oe, he)) return { meta: {}, valid: !1 };
    if (d.length === 18) {
     var pe = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      le = 0;
     for (L = 0; L < 17; L++) le += parseInt(d.charAt(L), 10) * pe[L];
     le = (12 - (le % 11)) % 11;
     var Ni =
      d.charAt(17).toUpperCase() !== 'X' ? parseInt(d.charAt(17), 10) : 10;
     return { meta: {}, valid: Ni === le };
    }
    return { meta: {}, valid: !0 };
   }
   function $(m) {
    var d = m.replace(/\./g, '').replace('-', '');
    if (!/^\d{8,16}$/.test(d)) return { meta: {}, valid: !1 };
    for (
     var x = d.length,
      V = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71],
      g = 0,
      w = x - 2;
     w >= 0;
     w--
    )
     g += parseInt(d.charAt(w), 10) * V[w];
    return (
     (g = g % 11),
     g >= 2 && (g = 11 - g),
     { meta: {}, valid: ''.concat(g) === d.substr(x - 1) }
    );
   }
   var E = h.utils.isValidDate;
   function O(m) {
    if (!/^\d{9,10}$/.test(m)) return { meta: {}, valid: !1 };
    var d = 1900 + parseInt(m.substr(0, 2), 10),
     x = (parseInt(m.substr(2, 2), 10) % 50) % 20,
     V = parseInt(m.substr(4, 2), 10);
    if (m.length === 9) {
     if ((d >= 1980 && (d -= 100), d > 1953)) return { meta: {}, valid: !1 };
    } else d < 1954 && (d += 100);
    if (!E(d, x, V)) return { meta: {}, valid: !1 };
    if (m.length === 10) {
     var g = parseInt(m.substr(0, 9), 10) % 11;
     return (
      d < 1985 && (g = g % 10),
      { meta: {}, valid: ''.concat(g) === m.substr(9, 1) }
     );
    }
    return { meta: {}, valid: !0 };
   }
   var F = h.utils.isValidDate;
   function R(m) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(m)) return { meta: {}, valid: !1 };
    var d = m.replace(/-/g, ''),
     x = parseInt(d.substr(0, 2), 10),
     V = parseInt(d.substr(2, 2), 10),
     g = parseInt(d.substr(4, 2), 10);
    switch (!0) {
     case '5678'.indexOf(d.charAt(6)) !== -1 && g >= 58:
      g += 1800;
      break;
     case '0123'.indexOf(d.charAt(6)) !== -1:
     case '49'.indexOf(d.charAt(6)) !== -1 && g >= 37:
      g += 1900;
      break;
     default:
      g += 2e3;
      break;
    }
    return { meta: {}, valid: F(g, V, x) };
   }
   function U(m) {
    var d = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(m),
     x = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(m),
     V = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(m);
    if (!d && !x && !V) return { meta: {}, valid: !1 };
    var g = m.replace(/-/g, ''),
     w,
     H,
     _ = !0;
    if (d || x) {
     H = 'DNI';
     var L = 'XYZ'.indexOf(g.charAt(0));
     return (
      L !== -1 && ((g = L + g.substr(1) + ''), (H = 'NIE')),
      (w = parseInt(g.substr(0, 8), 10)),
      (w = 'TRWAGMYFPDXBNJZSQVHLCKE'[w % 23]),
      { meta: { type: H }, valid: w === g.substr(8, 1) }
     );
    } else {
     (w = g.substr(1, 7)), (H = 'CIF');
     for (var z = g[0], ie = g.substr(-1), oe = 0, he = 0; he < w.length; he++)
      if (he % 2 !== 0) oe += parseInt(w[he], 10);
      else {
       var pe = '' + parseInt(w[he], 10) * 2;
       (oe += parseInt(pe[0], 10)),
        pe.length === 2 && (oe += parseInt(pe[1], 10));
      }
     var le = oe - Math.floor(oe / 10) * 10;
     return (
      le !== 0 && (le = 10 - le),
      'KQS'.indexOf(z) !== -1
       ? (_ = ie === 'JABCDEFGHI'[le])
       : 'ABEH'.indexOf(z) !== -1
         ? (_ = ie === '' + le)
         : (_ = ie === '' + le || ie === 'JABCDEFGHI'[le]),
      { meta: { type: H }, valid: _ }
     );
    }
   }
   var K = h.utils.isValidDate;
   function G(m) {
    if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(m))
     return { meta: {}, valid: !1 };
    var d = parseInt(m.substr(0, 2), 10),
     x = parseInt(m.substr(2, 2), 10),
     V = parseInt(m.substr(4, 2), 10),
     g = { '+': 1800, '-': 1900, A: 2e3 };
    if (((V = g[m.charAt(6)] + V), !K(V, x, d))) return { meta: {}, valid: !1 };
    var w = parseInt(m.substr(7, 3), 10);
    if (w < 2) return { meta: {}, valid: !1 };
    var H = parseInt(m.substr(0, 6) + m.substr(7, 3) + '', 10);
    return {
     meta: {},
     valid: '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(H % 31) === m.charAt(10),
    };
   }
   function J(m) {
    var d = m.toUpperCase();
    if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(d))
     return { meta: {}, valid: !1 };
    var x = d.substr(5, 2);
    switch (!0) {
     case /^\d{2}$/.test(x):
      d = m;
      break;
     case x === '2A':
      d = ''.concat(m.substr(0, 5), '19').concat(m.substr(7));
      break;
     case x === '2B':
      d = ''.concat(m.substr(0, 5), '18').concat(m.substr(7));
      break;
     default:
      return { meta: {}, valid: !1 };
    }
    var V = 97 - (parseInt(d.substr(0, 13), 10) % 97),
     g = V < 10 ? '0'.concat(V) : ''.concat(V);
    return { meta: {}, valid: g === d.substr(13) };
   }
   function X(m) {
    var d = m.toUpperCase();
    if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(d))
     return { meta: {}, valid: !1 };
    var x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
     V = d.charAt(0),
     g = d.charAt(1),
     w = 0,
     H = d;
    /^[A-Z]$/.test(g)
     ? ((w += 9 * (10 + x.indexOf(V))),
       (w += 8 * (10 + x.indexOf(g))),
       (H = d.substr(2)))
     : ((w += 9 * 36), (w += 8 * (10 + x.indexOf(V))), (H = d.substr(1)));
    for (var _ = H.length, L = 0; L < _ - 1; L++)
     w += (7 - L) * parseInt(H.charAt(L), 10);
    var z = w % 11,
     ie = z === 0 ? '0' : 11 - z === 10 ? 'A' : ''.concat(11 - z);
    return { meta: {}, valid: ie === H.charAt(_ - 1) };
   }
   var re = h.algorithms.mod11And10;
   function te(m) {
    return { meta: {}, valid: /^[0-9]{11}$/.test(m) && re(m) };
   }
   var ce = h.algorithms.verhoeff;
   function ue(m) {
    if (!/^[2-9]\d{11}$/.test(m)) return { meta: {}, valid: !1 };
    var d = m.split('').map(function (x) {
     return parseInt(x, 10);
    });
    return { meta: {}, valid: ce(d) };
   }
   function ae(m) {
    if (!/^\d{7}[A-W][AHWTX]?$/.test(m)) return { meta: {}, valid: !1 };
    var d = function (V) {
      for (var g = V; g.length < 7; ) g = '0'.concat(g);
      for (var w = 'WABCDEFGHIJKLMNOPQRSTUV', H = 0, _ = 0; _ < 7; _++)
       H += parseInt(g.charAt(_), 10) * (8 - _);
      return (H += 9 * w.indexOf(g.substr(7))), w[H % 23];
     },
     x =
      m.length === 9 && (m.charAt(8) === 'A' || m.charAt(8) === 'H')
       ? m.charAt(7) === d(m.substr(0, 7) + m.substr(8) + '')
       : m.charAt(7) === d(m.substr(0, 7));
    return { meta: {}, valid: x };
   }
   var me = h.algorithms.luhn;
   function b(m) {
    return /^\d{1,9}$/.test(m)
     ? { meta: {}, valid: me(m) }
     : { meta: {}, valid: !1 };
   }
   var i = h.utils.isValidDate;
   function v(m) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(m)) return { meta: {}, valid: !1 };
    var d = m.replace(/-/g, ''),
     x = parseInt(d.substr(0, 2), 10),
     V = parseInt(d.substr(2, 2), 10),
     g = parseInt(d.substr(4, 2), 10),
     w = parseInt(d.charAt(9), 10);
    if (((g = w === 9 ? 1900 + g : (20 + w) * 100 + g), !i(g, V, x, !0)))
     return { meta: {}, valid: !1 };
    for (var H = [3, 2, 7, 6, 5, 4, 3, 2], _ = 0, L = 0; L < 8; L++)
     _ += parseInt(d.charAt(L), 10) * H[L];
    return (
     (_ = 11 - (_ % 11)), { meta: {}, valid: ''.concat(_) === d.charAt(8) }
    );
   }
   var y = h.utils.isValidDate;
   function C(m) {
    var d = m.replace('-', '');
    if (!/^\d{13}$/.test(d)) return { meta: {}, valid: !1 };
    var x = d.charAt(6),
     V = parseInt(d.substr(0, 2), 10),
     g = parseInt(d.substr(2, 2), 10),
     w = parseInt(d.substr(4, 2), 10);
    switch (x) {
     case '1':
     case '2':
     case '5':
     case '6':
      V += 1900;
      break;
     case '3':
     case '4':
     case '7':
     case '8':
      V += 2e3;
      break;
     default:
      V += 1800;
      break;
    }
    if (!y(V, g, w)) return { meta: {}, valid: !1 };
    for (
     var H = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5], _ = d.length, L = 0, z = 0;
     z < _ - 1;
     z++
    )
     L += H[z] * parseInt(d.charAt(z), 10);
    var ie = (11 - (L % 11)) % 10;
    return { meta: {}, valid: ''.concat(ie) === d.charAt(_ - 1) };
   }
   var j = h.utils.isValidDate;
   function T(m) {
    if (!/^[0-9]{11}$/.test(m)) return { meta: {}, valid: !1 };
    var d = parseInt(m.charAt(0), 10),
     x = parseInt(m.substr(1, 2), 10),
     V = parseInt(m.substr(3, 2), 10),
     g = parseInt(m.substr(5, 2), 10),
     w = d % 2 === 0 ? 17 + d / 2 : 17 + (d + 1) / 2;
    if (((x = w * 100 + x), !j(x, V, g, !0))) return { meta: {}, valid: !1 };
    var H = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
     _ = 0,
     L;
    for (L = 0; L < 10; L++) _ += parseInt(m.charAt(L), 10) * H[L];
    if (((_ = _ % 11), _ !== 10))
     return { meta: {}, valid: ''.concat(_) === m.charAt(10) };
    for (_ = 0, H = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], L = 0; L < 10; L++)
     _ += parseInt(m.charAt(L), 10) * H[L];
    return (
     (_ = _ % 11),
     _ === 10 && (_ = 0),
     { meta: {}, valid: ''.concat(_) === m.charAt(10) }
    );
   }
   var D = h.utils.isValidDate;
   function B(m) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(m)) return { meta: {}, valid: !1 };
    var d = m.replace(/\D/g, ''),
     x = parseInt(d.substr(0, 2), 10),
     V = parseInt(d.substr(2, 2), 10),
     g = parseInt(d.substr(4, 2), 10);
    if (((g = g + 1800 + parseInt(d.charAt(6), 10) * 100), !D(g, V, x, !0)))
     return { meta: {}, valid: !1 };
    for (var w = 0, H = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], _ = 0; _ < 10; _++)
     w += parseInt(d.charAt(_), 10) * H[_];
    return (
     (w = ((w + 1) % 11) % 10),
     { meta: {}, valid: ''.concat(w) === d.charAt(10) }
    );
   }
   function Z(m) {
    return { meta: {}, valid: f(m, 'ME') };
   }
   function Q(m) {
    return { meta: {}, valid: f(m, 'MK') };
   }
   var ee = h.utils.isValidDate;
   function se(m) {
    var d = m.toUpperCase();
    if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(d))
     return { meta: {}, valid: !1 };
    var x = [
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
     ],
     V = d.substr(0, 4);
    if (x.indexOf(V) >= 0) return { meta: {}, valid: !1 };
    var g = parseInt(d.substr(4, 2), 10),
     w = parseInt(d.substr(6, 2), 10),
     H = parseInt(d.substr(6, 2), 10);
    if ((/^[0-9]$/.test(d.charAt(16)) ? (g += 1900) : (g += 2e3), !ee(g, w, H)))
     return { meta: {}, valid: !1 };
    var _ = d.charAt(10);
    if (_ !== 'H' && _ !== 'M') return { meta: {}, valid: !1 };
    var L = d.substr(11, 2),
     z = [
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
     ];
    if (z.indexOf(L) === -1) return { meta: {}, valid: !1 };
    for (
     var ie = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ',
      oe = 0,
      he = d.length,
      pe = 0;
     pe < he - 1;
     pe++
    )
     oe += (18 - pe) * ie.indexOf(d.charAt(pe));
    return (
     (oe = (10 - (oe % 10)) % 10),
     { meta: {}, valid: ''.concat(oe) === d.charAt(he - 1) }
    );
   }
   var ge = h.utils.isValidDate;
   function $e(m) {
    if (!/^\d{12}$/.test(m)) return { meta: {}, valid: !1 };
    var d = parseInt(m.substr(0, 2), 10),
     x = parseInt(m.substr(2, 2), 10),
     V = parseInt(m.substr(4, 2), 10);
    if (!ge(d + 1900, x, V) && !ge(d + 2e3, x, V))
     return { meta: {}, valid: !1 };
    var g = m.substr(6, 2),
     w = [
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
     ];
    return { meta: {}, valid: w.indexOf(g) === -1 };
   }
   function Ae(m) {
    if (m.length < 8) return { meta: {}, valid: !1 };
    var d = m;
    if (
     (d.length === 8 && (d = '0'.concat(d)),
     !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(d))
    )
     return { meta: {}, valid: !1 };
    if (((d = d.replace(/\./g, '')), parseInt(d, 10) === 0))
     return { meta: {}, valid: !1 };
    for (var x = 0, V = d.length, g = 0; g < V - 1; g++)
     x += (9 - g) * parseInt(d.charAt(g), 10);
    return (
     (x = x % 11),
     x === 10 && (x = 0),
     { meta: {}, valid: ''.concat(x) === d.charAt(V - 1) }
    );
   }
   function Rt(m) {
    if (!/^\d{11}$/.test(m)) return { meta: {}, valid: !1 };
    var d = function (V) {
      for (var g = [3, 7, 6, 1, 8, 9, 4, 5, 2], w = 0, H = 0; H < 9; H++)
       w += g[H] * parseInt(V.charAt(H), 10);
      return 11 - (w % 11);
     },
     x = function (V) {
      for (var g = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], w = 0, H = 0; H < 10; H++)
       w += g[H] * parseInt(V.charAt(H), 10);
      return 11 - (w % 11);
     };
    return {
     meta: {},
     valid:
      ''.concat(d(m)) === m.substr(-2, 1) && ''.concat(x(m)) === m.substr(-1),
    };
   }
   function _t(m) {
    if (!/^\d{8}[0-9A-Z]*$/.test(m)) return { meta: {}, valid: !1 };
    if (m.length === 8) return { meta: {}, valid: !0 };
    for (var d = [3, 2, 7, 6, 5, 4, 3, 2], x = 0, V = 0; V < 8; V++)
     x += d[V] * parseInt(m.charAt(V), 10);
    var g = x % 11,
     w = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][g],
     H = 'KJIHGFEDCBA'.charAt(g);
    return {
     meta: {},
     valid: m.charAt(8) === ''.concat(w) || m.charAt(8) === H,
    };
   }
   function Ht(m) {
    if (!/^[0-9]{11}$/.test(m)) return { meta: {}, valid: !1 };
    for (
     var d = 0, x = m.length, V = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7], g = 0;
     g < x - 1;
     g++
    )
     d += V[g] * parseInt(m.charAt(g), 10);
    return (
     (d = d % 10),
     d === 0 && (d = 10),
     (d = 10 - d),
     { meta: {}, valid: ''.concat(d) === m.charAt(x - 1) }
    );
   }
   var Tt = h.utils.isValidDate;
   function Mt(m) {
    if (!/^[0-9]{13}$/.test(m)) return { meta: {}, valid: !1 };
    var d = parseInt(m.charAt(0), 10);
    if (d === 0 || d === 7 || d === 8) return { meta: {}, valid: !1 };
    var x = parseInt(m.substr(1, 2), 10),
     V = parseInt(m.substr(3, 2), 10),
     g = parseInt(m.substr(5, 2), 10),
     w = { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 };
    if (g > 31 && V > 12) return { meta: {}, valid: !1 };
    if (d !== 9 && ((x = w[d + ''] + x), !Tt(x, V, g)))
     return { meta: {}, valid: !1 };
    for (
     var H = 0, _ = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], L = m.length, z = 0;
     z < L - 1;
     z++
    )
     H += parseInt(m.charAt(z), 10) * _[z];
    return (
     (H = H % 11),
     H === 10 && (H = 1),
     { meta: {}, valid: ''.concat(H) === m.charAt(L - 1) }
    );
   }
   function Nt(m) {
    return { meta: {}, valid: f(m, 'RS') };
   }
   var Pt = h.algorithms.luhn,
    Lt = h.utils.isValidDate;
   function k(m) {
    if (!/^[0-9]{10}$/.test(m) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(m))
     return { meta: {}, valid: !1 };
    var d = m.replace(/[^0-9]/g, ''),
     x = parseInt(d.substr(0, 2), 10) + 1900,
     V = parseInt(d.substr(2, 2), 10),
     g = parseInt(d.substr(4, 2), 10);
    return Lt(x, V, g) ? { meta: {}, valid: Pt(d) } : { meta: {}, valid: !1 };
   }
   function n(m) {
    return { meta: {}, valid: f(m, 'SI') };
   }
   function p(m) {
    return { meta: {}, valid: /^\d{5}$/.test(m) };
   }
   function I(m) {
    if (m.length !== 13) return { meta: {}, valid: !1 };
    for (var d = 0, x = 0; x < 12; x++)
     d += parseInt(m.charAt(x), 10) * (13 - x);
    return {
     meta: {},
     valid: (11 - (d % 11)) % 10 === parseInt(m.charAt(12), 10),
    };
   }
   function A(m) {
    if (m.length !== 11) return { meta: {}, valid: !1 };
    for (var d = 0, x = 0; x < 10; x++) d += parseInt(m.charAt(x), 10);
    return { meta: {}, valid: d % 10 === parseInt(m.charAt(10), 10) };
   }
   function S(m) {
    var d = m.toUpperCase();
    if (!/^[A-Z][12][0-9]{8}$/.test(d)) return { meta: {}, valid: !1 };
    for (
     var x = d.length,
      V = 'ABCDEFGHJKLMNPQRSTUVXYWZIO',
      g = V.indexOf(d.charAt(0)) + 10,
      w = Math.floor(g / 10) + (g % 10) * (x - 1),
      H = 0,
      _ = 1;
     _ < x - 1;
     _++
    )
     H += parseInt(d.charAt(_), 10) * (x - 1 - _);
    return {
     meta: {},
     valid: (w + H + parseInt(d.charAt(x - 1), 10)) % 10 === 0,
    };
   }
   function M(m) {
    if (!/^\d{8}$/.test(m)) return { meta: {}, valid: !1 };
    for (var d = [2, 9, 8, 7, 6, 3, 4], x = 0, V = 0; V < 7; V++)
     x += parseInt(m.charAt(V), 10) * d[V];
    return (
     (x = x % 10),
     x > 0 && (x = 10 - x),
     { meta: {}, valid: ''.concat(x) === m.charAt(7) }
    );
   }
   var N = h.algorithms.luhn,
    q = h.utils.isValidDate;
   function Y(m) {
    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(m)) return { meta: {}, valid: !1 };
    var d = parseInt(m.substr(0, 2), 10),
     x = new Date().getFullYear() % 100,
     V = parseInt(m.substr(2, 2), 10),
     g = parseInt(m.substr(4, 2), 10);
    return (
     (d = d >= x ? d + 1900 : d + 2e3),
     q(d, V, g) ? { meta: {}, valid: N(m) } : { meta: {}, valid: !1 }
    );
   }
   var W = h.utils.format,
    fe = h.utils.removeUndefined;
   function ve() {
    var m = [
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
     validate: function (d) {
      if (d.value === '') return { valid: !0 };
      var x = Object.assign({}, { message: '' }, fe(d.options)),
       V = d.value.substr(0, 2);
      if (
       (typeof x.country == 'function'
        ? (V = x.country.call(this))
        : (V = x.country),
       m.indexOf(V) === -1)
      )
       return { valid: !0 };
      var g = { meta: {}, valid: !0 };
      switch (V.toLowerCase()) {
       case 'ar':
        g = c(d.value);
        break;
       case 'ba':
        g = u(d.value);
        break;
       case 'bg':
        g = a(d.value);
        break;
       case 'br':
        g = t(d.value);
        break;
       case 'ch':
        g = e(d.value);
        break;
       case 'cl':
        g = r(d.value);
        break;
       case 'cn':
        g = l(d.value);
        break;
       case 'co':
        g = $(d.value);
        break;
       case 'cz':
        g = O(d.value);
        break;
       case 'dk':
        g = R(d.value);
        break;
       case 'ee':
        g = T(d.value);
        break;
       case 'es':
        g = U(d.value);
        break;
       case 'fi':
        g = G(d.value);
        break;
       case 'fr':
        g = J(d.value);
        break;
       case 'hk':
        g = X(d.value);
        break;
       case 'hr':
        g = te(d.value);
        break;
       case 'id':
        g = ue(d.value);
        break;
       case 'ie':
        g = ae(d.value);
        break;
       case 'il':
        g = b(d.value);
        break;
       case 'is':
        g = v(d.value);
        break;
       case 'kr':
        g = C(d.value);
        break;
       case 'lt':
        g = T(d.value);
        break;
       case 'lv':
        g = B(d.value);
        break;
       case 'me':
        g = Z(d.value);
        break;
       case 'mk':
        g = Q(d.value);
        break;
       case 'mx':
        g = se(d.value);
        break;
       case 'my':
        g = $e(d.value);
        break;
       case 'nl':
        g = Ae(d.value);
        break;
       case 'no':
        g = Rt(d.value);
        break;
       case 'pe':
        g = _t(d.value);
        break;
       case 'pl':
        g = Ht(d.value);
        break;
       case 'ro':
        g = Mt(d.value);
        break;
       case 'rs':
        g = Nt(d.value);
        break;
       case 'se':
        g = k(d.value);
        break;
       case 'si':
        g = n(d.value);
        break;
       case 'sk':
        g = O(d.value);
        break;
       case 'sm':
        g = p(d.value);
        break;
       case 'th':
        g = I(d.value);
        break;
       case 'tr':
        g = A(d.value);
        break;
       case 'tw':
        g = S(d.value);
        break;
       case 'uy':
        g = M(d.value);
        break;
       case 'za':
        g = Y(d.value);
        break;
      }
      var w = W(
       d.l10n && d.l10n.id ? x.message || d.l10n.id.country : x.message,
       d.l10n && d.l10n.id && d.l10n.id.countries
        ? d.l10n.id.countries[V.toUpperCase()]
        : V.toUpperCase(),
      );
      return Object.assign({}, { message: w }, g);
     },
    };
   }
   return (ft.id = ve), ft;
  }
  Sa.exports = Wn();
  var Qn = Sa.exports,
   ja = { exports: {} },
   ht = {},
   Fa;
  function ei() {
   if (Fa) return ht;
   Fa = 1;
   var h = P,
    c = h.algorithms.luhn;
   function f() {
    return {
     validate: function (u) {
      if (u.value === '') return { valid: !0 };
      switch (!0) {
       case /^\d{15}$/.test(u.value):
       case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(u.value):
       case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(u.value):
        return { valid: c(u.value.replace(/[^0-9]/g, '')) };
       case /^\d{14}$/.test(u.value):
       case /^\d{16}$/.test(u.value):
       case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(u.value):
       case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(u.value):
        return { valid: !0 };
       default:
        return { valid: !1 };
      }
     },
    };
   }
   return (ht.imei = f), ht;
  }
  ja.exports = ei();
  var ti = ja.exports,
   wa = { exports: {} },
   pt = {},
   Ra;
  function ri() {
   if (Ra) return pt;
   Ra = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      if (!/^IMO \d{7}$/i.test(c.value)) return { valid: !1 };
      for (
       var f = c.value.replace(/^.*(\d{7})$/, '$1'), u = 0, o = 6;
       o >= 1;
       o--
      )
       u += parseInt(f.slice(6 - o, -o), 10) * (o + 1);
      return { valid: u % 10 === parseInt(f.charAt(6), 10) };
     },
    };
   }
   return (pt.imo = h), pt;
  }
  wa.exports = ri();
  var ai = wa.exports,
   _a = { exports: {} },
   mt = {},
   Ha;
  function si() {
   if (Ha) return mt;
   Ha = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { meta: { type: null }, valid: !0 };
      var f;
      switch (!0) {
       case /^\d{9}[\dX]$/.test(c.value):
       case c.value.length === 13 &&
        /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(c.value):
       case c.value.length === 13 &&
        /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c.value):
        f = 'ISBN10';
        break;
       case /^(978|979)\d{9}[\dX]$/.test(c.value):
       case c.value.length === 17 &&
        /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(c.value):
       case c.value.length === 17 &&
        /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c.value):
        f = 'ISBN13';
        break;
       default:
        return { meta: { type: null }, valid: !1 };
      }
      var u = c.value.replace(/[^0-9X]/gi, '').split(''),
       o = u.length,
       a = 0,
       t,
       e;
      switch (f) {
       case 'ISBN10':
        for (a = 0, t = 0; t < o - 1; t++) a += parseInt(u[t], 10) * (10 - t);
        return (
         (e = 11 - (a % 11)),
         e === 11 ? (e = 0) : e === 10 && (e = 'X'),
         { meta: { type: f }, valid: ''.concat(e) === u[o - 1] }
        );
       case 'ISBN13':
        for (a = 0, t = 0; t < o - 1; t++)
         a += t % 2 === 0 ? parseInt(u[t], 10) : parseInt(u[t], 10) * 3;
        return (
         (e = 10 - (a % 10)),
         e === 10 && (e = '0'),
         { meta: { type: f }, valid: ''.concat(e) === u[o - 1] }
        );
      }
     },
    };
   }
   return (mt.isbn = h), mt;
  }
  _a.exports = si();
  var ni = _a.exports,
   Ta = { exports: {} },
   gt = {},
   Ma;
  function ii() {
   if (Ma) return gt;
   Ma = 1;
   function h() {
    var c =
     'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW';
    return {
     validate: function (f) {
      if (f.value === '') return { valid: !0 };
      var u = f.value.toUpperCase(),
       o = new RegExp('^(' + c + ')[0-9A-Z]{10}$');
      if (!o.test(f.value)) return { valid: !1 };
      var a = u.length,
       t = '',
       e;
      for (e = 0; e < a - 1; e++) {
       var r = u.charCodeAt(e);
       t += r > 57 ? (r - 55).toString() : u.charAt(e);
      }
      var s = '',
       l = t.length,
       $ = l % 2 !== 0 ? 0 : 1;
      for (e = 0; e < l; e++)
       s += parseInt(t[e], 10) * (e % 2 === $ ? 2 : 1) + '';
      var E = 0;
      for (e = 0; e < s.length; e++) E += parseInt(s.charAt(e), 10);
      return (
       (E = (10 - (E % 10)) % 10), { valid: ''.concat(E) === u.charAt(a - 1) }
      );
     },
    };
   }
   return (gt.isin = h), gt;
  }
  Ta.exports = ii();
  var oi = Ta.exports,
   Na = { exports: {} },
   bt = {},
   Pa;
  function li() {
   if (Pa) return bt;
   Pa = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { meta: null, valid: !0 };
      var f;
      switch (!0) {
       case /^M\d{9}$/.test(c.value):
       case /^M-\d{4}-\d{4}-\d{1}$/.test(c.value):
       case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(c.value):
        f = 'ISMN10';
        break;
       case /^9790\d{9}$/.test(c.value):
       case /^979-0-\d{4}-\d{4}-\d{1}$/.test(c.value):
       case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(c.value):
        f = 'ISMN13';
        break;
       default:
        return { meta: null, valid: !1 };
      }
      var u = c.value;
      f === 'ISMN10' && (u = '9790'.concat(u.substr(1))),
       (u = u.replace(/[^0-9]/gi, ''));
      for (var o = 0, a = u.length, t = [1, 3], e = 0; e < a - 1; e++)
       o += parseInt(u.charAt(e), 10) * t[e % 2];
      return (
       (o = (10 - (o % 10)) % 10),
       { meta: { type: f }, valid: ''.concat(o) === u.charAt(a - 1) }
      );
     },
    };
   }
   return (bt.ismn = h), bt;
  }
  Na.exports = li();
  var di = Na.exports,
   La = { exports: {} },
   At = {},
   Da;
  function ci() {
   if (Da) return At;
   Da = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      if (!/^\d{4}-\d{3}[\dX]$/.test(c.value)) return { valid: !1 };
      var f = c.value.replace(/[^0-9X]/gi, '').split(''),
       u = f.length,
       o = 0;
      f[7] === 'X' && (f[7] = '10');
      for (var a = 0; a < u; a++) o += parseInt(f[a], 10) * (8 - a);
      return { valid: o % 11 === 0 };
     },
    };
   }
   return (At.issn = h), At;
  }
  La.exports = ci();
  var ui = La.exports,
   Za = { exports: {} },
   $t = {},
   Ua;
  function vi() {
   if (Ua) return $t;
   Ua = 1;
   function h() {
    return {
     validate: function (c) {
      return {
       valid:
        c.value === '' ||
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(c.value) ||
        /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(c.value),
      };
     },
    };
   }
   return ($t.mac = h), $t;
  }
  Za.exports = vi();
  var fi = Za.exports,
   Ba = { exports: {} },
   Et = {},
   qa;
  function hi() {
   if (qa) return Et;
   qa = 1;
   var h = P,
    c = h.algorithms.luhn;
   function f() {
    return {
     validate: function (u) {
      if (u.value === '') return { valid: !0 };
      var o = u.value;
      if (
       /^[0-9A-F]{15}$/i.test(o) ||
       /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(o) ||
       /^\d{19}$/.test(o) ||
       /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(o)
      ) {
       var a = o.charAt(o.length - 1).toUpperCase();
       if (((o = o.replace(/[- ]/g, '')), o.match(/^\d*$/i)))
        return { valid: c(o) };
       o = o.slice(0, -1);
       var t = '',
        e = void 0;
       for (e = 1; e <= 13; e += 2)
        t += (parseInt(o.charAt(e), 16) * 2).toString(16);
       var r = 0;
       for (e = 0; e < t.length; e++) r += parseInt(t.charAt(e), 16);
       return {
        valid:
         r % 10 === 0
          ? a === '0'
          : a ===
            ((Math.floor((r + 10) / 10) * 10 - r) * 2)
             .toString(16)
             .toUpperCase(),
       };
      }
      return /^[0-9A-F]{14}$/i.test(o) ||
       /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(o) ||
       /^\d{18}$/.test(o) ||
       /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(o)
       ? { valid: !0 }
       : { valid: !1 };
     },
    };
   }
   return (Et.meid = f), Et;
  }
  Ba.exports = hi();
  var pi = Ba.exports,
   Ga = { exports: {} },
   yt = {},
   Ka;
  function mi() {
   if (Ka) return yt;
   Ka = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.removeUndefined;
   function u() {
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
      var t = Object.assign({}, { message: '' }, f(a.options)),
       e = a.value.trim(),
       r = e.substr(0, 2);
      if (
       (typeof t.country == 'function'
        ? (r = t.country.call(this))
        : (r = t.country),
       !r || o.indexOf(r.toUpperCase()) === -1)
      )
       return { valid: !0 };
      var s = !0;
      switch (r.toUpperCase()) {
       case 'AE':
        s =
         /^(((\+|00)?971[\s.-]?(\(0\)[\s.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s.-]?[0-9]){7}$/.test(
          e,
         );
        break;
       case 'BG':
        s =
         /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(
          e.replace(/\+|\s|-|\/|\(|\)/gi, ''),
         );
        break;
       case 'BR':
        s =
         /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(
          e,
         );
        break;
       case 'CN':
        s =
         /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(
          e,
         );
        break;
       case 'CZ':
        s = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(
         e,
        );
        break;
       case 'DE':
        s =
         /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(
          e,
         );
        break;
       case 'DK':
        s = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(e);
        break;
       case 'ES':
        s = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(e);
        break;
       case 'FR':
        s =
         /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(
          e,
         );
        break;
       case 'GB':
        s =
         /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|#)\d+)?)$/.test(
          e,
         );
        break;
       case 'IN':
        s = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(
         e,
        );
        break;
       case 'MA':
        s =
         /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(
          e,
         );
        break;
       case 'NL':
        s =
         /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(
          e,
         );
        break;
       case 'PK':
        s = /^0?3[0-9]{2}[0-9]{7}$/.test(e);
        break;
       case 'RO':
        s =
         /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/g.test(
          e,
         );
        break;
       case 'RU':
        s =
         /^((8|\+7|007)[-./ ]?)?([(/.]?\d{3}[)/.]?[-./ ]?)?[\d\-./ ]{7,10}$/g.test(
          e,
         );
        break;
       case 'SK':
        s = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(
         e,
        );
        break;
       case 'TH':
        s = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(e);
        break;
       case 'VE':
        s =
         /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(
          e,
         );
        break;
       case 'US':
       default:
        s = /^(?:(1-?)|(\+1 ?))?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(e);
        break;
      }
      return {
       message: c(
        a.l10n && a.l10n.phone ? t.message || a.l10n.phone.country : t.message,
        a.l10n && a.l10n.phone && a.l10n.phone.countries
         ? a.l10n.phone.countries[r]
         : r,
       ),
       valid: s,
      };
     },
    };
   }
   return (yt.phone = u), yt;
  }
  Ga.exports = mi();
  var gi = Ga.exports,
   Ya = { exports: {} },
   It = {},
   za;
  function bi() {
   if (za) return It;
   za = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      if (!/^\d{9}$/.test(c.value)) return { valid: !1 };
      for (var f = 0, u = 0; u < c.value.length; u += 3)
       f +=
        parseInt(c.value.charAt(u), 10) * 3 +
        parseInt(c.value.charAt(u + 1), 10) * 7 +
        parseInt(c.value.charAt(u + 2), 10);
      return { valid: f !== 0 && f % 10 === 0 };
     },
    };
   }
   return (It.rtn = h), It;
  }
  Ya.exports = bi();
  var Ai = Ya.exports,
   Ja = { exports: {} },
   xt = {},
   Xa;
  function $i() {
   if (Xa) return xt;
   Xa = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      var f = c.value.toUpperCase();
      if (!/^[0-9A-Z]{7}$/.test(f)) return { valid: !1 };
      for (
       var u = [1, 3, 1, 7, 3, 9, 1], o = f.length, a = 0, t = 0;
       t < o - 1;
       t++
      )
       a += u[t] * parseInt(f.charAt(t), 36);
      return (
       (a = (10 - (a % 10)) % 10), { valid: ''.concat(a) === f.charAt(o - 1) }
      );
     },
    };
   }
   return (xt.sedol = h), xt;
  }
  Ja.exports = $i();
  var Ei = Ja.exports,
   Wa = { exports: {} },
   Ct = {},
   Qa;
  function yi() {
   if (Qa) return Ct;
   Qa = 1;
   var h = P,
    c = h.algorithms.luhn;
   function f() {
    return {
     validate: function (u) {
      return {
       valid: u.value === '' || (/^\d{9}$/.test(u.value) && c(u.value)),
      };
     },
    };
   }
   return (Ct.siren = f), Ct;
  }
  Wa.exports = yi();
  var Ii = Wa.exports,
   es = { exports: {} },
   Ot = {},
   ts;
  function xi() {
   if (ts) return Ot;
   ts = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      for (var f = c.value.length, u = 0, o, a = 0; a < f; a++)
       (o = parseInt(c.value.charAt(a), 10)),
        a % 2 === 0 && ((o = o * 2), o > 9 && (o -= 9)),
        (u += o);
      return { valid: u % 10 === 0 };
     },
    };
   }
   return (Ot.siret = h), Ot;
  }
  es.exports = xi();
  var Ci = es.exports,
   rs = { exports: {} },
   Vt = {},
   as;
  function Oi() {
   if (as) return Vt;
   as = 1;
   var h = P,
    c = h.utils.format;
   function f() {
    var u = function (a, t) {
      var e = Math.pow(10, t),
       r = a * e,
       s;
      switch (!0) {
       case r === 0:
        s = 0;
        break;
       case r > 0:
        s = 1;
        break;
       case r < 0:
        s = -1;
        break;
      }
      var l = r % 1 === 0.5 * s;
      return l ? (Math.floor(r) + (s > 0 ? 1 : 0)) / e : Math.round(r) / e;
     },
     o = function (a, t) {
      if (t === 0) return 1;
      var e = ''.concat(a).split('.'),
       r = ''.concat(t).split('.'),
       s =
        (e.length === 1 ? 0 : e[1].length) + (r.length === 1 ? 0 : r[1].length);
      return u(a - t * Math.floor(a / t), s);
     };
    return {
     validate: function (a) {
      if (a.value === '') return { valid: !0 };
      var t = parseFloat(a.value);
      if (isNaN(t) || !isFinite(t)) return { valid: !1 };
      var e = Object.assign(
        {},
        { baseValue: 0, message: '', step: 1 },
        a.options,
       ),
       r = o(t - e.baseValue, e.step);
      return {
       message: c(
        a.l10n ? e.message || a.l10n.step.default : e.message,
        ''.concat(e.step),
       ),
       valid: r === 0 || r === e.step,
      };
     },
    };
   }
   return (Vt.step = f), Vt;
  }
  rs.exports = Oi();
  var Vi = rs.exports,
   ss = { exports: {} },
   St = {},
   ns;
  function Si() {
   if (ns) return St;
   ns = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.removeUndefined;
   function u() {
    return {
     validate: function (o) {
      if (o.value === '') return { valid: !0 };
      var a = Object.assign({}, { message: '' }, f(o.options)),
       t = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
       },
       e = a.version ? ''.concat(a.version) : 'all';
      return {
       message: a.version
        ? c(o.l10n ? a.message || o.l10n.uuid.version : a.message, a.version)
        : o.l10n
          ? o.l10n.uuid.default
          : a.message,
       valid: t[e] === null ? !0 : t[e].test(o.value),
      };
     },
    };
   }
   return (St.uuid = u), St;
  }
  ss.exports = Si();
  var ki = ss.exports,
   is = { exports: {} },
   kt = {},
   os;
  function ji() {
   if (os) return kt;
   os = 1;
   var h = P;
   function c(k) {
    var n = k.replace('-', '');
    if ((/^AR[0-9]{11}$/.test(n) && (n = n.substr(2)), !/^[0-9]{11}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], I = 0, A = 0; A < 10; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return (
     (I = 11 - (I % 11)),
     I === 11 && (I = 0),
     { meta: {}, valid: ''.concat(I) === n.substr(10) }
    );
   }
   function f(k) {
    var n = k;
    if ((/^ATU[0-9]{8}$/.test(n) && (n = n.substr(2)), !/^U[0-9]{8}$/.test(n)))
     return { meta: {}, valid: !1 };
    n = n.substr(1);
    for (var p = [1, 2, 1, 2, 1, 2, 1], I = 0, A = 0, S = 0; S < 7; S++)
     (A = parseInt(n.charAt(S), 10) * p[S]),
      A > 9 && (A = Math.floor(A / 10) + (A % 10)),
      (I += A);
    return (
     (I = 10 - ((I + 4) % 10)),
     I === 10 && (I = 0),
     { meta: {}, valid: ''.concat(I) === n.substr(7, 1) }
    );
   }
   function u(k) {
    var n = k;
    if (
     (/^BE[0]?[0-9]{9}$/.test(n) && (n = n.substr(2)),
     !/^[0]?[0-9]{9}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    if ((n.length === 9 && (n = '0'.concat(n)), n.substr(1, 1) === '0'))
     return { meta: {}, valid: !1 };
    var p = parseInt(n.substr(0, 8), 10) + parseInt(n.substr(8, 2), 10);
    return { meta: {}, valid: p % 97 === 0 };
   }
   var o = h.utils.isValidDate;
   function a(k) {
    var n = k;
    if (
     (/^BG[0-9]{9,10}$/.test(n) && (n = n.substr(2)), !/^[0-9]{9,10}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    var p = 0,
     I = 0;
    if (n.length === 9) {
     for (I = 0; I < 8; I++) p += parseInt(n.charAt(I), 10) * (I + 1);
     if (((p = p % 11), p === 10)) {
      for (p = 0, I = 0; I < 8; I++) p += parseInt(n.charAt(I), 10) * (I + 3);
      p = p % 11;
     }
     return (p = p % 10), { meta: {}, valid: ''.concat(p) === n.substr(8) };
    } else {
     var A = function (N) {
       var q = parseInt(N.substr(0, 2), 10) + 1900,
        Y = parseInt(N.substr(2, 2), 10),
        W = parseInt(N.substr(4, 2), 10);
       if (
        (Y > 40 ? ((q += 100), (Y -= 40)) : Y > 20 && ((q -= 100), (Y -= 20)),
        !o(q, Y, W))
       )
        return !1;
       for (var fe = [2, 4, 8, 5, 10, 9, 7, 3, 6], ve = 0, m = 0; m < 9; m++)
        ve += parseInt(N.charAt(m), 10) * fe[m];
       return (ve = (ve % 11) % 10), ''.concat(ve) === N.substr(9, 1);
      },
      S = function (N) {
       for (var q = [21, 19, 17, 13, 11, 9, 7, 3, 1], Y = 0, W = 0; W < 9; W++)
        Y += parseInt(N.charAt(W), 10) * q[W];
       return (Y = Y % 10), ''.concat(Y) === N.substr(9, 1);
      },
      M = function (N) {
       for (var q = [4, 3, 2, 7, 6, 5, 4, 3, 2], Y = 0, W = 0; W < 9; W++)
        Y += parseInt(N.charAt(W), 10) * q[W];
       return (
        (Y = 11 - (Y % 11)),
        Y === 10 ? !1 : (Y === 11 && (Y = 0), ''.concat(Y) === N.substr(9, 1))
       );
      };
     return { meta: {}, valid: A(n) || S(n) || M(n) };
    }
   }
   function t(k) {
    if (k === '') return { meta: {}, valid: !0 };
    var n = k.replace(/[^\d]+/g, '');
    if (n === '' || n.length !== 14) return { meta: {}, valid: !1 };
    if (
     n === '00000000000000' ||
     n === '11111111111111' ||
     n === '22222222222222' ||
     n === '33333333333333' ||
     n === '44444444444444' ||
     n === '55555555555555' ||
     n === '66666666666666' ||
     n === '77777777777777' ||
     n === '88888888888888' ||
     n === '99999999999999'
    )
     return { meta: {}, valid: !1 };
    var p = n.length - 2,
     I = n.substring(0, p),
     A = n.substring(p),
     S = 0,
     M = p - 7,
     N;
    for (N = p; N >= 1; N--)
     (S += parseInt(I.charAt(p - N), 10) * M--), M < 2 && (M = 9);
    var q = S % 11 < 2 ? 0 : 11 - (S % 11);
    if (q !== parseInt(A.charAt(0), 10)) return { meta: {}, valid: !1 };
    for (p = p + 1, I = n.substring(0, p), S = 0, M = p - 7, N = p; N >= 1; N--)
     (S += parseInt(I.charAt(p - N), 10) * M--), M < 2 && (M = 9);
    return (
     (q = S % 11 < 2 ? 0 : 11 - (S % 11)),
     { meta: {}, valid: q === parseInt(A.charAt(1), 10) }
    );
   }
   function e(k) {
    var n = k;
    if (
     (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(n) && (n = n.substr(2)),
     !/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(n))
    )
     return { meta: {}, valid: !1 };
    n = n.substr(1);
    for (var p = [5, 4, 3, 2, 7, 6, 5, 4], I = 0, A = 0; A < 8; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return (
     (I = 11 - (I % 11)),
     I === 10
      ? { meta: {}, valid: !1 }
      : (I === 11 && (I = 0),
        { meta: {}, valid: ''.concat(I) === n.substr(8, 1) })
    );
   }
   function r(k) {
    var n = k;
    if (
     (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(n) && (n = n.substr(2)),
     !/^[0-5|9][0-9]{7}[A-Z]$/.test(n))
    )
     return { meta: {}, valid: !1 };
    if (n.substr(0, 2) === '12') return { meta: {}, valid: !1 };
    for (
     var p = 0,
      I = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 },
      A = 0;
     A < 8;
     A++
    ) {
     var S = parseInt(n.charAt(A), 10);
     A % 2 === 0 && (S = I[''.concat(S)]), (p += S);
    }
    return {
     meta: {},
     valid: ''.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[p % 26]) === n.substr(8, 1),
    };
   }
   var s = h.utils.isValidDate;
   function l(k) {
    var n = k;
    if (
     (/^CZ[0-9]{8,10}$/.test(n) && (n = n.substr(2)), !/^[0-9]{8,10}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    var p = 0,
     I = 0;
    if (n.length === 8) {
     if (''.concat(n.charAt(0)) === '9') return { meta: {}, valid: !1 };
     for (p = 0, I = 0; I < 7; I++) p += parseInt(n.charAt(I), 10) * (8 - I);
     return (
      (p = 11 - (p % 11)),
      p === 10 && (p = 0),
      p === 11 && (p = 1),
      { meta: {}, valid: ''.concat(p) === n.substr(7, 1) }
     );
    } else if (n.length === 9 && ''.concat(n.charAt(0)) === '6') {
     for (p = 0, I = 0; I < 7; I++)
      p += parseInt(n.charAt(I + 1), 10) * (8 - I);
     return (
      (p = 11 - (p % 11)),
      p === 10 && (p = 0),
      p === 11 && (p = 1),
      (p = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][p - 1]),
      { meta: {}, valid: ''.concat(p) === n.substr(8, 1) }
     );
    } else if (n.length === 9 || n.length === 10) {
     var A = 1900 + parseInt(n.substr(0, 2), 10),
      S = (parseInt(n.substr(2, 2), 10) % 50) % 20,
      M = parseInt(n.substr(4, 2), 10);
     if (n.length === 9) {
      if ((A >= 1980 && (A -= 100), A > 1953)) return { meta: {}, valid: !1 };
     } else A < 1954 && (A += 100);
     if (!s(A, S, M)) return { meta: {}, valid: !1 };
     if (n.length === 10) {
      var N = parseInt(n.substr(0, 9), 10) % 11;
      return (
       A < 1985 && (N = N % 10),
       { meta: {}, valid: ''.concat(N) === n.substr(9, 1) }
      );
     }
     return { meta: {}, valid: !0 };
    }
    return { meta: {}, valid: !1 };
   }
   var $ = h.algorithms.mod11And10;
   function E(k) {
    var n = k;
    return (
     /^DE[0-9]{9}$/.test(n) && (n = n.substr(2)),
     /^[1-9][0-9]{8}$/.test(n)
      ? { meta: {}, valid: $(n) }
      : { meta: {}, valid: !1 }
    );
   }
   function O(k) {
    var n = k;
    if ((/^DK[0-9]{8}$/.test(n) && (n = n.substr(2)), !/^[0-9]{8}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = 0, I = [2, 7, 6, 5, 4, 3, 2, 1], A = 0; A < 8; A++)
     p += parseInt(n.charAt(A), 10) * I[A];
    return { meta: {}, valid: p % 11 === 0 };
   }
   function F(k) {
    var n = k;
    if ((/^EE[0-9]{9}$/.test(n) && (n = n.substr(2)), !/^[0-9]{9}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = 0, I = [3, 7, 1, 3, 7, 1, 3, 7, 1], A = 0; A < 9; A++)
     p += parseInt(n.charAt(A), 10) * I[A];
    return { meta: {}, valid: p % 10 === 0 };
   }
   function R(k) {
    var n = k;
    if (
     (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(n) && (n = n.substr(2)),
     !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(n))
    )
     return { meta: {}, valid: !1 };
    var p = function (M) {
      var N = parseInt(M.substr(0, 8), 10);
      return ''.concat('TRWAGMYFPDXBNJZSQVHLCKE'[N % 23]) === M.substr(8, 1);
     },
     I = function (M) {
      var N = ['XYZ'.indexOf(M.charAt(0)), M.substr(1)].join(''),
       q = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(N, 10) % 23];
      return ''.concat(q) === M.substr(8, 1);
     },
     A = function (M) {
      var N = M.charAt(0),
       q;
      if ('KLM'.indexOf(N) !== -1)
       return (
        (q = parseInt(M.substr(1, 8), 10)),
        (q = 'TRWAGMYFPDXBNJZSQVHLCKE'[q % 23]),
        ''.concat(q) === M.substr(8, 1)
       );
      if ('ABCDEFGHJNPQRSUVW'.indexOf(N) !== -1) {
       for (var Y = [2, 1, 2, 1, 2, 1, 2], W = 0, fe = 0, ve = 0; ve < 7; ve++)
        (fe = parseInt(M.charAt(ve + 1), 10) * Y[ve]),
         fe > 9 && (fe = Math.floor(fe / 10) + (fe % 10)),
         (W += fe);
       return (
        (W = 10 - (W % 10)),
        W === 10 && (W = 0),
        ''.concat(W) === M.substr(8, 1) || 'JABCDEFGHI'[W] === M.substr(8, 1)
       );
      }
      return !1;
     },
     S = n.charAt(0);
    return /^[0-9]$/.test(S)
     ? { meta: { type: 'DNI' }, valid: p(n) }
     : /^[XYZ]$/.test(S)
       ? { meta: { type: 'NIE' }, valid: I(n) }
       : { meta: { type: 'CIF' }, valid: A(n) };
   }
   function U(k) {
    var n = k;
    if ((/^FI[0-9]{8}$/.test(n) && (n = n.substr(2)), !/^[0-9]{8}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = [7, 9, 10, 5, 8, 4, 2, 1], I = 0, A = 0; A < 8; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return { meta: {}, valid: I % 11 === 0 };
   }
   var K = h.algorithms.luhn;
   function G(k) {
    var n = k;
    if (
     (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(n) && (n = n.substr(2)),
     !/^[0-9A-Z]{2}[0-9]{9}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    if (n.substr(2, 4) !== '000') return { meta: {}, valid: K(n.substr(2)) };
    if (/^[0-9]{2}$/.test(n.substr(0, 2)))
     return {
      meta: {},
      valid:
       n.substr(0, 2) === ''.concat(parseInt(n.substr(2) + '12', 10) % 97),
     };
    var p = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
     I = void 0;
    return (
     /^[0-9]$/.test(n.charAt(0))
      ? (I = p.indexOf(n.charAt(0)) * 24 + p.indexOf(n.charAt(1)) - 10)
      : (I = p.indexOf(n.charAt(0)) * 34 + p.indexOf(n.charAt(1)) - 100),
     {
      meta: {},
      valid:
       (parseInt(n.substr(2), 10) + 1 + Math.floor(I / 11)) % 11 === I % 11,
     }
    );
   }
   function J(k) {
    var n = k;
    if (
     ((/^GB[0-9]{9}$/.test(n) ||
      /^GB[0-9]{12}$/.test(n) ||
      /^GBGD[0-9]{3}$/.test(n) ||
      /^GBHA[0-9]{3}$/.test(n) ||
      /^GB(GD|HA)8888[0-9]{5}$/.test(n)) &&
      (n = n.substr(2)),
     !/^[0-9]{9}$/.test(n) &&
      !/^[0-9]{12}$/.test(n) &&
      !/^GD[0-9]{3}$/.test(n) &&
      !/^HA[0-9]{3}$/.test(n) &&
      !/^(GD|HA)8888[0-9]{5}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    var p = n.length;
    if (p === 5) {
     var I = n.substr(0, 2),
      A = parseInt(n.substr(2), 10);
     return {
      meta: {},
      valid: (I === 'GD' && A < 500) || (I === 'HA' && A >= 500),
     };
    } else {
     if (
      p === 11 &&
      (n.substr(0, 6) === 'GD8888' || n.substr(0, 6) === 'HA8888')
     )
      return (n.substr(0, 2) === 'GD' && parseInt(n.substr(6, 3), 10) >= 500) ||
       (n.substr(0, 2) === 'HA' && parseInt(n.substr(6, 3), 10) < 500)
       ? { meta: {}, valid: !1 }
       : {
          meta: {},
          valid:
           parseInt(n.substr(6, 3), 10) % 97 === parseInt(n.substr(9, 2), 10),
         };
     if (p === 9 || p === 12) {
      for (var S = [8, 7, 6, 5, 4, 3, 2, 10, 1], M = 0, N = 0; N < 9; N++)
       M += parseInt(n.charAt(N), 10) * S[N];
      M = M % 97;
      var q =
       parseInt(n.substr(0, 3), 10) >= 100
        ? M === 0 || M === 42 || M === 55
        : M === 0;
      return { meta: {}, valid: q };
     }
    }
    return { meta: {}, valid: !0 };
   }
   function X(k) {
    var n = k;
    if (
     (/^(GR|EL)[0-9]{9}$/.test(n) && (n = n.substr(2)), !/^[0-9]{9}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    n.length === 8 && (n = '0'.concat(n));
    for (var p = [256, 128, 64, 32, 16, 8, 4, 2], I = 0, A = 0; A < 8; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return (
     (I = (I % 11) % 10), { meta: {}, valid: ''.concat(I) === n.substr(8, 1) }
    );
   }
   var re = h.algorithms.mod11And10;
   function te(k) {
    var n = k;
    return (
     /^HR[0-9]{11}$/.test(n) && (n = n.substr(2)),
     /^[0-9]{11}$/.test(n)
      ? { meta: {}, valid: re(n) }
      : { meta: {}, valid: !1 }
    );
   }
   function ce(k) {
    var n = k;
    if ((/^HU[0-9]{8}$/.test(n) && (n = n.substr(2)), !/^[0-9]{8}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = [9, 7, 3, 1, 9, 7, 3, 1], I = 0, A = 0; A < 8; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return { meta: {}, valid: I % 10 === 0 };
   }
   function ue(k) {
    var n = k;
    if (
     (/^IE[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(n) && (n = n.substr(2)),
     !/^[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    var p = function (I) {
     for (var A = I; A.length < 7; ) A = '0'.concat(A);
     for (var S = 'WABCDEFGHIJKLMNOPQRSTUV', M = 0, N = 0; N < 7; N++)
      M += parseInt(A.charAt(N), 10) * (8 - N);
     return (M += 9 * S.indexOf(A.substr(7))), S[M % 23];
    };
    return /^[0-9]+$/.test(n.substr(0, 7))
     ? {
        meta: {},
        valid: n.charAt(7) === p(''.concat(n.substr(0, 7)).concat(n.substr(8))),
       }
     : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(n.charAt(1)) !== -1
       ? {
          meta: {},
          valid:
           n.charAt(7) === p(''.concat(n.substr(2, 5)).concat(n.substr(0, 1))),
         }
       : { meta: {}, valid: !0 };
   }
   function ae(k) {
    var n = k;
    return (
     /^IS[0-9]{5,6}$/.test(n) && (n = n.substr(2)),
     { meta: {}, valid: /^[0-9]{5,6}$/.test(n) }
    );
   }
   var me = h.algorithms.luhn;
   function b(k) {
    var n = k;
    if ((/^IT[0-9]{11}$/.test(n) && (n = n.substr(2)), !/^[0-9]{11}$/.test(n)))
     return { meta: {}, valid: !1 };
    if (parseInt(n.substr(0, 7), 10) === 0) return { meta: {}, valid: !1 };
    var p = parseInt(n.substr(7, 3), 10);
    return p < 1 || (p > 201 && p !== 999 && p !== 888)
     ? { meta: {}, valid: !1 }
     : { meta: {}, valid: me(n) };
   }
   function i(k) {
    var n = k;
    if (
     (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(n) && (n = n.substr(2)),
     !/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(n))
    )
     return { meta: {}, valid: !1 };
    var p = n.length,
     I = 0,
     A;
    for (A = 0; A < p - 1; A++) I += parseInt(n.charAt(A), 10) * (1 + (A % 9));
    var S = I % 11;
    if (S === 10)
     for (I = 0, A = 0; A < p - 1; A++)
      I += parseInt(n.charAt(A), 10) * (1 + ((A + 2) % 9));
    return (
     (S = (S % 11) % 10), { meta: {}, valid: ''.concat(S) === n.charAt(p - 1) }
    );
   }
   function v(k) {
    var n = k;
    return (
     /^LU[0-9]{8}$/.test(n) && (n = n.substring(2)),
     /^[0-9]{8}$/.test(n)
      ? {
         meta: {},
         valid:
          parseInt(n.substring(0, 6), 10) % 89 ===
          parseInt(n.substring(6, 8), 10),
        }
      : { meta: {}, valid: !1 }
    );
   }
   var y = h.utils.isValidDate;
   function C(k) {
    var n = k;
    if ((/^LV[0-9]{11}$/.test(n) && (n = n.substr(2)), !/^[0-9]{11}$/.test(n)))
     return { meta: {}, valid: !1 };
    var p = parseInt(n.charAt(0), 10),
     I = n.length,
     A = 0,
     S = [],
     M;
    if (p > 3) {
     for (A = 0, S = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], M = 0; M < I; M++)
      A += parseInt(n.charAt(M), 10) * S[M];
     return (A = A % 11), { meta: {}, valid: A === 3 };
    } else {
     var N = parseInt(n.substr(0, 2), 10),
      q = parseInt(n.substr(2, 2), 10),
      Y = parseInt(n.substr(4, 2), 10);
     if (((Y = Y + 1800 + parseInt(n.charAt(6), 10) * 100), !y(Y, q, N)))
      return { meta: {}, valid: !1 };
     for (A = 0, S = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], M = 0; M < I - 1; M++)
      A += parseInt(n.charAt(M), 10) * S[M];
     return (
      (A = ((A + 1) % 11) % 10),
      { meta: {}, valid: ''.concat(A) === n.charAt(I - 1) }
     );
    }
   }
   function j(k) {
    var n = k;
    if ((/^MT[0-9]{8}$/.test(n) && (n = n.substr(2)), !/^[0-9]{8}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = [3, 4, 6, 7, 8, 9, 10, 1], I = 0, A = 0; A < 8; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return { meta: {}, valid: I % 37 === 0 };
   }
   var T = h.algorithms.mod97And10;
   function D(k) {
    if (k.length < 8) return { meta: {}, valid: !1 };
    var n = k;
    if (
     (n.length === 8 && (n = '0'.concat(n)),
     !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    if (((n = n.replace(/\./g, '')), parseInt(n, 10) === 0))
     return { meta: {}, valid: !1 };
    for (var p = 0, I = n.length, A = 0; A < I - 1; A++)
     p += (9 - A) * parseInt(n.charAt(A), 10);
    return (
     (p = p % 11),
     p === 10 && (p = 0),
     { meta: {}, valid: ''.concat(p) === n.charAt(I - 1) }
    );
   }
   function B(k) {
    var n = k;
    if (
     (/^NL[0-9]{9}B[0-9]{2}$/.test(n) && (n = n.substr(2)),
     !/^[0-9]{9}B[0-9]{2}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    var p = n.substr(0, 9);
    return { meta: {}, valid: D(p).valid || T('NL'.concat(n)) };
   }
   function Z(k) {
    var n = k;
    if ((/^NO[0-9]{9}$/.test(n) && (n = n.substr(2)), !/^[0-9]{9}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = [3, 2, 7, 6, 5, 4, 3, 2], I = 0, A = 0; A < 8; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return (
     (I = 11 - (I % 11)),
     I === 11 && (I = 0),
     { meta: {}, valid: ''.concat(I) === n.substr(8, 1) }
    );
   }
   function Q(k) {
    var n = k;
    if ((/^PL[0-9]{10}$/.test(n) && (n = n.substr(2)), !/^[0-9]{10}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], I = 0, A = 0; A < 10; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return { meta: {}, valid: I % 11 === 0 };
   }
   function ee(k) {
    var n = k;
    if ((/^PT[0-9]{9}$/.test(n) && (n = n.substr(2)), !/^[0-9]{9}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = [9, 8, 7, 6, 5, 4, 3, 2], I = 0, A = 0; A < 8; A++)
     I += parseInt(n.charAt(A), 10) * p[A];
    return (
     (I = 11 - (I % 11)),
     I > 9 && (I = 0),
     { meta: {}, valid: ''.concat(I) === n.substr(8, 1) }
    );
   }
   function se(k) {
    var n = k;
    if (
     (/^RO[1-9][0-9]{1,9}$/.test(n) && (n = n.substr(2)),
     !/^[1-9][0-9]{1,9}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    for (
     var p = n.length,
      I = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - p),
      A = 0,
      S = 0;
     S < p - 1;
     S++
    )
     A += parseInt(n.charAt(S), 10) * I[S];
    return (
     (A = ((10 * A) % 11) % 10),
     { meta: {}, valid: ''.concat(A) === n.substr(p - 1, 1) }
    );
   }
   function ge(k) {
    var n = k;
    if ((/^RS[0-9]{9}$/.test(n) && (n = n.substr(2)), !/^[0-9]{9}$/.test(n)))
     return { meta: {}, valid: !1 };
    for (var p = 10, I = 0, A = 0; A < 8; A++)
     (I = (parseInt(n.charAt(A), 10) + p) % 10),
      I === 0 && (I = 10),
      (p = (2 * I) % 11);
    return { meta: {}, valid: (p + parseInt(n.substr(8, 1), 10)) % 10 === 1 };
   }
   function $e(k) {
    var n = k;
    if (
     (/^RU([0-9]{10}|[0-9]{12})$/.test(n) && (n = n.substr(2)),
     !/^([0-9]{10}|[0-9]{12})$/.test(n))
    )
     return { meta: {}, valid: !1 };
    var p = 0;
    if (n.length === 10) {
     var I = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      A = 0;
     for (p = 0; p < 10; p++) A += parseInt(n.charAt(p), 10) * I[p];
     return (
      (A = A % 11),
      A > 9 && (A = A % 10),
      { meta: {}, valid: ''.concat(A) === n.substr(9, 1) }
     );
    } else if (n.length === 12) {
     var S = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      M = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      N = 0,
      q = 0;
     for (p = 0; p < 11; p++)
      (N += parseInt(n.charAt(p), 10) * S[p]),
       (q += parseInt(n.charAt(p), 10) * M[p]);
     return (
      (N = N % 11),
      N > 9 && (N = N % 10),
      (q = q % 11),
      q > 9 && (q = q % 10),
      {
       meta: {},
       valid:
        ''.concat(N) === n.substr(10, 1) && ''.concat(q) === n.substr(11, 1),
      }
     );
    }
    return { meta: {}, valid: !0 };
   }
   var Ae = h.algorithms.luhn;
   function Rt(k) {
    var n = k;
    return (
     /^SE[0-9]{10}01$/.test(n) && (n = n.substr(2)),
     /^[0-9]{10}01$/.test(n)
      ? ((n = n.substr(0, 10)), { meta: {}, valid: Ae(n) })
      : { meta: {}, valid: !1 }
    );
   }
   function _t(k) {
    var n = k.match(/^(SI)?([1-9][0-9]{7})$/);
    if (!n) return { meta: {}, valid: !1 };
    for (
     var p = n[1] ? k.substr(2) : k, I = [8, 7, 6, 5, 4, 3, 2], A = 0, S = 0;
     S < 7;
     S++
    )
     A += parseInt(p.charAt(S), 10) * I[S];
    return (
     (A = 11 - (A % 11)),
     A === 10 && (A = 0),
     { meta: {}, valid: ''.concat(A) === p.substr(7, 1) }
    );
   }
   function Ht(k) {
    var n = k;
    return (
     /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(n) && (n = n.substr(2)),
     /^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(n)
      ? { meta: {}, valid: parseInt(n, 10) % 11 === 0 }
      : { meta: {}, valid: !1 }
    );
   }
   function Tt(k) {
    var n = k;
    if (
     (/^VE[VEJPG][0-9]{9}$/.test(n) && (n = n.substr(2)),
     !/^[VEJPG][0-9]{9}$/.test(n))
    )
     return { meta: {}, valid: !1 };
    for (
     var p = { E: 8, G: 20, J: 12, P: 16, V: 4 },
      I = [3, 2, 7, 6, 5, 4, 3, 2],
      A = p[n.charAt(0)],
      S = 0;
     S < 8;
     S++
    )
     A += parseInt(n.charAt(S + 1), 10) * I[S];
    return (
     (A = 11 - (A % 11)),
     (A === 11 || A === 10) && (A = 0),
     { meta: {}, valid: ''.concat(A) === n.substr(9, 1) }
    );
   }
   function Mt(k) {
    var n = k;
    return (
     /^ZA4[0-9]{9}$/.test(n) && (n = n.substr(2)),
     { meta: {}, valid: /^4[0-9]{9}$/.test(n) }
    );
   }
   var Nt = h.utils.format,
    Pt = h.utils.removeUndefined;
   function Lt() {
    var k = [
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
     validate: function (n) {
      var p = n.value;
      if (p === '') return { valid: !0 };
      var I = Object.assign({}, { message: '' }, Pt(n.options)),
       A = p.substr(0, 2);
      if (
       (typeof I.country == 'function'
        ? (A = I.country.call(this))
        : (A = I.country),
       k.indexOf(A) === -1)
      )
       return { valid: !0 };
      var S = { meta: {}, valid: !0 };
      switch (A.toLowerCase()) {
       case 'ar':
        S = c(p);
        break;
       case 'at':
        S = f(p);
        break;
       case 'be':
        S = u(p);
        break;
       case 'bg':
        S = a(p);
        break;
       case 'br':
        S = t(p);
        break;
       case 'ch':
        S = e(p);
        break;
       case 'cy':
        S = r(p);
        break;
       case 'cz':
        S = l(p);
        break;
       case 'de':
        S = E(p);
        break;
       case 'dk':
        S = O(p);
        break;
       case 'ee':
        S = F(p);
        break;
       case 'el':
        S = X(p);
        break;
       case 'es':
        S = R(p);
        break;
       case 'fi':
        S = U(p);
        break;
       case 'fr':
        S = G(p);
        break;
       case 'gb':
        S = J(p);
        break;
       case 'gr':
        S = X(p);
        break;
       case 'hr':
        S = te(p);
        break;
       case 'hu':
        S = ce(p);
        break;
       case 'ie':
        S = ue(p);
        break;
       case 'is':
        S = ae(p);
        break;
       case 'it':
        S = b(p);
        break;
       case 'lt':
        S = i(p);
        break;
       case 'lu':
        S = v(p);
        break;
       case 'lv':
        S = C(p);
        break;
       case 'mt':
        S = j(p);
        break;
       case 'nl':
        S = B(p);
        break;
       case 'no':
        S = Z(p);
        break;
       case 'pl':
        S = Q(p);
        break;
       case 'pt':
        S = ee(p);
        break;
       case 'ro':
        S = se(p);
        break;
       case 'rs':
        S = ge(p);
        break;
       case 'ru':
        S = $e(p);
        break;
       case 'se':
        S = Rt(p);
        break;
       case 'si':
        S = _t(p);
        break;
       case 'sk':
        S = Ht(p);
        break;
       case 've':
        S = Tt(p);
        break;
       case 'za':
        S = Mt(p);
        break;
      }
      var M = Nt(
       n.l10n && n.l10n.vat ? I.message || n.l10n.vat.country : I.message,
       n.l10n && n.l10n.vat && n.l10n.vat.countries
        ? n.l10n.vat.countries[A.toUpperCase()]
        : A.toUpperCase(),
      );
      return Object.assign({}, { message: M }, S);
     },
    };
   }
   return (kt.vat = Lt), kt;
  }
  is.exports = ji();
  var Fi = is.exports,
   ls = { exports: {} },
   jt = {},
   ds;
  function wi() {
   if (ds) return jt;
   ds = 1;
   function h() {
    return {
     validate: function (c) {
      if (c.value === '') return { valid: !0 };
      if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(c.value))
       return { valid: !1 };
      for (
       var f = c.value.toUpperCase(),
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
        a = f.length,
        t = 0,
        e = 0;
       e < a;
       e++
      )
       t += u[''.concat(f.charAt(e))] * o[e];
      var r = ''.concat(t % 11);
      return r === '10' && (r = 'X'), { valid: r === f.charAt(8) };
     },
    };
   }
   return (jt.vin = h), jt;
  }
  ls.exports = wi();
  var Ri = ls.exports,
   cs = { exports: {} },
   Ft = {},
   us;
  function _i() {
   if (us) return Ft;
   us = 1;
   var h = P,
    c = h.utils.format,
    f = h.utils.removeUndefined;
   function u() {
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
     ],
     a = function (t) {
      for (
       var e = '[ABCDEFGHIJKLMNOPRSTUWYZ]',
        r = '[ABCDEFGHKLMNOPQRSTUVWXY]',
        s = '[ABCDEFGHJKPMNRSTUVWXY]',
        l = '[ABEHMNPRVWXY]',
        $ = '[ABDEFGHJLNPQRSTUWXYZ]',
        E = [
         new RegExp(
          '^('
           .concat(e, '{1}')
           .concat(r, '?[0-9]{1,2})(\\s*)([0-9]{1}')
           .concat($, '{2})$'),
          'i',
         ),
         new RegExp(
          '^('
           .concat(e, '{1}[0-9]{1}')
           .concat(s, '{1})(\\s*)([0-9]{1}')
           .concat($, '{2})$'),
          'i',
         ),
         new RegExp(
          '^('
           .concat(e, '{1}')
           .concat(r, '{1}?[0-9]{1}')
           .concat(l, '{1})(\\s*)([0-9]{1}')
           .concat($, '{2})$'),
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
        ],
        O = 0,
        F = E;
       O < F.length;
       O++
      ) {
       var R = F[O];
       if (R.test(t)) return !0;
      }
      return !1;
     };
    return {
     validate: function (t) {
      var e = Object.assign({}, { message: '' }, f(t.options));
      if (t.value === '' || !e.country) return { valid: !0 };
      var r = t.value.substr(0, 2);
      if (
       (typeof e.country == 'function'
        ? (r = e.country.call(this))
        : (r = e.country),
       !r || o.indexOf(r.toUpperCase()) === -1)
      )
       return { valid: !0 };
      var s = !1;
      switch (((r = r.toUpperCase()), r)) {
       case 'AT':
        s = /^([1-9]{1})(\d{3})$/.test(t.value);
        break;
       case 'BG':
        s = /^([1-9]{1}[0-9]{3})$/.test(t.value);
        break;
       case 'BR':
        s = /^(\d{2})([.]?)(\d{3})([-]?)(\d{3})$/.test(t.value);
        break;
       case 'CA':
        s =
         /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(
          t.value,
         );
        break;
       case 'CH':
        s = /^([1-9]{1})(\d{3})$/.test(t.value);
        break;
       case 'CZ':
        s = /^(\d{3})([ ]?)(\d{2})$/.test(t.value);
        break;
       case 'DE':
        s = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(t.value);
        break;
       case 'DK':
        s = /^(DK(-|\s)?)?\d{4}$/i.test(t.value);
        break;
       case 'ES':
        s = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(t.value);
        break;
       case 'FR':
        s = /^[0-9]{5}$/i.test(t.value);
        break;
       case 'GB':
        s = a(t.value);
        break;
       case 'IN':
        s = /^\d{3}\s?\d{3}$/.test(t.value);
        break;
       case 'IE':
        s = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(
         t.value,
        );
        break;
       case 'IT':
        s = /^(I-|IT-)?\d{5}$/i.test(t.value);
        break;
       case 'MA':
        s = /^[1-9][0-9]{4}$/i.test(t.value);
        break;
       case 'NL':
        s = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(t.value);
        break;
       case 'PL':
        s = /^[0-9]{2}-[0-9]{3}$/.test(t.value);
        break;
       case 'PT':
        s = /^[1-9]\d{3}-\d{3}$/.test(t.value);
        break;
       case 'RO':
        s = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(t.value);
        break;
       case 'RU':
        s = /^[0-9]{6}$/i.test(t.value);
        break;
       case 'SE':
        s = /^(S-)?\d{3}\s?\d{2}$/i.test(t.value);
        break;
       case 'SG':
        s = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(
         t.value,
        );
        break;
       case 'SK':
        s = /^(\d{3})([ ]?)(\d{2})$/.test(t.value);
        break;
       case 'US':
       default:
        s = /^\d{4,5}([-]?\d{4})?$/.test(t.value);
        break;
      }
      return {
       message: c(
        t.l10n && t.l10n.zipCode
         ? e.message || t.l10n.zipCode.country
         : e.message,
        t.l10n && t.l10n.zipCode && t.l10n.zipCode.countries
         ? t.l10n.zipCode.countries[r]
         : r,
       ),
       valid: s,
      };
     },
    };
   }
   return (Ft.zipCode = u), Ft;
  }
  cs.exports = _i();
  var Hi = cs.exports,
   Ti = {
    Alias: ps.Alias,
    Aria: gs.Aria,
    Declarative: As.Declarative,
    DefaultSubmit: Es.DefaultSubmit,
    Dependency: Is.Dependency,
    Excluded: Cs.Excluded,
    FieldStatus: Vs.FieldStatus,
    Framework: js.Framework,
    Icon: ws.Icon,
    Message: ir.Message,
    Sequence: _s.Sequence,
    SubmitButton: Ts.SubmitButton,
    Tooltip: Ns.Tooltip,
    Trigger: Ls.Trigger,
   },
   wt = {
    between: Zs.between,
    blank: Bs.blank,
    callback: Gs.callback,
    choice: Ys.choice,
    creditCard: Js.creditCard,
    date: Ws.date,
    different: en.different,
    digits: rn.digits,
    emailAddress: sn.emailAddress,
    file: on.file,
    greaterThan: dn.greaterThan,
    identical: un.identical,
    integer: fn.integer,
    ip: pn.ip,
    lessThan: gn.lessThan,
    notEmpty: An.notEmpty,
    numeric: En.numeric,
    promise: In.promise,
    regexp: Cn.regexp,
    remote: Vn.remote,
    stringCase: kn.stringCase,
    stringLength: Fn.stringLength,
    uri: Rn.uri,
    base64: Hn.base64,
    bic: Mn.bic,
    color: Pn.color,
    cusip: Dn.cusip,
    ean: Un.ean,
    ein: qn.ein,
    grid: Kn.grid,
    hex: zn.hex,
    iban: Xn.iban,
    id: Qn.id,
    imei: ti.imei,
    imo: ai.imo,
    isbn: ni.isbn,
    isin: oi.isin,
    ismn: di.ismn,
    issn: ui.issn,
    mac: fi.mac,
    meid: pi.meid,
    phone: gi.phone,
    rtn: Ai.rtn,
    sedol: Ei.sedol,
    siren: Ii.siren,
    siret: Ci.siret,
    step: Vi.step,
    uuid: ki.uuid,
    vat: Fi.vat,
    vin: Ri.vin,
    zipCode: Hi.zipCode,
   },
   Mi = function (h, c) {
    var f = P.formValidation(h, c);
    return (
     Object.keys(wt).forEach(function (u) {
      return f.registerValidator(u, wt[u]);
     }),
     f
    );
   };
  (ne.Plugin = P.Plugin),
   (ne.algorithms = P.algorithms),
   (ne.formValidation = Mi),
   (ne.plugins = Ti),
   (ne.utils = P.utils),
   (ne.validators = wt);
 });
});
export default Li();
