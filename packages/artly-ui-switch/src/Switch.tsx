import { forwardRef } from "@artly-ui/core";
import {
  StyledSwitchContainer,
  StyledSwitchLabel,
  StyledSwitchRoot,
  StyledSwitchThumb,
} from "./styles";
import { SwitchContainerProps, SwitchLabelProps, SwitchProps } from "./types";

// ------------------------------------------- Slider Container ------------------------------------------- //

const SwitchContainer = forwardRef<
  typeof StyledSwitchContainer,
  SwitchContainerProps
>(({ ...props }, forwardedRef) => {
  return <StyledSwitchContainer {...props} ref={forwardedRef} />;
});

// ------------------------------------------- Slider Label ------------------------------------------- //

const SwitchLabel = forwardRef<typeof StyledSwitchLabel, SwitchLabelProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSwitchLabel {...props} ref={forwardedRef} />;
  }
);

// ------------------------------------------- Slider Root ------------------------------------------- //

const Switch = forwardRef<typeof StyledSwitchRoot, SwitchProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <StyledSwitchRoot {...props} ref={forwardedRef}>
        <StyledSwitchThumb />
      </StyledSwitchRoot>
    );
  }
);

export { Switch, SwitchContainer, SwitchLabel };
