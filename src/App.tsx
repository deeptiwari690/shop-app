import { useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./shared";
import { ProductList } from "./features/shop/ProductList";
import { Cart } from "./features/shop/Cart";
import styles from "./App.module.css";
import { useCart } from "./features/shop/useCart";

export function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { cart } = useCart();

  return (
    <div className={styles.layout}>
      <header className={styles.header} ref={headerRef}>
        <h1 className={styles.title}>Shop</h1>
        <Button onClick={() => setCartOpen(true)}>
          <ShoppingCart />
          <span>{cart.reduce((sum, i) => sum + i.quantity, 0)}</span>
        </Button>
      </header>
      <>
        <ProductList />
        {cartOpen && (
          <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        )}
      </>
    </div>
  );
}
