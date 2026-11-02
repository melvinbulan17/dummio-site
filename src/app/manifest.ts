import type { MetadataRoute } from "next";

import { siteDescription, siteName } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    display: "browser",
    background_color: "#ffc21a",
    theme_color: "#ffc21a",
    icons: [{ src: "/icon.png", sizes: "128x128", type: "image/png" }],
  };
}
