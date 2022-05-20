import { ProductCategory, ProductItem } from "@/types";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
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
  }
  /** 加载商品分类数据 */
  loadCategoryData = async () => {
    const _new = await getCategoriesAndDocuments();
    runInAction(() => {
      this.categories = _new;
    });
  };

  get categoriesMap(): {
    [x: string]: ProductItem[];
  } {
    return this.categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      Reflect.set(acc, title.toLowerCase(), items);
      return acc;
    }, {});
  }
}
