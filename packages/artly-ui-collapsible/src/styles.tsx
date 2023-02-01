import { keyframes, styled } from "@artly-ui/core";
import * as CollapsiblePrimitives from "@radix-ui/react-collapsible";

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "var(--radix-collapsible-content-height)",
  },
});

const slideUp = keyframes({
  from: {
    height: "var(--radix-collapsible-content-height)",
  },
  to: {
    height: 0,
  },
});

const StyledCollapsibleRoot = CollapsiblePrimitives.Root;

const StyledCollapsibleContent = styled(CollapsiblePrimitives.Content, {
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: `${slideDown} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledCollapsibleTrigger = CollapsiblePrimitives.Trigger;

export {
    StyledCollapsibleRoot,
    StyledCollapsibleContent,
    StyledCollapsibleTrigger,
};

