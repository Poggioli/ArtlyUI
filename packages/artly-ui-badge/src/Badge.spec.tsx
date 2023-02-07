import { render } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Core component / Badge", () => {
  it(`GIVEN a Badge component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<Badge />);
    expect(rendered.container).toBeTruthy();
  });
});
