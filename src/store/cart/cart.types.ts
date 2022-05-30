import { ProductItemInCart } from "@/types";

export enum CART_ACTION_TYPES {
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
}

export interface CART_STORE_STATE {
  readonly cartItems: ProductItemInCart[];
  readonly isCartOpen: boolean;
}
