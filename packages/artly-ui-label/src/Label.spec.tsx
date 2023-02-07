import { render } from "@testing-library/react";
import { Label } from "./Label";

describe("Typograph component / Label", () => {
  it(`GIVEN a Label component
      WHEN user dont set the color props
      SHOULD use $$text-high-contrast token`, () => {
    const rendered = render(<Label htmlFor="test">Label component</Label>);
    expect(rendered.container).toBeTruthy();
  });

  it(`GIVEN a Label component
      WHEN user set the color props
      SHOULD use the color passed`, () => {
    const rendered = render(
      <Label color="$text-low-contrast" htmlFor="test">
        Label component
      </Label>
    );
    expect(rendered.container).toBeTruthy();
  });
});
