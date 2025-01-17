$(function () {
 var o = $('.datatables-projects');
 o.length &&
  (o.DataTable({
   ajax: assetsPath + 'json/user-profile.json',
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   columns: [
    { data: '' },
    { data: 'id' },
    { data: 'project_name' },
    { data: 'project_leader' },
    { data: '' },
    { data: 'status' },
    { data: '' },
   ],
   columnDefs: [
    {
     className: 'control',
     searchable: !1,
     orderable: !1,
     responsivePriority: 2,
     targets: 0,
     render: function (r, s, e, d) {
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
    {
     targets: 2,
     responsivePriority: 4,
     render: function (r, s, e, d) {
      var a = e.project_img,
       t = e.project_name,
       n = e.date;
      if (a)
       var c =
        '<img src="' +
        assetsPath +
        'img/icons/brands/' +
        a +
        '" alt="Avatar" class="rounded-circle">';
      else {
       var i = Math.floor(Math.random() * 6),
        m = ['success', 'danger', 'warning', 'info', 'primary', 'secondary'],
        p = m[i],
        t = e.project_name,
        l = t.match(/\b\w/g) || [];
       (l = ((l.shift() || '') + (l.pop() || '')).toUpperCase()),
        (c =
         '<span class="avatar-initial rounded-circle bg-label-' +
         p +
         '">' +
         l +
         '</span>');
      }
      var v =
       '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">' +
       c +
       '</div></div><div class="d-flex flex-column"><span class="text-truncate fw-medium">' +
       t +
       '</span><small class="text-truncate text-muted">' +
       n +
       '</small></div></div>';
      return v;
     },
    },
    {
     targets: 4,
     orderable: !1,
     searchable: !1,
     render: function (r, s, e, d) {
      var a = e.team,
       t;
      t = '<div class="d-flex align-items-center avatar-group">';
      for (var n = 0; n < a.length; n++)
       t +=
        '<div class="avatar avatar-sm"><img src="' +
        assetsPath +
        'img/avatars/' +
        a[n] +
        '" alt="Avatar" class="rounded-circle pull-up"></div>';
      return (t += '</div>'), t;
     },
    },
    {
     targets: -2,
     render: function (r, s, e, d) {
      var a = e.status;
      return (
       '<div class="d-flex align-items-center"><div class="progress w-100 me-3" style="height: 6px;"><div class="progress-bar" style="width: ' +
       a +
       '" aria-valuenow="' +
       a +
       '" aria-valuemin="0" aria-valuemax="100"></div></div><span>' +
       a +
       '</span></div>'
      );
     },
    },
    {
     targets: -1,
     searchable: !1,
     title: 'عملیات',
     orderable: !1,
     render: function (r, s, e, d) {
      return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">جزئیات</a><a href="javascript:;" class="dropdown-item">بایگانی</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">حذف</a></div></div>';
     },
    },
   ],
   order: [[2, 'desc']],
   dom: '<"card-header pb-0 pt-sm-0"<"head-label text-center"><"d-flex justify-content-center justify-content-md-end"f>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   displayLength: 7,
   lengthMenu: [7, 10, 25, 50, 75, 100],
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (r) {
       var s = r.data();
       return 'جزئیات "' + s.project_name + '" پروژه';
      },
     }),
     type: 'column',
     renderer: function (r, s, e) {
      var d = $.map(e, function (a, t) {
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
      return d ? $('<table class="table"/><tbody />').append(d) : !1;
     },
    },
   },
  }),
  $('div.head-label').html('<h5 class="card-title mb-0">پروژه‌ها</h5>')),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
