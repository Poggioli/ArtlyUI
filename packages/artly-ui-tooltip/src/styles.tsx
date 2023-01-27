import { keyframes, styled } from "@artly-ui/core";
import * as TooltipPrimitives from "@radix-ui/react-tooltip";

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

const StyledTooltipProvider = styled(TooltipPrimitives.Provider, {});

const StyledTooltipRoot = styled(TooltipPrimitives.Root, {});

const StyledTooltipTrigger = styled(TooltipPrimitives.Trigger, {});

const StyledTooltipPortal = styled(TooltipPrimitives.Portal, {});

const StyledTooltipContent = styled(TooltipPrimitives.Content, {
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  backgroundColor: "$tooltip--content--background",
  borderRadius: "$1",
  padding: "$3 $4 $3 $3",
  userSelect: "none",
  willChange: "transform, opacity",

  "&, *": {
    color: "$tooltip--content--text !important",
  },

  '&[data-state="delayed-open"]': {
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

const StyledTooltipArrow = styled(TooltipPrimitives.Arrow, {
  fill: "$tooltip--arrow-background",
});

export {
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger,
  StyledTooltipPortal,
  StyledTooltipContent,
  StyledTooltipArrow,
};
