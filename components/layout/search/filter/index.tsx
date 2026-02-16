import { SortFilterItem } from "lib/constants";
import FilterItemDropdown from "./dropdown";
import { FilterItem } from "./item";

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({
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
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem
          key={i}
          item={item}
          currentPath={currentPath}
          currentSort={currentSort}
          currentQuery={currentQuery}
        />
      ))}
    </>
  );
}

export default function FilterList({
  list,
  title,
  currentPath,
  currentSort,
  currentQuery,
}: {
  list: ListItem[];
  title?: string;
  currentPath?: string;
  currentSort?: string;
  currentQuery?: string;
}) {
  return (
    <nav aria-label={title || "Filter"}>
      {title ? (
        <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
          {title}
        </h3>
      ) : null}
      <ul className="hidden md:block">
        <FilterItemList
          list={list}
          currentPath={currentPath}
          currentSort={currentSort}
          currentQuery={currentQuery}
        />
      </ul>
      <div className="md:hidden">
        <FilterItemDropdown
          list={list}
          currentPath={currentPath}
          currentSort={currentSort}
          currentQuery={currentQuery}
        />
      </div>
    </nav>
  );
}
