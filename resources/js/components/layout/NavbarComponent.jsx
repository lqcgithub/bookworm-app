import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function NavbarComponent(props) {
    return (
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
            <div>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAUhJREFUWEftlsmKwkAQhv8sJoLEJUEM2QSjvv+D5BUieBBJNJHkkk2doQpGBjPj3MZL162Xqv+vrxu6pSiKPvDGkIQBQUAQEAQEAUHgmYBhGPB9H7fbDdfrFafTCZ7n8Zhiv9+jrutfn6/1eg1VVXn9crnAsqyXub3HiAwMh0N0XQfbtpHnORc7n8/YbDZsiOZc14Usy2xS0zQ2RuP5fI6iKLiJtm1RVVUv97v7H1/DyWQCx3Fwv98fHS+XSwwGA+x2O54nkzRHoofDAWVZPuqGYcjrSZKw+HPuSwPT6ZQ7StMU2+0WWZZhPB5DURQ2Q2QoSPgLN5miY9F1HaZpMqHFYsF7JEnq5b40QGKEl4SoQNM0mM1mjJM6Px6PjDgIAjZK++jM4zjm/avV6iFK92Y0GvVy/zyC//wgiR+RICAICAKCgCDwdgKfnaQUkIp8+gsAAAAASUVORK5CYII="
                        width="32"
                        height="32"
                        className="d-inline-block align-top"
                    />{' '}
                    BOOKWORM
                </Navbar.Brand>
            </div>
            <div>
                <Nav className="">
                    <Nav.Link href="#home" className="active">Home</Nav.Link>
                    <Nav.Link href="#shop">Shop</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#cart">Cart</Nav.Link>
                    <Nav.Link href="#signin">Sign in</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
}

export default NavbarComponent;
