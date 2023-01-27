import { fireEvent, render } from "@testing-library/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

describe("Core component / Tooltip", () => {
  describe("GIVEN a Tooltip trigger", () => {
    it(`WHEN asChild props is not setted
        SHOULD set as true internally`, () => {
      const rendered = render(
        <Tooltip>
          <TooltipTrigger>
            <button>Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Hello test</TooltipContent>
        </Tooltip>
      );

      const buttonTrigger = rendered.getByText("Hover me");
      expect(buttonTrigger).toHaveAttribute("data-state", "closed");
    });

    it(`WHEN asChild props is setted to true
        SHOULD use this value`, () => {
      const rendered = render(
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Hello test</TooltipContent>
        </Tooltip>
      );

      const buttonTrigger = rendered.getByText("Hover me");
      expect(buttonTrigger).toHaveAttribute("data-state", "closed");
    });

    it(`WHEN asChild props is setted to false
        SHOULD render a button around the children trigger`, () => {
      const rendered = render(
        <Tooltip>
          <TooltipTrigger asChild={false}>
            <span>Hover me</span>
          </TooltipTrigger>
          <TooltipContent>Hello test</TooltipContent>
        </Tooltip>
      );

      const buttonTrigger = rendered.getByText("Hover me");
      const buttonParentTrigger = rendered.getByRole("button");
      expect(buttonTrigger).not.toHaveAttribute("data-state");
      expect(buttonParentTrigger).toHaveAttribute("data-state", "closed");
    });
  });

  describe("GIVEN a Tooltip content", () => {
    describe("sideOffset", () => {
      it(`WHEN sideOffset props is not setted
          SHOULD use 8px`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
        fireEvent.focusOut(buttonTrigger);
      });

      it(`WHEN sideOffset props is setted
          SHOULD use this value`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent sideOffset={16}>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
        fireEvent.focusOut(buttonTrigger);
      });
    });

    describe("collisionPadding", () => {
      it(`WHEN collisionPadding props is not setted
          SHOULD use 16px`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
      });

      it(`WHEN collisionPadding props is setted
          SHOULD use this value`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent collisionPadding={8}>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
      });
    });

    describe("align", () => {
      it(`WHEN align props is not setted
          SHOULD use 'center'`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
      });

      it(`WHEN align props is setted
          SHOULD use this value`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent align="start">Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
      });
    });

    describe("wrap", () => {
      it(`WHEN wrap props is not setted
          SHOULD use 'nowrap'`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
      });

      it(`WHEN wrap props is setted
          SHOULD use this value`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent wrap="wrap">Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
      });
    });

    describe("gapX", () => {
      it(`WHEN gapX props is not setted
          SHOULD use '$3'`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
      });

      xit(`WHEN gapX props is setted
          SHOULD use this value`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent gapX={10}>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const tooltipContent = rendered.getByText("Hello test", {
          selector: "span[role=tooltip] span",
        });
        expect(tooltipContent).toBeVisible();
      });
    });

    describe("arrow", () => {
      it(`WHEN hasArrow props is not setted
          SHOULD show arrow`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const arrow = rendered.baseElement.querySelector(
          "span .artly-UI-c-phMPj"
        );
        expect(arrow).toBeInTheDocument();
      });

      it(`WHEN hasArrow props is setted true
          SHOULD show arrow`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent hasArrow>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const arrow = rendered.baseElement.querySelector(
          "span .artly-UI-c-phMPj"
        );
        expect(arrow).toBeInTheDocument();
      });

      it(`WHEN hasArrow props is setted false
          SHOULD not show arrow`, () => {
        const rendered = render(
          <Tooltip>
            <TooltipTrigger>
              <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent hasArrow={false}>Hello test</TooltipContent>
          </Tooltip>
        );

        const buttonTrigger = rendered.getByText("Hover me");
        fireEvent.focusIn(buttonTrigger);

        const arrow = rendered.baseElement.querySelector(
          "span .artly-UI-c-phMPj"
        );
        expect(arrow).not.toBeInTheDocument();
      });
    });
  });
});
