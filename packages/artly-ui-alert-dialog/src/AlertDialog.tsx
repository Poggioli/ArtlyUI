import { forwardRef } from "@artly-ui/core";
import { StyledAlertDialog } from "./styles";
import { AlertDialogProps } from "./types";

const AlertDialog = forwardRef<typeof StyledAlertDialog, AlertDialogProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledAlertDialog {...props} ref={forwardedRef} />;
  }
);

export { AlertDialog };
