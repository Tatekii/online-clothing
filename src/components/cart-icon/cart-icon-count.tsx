import { useCartStore } from "@/store";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";

const CartIconCount = () => {
  const { cartItemsCount } = useCartStore();

  const CartCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  `;
  return <CartCount>{cartItemsCount}</CartCount>;
};

export default observer(CartIconCount);
