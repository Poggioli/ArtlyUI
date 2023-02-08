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

  it(`GIVEN a Tag component
      WHEN icon props is defined
      SHOULD render icon props`, () => {
    const rendered = render(
      <Tag icon={<span>Test icon</span>}>Tag component</Tag>
    );
    const icon = rendered.getByText("Test icon", {
      selector: "span",
    });
    expect(icon).toBeVisible();
  });

  it(`GIVEN a Tag component
      WHEN icon props is defined
      AND iconPosition is left
      SHOULD render icon props`, () => {
    const rendered = render(
      <Tag icon={<span>Test icon</span>} size="small" iconPosition="left">
        Tag component
      </Tag>
    );
    const icon = rendered.getByText("Test icon", {
      selector: "span",
    });
    expect(icon).toBeVisible();
  });

  it(`GIVEN a Tag component
      WHEN icon props is defined
      AND iconPosition is right
      SHOULD render icon props`, () => {
    const rendered = render(
      <Tag icon={<span>Test icon</span>} size="small" iconPosition="right">
        Tag component
      </Tag>
    );
    const icon = rendered.getByText("Test icon", {
      selector: "span",
    });
    expect(icon).toBeVisible();
  });
});
