import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import BookList from "../Shop/BookList";

function BookFeatureSection(props) {
    const [toggleClassRecommended, setToggleClassRecommended] = useState(true);
    const [toggleClassPopular, setToggleClassPopular] = useState(false);
    const [url, setURL] = useState('api/books/recommended');

    function handleRecommendedToggle() {
        setToggleClassRecommended(true);
        setToggleClassPopular(false);
        setURL('api/books/recommended')
    }

    function handlePopularToggle() {
        setToggleClassPopular(true);
        setToggleClassRecommended(false);
        setURL('api/books/popular')
    }

    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let response = await axios.get(url);
                setBooks(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBooks();
    }, [url]);
    return (
        <div>
            <div className="row text-center my-4">
                <h1>Featured Books</h1>
            </div>
            <div className="row justify-content-center">
                <Button className={toggleClassRecommended ? 'active col-2' : 'col-2'} onClick={handleRecommendedToggle} variant="outline-secondary">Recommended</Button>{' '}
                <Button className={toggleClassPopular ? 'active col-2' : 'col-2'} onClick={handlePopularToggle} variant="outline-secondary">Popular</Button>{' '}
            </div>
            <BookList itemsPerRow={4} books={books}/>
        </div>
    );
}

export default BookFeatureSection;
