import { ProductItem } from "@/types";
export enum CATEGORIES_ACTION_TYPES {
  // FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  // FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  // FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
  FETCH_CATEGORIES = "categories/FETCH_CATEGORIES",
}

export type Category = {
  title: string;
  imageUrl: string;
  items: ProductItem[];
};

export type CategoryMap = {
  [key: string]: ProductItem[];
};

export interface CATEGORIES_STORE_STATE {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}
