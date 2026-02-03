import { TAGS } from 'lib/constants';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import {
  mockCollections,
  mockMenu,
  mockPages,
  mockProducts,
  getProductsByCollection,
  searchProducts,
} from './mock-data';
import {
  Cart,
  CartItem,
  Collection,
  Menu,
  Page,
  Product,
} from './types';

// In-memory cart storage (in production, use a database)
const carts = new Map<string, Cart>();

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function createCart(): Promise<Cart> {
  const cartId = generateId();
  const cart: Cart = {
    id: cartId,
    checkoutUrl: '/checkout',
    cost: {
      subtotalAmount: { amount: '0.00', currencyCode: 'USD' },
      totalAmount: { amount: '0.00', currencyCode: 'USD' },
      totalTaxAmount: { amount: '0.00', currencyCode: 'USD' },
    },
    lines: [],
    totalQuantity: 0,
  };
  carts.set(cartId, cart);
  return cart;
}

function calculateCartTotals(lines: CartItem[]): { subtotal: string; total: string; quantity: number } {
  let subtotal = 0;
  let quantity = 0;
  
  for (const line of lines) {
    subtotal += parseFloat(line.cost.totalAmount.amount);
    quantity += line.quantity;
  }
  
  return {
    subtotal: subtotal.toFixed(2),
    total: subtotal.toFixed(2),
    quantity,
  };
}

export async function addToCart(
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cookieStore = await cookies();
  const cartId = cookieStore.get('cartId')?.value;
  
  if (!cartId) {
    throw new Error('Cart not found');
  }
  
  let cart = carts.get(cartId);
  if (!cart) {
    cart = await createCart();
    cart.id = cartId;
    carts.set(cartId, cart);
  }
  
  for (const line of lines) {
    // Find the product and variant
    const product = mockProducts.find(p => 
      p.variants.some(v => v.id === line.merchandiseId)
    );
    const variant = product?.variants.find(v => v.id === line.merchandiseId);
    
    if (product && variant) {
      const existingLineIndex = cart.lines.findIndex(
        l => l.merchandise.id === line.merchandiseId
      );
      
      if (existingLineIndex >= 0) {
        // Update existing line
        cart.lines[existingLineIndex].quantity += line.quantity;
        const lineTotal = parseFloat(variant.price.amount) * cart.lines[existingLineIndex].quantity;
        cart.lines[existingLineIndex].cost.totalAmount.amount = lineTotal.toFixed(2);
      } else {
        // Add new line
        const lineTotal = parseFloat(variant.price.amount) * line.quantity;
        const newLine: CartItem = {
          id: generateId(),
          quantity: line.quantity,
          cost: {
            totalAmount: { amount: lineTotal.toFixed(2), currencyCode: 'USD' },
          },
          merchandise: {
            id: variant.id,
            title: variant.title,
            selectedOptions: variant.selectedOptions,
            product: {
              id: product.id,
              handle: product.handle,
              title: product.title,
              featuredImage: product.featuredImage,
            },
          },
        };
        cart.lines.push(newLine);
      }
    }
  }
  
  // Recalculate totals
  const totals = calculateCartTotals(cart.lines);
  cart.cost.subtotalAmount.amount = totals.subtotal;
  cart.cost.totalAmount.amount = totals.total;
  cart.totalQuantity = totals.quantity;
  
  carts.set(cartId, cart);
  return cart;
}

export async function removeFromCart(lineIds: string[]): Promise<Cart> {
  const cookieStore = await cookies();
  const cartId = cookieStore.get('cartId')?.value;
  
  if (!cartId) {
    throw new Error('Cart not found');
  }
  
  const cart = carts.get(cartId);
  if (!cart) {
    throw new Error('Cart not found');
  }
  
  cart.lines = cart.lines.filter(line => !lineIds.includes(line.id || ''));
  
  // Recalculate totals
  const totals = calculateCartTotals(cart.lines);
  cart.cost.subtotalAmount.amount = totals.subtotal;
  cart.cost.totalAmount.amount = totals.total;
  cart.totalQuantity = totals.quantity;
  
  carts.set(cartId, cart);
  return cart;
}

