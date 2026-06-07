import { useRef, useEffect } from "react";
import { Trash2, X, ShoppingCart } from "lucide-react";
import { Button } from "@/shared";
import { useCart } from "./useCart";
import styles from "./Cart.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function Cart({ isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { cart, onRemove, onClear } = useCart();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      className={styles.card}
      ref={dialogRef}
      onClose={onClose}
      onClick={e => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Cart</h2>
        <div className={styles.controls}>
          {cart.length > 0 && (
            <Button
              variant="surfaceObject"
              onClick={onClear}
            >
              Clear cart
            </Button>
          )}
          <Button
            aria-label="Close cart"
            shape="circle"
            uniformPadding
            onClick={onClose}
            variant="surfaceObject"
          >
            <X />
          </Button>
        </div>
      </div>
      {cart.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.icon}>
            <ShoppingCart size={80} strokeWidth={1} />
            <span className={styles.badge}>0</span>
          </div>
          <p>Cart is empty</p>
        </div>
      ) : (
        <ul className={styles.items} role="list">
          {cart.map(item => (
            <li key={item.id} className={styles.item}>
              <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.amount}>
                  {item.price.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}{" "}
                  × {item.quantity}
                </p>
              </div>
              <Button
                variant="surfaceObject"
                uniformPadding
                aria-label="Remove item"
                onClick={() => onRemove(item.id)}
              >
                <Trash2 />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.footer}>
        <p className={styles.label}>Total</p>
        <p className={styles.total}>
          {cart
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            })}
        </p>
      </div>
    </dialog>
  );
}
