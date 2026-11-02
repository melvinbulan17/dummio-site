import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Features } from "@/components/sections/Features";
import { RightClickDemo } from "@/components/sections/RightClickDemo";

describe("RightClickDemo", () => {
  it("fills only the field that was right-clicked", () => {
    render(<RightClickDemo />);

    expect(screen.getByText("maricel.delacruz42@example.com")).toBeVisible();
    expect(screen.getByText("Fill this field")).toBeVisible();
    expect(screen.getAllByTestId("empty-field")).toHaveLength(5);
  });
});

describe("Features", () => {
  it("says a right-click fills one field", () => {
    render(<Features />);

    expect(
      screen.getByRole("heading", { name: "Fill just one field" }),
    ).toBeVisible();
    expect(
      screen.getByRole("img", { name: /one field filled by Dummio/ }),
    ).toBeVisible();
  });
});
