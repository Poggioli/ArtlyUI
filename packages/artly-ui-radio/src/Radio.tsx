import { forwardRef } from "@artly-ui/core";
import {
  StyledRadioGroupContainer,
  StyledRadioGroupIndicator,
  StyledRadioGroupItem,
  StyledRadioGroupLabel,
  StyledRadioGroupRoot,
} from "./styles";
import {
  RadioContainerProps,
  RadioItemProps,
  RadioLabelProps,
  RadioProps,
} from "./types";

// ------------------------------------------- RadioGroup Root ------------------------------------------- //

const Radio = forwardRef<typeof StyledRadioGroupRoot, RadioProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledRadioGroupRoot {...props} ref={forwardedRef}>
        {children}
      </StyledRadioGroupRoot>
    );
  }
);

// ------------------------------------------- Radio Item ------------------------------------------- //

const RadioItem = forwardRef<typeof StyledRadioGroupItem, RadioItemProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <StyledRadioGroupItem {...props} ref={forwardedRef}>
        <StyledRadioGroupIndicator />
      </StyledRadioGroupItem>
    );
  }
);

// ------------------------------------------- Radio Container ------------------------------------------- //

const RadioContainer = forwardRef<
  typeof StyledRadioGroupContainer,
  RadioContainerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledRadioGroupContainer
      {...props}
      ref={forwardedRef}
      align="center"
      justify="space-between"
      gap="$3"
      wrap="nowrap"
    >
      {children}
    </StyledRadioGroupContainer>
  );
});

// ------------------------------------------- Radio Label ------------------------------------------- //

const RadioLabel = forwardRef<typeof StyledRadioGroupLabel, RadioLabelProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <StyledRadioGroupLabel {...props} ref={forwardedRef} variant="body1" />
    );
  }
);

export { Radio, RadioItem, RadioContainer, RadioLabel };
