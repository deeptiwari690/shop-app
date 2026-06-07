import type { Product } from "./cartReducer";
import { ProductCard } from "./ProductCard";
import styles from "./ProductList.module.css";

const products: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 2499 },
  { id: 2, name: "Mechanical Keyboard", price: 4999 },
  { id: 3, name: "USB-C Hub", price: 1799 },
  { id: 4, name: "Web Cam", price: 3299 },
];

export function ProductList() {
  return (
    <div className={styles.list}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
