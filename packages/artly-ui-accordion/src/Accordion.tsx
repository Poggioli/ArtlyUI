import { Button } from "@artly-ui/button";
import { forwardRef } from "@artly-ui/core";
import { Heading } from "@artly-ui/heading";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useContext, useEffect } from "react";
import {
  AccordionContext,
  AccordionContextProvider,
  AccordionItemContext,
  AccordionItemContextProvider,
} from "./context";
import {
  StyledAccordionContent,
  StyledAccordionContentBox,
  StyledAccordionHeader,
  StyledAccordionItem,
  StyledAccordionRoot,
  StyledAccordionTrigger,
} from "./styles";
import {
  AccordionChevronProps,
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionHeaderTitleProps,
  AccordionItemProps,
  AccordionProps,
  AccordionTriggerProps,
} from "./types";

// ------------------------------------------- Accordion Root ------------------------------------------- //

const AccordionRoot = forwardRef<typeof StyledAccordionRoot, AccordionProps>(
  ({ children, disabled, ...props }, forwardedRef) => {
    const { setState } = useContext(AccordionContext);

    useEffect(() => {
      setState((previousState) => ({
        ...previousState,
        disabled: !!disabled,
      }));
    }, [disabled, setState]);

    return (
      <StyledAccordionRoot {...props} ref={forwardedRef} disabled={disabled}>
        {children}
      </StyledAccordionRoot>
    );
  }
);

// ------------------------------------------- Accordion Root Wrapper ------------------------------------------- //
const Accordion = forwardRef<typeof StyledAccordionRoot, AccordionProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <AccordionContextProvider>
        <AccordionRoot {...props} ref={forwardedRef}>
          {children}
        </AccordionRoot>
      </AccordionContextProvider>
    );
  }
);

// ------------------------------------------- Accordion Header ------------------------------------------- //

const AccordionHeader = forwardRef<
  typeof StyledAccordionHeader,
  AccordionHeaderProps
>(({ ...props }, forwardedRef) => {
  return <StyledAccordionHeader {...props} ref={forwardedRef} />;
});

// ------------------------------------------- Accordion Trigger ------------------------------------------- //

const AccordionTrigger = forwardRef<
  typeof StyledAccordionTrigger,
  AccordionTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledAccordionTrigger {...props} ref={forwardedRef} />;
});

// ------------------------------------------- Accordion Chevron ------------------------------------------- //

const AccordionChevron = forwardRef<typeof Button, AccordionChevronProps>(
  (
    { children, color = "unstyled", size = "small", ...props },
    forwardedRef
  ) => {
    const {
      state: { disabled: accordionDisabled },
    } = useContext(AccordionContext);
    const {
      state: { disabled: accordionItemDisabled },
    } = useContext(AccordionItemContext);

    return (
      <Button
        {...props}
        ref={forwardedRef}
        shape="icon"
        color={color}
        size={size}
        aria-hidden
        aria-label={props["aria-label"] ?? "Toggle accordion"}
        disabled={accordionDisabled || accordionItemDisabled}
        tabIndex={-1}
        className="accordion-chevron"
      >
        <ChevronDownIcon />
      </Button>
    );
  }
);

// ------------------------------------------- Accordion Header Title ------------------------------------------- //

const AccordionHeaderTitle = forwardRef<
  typeof Heading,
  AccordionHeaderTitleProps
>(({ level = 6, as = "h3", ...props }, forwardedRef) => {
  const {
    state: { disabled: accordionDisabled },
  } = useContext(AccordionContext);
  const {
    state: { disabled: accordionItemDisabled },
  } = useContext(AccordionItemContext);

  return (
    <Heading
      {...props}
      ref={forwardedRef}
      level={level}
      as={as}
      color={
        accordionDisabled || accordionItemDisabled ? "$gray-80" : props.color
      }
    />
  );
});

// ------------------------------------------- Accordion Content ------------------------------------------- //

const AccordionContent = forwardRef<
  typeof StyledAccordionContent,
  AccordionContentProps
>(({ padded, children, ...props }, forwardedRef) => {
  return (
    <StyledAccordionContent {...props} ref={forwardedRef}>
      <StyledAccordionContentBox padded={padded}>
        {children}
      </StyledAccordionContentBox>
    </StyledAccordionContent>
  );
});

// ------------------------------------------- Accordion Item ------------------------------------------- //

const AccordionItemRoot = forwardRef<
  typeof StyledAccordionItem,
  AccordionItemProps
>(({ children, disabled, ...props }, forwardedRef) => {
  const { setState } = useContext(AccordionItemContext);

  useEffect(() => {
    setState((previousState) => ({
      ...previousState,
      disabled: !!disabled,
    }));
  }, [disabled, setState]);

  return (
    <StyledAccordionItem {...props} ref={forwardedRef} disabled={disabled}>
      {children}
    </StyledAccordionItem>
  );
});

// ------------------------------------------- Accordion Item Wrapper ------------------------------------------- //

const AccordionItem = forwardRef<
  typeof StyledAccordionItem,
  AccordionItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <AccordionItemContextProvider>
      <AccordionItemRoot {...props} ref={forwardedRef}>
        {children}
      </AccordionItemRoot>
    </AccordionItemContextProvider>
  );
});

export {
  Accordion,
  AccordionHeader,
  AccordionTrigger,
  AccordionHeaderTitle,
  AccordionContent,
  AccordionItem,
  AccordionChevron,
};
