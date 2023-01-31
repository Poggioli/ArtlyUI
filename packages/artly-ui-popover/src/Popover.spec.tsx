import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from "./Popover";

describe("Data display component / Popover", () => {
  afterEach(async () => {
    await act(async () => {});
  });

  describe("Popover Close", () => {
    describe("Error Aria Label", () => {
      it(`GIVEN a Popover component
          WHEN asChild props is undefined
          AND aria-label is not setted
          SHOULD throw an Error`, () => {
        const rendered = render(
          <Popover>
            <PopoverTrigger>
              <button>Trigger</button>
            </PopoverTrigger>
            <PopoverContent>
              <span>Popover content</span>
              <PopoverClose>
                <button>OK</button>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        );

        const triggerButton = rendered.getByText("Trigger");
        expect(() => userEvent.click(triggerButton)).toThrow(
          "Provide an arial-label when has a close icon."
        );
      });

      it(`GIVEN a Popover component
          WHEN asChild props is undefined
          AND aria-label is setted
          SHOULD NOT throw an Error`, () => {
        const rendered = render(
          <Popover>
            <PopoverTrigger>
              <button>Trigger</button>
            </PopoverTrigger>
            <PopoverContent>
              <span>Popover content</span>
              <PopoverClose aria-label="Close" />
            </PopoverContent>
          </Popover>
        );

        const triggerButton = rendered.getByText("Trigger");
        userEvent.click(triggerButton);

        const buttonClose = rendered.getByLabelText("Close");
        expect(buttonClose).toBeVisible();
      });

      it(`GIVEN a Popover component
          WHEN asChild props is defined
          AND aria-label is not setted
          SHOULD NOT throw an Error`, () => {
        const rendered = render(
          <Popover>
            <PopoverTrigger>
              <button>Trigger</button>
            </PopoverTrigger>
            <PopoverContent>
              <span>Popover content</span>
              <PopoverClose asChild>
                <span>Close</span>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        );

        const triggerButton = rendered.getByText("Trigger");
        userEvent.click(triggerButton);

        rendered.debug();

        const buttonClose = rendered.getByText("Close", {
          selector: "span.artly-UI-c-PJLV",
        });
        expect(buttonClose).toBeVisible();
      });
    });

    it(`GIVEN a Popover component
        WHEN asChild props is NOT setted in PopoverClose
        SHOULD render an button with cross icon`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <span>Popover content</span>
            <PopoverClose aria-label="close" />
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.getByLabelText("close");
      expect(buttonClose).toBeVisible();
    });

    it(`GIVEN a Popover component
        WHEN asChild props is setted to false in PopoverClose
        SHOULD render StyledClosePopover`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <span>Popover content</span>
            <PopoverClose asChild={false}>
              <button>Close</button>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.getByText("Close", {
        selector: "button.artly-UI-c-PJLV button",
      });
      expect(buttonClose).toBeVisible();
    });

    it(`GIVEN a Popover component
        WHEN asChild props is setted to true in PopoverClose
        SHOULD render the children component`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <span>Popover content</span>
            <PopoverClose asChild>
              <button>Close</button>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.getByText("Close", {
        selector: "button.artly-UI-c-PJLV",
      });
      expect(buttonClose).toBeVisible();
    });
  });

  describe("Popover Anchor", () => {
    it(`GIVEN a Popover component
        WHEN asChild props is NOT setted in PopoverAnchor
        SHOULD render the children component`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverAnchor>
            <button>Anchor</button>
          </PopoverAnchor>
          <PopoverContent>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Anchor", {
        selector: "button",
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a Popover component
        WHEN asChild props is setted to false in PopoverAnchor
        SHOULD render StyledPopoverAnchor`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverAnchor asChild={false}>
            <button>Anchor</button>
          </PopoverAnchor>
          <PopoverContent>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Anchor", {
        selector: "div button",
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a Popover component
        WHEN asChild props is setted to true in PopoverAnchor
        SHOULD render the children component`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverAnchor asChild>
            <button>Anchor</button>
          </PopoverAnchor>
          <PopoverContent>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Anchor", {
        selector: "button",
      });
      expect(triggerButton).toBeVisible();
    });
  });

  describe("Popover Trigger", () => {
    it(`GIVEN a Popover component
        WHEN asChild props is NOT setted in PopoverTrigger
        SHOULD render the children component`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a Popover component
        WHEN asChild props is setted to false in PopoverTrigger
        SHOULD render StyledPopoverTrigger`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger asChild={false}>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"] button',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a Popover component
        WHEN asChild props is setted to true in PopoverTrigger
        SHOULD render the children component`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });
  });

  describe("hasCloseIcon", () => {
    it(`GIVEN a Popover component
        WHEN hasCloseIcon props is NOT setted in PopoverContent
        SHOULD render the PopoverClose`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.getByLabelText("close popover");
      expect(buttonClose).toBeVisible();
    });

    it(`GIVEN a Popover component
        WHEN hasCloseIcon props is setted to true in PopoverContent
        SHOULD render the PopoverClose`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent hasCloseIcon>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.getByLabelText("close popover");
      expect(buttonClose).toBeVisible();
    });

    it(`GIVEN a Popover component
        WHEN hasCloseIcon props is setted to false in PopoverContent
        SHOULD NOT render the PopoverClose`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent hasCloseIcon={false}>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.queryByLabelText("close popover");
      expect(buttonClose).toBeNull();
    });
  });

  describe("hasArrow", () => {
    it(`GIVEN a Popover component
        WHEN hasArrow props is NOT setted in PopoverContent
        SHOULD render the Arrow`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const arrow = rendered.getByTestId("arrow");
      expect(arrow).toBeInTheDocument();
    });

    it(`GIVEN a Popover component
        WHEN hasArrow props is setted to true in PopoverContent
        SHOULD render the Arrow`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent hasArrow={true}>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const arrow = rendered.getByTestId("arrow");
      expect(arrow).toBeInTheDocument();
    });

    it(`GIVEN a Popover component
        WHEN hasArrow props is setted to false in PopoverContent
        SHOULD NOT render the Arrow`, () => {
      const rendered = render(
        <Popover>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent hasArrow={false}>
            <span>Popover content</span>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const arrow = rendered.queryByTestId("arrow");
      expect(arrow).not.toBeInTheDocument();
    });
  });
});
