import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CartDropdown = () => {
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
      <div className="cart-items" />
      <Button bg="black" color="white" variant="fill">
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
