import React, {useEffect, useRef, useState} from 'react';
import {Dropdown, ListGroup, Pagination} from "react-bootstrap";
import BookList from "./BookList";
import * as queryString from "querystring";
import CategoryList from "./CategoryList";
import AuthorList from "./AuthorList";

function BookShop(props) {

    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);
    const [author, setAuthor] = useState([]);
    const rating_arr = [1, 2, 3, 4, 5];

    const [pagination, setPagination] = useState({
        per_page : 5,
        links : [],
    });

    const [filters, setFilters] = useState({
        per_page : 20,
        sort: 'onsale',
    });

    const fetchBooks = async () => {
        const paramString = queryString.stringify(filters);
        try {
            await axios.get(`/api/books?${paramString}`).then((response) => {
                setBooks(response.data.data);
                setPagination(response.data.meta);
            });
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [filters]);

    const fetchCategory = async () => {
        try {
            await axios.get(`/api/category`).then((response) => {
                setCategory(response.data.data);
            });
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, [filters]);

    const fetchAuthor = async () => {
        try {
            await axios.get(`/api/author`).then((response) => {
                setAuthor(response.data.data);
            });
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        fetchAuthor();
    }, [filters]);

    let active = pagination.current_page;
    let links = pagination.links;
    let items = [];

    function handlePaginationClick(item) {
        let page='';
        setFilters({...filters, page : item.label});
    }

    items = links.map((item, idx) => {
        return (<Pagination.Item key={idx} active={idx === active} onClick={()=>handlePaginationClick(item)}>{item.label}</Pagination.Item>);
    });

    const [value,setValue]=useState('Sort by onsale');
    const handleSelectDropdown=(e)=>{
        setValue(e);
        if(e === "Sort by onsale"){
            setFilters({...filters, sort: 'onsale'});
        }
        if(e === "Sort by popular"){
            setFilters({...filters, sort: 'popular'});
        }
        if(e === "Sort by price low to high"){
            setFilters({...filters, sort: 'price'});
        }
        if(e === "Sort by price high to low"){
            setFilters({...filters, sort: '-price'});
        }
    }

    const [value2,setValue2]=useState('Show 20');
    const handleSelect2Dropdown=(e)=>{
        setValue2(e);
    }

    function handleShowDropdownClick(per_page) {
        setFilters({...filters, per_page : per_page });
    }

    return (
        <>
            <div className="row">
                <h1>Books</h1>
                <span>{filters['category']?"Filtered by Category#"+filters['category']:""}</span>
                <span>{filters['author']?"Filtered by Author#"+filters['author']:""}</span>

            </div>
            <hr/>
            <div className="row">
                <div className="col-2">
                    <h2>Filter by</h2>
                    <CategoryList category={category} onCategoryItemClick={(id, active) => {active?setFilters({...filters, category: id}):setFilters({...filters, category:""})}}/>
                    <br/>
                    <AuthorList author={author} onAuthorItemClick={(id, active) => {active?setFilters({...filters, author: id}):setFilters({...filters, author:""})}}/>
                    <br/>
                    <ListGroup defaultActiveKey="">
                        <ListGroup.Item variant="secondary" >Rating Review</ListGroup.Item>
                        {
                            rating_arr.map((item) => (
                                <ListGroup.Item as={'button'} key={item} onClick={(e)=>{
                                    var active = e.target.classList.toggle("active");
                                    active?setFilters({...filters, rating: item}):setFilters({...filters, rating: ""})
                                }}>
                                    {item}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-between">
                        <p>Showing {pagination.from}-{pagination.to} of {pagination.total} books</p>
                        <div>
                            <Dropdown className="d-inline-block" onSelect={handleSelectDropdown}>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {value}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Sort by onsale">Sort by onsale</Dropdown.Item>
                                    <Dropdown.Item eventKey="Sort by popular">Sort by popular</Dropdown.Item>
                                    <Dropdown.Item eventKey="Sort by price low to high">Sort by price low to high</Dropdown.Item>
                                    <Dropdown.Item eventKey="Sort by price high to low">Sort by price high to low</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown  onSelect={handleSelect2Dropdown} className="d-inline-block">
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {value2}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Show 5" onClick={()=>handleShowDropdownClick(5)}>Show 5</Dropdown.Item>
                                    <Dropdown.Item eventKey="Show 15" onClick={()=>handleShowDropdownClick(15)}>Show 15</Dropdown.Item>
                                    <Dropdown.Item eventKey="Show 20" onClick={()=>handleShowDropdownClick(20)}>Show 20</Dropdown.Item>
                                    <Dropdown.Item eventKey="Show 25" onClick={()=>handleShowDropdownClick(25)}>Show 25</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <BookList itemsPerRow={4} books={books}/>

                    {books.length>=pagination.per_page?<Pagination className='justify-content-center' size="sm">{items}</Pagination>:""}

                </div>
            </div>
        </>
    );
}

export default BookShop;
