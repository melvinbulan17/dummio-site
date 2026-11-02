import { links, permissions } from "@/content/site";

export function PrivacyFacts() {
  return (
    <section
      id="privacy"
      className="border-y border-band-ink-line bg-band-ink py-16 text-band-ink-text md:py-24"
    >
      <div className="mx-auto grid max-w-300 grid-cols-1 items-start gap-8 px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
        <div className="flex min-w-0 flex-col gap-3">
          <h2 className="m-0 type-section">
            The extension has no account, no tracking and no server
          </h2>
          <p className="m-0 type-lead text-band-ink-muted">
            It makes no network requests, and it only touches a page when you
            click, press the shortcut or right-click.{" "}
            <a
              href={links.extensionPrivacy}
              target="_blank"
              rel="noopener"
              className="text-dummy-yellow underline-offset-3"
            >
              Read its privacy policy
            </a>
          </p>
        </div>
        <ul className="m-0 flex min-w-0 list-none flex-col p-0">
          {permissions.map((permission) => (
            <li
              key={permission.name}
              className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-3 border-t border-band-ink-line py-3 text-sm leading-5 text-band-ink-muted"
            >
              <code className="font-mono text-[13px] leading-5 text-band-ink-text">
                {permission.name}
              </code>
              <span>{permission.purpose}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
