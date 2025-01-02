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

          <h1 class="m-n h3 font-thin">افزودن صفحات
          </h1>

        </div>

        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">اطلاعات دیتابیس</div>
            <div class="panel-body">

              <div class="table-responsive">
                <table class="table table-bordered table-striped">
                  <tbody>
                    <tr>
                      <td width="200">تاریخ</td>
                      <td>1403/05/23 09:59</td>
                    </tr>
                    <tr>
                      <td>دسته بندی</td>
                      <td>
                        <form method="post"
                              action=""
                              id="saveCatquestion">
                          <input type="hidden"
                                 name="id"
                                 value="59">
                          <div class="input-group"
                               style="width: 300px">
                            <select name="cat"
                                    style="padding: 6px; height: 32px"
                                    class="form-control input-sm">
                              <option value="0">-- همه</option>
                              <option value="105">روماتولوژی (مفاصل و عضلات)</option>
                              <option value="104">خون</option>
                              <option value="103">پزشکی فیزیکی و طب کار</option>
                              <option value="102">گفتار درمانی</option>
                              <option value="101">سنوگرافی و رادیولوژی</option>
                              <option value="100">فیزیوتراپی</option>
                              <option value="99">بیهوشی و درد</option>
                              <option value="98">طب سنتی</option>
                              <option value="97">غدد</option>
                              <option value="96">چشم پزشکی</option>
                              <option value="95"
                                      selected="">گوش و حلق و بینی</option>
                              <option value="94">جراحی عمومی و پلاستیک</option>
                              <option value="93">کلیه و مجاری ادراری</option>
                              <option value="92">زنان و زایمان</option>
                              <option value="91">کودکان و نوزادان</option>
                              <option value="90">مغز و اعصاب</option>
                              <option value="89">ارتوپدی</option>
                              <option value="88">پوست و مو و زیبایی</option>
                              <option value="87">داخلی و گوارش</option>
                              <option value="86">قلب و عروق</option>
                              <option value="85">کرونا</option>
                              <option value="84">دندانپزشکی</option>
                              <option value="83">اعصاب و روان (روانپزشکی)</option>
                              <option value="82">سوالات پزشکی </option>
                              <option value="81">مسائل بهداشتی</option>
                              <option value="80">تربیت و روانشناسی</option>
                              <option value="79">بیماری</option>
                              <option value="78">تغذیه و رژیم درمانی</option>
                              <option value="77">خواب</option>
                              <option value="76">دهان و دندان</option>
                              <option value="75">رشد</option>
                              <option value="74">رفتار</option>
                              <option value="73">واکسیناسیون</option>
                            </select>
                            <span class="input-group-btn"><button type="submit"
                                      class="btn btn-primary btn-sm">ذخیره</button></span>
                          </div>
                        </form>
                      </td>
                    </tr>


                    <tr>
                      <td>Url - نشانی </td>
                      <td>
                        <form method="post"
                              action=""
                              id="saveAltname">
                          <input type="hidden"
                                 name="id"
                                 value="59">
                          <div class="input-group"
                               style="width: 500px">
                            <input type="text"
                                   class="form-control"
                                   name="alt_name"
                                   value="">
                            <span class="input-group-btn"><button type="submit"
                                      class="btn btn-primary btn-md">ذخیره</button></span>
                          </div>
                        </form>
                      </td>
                    </tr>
                    <tr>
                      <td>مبلغ پرداخت شده</td>
                      <td>0 تومان</td>
                    </tr>
                    <tr>
                      <td>پرسش کننده</td>
                      <td>طاهره دانائی فرد - 09371431214</td>
                    </tr>
                    <tr>
                      <td>پاسخ دهنده</td>
                      <td>ندارد</td>
                    </tr>
                    <tr>
                      <td>وضعیت</td>
                      <td><label class="label label-danger text-danger">منتشر نشده</label></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <script type="text/javascript">
                $(document).ready(function () {
                  $("#saveCatquestion").submit(function (e) {
                    waitMe_show('body')
                    $.ajax({
                      type: "POST",
                      url: "?mod=question&action=change_question_category&ajax=true",
                      data: $(this).serialize(), // serializes the form's elements.
                      beforesend: function (xhr) {

                      },
                      success: function (data) {
                        // console.log(data);
                        waitMe_hide('body')
                        alert(data);
                      },
                      error: function (xhr) {
                        toast_error('خطا در ارتباط با سرور')
                        waitMe_hide('body')
                      }
                    });
                    e.preventDefault();
                  });

                  $("#saveAltname").submit(function (e) {
                    waitMe_show('body')
                    $.ajax({
                      type: "POST",
                      url: "?mod=question&action=save_altname&ajax=true",
                      data: $(this).serialize(), // serializes the form's elements.
                      beforesend: function (xhr) {},
                      success: function (data) {
                        // console.log(data);
                        waitMe_hide('body')
                        if (alert(data) !== false) {
                          location.reload()
                        }


                      },
                      error: function (xhr) {
                        toast_error('خطا در ارتباط با سرور')
                        waitMe_hide('body')
                      }
                    });
                    e.preventDefault();
                  });
                });

              </script>


            </div>

          </div>

          <div class="panel panel-primary mt-3">
            <div class="panel-heading">پرسش</div>
            <div class="panel-body">
              <div>
                <form method="post"
                      action="">
                  <input type="hidden"
                         name="mod"
                         value="question">
                  <input type="hidden"
                         name="action"
                         value="editquestion_save">
                  <input type="hidden"
                         name="id"
                         value="59">
                  <div class="form-group mt-3">
                    <textarea name="question"
                              class="form-control"
                              style="height: 300px !important;"> سلام وقت بخیر 38 سالمه و منییر گوش دارم درصد کمی شنوایی از دست دادم به صداهای بلند حالم بد میشه گوشم درد میگیره سرگیجه میگیرم فشار از پشت گوش تا پشت سر بعضی  وقت ها تا مرکز سر درد میگیره و خیلی گیج میشم همه اش خواب میرم برای سرگیجه قرص خوردم فایده نداشت بهتر نشدم بدترشدم لطفا راهنمایی فرمایید</textarea>
                  </div>
                  <div class="form-group mt-3">
                    <label>وضعیت اننتشار:</label>
                    <select name="approve" class="form-control">
                      <option value="0"
                              selected="">خیر</option>
                      <option value="1">بلی</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <input type="submit"
                           class="btn btn-success mt-3"
                           value="ذخیره">
                  </div>
                </form>
              </div>
            </div>

          </div>

          <div class="panel panel-primary">
            <div class="panel-heading">پاسخ</div>
            <div class="panel-body">

              <form method="post"
                    action=""
                    id="savereply">
                <input type="hidden"
                       name="id"
                       id="repid"
                       value="59">
                <div class="form-group mt-3">
                <label>پاسخ:</label>
                <script type="text/javascript" src="https://benobe.ir/theme/common/tinymce/tinymce.min.js?v=2"></script>
