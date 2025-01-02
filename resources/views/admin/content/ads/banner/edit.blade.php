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
                    <h1 class="m-n font-thin h3">بنرها</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=banner" class="btn btn-warning btngroup"><i class="fa fa-arrow-right"></i> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ویرایش بنرها</div>
	        <div class="panel-body">
	
        <form method="post" action="" class="form-horizontal" autocomplete="off" enctype="multipart/form-data">
            <input type="hidden" name="mod" value="banner">
            <input type="hidden" name="action" value="editsave">
            <input type="hidden" name="id" value="2">
            <div class="form-group mt-3">
                <label class="control-label col-lg-2">عنوان بنر</label>
                <div class="col-lg-12"><input type="text" name="name" value="test" class="form-control" placeholder="عنوان بنر را وارد کنید"></div>
            </div>
            <div class="form-group mt-3">
                <label class="control-label col-lg-2">پیوند/ لینک</label>
                <div class="col-lg-12"><input type="text" name="url" class="form-control ltr text-left" value="benobe.ir" placeholder="http://"></div>
            </div>
            
            <div class="form-group mt-3">
                <label class="control-label col-lg-2">فایل بنر:</label>
                <div class="col-lg-12"><input type="file" name="file" class="filestyle" data-placeholder="انتخاب فایل | jpg,gif,png,swf" id="filestyle-0" tabindex="-1" style="position: absolute; clip: rect(0px, 0px, 0px, 0px);"><div class="bootstrap-filestyle input-group"><input type="text" class="form-control " placeholder="انتخاب فایل | jpg,gif,png,swf" disabled=""> <span class="group-span-filestyle input-group-btn" tabindex="0"><label for="filestyle-0" class="btn btn-default "><span class="icon-span-filestyle glyphicon glyphicon-folder-open icon-folder-open"></span> <span class="buttonText">Select File</span></label></span></div>
                <div class="help-block"><a href="https://benobe.ir/uploads/banner/1673016814_download.jpg" data-title="" class="open-image"><i class="fa fa-picture-o"></i> مشاهده فایل</a> </div>
                </div>
            </div>
            <div class="form-group mt-3">
                <label class="control-label col-lg-2">ساختار فایل:</label>
                <div class="col-lg-12">
                    <select class="form-control" name="type">
                        <option value="image" selected="">تصویر | jpg,gif,png</option>
<option value="click">کلیکی</option>

                    </select>
                </div>
            </div>
            
            <div class="form-group mt-3">
                <label class="control-label col-lg-2">جایگاه:</label>
                <div class="col-lg-12">
                    <select class="form-control" name="position">
                        <option value="a" selected="">جایگاه A</option>
<option value="b">جایگاه B</option>
<option value="c">جایگاه C</option>
<option value="d">جایگاه D</option>
                        
                    </select>
                </div>
            </div>
            <div class="form-group mt-3" id="descrads">
                <label class="control-label col-lg-2">کد :</label>
                <div class="col-lg-12">
                    <textarea name="code" class="form-control" style="height: 200px; direction: ltr;"></textarea>
                </div>
            </div>
            
            <div class="form-group mt-3">
                <label class="control-label col-lg-2">تاریخ انقضاء</label>
                <div class="col-lg-12"><input type="text" name="expire" autocomplete="off" value="1400-12-29" class="form-control defauleDatePicker hasDatepicker" placeholder="انتخاب تاریخ" id="dp1723963259913"></div>
            </div>

          
            <div class="col-lg-offset-2"><button type="submit" class="btn btn-success mt-3">ذخیره تغییرات</button></div>
        </form>
    
		</div>
		
		</div>
	</div>	</div>
      @endsection
