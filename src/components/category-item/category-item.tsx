import styled from "@emotion/styled";
import { CateItem } from "@/types";

interface CategoryItemProps {
  category: CateItem;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, title } = category;

  const CategoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    overflow: hidden;
    &:hover {
      cursor: pointer;
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      & .category-body-container {
        opacity: 0.9;
      }
    }
    &.large {
      height: 380px;
    }
  `;

  const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  `;

  const ItemBody = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #4a4a4a;
    }
    p {
      font-weight: lighter;
      font-size: 16px;
    }
  `;

  return (
    <CategoryItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></BackgroundImage>
      <ItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </ItemBody>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
