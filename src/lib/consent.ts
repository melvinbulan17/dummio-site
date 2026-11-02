import { useSyncExternalStore } from "react";

const storageKey = "dummio-analytics-consent";
const changeEvent = "dummio-consent-change";

export type Consent = "unknown" | "unset" | "granted" | "denied";

function readConsent(): Consent {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored === "granted" || stored === "denied" ? stored : "unset";
  } catch {
    return "unset";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useConsent(): Consent {
  return useSyncExternalStore(subscribe, readConsent, () => "unknown");
}

export function saveConsent(choice: "granted" | "denied") {
  try {
    window.localStorage.setItem(storageKey, choice);
  } catch {}
  window.dispatchEvent(new Event(changeEvent));
}

function clearAnalyticsCookies() {
  const domain = window.location.hostname.split(".").slice(-2).join(".");
  for (const cookie of document.cookie.split("; ")) {
    const name = cookie.split("=")[0];
    if (!name.startsWith("_ga")) continue;
    const expired = `${name}=; Max-Age=0; path=/`;
    document.cookie = expired;
    document.cookie = `${expired}; domain=.${domain}`;
  }
}

export function resetConsent() {
  try {
    window.localStorage.removeItem(storageKey);
  } catch {}
  clearAnalyticsCookies();
  window.location.reload();
}
