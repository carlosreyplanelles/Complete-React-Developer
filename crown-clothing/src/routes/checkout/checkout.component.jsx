import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutCard } from "../../components/checkout-card/checkout-card.componen";

export function Checkout() {
  const { cartItems } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartItems.reduce((totalPrice, item) => {
      return totalPrice + item.quantity * item.price;
    }, 0);
  };
  const total = calculateTotalPrice();

  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <CheckoutCard basketItem={item} />
          </div>
        );
      })}
      <div>
        <span>Total: {total}</span>
      </div>
    </div>
  );
}
