import { actions } from "../constant/action-types";

const initState = []

// get all products
export const allProductReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case actions?.GET_ALL_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}

// get selected products
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actions?.GET_CLICKED_PRODUCT:
            return { ...state, product: payload }
        default:
            return state;
    }
}