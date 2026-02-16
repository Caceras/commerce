import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({
  product,
  searchParams,
}: {
  product: Product;
  searchParams: Record<string, string>;
}) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b border-neutral-200 pb-6 dark:border-neutral-800">
        <h1 className="mb-2 text-5xl font-medium text-balance">
          {product.title}
        </h1>
        <div className="mr-auto w-auto rounded-full bg-neutral-900 p-2 text-sm text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector
        options={product.options}
        variants={product.variants}
        searchParams={searchParams}
        productHandle={product.handle}
      />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight text-neutral-600 dark:text-neutral-400"
          html={product.descriptionHtml}
        />
      ) : null}
      <a
        href="/search"
        className="flex w-full items-center justify-center rounded-full bg-neutral-900 p-4 text-sm font-medium tracking-wide text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
      >
        Browse All Templates
      </a>
    </>
  );
}
