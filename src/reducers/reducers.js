import ProductListReducer from "./ProductListReducer";
import CategoryReducer from "./CategoryReducer";
import AllProductsReducer from "./AllProductsReducer";
import CartReducer from "./CartReducer";
import { combineReducers } from "redux";

export default combineReducers({
  AllProducts: AllProductsReducer,
  ProductList: ProductListReducer,
  Categories: CategoryReducer,
  Cart: CartReducer,
});
