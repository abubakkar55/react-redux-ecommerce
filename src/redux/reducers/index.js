import { combineReducers } from "redux";
import { allProductReducer, selectedProductReducer } from './productReducer';
import { cardReducer } from './cartReducer';

export const rootReducer = combineReducers({
    allProductReducer,
    selectedProductReducer,
    cardReducer
});