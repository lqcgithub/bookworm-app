<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    protected $appends = ['final_price', 'most_rating', 'most_review'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function review()
    {
        return $this->hasMany(Review::class);
    }

    public function discount()
    {
        return $this->hasOne(Discount::class);
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
                ->whereHas('category', fn($query) => $query->where('category_id', '=', request('category')));
        }

        if (($filters['author'] ?? false)) {
            $query
                ->whereHas('author', fn($query) => $query->where('author_id', '=', request('author')));
        }

        if (($filters['rating'] ?? false)) {
            $query
                ->whereHas('review', fn($query) => $query->where('rating_start', '=', request('rating')));
        }

    }

//    public function getMostDiscountAttribute() // Laravel 8 Accessor
//    {
//        $discountEndDate = $this->discount->discount_end_date;
//        $discountAmount = 0;
//        if ($discountEndDate === null || $discountEndDate >= date("Y-m-d")) {
//            $discountAmount = $this->book_price - $this->discount->discount_price;
//        }
//        return number_format($discountAmount, 2);
//    }

    protected function finalPrice(): Attribute // Laravel 9 Accessor
    {
        return Attribute::make(
            get: function () {
                $discountAmount = 0;
                if ($this->discount) {
                    $discountEndDate = $this->discount->discount_end_date;
                    if ($discountEndDate === null || $discountEndDate >= date("Y-m-d")) {
                        $discountAmount = $this->book_price - $this->discount->discount_price;
                    }
                }
                return number_format($discountAmount, 2);
            },
//            set: fn ($value) => strtolower($value),
        );
    }

    public function scopeOnsale($query) //TO DO: sort by most discount
    {
        return $query->with('discount')->get()->sortByDesc('final_price');
    }

    protected function mostRating(): Attribute // Laravel 9 Accessor
    {
        return Attribute::make(
            get: function () { //fn () => $this->review()->avg('rating_star')

                $totalRating = 0;
                $avgRating = null;
                $count = 0;

                if ($this->review->isEmpty()) {
                    return number_format($avgRating, 2);
                }
                $ratingMap = $this->review->map(fn($item) => $item->rating_start);
                foreach ($ratingMap as $rating){
                    if($rating === 1){
                        $totalRating+=1;
                    }

                    if($rating === 2){
                        $totalRating+=2;
                    }

                    if($rating === 3){
                        $totalRating+=3;
                    }

                    if($rating === 4){
                        $totalRating+=4;
                    }

                    if($rating === 5){
                        $totalRating+=5;
                    }
                    $count+=1;
                }
                $avgRating = $totalRating/$count;
                return number_format($avgRating, 2);
            },
//            set: fn ($value) => strtolower($value),
        );
    }

    public function scopeRecommended($query)
    {
//        return $query->select('book.*')->join('review', 'book.id', 'review.book_id')->groupBy('book.id')->orderByDesc(DB::raw('avg(rating_start)'))->limit(8)->get();
        return $query->with('review')->get()->sortByDesc('most_rating');
    }

//    public function getMostReviewAttribute() // Laravel 8 Accessor
//    {
//        return $this->review()->count();
//    }

    protected function mostReview(): Attribute // Laravel 9 Accessor
    {
        return Attribute::make(
            get: fn() => $this->review->count(),
//            set: fn ($value) => strtolower($value),
        );
    }

    public function scopePopular($query) //TO DO: sort by book_price
    {
        return $query->with('review')->get()->sortByDesc('most_review');
    }


}
