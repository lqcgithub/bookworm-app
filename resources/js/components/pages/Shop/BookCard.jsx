import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function BookCard(props) {
    var book = props.book;
    return (
        <Card style={{ width: '12rem', height: '25rem' }}>
            <Link to={`/books/${book.id}`} className="text-decoration-none text-reset">
                <Card.Img variant="top" src={book.cover?`/assets/bookcover/${book.cover}.jpg`:"https://m.media-amazon.com/images/I/31l7Cfuq8oL.jpg"} style={{ height: '15rem' }}/>
                <Card.Body>
                    <Card.Title className='text-truncate' style={{ height: '2rem' }} >{book.title}</Card.Title>
                    <Card.Text style={{ height: '2rem' }}>
                        {book.author}
                    </Card.Text>
                    <hr/>
                    {book.final_price!='0.00'?
                        <div>
                            <span className="fw-light text-decoration-line-through">{"$"+book.price}</span>
                            <span className="px-2"></span>
                            <span className="fs-4">{"$"+book.final_price}</span>
                        </div>
                        :<span className="fs-4">{"$"+book.price}</span>
                    }
                </Card.Body>
            </Link>
        </Card>
    );
}

export default BookCard;
