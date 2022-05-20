import { recoveryCartStore } from "@/utils/mobx/mobx.utils";
import { useContext, createContext, ReactNode } from "react";
import CartStore from "./cart.store";
import CategoryStore from "./category.store";
import UserStore from "./user.store";

class RootStore {
  readonly cartStore: CartStore;
  readonly categoryStore: CategoryStore;
  readonly userStore: UserStore;
  constructor() {
    this.cartStore = new CartStore();
    this.categoryStore = new CategoryStore();
    this.userStore = new UserStore();
  }
}

const RootStoreContext = createContext<RootStore | undefined>(undefined);

export const rootStore = new RootStore();
// 创建时检查一遍本地购物车缓存？
recoveryCartStore();

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

// root store hook
export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  if (!context) {
    throw new Error("use context in your provider!");
  }
  return context;
};

export const useCategoryStore = () =>
  useContext(RootStoreContext)?.categoryStore!;
export const useCartStore = () => useContext(RootStoreContext)?.cartStore!;
export const useUserStore = () => useContext(RootStoreContext)?.userStore!;