export async function updateCart(
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cookieStore = await cookies();
  const cartId = cookieStore.get('cartId')?.value;
  
  if (!cartId) {
    throw new Error('Cart not found');
  }
  
  const cart = carts.get(cartId);
  if (!cart) {
    throw new Error('Cart not found');
  }
  
  for (const line of lines) {
    const existingLineIndex = cart.lines.findIndex(l => l.id === line.id);
    if (existingLineIndex >= 0) {
      if (line.quantity <= 0) {
        // Remove the line
        cart.lines.splice(existingLineIndex, 1);
      } else {
        // Update quantity
        const variant = mockProducts
          .flatMap(p => p.variants)
          .find(v => v.id === line.merchandiseId);
        
        if (variant) {
          cart.lines[existingLineIndex].quantity = line.quantity;
          const lineTotal = parseFloat(variant.price.amount) * line.quantity;
          cart.lines[existingLineIndex].cost.totalAmount.amount = lineTotal.toFixed(2);
        }
      }
    }
  }
  
  // Recalculate totals
  const totals = calculateCartTotals(cart.lines);
  cart.cost.subtotalAmount.amount = totals.subtotal;
  cart.cost.totalAmount.amount = totals.total;
  cart.totalQuantity = totals.quantity;
  
  carts.set(cartId, cart);
  return cart;
}

export async function getCart(): Promise<Cart | undefined> {
  const cookieStore = await cookies();
  const cartId = cookieStore.get('cartId')?.value;

  if (!cartId) {
    return undefined;
  }

  return carts.get(cartId);
}

export async function getCollection(
  handle: string
): Promise<Collection | undefined> {
  return mockCollections.find(c => c.handle === handle);
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
  let products = getProductsByCollection(collection);
  
  // Apply sorting
  if (sortKey === 'PRICE') {
    products = [...products].sort((a, b) => {
      const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  } else if (sortKey === 'CREATED_AT' || sortKey === 'CREATED') {
    products = [...products].sort((a, b) => {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();
      return reverse ? dateB - dateA : dateA - dateB;
    });
  }
  
  return products;
}

export async function getCollections(): Promise<Collection[]> {
  return mockCollections;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  if (handle === 'next-js-frontend-header-menu') {
    return mockMenu;
  }
  
  if (handle === 'next-js-frontend-footer-menu') {
    return mockPages.map(page => ({
      title: page.title,
      path: `/${page.handle}`,
    }));
  }
  
  return [];
}

export async function getPage(handle: string): Promise<Page | undefined> {
  return mockPages.find(p => p.handle === handle);
}

export async function getPages(): Promise<Page[]> {
  return mockPages;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return mockProducts.find(p => p.handle === handle);
}

export async function getProductRecommendations(
  productId: string
): Promise<Product[]> {
  // Return other products as recommendations (excluding the current product)
  return mockProducts.filter(p => p.id !== productId).slice(0, 4);
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
  
  // Apply sorting
  if (sortKey === 'PRICE') {
    products = [...products].sort((a, b) => {
      const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  } else if (sortKey === 'CREATED_AT' || sortKey === 'CREATED') {
    products = [...products].sort((a, b) => {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();
      return reverse ? dateB - dateA : dateA - dateB;
    });
  }
  
  return products;
}

// Revalidation handler (kept for API compatibility)
export async function revalidate(req: NextRequest): Promise<NextResponse> {
  const topic = req.headers.get('x-webhook-topic') || 'unknown';
  const secret = req.nextUrl.searchParams.get('secret');

  if (!secret || secret !== process.env.REVALIDATION_SECRET) {
    console.error('Invalid revalidation secret.');
    return NextResponse.json({ status: 401 });
  }

  if (topic.includes('collection')) {
    revalidateTag(TAGS.collections);
  }

  if (topic.includes('product')) {
    revalidateTag(TAGS.products);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}

// Re-export types
export type {
  Cart,
  CartItem,
  Collection,
  Image,
  Menu,
  Money,
  Page,
  Product,
  ProductOption,
  ProductVariant,
  SEO,
} from './types';
