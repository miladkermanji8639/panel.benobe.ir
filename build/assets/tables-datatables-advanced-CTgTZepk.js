$(function () {
 var m = $('.datatables-ajax'),
  f = $('.dt-column-search'),
  r = $('.dt-advanced-search'),
  b = $('.dt-responsive'),
  p = $('.start_date'),
  g = $('.end_date'),
  c = $('.flatpickr-range');
 c.length &&
  c.flatpickr({
   mode: 'range',
   locale: 'fa',
   dateFormat: 'm/d/Y',
   orientation: isRtl ? 'auto right' : 'auto left',
   onClose: function (a, e, l) {
    var n = '',
     t = new Date();
    a[0] != null && ((n = moment(a[0]).format('MM/DD/YYYY')), p.val(n)),
     a[1] != null && ((t = moment(a[1]).format('MM/DD/YYYY')), g.val(t)),
     $(c).trigger('change').trigger('keyup');
   },
  });
 function v(a, e) {
  if (a == 5) {
   var l = p.val(),
    n = g.val();
   l !== '' &&
    n !== '' &&
    (($.fn.dataTableExt.afnFiltering.length = 0),
    r.dataTable().fnDraw(),
    y(a, l, n)),
    r.dataTable().fnDraw();
  } else r.DataTable().column(a).search(e, !1, !0).draw();
 }
 $.fn.dataTableExt.afnFiltering.length = 0;
 var y = function (a, e, l) {
   $.fn.dataTableExt.afnFiltering.push(function (n, t, s) {
    var d = u(t[a]),
     o = u(e),
     i = u(l);
    return (o <= d && d <= i) || (d >= o && i === '' && o !== '')
     ? !0
     : d <= i && o === '' && i !== '';
   });
  },
  u = function (a) {
   var e = new Date(a),
    l =
     e.getFullYear() +
     '' +
     ('0' + (e.getMonth() + 1)).slice(-2) +
     ('0' + e.getDate()).slice(-2);
   return l;
  };
 if (
  (m.length &&
   m.dataTable({
    language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
    processing: !0,
    ajax: assetsPath + 'json/ajax.php',
    dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
   }),
  f.length)
 ) {
  $('.dt-column-search thead tr').clone(!0).appendTo('.dt-column-search thead'),
   $('.dt-column-search thead tr:eq(1) th').each(function (a) {
    var e = $(this).text();
    $(this).html(
     '<input type="text" class="form-control" placeholder="جستجو ' + e + '" />',
    ),
     $('input', this).on('keyup change', function () {
      h.column(a).search() !== this.value &&
       h.column(a).search(this.value).draw();
     });
   });
  var h = f.DataTable({
   ajax: assetsPath + 'json/table-datatable.json',
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   columns: [
    { data: 'full_name' },
    { data: 'email' },
    { data: 'post' },
    { data: 'city' },
    { data: 'start_date' },
    { data: 'salary' },
   ],
   orderCellsTop: !0,
   dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
  });
 }
 r.length &&
  r.DataTable({
   language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
   dom: "<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-6'i><'col-sm-12 col-md-6 dataTables_pager'p>>",
   ajax: assetsPath + 'json/table-datatable.json',
   columns: [
    { data: '' },
    { data: 'full_name' },
    { data: 'email' },
    { data: 'post' },
    { data: 'city' },
    { data: 'start_date' },
    { data: 'salary' },
   ],
   columnDefs: [
    {
     className: 'control',
     orderable: !1,
     targets: 0,
     render: function (a, e, l, n) {
      return '';
     },
    },
   ],
   orderCellsTop: !0,
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (a) {
       var e = a.data();
       return 'جزئیات ' + e.full_name;
      },
     }),
     type: 'column',
     renderer: function (a, e, l) {
      var n = $.map(l, function (t, s) {
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
      return n ? $('<table class="table"/><tbody />').append(n) : !1;
     },
    },
   },
  }),
  $('input.dt-input').on('keyup', function () {
   v($(this).attr('data-column'), $(this).val());
  }),
  b.length &&
   b.DataTable({
    language: { url: assetsPath + 'json/i18n/datatables-bs5/fa.json' },
    ajax: assetsPath + 'json/table-datatable.json',
    columns: [
     { data: '' },
     { data: 'full_name' },
     { data: 'email' },
     { data: 'post' },
     { data: 'city' },
     { data: 'start_date' },
     { data: 'salary' },
     { data: 'age' },
     { data: 'experience' },
     { data: 'status' },
    ],
    columnDefs: [
     {
      className: 'control',
      orderable: !1,
      targets: 0,
      searchable: !1,
      render: function (a, e, l, n) {
       return '';
      },
     },
     {
      targets: -1,
      render: function (a, e, l, n) {
       var t = l.status,
        s = {
         1: { title: 'استعفاداده', class: 'bg-label-primary' },
         2: { title: 'حرفه‌ای', class: ' bg-label-success' },
         3: { title: 'ردشده', class: ' bg-label-danger' },
         4: { title: 'درحال بررسی', class: ' bg-label-warning' },
         5: { title: 'تایید شده', class: ' bg-label-info' },
        };
       return typeof s[t] > 'u'
        ? a
        : '<span class="badge ' + s[t].class + '">' + s[t].title + '</span>';
      },
     },
    ],
    destroy: !0,
    dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
    responsive: {
     details: {
      display: $.fn.dataTable.Responsive.display.modal({
       header: function (a) {
        var e = a.data();
        return 'جزئیات ' + e.full_name;
       },
      }),
      type: 'column',
      renderer: function (a, e, l) {
       var n = $.map(l, function (t, s) {
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
       return n ? $('<table class="table"/><tbody />').append(n) : !1;
      },
     },
    },
   }),
  setTimeout(() => {
   $('.dataTables_filter .form-control').removeClass('form-control-sm'),
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 200);
});
