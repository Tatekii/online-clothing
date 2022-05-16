import { useRootStore } from "@/store";
import styled from "@emotion/styled";
const CartIconCount = () => {
  const { cartItemsCount } = useRootStore("cartStore");
  const CartCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  `;
  return <CartCount>{cartItemsCount}</CartCount>;
};
export default CartIconCount;
