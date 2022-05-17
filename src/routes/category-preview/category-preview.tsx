import CategoryPreviewList from "@/components/category-preview-list/category-preview-list";
import { useRootStore } from "@/store";

const CategoriesPreview = () => {
  const { categories } = useRootStore().categoryStore;

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreviewList key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
