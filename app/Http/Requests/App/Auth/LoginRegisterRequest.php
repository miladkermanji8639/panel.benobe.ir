<?php

namespace App\Http\Requests\App\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
//            'id' => 'required|min:11|max:64'
            'id' => 'required|min:10|max:14|regex:/[0]{1}[0-9]{10}/',
            // 'otp' => 'required|min:4|max:4'
//            'id' => 'required|min:11|max:64|regex:/^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+.[a-zA-Z]{1,10}$/'
        ];
    }
    public function attributes(){
        return [
            'id' => '  شماره موبایل'
        ];
    }
}
