var c = (t, s) => () => (s || t((s = { exports: {} }).exports, s), s.exports);
var m = c((d, l) => {
 (function (t, s) {
  typeof d == 'object' && typeof l < 'u'
   ? (l.exports = s(
      require('@form-validation/core'),
      require('@form-validation/plugin-alias'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-alias'], s)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Mailgun = s(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, s) {
  var a = function (o, i) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, n) {
       e.__proto__ = n;
      }) ||
     function (e, n) {
      for (var r in n)
       Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
     }),
    a(o, i)
   );
  };
  function u(o, i) {
   if (typeof i != 'function' && i !== null)
    throw new TypeError(
     'Class extends value ' + String(i) + ' is not a constructor or null',
    );
   a(o, i);
   function e() {
    this.constructor = o;
   }
   o.prototype =
    i === null ? Object.create(i) : ((e.prototype = i.prototype), new e());
  }
  var p = t.utils.removeUndefined,
   f = (function (o) {
    u(i, o);
    function i(e) {
     var n = o.call(this, e) || this;
     return (
      (n.opts = Object.assign({}, { suggestion: !1 }, p(e))),
      (n.messageDisplayedHandler = n.onMessageDisplayed.bind(n)),
      n
     );
    }
    return (
     (i.prototype.install = function () {
      this.opts.suggestion &&
       this.core.on('plugins.message.displayed', this.messageDisplayedHandler);
      var e = { mailgun: 'remote' };
      this.core
       .registerPlugin(i.ALIAS_PLUGIN, new s.Alias(e))
       .addField(this.opts.field, {
        validators: {
         mailgun: {
          crossDomain: !0,
          data: { api_key: this.opts.apiKey },
          headers: { 'Content-Type': 'application/json' },
          message: this.opts.message,
          name: 'address',
          url: 'https://api.mailgun.net/v3/address/validate',
          validKey: 'is_valid',
         },
        },
       });
     }),
     (i.prototype.uninstall = function () {
      this.opts.suggestion &&
       this.core.off('plugins.message.displayed', this.messageDisplayedHandler),
       this.core.deregisterPlugin(i.ALIAS_PLUGIN),
       this.core.removeField(this.opts.field);
     }),
     (i.prototype.onEnabled = function () {
      this.core
       .enableValidator(this.opts.field, 'mailgun')
       .enablePlugin(i.ALIAS_PLUGIN);
     }),
     (i.prototype.onDisabled = function () {
      this.core
       .disableValidator(this.opts.field, 'mailgun')
       .disablePlugin(i.ALIAS_PLUGIN);
     }),
     (i.prototype.onMessageDisplayed = function (e) {
      this.isEnabled &&
       e.field === this.opts.field &&
       e.validator === 'mailgun' &&
       e.meta &&
       e.meta.did_you_mean &&
       (e.messageElement.innerHTML = 'Did you mean '.concat(
        e.meta.did_you_mean,
        '?',
       ));
     }),
     (i.ALIAS_PLUGIN = '___mailgunAlias'),
     i
    );
   })(t.Plugin);
  return f;
 });
});
export default m();
