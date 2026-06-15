// Guest cart + order API — server-side persistence used after checkout.
// The localStorage cart in src/lib/cart.ts is the source of truth during
// browsing; this module syncs to the backend when a user places an order.

import { apiFetch } from "./client";
import type {
  OrderLookupResponse,
  PlaceOrderPayload,
  ServerCartItem,
} from "../../types/cart";

export async function getGuestCart(guestId: string): Promise<ServerCartItem[]> {
  const data = await apiFetch<{ cart: ServerCartItem[] }>(
    `/guest/cart?guestId=${encodeURIComponent(guestId)}`
  );
  return data.cart || [];
}

export async function addToGuestCart(
  guestId: string,
  productId: number,
  quantity: number
): Promise<ServerCartItem[]> {
  const data = await apiFetch<{ cart: ServerCartItem[] }>("/guest/cart/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guestId, productId, quantity }),
  });
  return data.cart || [];
}

export async function updateGuestCartQuantity(
  guestId: string,
  productId: number,
  quantity: number
): Promise<ServerCartItem[]> {
  const data = await apiFetch<{ cart: ServerCartItem[] }>("/guest/cart/update", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guestId, productId, quantity }),
  });
  return data.cart || [];
}

export async function removeFromGuestCart(
  guestId: string,
  productId: number
): Promise<ServerCartItem[]> {
  const data = await apiFetch<{ cart: ServerCartItem[] }>("/guest/cart/remove", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guestId, productId }),
  });
  return data.cart || [];
}

export async function clearGuestCart(guestId: string): Promise<void> {
  await apiFetch<void>("/guest/cart/clear", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guestId }),
  });
}

export async function placeGuestOrder(
  payload: PlaceOrderPayload
): Promise<{ message: string; orderId: string }> {
  return apiFetch<{ message: string; orderId: string }>("/guest/place-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export async function getGuestOrder(
  orderId: string,
  guestEmail: string = ""
): Promise<OrderLookupResponse> {
  const query = new URLSearchParams();
  if (guestEmail) query.append("guestEmail", guestEmail);
  return apiFetch<OrderLookupResponse>(`/guest/order/${orderId}?${query.toString()}`);
}
