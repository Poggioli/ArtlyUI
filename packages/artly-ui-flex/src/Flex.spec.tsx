import { ArtlyVariants } from "@artly-ui/core";
import { render, RenderResult } from "@testing-library/react";
import { Flex } from "./Flex";

describe("Layout component / Flex", () => {
  const labelFlex: string = "I'm Flex";
  let flexElement: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: ArtlyVariants<typeof Flex>): void => {
    rendered = render(<Flex {...props}>{labelFlex}</Flex>);
    flexElement = rendered.getByText(labelFlex);
  };

  it("Should render Flex", () => {
    mount({});
    expect(flexElement).toBeVisible();
  });

  it("Should render Flex", () => {
    mount({ wrap: "nowrap" });
    expect(flexElement).toBeVisible();
  });

  it("Should render Flex", () => {
    mount({ wrap: "nowrap", direction: "column" });
    expect(flexElement).toBeVisible();
  });

  it("Should render Flex", () => {
    mount({ wrap: "nowrap", direction: "reverse-column" });
    expect(flexElement).toBeVisible();
  });
});
