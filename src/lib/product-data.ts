export const COLORS = [
  { id: "beige", label: "Beige sable", hex: "#C4AA8A" },
  { id: "noir", label: "Noir", hex: "#1a1a1a" },
  { id: "kaki", label: "Kaki", hex: "#6B7045" },
  { id: "marron", label: "Marron foncé", hex: "#4A2E1A" },
] as const;

export const SIZES = [35, 35.5, 36, 37, 38, 38.5, 39, 40, 40.5, 41, 41.5, 42, 43] as const;

export type ColorId = (typeof COLORS)[number]["id"];
export type Size = (typeof SIZES)[number];

export const PRICE = 35.99;
export const PRODUCT_NAME = "Mule NOARA — Daim";
export const STOCK: Record<ColorId, Partial<Record<Size, number>>> = {
  beige:  { 35: 4, 35.5: 3, 36: 5, 37: 8, 38: 12, 38.5: 6, 39: 10, 40: 7, 40.5: 4, 41: 4, 41.5: 3, 42: 3, 43: 2 },
  noir:   { 35: 3, 35.5: 2, 36: 3, 37: 6, 38: 9,  38.5: 5, 39: 11, 40: 8, 40.5: 3, 41: 5, 41.5: 2, 42: 2, 43: 1 },
  kaki:   { 35: 2, 35.5: 2, 36: 4, 37: 5, 38: 8,  38.5: 4, 39: 7,  40: 6, 40.5: 3, 41: 3, 41.5: 2, 42: 2, 43: 1 },
  marron: { 35: 2, 35.5: 2, 36: 3, 37: 4, 38: 7,  38.5: 3, 39: 6,  40: 5, 40.5: 2, 41: 3, 41.5: 2, 42: 2, 43: 1 },
};
