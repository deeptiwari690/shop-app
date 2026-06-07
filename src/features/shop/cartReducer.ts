export type Product = {
  id: number;
  name: string;
  price: number;
};

export type CartItem = Product & { quantity: number };

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "CLEAR_CART" };

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(item => item.id === action.payload.id);
      if (!existing) return [...state, action.payload];
      return state.map(item =>
        item.id === existing.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item,
      );
    }
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
