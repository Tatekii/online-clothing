import { HiOutlineShoppingCart } from "react-icons/hi";
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRootStore } from "@/store/index";
import { ProductItem } from "@/types";

const ProductCardAddButton = ({ product }: { product: ProductItem }) => {
  const { addToCart } = useRootStore("cartStore");
  const handleAddToCart = () => addToCart(product);
  const ProductButton = styled(Button)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  `;
  return (
    <ProductButton
      rightIcon={<HiOutlineShoppingCart />}
      onClick={handleAddToCart}
    >
      Add to card
    </ProductButton>
  );
};
export default ProductCardAddButton;
