export function formatPrice(price: string | number | undefined | null): string {
  if (price === undefined || price === null) return "৳0";
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num)) return "৳0";
  return `৳${num.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function safeParseArray(value: any): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).filter(s => s.trim() !== "");
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return [];
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          return parsed.map(String).filter(s => s.trim() !== "");
        }
      } catch (e) {
        // Fall back to single item
      }
    }
    if (trimmed.includes(",")) {
      return trimmed.split(",").map(s => s.trim()).filter(s => s !== "");
    }
    return [trimmed];
  }
  return [];
}
