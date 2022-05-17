import { ProductItem } from "@/types";
import { action, computed, makeObservable, observable } from "mobx";

export class CartItem {
  quantity;
  id;
  name;
  imageUrl;
  price;
  rootCart;
  constructor(item: ProductItem, rootCart: CartStore) {
    this.quantity = 1;
    this.id = item.id;
    this.name = item.name;
    this.imageUrl = item.imageUrl;
    this.price = item.price;
    this.rootCart = rootCart;
    makeObservable(this, {
      quantity: observable,
      increaseQuantity: action,
      decreaseQuantity: action,
      setQuantity: action,
    });
  }
  increaseQuantity = () => {
    this.quantity++;
  };
  decreaseQuantity = () => {
    // 如果减少到0 ，从store中删除

    if (this.quantity > 1) this.quantity--;
    else this.rootCart.removeFromCart(this);
  };
  setQuantity = (n: number) => {
    this.quantity = n;
  };
}

export default class CartStore {
  cartItems: CartItem[];
  cartIsOpen: boolean;
  constructor() {
    this.cartItems = []; // 购物车项目
    this.cartIsOpen = false; // 购物车是否打开
    makeObservable(this, {
      cartItems: observable,
      cartIsOpen: observable,
      addToCart: action,
      toggleCartOpen: action,
      currentTotal: computed,
      removeFromCart: action,
    });
  }
  /** 购物车项目总数量 */
  get cartItemsCount() {
    return this.cartItems.reduce((base, cur) => {
      base += cur.quantity;
      return base;
    }, 0);
  }
  /** 当前金额 */
  get currentTotal() {
    return this.cartItems.reduce((base, cur) => {
      base += cur.quantity * cur.price;
      return base;
    }, 0);
  }
  /** 添加到购物车 */
  addToCart = (item: ProductItem) => {
    // 检查是否存在
    const { id } = item;
    const inCart = this.cartItems.find((i) => i.id === id);
    if (!inCart) {
      this.cartItems.push(new CartItem(item, this));
    } else {
      inCart.increaseQuantity();
    }
  };
  removeFromCart = (item: ProductItem) => {
    const { id } = item;
    this.cartItems = this.cartItems.filter((i) => i.id !== id);
  };
  toggleCartOpen = () => {
    this.cartIsOpen = !this.cartIsOpen;
  };
}
