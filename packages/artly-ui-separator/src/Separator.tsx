import { forwardRef } from "@artly-ui/core";
import { StyledSeparator } from "./styles";
import { SeparatorProps } from "./types";

const Separator = forwardRef<typeof StyledSeparator, SeparatorProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSeparator {...props} ref={forwardedRef} />;
  }
);

export { Separator };
