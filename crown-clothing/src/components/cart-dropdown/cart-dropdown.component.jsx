import "./cart-dropdown.styles.scss";
import { Button } from "../button/button.component";

export function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <Button text="CHECKOUT" />
    </div>
  );
}
