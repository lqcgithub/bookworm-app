<?php

namespace App\Http\Requests;

use App\Rules\AvailableAuthor;
use App\Rules\AvailableCategory;
use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'category_id' => ['required', new AvailableCategory], // Test custom rule .
            'author_id' => ['required', new AvailableAuthor], //
            'book_title' => 'required',
            'book_summary' => 'required',
            'book_price' => 'required',
        ];
    }
}
