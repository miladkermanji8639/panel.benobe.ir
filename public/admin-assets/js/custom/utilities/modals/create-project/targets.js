﻿'use strict';
var KTModalCreateProjectTargets = (function () {
 var e, t, a, r, o;
 return {
  init: function () {
   (r = KTModalCreateProject.getForm()),
    (o = KTModalCreateProject.getStepperObj()),
    (e = KTModalCreateProject.getStepper().querySelector(
     '[data-kt-element="targets-next"]',
    )),
    (t = KTModalCreateProject.getStepper().querySelector(
     '[data-kt-element="targets-previous"]',
    )),
    new Tagify(r.querySelector('[name="target_tags"]'), {
     whitelist: ['Important', 'Urgent', 'High', 'Medium', 'Low'],
     maxTags: 5,
     dropdown: { maxItems: 10, enabled: 0, closeOnSelect: !1 },
    }).on('change', function () {
     a.revalidateField('tags');
    }),
    $(r.querySelector('[name="target_due_date"]')).flatpickr({
     enableTime: !0,
     dateFormat: 'd, M Y, H:i',
    }),
    $(r.querySelector('[name="target_assign"]')).on('change', function () {
     a.revalidateField('target_assign');
    }),
    (a = FormValidation.formValidation(r, {
     fields: {
      target_title: { validators: { notEmpty: { message: 'عنوان اجباری' } } },
      target_assign: {
       validators: { notEmpty: { message: 'مشتری مورد نیاز است' } },
      },
      target_due_date: {
       validators: { notEmpty: { message: 'تاریخ سررسید الزامی است' } },
      },
      target_tags: {
       validators: { notEmpty: { message: 'برچسب های هدف مورد نیاز است' } },
      },
      target_allow: {
       validators: { notEmpty: { message: 'اجازه دادن به هدف مورد نیاز است' } },
      },
      'target_notifications[]': {
       validators: { notEmpty: { message: 'اطلاع رسانی لازم است' } },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap: new FormValidation.plugins.Bootstrap5({
       rowSelector: '.fv-row',
       eleInvalidClass: '',
       eleValidClass: '',
      }),
     },
    })),
    e.addEventListener('click', function (t) {
     t.preventDefault(),
      (e.disabled = !0),
      a &&
       a.validate().then(function (t) {
        console.log('validated!'),
         'Valid' == t
          ? (e.setAttribute('data-kt-indicator', 'on'),
            setTimeout(function () {
             e.removeAttribute('data-kt-indicator'),
              (e.disabled = !1),
              o.goNext();
            }, 1500))
          : ((e.disabled = !1),
            Swal.fire({
             text:
              'متأسفیم ، به نظر می رسد برخی خطاها شناسایی شده است ، لطفاً دوباره امتحان کنید.',
             icon: 'error',
             buttonsStyling: !1,
             confirmButtonText: 'باشه فهمیدم!',
             customClass: { confirmButton: 'btn btn-primary' },
            }));
       });
    }),
    t.addEventListener('click', function () {
     o.goPrevious();
    });
  },
 };
})();
'undefined' != typeof module &&
 void 0 !== module.exports &&
 (window.KTModalCreateProjectTargets = module.exports =
  KTModalCreateProjectTargets);