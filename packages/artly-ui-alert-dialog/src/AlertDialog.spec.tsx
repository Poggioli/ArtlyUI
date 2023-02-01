import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";

describe("Data display component / AlertDialog", () => {
  describe("Alert dialog title", () => {
    it(`GIVEN a AlertDialog component
        WHEN asChild props is NOT setted in AlertDialogTitle
        SHOULD render a h2`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const title = rendered.getByText("Any Title", {
        selector: "h2.artly-UI-c-etOTGQ",
      });
      expect(title).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to false in AlertDialogTitle
        SHOULD render StyledAlertDialogTitle`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle asChild={false}>
              <h1>Any Title</h1>
            </AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const title = rendered.getByText("Any Title", {
        selector: "h2.artly-UI-c-etOTGQ h1",
      });
      expect(title).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to true in AlertDialogTitle
        SHOULD render the children component`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle asChild>
              <h1>Any Title</h1>
            </AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const title = rendered.getByText("Any Title", {
        selector: "h1.artly-UI-c-etOTGQ",
      });
      expect(title).toBeVisible();
    });
  });

  describe("Alert dialog description", () => {
    it(`GIVEN a AlertDialog component
        WHEN asChild props is NOT setted in AlertDialogDescription
        SHOULD render a p`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const description = rendered.getByText("Any Description", {
        selector: "p.artly-UI-c-etOTGQ",
      });
      expect(description).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to false in AlertDialogDescription
        SHOULD render StyledAlertDialogDescription`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription asChild={false}>
              <span>Any Description</span>
            </AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const description = rendered.getByText("Any Description", {
        selector: "h2.artly-UI-c-etOTGQ span",
      });
      expect(description).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to true in AlertDialogDescription
        SHOULD render the children component`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <span>Any Description</span>
            </AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const description = rendered.getByText("Any Description", {
        selector: "span.artly-UI-c-etOTGQ",
      });
      expect(description).toBeVisible();
    });
  });

  describe("Alert dialog trigger", () => {
    it(`GIVEN a AlertDialog component
        WHEN asChild props is NOT setted in AlertDialogTrigger
        SHOULD render a button`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: 'button[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to false in AlertDialogTrigger
        SHOULD render StyledAlertDialogTrigger`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger asChild={false}>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: 'button[data-state="closed"] button',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to true in AlertDialogTrigger
        SHOULD render the children component`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: 'button[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });
  });

  describe("Alert dialog action", () => {
    it(`GIVEN a AlertDialog component
        WHEN asChild props is NOT setted in AlertDialogAction
        SHOULD render a button`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <button>Action</button>
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      rendered.debug();

      const action = rendered.getByText("Action", {
        selector: "button",
      });
      expect(action).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to false in AlertDialogAction
        SHOULD render StyledAlertDialogAction`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild={false}>
              <button>Action</button>
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const action = rendered.getByText("Action", {
        selector: "button button",
      });
      expect(action).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to true in AlertDialogAction
        SHOULD render the children component`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <button>Action</button>
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const action = rendered.getByText("Action", {
        selector: "button",
      });
      expect(action).toBeVisible();
    });
  });

  describe("Alert dialog cancel", () => {
    it(`GIVEN a AlertDialog component
        WHEN asChild props is NOT setted in AlertDialogCancel
        SHOULD render a button`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel>
              <button>Cancel</button>
            </AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      rendered.debug();

      const cancel = rendered.getByText("Cancel", {
        selector: "button",
      });
      expect(cancel).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to false in AlertDialogCancel
        SHOULD render StyledAlertDialogAction`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel asChild={false}>
              <button>Cancel</button>
            </AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const cancel = rendered.getByText("Cancel", {
        selector: "button button",
      });
      expect(cancel).toBeVisible();
    });

    it(`GIVEN a AlertDialog component
        WHEN asChild props is setted to true in AlertDialogCancel
        SHOULD render the children component`, () => {
      const rendered = render(
        <AlertDialog>
          <AlertDialogTrigger>
            <button>Trigger</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Any Title</AlertDialogTitle>
            <AlertDialogDescription>Any Description</AlertDialogDescription>
            <AlertDialogCancel asChild>
              <button>Cancel</button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>Action</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      );

      const triggerButton = rendered.getByText("Trigger");
      userEvent.click(triggerButton);

      const cancel = rendered.getByText("Cancel", {
        selector: "button",
      });
      expect(cancel).toBeVisible();
    });
  });
});
