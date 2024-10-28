import "./product-card.styles.scss";
import { Button } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

export function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addPorductToCart = () => {
    addToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
      </div>
      <Button
        onClick={addPorductToCart}
        buttonType="inverted"
        text="Add to cart"
      />
    </div>
  );
}
