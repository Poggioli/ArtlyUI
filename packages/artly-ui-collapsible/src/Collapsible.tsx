import { forwardRef } from "@artly-ui/core";
import {
  StyledCollapsibleContent,
  StyledCollapsibleRoot,
  StyledCollapsibleTrigger,
} from "./styles";
import {
  CollapsibleContentProps,
  CollapsibleProps,
  CollapsibleTriggerProps,
} from "./types";

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

const Collapsible = forwardRef<typeof StyledCollapsibleRoot, CollapsibleProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledCollapsibleRoot {...props} ref={forwardedRef}>
        {children}
      </StyledCollapsibleRoot>
    );
  }
);

// ------------------------------------------- Collapsible Content ------------------------------------------- //

const CollapsibleContent = forwardRef<
  typeof StyledCollapsibleContent,
  CollapsibleContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledCollapsibleContent {...props} ref={forwardedRef}>
      {children}
    </StyledCollapsibleContent>
  );
});

export { CollapsibleTrigger, Collapsible, CollapsibleContent };
