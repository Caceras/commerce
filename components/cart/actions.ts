"use server";

import { TAGS } from "lib/constants";
import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from "lib/shopify";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

export async function addItem(
  prevState: any,
  selectedVariantId: string | undefined
) {
  if (!selectedVariantId) {
    return "Error adding item to cart";
  }

  try {
    // Ensure cart exists before adding
    const cookieStore = await cookies();
    if (!cookieStore.get("cartId")?.value) {
      const cart = await createCart();
      cookieStore.set("cartId", cart.id!);
    }
    
    await addToCart([{ merchandiseId: selectedVariantId, quantity: 1 }]);
    updateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, merchandiseId: string) {
  try {
    const cart = await getCart();

    if (!cart) {
      return "Error fetching cart";
    }

    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );

    if (lineItem && lineItem.id) {
      await removeFromCart([lineItem.id]);
      updateTag(TAGS.cart);
    } else {
      return "Item not found in cart";
    }
  } catch (e) {
    return "Error removing item from cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCart();

    if (!cart) {
      return "Error fetching cart";
    }

    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );

    if (lineItem && lineItem.id) {
      if (quantity === 0) {
        await removeFromCart([lineItem.id]);
      } else {
        await updateCart([
          {
            id: lineItem.id,
            merchandiseId,
            quantity,
          },
        ]);
      }
    } else if (quantity > 0) {
      // If the item doesn't exist in the cart and quantity > 0, add it
      await addToCart([{ merchandiseId, quantity }]);
    }

    updateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return "Error updating item quantity";
  }
}

export async function redirectToCheckout() {
  // In mock mode, just show an alert via a redirect to a checkout page
  // In production, this would redirect to the actual checkout URL
  const cart = await getCart();
  if (cart && cart.lines.length > 0) {
    // For demo purposes, we'll just reload the page
    // In a real implementation, you'd redirect to cart.checkoutUrl
    console.log("Checkout initiated for cart:", cart.id);
  }
}

export async function createCartAndSetCookie() {
  const cart = await createCart();
  (await cookies()).set("cartId", cart.id!);
}
