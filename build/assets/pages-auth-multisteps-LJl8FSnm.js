$(function () {
 var o = $('.select2');
 o.length &&
  o.each(function () {
   var n = $(this);
   n.wrap('<div class="position-relative"></div>'),
    n.select2({ placeholder: 'انتخاب استان', dropdownParent: n.parent() });
  });
});
document.addEventListener('DOMContentLoaded', function (o) {
 (function () {
  const n = document.querySelector('#multiStepsValidation');
  if (typeof n !== void 0 && n !== null) {
   const a = n.querySelector('#multiStepsForm'),
    s = a.querySelector('#accountDetailsValidation'),
    d = a.querySelector('#personalInfoValidation'),
    p = a.querySelector('#billingLinksValidation'),
    g = [].slice.call(a.querySelectorAll('.btn-next')),
    S = [].slice.call(a.querySelectorAll('.btn-prev')),
    l = document.querySelector('.multi-steps-exp-date'),
    r = document.querySelector('.multi-steps-cvv'),
    u = document.querySelector('.multi-steps-mobile'),
    m = document.querySelector('.multi-steps-pincode'),
    c = document.querySelector('.multi-steps-card');
   l && new Cleave(l, { date: !0, delimiter: '/', datePattern: ['m', 'y'] }),
    r && new Cleave(r, { numeral: !0, numeralPositiveOnly: !0 }),
    u && new Cleave(u, { phone: !0, phoneRegionCode: 'US' }),
    m && new Cleave(m, { delimiter: '', numeral: !0 }),
    c &&
     new Cleave(c, {
      creditCard: !0,
      onCreditCardTypeChanged: function (e) {
       e != '' && e != 'unknown'
        ? (document.querySelector('.card-type').innerHTML =
           '<img src="' +
           assetsPath +
           'img/icons/payments/' +
           e +
           '-cc.png" height="28"/>')
        : (document.querySelector('.card-type').innerHTML = '');
      },
     });
   let i = new Stepper(n, { linear: !0 });
   const f = FormValidation.formValidation(s, {
     fields: {
      multiStepsUsername: {
       validators: {
        notEmpty: { message: 'نام کاربری را وارد کنید' },
        stringLength: {
         min: 6,
         max: 30,
         message: 'نام کاربری باید بین 6 تا 30 کارکتر باشد',
        },
        regexp: {
         regexp: /^[a-zA-Z0-9 ]+$/,
         message: 'نام کاربری باید فقط شامل حروف انگلیسی و اعداد شود',
        },
       },
      },
      multiStepsEmail: {
       validators: {
        notEmpty: { message: 'ادرس ایمیل را وارد کنید' },
        emailAddress: { message: 'فرمت ایمیل صحیح نیست' },
       },
      },
      multiStepsPass: {
       validators: { notEmpty: { message: 'رمز ورود را وارد کنید' } },
      },
      multiStepsConfirmPass: {
       validators: {
        notEmpty: { message: 'تایید رمز ورود را وارد کنید' },
        identical: {
         compare: function () {
          return s.querySelector('[name="multiStepsPass"]').value;
         },
         message: 'رمز ورود و تاییدش یکسان نیستند',
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
     init: (e) => {
      e.on('plugins.message.placed', function (t) {
       t.element.parentElement.classList.contains('input-group') &&
        t.element.parentElement.insertAdjacentElement(
         'afterend',
         t.messageElement,
        );
      });
     },
    }).on('core.form.valid', function () {
     i.next();
    }),
    v = FormValidation.formValidation(d, {
     fields: {
      multiStepsFirstName: {
       validators: { notEmpty: { message: 'نام کوچک را وارد کنید' } },
      },
      multiStepsAddress: {
       validators: { notEmpty: { message: 'آدرس را وارد کنید' } },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({
       eleValidClass: '',
       rowSelector: function (e, t) {
        switch (e) {
         case 'multiStepsFirstName':
          return '.col-sm-6';
         case 'multiStepsAddress':
          return '.col-md-12';
         default:
          return '.row';
        }
       },
      }),
      autoFocus: new FormValidation.plugins.AutoFocus(),
      submitButton: new FormValidation.plugins.SubmitButton(),
     },
    }).on('core.form.valid', function () {
     i.next();
    }),
    V = FormValidation.formValidation(p, {
     fields: {
      multiStepsCard: {
       validators: { notEmpty: { message: 'شماره کارت را وارد کنید' } },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({
       eleValidClass: '',
       rowSelector: function (e, t) {
        switch (e) {
         case 'multiStepsCard':
          return '.col-md-12';
         default:
          return '.col-dm-6';
        }
       },
      }),
      autoFocus: new FormValidation.plugins.AutoFocus(),
      submitButton: new FormValidation.plugins.SubmitButton(),
     },
     init: (e) => {
      e.on('plugins.message.placed', function (t) {
       t.element.parentElement.classList.contains('input-group') &&
        t.element.parentElement.insertAdjacentElement(
         'afterend',
         t.messageElement,
        );
      });
     },
    }).on('core.form.valid', function () {
     alert('ثبت شد..!!');
    });
   g.forEach((e) => {
    e.addEventListener('click', (t) => {
     switch (i._currentIndex) {
      case 0:
       f.validate();
       break;
      case 1:
       v.validate();
       break;
      case 2:
       V.validate();
       break;
     }
    });
   }),
    S.forEach((e) => {
     e.addEventListener('click', (t) => {
      switch (i._currentIndex) {
       case 2:
        i.previous();
        break;
       case 1:
        i.previous();
        break;
      }
     });
    });
  }
 })();
});
