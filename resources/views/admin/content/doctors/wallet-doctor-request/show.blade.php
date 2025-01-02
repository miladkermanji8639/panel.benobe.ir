@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D9%88%DB%8C%D8%B1%D8%A7%DB%8C%D8%B4%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%AF%D9%87%DB%8C%20%20%20%26%2339%3B)%0D />

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
            <span class="text-muted fw-light"> درخواست های تسویه حساب کیف پول پزشکان /</span>

          </h4>


          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">جزییات درخواست های تسویه حساب کیف پول پزشکان</h5>

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
                <div class="table-responsive text-nowrap">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                            rowspan="1"
                            colspan="1"
                            style="width: 18px;"
                            data-col="1"
                            aria-label=""><input type="checkbox"
                                 class="form-check-input"></th>
                        <th> ردیف</th>
                        <th> تاریخ درخواست</th>
                        <th> پزشک</th>
                        <th>وضعیت</th>
                        <th>مبلغ (تومان)</th>
                        <th>شماره تماس</th>
                        <th> شرح</th>
                        <th> مبلغ کلی</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                            rowspan="1"
                            colspan="1"
                            style="width: 18px;"
                            data-col="1"
                            aria-label=""><input type="checkbox"
                                 class="form-check-input"></td>
                        <td>
                          <span class="fw-medium"> 1</span>
                        </td>
                        <td>


                          <span class="fw-medium"> 1402/07/23 14:34</span>
                        </td>
                        <td> مسعود حسین پناهی</td>

                        <td>
                          <span class="badge bg-label-success me-1">پرداخت شده</span>
                        </td>
                        <td>
                          112,500
                        </td>
                        <td>
                          09187893549
                        </td>
                        <td>مشاوره آنلاین با پریسا عباسی در تاریخ 1402-07-23 14:18 کد پیگیری 681300</td>
                        <td>112 تومان</td>
                      </tr>
                     

                    </tbody>
                  </table>
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
      <!-- / Content -->

      <!-- Footer -->
      <!-- Footer-->

      <!--/ Footer-->
      <!-- / Footer -->
      <div class="content-backdrop fade"></div>
      </div>
      @endsection
