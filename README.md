# AI Tech Store

A high-performance, server-rendered Next.js App Router ecommerce application for AI and maker electronics.

This template uses React Server Components, Server Actions, `Suspense`, `useOptimistic`, and more.

## Features

- **Single Board Computers** - Raspberry Pi, NVIDIA Jetson, and more
- **Smart Home Devices** - Open source speakers, Home Assistant hubs
- **AI & Machine Learning** - Development kits and accessories
- **Robotics** - Drones, sensors, and components
- **Maker Kits** - Arduino, ESP32, and starter packs

## Running locally

1. Install dependencies:

```bash
pnpm install
```

2. Create a `.env` file (optional - the store works with mock data):

```
COMPANY_NAME="AI Tech Store"
SITE_NAME="AI Tech Store"
```

3. Run the development server:

```bash
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Server Components, Server Actions
- **UI**: Custom components with Geist font family

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── cart/              # Shopping cart components
│   ├── grid/              # Product grid layouts
│   ├── layout/            # Navigation, footer, search
│   └── product/           # Product detail components
├── lib/                   # Utility functions and data
│   └── store/             # Mock store data and API
└── docs/                  # Documentation
```
