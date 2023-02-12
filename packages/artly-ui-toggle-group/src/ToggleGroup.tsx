import { forwardRef } from "@artly-ui/core";
import { StyledToggleGroup } from "./styles";
import { ToggleGroupProps } from "./types";

const ToggleGroup = forwardRef<typeof StyledToggleGroup, ToggleGroupProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledToggleGroup {...props} ref={forwardedRef} />
  }
);

export { ToggleGroup };
