import { ChevronDown } from "lucide-react";

import { faqs } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="bg-surface-50 py-16 md:py-24">
      <div className="mx-auto flex max-w-300 flex-col gap-8 px-6">
        <h2 className="m-0 type-section">FAQ</h2>
        <div className="max-w-180 border-t border-line">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group border-b border-line"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 font-medium">
                {faq.question}
                <ChevronDown
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-4 shrink-0 text-ink-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="m-0 pb-4 text-ink-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
