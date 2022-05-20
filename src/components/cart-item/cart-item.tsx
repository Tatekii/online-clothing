import { ProductItem } from "@/types";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import {
  CartItemContainer,
  CartItemDetail,
  CartItemImg,
} from "./cart-item.styles";

interface ProductInCart extends ProductItem {
  quantity: number;
}
interface CartItemProps {
  cartItem: ProductInCart;
}
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

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

export default observer(CartItem);
