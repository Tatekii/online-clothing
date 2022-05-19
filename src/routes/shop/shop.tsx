import CategoryPreview from "../category-preview/category-preview";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category";
import { useCategoryStore } from "@/store";
import useMount from "@/hooks/useMount";
const Shop = () => {
  // 到shop页面才请求商品数据
  const { loadCategoryData } = useCategoryStore();
  useMount(loadCategoryData);

  return (
    <>
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default observer(Shop);
