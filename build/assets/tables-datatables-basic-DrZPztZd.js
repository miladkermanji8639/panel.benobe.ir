let b, g;
document.addEventListener('DOMContentLoaded', function (m) {
 (function () {
  const u = document.getElementById('form-add-new-record');
  setTimeout(() => {
   const i = document.querySelector('.create-new'),
    d = document.querySelector('#add-new-record');
   i &&
    i.addEventListener('click', function () {
     (g = new bootstrap.Offcanvas(d)),
      (d.querySelector('.dt-full-name').value = ''),
      (d.querySelector('.dt-post').value = ''),
      (d.querySelector('.dt-email').value = ''),
      (d.querySelector('.dt-date').value = ''),
      (d.querySelector('.dt-salary').value = ''),
      g.show();
    });
  }, 200),
   (b = FormValidation.formValidation(u, {
    fields: {
     basicFullname: {
      validators: { notEmpty: { message: 'عنوان الزامی است' } },
     },
     basicPost: {
      validators: { notEmpty: { message: 'فیلد سمت الزامی است' } },
     },
     basicEmail: {
      validators: {
       notEmpty: { message: 'ایمیل الزامی است' },
       emailAddress: { message: 'فرمت ایمیل نادرست است' },
      },
     },
     basicDate: {
      validators: {
       notEmpty: { message: 'تاریخ عضویت الزامی است' },
       date: { format: 'MM/DD/YYYY', message: 'فرمت تاریخ نادرست است' },
      },
     },
     basicSalary: {
      validators: { notEmpty: { message: 'حقوق پایه الزامی است' } },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-sm-12',
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
    init: (i) => {
     i.on('plugins.message.placed', function (d) {
      d.element.parentElement.classList.contains('input-group') &&
       d.element.parentElement.insertAdjacentElement(
        'afterend',
        d.messageElement,
       );
     });
    },
   }));
  const c = document.querySelector('[name="basicDate"]');
  c &&
   c.flatpickr({
    enableTime: !1,
    dateFormat: 'Y/m/d',
    locale: 'fa',
    onChange: function () {
     b.revalidateField('basicDate');
    },
   });
 })();
});
$(function () {
 var m = $('.datatables-basic'),
  u = $('.datatables-direct-basic'),
  c = $('.dt-complex-header'),
  i = $('.dt-row-grouping'),
  d = $('.dt-multilingual'),
  v,
  f;
 u.length &&
  ((v = u.DataTable({
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   searching: !1,
   lengthChange: !1,
   ordering: !1,
   pageLength: 5,
  })),
  $('.datatables-direct-basic tbody').on(
   'click',
   '.dropdown-item.delete-record',
   function () {
    v.row($(this).parents('tr')).remove().draw();
   },
  )),
  m.length &&
   ((f = m.DataTable({
    ajax: assetsPath + 'json/table-datatable.json',
    language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
    columns: [
     { data: '' },
     { data: 'id' },
     { data: 'id' },
     { data: 'full_name' },
     { data: 'email' },
     { data: 'start_date' },
     { data: 'salary' },
     { data: 'status' },
     { data: '' },
    ],
    columnDefs: [
     {
      className: 'control',
      orderable: !1,
      searchable: !1,
      responsivePriority: 2,
      targets: 0,
      render: function (a, l, n, s) {
       return '';
      },
     },
     {
      targets: 1,
      orderable: !1,
      searchable: !1,
      responsivePriority: 3,
      checkboxes: !0,
      render: function () {
       return '<input type="checkbox" class="dt-checkboxes form-check-input">';
      },
      checkboxes: {
       selectAllRender: '<input type="checkbox" class="form-check-input">',
      },
     },
     { targets: 2, searchable: !1, visible: !1 },
     {
      targets: 3,
      responsivePriority: 4,
      render: function (a, l, n, s) {
       var e = n.avatar,
        r = n.full_name,
        t = n.post;
       if (e)
        var w =
         '<img src="' +
         assetsPath +
         'img/avatars/' +
         e +
         '" alt="Avatar" class="rounded-circle">';
       else {
        var j = Math.floor(Math.random() * 6),
         _ = ['success', 'danger', 'warning', 'info', 'primary', 'secondary'],
         C = _[j],
         r = n.full_name;
        let x = r.split(' '),
         L = x[0].charAt(0) + '‌' + x[1].charAt(0);
        w =
         '<span class="avatar-initial rounded-circle bg-label-' +
         C +
         '">' +
         L +
         '</span>';
       }
       var T =
        '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar me-2">' +
        w +
        '</div></div><div class="d-flex flex-column"><span class="emp_name text-truncate">' +
        r +
        '</span><small class="emp_post text-truncate text-muted">' +
        t +
        '</small></div></div>';
       return T;
      },
     },
     { responsivePriority: 1, targets: 4 },
     {
      targets: -2,
      render: function (a, l, n, s) {
       var e = n.status,
        r = {
         1: { title: 'استعفاداده', class: 'bg-label-primary' },
         2: { title: 'حرفه‌ای', class: ' bg-label-success' },
         3: { title: 'ردشده', class: ' bg-label-danger' },
         4: { title: 'درحال بررسی', class: ' bg-label-warning' },
         5: { title: 'تایید شده', class: ' bg-label-info' },
        };
       return typeof r[e] > 'u'
        ? a
        : '<span class="badge ' + r[e].class + '">' + r[e].title + '</span>';
      },
     },
     {
      targets: -1,
      title: 'عملیات',
      orderable: !1,
      searchable: !1,
      render: function (a, l, n, s) {
       return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="text-primary ti ti-dots-vertical"></i></a><ul class="dropdown-menu dropdown-menu-end m-0"><li><a href="javascript:;" class="dropdown-item">جزئیات</a></li><li><a href="javascript:;" class="dropdown-item">بایگانی</a></li><div class="dropdown-divider"></div><li><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></li></ul></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="text-primary ti ti-pencil"></i></a>';
      },
     },
    ],
    order: [[2, 'desc']],
    dom: '<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
    displayLength: 7,
    lengthMenu: [7, 10, 25, 50, 75, 100],
    buttons: [
     {
      extend: 'collection',
      className:
       'btn btn-label-primary dropdown-toggle me-2 waves-effect waves-light',
      text:
       '<i class="ti ti-file-export me-sm-1"></i> <span class="d-none d-sm-inline-block">گرفتن خروجی</span>',
      buttons: [
       {
        extend: 'print',
        text: '<i class="ti ti-printer me-1" ></i>چاپ',
        className: 'dropdown-item',
        exportOptions: {
         columns: [3, 4, 5, 6, 7],
         format: {
          body: function (a, l, n) {
           if (a.length <= 0) return a;
           var s = $.parseHTML(a),
            e = '';
           return (
            $.each(s, function (r, t) {
             t.classList !== void 0 && t.classList.contains('user-name')
              ? (e = e + t.lastChild.firstChild.textContent)
              : t.innerText === void 0
                ? (e = e + t.textContent)
                : (e = e + t.innerText);
            }),
            e
           );
          },
         },
        },
        customize: function (a) {
         $(a.document.body)
          .css('color', config.colors.headingColor)
          .css('border-color', config.colors.borderColor)
          .css('background-color', config.colors.bodyBg),
          $(a.document.body)
           .find('table')
           .addClass('compact')
           .css('color', 'inherit')
           .css('border-color', 'inherit')
           .css('background-color', 'inherit');
        },
       },
       {
        extend: 'csv',
        text: '<i class="ti ti-file-text me-1" ></i>Csv',
        className: 'dropdown-item',
        exportOptions: {
         columns: [3, 4, 5, 6, 7],
         format: {
          body: function (a, l, n) {
           if (a.length <= 0) return a;
           var s = $.parseHTML(a),
            e = '';
           return (
            $.each(s, function (r, t) {
             t.classList !== void 0 && t.classList.contains('user-name')
              ? (e = e + t.lastChild.firstChild.textContent)
              : t.innerText === void 0
                ? (e = e + t.textContent)
                : (e = e + t.innerText);
            }),
            e
           );
          },
         },
        },
       },
       {
        extend: 'excel',
        text: '<i class="ti ti-file-spreadsheet me-1"></i>Excel',
        className: 'dropdown-item',
        exportOptions: {
         columns: [3, 4, 5, 6, 7],
         format: {
          body: function (a, l, n) {
           if (a.length <= 0) return a;
           var s = $.parseHTML(a),
            e = '';
           return (
            $.each(s, function (r, t) {
             t.classList !== void 0 && t.classList.contains('user-name')
              ? (e = e + t.lastChild.firstChild.textContent)
              : t.innerText === void 0
                ? (e = e + t.textContent)
                : (e = e + t.innerText);
            }),
            e
           );
          },
         },
        },
       },
       {
        extend: 'pdf',
        text: '<i class="ti ti-file-description me-1"></i>Pdf',
        className: 'dropdown-item',
        exportOptions: {
         columns: [3, 4, 5, 6, 7],
         format: {
          body: function (a, l, n) {
           if (a.length <= 0) return a;
           var s = $.parseHTML(a),
            e = '';
           return (
            $.each(s, function (r, t) {
             t.classList !== void 0 && t.classList.contains('user-name')
              ? (e = e + t.lastChild.firstChild.textContent)
              : t.innerText === void 0
                ? (e = e + t.textContent)
                : (e = e + t.innerText);
            }),
            e
           );
          },
         },
        },
       },
       {
        extend: 'copy',
        text: '<i class="ti ti-copy me-1" ></i>کپی',
        className: 'dropdown-item',
        exportOptions: {
         columns: [3, 4, 5, 6, 7],
         format: {
          body: function (a, l, n) {
           if (a.length <= 0) return a;
           var s = $.parseHTML(a),
            e = '';
           return (
            $.each(s, function (r, t) {
             t.classList !== void 0 && t.classList.contains('user-name')
              ? (e = e + t.lastChild.firstChild.textContent)
              : t.innerText === void 0
                ? (e = e + t.textContent)
                : (e = e + t.innerText);
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
       '<i class="ti ti-plus me-sm-1"></i> <span class="d-none d-sm-inline-block">افزودن رکورد</span>',
      className: 'create-new btn btn-primary waves-effect waves-light',
     },
    ],
    responsive: {
     details: {
      display: $.fn.dataTable.Responsive.display.modal({
       header: function (a) {
        var l = a.data();
        return 'جزئیات ' + l.full_name;
       },
      }),
      type: 'column',
      renderer: function (a, l, n) {
       var s = $.map(n, function (e, r) {
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
       return s ? $('<table class="table"/><tbody />').append(s) : !1;
      },
     },
    },
   })),
   $('div.head-label').html(
    '<h5 class="card-title mb-0">جدول داده با کلید</h5>',
   ));
 var h = 101;
 b.on('core.form.valid', function () {
  var a = $('.add-new-record .dt-full-name').val(),
   l = $('.add-new-record .dt-post').val(),
   n = $('.add-new-record .dt-email').val(),
   s = $('.add-new-record .dt-date').val(),
   e = $('.add-new-record .dt-salary').val();
  a != '' &&
   (f.row
    .add({
     id: h,
     full_name: a,
     post: l,
     email: n,
     start_date: s,
     salary: e + 'ءتء',
     status: 5,
    })
    .draw(),
   h++,
   g.hide());
 }),
  $('.datatables-basic tbody').on('click', '.delete-record', function () {
   f.row($(this).parents('tr')).remove().draw();
  }),
  c.length &&
   c.DataTable({
    ajax: assetsPath + 'json/table-datatable.json',
    language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
    columns: [
     { data: 'full_name' },
     { data: 'email' },
     { data: 'city' },
     { data: 'post' },
     { data: 'salary' },
     { data: 'status' },
     { data: '' },
    ],
    columnDefs: [
     {
      targets: -2,
      render: function (a, l, n, s) {
       var e = n.status,
        r = {
         1: { title: 'استعفاداده', class: 'bg-label-primary' },
         2: { title: 'حرفه‌ای', class: ' bg-label-success' },
         3: { title: 'ردشده', class: ' bg-label-danger' },
         4: { title: 'درحال بررسی', class: ' bg-label-warning' },
         5: { title: 'تایید شده', class: ' bg-label-info' },
        };
       return typeof r[e] > 'u'
        ? a
        : '<span class="badge ' + r[e].class + '">' + r[e].title + '</span>';
      },
     },
     {
      targets: -1,
      title: 'عملیات',
      orderable: !1,
      render: function (a, l, n, s) {
       return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="text-primary ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="text-primary ti ti-pencil"></i></a>';
      },
     },
    ],
    dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
    displayLength: 7,
    lengthMenu: [7, 10, 25, 50, 75, 100],
   });
 var o = 2;
 if (i.length) {
  var p = i.DataTable({
   ajax: assetsPath + 'json/table-datatable.json',
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   columns: [
    { data: '' },
    { data: 'full_name' },
    { data: 'post' },
    { data: 'email' },
    { data: 'city' },
    { data: 'start_date' },
    { data: 'salary' },
    { data: 'status' },
    { data: '' },
   ],
   columnDefs: [
    {
     className: 'control',
     orderable: !1,
     targets: 0,
     searchable: !1,
     render: function (a, l, n, s) {
      return '';
     },
    },
    { visible: !1, targets: o },
    {
     targets: -2,
     render: function (a, l, n, s) {
      var e = n.status,
       r = {
        1: { title: 'استعفاداده', class: 'bg-label-primary' },
        2: { title: 'حرفه‌ای', class: ' bg-label-success' },
        3: { title: 'ردشده', class: ' bg-label-danger' },
        4: { title: 'درحال بررسی', class: ' bg-label-warning' },
        5: { title: 'تایید شده', class: ' bg-label-info' },
       };
      return typeof r[e] > 'u'
       ? a
       : '<span class="badge ' + r[e].class + '">' + r[e].title + '</span>';
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     orderable: !1,
     searchable: !1,
     render: function (a, l, n, s) {
      return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="text-primary ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="text-primary ti ti-pencil"></i></a>';
     },
    },
   ],
   order: [[o, 'asc']],
   dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   displayLength: 7,
   lengthMenu: [7, 10, 25, 50, 75, 100],
   drawCallback: function (a) {
    var l = this.api(),
     n = l.rows({ page: 'current' }).nodes(),
     s = null;
    l.column(o, { page: 'current' })
     .data()
     .each(function (e, r) {
      s !== e &&
       ($(n)
        .eq(r)
        .before('<tr class="group"><td colspan="8">' + e + '</td></tr>'),
       (s = e));
     });
   },
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var l = a.data();
       return 'جزئیات ' + l.full_name;
      },
     }),
     type: 'column',
     renderer: function (a, l, n) {
      var s = $.map(n, function (e, r) {
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
      return s ? $('<table class="table"/><tbody />').append(s) : !1;
     },
    },
   },
  });
  $('.dt-row-grouping tbody').on('click', 'tr.group', function () {
   var a = p.order()[0];
   a[0] === o && a[1] === 'asc'
    ? p.order([o, 'desc']).draw()
    : p.order([o, 'asc']).draw();
  });
 }
 var y = 'German';
 d.length &&
  d.DataTable({
   ajax: assetsPath + 'json/table-datatable.json',
   columns: [
    { data: '' },
    { data: 'full_name' },
    { data: 'post' },
    { data: 'email' },
    { data: 'start_date' },
    { data: 'salary' },
    { data: 'status' },
    { data: '' },
   ],
   columnDefs: [
    {
     className: 'control',
     orderable: !1,
     targets: 0,
     searchable: !1,
     render: function (a, l, n, s) {
      return '';
     },
    },
    {
     targets: -2,
     render: function (a, l, n, s) {
      var e = n.status,
       r = {
        1: { title: 'استعفاداده', class: 'bg-label-primary' },
        2: { title: 'حرفه‌ای', class: ' bg-label-success' },
        3: { title: 'ردشده', class: ' bg-label-danger' },
        4: { title: 'درحال بررسی', class: ' bg-label-warning' },
        5: { title: 'تایید شده', class: ' bg-label-info' },
       };
      return typeof r[e] > 'u'
       ? a
       : '<span class="badge ' + r[e].class + '">' + r[e].title + '</span>';
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     orderable: !1,
     searchable: !1,
     render: function (a, l, n, s) {
      return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="text-primary ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="text-primary ti ti-pencil"></i></a>';
     },
    },
   ],
   language: {
    url: '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/' + y + '.json',
   },
   displayLength: 7,
   dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   lengthMenu: [7, 10, 25, 50, 75, 100],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var l = a.data();
       return 'جزئیات ' + l.full_name;
      },
     }),
     type: 'column',
     renderer: function (a, l, n) {
      var s = $.map(n, function (e, r) {
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
      return s ? $('<table class="table"/><tbody />').append(s) : !1;
     },
    },
   },
  }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
