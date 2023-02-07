import { forwardRef } from "@artly-ui/core";
import { StyledSwitch } from "./styles";
import { SwitchProps } from "./types";

const Switch = forwardRef<typeof StyledSwitch, SwitchProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSwitch {...props} ref={forwardedRef} />;
  }
);

export { Switch };
