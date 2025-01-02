@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%20%D8%AA%D8%BA%DB%8C%D8%B1%20%D9%84%D9%88%DA%AF%D9%88%DB%8C%20%D8%B3%D8%A7%DB%8C%D8%AA%20%26%2339%3B)%0D />

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

          <h1 class="m-n h3 font-thin"> تغییر لوگو</h1>

          <div class="wrapper-md">

            <div class="panel panel-default">
              <div class="panel-heading">آپلود</div>
              <div class="panel-body">

                <form method="post"
                      action=""
                      enctype="multipart/form-data">
                  <input type="hidden"
                         name="mod"
                         value="setting">
                  <input type="hidden"
                         name="action"
                         value="savelogo">
                  <div class="form-group mt-3">
                    <label class="control-label">انتخاب تصویر لوگو سایت</label>
                    <input type="file"
                           class="filestyle"
                           name="logo"
                           data-placeholder="انتخاب فایل: png | jpg"
                           id="filestyle-0"
                           tabindex="-1"
                           style="position: absolute; clip: rect(0px, 0px, 0px, 0px);">
                    <div class="bootstrap-filestyle input-group"><input type="text"
                             class="form-control"
                             placeholder="انتخاب فایل: png | jpg"
                             disabled=""> <span class="group-span-filestyle input-group-btn"
                            tabindex="0"><label for="filestyle-0"
                               class="btn btn-default"><span
                                class="icon-span-filestyle glyphicon glyphicon-folder-open icon-folder-open"></span>
                          <span class="buttonText">Select
                            File</span></label></span></div>
                    <div class="help-block mt-3">ابعاد فایل 200 * 53 پیکسل باشد.</div>
                    <img src="https://benobe.ir/theme/np_site/portal/dist/images/logo-header-old.svg"
                         class="img-thumbnail"
                         width="200">
                  </div>

                  <button type="submit"
                          class="btn btn-success mt-3">ثبت و ذخیره</button>

                </form>

              </div>

            </div>
          </div>

        </div>

      </div>
      @endsection
