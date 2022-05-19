import { useCartStore } from "@/store";
import CartItem from "../cart-item/cart-item";
import { observer } from "mobx-react-lite";
import { CartItems, EmptyMessage } from "./cart-dropdown-list.styles";

const CartDropdownList = () => {
  const { cartItems } = useCartStore();

  return (
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>
  );
};
export default observer(CartDropdownList);
