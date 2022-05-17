import { ProductItem } from "@/types";
import { FC } from "react";
import styled from "@emotion/styled";
import ProductCardAddButton from "./product-card-add-button";

const ProductCard: FC<{ product: ProductItem }> = ({ product }) => {
  const { name, price, imageUrl } = product;

  const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    justify-content: space-between;
    &:hover {
      img {
        opacity: 0.8;
      }

      button {
        opacity: 0.85;
        display: flex;
      }
    }
  `;

  const ProductImg = styled.img`
    width: 100%;
    height: 320px;
    object-fit: cover;
    /* padding-bottom: 5px; */
  `;

  const ProductDetail = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  `;

  return (
    <ProductCardContainer>
      <ProductImg src={imageUrl} alt={`${name}`} />
      <ProductDetail>
        <span>{name}</span>
        <span>{price}</span>
      </ProductDetail>
      <ProductCardAddButton product={product} />
    </ProductCardContainer>
  );
};
export default ProductCard;
