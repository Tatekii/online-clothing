import { ProductItem } from "@/types";
import styled from "@emotion/styled";
import { FC } from "react";

interface ProductInCart extends ProductItem {
  quantity: number;
}
interface CartItemProps {
  cartItem: ProductInCart;
}
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
  `;

  const CartItemImg = styled.img`
    width: 30%;
  `;

  const CartItemDetail = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
  `;

  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <CartItemDetail>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
