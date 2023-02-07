import { render } from "@testing-library/react";
import { Switch } from "./Switch";

describe("Core component / Switch", () => {
  it(`GIVEN a Switch component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Switch />);
    expect(rendered.container).toBeTruthy();
  });
});
