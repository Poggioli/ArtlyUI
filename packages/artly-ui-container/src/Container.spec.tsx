import { render } from "@testing-library/react";
import { Container } from "./Container";

describe("Core component / Container", () => {
  it(`GIVEN a Container component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Container />);
    expect(rendered.container).toBeTruthy();
  });
});
