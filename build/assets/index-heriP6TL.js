var E = (i, o) => () => (o || i((o = { exports: {} }).exports, o), o.exports);
var _ = E((v, f) => {
 (function (i, o) {
  typeof v == 'object' && typeof f < 'u'
   ? (f.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Trigger = o(i.FormValidation)));
 })(void 0, function (i) {
  var o = function (a, r) {
   return (
    (o =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, e) {
       t.__proto__ = e;
      }) ||
     function (t, e) {
      for (var n in e)
       Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
     }),
    o(a, r)
   );
  };
  function m(a, r) {
   if (typeof r != 'function' && r !== null)
    throw new TypeError(
     'Class extends value ' + String(r) + ' is not a constructor or null',
    );
   o(a, r);
   function t() {
    this.constructor = a;
   }
   a.prototype =
    r === null ? Object.create(r) : ((t.prototype = r.prototype), new t());
  }
  var y = (function (a) {
   m(r, a);
   function r(t) {
    var e = a.call(this, t) || this;
    (e.handlers = []), (e.timers = new Map());
    var n = document.createElement('div');
    return (
     (e.defaultEvent = 'oninput' in n ? 'input' : 'keyup'),
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
    (r.prototype.install = function () {
     this.core
      .on('core.field.added', this.fieldAddedHandler)
      .on('core.field.removed', this.fieldRemovedHandler);
    }),
    (r.prototype.uninstall = function () {
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
    (r.prototype.prepareHandler = function (t, e) {
     var n = this;
     e.forEach(function (s) {
      var d = [];
      if (n.opts.event && n.opts.event[t] === !1) d = [];
      else if (
       n.opts.event &&
       n.opts.event[t] &&
       typeof n.opts.event[t] != 'function'
      )
       d = n.opts.event[t].split(' ');
      else if (
       typeof n.opts.event == 'string' &&
       n.opts.event !== n.defaultEvent
      )
       d = n.opts.event.split(' ');
      else {
       var l = s.getAttribute('type'),
        u = s.tagName.toLowerCase(),
        h =
         l === 'radio' || l === 'checkbox' || l === 'file' || u === 'select'
          ? 'change'
          : n.ieVersion >= 10 && s.getAttribute('placeholder')
            ? 'keyup'
            : n.defaultEvent;
       d = [h];
      }
      d.forEach(function (c) {
       var p = function (g) {
        return n.handleEvent(g, t, s);
       };
       n.handlers.push({ element: s, event: c, field: t, handler: p }),
        s.addEventListener(c, p);
      });
     });
    }),
    (r.prototype.handleEvent = function (t, e, n) {
     var s = this;
     if (
      this.isEnabled &&
      this.exceedThreshold(e, n) &&
      this.core.executeFilter('plugins-trigger-should-validate', !0, [e, n])
     ) {
      var d = function () {
        return s.core.validateElement(e, n).then(function (h) {
         s.core.emit('plugins.trigger.executed', {
          element: n,
          event: t,
          field: e,
         });
        });
       },
       l = this.opts.delay[e] || this.opts.delay;
      if (l === 0) d();
      else {
       var u = this.timers.get(n);
       u && window.clearTimeout(u),
        this.timers.set(n, window.setTimeout(d, l * 1e3));
      }
     }
    }),
    (r.prototype.onFieldAdded = function (t) {
     this.handlers
      .filter(function (e) {
       return e.field === t.field;
      })
      .forEach(function (e) {
       return e.element.removeEventListener(e.event, e.handler);
      }),
      this.prepareHandler(t.field, t.elements);
    }),
    (r.prototype.onFieldRemoved = function (t) {
     this.handlers
      .filter(function (e) {
       return e.field === t.field && t.elements.indexOf(e.element) >= 0;
      })
      .forEach(function (e) {
       return e.element.removeEventListener(e.event, e.handler);
      });
    }),
    (r.prototype.exceedThreshold = function (t, e) {
     var n =
      this.opts.threshold[t] === 0 || this.opts.threshold === 0
       ? !1
       : this.opts.threshold[t] || this.opts.threshold;
     if (!n) return !0;
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
     var d = this.core.getElementValue(t, e);
     return d.length >= n;
    }),
    r
   );
  })(i.Plugin);
  return y;
 });
});
export default _();
