import React, {useEffect, useRef, useState} from 'react';
import {Dropdown, ListGroup, Pagination} from "react-bootstrap";
import BookList from "./BookList";
import * as queryString from "querystring";

function BookShop(props) {

    const [books, setBooks] = useState([]);
    const [pagination, setPagination] = useState({
        per_page : 5,
        links : [],
    });
    const [filters, setFilters] = useState({
        per_page : 20,
    });

    useEffect(() => {
        fetchBooks();
    }, [filters]);

    const fetchBooks = async () => {
        const paramString = queryString.stringify(filters);
            try {
                await axios.get(`/api/books?${paramString}`).then((response) => {
                    setBooks(response.data.data);
                    setPagination(response.data.meta);
                });
            } catch (error) {
                console.log(error);
            }
    }
    let active = pagination.current_page;
    let links = pagination.links;
    let items = [];

    function handlePaginationClick(item) {
        let page='';
        setFilters({...filters, page : item.label });
    }

    items = links.map((item, idx) => {
        return (<Pagination.Item key={idx} active={idx === active} onClick={()=>handlePaginationClick(item)}>{item.label}</Pagination.Item>);
    });

    return (
        <>
            <div className="row">
                <h1>Books</h1>
                <span>Filtered by Category#1</span>
            </div>
            <hr/>
            <div className="row">
                <div className="col-2">
                    <h2>Filter by</h2>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item variant="secondary">Category</ListGroup.Item>
                        <ListGroup.Item action href="#link1">
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Link 2
                        </ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item  variant="secondary">Author</ListGroup.Item>
                        <ListGroup.Item action href="#link1">
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Link 2
                        </ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item variant="secondary" >Rating Review</ListGroup.Item>
                        <ListGroup.Item action href="#link1">
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Link 2
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-between">
                        <p>Showing 1-12 of 126 books</p>
                        <div>
                            <Dropdown className="d-inline-block">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="d-inline-block">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <BookList itemsPerRow={4} books={books}/>

                    <Pagination size="sm">{items}</Pagination>

                </div>
            </div>
        </>
    );
}

export default BookShop;
