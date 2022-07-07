import React from 'react';
import {Card} from "react-bootstrap";

function BookCard(props) {
    return (
        <Card style={{ width: '12rem', height: '25rem' }}>
            <Card.Img variant="top" src="" style={{ height: '15rem' }}/>
            <Card.Body>
                <Card.Title className='text-truncate' style={{ height: '2rem' }} >{props.book.title}</Card.Title>
                <Card.Text style={{ height: '2rem' }}>
                    {props.book.author}
                </Card.Text>
                <hr/>
                <span style={{ height: '3rem' }}>{props.book.price}</span>
                <span>---</span>
                <span style={{ height: '3rem' }}>{props.book.final_price}</span>
            </Card.Body>
        </Card>
    );
}

export default BookCard;
