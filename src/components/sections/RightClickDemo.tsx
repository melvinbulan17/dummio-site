import { LogoMark } from "@/components/layout/Wordmark";
import { demoFields, demoPeople } from "@/content/fillDemo";

const filledIndex = demoFields.findIndex(
  (field) => field.label === "Email address",
);
const rows = demoFields.slice(0, 6);

export function RightClickDemo() {
  return (
    <div
      role="img"
      aria-label="A form with one field filled by Dummio from the right-click menu. The other fields stay empty."
      className="flex max-w-120 min-w-0 flex-col gap-3 rounded-lg border border-line bg-surface-0 p-4 text-ink"
    >
      <div className="relative flex flex-col gap-0.5">
        {rows.map((field, index) => (
          <div
            key={field.label}
            className={`grid min-h-9 grid-cols-[auto_minmax(84px,112px)_minmax(0,1fr)] items-center gap-x-2 rounded-sm px-2 ${index === filledIndex ? "bg-dummy-yellow-soft" : ""}`}
          >
            <span className={`size-2 rounded-full ${field.dot}`} />
            <span className="truncate text-[13px] leading-[18px] text-ink-muted">
              {field.label}
            </span>
            {index === filledIndex ? (
              <span className="min-w-0 truncate font-mono text-sm leading-5">
                {demoPeople[0][index]}
              </span>
            ) : (
              <span
                data-testid="empty-field"
                className="block h-2.5 rounded-sm bg-skeleton"
                style={{ width: field.barWidth }}
              />
            )}
          </div>
        ))}
        <div className="absolute top-28 right-2 flex w-44 flex-col rounded-md border border-line bg-surface-0 p-1 text-[13px] leading-[18px] shadow-pop">
          <span className="px-2 py-1.5 text-ink-muted">Paste</span>
          <span className="flex items-center gap-2 rounded-sm bg-surface-100 px-2 py-1.5">
            <LogoMark className="size-4 shrink-0" />
            Fill this field
          </span>
          <span className="px-2 py-1.5 text-ink-muted">Inspect</span>
        </div>
      </div>
      <p className="m-0 text-xs leading-4 text-ink-muted">
        Sample data, all made up.
      </p>
    </div>
  );
}
