<header class="fixed-top">

    <div class="top-header d-none-top-header">
        <div class="top-header-container container  pt-3">
            <div class="logo-and-log-reg-top-header d-flex justify-content-between flex-wrap">
                <div class="top-right-logo-header">
                    <a href="">
                        <img src="{{ asset("app-assets/logos/benobe.svg") }}" alt="" class="logo">
                    </a>
                </div>
                <div class="top-regestration-header">
                    <a href="#" class="btn-reg-log btn btn-sm open-log-reg-modal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0067cd" viewBox="0 0 24 24" class="" width="32" height="32">
                            <path d="M12 11.5A4.5 4.5 0 1 1 16.5 7a4.51 4.51 0 0 1-4.499 4.5H12zm0-8A3.5 3.5 0 1 0 15.5 7 3.5 3.5 0 0 0 12 3.5zm6 18a.5.5 0 0 1-.5-.5v-2a3.52 3.52 0 0 0-3.499-3.5H10A3.5 3.5 0 0 0 6.5 19v2a.5.5 0 0 1-1 0v-2a4.51 4.51 0 0 1 4.499-4.5H14a4.51 4.51 0 0 1 4.5 4.499V21a.5.5 0 0 1-.5.5z" class="color">
                            </path>
                        </svg>
                        <span class="text-login">
                            ورود
                        </span>
                    </a>

                    <!-- show when user is registred  -->
                    <a href="#" class="btn-reg-log btn btn-sm open-log-reg-modal d-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="drdr-icon" width="22" height="22" fill="#0067cd">
                            <path d="M12 11.5A4.5 4.5 0 1 1 16.5 7a4.51 4.51 0 0 1-4.499 4.5H12zm0-8A3.5 3.5 0 1 0 15.5 7 3.5 3.5 0 0 0 12 3.5zm6 18a.5.5 0 0 1-.5-.5v-2a3.52 3.52 0 0 0-3.499-3.5H10A3.5 3.5 0 0 0 6.5 19v2a.5.5 0 0 1-1 0v-2a4.51 4.51 0 0 1 4.499-4.5H14a4.51 4.51 0 0 1 4.5 4.499V21a.5.5 0 0 1-.5.5z">
                            </path>
                        </svg>
                        <span class="text-login">
                            09182718639
                        </span>
                    </a>
                    <!-- show when user is registred  -->


                    <!-- modal -->
                    <div class="log-reg-modal d-none">
                        <div class="content-log-reg-modal">
                            <div class="top-modal-close-icon d-flex justify-content-end p-4">
                                <span class="close-modal ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="drdr-icon" width="25" height="25">
                                        <path d="M17 17.5h-.006a.47.47 0 0 1-.344-.15L12 12.71l-4.65 4.64a.495.495 0 0 1-.7-.7L11.29 12 6.65 7.35a.495.495 0 0 1 .7-.7L12 11.29l4.65-4.64a.495.495 0 0 1 .7.7L12.71 12l4.64 4.65a.48.48 0 0 1 .001.7.47.47 0 0 1-.344.15h-.006z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div class="modal-logo d-flex justify-content-center">
                                <a href="">
                                    <img src="{{ asset("app-assets/logos/benobe.svg") }}" alt="">
                                </a>
                            </div>
                            <div class="modal-header-title p-3 mt-3">
                                <h5 class="fw-bolder text-end">ورود به حساب کاربری</h5>
                                <span class="text-xs">
                                    برای استفاده از خدمات به نوبه، شماره موبایل خود را وارد کنید.
                                </span>
                            </div>
                            <div class="regestration-modal p-3">
                                <form action="#">
                                    <label for="phone" class="d-block">
                                        شماره موبایل <span class="px-1 text-danger">*</span>
                                    </label>
                                    <input dir="ltr" type="text" placeholder="09*********" name="phone" id="phone" class="form-control mt-3">
                                    <button class="btn btn-lg disabled w-100 mt-4">دریافت کد تایید</button>
                                    <!-- show when enter phone nuber -->
                                    <button class="btn btn-lg btn-primary w-100 mt-4 d-none">دریافت کد
                                        تایید
                                    </button>
                                    <!-- show when enter phone nuber -->
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- modal -->
                </div>
            </div>
            <div class="nav-and-for-nurse-div-top-header d-flex justify-content-between align-items-center">
                <div class="top-nav-header">
                    <nav class="navbar navbar-expand-lg ">


                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="{{ route('search.expertise.index') }}">نوبت دهی <span class="sr-only"></span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('telemedicine.index') }}">مشاوره تلفنی</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('appointment.text-visit.index') }}">مشاوره متنی
                                        فوری</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" id="takhasos-open-show">تخصص ها
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="drdr-icon" width="22" height="22">
                                            <path d="M12 15.5h-.006a.47.47 0 0 1-.344-.15l-6-6a.495.495 0 0 1 .7-.7L12 14.29l5.65-5.64a.495.495 0 0 1 .7.7l-6 6a.47.47 0 0 1-.344.15H12z">
                                            </path>
                                        </svg>
                                    </a>
                                    <div class="takhasos p-3 d-none">
                                        <div class="t-container d-flex mt-2">
                                            <ul class="">
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص بیهوشی و مراقبت های ویژه
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اتاق عمل
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی پیوند اعضاء داخلی شکم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی قلب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی در جراحی مغز و اعصاب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مراقبت های ویژه پزشکی- ICU
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مراقبت های ویژه کودکان
                                                    </a></li>
                                                <li><a href="" class="dropdown-item">
                                                        متخصص پوست و مو
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای پوست
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص آسیب شناسی پوست
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص درماتو پاتولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص سوختگی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص گوارش و معده
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گوارش اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گوارش و کبد بالغین
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی پیوند اعضاء داخلی شکم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیوند کبد
                                                    </a></li>
                                            </ul>
                                            <ul class="">
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص استخوان و مفاصل
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارگونومی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارتوپدی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روماتولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روماتولوژی کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اختلالات کف لگن در زنان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارتوپدی کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی دست
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی ستون فقرات
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی زانو
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی شانه
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص روانشناسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانشناسی بالینی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانشناسی عمومی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مددکاری اجتماعی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مشاوره
                                                    </a></li>
                                                <li><a href="" class="">
                                                        متخصص روانشناسی وآموزش کودکان استثنایی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانشناسی نظامی
                                                    </a></li>
                                            </ul>
                                            <ul class="">
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص خون، سرطان و آنکولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص تکنولوژی پرتودرمانی- رادیوتراپی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص خون شناسی آزمایشگاهی و بانک خون
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پرتودرمانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص هماتولوژی آزمایشگاهی و بانک خون
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص خون و سرطان اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص خون و سرطان بالغین
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اروانکولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص انکولوژی زنان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص انکولوژی دهان و فک و صورت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیوند کلیه و اوروانکولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی سرطان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص سرطانهای دستگاه ادراری- تناسلی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص گوش، حلق و بینی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص شنوایی شناسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گوش و حلق و بینی و جراحی سر و گردن
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اتولوژی و نورواتولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص رینولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص لارینگولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص کاشت حلزون
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="t-container-2 d-flex mt-2 d-none ">
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص ریه و دستگاه تنفسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای ریه
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ریه کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص کلیه و مجاری ادراری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی کلیه و مجاری ادراری تناسلی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص کلیه اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص نفرولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اروانکولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارولوژی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارولوژی ترمیمی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارولوژی زنان و زایمان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص آندویورولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیوند کلیه
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیوند کلیه و اوروانکولوژی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص مغز و اعصاب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای مغز و اعصاب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی مغز و اعصاب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص علوم اعصاب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مغز و اعصاب کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص استریوتاکسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی در جراحی مغز و اعصاب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماری صرع
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماری MS
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        پزشک عمومی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پزشکی ورزشی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پزشکی اجتماعی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پزشکی قانونی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پزشکی مولکولی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص تغذیه
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص علوم تغذیه
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص علوم و صنایع غذایی- کنترل کیفی و بهداشتی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت و ایمنی مواد غذایی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص علوم بهداشتی در تغذیه
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص علوم تغذیه در بحران و حوادث غیرمترقبه
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص سیاستهای غذا و تغذیه
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص زیبایی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی پلاستیک، ترمیمی و سوختگی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پروتزهای فک و صورت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص درمان بین رشته‌‌ای ترمیم‌های زیبایی مبتنی
                                                        بر
                                                        باندینگ
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص لیزر
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص آلرژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ایمونولوژی و آلرژی بالینی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص دیابت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص غدد درون ریز و متابولیسم
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="dropdown-item">
                                                        متخصص جراحی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پرستاری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی دهان و فک و صورت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی عمومی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی کلیه و مجاری ادراری تناسلی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی مغز و اعصاب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی پلاستیک، ترمیمی و سوختگی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی عروق
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی قفسه صدری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی قلب و عروق
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی در جراحی مغز و اعصاب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیشگیری و کنترل عفونت‌های بیمارستانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیوند کبد
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ترومای جراحی عمومی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی پستان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی پیشرفته- ا
                                                    </a></li>
                                                <li><a href="" class="dropdown-item">
                                                        متخصص طب سنتی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب سنتی ایرانی
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="t-container-3 d-flex mt-2 d-none">
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص چشم پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بینایی سنجی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص چشم پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص استرابیسم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اکولو پلاستیک
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای سطح چشم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای قرنیه و خارج چشمی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پاتولوژی چشم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص چشم اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص چشم پزشکی کودکان و انحراف چشم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص قرنیه- سگمان قدامی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گلوکوم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ویتره ورتین- سگمان خلفی
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص دهان و دندان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت دهان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پروتزهای دندانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص دندانپزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارتودانتیکس
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اندودانتیکس
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای دهان وفک و صورت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پاتولوژی دهان و فک-
                                                        آسیب شناسی دهان و دندان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پریودانتیکس
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی دهان و فک و صورت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص دندانپزشکی ترمیمی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص دندانپزشکی کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص رادیولوژی دهان و فک و صورت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص سلامت دهان و دندانپزشکی اجتماعی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مواد دندانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارتو سرجری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص انکولوژی دهان و فک و صورت
                                                    </a></li>
                                            </ul>
                                            <ul class="">
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص آزمایشگاه و تصویربرداری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص تکنولوژی پرتوشناسی- رادیولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص تکنولوژی پزشکی هسته ای
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص علوم آزمایشگاهی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص تکنولوژی پرتودرمانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص خون شناسی آزمایشگاهی و بانک خون
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص رادیوبیولوژی و حفاظت پرتویی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ژنتیک انسانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص فناوری تصویربرداری پزشکی- MRI
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص فناوری تصویربرداری پزشکی- سیتی اسکن
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص میکروبشناسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پاتولوژی دهان و فک-
                                                        <br>
                                                        آسیب شناسی دهان و دندان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پزشکی هسته ای
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص رادیولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص رادیولوژی دهان و فک و صورت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ژنتیک پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص میکروبشناسی پزشکی
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="t-container-4 d-flex mt-2 d-none">
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص ژنتیک
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ژنتیک انسانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ژنتیک پزشکی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص طب اورژانس
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص سم شناسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص سم شناسی بالینی و مسمومیتها
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص طب تسکینی و درد
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پرستاری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پرستاری توانبخشی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب اورژانس
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص درد
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص دردهای مزمن دهانی- صورتی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب تسکینی
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص عفونی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای عفونی و گرمسیری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص عفونی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص عفونی بالغین
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص HIV/AIDS بالینی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای عفونی در بیماران مبتلا به نقص
                                                        ایمنی و
                                                        پیوند
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیشگیری و کنترل عفونت‌های بیمارستانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص غدد و متابولیسم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص غدد درون ریز و متابولیسم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص غدد درون ریز و متابولیسم کودکا
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص قلب و عروق
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای قلب و عروق
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی عروق
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی قلب و عروق
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص قلب اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اقدامات مداخله‌ای قلب بزرگسال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اقدامات مداخله‌ای قلب و عروق کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اکو کاردیوگرافی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اینترونشنال کاردیولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اینترونشنال کاردیولوژی درکودکان ونوجوانان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای مادرزادی قلب در بالغین
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی قلب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیس میکرو اینترونشنال- الکتروفیزیولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص نارسایی قلب
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="t-container-5 d-flex mt-2 d-none ">
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص اطفال، کودکان و نوزادان
                                                    </a></li>
                                                <li><a href="" class="">
                                                        متخصص روانشناسی وآموزش کودکان استثنایی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت مادر و کودک
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص دندانپزشکی کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص خون و سرطان اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی کودک و نوجوان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روماتولوژی کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ریه کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب نوزادی و پیرامون تولد
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص عفونی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص غدد درون ریز و متابولیسم کودکان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص قلب اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص کلیه اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گوارش اطفال
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        سایر
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت حرفه ای
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت عمومی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مدارک پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص علوم اجتماعی- خدمات اجتماعی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص علوم و صنایع غذایی- کنترل کیفی و بهداشتی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص فناوری اطلاعات سلامت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گفتار درمانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مدیریت خدمات بهداشتی درمانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مهندسی پزشکی بالینی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اپیدمیولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اخلاق پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص انگل شناسی پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ایمنی شناسی پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص آمار زیستی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص آموزش بهداشت
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص آموزش پزشکی
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص زنان، زایمان و نازایی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مامایی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مشاوره در مامایی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت مادر و کودک
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص زنان و زایمان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت باروری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اختلالات کف لگن در زنان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ارولوژی زنان و زایمان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص انکولوژی زنان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پریناتولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراحی درون بین زنان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب مادر و جنین
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ناباروری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص نازایی- IVF
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="t-container-6 d-flex mt-2 d-none ">
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص توانبخشی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اعضای مصنوعی و وسایل کمکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص شنوایی شناسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص فیزیوتراپی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص کاردرمانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گفتار درمانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اعضاء مصنوعی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پرستاری توانبخشی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص فیزیک پزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص فیزیوتراپی ورزشی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص فیزیولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص کار درمانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گفتاردرمانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص مدیریت توانبخشی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب سالمندی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب فیزیکی و توانبخشی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب کار
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص داروسازی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص داروسازی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص داروسازی بالینی- کلینیکال فارماسی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص روانپزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت روان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روان پرستاری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی کودک و نوجوان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی نظامی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب خواب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب روان تنی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص سلامت جنسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص سلامت جنسی
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص داخلی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای داخلی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیهوشی پیوند اعضاء داخلی شکم
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیوند کبد
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص کرونا ویروس
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای داخلی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای عفونی و گرمسیری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص گوش و حلق و بینی و جراحی سر و گردن
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص ایمونولوژی و آلرژی بالینی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص عفونی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص عفونی بالغین
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص اتولوژی و نورواتولوژی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بیماریهای عفونی در بیماران مبتلا به نقص
                                                        ایمنی و
                                                        پیوند
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص پیشگیری و کنترل عفونت‌های بیمارستانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص لارینگولوژی
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="t-container-7 d-flex mt-2 d-none ">
                                            <ul>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص داروسازی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص داروسازی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص داروسازی بالینی- کلینیکال فارماسی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص روانپزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص بهداشت روان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روان پرستاری
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی اطفال
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی کودک و نوجوان
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص روانپزشکی نظامی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب خواب
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص طب روان تنی
                                                    </a></li>
                                                <li><a href="" class="fw-bolder fs-6">
                                                        متخصص سلامت جنسی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص سلامت جنسی
                                                    </a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="" class="dropdown-item">
                                                        تخصص های پر کاربرد
                                                    </a></li>
                                                <li><a href="">
                                                        جراح بینی
                                                    </a></li>
                                                <li><a href="">
                                                        جراح زیبایی چشم
                                                    </a></li>
                                                <li><a href="">
                                                        پزشک کاشت مو
                                                    </a></li>
                                                <li><a href="">
                                                        پزشک کاشت مژه
                                                    </a></li>
                                                <li><a href="">
                                                        پزشک کاشت ابرو
                                                    </a></li>
                                                <li><a href="">
                                                        جراح زیبایی زنان
                                                    </a></li>
                                                <li><a href="">
                                                        جراح زیبایی واژن
                                                    </a></li>
                                                <li><a href="">
                                                        پزشک زیبایی دندان
                                                    </a></li>
                                                <li><a href="">
                                                        جراح زیبایی ابرو
                                                    </a></li>
                                                <li><a href="">
                                                        جراح زیبایی پیشانی
                                                    </a></li>
                                                <li><a href="">
                                                        متخصص جراح خال
                                                    </a></li>
                                                <li><a href="">
                                                        پزشک تزریق چربی
                                                    </a></li>
                                                <li><a href="">
                                                        جراح لیپوساکشن
                                                    </a></li>
                                                <li><a href="">
                                                        دکتر تزریق بوتاکس
                                                    </a></li>
                                                <li><a href="">
                                                        دکتر جراح لیزر
                                                    </a></li>
                                                <li><a href="">
                                                        دکتر جراح ژنیکوماستی
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="prev-mega-menu ">
                                            <button class="btn  bg-gray shadow-lg rounded-circle z-3">
                                                <img width="18" height="18" src="{{ asset("app-assets/icons/chevron-right.png") }}" alt="chevron-right" />
                                            </button>
                                        </div>
                                        <div class="next-mega-menu ">
                                            <button class="btn  bg-gray shadow-lg rounded-circle z-3 ">
                                                <img width="18" height="18" src="{{ asset("app-assets/icons/chevron-left.png") }}" alt="chevron-left" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('medical-centers.index') }}">مراکز درمانی</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#"> مجله سلامت</a>
                                </li>
                                <li class="nav-item d-none">
                                    <a class="nav-link text-success-10 fs-6" href="{{ route('landing.doctors-membership.index') }}"> برای پزشکان </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="for-nurses-top-header">
                    <a href="{{ route('landing.doctors-membership.index') }}" class="text-decoration-none text-success-10 fs-6">برای پزشکان</a>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-tog-show d-none">
        <div class="nav-tog-show-items text-black">
            <div class="top-nav-tog px-3">
                <div class="top-nav-tog-logo">
                    <a href="">
                        <img src="{{ asset("app-assets/logos/benobe.svg") }}" alt="benobe-logo">
                    </a>
                </div>
                <div class="top-nav-tog-close-icon">
                    <img src="{{ asset("app-assets/images/cross-icon.svg") }}" alt="cross-icon" srcset="">
                </div>
            </div>
            <div class="nav-tog-regestraion-btn d-flex justify-content-center">
                <a href="#" class="btn btn-lg w-75 btn-reg-log fs-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0067cd" viewBox="0 0 24 24" class="" width="25" height="25">
                        <path d="M12 11.5A4.5 4.5 0 1 1 16.5 7a4.51 4.51 0 0 1-4.499 4.5H12zm0-8A3.5 3.5 0 1 0 15.5 7 3.5 3.5 0 0 0 12 3.5zm6 18a.5.5 0 0 1-.5-.5v-2a3.52 3.52 0 0 0-3.499-3.5H10A3.5 3.5 0 0 0 6.5 19v2a.5.5 0 0 1-1 0v-2a4.51 4.51 0 0 1 4.499-4.5H14a4.51 4.51 0 0 1 4.5 4.499V21a.5.5 0 0 1-.5.5z" class="color">
                        </path>
                    </svg>
                    ورود / عضویت
                </a>
            </div>
            <div class="nav-tog-list-items">
                <div class="nav-tog-list-content">
                    <ul>
                        <li><a href="{{ route('search.expertise.index')}}" class="text-dark">
                                نوبت دهی
                            </a></li>
                        <li><a href="{{ route('telemedicine.index') }}" class="text-dark">
                                مشاوره تلفنی
                            </a></li>
                        <li class="li-t-ts">
                            <a href="#" class="text-primary t-ts">
                                تخصص ها
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="drdr-icon" width="22" height="22">
                                    <path d="M12 15.5h-.006a.47.47 0 0 1-.344-.15l-6-6a.495.495 0 0 1 .7-.7L12 14.29l5.65-5.64a.495.495 0 0 1 .7.7l-6 6a.47.47 0 0 1-.344.15H12z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li class="tl-ts d-none">
                            <a href="#" class="text-primary px-2">
                                لیست تخصص ها
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="drdr-icon" width="22" height="22">
                                    <path d="M12 15.5h-.006a.47.47 0 0 1-.344-.15l-6-6a.495.495 0 0 1 .7-.7L12 14.29l5.65-5.64a.495.495 0 0 1 .7.7l-6 6a.47.47 0 0 1-.344.15H12z">
                                    </path>
                                </svg>
                            </a>
                            <div class="tog-show-t-all d-none">
                                <ul class="px-0">
                                    <li><a href="#">
                                            زنان و زایمان
                                        </a></li>
                                    <li><a href="#">
                                            پزشک عمومی
                                        </a></li>
                                    <li><a href="#">
                                            اطفال
                                        </a></li>
                                    <li><a href="#">
                                            جراحی
                                        </a></li>
                                    <li><a href="#">
                                            داخلی
                                        </a></li>
                                    <li><a href="#">
                                            قلب و عروق
                                        </a></li>
                                    <li><a href="#">
                                            رادیولوژی و
                                            تصویربرداری
                                        </a></li>
                                    <li><a href="#">
                                            چشم
                                        </a></li>
                                    <li><a href="#">
                                            دندانپزشکی
                                        </a></li>
                                    <li><a href="#">
                                            گوش، حلق و بینی
                                        </a></li>
                                    <li><a href="#">
                                            روانپزشکی
                                        </a></li>
                                    <li><a href="#">
                                            (اعصاب و روان)
                                        </a></li>
                                    <li><a href="#">
                                            ارتوپدی
                                        </a></li>
                                    <li><a href="#">
                                            فیزیوتراپی، طب
                                        </a></li>
                                    <li><a href="#">
                                            فیزیکی و توانبخشی
                                        </a></li>
                                    <li><a href="#">
                                            مغز و اعصاب
                                            (نورولوژی)
                                        </a></li>
                                    <li><a href="#">
                                            پوست مو و زیبایی
                                        </a></li>
                                    <li><a href="#">
                                            بیهوشی
                                        </a></li>
                                    <li><a href="#">
                                            کلیه، مجاری
                                        </a></li>
                                    <li><a href="#">
                                            ادراری و تناسلی - اورولوژی
                                        </a></li>
                                    <li><a href="#">
                                            عفونی
                                        </a></li>
                                    <li><a href="#">
                                            جراحی مغز و اعصاب
                                        </a></li>
                                    <li><a href="#">
                                            روانشناسی
                                        </a></li>
                                    <li><a href="#">
                                            گوارش و کبد
                                        </a></li>
                                    <li><a href="#">
                                            روماتولوژی
                                        </a></li>
                                    <li><a href="#">
                                            غدد و متابولیسم
                                        </a></li>
                                    <li><a href="#">
                                            جراحی پلاستیک
                                        </a></li>
                                    <li><a href="#">
                                            تغذیه و رژیم
                                        </a></li>
                                    <li><a href="#">
                                            ریه
                                        </a></li>
                                    <li><a href="#">
                                            کلیه (نفرولوژی)
                                        </a></li>
                                    <li><a href="#">
                                            خون و سرطان
                                        </a></li>
                                    <li><a href="#">
                                            پرتودرمانی
                                        </a></li>
                                    <li><a href="#">
                                            ایمونولوژی، آسم و آلرژی
                                        </a></li>
                                    <li><a href="#">
                                            ( آسیب شناسی پاتولوژی)
                                        </a></li>
                                    <li><a href="#">
                                            طب سنتی
                                        </a></li>
                                    <li><a href="#">
                                            ژنتیک
                                        </a></li>
                                    <li><a href="#">
                                            دامپزشکی
                                        </a></li>
                                    <li><a href="#">
                                            علوم آزمایشگاهی
                                        </a></li>
                                    <li><a href="#">
                                            طب کار
                                        </a></li>
                                    <li><a href="#">
                                            پزشکی ورزشی
                                        </a></li>
                                    <li><a href="#">
                                            طب اورژانس
                                        </a></li>
                                    <li><a href="#">
                                            سالمندان
                                        </a></li>
                                    <li><a href="#">
                                            پزشکی هسته‌ای
                                        </a></li>
                                    <li><a href="#">
                                            داروسازی
                                        </a></li>
                                    <li><a href="#">
                                            پزشکی خانواده
                                        </a></li>
                                    <li><a href="#">
                                            پزشکی قانونی
                                        </a></li>
                                    <li><a href="#">
                                            پزشکی اجتماعی
                                        </a></li>
                                    <li><a href="#">
                                            طب هوا و فضا
                                        </a></li>
                                    <li><a href="#">
                                            نازایی وناباروری
                                        </a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#" class="text-dark">
                                مراکز درمانی
                            </a></li>
                        <li><a href="#" class="text-dark">
                                خدمات پزشکی در محل
                            </a></li>
                        <li><a href="#" class="text-dark">
                                مشاوره متنی فوری
                            </a></li>
                        <li><a href="#" class="text-dark">
                                مجله سلامت
                            </a></li>
                        <li><a href="#" class="text-success">
                                برای پزشکان
                            </a></li>
                        <li>
                            <a href="#"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav-tog-poshtibani d-flex justify-content-between px-3">
                <div class="poshtibani-text-tog-show">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="drdr-icon" width="24" height="24">
                        <path d="M6 19.5A2.5 2.5 0 0 1 3.5 17v-2a2.5 2.5 0 1 1 5 0v2A2.5 2.5 0 0 1 6 19.5zm0-6A1.5 1.5 0 0 0 4.5 15v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 6 13.5zm12 6a2.5 2.5 0 0 1-2.5-2.5v-2a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 0 1-2.5 2.5zm0-6a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 3 0v-2a1.5 1.5 0 0 0-1.5-1.5z">
                        </path>
                        <path d="M20 15.5a.5.5 0 0 1-.5-.5v-3A7.5 7.5 0 0 0 6.7 6.7a7.407 7.407 0 0 0-2.2 5.278v.024-.001 3a.5.5 0 0 1-1 0v-3a8.5 8.5 0 0 1 14.5-6 8.395 8.395 0 0 1 2.49 5.978v.024-.001 3a.5.5 0 0 1-.489.5H20zm-8 7a.5.5 0 0 1 0-1l.159.001a9.258 9.258 0 0 0 3.899-.855l-.057.024c1-.47 1.5-1.08 1.5-1.67a.5.5 0 0 1 1 0 3.089 3.089 0 0 1-1.979 2.563l-.021.007a10.11 10.11 0 0 1-4.512.929h.012z">
                        </path>
                    </svg>
                    پشتیبانی
                </div>
                <div class="phone-poshtibani-tog-show">
                    021-872356
                </div>
            </div>
            <div class="tog-show-socials d-flex justify-content-between px-3 py-3">
                <a href="#" class="text-decoration-none text-danger"><span class="fab fa-instagram fs-2 px-2"></span></a>
                <a href="#" class="text-decoration-none text-primary"><span class="fab fa-telegram fs-2 px-2"></span></a>
                <a href="#" class="text-decoration-none text-info"><span class="fab fa-linkedin fs-2 px-2"></span></a>
            </div>
        </div>
    </div>
    <div class="top-header-991  px-3">
        <div class="nav-toggle-992">
            <span class="navbar-toggler" id="nv-t-sh-tog">
                <img src="{{ asset("app-assets/images/menu.svg") }}" alt="menu" srcset="">
            </span>
        </div>

        <div class="top-center-logo-header">
            <a href="">
                <img src="{{ asset("app-assets/logos/benobe.svg") }}" alt="benobeh-logo" class="logo">
            </a>
        </div>
        <div class="top-left-regestration-header">
            <a href="#" class="btn-reg-log btn btn-sm open-log-reg-modal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#0067cd" viewBox="0 0 24 24" class="" width="32" height="32">
                    <path d="M12 11.5A4.5 4.5 0 1 1 16.5 7a4.51 4.51 0 0 1-4.499 4.5H12zm0-8A3.5 3.5 0 1 0 15.5 7 3.5 3.5 0 0 0 12 3.5zm6 18a.5.5 0 0 1-.5-.5v-2a3.52 3.52 0 0 0-3.499-3.5H10A3.5 3.5 0 0 0 6.5 19v2a.5.5 0 0 1-1 0v-2a4.51 4.51 0 0 1 4.499-4.5H14a4.51 4.51 0 0 1 4.5 4.499V21a.5.5 0 0 1-.5.5z" class="color">
                    </path>
                </svg>
                <span class="text-login">
                    ورود
                </span>
            </a>
            <!-- modal -->
            <div class="log-reg-modal d-none">
                <div class="content-log-reg-modal">
                    <div class="top-modal-close-icon d-flex justify-content-end p-4">
                        <span class="close-modal ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="drdr-icon" width="25" height="25">
                                <path d="M17 17.5h-.006a.47.47 0 0 1-.344-.15L12 12.71l-4.65 4.64a.495.495 0 0 1-.7-.7L11.29 12 6.65 7.35a.495.495 0 0 1 .7-.7L12 11.29l4.65-4.64a.495.495 0 0 1 .7.7L12.71 12l4.64 4.65a.48.48 0 0 1 .001.7.47.47 0 0 1-.344.15h-.006z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div class="modal-logo d-flex justify-content-center">
                        <a href="">
                            <img src="{{ asset("app-assets/logos/benobe.svg") }}" alt="benobeh-logo">

                        </a>
                    </div>
                    <div class="modal-header-title p-3 mt-3">
                        <h5 class="fw-bolder text-end">ورود به حساب کاربری</h5>
                        <span class="text-xs">
                            برای استفاده از خدمات به نوبه، شماره موبایل خود را وارد کنید.
                        </span>
                    </div>
                    <div class="regestration-modal p-3">
                        <form action="#">
                            <label for="phone" class="d-block">
                                شماره موبایل <span class="px-1 text-danger">*</span>
                            </label>
                            <input dir="ltr" type="text" placeholder="09*********" name="phone" class="form-control mt-3">
                            <button class="btn btn-lg disabled w-100 mt-4">دریافت کد تایید</button>
                            <!-- show when enter phone nuber -->
                            <button class="btn btn-lg btn-primary w-100 mt-4 d-none">دریافت کد
                                تایید
                            </button>
                            <!-- show when enter phone nuber -->
                        </form>
                    </div>
                </div>
            </div>
            <!-- modal -->
        </div>
    </div>
</header>
