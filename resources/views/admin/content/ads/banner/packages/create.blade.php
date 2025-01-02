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

          <h1 class="m-n font-thin h3">مدیریت پکیج ها</h1>


        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">اضافه کردن پکیج جدید</div>
            <div class="panel-body">

              <form method="post"
                    action=""
                    enctype="multipart/form-data">
                <input type="hidden"
                       name="mod"
                       value="packages">
                <input type="hidden"
                       name="action"
                       value="added">
                <div class="form-group mt-3">
                  <label>نام پکیج:</label>
                  <input type="text"
                         name="name"
                         class="form-control"
                         required="">
                </div>
                <div class="form-group mt-3">
                  <label>توضیحات:</label>
                  <textarea name="descr"
                            class="form-control"
                            required=""></textarea>
                </div>
                <div class="form-group mt-3">
                  <label>قیمت</label>
                  <input type="text"
                         name="price"
                         class="numberkey form-control"
                         required="">
                </div>
                <div class="form-group mt-3">
                  <label>وضعیت</label>
                  <select name="status"
                          class="form-control">
                    <option value="1">فعال</option>
                    <option value="0"
                            selected="">غیرفعال</option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <button type="submit"
                          class="btn btn-success mt-3">ثبت و ذخیره</button>
                </div>


              </form>


            </div>

          </div>

         

        </div>
      </div>
      @endsection
