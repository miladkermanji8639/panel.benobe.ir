@extends('admin.content.layouts.layoutMaster')

@section('title', ' برترین پزشکان و مشاوران سایت   ')

@section('vendor-style')
@vite(['resources/assets/vendor/libs/apex-charts/apex-charts.scss'])
  @endsection

  @section('vendor-script')
  @vite(['resources/assets/vendor/libs/apex-charts/apexcharts.js'])
    @endsection

    @section('page-script')
    @vite(['resources/assets/js/dashboards-crm.js'])
      @endsection

      @section('content')
      <div class="content-wrapper">

        <!-- Content -->
        <div class="flex-grow-1 container-p-y container-fluid">


          <h4 class="py-3 mb-4">
            <span class="text-muted fw-light">پزشکان برتر /</span>
            لیست پزشکان برتر
          </h4>


          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">لیست پزشکان برتر</h5>

            </div>
            <div class="card-datatable table-responsive">
              <div id="DataTables_Table_0_wrapper"
                   class="dataTables_wrapper dt-bootstrap5 no-footer">
                <div class="card-header d-flex border-top rounded-0 flex-wrap py-2">
                  <div class="me-5 ms-n2 pe-5">
                    <div id="DataTables_Table_0_filter"
                         class="dataTables_filter"><label><input type="search"
                               class="form-control"
                               placeholder="جستجو پزشک"
                               aria-controls="DataTables_Table_0"></label></div>
                  </div>
                  <div class="d-flex justify-content-start justify-content-md-end align-items-baseline">
                    <div
                         class="dt-action-buttons d-flex flex-column align-items-start align-items-md-center justify-content-sm-center mb-3 mb-md-0 pt-0 gap-4 gap-sm-0 flex-sm-row">
                      <div class="dataTables_length"
                           id="DataTables_Table_0_length"><label><select name="DataTables_Table_0_length"
                                  aria-controls="DataTables_Table_0"
                                  class="form-select">
                            <option value="7">7</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="70">70</option>
                            <option value="100">100</option>
                          </select></label></div>
                      <div class="dt-buttons btn-group flex-wrap">
                        <div class="btn-group"><button
                                  class="btn btn-secondary buttons-collection dropdown-toggle btn-label-secondary me-3 waves-effect waves-light"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  type="button"
                                  aria-haspopup="dialog"
                                  aria-expanded="false"><span><i class="ti ti-download me-1 ti-xs"></i>گرفتن
                              خروجی</span></button></div> <button
                                class="btn btn-secondary add-new btn-primary ms-2 ms-sm-0 waves-effect waves-light"
                                tabindex="0"
                                onclick="location.href='{{ route('admin.Dashboard.home_page.create') }}'"
                                aria-controls="DataTables_Table_0"
                                type="button"><span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span
                                  class="d-none d-sm-inline-block">افزودن پزشک</span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>نام</th>
                    <th>مرکز درمان</th>
                    <th>پزشک برتر</th>
                    <th>مشاور تلفنی برتر</th>
                    <th>عملیات</th>
                </tr>
               
            </thead>
            <tbody>
            <tr>
                <td>دکتر شیوا رحیمی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('66')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر حسن معیری</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('65')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر ژیلا یوسفی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('64')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>پریسا پروانه</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('63')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>سونوگرافی</td>
                <td class="text-center">مرکز  رادیولوژی , سونوگرافی و اینترونشن دکتر شریفی</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('62')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>ماموگرافی</td>
                <td class="text-center">مرکز  رادیولوژی , سونوگرافی و اینترونشن دکتر شریفی</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('61')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>رادیولوژی</td>
                <td class="text-center">مرکز  رادیولوژی , سونوگرافی و اینترونشن دکتر شریفی</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('60')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر ابراهیم حجازی مطب سنندج</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('59')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر شهریار کمالی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('56')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر ناصر رحمان پناه</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('55')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر رویا علائی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('53')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>آزمایشگاه تشخیص طبی باران</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('52')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر محمد سردار ظاهریانی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('51')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر انور الیاسی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('50')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>مسعود حسین پناهی</td>
                <td class="text-center">---</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('49')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>حانیه خوش لهجه ثابت</td>
                <td class="text-center">---</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('48')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>خانم دکتر شهناز غفوری</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('47')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>سید محمد ابطحی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('46')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر کیوان صابونی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('42')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر سارا کمال دار</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('41')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر محمد علی خانزاده علیشاهی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('40')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر لطف الله ساعد</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('38')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر شهریار ابراهیمی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('36')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر خالد فتحی زاده</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('35')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر وریا فتحی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('33')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر محمود طاووسی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('32')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>روانشناس مرضیه خمسه</td>
                <td class="text-center">---</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('28')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر آزاد فتاحی راد</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('27')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر محی الدین حسینی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('26')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر سید عدنان حسامی</td>
                <td class="text-center">---</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('22')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر بیان اسدی</td>
                <td class="text-center">---</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('20')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>روانشناس سحر بهروزیان</td>
                <td class="text-center">---</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('18')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر سونیا شهسواری</td>
                <td class="text-center">---</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('17')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر سیاوش مولانایی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('16')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر امید محمدی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('12')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر منصور مرادی</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('10')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       
            <tr>
                <td>دکتر مهریار خادم</td>
                <td class="text-center">---</td>
                <td class="text-center"><i class="fa fa-check-circle" style="color:green"></i></td>
                <td class="text-center">---</td>
                <td class="text-center"><button type="button" onclick="delete_bestdoctor('9')" class="btn btn-danger btn-sm btn-rounded">حذف</button> </td>
            </tr>
       </tbody>
        </table>
                <div class="row mx-2 mt-4">
                  <div class="col-sm-12 col-md-6">
                    <div class="dataTables_info"
                         id="DataTables_Table_0_info"
                         role="status"
                         aria-live="polite">نمایش 1 تا 7 از 100 ردیف</div>
                  </div>
                  <div class="col-sm-12 col-md-6 ">
                    <div class="dataTables_paginate paging_simple_numbers"
                         id="DataTables_Table_0_paginate">
                      <ul class="pagination">
                        <li class="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0"
                             aria-disabled="true"
                             role="link"
                             data-dt-idx="previous"
                             tabindex="-1"
                             class="page-link">قبلی</a></li>
                        <li class="paginate_button page-item active"><a href="#"
                             aria-controls="DataTables_Table_0"
                             role="link"
                             aria-current="page"
                             data-dt-idx="0"
                             tabindex="0"
                             class="page-link">1</a></li>
                        <li class="paginate_button page-item "><a href="#"
                             aria-controls="DataTables_Table_0"
                             role="link"
                             data-dt-idx="1"
                             tabindex="0"
                             class="page-link">2</a></li>
                        <li class="paginate_button page-item "><a href="#"
                             aria-controls="DataTables_Table_0"
                             role="link"
                             data-dt-idx="2"
                             tabindex="0"
                             class="page-link">3</a></li>
                        <li class="paginate_button page-item "><a href="#"
                             aria-controls="DataTables_Table_0"
                             role="link"
                             data-dt-idx="3"
                             tabindex="0"
                             class="page-link">4</a></li>
                        <li class="paginate_button page-item "><a href="#"
                             aria-controls="DataTables_Table_0"
                             role="link"
                             data-dt-idx="4"
                             tabindex="0"
                             class="page-link">5</a></li>
                        <li class="paginate_button page-item disabled"
                            id="DataTables_Table_0_ellipsis"><a aria-controls="DataTables_Table_0"
                             aria-disabled="true"
                             role="link"
                             data-dt-idx="ellipsis"
                             tabindex="-1"
                             class="page-link">…</a></li>
                        <li class="paginate_button page-item "><a href="#"
                             aria-controls="DataTables_Table_0"
                             role="link"
                             data-dt-idx="14"
                             tabindex="0"
                             class="page-link">15</a></li>
                        <li class="paginate_button page-item next"
                            id="DataTables_Table_0_next"><a href="#"
                             aria-controls="DataTables_Table_0"
                             role="link"
                             data-dt-idx="next"
                             tabindex="0"
                             class="page-link">بعدی</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div style="width: 1%;"></div>
              </div>
            </div>
          </div>


        </div>
        <!-- / Content -->

        <!-- Footer -->
        <!-- Footer-->

        <!--/ Footer-->
        <!-- / Footer -->
        <div class="content-backdrop fade"></div>
      </div>
      @endsection
