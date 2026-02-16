import clsx from "clsx";
import type { SortFilterItem } from "lib/constants";
import type { ListItem, PathFilterItem } from ".";

function PathFilterItemComponent({
  item,
  currentPath,
}: {
  item: PathFilterItem;
  currentPath?: string;
}) {
  const active = currentPath === item.path;

  return (
    <li
      className="mt-2 flex text-neutral-900 dark:text-neutral-100"
      key={item.title}
    >
      {active ? (
        <p className="w-full text-sm underline underline-offset-4">
          {item.title}
        </p>
      ) : (
        <a
          href={item.path}
          className="w-full text-sm underline-offset-4 hover:underline"
        >
          {item.title}
        </a>
      )}
    </li>
  );
}

function SortFilterItemComponent({
  item,
  currentPath,
  currentSort,
  currentQuery,
}: {
  item: SortFilterItem;
  currentPath?: string;
  currentSort?: string;
  currentQuery?: string;
}) {
  const active = currentSort === item.slug || (!currentSort && !item.slug);
  const params = new URLSearchParams();
  if (currentQuery) params.set("q", currentQuery);
  if (item.slug) params.set("sort", item.slug);
  const href = `${currentPath || "/search"}${params.toString() ? `?${params.toString()}` : ""}`;

  return (
    <li
      className="mt-2 flex text-sm text-neutral-900 dark:text-neutral-100"
      key={item.title}
    >
      {active ? (
        <p className="w-full underline underline-offset-4">{item.title}</p>
      ) : (
        <a
          href={href}
          className="w-full hover:underline hover:underline-offset-4"
        >
          {item.title}
        </a>
      )}
    </li>
  );
}

export function FilterItem({
  item,
  currentPath,
  currentSort,
  currentQuery,
}: {
  item: ListItem;
  currentPath?: string;
  currentSort?: string;
  currentQuery?: string;
}) {
  return "path" in item ? (
    <PathFilterItemComponent item={item} currentPath={currentPath} />
  ) : (
    <SortFilterItemComponent
      item={item}
      currentPath={currentPath}
      currentSort={currentSort}
      currentQuery={currentQuery}
    />
  );
}
