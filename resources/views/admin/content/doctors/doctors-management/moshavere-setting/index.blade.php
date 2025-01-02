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
      <div class="content-wrapper">

        <!-- Content -->
        <div class="flex-grow-1 container-p-y container-fluid">


          <h4 class="py-3 mb-4">
            <span class="text-muted fw-light"> ویرایش برنامه مشاوره تلفنی /</span>
            ویرایش برنامه مشاوره تلفنی
          </h4>


          <div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ویرایش برنامه مشاوره تلفنی </div>
	        <div class="panel-body">
	
            <div class="alert alert-warning"><i class="fa fa-info-circle"></i> توجه! مبلغ هر دقیقه مکالمه در بسته های زیر پورسانت سایت میباشد
                1,000 تومان <br>
                <ul>
                    <li>به طور مثال ۱۰ دقیقه مکامله با نرخ ۵۰۰ تومان میشود پنج هزارتومان که از هر مشاوره شما کثر و دریافت میگردد</li>
                    <li>چنانچه از ۱۰ دقیقه مشاوره 6 دقیقه مکالمه انجام شود مبلغ پورسانت سایت بصورت کامل برداشت میشود</li>
                </ul>
            </div>
            <form method="post" action="">
            <input type="hidden" name="mod" value="tariff">
            <input type="hidden" name="action" value="save_moshavere">
            <input type="hidden" name="doctor_id" value="88501">

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">           
               <table class="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td width="240">تعرفه مشاوره آنلاین ۱۵ دقیقه ای:</td>
                            <td>
                                <div class="form-group">
                                    <div class="input-group" style="max-width: 360px">
                                        <input type="tel" value="0" class="form-control numberkey ltr text-center" name="call_15min">
                                        <span class="input-group-addon">تومان</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                       
                        <tr>
                            <td>تعرفه مشاوره آنلاین 30 دقیقه ای:</td>
                            <td>
                                <div class="form-group">
                                <div class="input-group" style="max-width: 360px">
                                    <input type="tel" value="0" class="form-control numberkey ltr text-center" name="call_30min">
                                    <span class="input-group-addon">تومان</span>
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>تعرفه مشاوره آنلاین 45 دقیقه ای:</td>
                            <td>
                                <div class="form-group">
                                <div class="input-group" style="max-width: 360px">
                                    <input type="tel" value="0" class="form-control numberkey ltr text-center" name="call_45min">
                                    <span class="input-group-addon">تومان</span>
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>تعرفه مشاوره آنلاین 60 دقیقه ای:</td>
                            <td>
                                <div class="form-group">
                                    <div class="input-group" style="max-width: 360px">
                                        <input type="tel" value="0" class="form-control numberkey ltr text-center" name="call_60min">
                                        <span class="input-group-addon">تومان</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
               
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="dayscedule  clrfix" id="schedule_div_Saturday">							
                    <label class="checkbox head"><input type="checkbox" name="days[Saturday][day]" onclick="checked_schedule_day('schedule_div_Saturday'); toggle_show('sobh_Saturday');" value="Saturday"> شنبه</label>							
                    <div class="keo">								
                        <div class="row" id="sobh_Saturday" style="display: none; background:#f7f7f7;">
                        
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی مشاوره برای روز شنبه</label>
                            
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
                                        <option value="30">30 دقیقه</option>
                                        <option value="45">45 دقیقه</option>
                                        <option value="60">1 ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="" name="days[Saturday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                        
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی مشاوره برای روز یکشنبه</label>
                            
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
                                        <option value="30">30 دقیقه</option>
                                        <option value="45">45 دقیقه</option>
                                        <option value="60">1 ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="" name="days[Sunday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                        
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی مشاوره برای روز دوشنبه</label>
                            
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
                                        <option value="30">30 دقیقه</option>
                                        <option value="45">45 دقیقه</option>
                                        <option value="60">1 ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="" name="days[Monday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                        
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی مشاوره برای روز سه شنبه</label>
                            
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
                                        <option value="30">30 دقیقه</option>
                                        <option value="45">45 دقیقه</option>
                                        <option value="60">1 ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="" name="days[Tuesday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                        
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی مشاوره برای روز چهارشنبه</label>
                            
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
                                        <option value="30">30 دقیقه</option>
                                        <option value="45">45 دقیقه</option>
                                        <option value="60">1 ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="" name="days[Wednesday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                        
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی مشاوره برای روز پنج شنبه</label>
                            
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
                                        <option value="30">30 دقیقه</option>
                                        <option value="45">45 دقیقه</option>
                                        <option value="60">1 ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="" name="days[Thursday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
                        
                            <label class="col-md-12 label-sch">تنظیم برنامه ریزی مشاوره برای روز جمعه</label>
                            
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
                                        <option value="30">30 دقیقه</option>
                                        <option value="45">45 دقیقه</option>
                                        <option value="60">1 ساعت</option>
                                    </select>
                                </div>
                            </div>										
                            <div class="settingsc col-md-6">
                                <div class="form-group">
                                    <label>حداکثر پذیرش در این روز</label>
                                    <input type="number" value="" name="days[Friday][capacity]" min="0" class="numberkey ltr text-center form-control input-sm">
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
