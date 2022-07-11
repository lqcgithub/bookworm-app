import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

function BookCardHorizontal(props) {
    var book = props.book;
    return (
        <Card>
            <div className="row" >
                <div className="col-4">
                    <Card.Img variant="top" src={book.cover?`/assets/bookcover/${book.cover}.jpg`:"https://m.media-amazon.com/images/I/31l7Cfuq8oL.jpg"} style={{height: '15rem'}}/>
                    <br/>
                    <div className="text-right py-2">
                        By (author) <a href={`/shop?author=${book.author}`}>{book.author}</a>
                    </div>
                </div>
                <Card.Body className="col-8">
                    <Card.Title className="py-3">{book.title}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
}

export default BookCardHorizontal;
