import { forwardRef } from "@artly-ui/core";
import { StyledAccordion } from "./styles";
import { AccordionProps } from "./types";

const Accordion = forwardRef<typeof StyledAccordion, AccordionProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledAccordion {...props} ref={forwardedRef} />;
  }
);

export { Accordion };
