import { createContext } from "react";
import type { CartItem } from "./cartReducer";

type CartContextValue = {
  cart: CartItem[];
  onAddToCart: (item: CartItem) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
};

export const CartContext = createContext<CartContextValue | null>(null);
