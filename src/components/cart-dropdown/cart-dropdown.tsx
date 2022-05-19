import { Button } from "@chakra-ui/react";
import { useCartStore } from "@/store";
import { observer } from "mobx-react-lite";
import CartDropdownList from "./cart-dropdown-list";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartIsOpen, cartItemsCount } = useCartStore();
  const navigate = useNavigate();

  // 跳转到结算
  const jumpToCheckout = () => navigate("/checkout");

  if (!cartIsOpen) return null; // 未打开直接return

  return (
    <CartDropdownContainer>
      <CartDropdownList />

      <Button
        colorScheme="blackAlpha"
        disabled={cartItemsCount <= 0}
        onClick={jumpToCheckout}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default observer(CartDropdown);
