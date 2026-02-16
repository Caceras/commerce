export default function Search({ query }: { query?: string }) {
  return (
    <form
      action="/search"
      method="GET"
      role="search"
      className="relative w-full max-w-[550px] lg:w-80 xl:w-full"
    >
      <label htmlFor="nav-search" className="sr-only">
        Search templates
      </label>
      <input
        id="nav-search"
        type="text"
        name="q"
        placeholder="Search templates..."
        autoComplete="off"
        defaultValue={query || ""}
        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4 text-neutral-500"
          aria-hidden="true"
          width="16"
          height="16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </form>
  );
}
