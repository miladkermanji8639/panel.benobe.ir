var f = (s, o) => () => (o || s((o = { exports: {} }).exports, o), o.exports);
var v = f((d, l) => {
 (function (s, o) {
  typeof d == 'object' && typeof l < 'u'
   ? (l.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-excluded'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-excluded'], o)
     : ((s = typeof globalThis < 'u' ? globalThis : s || self),
       (s.FormValidation = s.FormValidation || {}),
       (s.FormValidation.plugins = s.FormValidation.plugins || {}),
       (s.FormValidation.plugins.Wizard = o(
        s.FormValidation,
        s.FormValidation.plugins,
       )));
 })(void 0, function (s, o) {
  var a = function (r, e) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, i) {
       t.__proto__ = i;
      }) ||
     function (t, i) {
      for (var n in i)
       Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
     }),
    a(r, e)
   );
  };
  function h(r, e) {
   if (typeof e != 'function' && e !== null)
    throw new TypeError(
     'Class extends value ' + String(e) + ' is not a constructor or null',
    );
   a(r, e);
   function t() {
    this.constructor = r;
   }
   r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
  }
  var c = s.utils.classSet,
   S = (function (r) {
    h(e, r);
    function e(t) {
     var i = r.call(this, t) || this;
     return (
      (i.currentStep = 0),
      (i.numSteps = 0),
      (i.stepIndexes = []),
      (i.opts = Object.assign(
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
      (i.prevStepHandler = i.onClickPrev.bind(i)),
      (i.nextStepHandler = i.onClickNext.bind(i)),
      i
     );
    }
    return (
     (e.prototype.install = function () {
      var t,
       i = this;
      this.core.registerPlugin(
       e.EXCLUDED_PLUGIN,
       this.opts.isFieldExcluded
        ? new o.Excluded({ excluded: this.opts.isFieldExcluded })
        : new o.Excluded(),
      );
      var n = this.core.getFormElement();
      (this.steps = [].slice.call(n.querySelectorAll(this.opts.stepSelector))),
       (this.numSteps = this.steps.length),
       this.steps.forEach(function (u) {
        var p;
        c(u, ((p = {}), (p[i.opts.stepClass] = !0), p));
       }),
       c(this.steps[0], ((t = {}), (t[this.opts.activeStepClass] = !0), t)),
       (this.stepIndexes = Array(this.numSteps)
        .fill(0)
        .map(function (u, p) {
         return p;
        })),
       (this.prevButton =
        typeof this.opts.prevButton == 'string'
         ? this.opts.prevButton.substring(0, 1) === '#'
           ? document.getElementById(this.opts.prevButton.substring(1))
           : n.querySelector(this.opts.prevButton)
         : this.opts.prevButton),
       (this.nextButton =
        typeof this.opts.nextButton == 'string'
         ? this.opts.nextButton.substring(0, 1) === '#'
           ? document.getElementById(this.opts.nextButton.substring(1))
           : n.querySelector(this.opts.nextButton)
         : this.opts.nextButton),
       this.prevButton.addEventListener('click', this.prevStepHandler),
       this.nextButton.addEventListener('click', this.nextStepHandler);
     }),
     (e.prototype.uninstall = function () {
      this.core.deregisterPlugin(e.EXCLUDED_PLUGIN),
       this.prevButton.removeEventListener('click', this.prevStepHandler),
       this.nextButton.removeEventListener('click', this.nextStepHandler),
       (this.stepIndexes.length = 0);
     }),
     (e.prototype.getCurrentStep = function () {
      return this.currentStep;
     }),
     (e.prototype.goToPrevStep = function () {
      var t = this;
      if (this.isEnabled) {
       var i = this.currentStep - 1;
       if (!(i < 0)) {
        var n = this.opts.isStepSkipped
         ? this.stepIndexes
            .slice(0, this.currentStep)
            .reverse()
            .find(function (u, p) {
             return !t.opts.isStepSkipped({
              currentStep: t.currentStep,
              numSteps: t.numSteps,
              targetStep: u,
             });
            })
         : i;
        this.goToStep(n), this.onStepActive();
       }
      }
     }),
     (e.prototype.goToNextStep = function () {
      var t = this;
      this.isEnabled &&
       this.core.validate().then(function (i) {
        if (i === 'Valid') {
         var n = t.currentStep + 1;
         if (n >= t.numSteps) t.currentStep = t.numSteps - 1;
         else {
          var u = t.opts.isStepSkipped
           ? t.stepIndexes.slice(n, t.numSteps).find(function (p, m) {
              return !t.opts.isStepSkipped({
               currentStep: t.currentStep,
               numSteps: t.numSteps,
               targetStep: p,
              });
             })
           : n;
          (n = u), t.goToStep(n);
         }
         t.onStepActive(), t.onStepValid(), n === t.numSteps && t.onValid();
        } else i === 'Invalid' && t.onStepInvalid();
       });
     }),
     (e.prototype.goToStep = function (t) {
      var i, n;
      this.isEnabled &&
       (c(
        this.steps[this.currentStep],
        ((i = {}), (i[this.opts.activeStepClass] = !1), i),
       ),
       c(this.steps[t], ((n = {}), (n[this.opts.activeStepClass] = !0), n)),
       (this.currentStep = t));
     }),
     (e.prototype.onEnabled = function () {
      this.core.enablePlugin(e.EXCLUDED_PLUGIN);
     }),
     (e.prototype.onDisabled = function () {
      this.core.disablePlugin(e.EXCLUDED_PLUGIN);
     }),
     (e.prototype.onClickPrev = function () {
      this.goToPrevStep();
     }),
     (e.prototype.onClickNext = function () {
      this.goToNextStep();
     }),
     (e.prototype.onStepActive = function () {
      var t = { numSteps: this.numSteps, step: this.currentStep };
      this.core.emit('plugins.wizard.step.active', t),
       this.opts.onStepActive(t);
     }),
     (e.prototype.onStepValid = function () {
      var t = { numSteps: this.numSteps, step: this.currentStep };
      this.core.emit('plugins.wizard.step.valid', t), this.opts.onStepValid(t);
     }),
     (e.prototype.onStepInvalid = function () {
      var t = { numSteps: this.numSteps, step: this.currentStep };
      this.core.emit('plugins.wizard.step.invalid', t),
       this.opts.onStepInvalid(t);
     }),
     (e.prototype.onValid = function () {
      var t = { numSteps: this.numSteps };
      this.core.emit('plugins.wizard.valid', t), this.opts.onValid(t);
     }),
     (e.EXCLUDED_PLUGIN = '___wizardExcluded'),
     e
    );
   })(s.Plugin);
  return S;
 });
});
export default v();
