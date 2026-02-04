import {
  createEmptyCart,
  getProductByHandle,
  getProductsByCollection,
  mockCollections,
  mockMenus,
  mockProducts,
  searchProducts,
  sortProducts,
} from "lib/mock-data";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import {
  Cart,
  CartItem,
  Collection,
  Menu,
  Page,
  Product,
} from "./types";

// In-memory cart storage for mock implementation
// In production, this would be stored in a database or session
const cartStorage = new Map<string, Cart>();

export async function createCart(): Promise<Cart> {
  const cart = createEmptyCart();
  cartStorage.set(cart.id!, cart);
  return cart;
}

export async function addToCart(
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value;
  let cart = cartId ? cartStorage.get(cartId) : undefined;

  if (!cart) {
    cart = createEmptyCart();
    cartStorage.set(cart.id!, cart);
  }

  for (const line of lines) {
    const existingLineIndex = cart.lines.findIndex(
      (l) => l.merchandise.id === line.merchandiseId
    );

    if (existingLineIndex >= 0) {
      // Update existing line quantity
      cart.lines[existingLineIndex]!.quantity += line.quantity;
      const price = parseFloat(cart.lines[existingLineIndex]!.cost.totalAmount.amount);
      cart.lines[existingLineIndex]!.cost.totalAmount.amount = (
        price + (price / (cart.lines[existingLineIndex]!.quantity - line.quantity)) * line.quantity
      ).toFixed(2);
    } else {
      // Find product variant and add new line
      const variant = mockProducts
        .flatMap((p) => p.variants.map((v) => ({ ...v, product: p })))
        .find((v) => v.id === line.merchandiseId);

      if (variant) {
        const newLine: CartItem = {
          id: `line-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          quantity: line.quantity,
          cost: {
            totalAmount: {
              amount: (parseFloat(variant.price.amount) * line.quantity).toFixed(2),
              currencyCode: variant.price.currencyCode,
            },
          },
          merchandise: {
            id: variant.id,
            title: variant.title,
            selectedOptions: variant.selectedOptions,
            product: {
              id: variant.product.id,
              handle: variant.product.handle,
              title: variant.product.title,
              featuredImage: variant.product.featuredImage,
            },
          },
        };
        cart.lines.push(newLine);
      }
    }
  }

  // Recalculate totals
  recalculateCartTotals(cart);
  cartStorage.set(cart.id!, cart);

  return cart;
}

export async function removeFromCart(lineIds: string[]): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value!;
  const cart = cartStorage.get(cartId) || createEmptyCart();

  cart.lines = cart.lines.filter((line) => !lineIds.includes(line.id!));
  recalculateCartTotals(cart);
  cartStorage.set(cart.id!, cart);

  return cart;
}

export async function updateCart(
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value!;
  const cart = cartStorage.get(cartId) || createEmptyCart();

  for (const line of lines) {
    const existingLine = cart.lines.find((l) => l.id === line.id);
    if (existingLine) {
      if (line.quantity === 0) {
        cart.lines = cart.lines.filter((l) => l.id !== line.id);
      } else {
        const pricePerUnit =
          parseFloat(existingLine.cost.totalAmount.amount) / existingLine.quantity;
        existingLine.quantity = line.quantity;
        existingLine.cost.totalAmount.amount = (pricePerUnit * line.quantity).toFixed(2);
      }
    }
  }

  recalculateCartTotals(cart);
  cartStorage.set(cart.id!, cart);

  return cart;
}

function recalculateCartTotals(cart: Cart): void {
  const subtotal = cart.lines.reduce(
    (sum, line) => sum + parseFloat(line.cost.totalAmount.amount),
    0
  );
  const tax = subtotal * 0.08; // 8% tax rate for demo
  const total = subtotal + tax;

  cart.cost.subtotalAmount.amount = subtotal.toFixed(2);
  cart.cost.totalTaxAmount.amount = tax.toFixed(2);
  cart.cost.totalAmount.amount = total.toFixed(2);
  cart.totalQuantity = cart.lines.reduce((sum, line) => sum + line.quantity, 0);
}

export async function getCart(): Promise<Cart | undefined> {
  const cartId = (await cookies()).get("cartId")?.value;

  if (!cartId) {
    return undefined;
  }

  return cartStorage.get(cartId);
}

export async function getCollection(
  handle: string
): Promise<Collection | undefined> {
  return mockCollections.find((c) => c.handle === handle);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const products = getProductsByCollection(collection);
  return sortProducts(products, sortKey, reverse);
}

export async function getCollections(): Promise<Collection[]> {
  return mockCollections;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  return mockMenus[handle] || [];
}

export async function getPage(handle: string): Promise<Page> {
  // Return mock page data
  return {
    id: `page-${handle}`,
    title: handle.charAt(0).toUpperCase() + handle.slice(1).replace(/-/g, " "),
    handle,
    body: `<p>This is the ${handle} page content.</p>`,
    bodySummary: `This is the ${handle} page.`,
    seo: {
      title: handle.charAt(0).toUpperCase() + handle.slice(1),
      description: `${handle} page description`,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export async function getPages(): Promise<Page[]> {
  return [
    {
      id: "page-about",
      title: "About",
      handle: "about",
      body: "<p>About us page content.</p>",
      bodySummary: "Learn about our company.",
      seo: { title: "About Us", description: "Learn about our company" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "page-terms",
      title: "Terms & Conditions",
      handle: "terms",
      body: "<p>Terms and conditions content.</p>",
      bodySummary: "Our terms and conditions.",
      seo: { title: "Terms & Conditions", description: "Our terms and conditions" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "page-privacy",
      title: "Privacy Policy",
      handle: "privacy",
      body: "<p>Privacy policy content.</p>",
      bodySummary: "Our privacy policy.",
      seo: { title: "Privacy Policy", description: "Our privacy policy" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return getProductByHandle(handle);
}

export async function getProductRecommendations(
  productId: string
): Promise<Product[]> {
  // Return 4 random products that aren't the current product
  return mockProducts.filter((p) => p.id !== productId).slice(0, 4);
}

export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  let products = query ? searchProducts(query) : mockProducts;
  return sortProducts(products, sortKey, reverse);
}

// Mock revalidate function - no-op for static data
export async function revalidate(req: NextRequest): Promise<NextResponse> {
  // For mock data, we don't need to revalidate anything
  // Just return success
  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
