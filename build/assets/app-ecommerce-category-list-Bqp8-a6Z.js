const u = document.querySelector('.comment-editor');
u &&
 new Quill(u, {
  modules: { toolbar: '.comment-toolbar' },
  placeholder: 'توضیحات دسته را وارد کنید...',
  theme: 'snow',
 });
$(function () {
 isDarkStyle
  ? (config.colors_dark.borderColor,
    config.colors_dark.bodyBg,
    config.colors_dark.headingColor)
  : (config.colors.borderColor,
    config.colors.bodyBg,
    config.colors.headingColor);
 var o = $('.datatables-category-list'),
  l = $('.select2');
 if (
  (l.length &&
   l.each(function () {
    var a = $(this);
    a.wrap('<div class="position-relative"></div>').select2({
     dropdownParent: a.parent(),
     placeholder: a.data('placeholder'),
    });
   }),
  o.length)
 ) {
  var i = o.DataTable({
   ajax: assetsPath + 'json/ecommerce-category-list.json',
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'categories' },
    { data: 'total_products' },
    { data: 'total_earnings' },
    { data: '' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 1,
     targets: 0,
     render: function (a, s, e, r) {
      return '';
     },
    },
    {
     targets: 1,
     orderable: !1,
     searchable: !1,
     responsivePriority: 4,
     checkboxes: !0,
     render: function () {
      return '<input type="checkbox" class="dt-checkboxes form-check-input">';
     },
     checkboxes: {
      selectAllRender: '<input type="checkbox" class="form-check-input">',
     },
    },
    {
     targets: 2,
     responsivePriority: 2,
     render: function (a, s, e, r) {
      var t = e.categories,
       d = e.category_detail,
       c = e.cat_image,
       g = e.id;
      if (c)
       var m =
        '<img src="' +
        assetsPath +
        'img/ecommerce-images/' +
        c +
        '" alt="Product-' +
        g +
        '" class="rounded-2">';
      else {
       var f = Math.floor(Math.random() * 6),
        b = [
         'success',
         'danger',
         'warning',
         'info',
         'dark',
         'primary',
         'secondary',
        ],
        p = b[f],
        t = e.category_detail,
        n = t.match(/\b\w/g) || [];
       (n = ((n.shift() || '') + (n.pop() || '')).toUpperCase()),
        (m =
         '<span class="avatar-initial rounded-2 bg-label-' +
         p +
         '">' +
         n +
         '</span>');
      }
      var v =
       '<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper"><div class="avatar avatar me-2 rounded-2 bg-label-secondary">' +
       m +
       '</div></div><div class="d-flex flex-column"><h6 class="text-body text-nowrap mb-0">' +
       t +
       '</h6><small class="text-muted text-truncate d-none d-sm-block">' +
       d +
       '</small></div></div>';
      return v;
     },
    },
    {
     targets: 3,
     responsivePriority: 3,
     render: function (a, s, e, r) {
      var t = e.total_products;
      return '<div class="text-sm-end">' + t + '</div>';
     },
    },
    {
     targets: 4,
     orderable: !1,
     render: function (a, s, e, r) {
      var t = e.total_earnings;
      return "<div class='h6 mb-0 text-sm-end'>" + t + '</div';
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (a, s, e, r) {
      return '<div class="d-flex align-items-sm-center justify-content-sm-center"><button class="btn btn-sm btn-icon delete-record me-2"><i class="ti ti-trash"></i></button><button class="btn btn-sm btn-icon"><i class="ti ti-edit"></i></button></div>';
     },
    },
   ],
   order: [2, 'desc'],
   dom: '<"card-header d-flex flex-wrap pb-2"<f><"d-flex justify-content-center justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex justify-content-center flex-md-row mb-3 mb-md-0 ps-1 ms-1 align-items-baseline"lB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   lengthMenu: [7, 10, 20, 50, 70, 100],
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو دسته',
   },
   buttons: [
    {
     text:
      '<i class="ti ti-plus ti-xs me-0 me-sm-2"></i><span class="d-none d-sm-inline-block">افزودن دسته</span>',
     className: 'add-new btn btn-primary ms-2 waves-effect waves-light',
     attr: {
      'data-bs-toggle': 'offcanvas',
      'data-bs-target': '#offcanvasEcommerceCategoryList',
     },
    },
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var s = a.data();
       return 'جزئیات ' + s.categories;
      },
     }),
     type: 'column',
     renderer: function (a, s, e) {
      var r = $.map(e, function (t, d) {
       return t.title !== ''
        ? '<tr data-dt-row="' +
           t.rowIndex +
           '" data-dt-column="' +
           t.columnIndex +
           '"><td> ' +
           t.title +
           ':</td> <td class="ps-0">' +
           t.data +
           '</td></tr>'
        : '';
      }).join('');
      return r ? $('<table class="table"/><tbody />').append(r) : !1;
     },
    },
   },
  });
  $('.dt-action-buttons').addClass('pt-0'),
   $('.dataTables_filter').addClass('me-3 ps-0');
 }
 $('.datatables-category-list tbody').on(
  'click',
  '.delete-record',
  function () {
   i.row($(this).parents('tr')).remove().draw();
  },
 ),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
(function () {
 const o = document.getElementById('eCommerceCategoryListForm');
 FormValidation.formValidation(o, {
  fields: {
   categoryTitle: {
    validators: { notEmpty: { message: 'عنوان دسته را وارد کنید' } },
   },
   slug: {
    validators: { notEmpty: { message: 'توضیحات مختصر را وارد کنید' } },
   },
  },
  plugins: {
   trigger: new FormValidation.plugins.Trigger(),
   bootstrap5: new FormValidation.plugins.Bootstrap5({
    eleValidClass: 'is-valid',
    rowSelector: function (l, i) {
     return '.mb-3';
    },
   }),
   submitButton: new FormValidation.plugins.SubmitButton(),
   autoFocus: new FormValidation.plugins.AutoFocus(),
  },
 });
})();
