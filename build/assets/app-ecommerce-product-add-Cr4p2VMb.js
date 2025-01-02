(function () {
 const a = document.querySelector('.comment-editor');
 a &&
  new Quill(a, {
   modules: { toolbar: '.comment-toolbar' },
   placeholder: 'توضیحات محصول',
   theme: 'snow',
  });
 const r = `<div class="dz-preview dz-file-preview">
<div class="dz-details">
  <div class="dz-thumbnail">
    <img data-dz-thumbnail>
    <span class="dz-nopreview">بدون پیشنمایش</span>
    <div class="dz-success-mark"></div>
    <div class="dz-error-mark"></div>
    <div class="dz-error-message"><span data-dz-errormessage></span></div>
    <div class="progress">
      <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div>
    </div>
  </div>
  <div class="dz-filename" data-dz-name></div>
  <div class="dz-size" data-dz-size></div>
</div>
</div>`,
  t = document.querySelector('#dropzone-basic');
 t &&
  new Dropzone(t, {
   previewTemplate: r,
   parallelUploads: 1,
   maxFilesize: 5,
   acceptedFiles: '.jpg,.jpeg,.png,.gif',
   addRemoveLinks: !0,
   maxFiles: 1,
  });
 const s = document.querySelector('#ecommerce-product-tags');
 new Tagify(s);
 const e = new Date(),
  o = document.querySelector('.product-date');
 o &&
  o.flatpickr({ monthSelectorType: 'static', locale: 'fa', defaultDate: e });
})();
$(function () {
 var a = $('.select2');
 a.length &&
  a.each(function () {
   var e = $(this);
   e.wrap('<div class="position-relative"></div>').select2({
    dropdownParent: e.parent(),
    placeholder: e.data('placeholder'),
   });
  });
 var r = $('.form-repeater');
 if (r.length) {
  var t = 2,
   s = 1;
  r.on('submit', function (e) {
   e.preventDefault();
  }),
   r.repeater({
    show: function () {
     var e = $(this).find('.form-control, .form-select'),
      o = $(this).find('.form-label');
     e.each(function (i) {
      var d = 'form-repeater-' + t + '-' + s;
      $(e[i]).attr('id', d), $(o[i]).attr('for', d), s++;
     }),
      t++,
      $(this).slideDown(),
      $('.select2-container').remove(),
      $('.select2.form-select').select2({ placeholder: 'متن جایگزین' }),
      $('.select2-container').css('width', '100%'),
      $('.form-repeater:first .form-select').select2({
       dropdownParent: $(this).parent(),
       placeholder: 'متن جایگزین',
      }),
      $('.position-relative .select2').each(function () {
       $(this).select2({
        dropdownParent: $(this).closest('.position-relative'),
       });
      });
    },
   });
 }
});
