import { afterEach, describe, expect, it, vi } from "vitest";

import { trackEvent } from "@/lib/analytics";

describe("trackEvent", () => {
  afterEach(() => {
    delete window.gtag;
  });

  it("does nothing when Google Analytics isn't loaded", () => {
    expect(() => trackEvent({ name: "support_click" })).not.toThrow();
  });

  it("sends the event name and its details", () => {
    window.gtag = vi.fn();
    trackEvent({ name: "download_click", browser: "firefox" });
    expect(window.gtag).toHaveBeenCalledWith("event", "download_click", {
      browser: "firefox",
    });
  });
});
