<?php

namespace App\Providers;

use App\Models\Otp\Otp;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use App\Models\Admin\Dashboard\Cities\Zone;
use App\Http\View\Composers\LoginConfirmForm;
use App\Http\View\Composers\DirectoryComposer;
use App\Http\Controllers\App\Auth\LoginRegisterController;
use App\Models\Admin\Dashboard\Specialty\Specialty;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void {}

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    View::composer('*', DirectoryComposer::class);
    Vite::useStyleTagAttributes(function (?string $src, string $url, ?array $chunk, ?array $manifest) {
      if ($src !== null) {
        return [
          'class' => preg_match("/(resources\/assets\/vendor\/scss\/core)-?.*/i", $src) ? 'template-customizer-core-css' : (preg_match("/(resources\/assets\/vendor\/scss\/theme)-?.*/i", $src) ? 'template-customizer-theme-css' : '')
        ];
      }
      return [];
    });

    View::composer('*', function ($view) {
      $popularZones = Zone::orderBy('search_count', 'desc')
        ->where('search_count', '>', 0) // تعداد جستجو بیشتر از صفر  
        ->distinct('name') // حذف نام‌های تکراری  
        ->take(5) // تعداد شهرهای پر استفاده  
        ->get(['name', 'search_count','id']);
      $view->with('popularZones', $popularZones);
    });


    View::composer('*', function ($view) {
      $popularSpecialties = Specialty::orderBy('search_count', 'desc')
        ->where('search_count', '>', 0) // تعداد جستجو بیشتر از صفر  
        ->distinct('name') // حذف نام‌های تکراری  
        ->take(10) // تعداد شهرهای پر استفاده  
        ->get(['name', 'search_count','id']);
      $view->with('popularSpecialties', $popularSpecialties);
    });
  }
}
