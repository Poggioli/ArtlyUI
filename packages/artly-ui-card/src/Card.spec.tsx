import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Core component / Card", () => {
  it(`GIVEN a Card component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Card />);
    expect(rendered.container).toBeTruthy();
  });
});
