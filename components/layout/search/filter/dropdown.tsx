import type { ListItem } from ".";
import { FilterItem } from "./item";

export default function FilterItemDropdown({
  list,
  currentPath,
  currentSort,
  currentQuery,
}: {
  list: ListItem[];
  currentPath?: string;
  currentSort?: string;
  currentQuery?: string;
}) {
  const activeItem = list.find((item) => {
    if ("path" in item) return currentPath === item.path;
    if ("slug" in item)
      return currentSort === item.slug || (!currentSort && !item.slug);
    return false;
  });

  return (
    <details className="relative">
      <summary className="flex w-full cursor-pointer items-center justify-between rounded-sm border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700">
        <span>{activeItem?.title || "Select"}</span>
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
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </summary>
      <div className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-neutral-950">
        {list.map((item: ListItem, i) => (
          <FilterItem
            key={i}
            item={item}
            currentPath={currentPath}
            currentSort={currentSort}
            currentQuery={currentQuery}
          />
        ))}
      </div>
    </details>
  );
}
