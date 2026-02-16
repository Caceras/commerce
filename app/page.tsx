import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";
import { getProducts } from "lib/shopify";
import { baseUrl } from "lib/utils";

const { SITE_NAME } = process.env;

export const metadata = {
  description:
    "Premium SaaS templates built with Next.js, TypeScript, and Tailwind CSS. Ship your product faster.",
  openGraph: {
    type: "website",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default async function HomePage() {
  const allProducts = await getProducts({});

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: baseUrl,
    description:
      "Premium SaaS templates built with Next.js, TypeScript, and Tailwind CSS.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SaaS Templates",
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/product/${product.handle}`,
      name: product.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
