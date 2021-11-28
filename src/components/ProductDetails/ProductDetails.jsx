import { ShoppingCart } from '@material-ui/icons';
import currencyFormatter from 'currency-formatter';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import "../Scss/_ProductDetails.scss";
import axios from 'axios';
import { selectedProduct } from '../../redux/actions/productActions';

const ProductDetails = () => {
    const clickedProduct = useSelector(state => state?.selectedProductReducer?.product);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/${id}`)
            .then(res => {
                dispatch(selectedProduct(res?.data))
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <Container className="py-5">
            <Row>
                <Col xs={11} md={6} className="mx-auto mb-4 mb-md-0">
                    <Image className="product__img mx-auto" src={clickedProduct?.image} fluid />
                </Col>
                <Col xs={11} md={6} className="mx-auto">
                    <h3 className="text-capitalize">{clickedProduct?.name} </h3>
                    <h6 className="product__price"><del className="">  {currencyFormatter.format(clickedProduct?.price, { code: 'USD' })}  </del> <span>{clickedProduct?.discountPrice} </span> </h6>
                    <p className="mb-4">{clickedProduct?.description} </p>
                    <div className="product__details">
                        <div className="product__quantity">
                            <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : alert("you can't decrease product")}> - </button>
                            <button>{quantity} </button>
                            <button onClick={() => setQuantity(quantity + 1)}> +  </button>
                        </div>
                        <button className="text-uppercase product__btn"><ShoppingCart /> Add to cart </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;