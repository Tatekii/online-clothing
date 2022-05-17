import CategoryPreview from "../category-preview/category-preview";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category";
const Shop = () => {
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
