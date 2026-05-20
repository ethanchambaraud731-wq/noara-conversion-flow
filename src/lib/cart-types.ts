import type { ColorId, Size } from "./product-data";

export type CartItem = {
  id: string;
  color: ColorId;
  colorLabel: string;
  size: Size;
  quantity: number;
  price: number;
  name: string;
};

export type Cart = {
  items: CartItem[];
  total: number;
  count: number;
};

export function emptyCart(): Cart {
  return { items: [], total: 0, count: 0 };
}

export function computeCart(items: CartItem[]): Cart {
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);
  return { items, total, count };
}
