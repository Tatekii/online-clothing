import CategoryItem from "../category-item/category-item";
import styled from "@emotion/styled";
import { CateItem } from "@/types";
interface CategoryProps {
  categories: CateItem[];
}
const Category = ({ categories }: CategoryProps) => {
  const CategoryContainer = styled.div`
    padding: 0 15px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12.5px;
  `;

  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoryContainer>
  );
};
export default Category;
