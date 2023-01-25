import { render } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Data display component / Avatar", () => {
  it(`GIVEN a Avatar component
      WHEN render component
      SHOULD occurs render normaly`, () => {
    const labelAvatar: string = "DG";
    const rendered = render(
      <Avatar src="https://images.unsplash.com/photo-1561037404-61cd46aa615b">
        {labelAvatar}
      </Avatar>
    );
    const fallback = rendered.getByText(labelAvatar);
    expect(fallback).toBeVisible();
  });
});
