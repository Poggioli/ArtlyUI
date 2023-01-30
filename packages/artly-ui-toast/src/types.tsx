import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { StyledToastRoot, StyledToastViewport } from "./styles";

export type ToastProps = ToastPrimitives.ToastProps &
  ToastPrimitives.ToastViewportProps &
  ArtlyVariants<typeof StyledToastViewport> &
  ArtlyVariants<typeof StyledToastRoot> &
  HTMLArtlyProps<typeof StyledToastRoot>;

export type ToastProviderProps = ToastPrimitives.ToastProviderProps;

export type ToastTitleProps = ToastPrimitives.ToastTitleProps;

export type ToastDescriptionProps = ToastPrimitives.ToastDescriptionProps;

export type ToastActionProps = ToastPrimitives.ToastActionProps;

export type ToastCloseProps = ToastPrimitives.ToastCloseProps;
