import { render } from "@testing-library/react";
import { Input } from "./Input";

describe("Core component / Input", () => {
  it(`GIVEN a Input component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Input />);
    expect(rendered.container).toBeTruthy();
  });
});
