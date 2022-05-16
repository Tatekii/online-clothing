import { createContext, ReactNode, useContext, useState } from "react";

import PRODUCTS from "@/mock-shop-data.json";
import { ProductItem } from "@/types";

export const ProductContext = createContext<{ products: ProductItem[] }>({
  products: [],
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <ProductContext.Provider
      value={{ products }}
      children={children}
    ></ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("use context in your provider!");
  }
  return context;
};
