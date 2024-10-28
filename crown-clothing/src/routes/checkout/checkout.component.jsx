import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutCard } from "../../components/checkout-card/checkout-card.componen";

export function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutCard key={item.id} basketItem={item} />;
      })}
      <span className="total">Total: {cartTotal}€</span>
    </div>
  );
}
