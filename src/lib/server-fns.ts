import { createServerFn } from "@tanstack/react-start";
import { COLORS, PRICE, PRODUCT_NAME, SIZES, STOCK } from "./product-data";
import { computeCart, type CartItem } from "./cart-types";
import type { ColorId, Size } from "./product-data";

/* ─── GET /api/product ─────────────────────────────────────────── */
export const getProduct = createServerFn({ method: "GET" }).handler(async () => {
  return {
    name: PRODUCT_NAME,
    price: PRICE,
    colors: COLORS,
    sizes: SIZES,
    stock: STOCK,
  };
});

/* ─── POST /api/cart/add ───────────────────────────────────────── */
type AddToCartData = {
  color: ColorId;
  size: number;
  quantity: number;
  currentItems: CartItem[];
};

const VALID_COLORS: ColorId[] = ["beige", "noir", "kaki", "marron"];

export const addToCart = createServerFn({ method: "POST" }).handler(
  async ({ data }: { data: AddToCartData }) => {
    const { color, size, quantity, currentItems } = data;

    // Validate color
    if (!VALID_COLORS.includes(color)) {
      return { success: false as const, error: "Couleur invalide" };
    }

    // Validate size
    if (!(SIZES as readonly number[]).includes(size)) {
      return { success: false as const, error: "Taille invalide" };
    }

    const sizeTyped = size as Size;

    // Stock check
    const available = STOCK[color][sizeTyped] ?? 0;
    const alreadyInCart =
      currentItems.find((i) => i.color === color && i.size === size)?.quantity ?? 0;

    if (alreadyInCart + quantity > available) {
      return {
        success: false as const,
        error:
          available === 0
            ? "Rupture de stock"
            : `Stock limité (${available - alreadyInCart} restant${available - alreadyInCart > 1 ? "s" : ""})`,
      };
    }

    const colorInfo = COLORS.find((c) => c.id === color)!;
    const itemId = `${color}-${size}`;
    const existingIndex = currentItems.findIndex((i) => i.id === itemId);

    let updatedItems: CartItem[];
    if (existingIndex >= 0) {
      updatedItems = currentItems.map((item, idx) =>
        idx === existingIndex ? { ...item, quantity: item.quantity + quantity } : item
      ) as CartItem[];
    } else {
      updatedItems = [
        ...currentItems,
        {
          id: itemId,
          color,
          colorLabel: colorInfo.label,
          size: sizeTyped,
          quantity,
          price: PRICE,
          name: PRODUCT_NAME,
        },
      ] as CartItem[];
    }

    return { success: true as const, cart: computeCart(updatedItems) };
  }
);

/* ─── POST /api/order ──────────────────────────────────────────── */
type OrderData = {
  items: CartItem[];
  email: string;
  firstName: string;
  lastName: string;
};

export const submitOrder = createServerFn({ method: "POST" }).handler(
  async ({ data }: { data: OrderData }) => {
    if (data.items.length === 0) {
      return { success: false as const, error: "Panier vide" };
    }
    if (!data.email.includes("@")) {
      return { success: false as const, error: "Email invalide" };
    }
    if (!data.firstName.trim() || !data.lastName.trim()) {
      return { success: false as const, error: "Prénom et nom requis" };
    }

    // Ici on brancherait Stripe / CRM / base de données
    const orderId = `NOARA-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    console.log("Nouvelle commande", orderId, data);

    return {
      success: true as const,
      orderId,
      message: `Commande ${orderId} confirmée ! Vous recevrez un email à ${data.email}.`,
    };
  }
);
