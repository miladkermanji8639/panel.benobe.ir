<?php

namespace App\Providers;

use App\Http\View\Composers\LoginConfirmForm;
use Illuminate\Support\ServiceProvider;

class LoginConfirmationFormServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // view()->composer('*',LoginConfirmForm::class);
    }
}
