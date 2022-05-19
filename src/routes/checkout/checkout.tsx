import { useCartStore } from "@/store";
import styled from "@emotion/styled";
import CheckoutItem from "@/components/checkout-item/checkout-item";
import { observer } from "mobx-react-lite";
const Checkout = () => {
  const { cartItems, currentTotal } = useCartStore();

  const CheckoutContainer = styled.div`
    width: 55%;
    min-width: 800px;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
  `;

  const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  `;

  const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  `;
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${currentTotal}</Total>
    </CheckoutContainer>
  );
};
export default observer(Checkout);
