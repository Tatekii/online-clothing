import { DirectCateItem } from "@/types";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  ItemBody,
} from "./directory-item.styles";

interface DirectoryItemProps {
  category: DirectCateItem;
}
const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const handleDirect = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={handleDirect}>
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
