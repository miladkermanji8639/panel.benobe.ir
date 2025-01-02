var h = (s, o) => () => (o || s((o = { exports: {} }).exports, o), o.exports);
var S = h((d, a) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-wizard
  * @version 2.4.0
  */ (function (s, o) {
  typeof d == 'object' && typeof a < 'u'
   ? (a.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-excluded'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-excluded'], o)
     : (((s = typeof globalThis < 'u' ? globalThis : s || self).FormValidation =
        s.FormValidation || {}),
       (s.FormValidation.plugins = s.FormValidation.plugins || {}),
       (s.FormValidation.plugins.Wizard = o(
        s.FormValidation,
        s.FormValidation.plugins,
       )));
 })(void 0, function (s, o) {
  var c = function (l, n) {
    return (
     (c =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (t, e) {
        t.__proto__ = e;
       }) ||
      function (t, e) {
       for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }),
     c(l, n)
    );
   },
   u = s.utils.classSet;
  return (function (l) {
   function n(t) {
    var e = l.call(this, t) || this;
    return (
     (e.currentStep = 0),
     (e.numSteps = 0),
     (e.stepIndexes = []),
     (e.opts = Object.assign(
      {},
      {
       activeStepClass: 'fv-plugins-wizard--active',
       onStepActive: function () {},
       onStepInvalid: function () {},
       onStepValid: function () {},
       onValid: function () {},
       stepClass: 'fv-plugins-wizard--step',
      },
      t,
     )),
     (e.prevStepHandler = e.onClickPrev.bind(e)),
     (e.nextStepHandler = e.onClickNext.bind(e)),
     e
    );
   }
   return (
    (function (t, e) {
     if (typeof e != 'function' && e !== null)
      throw new TypeError(
       'Class extends value ' + String(e) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = t;
     }
     c(t, e),
      (t.prototype =
       e === null ? Object.create(e) : ((i.prototype = e.prototype), new i()));
    })(n, l),
    (n.prototype.install = function () {
     var t,
      e = this;
     this.core.registerPlugin(
      n.EXCLUDED_PLUGIN,
      this.opts.isFieldExcluded
       ? new o.Excluded({ excluded: this.opts.isFieldExcluded })
       : new o.Excluded(),
     );
     var i = this.core.getFormElement();
     (this.steps = [].slice.call(i.querySelectorAll(this.opts.stepSelector))),
      (this.numSteps = this.steps.length),
      this.steps.forEach(function (p) {
       var r;
       u(p, (((r = {})[e.opts.stepClass] = !0), r));
      }),
      u(this.steps[0], (((t = {})[this.opts.activeStepClass] = !0), t)),
      (this.stepIndexes = Array(this.numSteps)
       .fill(0)
       .map(function (p, r) {
        return r;
       })),
      (this.prevButton =
       typeof this.opts.prevButton == 'string'
        ? this.opts.prevButton.substring(0, 1) === '#'
          ? document.getElementById(this.opts.prevButton.substring(1))
          : i.querySelector(this.opts.prevButton)
        : this.opts.prevButton),
      (this.nextButton =
       typeof this.opts.nextButton == 'string'
        ? this.opts.nextButton.substring(0, 1) === '#'
          ? document.getElementById(this.opts.nextButton.substring(1))
          : i.querySelector(this.opts.nextButton)
        : this.opts.nextButton),
      this.prevButton.addEventListener('click', this.prevStepHandler),
      this.nextButton.addEventListener('click', this.nextStepHandler);
    }),
    (n.prototype.uninstall = function () {
     this.core.deregisterPlugin(n.EXCLUDED_PLUGIN),
      this.prevButton.removeEventListener('click', this.prevStepHandler),
      this.nextButton.removeEventListener('click', this.nextStepHandler),
      (this.stepIndexes.length = 0);
    }),
    (n.prototype.getCurrentStep = function () {
     return this.currentStep;
    }),
    (n.prototype.goToPrevStep = function () {
     var t = this;
     if (this.isEnabled) {
      var e = this.currentStep - 1;
      if (!(e < 0)) {
       var i = this.opts.isStepSkipped
        ? this.stepIndexes
           .slice(0, this.currentStep)
           .reverse()
           .find(function (p, r) {
            return !t.opts.isStepSkipped({
             currentStep: t.currentStep,
             numSteps: t.numSteps,
             targetStep: p,
            });
           })
        : e;
       this.goToStep(i), this.onStepActive();
      }
     }
    }),
    (n.prototype.goToNextStep = function () {
     var t = this;
     this.isEnabled &&
      this.core.validate().then(function (e) {
       if (e === 'Valid') {
        var i = t.currentStep + 1;
        i >= t.numSteps
         ? (t.currentStep = t.numSteps - 1)
         : ((i = t.opts.isStepSkipped
            ? t.stepIndexes.slice(i, t.numSteps).find(function (p, r) {
               return !t.opts.isStepSkipped({
                currentStep: t.currentStep,
                numSteps: t.numSteps,
                targetStep: p,
               });
              })
            : i),
           t.goToStep(i)),
         t.onStepActive(),
         t.onStepValid(),
         i === t.numSteps && t.onValid();
       } else e === 'Invalid' && t.onStepInvalid();
      });
    }),
    (n.prototype.goToStep = function (t) {
     var e, i;
     this.isEnabled &&
      (u(
       this.steps[this.currentStep],
       (((e = {})[this.opts.activeStepClass] = !1), e),
      ),
      u(this.steps[t], (((i = {})[this.opts.activeStepClass] = !0), i)),
      (this.currentStep = t));
    }),
    (n.prototype.onEnabled = function () {
     this.core.enablePlugin(n.EXCLUDED_PLUGIN);
    }),
    (n.prototype.onDisabled = function () {
     this.core.disablePlugin(n.EXCLUDED_PLUGIN);
    }),
    (n.prototype.onClickPrev = function () {
     this.goToPrevStep();
    }),
    (n.prototype.onClickNext = function () {
     this.goToNextStep();
    }),
    (n.prototype.onStepActive = function () {
     var t = { numSteps: this.numSteps, step: this.currentStep };
     this.core.emit('plugins.wizard.step.active', t), this.opts.onStepActive(t);
    }),
    (n.prototype.onStepValid = function () {
     var t = { numSteps: this.numSteps, step: this.currentStep };
     this.core.emit('plugins.wizard.step.valid', t), this.opts.onStepValid(t);
    }),
    (n.prototype.onStepInvalid = function () {
     var t = { numSteps: this.numSteps, step: this.currentStep };
     this.core.emit('plugins.wizard.step.invalid', t),
      this.opts.onStepInvalid(t);
    }),
    (n.prototype.onValid = function () {
     var t = { numSteps: this.numSteps };
     this.core.emit('plugins.wizard.valid', t), this.opts.onValid(t);
    }),
    (n.EXCLUDED_PLUGIN = '___wizardExcluded'),
    n
   );
  })(s.Plugin);
 });
});
export default S();
