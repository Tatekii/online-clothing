import { ProductItemInCart } from "@/types";
import { createSlice, createAction } from "@reduxjs/toolkit";
import { CART_STORE_STATE } from "./cart.types";
import { CART_ACTION_TYPES } from "./cart.types";

export const cartInitialState: CART_STORE_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const setCartItems = createAction<ProductItemInCart[]>(
  CART_ACTION_TYPES.SET_CART_ITEMS
);
const setIsCartOpen = createAction<boolean>(CART_ACTION_TYPES.SET_IS_CART_OPEN);

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCartItems, (state, action) => {
      if (setCartItems.match(action)) {
        return {
          ...state,
          cartItems: action.payload,
        };
      }
    });
    builder.addCase(setIsCartOpen, (state, action) => {
      return {
        ...state,
        isCartOpen: action.payload,
      };
    });
  },
});
