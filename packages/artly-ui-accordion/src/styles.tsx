import { keyframes, styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import * as AccordionPrimitives from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "var(--radix-accordion-content-height)",
  },
});

const slideUp = keyframes({
  from: {
    height: "var(--radix-accordion-content-height)",
  },
  to: {
    height: 0,
  },
});

const rotateOpen = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(180deg)",
  },
});

const rotateClose = keyframes({
  from: {
    transform: "rotate(180deg)",
  },
  to: {
    transform: "rotate(0deg)",
  },
});

const StyledAccordionRoot = styled(AccordionPrimitives.Root, {
  borderRadius: "$2",
  boxSizing: "border-box",
  width: "100%",

  variants: {
    shaded: {
      true: {
        $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
        boxShadow: "$$boxShadow",
      },
    },
    bordered: {
      true: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "$accordion--border-color",
      },
    },
  },

  defaultVariants: {
    shaded: true,
    bordered: true,
  },
});

const StyledAccordionItem = styled(AccordionPrimitives.Item, {
  overflow: "hidden",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: "$accordion--item--border-color",

  "&:first-child": {
    borderTopLeftRadius: "$2",
    borderTopRightRadius: "$2",
  },

  "&:last-child": {
    borderBottomLeftRadius: "$2",
    borderBottomRightRadius: "$2",
    borderBottomWidth: 0,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: "$1",
  },
});

const StyledAccordionHeader = styled(AccordionPrimitives.Header, {
  all: "unset",
  display: "flex",
});

const StyledAccordionTrigger = styled(AccordionPrimitives.Trigger, {
  all: "unset",
  alignItems: "center",
  backgroundColor: "$accordion--trigger--background-color--normal",
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  gap: "$5",
  padding: "$3 $4 $3 $6",
  transition: "background-color 200ms linear, color 200ms linear",

  "&:hover:not([disabled])": {
    backgroundColor: "$accordion--trigger--background-color--hover",
  },

  "&:focus:not([disabled])": {
    backgroundColor: "$accordion--trigger--background-color--focus",
  },

  '&[data-state="open"]': {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "$accordion--item-trigger--border-color",

    '>button.accordion-chevron[aria-hidden="true"]': {
      transform: "rotate(180deg)",
      animation: `${rotateOpen} 400ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },

  '&[data-state="closed"]': {
    '>button.accordion-chevron[aria-hidden="true"]': {
      transform: "rotate(0deg)",
      animation: `${rotateClose} 400ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },
});

const StyledAccordionContent = styled(AccordionPrimitives.Content, {
  backgroundColor: "$accordion--content--background-color",
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledAccordionContentBox = styled(Flex, {
  variants: {
    padded: {
      true: {
        padding: "$4 $4 $4 $7",
      },
    },
  },

  defaultVariants: {
    padded: true,
  },
});

export {
  StyledAccordionRoot,
  StyledAccordionItem,
  StyledAccordionHeader,
  StyledAccordionTrigger,
  StyledAccordionContent,
  StyledAccordionContentBox,
};
