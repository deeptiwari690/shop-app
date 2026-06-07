import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "@/shared";
import styles from "./ProductCard.module.css";
import { QuantityStepper } from "./QuantityStepper";
import type { Product } from "./cartReducer";
import { useCart } from "./useCart";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [lastAdded, setLastAdded] = useState<number | null>(null);
  const { onAddToCart } = useCart();

  useEffect(() => {
    if (lastAdded === null) return;
    const id = setTimeout(() => {
      setLastAdded(null);
    }, 2000);
    return () => clearTimeout(id);
  }, [lastAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>
          {product.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}
        </p>
      </div>
      <div className={styles.actions}>
        <div className={styles.stepperRow}>
          <QuantityStepper
            quantity={quantity}
            onIncrement={() => setQuantity(prev => prev + 1)}
            onDecrement={() => setQuantity(prev => prev - 1)}
          />
          {lastAdded !== null && (
            <p className={styles.confirmation}>
              Added <strong>{lastAdded}</strong>
              <span className={styles.toCart}> to cart</span>
              <Check />
            </p>
          )}
        </div>
        <Button
          variant="surfaceObject"
          size="lg"
          onClick={() => {
            onAddToCart({ ...product, quantity });
            setLastAdded(quantity);
            setQuantity(1);
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
