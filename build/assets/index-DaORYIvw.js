var w = (a, l) => () => (l || a((l = { exports: {} }).exports, l), l.exports);
var b = w((m, f) => {
 (function (a, l) {
  typeof m == 'object' && typeof f < 'u'
   ? (f.exports = l(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], l)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.Tooltip = l(a.FormValidation)));
 })(void 0, function (a) {
  var l = function (c, o) {
   return (
    (l =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, e) {
       t.__proto__ = e;
      }) ||
     function (t, e) {
      for (var n in e)
       Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
     }),
    l(c, o)
   );
  };
  function v(c, o) {
   if (typeof o != 'function' && o !== null)
    throw new TypeError(
     'Class extends value ' + String(o) + ' is not a constructor or null',
    );
   l(c, o);
   function t() {
    this.constructor = c;
   }
   c.prototype =
    o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
  }
  var u = a.utils.classSet,
   g = (function (c) {
    v(o, c);
    function o(t) {
     var e = c.call(this, t) || this;
     return (
      (e.messages = new Map()),
      (e.opts = Object.assign({}, { placement: 'top', trigger: 'click' }, t)),
      (e.iconPlacedHandler = e.onIconPlaced.bind(e)),
      (e.validatorValidatedHandler = e.onValidatorValidated.bind(e)),
      (e.elementValidatedHandler = e.onElementValidated.bind(e)),
      (e.documentClickHandler = e.onDocumentClicked.bind(e)),
      e
     );
    }
    return (
     (o.prototype.install = function () {
      var t;
      (this.tip = document.createElement('div')),
       u(
        this.tip,
        ((t = { 'fv-plugins-tooltip': !0 }),
        (t['fv-plugins-tooltip--'.concat(this.opts.placement)] = !0),
        t),
       ),
       document.body.appendChild(this.tip),
       this.core
        .on('plugins.icon.placed', this.iconPlacedHandler)
        .on('core.validator.validated', this.validatorValidatedHandler)
        .on('core.element.validated', this.elementValidatedHandler),
       this.opts.trigger === 'click' &&
        document.addEventListener('click', this.documentClickHandler);
     }),
     (o.prototype.uninstall = function () {
      this.messages.clear(),
       document.body.removeChild(this.tip),
       this.core
        .off('plugins.icon.placed', this.iconPlacedHandler)
        .off('core.validator.validated', this.validatorValidatedHandler)
        .off('core.element.validated', this.elementValidatedHandler),
       this.opts.trigger === 'click' &&
        document.removeEventListener('click', this.documentClickHandler);
     }),
     (o.prototype.onIconPlaced = function (t) {
      var e = this;
      switch (
       (u(t.iconElement, { 'fv-plugins-tooltip-icon': !0 }), this.opts.trigger)
      ) {
       case 'hover':
        t.iconElement.addEventListener('mouseenter', function (n) {
         return e.show(t.element, n);
        }),
         t.iconElement.addEventListener('mouseleave', function (n) {
          return e.hide();
         });
        break;
       case 'click':
       default:
        t.iconElement.addEventListener('click', function (n) {
         return e.show(t.element, n);
        });
        break;
      }
     }),
     (o.prototype.onValidatorValidated = function (t) {
      if (!t.result.valid) {
       var e = t.elements,
        n = t.element.getAttribute('type'),
        i = n === 'radio' || n === 'checkbox' ? e[0] : t.element,
        h =
         typeof t.result.message == 'string'
          ? t.result.message
          : t.result.message[this.core.getLocale()];
       this.messages.set(i, h);
      }
     }),
     (o.prototype.onElementValidated = function (t) {
      if (t.valid) {
       var e = t.elements,
        n = t.element.getAttribute('type'),
        i = n === 'radio' || n === 'checkbox' ? e[0] : t.element;
       this.messages.delete(i);
      }
     }),
     (o.prototype.onDocumentClicked = function (t) {
      this.hide();
     }),
     (o.prototype.show = function (t, e) {
      if (
       this.isEnabled &&
       (e.preventDefault(), e.stopPropagation(), !!this.messages.has(t))
      ) {
       u(this.tip, { 'fv-plugins-tooltip--hide': !1 }),
        (this.tip.innerHTML =
         '<div class="fv-plugins-tooltip__content">'.concat(
          this.messages.get(t),
          '</div>',
         ));
       var n = e.target,
        i = n.getBoundingClientRect(),
        h = this.tip.getBoundingClientRect(),
        d = h.height,
        p = h.width,
        r = 0,
        s = 0;
       switch (this.opts.placement) {
        case 'bottom':
         (r = i.top + i.height), (s = i.left + i.width / 2 - p / 2);
         break;
        case 'bottom-left':
         (r = i.top + i.height), (s = i.left);
         break;
        case 'bottom-right':
         (r = i.top + i.height), (s = i.left + i.width - p);
         break;
        case 'left':
         (r = i.top + i.height / 2 - d / 2), (s = i.left - p);
         break;
        case 'right':
         (r = i.top + i.height / 2 - d / 2), (s = i.left + i.width);
         break;
        case 'top-left':
         (r = i.top - d), (s = i.left);
         break;
        case 'top-right':
         (r = i.top - d), (s = i.left + i.width - p);
         break;
        case 'top':
        default:
         (r = i.top - d), (s = i.left + i.width / 2 - p / 2);
         break;
       }
       var y =
         window.scrollY ||
         document.documentElement.scrollTop ||
         document.body.scrollTop ||
         0,
        k =
         window.scrollX ||
         document.documentElement.scrollLeft ||
         document.body.scrollLeft ||
         0;
       (r = r + y),
        (s = s + k),
        this.tip.setAttribute(
         'style',
         'top: '.concat(r, 'px; left: ').concat(s, 'px'),
        );
      }
     }),
     (o.prototype.hide = function () {
      this.isEnabled && u(this.tip, { 'fv-plugins-tooltip--hide': !0 });
     }),
     o
    );
   })(a.Plugin);
  return g;
 });
});
export default b();
