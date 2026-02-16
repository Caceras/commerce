import { Menu } from "lib/shopify/types";
import Link from "next/link";
import Search from "./search";

export default function MobileMenu({
  menu,
  query,
}: {
  menu: Menu[];
  query?: string;
}) {
  return (
    <details className="mobile-menu md:hidden">
      <summary
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-neutral-200 text-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
          width="16"
          height="16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </summary>

      <div className="mobile-menu-overlay fixed inset-0 z-40 hidden bg-black/30" />

      <nav
        className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col gap-4 bg-white p-6 shadow-xl dark:bg-neutral-950"
        aria-label="Mobile navigation"
      >
        <div className="mb-2 w-full">
          <Search query={query} />
        </div>
        {menu.length > 0 && (
          <ul className="flex flex-col gap-2" role="list">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="block py-2 text-lg text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </details>
  );
}
