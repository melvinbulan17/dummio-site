import { DownloadButtons } from "@/components/ui/DownloadButtons";

import { FillDemo } from "./FillDemo";

export function Hero() {
  return (
    <section className="bg-dummy-yellow text-ink-on-accent [&_:focus-visible]:outline-ink-on-accent">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-10 px-6 pt-8 pb-18 min-[980px]:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] min-[980px]:gap-16 min-[980px]:pt-12 min-[980px]:pb-28">
        <div className="flex min-w-0 flex-col gap-6">
          <h1 className="m-0 type-title">Stop typing test data.</h1>
          <p className="m-0 max-w-160 type-lead text-on-yellow-muted">
            Dummio reads each field on a form and fills it with believable data
            in the shape it expects. Click once, or press Alt+Shift+F.
          </p>
          <DownloadButtons />
          <p className="m-0 max-w-130 text-[13px] leading-[18px] text-on-yellow-muted">
            Free and open source, for testers and web developers.
          </p>
        </div>
        <FillDemo />
      </div>
    </section>
  );
}
