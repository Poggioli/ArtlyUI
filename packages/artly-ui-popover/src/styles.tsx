import { keyframes, styled } from "@artly-ui/core";
import * as PopoverPrimitives from "@radix-ui/react-popover";

const slideUpAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideRightAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideDownAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideLeftAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const StyledPopoverContent = styled(PopoverPrimitives.Content, {
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  backgroundColor: "$popover--background",
  borderRadius: "$2",
  boxSizing: "border-box",
  $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
  boxShadow: "$$boxShadow",
  maxWidth: "calc($13 * 4)",
  minWidth: "$13",
  padding: "$6 $6 $4 $4",
  position: "relative",
  userSelect: "none",
  willChange: "transform, opacity",

  '&[data-state="open"]': {
    '&[data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '&[data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '&[data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '&[data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
});

const StyledPopoverArrow = styled(PopoverPrimitives.Arrow, {
  fill: "$popover--background",
});

const StyledPopoverClose = styled(PopoverPrimitives.Close, {});

const StyledPopoverTrigger = PopoverPrimitives.Trigger;

const StyledPopover = PopoverPrimitives.Root;

const StyledPopoverPortal = PopoverPrimitives.Portal;

const StyledPopoverAnchor = PopoverPrimitives.Anchor;

export {
  StyledPopoverContent,
  StyledPopoverArrow,
  StyledPopoverClose,
  StyledPopoverTrigger,
  StyledPopover,
  StyledPopoverPortal,
  StyledPopoverAnchor,
};
