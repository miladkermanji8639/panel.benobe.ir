@extends('admin.content.layouts/layoutMaster')

@section('title', 'استانها ')

@section('vendor-style')
@vite(['resources/assets/vendor/libs/apex-charts/apex-charts.scss'])
  @endsection

  @section('vendor-script')
  @vite(['resources/assets/vendor/libs/apex-charts/apexcharts.js'])
    @endsection

    @section('page-script')
    @vite(['resources/assets/js/dashboards-crm.js'])
      @endsection

      {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> --}}

      @section('content')

      <div class="content-wrapper">

        <!-- Content -->
        <div class="flex-grow-1 container-p-y container-fluid">

          <h4 class="mb-4 py-3">
            <span class="text-muted fw-light">ناحیه ها /</span>
            لیست استانها
          </h4>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">لیست استانها</h5>

              {{-- toast --}}
              <section class="toast-wrapper d-flex flex-column justify-content-center align-items-center">
                @include('admin.content.alerts.toast.error')
                @include('admin.content.alerts.toast.success')
              </section>
              {{-- toast --}}

            </div>
            <div class="card-datatable table-responsive">
              <div id="DataTables_Table_0_wrapper"
                   class="dataTables_wrapper dt-bootstrap5 no-footer">
                <div class="card-header d-flex border-top rounded-0 flex-wrap py-2">
                  <div class="ms-n2 me-5 pe-5">
                    <div id="DataTables_Table_0_filter"
                         class="dataTables_filter">
                      <input type="search"
                             class="form-control"
                             placeholder="جستجو استان"
                             id="searchZone"
                             name="search"
                             value="">

                    </div>
                  </div>
                  <div class="d-flex justify-content-start justify-content-md-end align-items-baseline">
                    <div
                         class="dt-action-buttons d-flex flex-column align-items-start align-items-md-center justify-content-sm-center mb-md-0 gap-sm-0 flex-sm-row mb-3 gap-4 pt-0">
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
                                  class="btn btn-secondary buttons-collection dropdown-toggle btn-label-secondary waves-effect waves-light me-3"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  type="button"
                                  aria-haspopup="dialog"
                                  aria-expanded="false"><span><i class="ti ti-download ti-xs me-1"></i>گرفتن
                              خروجی</span></button></div> <button
                                class="btn btn-secondary add-new btn-primary ms-sm-0 waves-effect waves-light ms-2"
                                tabindex="0"
                                onclick="location.href='{{ route('admin.Dashboard.cities.create') }}'"
                                aria-controls="DataTables_Table_0"
                                type="button"><span><i class="ti ti-plus me-sm-1 ti-xs me-0"></i><span
                                  class="d-none d-sm-inline-block">افزودن ناحیه </span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive text-nowrap">
                  <table class="table-bordered table"
                         id="tbl_search">
                    <thead>
                      <tr>
                        <th class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                            id="dt-checkboxes-select-all"
                            rowspan="1"
                            colspan="1"
                            style="width: 18px;"
                            data-col="1"
                            aria-label=""><input type="checkbox"
                                 class="form-check-input"></th>
                        <th>کد استان</th>
                        <th>نام استان</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                      </tr>
                    </thead>
                    <tbody class="all-data"
                           id="tbody">
                      @foreach($cities as $city)
                        <tr>
                          <td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                              rowspan="1"
                              colspan="1"
                              style="width: 18px;"
                              data-col="1"
                              aria-label=""><input type="checkbox"
                                   class="form-check-input"></td>
                          <td>

                            <span class="fw-medium"> {{ $city->id }}</span>
                          </td>
                          <td> {{ $city->name }}</td>

                          <td>
                            <span id="{{ $city->id }}"
                                  title="برای فعال یا غیر فعالسازی وضعیت کلیک کنید"
                                  onclick="changeStatus({{ $city->id }})"
                                  data-url="{{ route('admin.Dashboard.cities.status', $city->id) }}"
                                  class="badge bg-label-{{ $city->status == 1 ? 'success' : 'danger' }} me-1 cursor-pointer"
                                  {{
                          $city->status === 1 ? 'active' : 'deactive' }}>
                              {{ $city->status === 0 ? 'غیر فعال' : 'فعال' }}
                            </span>

                          </td>
                          <td>
                            <div class="dropdown">
                              <button class="btn dropdown-toggle hide-arrow p-0"
                                      data-bs-toggle="dropdown"
                                      type="button">
                                <i class="ti ti-dots-vertical"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item"
                                   onclick="location.href='{{ url('admin/dashboard/cities/show/' . $city->id) }}'"
                                   href="javascript:void(0);">
                                  <i class="ti ti-eye me-1"></i>
                                  شهرستان
                                </a>
                                <a class="dropdown-item"
                                   onclick="location.href='{{ url('admin/dashboard/cities/edit/' . $city->id) }}'"
                                   href="javascript:void(0);">
                                  <i class="ti ti-pencil me-1"></i>
                                  ویرایش
                                </a>

                                <form method="POST"
                                      class=""
                                      action="{{ url('admin/dashboard/cities/delete/' . $city->id) }}">
                                  {{ csrf_field() }}
                                  {{ method_field('DELETE') }}
                                  <button type="submit"
                                          class="dropdown-item delete"
                                          id="delete">
                                    <i class="ti ti-trash me-1"></i>
                                    حذف
                                  </button>
                                </form>

                              </div>
                            </div>
                          </td>
                        </tr>
                      @endforeach
                    </tbody>
                    {{-- <tbody id="contentZone"
                     class="search-data">

              </tbody> --}}
                  </table>
                </div>
                <div class="row mx-2 mt-4">

                  <div class="col-sm-12 col-md-6">
                    <div class="dataTables_paginate paging_simple_numbers"
                         id="DataTables_Table_0_paginate">
                      {{ $cities->links('pagination::bootstrap-5') }}
                    </div>
                  </div>
                </div>
                <div style="width: 1%;"></div>
              </div>
            </div>
          </div>

        </div>
        {{-- ajax search --}}
        <blade
               include|(%26%2339%3Badmin.content.my-tools.ajax-search%26%2339%3B%2C%20%5B%26%2339%3Broute_name%26%2339%3B%20%3D%3E%20%26%2339%3Badmin.Dashboard.cities.search-zone%26%2339%3B%5D) />
        {{-- ajax search --}}

        <script type="text/javascript">
          // change status code
          function changeStatus(id) {
            var element = $("#" + id)
            var url = element.attr('data-url')
            var elementValue = !element.prop('active');

            $.ajax({
              url: url,
              type: "GET",
              success: function (response) {
                if (response.status) {
                  if (response.active) {
                    element.prop('active', true);
                    element.html('فعال')
                    element.removeClass('badge bg-label-danger')
                    element.addClass('badge bg-label-success')
                    successToast(' وضعیت استان با موفقیت فعال شد')

                  } else {
                    element.prop('active', false);
                    element.html('غیر فعال')
                    element.removeClass('badge bg-label-success')
                    element.addClass('badge bg-label-danger')
                    successToast(' وضعیت استان با موفقیت غیر فعال شد')
                  }
                } else {
                  element.prop('active', elementValue);
                  errorToast('هنگام ویرایش مشکلی بوجود امده است')
                }
              },
              error: function () {
                element.prop('active', elementValue);
                errorToast('ارتباط برقرار نشد')
              }
            });

            function successToast(message) {

              var successToastTag = '<section class="toast" data-delay="5000">\n' +
                '<section class="toast-body py-3 d-flex bg-success text-white">\n' +
                '<strong class="ml-auto">' + message + '</strong>\n' +
                '</section>\n' +
                '</section>';

              $('.toast-wrapper').append(successToastTag);
              $('.toast').toast('show').delay(5500).queue(function () {
                $(this).remove();
              })
            }

            function errorToast(message) {

              var errorToastTag = '<section class="toast" data-delay="5000">\n' +
                '<section class="toast-body py-3 d-flex bg-danger text-white">\n' +
                '<strong class="ml-auto">' + message + '</strong>\n' +
                '</section>\n' +
                '</section>';

              $('.toast-wrapper').append(errorToastTag);
              $('.toast').toast('show').delay(5500).queue(function () {
                $(this).remove();
              })
            }
          }
          // end change status code

        </script>
        <!-- / Content -->

        <!-- Footer -->
        <!-- Footer-->

        <!--/ Footer-->
        <!-- / Footer -->
        <div class="content-backdrop fade"></div>
      </div>
      {{-- @include('admin.content.alerts.sweetalert.delete-confirm',['className'=>'delete']) --}}
      @endsection
