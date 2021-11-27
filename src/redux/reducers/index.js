import { combineReducers } from "redux";
import { allProductReducer, selectedProductReducer } from './productReducer';

export const rootReducer = combineReducers({
    allProductReducer,
    selectedProductReducer
});