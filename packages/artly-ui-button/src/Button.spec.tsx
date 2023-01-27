import { HeartFilledIcon } from "@radix-ui/react-icons";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Core component / Button", () => {
  describe("GIVEN a button with icon shape", () => {
    it(`WHEN aria-label is not provided
        SHOULD throw a error to provide aria-label`, () => {
      expect(() =>
        render(
          <Button shape="icon">
            <HeartFilledIcon />
          </Button>
        )
      ).toThrow("Provide an arial-label when using icon shape.");
    });

    it(`WHEN aria-label is provided
        SHOULD NOT throw a error`, () => {
      const label = "Heart icon";
      const rendered = render(
        <Button shape="icon" aria-label={label}>
          <HeartFilledIcon />
        </Button>
      );

      const button = rendered.getByLabelText(label);

      expect(button).toBeVisible();
    });

    it(`WHEN user provide a iconPosition
        SHOULD use iconPosition *none* to this type of shape`, () => {
      const label = "Heart icon";
      const rendered = render(
        <Button shape="icon" aria-label={label}>
          <HeartFilledIcon />
        </Button>
      );

      const button = rendered.getByLabelText(label);
      expect(button).toHaveClass("artly-UI-c-gkMlDn-ftyOP-iconPosition-none");
    });
  });

  describe("GIVEN a button with icon", () => {
    it(`WHEN and user not select a position
        SHOULD not render icon`, () => {
      const label = "Heart icon";
      const rendered = render(
        <Button shape="flat" aria-label={label} icon={<HeartFilledIcon />}>
          {label}
        </Button>
      );

      const icon = rendered.container.querySelector("svg");
      expect(icon).toBeNull();
    });

    it(`WHEN and user select a position
        SHOULD render icon`, () => {
      const label = "Heart icon";
      const rendered = render(
        <Button
          shape="flat"
          aria-label={label}
          icon={<HeartFilledIcon />}
          iconPosition="right"
        >
          {label}
        </Button>
      );

      const icon = rendered.container.querySelector("svg");
      expect(icon).toBeVisible();
    });

    it(`WHEN and user select a position
        SHOULD render icon`, () => {
      const label = "Heart icon";
      const rendered = render(
        <Button
          shape="flat"
          aria-label={label}
          icon={<HeartFilledIcon />}
          iconPosition="left"
        >
          {label}
        </Button>
      );

      const icon = rendered.container.querySelector("svg");
      expect(icon).toBeVisible();
    });
  });
});
