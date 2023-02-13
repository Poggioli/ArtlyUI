import { render } from "@testing-library/react";
import { Select } from "./Select";

describe("Core component / Select", () => {
    it(`GIVEN a Select component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Select />);
    expect(rendered.container).toBeTruthy();
  });
});
