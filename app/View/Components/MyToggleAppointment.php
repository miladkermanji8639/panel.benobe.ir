<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class MyToggleAppointment extends Component
{
    /**
     * Create a new component instance.
     */
    public $isChecked;
    public $id;
    public $day;

    public function __construct($isChecked = false, $id, $day)
    {
        $this->isChecked = $isChecked;
        $this->id = $id;
        $this->day = $day;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.my-toggle-appointment');
    }
}
