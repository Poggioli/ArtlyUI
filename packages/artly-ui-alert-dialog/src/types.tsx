import * as AlertDialogPrimitives from "@radix-ui/react-alert-dialog";

export type AlertDialogProps = AlertDialogPrimitives.AlertDialogProps;

export type AlertDialogTriggerProps = AlertDialogPrimitives.AlertDialogProps;

export type AlertDialogCancelProps = AlertDialogPrimitives.AlertDialogProps;

export type AlertDialogActionProps = AlertDialogPrimitives.AlertDialogProps;

export type AlertDialogDescriptionProps =
  AlertDialogPrimitives.AlertDialogProps;

export type AlertDialogTitleProps = AlertDialogPrimitives.AlertDialogProps;

export type AlertDialogContentProps =
  AlertDialogPrimitives.AlertDialogPortalProps &
    AlertDialogPrimitives.AlertDialogContentProps &
    AlertDialogPrimitives.AlertDialogOverlayProps;
