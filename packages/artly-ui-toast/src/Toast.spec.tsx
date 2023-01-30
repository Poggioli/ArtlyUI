import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FC, useState } from "react";
import { Toast, ToastDescription, ToastProvider, ToastTitle } from "./Toast";

describe("Data display component / Toast", () => {
  describe("Toast title", () => {
    it(`GIVEN a Toast component
        WHEN asChild props is not setted in ToastTitle
        SHOULD render an h6`, () => {
      const ToastComp: FC = () => {
        const [open, setOpen] = useState(false);

        return (
          <ToastProvider>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              Add to calendar
            </button>
            <Toast open={open} onOpenChange={setOpen}>
              <ToastTitle>Any title</ToastTitle>
              <ToastDescription>Any description</ToastDescription>
            </Toast>
          </ToastProvider>
        );
      };

      const rendered = render(<ToastComp />);
      const openButton = rendered.getByText("Add to calendar");
      userEvent.click(openButton);

      const title = rendered.getByText("Any title", {
        selector: "h6.artly-UI-c-emYHtM-jMHAbT-level-6",
      });

      expect(title).toBeVisible();
    });

    it(`GIVEN a Toast component
        WHEN asChild props is setted to false in ToastTitle
        SHOULD render StyledToastTitle`, () => {
      const ToastComp: FC = () => {
        const [open, setOpen] = useState(false);

        return (
          <ToastProvider>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              Add to calendar
            </button>
            <Toast open={open} onOpenChange={setOpen}>
              <ToastTitle asChild={false}>
                <h1>Any title</h1>
              </ToastTitle>
              <ToastDescription>Any description</ToastDescription>
            </Toast>
          </ToastProvider>
        );
      };

      const rendered = render(<ToastComp />);
      const openButton = rendered.getByText("Add to calendar");
      userEvent.click(openButton);

      const title = rendered.getByText("Any title", {
        selector: "div.artly-UI-c-PJLV h1",
      });

      expect(title).toBeVisible();
    });

    it(`GIVEN a Toast component
        WHEN asChild props is setted to true in ToastTitle
        SHOULD render the children component`, () => {
      const ToastComp: FC = () => {
        const [open, setOpen] = useState(false);

        return (
          <ToastProvider>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              Add to calendar
            </button>
            <Toast open={open} onOpenChange={setOpen}>
              <ToastTitle asChild>
                <h1>Any title</h1>
              </ToastTitle>
              <ToastDescription>Any description</ToastDescription>
            </Toast>
          </ToastProvider>
        );
      };

      const rendered = render(<ToastComp />);
      const openButton = rendered.getByText("Add to calendar");
      userEvent.click(openButton);

      const title = rendered.getByText("Any title", {
        selector: "h1.artly-UI-c-PJLV",
      });

      expect(title).toBeVisible();
    });
  });

  describe("Toast description", () => {
    it(`GIVEN a Toast component
        WHEN asChild props is not setted in ToastDescription
        SHOULD render an span`, () => {
      const ToastComp: FC = () => {
        const [open, setOpen] = useState(false);

        return (
          <ToastProvider>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              Add to calendar
            </button>
            <Toast open={open} onOpenChange={setOpen}>
              <ToastTitle asChild={false}>Any title</ToastTitle>
              <ToastDescription>Any description</ToastDescription>
            </Toast>
          </ToastProvider>
        );
      };

      const rendered = render(<ToastComp />);
      const openButton = rendered.getByText("Add to calendar");
      userEvent.click(openButton);

      const title = rendered.getByText("Any description", {
        selector: "span.artly-UI-c-chWhuJ-bkzKcy-variant-body2",
      });

      expect(title).toBeVisible();
    });

    it(`GIVEN a Toast component
        WHEN asChild props is setted to false in ToastDescription
        SHOULD render StyledToastDescription`, () => {
      const ToastComp: FC = () => {
        const [open, setOpen] = useState(false);

        return (
          <ToastProvider>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              Add to calendar
            </button>
            <Toast open={open} onOpenChange={setOpen}>
              <ToastTitle asChild={false}>Any title</ToastTitle>
              <ToastDescription asChild={false}>
                <p>Any description</p>
              </ToastDescription>
            </Toast>
          </ToastProvider>
        );
      };

      const rendered = render(<ToastComp />);
      const openButton = rendered.getByText("Add to calendar");
      userEvent.click(openButton);

      const title = rendered.getByText("Any description", {
        selector: "div.artly-UI-c-PJLV p",
      });

      expect(title).toBeVisible();
    });

    it(`GIVEN a Toast component
        WHEN asChild props is setted to true in ToastDescription
        SHOULD render the children component`, () => {
      const ToastComp: FC = () => {
        const [open, setOpen] = useState(false);

        return (
          <ToastProvider>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              Add to calendar
            </button>
            <Toast open={open} onOpenChange={setOpen}>
              <ToastTitle asChild={true}>Any title</ToastTitle>
              <ToastDescription asChild>
                <p>Any description</p>
              </ToastDescription>
            </Toast>
          </ToastProvider>
        );
      };

      const rendered = render(<ToastComp />);
      const openButton = rendered.getByText("Add to calendar");
      userEvent.click(openButton);

      const title = rendered.getByText("Any description", {
        selector: "p.artly-UI-c-PJLV",
      });

      expect(title).toBeVisible();
    });
  });
});
