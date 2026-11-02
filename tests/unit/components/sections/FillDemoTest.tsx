import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { FillDemo } from "@/components/sections/FillDemo";

function mockReducedMotion(matches: boolean) {
  vi.stubGlobal("matchMedia", (query: string) => ({ matches, media: query }));
}

describe("FillDemo", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("starts filled so the page is complete before any motion", () => {
    mockReducedMotion(false);
    render(<FillDemo />);
    expect(screen.getByText("maricel.delacruz42@example.com")).toBeVisible();
    expect(
      screen.getByText(/of 9 fields filled/).parentElement,
    ).toHaveTextContent("9");
  });

  it("empties the rows then fills them again when it plays", () => {
    mockReducedMotion(false);
    render(<FillDemo />);

    act(() => vi.advanceTimersByTime(600));
    expect(
      screen.getByText(/of 9 fields filled/).parentElement,
    ).toHaveTextContent("0");
    expect(screen.queryByText("Dela Cruz")).not.toBeInTheDocument();

    act(() => vi.advanceTimersByTime(2000));
    expect(
      screen.getByText(/of 9 fields filled/).parentElement,
    ).toHaveTextContent("9");
    expect(screen.getByText("Dela Cruz")).toBeVisible();
  });

  it("moves to the next person with Fill again", () => {
    mockReducedMotion(false);
    render(<FillDemo />);

    fireEvent.click(screen.getByRole("button", { name: "Fill again" }));
    act(() => vi.advanceTimersByTime(2000));

    expect(screen.getByText("hannah.whitfield7@example.net")).toBeVisible();
  });

  it("swaps values straight away with reduced motion", () => {
    mockReducedMotion(true);
    render(<FillDemo />);

    fireEvent.click(screen.getByRole("button", { name: "Fill again" }));

    expect(screen.getByText("hannah.whitfield7@example.net")).toBeVisible();
    expect(
      screen.getByText(/of 9 fields filled/).parentElement,
    ).toHaveTextContent("9");
  });
});
