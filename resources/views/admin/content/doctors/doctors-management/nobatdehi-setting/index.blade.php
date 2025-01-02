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
     
    <link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap.min.css") }}" rel="stylesheet">
    <link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap-rtl.min.css") }}" rel="stylesheet">
    <link href="{{ asset("admin-assets/css/old-benobe-styles/app_admin.css?v=dddmue") }}" rel="stylesheet">
    

      @section('content')
      <div class="content-wrapper">

        <!-- Content -->
        <div class="flex-grow-1 container-p-y container-fluid">


          <h4 class="py-3 mb-4">
            <span class="text-muted fw-light"> ویرایش برنامه نوبت دهی /</span>
            ویرایش برنامه نوبت دهی
          </h4>


          <div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ویرایش برنامه نوبت دهی </div>
	        <div class="panel-body">
	
            <form method="post" action="">
            <input type="hidden" name="mod" value="tariff">
            <input type="hidden" name="action" value="save_nobatdehi">
            <input type="hidden" name="doctor_id" value="88501">
            <div class="row">
               
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="dayscedule  clrfix" id="schedule_div_Saturday">							
                    <label class="checkbox head"><input type="checkbox" name="days[Saturday][day]" onclick="checked_schedule_day('schedule_div_Saturday'); toggle_show('sobh_Saturday');" value="Saturday"> شنبه</label>							
                    <div class="keo">								
                        <div class="row" id="sobh_Saturday" style="display: none; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز شنبه</label>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Saturday][shift_sobh]" value="1">برنامه برای شیف صبح فعال باشد؟</label>                                                                    
                                </div>
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Saturday][shift_asr]" value="1">برنامه برای شیف عصر فعال باشد؟</label>                                
                                </div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text" name="days[Saturday][sobh_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" name="days[Saturday][sobh_end_time]" value="" class="input-timepicker timepicker_start"></div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text" name="days[Saturday][asr_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" class="input-timepicker timepicker_start" name="days[Saturday][asr_end_time]" value=""></div>
                            </div>
                            
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>پذیرش نوبت هر</label>
                                    <select class="form-control input-sm" name="days[Saturday][per_time]">
                                        <option value="1">۱ دقیقه</option><option value="2">۲ دقیقه</option><option value="3">۳ دقیقه</option><option value="4">۴ دقیقه</option><option value="5">۵ دقیقه</option><option value="6">۶ دقیقه</option><option value="7">۷ دقیقه</option><option value="8">۸ دقیقه</option><option value="9">۹ دقیقه</option><option value="10">۱۰ دقیقه</option><option value="12">۱۲ دقیقه</option><option value="15">۱۵ دقیقه</option><option value="20">۲۰ دقیقه</option><option value="30">۳۰ دقیقه</option><option value="45">۴۵ دقیقه</option><option value="60">یک ساعت</option><option value="90">یک ساعت و ۳۰ دقیقه</option><option value="120">دو ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="50" name="days[Saturday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                <div class="dayscedule  clrfix" id="schedule_div_Sunday">							
                    <label class="checkbox head"><input type="checkbox" name="days[Sunday][day]" onclick="checked_schedule_day('schedule_div_Sunday'); toggle_show('sobh_Sunday');" value="Sunday"> یکشنبه</label>							
                    <div class="keo">								
                        <div class="row" id="sobh_Sunday" style="display: none; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز یکشنبه</label>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Sunday][shift_sobh]" value="1">برنامه برای شیف صبح فعال باشد؟</label>                                                                    
                                </div>
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Sunday][shift_asr]" value="1">برنامه برای شیف عصر فعال باشد؟</label>                                
                                </div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text" name="days[Sunday][sobh_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" name="days[Sunday][sobh_end_time]" value="" class="input-timepicker timepicker_start"></div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text" name="days[Sunday][asr_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" class="input-timepicker timepicker_start" name="days[Sunday][asr_end_time]" value=""></div>
                            </div>
                            
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>پذیرش نوبت هر</label>
                                    <select class="form-control input-sm" name="days[Sunday][per_time]">
                                        <option value="1">۱ دقیقه</option><option value="2">۲ دقیقه</option><option value="3">۳ دقیقه</option><option value="4">۴ دقیقه</option><option value="5">۵ دقیقه</option><option value="6">۶ دقیقه</option><option value="7">۷ دقیقه</option><option value="8">۸ دقیقه</option><option value="9">۹ دقیقه</option><option value="10">۱۰ دقیقه</option><option value="12">۱۲ دقیقه</option><option value="15">۱۵ دقیقه</option><option value="20">۲۰ دقیقه</option><option value="30">۳۰ دقیقه</option><option value="45">۴۵ دقیقه</option><option value="60">یک ساعت</option><option value="90">یک ساعت و ۳۰ دقیقه</option><option value="120">دو ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="50" name="days[Sunday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                <div class="dayscedule  clrfix" id="schedule_div_Monday">							
                    <label class="checkbox head"><input type="checkbox" name="days[Monday][day]" onclick="checked_schedule_day('schedule_div_Monday'); toggle_show('sobh_Monday');" value="Monday"> دوشنبه</label>							
                    <div class="keo">								
                        <div class="row" id="sobh_Monday" style="display: none; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز دوشنبه</label>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Monday][shift_sobh]" value="1">برنامه برای شیف صبح فعال باشد؟</label>                                                                    
                                </div>
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Monday][shift_asr]" value="1">برنامه برای شیف عصر فعال باشد؟</label>                                
                                </div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text" name="days[Monday][sobh_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" name="days[Monday][sobh_end_time]" value="" class="input-timepicker timepicker_start"></div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text" name="days[Monday][asr_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" class="input-timepicker timepicker_start" name="days[Monday][asr_end_time]" value=""></div>
                            </div>
                            
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>پذیرش نوبت هر</label>
                                    <select class="form-control input-sm" name="days[Monday][per_time]">
                                        <option value="1">۱ دقیقه</option><option value="2">۲ دقیقه</option><option value="3">۳ دقیقه</option><option value="4">۴ دقیقه</option><option value="5">۵ دقیقه</option><option value="6">۶ دقیقه</option><option value="7">۷ دقیقه</option><option value="8">۸ دقیقه</option><option value="9">۹ دقیقه</option><option value="10">۱۰ دقیقه</option><option value="12">۱۲ دقیقه</option><option value="15">۱۵ دقیقه</option><option value="20">۲۰ دقیقه</option><option value="30">۳۰ دقیقه</option><option value="45">۴۵ دقیقه</option><option value="60">یک ساعت</option><option value="90">یک ساعت و ۳۰ دقیقه</option><option value="120">دو ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="50" name="days[Monday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                <div class="dayscedule  clrfix" id="schedule_div_Tuesday">							
                    <label class="checkbox head"><input type="checkbox" name="days[Tuesday][day]" onclick="checked_schedule_day('schedule_div_Tuesday'); toggle_show('sobh_Tuesday');" value="Tuesday"> سه شنبه</label>							
                    <div class="keo">								
                        <div class="row" id="sobh_Tuesday" style="display: none; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز سه شنبه</label>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Tuesday][shift_sobh]" value="1">برنامه برای شیف صبح فعال باشد؟</label>                                                                    
                                </div>
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Tuesday][shift_asr]" value="1">برنامه برای شیف عصر فعال باشد؟</label>                                
                                </div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text" name="days[Tuesday][sobh_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" name="days[Tuesday][sobh_end_time]" value="" class="input-timepicker timepicker_start"></div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text" name="days[Tuesday][asr_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" class="input-timepicker timepicker_start" name="days[Tuesday][asr_end_time]" value=""></div>
                            </div>
                            
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>پذیرش نوبت هر</label>
                                    <select class="form-control input-sm" name="days[Tuesday][per_time]">
                                        <option value="1">۱ دقیقه</option><option value="2">۲ دقیقه</option><option value="3">۳ دقیقه</option><option value="4">۴ دقیقه</option><option value="5">۵ دقیقه</option><option value="6">۶ دقیقه</option><option value="7">۷ دقیقه</option><option value="8">۸ دقیقه</option><option value="9">۹ دقیقه</option><option value="10">۱۰ دقیقه</option><option value="12">۱۲ دقیقه</option><option value="15">۱۵ دقیقه</option><option value="20">۲۰ دقیقه</option><option value="30">۳۰ دقیقه</option><option value="45">۴۵ دقیقه</option><option value="60">یک ساعت</option><option value="90">یک ساعت و ۳۰ دقیقه</option><option value="120">دو ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="50" name="days[Tuesday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                <div class="dayscedule  clrfix" id="schedule_div_Wednesday">							
                    <label class="checkbox head"><input type="checkbox" name="days[Wednesday][day]" onclick="checked_schedule_day('schedule_div_Wednesday'); toggle_show('sobh_Wednesday');" value="Wednesday"> چهارشنبه</label>							
                    <div class="keo">								
                        <div class="row" id="sobh_Wednesday" style="display: none; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز چهارشنبه</label>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Wednesday][shift_sobh]" value="1">برنامه برای شیف صبح فعال باشد؟</label>                                                                    
                                </div>
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Wednesday][shift_asr]" value="1">برنامه برای شیف عصر فعال باشد؟</label>                                
                                </div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text" name="days[Wednesday][sobh_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" name="days[Wednesday][sobh_end_time]" value="" class="input-timepicker timepicker_start"></div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text" name="days[Wednesday][asr_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" class="input-timepicker timepicker_start" name="days[Wednesday][asr_end_time]" value=""></div>
                            </div>
                            
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>پذیرش نوبت هر</label>
                                    <select class="form-control input-sm" name="days[Wednesday][per_time]">
                                        <option value="1">۱ دقیقه</option><option value="2">۲ دقیقه</option><option value="3">۳ دقیقه</option><option value="4">۴ دقیقه</option><option value="5">۵ دقیقه</option><option value="6">۶ دقیقه</option><option value="7">۷ دقیقه</option><option value="8">۸ دقیقه</option><option value="9">۹ دقیقه</option><option value="10">۱۰ دقیقه</option><option value="12">۱۲ دقیقه</option><option value="15">۱۵ دقیقه</option><option value="20">۲۰ دقیقه</option><option value="30">۳۰ دقیقه</option><option value="45">۴۵ دقیقه</option><option value="60">یک ساعت</option><option value="90">یک ساعت و ۳۰ دقیقه</option><option value="120">دو ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="50" name="days[Wednesday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                <div class="dayscedule  clrfix" id="schedule_div_Thursday">							
                    <label class="checkbox head"><input type="checkbox" name="days[Thursday][day]" onclick="checked_schedule_day('schedule_div_Thursday'); toggle_show('sobh_Thursday');" value="Thursday"> پنج شنبه</label>							
                    <div class="keo">								
                        <div class="row" id="sobh_Thursday" style="display: none; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز پنج شنبه</label>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Thursday][shift_sobh]" value="1">برنامه برای شیف صبح فعال باشد؟</label>                                                                    
                                </div>
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Thursday][shift_asr]" value="1">برنامه برای شیف عصر فعال باشد؟</label>                                
                                </div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text" name="days[Thursday][sobh_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" name="days[Thursday][sobh_end_time]" value="" class="input-timepicker timepicker_start"></div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text" name="days[Thursday][asr_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" class="input-timepicker timepicker_start" name="days[Thursday][asr_end_time]" value=""></div>
                            </div>
                            
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>پذیرش نوبت هر</label>
                                    <select class="form-control input-sm" name="days[Thursday][per_time]">
                                        <option value="1">۱ دقیقه</option><option value="2">۲ دقیقه</option><option value="3">۳ دقیقه</option><option value="4">۴ دقیقه</option><option value="5">۵ دقیقه</option><option value="6">۶ دقیقه</option><option value="7">۷ دقیقه</option><option value="8">۸ دقیقه</option><option value="9">۹ دقیقه</option><option value="10">۱۰ دقیقه</option><option value="12">۱۲ دقیقه</option><option value="15">۱۵ دقیقه</option><option value="20">۲۰ دقیقه</option><option value="30">۳۰ دقیقه</option><option value="45">۴۵ دقیقه</option><option value="60">یک ساعت</option><option value="90">یک ساعت و ۳۰ دقیقه</option><option value="120">دو ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="50" name="days[Thursday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                <div class="dayscedule  clrfix" id="schedule_div_Friday">							
                    <label class="checkbox head"><input type="checkbox" name="days[Friday][day]" onclick="checked_schedule_day('schedule_div_Friday'); toggle_show('sobh_Friday');" value="Friday"> جمعه</label>							
                    <div class="keo">								
                        <div class="row" id="sobh_Friday" style="display: none; background:#f7f7f7;">
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی نوبت دهی حضوری برای روز جمعه</label>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Friday][shift_sobh]" value="1">برنامه برای شیف صبح فعال باشد؟</label>                                                                    
                                </div>
                                <div class="form-group">
                                    <label class="checkbox rtl"><input type="checkbox" name="days[Friday][shift_asr]" value="1">برنامه برای شیف عصر فعال باشد؟</label>                                
                                </div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت صبح از:</span> <input type="text" name="days[Friday][sobh_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" name="days[Friday][sobh_end_time]" value="" class="input-timepicker timepicker_start"></div>
                            </div>
                            <div class="settingsc col-md-12">
                                <div class="timedivmon"><span class="mw">شیفت عصر از:</span> <input type="text" name="days[Friday][asr_start_time]" value="" class="input-timepicker timepicker_start"> <span class="pr">تا ساعت</span> <input type="text" class="input-timepicker timepicker_start" name="days[Friday][asr_end_time]" value=""></div>
                            </div>
                            
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>پذیرش نوبت هر</label>
                                    <select class="form-control input-sm" name="days[Friday][per_time]">
                                        <option value="1">۱ دقیقه</option><option value="2">۲ دقیقه</option><option value="3">۳ دقیقه</option><option value="4">۴ دقیقه</option><option value="5">۵ دقیقه</option><option value="6">۶ دقیقه</option><option value="7">۷ دقیقه</option><option value="8">۸ دقیقه</option><option value="9">۹ دقیقه</option><option value="10">۱۰ دقیقه</option><option value="12">۱۲ دقیقه</option><option value="15">۱۵ دقیقه</option><option value="20">۲۰ دقیقه</option><option value="30">۳۰ دقیقه</option><option value="45">۴۵ دقیقه</option><option value="60">یک ساعت</option><option value="90">یک ساعت و ۳۰ دقیقه</option><option value="120">دو ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="50" name="days[Friday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
            <div class="hr_line"></div>
            <div class="form-group"><button type="submit" class="btn btn-lg btn-success"><i class="fa fa-save"></i> ذخیره تغییرات </button> </div>
            </form>
        
		</div>
		
		</div>
	</div>


        </div>
        <!-- / Content -->

        <!-- Footer -->
        <!-- Footer-->

        <!--/ Footer-->
        <!-- / Footer -->
        <div class="content-backdrop fade"></div>
      </div>
      @endsection
