<?php

namespace App\View\Components;

use Illuminate\View\Component;

class MyCheck extends Component
{
    public $isChecked;
    public $id;
    public $day;

    public function __construct($isChecked = false, $id, $day)
    {
        $this->isChecked = $isChecked;
        $this->id = $id;
        $this->day = $day;
    }

    public function render()
    {
        return view('components.my-check');
    }
}
