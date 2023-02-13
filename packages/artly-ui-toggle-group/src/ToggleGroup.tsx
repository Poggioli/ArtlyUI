import { forwardRef } from "@artly-ui/core";
import { Text } from "@artly-ui/text";
import { StyledToggleGroupItem, StyledToggleGroupRoot } from "./styles";
import { ToggleGroupItemProps, ToggleGroupProps } from "./types";

const ToggleGroup = forwardRef<typeof StyledToggleGroupRoot, ToggleGroupProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <StyledToggleGroupRoot
        {...props}
        ref={forwardedRef}
        aria-disabled={!!props.disabled}
      />
    );
  }
);

const ToggleGroupItem = forwardRef<
  typeof StyledToggleGroupItem,
  ToggleGroupItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledToggleGroupItem {...props} ref={forwardedRef}>
      <Text variant="body1">{children}</Text>
    </StyledToggleGroupItem>
  );
});

export { ToggleGroup, ToggleGroupItem };
