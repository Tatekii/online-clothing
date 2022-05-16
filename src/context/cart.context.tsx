import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
} from "react";

const CartContext = createContext<
  | {
      isCartOpen: boolean;
      setIsCartOpen: React.Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {
    isCartOpen,
    setIsCartOpen,
  };
  return (
    <CartContext.Provider
      children={children}
      value={value}
    ></CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("use context in your provider!");
  }
  return context;
};
