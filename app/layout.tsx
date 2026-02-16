import { Navbar } from "components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import { baseUrl } from "lib/utils";
import { ReactNode } from "react";
import "./globals.css";

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Premium SaaS templates built with Next.js, TypeScript, and Tailwind CSS. Ship your product faster.",
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME!,
    title: SITE_NAME!,
    description:
      "Premium SaaS templates built with Next.js, TypeScript, and Tailwind CSS.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME!,
    description:
      "Premium SaaS templates built with Next.js, TypeScript, and Tailwind CSS.",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-neutral-900 focus:shadow-lg dark:focus:bg-neutral-900 dark:focus:text-neutral-100"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
