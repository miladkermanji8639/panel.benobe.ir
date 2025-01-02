@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D9%88%DB%8C%D8%B1%D8%A7%DB%8C%D8%B4%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%AF%D9%87%DB%8C%20%20%20%26%2339%3B)%0D />

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
                    <h1 class="m-n font-thin h3">گالری تصاویر</h1>
                    <div class="text-muted margin-top-5">مدیریت گالری </div>
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=tariff" class="btn btn-warning btngroup"> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-primary">
	        <div class="panel-heading">تصاویر بیشتر</div>
	        <div class="panel-body">
	
            <form method="post" action="" enctype="multipart/form-data" id="uploadMoreImage">
                <input type="hidden" name="doctor_id" value="88501">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label>انتخاب تصویر بیشتر</label>
                            <input type="file" name="image" class="form-control" data-placeholder="انتخاب تصویر jpg, png" id="filestyle-0" tabindex="-1">
                        </div>
                        <button type="submit" class="button button-green"><i class="fa fa-upload"></i> ذخیره و بارگزاری فایل</button>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="hr_line"></div>
                        
                        <div id="gallery" class="clrfix ">
                            
                        </div>
                        
                    </div> 
                </div>
            </form>
        
		</div>
		
		</div>
	<script>
    
    
    $("#uploadMoreImage").submit(function (e) {
        waitMe_show('#uploadMoreImage', 'در حال آپلود فایل ...');
        $.ajax({
            url: "?mod=tariff&action=upload_more_image&ajax=1",
            type: "POST",
            datetype: "json",
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false,            
            success: function(res){
                console.log(res)
                waitMe_hide('#uploadMoreImage');
                if (res.status == 'yes'){
                    $("#gallery").append('<div class="imagegallery" id="moreimage_'+res.id+'">'+
                            '<a href="javascript:void(0)" onclick="remove_more_image('+res.id+')" class="removefile"><i class="fa fa-remove"></i></a>'+
                            '<div class="thumbnailgall">'+
                                '<div class="centered">'+
                                    '<img src="'+res.image+'">'+
                                '</div>'+
                            '</div>'+
                        '</div>');
                    $("#uploadMoreImage")[0].reset();
                    
                    
                    toast_success('آپلود انجام شد')
                }
                else {
                    toast_error(res.msg)
                }
            },
            error: function(e) 
            {
                waitMe_hide('#uploadMoreImage');
                toast_error('خطا در ارتباط با سرور')
            }          
        });
        
        e.preventDefault();
    });
    
    function remove_more_image(id){
        if (confirm('آیا از حذف تصویر مطمئن هستید؟')){
            waitMe_show('#moreimage_' +id);
            $.ajax({
                type: 'post',
                url: '?mod=tariff&action=remove_more_image&ajax=true',
                datetype: 'json',
                data: {id: id},
                success: function (res){                    
                    waitMe_hide('#moreimage_' +id);
                    if (res.status == "yes"){
                        $("#moreimage_" +id).remove()
                        toast_success('تصویر حذف شد')
                    }
                    else {
                        toast_error('خطا! حذف نشد')
                    }
                },
                error: function (error){
                    toast_error('ارتباط با سرور قطع شد')
                    waitMe_hide('#moreimage_' +id);
                }
            });
            
        }   
    }
    
    
</script>
</div>	</div>
        <!-- / Content -->

        <!-- Footer -->
        <!-- Footer-->

        <!--/ Footer-->
        <!-- / Footer -->
        <div class="content-backdrop fade"></div>
      </div>
      @endsection
