import { forwardRef } from "@artly-ui/core";
import { StyledDialog } from "./styles";
import { DialogProps } from "./types";

const Dialog = forwardRef<typeof StyledDialog, DialogProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledDialog {...props} ref={forwardedRef} />
  }
);

export { Dialog };
