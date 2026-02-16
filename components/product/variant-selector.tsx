import clsx from "clsx";
import { ProductOption, ProductVariant } from "lib/shopify/types";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function VariantSelector({
  options,
  variants,
  searchParams,
  productHandle,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
  searchParams: Record<string, string>;
  productHandle: string;
}) {
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option.name.toLowerCase()]: option.value,
      }),
      {},
    ),
  }));

  return options.map((option) => (
    <dl key={option.id} className="mb-8">
      <dt className="mb-4 text-sm uppercase tracking-wide">{option.name}</dt>
      <dd className="flex flex-wrap gap-3">
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          const optionParams: Record<string, string> = { ...searchParams };
          optionParams[optionNameLowerCase] = value;

          const filtered = Object.entries(optionParams).filter(
            ([key, val]) =>
              options.find(
                (opt) =>
                  opt.name.toLowerCase() === key && opt.values.includes(val),
              ),
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, val]) =>
                combination[key] === val && combination.availableForSale,
            ),
          );

          const isActive = searchParams[optionNameLowerCase] === value;

          const params = new URLSearchParams(optionParams);
          const href = `/product/${productHandle}?${params.toString()}`;

          return (
            <a
              key={value}
              href={href}
              aria-disabled={!isAvailableForSale}
              title={`${option.name} ${value}${!isAvailableForSale ? " (Out of Stock)" : ""}`}
              className={clsx(
                "flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900",
                {
                  "ring-2 ring-neutral-900 dark:ring-neutral-100": isActive,
                  "hover:ring-1 hover:ring-neutral-400":
                    !isActive && isAvailableForSale,
                  "pointer-events-none relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700":
                    !isAvailableForSale,
                },
              )}
            >
              {value}
            </a>
          );
        })}
      </dd>
    </dl>
  ));
}
