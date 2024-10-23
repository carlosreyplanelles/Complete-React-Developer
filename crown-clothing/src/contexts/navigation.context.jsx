import { createContext, useState } from "react";

export const NavigationContext = createContext({
  showMiniCart: false,
  setShowMiniCart: () => null,
});

export const NavigationProvider = ({ children }) => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const value = { showMiniCart, setShowMiniCart };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
