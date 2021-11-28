import { actions } from "../constant/action-types";

const getAllProducts = (products) => {
    return {
        type: actions?.GET_ALL_PRODUCTS,
        payload: products
    }
};

const selectedProduct = (product) => {
    return {
        type: actions?.GET_CLICKED_PRODUCT,
        payload: product
    }
};




export { getAllProducts, selectedProduct };