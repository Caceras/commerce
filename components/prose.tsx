import clsx from "clsx";

const Prose = ({ html, className }: { html: string; className?: string }) => {
  return (
    <div
      className={clsx(
        "prose mx-auto max-w-6xl text-base leading-7 text-neutral-900 prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-neutral-900 prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-neutral-900 prose-a:underline hover:prose-a:text-neutral-600 prose-strong:text-neutral-900 prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-neutral-100 dark:prose-headings:text-neutral-100 dark:prose-a:text-neutral-100 dark:hover:prose-a:text-neutral-400 dark:prose-strong:text-neutral-100",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
