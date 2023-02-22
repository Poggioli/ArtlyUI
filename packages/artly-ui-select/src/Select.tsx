import { Checkbox } from "@artly-ui/checkbox";
import { forwardRef } from "@artly-ui/core";
import { Text } from "@artly-ui/text";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import { SelectContext, SelectContextProvider } from "./context";
import {
  StyledFieldSet,
  StyledLegend,
  StyledLegendSpan,
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectLabel,
  StyledSelectPortal,
  StyledSelectRoot,
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewPort,
} from "./styles";
import {
  SelectContentProps,
  SelectGroupProps,
  SelectItemProps,
  SelectLabelProps,
  SelectPortalProps,
  SelectProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
} from "./types";

// ------------------------------------------- Select Group Label ------------------------------------------- //

const SelectGroupSeparator = forwardRef<
  typeof StyledSelectSeparator,
  SelectSeparatorProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectSeparator {...props} ref={forwardedRef} />;
});

// ------------------------------------------- Select Group Label ------------------------------------------- //

const SelectGroupLabel = forwardRef<typeof StyledSelectLabel, SelectLabelProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledSelectLabel {...props} ref={forwardedRef}>
        <Text variant="auxiliary" color="$text-low-contrast">
          {children}
        </Text>
      </StyledSelectLabel>
    );
  }
);

// ------------------------------------------- Select Group ------------------------------------------- //

const SelectGroup = forwardRef<typeof StyledSelectGroup, SelectGroupProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectGroup {...props} ref={forwardedRef} />;
  }
);

// ------------------------------------------- Select Root ------------------------------------------- //

const SelectRoot = forwardRef<typeof StyledSelectRoot, SelectProps>(
  (
    { color, value, shape, defaultValue, onValueChange, ...props },
    forwardedRef
  ) => {
    const [currentValue, setCurrentValue] = useState(value);
    const { setState } = useContext(SelectContext);

    useEffect(() => {
      setState((previousState) => ({
        ...previousState,
        color,
      }));
    }, [color, setState]);

    useEffect(() => {
      setState((previousState) => ({
        ...previousState,
        shape,
      }));
    }, [shape, setState]);

    const handleOnValueChange = (selectedValue: string) => {
      if (onValueChange) {
        onValueChange(selectedValue);
      }

      setCurrentValue(selectedValue);

      setState((previousState) => ({
        ...previousState,
        value: selectedValue,
      }));
    };

    return (
      <StyledSelectRoot
        {...props}
        ref={forwardedRef}
        value={currentValue}
        onValueChange={handleOnValueChange}
      />
    );
  }
);

// ------------------------------------------- Select Root Wrapper ------------------------------------------- //

const Select = forwardRef<typeof StyledSelectRoot, SelectProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectContextProvider>
        <SelectRoot {...props} ref={forwardedRef}>
          {children}
        </SelectRoot>
      </SelectContextProvider>
    );
  }
);

// ------------------------------------------- Select Content ------------------------------------------- //

const SelectContent = forwardRef<
  typeof StyledSelectContent,
  SelectContentProps & SelectPortalProps
>(({ container, children, ...props }, forwardedRef) => {
  return (
    <StyledSelectPortal container={container}>
      <StyledSelectContent {...props} ref={forwardedRef}>
        <StyledSelectScrollUpButton>
          <ChevronUpIcon />
        </StyledSelectScrollUpButton>
        <StyledSelectViewPort>{children}</StyledSelectViewPort>
        <StyledSelectScrollDownButton>
          <ChevronDownIcon />
        </StyledSelectScrollDownButton>
        <StyledSelectArrow />
      </StyledSelectContent>
    </StyledSelectPortal>
  );
});

// ------------------------------------------- Select Trigger ------------------------------------------- //

const SelectTrigger = forwardRef<
  typeof StyledSelectTrigger,
  SelectTriggerProps & SelectValueProps
>(({ placeholder, ...props }, forwardedRef) => {
  const {
    state: { color, shape, value },
  } = useContext(SelectContext);

  return (
    <StyledSelectTrigger
      {...props}
      ref={forwardedRef}
      color={color}
      shape={shape}
    >
      <StyledSelectValue
        placeholder={<Text variant="body1">{placeholder}</Text>}
      />
      <StyledSelectIcon>
        <ChevronDownIcon />
      </StyledSelectIcon>
      <StyledFieldSet shape={shape} aria-hidden>
        <StyledLegend hasValue={!!value}>
          <StyledLegendSpan variant="auxiliary">{placeholder}</StyledLegendSpan>
        </StyledLegend>
      </StyledFieldSet>
    </StyledSelectTrigger>
  );
});

// ------------------------------------------- Select Item ------------------------------------------- //

const SelectItem = forwardRef<typeof StyledSelectItem, SelectItemProps>(
  ({ children, value, ...props }, forwardedRef) => {
    const {
      state: { color },
    } = useContext(SelectContext);

    return (
      <StyledSelectItem
        {...props}
        ref={forwardedRef}
        value={value}
        color={color}
      >
        <StyledSelectItemIndicator>
          <Checkbox
            color={color}
            value={value}
            checked={true}
            defaultChecked={true}
            aria-hidden={true}
          />
        </StyledSelectItemIndicator>
        <StyledSelectItemText asChild>
          <Text variant="body1">{children}</Text>
        </StyledSelectItemText>
      </StyledSelectItem>
    );
  }
);

export {
  SelectItem,
  SelectTrigger,
  SelectContent,
  Select,
  SelectGroupSeparator,
  SelectGroupLabel,
  SelectGroup,
};
