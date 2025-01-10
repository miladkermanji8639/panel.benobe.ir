<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DoctorSpecialtyRequest extends FormRequest
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
            'academic_degree_id' => 'required|exists:academic_degrees,id',
            'specialty_id' => 'required|exists:sub_specialties,id',
            'specialty_title' => 'required|string',
            'degrees.*' => 'sometimes|exists:academic_degrees,id',
            'specialties.*' => 'sometimes|exists:sub_specialties,id',
            'titles.*' => 'sometimes|string'
        ];
    }
}
