declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type SiteEvent = {
  name: "download_click" | "support_click" | "github_click";
  browser?: "chrome" | "firefox";
};

export function trackEvent({ name, ...params }: SiteEvent) {
  window.gtag?.("event", name, params);
}
