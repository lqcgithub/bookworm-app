import React, {useEffect, useState} from 'react';
import queryString from "querystring";
import {useParams} from "react-router-dom";
import BookCardHorizontal from "./BookCardHorizontal";
import CustomerReviews from "./CustomerReviews";
import AddToCart from "./AddToCart";

function BookDetail(props) {

    let { id } = useParams();
    const [book, setBook] = useState([]);
    const fetchBook = async () => {
        try {
            await axios.get(`/api/books/${id}`).then((response) => {
                setBook(response.data.data);
            });
        } catch (error) {
            console.log(error.response.data);
        }
    }
    useEffect(() => {
        fetchBook();
    }, [id]);
    return (
        <>
            <div className="row">
                <h1>Category {book.category}</h1>
            </div>
            <hr/>
            <div className="row">
                <div className="col-8">
                    <BookCardHorizontal book={book}></BookCardHorizontal>
                    <CustomerReviews book={book}></CustomerReviews>
                </div>
                <div className="col-4">
                    <AddToCart book={book}/>
                </div>
            </div>
        </>
    );
}

export default BookDetail;
