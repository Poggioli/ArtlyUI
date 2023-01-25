import { render } from "@testing-library/react";
import { Text } from "./Text";

describe("Typograph component / Text", () => {
  it(`GIVEN a Text component
      WHEN user dont set the color props
      SHOULD use $$text-high-contrast token`, () => {
    const rendered = render(<Text>Text component</Text>);
    expect(rendered.container).toBeTruthy();
  });

  it(`GIVEN a Text component
      WHEN user set the color props
      SHOULD use the color passed`, () => {
    const rendered = render(
      <Text color="$text-low-contrast">Text component</Text>
    );
    expect(rendered.container).toBeTruthy();
  });
});
