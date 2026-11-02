import Image from "next/image";
import type { ReactNode } from "react";

import { formatExamples } from "@/content/site";

type FeatureProps = {
  title: string;
  lead: string;
  flip?: boolean;
  children: ReactNode;
};

function Feature({ title, lead, flip, children }: FeatureProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
      <div
        className={`flex min-w-0 flex-col gap-3 md:sticky md:top-8 ${flip ? "md:order-2" : ""}`}
      >
        <h2 className="m-0 type-section">{title}</h2>
        <p className="m-0 type-lead text-ink-muted">{lead}</p>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

const screenshotStyles =
  "block h-auto max-w-full rounded-lg border border-line bg-surface-0 shadow-pop";

export function Features() {
  return (
    <section id="how" className="bg-surface-50 py-16 md:py-24">
      <div className="mx-auto flex max-w-300 flex-col gap-18 px-6">
        <Feature
          title="Every value in the shape the field wants"
          lead="Dummio checks date order, phone format, length limits and patterns before it writes. If the form still rejects a value, it tries the next likely format."
        >
          <div className="overflow-x-auto rounded-lg border border-line bg-surface-0 px-4 py-2">
            <table className="w-full border-collapse text-sm leading-5">
              <thead>
                <tr className="text-left text-xs leading-4 text-ink-muted">
                  <th
                    scope="col"
                    className="py-2 pr-3 font-medium whitespace-nowrap"
                  >
                    Field
                  </th>
                  <th
                    scope="col"
                    className="py-2 pr-3 font-medium whitespace-nowrap"
                  >
                    What it asks for
                  </th>
                  <th
                    scope="col"
                    className="py-2 font-medium whitespace-nowrap"
                  >
                    What Dummio writes
                  </th>
                </tr>
              </thead>
              <tbody>
                {formatExamples.map((example) => (
                  <tr key={example.clue} className="border-t border-line">
                    <td className="py-2 pr-3 align-baseline">
                      {example.field}
                    </td>
                    <td className="py-2 pr-3 align-baseline">
                      {example.prefix}
                      <code className="font-mono text-[13px] leading-[18px] text-ink-muted">
                        {example.clue}
                      </code>
                      {example.suffix}
                    </td>
                    <td className="py-2 align-baseline font-mono whitespace-nowrap tabular-nums">
                      {example.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Feature>

        <Feature
          flip
          title="One made-up person per fill"
          lead="The email matches the name, and the street, city, province and ZIP belong together. It ships with about 1,900 Philippine cities and municipalities, and 3,000 US cities."
        >
          <Image
            src="/images/filled-form.png"
            width={1520}
            height={2386}
            sizes="(min-width: 768px) 420px, 100vw"
            alt="A sign-up form filled by Dummio with a matching name, email, mobile number and address"
            className={`${screenshotStyles} md:w-105`}
          />
        </Feature>

        <Feature
          title="Your usual test login, on the sites you choose"
          lead="Pin a value to a site, like a fixed test email on staging, and Dummio uses it there every time. Everything else stays random."
        >
          <Image
            src="/images/settings.png"
            width={1436}
            height={1598}
            sizes="(min-width: 768px) 560px, 100vw"
            alt="Dummio settings with fill options and a site preset"
            className={`${screenshotStyles} md:w-140`}
          />
        </Feature>
      </div>
    </section>
  );
}
