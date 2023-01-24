import { render } from "@testing-library/react";
import { Box } from "./Box";

describe("Layout component / Box", () => {
  it(`GIVEN a box component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Box />);
    expect(rendered.container).toBeTruthy();
  });
});
