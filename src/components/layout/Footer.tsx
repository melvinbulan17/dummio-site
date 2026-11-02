import Link from "next/link";

import { TrackedLink } from "@/components/ui/TrackedLink";
import { links } from "@/content/site";

import { Wordmark } from "./Wordmark";

const linkStyles =
  "text-band-ink-text no-underline hover:text-dummy-yellow hover:underline hover:underline-offset-3";

export function Footer() {
  return (
    <footer className="border-t border-band-ink-line bg-band-ink py-6 text-sm leading-5 text-band-ink-muted">
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6">
        <div className="text-band-ink-text">
          <Wordmark />
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <TrackedLink
            href={links.repo}
            target="_blank"
            rel="noopener"
            event={{ name: "github_click" }}
            className={linkStyles}
          >
            GitHub
          </TrackedLink>
          <Link href="/privacy" className={linkStyles}>
            Privacy policy
          </Link>
          <a
            href={links.reportProblem}
            target="_blank"
            rel="noopener"
            className={linkStyles}
          >
            Report a problem
          </a>
          <TrackedLink
            href={links.support}
            target="_blank"
            rel="noopener"
            event={{ name: "support_click" }}
            className={linkStyles}
          >
            Ko-fi
          </TrackedLink>
        </div>
        <span>
          MIT licence.{" "}
          <a
            href={links.credits}
            target="_blank"
            rel="noopener"
            className="text-dummy-yellow underline-offset-3"
          >
            Data credits
          </a>
        </span>
      </div>
    </footer>
  );
}
