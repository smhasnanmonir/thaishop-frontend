// Editorial rotating messages shown in the marquee announcement bar at the
// top of every storefront page. Edit this file to change the promotional
// copy without touching the component.

export interface Announcement {
  id: string;
  text: string;
  href?: string;
}

export const announcements: Announcement[] = [
  {
    id: "shipping",
    text: "Free shipping on orders over ৳2,500 inside Dhaka",
    href: "/products",
  },
  {
    id: "authentic",
    text: "100% authentic — imported directly from Bangkok pharmacies",
    href: "/about",
  },
  {
    id: "launch",
    text: "New launch: Ceramide Repair Serum now in stock",
    href: "/products",
  },
  {
    id: "support",
    text: "Need help? WhatsApp our team at +880 1XXX-XXXXXX",
    href: "/contact",
  },
];
