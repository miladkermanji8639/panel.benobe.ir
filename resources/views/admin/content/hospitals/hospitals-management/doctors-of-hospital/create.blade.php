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
      <link href="{{ asset('admin-assets/css/old-benobe-styles/bootstrap.min.css') }}"
            rel="stylesheet">
      <link href="{{ asset('admin-assets/css/old-benobe-styles/bootstrap-rtl.min.css') }}"
            rel="stylesheet">
      <link href="{{ asset('admin-assets/css/old-benobe-styles/app_admin.css?v=dddmue') }}"
            rel="stylesheet">

      @section('content')
      <div class="app-content-body">

        <div class="bg-white-only lter b-b wrapper-md clrfix">

          <div class="pull-right">
            <h1 class="m-n font-thin h3">اضافه کردن دکتر جدید</h1>

          </div>
          <div class="pull-left"><a
               href="https://benobe.ir/panel.php?mod=hospital&amp;action=doctors&amp;hospital_id=78240"
               class="btn btn-warning btngroup"> بازگشت</a> </div>

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
              <div class="panel-heading">اطلاعات دکتر</div>
              <div class="panel-body">

                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="control-label">تلفن تماس: <span class="f_req">*</span> </label>
                      <input type="text"
                             name="mobile"
                             value=""
                             placeholder="موبایل / تلفن تماس ..."
                             class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="control-label">نام و نام خانوادگی: <span class="f_req">*</span> </label>
                      <input type="text"
                             name="namefamily"
                             value=""
                             placeholder="نام و نام خانوادگی پزشک را وارد کنید"
                             class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="control-label">جنسیت: <span class="f_req">*</span> </label>
                      <select class="form-control"
                              name="gender">
                        <option value="male">مرد</option>
                        <option value="famale">زن</option>

                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="control-label">تعرفه نوبت آزاد حضوری(تومان) </label>
                      <div class="input-group">
                        <input type="text"
                               class="form-control numberkey"
                               placeholder="قیمت خود را به صورت عدد وارد کنید"
                               name="price_doctor_nobat"
                               value="">
                        <span class="input-group-addon">تومان</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="control-label">تصویر دکتر </label>
                      <input type="file"
                             class="filestyle form-control"
                             data-placeholder="انتخاب عکس پرسنلی"
                             name="image"
                             id="filestyle-0"
                             tabindex="-1"
                             >
                     

                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="control-label">روزهای باز تقویم</label>
                      <div class="input-group">
                        <input type="tel"
                               class="form-control ltr text-center numberkey"
                               placeholder="عدد وارد کنید"
                               name="free_days_nobat"
                               value=""
                               required="">
                        <div class="input-group-addon"><span class="">عدد</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label">انتخاب تصصص ها</label>
                      <select data-placeholder="تخصص های پزشک را انتخاب کنید"
                              class="chosen-rtl chosen-select form-control"
                              name="special[]"
                              style="">
                        <option value="414">سنوگرافیست</option>
                        <optgroup label="مامولوژیست">
                          <option value="415">مامولوژیست</option>
                          <option value="416">متخصص ماموگرافی</option>
                        </optgroup>
                        <option value="422">فلوشیپ فوق تخصص جراحی سرطان - پستان</option>
                        <option value="423">روانشناسی،ویروس شناسی و بیماری های مقاربتی</option>
                        <option value="424">متخصص بیماری‌های عفونی و طب دار</option>
                        <optgroup label="روانشناسی و مشاوره">
                          <option value="345">روانشناسی و مشاوره</option>
                          <option value="384">روانشناسی</option>
                          <option value="385">مشاوره</option>
                          <option value="388">روانشناسی کودک و نوجوان</option>
                          <option value="400">مشاور خانواده و ازدواج</option>
                          <option value="401">مشاور اختلالات خلقی و اضطرابی</option>
                          <option value="402">درمانگر اختلالات یادگیری</option>
                          <option value="403">عصب روانشناس</option>
                          <option value="404">مشاور تحصیلی و انگیزشی</option>
                        </optgroup>
                        <option value="368">فوق تخصص گوارش و کبد</option>
                        <option value="367">فوق تخصص خون و سرطان</option>
                        <optgroup label="اورژانس">
                          <option value="366">اورژانس</option>
                          <option value="412">متخصص طب اورژانس</option>
                        </optgroup>
                        <option value="365">روماتولوژی (مفاصل و عضلات)</option>
                        <optgroup label="رادیولوژیست و سنوگرافیست">
                          <option value="364">رادیولوژیست و سنوگرافیست</option>
                          <option value="417">رادیولوژیست</option>
                        </optgroup>
                        <optgroup label="فلوشیپ جراحی کلیه و مجاری ادراری">
                          <option value="363">فلوشیپ جراحی کلیه و مجاری ادراری</option>
                          <option value="418">نفرولوژی بزرگسالان</option>
                        </optgroup>
                        <option value="362">اعصاب و روان (روانپزشک)</option>
                        <option value="361">پوست مو زیبایی</option>
                        <optgroup label="متخصص جراحی ، لاپاراسکوپی پیشرفته ، سرطان">
                          <option value="360">متخصص جراحی ، لاپاراسکوپی پیشرفته ، سرطان</option>
                          <option value="395">فوق تخصص لاپاراسکوپی پیشرفته و سرطان</option>
                        </optgroup>
                        <option value="359">گفتار درمانی</option>
                        <optgroup label="مغز و اعصاب و روان">
                          <option value="358">مغز و اعصاب و روان</option>
                          <option value="420">جراح مغز و اعصاب</option>
                        </optgroup>
                        <optgroup label="مامایی">
                          <option value="357">مامایی</option>
                          <option value="398">باروری و سلامت جنسی</option>
                        </optgroup>
                        <optgroup label="بیهوشی">
                          <option value="356">بیهوشی</option>
                          <option value="377">بیهوشی و درد</option>
                        </optgroup>
                        <option value="355">فیزیوتراپی</option>
                        <option value="354">شنوایی سنجی (ادیومتری)</option>
                        <optgroup label="علوم آزمایشگاه">
                          <option value="353">علوم آزمایشگاه</option>
                          <option value="410">دکترای تخصصی ژنتیک پزشکی</option>
                          <option value="411">آزمایشگاه ژنتیک</option>
                        </optgroup>
                        <option value="352">طب سنتی</option>
                        <option value="351">دارو ساز</option>
                        <optgroup label="ارتوپدی">
                          <option value="350">ارتوپدی</option>
                          <option value="393">ارتوپد(فوق تخصص زانو)</option>
                        </optgroup>
                        <optgroup label="داخلی">
                          <option value="349">داخلی</option>
                          <option value="408">فوق تخصص ریه آسم و آلرژی</option>
                          <option value="413">تیروئید، دیابت و گوارش </option>
                        </optgroup>
                        <option value="348">جراحی عمومی ، پلاستیک و بیهوشی</option>
                        <optgroup label="پرستار ، پیرا پزشکی ، بهیار">
                          <option value="347">پرستار ، پیرا پزشکی ، بهیار</option>
                          <option value="397">کارشناس زخم(زخم پای دیابتی، بستر، سوختگی) </option>
                        </optgroup>
                        <option value="346">پزشکی فیزیکی ، توان بخشی ، طب کار</option>
                        <option value="344">پزشک عمومی</option>
                        <option value="343">دندانپزشکی</option>
                        <option value="342">اپیدمیولوژی و عفونی</option>
                        <optgroup label="جراحی عمومی و پلاستیک">
                          <option value="341">جراحی عمومی و پلاستیک</option>
                          <option value="407">فوق تخصص جراحی پلاستیک زیبایی،ترمیمی و سوختگی</option>
                        </optgroup>
                        <option value="340">تغذیه و رژیم غذایی</option>
                        <optgroup label="قلب و عروق">
                          <option value="339">قلب و عروق</option>
                          <option value="425">فلوشیپ فوق تخصصی الکتروفیزیولوژی (آریتمی) و پیس میکر </option>
                          <option value="381">فلوشیپ فوق تخصصی قلب و عروق آنژوپلاستی و استنت</option>
                        </optgroup>
                        <option value="338">گوش و حلق و بینی</option>
                        <optgroup label="زنان و زایمان">
                          <option value="337">زنان و زایمان</option>
                          <option value="374">جراح و متخصص زنان، زایمان و نازایی</option>
                        </optgroup>
                        <option value="336">چشم پزشکی ، اپتو متری ، عینک سازی</option>
                        <optgroup label="کودکان">
                          <option value="335">کودکان</option>
                          <option value="405">فوق تخصص گوارش،کبد،تغذیه و رشد کودکان و نوجوانان </option>
                          <option value="406">فوق تخصص بیماری های عفونی کودکان</option>
                          <option value="409">فوق تخصص ریه کودکان </option>
                          <option value="372">متخصص نوزادان و کودکان و نوجوانان</option>
                          <option value="380">فوق تخصص مغز و اعصاب و تشنج کودکان و نوجوانان</option>
                        </optgroup>
                        <option value="369">خون</option>
                        <optgroup label="جراح عمومی">
                          <option value="370">جراح عمومی</option>
                          <option value="396">فلوشیپ فوق تخصص جراحی کولورکتال</option>
                        </optgroup>
                        <optgroup label="مغز و اعصاب ، ستون فقرات">
                          <option value="371">مغز و اعصاب ، ستون فقرات</option>
                          <option value="382">جراح و متخصص مغز و اعصاب و ستون فقرات</option>
                        </optgroup>
                        <option value="373">فوق تخصص قلب کودکان</option>
                        <optgroup label="جراح و متخصص چشم">
                          <option value="375">جراح و متخصص چشم</option>
                          <option value="378">متخصص چشم پزشکی</option>
                        </optgroup>
                        <option value="376">متخصص جراحی فک ، صورت و زیبایی</option>
                        <option value="379">متخصص پوست مو و زیبایی</option>
                        <option value="383">خدمات پرستاری در منزل</option>
                        <optgroup label="فوق تخصص متابولیسم و غدد">
                          <option value="386">فوق تخصص متابولیسم و غدد</option>
                          <option value="421">فوق تخصص غدد و متابولیسم کودکان </option>
                        </optgroup>
                        <option value="389">پزشکی ورزشی</option>
                        <option value="390">مغز و اعصاب داخلی</option>
                        <optgroup label="گوارش">
                          <option value="391">گوارش</option>
                          <option value="419">فوق تخصص گوارش کودکان</option>
                        </optgroup>
                        <option value="392">غدد</option>
                        <option value="394">فوق تخصص چاقی و متابولیک</option>
                        <option value="399">فلوشیپ فوق تخصص جراحی چاقی لاپاراسکوپی پیشرفته</option>
                      </select>
                      <div class="chosen-container chosen-container-multi chosen-rtl d-none"
                           style="width: 361px;"
                           title="">
                        <ul class="chosen-choices">
                          <li class="search-field"><input type="text"
                                   value="تخصص های پزشک را انتخاب کنید"
                                   class="default"
                                   autocomplete="off"
                                   style="width: 204px;"></li>
                        </ul>
                        <div class="chosen-drop">
                          <ul class="chosen-results"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group has-feedback">
                      <label class="control-label">نکات مهم:</label>
                      <textarea name="important_points"
                                class="form-control"
                                style="height: 100px;"></textarea>
                    </div>
                  </div>

                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="row">


                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="dayscedule  clrfix"
                           id="schedule_div_Saturday">
                        <label class="checkbox head"><input type="checkbox"
                                 name="days[Saturday][day]"
                                 onclick="checked_schedule_day('schedule_div_Saturday'); toggle_show('sobh_Saturday');"
                                 value="Saturday"> شنبه</label>
                        <div class="keo">
                          <div class="row"
                               id="sobh_Saturday"
                               style="display: ; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز شنبه</label>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Saturday][shift_sobh]"
                                         value="1">برنامه برای شیف صبح فعال باشد؟</label>
                              </div>
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Saturday][shift_asr]"
                                         value="1">برنامه برای شیف عصر فعال باشد؟</label>
                              </div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text"
                                       name="days[Saturday][sobh_start_time]"
                                       value="09:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="09:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       name="days[Saturday][sobh_end_time]"
                                       value="12:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="12:00:00.000"></div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text"
                                       name="days[Saturday][asr_start_time]"
                                       value="17:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="17:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       class="input-timepicker timepicker_start"
                                       name="days[Saturday][asr_end_time]"
                                       value="20:00"
                                       data-time="20:00:00.000"></div>
                            </div>

                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>پذیرش نوبت هر</label>
                                <select class="form-control input-sm"
                                        name="days[Saturday][per_time]">

                                </select>
                              </div>
                            </div>
                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>حداکثر پذیرش در این روز</label>
                                <input type="number"
                                       value="50"
                                       name="days[Saturday][capacity]"
                                       min="0"
                                       class="numberkey ltr text-center form-control input-sm">
                              </div>
                            </div>

                            <div class="settingsc col-md-12">
                              <div class="form-group">
                                <label style="color: red;">زمان هایی که می خواهید غیرفعال شود:</label>
                                <div class="row"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="dayscedule  clrfix"
                           id="schedule_div_Sunday">
                        <label class="checkbox head"><input type="checkbox"
                                 name="days[Sunday][day]"
                                 onclick="checked_schedule_day('schedule_div_Sunday'); toggle_show('sobh_Sunday');"
                                 value="Sunday"> یکشنبه</label>
                        <div class="keo">
                          <div class="row"
                               id="sobh_Sunday"
                               style="display: ; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز یکشنبه</label>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Sunday][shift_sobh]"
                                         value="1">برنامه برای شیف صبح فعال باشد؟</label>
                              </div>
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Sunday][shift_asr]"
                                         value="1">برنامه برای شیف عصر فعال باشد؟</label>
                              </div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text"
                                       name="days[Sunday][sobh_start_time]"
                                       value="09:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="09:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       name="days[Sunday][sobh_end_time]"
                                       value="12:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="12:00:00.000"></div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text"
                                       name="days[Sunday][asr_start_time]"
                                       value="17:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="17:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       class="input-timepicker timepicker_start"
                                       name="days[Sunday][asr_end_time]"
                                       value="20:00"
                                       data-time="20:00:00.000"></div>
                            </div>

                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>پذیرش نوبت هر</label>
                                <select class="form-control input-sm"
                                        name="days[Sunday][per_time]">

                                </select>
                              </div>
                            </div>
                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>حداکثر پذیرش در این روز</label>
                                <input type="number"
                                       value="50"
                                       name="days[Sunday][capacity]"
                                       min="0"
                                       class="numberkey ltr text-center form-control input-sm">
                              </div>
                            </div>

                            <div class="settingsc col-md-12">
                              <div class="form-group">
                                <label style="color: red;">زمان هایی که می خواهید غیرفعال شود:</label>
                                <div class="row"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="dayscedule  clrfix"
                           id="schedule_div_Monday">
                        <label class="checkbox head"><input type="checkbox"
                                 name="days[Monday][day]"
                                 onclick="checked_schedule_day('schedule_div_Monday'); toggle_show('sobh_Monday');"
                                 value="Monday"> دوشنبه</label>
                        <div class="keo">
                          <div class="row"
                               id="sobh_Monday"
                               style="display: ; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز دوشنبه</label>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Monday][shift_sobh]"
                                         value="1">برنامه برای شیف صبح فعال باشد؟</label>
                              </div>
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Monday][shift_asr]"
                                         value="1">برنامه برای شیف عصر فعال باشد؟</label>
                              </div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text"
                                       name="days[Monday][sobh_start_time]"
                                       value="09:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="09:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       name="days[Monday][sobh_end_time]"
                                       value="12:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="12:00:00.000"></div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text"
                                       name="days[Monday][asr_start_time]"
                                       value="17:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="17:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       class="input-timepicker timepicker_start"
                                       name="days[Monday][asr_end_time]"
                                       value="20:00"
                                       data-time="20:00:00.000"></div>
                            </div>

                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>پذیرش نوبت هر</label>
                                <select class="form-control input-sm"
                                        name="days[Monday][per_time]">

                                </select>
                              </div>
                            </div>
                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>حداکثر پذیرش در این روز</label>
                                <input type="number"
                                       value="50"
                                       name="days[Monday][capacity]"
                                       min="0"
                                       class="numberkey ltr text-center form-control input-sm">
                              </div>
                            </div>

                            <div class="settingsc col-md-12">
                              <div class="form-group">
                                <label style="color: red;">زمان هایی که می خواهید غیرفعال شود:</label>
                                <div class="row"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="dayscedule  clrfix"
                           id="schedule_div_Tuesday">
                        <label class="checkbox head"><input type="checkbox"
                                 name="days[Tuesday][day]"
                                 onclick="checked_schedule_day('schedule_div_Tuesday'); toggle_show('sobh_Tuesday');"
                                 value="Tuesday"> سه شنبه</label>
                        <div class="keo">
                          <div class="row"
                               id="sobh_Tuesday"
                               style="display: ; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز سه شنبه</label>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Tuesday][shift_sobh]"
                                         value="1">برنامه برای شیف صبح فعال باشد؟</label>
                              </div>
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Tuesday][shift_asr]"
                                         value="1">برنامه برای شیف عصر فعال باشد؟</label>
                              </div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text"
                                       name="days[Tuesday][sobh_start_time]"
                                       value="09:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="09:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       name="days[Tuesday][sobh_end_time]"
                                       value="12:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="12:00:00.000"></div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text"
                                       name="days[Tuesday][asr_start_time]"
                                       value="17:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="17:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       class="input-timepicker timepicker_start"
                                       name="days[Tuesday][asr_end_time]"
                                       value="20:00"
                                       data-time="20:00:00.000"></div>
                            </div>

                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>پذیرش نوبت هر</label>
                                <select class="form-control input-sm"
                                        name="days[Tuesday][per_time]">

                                </select>
                              </div>
                            </div>
                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>حداکثر پذیرش در این روز</label>
                                <input type="number"
                                       value="50"
                                       name="days[Tuesday][capacity]"
                                       min="0"
                                       class="numberkey ltr text-center form-control input-sm">
                              </div>
                            </div>

                            <div class="settingsc col-md-12">
                              <div class="form-group">
                                <label style="color: red;">زمان هایی که می خواهید غیرفعال شود:</label>
                                <div class="row"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="dayscedule  clrfix"
                           id="schedule_div_Wednesday">
                        <label class="checkbox head"><input type="checkbox"
                                 name="days[Wednesday][day]"
                                 onclick="checked_schedule_day('schedule_div_Wednesday'); toggle_show('sobh_Wednesday');"
                                 value="Wednesday"> چهارشنبه</label>
                        <div class="keo">
                          <div class="row"
                               id="sobh_Wednesday"
                               style="display: ; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز
                              چهارشنبه</label>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Wednesday][shift_sobh]"
                                         value="1">برنامه برای شیف صبح فعال باشد؟</label>
                              </div>
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Wednesday][shift_asr]"
                                         value="1">برنامه برای شیف عصر فعال باشد؟</label>
                              </div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text"
                                       name="days[Wednesday][sobh_start_time]"
                                       value="09:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="09:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       name="days[Wednesday][sobh_end_time]"
                                       value="12:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="12:00:00.000"></div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text"
                                       name="days[Wednesday][asr_start_time]"
                                       value="17:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="17:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       class="input-timepicker timepicker_start"
                                       name="days[Wednesday][asr_end_time]"
                                       value="20:00"
                                       data-time="20:00:00.000"></div>
                            </div>

                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>پذیرش نوبت هر</label>
                                <select class="form-control input-sm"
                                        name="days[Wednesday][per_time]">

                                </select>
                              </div>
                            </div>
                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>حداکثر پذیرش در این روز</label>
                                <input type="number"
                                       value="50"
                                       name="days[Wednesday][capacity]"
                                       min="0"
                                       class="numberkey ltr text-center form-control input-sm">
                              </div>
                            </div>

                            <div class="settingsc col-md-12">
                              <div class="form-group">
                                <label style="color: red;">زمان هایی که می خواهید غیرفعال شود:</label>
                                <div class="row"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="dayscedule  clrfix"
                           id="schedule_div_Thursday">
                        <label class="checkbox head"><input type="checkbox"
                                 name="days[Thursday][day]"
                                 onclick="checked_schedule_day('schedule_div_Thursday'); toggle_show('sobh_Thursday');"
                                 value="Thursday"> پنج شنبه</label>
                        <div class="keo">
                          <div class="row"
                               id="sobh_Thursday"
                               style="display: ; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز پنج
                              شنبه</label>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Thursday][shift_sobh]"
                                         value="1">برنامه برای شیف صبح فعال باشد؟</label>
                              </div>
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Thursday][shift_asr]"
                                         value="1">برنامه برای شیف عصر فعال باشد؟</label>
                              </div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text"
                                       name="days[Thursday][sobh_start_time]"
                                       value="09:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="09:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       name="days[Thursday][sobh_end_time]"
                                       value="12:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="12:00:00.000"></div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text"
                                       name="days[Thursday][asr_start_time]"
                                       value="17:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="17:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       class="input-timepicker timepicker_start"
                                       name="days[Thursday][asr_end_time]"
                                       value="20:00"
                                       data-time="20:00:00.000"></div>
                            </div>

                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>پذیرش نوبت هر</label>
                                <select class="form-control input-sm"
                                        name="days[Thursday][per_time]">

                                </select>
                              </div>
                            </div>
                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>حداکثر پذیرش در این روز</label>
                                <input type="number"
                                       value="50"
                                       name="days[Thursday][capacity]"
                                       min="0"
                                       class="numberkey ltr text-center form-control input-sm">
                              </div>
                            </div>

                            <div class="settingsc col-md-12">
                              <div class="form-group">
                                <label style="color: red;">زمان هایی که می خواهید غیرفعال شود:</label>
                                <div class="row"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="dayscedule  clrfix"
                           id="schedule_div_Friday">
                        <label class="checkbox head"><input type="checkbox"
                                 name="days[Friday][day]"
                                 onclick="checked_schedule_day('schedule_div_Friday'); toggle_show('sobh_Friday');"
                                 value="Friday"> جمعه</label>
                        <div class="keo">
                          <div class="row"
                               id="sobh_Friday"
                               style="display: ; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز جمعه</label>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Friday][shift_sobh]"
                                         value="1">برنامه برای شیف صبح فعال باشد؟</label>
                              </div>
                              <div class="form-group">
                                <label class="checkbox rtl"><input type="checkbox"
                                         name="days[Friday][shift_asr]"
                                         value="1">برنامه برای شیف عصر فعال باشد؟</label>
                              </div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text"
                                       name="days[Friday][sobh_start_time]"
                                       value="09:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="09:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       name="days[Friday][sobh_end_time]"
                                       value="12:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="12:00:00.000"></div>
                            </div>
                            <div class="settingsc col-md-12">
                              <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text"
                                       name="days[Friday][asr_start_time]"
                                       value="17:00"
                                       class="input-timepicker timepicker_start"
                                       data-time="17:00:00.000"> <span class="pr">تا ساعت</span> <input type="text"
                                       class="input-timepicker timepicker_start"
                                       name="days[Friday][asr_end_time]"
                                       value="20:00"
                                       data-time="20:00:00.000"></div>
                            </div>

                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>پذیرش نوبت هر</label>
                                <select class="form-control input-sm"
                                        name="days[Friday][per_time]">

                                </select>
                              </div>
                            </div>
                            <div class="settingsc col-md-6">
                              <div class="form-group">
                                <label>حداکثر پذیرش در این روز</label>
                                <input type="number"
                                       value="50"
                                       name="days[Friday][capacity]"
                                       min="0"
                                       class="numberkey ltr text-center form-control input-sm">
                              </div>
                            </div>

                            <div class="settingsc col-md-12">
                              <div class="form-group">
                                <label style="color: red;">زمان هایی که می خواهید غیرفعال شود:</label>
                                <div class="row"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="panel panel-default">
                    <div class="panel-heading"> انتخاب روزهای تعطیل:</div>
                    <div class="panel-body">
                      <div class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12 hasDatepicker"
                             id="holiday">
                          <div class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-rtl"
                               style="display: block;">
                            <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a
                                 class="ui-datepicker-next btn btn-link"
                                 data-handler="next"
                                 data-event="click"
                                 title="بعد"><i class="fa fa-arrow-circle-left"></i></a><a
                                 class="ui-datepicker-prev btn btn-link"
                                 data-handler="prev"
                                 data-event="click"
                                 title="قبل"><i class="fa fa-arrow-circle-right"></i></a>
                              <div class="ui-datepicker-title"><span class="ui-datepicker-month">مرداد</span>&nbsp;<span
                                      class="ui-datepicker-year">1403</span></div>
                            </div>
                            <table class="ui-datepicker-calendar">
                              <thead>
                                <tr>
                                  <th class="ui-datepicker-week-end"><span title="شنبه">ش</span></th>
                                  <th class="ui-datepicker-week-end"><span title="یکشنبه">ی</span></th>
                                  <th><span title="دوشنبه">د</span></th>
                                  <th><span title="سه شنبه">س</span></th>
                                  <th><span title="چهارشنبه">چ</span></th>
                                  <th><span title="پنجشنبه">پ</span></th>
                                  <th><span title="جمعه">ج</span></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td
                                      class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                    &nbsp;</td>
                                  <td
                                      class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                    &nbsp;</td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">1</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">2</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">3</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">4</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">5</a></td>
                                </tr>
                                <tr>
                                  <td class=" ui-datepicker-week-end "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">6</a></td>
                                  <td class=" ui-datepicker-week-end "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">7</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">8</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">9</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">10</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">11</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">12</a></td>
                                </tr>
                                <tr>
                                  <td class=" ui-datepicker-week-end "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">13</a></td>
                                  <td class=" ui-datepicker-week-end "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">14</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">15</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">16</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">17</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">18</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">19</a></td>
                                </tr>
                                <tr>
                                  <td class=" ui-datepicker-week-end "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">20</a></td>
                                  <td class=" ui-datepicker-week-end "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">21</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">22</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">23</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">24</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">25</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">26</a></td>
                                </tr>
                                <tr>
                                  <td class=" ui-datepicker-week-end ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today"
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a
                                       class="ui-state-default ui-state-highlight ui-state-active ui-state-hover"
                                       href="#">27</a></td>
                                  <td class=" ui-datepicker-week-end "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">28</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">29</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">30</a></td>
                                  <td class=" "
                                      data-handler="selectDay"
                                      data-event="click"
                                      data-month="4"
                                      data-year="1403"><a class="ui-state-default"
                                       href="#">31</a></td>
                                  <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                    &nbsp;</td>
                                  <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                    &nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div class="col-md-8 col-sm-6 col-xs-12">
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th>روز</th>
                                <th width="100">عملیات</th>
                              </tr>
                            </thead>
                            <tbody id="added_day">
                              <tr>
                                <td colspan="2">موردی ثبت نشده است</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="panel-footer">
              <input type="hidden"
                     name="mod"
                     value="hospital">
              <input type="hidden"
                     name="action"
                     value="doctor_update_save">
              <input type="hidden"
                     name="hospital_id"
                     value="78240">

              <button type="submit"
                      class="btn btn-success disabled">ثبت و ذخیره</button>
              <a href="?mod=hospital&amp;action=doctors&amp;hospital_id=78240"
                 class="btn btn-warning">بازگشت</a>
            </div>
          </form>
        </div>

      </div>
      @endsection
