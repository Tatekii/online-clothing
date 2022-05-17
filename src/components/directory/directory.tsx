import DirectoryItem from "../directory-item/directory-item";
import styled from "@emotion/styled";
import { CateItem } from "@/types";
interface CategoryProps {
  categories: CateItem[];
}
/**
 * 首页显示的分类入口
 */
const Directory = ({ categories }: CategoryProps) => {
  const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12.5px;
  `;

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
export default Directory;
