<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(){
        return Cart::content();
    }
    public function store(Request $request){
        $book = Book::findOrFail((int)$request->input('book_id'));
        Cart::add(
            $book->id,
            $book->book_title,
            (int)$request->input('quantity'),
            $book->book_price,
        );
        return redirect()->route('cart.index')->with('message', 'Suc');
    }
}
