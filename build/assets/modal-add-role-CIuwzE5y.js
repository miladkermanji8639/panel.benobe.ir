document.addEventListener('DOMContentLoaded', function (l) {
 (function () {
  FormValidation.formValidation(document.getElementById('addRoleForm'), {
   fields: {
    modalRoleName: {
     validators: { notEmpty: { message: 'لطفا عنوان نقش را وارد کنید' } },
    },
   },
   plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap5: new FormValidation.plugins.Bootstrap5({
     eleValidClass: '',
     rowSelector: '.col-12',
    }),
    submitButton: new FormValidation.plugins.SubmitButton(),
    autoFocus: new FormValidation.plugins.AutoFocus(),
   },
  });
  const e = document.querySelector('#selectAll'),
   t = document.querySelectorAll('[type="checkbox"]');
  e.addEventListener('change', (o) => {
   t.forEach((n) => {
    n.checked = o.target.checked;
   });
  });
 })();
});
