import type { Cart, Collection, Menu, Product } from "./shopify/types";

// High-quality product images with white/transparent backgrounds
const PRODUCT_IMAGES = {
  tshirt: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&bg=white",
  hoodie: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&bg=white",
  watch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&bg=white",
  sunglasses: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop&bg=white",
  headphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&bg=white",
  laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop&bg=white",
  bottle: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop&bg=white",
  notebook: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&h=800&fit=crop&bg=white",
};

export const mockProducts: Product[] = [
  {
    id: "gid://mock/Product/1",
    handle: "classic-cotton-tshirt",
    availableForSale: true,
    title: "Classic Cotton T-Shirt",
    description: "A premium quality cotton t-shirt with a comfortable fit. Perfect for everyday wear with a clean, minimalist design.",
    descriptionHtml: "<p>A premium quality cotton t-shirt with a comfortable fit. Perfect for everyday wear with a clean, minimalist design.</p>",
    options: [
      { id: "opt-1", name: "Size", values: ["S", "M", "L", "XL"] },
      { id: "opt-2", name: "Color", values: ["White", "Black", "Navy"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "39.99", currencyCode: "USD" },
      minVariantPrice: { amount: "29.99", currencyCode: "USD" },
    },
    variants: [
      { id: "var-1-1", title: "S / White", availableForSale: true, selectedOptions: [{ name: "Size", value: "S" }, { name: "Color", value: "White" }], price: { amount: "29.99", currencyCode: "USD" } },
      { id: "var-1-2", title: "M / White", availableForSale: true, selectedOptions: [{ name: "Size", value: "M" }, { name: "Color", value: "White" }], price: { amount: "29.99", currencyCode: "USD" } },
      { id: "var-1-3", title: "L / White", availableForSale: true, selectedOptions: [{ name: "Size", value: "L" }, { name: "Color", value: "White" }], price: { amount: "29.99", currencyCode: "USD" } },
      { id: "var-1-4", title: "XL / White", availableForSale: true, selectedOptions: [{ name: "Size", value: "XL" }, { name: "Color", value: "White" }], price: { amount: "29.99", currencyCode: "USD" } },
      { id: "var-1-5", title: "S / Black", availableForSale: true, selectedOptions: [{ name: "Size", value: "S" }, { name: "Color", value: "Black" }], price: { amount: "29.99", currencyCode: "USD" } },
      { id: "var-1-6", title: "M / Black", availableForSale: true, selectedOptions: [{ name: "Size", value: "M" }, { name: "Color", value: "Black" }], price: { amount: "29.99", currencyCode: "USD" } },
    ],
    featuredImage: { url: PRODUCT_IMAGES.tshirt, altText: "Classic Cotton T-Shirt", width: 800, height: 800 },
    images: [
      { url: PRODUCT_IMAGES.tshirt, altText: "Classic Cotton T-Shirt - Front", width: 800, height: 800 },
    ],
    seo: { title: "Classic Cotton T-Shirt", description: "Premium quality cotton t-shirt with comfortable fit" },
    tags: ["apparel", "tshirt", "cotton"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://mock/Product/2",
    handle: "premium-hoodie",
    availableForSale: true,
    title: "Premium Comfort Hoodie",
    description: "Stay warm and stylish with our premium hoodie. Features a soft fleece interior and modern fit.",
    descriptionHtml: "<p>Stay warm and stylish with our premium hoodie. Features a soft fleece interior and modern fit.</p>",
    options: [
      { id: "opt-3", name: "Size", values: ["S", "M", "L", "XL"] },
      { id: "opt-4", name: "Color", values: ["Gray", "Black"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "79.99", currencyCode: "USD" },
      minVariantPrice: { amount: "69.99", currencyCode: "USD" },
    },
    variants: [
      { id: "var-2-1", title: "S / Gray", availableForSale: true, selectedOptions: [{ name: "Size", value: "S" }, { name: "Color", value: "Gray" }], price: { amount: "69.99", currencyCode: "USD" } },
      { id: "var-2-2", title: "M / Gray", availableForSale: true, selectedOptions: [{ name: "Size", value: "M" }, { name: "Color", value: "Gray" }], price: { amount: "69.99", currencyCode: "USD" } },
      { id: "var-2-3", title: "L / Gray", availableForSale: true, selectedOptions: [{ name: "Size", value: "L" }, { name: "Color", value: "Gray" }], price: { amount: "69.99", currencyCode: "USD" } },
      { id: "var-2-4", title: "XL / Black", availableForSale: true, selectedOptions: [{ name: "Size", value: "XL" }, { name: "Color", value: "Black" }], price: { amount: "79.99", currencyCode: "USD" } },
    ],
    featuredImage: { url: PRODUCT_IMAGES.hoodie, altText: "Premium Comfort Hoodie", width: 800, height: 800 },
    images: [
      { url: PRODUCT_IMAGES.hoodie, altText: "Premium Comfort Hoodie - Front", width: 800, height: 800 },
    ],
    seo: { title: "Premium Comfort Hoodie", description: "Stay warm and stylish with our premium hoodie" },
    tags: ["apparel", "hoodie", "fleece"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://mock/Product/3",
    handle: "minimalist-watch",
    availableForSale: true,
    title: "Minimalist Watch",
    description: "A sleek, minimalist watch with a clean dial and premium leather strap. Timeless design for any occasion.",
    descriptionHtml: "<p>A sleek, minimalist watch with a clean dial and premium leather strap. Timeless design for any occasion.</p>",
    options: [
      { id: "opt-5", name: "Strap Color", values: ["Brown", "Black"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "149.99", currencyCode: "USD" },
      minVariantPrice: { amount: "149.99", currencyCode: "USD" },
    },
    variants: [
      { id: "var-3-1", title: "Brown", availableForSale: true, selectedOptions: [{ name: "Strap Color", value: "Brown" }], price: { amount: "149.99", currencyCode: "USD" } },
      { id: "var-3-2", title: "Black", availableForSale: true, selectedOptions: [{ name: "Strap Color", value: "Black" }], price: { amount: "149.99", currencyCode: "USD" } },
    ],
    featuredImage: { url: PRODUCT_IMAGES.watch, altText: "Minimalist Watch", width: 800, height: 800 },
    images: [
      { url: PRODUCT_IMAGES.watch, altText: "Minimalist Watch - Front", width: 800, height: 800 },
    ],
    seo: { title: "Minimalist Watch", description: "Sleek minimalist watch with premium leather strap" },
    tags: ["accessories", "watch", "leather"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://mock/Product/4",
    handle: "designer-sunglasses",
    availableForSale: true,
    title: "Designer Sunglasses",
    description: "Protect your eyes in style with these designer sunglasses. UV400 protection with polarized lenses.",
    descriptionHtml: "<p>Protect your eyes in style with these designer sunglasses. UV400 protection with polarized lenses.</p>",
    options: [
      { id: "opt-6", name: "Frame Color", values: ["Black", "Tortoise"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "129.99", currencyCode: "USD" },
      minVariantPrice: { amount: "129.99", currencyCode: "USD" },
    },
    variants: [
      { id: "var-4-1", title: "Black", availableForSale: true, selectedOptions: [{ name: "Frame Color", value: "Black" }], price: { amount: "129.99", currencyCode: "USD" } },
      { id: "var-4-2", title: "Tortoise", availableForSale: true, selectedOptions: [{ name: "Frame Color", value: "Tortoise" }], price: { amount: "129.99", currencyCode: "USD" } },
    ],
    featuredImage: { url: PRODUCT_IMAGES.sunglasses, altText: "Designer Sunglasses", width: 800, height: 800 },
    images: [
      { url: PRODUCT_IMAGES.sunglasses, altText: "Designer Sunglasses - Front", width: 800, height: 800 },
    ],
    seo: { title: "Designer Sunglasses", description: "UV400 protection with polarized lenses" },
    tags: ["accessories", "sunglasses", "eyewear"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://mock/Product/5",
    handle: "wireless-headphones",
    availableForSale: true,
    title: "Wireless Headphones",
    description: "Premium wireless headphones with active noise cancellation. 30-hour battery life and crystal-clear audio.",
    descriptionHtml: "<p>Premium wireless headphones with active noise cancellation. 30-hour battery life and crystal-clear audio.</p>",
    options: [
      { id: "opt-7", name: "Color", values: ["Black", "White", "Silver"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "299.99", currencyCode: "USD" },
      minVariantPrice: { amount: "299.99", currencyCode: "USD" },
    },
    variants: [
      { id: "var-5-1", title: "Black", availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }], price: { amount: "299.99", currencyCode: "USD" } },
      { id: "var-5-2", title: "White", availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }], price: { amount: "299.99", currencyCode: "USD" } },
      { id: "var-5-3", title: "Silver", availableForSale: true, selectedOptions: [{ name: "Color", value: "Silver" }], price: { amount: "299.99", currencyCode: "USD" } },
    ],
    featuredImage: { url: PRODUCT_IMAGES.headphones, altText: "Wireless Headphones", width: 800, height: 800 },
    images: [
      { url: PRODUCT_IMAGES.headphones, altText: "Wireless Headphones - Front", width: 800, height: 800 },
    ],
    seo: { title: "Wireless Headphones", description: "Premium wireless headphones with active noise cancellation" },
    tags: ["tech", "headphones", "audio"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://mock/Product/6",
    handle: "laptop-stand",
    availableForSale: true,
    title: "Ergonomic Laptop Stand",
    description: "Elevate your workspace with our aluminum laptop stand. Improves posture and keeps your laptop cool.",
    descriptionHtml: "<p>Elevate your workspace with our aluminum laptop stand. Improves posture and keeps your laptop cool.</p>",
    options: [
      { id: "opt-8", name: "Finish", values: ["Silver", "Space Gray"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "89.99", currencyCode: "USD" },
      minVariantPrice: { amount: "89.99", currencyCode: "USD" },
    },
    variants: [
      { id: "var-6-1", title: "Silver", availableForSale: true, selectedOptions: [{ name: "Finish", value: "Silver" }], price: { amount: "89.99", currencyCode: "USD" } },
      { id: "var-6-2", title: "Space Gray", availableForSale: true, selectedOptions: [{ name: "Finish", value: "Space Gray" }], price: { amount: "89.99", currencyCode: "USD" } },
    ],
    featuredImage: { url: PRODUCT_IMAGES.laptop, altText: "Ergonomic Laptop Stand", width: 800, height: 800 },
    images: [
      { url: PRODUCT_IMAGES.laptop, altText: "Ergonomic Laptop Stand - Front", width: 800, height: 800 },
    ],
    seo: { title: "Ergonomic Laptop Stand", description: "Aluminum laptop stand for better posture" },
    tags: ["tech", "accessories", "workspace"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://mock/Product/7",
    handle: "insulated-water-bottle",
    availableForSale: true,
    title: "Insulated Water Bottle",
    description: "Keep your drinks cold for 24 hours or hot for 12 hours. Double-wall vacuum insulation with leak-proof lid.",
    descriptionHtml: "<p>Keep your drinks cold for 24 hours or hot for 12 hours. Double-wall vacuum insulation with leak-proof lid.</p>",
    options: [
      { id: "opt-9", name: "Color", values: ["Matte Black", "White", "Forest Green"] },
      { id: "opt-10", name: "Size", values: ["500ml", "750ml"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "44.99", currencyCode: "USD" },
      minVariantPrice: { amount: "34.99", currencyCode: "USD" },
    },
    variants: [
      { id: "var-7-1", title: "Matte Black / 500ml", availableForSale: true, selectedOptions: [{ name: "Color", value: "Matte Black" }, { name: "Size", value: "500ml" }], price: { amount: "34.99", currencyCode: "USD" } },
      { id: "var-7-2", title: "Matte Black / 750ml", availableForSale: true, selectedOptions: [{ name: "Color", value: "Matte Black" }, { name: "Size", value: "750ml" }], price: { amount: "44.99", currencyCode: "USD" } },
      { id: "var-7-3", title: "White / 500ml", availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }, { name: "Size", value: "500ml" }], price: { amount: "34.99", currencyCode: "USD" } },
      { id: "var-7-4", title: "Forest Green / 750ml", availableForSale: true, selectedOptions: [{ name: "Color", value: "Forest Green" }, { name: "Size", value: "750ml" }], price: { amount: "44.99", currencyCode: "USD" } },
    ],
    featuredImage: { url: PRODUCT_IMAGES.bottle, altText: "Insulated Water Bottle", width: 800, height: 800 },
    images: [
      { url: PRODUCT_IMAGES.bottle, altText: "Insulated Water Bottle - Front", width: 800, height: 800 },
    ],
    seo: { title: "Insulated Water Bottle", description: "Double-wall vacuum insulation bottle" },
    tags: ["lifestyle", "bottle", "eco-friendly"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://mock/Product/8",
    handle: "leather-notebook",
    availableForSale: true,
    title: "Premium Leather Notebook",
    description: "A beautifully crafted leather notebook with 200 pages of premium paper. Perfect for journaling or sketching.",
    descriptionHtml: "<p>A beautifully crafted leather notebook with 200 pages of premium paper. Perfect for journaling or sketching.</p>",
    options: [
      { id: "opt-11", name: "Cover Color", values: ["Tan", "Black", "Burgundy"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "49.99", currencyCode: "USD" },
      minVariantPrice: { amount: "49.99", currencyCode: "USD" },
    },
    variants: [
      { id: "var-8-1", title: "Tan", availableForSale: true, selectedOptions: [{ name: "Cover Color", value: "Tan" }], price: { amount: "49.99", currencyCode: "USD" } },
      { id: "var-8-2", title: "Black", availableForSale: true, selectedOptions: [{ name: "Cover Color", value: "Black" }], price: { amount: "49.99", currencyCode: "USD" } },
      { id: "var-8-3", title: "Burgundy", availableForSale: true, selectedOptions: [{ name: "Cover Color", value: "Burgundy" }], price: { amount: "49.99", currencyCode: "USD" } },
    ],
    featuredImage: { url: PRODUCT_IMAGES.notebook, altText: "Premium Leather Notebook", width: 800, height: 800 },
    images: [
      { url: PRODUCT_IMAGES.notebook, altText: "Premium Leather Notebook - Front", width: 800, height: 800 },
    ],
    seo: { title: "Premium Leather Notebook", description: "Beautifully crafted leather notebook with premium paper" },
    tags: ["lifestyle", "notebook", "stationery"],
    updatedAt: new Date().toISOString(),
  },
];

export const mockCollections: Collection[] = [
  {
    handle: "",
    title: "All",
    description: "All products",
    seo: { title: "All Products", description: "Browse all our products" },
    path: "/search",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "apparel",
    title: "Apparel",
    description: "Clothing and fashion items",
    seo: { title: "Apparel", description: "Browse our clothing collection" },
    path: "/search/apparel",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "accessories",
    title: "Accessories",
    description: "Watches, sunglasses and more",
    seo: { title: "Accessories", description: "Browse our accessories" },
    path: "/search/accessories",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "tech",
    title: "Tech",
    description: "Technology and gadgets",
    seo: { title: "Tech", description: "Browse our tech products" },
    path: "/search/tech",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "lifestyle",
    title: "Lifestyle",
    description: "Everyday essentials",
    seo: { title: "Lifestyle", description: "Browse our lifestyle products" },
    path: "/search/lifestyle",
    updatedAt: new Date().toISOString(),
  },
];

export const mockMenus: Record<string, Menu[]> = {
  "next-js-frontend-header-menu": [
    { title: "All", path: "/search" },
    { title: "Apparel", path: "/search/apparel" },
    { title: "Accessories", path: "/search/accessories" },
    { title: "Tech", path: "/search/tech" },
    { title: "Lifestyle", path: "/search/lifestyle" },
  ],
  "next-js-frontend-footer-menu": [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Terms & Conditions", path: "/terms" },
    { title: "Privacy Policy", path: "/privacy" },
  ],
};

export function createEmptyCart(): Cart {
  return {
    id: `mock-cart-${Date.now()}`,
    checkoutUrl: "/checkout",
    cost: {
      subtotalAmount: { amount: "0.00", currencyCode: "USD" },
      totalAmount: { amount: "0.00", currencyCode: "USD" },
      totalTaxAmount: { amount: "0.00", currencyCode: "USD" },
    },
    lines: [],
    totalQuantity: 0,
  };
}

export function getProductsByCollection(collectionHandle: string): Product[] {
  if (!collectionHandle) {
    return mockProducts;
  }
  return mockProducts.filter((product) => product.tags.includes(collectionHandle));
}

export function getProductByHandle(handle: string): Product | undefined {
  return mockProducts.find((product) => product.handle === handle);
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return mockProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
}

export function sortProducts(
  products: Product[],
  sortKey?: string,
  reverse?: boolean
): Product[] {
  const sorted = [...products];

  switch (sortKey) {
    case "PRICE":
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
        const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
        return priceA - priceB;
      });
      break;
    case "TITLE":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "CREATED_AT":
    case "CREATED":
      sorted.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      break;
    case "BEST_SELLING":
    default:
      // Keep original order for best selling (mock)
      break;
  }

  return reverse ? sorted.reverse() : sorted;
}
