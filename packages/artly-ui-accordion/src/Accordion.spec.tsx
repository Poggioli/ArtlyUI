import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext, useState } from "react";
import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionHeader,
  AccordionHeaderTitle,
  AccordionItem,
} from "./Accordion";
import {
  AccordionContext,
  AccordionContextProvider,
  AccordionItemContext,
  AccordionItemContextProvider,
} from "./context";

const DumbComponent = () => {
  const [disableAccordion, setDisableAccordion] = useState(false);
  const [disableAccordionItem, setDisableAccordionItem] = useState(false);

  const handDisableAccordion = () => {
    setDisableAccordion((previousState) => !previousState);
  };

  const handDisableAccordionItem = () => {
    setDisableAccordionItem((previousState) => !previousState);
  };

  return (
    <>
      <button onClick={handDisableAccordion}>Disable accordion</button>
      <button onClick={handDisableAccordionItem}>Disable accordion item</button>
      <Accordion type="single" disabled={disableAccordion}>
        <AccordionItem value="item-1" disabled={disableAccordionItem}>
          <AccordionHeader>
            <AccordionHeaderTitle>Item 1 title</AccordionHeaderTitle>
            <AccordionChevron />
          </AccordionHeader>
          <AccordionContent>
            <p>Item 1 content</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

const DisableButtonItem = () => {
  const { setState } = useContext(AccordionItemContext);
  const [disabled, setDisabled] = useState(false);

  const handDisableAccordionItem = () => {
    setState((previousState) => ({
      ...previousState,
      disabled: !!disabled,
    }));

    setDisabled((previousState) => !previousState);
  };

  return (
    <button onClick={handDisableAccordionItem}>Disable accordion item</button>
  );
};

const DisableButtonAccordion = () => {
  const { setState } = useContext(AccordionContext);
  const [disabled, setDisabled] = useState(false);

  const handDisableAccordion = () => {
    setState((previousState) => ({
      ...previousState,
      disabled: !!disabled,
    }));

    setDisabled((previousState) => !previousState);
  };

  return <button onClick={handDisableAccordion}>Disable accordion</button>;
};

const DumbComponentDefaultValueProvider = () => {
  return (
    <>
      <AccordionContextProvider>
        <AccordionItemContextProvider>
          <p>test</p>
        </AccordionItemContextProvider>
        <DisableButtonItem />
      </AccordionContextProvider>
      <DisableButtonAccordion />
    </>
  );
};

describe("Data display component / Accordion", () => {
  describe("Disable accordion", () => {
    it(`GIVEN a Accordion component
        WHEN user disable accordion
        SHOULD disable the itens
        AND chevrons in item header`, () => {
      const rendered = render(<DumbComponent />);

      const buttonDisableAccordion = rendered.getByText("Disable accordion");
      userEvent.click(buttonDisableAccordion);

      const chevron = rendered.getByLabelText("Toggle accordion");
      expect(chevron).toBeDisabled();
    });

    it(`GIVEN a Accordion component
        WHEN user disable accordion item
        SHOULD disable that item
        AND chevron in item header`, () => {
      const rendered = render(<DumbComponent />);

      const buttonDisableAccordionItem = rendered.getByText(
        "Disable accordion item"
      );
      userEvent.click(buttonDisableAccordionItem);

      const chevron = rendered.getByLabelText("Toggle accordion");
      expect(chevron).toBeDisabled();
    });
  });

  describe("AccordionContextProvider", () => {
    it(`GIVEN some components using AccordionContextProvider
        WHEN these components are outside of this provider
        SHOULD use the default value`, () => {
      const rendered = render(<DumbComponentDefaultValueProvider />);

      const disableButton = rendered.getByText("Disable accordion");
      userEvent.click(disableButton);
    });

    it(`GIVEN some components using AccordionContextProvider
        WHEN these components are outside of this provider
        SHOULD use the default value`, () => {
      const rendered = render(<DumbComponentDefaultValueProvider />);

      const disableButton = rendered.getByText("Disable accordion item");
      userEvent.click(disableButton);
    });
  });
});
