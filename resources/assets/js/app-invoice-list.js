/**
 * App Invoice List (jquery)
 */

'use strict';

$(function () {
 // Variable declaration for table
 var dt_invoice_table = $('.invoice-list-table');

 // Invoice datatable
 if (dt_invoice_table.length) {
  var dt_invoice = dt_invoice_table.DataTable({
   ajax: assetsPath + 'json/invoice-list.json', // JSON file to add data
   columns: [
    // columns according to JSON
    { data: '' },
    { data: 'invoice_id' },
    { data: 'invoice_status' },
    { data: 'issued_date' },
    { data: 'client_name' },
    { data: 'total' },
    { data: 'balance' },
    { data: 'invoice_status' },
    { data: 'action' },
   ],
   columnDefs: [
    {
     // For Responsive
     className: 'control',
     responsivePriority: 2,
     searchable: false,
     targets: 0,
     render: function (data, type, full, meta) {
      return '';
     },
    },
    {
     // Invoice ID
     targets: 1,
     render: function (data, type, full, meta) {
      var $invoice_id = full['invoice_id'];
      // Creates full output for row
      var $row_output =
       '<a href="' + baseUrl + 'app/invoice/preview">#' + $invoice_id + '</a>';
      return $row_output;
     },
    },
    {
     // Invoice status
     targets: 2,
     render: function (data, type, full, meta) {
      var $invoice_status = full['invoice_status'],
       $due_date = full['due_date'],
       $balance = full['balance'];
      var roleBadgeObj = {
       Sent:
        '<span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30"><i class="ti ti-circle-check ti-sm"></i></span>',
       Draft:
        '<span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30"><i class="ti ti-device-floppy ti-sm"></i></span>',
       'Past Due':
        '<span class="badge badge-center rounded-pill bg-label-danger w-px-30 h-px-30"><i class="ti ti-info-circle ti-sm"></i></span>',
       'Partial Payment':
        '<span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30"><i class="ti ti-circle-half-2 ti-sm"></i></span>',
       Paid:
        '<span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30"><i class="ti ti-chart-pie ti-sm"></i></span>',
       Downloaded:
        '<span class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30"><i class="ti ti-arrow-down-circle ti-sm"></i></span>',
      };
      return (
       "<span data-bs-toggle='tooltip' data-bs-html='true' title='<span>" +
       'پرداخت شده' +
       '<br> <span class="fw-medium">موجودی:</span> ' +
       $balance +
       '<br> <span class="fw-medium">تاریخ:</span> ' +
       $due_date +
       "</span>'>" +
       roleBadgeObj[$invoice_status] +
       '</span>'
      );
     },
    },
    {
     // Client name and Service
     targets: 3,
     responsivePriority: 4,
     render: function (data, type, full, meta) {
      var $name = full['client_name'],
       $service = full['service'],
       $image = full['image'];
      if ($image !== '') {
       // For Avatar image
       var $output =
        '<img src="' +
        assetsPath +
        'img/avatars/' +
        $image +
        '" alt="Avatar" class="rounded-circle">';
      } else {
       // For Avatar badge
       var stateNum = Math.floor(Math.random() * 6),
        states = [
         'success',
         'danger',
         'warning',
         'info',
         'primary',
         'secondary',
        ],
        $state = states[stateNum],
        $name = full['client_name'];
       let nameParts = $name.split(' ');
       let $initials = nameParts[0].charAt(0) + '‌' + nameParts[1].charAt(0);
       $output =
        '<span class="avatar-initial rounded-circle bg-label-' +
        $state +
        '">' +
        $initials +
        '</span>';
      }
      // Creates full output for row
      var $row_output =
       '<div class="d-flex justify-content-start align-items-center">' +
       '<div class="avatar-wrapper">' +
       '<div class="avatar me-2">' +
       $output +
       '</div>' +
       '</div>' +
       '<div class="d-flex flex-column">' +
       '<a href="' +
       baseUrl +
       'pages/profile-user" class="text-body text-truncate"><span class="fw-medium">' +
       $name +
       '</span></a>' +
       '<small class="text-truncate text-muted">' +
       $service +
       '</small>' +
       '</div>' +
       '</div>';
      return $row_output;
     },
    },
    {
     // Total Invoice Amount
     targets: 4,
     render: function (data, type, full, meta) {
      var $total = full['total'];
      return '<span class="d-none">' + $total + '</span>' + $total + ' ءتء';
     },
    },
    {
     // Due Date
     targets: 5,
     render: function (data, type, full, meta) {
      var date = new Date(full['due_date']);
      // Creates full output for row
      var $row_output = date.toLocaleDateString('fa-IR', {
       month: 'short',
       day: 'numeric',
      });
      return $row_output + ' ' + date.getFullYear();
     },
    },
    {
     // Client Balance/Status
     targets: 6,
     orderable: false,
     render: function (data, type, full, meta) {
      var $balance = full['balance'];
      if ($balance === 0) {
       var $badge_class = 'bg-label-success';
       return '<span class="badge ' + $badge_class + '" > پرداخت شد </span>';
      } else {
       return (
        '<span class="d-none">' +
        $balance +
        '</span><bdi>' +
        $balance +
        '</bdi>'
       );
      }
     },
    },
    {
     targets: 7,
     visible: false,
    },
    {
     // Actions
     targets: -1,
     title: 'عملیات',
     searchable: false,
     orderable: false,
     render: function (data, type, full, meta) {
      return (
       '<div class="d-flex align-items-center">' +
       '<a href="javascript:;" data-bs-toggle="tooltip" class="text-body" data-bs-placement="top" title="ارسال ایمیل"><i class="ti ti-mail mx-2 ti-sm"></i></a>' +
       '<a href="' +
       baseUrl +
       'app/invoice/preview" data-bs-toggle="tooltip" class="text-body" data-bs-placement="top" title="نمایش فاکتور"><i class="ti ti-eye mx-2 ti-sm"></i></a>' +
       '<div class="dropdown">' +
       '<a href="javascript:;" class="btn dropdown-toggle hide-arrow text-body p-0" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-sm"></i></a>' +
       '<div class="dropdown-menu dropdown-menu-end">' +
       '<a href="javascript:;" class="dropdown-item">دانلود</a>' +
       '<a href="' +
       baseUrl +
       'app/invoice/edit" class="dropdown-item">ویرایش</a>' +
       '<a href="javascript:;" class="dropdown-item">پرینت</a>' +
       '<div class="dropdown-divider"></div>' +
       '<a href="javascript:;" class="dropdown-item delete-record text-danger">حذف</a>' +
       '</div>' +
       '</div>' +
       '</div>'
      );
     },
    },
   ],
   order: [[1, 'desc']],
   dom:
    '<"row mx-1"' +
    '<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3"B>>' +
    '<"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-3"f<"invoice_status mb-3 mb-md-0">>' +
    '>t' +
    '<"row mx-2"' +
    '<"col-sm-12 col-md-6"i>' +
    '<"col-sm-12 col-md-6"p>' +
    '>',
   language: {
    url: assetsPath + 'json/i18n/datatables-bs5/fa.json',
    sLengthMenu: '_MENU_',
    search: '',
    searchPlaceholder: 'جستجو..',
   },
   // Buttons with Dropdown
   buttons: [
    {
     text:
      '<i class="ti ti-plus me-md-1"></i><span class="d-md-inline-block d-none">ایجاد فاکتور</span>',
     className: 'btn btn-primary waves-effect waves-light',
     action: function (e, dt, button, config) {
      window.location = baseUrl + 'app/invoice/add';
     },
    },
   ],
   // For responsive popup
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (row) {
       var data = row.data();
       return 'جزئیات ' + data['client_name'];
      },
     }),
     type: 'column',
     renderer: function (api, rowIdx, columns) {
      var data = $.map(columns, function (col, i) {
       return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
        ? '<tr data-dt-row="' +
           col.rowIndex +
           '" data-dt-column="' +
           col.columnIndex +
           '">' +
           '<td>' +
           col.title +
           ':' +
           '</td> ' +
           '<td>' +
           col.data +
           '</td>' +
           '</tr>'
        : '';
      }).join('');

      return data ? $('<table class="table"/><tbody />').append(data) : false;
     },
    },
   },
   initComplete: function () {
    // Adding role filter once table initialized
    this.api()
     .columns(7)
     .every(function () {
      var column = this;
      var select = $(
       '<select id="UserRole" class="form-select"><option value=""> انتخاب وضعیت </option></select>',
      )
       .appendTo('.invoice_status')
       .on('change', function () {
        var val = $.fn.dataTable.util.escapeRegex($(this).val());
        column.search(val ? '^' + val : '', true, false).draw();
       });

      select.append(
       '<option value="Downloaded" class="text-capitalize">دانلود شده</option>',
      );
      select.append(
       '<option value="Draft" class="text-capitalize">پیش نویس</option>',
      );
      select.append(
       '<option value="Paid" class="text-capitalize">پرداخت شده</option>',
      );
      select.append(
       '<option value="Partial Payment" class="text-capitalize">پرداخت قسطی</option>',
      );
      select.append(
       '<option value="Past Due" class="text-capitalize">موکول شده</option>',
      );
      select.append(
       '<option value="Sent" class="text-capitalize">ارسال شده</option>',
      );

      /*column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + d + '" class="text-capitalize">' + d + '</option>');
              });*/
     });
   },
  });
 }

 // On each datatable draw, initialize tooltip
 dt_invoice_table.on('draw.dt', function () {
  var tooltipTriggerList = [].slice.call(
   document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl, {
    boundary: document.body,
   });
  });
 });

 // Delete Record
 $('.invoice-list-table tbody').on('click', '.delete-record', function () {
  dt_invoice.row($(this).parents('tr')).remove().draw();
 });

 // Filter form control to default size
 // ? setTimeout used for multilingual table initialization
 setTimeout(() => {
  $('.dataTables_filter .form-control').removeClass('form-control-sm');
  $('.dataTables_length .form-select').removeClass('form-select-sm');
 }, 300);
});
