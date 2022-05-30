import { combineReducers } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories/categories.slice";
import { cartSlice } from "./cart/cart.slice";

/** root reducer */
export default combineReducers({
  categories: categoriesSlice.reducer,
  cart: cartSlice.reducer,
});
