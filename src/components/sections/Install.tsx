import { DownloadButtons } from "@/components/ui/DownloadButtons";

export function Install() {
  return (
    <section
      id="install"
      className="bg-dummy-yellow py-16 text-ink-on-accent md:py-24 [&_:focus-visible]:outline-ink-on-accent"
    >
      <div className="mx-auto flex max-w-300 flex-col items-start gap-5 px-6">
        <h2 className="m-0 type-title">Try it on your next form.</h2>
        <DownloadButtons />
      </div>
    </section>
  );
}
