import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

// tạo kho rồi xuất ra
export const store = createStore(rootReducer);