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

          <h1 class="m-n h3 font-thin">ویرایش نظر ها</h1>

        </div>
        <div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ویرایش نظر</div>
	        <div class="panel-body">
	
            <form method="post" action="" id="editcomment">
            <input type="hidden" name="comm_id" value="283">
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>مطلب:</td>
                        <td><a href="https://benobe.ir/index.php?mod=blog&amp;action=post&amp;postid=94" rel="nofollow" target="_blank">نوبت دهی دکتر لطف الله ساعد</a></td>
                    </tr>
                    <tr>
                        <td>IP</td>
                        <td>83.120.110.195</td>
                    </tr>
                    <tr>
                        <td>تاریخ ارسال</td>
                        <td>1403/05/20 09:19</td>
                    </tr>
                    <tr>
                        <td>نام</td>
                        <td>مولود یوسفی</td>
                    </tr>
                    <tr>
                        <td>ایمیل</td>
                        <td>fliyamolod osfi</td>
                    </tr>
                    <tr>
                        <td>نظر</td>
                        <td><textarea name="comment" class="form-control" style="height:150">نوبت می خواستم ‌‌ازکامیاران
وضع جسمانی تعریفی ندارد19</textarea></td>
                    </tr>
                    <tr>
                        <td>وضعیت</td>
                        <td>
                            <select name="approve" class="form-control">
                            <option value="0" selected="">غیرفعال</option>
<option value="1">فعال</option>

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
                            url: '?mod=comments&action=editcomment&ajax=true',
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
	
		<div class="panel panel-primary ">
	        <div class="panel-heading alert alert-primary">پاسخ</div>
	        <div class="panel-body">
	
            <form method="post" action="" id="repcomment">
                <input type="hidden" name="mod" value="comments">
                <input type="hidden" name="action" value="repcomment">
                <input type="hidden" name="comm_id" value="283">
                <input type="hidden" name="post_id" value="94">
                <div class="form-group mt-3">
                    <label class="control-label">پاسخ</label>
                    <textarea name="repcomment" class="form-control" style="height: 150px;"></textarea>
                </div>
                <input type="submit" class="btn btn-success mt-3" value="ثبت">
            </form>
        
		</div>
		
		</div>
	</div>

      </div>
      @endsection
