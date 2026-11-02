import { Coffee } from "lucide-react";

import { buttonStyles } from "@/components/ui/buttonStyles";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { links } from "@/content/site";

export function Support() {
  return (
    <section id="support" className="bg-dummy-yellow-soft py-16 md:py-24">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-8 px-6 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:gap-16">
        <div className="flex min-w-0 flex-col gap-3">
          <Coffee
            aria-hidden="true"
            strokeWidth={1.75}
            className="size-10 text-dummy-yellow-text"
          />
          <h2 className="m-0 type-section">
            Saving you time? Buy me a coffee.
          </h2>
          <p className="m-0 max-w-160 type-lead">
            Dummio is free to use. If it saves you some typing, a coffee on
            Ko-fi helps me keep fixing and improving it.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <TrackedLink
            href={links.support}
            target="_blank"
            rel="noopener"
            event={{ name: "support_click" }}
            className={buttonStyles("primary", "lg")}
          >
            <Coffee aria-hidden="true" strokeWidth={1.75} className="size-5" />
            Buy me a coffee
          </TrackedLink>
          <p className="m-0 text-[13px] leading-[18px]">
            Completely optional. Opens Ko-fi in a new tab.
          </p>
        </div>
      </div>
    </section>
  );
}
