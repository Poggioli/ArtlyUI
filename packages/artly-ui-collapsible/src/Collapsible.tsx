import { forwardRef } from "@artly-ui/core";
import {
  StyledCollapsibleContent,
  StyledCollapsibleRoot,
  StyledCollapsibleTrigger
} from "./styles";
import { CollapsibleTriggerProps } from "./types";

// ------------------------------------------- Collapsible Trigger ------------------------------------------- //

const CollapsibleTrigger = forwardRef<
  typeof StyledCollapsibleTrigger,
  CollapsibleTriggerProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledCollapsibleTrigger {...props} ref={forwardedRef} asChild>
        {children}
      </StyledCollapsibleTrigger>
    );
  }

  return (
    <StyledCollapsibleTrigger {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledCollapsibleTrigger>
  );
});

// ------------------------------------------- Collapsible Root ------------------------------------------- //

const Collapsible = StyledCollapsibleRoot;

// ------------------------------------------- Collapsible Content ------------------------------------------- //

const CollapsibleContent = StyledCollapsibleContent;

export { CollapsibleTrigger, Collapsible, CollapsibleContent };
