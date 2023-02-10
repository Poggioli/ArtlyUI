import { render } from "@testing-library/react";
import { Radio } from "./Radio";

describe("Core component / Radio", () => {
  it(`GIVEN a Radio component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Radio />);
    expect(rendered.container).toBeTruthy();
  });
});
