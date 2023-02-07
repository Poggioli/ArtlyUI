import { render } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Core component / Tag", () => {
  it(`GIVEN a Tag component
      WHEN render component
      SHOULD occurs render normaly`, () => {
    const rendered = render(<Tag>Tag component</Tag>);
    const tag = rendered.getByText("Tag component", {
      selector: "span",
    });
    expect(tag).toBeVisible();
  });
});
