(function () {
 window.Helpers.initCustomOptionCheck();
 const l = document.querySelector('.flatpickr'),
  s = document.querySelector('.contact-number-mask'),
  r = $('#plCountry'),
  p = document.querySelector('#plFurnishingDetails');
 s && new Cleave(s, { phone: !0, phoneRegionCode: 'US' }),
  r &&
   (r.wrap('<div class="position-relative"></div>'),
   r.select2({ placeholder: 'انتخاب کشور', dropdownParent: r.parent() })),
  l && l.flatpickr({ locale: 'fa' });
 const u = [
  'یخچال',
  'تلویزیون',
  'وای فای',
  'ماشین لباس شویی',
  'نشیمن',
  'تخت خواب',
  'میز ناهارخوری',
  'مایکروویو',
 ];
 p &&
  new Tagify(p, {
   whitelist: u,
   maxTags: 10,
   dropdown: {
    maxItems: 20,
    classname: 'tags-inline',
    enabled: 0,
    closeOnSelect: !1,
   },
  });
 const n = document.querySelector('#wizard-property-listing');
 if (typeof n !== void 0 && n !== null) {
  const t = n.querySelector('#wizard-property-listing-form'),
   d = t.querySelector('#personal-details'),
   m = t.querySelector('#property-details'),
   g = t.querySelector('#property-features'),
   w = t.querySelector('#property-area'),
   F = t.querySelector('#price-details'),
   f = [].slice.call(t.querySelectorAll('.btn-next')),
   y = [].slice.call(t.querySelectorAll('.btn-prev')),
   e = new Stepper(n, { linear: !0 }),
   V = FormValidation.formValidation(d, {
    fields: {
     plFirstName: {
      validators: { notEmpty: { message: 'لطفا اسم کوچک خود را وارد کنید' } },
     },
     plLastName: {
      validators: {
       notEmpty: { message: 'لطفا نام خانوادگی خود را وارد کنید' },
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
    init: (o) => {
     o.on('plugins.message.placed', function (i) {
      i.element.parentElement.classList.contains('input-group') &&
       i.element.parentElement.insertAdjacentElement(
        'afterend',
        i.messageElement,
       );
     });
    },
   }).on('core.form.valid', function () {
    e.next();
   }),
   c = FormValidation.formValidation(m, {
    fields: {
     plPropertyType: {
      validators: { notEmpty: { message: 'لطفا نوع ملک را وارد کنید' } },
     },
     plZipCode: {
      validators: {
       notEmpty: { message: 'کد پستی را وارد کنید' },
       stringLength: {
        min: 4,
        max: 10,
        message: 'لطفا کد پستی بین 4 تا 10 کارکتر باشد',
       },
      },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: function (o, i) {
       switch (o) {
        case 'plAddress':
         return '.col-lg-12';
        default:
         return '.col-sm-6';
       }
      },
     }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    e.next();
   }),
   a = $('#plPropertyType');
  a.length &&
   (a.wrap('<div class="position-relative"></div>'),
   a
    .select2({ placeholder: 'انتخاب نوع ملک', dropdownParent: a.parent() })
    .on('change.select2', function () {
     c.revalidateField('plPropertyType');
    }));
  const v = FormValidation.formValidation(g, {
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
   S = FormValidation.formValidation(w, {
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
    e.next();
   }),
   b = FormValidation.formValidation(F, {
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
  f.forEach((o) => {
   o.addEventListener('click', (i) => {
    switch (e._currentIndex) {
     case 0:
      V.validate();
      break;
     case 1:
      c.validate();
      break;
     case 2:
      v.validate();
      break;
     case 3:
      S.validate();
      break;
     case 4:
      b.validate();
      break;
    }
   });
  }),
   y.forEach((o) => {
    o.addEventListener('click', (i) => {
     switch (e._currentIndex) {
      case 4:
       e.previous();
       break;
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
