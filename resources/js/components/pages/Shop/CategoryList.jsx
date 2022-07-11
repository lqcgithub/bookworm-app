import React from 'react';
import {ListGroup} from "react-bootstrap";

function CategoryList(props) {
    return (
        <ListGroup defaultActiveKey="">
            <ListGroup.Item variant="secondary">Category</ListGroup.Item>
            {
                props.category.map((category) =>(
                    <ListGroup.Item as={'button'} key={category.id} onClick={(e)=>{
                        var active = e.target.classList.toggle("active");
                        props.onCategoryItemClick(category.id, active);
                    }}>
                        {category.category_name}
                    </ListGroup.Item>
                ))
            }

        </ListGroup>
    );
}

export default CategoryList;
