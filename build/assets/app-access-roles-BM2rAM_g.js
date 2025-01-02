$(function () {
 var r = $('.datatables-users'),
  i = {
   1: { title: 'درانتظار', class: 'bg-label-warning' },
   2: { title: 'فعال', class: 'bg-label-success' },
   3: { title: 'غیرفعال', class: 'bg-label-secondary' },
  },
  n = baseUrl + 'app/user/view/account';
 if (r.length)
  var d = r.DataTable({
   ajax: assetsPath + 'json/user-list.json',
   columns: [
    { data: '' },
    { data: 'full_name' },
    { data: 'role' },
    { data: 'current_plan' },
    { data: 'billing' },
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
     render: function (s, t, e, l) {
      return '';
     },
    },
    {
     targets: 1,
     responsivePriority: 4,
     render: function (s, t, e, l) {
      var a = e.full_name,
       o = e.email,
       c = e.avatar;
      if (c)
       var p =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        c +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var u = Math.floor(Math.random() * 6),
        b = ['success', 'danger', 'warning', 'info', 'primary', 'secondary'],
        f = b[u],
        a = e.full_name;
       let m = a.split(' '),
        g = m[0].charAt(0) + '‌' + m[1].charAt(0);
       p =
        '<span class="avatar-initial rounded-circle bg-label-' +
        f +
        '">' +
        g +
        '</span>';
      }
      var v =
       '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar me-3">' +
       p +
       '</div></div><div class="d-flex flex-column"><a href="' +
       n +
       '" class="text-body text-truncate"><span class="fw-medium">' +
       a +
       '</span></a><small class="text-muted"><bdi>@' +
       o +
       '</bdi></small></div></div>';
      return v;
     },
    },
    {
     targets: 2,
     render: function (s, t, e, l) {
      var a = e.role,
       o = {
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
       o[a] +
       '</span>'
      );
     },
    },
    {
     targets: 3,
     render: function (s, t, e, l) {
      var a = e.current_plan;
      return '<span class="fw-medium">' + a + '</span>';
     },
    },
    {
     targets: 5,
     render: function (s, t, e, l) {
      var a = e.status;
      return (
       '<span class="badge ' +
       i[a].class +
       '" text-capitalized>' +
       i[a].title +
       '</span>'
      );
     },
    },
    {
     targets: -1,
     title: 'عملیات',
     searchable: !1,
     orderable: !1,
     render: function (s, t, e, l) {
      return (
       '<div class="d-flex align-items-center"><a href="' +
       n +
       '" class="btn btn-sm btn-icon"><i class="ti ti-eye"></i></a><a href="javascript:;" class="text-body delete-record"><i class="ti ti-trash ti-sm mx-2"></i></a><a href="javascript:;" class="text-body dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-sm mx-1"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">ویرایش</a><a href="javascript:;" class="dropdown-item">مسدودسازی</a></div></div>'
      );
     },
    },
   ],
   order: [[1, 'desc']],
   dom: '<"row mx-2"<"col-sm-12 col-md-4 col-lg-6" l><"col-sm-12 col-md-8 col-lg-6"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end justify-content-center align-items-center flex-sm-nowrap flex-wrap me-1"<"me-3"f><"user_role w-px-200 pb-3 pb-sm-0">>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: 'نمایش _MENU_',
    search: 'جستجو',
    searchPlaceholder: 'جستجو..',
   },
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (s) {
       var t = s.data();
       return 'جزئیات ' + t.full_name;
      },
     }),
     type: 'column',
     renderer: function (s, t, e) {
      var l = $.map(e, function (a, o) {
       return a.title !== ''
        ? '<tr data-dt-row="' +
           a.rowIndex +
           '" data-dt-column="' +
           a.columnIndex +
           '"><td>' +
           a.title +
           ':</td> <td>' +
           a.data +
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
      var s = this,
       t = $(
        '<select id="UserRole" class="form-select text-capitalize"><option value=""> انتخاب نقش </option></select>',
       )
        .appendTo('.user_role')
        .on('change', function () {
         var e = $.fn.dataTable.util.escapeRegex($(this).val());
         s.search(e ? '^' + e : '', !0, !1).draw();
        });
      t.append('<option value="Admin" class="text-capitalize">ادمین</option>'),
       t.append(
        '<option value="Author" class="text-capitalize">نویسنده</option>',
       ),
       t.append(
        '<option value="Editor" class="text-capitalize">ویرایشگر</option>',
       ),
       t.append(
        '<option value="Maintainer" class="text-capitalize">مدیرعامل</option>',
       ),
       t.append(
        '<option value="Subscriber" class="text-capitalize">دنبال کننده</option>',
       );
     });
   },
  });
 $('.datatables-users tbody').on('click', '.delete-record', function () {
  d.row($(this).parents('tr')).remove().draw();
 }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
(function () {
 var r = document.querySelectorAll('.role-edit-modal'),
  i = document.querySelector('.add-new-role'),
  n = document.querySelector('.role-title');
 (i.onclick = function () {
  n.innerHTML = 'افزودن نقش جدید';
 }),
  r &&
   r.forEach(function (d) {
    d.onclick = function () {
     n.innerHTML = 'ویرایش نقش';
    };
   });
})();
