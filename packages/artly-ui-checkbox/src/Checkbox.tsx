import { forwardRef } from "@artly-ui/core";
import { CheckIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  CheckboxContext,
  CheckboxContextProvider,
  CheckboxGroupContext,
  CheckboxGroupContextProvider,
} from "./context";
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
  (
    { disabled, checked, value, color, onCheckedChange, ...props },
    forwardedRef
  ) => {
    const [isCheckedState, setIsCheckedState] = useState(checked);
    const { setState } = useContext(CheckboxContext);
    const {
      state: {
        disabled: disabledGroup,
        value: checkedsValue,
        onChangeValue,
        color: colorGroup,
      },
    } = useContext(CheckboxGroupContext);

    const variantColor = useMemo(
      () => color ?? colorGroup,
      [color, colorGroup]
    );

    const isChecked = useMemo(() => {
      return (
        isCheckedState ||
        checkedsValue.some((checkedValue) => checkedValue === value)
      );
    }, [checkedsValue, isCheckedState, value]);

    const isDisabled = useMemo(
      () => disabledGroup || !!disabled,
      [disabledGroup, disabled]
    );

    const handleOnCheckedChange = (valueChange: boolean | "indeterminate") => {
      if (onCheckedChange) {
        onCheckedChange(valueChange);
      }

      setIsCheckedState(!!valueChange);

      if (valueChange) {
        onChangeValue([...checkedsValue, value]);
      } else {
        onChangeValue(
          checkedsValue.filter((checkedValue) => checkedValue !== value)
        );
      }
    };

    useEffect(() => {
      setState((previousState) => ({
        ...previousState,
        disabled: !!isDisabled,
      }));
    }, [isDisabled, setState]);

    return (
      <StyledCheckboxRoot
        {...props}
        ref={forwardedRef}
        disabled={isDisabled}
        checked={isChecked}
        value={value}
        color={variantColor}
        onCheckedChange={handleOnCheckedChange}
      >
        <StyledCheckboxIndicator>
          <CheckIcon width="16" height="16" />
        </StyledCheckboxIndicator>
      </StyledCheckboxRoot>
    );
  }
);

// ------------------------------------------- Checkbox Group Provider ------------------------------------------- //

const CheckboxGroup = CheckboxGroupContextProvider;

export { CheckboxContainer, Checkbox, CheckboxLabel, CheckboxGroup };
