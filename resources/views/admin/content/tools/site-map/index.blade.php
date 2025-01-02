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
      <div class="app-content-body">

			<div class="bg-white-only lter b-b wrapper-md clrfix">
				
                <h1 class="m-n font-thin h3">نقشه سایت</h1>
                <div class="text-muted margin-top-5">مشاهده وضعیت نقشه سایت</div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">عملیات نقشه سایت</div>
	        <div class="panel-body">
	
<table class="table table-bordered table-striped">
    <tbody>
        <tr>
            <td width="200">آخرین بروزرسانی:</td>
            <td>جمعه 26 مرداد 1403 ساعت 08:26 قبل از ظهر</td>
        </tr>
        <tr>
            <td>تعداد لینک ثبت شده:</td>
            <td>792</td>
        </tr>
    </tbody>
</table>
<div class="mt-3">
    <a href="#" id="update_sitemap" class="btn btn-warning"><i class="fa fa-refresh px-1"></i> بروزرسانی نقشه سایت</a>
    <a href="https://benobe.ir/sitemap/sitemap.xml" target="_blank" class="btn btn-secondary"><i class="fa fa-file px-1"></i> مشاهده نقشه سایت</a>
</div>
    <script type="text/javascript">
    $(document).ready( function() {
        $("#update_sitemap").click(function(e) {
            e.preventDefault();
            $.get( "?mod=sitemap&action=update&ajax=true", function( data ) {
            alert("بروزرسانی نقشه سایت با موفقیت انجام شد.");
            location.reload();
            });
        });
    });
    </script>
		</div>
		
		</div>
	</div>	</div>
      <!-- / Content -->

      <!-- Footer -->
      <!-- Footer-->

      <!--/ Footer-->
      <!-- / Footer -->
      <div class="content-backdrop fade"></div>
      </div>
      @endsection
