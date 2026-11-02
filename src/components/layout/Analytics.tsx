"use client";

import Link from "next/link";
import Script from "next/script";

import { buttonStyles } from "@/components/ui/buttonStyles";
import { saveConsent, useConsent } from "@/lib/consent";

type AnalyticsProps = {
  measurementId?: string;
};

export function Analytics({ measurementId }: AnalyticsProps) {
  const consent = useConsent();

  if (!measurementId) return null;

  if (consent === "granted") {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.gtag = function () { window.dataLayer.push(arguments); };
window.gtag("js", new Date());
window.gtag("config", "${measurementId}");`}
        </Script>
      </>
    );
  }

  if (consent !== "unset") return null;

  return (
    <aside
      aria-label="Analytics choice"
      className="fixed inset-x-4 bottom-4 z-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-lg border border-line bg-surface-0 p-4 text-sm leading-5 text-ink shadow-pop sm:left-auto sm:max-w-md"
    >
      <p className="m-0">
        Can this website use Google Analytics to see how people find it? The
        extension itself never tracks you.{" "}
        <Link
          href="/privacy"
          className="text-dummy-yellow-text underline-offset-3"
        >
          Privacy policy
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => saveConsent("granted")}
          className={`${buttonStyles("quiet")} cursor-pointer`}
        >
          Allow
        </button>
        <button
          type="button"
          onClick={() => saveConsent("denied")}
          className={`${buttonStyles("quiet")} cursor-pointer`}
        >
          Decline
        </button>
      </div>
    </aside>
  );
}
