@extends('admin.content.layouts/layoutMaster')

@section('title', '  گزارش رزرو و نوبت دهی پزشکان   ')

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
            <span class="text-muted fw-light">  گزارش رزرو و نوبت دهی پزشکان   /</span>
          </h4>


          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">لیست  گزارشات  </h5>

            </div>
            <div class="card-datatable table-responsive">
              <div id="DataTables_Table_0_wrapper"
                   class="dataTables_wrapper dt-bootstrap5 no-footer">
                <div class="card-header d-flex border-top rounded-0 flex-wrap py-2">
                  <div class="me-5 ms-n2 pe-5">
                    <div id="DataTables_Table_0_filter"
                         class="dataTables_filter"><label><input type="search"
                               class="form-control"
                               placeholder="جستجو "
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
                              خروجی</span></button></div> 
                              
                            
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive text-nowrap fs-6">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></th>
                        <th> ردیف</th>
                        <th>تاریخ درخواست</th>
                        <th>مبلغ</th>
                        <th>وضعیت</th>
                        <th>توضیح</th>
                        <th>موبایل</th>
                        <th>نام و نام خانوادگی</th>
                        <th>عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></td>
                        <td>

                          <span class="fw-medium"> 1</span>
                        </td>
                        
                        <td> 		 1403/05/16 21:38  </td>
                        <td> 	 200,000 تومان </td>
                        <td>
                          <span class="badge bg-label-success me-1">پرداخت و شارژ حساب کاربری</span>

                        </td>
                        <td> شارژ حساب کاربری به مبلغ 200000 تومان به کد پیگیری: 127620200322 و شماره تراکنش : 127620200322	  </td>
                        <td>09188774389</td>
                        <td>استیره اسکندری</td>
                        

                      
                        
                        
                        <td>
                          <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"
                                    type="button">
                              <i class="ti ti-dots-vertical"></i>
                            </button>
                            <div class="dropdown-menu">
                              
                              <a class="dropdown-item" onclick="location.href='{{ route('admin.content.doctors.comment-docor.show') }}'"
                                 href="javascript:void(0);">
                                <i class="ti ti-pencil me-1"></i>
                                مشاهده
                              </a>
                              <a class="dropdown-item"
                                 href="javascript:void(0);">
                                <i class="ti ti-trash me-1"></i>
                                حذف
                              </a>
                              
                            </div>
                          </div>
                        </td>
                      </tr>
                      

                    </tbody>
                  </table>
                </div>
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
