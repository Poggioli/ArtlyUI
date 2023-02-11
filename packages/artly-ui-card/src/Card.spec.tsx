import { render } from "@testing-library/react";
import {
  Card,
  CardContainerAction,
  CardDescription,
  CardSubtitle,
  CardTitle,
} from "./Card";

describe("Data display component / Card", () => {
  it(`GIVEN a Card component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardSubtitle>Card Subtitle</CardSubtitle>
        <CardDescription>Card Description</CardDescription>
        <CardContainerAction>
          <button>Card Action</button>
        </CardContainerAction>
      </Card>
    );
    expect(rendered.container).toBeTruthy();
    expect(rendered.container).toMatchSnapshot();
  });
});
