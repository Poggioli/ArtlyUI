import { render } from "@testing-library/react";
import { Popover } from "./Popover";

describe("Core component / Popover", () => {
  it(`GIVEN a Popover component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Popover />);
    expect(rendered.container).toBeTruthy();
  });
});
