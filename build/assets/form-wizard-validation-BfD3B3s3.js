(function () {
 const r = $('.select2'),
  l = $('.selectpicker'),
  o = document.querySelector('#wizard-validation');
 if (typeof o !== void 0 && o !== null) {
  const t = o.querySelector('#wizard-validation-form'),
   s = t.querySelector('#account-details-validation'),
   d = t.querySelector('#personal-info-validation'),
   m = t.querySelector('#social-links-validation'),
   c = [].slice.call(t.querySelectorAll('.btn-next')),
   u = [].slice.call(t.querySelectorAll('.btn-prev')),
   e = new Stepper(o, { linear: !0 }),
   g = FormValidation.formValidation(s, {
    fields: {
     formValidationUsername: {
      validators: {
       notEmpty: { message: 'نام را وارد کنید.' },
       stringLength: {
        min: 6,
        max: 30,
        message: 'نام باید بین 6 تا 30 کارکتر باشد',
       },
       regexp: {
        regexp: /^[a-zA-Z0-9 ]+$/,
        message: 'نام فقط باید شامل حروف انگلیسی و اعداد و فاصله باشد',
       },
      },
     },
     formValidationEmail: {
      validators: {
       notEmpty: { message: 'ایمیل اجباری است' },
       emailAddress: { message: 'فرمت ایمیل صحیح نیست' },
      },
     },
     formValidationPass: {
      validators: { notEmpty: { message: 'پسورد اجباری است' } },
     },
     formValidationConfirmPass: {
      validators: {
       notEmpty: { message: 'تایید پسورد اجباری است' },
       identical: {
        compare: function () {
         return s.querySelector('[name="formValidationPass"]').value;
        },
        message: 'پسورد و تایید پسورد یکسان نیستند',
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
    init: (a) => {
     a.on('plugins.message.placed', function (i) {
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
   n = FormValidation.formValidation(d, {
    fields: {
     formValidationFirstName: {
      validators: { notEmpty: { message: 'نام کوچک الزامی است' } },
     },
     formValidationLastName: {
      validators: { notEmpty: { message: 'نام خانوادگی الزامی است' } },
     },
     formValidationCountry: {
      validators: { notEmpty: { message: 'کشور الزامی است' } },
     },
     formValidationLanguage: {
      validators: { notEmpty: { message: 'زبان الزامی است' } },
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
   });
  l.length &&
   l.each(function () {
    var a = $(this);
    a.selectpicker().on('change', function () {
     n.revalidateField('formValidationLanguage');
    });
   }),
   r.length &&
    r.each(function () {
     var a = $(this);
     a.wrap('<div class="position-relative"></div>'),
      a
       .select2({ placeholder: 'انتخاب کشور', dropdownParent: a.parent() })
       .on('change.select2', function () {
        n.revalidateField('formValidationCountry');
       });
    });
  const p = FormValidation.formValidation(m, {
   fields: {
    formValidationTwitter: {
     validators: {
      notEmpty: { message: 'لینک توییتر الزامی است' },
      uri: { message: 'فرمت لینک صحیح نیست' },
     },
    },
    formValidationFacebook: {
     validators: {
      notEmpty: { message: 'لینک فیسبوک الزامی است' },
      uri: { message: 'فرمت لینک صحیح نیست' },
     },
    },
    formValidationGoogle: {
     validators: {
      notEmpty: { message: 'لینک گوگل الزامی است' },
      uri: { message: 'فرمت لینک صحیح نیست' },
     },
    },
    formValidationLinkedIn: {
     validators: {
      notEmpty: { message: 'لینک لینکدین الزامی است' },
      uri: { message: 'فرمت لینک صحیح نیست' },
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
   alert('ثبت شد..!!');
  });
  c.forEach((a) => {
   a.addEventListener('click', (i) => {
    switch (e._currentIndex) {
     case 0:
      g.validate();
      break;
     case 1:
      n.validate();
      break;
     case 2:
      p.validate();
      break;
    }
   });
  }),
   u.forEach((a) => {
    a.addEventListener('click', (i) => {
     switch (e._currentIndex) {
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
