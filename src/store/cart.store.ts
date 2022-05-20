import { ProductItem, ProductItemInCart } from "@/types";
import { presistCartStore } from "@/utils/mobx/mobx.utils";
import { action, reaction, computed, makeObservable, observable } from "mobx";

export class CartItem {
  quantity;
  id;
  name;
  imageUrl;
  price;
  constructor(item: ProductItemInCart) {
    this.quantity = item.quantity;
    this.id = item.id;
    this.name = item.name;
    this.imageUrl = item.imageUrl;
    this.price = item.price;
    makeObservable(this, {
      quantity: observable,
      increaseQuantity: action,
      decreaseQuantity: action,
      setQuantity: action,
    });
    // 监听商品数量变化
    reaction(
      () => this.quantity,
      () => {
        presistCartStore();
      }
    );
  }
  increaseQuantity = () => {
    this.quantity++;
  };
  decreaseQuantity = () => {
    // 如果减少到0 ，从store中删除
    if (this.quantity > 1) this.quantity--;
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
      recoveryFormLocal: action,
      closeCartOpen: action,
    });
    // 监听购物车内商品种类变化
    reaction(
      () => this.cartItems,
      () => {
        presistCartStore();
      }
    );
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
      this.cartItems = [
        ...this.cartItems,
        new CartItem({ ...item, quantity: 1 }),
      ];
      // this.cartItems.push(new CartItem({ ...item, quantity: 1 }));
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
  closeCartOpen = () => {
    this.cartIsOpen = false;
  };
  //** 恢复store的action */
  recoveryFormLocal = (source: ProductItemInCart[]) => {
    this.cartItems = source.map((c) => new CartItem(c));
  };
}
