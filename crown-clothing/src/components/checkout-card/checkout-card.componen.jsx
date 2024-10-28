import { useContext } from "react";
import "./checkout-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";
export function CheckoutCard({ basketItem, decreaseHandler }) {
  const { name, quantity, price, imageUrl } = basketItem;
  const { addToCart, removeCartItem, removeCartItemFromBasket } =
    useContext(CartContext);

  const addItemHandler = () => {
    addToCart(basketItem);
  };
  const removeItemHandler = () => {
    removeCartItem(basketItem);
  };
  const clearItemHandler = () => {
    removeCartItemFromBasket(basketItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div onClick={removeItemHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItemHandler} className="arrow">
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}
