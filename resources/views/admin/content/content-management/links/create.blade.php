@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA%20%D9%85%D8%B7%D9%84%D8%A8%D9%87%D8%A7%26%2339%3B)%0D />

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

          <h1 class="m-n h3 font-thin">افزودن پیوند
          </h1>

        </div>

        <div class="wrapper-md">

          <div class="panel panel-primary">
            <div class="panel-heading">افزودن پیوند جدید</div>
            <div class="panel-body">

              <form method="post"
                    action=""
                    class="form-horizontal">
                <input type="hidden"
                       name="mod"
                       value="links">
                <input type="hidden"
                       name="action"
                       value="addupdate">
                <div class="form-group mt-3">
                  <label class="col-md-2 control-label">عنوان:</label>
                  <div class="col-md-12"><input type="text"
                           class="form-control"
                           name="name"></div>
                </div>
                <div class="form-group mt-3">
                  <label class="col-md-2 control-label">دسته بندی ها:</label>
                  <div class="col-md-12">
                    <select name="cat"
                            class="form-control">
                      <option value="bottom">پایین سایت</option>
                    </select>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label class="col-md-2 control-label">URL:</label>
                  <div class="col-md-12"><input type="text"
                           class="form-control ltr text-left"
                           placeholder="http://"
                           name="url"></div>
                </div>
                <div class="form-group mt-3">
                  <label class="col-md-2 control-label">Rel:</label>
                  <div class="col-md-12"><select class="form-control"
                            name="rel">
                      <option value="0"
                              selected="">خالی</option>
                      <option value="nofollow">nofollow</option>
                    </select></div>
                </div>

                <div class="col-md-offset-2"><input type="submit"
                         class="btn btn-success mt-3"
                         value="ذخیره و ثبت"></div>
              </form>


            </div>

          </div>

        </div>

      </div>
      @endsection
