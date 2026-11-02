import type { Metadata, Viewport } from "next";
import { Fragment_Mono, Onest } from "next/font/google";
import "./globals.css";

import { Analytics } from "@/components/layout/Analytics";
import { Footer } from "@/components/layout/Footer";
import { siteDescription, siteName, siteTitle } from "@/content/site";
import { siteUrl } from "@/lib/site";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffc21a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${onest.variable} ${fragmentMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only rounded-sm bg-band-ink px-4 py-2 text-band-ink-text focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20"
        >
          Skip to content
        </a>
        {children}
        <Footer />
        <Analytics measurementId={process.env.NEXT_PUBLIC_GA_ID || undefined} />
      </body>
    </html>
  );
}
