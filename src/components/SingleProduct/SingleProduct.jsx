import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./SingleProduct.scss";
import { NavLink as RouterLink } from 'react-router-dom';
import currencyFormatter from 'currency-formatter';

const SingleProduct = ({ name, id, image, description, discount, discountPrice, price }) => {
    return (
        <Col>
            <Card className="card">
                <RouterLink to={`/product_details/${id}`}>
                    <div className="card__img"> 
                    <Card.Img variant="top" src={image} />
                    </div>
                </RouterLink>
                <Card.Body>
                    <Card.Title className="card__text"> {name}</Card.Title>
                    <Card.Text>
                    <div className="card__prices"> <h6> <del className="me-2">  {currencyFormatter.format(price, { code: 'USD' })} </del>  <span style={{color: "#ddd"}}>{discount}%  </span> </h6> <h6>{currencyFormatter.format(discountPrice, { code: 'USD' })} </h6> </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleProduct;