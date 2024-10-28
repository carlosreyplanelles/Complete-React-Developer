import { useContext } from "react";
import "./checkout-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";
export function CheckoutCard({ basketItem, decreaseHandler }) {
  const { name, quantity, price, imageUrl } = basketItem;
  const { addToCart, removeCartItemUnit, removeCartItem } =
    useContext(CartContext);

  const increase = () => {
    addToCart(basketItem);
  };
  const decrease = () => {
    removeCartItemUnit(basketItem);
  };

  const remove = () => {
    removeCartItem(basketItem);
  };
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <div>
        <span onClick={decrease}> - </span>
        <span>{quantity}</span>
        <span onClick={increase}> + </span>
      </div>
      <span>{price}</span>
      <span onClick={remove}> x </span>
    </div>
  );
}
