import { ProductItem } from "@/types";
import { FC } from "react";
import ProductCardAddButton from "./product-card-add-button";
import {
  ProductCardContainer,
  ProductDetail,
  ProductImg,
} from "./product-card.styles";

const ProductCard: FC<{ product: ProductItem }> = ({ product }) => {
  const { name, price, imageUrl } = product;

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
