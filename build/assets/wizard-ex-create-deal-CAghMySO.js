(function () {
 const n = document.querySelector('#dealDuration');
 n && n.flatpickr({ locale: 'fa', dateFormat: 'Y/m/d', mode: 'range' }),
  window.Helpers.initCustomOptionCheck();
 const o = document.querySelector('#wizard-create-deal');
 if (typeof o !== void 0 && o !== null) {
  const t = o.querySelector('#wizard-create-deal-form'),
   s = t.querySelector('#deal-type'),
   d = t.querySelector('#deal-details'),
   c = t.querySelector('#deal-usage'),
   u = t.querySelector('#review-complete'),
   m = [].slice.call(t.querySelectorAll('.btn-next')),
   p = [].slice.call(t.querySelectorAll('.btn-prev'));
  let e = new Stepper(o, { linear: !0 });
  const l = FormValidation.formValidation(s, {
    fields: {
     dealAmount: {
      validators: {
       notEmpty: { message: 'لطفا مبلغ را وارد کنید' },
       numeric: { message: 'ورودی عددی باشد' },
      },
     },
     dealRegion: {
      validators: { notEmpty: { message: 'کشور را انتخاب کنید' } },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-sm-6',
     }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    e.next();
   }),
   a = $('#dealRegion');
  a.length &&
   (a.wrap('<div class="position-relative"></div>'),
   a
    .select2({ placeholder: 'کشور را انتخاب کنید', dropdownParent: a.parent() })
    .on('change.select2', function () {
     l.revalidateField('dealRegion');
    }));
  const g = FormValidation.formValidation(d, {
    fields: {
     dealTitle: {
      validators: { notEmpty: { message: 'لطفا عنوان را وارد کنید' } },
     },
     dealCode: {
      validators: {
       notEmpty: { message: 'لطفا کد معامله را وارد کنید' },
       stringLength: {
        min: 4,
        max: 10,
        message: 'کد معامله باید بین 4 تا 10 کارکتر باشد',
       },
       regexp: {
        regexp: /^[A-Z0-9]+$/,
        message: 'کد معامله باید فقط شامل حروف انگلیسی و اعداد باشد',
       },
      },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-sm-6',
     }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    e.next();
   }),
   i = $('#dealOfferedItem');
  i.length &&
   (i.wrap('<div class="position-relative"></div>'),
   i
    .select2({
     placeholder: 'یک آیتم را انتخاب کنید',
     dropdownParent: i.parent(),
    })
    .on('change.select2', function () {}));
  const w = FormValidation.formValidation(c, {
    fields: {},
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-sm-6',
     }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    e.next();
   }),
   F = FormValidation.formValidation(u, {
    fields: {},
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-md-12',
     }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    alert('ثبت شد..!!');
   });
  m.forEach((r) => {
   r.addEventListener('click', (f) => {
    switch (e._currentIndex) {
     case 0:
      l.validate();
      break;
     case 1:
      g.validate();
      break;
     case 2:
      w.validate();
      break;
     case 3:
      F.validate();
      break;
    }
   });
  }),
   p.forEach((r) => {
    r.addEventListener('click', (f) => {
     switch (e._currentIndex) {
      case 3:
       e.previous();
       break;
      case 2:
       e.previous();
       break;
      case 1:
       e.previous();
       break;
     }
    });
   });
 }
})();
