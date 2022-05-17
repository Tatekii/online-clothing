export interface CateItem {
  id: number;
  title: string;
  imageUrl: string;
}

export interface ProductItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductItemInCart extends ProductItem {
  quantity: number;
}

export interface ProductCategory {
  title: string;
  items: ProductItem[];
}
