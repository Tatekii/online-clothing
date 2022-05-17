import { CartItem } from "@/store/cart.store";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/store";
import styled from "@emotion/styled";
import { IconButton } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";

const CheckoutItem: FC<{ cartItem: CartItem }> = ({ cartItem }) => {
  const {
    name,
    imageUrl,
    price,
    quantity,
    increaseQuantity,
    decreaseQuantity,
  } = cartItem;

  const { removeFromCart } = useRootStore().cartStore;

  const removeItemHandler = () => decreaseQuantity();
  const addItemHandler = () => increaseQuantity();
  const clearItemHandler = () => removeFromCart(cartItem);

  const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    .name,
    .quantity,
    .price {
      width: 23%;
    }

    .quantity {
      display: flex;

      .arrow {
        cursor: pointer;
      }

      .value {
        margin: 0 10px;
      }
    }
  `;

  const ImgContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  `;

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
