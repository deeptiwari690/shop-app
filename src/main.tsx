import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { App } from "./App";
import { CartProvider } from "./features/shop/CartProvider";
import "./global-styles/tokens.css";
import "./global-styles/base.css";
import "./global-styles/utils.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkeletonTheme
      baseColor="var(--clr-surface-object)"
      highlightColor="color-mix(in hsl, var(--clr-surface-object), white 8%)"
    >
      <CartProvider>
        <App />
      </CartProvider>
    </SkeletonTheme>
  </StrictMode>,
);
