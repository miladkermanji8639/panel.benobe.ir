/**
 * Page User List
 */

'use strict';

// Datatable (jquery)
$(function () {
 // Variable declaration for table
 var dt_user_table = $('.datatables-users'),
  select2 = $('.select2'),
  userView = baseUrl + 'app/user/view/account',
  offCanvasForm = $('#offcanvasAddUser');

 if (select2.length) {
  var $this = select2;
  $this.wrap('<div class="position-relative"></div>').select2({
   placeholder: 'انتخاب کشور',
   dropdownParent: $this.parent(),
  });
 }

 // ajax setup
 $.ajaxSetup({
  headers: {
   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
  },
 });

 // Users datatable
 if (dt_user_table.length) {
  var dt_user = dt_user_table.DataTable({
   processing: true,
   serverSide: true,
   ajax: {
    url: baseUrl + 'user-list',
   },
   columns: [
    // columns according to JSON
    { data: '' },
    { data: 'id' },
    { data: 'name' },
    { data: 'email' },
    { data: 'email_verified_at' },
    { data: 'action' },
   ],
   columnDefs: [
    {
     // For Responsive
     className: 'control',
     searchable: false,
     orderable: false,
     responsivePriority: 2,
     targets: 0,
     render: function (data, type, full, meta) {
      return '';
     },
    },
    {
     searchable: false,
     orderable: false,
     targets: 1,
     render: function (data, type, full, meta) {
      return `<span>${full.fake_id}</span>`;
     },
    },
    {
     // User full name
     targets: 2,
     responsivePriority: 4,
     render: function (data, type, full, meta) {
      var $name = full['name'];

      // For Avatar badge
      var stateNum = Math.floor(Math.random() * 6);
      var states = [
       'success',
       'danger',
       'warning',
       'info',
       'dark',
       'primary',
       'secondary',
      ];
      var $state = states[stateNum],
       $output;
      let nameParts = $name.split(' ');
      let $initials = nameParts[0].charAt(0) + '‌' + nameParts[1].charAt(0);

      $output =
       '<span class="avatar-initial rounded bg-label-' +
       $state +
       '">' +
       $initials +
       '</span>';
      // Creates full output for row
      var $row_output =
       '<div class="d-flex justify-content-start align-items-center user-name">' +
       '<div class="avatar-wrapper">' +
       '<div class="avatar avatar-sm me-3">' +
       $output +
       '</div>' +
       '</div>' +
       '<div class="d-flex flex-column">' +
       '<a href="' +
       userView +
       '" class="text-body text-truncate"><span class="fw-medium">' +
       $name +
       '</span></a>' +
       '</div>' +
       '</div>';
      return $row_output;
     },
    },
    {
     // User email
     targets: 3,
     render: function (data, type, full, meta) {
      var $email = full['email'];

      return '<span class="user-email">' + $email + '</span>';
     },
    },
    {
     // email verify
     targets: 4,
     className: 'text-center',
     render: function (data, type, full, meta) {
      var $verified = full['email_verified_at'];
      return `${
       $verified
        ? '<i class="ti fs-4 ti-shield-check text-success"></i>'
        : '<i class="ti fs-4 ti-shield-x text-danger" ></i>'
      }`;
     },
    },
    {
     // Actions
     targets: -1,
     title: 'عملیات',
     searchable: false,
     orderable: false,
     render: function (data, type, full, meta) {
      return (
       '<div class="d-inline-block text-nowrap">' +
       `<button class="btn btn-sm btn-icon edit-record" data-id="${full['id']}" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddUser"><i class="ti ti-edit"></i></button>` +
       `<button class="btn btn-sm btn-icon delete-record" data-id="${full['id']}"><i class="ti ti-trash"></i></button>` +
       '<button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button>' +
       '<div class="dropdown-menu dropdown-menu-end m-0">' +
       '<a href="' +
       userView +
       '" class="dropdown-item">مشاهده</a>' +
       '<a href="javascript:;" class="dropdown-item">مسدودسازی</a>' +
       '</div>' +
       '</div>'
      );
     },
    },
   ],
   order: [[2, 'desc']],
   dom:
    '<"row mx-2"' +
    '<"col-md-2"<"me-3"l>>' +
    '<"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>' +
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
        // prevent avatar to be print
        format: {
         body: function (inner, coldex, rowdex) {
          if (inner.length <= 0) return inner;
          var el = $.parseHTML(inner);
          var result = '';
          $.each(el, function (index, item) {
           if (
            item.classList !== undefined &&
            item.classList.contains('user-name')
           ) {
            result = result + item.lastChild.textContent;
           } else result = result + item.innerText;
          });
          return result;
         },
        },
       },
       customize: function (win) {
        //customize print view for dark
        $(win.document.body)
         .css('color', config.colors.headingColor)
         .css('border-color', config.colors.borderColor)
         .css('background-color', config.colors.body);
        $(win.document.body)
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
        // prevent avatar to be print
        format: {
         body: function (inner, coldex, rowdex) {
          if (inner.length <= 0) return inner;
          var el = $.parseHTML(inner);
          var result = '';
          $.each(el, function (index, item) {
           if (item.classList.contains('user-name')) {
            result = result + item.lastChild.textContent;
           } else result = result + item.innerText;
          });
          return result;
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
        // prevent avatar to be display
        format: {
         body: function (inner, coldex, rowdex) {
          if (inner.length <= 0) return inner;
          var el = $.parseHTML(inner);
          var result = '';
          $.each(el, function (index, item) {
           if (item.classList.contains('user-name')) {
            result = result + item.lastChild.textContent;
           } else result = result + item.innerText;
          });
          return result;
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
        // prevent avatar to be display
        format: {
         body: function (inner, coldex, rowdex) {
          if (inner.length <= 0) return inner;
          var el = $.parseHTML(inner);
          var result = '';
          $.each(el, function (index, item) {
           if (item.classList.contains('user-name')) {
            result = result + item.lastChild.textContent;
           } else result = result + item.innerText;
          });
          return result;
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
        // prevent avatar to be copy
        format: {
         body: function (inner, coldex, rowdex) {
          if (inner.length <= 0) return inner;
          var el = $.parseHTML(inner);
          var result = '';
          $.each(el, function (index, item) {
           if (item.classList.contains('user-name')) {
            result = result + item.lastChild.textContent;
           } else result = result + item.innerText;
          });
          return result;
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
   // For responsive popup
   responsive: {
    details: {
     display: $.fn.dataTable.Responsive.display.modal({
      header: function (row) {
       var data = row.data();
       return 'اطلاعات ' + data['name'];
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
  });
 }

 // Delete Record
 $(document).on('click', '.delete-record', function () {
  var user_id = $(this).data('id'),
   dtrModal = $('.dtr-bs-modal.show');

  // hide responsive modal in small screen
  if (dtrModal.length) {
   dtrModal.modal('hide');
  }

  // sweetalert for confirmation of delete
  Swal.fire({
   title: 'پیام تایید',
   text: 'درصورت انجام عملیات امکان بازگشت وجود نخواهد داشت!',
   icon: 'warning',
   showCancelButton: true,
   confirmButtonText: 'بله، حذف کن!',
   cancelButtonText: 'بازگشت',
   customClass: {
    confirmButton: 'btn btn-primary me-3',
    cancelButton: 'btn btn-label-secondary',
   },
   buttonsStyling: false,
  }).then(function (result) {
   if (result.value) {
    // delete the data
    $.ajax({
     type: 'DELETE',
     url: `${baseUrl}user-list/${user_id}`,
     success: function () {
      dt_user.draw();
     },
     error: function (error) {
      console.log(error);
     },
    });

    // success sweetalert
    Swal.fire({
     icon: 'success',
     title: 'عملیات موفق',
     text: 'کاربر با موفقیت حذف شد!',
     confirmButtonText: 'باشه',
     customClass: {
      confirmButton: 'btn btn-success',
     },
    });
   } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire({
     title: 'لغو شد',
     text: 'عملیات حذف کاربر با موفقیت لغو شد!',
     confirmButtonText: 'باشه',
     icon: 'error',
     customClass: {
      confirmButton: 'btn btn-success',
     },
    });
   }
  });
 });

 // edit record
 $(document).on('click', '.edit-record', function () {
  var user_id = $(this).data('id'),
   dtrModal = $('.dtr-bs-modal.show');

  // hide responsive modal in small screen
  if (dtrModal.length) {
   dtrModal.modal('hide');
  }

  // changing the title of offcanvas
  $('#offcanvasAddUserLabel').html('ویرایش کاربر');

  // get data
  $.get(`${baseUrl}user-list\/${user_id}\/edit`, function (data) {
   $('#user_id').val(data.id);
   $('#add-user-fullname').val(data.name);
   $('#add-user-email').val(data.email);
  });
 });

 // changing the title
 $('.add-new').on('click', function () {
  $('#user_id').val(''); //reseting input field
  $('#offcanvasAddUserLabel').html('افزودن کاربر');
 });

 // Filter form control to default size
 // ? setTimeout used for multilingual table initialization
 setTimeout(() => {
  $('.dataTables_filter .form-control').removeClass('form-control-sm');
  $('.dataTables_length .form-select').removeClass('form-select-sm');
 }, 300);

 // validating form and updating user's data
 const addNewUserForm = document.getElementById('addNewUserForm');

 // user form validation
 const fv = FormValidation.formValidation(addNewUserForm, {
  fields: {
   name: {
    validators: {
     notEmpty: {
      message: 'لطفا نام و نام خانوادگی را وارد کنید',
     },
    },
   },
   email: {
    validators: {
     notEmpty: {
      message: 'ایمیل خود را وارد کنید',
     },
     emailAddress: {
      message: 'فرمت ایمیل صحیح نمی باشد',
     },
    },
   },
   userContact: {
    validators: {
     notEmpty: {
      message: 'شماره موبایل را وارد کنید',
     },
    },
   },
   company: {
    validators: {
     notEmpty: {
      message: 'شرکت را وارد کنید',
     },
    },
   },
  },
  plugins: {
   trigger: new FormValidation.plugins.Trigger(),
   bootstrap5: new FormValidation.plugins.Bootstrap5({
    // Use this for enabling/changing valid/invalid class
    eleValidClass: '',
    rowSelector: function (field, ele) {
     // field is the field name & ele is the field element
     return '.mb-3';
    },
   }),
   submitButton: new FormValidation.plugins.SubmitButton(),
   // Submit the form when all fields are valid
   // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
   autoFocus: new FormValidation.plugins.AutoFocus(),
  },
 }).on('core.form.valid', function () {
  // adding or updating user when form successfully validate
  $.ajax({
   data: $('#addNewUserForm').serialize(),
   url: `${baseUrl}user-list`,
   type: 'POST',
   success: function (status) {
    dt_user.draw();
    offCanvasForm.offcanvas('hide');

    // sweetalert
    Swal.fire({
     icon: 'success',
     title: `عملیات موفق`,
     text: `کاربر با موفقیت افزوده شد.`,
     confirmButtonText: 'باشه',
     customClass: {
      confirmButton: 'btn btn-success',
     },
    });
   },
   error: function (err) {
    offCanvasForm.offcanvas('hide');
    Swal.fire({
     title: 'خطای عملیات!',
     text: 'با این ایمیل قبلا کاربری ثبت نام کرده است.',
     confirmButtonText: 'باشه',
     icon: 'error',
     customClass: {
      confirmButton: 'btn btn-success',
     },
    });
   },
  });
 });

 // clearing form data when offcanvas hidden
 offCanvasForm.on('hidden.bs.offcanvas', function () {
  fv.resetForm(true);
 });

 const phoneMaskList = document.querySelectorAll('.phone-mask');

 // Phone Number
 if (phoneMaskList) {
  phoneMaskList.forEach(function (phoneMask) {
   new Cleave(phoneMask, {
    phone: true,
    phoneRegionCode: 'IR',
   });
  });
 }
});
