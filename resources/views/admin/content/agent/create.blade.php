@extends('admin.content.layouts/layoutMaster')

@section('title', 'افزودن گزارش کیف پول جدید   ')

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
      <div class="app-content-body">

        <div class="bg-white-only lter b-b wrapper-md clrfix">

          <h1 class="m-n font-thin h3"> گزارش کیف پول</h1>


        </div>
        <div class="wrapper-md w-100">

          <div class="panel panel-default">
            <div class="panel-heading">اضافه کردن گزارش کیف پول</div>
            <div class="panel-body">

              <form method="post"
                    action="?mod=zone"
                    class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-lg-2 mt-3">تاریخ ثبت<span class="text-danger">*</span> </label>
                  <div class="col-lg-12 mt-3"><input type="text"
                           class="form-control"
                           name="name"></div>
                </div>
                <div class="form-group">
                  <label class="control-label col-lg-2 mt-3"> مبلغ<span class="text-danger">*</span> </label>
                  <div class="col-lg-12 mt-3"><input type="text"
                           class="form-control"
                           name="name"></div>
                </div>
                <div class="form-group">
                  <label class="control-label col-lg-2 mt-3">وضعیت</label>
                  <div class="col-lg-12 mt-3"><select name="status"
                            class="form-control">
                      <option value="1">فعال</option>
                      <option value="0">غیرفعال</option>
                      <option value="2">درانتظار درخواست</option>
                    </select> </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-lg-2 mt-3">توضیح :</label>
                  <div class="col-lg-12 mt-3"><input type="text"
                           name="price_shipping"
                           class="form-control numberkey"
                           placeholder="   "></div>
                </div>
                <div class="col-lg-offset-2 mt-4"><button type="submit"
                          class="btn btn-success w-100 btn-lg">اضافه کردن</button></div>
              </form>

            </div>

          </div>

        </div>
      </div>
      @endsection
