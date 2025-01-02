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

          <h1 class="m-n h3 font-thin">دسته بندی ها</h1>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">Info</div>
            <div class="panel-body">

              <form method="post"
                    action=""
                    class="form-horizontal"
                    enctype="multipart/form-data">
                <input type="hidden"
                       name="mod"
                       value="categoryblog">
                <input type="hidden"
                       name="action"
                       value="update">

                <div class="form-group mt-3">
                  <label class="control-label col-md-2">نام دسته بندی</label>
                  <div class="col-md-12"><input type="text"
                           placeholder="Fa"
                           class="form-control"
                           value=""
                           name="name"></div>
                </div>


                <div class="form-group mt-3">
                  <label class="control-label col-md-2"><span class="ltr">Url:</span></label>
                  <div class="col-md-12"><input type="text"
                           class="form-control"
                           placeholder="url"
                           value=""
                           name="altname"></div>
                </div>
                <div class="form-group mt-3">
                  <label class="control-label col-md-2">image:</label>
                  <div class="col-md-12"> <input type="file"
                           class="filestyle"
                           name="image"
                           data-placeholder="png file"
                           id="filestyle-0"
                           tabindex="-1"
                           style="position: absolute; clip: rect(0px, 0px, 0px, 0px);">
                    <div class="bootstrap-filestyle input-group"><input type="text"
                             class="form-control "
                             placeholder="png file"
                             disabled=""> <span class="group-span-filestyle input-group-btn"
                            tabindex="0"><label for="filestyle-0"
                               class="btn btn-default "><span
                                class="icon-span-filestyle glyphicon glyphicon-folder-open icon-folder-open"></span>
                          <span class="buttonText">Select File</span></label></span></div>

                  </div>
                </div>
                <div class="form-group mt-3">
                  <label class="control-label col-md-2">زیر مجموعه دسته بندی::</label>
                  <div class="col-md-12"><select data-placeholder="Select .."
                            class="form-control chosen-select chosen-rtl form-control"
                            name="category"
                            style="">
                      <option value="0">---</option>
                      <option style="color: "
                              value="25">پزشکی</option>
                      <option style="color: "
                              value="20">نوبت دهی</option>
                      <option style="color: "
                              value="19">اخبار</option>
                      <option style="color: "
                              value="23">پزشکان</option>
                      <option style="color: "
                              value="24">مشاوره آنلاین</option>
                      <option style="color: "
                              value="6">نظام سلامت</option>
                      <option style="color: "
                              value="18">دانستنی ها</option>
                    </select>
                    
                  </div>
                </div>

                <div class="form-group mt-3">
                  <label class="control-label col-md-2">قرارگیری:</label>
                  <div class="col-md-12"><input type="number"
                           value=""
                           min="0"
                           class="form-control ltr text-center col-md-2"
                           name="sort"></div>
                </div>

                <div class="form-group mt-3">
                  <label class="control-label col-md-2">توضیحات:</label>
                  <div class="col-md-12"><textarea class="form-control"
                              name="descr"
                              style="height: 100px;"></textarea></div>
                </div>
                <div class="col-md-offset-2">
                  <input type="submit"
                         class="btn btn-success mt-3"
                         value="ذخیره تغییرات">
                </div>

              </form>

            </div>

          </div>
        </div>

      </div>
      @endsection
