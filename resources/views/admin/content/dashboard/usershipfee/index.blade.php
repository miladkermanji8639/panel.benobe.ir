@extends('admin.content.layouts/layoutMaster')

@section('title', 'بسته ها   ')

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
            <span class="text-muted fw-light">بسته های حق عضویت  /</span>
            لیست بسته های حق عضویت
          </h4>

         
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">لیست بسته های حق عضویت</h5>
              
            </div>
            <div class="card-datatable table-responsive">
              <div id="DataTables_Table_0_wrapper"
                   class="dataTables_wrapper dt-bootstrap5 no-footer">
                <div class="card-header d-flex border-top rounded-0 flex-wrap py-2">
                  <div class="me-5 ms-n2 pe-5">
                    <div id="DataTables_Table_0_filter"
                         class="dataTables_filter"><label><input type="search"
                               class="form-control"
                               placeholder="جستجو بسته "
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
                                tabindex="0" onclick="location.href='{{ route('admin.Dashboard.usershipfee.create') }}'"
                                aria-controls="DataTables_Table_0"
                                type="button"><span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span
                                  class="d-none d-sm-inline-block">افزودن بسته های حق عضویت</span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <table class="datatables-products table dataTable no-footer dtr-column collapsed"
                       id="DataTables_Table_0"
                       aria-describedby="DataTables_Table_0_info"
                       style="width: 1599px;">
                  <thead class="border-top">
                    <tr>
                      <th class="control sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 0px;"
                          aria-label=""></th>
                      <th class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                          rowspan="1"
                          colspan="1"
                          style="width: 18px;"
                          data-col="1"
                          aria-label=""><input type="checkbox"
                               class="form-check-input"></th>
                      <th class="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 462px;"
                          aria-label="بسته : فعال سازی نمایش به صورت نزولی"
                          aria-sort="ascending">اسم استان</th>
                      
                      
                      <th class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 101px;"
                          aria-label="کد بسته : فعال سازی نمایش به صورت صعودی">کد استان</th>
                      
                     
                      <th class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 105px;"
                          aria-label="وضعیت: فعال سازی نمایش به صورت صعودی">وضعیت</th>
                      <th class="sorting_disabled dtr-hidden"
                          rowspan="1"
                          colspan="1"
                          
                          aria-label="عملیات">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td class="control"
                          tabindex="0"
                          style=""></td>
                      <td class="dt-checkboxes-cell"><input type="checkbox"
                               class="dt-checkboxes form-check-input"></td>
                      <td class="sorting_1">
                        <div class="d-flex justify-content-start align-items-center product-name">
                         
                          <div class="d-flex flex-column">
                            <h6 class="text-body text-nowrap mb-0">    کردستان  </h6>
                          </div>
                        </div>
                      </td>
                      
                      
                      <td><span>41867</span></td>
                     
                      <td class=""
                          style=""><span class="badge bg-label-danger"
                              text-capitalized="">غیرفعال</span></td>
                      <td class="dtr-hidden"
                          style="">
                        <div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i
                               class="ti ti-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i
                               class="ti ti-trash"></i></button><button
                                  class="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                  data-bs-toggle="dropdown"><i class="ti ti-dots-vertical me-2"></i></button>
                          <div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:0;"
                               class="dropdown-item">مشاهده</a><a href="javascript:0;"
                               class="dropdown-item">مسدود</a></div>
                        </div>
                      </td>
                    </tr>
                      <tr class="even">
                      <td class="control"
                          tabindex="0"
                          style=""></td>
                      <td class="dt-checkboxes-cell"><input type="checkbox"
                               class="dt-checkboxes form-check-input"></td>
                      <td class="sorting_1">
                        <div class="d-flex justify-content-start align-items-center product-name">
                         
                          <div class="d-flex flex-column">
                            <h6 class="text-body text-nowrap mb-0">    کردستان  </h6>
                          </div>
                        </div>
                      </td>
                      
                      
                      <td><span>41867</span></td>
                     
                      <td class=""
                          style=""><span class="badge bg-label-danger"
                              text-capitalized="">غیرفعال</span></td>
                      <td class="dtr-hidden"
                          style="">
                        <div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i
                               class="ti ti-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i
                               class="ti ti-trash"></i></button><button
                                  class="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                  data-bs-toggle="dropdown"><i class="ti ti-dots-vertical me-2"></i></button>
                          <div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:0;"
                               class="dropdown-item">مشاهده</a><a href="javascript:0;"
                               class="dropdown-item">مسدود</a></div>
                        </div>
                      </td>
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
