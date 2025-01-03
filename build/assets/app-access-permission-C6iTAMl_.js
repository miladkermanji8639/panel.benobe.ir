$(function () {
 var d = $('.datatables-permissions'),
  i,
  r = baseUrl + 'app/user/list';
 d.length &&
  (i = d.DataTable({
   ajax: assetsPath + 'json/permissions-list.json',
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'name' },
    { data: 'assigned_to' },
    { data: 'created_date' },
    { data: '' },
   ],
   columnDefs: [
    {
     className: 'control',
     orderable: !1,
     searchable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (t, s, a, n) {
      return '';
     },
    },
    { targets: 1, searchable: !1, visible: !1 },
    {
     targets: 2,
     render: function (t, s, a, n) {
      var e = a.name;
      return '<span class="text-nowrap">' + e + '</span>';
     },
    },
    {
     targets: 3,
     orderable: !1,
     render: function (t, s, a, n) {
      for (
       var e = a.assigned_to,
        l = '',
        c = {
         Admin:
          '<a href="' +
          r +
          '"><span class="badge bg-label-primary m-1">مدیر</span></a>',
         Manager:
          '<a href="' +
          r +
          '"><span class="badge bg-label-warning m-1">نویسنده</span></a>',
         Users:
          '<a href="' +
          r +
          '"><span class="badge bg-label-success m-1">گرافیست</span></a>',
         Support:
          '<a href="' +
          r +
          '"><span class="badge bg-label-info m-1">پشتیبان</span></a>',
         Restricted:
          '<a href="' +
          r +
          '"><span class="badge bg-label-danger m-1">حسابدار</span></a>',
        },
        o = 0;
       o < e.length;
       o++
      ) {
       var m = e[o];
       l += c[m];
      }
      return '<span class="text-nowrap">' + l + '</span>';
     },
    },
    {
     targets: 4,
     orderable: !1,
     render: function (t, s, a, n) {
      var e = a.created_date;
      return '<span class="text-nowrap">' + e + '</span>';
     },
    },
    {
     targets: -1,
     searchable: !1,
     title: 'عملیات',
     orderable: !1,
     render: function (t, s, a, n) {
      return '<span class="text-nowrap"><button class="btn btn-sm btn-icon me-2" data-bs-target="#editPermissionModal" data-bs-toggle="modal" data-bs-dismiss="modal"><i class="ti ti-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="ti ti-trash"></i></button></span>';
     },
    },
   ],
   order: [[1, 'asc']],
   dom: '<"row mx-1"<"col-sm-12 col-md-3" l><"col-sm-12 col-md-9"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end justify-content-center flex-wrap me-1"<"me-3"f>B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: 'نمایش _MENU_',
    search: 'جستجو',
    searchPlaceholder: 'جستجو..',
   },
   buttons: [
    {
     text: 'افزودن دسترسی',
     className: 'add-new btn btn-primary mb-3 mb-md-0 waves-effect waves-light',
     attr: {
      'data-bs-toggle': 'modal',
      'data-bs-target': '#addPermissionModal',
     },
     init: function (t, s, a) {
      $(s).removeClass('btn-secondary');
     },
    },
   ],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (t) {
       var s = t.data();
       return 'جزئیات ' + s.name;
      },
     }),
     type: 'column',
     renderer: function (t, s, a) {
      var n = $.map(a, function (e, l) {
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
      return n ? $('<table class="table"/><tbody />').append(n) : !1;
     },
    },
   },
   initComplete: function () {
    this.api()
     .columns(3)
     .every(function () {
      var t = this,
       s = $(
        '<select id="UserRole" class="form-select text-capitalize"><option value=""> انتخاب نقش </option></select>',
       )
        .appendTo('.user_role')
        .on('change', function () {
         var a = $.fn.dataTable.util.escapeRegex($(this).val());
         t.search(a ? '^' + a : '', !0, !1).draw();
        });
      t.data()
       .unique()
       .sort()
       .each(function (a, n) {
        s.append(
         '<option value="' + a + '" class="text-capitalize">' + a + '</option>',
        );
       });
     });
   },
  })),
  $('.datatables-permissions tbody').on('click', '.delete-record', function () {
   i.row($(this).parents('tr')).remove().draw();
  }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
