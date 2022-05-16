import { ReactComponent as Cart } from "@/assets/cart.svg";
import { useCart } from "@/context/cart.context";
import styled from "@emotion/styled";
// import { useState } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useCart();

  /** 切换打开购物车 */
  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const CartIconContainer = styled.div`
    width: 50px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;

  const Icon = styled(Cart)`
    width: 24px;
    height: 24px;
  `;

  const CartCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  `;
  return (
    <CartIconContainer onClick={() => toggleCartOpen()}>
      <Icon />
      <CartCount>0</CartCount>
    </CartIconContainer>
  );
};
export default CartIcon;
