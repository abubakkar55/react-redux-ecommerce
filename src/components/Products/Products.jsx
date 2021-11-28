import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import SingleProduct from './../SingleProduct/SingleProduct';
import "../Scss/_Products.scss";
import axios from "axios"
import { getAllProducts } from '../../redux/actions/productActions';
const Products = () => {
    const allProducts = useSelector(state => state?.allProductReducer?.products);
    const dispatch = useDispatch();
console.log(allProducts);
    const getProducts = async () => {
         await axios.get("http://localhost:5000/products")
        .then(res =>{
            dispatch(getAllProducts(res.data));
            console.log(res)
        }).catch((err) => console.log(err));
    }

    useEffect(() => {
        getProducts();
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
