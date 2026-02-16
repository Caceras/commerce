import { getCollections } from "lib/shopify";
import FilterList from "./filter";

export default async function Collections({
  currentPath,
}: {
  currentPath?: string;
}) {
  const collections = await getCollections();
  return (
    <FilterList list={collections} title="Collections" currentPath={currentPath} />
  );
}
