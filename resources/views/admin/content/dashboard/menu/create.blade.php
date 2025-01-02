@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D8%A7%D9%81%D8%B2%D9%88%D8%AF%D9%86%20%D9%85%D9%86%D9%88%20%D8%AC%D8%AF%DB%8C%D8%AF%20%26%2339%3B)%0D />

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

          <h1 class="m-n h3 font-thin">منو ها</h1>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">افزودن منو جدید</div>
            <div class="panel-body">

              <form method="post"
                    action=""
                    class="form-horizontal"
                    enctype="multipart/form-data">
                <input type="hidden"
                       name="mod"
                       value="menu">
                <input type="hidden"
                       name="action"
                       value="update">
                <!--<div class='form-group mt-2'>
                <label class='col-md-2 control-label'>انتخاب نوع منو:</label>
                <div class='col-md-10'><select class='form-control' name='menutype' id='menutype'>
                    <option value='shop'>پیوندهای داخلی</option>
                    <option value='external'>پیوند خارحی</option>
                </select></div>
            </div>-->
                <div id="external_menu"
                     style="display: block;">
                  <div class="form-group mt-2">
                    <label class="col-md-2 control-label">نام منو</label>
                    <div class="col-md-10"><input type="text"
                             class="form-control"
                             name="name"></div>
                  </div>
                  <div class="form-group mt-2">
                    <label class="col-md-2 control-label">URL</label>
                    <div class="col-md-10"><input type="text"
                             class="form-control ltr text-left"
                             placeholder="http://"
                             name="url"></div>
                  </div>
                </div>
                <div class="form-group mt-2">
                  <label class="col-md-2 control-label">ICON</label>
                  <div class="col-md-10"><input type="file"
                           class="form-control"
                           name="image"></div>
                </div>
                <div class="form-group mt-2">
                  <label class="col-md-2 control-label">جایگاه:</label>
                  <div class="col-md-10"><select class="form-control"
                            name="position">
                      <option value="top">بالای سایت</option>
                      <option value="bottom">پایین سایت</option>
                      <option value="top_bottom">بالا و پایین سایت</option>
                    </select></div>
                </div>

                <div id="internal_menu"
                     style="display: none">
                  <div class="form-group mt-2">
                    <label class="control-label col-md-2">انتخاب منو داخلی</label>
                    <div class="col-md-10">
                      <select name="menushop"
                              class="form-control">
                        <optgroup label="موضوعات">
                          <option value="cat,25">پزشکی</option>
                          <option value="cat,20">نوبت دهی</option>
                          <option value="cat,19">اخبار</option>
                          <option value="cat,23">پزشکان</option>
                          <option value="cat,24">مشاوره آنلاین</option>
                          <option value="cat,6">نظام سلامت</option>
                          <option value="cat,18">دانستنی ها</option>
                        </optgroup>
                        <optgroup label="صفحات">
                          <option value="page,14">راهنمای نوبت دهی کلینیک ها و بیمارستان های دولتی</option>
                          <option value="page,13">دانلود اپلیکیشن به نوبه (benobe)</option>
                          <option value="page,12">نوبت دهی رایگان پزشکان + نرم افزار مدیریت مطب</option>
                          <option value="page,11">سوالات متداول</option>
                          <option value="page,10">ثبت شکایات</option>
                          <option value="page,9">راهنمای مشاوره آنلاین</option>
                          <option value="page,8">راهنمای دریافت نوبت</option>
                          <option value="page,7">شرایط ثبت نام</option>
                          <option value="page,6">راهنمای پرسش و پاسخ</option>
                          <option value="page,5">راهنمای ثبت نام</option>
                          <option value="page,4">آموزش بیماران</option>
                          <option value="page,3">اموزش پزشکان</option>
                          <option value="page,2">قوانین و مقررات</option>
                          <option value="page,1">درباره به نوبه</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="form-group mt-2">
                  <label class="col-md-2 control-label">زیرمجموع</label>
                  <div class="col-md-10">
                    <select class="form-control chosen-select chosen-rtl"
                            name="parentid"
                            data-placeholder="انتخاب کنید"
                            >
                      <option value="0">[دسته اصلی]</option>
                      <option value="14">نوبت دهی کلینیک ها و بیمارستان های دولتی</option>
                      <option value="15">فروشگاه به نوبه</option>
                      <option value="16">راهنما</option>
                      <option value="17">درباره ما</option>
                      <option value="18">قوانین و مقررات</option>
                      <option value="19">وبلاگ</option>
                      <option value="20">تماس با ما</option>
                      <option value="1">صفحه اصلی</option>
                      <option value="2">فروشگاه</option>
                      <option value="21">پرسش و پاسخ</option>
                      <option value="4">لیست پزشکان</option>
                      <option value="5">مراکز درمان</option>
                      <option value="6">پزشکان دارای مشاوره تلفنی</option>
                      <option value="3">وبلاگ</option>
                      <option value="7">به‌نوبه</option>
                      <option value="12">&nbsp;&nbsp;&nbsp;&nbsp;دانلود اپلیکیشن به نوبه</option>
                      <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;نرم افزار نوبت دهی</option>
                      <option value="10">&nbsp;&nbsp;&nbsp;&nbsp;قوانین و مقررات</option>
                      <option value="9">&nbsp;&nbsp;&nbsp;&nbsp;درباره ما</option>
                      <option value="8">&nbsp;&nbsp;&nbsp;&nbsp;تماس با ما</option>
                      <option value="13">نمایندگان</option>
                    </select>
                 
                  </div>
                </div>
                <div class="form-group mt-2">
                  <label class="col-md-2 control-label">ترتیب:</label>
                  <div class="col-md-10"><input type="number"
                           class="form-control ltr text-center"
                           name="posi"
                           min="0"></div>
                </div>
                <div class="col-md-offset-2 mt-3"><button type="submit"
                          class="btn btn-success">ثبت و ذخیره</button> </div>
              </form>


              <script type="text/javascript">
                $(document).ready(function () {
                  $('#menutype').change(function () {
                    var menu = $(this).val();
                    if (menu === 'external') {
                      $("#external_menu").show();
                      $("#internal_menu").hide();
                    } else {
                      $("#external_menu").hide();
                      $("#internal_menu").show();
                    }
                  });

                });

              </script>


            </div>

          </div>

          


          <script type="text/javascript">
            $(document).ready(function () {
              $('.dd').nestable({
                maxDepth: 5
              });

              // $('.dd').nestable('collapseAll');

              $('.dd-handle a').on('mousedown', function (e) {
                e.stopPropagation();
              });

              $('.dd-handle a').on('touchstart', function (e) {
                e.stopPropagation();
              });


              $('.nestable-action').on('click', function (e) {
                var target = $(e.target),
                  action = target.data('action');
                if (action === 'expand-all') {
                  $('.dd').nestable('expandAll');
                }
                if (action === 'collapse-all') {
                  $('.dd').nestable('collapseAll');
                }
              });
              $('#catsort').click(function () {
                ShowLoading('صبرکنید ...');
                var url = "&ajax=yes&action=catsort&&list=" + window.JSON.stringify($('.dd').nestable(
                  'serialize'));
                $.post("https://benobe.ir/panel.php?mod=menu", url, function (data) {
                  bootbox.alert("چینش منوها با موفقیت بروزرسانی شد.");
                });
                HideLoading();
              });
            });

          </script>
        </div>
      </div>
      @endsection
