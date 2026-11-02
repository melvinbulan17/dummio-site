import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Analytics } from "@/components/layout/Analytics";

vi.mock("next/script", () => ({
  default: ({ id, src }: { id?: string; src?: string }) => (
    <span data-testid="script" data-id={id} data-src={src} />
  ),
}));

describe("Analytics", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders nothing without a measurement ID", () => {
    const { container } = render(<Analytics />);
    expect(container).toBeEmptyDOMElement();
  });

  it("asks first and loads nothing before a choice", () => {
    render(<Analytics measurementId="G-TEST" />);
    expect(screen.getByRole("button", { name: "Allow" })).toBeVisible();
    expect(screen.queryByTestId("script")).not.toBeInTheDocument();
  });

  it("loads Google Analytics after Allow", () => {
    render(<Analytics measurementId="G-TEST" />);
    fireEvent.click(screen.getByRole("button", { name: "Allow" }));
    expect(screen.getAllByTestId("script")[0]).toHaveAttribute(
      "data-src",
      "https://www.googletagmanager.com/gtag/js?id=G-TEST",
    );
    expect(screen.queryByRole("button", { name: "Allow" })).toBeNull();
  });

  it("stays off and stops asking after Decline", () => {
    render(<Analytics measurementId="G-TEST" />);
    fireEvent.click(screen.getByRole("button", { name: "Decline" }));
    expect(screen.queryByTestId("script")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Allow" })).toBeNull();
  });

  it("remembers the choice on the next visit", () => {
    window.localStorage.setItem("dummio-analytics-consent", "denied");
    render(<Analytics measurementId="G-TEST" />);
    expect(screen.queryByRole("button", { name: "Allow" })).toBeNull();
  });
});
