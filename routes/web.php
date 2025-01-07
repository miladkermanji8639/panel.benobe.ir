<?php
use Mockery\Container;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\layouts\Blank;
use App\Http\Controllers\Admin\layouts\Fluid;
use App\Http\Controllers\Dr\Auth\LoginController;
use App\Http\Controllers\Admin\layouts\Horizontal;
use App\Http\Controllers\Admin\Dashboard\Dashboard;
use App\Http\Controllers\Admin\layouts\WithoutMenu;
use App\Http\Controllers\Dr\Panel\DrPanelController;
use App\Http\Controllers\Admin\Agent\AgentController;
use App\Http\Controllers\Admin\layouts\CollapsedMenu;
use App\Http\Controllers\Admin\layouts\ContentNavbar;
use App\Http\Controllers\Admin\layouts\WithoutNavbar;
use App\Http\Controllers\Admin\Tools\ToolsController;
use App\Http\Controllers\Dr\Panel\Bime\DRBimeController;
use App\Http\Controllers\Admin\layouts\ContentNavSidebar;
use App\Http\Controllers\Admin\Authentications\LoginBasic;
use App\Http\Controllers\Admin\Authentications\LoginCover;
use App\Http\Controllers\Admin\Ads\Banner\BannerController;
use App\Http\Controllers\Admin\Agent\AgentWalletController;
use App\Http\Controllers\Admin\language\LanguageController;
use App\Http\Controllers\Dr\Panel\Tickets\TicketsController;
use App\Http\Controllers\Dr\Panel\Turn\DrScheduleController;
use App\Http\Controllers\Secretary\Auth\SecretaryController;
use App\Http\Controllers\Admin\Authentications\RegisterBasic;
use App\Http\Controllers\Admin\Authentications\RegisterCover;
use App\Http\Controllers\Admin\Authentications\TwoStepsBasic;
use App\Http\Controllers\Admin\Authentications\TwoStepsCover;
use App\Http\Controllers\Admin\Dashboard\Amar\AmarController;
use App\Http\Controllers\Admin\Dashboard\Menu\MenuController;
use App\Http\Controllers\Dr\Panel\Profile\DrProfileController;
use App\Http\Controllers\Admin\Tools\SiteMap\SiteMapController;
use App\Http\Controllers\Admin\Authentications\VerifyEmailBasic;
use App\Http\Controllers\Admin\Authentications\VerifyEmailCover;
use App\Http\Controllers\Dr\Turn\Schedule\AppointmentController;
use App\Http\Controllers\Admin\Application\ApplicationController;
use App\Http\Controllers\Admin\Dashboard\Cities\CitiesController;
use App\Http\Controllers\Admin\Tools\Redirect\RedirectController;
use App\Http\Controllers\Admin\Ads\Banner\AdsLog\AdsLogController;
use App\Http\Controllers\Admin\Authentications\RegisterMultiSteps;
use App\Http\Controllers\Admin\Authentications\ResetPasswordBasic;
use App\Http\Controllers\Admin\Authentications\ResetPasswordCover;
use App\Http\Controllers\Dr\Panel\Payment\Wallet\WalletController;
use App\Http\Controllers\Admin\Authentications\ForgotPasswordCover;
use App\Http\Controllers\Admin\Dashboard\Holiday\HolidayController;
use App\Http\Controllers\Admin\dashboard\Setting\SettingController;
use App\Http\Controllers\Admin\UsersManagement\Auth\AuthController;
use App\Http\Controllers\Admin\ContentManagement\Blog\BlogController;
use App\Http\Controllers\Admin\ContentManagement\Tags\TagsController;
use App\Http\Controllers\Admin\Dashboard\HomePage\HomePageController;
use App\Http\Controllers\Admin\Doctors\Moshavere\MoshavereController;
use App\Http\Controllers\Admin\Questions\Question\QuestionController;
use App\Http\Controllers\Admin\Tools\NewsLatter\NewsLatterController;
use App\Http\Controllers\Admin\UsersManagement\Users\UsersController;
use App\Http\Controllers\Admin\Ads\Banner\Packages\PackagesController;
use App\Http\Controllers\Admin\ContentManagement\Links\LinksController;
use App\Http\Controllers\Admin\ContentManagement\Slide\SlideController;
use App\Http\Controllers\Admin\Dashboard\Specialty\SpecialtyController;
use App\Http\Controllers\Admin\Doctors\LogsDoctor\LogsDoctorController;
use App\Http\Controllers\Admin\Doctors\OrderVisit\OrderVisitController;
use App\Http\Controllers\Dr\Panel\MyPerformance\MyPerformanceController;
use App\Http\Controllers\Admin\Tools\MailTemplate\MailTemplateController;
use App\Http\Controllers\Dr\Panel\PatientRecords\PatientRecordsController;
use App\Http\Controllers\Dr\Panel\Secretary\SecretaryManagementController;
use App\Http\Controllers\Admin\Dashboard\UserShipfee\UserShipfeeController;
use App\Http\Controllers\Admin\Questions\QuestionCat\QuestionCatController;
use App\Http\Controllers\Admin\ContentManagement\Comments\CommentController;
use App\Http\Controllers\Admin\Doctors\CommentDoctor\CommentDoctorController;
use App\Http\Controllers\Admin\Doctors\DoctorsManagement\Bime\BimeController;
use App\Http\Controllers\Admin\Hospitals\LogsHospital\LogsHospitalController;
use App\Http\Controllers\Admin\UsersManagement\UserGroup\UserGroupController;
use App\Http\Controllers\Dr\Panel\Payment\Setting\DrPaymentSettingController;
use App\Http\Controllers\Admin\ContentManagement\HomeVideo\HomeVideoController;
use App\Http\Controllers\Admin\Dashboard\Membershipfee\MembershipfeeController;
use App\Http\Controllers\Dr\Panel\Turn\TurnsCatByDays\TurnsCatByDaysController;
use App\Http\Controllers\Admin\ContentManagement\FrontPages\FrontPagesController;
use App\Http\Controllers\Admin\UsersManagement\LogsUpgrade\LogsUpgradeController;
use App\Http\Controllers\Dr\Panel\NoskheElectronic\Providers\ProvidersController;
use App\Http\Controllers\Dr\Panel\Activation\Consult\Rules\ConsultRulesController;
use App\Http\Controllers\Dr\Panel\DoctorsClinic\DoctorsClinicManagementController;
use App\Http\Controllers\Dr\Panel\Turn\Schedule\ManualNobat\ManualNobatController;
use App\Http\Controllers\Admin\Dashboard\PaymentGateways\PaymentGatewaysController;
use App\Http\Controllers\Admin\Doctors\DoctorsManagement\Gallery\GalleryController;
use App\Http\Controllers\Admin\ContentManagement\CategoryBlog\CategoryBlogController;
use App\Http\Controllers\Admin\Doctors\DoctorsManagement\DoctorsManagementController;
use App\Http\Controllers\Admin\UsersManagement\ChargeAccount\ChargeAccountController;
use App\Http\Controllers\Dr\Panel\NoskheElectronic\Favorite\Service\ServiceController;
use App\Http\Controllers\Dr\Panel\NoskheElectronic\Prescription\PrescriptionController;
use App\Http\Controllers\Admin\Doctors\WalletDoctorRequest\WalletDoctorRequestController;
use App\Http\Controllers\Dr\Panel\Turn\Schedule\ScheduleSetting\ScheduleSettingController;
use App\Http\Controllers\Admin\Hospitals\HospitalsManagement\HospitalsManagementController;
use App\Http\Controllers\Dr\Panel\Turn\Schedule\MoshavereWaiting\MoshavereWaitingController;
use App\Http\Controllers\Admin\UsersManagement\MembershipfeeLogs\MembershipfeeLogsController;
use App\Http\Controllers\Dr\Panel\DoctorsClinic\Activation\ActivationDoctorsClinicController;
use App\Http\Controllers\Dr\Panel\Turn\Schedule\Counseling\ConsultTerm\ConsultTermController;
use App\Http\Controllers\Admin\Hospitals\WalletHospitalRequest\WalletHospitalRequestController;
use App\Http\Controllers\Admin\UsersManagement\WalletCheckoutUser\WalletCheckoutUserController;
use App\Http\Controllers\Dr\Panel\NoskheElectronic\Favorite\Templates\FavoriteTemplatesController;
use App\Http\Controllers\Admin\UsersManagement\WalletCheckoutMonshi\WalletCheckoutMonshiController;
use App\Http\Controllers\Admin\Doctors\DoctorsManagement\MoshavereSetting\MoshavereSettingController;
use App\Http\Controllers\Admin\Doctors\DoctorsManagement\NobatdehiSetting\NobatdehiSettingController;
use App\Http\Controllers\Admin\Hospitals\HospitalsManagement\DoctorsOfHospital\DoctorsOfHospitalController;
use App\Http\Controllers\Dr\Panel\Turn\Schedule\MoshavereSetting\MoshavereSettingController as DrMoshavereSettingController;
//manager login routes
/* login manager routes */
Route::prefix('admin/auth')->group(function () {
  Route::get('login-basic', [LoginBasic::class, 'index'])->name('auth-login-basic');
  Route::post('login-basic', [LoginBasic::class, 'login'])->name('auth-login-basic-signin');
  Route::get('logout-basic', [LoginBasic::class, 'logout'])->name('auth-logout-basic');
  Route::get('login-cover', [LoginCover::class, 'index'])->name('auth-login-cover');
  Route::get('register-basic', [RegisterBasic::class, 'index'])->name('auth-register-basic');
  Route::get('register-cover', [RegisterCover::class, 'index'])->name('auth-register-cover');
  Route::get('register-multisteps', [RegisterMultiSteps::class, 'index'])->name('auth-register-multisteps');
  Route::get('verify-email-basic', [VerifyEmailBasic::class, 'index'])->name('auth-verify-email-basic');
  Route::get('verify-email-cover', [VerifyEmailCover::class, 'index'])->name('auth-verify-email-cover');
  Route::get('reset-password-basic', [ResetPasswordBasic::class, 'index'])->name('auth-reset-password-basic');
  Route::get('reset-password-cover', [ResetPasswordCover::class, 'index'])->name('auth-reset-password-cover');
  Route::get('forgot-password-cover', [ForgotPasswordCover::class, 'index'])->name('auth-forgot-password-cover');
  Route::get('two-steps-basic', [TwoStepsBasic::class, 'index'])->name('auth-two-steps-basic');
  Route::get('two-steps-cover', [TwoStepsCover::class, 'index'])->name('auth-two-steps-cover');
});
/* end login manager routes */
//  manager  routes
Route::prefix('admin')
  ->namespace('Admin')
  ->middleware('manager')
  ->group(function () {
    // Main Page Route
    Route::get('/', [Dashboard::class, 'index'])->name('admin.index');
    Route::prefix('dashboard/')->group(function () {
      Route::prefix('cities/')->group(function () {
        Route::get('/', [CitiesController::class, 'index'])->name('admin.Dashboard.cities.index');
        Route::get('/search', [CitiesController::class, 'searchZone'])->name('admin.Dashboard.cities.search-zone');
        Route::get('/search-city', [CitiesController::class, 'searchZoneCity'])->name('admin.Dashboard.cities.search-zone-city');
        Route::get('/create', [CitiesController::class, 'create'])->name('admin.Dashboard.cities.create');
        Route::post('/store', [CitiesController::class, 'store'])->name('admin.Dashboard.cities.store');
        Route::post('/store-city', [CitiesController::class, 'storeCity'])->name('admin.Dashboard.cities.store-city');
        Route::get('/create-city', [CitiesController::class, 'createCity'])->name('admin.Dashboard.cities.create-city');
        Route::get('/edit/{id}', [CitiesController::class, 'edit'])->name('admin.Dashboard.cities.edit');
        Route::post('/update/{id}', [CitiesController::class, 'update'])->name('admin.Dashboard.cities.update');
        Route::get('/status/{zone}', [CitiesController::class, 'status'])->name('admin.Dashboard.cities.status');
        Route::get('/status-city/{zone}', [CitiesController::class, 'statusCity'])->name('admin.Dashboard.cities.status-city');
        Route::post('/update-city/{id}', [CitiesController::class, 'updateCity'])->name('admin.Dashboard.cities.update-city');
        Route::delete('/delete/{id}', [CitiesController::class, 'destroy'])->name('admin.Dashboard.cities.delete');
        Route::delete('/delete-city/{id}', [CitiesController::class, 'destroyCity'])->name('admin.Dashboard.cities.delete-city');
        Route::get('/edit-city/{id}', [CitiesController::class, 'editCity'])->name('admin.Dashboard.cities.edit-city');
        Route::get('/show/{id}', [CitiesController::class, 'show'])->name('admin.Dashboard.cities.show');
      });
      Route::prefix('specialty/')->group(function () {
        Route::get('/', [SpecialtyController::class, 'index'])->name('admin.Dashboard.specialty.index');
        Route::get('/create-specialty', [SpecialtyController::class, 'createSpecialty'])->name('admin.Dashboard.specialty.create-specialty');
        Route::get('/create', [SpecialtyController::class, 'create'])->name('admin.Dashboard.specialty.create');
        Route::post('/store', [SpecialtyController::class, 'store'])->name('admin.Dashboard.specialty.store');
        Route::post('/store-specialty', [SpecialtyController::class, 'storeSpecialty'])->name('admin.Dashboard.specialty.store-specialty');
        Route::get('/edit/{id}', [SpecialtyController::class, 'edit'])->name('admin.Dashboard.specialty.edit');
        Route::get('/edit-specialty/{id}', [SpecialtyController::class, 'editSpecialty'])->name('admin.Dashboard.specialty.edit-specialty');
        Route::post('/update-specialty/{id}', [SpecialtyController::class, 'updateSpecialty'])->name('admin.Dashboard.specialty.update-specialty');
        Route::post('/update/{id}', [SpecialtyController::class, 'update'])->name('admin.Dashboard.specialty.update');
        Route::get('/show/{id}', [SpecialtyController::class, 'show'])->name('admin.Dashboard.specialty.show');
        Route::get('/status/{specialty}', [SpecialtyController::class, 'status'])->name('admin.Dashboard.specialty.status');
        Route::get('/status-specialty/{specialty}', [SpecialtyController::class, 'statusSpecialty'])->name('admin.Dashboard.specialty.status-specialty');
        Route::get('/search-specialty', [SpecialtyController::class, 'searchSpecialty'])->name('admin.Dashboard.specialty.search-specialty');
        Route::delete('/delete/{id}', [SpecialtyController::class, 'destroy'])->name('admin.Dashboard.specialty.delete');
        Route::delete('/delete-specialty/{id}', [SpecialtyController::class, 'destroySpecialty'])->name('admin.Dashboard.specialty.delete-specialty');
      });
      Route::prefix('membershipfee/')->group(function () {
        Route::get('/', [MembershipfeeController::class, 'index'])->name('admin.Dashboard.membershipfee.index');
        Route::get('/create', [MembershipfeeController::class, 'create'])->name('admin.Dashboard.membershipfee.create');
        Route::get('/edit', [MembershipfeeController::class, 'edit'])->name('admin.Dashboard.membershipfee.edit');
      });
      Route::prefix('menu/')->group(function () {
        Route::get('/', [MenuController::class, 'index'])->name('admin.Dashboard.menu.index');
        Route::get('/create', [MenuController::class, 'create'])->name('admin.Dashboard.menu.create');
        Route::get('/edit', [MenuController::class, 'edit'])->name('admin.Dashboard.menu.edit');
      });
      Route::prefix('home_page/')->group(function () {
        Route::get('/', [HomePageController::class, 'index'])->name('admin.Dashboard.home_page.index');
        Route::get('/create', [HomePageController::class, 'create'])->name('admin.Dashboard.home_page.create');
        Route::get('/edit', [HomePageController::class, 'edit'])->name('admin.Dashboard.home_page.edit');
      });
      Route::prefix('holiday/')->group(function () {
        Route::get('/', [HolidayController::class, 'index'])->name('admin.Dashboard.holiday.index');
      });
      Route::prefix('usershipfee/')->group(function () {
        Route::get('/', [UserShipfeeController::class, 'index'])->name('admin.Dashboard.usershipfee.index');
        Route::get('/create', [UserShipfeeController::class, 'create'])->name('admin.Dashboard.usershipfee.create');
        Route::get('/edit', [UserShipfeeController::class, 'edit'])->name('admin.Dashboard.usershipfee.edit');
      });
      Route::prefix('amar/')->group(function () {
        Route::get('/', [AmarController::class, 'index'])->name('admin.Dashboard.amar.index');
      });
      Route::prefix('payment_gateways/')->group(function () {
        Route::get('/', [PaymentGatewaysController::class, 'index'])->name('admin.Dashboard.payment_gateways.index');
        Route::get('/edit', [PaymentGatewaysController::class, 'edit'])->name('admin.Dashboard.payment_gateways.edit');
      });
      Route::prefix('setting/')->group(function () {
        Route::get('/', [SettingController::class, 'index'])->name('admin.Dashboard.setting.index');
        Route::get('/change-logo', [SettingController::class, 'change_logo'])->name('admin.Dashboard.setting.change-logo');
      });
    });
    Route::prefix('agent/')->group(function () {
      Route::get('/', [AgentController::class, 'index'])->name('admin.agent.agent');
      Route::get('/agent-wallet', [AgentWalletController::class, 'index'])->name('admin.agent.agent-wallet');
      Route::get('/create', [AgentController::class, 'create'])->name('admin.agent.create');
    });
    Route::prefix('content-management/')->group(function () {
      Route::get('slide/', [SlideController::class, 'index'])->name('admin.content-management.slide.index');
      Route::get('slide/create', [SlideController::class, 'create'])->name('admin.content-management.slide.create');
      Route::get('slide/edit', [SlideController::class, 'edit'])->name('admin.content-management.slide.edit');
      Route::prefix('blog/')->group(function () {
        Route::get('/', [BlogController::class, 'index'])->name('admin.content-management.blog.index');
        Route::get('create', [BlogController::class, 'create'])->name('admin.content-management.blog.create');
        Route::get('edit', [BlogController::class, 'edit'])->name('admin.content-management.blog.edit');
      });
      Route::prefix('tags/')->group(function () {
        Route::get('/', [TagsController::class, 'index'])->name('admin.content-management.tags.index');
        Route::get('create', [TagsController::class, 'create'])->name('admin.content-management.tags.create');
        Route::get('edit', [TagsController::class, 'edit'])->name('admin.content-management.tags.edit');
      });
      Route::prefix('category-blog/')->group(function () {
        Route::get('/', [CategoryBlogController::class, 'index'])->name('admin.content-management.category-blog.index');
        Route::get('create', [CategoryBlogController::class, 'create'])->name('admin.content-management.category-blog.create');
        Route::get('edit', [CategoryBlogController::class, 'edit'])->name('admin.content-management.category-blog.edit');
      });
      Route::prefix('comments/')->group(function () {
        Route::get('/', [CommentController::class, 'index'])->name('admin.content-management.comments.index');
        Route::get('show', [CommentController::class, 'show'])->name('admin.content-management.comments.show');
      });
      Route::prefix('home-video/')->group(function () {
        Route::get('/', [HomeVideoController::class, 'index'])->name('admin.content-management.home-video.index');
        Route::get('create', [HomeVideoController::class, 'create'])->name('admin.content-management.home-video.create');
        Route::get('edit', [HomeVideoController::class, 'edit'])->name('admin.content-management.home-video.edit');
      });
      Route::prefix('links/')->group(function () {
        Route::get('/', [LinksController::class, 'index'])->name('admin.content-management.links.index');
        Route::get('create', [LinksController::class, 'create'])->name('admin.content-management.links.create');
        Route::get('edit', [LinksController::class, 'edit'])->name('admin.content-management.links.edit');
      });
      Route::prefix('front-pages/')->group(function () {
        Route::get('/', [FrontPagesController::class, 'index'])->name('admin.content-management.front-pages.index');
        Route::get('create', [FrontPagesController::class, 'create'])->name('admin.content-management.front-pages.create');
        Route::get('edit', [FrontPagesController::class, 'edit'])->name('admin.content-management.front-pages.edit');
      });
    });
    Route::prefix('questions/')->group(function () {
      Route::get('question/', [QuestionController::class, 'index'])->name('admin.questions.question.index');
      Route::get('question/show', [QuestionController::class, 'show'])->name('admin.questions.question.show');
      Route::get('question-cat/', [QuestionCatController::class, 'index'])->name('admin.questions.question-cat.index');
      Route::get('question-cat/create', [QuestionCatController::class, 'create'])->name('admin.questions.question-cat.create');
    });
    Route::prefix('tools/')->group(function () {
      Route::get('file-manager/', [ToolsController::class, 'index'])->name('admin.tools.file-manager.index');
      Route::get('news-latter/', [NewsLatterController::class, 'index'])->name('admin.tools.news-latter.index');
      Route::get('redirects/', [RedirectController::class, 'index'])->name('admin.tools.redirects.index');
      Route::get('redirects/create', [RedirectController::class, 'create'])->name('admin.tools.redirects.create');
      Route::get('mail-template', [MailTemplateController::class, 'index'])->name('admin.tools.mail-template.index');
      Route::get('site-map', [SiteMapController::class, 'index'])->name('admin.tools.site-map.index');
    });
    Route::prefix('doctors/')->group(function () {
      Route::get('logs-doctor/', [LogsDoctorController::class, 'index'])->name('admin.doctors.logs-doctor.index');
      Route::get('order-visit/', [OrderVisitController::class, 'index'])->name('admin.doctors.order-visit.index');
      Route::get('order-visit/show', [OrderVisitController::class, 'show'])->name('admin.doctors.order-visit.show');
      Route::prefix('doctors-management/')->group(function () {
        Route::get('/status/{doctor}', [DoctorsManagementController::class, 'status'])->name('admin.doctor.status');
        Route::get('/', [DoctorsManagementController::class, 'index'])->name('admin.doctors.doctors-management.index');
        Route::get('/create', [DoctorsManagementController::class, 'create'])->name('admin.doctors.doctors-management.create');
        Route::get('/edit', [DoctorsManagementController::class, 'edit'])->name('admin.doctors.doctors-management.edit');
        Route::prefix('bime/')->group(function () {
          Route::get('/', [BimeController::class, 'index'])->name('admin.doctors.doctors-management.bime.index');
          Route::get('/create', [BimeController::class, 'create'])->name('admin.doctors.doctors-management.bime.create');
          Route::get('/edit', [BimeController::class, 'edit'])->name('admin.doctors.doctors-management.bime.edit');
        });
        Route::prefix('nobatdehi-setting/')->group(function () {
          Route::get('/', [NobatdehiSettingController::class, 'index'])->name('admin.content.doctors.doctors-management.nobatdehi-setting.index');
        });
        Route::prefix('moshavere-setting/')->group(function () {
          Route::get('/', [MoshavereSettingController::class, 'index'])->name('admin.content.doctors.doctors-management.moshavere-setting.index');
        });
        Route::prefix('gallery/')->group(function () {
          Route::get('/', [GalleryController::class, 'index'])->name('admin.content.doctors.doctors-management.gallery.index');
        });
      });
      Route::prefix('wallet-doctor-request/')->group(function () {
        Route::get('/', [WalletDoctorRequestController::class, 'index'])->name('admin.content.doctors.wallet-doctor-request.index');
        Route::get('/show', [WalletDoctorRequestController::class, 'show'])->name('admin.content.doctors.wallet-doctor-request.show');
      });
      Route::prefix('comment-doctor/')->group(function () {
        Route::get('/', [CommentDoctorController::class, 'index'])->name('admin.content.doctors.comment-doctor.index');
        Route::get('/show', [CommentDoctorController::class, 'show'])->name('admin.content.doctors.comment-docor.show');
      });
      Route::prefix('moshavere/')->group(function () {
        Route::get('/', [MoshavereController::class, 'index'])->name('admin.content.doctors.moshavere.index');
        Route::get('/edit', [MoshavereController::class, 'edit'])->name('admin.content.doctors.moshavere.edit');
      });
    });
    Route::prefix('hospitals/')->group(function () {
      Route::prefix('hospitals-management/')->group(function () {
        Route::get('/', [HospitalsManagementController::class, 'index'])->name('admin.content.hospitals.hospitals-management.index');
        Route::get('/create', [HospitalsManagementController::class, 'create'])->name('admin.content.hospitals.hospitals-management.create');
        Route::get('/edit', [HospitalsManagementController::class, 'edit'])->name('admin.content.hospitals.hospitals-management.edit');
        Route::prefix('doctors-of-hospital/')->group(function () {
          Route::get('/', [DoctorsOfHospitalController::class, 'index'])->name('admin.content.hospitals.hospitals-management.doctors-of-hospital.index');
          Route::get('/create', [DoctorsOfHospitalController::class, 'create'])->name('admin.content.hospitals.hospitals-management.doctors-of-hospital.create');
          Route::get('/edit', [DoctorsOfHospitalController::class, 'edit'])->name('admin.content.hospitals.hospitals-management.doctors-of-hospital.edit');
        });
      });
      Route::prefix('logs-hospital/')->group(function () {
        Route::get('/', [LogsHospitalController::class, 'index'])->name('admin.content.hospitals.logs-hospital.index');
      });
      Route::prefix('wallet-hospital-request/')->group(function () {
        Route::get('/', [WalletHospitalRequestController::class, 'index'])->name('admin.content.hospitals.wallet-hospital-request.index');
      });
    });
    Route::prefix('application/')->group(function () {
      Route::get('/', [ApplicationController::class, 'index'])->name('admin.content.application.index');
      Route::get('/create', [ApplicationController::class, 'create'])->name('admin.content.application.create');
      Route::get('/edit', [ApplicationController::class, 'edit'])->name('admin.content.application.edit');
    });
    Route::prefix('users-management/')->group(function () {
      Route::prefix('auth/')->group(function () {
        Route::get('/', [AuthController::class, 'index'])->name('admin.content.users-management.auth.index');
        Route::get('/show', [AuthController::class, 'show'])->name('admin.content.users-management.auth.show');
      });
      Route::prefix('charge-account/')->group(function () {
        Route::get('/', [ChargeAccountController::class, 'index'])->name('admin.content.users-management.charge-account.index');
      });
      Route::prefix('wallet-checkout-user/')->group(function () {
        Route::get('/', [WalletCheckoutUserController::class, 'index'])->name('admin.content.users-management.wallet-checkout-user.index');
        Route::get('/show', [WalletCheckoutUserController::class, 'show'])->name('admin.content.users-management.wallet-checkout-user.show');
        Route::get('/edit', [WalletCheckoutUserController::class, 'edit'])->name('admin.content.users-management.wallet-checkout-user.edit');
      });
      Route::prefix('logs-upgrade/')->group(function () {
        Route::get('/', [LogsUpgradeController::class, 'index'])->name('admin.content.users-management.logs-upgrade.index');
      });
      Route::prefix('membershipfee-logs/')->group(function () {
        Route::get('/', [MembershipfeeLogsController::class, 'index'])->name('admin.content.users-management.membershipfee-logs.index');
      });
      Route::prefix('wallet-checkout-monshi/')->group(function () {
        Route::get('/', [WalletCheckoutMonshiController::class, 'index'])->name('admin.content.users-management.wallet-checkout-monshi.index');
      });
      Route::prefix('users/')->group(function () {
        Route::get('/', [UsersController::class, 'index'])->name('admin.content.users-management.users.index');
        Route::get('/show', [UsersController::class, 'show'])->name('admin.content.users-management.users.show');
        Route::get('/edit', [UsersController::class, 'edit'])->name('admin.content.users-management.users.edit');
        Route::get('/create', [UsersController::class, 'create'])->name('admin.content.users-management.users.create');
        Route::get('/profile', [UsersController::class, 'profile'])->name('admin.content.users-management.users.profile.index');
      });
      Route::prefix('user-group/')->group(function () {
        Route::get('/', [UserGroupController::class, 'index'])->name('admin.content.users-management.user-group.index');
        Route::get('/edit', [UserGroupController::class, 'edit'])->name('admin.content.users-management.user-group.edit');
        Route::get('/create', [UserGroupController::class, 'create'])->name('admin.content.users-management.user-group.create');
      });
    });
    Route::prefix('ads/')->group(function () {
      Route::prefix('banner/')->group(function () {
        Route::get('/', [BannerController::class, 'index'])->name('admin.content.ads.banner.index');
        Route::get('/create', [BannerController::class, 'create'])->name('admin.content.ads.banner.create');
        Route::get('/edit', [BannerController::class, 'edit'])->name('admin.content.ads.banner.edit');
        Route::prefix('packages/')->group(function () {
          Route::get('/', [PackagesController::class, 'index'])->name('admin.content.ads.banner.packages.index');
          Route::get('/create', [PackagesController::class, 'create'])->name('admin.content.ads.banner.packages.create');
          Route::get('/edit', [PackagesController::class, 'edit'])->name('admin.content.ads.banner.packages.edit');
        });
        Route::prefix('ads-log/')->group(function () {
          Route::get('/', [AdsLogController::class, 'index'])->name('admin.content.ads.banner.ads-log.index');
        });
      });
    });
    // locale
    Route::get('lang/{locale}', [LanguageController::class, 'swap']);
    // layout
    Route::get('/layouts/collapsed-menu', [CollapsedMenu::class, 'index'])->name('layouts-collapsed-menu');
    Route::get('/layouts/content-navbar', [ContentNavbar::class, 'index'])->name('layouts-content-navbar');
    Route::get('/layouts/content-nav-sidebar', [ContentNavSidebar::class, 'index'])->name('layouts-content-nav-sidebar');
    // Route::get('/layouts/navbar-full', [NavbarFull::class, 'index'])->name('layouts-navbar-full');
    // Route::get('/layouts/navbar-full-sidebar', [NavbarFullSidebar::class, 'index'])->name('layouts-navbar-full-sidebar');
    Route::get('/layouts/horizontal', [Horizontal::class, 'index'])->name('Dashboard-analytics');
    Route::get('/layouts/without-menu', [WithoutMenu::class, 'index'])->name('layouts-without-menu');
    Route::get('/layouts/without-navbar', [WithoutNavbar::class, 'index'])->name('layouts-without-navbar');
    Route::get('/layouts/fluid', [Fluid::class, 'index'])->name('layouts-fluid');
    Route::get('/layouts/container', [Container::class, 'index'])->name('layouts-container');
    Route::get('/layouts/blank', [Blank::class, 'index'])->name('layouts-blank');
  });
