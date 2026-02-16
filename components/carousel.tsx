import { getCollectionProducts } from "lib/shopify";
import Link from "next/link";
import { GridTileImage } from "./grid/tile";

export async function Carousel() {
  const products = await getCollectionProducts({
    collection: "hidden-homepage-carousel",
  });

  if (!products?.length) return null;

  return (
    <section aria-label="More templates" className="px-4 pb-8">
      <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        More Templates
      </h2>
      <ul
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        role="list"
      >
        {products.map((product) => (
          <li key={product.handle} className="aspect-square">
            <Link
              href={`/product/${product.handle}`}
              className="relative block h-full w-full"
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode:
                    product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                loading="lazy"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
