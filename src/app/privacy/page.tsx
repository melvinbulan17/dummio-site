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

const headingStyles = "m-0 text-xl leading-7 font-semibold tracking-tight";
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

        <section className="flex flex-col gap-3">
          <h2 className={headingStyles}>The Dummio extension</h2>
          <p className="m-0">
            The extension collects nothing and makes no network requests. Its{" "}
            <a
              href={links.extensionPrivacy}
              target="_blank"
              rel="noopener"
              className={linkStyles}
            >
              own privacy policy
            </a>{" "}
            explains what it stores on your device and why it needs each
            permission.
          </p>
        </section>

        <section className="flex flex-col gap-3">
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
