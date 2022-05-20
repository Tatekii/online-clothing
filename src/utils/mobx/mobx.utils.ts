import { rootStore } from "@/store";
const CART_LOCALSTORAGE_KEY = "__local__cart__";

// export const presistStore = (key:keyof typeof rootStore) => {

// }

/** 将store同步到localstorage */
export const presistCartStore = async () => {
  const { cartItems } = await rootStore.cartStore;
  const _cartItems = JSON.stringify(cartItems);
  localStorage.setItem(CART_LOCALSTORAGE_KEY, _cartItems);
};

/** 从本地缓存恢复store */
export const recoveryCartStore = () => {
  const local = localStorage.getItem(CART_LOCALSTORAGE_KEY);
  if (local) {
    const _local = JSON.parse(local);
    rootStore.cartStore.recoveryFormLocal(_local);
  }
};
