import { render } from "@testing-library/react";
import { Dialog } from "./Dialog";

describe("Core component / Dialog", () => {
    it(`GIVEN a Dialog component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Dialog />);
    expect(rendered.container).toBeTruthy();
  });
});
