import { useReducer, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import { type CartItem, cartReducer } from "./cartReducer";

type ProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: ProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const handleAddToCart = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddToCart: handleAddToCart,
        onRemove: handleRemove,
        onClear: handleClear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
