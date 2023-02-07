import { render } from "@testing-library/react";
import { Slider, SliderThumb } from "./Slider";

describe("Core component / Slider", () => {
  it(`GIVEN a Slider component
      WHEN render component
      SHOULD occurs render normaly`, () => {
    const rendered = render(
      <Slider>
        <SliderThumb />
      </Slider>
    );
    const slider = rendered.getByRole("slider");
    expect(slider).toBeVisible();
  });
});
