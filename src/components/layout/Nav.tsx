import { Coffee } from "lucide-react";
import Link from "next/link";

import { buttonStyles, type ButtonVariant } from "@/components/ui/buttonStyles";
import { pageLinks } from "@/content/site";

import { Wordmark } from "./Wordmark";

const linkStyles =
  "text-sm leading-5 font-medium no-underline hover:underline hover:underline-offset-3";

type NavProps = {
  installVariant: ButtonVariant;
};

export function Nav({ installVariant }: NavProps) {
  return (
    <nav
      aria-label="Main"
      className="mx-auto flex min-h-18 max-w-300 flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6"
    >
      <Wordmark />
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {pageLinks.map((link) => (
          <Link key={link.href} href={link.href} className={linkStyles}>
            {link.label}
          </Link>
        ))}
        <Link
          href="/#support"
          className={`${linkStyles} inline-flex items-center gap-1.5`}
        >
          <Coffee aria-hidden="true" className="size-4" strokeWidth={1.75} />
          Buy me a coffee
        </Link>
        <Link href="/#install" className={buttonStyles(installVariant)}>
          Install
        </Link>
      </div>
    </nav>
  );
}
