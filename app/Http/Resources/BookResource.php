<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->book_title,
            'author' => $this->author->author_name,
            'category' => $this->category->category_name,
            'reviews' => $this->review,
            'description' =>$this->book_summary,
            'cover' => $this->book_cover_photo,
            'price' => $this->book_price,
            'final_price' => $this->final_price,
            'avg_rating' => $this->most_rating,
        ];
    }
}
