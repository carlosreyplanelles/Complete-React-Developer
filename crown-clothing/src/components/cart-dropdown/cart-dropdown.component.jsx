import "./cart-dropdown.styles.scss";

import { useContext } from "react";

import { Button } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

export function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
      <Link to="/checkout">
        <Button text="CHECKOUT" />
      </Link>
    </div>
  );
}
