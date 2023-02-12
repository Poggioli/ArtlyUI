import { render } from "@testing-library/react";
import { ToggleGroup } from "./ToggleGroup";

describe("Core component / ToggleGroup", () => {
    it(`GIVEN a ToggleGroup component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<ToggleGroup />);
    expect(rendered.container).toBeTruthy();
  });
});
