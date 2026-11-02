import { Coffee } from "lucide-react";
import Link from "next/link";

import { TrackedLink } from "@/components/ui/TrackedLink";
import { links, pageLinks } from "@/content/site";

import { Wordmark } from "./Wordmark";

const linkStyles =
  "text-sm leading-5 font-medium no-underline hover:underline hover:underline-offset-3";

type NavProps = {
  onHome?: boolean;
};

export function Nav({ onHome = false }: NavProps) {
  return (
    <nav
      aria-label="Main"
      className="mx-auto flex min-h-18 max-w-300 flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6"
    >
      <Wordmark />
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {pageLinks.map((link) =>
          onHome ? (
            <a key={link.id} href={`#${link.id}`} className={linkStyles}>
              {link.label}
            </a>
          ) : (
            <Link key={link.id} href={`/#${link.id}`} className={linkStyles}>
              {link.label}
            </Link>
          ),
        )}
        <TrackedLink
          href={links.support}
          target="_blank"
          rel="noopener"
          event={{ name: "support_click" }}
          className={`${linkStyles} inline-flex items-center gap-1.5`}
        >
          <Coffee aria-hidden="true" className="size-4" strokeWidth={1.75} />
          Buy me a coffee
        </TrackedLink>
      </div>
    </nav>
  );
}
