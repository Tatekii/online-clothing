import styled from "@emotion/styled";

const CategoryItem = ({ category }: any) => {
  const { imageUrl, title } = category;

  const CategoryItemContainer = styled.div`
    min-width: 30%;
    height: 24rem;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid black;
    margin: 0 0.75rem 1.5rem;
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
      height: 38rem;
    }
    &:first-of-type {
      margin-right: 7.5px;
    }
    &:last-of-type {
      margin-left: 7.5px;
    }
  `;

  const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  `;

  const ItemBody = styled.div`
    height: 9rem;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    h2 {
      font-weight: bold;
      margin: 0 0.6rem 0;
      font-size: 2.2rem;
      color: #4a4a4a;
    }
    p {
      font-weight: lighter;
      font-size: 1.6rem;
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
