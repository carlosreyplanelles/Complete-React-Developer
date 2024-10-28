import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

export function CartIcon() {
  const { showMiniCart, setShowMiniCart, itemsCount } = useContext(CartContext);

  const toggleShowMiniCart = () => {
    setShowMiniCart(!showMiniCart);
  };

  return (
    <div onClick={toggleShowMiniCart} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
}
