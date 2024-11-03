import { useContext } from "react";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./cart-icon.styles";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

export function CartIcon() {
  const { showMiniCart, setShowMiniCart, itemsCount } = useContext(CartContext);

  const toggleShowMiniCart = () => {
    setShowMiniCart(!showMiniCart);
  };

  return (
    <CartIconContainer onClick={toggleShowMiniCart}>
      <ShoppingIconContainer>
        <ShoppingIcon className="shopping-icon" />
      </ShoppingIconContainer>
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
}
