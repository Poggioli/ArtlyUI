import { render } from "@testing-library/react";
import { HoverCard } from "./HoverCard";

describe("Core component / HoverCard", () => {
    it(`GIVEN a HoverCard component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<HoverCard />);
    expect(rendered.container).toBeTruthy();
  });
});
