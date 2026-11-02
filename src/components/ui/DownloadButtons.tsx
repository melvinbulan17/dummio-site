import { links } from "@/content/site";

import { buttonStyles } from "./buttonStyles";
import { TrackedLink } from "./TrackedLink";

export function DownloadButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <TrackedLink
        href={links.chromeZip}
        event={{ name: "download_click", browser: "chrome" }}
        className={buttonStyles("ink", "lg")}
      >
        Download for Chrome
      </TrackedLink>
      <TrackedLink
        href={links.firefoxZip}
        event={{ name: "download_click", browser: "firefox" }}
        className={buttonStyles("outline", "lg")}
      >
        Download for Firefox
      </TrackedLink>
    </div>
  );
}
