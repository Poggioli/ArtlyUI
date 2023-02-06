import { keyframes, styled } from "@artly-ui/core";
import * as HoverCardPrimitives from "@radix-ui/react-hover-card";

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

const StyledHoverCardRoot = styled(HoverCardPrimitives.Root, {});

const StyledHoverCardTrigger = styled(HoverCardPrimitives.Trigger, {});

const StyledHoverCardPortal = styled(HoverCardPrimitives.Portal, {});

const StyledHoverCardContent = styled(HoverCardPrimitives.Content, {
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)",
  backgroundColor: "$hover-card--background",
  borderRadius: "$2",
  $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
  boxShadow: "$$boxShadow",
  maxWidth: "calc($13 * 2.5)",
  padding: "$4",
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

const StyledHoverCardArrow = styled(HoverCardPrimitives.Arrow, {
  fill: "$hover-card--arrow--background",
});

export {
  StyledHoverCardRoot,
  StyledHoverCardTrigger,
  StyledHoverCardPortal,
  StyledHoverCardContent,
  StyledHoverCardArrow,
};
