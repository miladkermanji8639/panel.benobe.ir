@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D8%A7%D9%81%D8%B2%D9%88%D8%AF%D9%86%20%D9%BE%D8%B2%D8%B4%DA%A9%20%D8%AC%D8%AF%DB%8C%D8%AF%20%20%20%26%2339%3B)%0D />

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

        <div class="bg-white-only lter b-b wrapper-md clrfix d-flex justify-content-between">

          <div class="pull-right">
            <h1 class="m-n font-thin h3"> اضافه کردن تنظیمات جدید</h1>

          </div>
          <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=ordervisit"
               class="btn btn-warning btngroup"><i class="fa fa-arrow-right px-2"></i> بازگشت</a> </div>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">اضافه کردن دسته بندی جدید</div>
            <div class="panel-body">

              <form method="post"
                    action=""
                    enctype="multipart/form-data">
                <input type="hidden"
                       name="mod"
                       value="application_main">
                <input type="hidden"
                       name="action"
                       value="save_app_cat">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3">
                      <label>نام دسته بندی</label>
                      <input type="text"
                             name="app_catname"
                             class="form-control"
                             required="">
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3">
                      <label>تصویر یا آیکون</label>
                      <input type="file"
                             name="app_caticon"
                             class="form-control">
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3">
                      <label>وضعیت نمایش در اپ؟</label>
                      <select class="form-control"
                              name="status">
                        <option value="1"
                                selected="">فعال</option>
                        <option value="0">غیرفعال</option>
                      </select>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3">
                      <button type="submit"
                              class="btn btn-success mt-3"><i class="fa fa-check px-2"></i> ذخیره </button>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </form>

            </div>

          </div>

          <form method="post"
                action="">
            <input type="hidden"
                   name="mod"
                   value="application_main">
            <input type="hidden"
                   name="action"
                   value="save_sort">
            
          </form>
        </div>

      </div>
      @endsection
