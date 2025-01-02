@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA%20%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1%20%20%20%26%2339%3B)%0D />

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


      <!-- Content -->
      <div class="wrapper-md">

        <div class="col-md-3">
          <div class="panel panel-primary">
            <div class="panel-heading">Select Mail Template</div>
            <div class="panel-body">
              <div class="form-group">
                <label class="control-label">Select:</label>
                <select name="selectTemplate"
                        id="selectTemplate"
                        class="form-control">
                  <option value="3">بازگردانی رمزعبور</option>
                  <option value="1">تماس با ما</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="panel panel-primary">
            <div class="panel-heading">لیست قالب ها</div>
            <div class="panel-body">

              <form method="post"
                    action="">
                <input type="hidden"
                       name="mod"
                       value="mail_template">
                <input type="hidden"
                       name="action"
                       value="savemail">
                <div id="result_template">
                  <div class="form-group">
                    <label class="control-label">سربرگ ایمیل</label>
                    <input type="text"
                           class="form-control"
                           name="mail[][subject]"
                           value="">
                  </div>
                  <div class="form-group">
                    <div class="direction: ltr; height: 350px; overflow: hidden;"
                         id="result_template">
                      <textarea id="code-edit"
                                name="mail[][template]"
                                style="display: none;"></textarea>
                      <div class="CodeMirror cm-s-default CodeMirror-wrap">
                        <div
                             style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 5px; left: 35px;">
                          <textarea autocorrect="off"
                                    autocapitalize="off"
                                    spellcheck="false"
                                    tabindex="0"
                                    style="position: absolute; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea>
                        </div>
                        <div class="CodeMirror-vscrollbar"
                             cm-not-content="true">
                          <div style="min-width: 1px; height: 0px;"></div>
                        </div>
                        <div class="CodeMirror-hscrollbar"
                             cm-not-content="true">
                          <div style="height: 100%; min-height: 1px; width: 0px;"></div>
                        </div>
                        <div class="CodeMirror-scrollbar-filler"
                             cm-not-content="true"></div>
                        <div class="CodeMirror-gutter-filler"
                             cm-not-content="true"></div>
                        <div class="CodeMirror-scroll"
                             tabindex="-1">
                          <div class="CodeMirror-sizer"
                               style="margin-left: 30px; margin-bottom: -17px; border-right-width: 13px; min-height: 26px; padding-right: 0px; padding-bottom: 0px;">
                            <div style="position: relative; top: 0px;">
                              <div class="CodeMirror-lines">
                                <div style="position: relative; outline: none;">
                                  <div class="CodeMirror-measure"><span><span>​</span>x</span></div>
                                  <div class="CodeMirror-measure"></div>
                                  <div style="position: relative; z-index: 1;"></div>
                                  <div class="CodeMirror-cursors">
                                    <div class="CodeMirror-cursor"
                                         style="left: 4px; top: 0px; height: 18px;">&nbsp;</div>
                                  </div>
                                  <div class="CodeMirror-code">
                                    <div style="position: relative;">
                                      <div class="CodeMirror-gutter-wrapper"
                                           style="left: -30px;">
                                        <div class="CodeMirror-linenumber CodeMirror-gutter-elt"
                                             style="left: 0px; width: 21px;">1</div>
                                      </div>
                                      <pre
                                           class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                               style="position: absolute; height: 13px; width: 1px; border-bottom: 0px solid transparent; top: 26px;">
                          </div>
                          <div class="CodeMirror-gutters"
                               style="height: 39px;">
                            <div class="CodeMirror-gutter CodeMirror-linenumbers"
                                 style="width: 29px;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <a href="?mod=mail_template&amp;action=preview&amp;id=4&amp;ajax=true"
                       class="popup btn btn-block btn-primary btn-sm">پیش نمایش</a>
                  </div>

                  <script type="text/javascript">
                    var editor = CodeMirror.fromTextArea(document.getElementById('code-edit'), {
                      mode: 'text/html',
                      lineNumbers: true,
                      dragDrop: false,
                      indentWithTabs: false,
                      tabMode: 'indent',
                      lineWrapping: true,
                      indentUnit: 4
                    });

                    jQuery(document).ready(function ($) {
                      jQuery('a.popup').on('click', function () {
                        var x = screen.width / 2 - 700 / 2;
                        var y = screen.height / 2 - 450 / 2;
                        newwindow = window.open($(this).attr('href'), '', 'height=500,width=600,left=' + x +
                          ',top=' + y);
                        if (window.focus) {
                          newwindow.focus()
                        }
                        return false;
                      });
                    });

                  </script>
                </div>
                <div class="clearfix"
                     style="margin-top: 10px;"></div>
                <button type="submit"
                        class="btn btn-success btn-block btn-sm">ذخیره تغییرات</button>
              </form>

            </div>

          </div>

        </div>
        <div class="clearfix"></div>
        <link rel="stylesheet"
              type="text/css"
              href="theme/common/codemirror/css/default.css">
        <script type="text/javascript"
                src="theme/common/codemirror/js/code.js"></script>
        <script language="JavaScript"
                type="text/javascript">
          jQuery(document).ready(function ($) {
            $("#selectTemplate").on('change', function () {
              var selectTemplate = $(this).val();
              return view_template(selectTemplate);
            });

            function view_template(selectTemplate) {
              if (selectTemplate.length > 0) {
                $.ajax({
                  url: "?mod=mail_template&action=templatecode&ajax=true",
                  method: "post",
                  data: {
                    selectTemplate: selectTemplate
                  },
                  success: function (data) {
                    $('#result_template').html(
                      "<div style='text-align: center;'><img width='16' src='https://benobe.ir/theme/np_admin/nopardaz/images/dashboard_loading.gif'>Please Wait ...</div>"
                      );
                    setTimeout(function () {
                      $('#result_template').html(data);
                    }, 300);
                  }
                });
              }
              return false
            }
            setTimeout(function () {
              return view_template('4');
            }, 300);
          });

        </script>
        <div class="help-block"><i class="fa fa-lightbulb-o "></i> <i class="fa fa-angle-double-left"></i>کاربر گرامی
          برای تغییر و جایگزینی هر گونه محتوی ابتدا یک پشتیبان از آن دریافت کنید و سپس اقدام به تغییر اطلاعات نمایید و
          همچنین توجه داشته باشید که عباراتی که به اینصورت [_sitename_] درج شده است حاوی اطلاعات میباشد که پس از ارسال
          ایمیل در ایمیل کاربران قابل مشاهده میباشد.</div>
      </div>
      <!-- / Content -->

      <!-- Footer -->
      <!-- Footer-->

      <!--/ Footer-->
      <!-- / Footer -->
      <div class="content-backdrop fade"></div>
      </div>
      @endsection
