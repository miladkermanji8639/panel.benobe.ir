@extends('admin.content.layouts/layoutMaster')

@section('title', '  مدیریت اعضا   ')

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
            <span class="text-muted fw-light">  مدیریت کامل پزشکان / کاربران / مراکز درمان / مدیران   /</span>
             
          </h4>


          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">لیست کاربران  </h5>

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
                              <button
                                class="btn btn-secondary add-new btn-primary ms-2 ms-sm-0 waves-effect waves-light"
                                tabindex="0"
                                onclick="location.href='{{ route('admin.content.users-management.users.create') }}'"
                                aria-controls="DataTables_Table_0"
                                type="button"><span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span
                                  class="d-none d-sm-inline-block">افزودن کاربر جدید </span></span></button>
                              
                            
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
                        <th> آواتار</th>
                        <th>  گروه کاربری</th>
                        <th>  دستگاه</th>
                        <th>  نام و نام خانوادگی</th>
                        <th>  شماره تماس</th>
                        <th> کد ملی</th>
                        <th> تاریخ ثبت نام </th>
                        <th> IP </th>
                        <th> ورود </th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></td>
                        <td>

                          <span class="fw-medium"> 1</span>
                        </td>
                        <td><a href="https://benobe.ir/theme/np_admin/nopardaz/images/avatar.png" target="_blank" class="open-image"><img src="https://benobe.ir/tm.php?src=https://benobe.ir/theme/np_admin/nopardaz/images/avatar.png&amp;w=48&amp;h=48" class="img-responsive img-circle" style="width:32px; height:32px;"></a></td>
                        <td><label class="label label-default">کاربران</label> <br> </td>
                        <td class="text-center"><label class="label label-info" data-toggle="tooltip" title="" data-original-title="سایت"><i class="fa fa-desktop"></i></label></td>
                        
                        <td> 		 روژین ابراهیمی	  </td>
                        <td> 	  09189779965</td>
                        <td>3720263436</td>
                        <td>1403/05/28  08:51</td>
                        <td>2.182.251.207</td>
                        <td><a href="#" class="btn btn-success">ورود</a></td>

                        <td>
                          <span class="badge bg-label-danger me-1">غیرفعال</span>
                        </td>
                        
                        
                        <td>
                          <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"
                                    type="button">
                              <i class="ti ti-dots-vertical"></i>
                            </button>
                            <div class="dropdown-menu">
                              
                              <a class="dropdown-item"
                                 href="javascript:void(0);">
                                <i class="ti ti-door me-1"></i>
                                ورود
                              </a>
                              <a class="dropdown-item" onclick="location.href='{{ route('admin.content.users-management.users.edit') }}'"
                                 href="javascript:void(0);">
                                <i class="ti ti-pencil me-1"></i>
                                ویرایش حساب کاربری
                              </a>
                              <a class="dropdown-item" onclick="location.href='{{ route('admin.content.users-management.users.show') }}'"
                                 href="javascript:void(0);">
                                <i class="ti ti-eye me-1"></i>
                                پرداخت حق عضویت دستی
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
