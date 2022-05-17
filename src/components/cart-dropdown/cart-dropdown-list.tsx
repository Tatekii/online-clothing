import { useRootStore } from "@/store";
import CartItem from "../cart-item/cart-item";
import { observer } from "mobx-react-lite";
const CartDropdownList = () => {
  const { cartValidItems } = useRootStore().cartStore;
  return (
    <div className="cart-items">
      {cartValidItems.length ? (
        cartValidItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
  );
};
export default observer(CartDropdownList);
