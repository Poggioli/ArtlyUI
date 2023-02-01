import { forwardRef } from "@artly-ui/core";
import { StyledCollapsible } from "./styles";
import { CollapsibleProps } from "./types";

const Collapsible = forwardRef<typeof StyledCollapsible, CollapsibleProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledCollapsible {...props} ref={forwardedRef} />
  }
);

export { Collapsible };
