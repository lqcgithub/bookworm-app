import React, {useState} from 'react';
import {Accordion, ButtonGroup, Card, ToggleButton} from "react-bootstrap";

function CustomerReviews(props) {

    const [pagination, setPagination] = useState({
        per_page: 5,
        links: [],
    });

    const radios = [
        {name: `5 star`, value: '5'},
        {name: '4 star', value: '4'},
        {name: '3 star', value: '3'},
        {name: '2 star', value: '2'},
        {name: '1 star', value: '1'},
    ];
    const [radioValue, setRadioValue] = useState('5');

    return (
        <div className="row justify-content-center">
            <h1 className="pt-5">Customer Reviews</h1>
            <h1 className="pt-3">{props.book.avg_rating!='0.00'?props.book.avg_rating+" Star":""}</h1>
            <span className="py-3 fs-3">{props.book.reviews && props.book.reviews.length > 0 ? "(" + props.book.reviews.length+ ")" : ""}</span>
            {/*<ButtonGroup className="mb-2">*/}
            {/*    {radios.map((radio, idx) => (*/}
            {/*        <ToggleButton*/}
            {/*            key={idx}*/}
            {/*            id={`radio-${idx}`}*/}
            {/*            type="radio"*/}
            {/*            variant="outline-secondary"*/}
            {/*            name="radio"*/}
            {/*            value={radio.value}*/}
            {/*            checked={radioValue === radio.value}*/}
            {/*            onChange={(e) => {*/}
            {/*                setRadioValue(e.currentTarget.value);*/}
            {/*                props.onRatingChange(radio.value);*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            {radio.name}*/}
            {/*        </ToggleButton>*/}
            {/*    ))}*/}
            {/*</ButtonGroup>*/}
            {props.book.reviews ? props.book.reviews.map((review) => (
                <Accordion key={review.id} defaultActiveKey={review.id}>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey={review.id}>
                                {review.review_title}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={review.id}>
                            <Card.Body>{review.review_details}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            )) : ""}
        </div>
    );
}

export default CustomerReviews;
