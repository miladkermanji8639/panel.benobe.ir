var E = (l, c) => () => (c || l((c = { exports: {} }).exports, c), c.exports);
var A = E((y, g) => {
 (function (l, c) {
  typeof y == 'object' && typeof g < 'u'
   ? (g.exports = c(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], c)
     : ((l = typeof globalThis < 'u' ? globalThis : l || self),
       (l.FormValidation = l.FormValidation || {}),
       (l.FormValidation.plugins = l.FormValidation.plugins || {}),
       (l.FormValidation.plugins.Declarative = c(l.FormValidation)));
 })(void 0, function (l) {
  var c = function (u, i) {
   return (
    (c =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, r) {
       e.__proto__ = r;
      }) ||
     function (e, r) {
      for (var a in r)
       Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
     }),
    c(u, i)
   );
  };
  function O(u, i) {
   if (typeof i != 'function' && i !== null)
    throw new TypeError(
     'Class extends value ' + String(i) + ' is not a constructor or null',
    );
   c(u, i);
   function e() {
    this.constructor = u;
   }
   u.prototype =
    i === null ? Object.create(i) : ((e.prototype = i.prototype), new e());
  }
  var F = (function (u) {
   O(i, u);
   function i(e) {
    var r = u.call(this, e) || this;
    return (
     (r.addedFields = new Map()),
     (r.opts = Object.assign(
      {},
      { html5Input: !1, pluginPrefix: 'data-fvp-', prefix: 'data-fv-' },
      e,
     )),
     (r.fieldAddedHandler = r.onFieldAdded.bind(r)),
     (r.fieldRemovedHandler = r.onFieldRemoved.bind(r)),
     r
    );
   }
   return (
    (i.prototype.install = function () {
     var e = this;
     this.parsePlugins();
     var r = this.parseOptions();
     Object.keys(r).forEach(function (a) {
      e.addedFields.has(a) || e.addedFields.set(a, !0),
       e.core.addField(a, r[a]);
     }),
      this.core
       .on('core.field.added', this.fieldAddedHandler)
       .on('core.field.removed', this.fieldRemovedHandler);
    }),
    (i.prototype.uninstall = function () {
     this.addedFields.clear(),
      this.core
       .off('core.field.added', this.fieldAddedHandler)
       .off('core.field.removed', this.fieldRemovedHandler);
    }),
    (i.prototype.onFieldAdded = function (e) {
     var r = this,
      a = e.elements;
     !a ||
      a.length === 0 ||
      this.addedFields.has(e.field) ||
      (this.addedFields.set(e.field, !0),
      a.forEach(function (t) {
       var o = r.parseElement(t);
       if (!r.isEmptyOption(o)) {
        var d = {
         selector: e.options.selector,
         validators: Object.assign(
          {},
          e.options.validators || {},
          o.validators,
         ),
        };
        r.core.setFieldOptions(e.field, d);
       }
      }));
    }),
    (i.prototype.onFieldRemoved = function (e) {
     e.field &&
      this.addedFields.has(e.field) &&
      this.addedFields.delete(e.field);
    }),
    (i.prototype.parseOptions = function () {
     var e = this,
      r = this.opts.prefix,
      a = {},
      t = this.core.getFields(),
      o = this.core.getFormElement(),
      d = [].slice.call(o.querySelectorAll('[name], ['.concat(r, 'field]')));
     return (
      d.forEach(function (n) {
       var s = e.parseElement(n);
       if (!e.isEmptyOption(s)) {
        var p = n.getAttribute('name') || n.getAttribute(''.concat(r, 'field'));
        a[p] = Object.assign({}, a[p], s);
       }
      }),
      Object.keys(a).forEach(function (n) {
       Object.keys(a[n].validators).forEach(function (s) {
        (a[n].validators[s].enabled = a[n].validators[s].enabled || !1),
         t[n] &&
          t[n].validators &&
          t[n].validators[s] &&
          Object.assign(a[n].validators[s], t[n].validators[s]);
       });
      }),
      Object.assign({}, t, a)
     );
    }),
    (i.prototype.createPluginInstance = function (e, r) {
     for (
      var a = e.split('.'), t = window || this, o = 0, d = a.length;
      o < d;
      o++
     )
      t = t[a[o]];
     if (typeof t != 'function')
      throw new Error('the plugin '.concat(e, " doesn't exist"));
     return new t(r);
    }),
    (i.prototype.parsePlugins = function () {
     for (
      var e,
       r = this,
       a = this.core.getFormElement(),
       t = new RegExp(
        '^'.concat(this.opts.pluginPrefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
       ),
       o = a.attributes.length,
       d = {},
       n = 0;
      n < o;
      n++
     ) {
      var s = a.attributes[n].name,
       p = a.attributes[n].value,
       f = t.exec(s);
      if (f && f.length === 4) {
       var b = this.toCamelCase(f[1]);
       d[b] = Object.assign(
        {},
        f[3]
         ? ((e = {}), (e[this.toCamelCase(f[3])] = p), e)
         : { enabled: p === '' || p === 'true' },
        d[b],
       );
      }
     }
     Object.keys(d).forEach(function (v) {
      var h = d[v],
       j = h.enabled,
       m = h.class;
      if (j && m) {
       delete h.enabled, delete h.clazz;
       var x = r.createPluginInstance(m, h);
       r.core.registerPlugin(v, x);
      }
     });
    }),
    (i.prototype.isEmptyOption = function (e) {
     var r = e.validators;
     return Object.keys(r).length === 0 && r.constructor === Object;
    }),
    (i.prototype.parseElement = function (e) {
     for (
      var r = new RegExp(
        '^'.concat(this.opts.prefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
       ),
       a = e.attributes.length,
       t = {},
       o = e.getAttribute('type'),
       d = 0;
      d < a;
      d++
     ) {
      var n = e.attributes[d].name,
       s = e.attributes[d].value;
      if (this.opts.html5Input)
       switch (!0) {
        case n === 'minlength':
         t.stringLength = Object.assign(
          {},
          { enabled: !0, min: parseInt(s, 10) },
          t.stringLength,
         );
         break;
        case n === 'maxlength':
         t.stringLength = Object.assign(
          {},
          { enabled: !0, max: parseInt(s, 10) },
          t.stringLength,
         );
         break;
        case n === 'pattern':
         t.regexp = Object.assign({}, { enabled: !0, regexp: s }, t.regexp);
         break;
        case n === 'required':
         t.notEmpty = Object.assign({}, { enabled: !0 }, t.notEmpty);
         break;
        case n === 'type' && s === 'color':
         t.color = Object.assign({}, { enabled: !0, type: 'hex' }, t.color);
         break;
        case n === 'type' && s === 'email':
         t.emailAddress = Object.assign({}, { enabled: !0 }, t.emailAddress);
         break;
        case n === 'type' && s === 'url':
         t.uri = Object.assign({}, { enabled: !0 }, t.uri);
         break;
        case n === 'type' && s === 'range':
         t.between = Object.assign(
          {},
          {
           enabled: !0,
           max: parseFloat(e.getAttribute('max')),
           min: parseFloat(e.getAttribute('min')),
          },
          t.between,
         );
         break;
        case n === 'min' && o !== 'date' && o !== 'range':
         t.greaterThan = Object.assign(
          {},
          { enabled: !0, min: parseFloat(s) },
          t.greaterThan,
         );
         break;
        case n === 'max' && o !== 'date' && o !== 'range':
         t.lessThan = Object.assign(
          {},
          { enabled: !0, max: parseFloat(s) },
          t.lessThan,
         );
         break;
       }
      var p = r.exec(n);
      if (p && p.length === 4) {
       var f = this.toCamelCase(p[1]);
       t[f] || (t[f] = {}),
        p[3]
         ? (t[f][this.toCamelCase(p[3])] = this.normalizeValue(s))
         : (t[f].enabled !== !0 || t[f].enabled !== !1) &&
           (t[f].enabled = s === '' || s === 'true');
      }
     }
     return { validators: t };
    }),
    (i.prototype.normalizeValue = function (e) {
     return e === 'true' || e === '' ? !0 : e === 'false' ? !1 : e;
    }),
    (i.prototype.toUpperCase = function (e) {
     return e.charAt(1).toUpperCase();
    }),
    (i.prototype.toCamelCase = function (e) {
     return e.replace(/-./g, this.toUpperCase);
    }),
    i
   );
  })(l.Plugin);
  return F;
 });
});
export default A();
