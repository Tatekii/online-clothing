import { ProductItem } from "@/types";
import { action, makeObservable, observable } from "mobx";
import { getCategoriesAndDocuments } from "@/utils/firebase/firebase.collection";

interface CategoryItem {
  [x: string]: ProductItem[];
}
export default class CategoryStore {
  categories: CategoryItem;
  constructor() {
    this.categories = {};
    makeObservable(this, {
      categories: observable,
      loadCategoryData: action,
    });
    this.loadCategoryData();
  }
  loadCategoryData = async () => {
    this.categories = await getCategoriesAndDocuments();
  };
}
