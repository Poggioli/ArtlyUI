import { forwardRef } from "@artly-ui/core";
import { CheckIcon } from "@radix-ui/react-icons";
import { useContext, useEffect } from "react";
import { CheckboxContext, CheckboxContextProvider } from "./context";
import {
  StyledCheckboxContainer,
  StyledCheckboxIndicator,
  StyledCheckboxLabel,
  StyledCheckboxRoot,
} from "./styles";
import {
  CheckboxContainerProps,
  CheckboxLabelProps,
  CheckboxProps,
} from "./types";

// ------------------------------------------- Checkbox Container ------------------------------------------- //

const CheckboxContainer = forwardRef<
  typeof StyledCheckboxContainer,
  CheckboxContainerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <CheckboxContextProvider>
      <StyledCheckboxContainer
        {...props}
        ref={forwardedRef}
        align="center"
        justify="space-between"
        gap="$3"
        wrap="nowrap"
      >
        {children}
      </StyledCheckboxContainer>
    </CheckboxContextProvider>
  );
});

// ------------------------------------------- Checkbox Label ------------------------------------------- //

const CheckboxLabel = forwardRef<
  typeof StyledCheckboxLabel,
  CheckboxLabelProps
>(({ ...props }, forwardedRef) => {
  const {
    state: { disabled },
  } = useContext(CheckboxContext);

  return (
    <StyledCheckboxLabel
      {...props}
      ref={forwardedRef}
      variant="body1"
      color={disabled ? "$gray-80" : props.color}
    />
  );
});

// ------------------------------------------- Checkbox Root ------------------------------------------- //

const Checkbox = forwardRef<typeof StyledCheckboxRoot, CheckboxProps>(
  ({ ...props }, forwardedRef) => {
    const { setState } = useContext(CheckboxContext);

    useEffect(() => {
      setState((previousState) => ({
        ...previousState,
        disabled: !!props.disabled,
      }));
    }, [props.disabled, setState]);

    return (
      <StyledCheckboxRoot {...props} ref={forwardedRef}>
        <StyledCheckboxIndicator>
          <CheckIcon width="$4" height="$4" />
        </StyledCheckboxIndicator>
      </StyledCheckboxRoot>
    );
  }
);

export { CheckboxContainer, Checkbox, CheckboxLabel };
