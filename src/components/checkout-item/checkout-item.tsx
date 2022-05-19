import { CartItem } from "@/store/cart.store";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useCartStore } from "@/store";
import { IconButton } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import { CartItemContainer, ImgContainer } from "./checkout-item.styles";

const CheckoutItem: FC<{ cartItem: CartItem }> = ({ cartItem }) => {
  const {
    name,
    imageUrl,
    price,
    quantity,
    increaseQuantity,
    decreaseQuantity,
  } = cartItem;

  const { removeFromCart } = useCartStore();

  const removeItemHandler = () => decreaseQuantity();
  const addItemHandler = () => increaseQuantity();
  const clearItemHandler = () => removeFromCart(cartItem);

  return (
    <CartItemContainer>
      <ImgContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImgContainer>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <IconButton
        aria-label="remove item from cart"
        onClick={clearItemHandler}
        icon={<GrClose />}
      />
    </CartItemContainer>
  );
};
export default observer(CheckoutItem);
