import { ProductCategory, ProductItem } from "@/types";
import { action, computed, makeObservable, observable } from "mobx";
import { getCategoriesAndDocuments } from "@/utils/firebase/firebase.collection";

export default class CategoryStore {
  categories: ProductCategory[];
  constructor() {
    this.categories = [];
    makeObservable(this, {
      categories: observable,
      loadCategoryData: action,
      categoriesMap: computed,
    });
    // 页面不需要时先不执行 this.loadCategoryData();
  }
  /** 加载商品分类数据 */
  loadCategoryData = async () => {
    this.categories = await getCategoriesAndDocuments();
  };

  get categoriesMap(): {
    [x: string]: ProductItem[];
  } {
    return this.categories.reduce((acc: any, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
}
