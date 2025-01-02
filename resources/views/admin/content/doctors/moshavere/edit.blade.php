@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D9%88%DB%8C%D8%B1%D8%A7%DB%8C%D8%B4%20%D9%BE%D8%B2%D8%B4%DA%A9%20%20%20%20%26%2339%3B)%0D />

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
            <h1 class="m-n font-thin h3">تغییر وضعیت مشاوره دکتر انور الیاسی با شهلا رضایی</h1>

          </div>
          <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=moshavere"
               class="btn btn-warning btngroup"><i class="fa fa-arrow-right px-2"></i> بازگشت</a> </div>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">تغییر وضعیت</div>
            <div class="panel-body">

              <form method="post"
                    action="">
                <input type="hidden"
                       name="mod"
                       value="moshavere">
                <input type="hidden"
                       name="action"
                       value="save_change_status">
                <input type="hidden"
                       name="moshavere_id"
                       value="18">

                <div class="form-group mt-3">
                  <label>انتخاب وضعیت</label>
                  <select class="form-control"
                          name="status">
                    <option value="completed">مکالمه انجام و پایان یافته است</option>
                    <option value="rejected">عدم پاسخگویی</option>
                    <option value="waitingforservice">در انتظار بررسی و تماس</option>
                    <option value="answered">تماس پاسخ داده شده</option>
                    <option value="returnkifpool"
                            selected="">لغو شده</option>
                  </select>
                </div>
                <div class="form-group">
                  <button type="submit"
                          class="btn btn-primary mt-3">ثبت و ذخیره</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
      @endsection
