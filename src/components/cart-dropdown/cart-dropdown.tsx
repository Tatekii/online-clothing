import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRootStore } from "@/store";
import { observer } from "mobx-react-lite";
import CartDropdownList from "./cart-dropdown-list";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartIsOpen, cartItemsCount } = useRootStore().cartStore;
  const navigate = useNavigate();

  // 跳转到结算
  const jumpToCheckout = () => navigate("/checkout");

  if (!cartIsOpen) return null; // 未打开直接return

  const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 2px solid black;
    background-color: white;
    top: 60px;
    right: 25px;
    z-index: 5;
    .cart-items {
      height: 260px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    }
  `;

  return (
    <CartDropdownContainer>
      <CartDropdownList />
      <Button
        colorScheme="blackAlpha"
        disabled={cartItemsCount <= 0}
        onClick={jumpToCheckout}
      >
        {cartItemsCount <= 0 ? "EMPTY CART" : "GO TO CHECKOUT"}
      </Button>
    </CartDropdownContainer>
  );
};

export default observer(CartDropdown);
