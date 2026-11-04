import { links } from "@/content/site";

import { buttonStyles } from "./buttonStyles";
import { TrackedLink } from "./TrackedLink";

export function DownloadButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <TrackedLink
        href={links.chromeStore}
        target="_blank"
        rel="noopener"
        event={{ name: "download_click", browser: "chrome" }}
        className={buttonStyles("ink", "lg")}
      >
        Add to Chrome
      </TrackedLink>
      <TrackedLink
        href={links.firefoxStore}
        target="_blank"
        rel="noopener"
        event={{ name: "download_click", browser: "firefox" }}
        className={buttonStyles("outline", "lg")}
      >
        Add to Firefox
      </TrackedLink>
    </div>
  );
}
