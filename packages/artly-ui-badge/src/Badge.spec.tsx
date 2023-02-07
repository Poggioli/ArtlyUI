import { render } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Data display component / Badge", () => {
  it(`GIVEN a Badge component
      WHEN render component
      SHOULD occurs render normaly`, () => {
    const rendered = render(
      <Badge count={10}>
        <button>Button badge</button>
      </Badge>
    );
    expect(rendered.container).toBeTruthy();
  });

  describe("dot", () => {
    it(`GIVEN a Badge component
        WHEN dot props is false
        THEN should show the count value`, () => {
      const rendered = render(
        <Badge count={10} dot={false}>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.getByText("10");
      expect(badgeCount).toBeVisible();
    });

    it(`GIVEN a Badge component
        WHEN dot props is true
        THEN should NOT show the count value`, () => {
      const rendered = render(
        <Badge count={10} dot>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.queryByText("10");
      expect(badgeCount).toBeNull();
    });
  });

  describe("showZero", () => {
    it(`GIVEN a Badge component
        AND showZero props is false
        WHEN count is 0
        THEN should NOT show the count value`, () => {
      const rendered = render(
        <Badge count={0} showZero={false}>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.queryByText("0");
      expect(badgeCount).toBeNull();
    });

    it(`GIVEN a Badge component
        AND showZero props is true
        WHEN count is 0
        THEN should show the count value`, () => {
      const rendered = render(
        <Badge count={0} showZero>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.getByText("0");
      expect(badgeCount).toBeVisible();
    });
  });

  describe("count", () => {
    it(`GIVEN a Badge component
        WHEN count is 0
        THEN should NOT show the count value`, () => {
      const rendered = render(
        <Badge count={0}>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.queryByText("0");
      expect(badgeCount).toBeNull();
    });

    it(`GIVEN a Badge component
        WHEN count is grater than 0
        THEN should show the count value`, () => {
      const rendered = render(
        <Badge count={3} showZero>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.getByText("3");
      expect(badgeCount).toBeVisible();
    });
  });

  it(`GIVEN a Badge component
      WITH maxCount equal to 99
      WHEN count props is greater than 99
      THEN should render the "99+"`, () => {
    const rendered = render(
      <Badge count={100} showZero>
        <button>Button badge</button>
      </Badge>
    );

    const badgeCount = rendered.getByText("99+");
    expect(badgeCount).toBeVisible();
  });
});
