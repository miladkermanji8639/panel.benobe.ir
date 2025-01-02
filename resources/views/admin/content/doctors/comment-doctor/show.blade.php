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
                    <h1 class="m-n font-thin h3">مشاهده نظر</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=comment_doctor" class="btn btn-warning btngroup"><i class="fa fa-arrow-right px-2"></i> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ویرایش نظر</div>
	        <div class="panel-body">
	
            <form method="post" action="" id="editcomment">
            <input type="hidden" name="comm_id" value="314">
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>صفحه نمایش دیدگاه:</td>
                        <td><a href="https://benobe.ir/doctor/81463" class="osxbutton btn btn-secondary" target="_blank">نمایش صفحه</a></td>
                    </tr>
                    <tr>
                        <td>IP</td>
                        <td>83.121.20.239</td>
                    </tr>
                    <tr>
                        <td>تاریخ ارسال</td>
                        <td>1403/05/26 14:08</td>
                    </tr>
                    <tr>
                        <td>نام کاربر</td>
                        <td>محمد سامی اداک - 09197155125</td>
                    </tr>
                    <tr>
                        <td>دکتر / بیمارستان</td>
                        <td>دکتر ژیلا یوسفی</td>
                    </tr>
                   
                    <tr>
                        <td>نظر</td>
                        <td><textarea name="comment" class="form-control" style="height:150">خوب</textarea></td>
                    </tr>
                    <tr>
                        <td>وضعیت</td>
                        <td>
                            <select name="approve" class="form-control">
                            <option value="0">غیرفعال</option>
<option value="1" selected="">فعال</option>

                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" class="btn btn-success mt-3" value="ذخیره">
            </form>
            <div id="MSGCOMMENT" style="margin-top:10px;"></div>
            <script>
                $(document).ready(function () {
                    $('#editcomment').submit(function (e) {
                        e.preventDefault();
                        $.ajax({
                            url: '?mod=comment_doctor&action=editcomment&ajax=true',
                            data: $(this).serialize(),
                            type: 'POST',
                            success: function(result) {
                                $('#MSGCOMMENT').html(result);
                            }
                        });

                    });
                });
            </script>
        
		</div>
		
		</div>
	
		<div class="panel panel-primary">
	        <div class="panel-heading alert alert-primary">پاسخ</div>
	        <div class="panel-body">
	
            <form method="post" action="" id="repcomment">
                <input type="hidden" name="mod" value="comment_doctor">
                <input type="hidden" name="action" value="repcomment">
                <input type="hidden" name="comm_id" value="314">
                <div class="form-group mt-3">
                    <label class="control-label">پاسخ</label>
                    <textarea name="repcomment" class="form-control" style="height: 150px;"></textarea>
                </div>
                <input type="submit" class="btn btn-success mt-3" value="ثبت">
            </form>
        
		</div>
		
		</div>
	</div>	</div>
      @endsection
