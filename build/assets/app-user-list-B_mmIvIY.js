$(function () {
 let r, d, o;
 isDarkStyle
  ? ((r = config.colors_dark.borderColor),
    (d = config.colors_dark.bodyBg),
    (o = config.colors_dark.headingColor))
  : ((r = config.colors.borderColor),
    (d = config.colors.bodyBg),
    (o = config.colors.headingColor));
 var u = $('.datatables-users'),
  p = $('.select2'),
  f = baseUrl + 'app/user/view/account',
  c = {
   1: { title: 'درانتظار', class: 'bg-label-warning' },
   2: { title: 'فعال', class: 'bg-label-success' },
   3: { title: 'غیرفعال', class: 'bg-label-secondary' },
  };
 if (p.length) {
  var m = p;
  m.wrap('<div class="position-relative"></div>').select2({
   placeholder: 'انتخاب کشور',
   dropdownParent: m.parent(),
  });
 }
 if (u.length)
  var b = u.DataTable({
   ajax: assetsPath + 'json/user-list.json',
   columns: [
    { data: '' },
    { data: 'full_name' },
    { data: 'role' },
    { data: 'current_plan' },
    { data: 'billing' },
    { data: 'status' },
    { data: 'action' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (t, n, s, l) {
      return '';
     },
    },
    {
     targets: 1,
     responsivePriority: 4,
     render: function (t, n, s, l) {
      var e = s.full_name,
       i = s.email,
       a = s.avatar;
      if (a)
       var x =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        a +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var g = Math.floor(Math.random() * 6),
        h = ['success', 'danger', 'warning', 'info', 'primary', 'secondary'],
        w = h[g],
        e = s.full_name;
       let v = e.split(' '),
        C = v[0].charAt(0) + '‌' + v[1].charAt(0);
       x =
        '<span class="avatar-initial rounded-circle bg-label-' +
        w +
        '">' +
        C +
        '</span>';
      }
      var y =
       '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar me-3">' +
       x +
       '</div></div><div class="d-flex flex-column"><a href="' +
       f +
       '" class="text-body text-truncate"><span class="fw-medium">' +
       e +
       '</span></a><small class="text-muted">' +
       i +
       '</small></div></div>';
      return y;
     },
    },
    {
     targets: 2,
     render: function (t, n, s, l) {
      var e = s.role,
       i = {
        Subscriber:
         '<span class="badge badge-center rounded-pill bg-label-warning me-3 w-px-30 h-px-30"><i class="ti ti-user ti-sm"></i></span> مشتری',
        Author:
         '<span class="badge badge-center rounded-pill bg-label-success me-3 w-px-30 h-px-30"><i class="ti ti-settings ti-sm"></i></span> موسس',
        Maintainer:
         '<span class="badge badge-center rounded-pill bg-label-primary me-3 w-px-30 h-px-30"><i class="ti ti-chart-pie-2 ti-sm"></i></span> مدیرعامل',
        Editor:
         '<span class="badge badge-center rounded-pill bg-label-info me-3 w-px-30 h-px-30"><i class="ti ti-edit ti-sm"></i></span> ویرایشگر',
        Admin:
         '<span class="badge badge-center rounded-pill bg-label-secondary me-3 w-px-30 h-px-30"><i class="ti ti-device-laptop ti-sm"></i></span> ادمین',
       };
      return (
       "<span class='text-truncate d-flex align-items-center'>" +
       i[e] +
       '</span>'
      );
     },
    },
    {
     targets: 3,
     render: function (t, n, s, l) {
      var e = s.current_plan;
      return '<span class="fw-medium">' + e + '</span>';
     },
    },
    {
     targets: 5,
     render: function (t, n, s, l) {
      var e = s.status;
      return (
       '<span class="badge ' +
       c[e].class +
       '" text-capitalized>' +
       c[e].title +
       '</span>'
      );
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (t, n, s, l) {
      return (
       '<div class="d-flex align-items-center"><a href="javascript:;" class="text-body"><i class="ti ti-edit ti-sm me-2"></i></a><a href="javascript:;" class="text-body delete-record"><i class="ti ti-trash ti-sm mx-2"></i></a><a href="javascript:;" class="text-body dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-sm mx-1"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="' +
       f +
       '" class="dropdown-item">نمایش</a><a href="javascript:;" class="dropdown-item">مسدودسازی</a></div></div>'
      );
     },
    },
   ],
   order: [[1, 'desc']],
   dom: '<"row me-2"<"col-md-2"<"me-3"l>><"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
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
      'btn btn-label-secondary dropdown-toggle mx-3 waves-effect waves-light',
     text: '<i class="ti ti-screen-share me-1 ti-xs"></i>گرفتن خروجی',
     buttons: [
      {
       extend: 'print',
       text: '<i class="ti ti-printer me-2" ></i>چاپ',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (t, n, s) {
          if (t.length <= 0) return t;
          var l = $.parseHTML(t),
           e = '';
          return (
           $.each(l, function (i, a) {
            a.classList !== void 0 && a.classList.contains('user-name')
             ? (e = e + a.lastChild.firstChild.textContent)
             : a.innerText === void 0
               ? (e = e + a.textContent)
               : (e = e + a.innerText);
           }),
           e
          );
         },
        },
       },
       customize: function (t) {
        $(t.document.body)
         .css('color', o)
         .css('border-color', r)
         .css('background-color', d),
         $(t.document.body)
          .find('table')
          .addClass('compact')
          .css('color', 'inherit')
          .css('border-color', 'inherit')
          .css('background-color', 'inherit');
       },
      },
      {
       extend: 'csv',
       text: '<i class="ti ti-file-text me-2" ></i>Csv',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (t, n, s) {
          if (t.length <= 0) return t;
          var l = $.parseHTML(t),
           e = '';
          return (
           $.each(l, function (i, a) {
            a.classList !== void 0 && a.classList.contains('user-name')
             ? (e = e + a.lastChild.firstChild.textContent)
             : a.innerText === void 0
               ? (e = e + a.textContent)
               : (e = e + a.innerText);
           }),
           e
          );
         },
        },
       },
      },
      {
       extend: 'excel',
       text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (t, n, s) {
          if (t.length <= 0) return t;
          var l = $.parseHTML(t),
           e = '';
          return (
           $.each(l, function (i, a) {
            a.classList !== void 0 && a.classList.contains('user-name')
             ? (e = e + a.lastChild.firstChild.textContent)
             : a.innerText === void 0
               ? (e = e + a.textContent)
               : (e = e + a.innerText);
           }),
           e
          );
         },
        },
       },
      },
      {
       extend: 'pdf',
       text: '<i class="ti ti-file-code-2 me-2"></i>Pdf',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (t, n, s) {
          if (t.length <= 0) return t;
          var l = $.parseHTML(t),
           e = '';
          return (
           $.each(l, function (i, a) {
            a.classList !== void 0 && a.classList.contains('user-name')
             ? (e = e + a.lastChild.firstChild.textContent)
             : a.innerText === void 0
               ? (e = e + a.textContent)
               : (e = e + a.innerText);
           }),
           e
          );
         },
        },
       },
      },
      {
       extend: 'copy',
       text: '<i class="ti ti-copy me-2" ></i>کپی',
       className: 'dropdown-item',
       exportOptions: {
        columns: [1, 2, 3, 4, 5],
        format: {
         body: function (t, n, s) {
          if (t.length <= 0) return t;
          var l = $.parseHTML(t),
           e = '';
          return (
           $.each(l, function (i, a) {
            a.classList !== void 0 && a.classList.contains('user-name')
             ? (e = e + a.lastChild.firstChild.textContent)
             : a.innerText === void 0
               ? (e = e + a.textContent)
               : (e = e + a.innerText);
           }),
           e
          );
         },
        },
       },
      },
     ],
    },
    {
     text:
      '<i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span class="d-none d-sm-inline-block">افزودن کاربر</span>',
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
      header: function (t) {
       var n = t.data();
       return 'جزئیات ' + n.full_name;
      },
     }),
     type: 'column',
     renderer: function (t, n, s) {
      var l = $.map(s, function (e, i) {
       return e.title !== ''
        ? '<tr data-dt-row="' +
           e.rowIndex +
           '" data-dt-column="' +
           e.columnIndex +
           '"><td>' +
           e.title +
           ':</td> <td>' +
           e.data +
           '</td></tr>'
        : '';
      }).join('');
      return l ? $('<table class="table"/><tbody />').append(l) : !1;
     },
    },
   },
   initComplete: function () {
    this.api()
     .columns(2)
     .every(function () {
      var t = this,
       n = $(
        '<select id="UserRole" class="form-select text-capitalize"><option value=""> انتخاب نقش </option></select>',
       )
        .appendTo('.user_role')
        .on('change', function () {
         var s = $.fn.dataTable.util.escapeRegex($(this).val());
         t.search(s ? '^' + s : '', !0, !1).draw();
        });
      n.append('<option value="Admin" class="text-capitalize">ادمین</option>'),
       n.append(
        '<option value="Author" class="text-capitalize">نویسنده</option>',
       ),
       n.append(
        '<option value="Editor" class="text-capitalize">ویرایشگر</option>',
       ),
       n.append(
        '<option value="Maintainer" class="text-capitalize">مدیرعامل</option>',
       ),
       n.append(
        '<option value="Subscriber" class="text-capitalize">دنبال کننده</option>',
       );
     }),
     this.api()
      .columns(3)
      .every(function () {
       var t = this,
        n = $(
         '<select id="UserPlan" class="form-select text-capitalize"><option value=""> انتخاب اشتراک </option></select>',
        )
         .appendTo('.user_plan')
         .on('change', function () {
          var s = $.fn.dataTable.util.escapeRegex($(this).val());
          t.search(s ? '^' + s : '', !0, !1).draw();
         });
       t.data()
        .unique()
        .sort()
        .each(function (s, l) {
         n.append('<option value="' + s + '">' + s + '</option>');
        });
      }),
     this.api()
      .columns(5)
      .every(function () {
       var t = this,
        n = $(
         '<select id="FilterTransaction" class="form-select text-capitalize"><option value=""> انتخاب وضعیت </option></select>',
        )
         .appendTo('.user_status')
         .on('change', function () {
          var s = $.fn.dataTable.util.escapeRegex($(this).val());
          t.search(s ? '^' + s : '', !0, !1).draw();
         });
       t.data()
        .unique()
        .sort()
        .each(function (s, l) {
         n.append(
          '<option value="' +
           c[s].title +
           '" class="text-capitalize">' +
           c[s].title +
           '</option>',
         );
        });
      });
   },
  });
 $('.datatables-users tbody').on('click', '.delete-record', function () {
  b.row($(this).parents('tr')).remove().draw();
 }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
(function () {
 const r = document.querySelectorAll('.phone-mask'),
  d = document.getElementById('addNewUserForm');
 r &&
  r.forEach(function (o) {
   new Cleave(o, { phone: !0, phoneRegionCode: 'US' });
  }),
  FormValidation.formValidation(d, {
   fields: {
    userFullname: {
     validators: { notEmpty: { message: 'نام کامل را وارد کنید' } },
    },
    userEmail: {
     validators: {
      notEmpty: { message: 'ایمیلتان را وارد کنید' },
      emailAddress: { message: 'فرمت ایمیل صحیح نیست' },
     },
    },
   },
   plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap5: new FormValidation.plugins.Bootstrap5({
     eleValidClass: '',
     rowSelector: function (o, u) {
      return '.mb-3';
     },
    }),
    submitButton: new FormValidation.plugins.SubmitButton(),
    autoFocus: new FormValidation.plugins.AutoFocus(),
   },
  });
})();
