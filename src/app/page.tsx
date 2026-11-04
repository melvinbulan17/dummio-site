import { Nav } from "@/components/layout/Nav";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Install } from "@/components/sections/Install";
import { PrivacyFacts } from "@/components/sections/PrivacyFacts";
import { Support } from "@/components/sections/Support";
import { links, siteDescription, siteName } from "@/content/site";
import { siteUrl } from "@/lib/site";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: `${siteUrl}/`,
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Chrome, Firefox",
  license: "https://opensource.org/license/mit",
  downloadUrl: links.chromeStore,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, softwareSchema]).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <header className="bg-dummy-yellow text-ink-on-accent [&_:focus-visible]:outline-ink-on-accent">
        <Nav onHome />
      </header>
      <main id="main">
        <Hero />
        <Features />
        <PrivacyFacts />
        <Faq />
        <Install />
        <Support />
      </main>
    </>
  );
}
