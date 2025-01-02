var j = (p, d) => () => (d || p((d = { exports: {} }).exports, d), d.exports);
var x = j((y, b) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-declarative
  * @version 2.4.0
  */ (function (p, d) {
  typeof y == 'object' && typeof b < 'u'
   ? (b.exports = d(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], d)
     : (((p = typeof globalThis < 'u' ? globalThis : p || self).FormValidation =
        p.FormValidation || {}),
       (p.FormValidation.plugins = p.FormValidation.plugins || {}),
       (p.FormValidation.plugins.Declarative = d(p.FormValidation)));
 })(void 0, function (p) {
  var d = function (h, s) {
   return (
    (d =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var i in t)
       Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
     }),
    d(h, s)
   );
  };
  return (function (h) {
   function s(e) {
    var t = h.call(this, e) || this;
    return (
     (t.addedFields = new Map()),
     (t.opts = Object.assign(
      {},
      { html5Input: !1, pluginPrefix: 'data-fvp-', prefix: 'data-fv-' },
      e,
     )),
     (t.fieldAddedHandler = t.onFieldAdded.bind(t)),
     (t.fieldRemovedHandler = t.onFieldRemoved.bind(t)),
     t
    );
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = e;
     }
     d(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((i.prototype = t.prototype), new i()));
    })(s, h),
    (s.prototype.install = function () {
     var e = this;
     this.parsePlugins();
     var t = this.parseOptions();
     Object.keys(t).forEach(function (i) {
      e.addedFields.has(i) || e.addedFields.set(i, !0),
       e.core.addField(i, t[i]);
     }),
      this.core
       .on('core.field.added', this.fieldAddedHandler)
       .on('core.field.removed', this.fieldRemovedHandler);
    }),
    (s.prototype.uninstall = function () {
     this.addedFields.clear(),
      this.core
       .off('core.field.added', this.fieldAddedHandler)
       .off('core.field.removed', this.fieldRemovedHandler);
    }),
    (s.prototype.onFieldAdded = function (e) {
     var t = this,
      i = e.elements;
     i &&
      i.length !== 0 &&
      !this.addedFields.has(e.field) &&
      (this.addedFields.set(e.field, !0),
      i.forEach(function (a) {
       var l = t.parseElement(a);
       if (!t.isEmptyOption(l)) {
        var r = {
         selector: e.options.selector,
         validators: Object.assign(
          {},
          e.options.validators || {},
          l.validators,
         ),
        };
        t.core.setFieldOptions(e.field, r);
       }
      }));
    }),
    (s.prototype.onFieldRemoved = function (e) {
     e.field &&
      this.addedFields.has(e.field) &&
      this.addedFields.delete(e.field);
    }),
    (s.prototype.parseOptions = function () {
     var e = this,
      t = this.opts.prefix,
      i = {},
      a = this.core.getFields(),
      l = this.core.getFormElement();
     return (
      [].slice
       .call(l.querySelectorAll('[name], ['.concat(t, 'field]')))
       .forEach(function (r) {
        var n = e.parseElement(r);
        if (!e.isEmptyOption(n)) {
         var o =
          r.getAttribute('name') || r.getAttribute(''.concat(t, 'field'));
         i[o] = Object.assign({}, i[o], n);
        }
       }),
      Object.keys(i).forEach(function (r) {
       Object.keys(i[r].validators).forEach(function (n) {
        (i[r].validators[n].enabled = i[r].validators[n].enabled || !1),
         a[r] &&
          a[r].validators &&
          a[r].validators[n] &&
          Object.assign(i[r].validators[n], a[r].validators[n]);
       });
      }),
      Object.assign({}, a, i)
     );
    }),
    (s.prototype.createPluginInstance = function (e, t) {
     for (
      var i = e.split('.'), a = window || this, l = 0, r = i.length;
      l < r;
      l++
     )
      a = a[i[l]];
     if (typeof a != 'function')
      throw new Error('the plugin '.concat(e, " doesn't exist"));
     return new a(t);
    }),
    (s.prototype.parsePlugins = function () {
     for (
      var e,
       t = this,
       i = this.core.getFormElement(),
       a = new RegExp(
        '^'.concat(this.opts.pluginPrefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
       ),
       l = i.attributes.length,
       r = {},
       n = 0;
      n < l;
      n++
     ) {
      var o = i.attributes[n].name,
       f = i.attributes[n].value,
       c = a.exec(o);
      if (c && c.length === 4) {
       var g = this.toCamelCase(c[1]);
       r[g] = Object.assign(
        {},
        c[3]
         ? (((e = {})[this.toCamelCase(c[3])] = f), e)
         : { enabled: f === '' || f === 'true' },
        r[g],
       );
      }
     }
     Object.keys(r).forEach(function (m) {
      var u = r[m],
       O = u.enabled,
       v = u.class;
      if (O && v) {
       delete u.enabled, delete u.clazz;
       var F = t.createPluginInstance(v, u);
       t.core.registerPlugin(m, F);
      }
     });
    }),
    (s.prototype.isEmptyOption = function (e) {
     var t = e.validators;
     return Object.keys(t).length === 0 && t.constructor === Object;
    }),
    (s.prototype.parseElement = function (e) {
     for (
      var t = new RegExp(
        '^'.concat(this.opts.prefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
       ),
       i = e.attributes.length,
       a = {},
       l = e.getAttribute('type'),
       r = 0;
      r < i;
      r++
     ) {
      var n = e.attributes[r].name,
       o = e.attributes[r].value;
      if (this.opts.html5Input)
       switch (!0) {
        case n === 'minlength':
         a.stringLength = Object.assign(
          {},
          { enabled: !0, min: parseInt(o, 10) },
          a.stringLength,
         );
         break;
        case n === 'maxlength':
         a.stringLength = Object.assign(
          {},
          { enabled: !0, max: parseInt(o, 10) },
          a.stringLength,
         );
         break;
        case n === 'pattern':
         a.regexp = Object.assign({}, { enabled: !0, regexp: o }, a.regexp);
         break;
        case n === 'required':
         a.notEmpty = Object.assign({}, { enabled: !0 }, a.notEmpty);
         break;
        case n === 'type' && o === 'color':
         a.color = Object.assign({}, { enabled: !0, type: 'hex' }, a.color);
         break;
        case n === 'type' && o === 'email':
         a.emailAddress = Object.assign({}, { enabled: !0 }, a.emailAddress);
         break;
        case n === 'type' && o === 'url':
         a.uri = Object.assign({}, { enabled: !0 }, a.uri);
         break;
        case n === 'type' && o === 'range':
         a.between = Object.assign(
          {},
          {
           enabled: !0,
           max: parseFloat(e.getAttribute('max')),
           min: parseFloat(e.getAttribute('min')),
          },
          a.between,
         );
         break;
        case n === 'min' && l !== 'date' && l !== 'range':
         a.greaterThan = Object.assign(
          {},
          { enabled: !0, min: parseFloat(o) },
          a.greaterThan,
         );
         break;
        case n === 'max' && l !== 'date' && l !== 'range':
         a.lessThan = Object.assign(
          {},
          { enabled: !0, max: parseFloat(o) },
          a.lessThan,
         );
       }
      var f = t.exec(n);
      if (f && f.length === 4) {
       var c = this.toCamelCase(f[1]);
       a[c] || (a[c] = {}),
        f[3]
         ? (a[c][this.toCamelCase(f[3])] = this.normalizeValue(o))
         : (a[c].enabled === !0 && a[c].enabled === !1) ||
           (a[c].enabled = o === '' || o === 'true');
      }
     }
     return { validators: a };
    }),
    (s.prototype.normalizeValue = function (e) {
     return e === 'true' || e === '' || (e !== 'false' && e);
    }),
    (s.prototype.toUpperCase = function (e) {
     return e.charAt(1).toUpperCase();
    }),
    (s.prototype.toCamelCase = function (e) {
     return e.replace(/-./g, this.toUpperCase);
    }),
    s
   );
  })(p.Plugin);
 });
});
export default x();
