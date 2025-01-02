@extends('admin.content.layouts/layoutMaster')

@section('title', 'مدیریت اسلایدرها')

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

          <h1 class="m-n font-thin h3">اسلایدر ها</h1>


        </div>
        <div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">افزودن اسلاید جدید</div>
	        <div class="panel-body">
	
<form method="post" action="" enctype="multipart/form-data" data-toggle="validator" role="form" novalidate="true">
<input type="hidden" name="mod" value="slide">
<input type="hidden" name="action" value="added">

	<div class="form-group mt-3">
		<label>عنوان اسلاید (Farsi)</label>
		<input type="text" name="title" class="form-control">
	</div>
	
	<div class="form-group mt-3">
		<label>تصویر</label>
		<input type="file" name="image" class="filestyle" data-placeholder="تصویر اسلاید | jpg,png" accept="image/*" id="filestyle-0" tabindex="-1" style="position: absolute; clip: rect(0px, 0px, 0px, 0px);"><div class="bootstrap-filestyle input-group"><input type="text" class="form-control " placeholder="تصویر اسلاید | jpg,png" disabled=""> <span class="group-span-filestyle input-group-btn" tabindex="0"><label for="filestyle-0" class="btn btn-default "><span class="icon-span-filestyle glyphicon glyphicon-folder-open icon-folder-open"></span> <span class="buttonText">Select File</span></label></span></div>
	</div>
	
	<div class="form-group mt-3">
		<label>لینک نمایش</label>
		<input type="text" name="link" value="" class="form-control">
	</div>

	<!--<div class='form-group mt-3'>
		<label>لینک نمایش</label>
		<input type='text' name='link' class='form-control' required>
	</div>-->

	<div class="form-group mt-3">
		<label>توضیح (Farsi)</label>
		<textarea name="descr" class="form-control" style="height: 155px;"></textarea>
	</div>
	

		<div class="form-group mt-3">
		<label class="control-label ">قابل نمایش در:</label>
		<div class="">
		<select name="display" class="form-control ">
	<option value="site">وب سایت</option>
<option value="mobile">موبایل</option>

		</select>
		
		</div>
		</div>
	
		<div class="form-group mt-3">
		<label class="control-label ">وضعیت:</label>
		<div class="">
		<select name="approve" class="form-control ">
	<option value="1" selected="">فعال</option>
<option value="0">غیرفعال</option>

		</select>
		
		</div>
		</div>
	
	<input type="submit" class="btn btn-success mt-3" value="افزودن">
</form>

		</div>
		
		</div>
	</div>
        
      </div>
      @endsection
