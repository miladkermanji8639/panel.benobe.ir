var g = (s, l) => () => (l || s((l = { exports: {} }).exports, l), l.exports);
var y = g((p, u) => {
 (function (s, l) {
  typeof p == 'object' && typeof u < 'u'
   ? (u.exports = l(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], l)
     : ((s = typeof globalThis < 'u' ? globalThis : s || self),
       (s.FormValidation = s.FormValidation || {}),
       (s.FormValidation.plugins = s.FormValidation.plugins || {}),
       (s.FormValidation.plugins.Message = l(s.FormValidation)));
 })(void 0, function (s) {
  var l = function (d, n) {
   return (
    (l =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var a in t)
       Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
     }),
    l(d, n)
   );
  };
  function h(d, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   l(d, n);
   function e() {
    this.constructor = d;
   }
   d.prototype =
    n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  }
  var m = s.utils.classSet,
   v = (function (d) {
    h(n, d);
    function n(e) {
     var t = d.call(this, e) || this;
     return (
      (t.useDefaultContainer = !1),
      (t.messages = new Map()),
      (t.defaultContainer = document.createElement('div')),
      (t.useDefaultContainer = !e || !e.container),
      (t.opts = Object.assign(
       {},
       {
        container: function (a, i) {
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
     (n.getClosestContainer = function (e, t, a) {
      for (
       var i = e;
       i && !(i === t || ((i = i.parentElement), a.test(i.className)));

      );
      return i;
     }),
     (n.prototype.install = function () {
      this.useDefaultContainer &&
       this.core.getFormElement().appendChild(this.defaultContainer),
       this.core
        .on('core.element.ignored', this.elementIgnoredHandler)
        .on('core.field.added', this.fieldAddedHandler)
        .on('core.field.removed', this.fieldRemovedHandler)
        .on('core.validator.validated', this.validatorValidatedHandler)
        .on('core.validator.notvalidated', this.validatorNotValidatedHandler);
     }),
     (n.prototype.uninstall = function () {
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
     (n.prototype.onEnabled = function () {
      this.messages.forEach(function (e, t, a) {
       m(t, {
        'fv-plugins-message-container--enabled': !0,
        'fv-plugins-message-container--disabled': !1,
       });
      });
     }),
     (n.prototype.onDisabled = function () {
      this.messages.forEach(function (e, t, a) {
       m(t, {
        'fv-plugins-message-container--enabled': !1,
        'fv-plugins-message-container--disabled': !0,
       });
      });
     }),
     (n.prototype.onFieldAdded = function (e) {
      var t = this,
       a = e.elements;
      a &&
       (a.forEach(function (i) {
        var r = t.messages.get(i);
        r && (r.parentNode.removeChild(r), t.messages.delete(i));
       }),
       this.prepareFieldContainer(e.field, a));
     }),
     (n.prototype.onFieldRemoved = function (e) {
      var t = this;
      if (!(!e.elements.length || !e.field)) {
       var a = e.elements[0].getAttribute('type'),
        i = a === 'radio' || a === 'checkbox' ? [e.elements[0]] : e.elements;
       i.forEach(function (r) {
        if (t.messages.has(r)) {
         var o = t.messages.get(r);
         o.parentNode.removeChild(o), t.messages.delete(r);
        }
       });
      }
     }),
     (n.prototype.prepareFieldContainer = function (e, t) {
      var a = this;
      if (t.length) {
       var i = t[0].getAttribute('type');
       i === 'radio' || i === 'checkbox'
        ? this.prepareElementContainer(e, t[0], t)
        : t.forEach(function (r) {
           return a.prepareElementContainer(e, r, t);
          });
      }
     }),
     (n.prototype.prepareElementContainer = function (e, t, a) {
      var i;
      if (typeof this.opts.container == 'string') {
       var r =
        this.opts.container.charAt(0) === '#'
         ? '[id="'.concat(this.opts.container.substring(1), '"]')
         : this.opts.container;
       i = this.core.getFormElement().querySelector(r);
      } else i = this.opts.container(e, t);
      var o = document.createElement('div');
      i.appendChild(o),
       m(o, {
        'fv-plugins-message-container': !0,
        'fv-plugins-message-container--enabled': this.isEnabled,
        'fv-plugins-message-container--disabled': !this.isEnabled,
       }),
       this.core.emit('plugins.message.placed', {
        element: t,
        elements: a,
        field: e,
        messageElement: o,
       }),
       this.messages.set(t, o);
     }),
     (n.prototype.getMessage = function (e) {
      return typeof e.message == 'string'
       ? e.message
       : e.message[this.core.getLocale()];
     }),
     (n.prototype.onValidatorValidated = function (e) {
      var t,
       a = e.elements,
       i = e.element.getAttribute('type'),
       r =
        (i === 'radio' || i === 'checkbox') && a.length > 0 ? a[0] : e.element;
      if (this.messages.has(r)) {
       var o = this.messages.get(r),
        c = o.querySelector(
         '[data-field="'
          .concat(e.field.replace(/"/g, '\\"'), '"][data-validator="')
          .concat(e.validator.replace(/"/g, '\\"'), '"]'),
        );
       if (!c && !e.result.valid) {
        var f = document.createElement('div');
        (f.innerHTML = this.getMessage(e.result)),
         f.setAttribute('data-field', e.field),
         f.setAttribute('data-validator', e.validator),
         this.opts.clazz && m(f, ((t = {}), (t[this.opts.clazz] = !0), t)),
         o.appendChild(f),
         this.core.emit('plugins.message.displayed', {
          element: e.element,
          field: e.field,
          message: e.result.message,
          messageElement: f,
          meta: e.result.meta,
          validator: e.validator,
         });
       } else
        c && !e.result.valid
         ? ((c.innerHTML = this.getMessage(e.result)),
           this.core.emit('plugins.message.displayed', {
            element: e.element,
            field: e.field,
            message: e.result.message,
            messageElement: c,
            meta: e.result.meta,
            validator: e.validator,
           }))
         : c && e.result.valid && o.removeChild(c);
      }
     }),
     (n.prototype.onValidatorNotValidated = function (e) {
      var t = e.elements,
       a = e.element.getAttribute('type'),
       i = a === 'radio' || a === 'checkbox' ? t[0] : e.element;
      if (this.messages.has(i)) {
       var r = this.messages.get(i),
        o = r.querySelector(
         '[data-field="'
          .concat(e.field.replace(/"/g, '\\"'), '"][data-validator="')
          .concat(e.validator.replace(/"/g, '\\"'), '"]'),
        );
       o && r.removeChild(o);
      }
     }),
     (n.prototype.onElementIgnored = function (e) {
      var t = e.elements,
       a = e.element.getAttribute('type'),
       i = a === 'radio' || a === 'checkbox' ? t[0] : e.element;
      if (this.messages.has(i)) {
       var r = this.messages.get(i),
        o = [].slice.call(
         r.querySelectorAll(
          '[data-field="'.concat(e.field.replace(/"/g, '\\"'), '"]'),
         ),
        );
       o.forEach(function (c) {
        r.removeChild(c);
       });
      }
     }),
     n
    );
   })(s.Plugin);
  return v;
 });
});
export default y();
