var h = (a, o) => () => (o || a((o = { exports: {} }).exports, o), o.exports);
var v = h((u, l) => {
 (function (a, o) {
  typeof u == 'object' && typeof l < 'u'
   ? (l.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.PasswordStrength = o(a.FormValidation)));
 })(void 0, function (a) {
  var o = function (r, t) {
   return (
    (o =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, i) {
       e.__proto__ = i;
      }) ||
     function (e, i) {
      for (var n in i)
       Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
     }),
    o(r, t)
   );
  };
  function f(r, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   o(r, t);
   function e() {
    this.constructor = r;
   }
   r.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
  }
  var p = (function (r) {
   f(t, r);
   function t(e) {
    var i = r.call(this, e) || this;
    return (
     (i.opts = Object.assign(
      {},
      { minimalScore: 3, onValidated: function () {} },
      e,
     )),
     (i.validatePassword = i.checkPasswordStrength.bind(i)),
     (i.validatorValidatedHandler = i.onValidatorValidated.bind(i)),
     i
    );
   }
   return (
    (t.prototype.install = function () {
     var e;
     this.core.registerValidator(
      t.PASSWORD_STRENGTH_VALIDATOR,
      this.validatePassword,
     ),
      this.core.on('core.validator.validated', this.validatorValidatedHandler),
      this.core.addField(this.opts.field, {
       validators:
        ((e = {}),
        (e[t.PASSWORD_STRENGTH_VALIDATOR] = {
         message: this.opts.message,
         minimalScore: this.opts.minimalScore,
        }),
        e),
      });
    }),
    (t.prototype.uninstall = function () {
     this.core.off('core.validator.validated', this.validatorValidatedHandler),
      this.core.disableValidator(
       this.opts.field,
       t.PASSWORD_STRENGTH_VALIDATOR,
      );
    }),
    (t.prototype.onEnabled = function () {
     this.core.enableValidator(this.opts.field, t.PASSWORD_STRENGTH_VALIDATOR);
    }),
    (t.prototype.onDisabled = function () {
     this.core.disableValidator(this.opts.field, t.PASSWORD_STRENGTH_VALIDATOR);
    }),
    (t.prototype.checkPasswordStrength = function () {
     var e = this;
     return {
      validate: function (i) {
       var n = i.value;
       if (n === '') return { valid: !0 };
       var c = zxcvbn(n),
        s = c.score,
        d = c.feedback.warning || 'The password is weak';
       return s < e.opts.minimalScore
        ? { message: d, meta: { message: d, score: s }, valid: !1 }
        : { meta: { message: d, score: s }, valid: !0 };
      },
     };
    }),
    (t.prototype.onValidatorValidated = function (e) {
     if (
      this.isEnabled &&
      e.field === this.opts.field &&
      e.validator === t.PASSWORD_STRENGTH_VALIDATOR &&
      e.result.meta
     ) {
      var i = e.result.meta.message,
       n = e.result.meta.score;
      this.opts.onValidated(e.result.valid, i, n);
     }
    }),
    (t.PASSWORD_STRENGTH_VALIDATOR = '___PasswordStrengthValidator'),
    t
   );
  })(a.Plugin);
  return p;
 });
});
export default v();
