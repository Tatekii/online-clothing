import styled from "@emotion/styled";
import { CateItem } from "@/types";

interface DirectoryItemProps {
  category: CateItem;
}
const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { imageUrl, title } = category;

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

  const DirectoryItemContainer = styled.div`
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
      /* 使用@emotion/babel-plugin */
      ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      ${ItemBody} {
        opacity: 0.9;
      }
    }
    .large {
      height: 380px;
    }
  `;

  return (
    <DirectoryItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></BackgroundImage>
      <ItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </ItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
