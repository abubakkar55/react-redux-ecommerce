import { ShoppingBasket, ShoppingCart } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import "./ProductDetails.scss";
const ProductDetails = () => {
    const clickedProduct = useSelector(state => state?.selectedProductReducer?.product);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: "GET_CLICKED_PRODUCT", payload: id })
    }, [id])

    return (
        <Container className="py-5">
            <Row>
                <Col xs={11} md={6} className="mx-auto mb-4 mb-md-0">
                    <Image className="product__img mx-auto" src="/images/1.jpg" fluid />
                </Col>
                <Col xs={11} md={6} className="mx-auto">
                    <h3 className="text-capitalize">{clickedProduct?.name} </h3>
                    <h6 className="product__price"><del className="">{clickedProduct?.price} </del> <span>{clickedProduct?.discountPrice} </span> </h6>
                    <p className="mb-4">{clickedProduct?.description} </p>
                    <Stack direction="horizontal" gap={3}>
                        <div className="product__quantity">
                            <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : alert("you can't decrease product")}> - </button>
                            <button>{quantity} </button>
                            <button onClick={() => setQuantity(quantity + 1)}>+ </button>
                        </div>
                        <button className="product__btn"><ShoppingCart /> Add to cart </button>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;