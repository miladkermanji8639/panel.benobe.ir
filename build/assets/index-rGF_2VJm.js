var P = (o, a) => () => (a || o((a = { exports: {} }).exports, a), a.exports);
var F = P((I, h) => {
 (function (o, a) {
  typeof I == 'object' && typeof h < 'u'
   ? (h.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.MandatoryIcon = a(o.FormValidation)));
 })(void 0, function (o) {
  var a = function (l, n) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var i in t)
       Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
     }),
    a(l, n)
   );
  };
  function _(l, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   a(l, n);
   function e() {
    this.constructor = l;
   }
   l.prototype =
    n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  }
  var r = o.utils.classSet,
   C = (function (l) {
    _(n, l);
    function n(e) {
     var t = l.call(this, e) || this;
     return (
      (t.removedIcons = {
       Invalid: '',
       NotValidated: '',
       Valid: '',
       Validating: '',
      }),
      (t.icons = new Map()),
      (t.elementValidatingHandler = t.onElementValidating.bind(t)),
      (t.elementValidatedHandler = t.onElementValidated.bind(t)),
      (t.elementNotValidatedHandler = t.onElementNotValidated.bind(t)),
      (t.iconPlacedHandler = t.onIconPlaced.bind(t)),
      (t.iconSetHandler = t.onIconSet.bind(t)),
      t
     );
    }
    return (
     (n.prototype.install = function () {
      this.core
       .on('core.element.validating', this.elementValidatingHandler)
       .on('core.element.validated', this.elementValidatedHandler)
       .on('core.element.notvalidated', this.elementNotValidatedHandler)
       .on('plugins.icon.placed', this.iconPlacedHandler)
       .on('plugins.icon.set', this.iconSetHandler);
     }),
     (n.prototype.uninstall = function () {
      this.icons.clear(),
       this.core
        .off('core.element.validating', this.elementValidatingHandler)
        .off('core.element.validated', this.elementValidatedHandler)
        .off('core.element.notvalidated', this.elementNotValidatedHandler)
        .off('plugins.icon.placed', this.iconPlacedHandler)
        .off('plugins.icon.set', this.iconSetHandler);
     }),
     (n.prototype.onEnabled = function () {
      var e = this;
      this.icons.forEach(function (t, i, d) {
       var s;
       r(i, ((s = {}), (s[e.opts.icon] = !0), s));
      });
     }),
     (n.prototype.onDisabled = function () {
      var e = this;
      this.icons.forEach(function (t, i, d) {
       var s;
       r(i, ((s = {}), (s[e.opts.icon] = !1), s));
      });
     }),
     (n.prototype.onIconPlaced = function (e) {
      var t,
       i = this,
       d = this.core.getFields()[e.field].validators,
       s = this.core.getElements(e.field);
      if (d && d.notEmpty && d.notEmpty.enabled !== !1 && s.length) {
       this.icons.set(e.element, e.iconElement);
       for (
        var p = s[0].getAttribute('type'),
         u = p ? p.toLowerCase() : '',
         H = u === 'checkbox' || u === 'radio' ? [s[0]] : s,
         c = 0,
         v = H;
        c < v.length;
        c++
       ) {
        var S = v[c];
        this.core.getElementValue(e.field, S) === '' &&
         r(e.iconElement, ((t = {}), (t[this.opts.icon] = this.isEnabled), t));
       }
      }
      this.iconClasses = e.classes;
      var N = this.opts.icon.split(' '),
       m = {
        Invalid: this.iconClasses.invalid
         ? this.iconClasses.invalid.split(' ')
         : [],
        Valid: this.iconClasses.valid ? this.iconClasses.valid.split(' ') : [],
        Validating: this.iconClasses.validating
         ? this.iconClasses.validating.split(' ')
         : [],
       };
      Object.keys(m).forEach(function (V) {
       for (var g = [], f = 0, y = N; f < y.length; f++) {
        var E = y[f];
        m[V].indexOf(E) === -1 && g.push(E);
       }
       i.removedIcons[V] = g.join(' ');
      });
     }),
     (n.prototype.onElementValidating = function (e) {
      this.updateIconClasses(e.element, 'Validating');
     }),
     (n.prototype.onElementValidated = function (e) {
      this.updateIconClasses(e.element, e.valid ? 'Valid' : 'Invalid');
     }),
     (n.prototype.onElementNotValidated = function (e) {
      this.updateIconClasses(e.element, 'NotValidated');
     }),
     (n.prototype.updateIconClasses = function (e, t) {
      var i,
       d = this.icons.get(e);
      d &&
       this.iconClasses &&
       (this.iconClasses.valid ||
        this.iconClasses.invalid ||
        this.iconClasses.validating) &&
       r(
        d,
        ((i = {}), (i[this.removedIcons[t]] = !1), (i[this.opts.icon] = !1), i),
       );
     }),
     (n.prototype.onIconSet = function (e) {
      var t,
       i = this.icons.get(e.element);
      i &&
       ((e.status === 'NotValidated' &&
        this.core.getElementValue(e.field, e.element) === '') ||
        e.status === 'Ignored') &&
       r(i, ((t = {}), (t[this.opts.icon] = this.isEnabled), t));
     }),
     n
    );
   })(o.Plugin);
  return C;
 });
});
export default F();
