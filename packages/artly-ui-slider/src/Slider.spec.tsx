import { render } from "@testing-library/react";
import { Slider } from "./Slider";

describe("Core component / Slider", () => {
  it(`GIVEN a Slider component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Slider />);
    expect(rendered.container).toBeTruthy();
  });
});
