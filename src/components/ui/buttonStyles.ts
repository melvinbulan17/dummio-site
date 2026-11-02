const base =
  "inline-flex items-center justify-center gap-2.5 rounded-md border font-medium no-underline transition-colors motion-reduce:transition-none";

const variants = {
  ink: "border-transparent bg-band-ink text-band-ink-text hover:bg-band-ink-line",
  outline:
    "border-ink-on-accent text-ink-on-accent hover:bg-dummy-yellow-hover",
  primary:
    "border-transparent bg-dummy-yellow text-ink-on-accent hover:bg-dummy-yellow-hover",
  quiet: "border-line-strong bg-surface-0 text-ink hover:bg-surface-100",
};

const sizes = {
  md: "min-h-11 px-4 text-sm leading-5",
  lg: "min-h-13 px-6 text-base leading-6",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export function buttonStyles(variant: ButtonVariant, size: ButtonSize = "md") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}
