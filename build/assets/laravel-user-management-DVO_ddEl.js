$(function () {
 var l = $('.datatables-users'),
  d = $('.select2'),
  c = baseUrl + 'app/user/view/account',
  i = $('#offcanvasAddUser');
 if (d.length) {
  var u = d;
  u.wrap('<div class="position-relative"></div>').select2({
   placeholder: 'انتخاب کشور',
   dropdownParent: u.parent(),
  });
 }
 if (
  ($.ajaxSetup({
   headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
  }),
  l.length)
 )
  var m = l.DataTable({
   processing: !0,
   serverSide: !0,
   ajax: { url: baseUrl + 'user-list' },
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'name' },
    { data: 'email' },
    { data: 'email_verified_at' },
    { data: 'action' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (e, n, a, o) {
      return '';
     },
    },
    {
     searchable: !1,
     orderable: !1,
     targets: 1,
     render: function (e, n, a, o) {
      return `<span>${a.fake_id}</span>`;
     },
    },
    {
     targets: 2,
     responsivePriority: 4,
     render: function (e, n, a, o) {
      var t = a.name,
       r = Math.floor(Math.random() * 6),
       s = [
        'success',
        'danger',
        'warning',
        'info',
        'dark',
        'primary',
        'secondary',
       ],
       g = s[r],
       p;
      let b = t.split(' '),
       h = b[0].charAt(0) + '‌' + b[1].charAt(0);
      p =
       '<span class="avatar-initial rounded bg-label-' +
       g +
       '">' +
       h +
       '</span>';
      var w =
       '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
       p +
       '</div></div><div class="d-flex flex-column"><a href="' +
       c +
       '" class="text-body text-truncate"><span class="fw-medium">' +
       t +
       '</span></a></div></div>';
      return w;
     },
    },
    {
     targets: 3,
     render: function (e, n, a, o) {
      var t = a.email;
      return '<span class="user-email">' + t + '</span>';
     },
    },
    {
     targets: 4,
     className: 'text-center',
     render: function (e, n, a, o) {
      var t = a.email_verified_at;
      return `${t ? '<i class="ti fs-4 ti-shield-check text-success"></i>' : '<i class="ti fs-4 ti-shield-x text-danger" ></i>'}`;
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (e, n, a, o) {
      return (
       `<div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon edit-record" data-id="${a.id}" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddUser"><i class="ti ti-edit"></i></button><button class="btn btn-sm btn-icon delete-record" data-id="${a.id}"><i class="ti ti-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="` +
       c +
       '" class="dropdown-item">مشاهده</a><a href="javascript:;" class="dropdown-item">مسدودسازی</a></div></div>'
      );
     },
    },
   ],
   order: [[2, 'desc']],
   dom: '<"row mx-2"<"col-md-2"<"me-3"l>><"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو..',
   },
   buttons: [
    {
     extend: 'collection',
     className:
      'btn btn-label-primary dropdown-toggle mx-3 waves-effect waves-light',
     text: '<i class="ti ti-logout rotate-n90 me-2"></i>گرفتن خروجی',
     buttons: [
      {
       extend: 'print',
       title: 'Users',
       text: '<i class="ti ti-printer me-2" ></i>پرینت',
       className: 'dropdown-item',
       exportOptions: {
        columns: [2, 3],
        format: {
         body: function (e, n, a) {
          if (e.length <= 0) return e;
          var o = $.parseHTML(e),
           t = '';
          return (
           $.each(o, function (r, s) {
            s.classList !== void 0 && s.classList.contains('user-name')
             ? (t = t + s.lastChild.textContent)
             : (t = t + s.innerText);
           }),
           t
          );
         },
        },
       },
       customize: function (e) {
        $(e.document.body)
         .css('color', config.colors.headingColor)
         .css('border-color', config.colors.borderColor)
         .css('background-color', config.colors.body),
         $(e.document.body)
          .find('table')
          .addClass('compact')
          .css('color', 'inherit')
          .css('border-color', 'inherit')
          .css('background-color', 'inherit');
       },
      },
      {
       extend: 'csv',
       title: 'Users',
       text: '<i class="ti ti-file-text me-2" ></i>Csv',
       className: 'dropdown-item',
       exportOptions: {
        columns: [2, 3],
        format: {
         body: function (e, n, a) {
          if (e.length <= 0) return e;
          var o = $.parseHTML(e),
           t = '';
          return (
           $.each(o, function (r, s) {
            s.classList.contains('user-name')
             ? (t = t + s.lastChild.textContent)
             : (t = t + s.innerText);
           }),
           t
          );
         },
        },
       },
      },
      {
       extend: 'excel',
       title: 'Users',
       text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
       className: 'dropdown-item',
       exportOptions: {
        columns: [2, 3],
        format: {
         body: function (e, n, a) {
          if (e.length <= 0) return e;
          var o = $.parseHTML(e),
           t = '';
          return (
           $.each(o, function (r, s) {
            s.classList.contains('user-name')
             ? (t = t + s.lastChild.textContent)
             : (t = t + s.innerText);
           }),
           t
          );
         },
        },
       },
      },
      {
       extend: 'pdf',
       title: 'Users',
       text: '<i class="ti ti-file-text me-2"></i>Pdf',
       className: 'dropdown-item',
       exportOptions: {
        columns: [2, 3],
        format: {
         body: function (e, n, a) {
          if (e.length <= 0) return e;
          var o = $.parseHTML(e),
           t = '';
          return (
           $.each(o, function (r, s) {
            s.classList.contains('user-name')
             ? (t = t + s.lastChild.textContent)
             : (t = t + s.innerText);
           }),
           t
          );
         },
        },
       },
      },
      {
       extend: 'copy',
       title: 'Users',
       text: '<i class="ti ti-copy me-1" ></i>Copy',
       className: 'dropdown-item',
       exportOptions: {
        columns: [2, 3],
        format: {
         body: function (e, n, a) {
          if (e.length <= 0) return e;
          var o = $.parseHTML(e),
           t = '';
          return (
           $.each(o, function (r, s) {
            s.classList.contains('user-name')
             ? (t = t + s.lastChild.textContent)
             : (t = t + s.innerText);
           }),
           t
          );
         },
        },
       },
      },
     ],
    },
    {
     text:
      '<i class="ti ti-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">کاربر جدید</span>',
     className: 'add-new btn btn-primary waves-effect waves-light',
     attr: {
      'data-bs-toggle': 'offcanvas',
      'data-bs-target': '#offcanvasAddUser',
     },
    },
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (e) {
       var n = e.data();
       return 'اطلاعات ' + n.name;
      },
     }),
     type: 'column',
     renderer: function (e, n, a) {
      var o = $.map(a, function (t, r) {
       return t.title !== ''
        ? '<tr data-dt-row="' +
           t.rowIndex +
           '" data-dt-column="' +
           t.columnIndex +
           '"><td>' +
           t.title +
           ':</td> <td>' +
           t.data +
           '</td></tr>'
        : '';
      }).join('');
      return o ? $('<table class="table"/><tbody />').append(o) : !1;
     },
    },
   },
  });
 $(document).on('click', '.delete-record', function () {
  var e = $(this).data('id'),
   n = $('.dtr-bs-modal.show');
  n.length && n.modal('hide'),
   Swal.fire({
    title: 'پیام تایید',
    text: 'درصورت انجام عملیات امکان بازگشت وجود نخواهد داشت!',
    icon: 'warning',
    showCancelButton: !0,
    confirmButtonText: 'بله، حذف کن!',
    cancelButtonText: 'بازگشت',
    customClass: {
     confirmButton: 'btn btn-primary me-3',
     cancelButton: 'btn btn-label-secondary',
    },
    buttonsStyling: !1,
   }).then(function (a) {
    a.value
     ? ($.ajax({
        type: 'DELETE',
        url: `${baseUrl}user-list/${e}`,
        success: function () {
         m.draw();
        },
        error: function (o) {
         console.log(o);
        },
       }),
       Swal.fire({
        icon: 'success',
        title: 'عملیات موفق',
        text: 'کاربر با موفقیت حذف شد!',
        confirmButtonText: 'باشه',
        customClass: { confirmButton: 'btn btn-success' },
       }))
     : a.dismiss === Swal.DismissReason.cancel &&
       Swal.fire({
        title: 'لغو شد',
        text: 'عملیات حذف کاربر با موفقیت لغو شد!',
        confirmButtonText: 'باشه',
        icon: 'error',
        customClass: { confirmButton: 'btn btn-success' },
       });
   });
 }),
  $(document).on('click', '.edit-record', function () {
   var e = $(this).data('id'),
    n = $('.dtr-bs-modal.show');
   n.length && n.modal('hide'),
    $('#offcanvasAddUserLabel').html('ویرایش کاربر'),
    $.get(`${baseUrl}user-list/${e}/edit`, function (a) {
     $('#user_id').val(a.id),
      $('#add-user-fullname').val(a.name),
      $('#add-user-email').val(a.email);
    });
  }),
  $('.add-new').on('click', function () {
   $('#user_id').val(''), $('#offcanvasAddUserLabel').html('افزودن کاربر');
  }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
 const x = document.getElementById('addNewUserForm'),
  v = FormValidation.formValidation(x, {
   fields: {
    name: {
     validators: {
      notEmpty: { message: 'لطفا نام و نام خانوادگی را وارد کنید' },
     },
    },
    email: {
     validators: {
      notEmpty: { message: 'ایمیل خود را وارد کنید' },
      emailAddress: { message: 'فرمت ایمیل صحیح نمی باشد' },
     },
    },
    userContact: {
     validators: { notEmpty: { message: 'شماره موبایل را وارد کنید' } },
    },
    company: { validators: { notEmpty: { message: 'شرکت را وارد کنید' } } },
   },
   plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap5: new FormValidation.plugins.Bootstrap5({
     eleValidClass: '',
     rowSelector: function (e, n) {
      return '.mb-3';
     },
    }),
    submitButton: new FormValidation.plugins.SubmitButton(),
    autoFocus: new FormValidation.plugins.AutoFocus(),
   },
  }).on('core.form.valid', function () {
   $.ajax({
    data: $('#addNewUserForm').serialize(),
    url: `${baseUrl}user-list`,
    type: 'POST',
    success: function (e) {
     m.draw(),
      i.offcanvas('hide'),
      Swal.fire({
       icon: 'success',
       title: 'عملیات موفق',
       text: 'کاربر با موفقیت افزوده شد.',
       confirmButtonText: 'باشه',
       customClass: { confirmButton: 'btn btn-success' },
      });
    },
    error: function (e) {
     i.offcanvas('hide'),
      Swal.fire({
       title: 'خطای عملیات!',
       text: 'با این ایمیل قبلا کاربری ثبت نام کرده است.',
       confirmButtonText: 'باشه',
       icon: 'error',
       customClass: { confirmButton: 'btn btn-success' },
      });
    },
   });
  });
 i.on('hidden.bs.offcanvas', function () {
  v.resetForm(!0);
 });
 const f = document.querySelectorAll('.phone-mask');
 f &&
  f.forEach(function (e) {
   new Cleave(e, { phone: !0, phoneRegionCode: 'IR' });
  });
});
