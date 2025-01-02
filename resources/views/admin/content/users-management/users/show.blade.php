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
      <link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap.min.css") }}"
            rel="stylesheet">
      <link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap-rtl.min.css") }}"
            rel="stylesheet">
      <link href="{{ asset("admin-assets/css/old-benobe-styles/app_admin.css?v=dddmue") }}"
            rel="stylesheet">
      @section('content')
      <div class="app-content-body">

        <div class="bg-white-only lter b-b wrapper-md clrfix">

          <div class="pull-right">
            <h1 class="m-n font-thin h3">پرداخت حق عضویت / هانا محمدی</h1>

          </div>
          <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=users"
               class="btn btn-warning btngroup"> بازگشت</a> </div>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">انتخاب بسته</div>
            <div class="panel-body">

              <form method="post"
                    action="">
                <input type="hidden"
                       name="mod"
                       value="users">
                <input type="hidden"
                       name="action"
                       value="save_package">
                <input type="hidden"
                       name="userid"
                       value="88654">
                <div class="form-group">
                  <label>انتخاب بسته:</label>
                </div>

                <div class="custom-control custom-radio">
                  <input type="radio"
                         value="4"
                         id="customRadio4"
                         name="package"
                         class="custom-control-input">
                  <label class="custom-control-label"
                         for="customRadio4">حق عضویت 3 ماهه (40% تخفیف) (26,700 تومان)</label>
                </div>

                <div class="custom-control custom-radio">
                  <input type="radio"
                         value="16"
                         id="customRadio16"
                         name="package"
                         class="custom-control-input">
                  <label class="custom-control-label"
                         for="customRadio16">حق عضویت 1 ماهه (14,700 تومان)</label>
                </div>


                <div class="hr_line"></div>
                <div class="form-group"><button type="submit"
                          class="btn btn-success">ثبت و ذخیره</button> </div>
              </form>

            </div>

          </div>
        </div>
      </div>
      @endsection
