import React from 'react';
import {ListGroup} from "react-bootstrap";

function AuthorList(props) {
    return (
        <ListGroup defaultActiveKey="">
            <ListGroup.Item variant="secondary">Author</ListGroup.Item>
            {
                props.author.map((author) =>(
                    <ListGroup.Item as={'button'} key={author.id} onClick={(e)=>{
                        var active = e.target.classList.toggle("active");
                        props.onAuthorItemClick(author.id, active);
                    }}>
                        {author.name}
                    </ListGroup.Item>
                ))
            }

        </ListGroup>
    );
}

export default AuthorList;
