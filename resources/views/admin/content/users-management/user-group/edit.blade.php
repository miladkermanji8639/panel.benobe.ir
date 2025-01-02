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
            <h1 class="m-n font-thin h3">تغییر گروه کاربری</h1>

          </div>
          <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=usergroup"
               class="btn btn-warning btngroup"><i class="fa fa-arrow-right"></i> بازگشت</a> </div>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">تغییر گروه کاربری مدیران</div>
            <div class="panel-body">
              <form method="post"
                    action=""
                    class="form-horizontal"
                    enctype="multipart/form-data">
                <input type="hidden"
                       name="mod"
                       value="usergroup">
                <input type="hidden"
                       name="action"
                       value="dosave">
                <input type="hidden"
                       name="uid"
                       value="1">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#r1-tab"
                       data-toggle="tab">دسترسی ماژول ها و ابزارها</a></li>
                  <li><a href="#r2-tab"
                       data-toggle="tab">مجوزها</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active"
                       id="r1-tab"
                       style="padding-top: 10px;">

                    <div class="form-group">
                      <label class="control-label col-sm-2">درگاه های پرداخت</label>
                      <div class="col-md-10">
                        <select name="module[109][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">نظرات پزشکان</label>
                      <div class="col-md-10">
                        <select name="module[108][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">آمار بازدید</label>
                      <div class="col-md-10">
                        <select name="module[107][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">کیف پول نمایندگان</label>
                      <div class="col-md-10">
                        <select name="module[106][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">نمایندگان</label>
                      <div class="col-md-10">
                        <select name="module[105][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">ابزار Redirect</label>
                      <div class="col-md-10">
                        <select name="module[104][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">گزارش خرید پکیج ها</label>
                      <div class="col-md-10">
                        <select name="module[103][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">پکیج ها</label>
                      <div class="col-md-10">
                        <select name="module[102][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">تعرفه حق عضویت کاربران</label>
                      <div class="col-md-10">
                        <select name="module[101][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">روزهای تعطیل سال</label>
                      <div class="col-md-10">
                        <select name="module[100][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">صفحه نخست اپلیکیشن</label>
                      <div class="col-md-10">
                        <select name="module[99][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">برترین پزشکان و مشاوران سایت</label>
                      <div class="col-md-10">
                        <select name="module[98][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">بنرهای تبلیغات</label>
                      <div class="col-md-10">
                        <select name="module[97][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">منوها</label>
                      <div class="col-md-10">
                        <select name="module[96][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">درخواست تسویه حساب کیف پول منشی</label>
                      <div class="col-md-10">
                        <select name="module[95][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">گزارش پرداخت حق عضویت</label>
                      <div class="col-md-10">
                        <select name="module[94][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">تعرفه حق عضویت پزشکان</label>
                      <div class="col-md-10">
                        <select name="module[93][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">گزارش نوبت دهی مراکز درمان</label>
                      <div class="col-md-10">
                        <select name="module[92][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">درخواست تسویه حساب کیف پول مراکز درمان</label>
                      <div class="col-md-10">
                        <select name="module[91][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">مدیریت بیمارستان ها</label>
                      <div class="col-md-10">
                        <select name="module[90][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">گزارش ارتقاء حساب کاربری</label>
                      <div class="col-md-10">
                        <select name="module[82][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">درخواست تسویه حساب کاربران</label>
                      <div class="col-md-10">
                        <select name="module[81][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">درخواست تسویه حساب کیف پول پزشکان</label>
                      <div class="col-md-10">
                        <select name="module[80][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">مشاوره ها</label>
                      <div class="col-md-10">
                        <select name="module[79][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">پلان ها</label>
                      <div class="col-md-10">
                        <select name="module[78][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">چت / گفتگوی آنلاین</label>
                      <div class="col-md-10">
                        <select name="module[75][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">گزارش خرید پکیج ها</label>
                      <div class="col-md-10">
                        <select name="module[74][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">پکیج ها</label>
                      <div class="col-md-10">
                        <select name="module[72][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">ویدئو صفحه نخست</label>
                      <div class="col-md-10">
                        <select name="module[71][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">گزارش شارژ حساب کاربری</label>
                      <div class="col-md-10">
                        <select name="module[70][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">دسته بندی پرسش و پاسخ</label>
                      <div class="col-md-10">
                        <select name="module[62][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">پرسش و پاسخ</label>
                      <div class="col-md-10">
                        <select name="module[61][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">نظرات کاربران</label>
                      <div class="col-md-10">
                        <select name="module[59][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">موضوعات مطالب</label>
                      <div class="col-md-10">
                        <select name="module[58][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">برچسب ها</label>
                      <div class="col-md-10">
                        <select name="module[57][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">اخبار و مطالب</label>
                      <div class="col-md-10">
                        <select name="module[56][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">مدیریت پزشکان</label>
                      <div class="col-md-10">
                        <select name="module[54][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">اسلاید اپلیکیشن موبایل</label>
                      <div class="col-md-10">
                        <select name="module[51][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">متن ها</label>
                      <div class="col-md-10">
                        <select name="module[49][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">همکاران</label>
                      <div class="col-md-10">
                        <select name="module[45][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">پرداخت های حق نوبت پزشکان</label>
                      <div class="col-md-10">
                        <select name="module[44][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">گزارش نوبت دهی پزشکان</label>
                      <div class="col-md-10">
                        <select name="module[41][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">برنامه ریزی</label>
                      <div class="col-md-10">
                        <select name="module[40][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2"
                                  selected="">کاربران</option>
                          <option value="3"
                                  selected="">پزشکان</option>
                          <option value="4"
                                  selected="">بیمارستان</option>
                          <option value="5"
                                  selected="">منشی</option>
                          <option value="6"
                                  selected="">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>کاربران</span><a class="search-choice-close"
                                 data-option-array-index="1"></a></li>
                            <li class="search-choice"><span>پزشکان</span><a class="search-choice-close"
                                 data-option-array-index="2"></a></li>
                            <li class="search-choice"><span>بیمارستان</span><a class="search-choice-close"
                                 data-option-array-index="3"></a></li>
                            <li class="search-choice"><span>منشی</span><a class="search-choice-close"
                                 data-option-array-index="4"></a></li>
                            <li class="search-choice"><span>منشی درمانگاه</span><a class="search-choice-close"
                                 data-option-array-index="5"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">پروفایل ها</label>
                      <div class="col-md-10">
                        <select name="module[39][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">جستجو</label>
                      <div class="col-md-10">
                        <select name="module[38][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">خبرنامه الکترونیکی</label>
                      <div class="col-md-10">
                        <select name="module[34][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">احراز هویت / مدارک</label>
                      <div class="col-md-10">
                        <select name="module[27][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">تخصص ها</label>
                      <div class="col-md-10">
                        <select name="module[23][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">شهرها</label>
                      <div class="col-md-10">
                        <select name="module[22][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">پیام ها</label>
                      <div class="col-md-10">
                        <select name="module[21][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2"
                                  selected="">کاربران</option>
                          <option value="3"
                                  selected="">پزشکان</option>
                          <option value="4"
                                  selected="">بیمارستان</option>
                          <option value="5"
                                  selected="">منشی</option>
                          <option value="6"
                                  selected="">منشی درمانگاه</option>
                          <option value="7"
                                  selected="">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>کاربران</span><a class="search-choice-close"
                                 data-option-array-index="1"></a></li>
                            <li class="search-choice"><span>پزشکان</span><a class="search-choice-close"
                                 data-option-array-index="2"></a></li>
                            <li class="search-choice"><span>بیمارستان</span><a class="search-choice-close"
                                 data-option-array-index="3"></a></li>
                            <li class="search-choice"><span>منشی</span><a class="search-choice-close"
                                 data-option-array-index="4"></a></li>
                            <li class="search-choice"><span>منشی درمانگاه</span><a class="search-choice-close"
                                 data-option-array-index="5"></a></li>
                            <li class="search-choice"><span>نمایندگان</span><a class="search-choice-close"
                                 data-option-array-index="6"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">نقشه سایت</label>
                      <div class="col-md-10">
                        <select name="module[20][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">مدیریت فایل ها و تصاویر</label>
                      <div class="col-md-10">
                        <select name="module[15][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">سوالات متداول</label>
                      <div class="col-md-10">
                        <select name="module[12][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2"
                                  selected="">کاربران</option>
                          <option value="3"
                                  selected="">پزشکان</option>
                          <option value="4"
                                  selected="">بیمارستان</option>
                          <option value="5"
                                  selected="">منشی</option>
                          <option value="6"
                                  selected="">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>کاربران</span><a class="search-choice-close"
                                 data-option-array-index="1"></a></li>
                            <li class="search-choice"><span>پزشکان</span><a class="search-choice-close"
                                 data-option-array-index="2"></a></li>
                            <li class="search-choice"><span>بیمارستان</span><a class="search-choice-close"
                                 data-option-array-index="3"></a></li>
                            <li class="search-choice"><span>منشی</span><a class="search-choice-close"
                                 data-option-array-index="4"></a></li>
                            <li class="search-choice"><span>منشی درمانگاه</span><a class="search-choice-close"
                                 data-option-array-index="5"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">پیوندها</label>
                      <div class="col-md-10">
                        <select name="module[10][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">قالب ایمیل ها</label>
                      <div class="col-md-10">
                        <select name="module[8][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">صفحات</label>
                      <div class="col-md-10">
                        <select name="module[7][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">گروه های کاربری</label>
                      <div class="col-md-10">
                        <select name="module[6][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">مدیریت اعضا</label>
                      <div class="col-md-10">
                        <select name="module[4][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">ورود کاربران</label>
                      <div class="col-md-10">
                        <select name="module[3][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2"
                                  selected="">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>کاربران</span><a class="search-choice-close"
                                 data-option-array-index="1"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">عضویت</label>
                      <div class="col-md-10">
                        <select name="module[2][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2"
                                  selected="">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-choice"><span>کاربران</span><a class="search-choice-close"
                                 data-option-array-index="1"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2">تنظیمات و پیکربندی</label>
                      <div class="col-md-10">
                        <select name="module[1][]"
                                class="form-control chosen-select chosen-rtl"
                                multiple=""
                                style="display: none;">
                          <option value="1"
                                  selected="">مدیران</option>
                          <option value="2">کاربران</option>
                          <option value="3">پزشکان</option>
                          <option value="4">بیمارستان</option>
                          <option value="5">منشی</option>
                          <option value="6">منشی درمانگاه</option>
                          <option value="7">نمایندگان</option>

                        </select>
                        <div class="chosen-container chosen-container-multi chosen-rtl"
                             style="width: 1314px;"
                             title="">
                          <ul class="chosen-choices">
                            <li class="search-choice"><span>مدیران</span><a class="search-choice-close"
                                 data-option-array-index="0"></a></li>
                            <li class="search-field"><input type="text"
                                     
                                     class=""
                                     autocomplete="off"
                                     style="width: 25px;"></li>
                          </ul>
                          <div class="chosen-drop">
                            <ul class="chosen-results"></ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="tab-pane"
                       id="r2-tab"
                       style="padding-top: 10px;">
                    <div class="form-group"><label class="control-label col-sm-2">دسترسی به پنل مدیریت</label>
                      <div class="col-sm-10"><select name="premission[1]"
                                class="form-control">
                          <option value="all">-- همه</option>
                          <option value="yes"
                                  selected="">بلی</option>
                          <option value="no">خیر</option>
                        </select></div>
                    </div>
                    <div class="form-group"><label class="control-label col-sm-2">افزودن کاربر جدید</label>
                      <div class="col-sm-10"><select name="premission[2]"
                                class="form-control">
                          <option value="all">-- همه</option>
                          <option value="yes"
                                  selected="">بلی</option>
                          <option value="no">خیر</option>
                        </select></div>
                    </div>
                    <div class="form-group"><label class="control-label col-sm-2">مدیریت کاربران</label>
                      <div class="col-sm-10"><select name="premission[3]"
                                class="form-control">
                          <option value="all">-- همه</option>
                          <option value="yes"
                                  selected="">بلی</option>
                          <option value="no">خیر</option>
                        </select></div>
                    </div>
                    <div class="form-group"><label class="control-label col-sm-2">پیکربندی گروه های کاربری</label>
                      <div class="col-sm-10"><select name="premission[4]"
                                class="form-control">
                          <option value="all">-- همه</option>
                          <option value="yes"
                                  selected="">بلی</option>
                          <option value="no">خیر</option>
                        </select></div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <input type="submit"
                       class="btn btn-success"
                       value="ذخیره">
              </form>
            </div>

          </div>
        </div>
      </div>
      @endsection
