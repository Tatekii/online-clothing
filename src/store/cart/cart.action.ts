import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "@reduxjs/toolkit";
import { ProductItem, ProductItemInCart } from "@/types";

const handleAddCartItem = (
  cartItems: ProductItemInCart[],
  productToAdd: ProductItem
): ProductItemInCart[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const handleRemoveCartItem = (
  cartItems: ProductItemInCart[],
  cartItemToRemove: ProductItemInCart
): ProductItemInCart[] => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const handleClearCartItem = (
  cartItems: ProductItemInCart[],
  cartItemToClear: ProductItemInCart
): ProductItemInCart[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

/**
 * Action
 * 设置购物车下拉可见性
 *  */
export const setIsCartOpen = (flag: boolean) =>
  createAction<boolean>(CART_ACTION_TYPES.SET_IS_CART_OPEN)(flag);

/**
 * Action
 * 设置购物车商品
 * */
export const setCartItems = (cartItems: ProductItemInCart[]) =>
  createAction<ProductItemInCart[]>(CART_ACTION_TYPES.SET_CART_ITEMS)(
    cartItems
  );

/** 添加商品&增加数量 */
export const addItemToCart = (
  cartItems: ProductItemInCart[],
  productToAdd: ProductItem
) => {
  const newCartItems = handleAddCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

/** 减少数量&清除商品 */
export const removeItemFromCart = (
  cartItems: ProductItemInCart[],
  cartItemToRemove: ProductItemInCart
) => {
  const newCartItems = handleRemoveCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

/** 清除商品 */
export const clearItemFromCart = (
  cartItems: ProductItemInCart[],
  cartItemToClear: ProductItemInCart
) => {
  const newCartItems = handleClearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
