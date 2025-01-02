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
            <h1 class="m-n font-thin h3">اضافه کردن بیمارستان جدید</h1>

          </div>
          <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=hospital"
               class="btn btn-warning btngroup"><i class="fa fa-arrow-right px-2"></i> بازگشت</a> </div>

        </div>
        <div class="wrapper-md">

          <form method="post"
                action=""
                id="formEdit"
                enctype="multipart/form-data"
                data-toggle="validator"
                role="form"
                novalidate="true">
            <div class="panel panel-primary">
              <div class="panel-heading">جستجو</div>
              <div class="panel-body">

                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group mt-3">
                      <label class="control-label">موبایل: <span class="f_req">*</span> </label>
                      <input type="text"
                             name="mobile"
                             value=""
                             placeholder="موبایل ..."
                             class="form-control">
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group mt-3">
                      <label class="control-label">رمزعبور: <span class="f_req">*</span> </label>
                      <input type="text"
                             name="password"
                             placeholder="Password ..."
                             class="form-control">


                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group mt-3">
                      <label class="control-label">نام مسئول: <span class="f_req">*</span> </label>
                      <input type="text"
                             name="firstname"
                             value=""
                             placeholder="نام خود مسئول را وارد کنید"
                             class="form-control">
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group mt-3">
                      <label class="control-label">نام خانوادگی مسئول: <span class="f_req">*</span> </label>
                      <input type="text"
                             name="lastname"
                             value=""
                             placeholder="نام خانوادگی مسئول را وارد کنید"
                             class="form-control">
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="form-group mt-3 has-feedback">
                      <label class="control-label">نام بیمارستان <span class="f_req">*</span></label>
                      <input type="text"
                             name="clinic_name"
                             value=""
                             class="form-control"
                             placeholder="">
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="form-group mt-3 has-feedback">
                      <label class="control-label">تلفن تماس بیمارستان <span class="f_req">*</span></label>
                      <input type="text"
                             name="clinic_tel"
                             value=""
                             class="form-control"
                             placeholder="">
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3 has-feedback">
                      <label class="control-label">آدرس بیمارستان <span class="f_req">*</span></label>
                      <input type="text"
                             name="clinic_address"
                             value=""
                             class="form-control"
                             placeholder="">
                    </div>
                  </div>
                  <div class="w-50 mt-3">
                    <label for=""
                           class="fw-medium">استان</label>
                    <select name="state"
                            onchange="CityList(this.value);"
                            class="form-control mt-2">
                      <option value="0">لطفا استان را انتخاب نمایید</option>
                      <option value="1">تهران</option>
                      <option value="2">گیلان</option>
                      <option value="3">آذربایجان شرقی</option>
                      <option value="4">خوزستان</option>
                      <option value="5">فارس</option>
                      <option value="6">اصفهان</option>
                      <option value="7">خراسان رضوی</option>
                      <option value="8">قزوین</option>
                      <option value="9">سمنان</option>
                      <option value="10">قم</option>
                      <option value="11">مرکزی</option>
                      <option value="12">زنجان</option>
                      <option value="13">مازندران</option>
                      <option value="14">گلستان</option>
                      <option value="15">اردبیل</option>
                      <option value="16">آذربایجان غربی</option>
                      <option value="17">همدان</option>
                      <option value="18">کردستان</option>
                      <option value="19">کرمانشاه</option>
                      <option value="20">لرستان</option>
                      <option value="21">بوشهر</option>
                      <option value="22">کرمان</option>
                      <option value="23">هرمزگان</option>
                      <option value="24">چهارمحال و بختیاری</option>
                      <option value="25">یزد</option>
                      <option value="26">سیستان و بلوچستان</option>
                      <option value="27">ایلام</option>
                      <option value="28">کهگلویه و بویراحمد</option>
                      <option value="29">خراسان شمالی</option>
                      <option value="30">خراسان جنوبی</option>
                      <option value="31">البرز</option>
                    </select>

                  </div>
                  <div class="w-50 mt-3">
                    <label for=""
                           class="fw-medium">شهر</label>
                    <select name="city"
                            id="city"
                            class="form-control mt-2">

                      <option value="0">لطفا شهر را انتخاب نمایید</option>
                      <option value="6331">اروندكنار</option>
                      <option value="63731">اميديه</option>
                      <option value="6481">انديمشك</option>
                      <option value="61">اهواز</option>
                      <option value="6391">ايذه</option>
                      <option value="631">آبادان</option>
                      <option value="6371">آغاجاري</option>
                      <option value="63951">باغ ملك</option>
                      <option value="63561">بندرامام خميني</option>
                      <option value="6361">بهبهان</option>
                      <option value="63881">جايزان</option>
                      <option value="64541">جنت مكان</option>
                      <option value="63541">چمران ـ شهرك طالقاني </option>
                      <option value="63441">حميديه</option>
                      <option value="641">خرمشهر</option>
                      <option value="64651">دزآب</option>
                      <option value="6461">دزفول</option>
                      <option value="63991">دهدز</option>
                      <option value="63871">رامشير</option>
                      <option value="6381">رامهرمز</option>
                      <option value="63551">سربندر</option>
                      <option value="63681">سردشت</option>
                      <option value="64561">سماله</option>
                      <option value="6441">سوسنگرد ـ دشت آزادگان</option>
                      <option value="6431">شادگان</option>
                      <option value="64511">شرافت</option>
                      <option value="6471">شوش</option>
                      <option value="6451">شوشتر</option>
                      <option value="61481">شيبان</option>
                      <option value="64791">صالح مشطت</option>
                      <option value="63661">كردستان بزرگ</option>
                      <option value="64551">گتوند</option>
                      <option value="64941">لالي</option>
                      <option value="6351">ماهشهر</option>
                      <option value="6491">مسجد سليمان</option>
                      <option value="6341">ملاثاني</option>
                      <option value="63751">ميانكوه</option>
                      <option value="64961">هفتگل</option>
                      <option value="63591">هنديجان</option>
                      <option value="64451">هويزه</option>
                      <option value="61491">ويس</option>
                    </select>

                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group mt-3">
                      <label class="control-label">تصویر بیمارستان: </label>
                      <input type="file"
                             name="avatar"
                             id="avatar"
                             data-placeholder="تصویر پروفایل خود را انتخاب کنید"
                             class="filestyle"
                             tabindex="-1"
                             style="position: absolute; clip: rect(0px, 0px, 0px, 0px);">
                      <div class="bootstrap-filestyle input-group"><input type="text"
                               class="form-control "
                               placeholder="تصویر پروفایل خود را انتخاب کنید"
                               disabled=""> <span class="group-span-filestyle input-group-btn"
                              tabindex="0"><label for="avatar"
                                 class="btn btn-default "><span
                                  class="icon-span-filestyle glyphicon glyphicon-folder-open icon-folder-open"></span>
                            <span class="buttonText">Select File</span></label></span></div>

                    </div>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3 has-feedback">
                      <label class="control-label">درباره بیمارستان: <span class="f_req">*</span> </label>
                      <textarea name="aboutme"
                                class="form-control"
                                style="height: 100px;"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label class="control-label">انتخاب تصصص ها</label>
                    <div class="form-group mt-3">
                      <select name="special[]"
                              class="chosen-select chosen-rtl form-control"
                              style="">
                        <option value="405">فوق تخصص گوارش،کبد،تغذیه و رشد کودکان و نوجوانان </option>
                        <option value="406">فوق تخصص بیماری های عفونی کودکان</option>
                        <option value="407">فوق تخصص جراحی پلاستیک زیبایی،ترمیمی و سوختگی</option>
                        <option value="408">فوق تخصص ریه آسم و آلرژی</option>
                        <option value="409">فوق تخصص ریه کودکان </option>
                        <option value="410">دکترای تخصصی ژنتیک پزشکی</option>
                        <option value="411">آزمایشگاه ژنتیک</option>
                        <option value="412">متخصص طب اورژانس</option>
                        <option value="413">تیروئید، دیابت و گوارش </option>
                        <option value="414">سنوگرافیست</option>
                        <option value="415">مامولوژیست</option>
                        <option value="416">متخصص ماموگرافی</option>
                        <option value="417">رادیولوژیست</option>
                        <option value="418">نفرولوژی بزرگسالان</option>
                        <option value="419">فوق تخصص گوارش کودکان</option>
                        <option value="420">جراح مغز و اعصاب</option>
                        <option value="421">فوق تخصص غدد و متابولیسم کودکان </option>
                        <option value="422">فلوشیپ فوق تخصص جراحی سرطان - پستان</option>
                        <option value="423">روانشناسی،ویروس شناسی و بیماری های مقاربتی</option>
                        <option value="424">متخصص بیماری‌های عفونی و طب دار</option>
                        <option value="425">فلوشیپ فوق تخصصی الکتروفیزیولوژی (آریتمی) و پیس میکر </option>
                        <option value="345">روانشناسی و مشاوره</option>
                        <option value="384">روانشناسی</option>
                        <option value="385">مشاوره</option>
                        <option value="388">روانشناسی کودک و نوجوان</option>
                        <option value="400">مشاور خانواده و ازدواج</option>
                        <option value="401">مشاور اختلالات خلقی و اضطرابی</option>
                        <option value="402">درمانگر اختلالات یادگیری</option>
                        <option value="403">عصب روانشناس</option>
                        <option value="404">مشاور تحصیلی و انگیزشی</option>
                        <option value="368">فوق تخصص گوارش و کبد</option>
                        <option value="367">فوق تخصص خون و سرطان</option>
                        <option value="366">اورژانس</option>
                        <option value="365">روماتولوژی (مفاصل و عضلات)</option>
                        <option value="364">رادیولوژیست و سنوگرافیست</option>
                        <option value="363">فلوشیپ جراحی کلیه و مجاری ادراری</option>
                        <option value="362">اعصاب و روان (روانپزشک)</option>
                        <option value="361">پوست مو زیبایی</option>
                        <option value="360">متخصص جراحی ، لاپاراسکوپی پیشرفته ، سرطان</option>
                        <option value="395">فوق تخصص لاپاراسکوپی پیشرفته و سرطان</option>
                        <option value="359">گفتار درمانی</option>
                        <option value="358">مغز و اعصاب و روان</option>
                        <option value="357">مامایی</option>
                        <option value="398">باروری و سلامت جنسی</option>
                        <option value="356">بیهوشی</option>
                        <option value="377">بیهوشی و درد</option>
                        <option value="355">فیزیوتراپی</option>
                        <option value="354">شنوایی سنجی (ادیومتری)</option>
                        <option value="353">علوم آزمایشگاه</option>
                        <option value="352">طب سنتی</option>
                        <option value="351">دارو ساز</option>
                        <option value="350">ارتوپدی</option>
                        <option value="393">ارتوپد(فوق تخصص زانو)</option>
                        <option value="349">داخلی</option>
                        <option value="348">جراحی عمومی ، پلاستیک و بیهوشی</option>
                        <option value="347">پرستار ، پیرا پزشکی ، بهیار</option>
                        <option value="397">کارشناس زخم(زخم پای دیابتی، بستر، سوختگی) </option>
                        <option value="346">پزشکی فیزیکی ، توان بخشی ، طب کار</option>
                        <option value="344">پزشک عمومی</option>
                        <option value="343">دندانپزشکی</option>
                        <option value="342">اپیدمیولوژی و عفونی</option>
                        <option value="341">جراحی عمومی و پلاستیک</option>
                        <option value="340">تغذیه و رژیم غذایی</option>
                        <option value="339">قلب و عروق</option>
                        <option value="381">فلوشیپ فوق تخصصی قلب و عروق آنژوپلاستی و استنت</option>
                        <option value="338">گوش و حلق و بینی</option>
                        <option value="337">زنان و زایمان</option>
                        <option value="374">جراح و متخصص زنان، زایمان و نازایی</option>
                        <option value="336">چشم پزشکی ، اپتو متری ، عینک سازی</option>
                        <option value="335">کودکان</option>
                        <option value="372">متخصص نوزادان و کودکان و نوجوانان</option>
                        <option value="380">فوق تخصص مغز و اعصاب و تشنج کودکان و نوجوانان</option>
                        <option value="369">خون</option>
                        <option value="370">جراح عمومی</option>
                        <option value="396">فلوشیپ فوق تخصص جراحی کولورکتال</option>
                        <option value="371">مغز و اعصاب ، ستون فقرات</option>
                        <option value="382">جراح و متخصص مغز و اعصاب و ستون فقرات</option>
                        <option value="373">فوق تخصص قلب کودکان</option>
                        <option value="375">جراح و متخصص چشم</option>
                        <option value="378">متخصص چشم پزشکی</option>
                        <option value="376">متخصص جراحی فک ، صورت و زیبایی</option>
                        <option value="379">متخصص پوست مو و زیبایی</option>
                        <option value="383">خدمات پرستاری در منزل</option>
                        <option value="386">فوق تخصص متابولیسم و غدد</option>
                        <option value="389">پزشکی ورزشی</option>
                        <option value="390">مغز و اعصاب داخلی</option>
                        <option value="391">گوارش</option>
                        <option value="392">غدد</option>
                        <option value="394">فوق تخصص چاقی و متابولیک</option>
                        <option value="399">فلوشیپ فوق تخصص جراحی چاقی لاپاراسکوپی پیشرفته</option>
                      </select>
                      <div class="chosen-container chosen-container-multi chosen-rtl d-none"
                           style="width: 343px;"
                           title="">
                        <ul class="chosen-choices">
                          <li class="search-field"><input type="text"
                                   value="Select Some Options"
                                   class="default"
                                   autocomplete="off"
                                   style="width: 155px;"></li>
                        </ul>
                        <div class="chosen-drop">
                          <ul class="chosen-results"></ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label class="control-label">تعرفه حق نوبت سایت (تومان) </label>
                    <div class="form-group mt-3">
                      <div class="input-group"
                           style="max-width: 360px">
                        <input type="text"
                               class="form-control numberkey"
                               placeholder="قیمت خود را به صورت عدد وارد کنید"
                               name="price_per_nobatsite"
                               value="0">
                        <span class="input-group-addon d-flex justify-content-center align-items-center">تومان</span>
                      </div>
                      <p class="help-block-blue-inline"><i class="fa fa-info-circle"></i> چنانچه رایگان است عدد 0 وارد
                        کنید</p>
                    </div>

                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group mt-3">
                      <label class="checkbox rtl"><input type="checkbox"
                               name="auth"
                               checked=""
                               value="1"> احراز هویت انجام شود؟</label>
                    </div>
                  </div>
                </div>
                <div class="panel-footer mt-3">
                  <input type="hidden"
                         name="mod"
                         value="hospital">
                  <input type="hidden"
                         name="action"
                         value="added_new">

                  <button type="submit"
                          class="btn btn-success">ثبت و ذخیره</button>
                  <a href="?mod=hospital"
                     class="btn btn-warning">بازگشت</a>
                </div>

              </div>
            </div>

          </form>
          <script type="text/javascript">
            $.getJSON("https://benobe.ir/index.php?mod=zone&action=updatecity&ajax=1", {
              typeid: $("#zone").val()
            }, function (j) {
              var subzone = "";
              var options = '';
              for (var i = 0; i < j.length; i++) {
                var id = parseInt(j[i].optionValue);
                var name = j[i].optionDisplay;
                var selected = '';
                if (id == subzone) selected = "selected";
                options += '<option value="' + id + '" ' + selected + '>' + name + '</option>';
              }

              $("#subzone").html(options);
            });

            $(document).ready(function () {
              $("#zone").change(function () {

                $.getJSON("https://benobe.ir/index.php?mod=zone&action=updatecity&ajax=1", {
                  typeid: $(this).val()
                }, function (j) {
                  var options = '';
                  for (var i = 0; i < j.length; i++) {
                    var selected = 'selected';
                    var id = parseInt(j[i].optionValue);
                    options += '<option value="' + j[i].optionValue + '" >' + j[i].optionDisplay +
                      '</option>';
                  }
                  $("#subzone").html(options);
                });
              });
            });

          </script>
          <script src="{{ asset('app-assets/js/town-city/city.js') }}"></script>
        </div>
      </div>
      @endsection