<script type="text/javascript">
tinymce.init({

	selector: '.tinymce_editor',
	element_format : 'html',
	height: 300,
	language: "en",
	directionality: 'rtl',
	plugins: ["fullscreen advlist autolink lists aparat link image charmap anchor searchreplace visualblocks visualchars media nonbreaking table contextmenu emoticons paste textcolor colorpicker codemirror spellchecker dlebutton codesample hr"],
	relative_urls : false,
	convert_urls : false,
	remove_script_host : false,
	toolbar_items_size: 'small',
	verify_html: false,
	branding: false,
	menubar: false,
	image_advtab: true,
	image_dimensions: false,
	image_caption: true,
	
	// toolbar1: "formatselect fontselect fontsizeselect | link anchor dleleech unlink | dleupload insertImage dleemo dlemp dletube dlaudio | dlehide dlequote dlespoiler codesample hr visualblocks dlebreak dlepage code",
	// toolbar2: "undo redo | copy paste pastetext | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | subscript superscript | table bullist numlist | forecolor backcolor | dletypo removeformat searchreplace fullscreen",
	// toolbar1: "formatselect fontselect fontsizeselect | link unlink | aparat_shortcode | dleupload image dleemo | dletube dlaudio dlemp dleimage | dlespoiler dlebreak codesample hr visualblocks code",
	toolbar1: "formatselect fontselect fontsizeselect | link unlink | undo redo | copy paste pastetext | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | aparat | dleupload dleimage dlemp | dletube dlaudio dleemo | dlespoiler dlebreak codesample hr visualblocks code",
	toolbar2: "subscript superscript | table bullist numlist | forecolor backcolor | dletypo removeformat searchreplace fullscreen",
	formats: {
	  bold: {inline: 'b'},  
	  italic: {inline: 'i'},
	  underline: {inline: 'u', exact : true},  
	  strikethrough: {inline: 's', exact : true}
	},
	codesample_languages: [ {text: 'HTML/JS/CSS', value: 'markup'}],			
	toolbar: 'insertfile undo redo | bold italic | ltr rtl | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image forecolor backcolor | codesample ',
	dle_root : "https://benobe.ir/",
	dle_upload_area : "reply",
	dle_upload_user : "09182718639",
	dle_upload_news : "59",
	dle_upload_mod : "question",
	// content_css : "https://benobe.ir/}theme/common/tinymce/content.css"
	content_css: "https://benobe.ir/theme/common/tinymce/skins/lightgray/codepen.css"
	
	
	
});
</script>
<div id="mceu_42" class="mce-tinymce mce-container mce-panel" hidefocus="1" tabindex="-1" role="application" style="visibility: hidden; border-width: 1px; width: 100%;"><div id="mceu_42-body" class="mce-container-body mce-stack-layout"><div id="mceu_43" class="mce-top-part mce-container mce-stack-layout-item mce-first"><div id="mceu_43-body" class="mce-container-body"><div id="mceu_44" class="mce-toolbar-grp mce-container mce-panel mce-first mce-last" hidefocus="1" tabindex="-1" role="group"><div id="mceu_44-body" class="mce-container-body mce-stack-layout"><div id="mceu_45" class="mce-container mce-toolbar mce-stack-layout-item mce-first" role="toolbar"><div id="mceu_45-body" class="mce-container-body mce-flow-layout"><div id="mceu_46" class="mce-container mce-flow-layout-item mce-first mce-btn-group" role="group"><div id="mceu_46-body"><div id="mceu_0" class="mce-widget mce-btn mce-btn-small mce-menubtn mce-fixed-width mce-listbox mce-first mce-btn-has-text" tabindex="-1" aria-labelledby="mceu_0" role="button" aria-haspopup="true"><button id="mceu_0-open" role="presentation" type="button" tabindex="-1"><span class="mce-txt">Paragraph</span> <i class="mce-caret"></i></button></div><div id="mceu_1" class="mce-widget mce-btn mce-btn-small mce-menubtn mce-fixed-width mce-listbox mce-btn-has-text" tabindex="-1" aria-labelledby="mceu_1" role="button" aria-label="Font Family" aria-haspopup="true"><button id="mceu_1-open" role="presentation" type="button" tabindex="-1"><span class="mce-txt">Tahoma</span> <i class="mce-caret"></i></button></div><div id="mceu_2" class="mce-widget mce-btn mce-btn-small mce-menubtn mce-fixed-width mce-listbox mce-last mce-btn-has-text" tabindex="-1" aria-labelledby="mceu_2" role="button" aria-label="Font Sizes" aria-haspopup="true"><button id="mceu_2-open" role="presentation" type="button" tabindex="-1"><span class="mce-txt">11pt</span> <i class="mce-caret"></i></button></div></div></div><div id="mceu_47" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_47-body"><div id="mceu_3" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" aria-pressed="false" role="button" aria-label="Insert/edit link"><button id="mceu_3-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-link"></i></button></div><div id="mceu_4" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Remove link"><button id="mceu_4-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-unlink"></i></button></div></div></div><div id="mceu_48" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_48-body"><div id="mceu_5" class="mce-widget mce-btn mce-btn-small mce-first mce-disabled" tabindex="-1" role="button" aria-label="Undo" aria-disabled="true"><button id="mceu_5-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-undo"></i></button></div><div id="mceu_6" class="mce-widget mce-btn mce-btn-small mce-last mce-disabled" tabindex="-1" role="button" aria-label="Redo" aria-disabled="true"><button id="mceu_6-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-redo"></i></button></div></div></div><div id="mceu_49" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_49-body"><div id="mceu_7" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" role="button" aria-label="Copy"><button id="mceu_7-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-copy"></i></button></div><div id="mceu_8" class="mce-widget mce-btn mce-btn-small" tabindex="-1" role="button" aria-label="Paste"><button id="mceu_8-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-paste"></i></button></div><div id="mceu_9" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Paste as text"><button id="mceu_9-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-pastetext"></i></button></div></div></div><div id="mceu_50" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_50-body"><div id="mceu_10" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" aria-pressed="false" role="button" aria-label="Bold"><button id="mceu_10-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-bold"></i></button></div><div id="mceu_11" class="mce-widget mce-btn mce-btn-small" tabindex="-1" aria-pressed="false" role="button" aria-label="Italic"><button id="mceu_11-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-italic"></i></button></div><div id="mceu_12" class="mce-widget mce-btn mce-btn-small" tabindex="-1" aria-pressed="false" role="button" aria-label="Underline"><button id="mceu_12-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-underline"></i></button></div><div id="mceu_13" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Strikethrough"><button id="mceu_13-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-strikethrough"></i></button></div></div></div><div id="mceu_51" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_51-body"><div id="mceu_14" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" aria-pressed="false" role="button" aria-label="Align left"><button id="mceu_14-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-alignleft"></i></button></div><div id="mceu_15" class="mce-widget mce-btn mce-btn-small" tabindex="-1" aria-pressed="false" role="button" aria-label="Align center"><button id="mceu_15-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-aligncenter"></i></button></div><div id="mceu_16" class="mce-widget mce-btn mce-btn-small" tabindex="-1" aria-pressed="false" role="button" aria-label="Align right"><button id="mceu_16-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-alignright"></i></button></div><div id="mceu_17" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Justify"><button id="mceu_17-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-alignjustify"></i></button></div></div></div><div id="mceu_52" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_52-body"><div id="mceu_18" class="mce-widget mce-btn mce-btn-small mce-first mce-last" tabindex="-1" role="button" aria-label="پخش از آپارات"><button id="mceu_18-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-aparat"></i></button></div></div></div><div id="mceu_53" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_53-body"><div id="mceu_19" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" role="button" aria-label="Uploading files"><button id="mceu_19-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-dleicon icon-up"></i></button></div><div id="mceu_20" class="mce-widget mce-btn mce-btn-small" tabindex="-1" role="button" aria-label="Insert image"><button id="mceu_20-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-image"></i></button></div><div id="mceu_21" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" role="button" aria-label="Insert video (BB Codes)"><button id="mceu_21-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-dleicon icon-video"></i></button></div></div></div><div id="mceu_54" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_54-body"><div id="mceu_22" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" role="button" aria-label="Play video from youtube (Youtube)"><button id="mceu_22-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-dleicon icon-yt"></i></button></div><div id="mceu_23" class="mce-widget mce-btn mce-btn-small" tabindex="-1" role="button" aria-label="Insert audio (BB Codes)"><button id="mceu_23-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-dleicon icon-audio"></i></button></div><div id="mceu_24" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" role="button" aria-label="Add emoticons"><button id="mceu_24-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-emoticons"></i></button></div></div></div><div id="mceu_55" class="mce-container mce-flow-layout-item mce-last mce-btn-group" role="group"><div id="mceu_55-body"><div id="mceu_25" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" role="button" aria-label="Insert spoiler"><button id="mceu_25-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-dleicon icon-spoiler"></i></button></div><div id="mceu_26" class="mce-widget mce-btn mce-btn-small" tabindex="-1" role="button" aria-label="Insert page breaks"><button id="mceu_26-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-dleicon icon-br"></i></button></div><div id="mceu_27" class="mce-widget mce-btn mce-btn-small" tabindex="-1" role="button" aria-label="Insert/Edit code sample"><button id="mceu_27-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-codesample"></i></button></div><div id="mceu_28" class="mce-widget mce-btn mce-btn-small" tabindex="-1" role="button" aria-label="Horizontal line"><button id="mceu_28-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-hr"></i></button></div><div id="mceu_29" class="mce-widget mce-btn mce-btn-small" tabindex="-1" aria-pressed="false" role="button" aria-label="Show blocks"><button id="mceu_29-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-visualblocks"></i></button></div><div id="mceu_30" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" role="button" aria-label="Source code"><button id="mceu_30-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-code"></i></button></div></div></div></div></div><div id="mceu_56" class="mce-container mce-toolbar mce-stack-layout-item mce-last" role="toolbar"><div id="mceu_56-body" class="mce-container-body mce-flow-layout"><div id="mceu_57" class="mce-container mce-flow-layout-item mce-first mce-btn-group" role="group"><div id="mceu_57-body"><div id="mceu_31" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" aria-pressed="false" role="button" aria-label="Subscript"><button id="mceu_31-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-subscript"></i></button></div><div id="mceu_32" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Superscript"><button id="mceu_32-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-superscript"></i></button></div></div></div><div id="mceu_58" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_58-body"><div id="mceu_33" class="mce-widget mce-btn mce-btn-small mce-menubtn mce-first" tabindex="-1" aria-labelledby="mceu_33" role="button" aria-label="Table" aria-haspopup="true"><button id="mceu_33-open" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-table"></i> <i class="mce-caret"></i></button></div><div id="mceu_34" class="mce-widget mce-btn mce-splitbtn mce-btn-small mce-menubtn" role="button" aria-pressed="false" tabindex="-1" aria-label="Bullet list" aria-haspopup="true"><button type="button" hidefocus="1" tabindex="-1"><i class="mce-ico mce-i-bullist"></i></button><button type="button" class="mce-open" hidefocus="1" tabindex="-1"> <i class="mce-caret"></i></button></div><div id="mceu_35" class="mce-widget mce-btn mce-splitbtn mce-btn-small mce-menubtn mce-last" role="button" aria-pressed="false" tabindex="-1" aria-label="Numbered list" aria-haspopup="true"><button type="button" hidefocus="1" tabindex="-1"><i class="mce-ico mce-i-numlist"></i></button><button type="button" class="mce-open" hidefocus="1" tabindex="-1"> <i class="mce-caret"></i></button></div></div></div><div id="mceu_59" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_59-body"><div id="mceu_36" class="mce-widget mce-btn mce-btn-small mce-splitbtn mce-colorbutton mce-first" role="button" tabindex="-1" aria-haspopup="true" aria-label="Text color"><button role="presentation" hidefocus="1" type="button" tabindex="-1"><i class="mce-ico mce-i-forecolor"></i><span id="mceu_36-preview" class="mce-preview"></span></button><button type="button" class="mce-open" hidefocus="1" tabindex="-1"> <i class="mce-caret"></i></button></div><div id="mceu_37" class="mce-widget mce-btn mce-btn-small mce-splitbtn mce-colorbutton mce-last" role="button" tabindex="-1" aria-haspopup="true" aria-label="Background color"><button role="presentation" hidefocus="1" type="button" tabindex="-1"><i class="mce-ico mce-i-backcolor"></i><span id="mceu_37-preview" class="mce-preview"></span></button><button type="button" class="mce-open" hidefocus="1" tabindex="-1"> <i class="mce-caret"></i></button></div></div></div><div id="mceu_60" class="mce-container mce-flow-layout-item mce-last mce-btn-group" role="group"><div id="mceu_60-body"><div id="mceu_38" class="mce-widget mce-btn mce-btn-small mce-first" tabindex="-1" role="button" aria-label="Typographical Word Processing"><button id="mceu_38-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-dleicon icon-typo"></i></button></div><div id="mceu_39" class="mce-widget mce-btn mce-btn-small" tabindex="-1" role="button" aria-label="Clear formatting"><button id="mceu_39-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-removeformat"></i></button></div><div id="mceu_40" class="mce-widget mce-btn mce-btn-small" tabindex="-1" role="button" aria-label="Find and replace"><button id="mceu_40-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-searchreplace"></i></button></div><div id="mceu_41" class="mce-widget mce-btn mce-btn-small mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Fullscreen"><button id="mceu_41-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-fullscreen"></i></button></div></div></div></div></div></div></div></div></div><div id="mceu_61" class="mce-edit-area mce-container mce-panel mce-stack-layout-item" hidefocus="1" tabindex="-1" role="group" style="border-width: 1px 0px 0px;"><iframe id="reply_ifr" frameborder="0" allowtransparency="true" title="Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help" style="width: 100%; height: 300px; display: block;"></iframe></div><div id="mceu_62" class="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last" hidefocus="1" tabindex="-1" role="group" style="border-width: 1px 0px 0px;"><div id="mceu_62-body" class="mce-container-body mce-flow-layout"><div id="mceu_63" class="mce-path mce-flow-layout-item mce-first"><div class="mce-path-item">&nbsp;</div></div><div id="mceu_64" class="mce-flow-layout-item mce-last mce-resizehandle"><i class="mce-ico mce-i-resize"></i></div></div></div></div></div><textarea id="reply" name="reply" class="tinymce_editor" aria-hidden="true" style="display: none;"></textarea>
            </div>
                <div class="form-group mt-3">
                  <button type="submit"
                          class="btn btn-success"><i class="fa fa-save px-1"></i> ذخیره</button>

                  <script type="text/javascript">
                    $(document).ready(function () {
                      $("#savereply").submit(function (e) {
                        e.preventDefault();
                        waitMe_show('body');
                        var ed = tinyMCE.get('reply');
                        var datatext = ed.getContent();
                        var repid = $('#repid').val();
                        $.ajax({
                          type: "POST",
                          url: "?mod=question&action=save_reply&ajax=true",
                          data: {
                            id: repid,
                            reply: datatext
                          },
                          cache: false,
                          datatype: 'json',
                          success: function (data) {
                            console.log(data)
                            //location.reload()                                
                            waitMe_hide('body')
                            toast_success('پاسخ ذخیره شد')
                          },
                          error: function (err) {
                            console.log(err)
                            toast_error('خطا در ارتباط با سرور')
                            waitMe_hide('body')
                          }
                        });

                      });
                    });

                  </script>

                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
      @endsection
