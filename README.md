# Shop App

**[Live demo](https://deeptiwari690.github.io/shop-app/)**

A focused practice project to build mental models for `useState`, `useReducer`, and `useContext` before touching any state management library. Each hook is introduced because the previous one breaks down — not as a syllabus item.

## What's built

A shopping cart with a product grid, a slide-in drawer cart, and a live item count in the header.

## The progression

**Phase 1 — useState**  
Quantity stepper on each product card. State lifted to the card so siblings (stepper + button) can share it.

**Phase 2 — useReducer**  
Cart state with `ADD_ITEM`, `REMOVE_ITEM`, and `CLEAR_CART` actions. Every way the cart can change lives in one reducer instead of scattered inline setState calls.

**Phase 3 — useContext**  
`CartProvider` wraps the app in `main.tsx`. Components consume cart state directly via `useCart()` — no prop drilling.

## Key patterns

- `useState + dispatch` — transient quantity state captured on click and committed to the reducer
- `useRef + useEffect` — imperative `showModal()` / `close()` calls on the native `<dialog>` element
- Native `<dialog>` API — backdrop styling, ESC key sync via `onClose`, backdrop-click detection via `e.target`
