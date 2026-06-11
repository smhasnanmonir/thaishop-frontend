const BASE_URL = "https://backend.tokbd.com/api";

export interface Slider {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  redirect_url: string | null;
  display_order: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface SkinConcern {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface SkinType {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface HomeContent {
  heroSliders: Slider[];
  categories: Category[];
  concerns: SkinConcern[];
  types: SkinType[];
  brands: Brand[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  brand_slug: string;
  img: string;
  card_photo: string;
  price: string;
  origin_price: string;
  skin_type: string | null;
  skin_concern: string | null;
  brand: string;
  category: string;
  category_slug: string;
  stock: boolean;
  expiry_date: string;
  origin_country: string;
  details?: {
    id: number;
    productId: number;
    sizes: string[] | null;
    description: string;
    key_ingredient: string;
    how_to_use: string[] | null;
    benefits: string[] | null;
    photos: string[] | null;
  };
}

export interface CartItem {
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

// Fetch helper with error handling
async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, options);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText || response.statusText}`);
  }
  return response.json() as Promise<T>;
}

export const api = {
  // Home Content Fetch
  async getHomeContent(): Promise<HomeContent> {
    const data = await apiFetch<{ success: boolean; result: HomeContent }>("/home-content/fetch");
    return data.result;
  },

  // Products
  async getLatestProducts(limit: number = 8): Promise<Product[]> {
    const data = await apiFetch<{ result: Product[] }>(`/products/fetch?limit=${limit}`);
    return data.result;
  },

  async getAllProducts(page: number = 1, pageSize: number = 12, filters: string = ""): Promise<{
    result: Product[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const query = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    if (filters) {
      query.append("filters", filters);
    }
    return apiFetch<{
      result: Product[];
      total: number;
      currentPage: number;
      totalPages: number;
    }>(`/products/all?${query.toString()}`);
  },

  async getProductBySlug(slug: string): Promise<Product> {
    const data = await apiFetch<{ success: boolean; result: Product }>(`/products/fetch/${slug}`);
    if (!data.success || !data.result) {
      throw new Error("Product not found");
    }
    return data.result;
  },

  // Category wise products
  async getProductsByCategory(categorySlug: string, page: number = 1, pageSize: number = 12, filters: string = ""): Promise<{
    result: Product[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const query = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    if (filters) query.append("filters", filters);
    return apiFetch<{
      result: Product[];
      total: number;
      currentPage: number;
      totalPages: number;
    }>(`/products/search/category/${categorySlug}?${query.toString()}`);
  },

  // Brand wise products
  async getProductsByBrand(brandName: string, page: number = 1, pageSize: number = 12, filters: string = ""): Promise<{
    result: Product[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const query = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    if (filters) query.append("filters", filters);
    return apiFetch<{
      result: Product[];
      total: number;
      currentPage: number;
      totalPages: number;
    }>(`/products/search/brand/${brandName}?${query.toString()}`);
  },

  // Skin Type products
  async getProductsBySkinType(skinType: string, page: number = 1, pageSize: number = 12, filters: string = ""): Promise<{
    result: Product[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const query = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    if (filters) query.append("filters", filters);
    return apiFetch<{
      result: Product[];
      total: number;
      currentPage: number;
      totalPages: number;
    }>(`/products/search/skin-type/${skinType}?${query.toString()}`);
  },

  // Skin Concern products
  async getProductsBySkinConcern(skinConcern: string, page: number = 1, pageSize: number = 12, filters: string = ""): Promise<{
    result: Product[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const query = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    if (filters) query.append("filters", filters);
    return apiFetch<{
      result: Product[];
      total: number;
      currentPage: number;
      totalPages: number;
    }>(`/products/search/skin-concern/${skinConcern}?${query.toString()}`);
  },

  // Random / Recommendations
  async getRandomProducts(limit: number = 8): Promise<Product[]> {
    const data = await apiFetch<{ result: Product[] }>(`/products/random?limit=${limit}`);
    return data.result;
  },

  // Unified Search
  async searchProducts(q: string, type?: string, page: number = 1, pageSize: number = 12, filters: string = ""): Promise<{
    success: boolean;
    result: Product[];
    total: number;
    currentPage: number;
    totalPages: number;
    searchTerm: string;
    searchType?: string;
  }> {
    const query = new URLSearchParams({
      q,
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    if (type) query.append("type", type);
    if (filters) query.append("filters", filters);
    return apiFetch<{
      success: boolean;
      result: Product[];
      total: number;
      currentPage: number;
      totalPages: number;
      searchTerm: string;
      searchType?: string;
    }>(`/products/search?${query.toString()}`);
  },

  // Guest Cart Actions
  async getGuestCart(guestId: string): Promise<CartItem[]> {
    const data = await apiFetch<{ cart: CartItem[] }>(`/guest/cart?guestId=${encodeURIComponent(guestId)}`);
    return data.cart || [];
  },

  async addToGuestCart(guestId: string, productId: number, quantity: number): Promise<CartItem[]> {
    const data = await apiFetch<{ cart: CartItem[] }>("/guest/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guestId, productId, quantity }),
    });
    return data.cart || [];
  },

  async updateGuestCartQuantity(guestId: string, productId: number, quantity: number): Promise<CartItem[]> {
    const data = await apiFetch<{ cart: CartItem[] }>("/guest/cart/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guestId, productId, quantity }),
    });
    return data.cart || [];
  },

  async removeFromGuestCart(guestId: string, productId: number): Promise<CartItem[]> {
    const data = await apiFetch<{ cart: CartItem[] }>("/guest/cart/remove", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guestId, productId }),
    });
    return data.cart || [];
  },

  async clearGuestCart(guestId: string): Promise<void> {
    await apiFetch<void>("/guest/cart/clear", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guestId }),
    });
  },

  // Guest Checkout Placement
  async placeGuestOrder(orderData: {
    guestId: string;
    items: { productId: number; quantity: number }[];
    totalAmount: number;
    deliveryCharge: number;
    userInfo: UserInfo;
  }): Promise<{ message: string; orderId: string }> {
    return apiFetch<{ message: string; orderId: string }>("/guest/place-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
  },

  async getGuestOrder(orderId: string, guestEmail: string = ""): Promise<{
    order: {
      id: string;
      status: string;
      totalAmount: number;
      deliveryCharge: number;
      createdAt: string;
    };
    items: {
      productId: number;
      quantity: number;
      price: number;
      name: string;
      image: string;
    }[];
    checkoutInfo: {
      customerName: string;
      phoneNumber: string;
      deliveryAddress: string;
      deliveryLocation: "inside_dhaka" | "outside_dhaka";
    };
  }> {
    const query = new URLSearchParams();
    if (guestEmail) query.append("guestEmail", guestEmail);
    return apiFetch(`/guest/order/${orderId}?${query.toString()}`);
  },
};
