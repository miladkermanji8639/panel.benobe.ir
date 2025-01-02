<?php
//
//namespace App\Http\View\Composers;
//
//use App\Http\Controllers\App\Auth\LoginRegisterController;
//use App\Models\Otp\Otp;
//use Illuminate\View\View;
//
//class LoginConfirmForm extends LoginRegisterController
//{
//    public function compose(View $view)
//    {
//        // Assuming the token is passed to the view through route parameters or as a request parameter.
//        $token = request()->get('token');
//
//        // Check if the token is present
//        if ($token) {
//            // Query the Otp model based on the $token
//            $otp = Otp::where('token', $token)->first();
//
//            // Share the token and otp with the view
//            $view->with(compact('token', 'otp'));
//        } else {
//            // If no token is found, you may want to handle this case.
//            $view->with('token', null)->with('otp', null);
//        }
//    }
//}