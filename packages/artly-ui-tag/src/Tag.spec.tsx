import { render } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Core component / Tag", () => {
  it(`GIVEN a Tag component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Tag />);
    expect(rendered.container).toBeTruthy();
  });
});
