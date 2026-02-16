import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Search from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <header
      className="border-b border-neutral-200 dark:border-neutral-800"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
        aria-label="Main navigation"
      >
        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
              aria-label={`${SITE_NAME} home`}
            >
              <LogoSquare />
              <span className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {SITE_NAME}
              </span>
            </Link>
            {menu.length > 0 && (
              <ul
                className="hidden gap-6 text-sm md:flex md:items-center"
                role="list"
              >
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Search />
          </div>
          <div className="flex justify-end md:w-1/3">
            <Link
              href="/search"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
              aria-label="Browse all templates"
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
