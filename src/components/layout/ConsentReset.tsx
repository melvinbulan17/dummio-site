"use client";

import { buttonStyles } from "@/components/ui/buttonStyles";
import { resetConsent } from "@/lib/consent";

export function ConsentReset() {
  return (
    <button
      type="button"
      onClick={resetConsent}
      className={`${buttonStyles("quiet")} cursor-pointer`}
    >
      Change my analytics choice
    </button>
  );
}
