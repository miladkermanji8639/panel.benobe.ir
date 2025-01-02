var u = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var p = u((f, d) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-password-strength
  * @version 2.4.0
  */ (function (a, e) {
  typeof f == 'object' && typeof d < 'u'
   ? (d.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.PasswordStrength = e(a.FormValidation)));
 })(void 0, function (a) {
  var e = function (n, o) {
   return (
    (e =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (i, t) {
       i.__proto__ = t;
      }) ||
     function (i, t) {
      for (var r in t)
       Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
     }),
    e(n, o)
   );
  };
  return (function (n) {
   function o(i) {
    var t = n.call(this, i) || this;
    return (
     (t.opts = Object.assign(
      {},
      { minimalScore: 3, onValidated: function () {} },
      i,
     )),
     (t.validatePassword = t.checkPasswordStrength.bind(t)),
     (t.validatorValidatedHandler = t.onValidatorValidated.bind(t)),
     t
    );
   }
   return (
    (function (i, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function r() {
      this.constructor = i;
     }
     e(i, t),
      (i.prototype =
       t === null ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    })(o, n),
    (o.prototype.install = function () {
     var i;
     this.core.registerValidator(
      o.PASSWORD_STRENGTH_VALIDATOR,
      this.validatePassword,
     ),
      this.core.on('core.validator.validated', this.validatorValidatedHandler),
      this.core.addField(this.opts.field, {
       validators:
        ((i = {}),
        (i[o.PASSWORD_STRENGTH_VALIDATOR] = {
         message: this.opts.message,
         minimalScore: this.opts.minimalScore,
        }),
        i),
      });
    }),
    (o.prototype.uninstall = function () {
     this.core.off('core.validator.validated', this.validatorValidatedHandler),
      this.core.disableValidator(
       this.opts.field,
       o.PASSWORD_STRENGTH_VALIDATOR,
      );
    }),
    (o.prototype.onEnabled = function () {
     this.core.enableValidator(this.opts.field, o.PASSWORD_STRENGTH_VALIDATOR);
    }),
    (o.prototype.onDisabled = function () {
     this.core.disableValidator(this.opts.field, o.PASSWORD_STRENGTH_VALIDATOR);
    }),
    (o.prototype.checkPasswordStrength = function () {
     var i = this;
     return {
      validate: function (t) {
       var r = t.value;
       if (r === '') return { valid: !0 };
       var c = zxcvbn(r),
        s = c.score,
        l = c.feedback.warning || 'The password is weak';
       return s < i.opts.minimalScore
        ? { message: l, meta: { message: l, score: s }, valid: !1 }
        : { meta: { message: l, score: s }, valid: !0 };
      },
     };
    }),
    (o.prototype.onValidatorValidated = function (i) {
     if (
      this.isEnabled &&
      i.field === this.opts.field &&
      i.validator === o.PASSWORD_STRENGTH_VALIDATOR &&
      i.result.meta
     ) {
      var t = i.result.meta.message,
       r = i.result.meta.score;
      this.opts.onValidated(i.result.valid, t, r);
     }
    }),
    (o.PASSWORD_STRENGTH_VALIDATOR = '___PasswordStrengthValidator'),
    o
   );
  })(a.Plugin);
 });
});
export default p();
