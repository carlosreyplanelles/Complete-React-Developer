import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../cart-item/cart-item.component";

export function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
      <Button onClick={goToCheckoutHandler} text="CHECKOUT" />
    </div>
  );
}
