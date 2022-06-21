<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';

    protected $fillable = [
        'category_id',
        'author_id',
        'book_title',
        'book_summary',
        'book_price',
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function author(){
        return $this->belongsTo(Author::class);
    }

    public function review(){
        return $this->hasMany(Review::class);
    }

    public function scopeFilter($query, array $filters) // Query Scope ( custom query builder method )
    {
//        dd(request('search'));
        if (($filters['search'] ?? false)) { // isset operator in handy way.
            $query
                ->where('book_title', 'like', '%' . request('search') . '%')
                ->orWhere('book_summary', 'like', '%' . request('search') . '%');
        }

        if (($filters['category'] ?? false)) {
            $query
                ->whereHas('category', fn ($query) => $query->where('category_id','=',request('category')));
        }

        if (($filters['author'] ?? false)) {
            $query
                ->whereHas('author', fn ($query) => $query->where('author_id','=',request('author')));
        }

        if (($filters['rating'] ?? false)) {
            $query
                ->whereHas('review', fn ($query) => $query->where('rating_start','=',request('rating')));
        }
    }
}
