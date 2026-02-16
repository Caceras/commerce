import Link from "next/link";

import FooterMenu from "components/layout/footer-menu";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer
      className="text-sm text-neutral-500 dark:text-neutral-400"
      role="contentinfo"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 dark:border-neutral-800">
        <div>
          <Link
            className="flex items-center gap-2 text-neutral-900 md:pt-1 dark:text-neutral-100"
            href="/"
            aria-label={`${SITE_NAME} home`}
          >
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <FooterMenu menu={menu} />
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
