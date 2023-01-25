import { render } from "@testing-library/react";
import { Separator } from "./Separator";

describe("Layout component / Separator", () => {
  it(`GIVEN a Separator component
      WHEN render component
      SHOULD occurs render normaly`, () => {
    const rendered = render(
      <>
        <Separator orientation="vertical" />
        <Separator decorative orientation="vertical" />
      </>
    );
    const separatorRole = rendered.getByRole("separator");
    const noneRole = rendered.getByRole("none");
    expect(separatorRole).toBeVisible();
    expect(noneRole).toBeVisible();
  });
});
