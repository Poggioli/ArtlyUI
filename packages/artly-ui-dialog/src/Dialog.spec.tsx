import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Dialog,
  DialogActionContainer,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "./Dialog";

describe("Data display component / Dialog", () => {
  describe("Dialog Close", () => {
    describe("Error Aria Label", () => {
      it(`GIVEN a Dialog component
          WHEN asChild props is undefined
          AND aria-label is not setted
          SHOULD throw an Error`, () => {
        const rendered = render(
          <Dialog>
            <DialogTrigger>
              <button>Trigger</button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Any Title</DialogTitle>
              <DialogDescription>Any Description</DialogDescription>
              <DialogActionContainer>
                <DialogClose>
                  <button>OK</button>
                </DialogClose>
              </DialogActionContainer>
            </DialogContent>
          </Dialog>
        );

        const triggerButton = rendered.getByText("Trigger");
        expect(() => userEvent.click(triggerButton)).toThrow(
          "Provide an arial-label when has a close icon."
        );
      });

      it(`GIVEN a Dialog component
          WHEN asChild props is undefined
          AND aria-label is setted
          SHOULD NOT throw an Error`, () => {
        const rendered = render(
          <Dialog>
            <DialogTrigger>
              <button>Trigger</button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Any Title</DialogTitle>
              <DialogDescription>Any Description</DialogDescription>
              <DialogActionContainer>
                <DialogClose aria-label="Close" />
              </DialogActionContainer>
            </DialogContent>
          </Dialog>
        );

        const triggerButton = rendered.getByText("Trigger");
        userEvent.click(triggerButton);

        const buttonClose = rendered.getByLabelText("Close");
        expect(buttonClose).toBeVisible();
      });

      it(`GIVEN a Dialog component
          WHEN asChild props is defined
          AND aria-label is not setted
          SHOULD NOT throw an Error`, () => {
        const rendered = render(
          <Dialog>
            <DialogTrigger>
              <button>Trigger</button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Any Title</DialogTitle>
              <DialogDescription>Any Description</DialogDescription>
              <DialogActionContainer>
                <DialogClose asChild>
                  <span>Close</span>
                </DialogClose>
              </DialogActionContainer>
            </DialogContent>
          </Dialog>
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

    it(`GIVEN a Dialog component
        WHEN asChild props is NOT setted in DialogClose
        SHOULD render an button with cross icon`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
            <DialogActionContainer>
              <DialogClose aria-label="close" />
            </DialogActionContainer>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.getByLabelText("close");
      expect(buttonClose).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN asChild props is setted to false in DialogClose
        SHOULD render StyledCloseDialog`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
            <DialogActionContainer>
              <DialogClose asChild={false}>
                <button>Close</button>
              </DialogClose>
            </DialogActionContainer>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.getByText("Close", {
        selector: "button.artly-UI-c-PJLV button",
      });
      expect(buttonClose).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN asChild props is setted to true in DialogClose
        SHOULD render the children component`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
            <DialogActionContainer>
              <DialogClose asChild>
                <button>Close</button>
              </DialogClose>
            </DialogActionContainer>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const buttonClose = rendered.getByText("Close", {
        selector: "button.artly-UI-c-PJLV",
      });
      expect(buttonClose).toBeVisible();
    });
  });

  describe("Dialog Title", () => {
    it(`GIVEN a Dialog component
        WHEN asChild props is NOT setted in Dialogtitle
        SHOULD render an h2`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const title = rendered.getByText("Any Title", {
        selector: "h2.artly-UI-c-bqaJdR",
      });
      expect(title).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN asChild props is setted to false in Dialogtitle
        SHOULD render StyledDialogTitle`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle asChild={false}>
              <h1>Any Title</h1>
            </DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const title = rendered.getByText("Any Title", {
        selector: "h2.artly-UI-c-bqaJdR h1",
      });
      expect(title).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN asChild props is setted to true in Dialogtitle
        SHOULD render the children component`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle asChild>
              <h1>Any Title</h1>
            </DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const title = rendered.getByText("Any Title", {
        selector: "h1.artly-UI-c-bqaJdR",
      });
      expect(title).toBeVisible();
    });
  });

  describe("Dialog Description", () => {
    it(`GIVEN a Dialog component
        WHEN asChild props is NOT setted in DialogDescription
        SHOULD render an p`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const description = rendered.getByText("Any Description", {
        selector: "p.artly-UI-c-bqaJdR",
      });
      expect(description).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN asChild props is setted to false in DialogDescription
        SHOULD render StyledDialogDescription`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription asChild={false}>
              <span>Any Description</span>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const description = rendered.getByText("Any Description", {
        selector: "h2.artly-UI-c-bqaJdR span",
      });
      expect(description).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN asChild props is setted to true in DialogDescription
        SHOULD render the children component`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription asChild>
              <span>Any Description</span>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const description = rendered.getByText("Any Description", {
        selector: "span.artly-UI-c-bqaJdR",
      });
      expect(description).toBeVisible();
    });
  });

  describe("Dialog Trigger", () => {
    it(`GIVEN a Dialog component
        WHEN asChild props is NOT setted in DialogTrigger
        SHOULD render the children component`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN asChild props is setted to false in DialogTrigger
        SHOULD render StyledDialogTrigger`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger asChild={false}>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"] button',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN asChild props is setted to true in DialogTrigger
        SHOULD render the children component`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger asChild>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });
  });

  describe("Dialog Content", () => {
    it(`GIVEN a Dialog component
        WHEN hasCloseIcon props is NOT setted
        SHOULD render the close icon`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const closeIcon = rendered.getByLabelText("close dialog");
      expect(closeIcon).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN hasCloseIcon props is setted to true
        SHOULD render the close icon`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent hasCloseIcon>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const closeIcon = rendered.getByLabelText("close dialog");
      expect(closeIcon).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN hasCloseIcon props is setted to false
        SHOULD not render the close icon`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent hasCloseIcon={false}>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const closeIcon = rendered.queryByLabelText("close dialog");
      expect(closeIcon).toBeNull();
    });

    it(`GIVEN a Dialog component
        WHEN ariaLabelClose props is NOT setted 
        SHOULD set label to "close dialog"`, () => {
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const closeIcon = rendered.getByLabelText("close dialog");
      expect(closeIcon).toBeVisible();
    });

    it(`GIVEN a Dialog component
        WHEN ariaLabelClose props is setted 
        SHOULD set label to the value setted`, () => {
      const ariaLabel = "close this dialog now";
      const rendered = render(
        <Dialog>
          <DialogTrigger>
            <button>Trigger</button>
          </DialogTrigger>
          <DialogContent ariaLabelClose={ariaLabel}>
            <DialogTitle>Any Title</DialogTitle>
            <DialogDescription>Any Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const closeIcon = rendered.getByLabelText(ariaLabel);
      expect(closeIcon).toBeVisible();
    });
  });
});
