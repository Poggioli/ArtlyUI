import { render } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Core component / Accordion", () => {
  it(`GIVEN a Accordion component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Accordion />);
    expect(rendered.container).toBeTruthy();
  });
});
