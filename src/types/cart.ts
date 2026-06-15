// Cart domain types — used by both the localStorage offline store and the
// guest cart server endpoints. They are intentionally similar but separate
// so the two stores can evolve independently.

export interface OfflineCartItem {
  productId: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  quantity: number;
}

export interface ServerCartItem {
  productId: number;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export interface UserInfo {
  name: string;
  email?: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  deliveryLocation: "inside" | "outside";
}

export interface PlaceOrderPayload {
  guestId: string;
  items: { productId: number; quantity: number }[];
  totalAmount: number;
  deliveryCharge: number;
  userInfo: UserInfo;
}

export interface OrderItemSummary {
  productId: number;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export interface OrderCheckoutInfo {
  customerName: string;
  phoneNumber: string;
  deliveryAddress: string;
  deliveryLocation: "inside_dhaka" | "outside_dhaka";
}

export interface OrderSummary {
  id: string;
  status: string;
  totalAmount: number;
  deliveryCharge: number;
  createdAt: string;
}

export interface OrderLookupResponse {
  order: OrderSummary;
  items: OrderItemSummary[];
  checkoutInfo: OrderCheckoutInfo;
}
