import { forwardRef } from "@artly-ui/core";
import { StyledPopover } from "./styles";
import { PopoverProps } from "./types";

const Popover = forwardRef<typeof StyledPopover, PopoverProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledPopover {...props} ref={forwardedRef} />;
  }
);

export { Popover };
