import CategoryPreviewList from "@/components/category-preview-list/category-preview-list";
import { useCategoryStore } from "@/store";
import { observer } from "mobx-react-lite";

const CategoriesPreview = () => {
  const { categoriesMap } = useCategoryStore();

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreviewList key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default observer(CategoriesPreview);
