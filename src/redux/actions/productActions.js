const getAllProducts = () => {
    return {
        type: "ALL_PRODUCTS",
    }
};

const selectedProduct = (id) => {
    return {
        type: "GET_CLICKED_PRODUCT",
        payload: id
    }
};




export { getAllProducts, selectedProduct };