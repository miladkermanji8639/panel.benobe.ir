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
            <h1 class="m-n font-thin h3"> افزودن گروه جدید</h1>

          </div>
          <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=comment_doctor"
               class="btn btn-warning btngroup"><i class="fa fa-arrow-right px-2"></i> بازگشت</a> </div>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading"> افزودن گروه</div>


          </div>

          <div class="panel panel-primary">
            <div class="panel-body">

              <form method="post"
                    action=""
                    id="repcomment">
                <input type="hidden"
                       name="mod"
                       value="comment_doctor">
                <input type="hidden"
                       name="action"
                       value="repcomment">
                <input type="hidden"
                       name="comm_id"
                       value="314">
                <div class="form-group mt-3">
                  <label class="control-label">نام گروه : </label>
                  <input type="text" class="form-control mt-2" name="" id="">
                </div>
                <input type="submit"
                       class="btn btn-success mt-3"
                       value="ثبت">
              </form>

            </div>

          </div>
        </div>
      </div>
      @endsection
