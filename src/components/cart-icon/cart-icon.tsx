import { ReactComponent as Cart } from "@/assets/cart.svg";
import styled from "@emotion/styled";
import { useRootStore } from "@/store";
import CartIconCount from "./cart-icon-count";

const CartIcon = () => {
  const { toggleCartOpen } = useRootStore().cartStore;

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

  return (
    <CartIconContainer onClick={() => toggleCartOpen()}>
      <Icon />
      <CartIconCount />
    </CartIconContainer>
  );
};
export default CartIcon;
