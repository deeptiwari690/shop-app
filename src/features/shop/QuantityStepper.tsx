import { Plus, Minus } from "lucide-react";
import { Button } from "@/shared";
import styles from "./QuantityStepper.module.css";

type Props = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function QuantityStepper({ quantity, onIncrement, onDecrement }: Props) {
  return (
    <div className={styles.stepper} role="group" aria-label="quantity">
      <Button
        variant="surfaceObject"
        uniformPadding
        aria-label="Decrease quantity"
        onClick={onDecrement}
        disabled={quantity === 1}
      >
        <Minus />
      </Button>
      <span className={styles.count}>{quantity}</span>
      <Button
        variant="surfaceObject"
        uniformPadding
        aria-label="Increase quantity"
        onClick={onIncrement}
      >
        <Plus />
      </Button>
    </div>
  );
}
