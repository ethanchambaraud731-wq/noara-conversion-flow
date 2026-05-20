import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { computeCart, emptyCart, type Cart, type CartItem } from "@/lib/cart-types";
import { addToCart } from "@/lib/server-fns";
import type { ColorId, Size } from "@/lib/product-data";

type CartContextValue = {
  cart: Cart;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (color: ColorId, size: Size, quantity?: number) => Promise<{ success: boolean; error?: string }>;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "noara_cart";

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const cart = computeCart(items);

  const addItem = useCallback(
    async (color: ColorId, size: Size, quantity = 1) => {
      const result = await addToCart({
        data: { color, size, quantity, currentItems: items },
      });

      if (result.success) {
        const updated = result.cart.items as CartItem[];
        setItems(updated);
        saveCart(updated);
        setIsOpen(true);
      }

      return result.success
        ? { success: true }
        : { success: false, error: (result as { success: false; error: string }).error };
    },
    [items]
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const updated = prev.filter((i) => i.id !== id);
      saveCart(updated);
      return updated;
    });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => {
        const updated = prev.filter((i) => i.id !== id);
        saveCart(updated);
        return updated;
      });
    } else {
      setItems((prev) => {
        const updated = prev.map((i) => (i.id === id ? { ...i, quantity } : i));
        saveCart(updated);
        return updated;
      });
    }
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    saveCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
