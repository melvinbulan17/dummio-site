import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { links } from "@/content/site";

export function Install() {
  return (
    <section
      id="install"
      className="bg-dummy-yellow py-16 text-ink-on-accent md:py-24 [&_:focus-visible]:outline-ink-on-accent"
    >
      <div className="mx-auto flex max-w-300 flex-col items-start gap-5 px-6">
        <h2 className="m-0 type-title">Try it on your next form.</h2>
        <DownloadButtons />
        <p className="m-0 text-[13px] leading-[18px] text-on-yellow-muted">
          The setup steps are on the{" "}
          <a
            href={links.releases}
            target="_blank"
            rel="noopener"
            className="text-ink-on-accent underline-offset-3"
          >
            release page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
