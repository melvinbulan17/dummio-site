import type { Metadata } from "next";

import { ConsentReset } from "@/components/layout/ConsentReset";
import { Nav } from "@/components/layout/Nav";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What this website collects, what the Dummio extension collects, and how to change your choice.",
  alternates: { canonical: "/privacy" },
};

const extensionPermissions = [
  {
    name: "activeTab",
    reason:
      "Fill the page you're on, only after you click, press or right-click",
  },
  { name: "scripting", reason: "Run the filler on that page when you ask" },
  {
    name: "contextMenus",
    reason: 'Add "Fill this field" to the right-click menu',
  },
  { name: "storage", reason: "Save your settings and site presets" },
];

const headingStyles = "m-0 text-xl leading-7 font-semibold tracking-tight";
const subheadingStyles = "m-0 mt-3 text-base leading-6 font-semibold";
const linkStyles = "text-dummy-yellow-text underline-offset-3";

export default function PrivacyPage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main
        id="main"
        className="mx-auto flex w-full max-w-160 flex-1 flex-col gap-10 px-6 py-16"
      >
        <div className="flex flex-col gap-3">
          <h1 className="m-0 type-section">Privacy policy</h1>
          <p className="m-0 text-ink-muted">Last updated: 2 November 2026</p>
        </div>

        <section id="extension" className="flex flex-col gap-3">
          <h2 className={headingStyles}>The Dummio extension</h2>
          <p className="m-0">
            Dummio fills web forms with made-up test data. It has no accounts,
            analytics, tracking or server, and it makes no network requests, so
            it collects nothing.
          </p>

          <h3 className={subheadingStyles}>What it stores</h3>
          <ul className="m-0 flex list-disc flex-col gap-2 pl-5">
            <li>
              Settings (data locale, overwrite, password length and long text
              style) are saved with your browser&apos;s sync storage. If you
              sync your browser, it copies them between your own devices. Dummio
              never sees or sends them anywhere else.
            </li>
            <li>
              Site presets, the values you choose for a site, stay on this
              device only.
            </li>
          </ul>
          <p className="m-0">
            You can delete presets on the settings page at any time. Removing
            Dummio deletes everything it stored.
          </p>

          <h3 className={subheadingStyles}>What it reads on a page</h3>
          <p className="m-0">
            Dummio only touches a page when you click its button, press its
            shortcut or choose &quot;Fill this field&quot;. It then reads the
            page&apos;s form fields (labels, names and formats) to decide what
            to fill, and writes made-up values into them. It doesn&apos;t read
            or keep anything else on the page, and nothing it reads is stored or
            sent.
          </p>

          <h3 className={subheadingStyles}>Permissions</h3>
          <div className="overflow-x-auto rounded-lg border border-line bg-surface-0 px-4 py-2">
            <table className="w-full border-collapse text-sm leading-5">
              <thead>
                <tr className="text-left text-xs leading-4 text-ink-muted">
                  <th scope="col" className="py-2 pr-3 font-medium">
                    Permission
                  </th>
                  <th scope="col" className="py-2 font-medium">
                    Why it&apos;s needed
                  </th>
                </tr>
              </thead>
              <tbody>
                {extensionPermissions.map((permission) => (
                  <tr key={permission.name} className="border-t border-line">
                    <td className="py-2 pr-3 align-baseline">
                      <code className="font-mono text-[13px] leading-[18px]">
                        {permission.name}
                      </code>
                    </td>
                    <td className="py-2 align-baseline">{permission.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={subheadingStyles}>Links</h3>
          <p className="m-0">
            The extension links to GitHub, to report a problem, and to Ko-fi, to
            support the project. These open in a new tab only when you click
            them.
          </p>
        </section>

        <section id="website" className="flex flex-col gap-3">
          <h2 className={headingStyles}>This website</h2>
          <p className="m-0">
            If you choose Allow, this website uses Google Analytics to show how
            people find it and which buttons they use. Google receives details
            like the pages you view, your device and browser, the site that sent
            you here and your general location, and it sets cookies to recognise
            return visits. If you choose Decline, Google Analytics doesn&apos;t
            load.
          </p>
          <p className="m-0">
            Your choice is saved in your browser, so you only need to make it
            once. The site is hosted on Vercel, which handles the requests your
            browser makes to load it.
          </p>
          <div>
            <ConsentReset />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className={headingStyles}>Questions</h2>
          <p className="m-0">
            <a
              href={links.reportProblem}
              target="_blank"
              rel="noopener"
              className={linkStyles}
            >
              Open an issue on GitHub
            </a>{" "}
            and I&apos;ll get back to you there.
          </p>
        </section>
      </main>
    </>
  );
}
