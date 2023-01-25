import { render } from "@testing-library/react";
import { Image } from "./Image";

describe("Data display component / Image", () => {
  it(`GIVEN a Image component
      WHEN render component
      SHOULD occurs render normaly`, () => {
    const rendered = render(
      <Image
        src="https://images.unsplash.com/photo-1561037404-61cd46aa615b"
        alt="A photo of dog"
      />
    );
    expect(rendered.container).toBeTruthy();
  });
});
