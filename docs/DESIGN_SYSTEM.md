# Commerce Design System Documentation

A comprehensive guide to the design patterns, styles, and architecture used in this e-commerce application. This document serves as the definitive reference for maintaining visual consistency and layout structure across the project.

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Component Patterns](#component-patterns)
5. [App Shell Architecture](#app-shell-architecture)
6. [Page Layouts](#page-layouts)
7. [Animation & Transitions](#animation--transitions)
8. [Accessibility](#accessibility)
9. [Responsive Design](#responsive-design)
10. [Code Conventions](#code-conventions)

---

## Color System

### Design Tokens (CSS Variables)

The application uses CSS custom properties defined in `globals.css` for theming:

```css
:root {
  --background: oklch(1 0 0);           /* White background */
  --foreground: oklch(0.145 0 0);       /* Near-black text */
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);       /* Near-black background */
  --foreground: oklch(0.985 0 0);       /* Near-white text */
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.556 0 0);
}
```

### Tailwind Color Palette

#### Primary Brand Colors

| Color | Tailwind Class | Usage |
|-------|---------------|-------|
| Blue 600 | `bg-blue-600`, `text-blue-600` | Primary CTAs, active states, hover borders |
| Blue 500 | `hover:bg-blue-500` | Button hover states |
| Blue 400 | `hover:bg-blue-400` | Disabled button states |

#### Neutral Colors (Light Mode)

| Color | Tailwind Class | Usage |
|-------|---------------|-------|
| White | `bg-white` | Primary backgrounds |
| Neutral 50 | `bg-neutral-50` | Secondary backgrounds, hover states |
| Neutral 100 | `bg-neutral-100` | Muted backgrounds |
| Neutral 200 | `border-neutral-200` | Light borders |
| Neutral 400 | `text-neutral-400` | Placeholder text, disabled states |
| Neutral 500 | `text-neutral-500` | Secondary text, muted content |
| Neutral 600 | `text-neutral-600` | Body text |
| Black | `bg-black`, `text-black` | High contrast elements |

#### Neutral Colors (Dark Mode)

| Color | Tailwind Class | Usage |
|-------|---------------|-------|
| Neutral 900 | `dark:bg-neutral-900` | Primary backgrounds |
| Neutral 800 | `dark:bg-neutral-800` | Secondary backgrounds, hover states |
| Neutral 700 | `dark:border-neutral-700` | Borders |
| Neutral 400 | `dark:text-neutral-400` | Secondary text |
| White | `dark:text-white` | Primary text |

#### Accent Colors

| Color | Tailwind Class | Usage |
|-------|---------------|-------|
| Teal 300 | Selection highlight (light mode) | Custom selection color |
| Pink 500 | Selection highlight (dark mode) | Custom selection color |

### Color Usage Guidelines

```tsx
// Backgrounds
className="bg-white dark:bg-neutral-900"           // Primary background
className="bg-neutral-50 dark:bg-neutral-800"      // Secondary background
className="bg-neutral-100 dark:bg-neutral-800"     // Muted background
className="bg-black dark:bg-white"                 // Inverted background

// Text
className="text-black dark:text-white"             // Primary text
className="text-neutral-500 dark:text-neutral-400" // Secondary text
className="text-neutral-600"                       // Body text

// Borders
className="border-neutral-200 dark:border-neutral-700"  // Standard border
className="hover:border-blue-600"                       // Hover border accent

// Interactive States
className="bg-blue-600 text-white"                 // Primary button
className="hover:bg-blue-500"                      // Primary button hover
className="disabled:bg-blue-400"                   // Primary button disabled
```

---

## Typography

### Font Family

The application uses **Geist Sans** as the primary font family:

```tsx
// layout.tsx
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans'
});

// Applied to body
<body className={geist.variable}>
```

```css
/* globals.css */
@theme inline {
  --font-sans: var(--font-geist-sans);
}
```

### Type Scale

| Element | Classes | Usage |
|---------|---------|-------|
| Hero Title | `text-5xl font-bold` | Homepage hero, major headings |
| Page Title | `text-4xl font-bold` | Page titles |
| Section Title | `text-3xl font-bold` | Section headings |
| Card Title | `text-2xl font-bold` | Product titles, card headings |
| Subtitle | `text-xl` | Subtitles, large body |
| Large Text | `text-lg` | Emphasized body text |
| Body | `text-base` | Standard body text |
| Small | `text-sm` | Secondary text, labels |
| Extra Small | `text-xs` | Captions, metadata |

### Text Styles

```tsx
// Headings
className="text-3xl font-bold"                    // Primary heading
className="text-xl font-medium"                   // Secondary heading

// Labels (uppercase style)
className="text-xs font-semibold uppercase tracking-wide"

// Body text
className="text-sm leading-tight"                 // Compact body
className="text-base leading-7"                   // Relaxed body (prose)

// Price display
className="text-sm font-semibold"                 // Standard price
className="text-lg font-medium"                   // Large price

// Muted text
className="text-sm text-neutral-500 dark:text-neutral-400"
```

### Line Height Guidelines

| Use Case | Class | Value |
|----------|-------|-------|
| Tight (headings) | `leading-tight` | 1.25 |
| Normal | `leading-normal` | 1.5 |
| Relaxed (prose) | `leading-7` | 1.75rem |

---

## Spacing & Layout

### Spacing Scale

The application follows Tailwind's default spacing scale. Common values used:

| Size | Class | Pixels | Usage |
|------|-------|--------|-------|
| 1 | `p-1`, `m-1` | 4px | Icon padding, tight spacing |
| 2 | `p-2`, `m-2` | 8px | Button padding, small gaps |
| 3 | `p-3`, `m-3` | 12px | Card padding, medium gaps |
| 4 | `p-4`, `m-4` | 16px | Section padding, standard gaps |
| 6 | `p-6`, `m-6` | 24px | Large section padding |
| 8 | `p-8`, `m-8` | 32px | Hero padding, major sections |
| 12 | `p-12`, `m-12` | 48px | Extra large spacing |

### Container Widths

```tsx
// Main content container
className="mx-auto max-w-screen-2xl"  // 1536px max width

// Narrower containers
className="max-w-7xl"                  // 1280px - standard content
className="max-w-prose"                // ~65ch - text content

// Fixed widths
className="w-[390px]"                  // Cart modal width
className="w-full md:w-4/6 lg:w-5/6"   // Responsive product image area
```

### Gap System

```tsx
// Flex gaps
className="gap-2"   // 8px - tight elements
className="gap-3"   // 12px - buttons, small items
className="gap-4"   // 16px - standard spacing
className="gap-6"   // 24px - sections
className="gap-8"   // 32px - major sections
className="gap-12"  // 48px - page sections

// Grid gaps
className="gap-4"   // Product grids
className="gap-px"  // Pixel gap for bordered grids
```

### Padding Patterns

```tsx
// Page padding
className="px-4"                       // Mobile horizontal padding
className="px-4 md:px-6"               // Responsive horizontal padding
className="py-8 md:py-12"              // Vertical section padding

// Component padding
className="p-4"                        // Card padding
className="p-6"                        // Large card padding
className="p-8"                        // Hero/feature padding
className="px-3 py-2"                  // Button padding
className="px-4 py-3"                  // Input padding
```

---

## Component Patterns

### Buttons

#### Primary Button (Add to Cart style)

```tsx
<button
  className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
>
  Add To Cart
</button>
```

#### Icon Button

```tsx
<button
  className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
>
  <Icon className="h-4 transition-all ease-in-out hover:scale-110" />
</button>
```

#### Text Link Button

```tsx
<button
  className="flex items-center text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-white"
>
  Link Text
</button>
```

### Cards & Tiles

#### Product Grid Tile

```tsx
<div
  className={clsx(
    'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black',
    {
      'border-neutral-200 dark:border-neutral-800': !isActive,
      'border-2 border-blue-600': isActive
    }
  )}
>
  {/* Content */}
</div>
```

#### Feature Tile (with background)

```tsx
<div className="relative aspect-square h-full w-full">
  <Image
    className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
    // ...props
  />
  <Label position="bottom" title={title} amount={price} />
</div>
```

### Labels & Badges

#### Product Label

```tsx
<div
  className={clsx(
    'absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label',
    { 'lg:px-20 lg:pb-[35%]': size === 'full' }
  )}
>
  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
      {title}
    </h3>
    <Price className="flex-none rounded-full bg-blue-600 p-2 text-white" />
  </div>
</div>
```

### Form Inputs

#### Search Input

```tsx
<input
  type="text"
  placeholder="Search for products..."
  className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
/>
```

#### Variant Selector Button

```tsx
<button
  className={clsx(
    'flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900',
    {
      'cursor-default ring-2 ring-blue-600': isActive,
      'ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600':
        !isActive && isAvailable,
      'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700':
        !isAvailable
    }
  )}
>
  {value}
</button>
```

### Modals & Overlays

#### Slide-in Cart Modal

```tsx
<Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white">
  {/* Modal content */}
</Dialog.Panel>
```

#### Mobile Menu Overlay

```tsx
<Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
  {/* Menu content */}
</Dialog.Panel>
```

---

## App Shell Architecture

### Root Layout Structure

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
```

### Navbar Structure

```tsx
// components/layout/navbar/index.tsx
<nav className="relative flex items-center justify-between p-4 lg:px-6">
  {/* Mobile menu (hamburger) - hidden on desktop */}
  <div className="block flex-none md:hidden">
    <MobileMenu menu={menu} />
  </div>

  {/* Logo - centered on mobile, left on desktop */}
  <div className="flex w-full items-center">
    <div className="flex w-full md:w-1/3">
      <Link href="/" className="...">
        <LogoSquare />
        <span className="uppercase">Store Name</span>
      </Link>
    </div>

    {/* Desktop navigation - hidden on mobile */}
    <div className="hidden justify-center md:flex md:w-1/3">
      {menu.map((item) => (
        <Link key={item.title} href={item.path} className="...">
          {item.title}
        </Link>
      ))}
    </div>

    {/* Search & Cart */}
    <div className="flex justify-end md:w-1/3">
      <Search />
      <CartModal />
    </div>
  </div>
</nav>
```

### Footer Structure

```tsx
// components/layout/footer.tsx
<footer className="text-sm text-neutral-500 dark:text-neutral-400">
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
    {/* Navigation columns */}
    {menu.map((section) => (
      <nav key={section.title}>
        {section.items.map((item) => (
          <Link href={item.path}>{item.title}</Link>
        ))}
      </nav>
    ))}
  </div>

  {/* Bottom bar */}
  <div className="border-t border-neutral-200 py-6 dark:border-neutral-700">
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
      {/* Copyright & links */}
    </div>
  </div>
</footer>
```

---

## Page Layouts

### Homepage Layout

The homepage uses a full-width layout with no sidebar:

```tsx
// app/page.tsx
export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />  {/* Hero feature grid */}
      <Carousel />       {/* Product carousel */}
      <Footer />         {/* Site footer */}
    </>
  );
}
```

#### Hero Grid (Three Item Grid)

```tsx
<section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
  {/* Large featured item - spans 4 columns, 2 rows */}
  <div className="md:col-span-4 md:row-span-2">
    <GridTileImage size="full" />
  </div>

  {/* Small items - each spans 2 columns, 1 row */}
  <div className="md:col-span-2 md:row-span-1">
    <GridTileImage size="half" />
  </div>
  <div className="md:col-span-2 md:row-span-1">
    <GridTileImage size="half" />
  </div>
</section>
```

### Search/Collection Layout

Uses a sidebar layout pattern:

```tsx
// app/search/layout.tsx
export default function SearchLayout({ children }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        {/* Sidebar - filters & collections */}
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
          <FilterList />
        </div>

        {/* Main content area */}
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
```

### Product Detail Layout

```tsx
// app/product/[handle]/page.tsx
export default async function ProductPage({ params }) {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
        {/* Product Gallery - takes 2/3 or 5/6 width */}
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Gallery images={product.images} />
        </div>

        {/* Product Info - takes 1/3 or 1/6 width */}
        <div className="basis-full lg:basis-2/6">
          <ProductDescription product={product} />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts id={product.id} />
    </div>
  );
}
```

### Product Grid

```tsx
// components/grid/index.tsx
<ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {products.map((product) => (
    <li key={product.handle} className="aspect-square">
      <GridTileImage />
    </li>
  ))}
</ul>
```

---

## Animation & Transitions

### Hover Effects

```tsx
// Scale on hover (images)
className="transition duration-300 ease-in-out group-hover:scale-105"

// Scale on hover (icons)
className="transition-all ease-in-out hover:scale-110"

// Opacity on hover
className="hover:opacity-90"

// Border color on hover
className="hover:border-blue-600"

// Text underline on hover
className="underline-offset-4 hover:underline"
```

### Transition Durations

| Duration | Usage |
|----------|-------|
| 200ms | Fast interactions (buttons, links) |
| 300ms | Standard transitions (borders, colors) |
| 500ms | Slow animations (modals, overlays) |

### Loading States

#### Loading Dots Component

```tsx
// components/loading-dots.tsx
<span className="mx-2 inline-flex items-center">
  <span className="mx-[1px] inline-block h-1 w-1 animate-blink rounded-md bg-white" />
  <span className="animation-delay-[200ms] mx-[1px] inline-block h-1 w-1 animate-blink rounded-md bg-white" />
  <span className="animation-delay-[400ms] mx-[1px] inline-block h-1 w-1 animate-blink rounded-md bg-white" />
</span>
```

#### Skeleton Loading

```tsx
// Skeleton placeholder
className="animate-pulse bg-neutral-100 dark:bg-neutral-800"
```

### Cart Modal Animation

```tsx
// Slide-in transition
<Transition show={isOpen}>
  <Dialog>
    <Transition.Child
      enter="transition-all ease-in-out duration-300"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-all ease-in-out duration-200"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      {/* Modal panel */}
    </Transition.Child>
  </Dialog>
</Transition>
```

### Carousel Animation

```tsx
// Auto-scrolling carousel
className="animate-carousel"  // Custom keyframe animation

// Hover pause
className="group-hover:[animation-play-state:paused]"
```

---

## Accessibility

### Focus States

```tsx
// Standard focus ring
className="focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"

// Dark mode focus
className="dark:focus-visible:ring-neutral-600"
```

### Screen Reader Text

```tsx
// Hidden but accessible
<span className="sr-only">Open cart</span>
<span className="sr-only">Search</span>
```

### ARIA Labels

```tsx
// Navigation
<nav aria-label="Main navigation">
<nav aria-label="Footer navigation">

// Buttons with icons
<button aria-label="Close menu">
<button aria-label="Open cart">
<button aria-label="Remove item">

// Form inputs
<input aria-label="Search for products" />

// Live regions
<div role="status" aria-live="polite">
```

### Keyboard Navigation

- All interactive elements are focusable
- Modal traps focus when open
- Escape key closes modals
- Tab order follows visual layout

---

## Responsive Design

### Breakpoint System

| Breakpoint | Min Width | Tailwind Prefix |
|------------|-----------|-----------------|
| Mobile | 0px | (default) |
| Small | 640px | `sm:` |
| Medium | 768px | `md:` |
| Large | 1024px | `lg:` |
| Extra Large | 1280px | `xl:` |
| 2XL | 1536px | `2xl:` |

### Mobile-First Patterns

```tsx
// Layout shifts
className="flex-col md:flex-row"                    // Stack → Row
className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"  // 1 → 2 → 3 columns

// Visibility
className="block md:hidden"                         // Mobile only
className="hidden md:block"                         // Desktop only
className="hidden md:flex"                          // Desktop flex

// Sizing
className="w-full md:w-1/3"                         // Full → Third
className="text-base md:text-sm"                    // Size adjustments

// Spacing
className="px-4 md:px-6 lg:px-8"                    // Progressive padding
className="gap-4 md:gap-8"                          // Progressive gaps
```

### Component Responsive Behavior

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navbar | Hamburger menu, centered logo | Full nav visible | Full nav with search |
| Product Grid | 1 column | 2 columns | 3 columns |
| Hero Grid | Stacked items | 6-column grid | 6-column grid with max-height |
| Sidebar | Below content | Side of content | Side of content |
| Cart Modal | Full width | 390px slide-in | 390px slide-in |
| Product Detail | Stacked | Stacked | Side-by-side |

---

## Code Conventions

### File Structure

```
/app
  /layout.tsx          # Root layout with providers
  /page.tsx            # Homepage
  /product/[handle]
    /page.tsx          # Product detail page
  /search
    /layout.tsx        # Search layout with sidebar
    /page.tsx          # Search results
    /[collection]
      /page.tsx        # Collection page

/components
  /cart                # Cart-related components
  /grid                # Grid layout components
  /layout              # App shell components (navbar, footer)
    /navbar
    /search
  /product             # Product-specific components
  /icons               # SVG icon components
  *.tsx                # Shared components

/lib
  /constants.ts        # App constants
  /utils.ts            # Utility functions
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ProductCard.tsx` |
| Utilities | camelCase | `formatPrice.ts` |
| Constants | SCREAMING_SNAKE | `SITE_NAME` |
| CSS Classes | kebab-case | `product-grid` |
| Files | kebab-case | `mobile-menu.tsx` |

### Component Pattern

```tsx
// Standard component structure
import clsx from 'clsx';

interface ComponentProps {
  // Props interface
}

export function Component({ prop1, prop2 }: ComponentProps) {
  return (
    <div className={clsx(
      'base-classes',
      { 'conditional-class': condition }
    )}>
      {/* Content */}
    </div>
  );
}
```

### Using clsx for Conditional Classes

```tsx
import clsx from 'clsx';

className={clsx(
  // Base classes (always applied)
  'flex items-center rounded-lg border',
  
  // Conditional classes (object syntax)
  {
    'bg-blue-600 text-white': isActive,
    'bg-white text-black': !isActive,
    'opacity-50 cursor-not-allowed': isDisabled
  },
  
  // Dynamic classes (can be undefined)
  customClassName
)}
```

### Image Handling

```tsx
import Image from 'next/image';

<Image
  src={imageUrl}
  alt={descriptiveAltText}
  fill                           // For responsive container fill
  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
  className="object-cover"       // Or object-contain
  priority                       // For above-fold images
/>
```

---

## Quick Reference

### Common Class Combinations

```tsx
// Card container
"rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black"

// Hover card
"hover:border-blue-600 transition-colors duration-300"

// Primary button
"rounded-full bg-blue-600 px-4 py-2 text-white hover:opacity-90"

// Secondary button
"rounded-md border border-neutral-200 px-4 py-2 dark:border-neutral-700"

// Input field
"rounded-lg border border-neutral-200 bg-white px-4 py-2 dark:border-neutral-800 dark:bg-transparent"

// Muted text
"text-sm text-neutral-500 dark:text-neutral-400"

// Section padding
"px-4 py-8 md:px-6 md:py-12"

// Max-width container
"mx-auto max-w-screen-2xl px-4"
```

---

## Appendix: Design Tokens Summary

| Token | Light Value | Dark Value |
|-------|-------------|------------|
| Background | White | Neutral 900 |
| Foreground | Black | White |
| Border | Neutral 200 | Neutral 700/800 |
| Muted Text | Neutral 500 | Neutral 400 |
| Accent | Blue 600 | Blue 600 |
| Selection | Teal 300 | Pink 500 |
| Radius (default) | 0.625rem | 0.625rem |
| Radius (full) | 9999px | 9999px |
