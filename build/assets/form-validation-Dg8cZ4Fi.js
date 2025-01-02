(function () {
 window.Helpers.initCustomOptionCheck();
 const l = [].slice.call(document.querySelectorAll('.flatpickr-validation'));
 l &&
  l.forEach((a) => {
   a.flatpickr({ allowInput: !0, locale: 'fa', monthSelectorType: 'static' });
  });
 const t = document.querySelectorAll('.needs-validation');
 Array.prototype.slice.call(t).forEach(function (a) {
  a.addEventListener(
   'submit',
   function (o) {
    a.checkValidity()
     ? alert('Submitted!!!')
     : (o.preventDefault(), o.stopPropagation()),
     a.classList.add('was-validated');
   },
   !1,
  );
 });
})();
document.addEventListener('DOMContentLoaded', function (l) {
 (function () {
  const t = document.getElementById('formValidationExamples'),
   a = jQuery(t.querySelector('[name="formValidationSelect2"]')),
   o = jQuery(t.querySelector('[name="formValidationTech"]')),
   r = t.querySelector('[name="formValidationLang"]'),
   u = jQuery(t.querySelector('.selectpicker')),
   g = [
    'ReactJS',
    'Angular',
    'VueJS',
    'Html',
    'Css',
    'Sass',
    'Pug',
    'Gulp',
    'Php',
    'Laravel',
    'Python',
    'Bootstrap',
    'Material Design',
    'NodeJS',
   ],
   n = FormValidation.formValidation(t, {
    fields: {
     formValidationName: {
      validators: {
       notEmpty: { message: 'لطفا نام خود را وارد کنید' },
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
         return t.querySelector('[name="formValidationPass"]').value;
        },
        message: 'پسورد و تایید پسورد یکسان نیستند',
       },
      },
     },
     formValidationFile: {
      validators: { notEmpty: { message: 'فایلی را انتخاب کنید' } },
     },
     formValidationDob: {
      validators: {
       notEmpty: { message: 'تاریخ تولد خود را انتخاب کنید' },
       date: { format: 'YYYY/MM/DD', message: 'تاریخ صحیح نیست' },
      },
     },
     formValidationSelect2: {
      validators: { notEmpty: { message: 'کشور الزامی است' } },
     },
     formValidationLang: {
      validators: { notEmpty: { message: 'زبان الزامی است' } },
     },
     formValidationTech: {
      validators: { notEmpty: { message: 'مهارت ها الزامی است' } },
     },
     formValidationHobbies: {
      validators: { notEmpty: { message: 'سرگرمی ها الزامی است' } },
     },
     formValidationBio: {
      validators: {
       notEmpty: { message: 'بیوگرافی الزامی است' },
       stringLength: {
        min: 100,
        max: 500,
        message: 'نام باید بین 100 تا 500 کارکتر باشد',
       },
      },
     },
     formValidationGender: {
      validators: { notEmpty: { message: 'جنسیت را انتخاب کنید' } },
     },
     formValidationPlan: {
      validators: { notEmpty: { message: 'اشتراک را انتخاب کنید' } },
     },
     formValidationSwitch: {
      validators: { notEmpty: { message: 'دریافت ایمیل را فعال کنید' } },
     },
     formValidationCheckbox: {
      validators: { notEmpty: { message: 'تیک قواینن را بزنید' } },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: function (i, e) {
       switch (i) {
        case 'formValidationName':
        case 'formValidationEmail':
        case 'formValidationPass':
        case 'formValidationConfirmPass':
        case 'formValidationFile':
        case 'formValidationDob':
        case 'formValidationSelect2':
        case 'formValidationLang':
        case 'formValidationTech':
        case 'formValidationHobbies':
        case 'formValidationBio':
        case 'formValidationGender':
         return '.col-md-6';
        case 'formValidationPlan':
         return '.col-xl-3';
        case 'formValidationSwitch':
        case 'formValidationCheckbox':
         return '.col-12';
        default:
         return '.row';
       }
      },
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
    init: (i) => {
     i.on('plugins.message.placed', function (e) {
      e.element.parentElement.classList.contains('input-group') &&
       e.element.parentElement.insertAdjacentElement(
        'afterend',
        e.messageElement,
       ),
       e.element.parentElement.parentElement.classList.contains(
        'custom-option',
       ) &&
        e.element
         .closest('.row')
         .insertAdjacentElement('afterend', e.messageElement);
     });
    },
   });
  flatpickr(t.querySelector('[name="formValidationDob"]'), {
   enableTime: !1,
   dateFormat: 'Y/m/d',
   locale: 'fa',
   onChange: function () {
    n.revalidateField('formValidationDob');
   },
  }),
   a.length &&
    (a.wrap('<div class="position-relative"></div>'),
    a
     .select2({ placeholder: 'انتخاب کشور', dropdownParent: a.parent() })
     .on('change.select2', function () {
      n.revalidateField('formValidationSelect2');
     }));
  const p = function (i) {
   return function (m, d) {
    var s, c;
    (s = []),
     (c = new RegExp(m, 'i')),
     $.each(i, function (h, f) {
      c.test(f) && s.push(f);
     }),
     d(s);
   };
  };
  if (isRtl) {
   const i = [].slice.call(document.querySelectorAll('.typeahead'));
   i &&
    i.forEach((e) => {
     e.setAttribute('dir', 'rtl');
    });
  }
  o.typeahead(
   { hint: isRtl, highlight: !0, minLength: 1 },
   { name: 'tech', source: p(g) },
  ),
   new Tagify(r),
   r.addEventListener('change', V);
  function V() {
   n.revalidateField('formValidationLang');
  }
  u.on('changed.bs.select', function (i, e, m, d) {
   n.revalidateField('formValidationHobbies');
  });
 })();
});
