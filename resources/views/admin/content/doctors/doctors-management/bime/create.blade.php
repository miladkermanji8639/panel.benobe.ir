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
            <h1 class="m-n font-thin h3"> اضافه کردن بیمه جدید</h1>

          </div>
          <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=ordervisit"
               class="btn btn-warning btngroup"><i class="fa fa-arrow-right"></i> بازگشت</a> </div>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">اضافه کردن بیمه جدید</div>
            <div class="panel-body">

              <form method="post"
                    action=""
                    id="added_bime_tariff">
                <input type="hidden"
                       name="userid"
                       value="88501">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3 has-feedback">
                      <label class="control-label">نام بیمه:</label>
                      <input type="text"
                             class="form-control"
                             name="bime_name"
                             placeholder=""
                             required="">
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3 has-feedback">
                      <label class="control-label">مبلغ نوبت (تومان):</label>
                      <input type="text"
                             class="form-control numberkey"
                             name="bime_price"
                             placeholder=""
                             required="">
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button type="submit"
                            class="btn btn-success mt-3"><i class="fa fa-check px-1"></i> ثبت و ذخیره</button>
                  </div>
                </div>
              </form>
              <script type="text/javascript">
                $(document).ready(function (e) {
                  $("#added_bime_tariff").submit(function (e) {
                    $.ajax({
                      type: "POST",
                      url: "?mod=tariff&action=added_bime_tariff&ajax=true",
                      data: $(this).serialize(), // serializes the form's elements.
                      beforeSend: function () {
                        waitMe_show('#added_bime_tariff');
                      },
                      success: function (data) {
                        waitMe_hide('#added_bime_tariff');
                        if (data.result != 'ok') {
                          $("#error").html("<div class='alert alert-danger'>" + data.result + "</div>");
                        } else {
                          // console.log(data);
                          alert("اطلاعات جدید ثبت شد. در حال بروزرسانی");
                          location.reload();
                        }
                      },
                      error: function () {
                        waitMe_hide('#added_bime_tariff');
                      }
                    });
                    e.preventDefault();
                  });
                });

              </script>
            </div>

          </div>

        </div>

      </div>
      @endsection
