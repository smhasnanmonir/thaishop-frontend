/**
 * Offline Cart Store — localStorage-backed, no backend dependency.
 * Dispatches CustomEvents so UI components can react.
 */

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  slug: string;
}

const STORAGE_KEY = "tok_cart";

// ── Helpers ────────────────────────────────────────────────────────────
function readItems(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeItems(items: CartItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function emit(): void {
  const items = readItems();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  // Update badge
  const badge = document.getElementById("nav-cart-count");
  const mobileBadge = document.getElementById("mobile-nav-cart-count");
  if (badge) badge.innerText = totalItems.toString();
  if (mobileBadge) mobileBadge.innerText = totalItems.toString();

  // Dispatch event for drawer & cart page
  window.dispatchEvent(new CustomEvent("cart-updated", { detail: items }));
}

// ── Public API ─────────────────────────────────────────────────────────

export function getItems(): CartItem[] {
  return readItems();
}

export function getCount(): number {
  return readItems().reduce((s, i) => s + i.quantity, 0);
}

export function getSubtotal(): number {
  return readItems().reduce((s, i) => s + i.price * i.quantity, 0);
}

export function addItem(item: Omit<CartItem, "quantity"> & { quantity?: number }): void {
  const items = readItems();
  const existing = items.find((i) => i.productId === item.productId);
  const qty = item.quantity ?? 1;

  if (existing) {
    existing.quantity += qty;
  } else {
    items.push({ ...item, quantity: qty } as CartItem);
  }

  writeItems(items);
  emit();
}

export function updateQty(productId: number, newQty: number): void {
  const items = readItems();
  const idx = items.findIndex((i) => i.productId === productId);

  if (idx === -1) return;

  if (newQty <= 0) {
    items.splice(idx, 1);
  } else {
    items[idx].quantity = newQty;
  }

  writeItems(items);
  emit();
}

export function removeItem(productId: number): void {
  const items = readItems().filter((i) => i.productId !== productId);
  writeItems(items);
  emit();
}

export function clearCart(): void {
  writeItems([]);
  emit();
}