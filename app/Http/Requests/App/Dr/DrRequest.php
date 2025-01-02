<?php

namespace App\Http\Requests\App\Dr;

use Illuminate\Foundation\Http\FormRequest;

class DrRequest extends FormRequest
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
            'mobile' => 'required|string|unique:doctors,mobile',
            'national_code' => 'required|string|unique:doctors,national_code',
            'sex' => 'required|in:male,female',
            'license_number' => 'required|string|unique:doctors,license_number',
            'medical_system_code_type' => 'required|string',
            'town' => 'required|string',
            'city' => 'required|string',
            'address' => 'required|string',
        ];
    }
}
