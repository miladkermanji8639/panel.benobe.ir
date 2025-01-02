@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%20%D8%A7%D9%81%D8%B2%D9%88%D8%AF%D9%86%20%D8%A8%D8%B1%D8%AA%D8%B1%DB%8C%D9%86%20%D9%BE%D8%B2%D8%B4%DA%A9%D8%A7%D9%86%20%D9%88%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D8%A7%D9%86%20%D8%B3%D8%A7%DB%8C%D8%AA%20%20%20%26%2339%3B)%0D />


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
      <style>
        .panel-default {
          border-color: #e2e2e2;
        }

        .panel {
          border-radius: 10px;
          border: 1px solid;
          overflow: hidden;
          right: 0;
          margin-top: 5px;
          padding: 8px;
        }

        .panel-primary {
          border-color: #2d67a7;
          background-color: rgba(240, 246, 251, .47);
        }

      </style>
      <div class="app-content-body">

        <div class="bg-white-only lter b-b wrapper-md clrfix">

          <h1 class="m-n h3 font-thin">پزشک ها</h1>

        </div>
        <div class="wrapper-md">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="panel panel-default">
                <div class="panel-heading">انتخاب پزشک</div>
                <div class="panel-body">

                  <form method="post"
                        class="mt-2"
                        action=""
                        id="save_doctors">
                    <div class="form-group mt-2">
                      <label class="control-label">انتخاب پزشک:</label>
                      <select class="chosen-select form-control chosen-rtl"
                              name="doctor"
                              data-placeholder="انتخاب پزشک">
                        <option value="12099">دکتر شکرالله زندی (09187717600)</option>
                        <option value="12103">اپتومتریست شیما رستمی (09183806701)</option>
                        <option value="12104">دکتر اکرم دانشور محرمی (09109526506)</option>
                        <option value="12105">دکتر یاسین عزیزی (09027228681)</option>
                        <option value="12106">دکتر زهرا حاجی هاشمی (09370244721)</option>
                        <option value="12107">علیرضا هاشمیان (09388997600)</option>
                        <option value="12108">دکتر مینا دارابی (09227732938)</option>
                        <option value="12109">دکتر حبیب الله خالدیان (09010521116)</option>
                        <option value="12110">ماما الهام وکیلی (09188731729)</option>
                        <option value="12111">دکتر محمد عبدالهی (09183792267)</option>
                        <option value="12137">دلشاد نصراللهی (09390410156)</option>
                        <option value="12142">دکتر الهام شکری (09026809840)</option>
                        <option value="12143">دکتر بهزاد ویسی (09213918113)</option>
                        <option value="12145">ماما سهیلا خدا مراد پور (09183734139)</option>
                        <option value="12179">دکتر علیرضا نصیری فر (09185830018)</option>
                        <option value="12245">روانشناس عباس سامی (091090063471)</option>
                        <option value="12251">دکتر زهرا یزدی (09127532195)</option>
                        <option value="12266">دکتر جمیل محمودی (09219467093)</option>
                        <option value="12267">دکتر حمیدرضا بهرامیان (09185350093)</option>
                        <option value="12268">دکتر عبدالرحمن سلیم پور (00988732386)</option>
                        <option value="12269">دکتر محمود طاووسی (09331555825)</option>
                        <option value="12274">ماما نرگس بهاری (09187839452)</option>
                        <option value="12275">سید جلال الدین نقشبندی (09381801125)</option>
                        <option value="12662">فایزه ابدال بیگی (09183463323)</option>
                        <option value="12785">دکتر عماد فخروئیان (09308742904)</option>
                        <option value="12801">دکتر ونوس فلاحی (09210912422)</option>
                        <option value="12804">دکتر نرگس لمسه چی (09033346007)</option>
                        <option value="12853">دکتر بیان اسدی (09183798680)</option>
                        <option value="12901">متخصص آمنه لمسه چی (09054689004)</option>
                        <option value="13030">شیوا توطنی (09183712807)</option>
                        <option value="13129">دکتر سید اکبر نظام الدینی کچوئی (09108080700)</option>
                        <option value="13176">دکتر فریبرز سنگین آبادی (09183723158)</option>
                        <option value="13196">دکتر امید کرمی خمان (09148890756)</option>
                        <option value="13251">دکتر محمد قادری (09386191941)</option>
                        <option value="13264">دکتر پروانه مشتاق (09186609194)</option>
                        <option value="13265">دکتر آوات کرد نژاد (09029762443)</option>
                        <option value="13266">دکتر بهمن قمری (09186499945)</option>
                        <option value="13289">ماما میترا جابری (09188725774)</option>
                        <option value="13292">دکتر امیر زارعی (09184606773)</option>
                        <option value="13410">ادیولوژیست مهناز فتحی (09335141741)</option>
                        <option value="13411">فیزیوتراپیست کیانوش ساعدی (09367786080)</option>
                        <option value="13412">دکتر به یان پور محمد (09184965393)</option>
                        <option value="13438">دکتر شیرزاد سیفی (09188710926)</option>
                        <option value="13441"> روناک فخاری (09188725479)</option>
                        <option value="13443">دکتر رامین رجبی (09383719018)</option>
                        <option value="14377">دکتر مریم زرفشانی (09300661529)</option>
                        <option value="14381">دکتر کمال فرجی (09909709915)</option>
                        <option value="14414">دکتر فرزانه کریمیان (09389141599)</option>
                        <option value="15488">دکتر امید محمدی (09184609600)</option>
                        <option value="15490">دکتر سید عدنان حسامی (09188736500)</option>
                        <option value="15500">دکتر بهروز کریمی (09385062600)</option>
                        <option value="15504">دکتر سونیا شهسواری (09924359113)</option>
                        <option value="15577">دکتر محمدعلی احمدی (09304575133)</option>
                        <option value="15588">دکتر منصور مرادی (09183777529)</option>
                        <option value="15604">دکتر جمال الدین گله داری (09027920536)</option>
                        <option value="15605">دکتر محمد براری (09182969185)</option>
                        <option value="15720">دکتر آذر فیضی (09183788925)</option>
                        <option value="15733">دکتر مهدی نوری (09392912412)</option>
                        <option value="15804">دکتر صادق سعیدی (09901097032)</option>
                        <option value="15954">دکتر ناز محمد بادپا (09117680461)</option>
                        <option value="15957">دکتر علیرضا مومنی (09304406816)</option>
                        <option value="16014">دکتر نشاط محمدزاده (09046280020)</option>
                        <option value="16699">روانشناس سحر بهروزیان (09122090372)</option>
                        <option value="16897">ادیولوژیست آرش کریمی (09129329454)</option>
                        <option value="17154">دکتر علیرضا شفیعی (09185200521)</option>
                        <option value="18439">دکتر جمال الدین حسن زاده (09213265587)</option>
                        <option value="18450">دکتر بختیار خسروی (09185573095)</option>
                        <option value="18451">دکتر پیمان گویلی (09026640360)</option>
                        <option value="18687">دکتر سید محمدرضا پورمحمدمرادی (09352372377)</option>
                        <option value="19454">روانشناس فریبا طیری (09183716028)</option>
                        <option value="19714">دکتر یسرا جلالی (09184487055)</option>
                        <option value="19984">دکتر نسا هاشمی (09034596069)</option>
                        <option value="19996">دکتر علی تبرخون (09182683119)</option>
                        <option value="19997">دکتر مریم شاه محمودی (09301421250)</option>
                        <option value="20018">دکتر زهرا ویسی (09330464853)</option>
                        <option value="20033">دکتر مهران حسینی (09183715853)</option>
                        <option value="20046">دکتر ناهید موالی (09188732580)</option>
                        <option value="20094">دکتر پریسا پویا (09186642844)</option>
                        <option value="20098">دکتر بیژن قزوینه (09388710618)</option>
                        <option value="20146">دکتر علیرضا ناظمی (09181710500)</option>
                        <option value="20150">دکتر علی مجیدی (09359964733)</option>
                        <option value="20156">دکتر شراره کریمی (09124245430)</option>
                        <option value="20179">دکتر سیاوش مولانایی (09125988408)</option>
                        <option value="20185">دکتر گلبرگ پیریایی (09021663144)</option>
                        <option value="20225">دکتر مهریار خادم (09900299904)</option>
                        <option value="20369">دکتر نجمه کرباسی (09133684016)</option>
                        <option value="20372">دکتر جمال امجدی (09188724402)</option>
                        <option value="20451">دکتر طیب گویلی (09918667253)</option>
                        <option value="20468">روانشناس محمد کارگر (09178881660)</option>
                        <option value="20485">دکتر رامبد مظفری (09187904274)</option>
                        <option value="21178">دکتر آزیتا هدف جو (09371334517)</option>
                        <option value="21246">دکتر محمد خالد نقشبندی (09185745529)</option>
                        <option value="22474">دکتر برزان امجدی (09120619089)</option>
                        <option value="22845">دکتر تارا حبیبیان (09188689749)</option>
                        <option value="23304">دکتر پرستو محمودی (09100868108)</option>
                        <option value="23305">دکتر حسین ترابی (09120982382)</option>
                        <option value="23395">دکتر آزاد فتاحی راد (09188711099)</option>
                        <option value="23396">دکتر نیلوفر مقبل (09024952333)</option>
                        <option value="23402">دکتر پوریا محمدپرست (09337486969)</option>
                        <option value="23512">دکتر جمال الماسی راد (09383102087)</option>
                        <option value="23731">دکتر وریا فتحی (09387720068)</option>
                        <option value="20912">دکتر فواد رحیمی (09363666900)</option>
                        <option value="12272">دکتر محی الدین حسینی (09183710749)</option>
                        <option value="24331">روانشناس مرضیه خمسه (09015046320)</option>
                        <option value="24415">دکتر حمید حمدی (09126239971)</option>
                        <option value="24456">دکتر حامد معروفی (09918018491)</option>
                        <option value="24812">دکتر عبدالله محمدی (09188783141)</option>
                        <option value="24813">دکتر محسن حاج قادری (09934270310)</option>
                        <option value="25256">دکتر علی پرند (09108440055)</option>
                        <option value="27412">دکتر هادی پیل افکن (09903794192)</option>
                        <option value="27938">دکتر شعیب مجدی (09931114070)</option>
                        <option value="28015">دکتر خالد مینوئی (09300247547)</option>
                        <option value="28874">اجلال عباسی (09183711007)</option>
                        <option value="28944">دکتر کیانوش نورزاد (09336837272)</option>
                        <option value="29642">دکتر جمال مدرس گرجی (09188715256)</option>
                        <option value="29846">روانشناس مهناز شیرانی (09136887219)</option>
                        <option value="30085">روانشناس نادیا کیان (09378690747)</option>
                        <option value="30511">دکتر ارکیده استیفایی (09105556648)</option>
                        <option value="30637">دکتر امیرپویا تنهایی (09216510581)</option>
                        <option value="31533">آرش امیررفیعی (09112361831)</option>
                        <option value="32163">دکتر مریم فراهانی (09127632404)</option>
                        <option value="32809">دکتر امیر حسنی (09186656066)</option>
                        <option value="33180">دکتر فاطمه صادقیان (09905577571)</option>
                        <option value="33260">دکتر فرید سنگین آبادی (09184023510)</option>
                        <option value="33943">دکتر عباس شکوری (09191200929)</option>
                        <option value="34348">دکتر الناز دودانگه (09125164376)</option>
                        <option value="34427">دکتر امید مهتاب (09036200931)</option>
                        <option value="34715">دکتر رقیه اسلام نیا (09333212339)</option>
                        <option value="35079">آراس کریمیانی (09186688747)</option>
                        <option value="35105">دکتر رضا واشقانی فراهانی (09126202483)</option>
                        <option value="35136">روانشاس جمال امینی (09183733437)</option>
                        <option value="35277">روانشناس بهروز فرامرزی راد (09218695154)</option>
                        <option value="35377">دکتر پروانه منصوری (09393455837)</option>
                        <option value="35486">روانشناس سارا مددزاده (09126980483)</option>
                        <option value="35541">سیده الناز هاشمی (09166262064)</option>
                        <option value="35829">دکتر علی صادقی (09375813370)</option>
                        <option value="36020">ماما مرضیه علینقی زاده (09171080806)</option>
                        <option value="36079">ماما طلوع جافریان (09300503662)</option>
                        <option value="36193">روانشناس سوگند کوچکی مطلق (09350864200)</option>
                        <option value="36542">دکتر خالد فتحی زاده (09182645814)</option>
                        <option value="36817">دکتر مریم طالشی (09301147205)</option>
                        <option value="36918">الهه السادات نعمتی (09914072196)</option>
                        <option value="37093">فیزیوتراپ یاسر محمدی (09368276521)</option>
                        <option value="37315">روانشناس سارا سلیمانی (09127206705)</option>
                        <option value="37325">دکتر زهرا کرمی (09125062265)</option>
                        <option value="37358">دکتر سمانه فتوحی (09204505391)</option>
                        <option value="37374">دکتر شاهو درخش (09181711772)</option>
                        <option value="37477">دکتر بهنوش قادری (09121059347)</option>
                        <option value="37624">نرجس حاجی صادقیان (09337957736)</option>
                        <option value="37714">تاویار تهرانچی (09124975011)</option>
                        <option value="38167">دکتر رضا اکبری (09145351020)</option>
                        <option value="38176">دکتر کامبیز سیمرغ (09128579543)</option>
                        <option value="38332">دکتر سعید کاری (09918828207)</option>
                        <option value="38445">دکتر شهریار ابراهیمی (09105038117)</option>
                        <option value="38605">روانشناس علی حیدرنیا (09174435077)</option>
                        <option value="39112">دکتر ارژنگ ناصری (09355918893)</option>
                        <option value="39294">دکتر سارا حیدری (09120766966)</option>
                        <option value="39369">دکتر علی روحی (09016460801)</option>
                        <option value="39499">دکتر سارا باستان فرد (09122643959)</option>
                        <option value="39520">دکتر ندا منتهایی (09125943942)</option>
                        <option value="39593">ماما فاطمه لشگری (09109951411)</option>
                        <option value="39741">دکتر سید مرتضی امیرلطیفی (09111712860)</option>
                        <option value="39820">پوریا مارابی (09213669812)</option>
                        <option value="39866">روانشناس مرتضی نریمانی (09015886349)</option>
                        <option value="40290">گفتاردرمان سعیده راهب (09379111041)</option>
                        <option value="40396">دکتر کیوان صابونی (09902138004)</option>
                        <option value="40513">دکتر عبداله محمدی (09189174399)</option>
                        <option value="40637">دکتر امیرحسین سعیدی نایینی (09217168806)</option>
                        <option value="40793">اپتومتریست الهام فراشاهی یزد (09130017642)</option>
                        <option value="40992">روانشناس نجمه فراشیانی (09331041942)</option>
                        <option value="41122">تارا مولانایی (09050695018)</option>
                        <option value="41139">ماما آزیتا خواجه ای (09183714429)</option>
                        <option value="41215">دکتر لطف الله ساعد (09396348062)</option>
                        <option value="41223">روانشناس شیما رجب زاده (09214345287)</option>
                        <option value="41316">روانشناس زینب قاسمیان (09112371901)</option>
                        <option value="41653">دکتر احسان قویدل (09146627548)</option>
                        <option value="41851">شقایق عینکی (09113477006)</option>
                        <option value="42067">دکتر مجید دلاور (09141154493)</option>
                        <option value="42346">سید مهدی زعیم زاده (09371169736)</option>
                        <option value="42846">مهدی کریمی (09129379430)</option>
                        <option value="42911">نرگس ایمانی (09918310960)</option>
                        <option value="43848">کیمیا قاسم زاده (09103725431)</option>
                        <option value="43971">سحر اعظمی (09308400162)</option>
                        <option value="44799">علی اصغر سرائی (09153194565)</option>
                        <option value="44820">زهرا عابدی (09223874264)</option>
                        <option value="45456">پوریا پارسا (09901509395)</option>
                        <option value="45507">حامد صادقی (09938264210)</option>
                        <option value="45609">ماما فرزانه راجی (09351873880)</option>
                        <option value="45819">پرویز شجاعی (09307452854)</option>
                        <option value="46417">دکتر محسن عربی (09103102187)</option>
                        <option value="46489">کیمیا محمدی (09934325762)</option>
                        <option value="46541">دکتر محمد علی خانزاده علیشاهی (09155398543)</option>
                        <option value="46981">دکتر مهناز ارثی (09138503494)</option>
                        <option value="47613">دکتر محمود هدایتی (09123520063)</option>
                        <option value="48134">فربد امامی یگانه (09032000445)</option>
                        <option value="48314">دکتر محبوبه قویدل حیدری (09305980507)</option>
                        <option value="48606">دکتر انور الیاسی (09003710425)</option>
                        <option value="48748">مریم مطمئن (09128531923)</option>
                        <option value="48789">مهدی شیخی (09377373497)</option>
                        <option value="48825">کارشناس زانیار محمدزاده (09391783423)</option>
                        <option value="48865">بهزاد منعم خراسانی (09153035126)</option>
                        <option value="49009">مشاور پریشاد گندم کار (09378264690)</option>
                        <option value="49249">مریم آل حبیب (09355492874)</option>
                        <option value="49268">مریم سعادتی (09373640405)</option>
                        <option value="49342">حسن صدیقی خالکیاسر (09399039003)</option>
                        <option value="49572">محمد عارف سرا (09143815738)</option>
                        <option value="49792">هاله هادی پور (09125654541)</option>
                        <option value="49921">المیرا پشت ماهی (09123596691)</option>
                        <option value="50000">هادی محمدی (09120321086)</option>
                        <option value="50175">مونا مهدی نسب (09125930953)</option>
                        <option value="50353">مهناز ارثی (09358363832)</option>
                        <option value="50479">مرتضی داداشی (09355602116)</option>
                        <option value="50664">سجاد اسکندری پیله رود (09350677367)</option>
                        <option value="50784">فرهود گوراوانچی (09125719519)</option>
                        <option value="50859">فرنوش مختاری (09150612146)</option>
                        <option value="51043">لادن رضایی عدل (09122258827)</option>
                        <option value="51067">مصطفی بهروزی (09382971166)</option>
                        <option value="51249">رقیه قربان زاده (09122207431)</option>
                        <option value="51341">ماندانا شريفي (09308839287)</option>
                        <option value="51376">علی فلاحیان (09131333748)</option>
                        <option value="51378">احسان رستمی (09128304355)</option>
                        <option value="51563">میثم اشرفی (09145253501)</option>
                        <option value="51573">دکتر سارا کمال دار (09129175464)</option>
                        <option value="51606">سید محمد حسین رضوی بهابادی (09135238865)</option>
                        <option value="51682">عاطفه صالحی (09392036491)</option>
                        <option value="51835">پریا زیوری (09126366320)</option>
                        <option value="51999">محمدرضا اسدی آیدنلو (09374543354)</option>
                        <option value="52150">بابک دهقانی (09389719467)</option>
                        <option value="52365">سلمان خانی (09171491340)</option>
                        <option value="52570">مریم شجاعیان (09123198591)</option>
                        <option value="52629">علی صادقی محصلی (09123804835)</option>
                        <option value="52812">دکتر محمود شامل جهرمی (09175582127)</option>
                        <option value="52825">امید عیسی نژاد (09149193686)</option>
                        <option value="52878">فریبرز کاظمی (09919841167)</option>
                        <option value="53098">مریم امیرعاجلو (09131438849)</option>
                        <option value="53452">محمد طاهری (09212638007)</option>
                        <option value="53541">سیده سمیرا نوربخش (09379204511)</option>
                        <option value="53655">یاسمن عاشقی (09128436935)</option>
                        <option value="53772">روناک محمدی پور (09122497380)</option>
                        <option value="53975">امید یعقوب نژادیان (09166314358)</option>
                        <option value="54053">دکتر بهروز بوکانی (09389046408)</option>
                        <option value="54069">فرشته احمد زاده (09177777216)</option>
                        <option value="54250">مطهره اخلاقی (09122474231)</option>
                        <option value="54251">سحر سروری (09159169081)</option>
                        <option value="54363">مهرداد ساسانی (09144178505)</option>
                        <option value="54372">عرفان شیخ بهایی (09132080913)</option>
                        <option value="54453">روانشناس بالینی ستاره نادری (09919854636)</option>
                        <option value="54454">نیلوفر حبیب پور (09162338038)</option>
                        <option value="54563">محمد رضا مخترع (09175846007)</option>
                        <option value="54589">مریم عبداللهی بیرون (09389500491)</option>
                        <option value="54642">دکتر مهدی خاکپور (09044341946)</option>
                        <option value="54770">سونیا فردین (09170154002)</option>
                        <option value="54773">معصومه کوخائی (09192407761)</option>
                        <option value="54916">علیرضا وجدانزاده (09108112161)</option>
                        <option value="55032">نگار درخشنده (09054806900)</option>
                        <option value="55038">روانشناس مهدی رحیمی (09187340319)</option>
                        <option value="55057">کلینیک روانشناسی چشمه نور (09134627584)</option>
                        <option value="55160">سمانه موسوی نسب (09122585681)</option>
                        <option value="55315">فرزاد روشن ضمیر (09171303604)</option>
                        <option value="55342">لیلا کهنسال (09172296094)</option>
                        <option value="55415">مهدی زنگانه (09113772529)</option>
                        <option value="55419">پیمان آزموده (09217177821)</option>
                        <option value="55421">فائزه جعفری (09309410298)</option>
                        <option value="55487">ماه منير رفيع (09125399523)</option>
                        <option value="55523">الهام ابراهیمی (09125033541)</option>
                        <option value="55734">کاوه نادی زاده (09122143863)</option>
                        <option value="55769">اعظم حسینی (09126221172)</option>
                        <option value="55882">حانیه خوش لهجه ثابت (09228204797)</option>
                        <option value="55925">روانشناس سهیلا محمدی (09184585690)</option>
                        <option value="56114">تکتم شادی (09377658565)</option>
                        <option value="56189">مروارید علی نژاد (09125098347)</option>
                        <option value="56204">روانشناس ستاره حسینی (09381478748)</option>
                        <option value="56212">علی حسینی (09188315853)</option>
                        <option value="56214">فروزان یاسمنی (09232041941)</option>
                        <option value="56353">دکتر زهرا یزدانی فر (09932088771)</option>
                        <option value="56458">سارا رهنما (09356665759)</option>
                        <option value="56505">مریم ابراهیم پور (09133437366)</option>
                        <option value="56526">زکیه مشکساری (09177104329)</option>
                        <option value="56528">هانیه حسین زاده (09033120110)</option>
                        <option value="56552">فاطمه مختارزاده (09146541644)</option>
                        <option value="56553">زینب مصدق (09017183689)</option>
                        <option value="56725">مریم غلامی (09052422939)</option>
                        <option value="56734">نگار درانی زاده (09134929295)</option>
                        <option value="56832">سیامک بهروان (09031993678)</option>
                        <option value="56904">زینب شیخ بابایی (09183112769)</option>
                        <option value="56975">محمد غفاری خان (09216114281)</option>
                        <option value="57001">راحله رفائی (09153418273)</option>
                        <option value="57117">فاطمه قلندری (09188668692)</option>
                        <option value="57134">رقیه نصیری (09144198409)</option>
                        <option value="57235">مجید امینی (09133695965)</option>
                        <option value="57319">مهدی شیخی (09159264596)</option>
                        <option value="57387">سینا کماسی (09383283163)</option>
                        <option value="57432">مهدی سلیمی (09120174510)</option>
                        <option value="57447">دکترمحمدعلی زلفی (09396584688)</option>
                        <option value="57498">مهشید ریاحی (09139169172)</option>
                        <option value="57543">مهرآسا آوری (09111162024)</option>
                        <option value="57732">الهام امانی (09186180071)</option>
                        <option value="57795">دکتر شراره کاظمی (09125871553)</option>
                        <option value="57837">شیدا خوشه مهری (09122111134)</option>
                        <option value="57844">عارفه بشارت نژاد (09136852086)</option>
                        <option value="57967">فاطمه سادات رهنما (09393233416)</option>
                        <option value="57994">هادی شجاعی (09118619345)</option>
                        <option value="58019">مرضیه قدرتی (09123185229)</option>
                        <option value="58076">هما خجسته فر (09177173500)</option>
                        <option value="58202">سهیل پاکدل راد (09932265899)</option>
                        <option value="58207">احسان سامانی (09013142662)</option>
                        <option value="58226">رضا قویدل (09303030392)</option>
                        <option value="58272">علیرضا فیاض (09188181296)</option>
                        <option value="58642">امین اسماعیلی (09166258311)</option>
                        <option value="58664">رضا امین نژاد (09123098598)</option>
                        <option value="58809">مهسا فیروزی مقدم (09333600708)</option>
                        <option value="58988">اسماعیل واحدیان (09903030819)</option>
                        <option value="59036">دکتر ابراهیم حجازی مطب سنندج (09185342262)</option>
                        <option value="59119">سید رسول رضوانی (09025921842)</option>
                        <option value="59154">ندا موغاری زاده (09387264544)</option>
                        <option value="59155">محسن میرزاده (09123362295)</option>
                        <option value="59220">فاطمه نیکخواه (09216741356)</option>
                        <option value="59334">زیبا راست کردار (09122996322)</option>
                        <option value="59474">مینا صمدی (09193621400)</option>
                        <option value="59586">زهره روددهقان (09126716838)</option>
                        <option value="59601">بهار محسنی (09146744404)</option>
                        <option value="59658">دکتر ابراهیم حجازی مطب آمل (09113227767)</option>
                        <option value="59778">حسن عابدینی اربطانی (09101699246)</option>
                        <option value="60013">شایان اکبری (09113478918)</option>
                        <option value="60098">دکتر افسون صدیقی (09121852917)</option>
                        <option value="60262">امیر سعید صدیقی (09122151591)</option>
                        <option value="60330">فاطمه روحانی (09120514490)</option>
                        <option value="60533">دکتر هانا محمودیان (09184196680)</option>
                        <option value="60676">مهدی عرب زاده (09120421195)</option>
                        <option value="61066">دکتر زهرا خدابخش دچانی (09123097204)</option>
                        <option value="61134">سید محمد ابطحی (09135433664)</option>
                        <option value="61148">غزل هاشمی پور (09307343079)</option>
                        <option value="61159">دلارام پورنامداری (09135328124)</option>
                        <option value="61356">مریم کریمی (09123633439)</option>
                        <option value="61414">وحید ردایی (09128878454)</option>
                        <option value="62014">امین رضایی (09392779640)</option>
                        <option value="62129">بهنام بیابانکی (09125327572)</option>
                        <option value="62288">فریبا یوسفی (09122784583)</option>
                        <option value="62661">مسعود امیدیان (09922140573)</option>
                        <option value="62778">امیر هوشنگ گرامی (09981438285)</option>
                        <option value="63146">دکتر طیبه عابدینی (09143199986)</option>
                        <option value="63419">بیژن قربانپور اسکویی (09144123455)</option>
                        <option value="63590">زهرا عابدی (09373312206)</option>
                        <option value="63698">نهضت سرکاکی (09160664759)</option>
                        <option value="63968">خانم دکتر شهناز غفوری (09058717843)</option>
                        <option value="64039">مسعود حسین پناهی (09187893549)</option>
                        <option value="64119">زهرا پورامان الهی (09901307982)</option>
                        <option value="64130">اصغر اشرفی (09356974430)</option>
                        <option value="64963">سعید سلیمانپور (09127930468)</option>
                        <option value="65168">لیلا سالاری (09158503753)</option>
                        <option value="65348">حانیه عزیزی (09112162747)</option>
                        <option value="65365">سید مجتبی کشفی پور (09130530530)</option>
                        <option value="65425">آرمان امانی (09182953414)</option>
                        <option value="65471">سیران نگهدار (09308276506)</option>
                        <option value="65473">مریم عطشانی (09028099909)</option>
                        <option value="65512">دکتر مهران نوروزی (09188381013)</option>
                        <option value="65532">دکتر رضا حیدری (09100994087)</option>
                        <option value="65727">ماما ستایش سهیلی یکتا (09126879573)</option>
                        <option value="65745">دکتر نرگس پارسیان مهر (09015021594)</option>
                        <option value="65981">روان شناس حسین احمدوند (09184079812)</option>
                        <option value="66009">اسعد حامدی (09145418902)</option>
                        <option value="66049">گفتار درمان سیده محدثه ظهور کارباف (09392178055)</option>
                        <option value="66494">روانشناس محبوبه اکبری (09180896354)</option>
                        <option value="66634">دکتر مهدی عرب زاده (09171502569)</option>
                        <option value="66718">روانشناس سعید جامه شورانی (09188339991)</option>
                        <option value="66782">فردوس سعیدی نیا (09102511066)</option>
                        <option value="66834">ماما زهرا سرلک (09128759147)</option>
                        <option value="67005">دکتر عطاالله محمدی (09053793403)</option>
                        <option value="67006">دکتر محمد سردار ظاهریانی (09392855194)</option>
                        <option value="67103">دکتر طلیعه عابدینی (09012497971)</option>
                        <option value="67119">روانشناس کورش مهدیون (09121487739)</option>
                        <option value="67147">دکتر محمد رمضان زاده (09147457543)</option>
                        <option value="67346">دکتر مينا نادري (09125190348)</option>
                        <option value="67509">روانشناس فاطمه خندان (09904547198)</option>
                        <option value="67597">دکتر سید علی اصغر کمالی کارسالاری (09021306027)</option>
                        <option value="67820">دکتر شهریار کمالی (09332762935)</option>
                        <option value="67831">دکتر طیبه محمدی (09367444356)</option>
                        <option value="68057">روانشناس اعظم سیاحی (09367421839)</option>
                        <option value="68377">روانشناس مطهره میرشکاری (09330636377)</option>
                        <option value="68452">دکتر علیرضا اسعدی (09389407925)</option>
                        <option value="68534">دکتر محمد عزیزی (09189830174)</option>
                        <option value="68565">دکتر سیران مبارکی (09182855221)</option>
                        <option value="68655">روانشناس مهدی صفائیان فر (09367507472)</option>
                        <option value="68832">دکتر معصومه عابدینی (09363937093)</option>
                        <option value="68961">ماما لیلا رحمتی (09186699351)</option>
                        <option value="69020">روانشناس ناهید اکبری مقدم (09114234096)</option>
                        <option value="69154">ماما سحر فرشادی (09188762065)</option>
                        <option value="69169">دکتر توحید نیکخو (09372805113)</option>
                        <option value="69284">روانشناس میترا سجادیان (09367510031)</option>
                        <option value="69363">دکتر میثم رضا بقراطی (09153008063)</option>
                        <option value="69454">سنوگرافی دکتر کریم شریفی (091887861120)</option>
                        <option value="69529">روانشناس حامد طالب نژاد (09378801934)</option>
                        <option value="69574">دکتر سپیده فرجی (09227550656)</option>
                        <option value="69631">هاله خبیری (09125307044)</option>
                        <option value="69665">دکتر عبدالله احسنی (09181753143)</option>
                        <option value="69833">دکتر ناصر رحمان پناه (09052057347)</option>
                        <option value="70042">علی رضا رضایی نیا (09923736826)</option>
                        <option value="70059">معصومه بازرگان راد (09123534580)</option>
                        <option value="70074">دکتر علیرضا رضایی آبکنار (09002918918)</option>
                        <option value="70087">ماما هانا ادوایی (09185979376)</option>
                        <option value="70315">دکتر شیلان محمدی (09383713131)</option>
                        <option value="70334">شهرزاد حاجی محمد کاظمی (09177178626)</option>
                        <option value="70568">آزمایشگاه ژنتیک آوینا (09129245469)</option>
                        <option value="70576">بهناز آقا زیارتی فراهانی (09187621065)</option>
                        <option value="70584">دکتر شیدا کردی (09187868336)</option>
                        <option value="70718">دکتر دلپاک محمود نژاد (09360521080)</option>
                        <option value="70719">دکتر سیما خدادادی (09001918918)</option>
                        <option value="70761">آرزو نصری (09183728231)</option>
                        <option value="70926">علی نبوی (09231232132)</option>
                        <option value="71804">آزمایشگاه تشخیص طبی باران (09011186263)</option>
                        <option value="71882">دکتر رویا علائی (09308344683)</option>
                        <option value="71893">محمد شهاب امینی (09021719416)</option>
                        <option value="71930">نیکو تبرائی (09383387776)</option>
                        <option value="72002">دکتر سامان حبیبی (09362144010)</option>
                        <option value="72038">پردیس میرمعینی (09027343728)</option>
                        <option value="72260">مونس نوری (09133932367)</option>
                        <option value="72451">مهسا یوسفی فاتح (09389772810)</option>
                        <option value="72517">مینا عبدی زناب (09392078234)</option>
                        <option value="73093">کیارش صالحی ورنوسفادرانی (09940301697)</option>
                        <option value="73187">سمانه نقاش (09337720656)</option>
                        <option value="73748">دکتر سید طه حمیدی (09181725047)</option>
                        <option value="73894">فرهاد شایگان (09178120541)</option>
                        <option value="74076">پیام عزیززاده (09196040025)</option>
                        <option value="74477">میلاد بزی (09360453717)</option>
                        <option value="74479">عاطفه محمدی (09014754318)</option>
                        <option value="74481">ناصر طبیبی (09127460151)</option>
                        <option value="74611">ناجی هدایتی (09055984959)</option>
                        <option value="74666">فاطمه روستایی (09362014510)</option>
                        <option value="75041">فاطمه جاسبی (09129527746)</option>
                        <option value="75106">دکتر علی مفاخری (09125227403)</option>
                        <option value="75110">دکتر محمد سردار ظاهریانی (بیمارستان شفا سقز) (09188836199)</option>
                        <option value="75126">دکتر معصومه رضایی (09222628104)</option>
                        <option value="75146">محمد نیتی بزچلوئی (09127298454)</option>
                        <option value="75276">نگار محمودی (09186474525)</option>
                        <option value="75912">سعید صادقی (09138290901)</option>
                        <option value="75989">رامینا جوینی پور (09394228847)</option>
                        <option value="76169">محمد درچین (09163439173)</option>
                        <option value="76387">سید امیر فرهاد حسینی (09362318474)</option>
                        <option value="76706">محدثه دشتکوهی (09339820354)</option>
                        <option value="76722">علی کیامنش (09384578969)</option>
                        <option value="76725">منصور پاریاب (09113697614)</option>
                        <option value="76834">معصومه شفاعت (09338010992)</option>
                        <option value="76961">بابک پرتوی (09121988653)</option>
                        <option value="76976">ثمینه شکیبایی (09381027630)</option>
                        <option value="77233">زهرا صمدی (09911708373)</option>
                        <option value="77318">رضا امانی (09134894392)</option>
                        <option value="77614">زهرا توکلی اصل (09199750688)</option>
                        <option value="77694">نسرین لطفی (09011378348)</option>
                        <option value="77702">لاله جعفری (09129293881)</option>
                        <option value="77725">فاطمه قزلی (09141665643)</option>
                        <option value="77781">مصعومه رحیمی (09125158985)</option>
                        <option value="77861">پریسا پروانه (09122685215)</option>
                        <option value="77908">عبدالحکیم آباریان (09169000998)</option>
                        <option value="78061">ابراهیم ولیدی (09183809857)</option>
                        <option value="78634">محمدرسول فتحی (09383030875)</option>
                        <option value="78786">سيما كزازي (09120299273)</option>
                        <option value="79560">راضیه تیموری زاده (09172482431)</option>
                        <option value="79635">فرناز فولادي (09121952878)</option>
                        <option value="79799">دکتر محمد غفوری (09306450014)</option>
                        <option value="79917">فاطمه سادات ریحانی دو (09306907173)</option>
                        <option value="79974">سید فرهنگ مرشد (09307972576)</option>
                        <option value="80018">مرکز مشاوره کاژه ی ژیان (09184148551)</option>
                        <option value="80246">سهیل مظفری (09100782789)</option>
                        <option value="80384">نغمه مجيدي (09120892898)</option>
                        <option value="80511">علی پرند (09937926753)</option>
                        <option value="80518">حامد جعفری (09126649115)</option>
                        <option value="80884">شیرین فرقانی (09039336647)</option>
                        <option value="81172">زهرا قهرمانی (09375680650)</option>
                        <option value="81247">سمانه آذربایجانی (09928635109)</option>
                        <option value="81463">دکتر ژیلا یوسفی (09187892811)</option>
                        <option value="81688">لقمان ابراهیمی (09101466053)</option>
                        <option value="81718">دکتر علی رمضانی (09385242588)</option>
                        <option value="81738">دکتر حسن معیری (09182845425)</option>
                        <option value="81829">سیده کبری میربهرسی (09179976141)</option>
                        <option value="82018">سینا غفاری (09188786469)</option>
                        <option value="82505">مهسا حسینی خطبه سرا (09113337468)</option>
                        <option value="82506">موسی رحمتیان (09163684508)</option>
                        <option value="82628">محمدمعین اشرفی (09215358022)</option>
                        <option value="82645">فرهاد احمدی (09138629025)</option>
                        <option value="83218">مریم کاشانیان (09124302619)</option>
                        <option value="83696">حامد پوررحیم نجف آبادی (09102611078)</option>
                        <option value="83843">میترا عاشوری (09224987817)</option>
                        <option value="84357">مریم موحدنژاد (09141149281)</option>
                        <option value="84439">دکتر شیوا رحیمی (09302726400)</option>
                        <option value="84681">زهرا محمدزاده فیلی (09900962380)</option>
                        <option value="84683">بهزاد امیری (09188120301)</option>
                        <option value="85204">دکتر فاطمه باباخانی (09128267041)</option>
                        <option value="85528">سید مهدی زعیم زاده (09195746264)</option>
                        <option value="85594">محسن هراتیان (09185049824)</option>
                        <option value="85596">آیلا مسنن (09143515903)</option>
                        <option value="85859">صادق عابدی (09901737302)</option>
                        <option value="85865">هدا نظری (09021503183)</option>
                        <option value="85958">مهلا فرخزاد (09198167562)</option>
                        <option value="85971">سهیل امید (09358514924)</option>
                        <option value="86597">مهدخت ریحانی (09361122124)</option>
                        <option value="86749">سید علی اکبر مرتضوی امامی (09126788432)</option>
                        <option value="87274">طاهره نعمتی قلعه رودخانی (09022906158)</option>
                        <option value="87411">دکتر سیامک محمود مرادی (09332727731)</option>
                        <option value="87799">آناهیتا ویسی (09305210598)</option>
                        <option value="87817">آناهیتا ویسی (09140473016)</option>
                        <option value="35276"> (09385619117)</option>
                        <option value="50641">زهرا سادات رسولی (09196669125)</option>
                        <option value="50653">مهران اسماعیلی (09131163338)</option>
                        <option value="51547">علی عباس نژاد (09177890174)</option>
                        <option value="51752">محمد جواد اسکندری (09115658691)</option>
                        <option value="52257">پویان خیراندیش (09120085105)</option>
                        <option value="53478"> (09363767903)</option>
                        <option value="54014">سمیه عزیزیان تزنگی (09176069759)</option>
                        <option value="54873"> (09197251156)</option>
                        <option value="55554">حدیث زارع (0902050604)</option>
                        <option value="55982"> (09174511727)</option>
                        <option value="59156">سلمان کوثری (09130043876)</option>
                        <option value="59681">مریم قادری (09198097064)</option>
                        <option value="60287"> (09130223229)</option>
                        <option value="61850"> (09014622708)</option>
                        <option value="64706"> (09129276286)</option>
                        <option value="67549">محمد علی سلطانی (09155233639)</option>
                        <option value="67979">فاطمه محمودی (09128585106)</option>
                        <option value="76937"> (09924430450)</option>
                        <option value="80200">فضل الله شکری (09119147868)</option>
                        <option value="82226"> (09185304837)</option>
                        <option value="83513"> (09117049718)</option>
                        <option value="83519"> (09184727776)</option>
                        <option value="87755"> (09112845041)</option>
                        <option value="82814">فائزه محمودیون (09960079363)</option>
                        <option value="36092">دکتر محمد محمودی (09184488760)</option>
                        <option value="36865">دکتر هدی مختاریان (09127517106)</option>
                        <option value="39047">دکتر احمد مهرام فر (09362299919)</option>
                        <option value="40947">دکتر نعمت رستمی (09204252147)</option>
                        <option value="47505">مینا مسلمی (09131160967)</option>
                        <option value="59054">محمد مهدی دائی (09121815890)</option>
                        <option value="63719">فاطمه اعتمادی (09303437371)</option>
                        <option value="80979">بابک دهقانی (09381712122)</option>
                      </select>

                    </div>
                    <div class="form-group mt-2">
                      <label class="checkbox rtl"><input type="checkbox"
                               name="best_hozuri"
                               value="1"> برترین پزشکان نوبت دهی حضوری</label>
                               <br>
                      <label class="checkbox rtl"><input type="checkbox"
                               name="best_moshaver"
                               value="1"> برترین مشاوران تلفنی</label>
                    </div>
                    <div class="hr_line"></div>
                    <div class="form-group mt-4 text-left">
                      <button type="submit"
                              class="btn btn-success"><i class="fa fa-save px-2"></i> ثبت و ذخیره</button>
                    </div>
                  </form>

                </div>

              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="panel panel-primary">
                <div class="panel-heading fw-bold fs-3">انتخاب پزشکان مراکز درمان</div>
                <div class="panel-body">

                  <form method="post"
                        action=""
                        id="save_doctor_hospital">
                    <div class="form-group mt-2">
                      <label class="control-label">انتخاب بیمارستان:</label>
                      <select class="form-control"
                              id="hospital"
                              name="hospital">
                        <option value="0">-- انتخاب بیمارستان</option>
                        <option value="12139">مرکز مشاوره و خدمات روانشناختی صدرا </option>
                        <option value="12146">کلینیک دندانپزشکی مهر </option>
                        <option value="12550">مرکز پزشکی هسته ایی بیمارستان کوثر </option>
                        <option value="12595">مرکز دندانپزشکی آرام </option>
                        <option value="12828">خدمات پرستاری در منزل زرین سلامت </option>
                        <option value="20188">کلینیک دکتر مهرجو </option>
                        <option value="23851">کلینیک خدمات روان‌شناختی دکتر آزاد همتی </option>
                        <option value="32694">کلینیک فرهنگیان مریوان </option>
                        <option value="41953">کلینیک دندانپزشکی دکتر علی مفاخری </option>
                        <option value="46082">کلینیک دکتر حسینی </option>
                        <option value="48821">کلینیک روانشناسی راویژ </option>
                        <option value="48922">مرکز مشاوره بهارا </option>
                        <option value="57427">کلینیک کارکنان دانشکده پزشکی دانشگاه علوم پزشکی تهران </option>
                        <option value="60962">کلینیک جراحی اعصاب دکتر افسون و امیر سعید صدیقی(مطب شریعتی) </option>
                        <option value="60963">کلینیک جراحی دکتر افسون و امیر سعید صدیقی(مطب ولیعصر) </option>
                        <option value="62821">درمانگاه عمار </option>
                        <option value="65411">کلینیک دکتر بهنام رضا مخصوصی </option>
                        <option value="67175">مشهد </option>
                        <option value="68818">کلینیک روانشناختی روژانو </option>
                        <option value="71033">کلینیک روانشناسی آراد </option>
                        <option value="75696">مرکز رادیولوژی , سونوگرافی و اینترونشن دکتر شریفی </option>
                        <option value="78240">کلینیک هیرو </option>
                      </select>
                    </div>
                    <div class="form-group mt-2">
                      <label class="control-label">انتخاب پزشک:</label>
                      <select class="form-control"
                              id="doctor_hospital"
                              name="doctor">
                        <option value="85">فرزاد مجیدیان</option>
                        <option value="84">دکتر هادی نقدی</option>
                      </select>
                    </div>
                    <div class="form-group mt-2">
                      <label class="checkbox rtl"><input type="checkbox"
                               name="best_hozuri"
                               value="1"> برترین پزشکان نوبت دهی حضوری</label>
                               <br>
                      <label class="checkbox rtl"><input type="checkbox"
                               name="best_moshaver"
                               value="1"> برترین مشاوران تلفنی</label>
                    </div>
                    <div class="hr_line"></div>
                    <div class="form-group mt-4 text-left">
                      <button type="submit"
                              class="btn btn-success"><i class="fa fa-save px-2"></i> ثبت و ذخیره</button>
                    </div>
                  </form>

                </div>

              </div>
            </div>
          </div>

          <script type="text/javascript">
            function delete_bestdoctor(id) {
              $.ajax({
                type: "POST",
                url: "?mod=home_page&action=delete_bestdoctor&ajax=true",
                data: {
                  'id': id
                }, // serializes the form's elements.
                datatype: 'json',
                beforeSend: function () {
                  waitMe_show('body');
                },
                success: function (data) {
                  console.log(data)
                  waitMe_hide('body');
                  if (data.status == 'yes') {
                    toast_success('حذف شد.')
                    location.reload();
                  } else {
                    toast_error('خطا! انجام نشد.')
                  }

                },
                error: function () {
                  waitMe_hide('#save_doctors');
                }
              });
            }

            $(document).ready(function (e) {
              $("#save_doctors").submit(function (e) {
                $.ajax({
                  type: "POST",
                  url: "?mod=home_page&action=save_doctors&ajax=true",
                  data: $(this).serialize(), // serializes the form's elements.
                  beforeSend: function () {
                    waitMe_show('#save_doctors');
                  },
                  success: function (data) {
                    console.log(data)
                    waitMe_hide('#save_doctors');
                    alert("اطلاعات جدید ثبت شد. در حال بروزرسانی");
                    location.reload();
                  },
                  error: function () {
                    waitMe_hide('#save_doctors');
                  }
                });
                e.preventDefault();
              });


              $("#save_doctor_hospital").submit(function (e) {
                $.ajax({
                  type: "POST",
                  url: "?mod=home_page&action=save_doctor_hospital&ajax=true",
                  data: $(this).serialize(), // serializes the form's elements.
                  beforeSend: function () {
                    waitMe_show('#save_doctor_hospital');
                  },
                  success: function (data) {
                    waitMe_hide('#save_doctor_hospital');
                    console.log(data);
                    alert("اطلاعات جدید ثبت شد. در حال بروزرسانی");
                    location.reload();
                  },
                  error: function () {
                    waitMe_hide('#save_doctor_hospital');
                  }
                });
                e.preventDefault();
              });



              $("#hospital").change(function (e) {
                $.ajax({
                  type: "POST",
                  url: "?mod=home_page&action=list_doctor_hospital&ajax=true",
                  data: $(this).serialize(), // serializes the form's elements.
                  datatype: "html",
                  beforeSend: function () {
                    waitMe_show('#edit_bestdoctors_hospital');
                  },
                  success: function (data) {
                    waitMe_hide('#edit_bestdoctors_hospital');
                    $("#doctor_hospital").html(data)

                  },
                  error: function () {
                    waitMe_hide('#edit_bestdoctors_hospital');
                  }
                });
                e.preventDefault();
              });
            });

          </script>
        </div>
      </div>
      @endsection
