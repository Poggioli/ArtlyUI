import { forwardRef } from "@artly-ui/core";
import { Heading } from "@artly-ui/heading";
import { Text } from "@artly-ui/text";
import {
  StyledAlertDialogAction,
  StyledAlertDialogActionContainer,
  StyledAlertDialogCancel,
  StyledAlertDialogContent,
  StyledAlertDialogDescription,
  StyledAlertDialogOverlay,
  StyledAlertDialogPortal,
  StyledAlertDialogRoot,
  StyledAlertDialogTitle,
  StyledAlertDialogTrigger,
} from "./styles";
import {
  AlertDialogActionContainerProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
} from "./types";

// ------------------------------------------- Alert Dialog Title ------------------------------------------- //

const AlertDialogTitle = forwardRef<
  typeof StyledAlertDialogTitle,
  AlertDialogTitleProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledAlertDialogTitle {...props} ref={forwardedRef} asChild>
        <Heading level={5} color="$text-high-contrast" as="h2">
          {children}
        </Heading>
      </StyledAlertDialogTitle>
    );
  }

  return (
    <StyledAlertDialogTitle {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledAlertDialogTitle>
  );
});

// ------------------------------------------- Alert Dialog Description ------------------------------------------- //

const AlertDialogDescription = forwardRef<
  typeof StyledAlertDialogDescription,
  AlertDialogDescriptionProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledAlertDialogTitle {...props} ref={forwardedRef} asChild>
        <Text variant="body1" color="$text-low-contrast" as="p">
          {children}
        </Text>
      </StyledAlertDialogTitle>
    );
  }

  return (
    <StyledAlertDialogTitle {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledAlertDialogTitle>
  );
});

// ------------------------------------------- Alert Dialog Trigger ------------------------------------------- //

const AlertDialogTrigger = forwardRef<
  typeof StyledAlertDialogTrigger,
  AlertDialogTriggerProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledAlertDialogTrigger {...props} ref={forwardedRef} asChild>
        {children}
      </StyledAlertDialogTrigger>
    );
  }

  return (
    <StyledAlertDialogTrigger {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledAlertDialogTrigger>
  );
});

// ------------------------------------------- Alert Dialog Action ------------------------------------------- //

const AlertDialogAction = forwardRef<
  typeof StyledAlertDialogAction,
  AlertDialogActionProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledAlertDialogAction {...props} ref={forwardedRef} asChild>
        {children}
      </StyledAlertDialogAction>
    );
  }

  return (
    <StyledAlertDialogAction {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledAlertDialogAction>
  );
});

// ------------------------------------------- Alert Dialog Cancel ------------------------------------------- //

const AlertDialogCancel = forwardRef<
  typeof StyledAlertDialogCancel,
  AlertDialogCancelProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledAlertDialogCancel {...props} ref={forwardedRef} asChild>
        {children}
      </StyledAlertDialogCancel>
    );
  }

  return (
    <StyledAlertDialogCancel {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledAlertDialogCancel>
  );
});

// ------------------------------------------- Alert Dialog Content ------------------------------------------- //

const AlertDialogContent = forwardRef<
  typeof StyledAlertDialogContent,
  AlertDialogContentProps
>(({ children, forceMount, container, ...props }, forwardedRef) => {
  return (
    <StyledAlertDialogPortal forceMount={forceMount} container={container}>
      <StyledAlertDialogOverlay forceMount={forceMount}>
        <StyledAlertDialogContent
          {...props}
          ref={forwardedRef}
          forceMount={forceMount}
        >
          {children}
        </StyledAlertDialogContent>
      </StyledAlertDialogOverlay>
    </StyledAlertDialogPortal>
  );
});

// ------------------------------------------- Alert Dialog Root ------------------------------------------- //

const AlertDialog = StyledAlertDialogRoot;

// ------------------------------------------- Alert Dialog Action Container ------------------------------------------- //

const AlertDialogActionContainer = forwardRef<
  typeof StyledAlertDialogActionContainer,
  AlertDialogActionContainerProps
>(({ children, justify = "flex-end", gap = "$4", ...props }, forwardedRef) => {
  return (
    <StyledAlertDialogActionContainer
      {...props}
      justify={justify}
      gap={gap}
      ref={forwardedRef}
    >
      {children}
    </StyledAlertDialogActionContainer>
  );
});

export {
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialog,
  AlertDialogActionContainer,
};
