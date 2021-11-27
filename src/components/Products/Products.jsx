import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productActions';
import SingleProduct from './../SingleProduct/SingleProduct';
import "./Products.scss";
const Products = () => {
    const allProducts = useSelector(state => state?.allProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <Container>
            <h1 className="heading mt-5 text-center">Out Latest Products </h1>
            <Row xs={1} md={2} lg={3} xxl={4} className="g-4 py-5">
                {allProducts?.map((item, idx) => <SingleProduct key={item.id} {...item} />)}
            </Row>
        </Container>
    )
}

export default Products
