import { useContext } from "react";
import { CartContext } from "./cartContext";

export function useCart() {
  const value = useContext(CartContext);
  if (value === null) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return value;
}
