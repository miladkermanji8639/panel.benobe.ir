<?php

namespace App\Http\View\Composers;

use Illuminate\View\View;
use App\Models\Admin\Dashboard\Cities\Zone;
use App\Models\Admin\Dashboard\Specialty\Specialty;

class DirectoryComposer
{
    public function compose(View $view)
    {
        $provinces = Zone::where('level', '1')->get();
        $cities = Zone::where('level', '2')->get();
        $specialties = Specialty::where('level','1')->get();
        $view->with(['specialties' => $specialties, 'provinces' => $provinces, 'cities' => $cities]);
    }
}
