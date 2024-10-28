import "./cart-item.styles.scss";

export function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} x {price}€
        </span>
      </div>
    </div>
  );
}
