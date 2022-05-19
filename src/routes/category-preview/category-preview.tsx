import CategoryPreviewList from "@/components/category-preview-list/category-preview-list";
import { useCategoryStore } from "@/store";

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

export default CategoriesPreview;
