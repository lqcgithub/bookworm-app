import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from "react-router-dom";
import queryString from "querystring";

function NavbarComponent(props) {

    return (
        <Navbar bg="light" variant="light" className="d-flex justify-content-between">
            <div>
                <LinkContainer to="/">
                    <Navbar.Brand className="fs-5 fw-bold">
                        <img
                            alt=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAUhJREFUWEftlsmKwkAQhv8sJoLEJUEM2QSjvv+D5BUieBBJNJHkkk2doQpGBjPj3MZL162Xqv+vrxu6pSiKPvDGkIQBQUAQEAQEAUHgmYBhGPB9H7fbDdfrFafTCZ7n8Zhiv9+jrutfn6/1eg1VVXn9crnAsqyXub3HiAwMh0N0XQfbtpHnORc7n8/YbDZsiOZc14Usy2xS0zQ2RuP5fI6iKLiJtm1RVVUv97v7H1/DyWQCx3Fwv98fHS+XSwwGA+x2O54nkzRHoofDAWVZPuqGYcjrSZKw+HPuSwPT6ZQ7StMU2+0WWZZhPB5DURQ2Q2QoSPgLN5miY9F1HaZpMqHFYsF7JEnq5b40QGKEl4SoQNM0mM1mjJM6Px6PjDgIAjZK++jM4zjm/avV6iFK92Y0GvVy/zyC//wgiR+RICAICAKCgCDwdgKfnaQUkIp8+gsAAAAASUVORK5CYII="
                            width="32"
                            height="32"
                            className="d-inline-block align-top"
                        />{' '}
                        BOOKWORM
                    </Navbar.Brand>
                </LinkContainer>

            </div>
            <div>
                <Nav className="">
                    <LinkContainer to="/">
                        <Nav.Link className="fs-5">Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/shop">
                        <Nav.Link className="fs-5">Shop</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/about">
                        <Nav.Link className="fs-5">About</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/">
                        <Nav.Link className="fs-5">Cart(0)</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/">
                        <Nav.Link className="fs-5">Sign in</Nav.Link>
                    </LinkContainer>
                </Nav>
            </div>
        </Navbar>
    );
}

export default NavbarComponent;
