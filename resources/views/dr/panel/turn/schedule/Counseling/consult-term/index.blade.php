@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/counseling/consult-term/consult-term.css') }}"
  rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 @section('bread-crumb-title','قوانین و مقررات')

 <div class="consult-term-content mt-4 w-100 d-flex justify-content-center">
  <div class="consult-term-content-wrapper px-2 py-3">
   <div class="container">
    <div class="">
     <div class="">
      <div class="">
       <div>
        <div class="top-logo w-100 d-flex justify-content-center">
         <img src="{{ asset('app-assets/logos/benobe.svg') }}" width="120px" alt="benobe-logo">
        </div>
       </div>
       <section class="mt-4" itemscope="itemscope" itemtype="">

        <div class="avia_textblock" itemprop="text">
         <p><span class="font-weight-bold">ایجاد تجربه‌ی درمانی بی‌نقص و رضایت‌بخش برای بیماران، یکی از مهم‌ترین اهداف به نوبه
           است. در این راستا، قوانین و مقرراتی تدوین شده است که رعایت آن‌ها برای همکاری پزشکان و بیماران با به نوبه الزامی
           است.</span></p>
         <p><b class="text-dark font-weight-bolder font-size-20">قوانین مربوط به پزشکان</b></p>
         <p><strong class="font-weight-bold text-dark">۱.&nbsp; آغاز ویزیت در زمان مقرر :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;ویزیت آنلاین باید در زمان تعیین‌شده آغاز شود. پاسخ‌دهی به‌موقع به
           بیماران برای برآورده کردن انتظارات آنان از اهمیت بالایی برخوردار است.</span></p>
         <p><strong class="font-weight-bold text-dark">۲.&nbsp; مدت‌زمان و پیوستگی ویزیت :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;ویزیت آنلاین باید در مدت‌زمان اعلام‌شده توسط پزشک و به‌صورت جامع و
           پیوسته انجام شود. همچنین، پزشکان می‌بایست تا ۳ روز پس از ویزیت، برای پاسخگویی به سوالات احتمالی بیمار در دسترس
           باشند.</span></p>
         <p><strong class="font-weight-bold text-dark">۳.&nbsp; ارتباط بیمار پس از ویزیت :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;بیماران می‌توانند تا ۳ روز پس از ویزیت برای ارسال مستندات، آزمایشات و
           سوالات دارویی با پزشک ارتباط برقرار کنند.</span></p>
         <p><strong class="font-weight-bold text-dark">۴.&nbsp; پاسخگویی به بیماران :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;در صورتی که پزشک به مدت ۳ روز متوالی پاسخگوی هیچ‌ یک از بیماران ویزیت
           آنلاین و پشتیبانی نباشد، به دلیل عدم اطلاع از وضعیت پزشک، نوبت‌دهی به بیماران متوقف خواهد شد.</span></p>
         <p><strong class="font-weight-bold text-dark">۵.&nbsp; لغو نوبت بیمار به درخواست او :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;اگر بیماری درخواست لغو نوبت داشته باشد و با پشتیبانی ارتباط بگیرد و
           دلیل منطقی برای این درخواست ارائه دهد، پشتیبانی دو مرتبه با پزشک در ساعات کاریِ پزشک جهت بررسی درخواست بیمار تماس خواهد
           گرفت. در صورتی که پزشک پاسخگو نباشد، نوبت بیمار لغو خواهد شد.</span></p>
         <p><strong class="font-weight-bold text-dark">۶. دریافت هزینه ویزیت :</strong></p>
         <p><span style="font-weight: 400;">پزشکان باید از دریافت هرگونه حق ویزیت اضافه یا خارج از پروسه‌ی دریافت نوبت به نوبه و
           همچنین ارائه شماره کارت به بیمار، جداٌ خودداری نمایند و در صورت رخداد تذکر لازم به پزشک ارائه خواهد شد و در صورت تکرار
           امتیاز منفی برای پزشک درج خواهد شد که در رتبه بندی پزشک در نتایج</span><span style="font-weight: 400;"> جستجوی
           پزشکان</span><span style="font-weight: 400;"> تاثیر خواهد داشت.</span></p>
         <p><strong class="font-weight-bold text-dark">۷.&nbsp; شروع ویزیت در پنل :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;هنگام شروع ویزیت، پزشکان باید دکمه “پذیرش” را در پنل خود فعال کنند.
           در غیر این صورت، بیمار حق لغو و استرداد هزینه را خواهد داشت.</span></p>
         <p><strong class="font-weight-bold text-dark">۸.&nbsp; ارسال توضیحات درمان و نسخه الکترونیک :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;توضیحات درمانی و نسخه الکترونیک باید حداکثر ۳۰ دقیقه پس از زمان نوبت
           برای بیمار ارسال شود. هزینه ویزیت پس از اعلام مراجعه و ارسال توضیحات درمانی و نسخه، محاسبه می‌شود.</span></p>
         <p><strong class="font-weight-bold text-dark">۹.&nbsp; حفظ حریم خصوصی بیمار :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;پزشکان باید حریم خصوصی بیماران و اطلاعات شخصی آن‌ها را محترم
           شمارند. هیچ پزشکی نباید از اطلاعات شخصی بیمار، که در جریان ویزیت آنلاین به دست آورده است، برای تهدید یا فشار به بیمار
           استفاده کند و و در صورت رخداد، برای پزشک امتیاز منفی درج خواهد شد که در رتبه بندی پزشک در نتایج جستجوی پزشکان تاثیر
           خواهد داشت و در صورت تکرار نوبت دهی پزشک معلق خواهد شد.</span></p>
         <p><strong class="font-weight-bold text-dark">۱۰.&nbsp; رعایت احترام و عدم قضاوت در حوزه‌ای غیر از درمان در ویزیت آنلاین
           :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;پزشکان باید با تمامی بیماران بدون توجه به عقاید، سبک زندگی یا
           شرایط شخصی آنان، با احترام و بی‌طرفی برخورد کنند. هرگونه توهین، تهمت یا قضاوت اخلاقی نسبت به بیمار به هیچ وجه پذیرفته
           نیست و در صورت رخداد برای پزشک امتیاز منفی درج خواهد شد که در رتبه بندی پزشک در نتایج جستجوی پزشکان تاثیر خواهد داشت و
           در صورت تکرار نوبت دهی پزشک معلق خواهد شد.</span></p>
         <p><strong class="font-weight-bold text-dark">۱۱.&nbsp; عدم افشای اطلاعات شخصی بیمار :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;پزشکان باید تمامی اطلاعات شخصی و پزشکی بیماران را به‌طور کامل
           محرمانه نگه دارند و هیچ‌گونه افشای این اطلاعات مجاز نیست. اطلاعات شخصی شامل نام، شماره تماس، کد ملی، نوع بیماری و سایر
           اطلاعات حساس بیمار است. هرگونه افشای این اطلاعات در بستر به نوبه، جرم محسوب می‌شود و می‌تواند تبعات قانونی به همراه
           داشته باشد و درهر بستری غیر از به نوبه حمایت و پیگیری به نوبه را به دنبال خواهد داشت.</span><span
           style="font-weight: 400;"><br>
          </span></p>
         <p><strong class="font-weight-bold text-dark">۱۲. عدم ثبت تخصص غیرواقعی :‌</strong></p>
         <p><span style="font-weight: 400;">هر فردی که اقدام به ثبت تخصصی نماید که مدارک تحصیلی مرتبط با آن تخصص را ندارد، به عنوان
           ثبت تخصص غیرواقعی شناخته می‌شود. این عمل به عنوان تخلف محسوب شده و مستلزم افت رتبه در نتایج جستجوی پزشکان به نوبه خواهد
           شد.</span></p>
         <p><strong class="font-weight-bold text-dark">۱۳. ویزیت توسط پزشک یا درمانگر :<br>
          </strong><span style="font-weight: 400;">ویزیت بیماران تنها باید توسط پزشک صاحب پروفایل انجام شود. انجام ویزیت توسط فردی
           غیر از پزشک صاحب پروفایل، از جمله منشی، دستیار، کارآموز و سایر افراد، تخلف محسوب می‌شود و این عمل به دلیل سوءاستفاده از
           اعتماد بیمار و آسیب به اعتبار پلتفرم غیرقابل قبول است و می‌تواند منجر به بسته شدن نوبت‌دهی آن پزشک گردد.</span></p>
         <h6 style="line-height: 2; margin-bottom: 15px;"></h6>
         <p><b class="text-dark font-weight-bolder font-size-20">قوانین مربوط به بیماران</b></p>
         <p><strong class="font-weight-bold text-dark">۱.&nbsp; حضور به‌موقع در زمان نوبت :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;بیماران موظف هستند در رأس زمان نوبت تعیین‌شده جهت ویزیت آنلاین حضور
           یابند و آماده ارتباط با پزشک باشند.&nbsp;</span></p>
         <p><strong class="font-weight-bold text-dark">۲.&nbsp; رعایت مدت‌زمان ویزیت :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;بیماران باید ویزیت خود را در مدت‌زمان اعلام‌شده توسط پزشک و به‌صورت
           جامع و پیوسته انجام دهند. درخواست برای چندین ویزیت در یک جلسه تنها با صلاحدید پزشک ممکن است، و پزشک می‌تواند در صورت
           صلاحدید درخواست‌های اضافی را رد کند و از بیمار بخواهد که نوبت جدیدی بگیرد.</span></p>
         <p><strong class="font-weight-bold text-dark">۳.&nbsp; حفظ احترام به پزشک :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;بیماران باید در تمامی مراحل ویزیت، احترام به پزشک را حفظ کنند و از
           هرگونه توهین، تهمت یا افترا خودداری نمایند.&nbsp;</span></p>
         <p><strong class="font-weight-bold text-dark">۴.&nbsp; محدودیت ارتباط پس از ویزیت :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;بیماران باید توجه داشته باشند که پس از ویزیت، حداکثر تا ۳ روز
           می‌توانند برای ارسال مستندات یا سوالات با پزشک ارتباط برقرار کنند. در صورتی که پس از این مدت پیام ارسال شود، پزشک حق
           دارد که به این پیام‌ها پاسخ ندهد یا بیمار را به رزرو نوبت جدید ارجاع دهد.</span></p>
         <p><strong class="font-weight-bold text-dark">۵.&nbsp; عدم ایجاد مزاحمت برای پزشک :&nbsp;&nbsp;</strong></p>
         <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;بیماران باید از هرگونه تماس یا ارتباط خارج از موضوع درمان با پزشک
           خودداری کنند. ایجاد هرگونه مزاحمت برای پزشک، نظیر تماس‌های مکرر یا مکالمه‌هایی خارج از عرف و حیطه پزشکی، غیرمجاز
           است.</span></p>
         <h6 style="line-height: 2; margin-bottom: 15px;"></h6>
         <p><span style="font-weight: 400;">از همراهی شما در ارائه و استفاده از خدمات ویزیت آنلاین به نوبه بسیار سپاسگزاریم. رعایت
           این قوانین به شما کمک می‌کند تا تجربه‌ای مثبت و حرفه‌ای را در این بستر ایجاد کنید.</span></p>
         <h6 style="line-height: 2; margin-bottom: 15px;"></h6>
        </div>
       </section>

      </div>
     </div>
    </div><!-- close content main div --> <!-- section close by builder template -->
   </div><!--end builder template-->
  </div>
 </div>
@endsection
@section('scripts')
 <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  var updateStatusAppointmentUrl =
   "{{ route('updateStatusAppointment', ':id') }}";
 </script>
@endsection
