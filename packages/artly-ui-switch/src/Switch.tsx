import { forwardRef } from "@artly-ui/core";
import { useContext, useEffect } from "react";
import { SwitchContext, SwitchContextProvider } from "./context";
import {
  StyledSwitchContainer,
  StyledSwitchLabel,
  StyledSwitchRoot,
  StyledSwitchThumb,
} from "./styles";
import { SwitchContainerProps, SwitchLabelProps, SwitchProps } from "./types";

// ------------------------------------------- Switch Container ------------------------------------------- //

const SwitchContainer = forwardRef<
  typeof StyledSwitchContainer,
  SwitchContainerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <SwitchContextProvider>
      <StyledSwitchContainer
        {...props}
        ref={forwardedRef}
        align="center"
        justify="space-between"
        gap="$3"
        wrap="nowrap"
      >
        {children}
      </StyledSwitchContainer>
    </SwitchContextProvider>
  );
});

// ------------------------------------------- Switch Label ------------------------------------------- //

const SwitchLabel = forwardRef<typeof StyledSwitchLabel, SwitchLabelProps>(
  ({ ...props }, forwardedRef) => {
    const {
      state: { disabled },
    } = useContext(SwitchContext);

    return (
      <StyledSwitchLabel
        {...props}
        ref={forwardedRef}
        variant="body1"
        color={disabled ? "$gray-80" : props.color}
      />
    );
  }
);

// ------------------------------------------- Switch Root ------------------------------------------- //

const Switch = forwardRef<typeof StyledSwitchRoot, SwitchProps>(
  ({ disabled, color, ...props }, forwardedRef) => {
    const { setState } = useContext(SwitchContext);

    useEffect(() => {
      setState((previousState) => ({
        ...previousState,
        disabled: !!disabled,
      }));
    }, [disabled, setState]);

    return (
      <StyledSwitchRoot
        {...props}
        ref={forwardedRef}
        disabled={disabled}
        color={color}
      >
        <StyledSwitchThumb color={color} />
      </StyledSwitchRoot>
    );
  }
);

export { Switch, SwitchContainer, SwitchLabel };
