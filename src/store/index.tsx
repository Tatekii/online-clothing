import { useContext, createContext, ReactNode } from "react";
import CartStore from "./cart.store";

class RootStore {
  cartStore;
  constructor() {
    this.cartStore = new CartStore();
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
export const useRootStore = (storeName: keyof RootStore) => {
  const context = useContext(RootStoreContext);
  if (!context) {
    throw new Error("use context in your provider!");
  }
  return context[storeName];
};