// end manager  routes
// dr routes
Route::prefix('dr')
  ->namespace('Dr')

  ->group(function () {
    Route::get('login', [LoginController::class, 'loginRegisterForm'])->name('dr.auth.login-register-form');

    Route::get('login-user-pass', [LoginController::class, 'loginUserPassForm'])->name('dr.auth.login-user-pass-form');

    Route::get('dr-two-factor', [LoginController::class, 'twoFactorForm'])->name('dr-two-factor');

    Route::post('dr-two-factor-store', [LoginController::class, 'twoFactorFormCheck'])->name('dr-two-factor-store');

    Route::post('dr-login-with-mobile-pass', [LoginController::class, 'loginWithMobilePass'])->name('dr-login-with-mobile-pass');

    Route::post('/login-register', [LoginController::class, 'loginRegister'])
      ->name('dr.auth.login-register');

    Route::get('login-confirm/{token}', [LoginController::class, 'loginConfirmForm'])->name('dr.auth.login-confirm-form');

    Route::post('/login-confirm/{token}', [LoginController::class, 'loginConfirm'])
      ->name('dr.auth.login-confirm');

    Route::get('/login-resend-otp/{token}', [LoginController::class, 'loginResendOtp'])
      ->name('dr.auth.login-resend-otp');
    Route::get('/logout', [LoginController::class, 'logout'])->name('dr.auth.logout');
    Route::prefix('panel')
      ->middleware(['doctor', 'complete-profile'])
      ->group(function () {
        Route::get('/', [DrPanelController::class, 'index'])->name('dr-panel');
        Route::get('/patient-records', [PatientRecordsController::class, 'index'])->name('dr-patient-records');
        Route::get('tickets/', [TicketsController::class, 'index'])->name('dr-panel-tickets');
        Route::get('activation/consult/rules', [ConsultRulesController::class, 'index'])->name('activation.consult.rules');
        Route::get('activation/consult/help', [ConsultRulesController::class, 'help'])->name('activation.consult.help');
        Route::get('activation/consult/messengers', [ConsultRulesController::class, 'messengers'])->name('activation.consult.messengers');
        Route::get('my-performance/', [MyPerformanceController::class, 'index'])->name('dr-my-performance');
        Route::get('my-performance/doctor-chart', [MyPerformanceController::class, 'chart'])->name('dr-my-performance-chart');
        Route::group(['prefix' => 'secretary'], function () {
          Route::get('/', [SecretaryManagementController::class, 'index'])->name('dr-secretary-management');
        });
        Route::prefix('turn')->group(function () {
          Route::prefix('schedule')->group(function () {
            Route::get('/my-appointments', [DrScheduleController::class, 'myAppointments'])->name('my-dr-appointments');
            Route::get('/appointments', [DrScheduleController::class, 'index'])->name('dr-appointments');
            Route::get('/moshavere_setting', [DrMoshavereSettingController::class, 'index'])->name('dr-moshavere_setting');
            Route::get('/moshavere_waiting', [MoshavereWaitingController::class, 'index'])->name('dr-moshavere_waiting');
            Route::get('/manual_nobat', [ManualNobatController::class, 'index'])->name('dr-manual_nobat');
            Route::get('/manual_nobat_setting', [ManualNobatController::class, 'setting'])->name('dr-manual_nobat_setting');
            Route::get('/search-users', [ManualNobatController::class, 'searchUsers'])->name('dr-panel-search.users');
            Route::get('/scheduleSetting', [ScheduleSettingController::class, 'index'])->name('dr-scheduleSetting');
            Route::get('/scheduleSetting/vacation', [ScheduleSettingController::class, 'vacation'])->name('dr-vacation');
            Route::get('/scheduleSetting/workhours', [ScheduleSettingController::class, 'workhours'])->name('dr-workhours');
            Route::get('/scheduleSetting/my-special-days', [ScheduleSettingController::class, 'mySpecialDays'])->name('dr-mySpecialDays');
            Route::get('/turnContract', [ScheduleSettingController::class, 'turnContract'])->name('dr-scheduleSetting-turnContract');
            Route::delete('/appointments/destroy/{id}', [AppointmentController::class, 'destroyAppointment'])->name('appointments.destroy');
            Route::post('/toggle-auto-pattern/{id}', [AppointmentController::class, 'toggleAutoPattern'])->name('toggle-auto-pattern');
          });
          Route::prefix('Counseling')->group(function () {
            Route::get('/consult-term', [ConsultTermController::class, 'index'])->name('consult-term.index');
          });
          Route::post('/update-auto-schedule', [DrScheduleController::class, 'updateAutoSchedule'])->name('update-auto-schedule');
          Route::get('/check-auto-schedule', [DrScheduleController::class, 'checkAutoSchedule'])->name('check-auto-schedule');
          Route::get('get-available-times', [DrScheduleController::class, 'getAvailableTimes'])->name('getAvailableTimes');
          Route::post('update-day-status', [DrScheduleController::class, 'updateDayStatus'])->name('updateDayStatus');
          Route::get('disabled-days', [DrScheduleController::class, 'disabledDays'])->name('disabledDays');
          Route::post('/convert-to-gregorian', [AppointmentController::class, 'convertToGregorian'])->name('convert-to-gregorian');
          Route::get('/search-appointments', [AppointmentController::class, 'searchAppointments'])->name('search.appointments');
          Route::get('/turnsCatByDays', [TurnsCatByDaysController::class, 'index'])->name('dr-turnsCatByDays');
          Route::post('/appointments/{id}/status', [AppointmentController::class, 'updateStatus'])->name('updateStatusAppointment');
        });
        Route::group(['prefix' => 'DoctorsClinic'], function () {
          Route::get('activation/', [ActivationDoctorsClinicController::class, 'index'])->name('activation-doctor-clinic');
          Route::get('/', [DoctorsClinicManagementController::class, 'index'])->name('management-doctor-clinic');
          Route::get('gallery', [DoctorsClinicManagementController::class, 'gallery'])->name('dr-office-gallery');
          Route::get('medicalDoc', [DoctorsClinicManagementController::class, 'medicalDoc'])->name('dr-office-medicalDoc');
        });
        Route::group(['prefix' => 'noskhe-electronic'], function () {
          Route::get('prescription/', [PrescriptionController::class, 'index'])->name('prescription.index');
          Route::get('providers/', [ProvidersController::class, 'index'])->name('providers.index');
          Route::group(['prefix' => 'favorite'], function () {
            Route::get('templates/', [FavoriteTemplatesController::class, 'index'])->name('favorite.templates.index');
            Route::get('templates/create', [FavoriteTemplatesController::class, 'create'])->name('favorite.templates.create');
            Route::get('templates/service', [ServiceController::class, 'index'])->name('templates.favorite.service.index');
          });
        });
        Route::get('bime', [DRBimeController::class, 'index'])->name('dr-bime');
        Route::get('payment/wallet', [WalletController::class, 'index'])->name('dr-wallet');
        Route::get('payment/setting', [DrPaymentSettingController::class, 'index'])->name('dr-payment-setting');
        Route::prefix('profile')->group(function () {
          Route::get('edit-profile', [DrProfileController::class, 'edit'])->name('dr-edit-profile');
          Route::post('update-profile', [DrProfileController::class, 'update_profile'])->name('dr-update-profile');
          Route::post('/send-mobile-otp', [DrProfileController::class, 'sendMobileOtp'])
            ->name('dr-send-mobile-otp');
          Route::post('/mobile-confirm/{token}', [DrProfileController::class, 'mobileConfirm'])
            ->name('dr-mobile-confirm');
          Route::post('/dr-specialty-update', [DrProfileController::class, 'DrSpecialtyUpdate'])
            ->name('dr-specialty-update');
          Route::get('niceId', [DrProfileController::class, 'niceId'])->name('dr-edit-profile-niceId');
          Route::get('security', [DrProfileController::class, 'security'])->name('dr-edit-profile-security');
          Route::get('upgrade', [DrProfileController::class, 'upgrade'])->name('dr-edit-profile-upgrade');
          Route::get('subuser', [DrProfileController::class, 'subuser'])->name('dr-subuser');
        });
      });
  });
