import { useCartStore } from "@/store";
import CheckoutItem from "@/components/checkout-item/checkout-item";
import { observer } from "mobx-react-lite";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutList,
  Total,
} from "./checkout.styles";
import useMount from "@/hooks/useMount";
const Checkout = () => {
  const { cartItems, currentTotal, toggleCartOpen } = useCartStore();

  // 进来之后把购物车dropdown关了
  useMount(toggleCartOpen);

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
      <CheckoutList>
        {" "}
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutList>

      <Total>TOTAL: ${currentTotal}</Total>
    </CheckoutContainer>
  );
};
export default observer(Checkout);
