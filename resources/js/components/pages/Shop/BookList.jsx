import React, {useEffect, useState} from 'react';
import {SwiperSlide} from "swiper/react";
import BookCard from "./BookCard";

function BookList(props) {

    const rows = [...Array( Math.ceil(props.books.length / props.itemsPerRow) )];
    const bookRows = rows.map( (row, idx) => props.books.slice(idx * props.itemsPerRow, idx * props.itemsPerRow + props.itemsPerRow) );
    return (
        <div className="p-3 border border-secondary my-3">
            {bookRows.map((row, idx) => (
            <div className="row mx-5 mt-3 justify-content-around" key={idx}>
                { row.map( book => <BookCard key={book.id} book={book}/> )}
            </div> )
            )}
        </div>
    );
}

export default BookList;
