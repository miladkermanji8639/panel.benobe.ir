@extends('admin.content.layouts/layoutMaster')

@section('title', 'تخصص ها ')

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


    <h4 class="py-3 mb-4">
      <span class="text-muted fw-light">تخصص ها /</span>
      لیست تخصص ها
    </h4>


    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">لیست تخصص ها</h5>
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
            <div class="me-5 ms-n2 pe-5">
              <div id="DataTables_Table_0_filter"
                   class="dataTables_filter">
                <input type="search"
                       class="form-control"
                       placeholder="جستجو تخصص "
                       id="searchZone"
                       name="search"
                       value="">

              </div>
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
                          onclick="location.href='{{ route('admin.Dashboard.specialty.create') }}'"
                          aria-controls="DataTables_Table_0"
                          type="button"><span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span
                            class="d-none d-sm-inline-block">افزودن تخصص </span></span></button>
                </div>
              </div>
            </div>
          </div>
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered"
                   id="tbl_search">
              <thead>
                <tr>
                  <th class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                      rowspan="1"
                      colspan="1"
                      style="width: 18px;"
                      data-col="1"
                      aria-label=""><input type="checkbox"
                           class="form-check-input"></th>
                  <th>کد تخصص </th>
                  <th>نام تخصص </th>
                  <th>وضعیت</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody class="all-data"
                     id="tbody">
                @foreach ($specialties as $specialty)
                <tr>
                  <td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                      rowspan="1"
                      colspan="1"
                      style="width: 18px;"
                      data-col="1"
                      aria-label=""><input type="checkbox"
                           class="form-check-input"></td>
                  <td>

                    <span class="fw-medium"> {{ $specialty->id }}</span>
                  </td>
                  <td> {{ $specialty->name }}</td>

                  <td>
                    <span id="{{ $specialty->id }}"
                          title="برای فعال یا غیر فعالسازی وضعیت کلیک کنید"
                          onclick="changeStatus({{ $specialty->id }})"
                          data-url="{{ route('admin.Dashboard.specialty.status', $specialty->id) }}"
                          class="cursor-pointer badge bg-label-{{ $specialty->status==1 ? 'success':'danger' }} me-1"
                          {{
                          $specialty->status===1 ? 'active' :'deactive' }}>
                      {{ $specialty->status===0 ? 'غیر فعال' : 'فعال' }}
                    </span>

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
                           onclick="location.href='{{ url('admin/dashboard/specialty/show/'.$specialty->id) }}'"
                           href="javascript:void(0);">
                          <i class="ti ti-eye me-1"></i>
                          مشاهده زیردسته
                        </a>
                        <a class="dropdown-item"
                           onclick="location.href='{{ url('admin/dashboard/specialty/edit/'.$specialty->id) }}'"
                           href="javascript:void(0);">
                          <i class="ti ti-pencil me-1"></i>
                          ویرایش
                        </a>


                        <form method="POST"
                              class=""
                              action="{{ url('admin/dashboard/specialty/delete/'.$specialty->id) }}">
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


            <div class="col-sm-12 col-md-6 ">
              <div class="dataTables_paginate paging_simple_numbers"
                   id="DataTables_Table_0_paginate">
                {{ $specialties->links("pagination::bootstrap-5") }}
              </div>
            </div>
          </div>
          <div style="width: 1%;"></div>
        </div>
      </div>
    </div>


  </div>
  {{-- ajax search --}}
  @include('admin.content.my-tools.ajax-search',['route_name'=>'admin.Dashboard.specialty.search-specialty'])
  {{-- ajax search --}}


  <script type="text/javascript">
    // change status code
  function changeStatus(id){
            var element = $("#" + id)
            var url = element.attr('data-url')
            var elementValue = !element.prop('active');

            $.ajax({
                url : url,
                type : "GET",
                success : function(response){
                    if(response.status){
                        if(response.active){
                            element.prop('active', true);
                            element.html('فعال')
                            element.removeClass('badge bg-label-danger')
                            element.addClass('badge bg-label-success')
                            successToast(' وضعیت تخصص  با موفقیت فعال شد')
                            
                        }
                        else{
                            element.prop('active', false);
                            element.html('غیر فعال')
                            element.removeClass('badge bg-label-success')
                            element.addClass('badge bg-label-danger')
                            successToast(' وضعیت تخصص  با موفقیت غیر فعال شد')
                        }
                    }
                    else{
                        element.prop('active', elementValue);
                        errorToast('هنگام ویرایش مشکلی بوجود امده است')
                    }
                },
                error : function(){
                    element.prop('active', elementValue);
                    errorToast('ارتباط برقرار نشد')
                }
            });

            function successToast(message){

                var successToastTag = '<section class="toast" data-delay="5000">\n' +
                    '<section class="toast-body py-3 d-flex bg-success text-white">\n' +
                        '<strong class="ml-auto">' + message + '</strong>\n' +
                            '</section>\n' +
                            '</section>';

                            $('.toast-wrapper').append(successToastTag);
                            $('.toast').toast('show').delay(5500).queue(function() {
                                $(this).remove();
                            })
            }

            function errorToast(message){

                var errorToastTag = '<section class="toast" data-delay="5000">\n' +
                    '<section class="toast-body py-3 d-flex bg-danger text-white">\n' +
                        '<strong class="ml-auto">' + message + '</strong>\n' +
                            '</section>\n' +
                            '</section>';

                            $('.toast-wrapper').append(errorToastTag);
                            $('.toast').toast('show').delay(5500).queue(function() {
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