import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Core component / Checkbox", () => {
  it(`GIVEN a Checkbox component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Checkbox />);
    expect(rendered.container).toBeTruthy();
  });
});
