import { Menu } from "lib/shopify/types";
import Link from "next/link";

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav aria-label="Footer navigation">
      <ul className="flex flex-col gap-1" role="list">
        {menu.map((item: Menu) => (
          <li key={item.title}>
            <Link
              href={item.path}
              className="block p-2 text-lg underline-offset-4 hover:text-neutral-900 hover:underline md:inline-block md:text-sm dark:hover:text-neutral-100"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
