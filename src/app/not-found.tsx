import Link from "next/link";

import { Nav } from "@/components/layout/Nav";
import { buttonStyles } from "@/components/ui/buttonStyles";

export default function NotFound() {
  return (
    <>
      <header>
        <Nav installVariant="primary" />
      </header>
      <main
        id="main"
        className="mx-auto flex w-full max-w-300 flex-1 flex-col items-start gap-6 px-6 py-24"
      >
        <h1 className="m-0 type-title">This page doesn&apos;t exist.</h1>
        <Link href="/" className={buttonStyles("primary", "lg")}>
          Go to the home page
        </Link>
      </main>
    </>
  );
}
