"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { buttonStyles } from "@/components/ui/buttonStyles";
import { demoFields, demoPeople } from "@/content/fillDemo";

const startDelay = 300;
const rowDelay = 90;
const settleDelay = 300;

function prefersStillness() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FillDemo() {
  const [personIndex, setPersonIndex] = useState(0);
  const [filled, setFilled] = useState(demoFields.length);
  const [sweeping, setSweeping] = useState(false);
  const timers = useRef<number[]>([]);

  const stopTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  const play = useCallback(
    (nextPerson: number) => {
      stopTimers();
      setPersonIndex(nextPerson);

      if (prefersStillness()) {
        setFilled(demoFields.length);
        setSweeping(false);
        return;
      }

      setFilled(0);
      setSweeping(true);
      demoFields.forEach((_, index) => {
        timers.current.push(
          window.setTimeout(
            () => setFilled(index + 1),
            startDelay + index * rowDelay,
          ),
        );
      });
      timers.current.push(
        window.setTimeout(
          () => setSweeping(false),
          startDelay + demoFields.length * rowDelay + settleDelay,
        ),
      );
    },
    [stopTimers],
  );

  useEffect(() => {
    if (prefersStillness()) return;
    timers.current.push(window.setTimeout(() => play(0), 600));
    return stopTimers;
  }, [play, stopTimers]);

  const person = demoPeople[personIndex];

  return (
    <div className="flex min-w-0 flex-col gap-3 rounded-lg bg-surface-0 p-4 text-ink shadow-pop">
      <div className="flex items-center justify-between gap-3">
        <p
          aria-live="polite"
          className="m-0 text-[28px] leading-8 font-semibold tracking-tight tabular-nums"
        >
          {filled}{" "}
          <span className="text-sm leading-5 font-normal tracking-normal text-ink-muted">
            of {demoFields.length} fields filled
          </span>
        </p>
        <button
          type="button"
          onClick={() => play((personIndex + 1) % demoPeople.length)}
          className={`${buttonStyles("quiet")} cursor-pointer`}
        >
          Fill again
        </button>
      </div>

      <dl className="relative m-0 flex flex-col gap-0.5">
        {demoFields.map((field, index) => {
          const isFilled = index < filled;
          return (
            <div
              key={field.label}
              className={`grid min-h-9 grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 rounded-sm px-2 py-1 min-[521px]:grid-cols-[auto_minmax(84px,132px)_minmax(0,1fr)] min-[521px]:py-0 ${sweeping && isFilled ? "animate-filled motion-reduce:animate-none" : ""}`}
            >
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${field.dot}`}
              />
              <dt className="truncate text-[13px] leading-[18px] text-ink-muted">
                {field.label}
              </dt>
              <dd className="col-start-2 m-0 min-w-0 truncate font-mono text-sm leading-5 tabular-nums min-[521px]:col-start-3">
                {isFilled ? (
                  person[index]
                ) : (
                  <span className="flex h-5 items-center">
                    <span
                      className="block h-2.5 rounded-sm bg-skeleton"
                      style={{ width: field.barWidth }}
                    />
                  </span>
                )}
              </dd>
            </div>
          );
        })}
        {sweeping && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-4 h-[3px] bg-dummy-yellow"
            style={{ top: `${(filled / demoFields.length) * 100}%` }}
          >
            <span className="absolute -top-[9px] right-3 block size-5 rounded-full crash-mark" />
          </div>
        )}
      </dl>

      <p className="m-0 text-xs leading-4 text-ink-muted">
        Sample data, all made up.
      </p>
    </div>
  );
}
