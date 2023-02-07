import { forwardRef } from "@artly-ui/core";
import { useContext, useEffect } from "react";
import { SwitchContext, SwitchContextProvider } from "./context";
import {
  StyledSwitchContainer,
  StyledSwitchLabel,
  StyledSwitchRoot,
  StyledSwitchThumb
} from "./styles";
import { SwitchContainerProps, SwitchLabelProps, SwitchProps } from "./types";

// ------------------------------------------- Slider Container ------------------------------------------- //

const SwitchContainer = forwardRef<
  typeof StyledSwitchContainer,
  SwitchContainerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <SwitchContextProvider>
      <StyledSwitchContainer {...props} ref={forwardedRef}>
        {children}
      </StyledSwitchContainer>
    </SwitchContextProvider>
  );
});

// ------------------------------------------- Slider Label ------------------------------------------- //

const SwitchLabel = forwardRef<typeof StyledSwitchLabel, SwitchLabelProps>(
  ({ ...props }, forwardedRef) => {
    const {
      state: { disabled },
    } = useContext(SwitchContext);

    return (
      <StyledSwitchLabel
        {...props}
        ref={forwardedRef}
        color={disabled ? "$gray-80" : props.color}
      />
    );
  }
);

// ------------------------------------------- Slider Root ------------------------------------------- //

const Switch = forwardRef<typeof StyledSwitchRoot, SwitchProps>(
  ({ disabled, ...props }, forwardedRef) => {
    const { setState } = useContext(SwitchContext);

    useEffect(() => {
      setState((previousState) => ({
        ...previousState,
        disabled: !!disabled,
      }));
    }, [disabled, setState]);

    return (
      <StyledSwitchRoot {...props} ref={forwardedRef} disabled={disabled}>
        <StyledSwitchThumb />
      </StyledSwitchRoot>
    );
  }
);

export { Switch, SwitchContainer, SwitchLabel };
