import React from 'react';
import {Button, Card, Form} from "react-bootstrap";

function AddToCart(props) {
    var book = props.book;
    return (
        <Card variant="light">
            <Card.Header className="justify-content-center">{book.final_price!='0.00'?
                <div>
                    <span className="fw-light text-decoration-line-through">{"$"+book.price}</span>
                    <span className="px-2"></span>
                    <span className="fs-2">{"$"+book.final_price}</span>
                </div>
                :<span className="fs-2">{"$"+book.price}</span>
            }</Card.Header>
            <Card.Body>
                <Form action="/" method="" className="fs-3">
                    <Form.Group className="mb-3" controlId="formQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control className="text-center" type="number" name="quantity" placeholder="1" min="1" max="8"/>
                        <Form.Control className="text-center" type="hidden" name="book_id" value={book.id?book.id:0}/>
                    </Form.Group>
                    <Button variant="secondary" type="submit" className="w-100">
                        Add to cart
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AddToCart;
