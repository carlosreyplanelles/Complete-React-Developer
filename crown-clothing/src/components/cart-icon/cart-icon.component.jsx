import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { NavigationContext } from "../../contexts/navigation.context";

export function CartIcon() {
  const { showMiniCart, setShowMiniCart } = useContext(NavigationContext);

  const toggleShowMiniCart = () => {
    console.log(showMiniCart);
    setShowMiniCart(!showMiniCart);
  };

  return (
    <div onClick={toggleShowMiniCart} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
