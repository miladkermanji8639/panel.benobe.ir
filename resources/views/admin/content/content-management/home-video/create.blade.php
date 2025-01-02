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

          <h1 class="m-n h3 font-thin">افزودن ویدئو
</h1>

        </div>

        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">افزودن ویدئو جدید</div>
            <div class="panel-body">

              <form method="post"
                    action=""
                    enctype="multipart/form-data"
                    data-toggle="validator"
                    role="form"
                    novalidate="true">
                <input type="hidden"
                       name="mod"
                       value="home_video">
                <input type="hidden"
                       name="action"
                       value="added">

                <div class="form-group mt-3">
                  <label>عنوان</label>
                  <input type="text"
                         name="title"
                         class="form-control">
                </div>

                <div class="form-group mt-3">
                  <label>تصویر</label>
                  <input type="file"
                         name="image"
                         class="filestyle"
                         data-placeholder="تصویر ویدئو | jpg,png"
                         accept="image/*"
                         id="filestyle-0"
                         tabindex="-1"
                         style="position: absolute; clip: rect(0px, 0px, 0px, 0px);">
                  <div class="bootstrap-filestyle input-group"><input type="text"
                           class="form-control "
                           placeholder="تصویر ویدئو | jpg,png"
                           disabled=""> <span class="group-span-filestyle input-group-btn"
                          tabindex="0"><label for="filestyle-0"
                             class="btn btn-default "><span
                              class="icon-span-filestyle glyphicon glyphicon-folder-open icon-folder-open"></span> <span
                              class="buttonText">Select File</span></label></span></div>
                </div>

                <div class="form-group mt-3">
                  <label>فایل</label>
                  <input type="file"
                         name="video"
                         class="filestyle"
                         data-placeholder="فایل ویدئو | mp4"
                         id="filestyle-1"
                         tabindex="-1"
                         style="position: absolute; clip: rect(0px, 0px, 0px, 0px);">
                  <div class="bootstrap-filestyle input-group"><input type="text"
                           class="form-control "
                           placeholder="فایل ویدئو | mp4"
                           disabled=""> <span class="group-span-filestyle input-group-btn"
                          tabindex="0"><label for="filestyle-1"
                             class="btn btn-default "><span
                              class="icon-span-filestyle glyphicon glyphicon-folder-open icon-folder-open"></span> <span
                              class="buttonText">Select File</span></label></span></div>
                </div>
                <div class="form-group mt-3">
                  <label>توضیح</label>
                  <script type="text/javascript"
                          src="https://benobe.ir/theme/common/ckeditor/ckeditor.js"></script>
                  <textarea name="descr"
                            id="descr"
                            style="visibility: hidden; display: none;"></textarea>
                  <div id="cke_descr"
                       class="cke_1 cke cke_reset cke_chrome cke_editor_descr cke_rtl cke_browser_webkit"
                       dir="rtl"
                       lang="fa"
                       role="application"
                       aria-labelledby="cke_descr_arialbl"><span id="cke_descr_arialbl"
                          class="cke_voice_label">ویرایش‌گر متن غنی, descr</span>
                    <div class="cke_inner cke_reset"
                         role="presentation"><span id="cke_1_top"
                            class="cke_top cke_reset_all"
                            role="presentation"
                            style="height: auto; user-select: none;"><span id="cke_8"
                              class="cke_voice_label">نوار ابزارهای ویرایش‌گر</span><span id="cke_1_toolbox"
                              class="cke_toolbox"
                              role="group"
                              aria-labelledby="cke_8"
                              onmousedown="return false;"><span id="cke_11"
                                class="cke_toolbar"
                                aria-labelledby="cke_11_label"
                                role="toolbar"><span id="cke_11_label"
                                  class="cke_voice_label">حافظه موقت/برگشت</span><span
                                  class="cke_toolbar_start"></span><span class="cke_toolgroup"
                                  role="presentation"><a id="cke_12"
                                 class="cke_button cke_button__cut cke_button_disabled "
                                 href="javascript:void('برش')"
                                 title="برش (کنترل+X)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_12_label"
                                 aria-describedby="cke_12_description"
                                 aria-haspopup="false"
                                 aria-disabled="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(2,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(3,event);"
                                 onclick="CKEDITOR.tools.callFunction(4,this);return false;"><span
                                      class="cke_button_icon cke_button__cut_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -240px;background-size:auto;">&nbsp;</span><span
                                      id="cke_12_label"
                                      class="cke_button_label cke_button__cut_label"
                                      aria-hidden="false">برش</span><span id="cke_12_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+X</span></a><a id="cke_13"
                                 class="cke_button cke_button__copy cke_button_disabled "
                                 href="javascript:void('رونوشت')"
                                 title="رونوشت (کنترل+C)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_13_label"
                                 aria-describedby="cke_13_description"
                                 aria-haspopup="false"
                                 aria-disabled="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(5,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(6,event);"
                                 onclick="CKEDITOR.tools.callFunction(7,this);return false;"><span
                                      class="cke_button_icon cke_button__copy_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -192px;background-size:auto;">&nbsp;</span><span
                                      id="cke_13_label"
                                      class="cke_button_label cke_button__copy_label"
                                      aria-hidden="false">رونوشت</span><span id="cke_13_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+C</span></a><a id="cke_14"
                                 class="cke_button cke_button__paste cke_button_off"
                                 href="javascript:void('چسباندن')"
                                 title="چسباندن (کنترل+V)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_14_label"
                                 aria-describedby="cke_14_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(8,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(9,event);"
                                 onclick="CKEDITOR.tools.callFunction(10,this);return false;"><span
                                      class="cke_button_icon cke_button__paste_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -288px;background-size:auto;">&nbsp;</span><span
                                      id="cke_14_label"
                                      class="cke_button_label cke_button__paste_label"
                                      aria-hidden="false">چسباندن</span><span id="cke_14_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+V</span></a><a id="cke_15"
                                 class="cke_button cke_button__pastetext cke_button_off"
                                 href="javascript:void('چسباندن به عنوان متن ساده')"
                                 title="چسباندن به عنوان متن ساده (کنترل+تعویض+V)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_15_label"
                                 aria-describedby="cke_15_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(11,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(12,event);"
                                 onclick="CKEDITOR.tools.callFunction(13,this);return false;"><span
                                      class="cke_button_icon cke_button__pastetext_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -696px;background-size:auto;">&nbsp;</span><span
                                      id="cke_15_label"
                                      class="cke_button_label cke_button__pastetext_label"
                                      aria-hidden="false">چسباندن به عنوان متن ساده</span><span id="cke_15_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+تعویض+V</span></a><a id="cke_16"
                                 class="cke_button cke_button__pastefromword cke_button_off"
                                 href="javascript:void('چسباندن از Word')"
                                 title="چسباندن از Word"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_16_label"
                                 aria-describedby="cke_16_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(14,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(15,event);"
                                 onclick="CKEDITOR.tools.callFunction(16,this);return false;"><span
                                      class="cke_button_icon cke_button__pastefromword_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -744px;background-size:auto;">&nbsp;</span><span
                                      id="cke_16_label"
                                      class="cke_button_label cke_button__pastefromword_label"
                                      aria-hidden="false">چسباندن از Word</span><span id="cke_16_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><span class="cke_toolbar_separator"
                                    role="separator"></span><a id="cke_17"
                                 class="cke_button cke_button__undo cke_button_disabled "
                                 href="javascript:void('واچیدن')"
                                 title="واچیدن (کنترل+Z)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_17_label"
                                 aria-describedby="cke_17_description"
                                 aria-haspopup="false"
                                 aria-disabled="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(17,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(18,event);"
                                 onclick="CKEDITOR.tools.callFunction(19,this);return false;"><span
                                      class="cke_button_icon cke_button__undo_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -984px;background-size:auto;">&nbsp;</span><span
                                      id="cke_17_label"
                                      class="cke_button_label cke_button__undo_label"
                                      aria-hidden="false">واچیدن</span><span id="cke_17_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+Z</span></a><a id="cke_18"
                                 class="cke_button cke_button__redo cke_button_disabled "
                                 href="javascript:void('بازچیدن')"
                                 title="بازچیدن (کنترل+Y)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_18_label"
                                 aria-describedby="cke_18_description"
                                 aria-haspopup="false"
                                 aria-disabled="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(20,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(21,event);"
                                 onclick="CKEDITOR.tools.callFunction(22,this);return false;"><span
                                      class="cke_button_icon cke_button__redo_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -936px;background-size:auto;">&nbsp;</span><span
                                      id="cke_18_label"
                                      class="cke_button_label cke_button__redo_label"
                                      aria-hidden="false">بازچیدن</span><span id="cke_18_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+Y</span></a></span><span
                                  class="cke_toolbar_end"></span></span><span id="cke_19"
                                class="cke_toolbar"
                                aria-labelledby="cke_19_label"
                                role="toolbar"><span id="cke_19_label"
                                  class="cke_voice_label">در حال ویرایش</span><span
                                  class="cke_toolbar_start"></span><span class="cke_toolgroup"
                                  role="presentation"><a id="cke_20"
                                 class="cke_button cke_button__scayt cke_button_off"
                                 href="javascript:void('بررسی املا')"
                                 title="بررسی املا"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_20_label"
                                 aria-describedby="cke_20_description"
                                 aria-haspopup="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(23,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(24,event);"
                                 onclick="CKEDITOR.tools.callFunction(25,this);return false;"><span
                                      class="cke_button_icon cke_button__scayt_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -888px;background-size:auto;">&nbsp;</span><span
                                      id="cke_20_label"
                                      class="cke_button_label cke_button__scayt_label"
                                      aria-hidden="false">بررسی املای تایپ شما</span><span id="cke_20_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span><span class="cke_button_arrow"></span></a></span><span
                                  class="cke_toolbar_end"></span></span><span id="cke_21"
                                class="cke_toolbar"
                                aria-labelledby="cke_21_label"
                                role="toolbar"><span id="cke_21_label"
                                  class="cke_voice_label">پیوندها</span><span class="cke_toolbar_start"></span><span
                                  class="cke_toolgroup"
                                  role="presentation"><a id="cke_22"
                                 class="cke_button cke_button__link cke_button_off"
                                 href="javascript:void('گنجاندن/ویرایش پیوند')"
                                 title="گنجاندن/ویرایش پیوند (کنترل+L)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_22_label"
                                 aria-describedby="cke_22_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(26,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(27,event);"
                                 onclick="CKEDITOR.tools.callFunction(28,this);return false;"><span
                                      class="cke_button_icon cke_button__link_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -528px;background-size:auto;">&nbsp;</span><span
                                      id="cke_22_label"
                                      class="cke_button_label cke_button__link_label"
                                      aria-hidden="false">گنجاندن/ویرایش پیوند</span><span id="cke_22_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+L</span></a><a id="cke_23"
                                 class="cke_button cke_button__unlink cke_button_disabled "
                                 href="javascript:void('برداشتن پیوند')"
                                 title="برداشتن پیوند"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_23_label"
                                 aria-describedby="cke_23_description"
                                 aria-haspopup="false"
                                 aria-disabled="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(29,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(30,event);"
                                 onclick="CKEDITOR.tools.callFunction(31,this);return false;"><span
                                      class="cke_button_icon cke_button__unlink_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -552px;background-size:auto;">&nbsp;</span><span
                                      id="cke_23_label"
                                      class="cke_button_label cke_button__unlink_label"
                                      aria-hidden="false">برداشتن پیوند</span><span id="cke_23_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><a id="cke_24"
                                 class="cke_button cke_button__anchor cke_button_off"
                                 href="javascript:void('گنجاندن/ویرایش لنگر')"
                                 title="گنجاندن/ویرایش لنگر"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_24_label"
                                 aria-describedby="cke_24_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(32,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(33,event);"
                                 onclick="CKEDITOR.tools.callFunction(34,this);return false;"><span
                                      class="cke_button_icon cke_button__anchor_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -480px;background-size:auto;">&nbsp;</span><span
                                      id="cke_24_label"
                                      class="cke_button_label cke_button__anchor_label"
                                      aria-hidden="false">گنجاندن/ویرایش لنگر</span><span id="cke_24_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a></span><span
                                  class="cke_toolbar_end"></span></span><span id="cke_25"
                                class="cke_toolbar"
                                aria-labelledby="cke_25_label"
                                role="toolbar"><span id="cke_25_label"
                                  class="cke_voice_label">ورود</span><span class="cke_toolbar_start"></span><span
                                  class="cke_toolgroup"
                                  role="presentation"><a id="cke_26"
                                 class="cke_button cke_button__image cke_button_off"
                                 href="javascript:void('تصویر')"
                                 title="تصویر"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_26_label"
                                 aria-describedby="cke_26_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(35,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(36,event);"
                                 onclick="CKEDITOR.tools.callFunction(37,this);return false;"><span
                                      class="cke_button_icon cke_button__image_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -360px;background-size:auto;">&nbsp;</span><span
                                      id="cke_26_label"
                                      class="cke_button_label cke_button__image_label"
                                      aria-hidden="false">تصویر</span><span id="cke_26_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><a id="cke_27"
                                 class="cke_button cke_button__table cke_button_off"
                                 href="javascript:void('جدول')"
                                 title="جدول"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_27_label"
                                 aria-describedby="cke_27_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(38,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(39,event);"
                                 onclick="CKEDITOR.tools.callFunction(40,this);return false;"><span
                                      class="cke_button_icon cke_button__table_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -912px;background-size:auto;">&nbsp;</span><span
                                      id="cke_27_label"
                                      class="cke_button_label cke_button__table_label"
                                      aria-hidden="false">جدول</span><span id="cke_27_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><a id="cke_28"
                                 class="cke_button cke_button__horizontalrule cke_button_off"
                                 href="javascript:void('گنجاندن خط افقی')"
                                 title="گنجاندن خط افقی"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_28_label"
                                 aria-describedby="cke_28_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(41,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(42,event);"
                                 onclick="CKEDITOR.tools.callFunction(43,this);return false;"><span
                                      class="cke_button_icon cke_button__horizontalrule_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -336px;background-size:auto;">&nbsp;</span><span
                                      id="cke_28_label"
                                      class="cke_button_label cke_button__horizontalrule_label"
                                      aria-hidden="false">گنجاندن خط افقی</span><span id="cke_28_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><a id="cke_29"
                                 class="cke_button cke_button__specialchar cke_button_off"
                                 href="javascript:void('گنجاندن نویسه‌ی ویژه')"
                                 title="گنجاندن نویسه‌ی ویژه"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_29_label"
                                 aria-describedby="cke_29_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(44,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(45,event);"
                                 onclick="CKEDITOR.tools.callFunction(46,this);return false;"><span
                                      class="cke_button_icon cke_button__specialchar_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -864px;background-size:auto;">&nbsp;</span><span
                                      id="cke_29_label"
                                      class="cke_button_label cke_button__specialchar_label"
                                      aria-hidden="false">گنجاندن نویسه‌ی ویژه</span><span id="cke_29_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a></span><span
                                  class="cke_toolbar_end"></span></span><span id="cke_30"
                                class="cke_toolbar"
                                aria-labelledby="cke_30_label"
                                role="toolbar"><span id="cke_30_label"
                                  class="cke_voice_label">ابزارها</span><span class="cke_toolbar_start"></span><span
                                  class="cke_toolgroup"
                                  role="presentation"><a id="cke_31"
                                 class="cke_button cke_button__maximize cke_button_off"
                                 href="javascript:void('بیشنه کردن')"
                                 title="بیشنه کردن"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_31_label"
                                 aria-describedby="cke_31_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(47,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(48,event);"
                                 onclick="CKEDITOR.tools.callFunction(49,this);return false;"><span
                                      class="cke_button_icon cke_button__maximize_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -672px;background-size:auto;">&nbsp;</span><span
                                      id="cke_31_label"
                                      class="cke_button_label cke_button__maximize_label"
                                      aria-hidden="false">بیشنه کردن</span><span id="cke_31_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a></span><span
                                  class="cke_toolbar_end"></span></span><span id="cke_32"
                                class="cke_toolbar"
                                aria-labelledby="cke_32_label"
                                role="toolbar"><span id="cke_32_label"
                                  class="cke_voice_label">سند</span><span class="cke_toolbar_start"></span><span
                                  class="cke_toolgroup"
                                  role="presentation"><a id="cke_33"
                                 class="cke_button cke_button__source cke_button_off"
                                 href="javascript:void('منبع')"
                                 title="منبع"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_33_label"
                                 aria-describedby="cke_33_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(50,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(51,event);"
                                 onclick="CKEDITOR.tools.callFunction(52,this);return false;"><span
                                      class="cke_button_icon cke_button__source_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -816px;background-size:auto;">&nbsp;</span><span
                                      id="cke_33_label"
                                      class="cke_button_label cke_button__source_label"
                                      aria-hidden="false">منبع</span><span id="cke_33_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a></span><span
                                  class="cke_toolbar_end"></span></span><span class="cke_toolbar_break"></span><span
                                id="cke_34"
                                class="cke_toolbar"
                                aria-labelledby="cke_34_label"
                                role="toolbar"><span id="cke_34_label"
                                  class="cke_voice_label">سبک‌های پایه</span><span
                                  class="cke_toolbar_start"></span><span class="cke_toolgroup"
                                  role="presentation"><a id="cke_35"
                                 class="cke_button cke_button__bold cke_button_off"
                                 href="javascript:void('درشت')"
                                 title="درشت (کنترل+B)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_35_label"
                                 aria-describedby="cke_35_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(53,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(54,event);"
                                 onclick="CKEDITOR.tools.callFunction(55,this);return false;"><span
                                      class="cke_button_icon cke_button__bold_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -24px;background-size:auto;">&nbsp;</span><span
                                      id="cke_35_label"
                                      class="cke_button_label cke_button__bold_label"
                                      aria-hidden="false">درشت</span><span id="cke_35_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+B</span></a><a id="cke_36"
                                 class="cke_button cke_button__italic cke_button_off"
                                 href="javascript:void('خمیده')"
                                 title="خمیده (کنترل+I)"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_36_label"
                                 aria-describedby="cke_36_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(56,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(57,event);"
                                 onclick="CKEDITOR.tools.callFunction(58,this);return false;"><span
                                      class="cke_button_icon cke_button__italic_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -48px;background-size:auto;">&nbsp;</span><span
                                      id="cke_36_label"
                                      class="cke_button_label cke_button__italic_label"
                                      aria-hidden="false">خمیده</span><span id="cke_36_description"
                                      class="cke_button_label"
                                      aria-hidden="false">Keyboard shortcut کنترل+I</span></a><a id="cke_37"
                                 class="cke_button cke_button__strike cke_button_off"
                                 href="javascript:void('خط‌خورده')"
                                 title="خط‌خورده"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_37_label"
                                 aria-describedby="cke_37_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(59,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(60,event);"
                                 onclick="CKEDITOR.tools.callFunction(61,this);return false;"><span
                                      class="cke_button_icon cke_button__strike_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -72px;background-size:auto;">&nbsp;</span><span
                                      id="cke_37_label"
                                      class="cke_button_label cke_button__strike_label"
                                      aria-hidden="false">خط‌خورده</span><span id="cke_37_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><span class="cke_toolbar_separator"
                                    role="separator"></span><a id="cke_38"
                                 class="cke_button cke_button__removeformat cke_button_off"
                                 href="javascript:void('برداشتن فرمت')"
                                 title="برداشتن فرمت"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_38_label"
                                 aria-describedby="cke_38_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(62,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(63,event);"
                                 onclick="CKEDITOR.tools.callFunction(64,this);return false;"><span
                                      class="cke_button_icon cke_button__removeformat_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -792px;background-size:auto;">&nbsp;</span><span
                                      id="cke_38_label"
                                      class="cke_button_label cke_button__removeformat_label"
                                      aria-hidden="false">برداشتن فرمت</span><span id="cke_38_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a></span><span
                                  class="cke_toolbar_end"></span></span><span id="cke_39"
                                class="cke_toolbar"
                                aria-labelledby="cke_39_label"
                                role="toolbar"><span id="cke_39_label"
                                  class="cke_voice_label">بند</span><span class="cke_toolbar_start"></span><span
                                  class="cke_toolgroup"
                                  role="presentation"><a id="cke_40"
                                 class="cke_button cke_button__numberedlist cke_button_off"
                                 href="javascript:void('فهرست شماره​دار')"
                                 title="فهرست شماره​دار"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_40_label"
                                 aria-describedby="cke_40_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(65,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(66,event);"
                                 onclick="CKEDITOR.tools.callFunction(67,this);return false;"><span
                                      class="cke_button_icon cke_button__numberedlist_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -624px;background-size:auto;">&nbsp;</span><span
                                      id="cke_40_label"
                                      class="cke_button_label cke_button__numberedlist_label"
                                      aria-hidden="false">فهرست شماره​دار</span><span id="cke_40_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><a id="cke_41"
                                 class="cke_button cke_button__bulletedlist cke_button_off"
                                 href="javascript:void('فهرست نقطه​ای')"
                                 title="فهرست نقطه​ای"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_41_label"
                                 aria-describedby="cke_41_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(68,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(69,event);"
                                 onclick="CKEDITOR.tools.callFunction(70,this);return false;"><span
                                      class="cke_button_icon cke_button__bulletedlist_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -576px;background-size:auto;">&nbsp;</span><span
                                      id="cke_41_label"
                                      class="cke_button_label cke_button__bulletedlist_label"
                                      aria-hidden="false">فهرست نقطه​ای</span><span id="cke_41_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><span class="cke_toolbar_separator"
                                    role="separator"></span><a id="cke_42"
                                 class="cke_button cke_button__outdent cke_button_disabled "
                                 href="javascript:void('کاهش تورفتگی')"
                                 title="کاهش تورفتگی"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_42_label"
                                 aria-describedby="cke_42_description"
                                 aria-haspopup="false"
                                 aria-disabled="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(71,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(72,event);"
                                 onclick="CKEDITOR.tools.callFunction(73,this);return false;"><span
                                      class="cke_button_icon cke_button__outdent_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -432px;background-size:auto;">&nbsp;</span><span
                                      id="cke_42_label"
                                      class="cke_button_label cke_button__outdent_label"
                                      aria-hidden="false">کاهش تورفتگی</span><span id="cke_42_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><a id="cke_43"
                                 class="cke_button cke_button__indent cke_button_off"
                                 href="javascript:void('افزایش تورفتگی')"
                                 title="افزایش تورفتگی"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_43_label"
                                 aria-describedby="cke_43_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(74,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(75,event);"
                                 onclick="CKEDITOR.tools.callFunction(76,this);return false;"><span
                                      class="cke_button_icon cke_button__indent_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -384px;background-size:auto;">&nbsp;</span><span
                                      id="cke_43_label"
                                      class="cke_button_label cke_button__indent_label"
                                      aria-hidden="false">افزایش تورفتگی</span><span id="cke_43_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><span class="cke_toolbar_separator"
                                    role="separator"></span><a id="cke_44"
                                 class="cke_button cke_button__blockquote cke_button_off"
                                 href="javascript:void('بلوک نقل قول')"
                                 title="بلوک نقل قول"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_44_label"
                                 aria-describedby="cke_44_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(77,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(78,event);"
                                 onclick="CKEDITOR.tools.callFunction(79,this);return false;"><span
                                      class="cke_button_icon cke_button__blockquote_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -168px;background-size:auto;">&nbsp;</span><span
                                      id="cke_44_label"
                                      class="cke_button_label cke_button__blockquote_label"
                                      aria-hidden="false">بلوک نقل قول</span><span id="cke_44_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><span class="cke_toolbar_separator"
                                    role="separator"></span><a id="cke_45"
                                 class="cke_button cke_button__bidiltr cke_button_off"
                                 href="javascript:void('جهت متن از چپ به راست')"
                                 title="جهت متن از چپ به راست"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_45_label"
                                 aria-describedby="cke_45_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(80,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(81,event);"
                                 onclick="CKEDITOR.tools.callFunction(82,this);return false;"><span
                                      class="cke_button_icon cke_button__bidiltr_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -1056px;background-size:auto;">&nbsp;</span><span
                                      id="cke_45_label"
                                      class="cke_button_label cke_button__bidiltr_label"
                                      aria-hidden="false">جهت متن از چپ به راست</span><span id="cke_45_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a><a id="cke_46"
                                 class="cke_button cke_button__bidirtl cke_button_off"
                                 href="javascript:void('جهت متن از راست به چپ')"
                                 title="جهت متن از راست به چپ"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_46_label"
                                 aria-describedby="cke_46_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(83,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(84,event);"
                                 onclick="CKEDITOR.tools.callFunction(85,this);return false;"><span
                                      class="cke_button_icon cke_button__bidirtl_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 -1080px;background-size:auto;">&nbsp;</span><span
                                      id="cke_46_label"
                                      class="cke_button_label cke_button__bidirtl_label"
                                      aria-hidden="false">جهت متن از راست به چپ</span><span id="cke_46_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a></span><span
                                  class="cke_toolbar_end"></span></span><span id="cke_47"
                                class="cke_toolbar"
                                aria-labelledby="cke_47_label"
                                role="toolbar"><span id="cke_47_label"
                                  class="cke_voice_label">سبک‌ها</span><span class="cke_toolbar_start"></span><span
                                  id="cke_9"
                                  class="cke_combo cke_combo__styles cke_combo_off"
                                  role="presentation"><span id="cke_9_label"
                                    class="cke_combo_label">سبک</span><a class="cke_combo_button"
                                 title="سبکهای قالببندی"
                                 tabindex="-1"
                                 href="javascript:void('سبکهای قالببندی')"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_9_label"
                                 aria-haspopup="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(87,event,this);"
                                 onfocus="return CKEDITOR.tools.callFunction(88,event);"
                                 onclick="CKEDITOR.tools.callFunction(86,this);return false;"><span id="cke_9_text"
                                      class="cke_combo_text cke_combo_inlinelabel">سبک</span><span
                                      class="cke_combo_open"><span
                                        class="cke_combo_arrow"></span></span></a></span><span id="cke_10"
                                  class="cke_combo cke_combo__format cke_combo_off"
                                  role="presentation"><span id="cke_10_label"
                                    class="cke_combo_label">قالب</span><a class="cke_combo_button"
                                 title="قالب بند"
                                 tabindex="-1"
                                 href="javascript:void('قالب بند')"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_10_label"
                                 aria-haspopup="true"
                                 onkeydown="return CKEDITOR.tools.callFunction(90,event,this);"
                                 onfocus="return CKEDITOR.tools.callFunction(91,event);"
                                 onclick="CKEDITOR.tools.callFunction(89,this);return false;"><span id="cke_10_text"
                                      class="cke_combo_text cke_combo_inlinelabel">قالب</span><span
                                      class="cke_combo_open"><span
                                        class="cke_combo_arrow"></span></span></a></span><span
                                  class="cke_toolbar_end"></span></span><span id="cke_48"
                                class="cke_toolbar cke_toolbar_last"
                                aria-labelledby="cke_48_label"
                                role="toolbar"><span id="cke_48_label"
                                  class="cke_voice_label">about</span><span class="cke_toolbar_start"></span><span
                                  class="cke_toolgroup"
                                  role="presentation"><a id="cke_49"
                                 class="cke_button cke_button__about cke_button_off"
                                 href="javascript:void('درباره CKEditor')"
                                 title="درباره CKEditor"
                                 tabindex="-1"
                                 hidefocus="true"
                                 role="button"
                                 aria-labelledby="cke_49_label"
                                 aria-describedby="cke_49_description"
                                 aria-haspopup="false"
                                 onkeydown="return CKEDITOR.tools.callFunction(92,event);"
                                 onfocus="return CKEDITOR.tools.callFunction(93,event);"
                                 onclick="CKEDITOR.tools.callFunction(94,this);return false;"><span
                                      class="cke_button_icon cke_button__about_icon"
                                      style="background-image:url('https://benobe.ir/theme/common/ckeditor/plugins/icons.png?t=H8DA');background-position:0 0px;background-size:auto;">&nbsp;</span><span
                                      id="cke_49_label"
                                      class="cke_button_label cke_button__about_label"
                                      aria-hidden="false">درباره CKEditor</span><span id="cke_49_description"
                                      class="cke_button_label"
                                      aria-hidden="false"></span></a></span><span
                                  class="cke_toolbar_end"></span></span></span></span>
                      <div id="cke_1_contents"
                           class="cke_contents cke_reset"
                           role="presentation"
                           style="height: 300px;"><span id="cke_54"
                              class="cke_voice_label">کلید Alt+0 را برای راهنمایی بفشارید</span><iframe src=""
                                frameborder="0"
                                class="cke_wysiwyg_frame cke_reset"
                                title="ویرایش‌گر متن غنی, descr"
                                aria-describedby="cke_54"
                                tabindex="0"
                                allowtransparency="true"
                                style="width: 100%; height: 100%;"></iframe></div><span id="cke_1_bottom"
                            class="cke_bottom cke_reset_all"
                            role="presentation"
                            style="user-select: none;"><span id="cke_1_resizer"
                              class="cke_resizer cke_resizer_vertical cke_resizer_rtl"
                              title="تغییر اندازه"
                              onmousedown="CKEDITOR.tools.callFunction(0, event)">◣</span><span id="cke_1_path_label"
                              class="cke_voice_label">مسیر عناصر</span><span id="cke_1_path"
                              class="cke_path"
                              role="group"
                              aria-labelledby="cke_1_path_label"><span
                                class="cke_path_empty">&nbsp;</span></span></span>
                    </div>
                  </div>
                  <script>
                    CKEDITOR.replace('descr', {
                      language: 'fa',
                      skin: 'moonocolor',
                      uiColor: '#9AB8F3',
                      height: 200
                    });

                  </script>

                </div>



                <div class="form-group mt-3">
                  <label class="control-label ">وضعیت نمایش:</label>
                  <div class="">
                    <select name="approve"
                            class="form-control ">
                      <option value="1"
                              selected="">فعال</option>
                      <option value="0">غیرفعال</option>

                    </select>

                  </div>
                </div>

                <input type="submit"
                       class="btn btn-success mt-3"
                       value="افزودن">
              </form>

            </div>

          </div>
        </div>

      </div>
      @endsection
