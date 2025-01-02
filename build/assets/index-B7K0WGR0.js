var h = (n, i) => () => (i || n((i = { exports: {} }).exports, i), i.exports);
var g = h((a, c) => {
 (function (n, i) {
  typeof a == 'object' && typeof c < 'u'
   ? (c.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Dependency = i(n.FormValidation)));
 })(void 0, function (n) {
  var i = function (o, t) {
   return (
    (i =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (r, e) {
       r.__proto__ = e;
      }) ||
     function (r, e) {
      for (var u in e)
       Object.prototype.hasOwnProperty.call(e, u) && (r[u] = e[u]);
     }),
    i(o, t)
   );
  };
  function d(o, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   i(o, t);
   function r() {
    this.constructor = o;
   }
   o.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
  }
  var p = (function (o) {
   d(t, o);
   function t(r) {
    var e = o.call(this, r) || this;
    return (
     (e.opts = r || {}),
     (e.triggerExecutedHandler = e.onTriggerExecuted.bind(e)),
     e
    );
   }
   return (
    (t.prototype.install = function () {
     this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
    }),
    (t.prototype.uninstall = function () {
     this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
    }),
    (t.prototype.onTriggerExecuted = function (r) {
     if (this.isEnabled && this.opts[r.field])
      for (
       var e = this.opts[r.field].split(' '), u = 0, s = e;
       u < s.length;
       u++
      ) {
       var l = s[u],
        f = l.trim();
       this.opts[f] && this.core.revalidateField(f);
      }
    }),
    t
   );
  })(n.Plugin);
  return p;
 });
});
export default g();
