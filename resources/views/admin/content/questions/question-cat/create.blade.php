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

          <h1 class="m-n h3 font-thin">دسته بندی پرسش و پاسخ 
          </h1>

        </div>

        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">افزودن جدید</div>
            <div class="panel-body">

              <form method="post"
                    action="">
                <input type="hidden"
                       name="mod"
                       value="questioncat">
                <input type="hidden"
                       name="action"
                       value="added_and_update">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group mt-3">
                      <label class="control-label">نام دسته بندی</label>
                      <input type="text"
                             placeholder="نام دسته بندی خود را وارد کنید"
                             class="form-control"
                             name="name">
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group mt-3">
                      <label class="control-label">Alt Name</label>
                      <input type="text"
                             placeholder="مثلا: sport"
                             class="form-control"
                             name="alt_name">
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <button type="submit"
                        class="btn btn-success mt-3">ثبت و ذخیره</button>
              </form>

            </div>

          </div>

          
        </div>

      </div>
      @endsection
