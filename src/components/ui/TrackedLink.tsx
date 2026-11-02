"use client";

import type { ComponentProps } from "react";

import { trackEvent, type SiteEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<"a"> & {
  event: SiteEvent;
};

export function TrackedLink({ event, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(click) => {
        trackEvent(event);
        onClick?.(click);
      }}
    />
  );
}
