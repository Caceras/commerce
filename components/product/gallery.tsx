import { GridTileImage } from "components/grid/tile";
import Image from "next/image";

export function Gallery({
  images,
  imageIndex = 0,
  productHandle,
}: {
  images: { src: string; altText: string }[];
  imageIndex?: number;
  productHandle: string;
}) {
  const safeIndex =
    imageIndex >= 0 && imageIndex < images.length ? imageIndex : 0;

  return (
    <div>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[safeIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[safeIndex]?.altText || "Product image"}
            src={images[safeIndex]?.src as string}
            priority={true}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-neutral-200 bg-neutral-50/80 text-neutral-500 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80">
              <a
                href={`/product/${productHandle}?image=${safeIndex === 0 ? images.length - 1 : safeIndex - 1}`}
                aria-label="Previous product image"
                className="flex h-full items-center justify-center px-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </a>
              <div className="mx-1 h-6 w-px bg-neutral-500" />
              <a
                href={`/product/${productHandle}?image=${safeIndex + 1 < images.length ? safeIndex + 1 : 0}`}
                aria-label="Next product image"
                className="flex h-full items-center justify-center px-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="my-12 flex flex-wrap items-center justify-center gap-2 py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === safeIndex;
            return (
              <li key={image.src} className="h-20 w-20">
                <a
                  href={`/product/${productHandle}?image=${index}`}
                  aria-label={`View image ${index + 1}`}
                  className="block h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
