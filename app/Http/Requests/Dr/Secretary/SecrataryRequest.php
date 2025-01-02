<?php

namespace App\Http\Requests\Dr\Secretary;

use Illuminate\Foundation\Http\FormRequest;

class SecrataryRequest extends FormRequest
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
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'mobile' => [
                'required',
                'string',
                'unique:doctors,mobile',
                'regex:/^(?!09{1}(\d)\1{8}$)09(?:[0-3]|9)\d{8}$/'
            ],

        ];
    }
}
