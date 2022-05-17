import { useContext, createContext, ReactNode } from "react";
import CartStore from "./cart.store";
import CategoryStore from "./category.store";

class RootStore {
  readonly cartStore: CartStore;
  readonly categoryStore: CategoryStore;
  constructor() {
    this.cartStore = new CartStore();
    this.categoryStore = new CategoryStore();
  }
}

const RootStoreContext = createContext<RootStore | undefined>(undefined);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const rootStore = new RootStore();
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
