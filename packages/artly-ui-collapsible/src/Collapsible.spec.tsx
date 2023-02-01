import { render } from "@testing-library/react";
import { Collapsible } from "./Collapsible";

describe("Core component / Collapsible", () => {
    it(`GIVEN a Collapsible component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Collapsible />);
    expect(rendered.container).toBeTruthy();
  });
});
