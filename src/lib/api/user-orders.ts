// User orders API — authenticated order history for logged-in users.
// All endpoints require a valid access token cookie (sent automatically
// via authFetch with credentials: "include").

import { authFetch } from "./auth";

export interface UserOrderItem {
  productId: number;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export interface UserOrder {
  id: string;
  status: string;
  totalAmount: number;
  deliveryCharge: number;
  createdAt: string;
  items?: UserOrderItem[];
}

export interface UserOrdersResponse {
  orders: UserOrder[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export async function getUserOrders(page = 1, limit = 10): Promise<UserOrdersResponse> {
  const query = new URLSearchParams({ page: String(page), limit: String(limit) });
  return authFetch<UserOrdersResponse>(`/orders/user/orders?${query.toString()}`);
}

export async function getUserOrder(orderId: string): Promise<{ order: UserOrder; items: UserOrderItem[] }> {
  return authFetch<{ order: UserOrder; items: UserOrderItem[] }>(`/orders/${orderId}`);
}

export async function cancelUserOrder(orderId: string): Promise<{ message: string }> {
  return authFetch<{ message: string }>(`/orders/${orderId}/cancel`, { method: "POST" });
}
