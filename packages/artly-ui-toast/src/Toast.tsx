import { forwardRef } from "@artly-ui/core";
import { Heading } from "@artly-ui/heading";
import { Text } from "@artly-ui/text";
import * as ToastPrimitives from "@radix-ui/react-toast";
import {
  StyledToastDescription,
  StyledToastRoot,
  StyledToastTitle,
  StyledToastViewport,
} from "./styles";
import { ToastDescriptionProps, ToastProps, ToastTitleProps } from "./types";

// ------------------------------------------- Toast Title ------------------------------------------- //

const ToastTitle = forwardRef<typeof StyledToastTitle, ToastTitleProps>(
  ({ asChild, children, ...props }, forwardedRef) => {
    if (asChild === undefined) {
      return (
        <StyledToastTitle {...props} ref={forwardedRef} asChild>
          <Heading level={6} color="$text-high-contrast">
            {children}
          </Heading>
        </StyledToastTitle>
      );
    }

    return (
      <StyledToastTitle {...props} ref={forwardedRef} asChild={asChild}>
        {children}
      </StyledToastTitle>
    );
  }
);

// ------------------------------------------- Toast Description ------------------------------------------- //

const ToastDescription = forwardRef<
  typeof StyledToastDescription,
  ToastDescriptionProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledToastTitle {...props} ref={forwardedRef} asChild>
        <Text variant="body2" color="$text-low-contrast">
          {children}
        </Text>
      </StyledToastTitle>
    );
  }

  return (
    <StyledToastTitle {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledToastTitle>
  );
});

// ------------------------------------------- Toast Root ------------------------------------------- //

const Toast = forwardRef<typeof StyledToastRoot, ToastProps>(
  (
    {
      asChild,
      hotkey,
      label,
      children,
      custom,
      horizontal,
      vertical,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <>
        <StyledToastRoot
          {...props}
          ref={forwardedRef}
          horizontal={horizontal}
          vertical={vertical}
        >
          {children}
        </StyledToastRoot>
        <StyledToastViewport
          asChild={asChild}
          hotkey={hotkey}
          label={label}
          horizontal={horizontal}
          vertical={vertical}
        />
      </>
    );
  }
);

// ------------------------------------------- Toast Provider ------------------------------------------- //

const ToastProvider = ToastPrimitives.Provider;

// ------------------------------------------- Toast Action ------------------------------------------- //

const ToastAction = ToastPrimitives.Action;

// ------------------------------------------- Toast Close ------------------------------------------- //

const ToastClose = ToastPrimitives.Close;

export {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
};
