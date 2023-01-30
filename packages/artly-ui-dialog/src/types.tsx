import { FlexProps } from "@artly-ui/flex";
import * as DialogPrimitives from "@radix-ui/react-dialog";

export type DialogCloseProps = DialogPrimitives.DialogCloseProps;

export type DialogTitleProps = DialogPrimitives.DialogTitleProps;

export type DialogDescriptionProps = DialogPrimitives.DialogDescriptionProps;

export type DialogTriggerProps = DialogPrimitives.DialogTriggerProps;

export type DialogContentProps = DialogPrimitives.DialogContentProps &
  DialogPrimitives.DialogPortalProps &
  DialogPrimitives.DialogOverlayProps & {
    hasCloseIcon?: boolean;
    ariaLabelClose?: string;
  };

export type DialogProps = DialogPrimitives.DialogProps;

export type DialogActionContainerProps = FlexProps;
