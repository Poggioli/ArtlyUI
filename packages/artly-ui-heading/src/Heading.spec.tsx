import { render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Core component / Heading", () => {
  it(`GIVEN a Heading component
      WHEN dont pass a props level
      SHOULD render an h1 element`, () => {
    const rendered = render(<Heading>Heading component</Heading>);
    const heading = rendered.container.querySelector("h1");
    expect(heading).toBeVisible();
  });

  it(`GIVEN a Heading component
      WHEN pass a props level
      SHOULD render that props level`, () => {
    const rendered = render(<Heading level="3">Heading component</Heading>);
    const heading = rendered.container.querySelector("h3");
    expect(heading).toBeVisible();
  });

  it(`GIVEN a Heading component
      WHEN user dont set the color props
      SHOULD use $$Heading-high-contrast token`, () => {
    const rendered = render(<Heading>Heading component</Heading>);
    expect(rendered.container).toBeTruthy();
  });

  it(`GIVEN a Heading component
      WHEN user set the color props
      SHOULD use the color passed`, () => {
    const rendered = render(
      <Heading color="$text-low-contrast">Heading component</Heading>
    );
    expect(rendered.container).toBeTruthy();
  });
});
