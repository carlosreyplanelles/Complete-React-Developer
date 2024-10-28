import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  showMiniCart: false,
  setShowMiniCart: () => null,
  cartItems: [],
  addItemToCart: () => {},
  itemsCount: 0,
});

const addCartItem = (cartItems, item) => {
  //find the item into cartItems
  const foundItem = cartItems.find((cartItem) => {
    return cartItem.id === item.id;
  });
  //If found increment quantity
  if (foundItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array
  return [...cartItems, { ...item, quantity: 1 }];
};

const removeItemUnit = (cartItems, item) => {
  const foundItem = cartItems.find((cartItem) => {
    return cartItem.id === item.id;
  });

  if (foundItem) {
    const updartedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity--;
      }
      return cartItem;
    });
    return updartedCart.filter((item) => item.quantity > 0);
  }
};

const removeItem = (cartItems, item) => {
  const foundItem = cartItems.find((cartItem) => {
    return cartItem.id === item.id;
  });

  if (foundItem) {
    const filteredItems = cartItems.filter(
      (cartItem) => item.id !== cartItem.id
    );
    console.log(filteredItems);
    return filteredItems;
  }
};

export const CartProvider = ({ children }) => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  const addToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  const removeCartItemUnit = (item) => {
    setCartItems(removeItemUnit(cartItems, item));
  };
  const removeCartItem = (item) => {
    console.log(cartItems);
    setCartItems(removeItem(cartItems, item));
  };

  useEffect(() => {
    setItemsCount(
      cartItems.reduce(
        (itemsInBasket, item) => itemsInBasket + item.quantity,
        0
      )
    );
  }, [cartItems]);

  const value = {
    showMiniCart,
    setShowMiniCart,
    cartItems,
    addToCart,
    itemsCount,
    removeCartItemUnit,
    removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
