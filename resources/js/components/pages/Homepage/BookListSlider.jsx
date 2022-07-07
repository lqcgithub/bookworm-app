import React, {useEffect, useState} from 'react';
import {Button, Card, CardGroup, Carousel, Container} from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BookCard from "../Shop/BookCard";

function BookListSlider(props) {

    // useEffect(() => {
    //     getOnsaleList();
    // })
    // let getOnsaleList = () => {
    //     axios.get('api/books').then(function(respone){
    //         console.log(respone);
    //     })
    // }
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let response = await axios.get('api/books/onsale');
                setBooks(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between py-2">
                <h1>Onsale</h1>
                <a href="/shop" className="btn btn-secondary btn-sm" >View all</a>
            </div>
            <Swiper className=" border border-secondary px-5 py-3"
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    books.map(book => (
                        <SwiperSlide key={book.id}>
                            <BookCard book={book}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default BookListSlider;
