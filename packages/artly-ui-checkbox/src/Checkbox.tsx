import { forwardRef } from "@artly-ui/core";
import { StyledCheckbox } from "./styles";
import { CheckboxProps } from "./types";

const Checkbox = forwardRef<typeof StyledCheckbox, CheckboxProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledCheckbox {...props} ref={forwardedRef} />;
  }
);

export { Checkbox };
