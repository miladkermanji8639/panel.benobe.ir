var u = (n, o) => () => (o || n((o = { exports: {} }).exports, o), o.exports);
var f = u((d, r) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-mailgun
  * @version 2.4.0
  */ (function (n, o) {
  typeof d == 'object' && typeof r < 'u'
   ? (r.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-alias'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-alias'], o)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Mailgun = o(
        n.FormValidation,
        n.FormValidation.plugins,
       )));
 })(void 0, function (n, o) {
  var l = function (a, e) {
    return (
     (l =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (i, t) {
        i.__proto__ = t;
       }) ||
      function (i, t) {
       for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
      }),
     l(a, e)
    );
   },
   p = n.utils.removeUndefined;
  return (function (a) {
   function e(i) {
    var t = a.call(this, i) || this;
    return (
     (t.opts = Object.assign({}, { suggestion: !1 }, p(i))),
     (t.messageDisplayedHandler = t.onMessageDisplayed.bind(t)),
     t
    );
   }
   return (
    (function (i, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function s() {
      this.constructor = i;
     }
     l(i, t),
      (i.prototype =
       t === null ? Object.create(t) : ((s.prototype = t.prototype), new s()));
    })(e, a),
    (e.prototype.install = function () {
     this.opts.suggestion &&
      this.core.on('plugins.message.displayed', this.messageDisplayedHandler),
      this.core
       .registerPlugin(e.ALIAS_PLUGIN, new o.Alias({ mailgun: 'remote' }))
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
    (e.prototype.uninstall = function () {
     this.opts.suggestion &&
      this.core.off('plugins.message.displayed', this.messageDisplayedHandler),
      this.core.deregisterPlugin(e.ALIAS_PLUGIN),
      this.core.removeField(this.opts.field);
    }),
    (e.prototype.onEnabled = function () {
     this.core
      .enableValidator(this.opts.field, 'mailgun')
      .enablePlugin(e.ALIAS_PLUGIN);
    }),
    (e.prototype.onDisabled = function () {
     this.core
      .disableValidator(this.opts.field, 'mailgun')
      .disablePlugin(e.ALIAS_PLUGIN);
    }),
    (e.prototype.onMessageDisplayed = function (i) {
     this.isEnabled &&
      i.field === this.opts.field &&
      i.validator === 'mailgun' &&
      i.meta &&
      i.meta.did_you_mean &&
      (i.messageElement.innerHTML = 'Did you mean '.concat(
       i.meta.did_you_mean,
       '?',
      ));
    }),
    (e.ALIAS_PLUGIN = '___mailgunAlias'),
    e
   );
  })(n.Plugin);
 });
});
export default f();
